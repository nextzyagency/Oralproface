import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ---------------------------------------------------------------- geometry */

/** Surface of revolution with a true helical thread. */
function helicalBody(opts: {
  yMin: number;
  yMax: number;
  radius: (y: number) => number;
  depth: (y: number) => number;
  pitch: number;
  rows: number;
  cols?: number;
}) {
  const { yMin, yMax, radius, depth, pitch, rows } = opts;
  const cols = opts.cols ?? 96;
  const pos: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= rows; i++) {
    const y = lerp(yMin, yMax, i / rows);
    const base = radius(y);
    const d = depth(y);
    for (let j = 0; j <= cols; j++) {
      const th = (j / cols) * Math.PI * 2;
      const phase = y / pitch + th / (Math.PI * 2);
      const tri = 1 - Math.abs(2 * (phase - Math.floor(phase)) - 1);
      const r = base + d * smooth(0.1, 0.9, tri);
      pos.push(Math.cos(th) * r, y, Math.sin(th) * r);
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const a = i * (cols + 1) + j;
      const b = a + cols + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  // Weld seam normals
  const n = g.attributes.normal as THREE.BufferAttribute;
  for (let i = 0; i <= rows; i++) {
    const a = i * (cols + 1);
    const b = a + cols;
    const nx = n.getX(a) + n.getX(b), ny = n.getY(a) + n.getY(b), nz = n.getZ(a) + n.getZ(b);
    const l = Math.hypot(nx, ny, nz) || 1;
    n.setXYZ(a, nx / l, ny / l, nz / l);
    n.setXYZ(b, nx / l, ny / l, nz / l);
  }
  return g;
}

/** Lathe with tightened corners so hard edges stay crisp. */
function crispLathe(pts: [number, number][], segments = 96) {
  const out: THREE.Vector2[] = [];
  const e = 0.004;
  pts.forEach(([r, y], i) => {
    const p = new THREE.Vector2(r, y);
    if (i === 0 || i === pts.length - 1) return out.push(p);
    const prev = new THREE.Vector2(...pts[i - 1]);
    const next = new THREE.Vector2(...pts[i + 1]);
    out.push(p.clone().add(prev.clone().sub(p).setLength(e)));
    out.push(p.clone().add(next.clone().sub(p).setLength(e)));
  });
  return new THREE.LatheGeometry(out, segments);
}

function crownGeometry() {
  const g = new THREE.SphereGeometry(1, 128, 96);
  const p = g.attributes.position as THREE.BufferAttribute;
  const cusps = [
    [0.27, 0.22],
    [-0.27, 0.22],
    [0.27, -0.22],
    [-0.27, -0.22],
    [0, 0.3],
  ];
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    // Box-ish molar silhouette
    x = Math.sign(x) * Math.pow(Math.abs(x), 0.72);
    z = Math.sign(z) * Math.pow(Math.abs(z), 0.72);
    const yf = y > 0 ? Math.pow(y, 0.55) : y; // flatter occlusal table
    const neck = lerp(0.74, 1, smooth(-1, -0.05, y));
    const X = x * 0.6 * neck;
    const Z = z * 0.54 * neck;
    let Y = 0.86 + yf * 0.6;
    if (y > 0.25) {
      const k = smooth(0.25, 0.85, y);
      let h = 0;
      for (const [cx, cz] of cusps) h += Math.exp(-((X - cx) ** 2 + (Z - cz) ** 2) / 0.026);
      const fissure = Math.exp(-(X * X) / 0.006) * Math.exp(-(Z * Z) / 0.12) + Math.exp(-(Z * Z) / 0.004) * Math.exp(-(X * X) / 0.15);
      Y += k * (Math.min(h, 1.2) * 0.13 - fissure * 0.07);
    }
    p.setXYZ(i, X, Y, Z);
  }
  g.computeVertexNormals();
  return g;
}

/* ------------------------------------------------------------------- scene */

/** One-piece titanium implant (threaded body, polished collar, integrated abutment) with a ceramic crown. */
export function createImplantScene(container: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.appendChild(renderer.domElement);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

  // Lights: key + brand-colored rims
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(4, 6, 6);
  const rimBlue = new THREE.DirectionalLight(0x4fb3e0, 2.4);
  rimBlue.position.set(-6, 2, -4);
  const rimLime = new THREE.DirectionalLight(0xa6d608, 1.4);
  rimLime.position.set(6, -3, -5);
  scene.add(key, rimBlue, rimLime, new THREE.AmbientLight(0xffffff, 0.25));

  /* Materials: sandblasted body, polished collar/abutment */
  const titanium = new THREE.MeshStandardMaterial({ color: 0xb9c3cd, metalness: 1, roughness: 0.36 });
  const polished = new THREE.MeshStandardMaterial({ color: 0xdfe4ea, metalness: 1, roughness: 0.14 });

  const implant = new THREE.Group();

  // Threaded body
  const Y_MIN = -2.3;
  implant.add(
    new THREE.Mesh(
      helicalBody({
        yMin: Y_MIN,
        yMax: 0,
        pitch: 0.17,
        rows: 260,
        radius: (y) => {
          let r = lerp(0.29, 0.39, smooth(Y_MIN, -1.1, y));
          if (y > -0.34) r = lerp(r, 0.43, smooth(-0.34, -0.26, y));
          const apex = Y_MIN + 0.2;
          if (y < apex) r *= Math.sqrt(Math.max(0, 1 - ((apex - y) / 0.2) ** 2));
          return r;
        },
        depth: (y) => 0.085 * smooth(Y_MIN + 0.04, Y_MIN + 0.3, y) * (1 - smooth(-0.44, -0.32, y)),
      }),
      titanium
    )
  );

  // Transmucosal collar + integrated abutment (same piece)
  implant.add(
    new THREE.Mesh(
      crispLathe([
        [0.43, 0],
        [0.45, 0.14],
        [0.47, 0.3],
        [0.44, 0.36],
        [0.33, 0.4],
        [0.31, 0.62],
        [0.29, 0.66],
        [0.3, 0.7],
        [0.29, 0.9],
        [0.27, 0.94],
        [0.28, 0.98],
        [0.26, 1.18],
        [0.22, 1.26],
        [0, 1.28],
      ]),
      polished
    )
  );

  // Ceramic crown seated on the abutment shoulder
  const ceramic = new THREE.MeshPhysicalMaterial({
    color: 0xf8f4ec,
    roughness: 0.3,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    sheen: 0.4,
    sheenColor: new THREE.Color(0xdbeefa),
  });
  const crown = new THREE.Mesh(crownGeometry(), ceramic);
  const CROWN_SEAT = 0.14;
  crown.position.y = CROWN_SEAT;
  implant.add(crown);

  const pivot = new THREE.Group();
  pivot.add(implant);
  scene.add(pivot);

  /* State */
  let target = 0;
  let current = 0;
  let running = false;
  let raf = 0;
  let w = 1, h = 1;
  const clock = new THREE.Clock();
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));

  function resize() {
    w = container.clientWidth || 1;
    h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function frame() {
    const t = clock.getElapsedTime();
    current += (target - current) * 0.09;
    const p = current;

    // Scroll beats (5 steps): tilted → upright → threads close-up → crown lifts to show abutment → screwing in
    const upright = smooth(0.12, 0.3, p);
    const zThreads = smooth(0.34, 0.46, p) * (1 - smooth(0.54, 0.66, p));
    const zHead = smooth(0.54, 0.66, p) * (1 - smooth(0.74, 0.86, p));
    const sink = smooth(0.82, 1, p);

    const lift = smooth(0.56, 0.68, p) * (1 - smooth(0.76, 0.88, p));
    crown.position.y = CROWN_SEAT + lift * 1.1;
    crown.rotation.y = lift * 0.6;

    // Spins with the scroll like it is being screwed in, plus a slow idle turn
    pivot.rotation.y = p * Math.PI * 4 + t * 0.18;
    pivot.rotation.z = lerp(-0.55, 0, upright);
    pivot.rotation.x = 0.16 + Math.sin(t * 0.6) * 0.03;
    pivot.position.y = Math.sin(t * 1.1) * 0.04 - sink * 0.5;

    // Camera framing
    const portrait = w / h < 0.9;
    let cy = -0.3 - sink * 0.25;
    let span = 5.0;
    cy = lerp(cy, -1.2, zThreads);
    span = lerp(span, 2.3, zThreads);
    cy = lerp(cy, 1.2, zHead);
    span = lerp(span, 3.3, zHead);
    span *= portrait ? 1.08 : 1;
    const fitH = span / (2 * tanHalf);
    const fitW = (span * 0.42) / (2 * tanHalf * camera.aspect);
    const dist = Math.max(fitH, fitW);
    camera.position.set(0, cy + 0.6, dist);
    camera.lookAt(0, cy, 0);

    renderer.render(scene, camera);
    if (running) raf = requestAnimationFrame(frame);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  return {
    setProgress(v: number) {
      target = v;
    },
    start() {
      if (running) return;
      running = true;
      clock.start();
      raf = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
    },
    renderOnce() {
      frame();
    },
  };
}
