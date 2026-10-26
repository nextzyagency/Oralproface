export type Seccion = { h2: string; p?: string[]; lista?: string[] };
export type Faq = { q: string; a: string };

export type Pagina = {
  slug: string;
  tipo: "tratamiento" | "sede";
  nav: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  imagen: string;
  imagenAlt: string;
  secciones: Seccion[];
  faqs: Faq[];
  sede?: number;
  procedimiento?: string;
};

export const paginas: Pagina[] = [
  {
    slug: "implantes-basales",
    tipo: "tratamiento",
    nav: "Implantes basales",
    procedimiento: "Implantes dentales basales y estratégicos",
    title: "Implantes basales en Colombia: dientes fijos sin injerto | Oral ProFace",
    description:
      "Implantes basales y estratégicos en Barranquilla y Bogotá para pacientes con poco hueso. Se anclan en el hueso cortical y en muchos casos evitan los injertos.",
    eyebrow: "Implantología basal y estratégica",
    h1: "Implantes basales en Colombia para pacientes con poco hueso",
    intro:
      "Si te dijeron que no tienes suficiente hueso para un implante, los implantes basales pueden ser una alternativa. Se anclan en el hueso cortical, la capa más densa y resistente del maxilar y la mandíbula, y en muchos casos permiten poner dientes fijos sin injertos óseos.",
    imagen: "/imagenes/hero/imagen2.jpg",
    imagenAlt: "Dr. Rixio Martínez colocando implantes basales con cirugía guiada",
    secciones: [
      {
        h2: "Qué son los implantes basales",
        p: [
          "Los implantes basales, también llamados implantes estratégicos o corticales, son implantes dentales diseñados para apoyarse en el hueso basal y cortical. Ese hueso se conserva incluso cuando la persona ha perdido dientes durante años y el hueso de la encía se ha reabsorbido.",
          "Los implantes convencionales necesitan altura y grosor suficientes en la cresta del hueso. Cuando falta, lo habitual es hacer un injerto y esperar varios meses antes de colocar el implante. Con la técnica basal el anclaje se busca en una zona más profunda y firme, por eso en muchos casos el injerto no es necesario.",
        ],
      },
      {
        h2: "Para quién están indicados",
        lista: [
          "Personas con atrofia ósea a quienes les dijeron que no eran candidatas a implantes.",
          "Pacientes que usan dentadura postiza o prótesis removible y quieren dientes fijos.",
          "Quienes perdieron todos o casi todos los dientes de una arcada.",
          "Pacientes a los que se les propuso un injerto óseo y prefieren evaluar otra opción.",
        ],
        p: [
          "La indicación siempre se define en la valoración. Con una tomografía 3D medimos el hueso disponible y te decimos si eres candidato y qué plan es el adecuado para tu caso.",
        ],
      },
      {
        h2: "Ventajas frente a la técnica convencional",
        lista: [
          "En muchos casos evitan los injertos óseos y sus tiempos de espera.",
          "Permiten carga inmediata: dientes fijos en unas 72 horas en los casos indicados.",
          "Cirugía mínimamente invasiva, con menos cortes y menos inflamación.",
          "Implante de una sola pieza en titanio, sin tornillos intermedios que se aflojen.",
        ],
      },
      {
        h2: "Cómo es el tratamiento con implantes basales",
        p: [
          "Empieza con una valoración online o presencial en Barranquilla o Bogotá. Después hacemos la planificación digital con tomografía 3D para definir la posición exacta de cada implante. La cirugía se realiza con anestesia y, en los casos indicados, colocamos los dientes fijos con carga inmediata en un plazo aproximado de 72 horas. Luego programamos controles de seguimiento.",
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
    ],
  },
  {
    slug: "carga-inmediata",
    tipo: "tratamiento",
    nav: "Carga inmediata",
    procedimiento: "Implantes dentales con carga inmediata",
    title: "Implantes con carga inmediata: dientes fijos en 72 horas | Oral ProFace",
    description:
      "Implantes dentales con carga inmediata en Barranquilla y Bogotá: dientes fijos en unas 72 horas tras la cirugía, sin esperar meses de cicatrización.",
    eyebrow: "Carga inmediata",
    h1: "Implantes con carga inmediata: dientes fijos en unas 72 horas",
    intro:
      "La carga inmediata permite colocar los dientes fijos sobre los implantes pocos días después de la cirugía, en lugar de esperar varios meses. En Oral ProFace, en los casos indicados, sales con tus dientes fijos en un plazo aproximado de 72 horas.",
    imagen: "/imagenes/hero/imagen3.jpg",
    imagenAlt: "Paciente con su nueva sonrisa después de implantes con carga inmediata",
    secciones: [
      {
        h2: "Qué es la carga inmediata",
        p: [
          "En la técnica tradicional se coloca el implante, se espera entre tres y seis meses a que cicatrice y solo después se pone la prótesis. Durante ese tiempo el paciente suele usar una dentadura provisional removible.",
          "Con carga inmediata los dientes fijos se instalan en los días siguientes a la cirugía. Para lograrlo el implante necesita una estabilidad alta desde el primer momento, y por eso la combinamos con implantes basales y estratégicos que se anclan en hueso cortical.",
        ],
      },
      {
        h2: "Qué incluye el proceso de 72 horas",
        lista: [
          "Valoración y tomografía 3D para planificar cada implante.",
          "Cirugía mínimamente invasiva con anestesia.",
          "Toma de registros y fabricación de los dientes fijos.",
          "Instalación de la prótesis fija en unas 72 horas y controles posteriores.",
        ],
      },
      {
        h2: "Quién puede hacerse carga inmediata",
        p: [
          "Es una opción para muchas personas que perdieron varios dientes o toda una arcada, incluso con poco hueso. La decisión depende de la calidad del hueso, la salud general y los hábitos de cada paciente, así que siempre se confirma en la valoración.",
        ],
      },
      {
        h2: "Ideal si vienes de otra ciudad o del exterior",
        p: [
          "Como el tratamiento se completa en pocos días, puedes hacer la valoración online antes de viajar y organizar la cirugía y la entrega de los dientes fijos en un viaje corto a Barranquilla o Bogotá. Tu especialista te indica cuántos días quedarte para los controles.",
        ],
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
    ],
  },
  {
    slug: "rehabilitacion-oral-completa",
    tipo: "tratamiento",
    nav: "Rehabilitación oral completa",
    procedimiento: "Rehabilitación oral completa con dentadura fija sobre implantes",
    title: "Dentadura fija sobre implantes en Colombia | Oral ProFace",
    description:
      "Rehabilitación oral completa con dentadura fija sobre implantes en Barranquilla y Bogotá. Deja la prótesis removible y recupera dientes fijos, incluso con poco hueso.",
    eyebrow: "Rehabilitación oral completa",
    h1: "Dentadura fija sobre implantes: rehabilitación oral completa",
    intro:
      "Si perdiste todos o casi todos los dientes, o estás cansado de una prótesis removible que se mueve, una rehabilitación oral completa sobre implantes te devuelve una dentadura fija para comer, hablar y sonreír con seguridad.",
    imagen: "/imagenes/hero/imagen1.jpeg",
    imagenAlt: "Paciente sonriendo tras una rehabilitación oral completa sobre implantes",
    secciones: [
      {
        h2: "Qué es una rehabilitación oral completa",
        p: [
          "Es el tratamiento que restaura una arcada completa, superior, inferior o ambas, con una prótesis fija sostenida por implantes. La prótesis no se retira para dormir ni necesita adhesivos.",
          "Combinamos implantes basales y estratégicos con carga inmediata, así que en los casos indicados la dentadura fija queda instalada en unas 72 horas, incluso en pacientes con atrofia ósea.",
        ],
      },
      {
        h2: "Diferencias con la dentadura postiza",
        lista: [
          "No se mueve ni se cae al comer o hablar.",
          "No necesita adhesivos ni se retira por la noche.",
          "Permite masticar con más fuerza alimentos como carne o fruta.",
          "No cubre el paladar, por lo que se siente más natural.",
        ],
      },
      {
        h2: "Cómo planificamos tu nueva dentadura",
        p: [
          "Con tomografía 3D y escaneo digital diseñamos la posición de los implantes y la forma de los dientes antes de la cirugía. Así puedes ver cómo quedará tu sonrisa y conocer el presupuesto completo antes de empezar.",
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
        q: "¿Cuánto cuesta una rehabilitación oral completa en Colombia?",
        a: "El precio depende del número de implantes, del tipo de prótesis y de los procedimientos previos. Recibes un presupuesto exacto después de la valoración.",
      },
    ],
  },
  {
    slug: "implantes-dentales-barranquilla",
    tipo: "sede",
    sede: 0,
    nav: "Implantes en Barranquilla",
    title: "Implantes dentales en Barranquilla | Oral ProFace",
    description:
      "Implantes dentales en Barranquilla con carga inmediata: dientes fijos en unas 72 horas, incluso con poco hueso. Sede en el Centro Médico Vital. Agenda tu valoración.",
    eyebrow: "Sede Barranquilla",
    h1: "Implantes dentales en Barranquilla",
    intro:
      "En nuestra sede de Barranquilla, en el Centro Médico Vital, realizamos implantes dentales basales y estratégicos con carga inmediata. Atendemos pacientes de Barranquilla, del Atlántico y de toda la región Caribe que buscan dientes fijos sin largos tiempos de espera.",
    imagen: "/imagenes/about/about.jpeg",
    imagenAlt: "Dr. Rixio Martínez, odontólogo implantólogo en Barranquilla",
    secciones: [
      {
        h2: "Tratamientos de implantes en Barranquilla",
        lista: [
          "Implantes basales y estratégicos para pacientes con poco hueso.",
          "Carga inmediata: dientes fijos en unas 72 horas en los casos indicados.",
          "Rehabilitación oral completa con dentadura fija sobre implantes.",
          "Diseño de sonrisa digital con escaneo 3D.",
        ],
      },
      {
        h2: "Por qué elegir Oral ProFace en Barranquilla",
        p: [
          "El tratamiento lo dirige el Dr. Rixio Martínez, odontólogo implantólogo. Nos especializamos en casos de atrofia ósea que en otros lugares fueron descartados, y cada caso se planifica con tomografía 3D antes de la cirugía.",
          "Si vives en otra ciudad de la costa, como Santa Marta, Cartagena o Valledupar, puedes hacer primero la valoración online y venir a Barranquilla con el tratamiento planificado.",
        ],
      },
      {
        h2: "Cómo agendar tu valoración en Barranquilla",
        p: [
          "Escríbenos por WhatsApp al +57 310 3114580 y elige valoración presencial en el Centro Médico Vital o valoración online por videollamada.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde queda la sede de Oral ProFace en Barranquilla?",
        a: "En la Cra. 51B #94-334, Centro Médico Vital, Barranquilla, Atlántico.",
      },
      {
        q: "¿Puedo hacerme implantes en Barranquilla si vivo en otra ciudad?",
        a: "Sí. Haces la valoración online, planificamos el tratamiento y organizas un viaje corto para la cirugía y la entrega de los dientes fijos.",
      },
      {
        q: "¿Cuánto cuesta un implante dental en Barranquilla?",
        a: "Depende del número de implantes, del tipo de prótesis y de los procedimientos previos. Te damos un presupuesto exacto después de la valoración con tomografía 3D.",
      },
    ],
  },
  {
    slug: "implantes-dentales-bogota",
    tipo: "sede",
    sede: 1,
    nav: "Implantes en Bogotá",
    title: "Implantes dentales en Bogotá | Oral ProFace",
    description:
      "Implantes dentales en Bogotá con carga inmediata: dientes fijos en unas 72 horas, incluso con poco hueso. Sede en Chicó Norte. Agenda tu valoración.",
    eyebrow: "Sede Bogotá",
    h1: "Implantes dentales en Bogotá",
    intro:
      "En nuestra sede de Bogotá, en Chicó Norte, realizamos implantes dentales basales y estratégicos con carga inmediata para pacientes de Bogotá, de Cundinamarca y de otras ciudades del país y del exterior.",
    imagen: "/imagenes/hero/imagen2.jpg",
    imagenAlt: "Cirugía de implantes dentales en la sede de Oral ProFace en Bogotá",
    secciones: [
      {
        h2: "Tratamientos de implantes en Bogotá",
        lista: [
          "Implantes basales y estratégicos para pacientes con poco hueso.",
          "Carga inmediata: dientes fijos en unas 72 horas en los casos indicados.",
          "Rehabilitación oral completa con dentadura fija sobre implantes.",
          "Diseño de sonrisa digital con escaneo 3D.",
        ],
      },
      {
        h2: "Por qué elegir Oral ProFace en Bogotá",
        p: [
          "El tratamiento lo dirige el Dr. Rixio Martínez, odontólogo implantólogo, con planificación digital y tomografía 3D en cada caso. Nos enfocamos en pacientes con atrofia ósea a quienes les dijeron que necesitaban injertos o que no eran candidatos a implantes.",
          "Si viajas desde otra ciudad o desde el exterior, la valoración online te permite llegar a Bogotá con el plan listo y completar el tratamiento en pocos días.",
        ],
      },
      {
        h2: "Cómo agendar tu valoración en Bogotá",
        p: [
          "Escríbenos por WhatsApp al +57 310 3114580 y elige valoración presencial en Chicó Norte o valoración online por videollamada.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde queda la sede de Oral ProFace en Bogotá?",
        a: "En la Cll. 93B #17-42, Chicó Norte, Consultorio Dental Line, Bogotá.",
      },
      {
        q: "¿Atienden pacientes que viajan del exterior a Bogotá?",
        a: "Sí. La valoración puede hacerse online antes del viaje y, como la carga inmediata se completa en unas 72 horas, el tratamiento se organiza en una estadía corta.",
      },
      {
        q: "¿Cuánto cuesta un implante dental en Bogotá?",
        a: "Depende del número de implantes, del tipo de prótesis y de los procedimientos previos. Te damos un presupuesto exacto después de la valoración con tomografía 3D.",
      },
    ],
  },
];

export const tratamientos = paginas.filter((p) => p.tipo === "tratamiento");
export const sedesPaginas = paginas.filter((p) => p.tipo === "sede");
export const url = (slug: string) => `/${slug}/`;
