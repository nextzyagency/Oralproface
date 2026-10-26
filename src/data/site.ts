export const sedes = [
  {
    ciudad: "Barranquilla",
    pais: "Colombia",
    direccion: "Cra. 51B #94-334, Centro Médico Vital.",
    email: "oralproimplantes@gmail.com",
    tel: "57 300 8990189",
  },
  {
    ciudad: "Bogotá",
    pais: "Colombia",
    direccion: "Cll. 93B #17-42, Chicó Norte, Consultorio Dental Line.",
    email: "oralproimplantes@gmail.com",
    tel: "57 300 8990189",
  },
  {
    ciudad: "Maracaibo",
    pais: "Venezuela",
    direccion: "Clínica Dr. Carlos Alaimo, IPS La Milagrosa, Av. 15 Delicias.",
    email: "oralproimplantes@gmail.com",
    tel: "57 300 8990189",
  },
];

// Datos comerciales reales. Rellenar con cifras verificables: si precioDesde es null, no se muestra precio.
export const datos = {
  pacientes: 30 as number, // pacientes / sonrisas tratadas (se muestra como "+N")
  precioDesde: null as string | null, // ej. "$2.500.000 COP"
};

export const precioTexto = (lugar = "") =>
  datos.precioDesde
    ? `En Oral ProFace${lugar && ` ${lugar}`}, un implante dental cuesta desde ${datos.precioDesde}. El valor final depende`
    : "El precio depende";

export const faqs = [
  {
    q: "¿Qué es Oral ProFace?",
    a: "Oral ProFace (Oralproface) es una clínica de implantes dentales en Colombia dirigida por el Dr. Rixio Martínez, odontólogo implantólogo. Se especializa en implantes basales y estratégicos con carga inmediata para pacientes con poco hueso, y atiende en Barranquilla, Bogotá y Maracaibo (Venezuela).",
  },
  {
    q: "¿Puedo ponerme implantes dentales si me dijeron que no tengo suficiente hueso?",
    a: "En muchos casos sí. Los implantes basales y estratégicos se anclan en el hueso cortical profundo, que se conserva aunque se haya perdido hueso en la encía. Por eso permiten tratar casos de atrofia ósea sin injertos complejos. En la valoración revisamos tu caso con tomografía 3D.",
  },
  {
    q: "¿Qué diferencia hay entre los implantes basales y los implantes convencionales?",
    a: "Los implantes convencionales necesitan suficiente hueso en la cresta de la encía, y cuando falta suele hacerse un injerto y esperar meses. Los implantes basales se anclan en el hueso cortical, la capa más densa y resistente del maxilar y la mandíbula. Esa firmeza permite la carga inmediata incluso con poco hueso.",
  },
  {
    q: "¿De verdad puedo tener dientes fijos en 72 horas?",
    a: "Sí, en los casos indicados. Con la técnica de carga inmediata colocamos los dientes fijos en un plazo aproximado de 72 horas después de la cirugía, sin esperar meses de cicatrización. Tu especialista te confirma en la valoración si eres candidato.",
  },
  {
    q: "¿Cuánto cuesta un implante dental en Colombia?",
    a: `${precioTexto()} de cuántos implantes necesitas, del tipo de prótesis y de si hacen falta extracciones u otros procedimientos previos. Te entregamos un presupuesto exacto después de la valoración con tomografía 3D, para que conozcas el costo total del tratamiento antes de empezar.`,
  },
  {
    q: "¿El procedimiento de implantes dentales duele?",
    a: "La cirugía se realiza con anestesia y técnicas mínimamente invasivas, así que no deberías sentir dolor durante el procedimiento. Después es normal sentir algo de molestia o inflamación durante unos días, que se controla con las indicaciones y la medicación que te damos.",
  },
  {
    q: "¿Cuánto duran los implantes dentales?",
    a: "Los implantes dentales son una solución de largo plazo. El titanio es un material biocompatible que se integra al hueso como una raíz natural. Su duración depende de mantener buena higiene, asistir a los controles periódicos y cuidar hábitos como no fumar.",
  },
  {
    q: "¿Puedo viajar desde otra ciudad o país para hacerme el tratamiento?",
    a: "Sí. Puedes hacer la valoración online antes de viajar y llegar con el tratamiento planificado. Como la carga inmediata se completa en unas 72 horas, el tratamiento se puede organizar en un viaje corto. Tu especialista te indica cuántos días quedarte para la cirugía y los controles.",
  },
  {
    q: "¿Dónde atienden y cómo agendo mi valoración?",
    a: "Atendemos en Barranquilla (Centro Médico Vital), en Bogotá (Chicó Norte) y en Maracaibo, Venezuela. También ofrecemos valoración online por videollamada. Para agendar, escríbenos por WhatsApp al +57 300 8990189 o usa el formulario de contacto.",
  },
];
