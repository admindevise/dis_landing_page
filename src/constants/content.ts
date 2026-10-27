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
    hospitality: "[[URL_DEVISE_HOSPITALITY]]",
    tokenize: "[[URL_DEVISE_TOKENIZE]]",
    ai: "[[URL_BRICKFLOW]]"
  }
};

export const NAV = [
  ["nosotros", "Nosotros"],
  // ["desafio", "Desafío"],
  ["metodologia", "Metodología Brickflow"],
  ["soluciones", "Soluciones"],
  ["historia", "Trayectoria"],
  ["contacto", "Contacto"]
];

export const SOLUTIONS = [
  {
    key: "business",
    name: "Devise Trust",
    kind: "IA agéntica y control transversal · Vehículos de inversión",
    mark: MARK.devise,
    tagline: "Copiloto operativo con 5 agentes de IA que cruzan contratos, contabilidad y reglas de negocio sin tocar tus sistemas centrales.",
    desc: "Crea el gemelo digital (Expediente Vivo) de cada vehículo o negocio administrado. Sus cinco agentes de IA contrastan contratos sin formato estándar contra tu contabilidad en modo solo lectura, alertando fugas de ingresos y vencimientos con evidencia exacta.",
    points: [
      "Motor de 5 agentes de IA (Archivista, Jurídico, Contable, Conciliador y Auditor) que cruzan con evidencia, sin adivinar.",
      "Memoria institucional auditable: unifica lo jurídico, contable y operativo sin reemplazar tus sistemas actuales.",
      "Core blindado y humano en el circuito: acceso 100% de solo lectura; el motor propone con pruebas y tu equipo aprueba."
    ],
    hint: "Pase el cursor para separar los módulos",
    demo: [
      { label: "Captura de comisiones y cobros subfacturados", value: "+ Ingresos" },
      { label: "En búsqueda manual; más negocios por administrador", value: "- Horas" },
      { label: "Auditando reglas en modo 100% solo lectura", value: "5 Agentes" }
    ],
    alt: "Módulos conectados que representan agentes de IA contrastando contratos, contabilidad y reglas con evidencia."
  },
  {
    key: "marketplace",
    name: "Devise Marketplace",
    kind: "Infraestructura y distribución B2B2C",
    mark: MARK.devise,
    tagline: "Distribuye vehículos de inversión directamente en las billeteras digitales y canales masivos donde ya existe la liquidez.",
    desc: "Capa de interconexión (API) que despliega tus vehículos de inversión y activos fraccionados en billeteras digitales y plataformas reguladas sin costos de adquisición minorista, automatizando en segundo plano la conciliación de micro-transacciones, el control contractual y la dispersión de giros.",
    points: [
      "Distribución nativa en rieles masivos: conexión directa con billeteras digitales y plataformas reguladas (cero fricción de CAC).",
      "Pasarela tipo Peaje (API Hub): comunica en tiempo real a originadores y administradores de vehículos con los canales de distribución.",
      "Conciliación de micro-tickets y giros: automatiza miles de órdenes fraccionadas (desde $100K COP) y la dispersión de rendimientos."
    ],
    hint: "Pase el cursor para fraccionar el edificio",
    demo: [
      { label: "Tiempo en dispersión de giros y registro", value: "-95%" },
      { label: "Ticket mínimo habilitado en canales masivos", value: "$100K" },
      { label: "Carga operativa adicional para el administrador", value: "0" }
    ],
    alt: "Edificio dividido en unidades de inversión conectadas con billeteras digitales y canales de distribución."
  },
  {
    key: "hospitality",
    name: "Devise Pulse",
    kind: "IA operativa y control financiero en vivo",
    mark: MARK.devise,
    tagline: "Tu agente CFO con IA que conecta la gerencia con la primera línea operativa vía WhatsApp.",
    desc: "Agente de inteligencia artificial que monitorea el pulso financiero y operativo de la empresa en tiempo real y traduce cada desviación en instrucciones inmediatas para el personal de campo por WhatsApp, sin portales nuevos, reportes estáticos ni comités.",
    points: [
      "Agente IA financiero: monitoreo continuo de flujo de caja, márgenes, presupuestos y cuellos de botella.",
      "Ejecución en terreno vía WhatsApp: lleva los insights de la dirección a los empleados de a pie en el canal que ya usan.",
      "Accionables inmediatos sin reuniones: asigna tareas y valida la ejecución de arriba abajo en tiempo real."
    ],
    hint: "Pase el cursor para activar el flujo de ejecución",
    demo: [
      { label: "Visibilidad y ejecución gerencia-terreno", value: "En vivo" },
      { label: "Tiempo en comités y consolidación de reportes", value: "-80%" },
      { label: "Adopción inmediata en campo vía WhatsApp", value: "100%" }
    ],
    alt: "Flujo financiero y operativo que conecta la gerencia con equipos de campo a través de WhatsApp."
  },
  {
    key: "tokenize",
    name: "Devise Tokenize",
    kind: "Infraestructura blockchain",
    mark: MARK.devise,
    tagline: "Tokenización de activos de inversión, fondos y vehículos estructurados con cumplimiento programable.",
    desc: "Infraestructura blockchain que transforma participaciones tradicionales en activos digitales programables, integrando reglas normativas, límites de tenencia, dispersión de giros y liquidación automática en mercado secundario directamente desde el código.",
    points: [
      "Emisión digital de vehículos y fondos: representación en cadena de deuda, capital o activos reales con respaldo técnico.",
      "Cumplimiento programado: reglas SARLAFT/KYC y restricciones de transferencia ejecutadas por contrato inteligente.",
      "Liquidación y registro inmutable: dispersión automatizada de giros y trazabilidad de tenencia en tiempo real."
    ],
    hint: "Pase el cursor para verificar los bloques en cadena",
    demo: [
      { label: "Liquidación y registro instantáneo", value: "T+0" },
      { label: "Reglas de cumplimiento ejecutadas por código", value: "100%" },
      { label: "Trazabilidad inmutable en cadena", value: "24/7" }
    ],
    alt: "Activo dividido en unidades digitales con reglas de cumplimiento y movimientos registrados en cadena."
  },
  {
    key: "valuo",
    name: "Valuo",
    kind: "IA y modelos de valoración inmobiliaria",
    mark: MARK.valuo,
    tagline: "Modelos de IA para avalúos precisos a partir de datos dinámicos de mercado.",
    desc: "Procesa mediante inteligencia artificial y modelos estadísticos miles de comparables, tendencias y mapas de calor por zona para estimar el valor de un inmueble con precisión y respaldar decisiones de compra, venta o financiación.",
    points: [
      "Valoración asistida por IA: cruce automatizado de oferta, demanda y cierres comparables.",
      "Modelos de tendencias de mercado: análisis predictivo de absorción y precios por metro cuadrado.",
      "Inteligencia geoespacial: mapas de calor dinámicos por zona y radio de influencia."
    ],
    hint: "Pase el cursor para ampliar el radio de comparables",
    demo: [
      { label: "Comparables analizados por activo", value: "42" },
      { label: "Radio dinámico de búsqueda", value: "1,5 km" },
      { label: "Rango de confianza del modelo", value: "± 6 %" }
    ],
    alt: "Mapa de calor de valor inmobiliario con un radio dinámico que destaca comparables de mercado."
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

// Seis pasos de cada solución: recorren el objeto 3D de la sección Soluciones y su línea de pasos.
// `tag` es el dato que se lee en la fachada de cada nivel (valores ilustrativos).
export const SOLUTION_FLOWS = {
  business: [
    { name: "Conecta", summary: "5 fuentes en solo lectura", title: "Observa sin intervenir", desc: "ERP, core, gestor documental, facturación y correo, sin migrar nada.", tag: "5 fuentes" },
    { name: "Comprende", summary: "Reglas extraídas del contrato", title: "Lee el negocio, no solo el documento", desc: "Contratos y otrosíes convertidos en reglas auditables.", tag: "Cláusula 14.2" },
    { name: "Cruza", summary: "Regla frente a evidencia", title: "La regla frente a la evidencia", desc: "Cada regla se enfrenta a la factura emitida y al asiento contable.", tag: "46/47 conciliadas" },
    { name: "Explica", summary: "Hallazgos con su evidencia", title: "Hallazgos que se explican solos", desc: "Cláusula, cálculo, asiento e impacto económico en un solo hallazgo.", tag: "Hallazgo H-0412" },
    { name: "Decide", summary: "Su equipo tiene la última palabra", title: "La IA propone. Su equipo decide.", desc: "Un responsable aprueba, ajusta o descarta, con su justificación.", tag: "Aprobar o ajustar" },
    { name: "Audita", summary: "Rastro completo en el expediente", title: "Todo queda en el expediente", desc: "La decisión y su evidencia quedan listas para la próxima auditoría.", tag: "Rastro completo" }
  ],
  hospitality: [
    { name: "Monitorea", summary: "Finanzas y operación en tiempo real", title: "El pulso de la operación, en vivo", desc: "El agente observa el flujo de caja, los márgenes, los presupuestos y los cuellos de botella.", tag: "Pulso en vivo" },
    { name: "Detecta", summary: "Desviaciones frente a las reglas", title: "Cada desviación, identificada", desc: "El monitoreo continuo permite reconocer cambios que requieren atención.", tag: "Desviación detectada" },
    { name: "Interpreta", summary: "Contexto para cada hallazgo", title: "Una señal con contexto", desc: "La dirección recibe información accionable sobre el estado financiero y operativo.", tag: "Hallazgo priorizado" },
    { name: "Asigna", summary: "Instrucciones por WhatsApp", title: "La instrucción llega al equipo", desc: "El agente traduce la desviación en una instrucción inmediata para el personal de campo.", tag: "Tarea asignada" },
    { name: "Ejecuta", summary: "En el canal que el equipo ya usa", title: "Sin portales nuevos", desc: "El equipo recibe y atiende las instrucciones desde WhatsApp.", tag: "WhatsApp" },
    { name: "Verifica", summary: "Ejecución visible en tiempo real", title: "La gerencia sigue la ejecución", desc: "La empresa valida la respuesta de arriba abajo en tiempo real, sin esperar al siguiente comité.", tag: "Ejecución verificada" }
  ],
  tokenize: [
    { name: "Estructura", summary: "El activo y su vehículo legal", title: "Primero, el activo y sus reglas", desc: "Títulos, avalúo y contrato fiduciario reunidos como base de la emisión.", tag: "Activo AT-07" },
    { name: "Valora", summary: "Un valor de referencia sustentado", title: "Un valor que se puede sustentar", desc: "El avalúo y sus supuestos quedan ligados a cada unidad emitida.", tag: "Avalúo vigente" },
    { name: "Fracciona", summary: "Unidades digitales del activo", title: "El activo, en unidades", desc: "Cada token representa una fracción definida del activo y de sus derechos.", tag: "10.000 unidades" },
    { name: "Verifica", summary: "Participantes validados", title: "Solo participantes verificados", desc: "Conocimiento del cliente y listas restrictivas antes de cada asignación.", tag: "KYC aprobado" },
    { name: "Registra", summary: "Cada movimiento, en registro", title: "Un registro que no se reescribe", desc: "Emisiones y transferencias quedan en un registro consultable e inalterable.", tag: "Bloque 4.812" },
    { name: "Distribuye", summary: "Rendimientos por unidad", title: "Rendimientos a cada unidad", desc: "Los flujos del activo se reparten según la participación de cada titular.", tag: "Pago trimestral" }
  ],
  marketplace: [
    { name: "Publica", summary: "Oportunidades con su ficha", title: "Cada oportunidad, con su ficha", desc: "Proyecto, documentos y condiciones de inversión en un solo lugar.", tag: "Torre Norte" },
    { name: "Fracciona", summary: "Participaciones con valor definido", title: "El inmueble, en participaciones", desc: "Cada proyecto se divide en participaciones con valor y derechos definidos.", tag: "1.250 partic." },
    { name: "Invierte", summary: "Aporte en línea, con soporte", title: "Invertir en pocos pasos", desc: "Vinculación, aporte y certificado desde la cuenta digital.", tag: "Aporte confirmado" },
    { name: "Sigue", summary: "Su posición al día", title: "Cada posición a la vista", desc: "Rendimientos, documentos y movimientos del inversionista en su cuenta.", tag: "Posición al día" },
    { name: "Negocia", summary: "Mercado secundario", title: "Liquidez entre inversionistas", desc: "Las participaciones se ofrecen y transfieren en un entorno controlado.", tag: "14 ofertas" },
    { name: "Liquida", summary: "Transferencias registradas", title: "Cada transferencia, registrada", desc: "Pagos y cambios de titularidad conciliados y listos para auditoría.", tag: "Registro al día" }
  ],
  valuo: [
    { name: "Ubica", summary: "El inmueble y su entorno", title: "Todo empieza en la dirección", desc: "Ubicación, área, uso del suelo y normativa del predio.", tag: "Predio 0412" },
    { name: "Compara", summary: "Comparables dentro del radio", title: "Comparables, no suposiciones", desc: "Ofertas y transacciones similares dentro de un radio definido.", tag: "42 comparables" },
    { name: "Homologa", summary: "Ajustes por área y estado", title: "Cada comparable, homologado", desc: "Ajustes por área, antigüedad, piso y estado, cada uno con su porcentaje.", tag: "Ajuste −4 %" },
    { name: "Analiza", summary: "La tendencia de la zona", title: "La tendencia de la zona", desc: "Precio por metro cuadrado y su evolución en los últimos meses.", tag: "+3,1 % anual" },
    { name: "Mapea", summary: "Calor de valor por manzana", title: "El valor, sobre el mapa", desc: "Mapas de calor por zona para leer dónde sube el valor y dónde se estanca.", tag: "Zona alta" },
    { name: "Estima", summary: "Valor con rango de confianza", title: "Un valor con su rango", desc: "Valor estimado con su rango de confianza y la evidencia que lo sostiene.", tag: "± 6 %" }
  ]
};

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
  { icon: ICON.usercheck, title: "Gobierno de accesos", desc: "Permisos granulares por rol, separación de funciones, aprobación humana en flujos críticos y revisión periódica de accesos." },
  { icon: ICON.server, title: "Infraestructura", desc: "Despliegue en servidores propios, nube privada o entornos híbridos con cifrado de extremo a extremo en tránsito y en reposo." },
  { icon: ICON.trace, title: "Trazabilidad", desc: "Registro inmutable y auditable de cada operación e inferencia: quién, qué, cuándo y bajo qué regla se ejecutó." },
  { icon: ICON.lock, title: "Protección y soberanía de datos", desc: "Tratamiento alineado con la Ley 1581 e ISO/IEC 27001. Tus datos permanecen dentro de tu perímetro y nunca entrenan modelos de terceros." }
];

export const KEYWORDS = [
  "Fiduciarias",
  "Banca de Inversión",
  "Gestores de Activos",
  "Fondos de Capital Privado",
  "Desarrolladores Inmobiliarios",
  "Bancos y Financieras",
  "Aseguradoras",
  "Grupos Corporativos",
  "Operaciones Reguladas"
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
  { t: "Negocio", d: "Conocimiento del sector financiero, fiduciario e inmobiliario." },
  { t: "Metodología", d: "Diagnóstico riguroso previo a toda propuesta." },
  { t: "Tecnología", d: "IA, datos y automatización fintech y proptech donde el caso lo justifica." }
];

export const METRICS = [
  { v: "[[CIFRA_1]]", l: "Procesos operativos automatizados" },
  { v: "[[CIFRA_2]]", l: "Activos gestionados en nuestras plataformas" },
  { v: "[[CIFRA_3]]", l: "Reducción del tiempo operativo" },
  { v: "[[CIFRA_4]]", l: "Entidades que usan nuestras soluciones" }
];

export const SECTORS = [
  { icon: ICON.landmark, t: "Sociedades fiduciarias y banca", d: "Digitalizan la gestión de fideicomisos y vehículos, automatizan conciliaciones sobre sistemas centrales y fortalecen la trazabilidad ante entes de control." },
  { icon: ICON.briefcase, t: "Gestores de activos y banca de inversión", d: "Estructuran, tokenizan y distribuyen portafolios con analítica en tiempo real, reportes auditables y canales de liquidez." },
  { icon: ICON.building, t: "Operadores y desarrolladores inmobiliarios", d: "Centralizan activos, contratos, avalúos y rentas para maximizar la rentabilidad operativa del portafolio." },
  { icon: ICON.network, t: "Aseguradoras, salud y sectores regulados", d: "Automatizan el análisis documental, la auditoría de cuentas, la suscripción de riesgo y el cumplimiento bajo estricta privacidad del dato." },
  { icon: ICON.trend, t: "Grupos corporativos e industria", d: "Conectan la estrategia financiera con la ejecución en campo (vía agentes y WhatsApp) y modernizan procesos críticos con trazabilidad total." }
];

export const CAPABILITIES = [
  { icon: ICON.flow, t: "Rediseño y automatización de procesos", d: "Eliminamos tareas manuales y repetitivas en conciliación, generación de reportes y comunicaciones." },
  { icon: ICON.db, t: "Datos y analítica", d: "Integramos la información y la convertimos en indicadores para la toma de decisiones." },
  { icon: ICON.cpu, t: "Inteligencia artificial", d: "Modelos que clasifican, concilian y detectan hallazgos, cuando el caso lo justifica." },
  { icon: ICON.layers, t: "Plataformas e integraciones", d: "Productos propios o integración con los sistemas existentes, según lo requiera cada caso." }
];

export const VALUES = [
  { n: "01", t: "De «funciona» a «factura»", d: "El código no sirve si no genera valor monetizable en producción." },
  { n: "02", t: "IA en el P&L", d: "La innovación debe verse en el estado de resultados o en eficiencia operativa real." },
  { n: "03", t: "Profundidad radical", d: "Perfeccionamos y rentabilizamos al máximo lo que ya existe en tu operación." },
  { n: "04", t: "Dueños del problema", d: "El mismo equipo que escucha en la primera línea es quien construye la solución." },
  { n: "05", t: "Acción–reacción", d: "Entendemos la necesidad y entregamos la solución de inmediato, sin burocracia." },
  { n: "06", t: "Work as a Service", d: "No entregamos software vacío; nuestra tecnología asume la carga operativa desde el día uno." }
];

export const TESTIMONIALS = [
  { q: "Con DIS dejamos de perseguir la información en hojas de cálculo. Hoy nuestro equipo toma decisiones con una visión clara de cada activo y cada operación.", a: "Mariana Torres", r: "Directora de Operaciones · Horizonte Fiduciaria" },
  { q: "El acompañamiento del equipo fue clave para convertir un proceso complejo en una experiencia simple para nuestros inversionistas, sin perder control ni trazabilidad.", a: "Andrés Velasco", r: "Gerente de Transformación · Capitalia" },
  { q: "Encontramos un aliado que entiende el negocio y sabe qué tecnología aplicar. La solución se adaptó a nuestra operación y empezó a generar valor desde el primer ciclo.", a: "Laura Méndez", r: "Líder de Producto · Urbana Activos" }
];

export const CONTACT_DETAILS = {
  email: "contactenos@gruposantarosa.co",
  phone: "+57 311 489 65 08",
  address: "Ak 15 #93a-84, Oficina 506, Edificio Business 93, Bogotá, Colombia"
};

export const STEPS = [
  {
    t: "Diagnóstico y Cimiento",
    layer: "Cimiento",
    lead: "Director de Transformación (FDT) + apoyo FDE",
    counterpart: "Comité Directivo, Líderes de Negocio y Riesgo",
    d: "Auditamos procesos, sistemas y exposición regulatoria en conjunto. Identificamos dónde la IA mueve un indicador real del negocio y seleccionamos los casos prioritarios por valor y factibilidad.",
    out: "Mapa de oportunidades priorizado"
  },
  {
    t: "Arquitectura y Estructura",
    layer: "Estructura",
    lead: "Ingeniero Desplegado en Campo (FDE)",
    counterpart: "Dirección de TI, Arquitectura y Seguridad (CISO)",
    d: "Diseñamos una infraestructura duradera según la sensibilidad del dato, el costo y la norma: en servidores propios, nube privada o modelos comerciales y de código abierto, definiendo controles de acceso, registro y retención.",
    out: "Plataforma segura operando en tu infraestructura"
  },
  {
    t: "Agentes en el Flujo Operativo",
    layer: "Flujo Operativo",
    lead: "Ingeniero Desplegado en Campo (FDE)",
    counterpart: "Expertos de Dominio, Operadores y Equipos de Primera Línea",
    d: "Integramos sistemas directamente sobre tus plataformas centrales para conciliar, revisar y reportar en el trabajo diario. Cada flujo mantiene reglas explícitas y aprobación humana donde la operación lo exige.",
    out: "Flujos críticos y casos de uso en producción"
  },
  {
    t: "Adopción y Capacidad Instalada",
    layer: "Capacidad Instalada",
    lead: "Director de Transformación (FDT)",
    counterpart: "Gerentes de Área, Comité de IA y Usuarios Finales",
    d: "Formamos a los equipos por rol, instalamos el gobierno de IA y medimos el uso real. Tu organización opera la solución de forma autónoma mientras el FDT acompaña a la dirección para medir el impacto y escalar los siguientes casos.",
    out: "Capacidad instalada y gobierno activo en tu equipo"
  }
];

export const BF_COMMITMENTS = [
  { t: "Su dato vive donde su política lo permita", d: "On-premise, nube privada o proveedor comercial: la arquitectura se elige por caso, no por defecto." },
  { t: "Trazabilidad de cada decisión", d: "Fuente, regla aplicada y aprobación quedan registradas y son exportables." },
  { t: "Despliegue en semanas, no trimestres", d: "Partimos de un caso priorizado y de sus sistemas actuales, sin rehacer su arquitectura." },
  { t: "IA en la operación, no en un piloto", d: "El objetivo es un proceso en producción con dueño interno, no una demostración." }
];

export const BF_CAPABILITIES = [
  {
    t: "Inteligencia Documental y Estructuración",
    d: "Sistemas que leen, cruzan y extraen información crítica de contratos, escrituras, estados financieros y expedientes complejos con precisión auditable.",
    items: ["Debida diligencia y análisis de activos", "Cruce automático contra reglas de negocio", "Trazabilidad exacta a la página y párrafo fuente"]
  },
  {
    t: "Conciliación y Operación Central",
    d: "Agentes conectados a tus ERPs y sistemas centrales que ejecutan cruces operativos, conciliaciones financieras y generación de reportes sin fricción manual.",
    items: ["Integración directa con sistemas existentes", "Ejecución con supervisión y aprobación humana", "Reducción de tiempos de cierre y error operativo"]
  },
  {
    t: "Riesgo, Cumplimiento y Auditoría",
    d: "Automatización de controles preventivos, monitoreo transaccional y verificación normativa sin que la información sensible salga del perímetro de tu entidad.",
    items: ["Reglas explícitas y bitácoras deterministas", "Alertas tempranas y soporte a oficialías de cumplimiento", "Evidencia lista para revisoría fiscal y entes de control"]
  },
  {
    t: "Infraestructura Privada y Gobierno de IA",
    d: "Despliegue de modelos comerciales o de código abierto bajo control exclusivo de tu organización, con políticas claras de uso, costos predecibles y seguridad por rol.",
    items: ["Servidores propios, nube privada o híbrida", "Control granular de acceso y retención de datos", "Monitoreo de adopción y rendimiento en tiempo real"]
  }
];

export const BF_COMPARE = [
  { k: "Control del dato", generic: "El dato viaja a servidores de terceros, a menudo fuera del país.", us: "Tú decides dónde vive el dato: on-premise, nube privada o proveedor, caso por caso." },
  { k: "Cumplimiento", generic: "Adaptas tus políticas a los términos del proveedor.", us: "La arquitectura se diseña sobre tus políticas de seguridad y de datos personales." },
  { k: "Modelo de costo", generic: "Pago por consulta, variable y difícil de presupuestar.", us: "Comparamos infraestructura propia, nube y API comercial por caso; costo predecible." },
  { k: "Trazabilidad", generic: "Respuestas sin registro auditable del razonamiento.", us: "Cada decisión registra fuente, regla aplicada y responsable." },
  { k: "Despliegue", generic: "Rápido para probar, lento para integrar con sistemas core.", us: "Integración con tus sistemas en semanas, junto a tu equipo de TI." },
  { k: "Preparación ante revisor", generic: "Evidencia dispersa entre proveedor y cliente.", us: "Bitácora y documentación listas para revisoría fiscal y auditoría." }
];

// Del anillo interior (0) al exterior (3) de la cúpula de marcos.
export const BF_FRAMEWORKS = [
  { tag: "Privacidad y soberanía del dato", short: "Ley 1581 · GDPR", t: "Ley 1581 / Habeas Data y GDPR", d: "Tratamiento, anonimización y circulación de datos sensibles o estratégicos estrictamente dentro del perímetro de la organización, sin entrenar modelos de terceros." },
  { tag: "Riesgo operacional y trazabilidad", short: "SARO · ISO 31000", t: "SARO / ISO 31000 / Revisoría Fiscal", d: "Controles deterministas, bitácoras de eventos inmutables y responsables definidos para cada flujo automatizado, listos para auditoría interna y externa." },
  { tag: "Cumplimiento y debida diligencia", short: "SARLAFT · SAGRILAFT · PTEE", t: "SARLAFT / SAGRILAFT / PTEE", d: "Agentes que aceleran la verificación de contrapartes, proveedores y activos cumpliendo tanto con normativas financieras como con regímenes del sector real (Supersociedades)." },
  { tag: "Seguridad de la información", short: "ISO/IEC 27001 · SOC 2", t: "ISO/IEC 27001 y SOC 2", d: "Arquitecturas diseñadas bajo estándares internacionales de control de acceso por rol, cifrado de extremo a extremo, retención controlada y continuidad operativa." }
];

export const BF_PROFILES = [
  "Banca de Inversión",
  "Sociedades Fiduciarias",
  "Desarrolladores y Fondos Inmobiliarios",
  "Aseguradoras",
  "Bancos y Financieras",
  "Comisionistas de Bolsa",
  "Grupos Empresariales",
  "Infraestructura y Energía",
  "Salud y Farmacéutica",
  "Logística y Cadena de Suministro",
  "Firmas Legales y Consultoría"
];

export const BF_FAQS = [
  { q: "¿Servidores propios, nube privada o proveedor comercial?", a: "Tú decides dónde viven tus datos caso por caso. Desplegamos sobre tus propios servidores, en tu nube privada o mediante APIs comerciales bajo acuerdos de cero retención, según la sensibilidad de la información, la regulación y el modelo de costos que mejor se ajuste a tu operación." },
  { q: "¿Qué hace un FDE (Ingeniero Desplegado) dentro de mi empresa?", a: "Se integra en tu operación junto a quienes ejecutan el proceso a diario y tu equipo de TI. En lugar de pedirte meses de levantamiento de requerimientos, mapea los flujos en terreno, conecta los modelos con tus sistemas y datos reales, y deja el caso funcionando en producción en cuestión de semanas." },
  { q: "¿Tienen que modificar o escribir sobre nuestros sistemas centrales?", a: "No. Operamos bajo un principio de core blindado con acceso de solo lectura. Nuestros sistemas leen e interpretan tus fuentes actuales (ERPs, gestores documentales, bases de datos) sin alterar tu contabilidad ni tus registros maestros, devolviendo resultados vía API o en nuestra propia interfaz solo con tu autorización." },
  { q: "¿Qué pasa con la solución cuando cambie la tecnología o salgan nuevos modelos?", a: "Construimos sistemas duraderos diseñados hacia donde avanza la frontera de la IA. Nuestra arquitectura desacopla tus reglas de negocio y flujos operativos del modelo subyacente: cuando aparece un modelo más potente o eficiente, actualizamos el motor sin tener que reconstruir tu integración ni reentrenar a tu equipo." },
  { q: "¿Quién opera la solución después del despliegue?", a: "Tu propio equipo, respaldado por nuestro modelo Work as a Service (WaaS). La plataforma asume la fuerza bruta de lectura, cruce y conciliación todos los días, mientras tus operadores y líderes mantienen el control y la aprobación final desde su bandeja de trabajo, con capacidad instalada y soporte continuo de nuestro equipo." },
  { q: "¿Cómo se audita lo que decide o propone la IA?", a: "Cero cajas negras. La IA no adivina ni toma decisiones autónomas hacia el cliente final. Cada hallazgo o acción registra una bitácora inmutable con cuatro pruebas: la regla o cláusula exacta citada, el dato o asiento fuente, el cálculo paso a paso y el usuario humano que aprobó la resolución, lista para revisoría fiscal y auditoría." },
  { q: "¿Necesitamos un equipo de datos o de IA para empezar?", a: "No. El diagnóstico parte de tus procesos y sistemas tal como operan hoy. Nosotros ponemos la ingeniería de principio a fin desde el día uno y formamos a tus perfiles internos por rol durante la implementación." }
];

export const ERAS = [
  {
    year: "2003–2020",
    title: "Origen en el negocio",
    items: [
      { k: "Experiencia", v: "+20 años estructurando proyectos y operaciones complejas en Santa Rosa." },
      { k: "El dolor real", v: "Vivimos en carne propia la conciliación manual y las contabilidades espejo." },
      { k: "El aprendizaje", v: "Entendimos que la escala exige conectar datos y reglas, no sumar planillas." }
    ]
  },
  {
    year: "2021–2023",
    title: "Incubación e I+D",
    items: [
      { k: "Laboratorio", v: "I+D interno para automatizar procesos operativos, contables y de negocio." },
      { k: "Arquitectura", v: "Primeros motores propios para centralizar datos dispersos y eliminar fricción." },
      { k: "En casa", v: "Validamos cada desarrollo en nuestra propia operación antes de llevarlo al mercado." }
    ]
  },
  {
    year: "2024–2025",
    title: "Spin-off y salto a IA",
    items: [
      { k: "Spin-off", v: "Constitución formal de DIS como firma de ingeniería y transformación." },
      { k: "IA agéntica", v: "Evolución hacia una capa transversal en modo solo lectura sobre tus sistemas." },
      { k: "Modelo WaaS", v: "Sistemas que asumen la fuerza bruta operativa desde el primer día." }
    ]
  },
  {
    year: "2026 en adelante",
    title: "Resultados en operación",
    items: [
      { k: "Implementación", v: "Soluciones en producción operando en entidades reales con impactos medibles." },
      { k: "BrickFlow", v: "Ingeniería desplegada (FDE + FDT) para construir sistemas duraderos a la medida." },
      { k: "Resultados", v: "Eficiencias directas y retorno financiero desde las primeras semanas." }
    ]
  }
];

export const IMPACT_KPIS = [
  { v: "2x", l: "Capacidad operativa por persona sin ampliar nómina." },
  { v: "-85%", l: "Tiempo en conciliación, cruces manuales y reportes." },
  { v: "24–48 h", l: "Para estructurar y activar el gemelo digital." },
  { v: "100% ROI", l: "Sistemas que se pagan solos en operación." }
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
