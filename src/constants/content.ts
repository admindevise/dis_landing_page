// Contenido centralizado del landing page

export const ICON = {
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8",
  trace: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM21 21l-4.3-4.3M8 11l2 2 4-4",
  swap: "M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  msg: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  chart: "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  server: "M2 3h20v7H2zM2 14h20v7H2zM6 6.5h.01M6 17.5h.01",
  usercheck: "M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM3 21v-2a6 6 0 0 1 12 0v2M17 11l2 2 4-4",
  landmark: "M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3z",
  briefcase: "M3 7h18v13H3zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
  building: "M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M16 10h4v12M2 22h20M8 6h4M8 10h4M8 14h4M8 18h4",
  network: "M9 2h6v6H9zM2 16h6v6H2zM16 16h6v6h-6zM12 8v4M5 16v-4h14v4",
  trend: "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  cpu: "M5 5h14v14H5zM9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4",
  db: "M12 2c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  flow: "M3 3h7v7H3zM14 14h7v7h-7zM10 6.5h4a3 3 0 0 1 3 3V14",
  merge: "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9"
};

export const MARK = {
  devise: "M6 4h16c11 0 20 9 20 20s-9 20-20 20H6V30h8v6h8a12 12 0 0 0 0-24H14v6H6zM16 22h6v14h-6zM24 18h4v18h-4z",
  valuo: "M24 2a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm0 8a9 9 0 0 1 9 9c0 6.5-9 15-9 15s-9-8.5-9-15a9 9 0 0 1 9-9zm0 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
  brick: "M4 30h18v10H4zM26 30h18v10H26zM15 18h18v10H15zM26 6h18v10H26z"
};

export const SITE = {
  bookingUrl: "https://outlook.office.com/book/DISHUB@gruposantarosa.co/?ismsaljsauthenabled",
  contactEndpoint: "[[CONTACT_ENDPOINT]]",
  links: {
    business: "[[URL_DEVISE_BUSINESS]]",
    marketplace: "[[URL_DEVISE_MARKETPLACE]]",
    valuo: "[[URL_VALUO]]",
    ai: "[[URL_BRICKFLOW]]"
  }
};

export const NAV = [
  ["nosotros", "Nosotros"],
  ["desafio", "Desafío"],
  ["enfoque", "Enfoque"],
  ["soluciones", "Qué construimos"],
  ["seguridad", "Seguridad"],
  ["historia", "Trayectoria"],
  ["contacto", "Contacto"]
];

export const SOLUTIONS = [
  {
    key: "business",
    name: "Devise Business",
    kind: "Gestión de activos",
    mark: MARK.devise,
    tagline: "Gestión centralizada de activos, inversionistas y reportes.",
    desc: "Administre fideicomisos, portafolios y movimientos con trazabilidad completa. Devise Business reúne la información financiera, contable y contractual en un solo entorno y genera reportes listos para auditoría.",
    points: ["Gestión de activos y portafolio", "Registro de inversionistas y movimientos", "Reportes y analítica en tiempo real"],
    hint: "Pase el cursor para separar los módulos",
    demo: [
      { label: "Fideicomisos en seguimiento", value: "24" },
      { label: "Movimientos conciliados hoy", value: "312" },
      { label: "Reportes listos para auditoría", value: "8" }
    ],
    alt: "Módulos de vidrio apilados que se ensamblan en una sola estructura, con pulsos de datos que la recorren: centralización y control."
  },
  {
    key: "marketplace",
    name: "Devise Marketplace",
    kind: "Inversión fraccionada",
    mark: MARK.devise,
    tagline: "Acceso a la inversión inmobiliaria, con liquidez.",
    desc: "Conecta a inversionistas con oportunidades inmobiliarias. Permite invertir por participaciones, seguir cada posición desde una cuenta digital y negociarlas en un entorno seguro.",
    points: ["Oportunidades de inversión fraccionada", "Cuenta digital del inversionista", "Compraventa digital de participaciones"],
    hint: "Pase el cursor para fraccionar el edificio",
    demo: [
      { label: "Participaciones disponibles", value: "1.250" },
      { label: "Inversionistas activos", value: "86" },
      { label: "Ofertas en mercado secundario", value: "14" }
    ],
    alt: "Edificio translúcido que se divide en unidades fraccionadas, con partículas que fluyen hacia nodos de inversionistas: inversión fraccionada y liquidez."
  },
  {
    key: "valuo",
    name: "Valuo",
    kind: "Valoración inmobiliaria",
    mark: MARK.valuo,
    tagline: "Avalúos precisos a partir de datos de mercado.",
    desc: "Estime el valor de un inmueble con base en comparables, tendencias y mapas de calor por zona, para decisiones de compra, venta o financiación mejor fundamentadas.",
    points: ["Avalúos con comparables", "Tendencias del mercado", "Mapas de calor por zona"],
    hint: "Pase el cursor para ampliar el radio de comparables",
    demo: [
      { label: "Comparables analizados", value: "42" },
      { label: "Radio de búsqueda", value: "1,5 km" },
      { label: "Rango de confianza", value: "± 6 %" }
    ],
    alt: "Ciudad en miniatura cuyas alturas forman un mapa de calor de valor, con un anillo que recorre la zona resaltando comparables: valoración precisa desde los datos."
  },
  {
    key: "ai",
    name: "Transformación con AI",
    kind: "Consultoría · BrickFlow",
    mark: MARK.brick,
    tagline: "Inteligencia artificial aplicada a sus procesos.",
    desc: "Acompañamos a su organización a identificar dónde la inteligencia artificial genera valor, diseñar la estrategia, automatizar procesos y preparar a los equipos para sostener el cambio.",
    points: ["Análisis y diagnóstico", "Estrategia y automatización", "Cultura y adopción"],
    hint: "Pase el cursor para ordenar el flujo",
    demo: [
      { label: "Procesos diagnosticados", value: "18" },
      { label: "Tareas automatizables", value: "7" },
      { label: "Equipos en adopción", value: "3" }
    ],
    alt: "Partículas dispersas que una red neuronal ordena en un muro de bloques: la inteligencia artificial convierte la complejidad en procesos estructurados."
  }
];

export const PROBLEMS = [
  {
    icon: ICON.file,
    t: "Contexto fragmentado",
    d: "La información vive en documentos, conversaciones y sistemas que no comparten una misma lectura del negocio.",
    c: "Cada decisión empieza reconstruyendo qué está pasando."
  },
  {
    icon: ICON.trace,
    t: "Procesos manuales",
    d: "El trabajo depende de hojas de cálculo, correos y tareas repetitivas que consumen tiempo y abren espacio para el error.",
    c: "El equipo opera el proceso en lugar de mejorarlo."
  },
  {
    icon: ICON.swap,
    t: "Decisiones sin señal",
    d: "Los equipos reciben reportes tarde y no cuentan con la información necesaria para actuar cuando todavía hay margen.",
    c: "La organización reacciona cuando el problema ya creció."
  },
  {
    icon: ICON.layers,
    t: "Handoffs frágiles",
    d: "Cada área resuelve su parte con herramientas distintas y el trabajo pierde continuidad en los puntos de entrega.",
    c: "La misma información se explica más de una vez."
  },
  {
    icon: ICON.msg,
    t: "Complejidad creciente",
    d: "Nuevos productos, reglas y actores agregan capas a la operación sin una base digital que las ordene.",
    c: "Crecer significa sumar excepciones y esfuerzo manual."
  },
  {
    icon: ICON.chart,
    t: "Escala difícil",
    d: "La solución que funcionaba para un equipo no siempre está preparada para más usuarios, volumen o exigencia regulatoria.",
    c: "Cada etapa de crecimiento reabre decisiones básicas."
  }
];

export const SECURITY_CONTROLS = [
  { icon: ICON.usercheck, title: "Gobierno de accesos", desc: "Permisos por rol, separación de funciones y revisión periódica de accesos." },
  { icon: ICON.server, title: "Infraestructura", desc: "Nube con cifrado en tránsito y en reposo." },
  { icon: ICON.trace, title: "Trazabilidad", desc: "Registro auditable de cada operación: quién, qué y cuándo." },
  { icon: ICON.lock, title: "Protección de datos", desc: "Tratamiento de datos personales conforme a la Ley 1581 de 2012 y sus decretos reglamentarios." }
];

export const KEYWORDS = [
  "Fiduciarias",
  "Activos",
  "Fondos",
  "Desarrolladores",
  "Inversionistas",
  "Operaciones inmobiliarias",
  "Cumplimiento"
];

export const CLIENT_SLOTS = [
  "[[LOGO_CLIENTE_1]]",
  "[[LOGO_CLIENTE_2]]",
  "[[LOGO_CLIENTE_3]]",
  "[[LOGO_ALIADO_1]]",
  "[[LOGO_ALIADO_2]]"
];

export const PROOFS = [
  "Tecnología propia desde 2023",
  "Especialización en el negocio fiduciario e inmobiliario",
  "Equipo en Bogotá, Colombia"
];

export const PILLARS = [
  { t: "Negocio", d: "Conocimiento fiduciario e inmobiliario." },
  { t: "Producto", d: "Diseño centrado en quien opera." },
  { t: "Ingeniería", d: "Arquitectura segura y escalable." }
];

export const METRICS = [
  { v: "[[CIFRA_1]]", l: "Procesos operativos automatizados" },
  { v: "[[CIFRA_2]]", l: "Activos gestionados en nuestras plataformas" },
  { v: "[[CIFRA_3]]", l: "Reducción del tiempo operativo" },
  { v: "[[CIFRA_4]]", l: "Entidades que usan nuestras soluciones" }
];

export const SECTORS = [
  { icon: ICON.landmark, t: "Sociedades fiduciarias", d: "Digitalizan la gestión de fideicomisos, automatizan procesos y fortalecen la trazabilidad." },
  { icon: ICON.briefcase, t: "Gestores de activos y fondos", d: "Administran portafolios con analítica, reportes financieros y opciones de liquidez." },
  { icon: ICON.building, t: "Operadores y desarrolladores", d: "Centralizan activos, contratos y rentas para mejorar la rentabilidad." },
  { icon: ICON.network, t: "Grupos corporativos", d: "Modernizan su operación inmobiliaria con trazabilidad y cumplimiento." },
  { icon: ICON.trend, t: "Inversionistas", d: "Acceden a información en tiempo real y a operaciones seguras y transparentes." }
];

export const CAPABILITIES = [
  { icon: ICON.cpu, t: "Inteligencia artificial aplicada", d: "Modelos que clasifican, concilian y detectan hallazgos en la operación." },
  { icon: ICON.db, t: "Datos y analítica", d: "Información unificada y reportes que soportan decisiones." },
  { icon: ICON.layers, t: "Plataformas SaaS", d: "Productos especializados, seguros y escalables para entidades del sector." },
  { icon: ICON.merge, t: "Integración y automatización", d: "Conexión con sistemas contables y financieros existentes." }
];

export const VALUES = [
  { n: "01", t: "Rigor", d: "Cada decisión se sustenta en datos y en el conocimiento del negocio." },
  { n: "02", t: "Transparencia", d: "Comunicamos con claridad qué hacemos, cómo y con qué resultados." },
  { n: "03", t: "Colaboración", d: "Construimos con nuestros clientes, no solo para ellos." },
  { n: "04", t: "Mejora continua", d: "Medimos, aprendemos y ajustamos en cada ciclo." }
];

export const TESTIMONIALS = [
  { q: "Con DIS dejamos de perseguir la información en hojas de cálculo. Hoy nuestro equipo toma decisiones con una visión clara de cada activo y cada operación.", a: "Mariana Torres", r: "Directora de Operaciones · Horizonte Fiduciaria" },
  { q: "El acompañamiento del equipo fue clave para convertir un proceso complejo en una experiencia simple para nuestros inversionistas, sin perder control ni trazabilidad.", a: "Andrés Velasco", r: "Gerente de Transformación · Capitalia" },
  { q: "Encontramos un aliado que entiende el negocio y también sabe construir tecnología. La solución se adaptó a nuestra operación y empezó a generar valor desde el primer ciclo.", a: "Laura Méndez", r: "Líder de Producto · Urbana Activos" }
];

export const CONTACT_DETAILS = {
  email: "contacto@dishub.co",
  address: "Calle 76 Nº 8-28, piso 3, Bogotá, Colombia",
  responseTime: "2"
};

export const STEPS = [
  {
    t: "Descubrimiento",
    d: "Entendemos su operación, sus actores y sus restricciones regulatorias. Identificamos dónde se pierde tiempo, dinero o control.",
    out: "diagnóstico y mapa de oportunidades"
  },
  {
    t: "Diseño",
    d: "Definimos la solución con usted: flujos, reglas de negocio, datos e integraciones, priorizados por impacto.",
    out: "alcance, prototipo y plan de implementación"
  },
  {
    t: "Construcción",
    d: "Desarrollamos e integramos por fases cortas, con validaciones periódicas y pruebas con usuarios reales.",
    out: "solución funcional validada"
  },
  {
    t: "Escalamiento",
    d: "Acompañamos la puesta en producción, medimos resultados y extendemos la solución a nuevas áreas.",
    out: "indicadores de impacto y hoja de ruta"
  }
];

export const ERAS = [
  {
    year: "2020–2022",
    title: "Origen y conceptualización",
    items: [
      { k: "Problema", v: "Identificamos el potencial de digitalizar la cadena de valor inmobiliaria para la banca tradicional." },
      { k: "Exploración", v: "Evaluamos las soluciones existentes en el mercado." },
      { k: "Hallazgo", v: "No existía una solución a la medida para las necesidades de la industria y la región." }
    ]
  },
  {
    year: "2023",
    title: "Desarrollo propio",
    items: [
      { k: "Construcción", v: "Desarrollamos un primer marketplace de inversiones con una arquitectura especializada." },
      { k: "Colaboración", v: "Trabajamos con actores del negocio tradicional para alinear la solución." },
      { k: "Validación", v: "Los usuarios finales confirmaron el problema y la necesidad de resolverlo." }
    ]
  },
  {
    year: "2024",
    title: "Nace DIS",
    items: [
      { k: "Independencia", v: "Creamos una compañía dedicada al desarrollo de soluciones tecnológicas." },
      { k: "Ampliación", v: "Identificamos nuevas soluciones para el mercado." },
      { k: "Arquitectura", v: "La madurez de FinTech, SaaS e IA nos permitió construir soluciones robustas y especializadas." }
    ]
  },
  {
    year: "2025 en adelante",
    title: "Producción",
    items: [
      { k: "Implementación", v: "Llevamos las soluciones a operaciones reales con impactos positivos." },
      { k: "Incubación", v: "Promovemos una cultura de innovación interna y con los actores del mercado." },
      { k: "Resultados", v: "Generamos eficiencias directas en las operaciones que usan nuestras soluciones." }
    ]
  }
];

export const FAQS = [
  {
    q: "¿Qué tipo de organizaciones atienden?",
    a: "Sociedades fiduciarias, gestores de activos, operadores y desarrolladores inmobiliarios, grupos corporativos con operación inmobiliaria e inversionistas."
  },
  {
    q: "¿Las soluciones se integran con nuestros sistemas actuales?",
    a: "Sí. En la etapa de diseño definimos las integraciones necesarias con sus sistemas contables, financieros y de gestión, para evitar reprocesos y duplicidad de información."
  },
  {
    q: "¿Cómo protegen la información de nuestros clientes?",
    a: "Aplicamos control de acceso por roles, registro auditable de las operaciones y tratamiento de datos conforme a la Ley 1581 de 2012. Los detalles de infraestructura se comparten en la etapa de diagnóstico."
  },
  {
    q: "¿Cuánto tarda una implementación?",
    a: "Depende del alcance. Trabajamos por fases cortas con entregables verificables; el plazo estimado se define al cierre de la etapa de descubrimiento."
  },
  {
    q: "¿Puedo empezar con una sola solución?",
    a: "Sí. Cada solución funciona de manera independiente y se puede ampliar después dentro del mismo ecosistema."
  }
];

export const FIELDS = [
  { name: "nombre", label: "Nombre completo", type: "text", ac: "name", max: 80 },
  { name: "empresa", label: "Empresa", type: "text", ac: "organization", max: 100 },
  { name: "email", label: "Correo corporativo", type: "email", ac: "email", max: 120 },
  { name: "telefono", label: "Teléfono (opcional)", type: "tel", ac: "tel", max: 20 }
];

export interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
  consent: boolean;
  web: string;
}

export const EMPTY_FORM: FormData = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  interes: "",
  mensaje: "",
  consent: false,
  web: ""
};
