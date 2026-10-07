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
  ["enfoque", "Metodología"],
  ["soluciones", "Soluciones"],
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
    name: "Transformación tecnológica",
    kind: "Consultoría · BrickFlow",
    mark: MARK.brick,
    tagline: "Nuestra metodología aplicada a los procesos de su organización.",
    desc: "Acompañamos a su organización en la identificación de las oportunidades en las que la tecnología genera valor —automatización, datos, inteligencia artificial o nuevas plataformas—, en el diseño de la hoja de ruta, en su ejecución y en la preparación de los equipos para sostener el cambio.",
    points: ["Diagnóstico de procesos", "Hoja de ruta tecnológica", "Implementación y adopción"],
    hint: "Pase el cursor para ordenar el flujo",
    demo: [
      { label: "Procesos diagnosticados", value: "18" },
      { label: "Tareas automatizables", value: "7" },
      { label: "Equipos en adopción", value: "3" }
    ],
    alt: "Partículas dispersas que una red organiza en un muro de bloques: la metodología convierte la complejidad en procesos estructurados."
  }
];

export const PROBLEMS = [
  {
    icon: ICON.file,
    t: "Información fragmentada",
    d: "La información se encuentra dispersa en documentos, comunicaciones y sistemas que no ofrecen una visión unificada del negocio.",
    c: "Cada decisión exige reconstruir previamente el estado de la operación."
  },
  {
    icon: ICON.trace,
    t: "Procesos manuales",
    d: "La operación depende de hojas de cálculo, correos electrónicos y tareas repetitivas que consumen tiempo y aumentan el riesgo de error.",
    c: "Los equipos dedican su capacidad a ejecutar el proceso, no a mejorarlo."
  },
  {
    icon: ICON.swap,
    t: "Información inoportuna",
    d: "Los reportes llegan con retraso y los equipos no disponen de los datos necesarios para actuar a tiempo.",
    c: "Las decisiones se toman cuando el problema ya ha escalado."
  },
  {
    icon: ICON.layers,
    t: "Transiciones entre áreas",
    d: "Cada área utiliza herramientas distintas y el trabajo pierde continuidad en los puntos de entrega.",
    c: "La misma información debe explicarse y validarse en repetidas ocasiones."
  },
  {
    icon: ICON.msg,
    t: "Complejidad creciente",
    d: "Nuevos productos, normas y actores añaden capas a la operación sin una base digital que las organice.",
    c: "El crecimiento implica más excepciones y mayor esfuerzo manual."
  },
  {
    icon: ICON.chart,
    t: "Limitaciones de escala",
    d: "Las soluciones que funcionan para un equipo no siempre soportan mayor volumen, más usuarios o nuevas exigencias regulatorias.",
    c: "Cada etapa de crecimiento obliga a replantear decisiones estructurales."
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
  { t: "Negocio", d: "Conocimiento del sector fiduciario e inmobiliario." },
  { t: "Metodología", d: "Diagnóstico riguroso previo a toda propuesta." },
  { t: "Tecnología", d: "Herramientas pertinentes para cada caso." }
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
  { icon: ICON.flow, t: "Rediseño y automatización de procesos", d: "Eliminamos tareas manuales y repetitivas en conciliación, generación de reportes y comunicaciones." },
  { icon: ICON.db, t: "Datos y analítica", d: "Integramos la información y la convertimos en indicadores para la toma de decisiones." },
  { icon: ICON.cpu, t: "Inteligencia artificial", d: "Modelos que clasifican, concilian y detectan hallazgos, cuando el caso lo justifica." },
  { icon: ICON.layers, t: "Plataformas e integraciones", d: "Productos propios o integración con los sistemas existentes, según lo requiera cada caso." }
];

export const VALUES = [
  { n: "01", t: "Rigor", d: "Ninguna recomendación sin diagnóstico previo; cada decisión se sustenta en datos." },
  { n: "02", t: "Transparencia", d: "Comunicamos con claridad qué hacemos, cómo lo hacemos y qué resultados obtenemos." },
  { n: "03", t: "Colaboración", d: "Trabajamos junto a nuestros clientes en cada etapa del proceso." },
  { n: "04", t: "Mejora continua", d: "Medimos, aprendemos y ajustamos en cada ciclo." }
];

export const TESTIMONIALS = [
  { q: "Con DIS dejamos de perseguir la información en hojas de cálculo. Hoy nuestro equipo toma decisiones con una visión clara de cada activo y cada operación.", a: "Mariana Torres", r: "Directora de Operaciones · Horizonte Fiduciaria" },
  { q: "El acompañamiento del equipo fue clave para convertir un proceso complejo en una experiencia simple para nuestros inversionistas, sin perder control ni trazabilidad.", a: "Andrés Velasco", r: "Gerente de Transformación · Capitalia" },
  { q: "Encontramos un aliado que entiende el negocio y sabe qué tecnología aplicar. La solución se adaptó a nuestra operación y empezó a generar valor desde el primer ciclo.", a: "Laura Méndez", r: "Líder de Producto · Urbana Activos" }
];

export const CONTACT_DETAILS = {
  email: "contacto@dishub.co",
  address: "Calle 76 Nº 8-28, piso 3, Bogotá, Colombia",
  responseTime: "dos (2)"
};

export const STEPS = [
  {
    t: "Diagnóstico",
    d: "Analizamos la operación, sus actores y sus restricciones regulatorias, y cuantificamos dónde se generan pérdidas de tiempo, recursos o control.",
    out: "diagnóstico cuantificado y mapa de oportunidades"
  },
  {
    t: "Diseño de la solución",
    d: "Definimos con su equipo la combinación adecuada de procesos, datos y tecnología, priorizada según su impacto y viabilidad.",
    out: "alcance, prototipo y caso de negocio"
  },
  {
    t: "Validación",
    d: "Probamos la solución en un piloto controlado, con usuarios reales e indicadores acordados previamente.",
    out: "piloto con resultados medidos"
  },
  {
    t: "Escalamiento",
    d: "Extendemos lo validado al conjunto de la operación, transferimos capacidades a su equipo y hacemos seguimiento al impacto.",
    out: "indicadores de impacto y hoja de ruta"
  }
];

export const ERAS = [
  {
    year: "2020–2022",
    title: "Origen",
    items: [
      { k: "Problema", v: "Identificamos que la cadena de valor inmobiliaria operaba con procesos manuales y baja trazabilidad." },
      { k: "Exploración", v: "Evaluamos las herramientas disponibles en el mercado y su pertinencia para la región." },
      { k: "Hallazgo", v: "Las herramientas genéricas no atendían el problema de fondo; era necesario comprenderlo primero." }
    ]
  },
  {
    year: "2023",
    title: "Primer caso",
    items: [
      { k: "Diagnóstico", v: "Trabajamos con actores del negocio tradicional para dimensionar el problema." },
      { k: "Solución", v: "De ese trabajo surgió un primer marketplace de inversiones." },
      { k: "Validación", v: "Los usuarios finales confirmaron la existencia del problema y el valor de resolverlo." }
    ]
  },
  {
    year: "2024",
    title: "Constitución de DIS",
    items: [
      { k: "Independencia", v: "Constituimos una compañía dedicada a resolver los retos del sector mediante tecnología." },
      { k: "Metodología", v: "Formalizamos las etapas de diagnóstico, diseño, validación y escalamiento." },
      { k: "Ampliación", v: "Aplicamos la metodología a nuevos retos, de los cuales surgieron nuevas soluciones." }
    ]
  },
  {
    year: "2025 en adelante",
    title: "Resultados en operación",
    items: [
      { k: "Implementación", v: "Nuestras soluciones operan en entidades reales con impactos medibles." },
      { k: "Incubación", v: "Promovemos una cultura de innovación al interior de la compañía y con los actores del mercado." },
      { k: "Resultados", v: "Generamos eficiencias directas en las operaciones que aplican la metodología." }
    ]
  }
];

export const FAQS = [
  {
    q: "¿disHub es una empresa de desarrollo de software?",
    a: "No. Somos un laboratorio de innovación enfocado en resolver retos operativos. La tecnología, propia o de terceros, es un medio; en algunos casos la solución consiste en un ajuste de procesos o de datos, sin necesidad de desarrollo a la medida."
  },
  {
    q: "¿Qué tipo de organizaciones atienden?",
    a: "Sociedades fiduciarias, gestores de activos y fondos, operadores y desarrolladores inmobiliarios, grupos corporativos con operación inmobiliaria e inversionistas."
  },
  {
    q: "¿Es necesario adoptar uno de sus productos?",
    a: "No. Si alguna de nuestras soluciones atiende su necesidad, la proponemos; de lo contrario, diseñamos la respuesta adecuada con la misma metodología."
  },
  {
    q: "¿La solución se integra con nuestros sistemas actuales?",
    a: "Sí. Durante el diagnóstico revisamos sus sistemas contables, financieros y de gestión, y diseñamos la solución sobre ellos para evitar reprocesos y duplicidad de información."
  },
  {
    q: "¿Cómo protegen la información de nuestros clientes?",
    a: "Aplicamos control de acceso por roles, registro auditable de las operaciones y tratamiento de datos personales conforme a la Ley 1581 de 2012. Los detalles de infraestructura se comparten durante la etapa de diagnóstico."
  },
  {
    q: "¿Cuál es la duración del proceso?",
    a: "Depende del alcance de cada caso. El diagnóstico tiene un plazo definido y, a su cierre, se establecen el alcance del piloto y el cronograma de escalamiento."
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
