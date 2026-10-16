import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type PartKey = "crown" | "abutment" | "screw" | "fixture";

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

  /* Materials */
  const titanium = new THREE.MeshStandardMaterial({ color: 0xb9c3cd, metalness: 1, roughness: 0.32, emissive: 0x178ac1, emissiveIntensity: 0 });
  const titaniumDark = new THREE.MeshStandardMaterial({ color: 0x55606c, metalness: 1, roughness: 0.5, side: THREE.DoubleSide });
  const abutMat = new THREE.MeshStandardMaterial({ color: 0xdfe4ea, metalness: 1, roughness: 0.16, emissive: 0x178ac1, emissiveIntensity: 0 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xe0b44c, metalness: 1, roughness: 0.25, emissive: 0x178ac1, emissiveIntensity: 0 });
  const ceramic = new THREE.MeshPhysicalMaterial({
    color: 0xf8f4ec,
    roughness: 0.3,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    sheen: 0.4,
    sheenColor: new THREE.Color(0xdbeefa),
    emissive: 0x178ac1,
    emissiveIntensity: 0,
  });

  /* Fixture (implant body) */
  const fixture = new THREE.Group();
  const FX_MIN = -2.3;
  fixture.add(
    new THREE.Mesh(
      helicalBody({
        yMin: FX_MIN,
        yMax: 0,
        pitch: 0.17,
        rows: 260,
        radius: (y) => {
          let r = lerp(0.29, 0.39, smooth(FX_MIN, -1.1, y));
          if (y > -0.34) r = lerp(r, 0.43, smooth(-0.34, -0.26, y));
          const apex = FX_MIN + 0.2;
          if (y < apex) r *= Math.sqrt(Math.max(0, 1 - ((apex - y) / 0.2) ** 2));
          return r;
        },
        depth: (y) => 0.085 * smooth(FX_MIN + 0.04, FX_MIN + 0.3, y) * (1 - smooth(-0.44, -0.32, y)),
      }),
      titanium
    )
  );
  const top = new THREE.Mesh(new THREE.RingGeometry(0.19, 0.43, 72), titanium);
  top.rotation.x = -Math.PI / 2;
  const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.72, 6, 1, true), titaniumDark);
  socket.position.y = -0.36;
  const socketFloor = new THREE.Mesh(new THREE.CircleGeometry(0.19, 6), titaniumDark);
  socketFloor.rotation.x = -Math.PI / 2;
  socketFloor.position.y = -0.72;
  fixture.add(top, socket, socketFloor);

  /* Abutment */
  const abutment = new THREE.Group();
  abutment.add(
    new THREE.Mesh(
      crispLathe([
        [0.11, 0],
        [0.36, 0],
        [0.44, 0.12],
        [0.46, 0.2],
        [0.41, 0.25],
        [0.33, 0.3],
        [0.27, 0.95],
        [0.235, 1.0],
        [0.13, 1.0],
        [0.13, 0.4],
        [0.11, 0.38],
        [0.11, 0],
      ]),
      abutMat
    )
  );
  const hex = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.32, 6), abutMat);
  hex.position.y = -0.16;
  abutment.add(hex);

  /* Prosthetic screw */
  const screw = new THREE.Group();
  screw.add(
    new THREE.Mesh(
      helicalBody({
        yMin: -0.62,
        yMax: 0.4,
        pitch: 0.06,
        rows: 220,
        cols: 64,
        radius: (y) => {
          let r = y > -0.05 ? 0.075 : 0.062;
          if (y < -0.56) r *= Math.sqrt(Math.max(0, 1 - ((-0.56 - y) / 0.06) ** 2));
          return r;
        },
        depth: (y) => 0.024 * smooth(-0.6, -0.5, y) * (1 - smooth(-0.12, -0.05, y)),
      }),
      gold
    )
  );
  const head = new THREE.Mesh(
    crispLathe([
      [0.07, 0.4],
      [0.118, 0.4],
      [0.122, 0.5],
      [0.1, 0.525],
      [0.05, 0.525],
      [0.05, 0.47],
      [0, 0.47],
    ], 48),
    gold
  );
  screw.add(head);

  /* Crown */
  const crown = new THREE.Mesh(crownGeometry(), ceramic);

  const model = new THREE.Group();
  model.add(fixture, abutment, screw, crown);
  const pivot = new THREE.Group();
  pivot.add(model);
  scene.add(pivot);

  const parts: Record<PartKey, { obj: THREE.Object3D; mat: THREE.MeshStandardMaterial; center: number }> = {
    crown: { obj: crown, mat: ceramic, center: 0.9 },
    abutment: { obj: abutment, mat: abutMat, center: 0.55 },
    screw: { obj: screw, mat: gold, center: 0.1 },
    fixture: { obj: fixture, mat: titanium, center: -1.15 },
  };

  /* State */
  let target = 0;
  let current = 0;
  let active: PartKey | null = null;
  let running = false;
  let raf = 0;
  let w = 1, h = 1;
  const clock = new THREE.Clock();
  const tmp = new THREE.Vector3();
  let onFrame: ((screen: Record<PartKey, { x: number; y: number; e: number }>) => void) | null = null;

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

    const e1 = smooth(0.1, 0.3, p);
    const e2 = smooth(0.28, 0.48, p);
    const e3 = smooth(0.44, 0.62, p);
    const e4 = smooth(0.6, 0.78, p);
    const ex = Math.max(e1, e2, e3, e4);

    crown.position.set(e1 * 0.25, e1 * 3.7, 0);
    abutment.position.set(e2 * 0.08, e2 * 0.95, 0);
    screw.position.set(e2 * 0.08 + e3 * 0.14, e2 * 0.95 + e3 * 1.75, 0);
    screw.rotation.y = e3 * Math.PI * 6; // unscrews as it rises
    fixture.position.set(-e4 * 0.12, -e4 * 0.7, 0);

    // Whole model: slow spin + scroll spin, gentle diagonal tilt when exploded
    pivot.rotation.y = p * Math.PI * 2.2 + t * 0.18;
    pivot.rotation.x = 0.16 + Math.sin(t * 0.6) * 0.03;
    pivot.rotation.z = -0.14 * ex;
    pivot.position.y = Math.sin(t * 1.1) * 0.05;

    // Frame the camera on whatever is visible
    const portrait = w / h < 0.9;
    const cy = lerp(-0.3, 1.05, ex);
    const span = lerp(5.6, 9.8, ex) * (portrait ? 1.08 : 1);
    const fitH = span / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    const fitW = (span * 0.42) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
    const dist = Math.max(fitH, fitW);
    camera.position.set(0, cy + 0.6, dist);
    camera.lookAt(0, cy, 0);

    // Highlight active part
    (Object.keys(parts) as PartKey[]).forEach((k) => {
      const m = parts[k].mat;
      const goal = active === k ? 0.22 + Math.sin(t * 3) * 0.06 : 0;
      m.emissiveIntensity += (goal - m.emissiveIntensity) * 0.12;
    });

    renderer.render(scene, camera);

    if (onFrame) {
      const out = {} as Record<PartKey, { x: number; y: number; e: number }>;
      const es: Record<PartKey, number> = { crown: e1, abutment: e2, screw: e3, fixture: e4 };
      (Object.keys(parts) as PartKey[]).forEach((k) => {
        const part = parts[k];
        tmp.set(0, part.center, 0);
        part.obj.localToWorld(tmp);
        tmp.project(camera);
        out[k] = { x: (tmp.x * 0.5 + 0.5) * w, y: (-tmp.y * 0.5 + 0.5) * h, e: es[k] };
      });
      onFrame(out);
    }

    if (running) raf = requestAnimationFrame(frame);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  return {
    setProgress(v: number) {
      target = v;
    },
    setActive(k: PartKey | null) {
      active = k;
    },
    onFrame(cb: typeof onFrame) {
      onFrame = cb;
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
