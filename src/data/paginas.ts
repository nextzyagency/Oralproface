import { precioTexto } from "./site";

export type Tabla = { cols: string[]; filas: string[][]; destacar?: number };
export type Seccion = {
  h2: string;
  p?: string[];
  lista?: string[];
  pasos?: string[];
  tabla?: Tabla;
  despues?: string[];
  enlace?: { href: string; label: string };
};
export type Faq = { q: string; a: string };
export type Dato = { k: string; v: string; href?: string };

export type Pagina = {
  slug: string;
  tipo: "tratamiento" | "sede";
  nav: string;
  resumen: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  imagen: string;
  imagenAlt: string;
  ficha: Dato[];
  actualizado: string;
  secciones: Seccion[];
  faqs: Faq[];
  sede?: number;
  procedimiento?: string;
};

const WA = "https://wa.me/573008990189";
const sedesFicha: Dato = { k: "Sedes", v: "Barranquilla y Bogotá" };
const valoracionFicha: Dato = { k: "Valoración", v: "Tomografía 3D, presencial u online" };

const pasosTratamiento = [
  "Valoración presencial u online por videollamada, donde revisamos tu historia y lo que esperas del tratamiento.",
  "Tomografía 3D para medir el hueso disponible y planificar en digital la posición de cada implante.",
  "Presupuesto exacto del tratamiento completo, antes de programar la cirugía.",
  "Cirugía con anestesia y técnica mínimamente invasiva.",
  "Instalación de los dientes fijos en unas 72 horas, en los casos indicados con carga inmediata.",
  "Controles de seguimiento para revisar la cicatrización y el ajuste de la prótesis.",
];

const tablaValoracion: Tabla = {
  cols: ["", "Valoración presencial", "Valoración online"],
  filas: [
    ["Dónde", "En la sede, con el especialista", "Por videollamada, desde tu casa"],
    ["Tomografía 3D", "Sí, parte del diagnóstico completo", "Se programa después, antes de la cirugía"],
    ["Para quién", "Quien vive en la ciudad o puede venir", "Quien vive en otra ciudad o en el exterior"],
    ["Resultado", "Diagnóstico, plan y presupuesto", "Orientación preliminar y plan de viaje"],
  ],
};

export const paginas: Pagina[] = [
  {
    slug: "implantes-basales",
    tipo: "tratamiento",
    nav: "Implantes basales",
    resumen: "Qué son, para quién sirven y en qué se diferencian de los convencionales.",
    procedimiento: "Implantes dentales basales y estratégicos",
    title: "Implantes basales: qué son y para quién sirven | Oral ProFace",
    description:
      "Qué son los implantes basales, en qué se diferencian de los convencionales y quién puede ponérselos aunque tenga poco hueso. Valoración en Barranquilla y Bogotá.",
    h1: "Implantes basales: dientes fijos aunque te hayan dicho que no tienes hueso",
    intro:
      "Los implantes basales, también llamados estratégicos o corticales, son implantes dentales de una sola pieza que se anclan en el hueso cortical, la capa más densa del maxilar y la mandíbula. Como ese hueso se conserva aunque la encía se haya reabsorbido, en muchos casos permiten poner dientes fijos sin injertos y con carga inmediata.",
    imagen: "/imagenes/hero/imagen2.jpg",
    imagenAlt: "Dr. Rixio Martínez colocando implantes basales con cirugía guiada",
    actualizado: "2026-10-26",
    ficha: [
      { k: "Tipo de implante", v: "Una sola pieza de titanio, con pilar integrado" },
      { k: "Dónde se ancla", v: "Hueso cortical y basal" },
      { k: "Injerto óseo", v: "En muchos casos no hace falta" },
      { k: "Dientes fijos", v: "En unas 72 horas, en los casos indicados" },
      valoracionFicha,
      sedesFicha,
    ],
    secciones: [
      {
        h2: "¿Qué son los implantes basales?",
        p: [
          "Son implantes dentales diseñados para apoyarse en el hueso basal y cortical, la parte más profunda y resistente del maxilar y la mandíbula. Ese hueso se mantiene incluso cuando una persona lleva años sin dientes y el hueso de la encía se ha reabsorbido.",
          "También se les llama implantes estratégicos o corticales. Se fabrican en titanio y en una sola pieza: la raíz que entra en el hueso y el pilar que sostiene los dientes forman un mismo cuerpo, sin tornillos intermedios.",
        ],
      },
      {
        h2: "¿En qué se diferencian de los implantes convencionales?",
        p: [
          "La diferencia principal es dónde se apoyan. El implante convencional necesita hueso suficiente en la cresta, justo debajo de la encía. El basal busca el anclaje más abajo, en hueso que casi nunca se pierde.",
        ],
        tabla: {
          cols: ["", "Implantes basales", "Implantes convencionales"],
          filas: [
            ["Dónde se anclan", "Hueso cortical y basal, la capa más densa", "Hueso de la cresta, debajo de la encía"],
            ["Hueso que necesitan", "Funcionan con poco hueso en la cresta", "Altura y grosor suficientes en la cresta"],
            ["Injerto óseo", "En muchos casos no hace falta", "Frecuente cuando hay atrofia ósea"],
            ["Dientes fijos", "En unas 72 horas, en los casos indicados", "Por lo general tras 3 a 6 meses de cicatrización"],
            ["Diseño", "Una sola pieza, con el pilar integrado", "Implante y pilar unidos con un tornillo"],
          ],
        },
        despues: [
          "Ninguna técnica sirve para todos los casos. Si tienes hueso suficiente, un implante convencional puede ser una buena opción. La tomografía 3D de la valoración es la que decide.",
        ],
      },
      {
        h2: "¿Quién puede ponerse implantes basales?",
        p: ["Están pensados para personas a las que la técnica convencional les ofrece un camino largo o ninguno:"],
        lista: [
          "Personas con atrofia ósea a quienes les dijeron que no eran candidatas a implantes.",
          "Pacientes que usan dentadura postiza o plancha y quieren dientes fijos.",
          "Quienes perdieron todos o casi todos los dientes de una arcada.",
          "Pacientes a los que se les propuso un injerto óseo y prefieren evaluar otra opción.",
        ],
        despues: [
          "La indicación siempre se define en la valoración. Con la tomografía medimos el hueso disponible y te decimos si eres candidato y qué plan conviene en tu caso.",
        ],
      },
      {
        h2: "¿Cuándo hay que evaluar el caso con más cuidado?",
        p: [
          "Como en cualquier cirugía de implantes, hay situaciones que el especialista revisa antes de decidir: diabetes sin control, tabaquismo intenso, medicamentos que afectan el hueso o radioterapia en cabeza y cuello. En algunos casos obligan a ajustar el plan o a posponer la cirugía, y en otros la desaconsejan.",
          "Por eso en la valoración te preguntamos por tu historia médica completa y por los medicamentos que tomas. Es mejor saberlo antes que descubrirlo en el quirófano.",
        ],
      },
      {
        h2: "¿Cómo es el tratamiento con implantes basales?",
        pasos: pasosTratamiento,
        enlace: { href: "/carga-inmediata/", label: "Cómo funciona la carga inmediata" },
      },
      {
        h2: "¿Cuánto duran los implantes basales?",
        p: [
          "Son una solución de largo plazo. El titanio es biocompatible y se integra al hueso como una raíz natural. Cuánto duran depende sobre todo de ti: higiene diaria, controles periódicos y hábitos como no fumar.",
        ],
      },
      {
        h2: "¿Cuánto cuestan los implantes basales en Colombia?",
        p: [
          `${precioTexto()} del número de implantes, del tipo de prótesis y de si hacen falta extracciones antes de la cirugía. Después de la valoración con tomografía 3D recibes el presupuesto completo del tratamiento, antes de decidir.`,
        ],
      },
    ],
    faqs: [
      {
        q: "¿Los implantes basales sirven si me dijeron que no tengo hueso?",
        a: "En muchos casos sí, porque se anclan en el hueso cortical profundo, que se conserva aunque se haya perdido hueso en la encía. La tomografía 3D de la valoración confirma si eres candidato.",
      },
      {
        q: "¿Los implantes basales necesitan injerto óseo?",
        a: "En la mayoría de los casos indicados no, porque no dependen del hueso de la cresta. Tu especialista te confirma en la valoración si tu caso requiere algún procedimiento adicional.",
      },
      {
        q: "¿Cuánto tiempo tardan los dientes fijos con implantes basales?",
        a: "Con carga inmediata, en los casos indicados, los dientes fijos se colocan en unas 72 horas después de la cirugía.",
      },
      {
        q: "¿Los implantes basales son lo mismo que los implantes cigomáticos?",
        a: "No. Los implantes cigomáticos se anclan en el hueso del pómulo. Los basales se anclan en el hueso cortical del maxilar y la mandíbula. Cuál conviene en cada caso se define en la valoración con tomografía 3D.",
      },
      {
        q: "¿Duele ponerse implantes basales?",
        a: "La cirugía se hace con anestesia, así que no deberías sentir dolor durante el procedimiento. Después es normal tener molestia e inflamación unos días, que se controlan con la medicación que te indicamos.",
      },
    ],
  },
  {
    slug: "carga-inmediata",
    tipo: "tratamiento",
    nav: "Carga inmediata",
    resumen: "Cómo se ponen dientes fijos en unas 72 horas y quién puede hacerlo.",
    procedimiento: "Implantes dentales con carga inmediata",
    title: "Implantes de carga inmediata en 72 horas | Oral ProFace",
    description:
      "Implantes de carga inmediata en Barranquilla y Bogotá: dientes fijos en unas 72 horas tras la cirugía, sin esperar meses. Qué es, quién puede y cuidados después.",
    h1: "Implantes de carga inmediata: dientes fijos en unas 72 horas",
    intro:
      "La carga inmediata es la técnica que permite instalar los dientes fijos sobre los implantes en los días siguientes a la cirugía, en lugar de esperar de tres a seis meses de cicatrización. En Oral ProFace la combinamos con implantes basales para que, en los casos indicados, salgas con dientes fijos en unas 72 horas.",
    imagen: "/imagenes/hero/imagen3.jpg",
    imagenAlt: "Paciente con su nueva sonrisa después de implantes con carga inmediata",
    actualizado: "2026-10-26",
    ficha: [
      { k: "Dientes fijos", v: "Unas 72 horas después de la cirugía" },
      { k: "Requisito", v: "Implante con alta estabilidad desde el primer día" },
      { k: "Implante usado", v: "Basal y estratégico, de una sola pieza" },
      { k: "Primeros días", v: "Dieta blanda y controles" },
      valoracionFicha,
      sedesFicha,
    ],
    secciones: [
      {
        h2: "¿Qué es la carga inmediata?",
        p: [
          "En la técnica tradicional se coloca el implante, se espera entre tres y seis meses a que cicatrice y solo después se pone la prótesis. Durante ese tiempo el paciente suele usar una dentadura provisional removible.",
          "Con carga inmediata los dientes fijos se instalan en los días siguientes a la cirugía. Para lograrlo el implante necesita una estabilidad alta desde el primer momento, y por eso la combinamos con implantes basales y estratégicos anclados en hueso cortical.",
        ],
        enlace: { href: "/implantes-basales/", label: "Qué son los implantes basales" },
      },
      {
        h2: "¿Qué diferencia hay entre carga inmediata y carga diferida?",
        p: ["Las dos técnicas usan implantes. Cambia el momento en que reciben los dientes y lo que vives mientras tanto."],
        tabla: {
          cols: ["", "Carga inmediata", "Carga diferida"],
          filas: [
            ["Dientes fijos", "En unas 72 horas", "Tras 3 a 6 meses de cicatrización"],
            ["Mientras tanto", "Ya tienes dientes fijos", "Por lo general, dentadura provisional removible"],
            ["Requisito principal", "Alta estabilidad del implante desde la cirugía", "Que el implante se integre al hueso antes de cargarlo"],
            ["Si vienes de lejos", "Cabe en un viaje corto", "Varias visitas a lo largo de meses"],
          ],
        },
      },
      {
        h2: "¿Qué pasa durante esas 72 horas?",
        pasos: [
          "Cirugía con anestesia para colocar los implantes según la planificación hecha con tomografía 3D.",
          "Toma de registros: medidas y mordida para fabricar tus dientes fijos.",
          "Fabricación de la prótesis fija a la medida.",
          "Instalación de los dientes fijos sobre los implantes y revisión de la mordida.",
          "Indicaciones de cuidado y fecha de tu primer control.",
        ],
      },
      {
        h2: "¿Quién puede hacerse carga inmediata?",
        p: [
          "Es una opción para muchas personas que perdieron varios dientes o toda una arcada, incluso con poco hueso. La decisión depende de tres cosas que revisamos en la valoración:",
        ],
        lista: [
          "La calidad y la cantidad de hueso, medidas en la tomografía 3D.",
          "Tu salud general y los medicamentos que tomas.",
          "Hábitos como fumar o apretar los dientes al dormir.",
        ],
      },
      {
        h2: "¿Qué cuidados hay después de la carga inmediata?",
        lista: [
          "Dieta blanda los primeros días y regreso progresivo a tu alimentación normal.",
          "La higiene que te indicamos para limpiar alrededor de los implantes.",
          "La medicación para controlar la molestia y la inflamación.",
          "Evitar fumar, porque afecta la cicatrización.",
          "Asistir a los controles programados.",
        ],
      },
      {
        h2: "¿Sirve si vengo de otra ciudad o del exterior?",
        p: [
          "Sí, y es uno de los motivos por los que más pacientes la eligen. Haces la valoración online antes de viajar y organizas la cirugía y la entrega de los dientes fijos en un viaje corto a Barranquilla o Bogotá. Tu especialista te indica cuántos días quedarte para los controles.",
        ],
        enlace: { href: "/implantes-dentales-barranquilla/", label: "Ver la sede de Barranquilla" },
      },
    ],
    faqs: [
      {
        q: "¿De verdad puedo tener dientes fijos en 72 horas?",
        a: "Sí, en los casos indicados. Con carga inmediata colocamos los dientes fijos en un plazo aproximado de 72 horas después de la cirugía. Tu especialista te confirma en la valoración si eres candidato.",
      },
      {
        q: "¿La carga inmediata es segura?",
        a: "Es una técnica establecida cuando el implante logra buena estabilidad inicial. Por eso planificamos cada caso con tomografía 3D y usamos implantes anclados en hueso cortical.",
      },
      {
        q: "¿Puedo comer normal después de la carga inmediata?",
        a: "Los primeros días se recomienda una dieta blanda y luego vuelves de forma progresiva a tu alimentación normal, siguiendo las indicaciones de tu especialista.",
      },
      {
        q: "¿Cuántos días debo quedarme si viajo para la carga inmediata?",
        a: "La cirugía y la entrega de los dientes fijos se completan en unas 72 horas. Tu especialista te indica en la valoración cuántos días quedarte para los controles.",
      },
    ],
  },
  {
    slug: "rehabilitacion-oral-completa",
    tipo: "tratamiento",
    nav: "Rehabilitación oral completa",
    resumen: "Dentadura fija sobre implantes para quien perdió todos o casi todos los dientes.",
    procedimiento: "Rehabilitación oral completa con dentadura fija sobre implantes",
    title: "Dentadura fija sobre implantes en Colombia | Oral ProFace",
    description:
      "Rehabilitación oral completa con dentadura fija sobre implantes en Barranquilla y Bogotá. Cambia la plancha por dientes fijos, incluso con poco hueso.",
    h1: "Dentadura fija sobre implantes: cambia la plancha por dientes que no se quitan",
    intro:
      "La rehabilitación oral completa reemplaza todos los dientes de una arcada, superior, inferior o ambas, con una prótesis fija sostenida por implantes. No se retira para dormir, no usa adhesivos y, en los casos indicados con carga inmediata, queda instalada en unas 72 horas, incluso en pacientes con poco hueso.",
    imagen: "/imagenes/hero/imagen1.jpeg",
    imagenAlt: "Paciente sonriendo tras una rehabilitación oral completa sobre implantes",
    actualizado: "2026-10-26",
    ficha: [
      { k: "Para quién", v: "Personas sin dientes o con pocos dientes en una arcada" },
      { k: "Prótesis", v: "Fija, sostenida por implantes" },
      { k: "Adhesivos", v: "No necesita" },
      { k: "Tiempo", v: "Unas 72 horas con carga inmediata, en los casos indicados" },
      { k: "Planificación", v: "Tomografía 3D y escaneo digital" },
      sedesFicha,
    ],
    secciones: [
      {
        h2: "¿Qué es una rehabilitación oral completa?",
        p: [
          "Es el tratamiento que restaura una arcada completa con una prótesis fija sostenida por implantes. Se puede hacer en la arcada superior, en la inferior o en ambas.",
          "Combinamos implantes basales y estratégicos con carga inmediata, así que en los casos indicados la dentadura fija queda instalada en unas 72 horas, incluso en pacientes con atrofia ósea.",
        ],
      },
      {
        h2: "Dentadura postiza o dentadura fija: ¿qué cambia en tu día a día?",
        tabla: {
          cols: ["", "Dentadura postiza", "Dentadura fija sobre implantes"],
          destacar: 2,
          filas: [
            ["Al comer y hablar", "Puede moverse o caerse", "Queda fija en su lugar"],
            ["Adhesivos", "A menudo necesarios", "No necesita"],
            ["Paladar", "La superior lo cubre", "Lo deja libre"],
            ["De noche", "Se retira", "Se queda puesta"],
            ["Al masticar", "Fuerza limitada", "Más fuerza para carne o fruta"],
            ["El hueso", "Sigue reabsorbiéndose", "Los implantes ayudan a conservarlo"],
          ],
        },
      },
      {
        h2: "¿Cuántos implantes se necesitan para una dentadura fija?",
        p: [
          "Depende del hueso que tengas y del tipo de prótesis. Quizá hayas oído hablar de técnicas como All-on-4, que usan cuatro implantes por arcada. En Oral ProFace el número lo define tu tomografía y la planificación con implantes basales, no una fórmula igual para todos.",
          "Lo sabrás con certeza después de la valoración, junto con el plan y el presupuesto.",
        ],
        enlace: { href: "/implantes-basales/", label: "Por qué usamos implantes basales" },
      },
      {
        h2: "¿Cómo planificamos tu nueva dentadura?",
        p: [
          "Con tomografía 3D y escaneo digital diseñamos la posición de los implantes y la forma de los dientes antes de la cirugía. Así puedes ver cómo quedará tu sonrisa y conocer el presupuesto completo antes de empezar.",
        ],
        pasos: pasosTratamiento,
      },
      {
        h2: "¿Cómo se cuida una dentadura fija sobre implantes?",
        lista: [
          "Cepillado diario y la limpieza que te enseñamos para debajo de la prótesis.",
          "Controles periódicos para revisar los implantes y el ajuste.",
          "Evitar fumar, porque afecta la salud del hueso y de la encía.",
          "Avisarnos si notas movilidad, molestia o un cambio en la mordida.",
        ],
      },
      {
        h2: "¿Cuánto cuesta una rehabilitación oral completa en Colombia?",
        p: [
          `${precioTexto()} del número de implantes, del tipo de prótesis, de si es una arcada o las dos y de los procedimientos previos. Recibes un presupuesto exacto después de la valoración con tomografía 3D.`,
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuántos implantes necesito para una dentadura fija?",
        a: "Depende del hueso disponible y del tipo de prótesis. Lo definimos en la valoración con tomografía 3D y te entregamos un plan y un presupuesto exactos.",
      },
      {
        q: "¿Puedo cambiar mi dentadura postiza por dientes fijos?",
        a: "En muchos casos sí, incluso si llevas años usando prótesis removible y has perdido hueso. Los implantes basales están pensados para esos casos.",
      },
      {
        q: "¿Se puede hacer la dentadura fija arriba y abajo?",
        a: "Sí. La rehabilitación puede ser de la arcada superior, de la inferior o de ambas. Se planifica según el hueso y los dientes que tengas en cada una.",
      },
      {
        q: "¿Puedo dormir con la dentadura fija?",
        a: "Sí. Va sostenida por implantes y no se retira por la noche, a diferencia de la dentadura postiza.",
      },
      {
        q: "¿Cuánto cuesta una rehabilitación oral completa en Colombia?",
        a: `${precioTexto()} del número de implantes, del tipo de prótesis y de los procedimientos previos. Recibes un presupuesto exacto después de la valoración.`,
      },
    ],
  },
  {
    slug: "implantes-dentales-barranquilla",
    tipo: "sede",
    sede: 0,
    nav: "Implantes en Barranquilla",
    resumen: "Sede principal en el Centro Médico Vital, para Barranquilla y la Costa Caribe.",
    title: "Implantes dentales en Barranquilla en 72 h | Oral ProFace",
    description:
      "Implantes dentales en Barranquilla: dientes fijos en unas 72 horas, incluso con poco hueso. Centro Médico Vital, Cra. 51B #94-334. Agenda tu valoración.",
    h1: "Implantes dentales en Barranquilla con dientes fijos en 72 horas",
    intro:
      "En Oral ProFace Barranquilla colocamos implantes dentales basales con carga inmediata en el Centro Médico Vital, Cra. 51B #94-334. Si usas plancha o caja de dientes, o te dijeron que no tienes hueso para un implante, en la valoración medimos tu hueso con tomografía 3D y te decimos con plan y presupuesto si puedes salir con dientes fijos en unas 72 horas.",
    imagen: "/imagenes/about/about.jpeg",
    imagenAlt: "Dr. Rixio Martínez, odontólogo implantólogo de Oral ProFace en Barranquilla",
    actualizado: "2026-10-26",
    ficha: [
      { k: "Dirección", v: "Cra. 51B #94-334, Centro Médico Vital" },
      { k: "Ciudad", v: "Barranquilla, Atlántico" },
      { k: "WhatsApp", v: "+57 300 8990189", href: WA },
      { k: "Correo", v: "oralproimplantes@gmail.com", href: "mailto:oralproimplantes@gmail.com" },
      { k: "Valoración", v: "Presencial u online" },
      { k: "Dirige", v: "Dr. Rixio Martínez, odontólogo implantólogo" },
    ],
    secciones: [
      {
        h2: "Implantes en Barranquilla para quienes ya escucharon que no tenían hueso",
        p: [
          "A nuestra sede de Barranquilla llegan muchos pacientes con la misma historia: llevan años con una prótesis que se mueve, consultaron por implantes y les dijeron que primero necesitaban un injerto de hueso y esperar varios meses, o que simplemente no eran candidatos.",
          "Nosotros trabajamos con implantología basal y estratégica. Estos implantes se anclan en el hueso cortical, la capa más densa del maxilar y la mandíbula, que se conserva aunque el hueso de la encía se haya reabsorbido. Por eso en muchos casos podemos poner dientes fijos sin injertos y con carga inmediata.",
        ],
        enlace: { href: "/implantes-basales/", label: "Qué son los implantes basales" },
      },
      {
        h2: "¿Qué tratamientos de implantes hacemos en Barranquilla?",
        lista: [
          "Implantes basales y estratégicos para pacientes con atrofia ósea.",
          "Carga inmediata: dientes fijos en unas 72 horas en los casos indicados.",
          "Dentadura fija sobre implantes para cambiar la plancha por dientes que no se quitan.",
          "Diseño de sonrisa digital con escaneo 3D antes de la cirugía.",
        ],
        enlace: { href: "/rehabilitacion-oral-completa/", label: "Dentadura fija sobre implantes" },
      },
      {
        h2: "¿Cómo es el tratamiento paso a paso?",
        pasos: pasosTratamiento,
        enlace: { href: "/carga-inmediata/", label: "Cómo funciona la carga inmediata" },
      },
      {
        h2: "¿Cuánto cuestan los implantes dentales en Barranquilla?",
        p: [
          `${precioTexto("Barranquilla")} de cuántos implantes necesitas, del tipo de prótesis (dentadura fija de arcada completa o dientes individuales) y de si hacen falta extracciones antes de la cirugía.`,
          "Por eso no damos precios a ciegas por teléfono. Después de la valoración con tomografía 3D recibes el presupuesto completo del tratamiento y decides con calma.",
        ],
      },
      {
        h2: "¿Valoración presencial u online?",
        p: ["Las dos sirven para empezar. Elige según dónde vives:"],
        tabla: tablaValoracion,
      },
      {
        h2: "¿Atienden pacientes de Soledad, Puerto Colombia y el resto de la Costa?",
        p: [
          "Sí. Atendemos pacientes de Barranquilla y de su área metropolitana, como Soledad, Malambo, Puerto Colombia y Galapa, y también de Santa Marta, Cartagena, Valledupar, Montería, Sincelejo y Riohacha.",
          "Si vienes de otra ciudad, haces primero la valoración online y llegas a Barranquilla con la cirugía programada. Como la carga inmediata se completa en unas 72 horas, el tratamiento cabe en un viaje corto.",
        ],
      },
      {
        h2: "¿Quién te atiende en Barranquilla?",
        p: [
          "El tratamiento lo dirige el Dr. Rixio Martínez, odontólogo implantólogo y fundador de Oral ProFace. Cada caso se planifica con tomografía 3D antes de la cirugía. Nos especializamos en casos de poco hueso que en otras clínicas fueron descartados.",
        ],
      },
      {
        h2: "¿Dónde queda la sede y cómo agendo?",
        p: [
          "La sede de Oral ProFace en Barranquilla está en el Centro Médico Vital, Cra. 51B #94-334, Barranquilla, Atlántico. Escríbenos por WhatsApp al +57 300 8990189 para elegir fecha y hora de tu valoración presencial u online.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde queda la sede de Oral ProFace en Barranquilla?",
        a: "En la Cra. 51B #94-334, Centro Médico Vital, Barranquilla, Atlántico. Puedes agendar tu valoración por WhatsApp al +57 300 8990189.",
      },
      {
        q: "¿Cuánto cuesta un implante dental en Barranquilla?",
        a: `${precioTexto("Barranquilla")} del número de implantes, del tipo de prótesis y de los procedimientos previos. Te damos un presupuesto completo después de la valoración con tomografía 3D.`,
      },
      {
        q: "¿Puedo ponerme implantes en Barranquilla si me dijeron que no tengo hueso?",
        a: "En muchos casos sí. Los implantes basales se anclan en el hueso cortical, que se conserva aunque se haya perdido el hueso de la encía. La tomografía 3D de la valoración confirma si eres candidato.",
      },
      {
        q: "¿En cuánto tiempo tengo los dientes fijos?",
        a: "En los casos indicados, con carga inmediata, instalamos los dientes fijos en unas 72 horas después de la cirugía, sin esperar meses de cicatrización.",
      },
      {
        q: "Vivo en Santa Marta o Cartagena, ¿cuántos días debo quedarme en Barranquilla?",
        a: "Haces la valoración online antes de viajar. La cirugía y la entrega de los dientes fijos se completan en unas 72 horas, y tu especialista te indica cuántos días quedarte para los controles.",
      },
      {
        q: "¿Duele ponerse implantes dentales?",
        a: "La cirugía se hace con anestesia, así que no deberías sentir dolor durante el procedimiento. Después es normal tener molestia e inflamación unos días, que se controlan con la medicación que te indicamos.",
      },
    ],
  },
  {
    slug: "implantes-dentales-bogota",
    tipo: "sede",
    sede: 1,
    nav: "Implantes en Bogotá",
    resumen: "Sede en Chicó Norte, para Bogotá, la Sabana y pacientes del exterior.",
    title: "Implantes dentales en Bogotá en 72 h | Oral ProFace",
    description:
      "Implantes dentales en Bogotá con dientes fijos en unas 72 horas, incluso con poco hueso. Sede en Chicó Norte, Cll. 93B #17-42. Valoración presencial u online.",
    h1: "Implantes dentales en Bogotá con dientes fijos en 72 horas",
    intro:
      "En Oral ProFace Bogotá colocamos implantes dentales basales con carga inmediata en Chicó Norte, Cll. 93B #17-42, Consultorio Dental Line. Es la opción para quienes perdieron varios dientes o toda una arcada y quieren dientes fijos sin pasar por injertos y meses de espera.",
    imagen: "/imagenes/hero/imagen2.jpg",
    imagenAlt: "Cirugía de implantes dentales en la sede de Oral ProFace en Bogotá",
    actualizado: "2026-10-26",
    ficha: [
      { k: "Dirección", v: "Cll. 93B #17-42, Consultorio Dental Line" },
      { k: "Barrio", v: "Chicó Norte, Bogotá" },
      { k: "WhatsApp", v: "+57 300 8990189", href: WA },
      { k: "Correo", v: "oralproimplantes@gmail.com", href: "mailto:oralproimplantes@gmail.com" },
      { k: "Valoración", v: "Presencial u online" },
      { k: "Dirige", v: "Dr. Rixio Martínez, odontólogo implantólogo" },
    ],
    secciones: [
      {
        h2: "¿Puedo ponerme implantes dentales en Bogotá si tengo poco hueso?",
        p: [
          "En muchos casos sí. La técnica convencional necesita hueso suficiente en la cresta de la encía, y cuando falta el plan habitual es un injerto y varios meses de espera antes de poner los dientes.",
          "En nuestra sede de Bogotá usamos implantes basales y estratégicos, que se anclan en el hueso cortical profundo. Esa firmeza permite, en los casos indicados, instalar los dientes fijos en unas 72 horas.",
        ],
        enlace: { href: "/implantes-basales/", label: "Implantes basales frente a convencionales" },
      },
      {
        h2: "¿Qué tratamientos hacemos en Chicó Norte?",
        lista: [
          "Implantes basales y estratégicos para pacientes con atrofia ósea.",
          "Carga inmediata: dientes fijos en unas 72 horas en los casos indicados.",
          "Rehabilitación oral completa con dentadura fija sobre implantes.",
          "Diseño de sonrisa digital con escaneo 3D.",
        ],
        enlace: { href: "/rehabilitacion-oral-completa/", label: "Dentadura fija sobre implantes" },
      },
      {
        h2: "¿Cómo es el tratamiento en Bogotá?",
        pasos: pasosTratamiento,
        enlace: { href: "/carga-inmediata/", label: "Cómo funciona la carga inmediata" },
      },
      {
        h2: "¿Cuánto cuestan los implantes dentales en Bogotá?",
        p: [
          `${precioTexto("Bogotá")} del número de implantes, del tipo de prótesis y de los procedimientos previos. Recibes un presupuesto completo después de la valoración con tomografía 3D, antes de decidir.`,
        ],
      },
      {
        h2: "¿Valoración presencial u online?",
        p: ["Las dos sirven para empezar. Elige según dónde vives:"],
        tabla: tablaValoracion,
      },
      {
        h2: "¿Atienden pacientes de la Sabana, otras ciudades y el exterior?",
        p: [
          "Sí. Atendemos pacientes de Bogotá y de municipios cercanos como Chía, Cajicá, Zipaquirá, Soacha, Mosquera y Funza, y también de Villavicencio, Tunja e Ibagué.",
          "Si viajas desde el exterior, la valoración online te permite llegar a Bogotá con el plan listo. La sede queda en el norte de la ciudad y el tratamiento con carga inmediata se completa en pocos días.",
        ],
      },
      {
        h2: "¿Quién te atiende y cómo agendo?",
        p: [
          "El tratamiento lo dirige el Dr. Rixio Martínez, odontólogo implantólogo, con planificación digital y tomografía 3D en cada caso. Escríbenos por WhatsApp al +57 300 8990189 y elige valoración presencial en Chicó Norte o por videollamada.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde queda la sede de Oral ProFace en Bogotá?",
        a: "En la Cll. 93B #17-42, Chicó Norte, Consultorio Dental Line, Bogotá.",
      },
      {
        q: "¿Cuánto cuesta un implante dental en Bogotá?",
        a: `${precioTexto("Bogotá")} del número de implantes, del tipo de prótesis y de los procedimientos previos. Te damos un presupuesto completo después de la valoración con tomografía 3D.`,
      },
      {
        q: "¿Atienden pacientes que viajan del exterior a Bogotá?",
        a: "Sí. La valoración puede hacerse online antes del viaje y, como la carga inmediata se completa en unas 72 horas, el tratamiento se organiza en una estadía corta.",
      },
      {
        q: "¿Puedo cambiar mi dentadura postiza por dientes fijos en Bogotá?",
        a: "En muchos casos sí, incluso si llevas años con prótesis removible y perdiste hueso. Los implantes basales están pensados para esos casos y se confirman con tomografía 3D.",
      },
      {
        q: "¿Duele ponerse implantes dentales?",
        a: "La cirugía se hace con anestesia, así que no deberías sentir dolor durante el procedimiento. Después es normal tener molestia e inflamación unos días, que se controlan con la medicación que te indicamos.",
      },
    ],
  },
];

export const tratamientos = paginas.filter((p) => p.tipo === "tratamiento");
export const sedesPaginas = paginas.filter((p) => p.tipo === "sede");
export const url = (slug: string) => `/${slug}/`;
export const anchor = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
