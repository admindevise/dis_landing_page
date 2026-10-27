# DISHUB: Propuesta de Home, Hero y metodología

## 01 — Hero principal

**Ajuste de diseño:** Eliminar del Hero la letra pequeña que dice *"disHub de digital..."* encima de los botones.

**Título (H1):** El socio para llevar la IA a la práctica.  
**Subtítulo (H2):** Transformamos tecnología de frontera en resultados reales de negocio.

*El subtítulo complementa el nuevo H1 sin repetir "llevar la IA a la práctica".*

**Texto descriptivo** (reemplaza la sección de Chief AI Officer): Integramos IA y tecnologías disruptivas desde la raíz de tu operación para resolver problemas complejos y dejar sistemas reales funcionando en producción.

**Botón (CTA):** `INICIAR TRANSFORMACIÓN` (reemplaza "Agendar una reunión").

## Las 3 tarjetas bajo el Hero

*Reemplazan las tarjetas de cumplimiento, trazabilidad y carga.*

### 1. Liderazgo estratégico

**Etiqueta:** `ESTRATEGIA EJECUTIVA`  
**Título:** Chief AI Transformation Officer Residente  
**Cuerpo:** Nos integramos con tu directiva para diagnosticar dónde la IA mueve indicadores reales —no dónde luce en una demo— y trazar una ruta ejecutable.

### 2. Fiabilidad e infraestructura crítica

**Etiqueta:** `MISIÓN CRÍTICA`  
**Título:** IA para industrias sin margen de error  
**Cuerpo:** Desplegamos arquitecturas a la medida (*on-premise* o nube privada) con reglas explícitas, datos protegidos y trazabilidad total para auditorías desde el primer día.

### 3. Metodología e implementación

**Etiqueta:** `EJECUCIÓN EN CAMPO`  
**Título:** Metodología BrickFlow e Ingeniería Desplegada  
**Cuerpo:** Nuestros equipos se integran en tu operación para conectar datos, arquitecturas y agentes sobre tus sistemas centrales, garantizando adopción y gobierno de IA.

## 02 — Nuestro propósito

**Fondo:** Verde esmeralda  
**Etiqueta:** `02 — NUESTRO PROPÓSITO`  
**Título:** La ventaja no está en tener IA, sino en desplegarla en los flujos que mueven tu operación.

**Párrafo izquierdo:** Partimos de un diagnóstico enfocado donde la IA mueve indicadores reales. Nos integramos con tus líderes y operadores para repensar flujos desde cero, conectando modelos avanzados con tus datos y controles para potenciar el trabajo diario.

### Bloque derecho

*Reemplaza el bloque `04`: quitar el número `04` suelto y colocar un texto corto con un botón de ancla hacia la sección de metodología.*

**Texto superior:** `Del diagnóstico enfocado a la capacidad instalada en 4 etapas.`  
**Botón:** `Conocer la metodología BrickFlow →`

### Carrusel inferior (marquee ampliado)

`Fiduciarias` · `Banca de Inversión` · `Gestores de Activos` · `Fondos de Capital Privado` · `Desarrolladores Inmobiliarios` · `Bancos y Financieras` · `Aseguradoras` · `Grupos Corporativos` · `Operaciones Reguladas`

## ADN y gráfica interactiva de 3 capas

### Encabezado y párrafos fijos

**Título:** Un equipo para comprender, construir y escalar operaciones.

**Párrafo 1 (ADN):** Partimos de la necesidad operativa, no de la tecnología. **Nacimos con ADN de banca de inversión e inmobiliario**: somos fundadores e ingenieros que entienden cómo se estructuran activos, cómo se mide el riesgo y dónde se genera valor en industrias reguladas.

**Párrafo 2 (Enfoque):** Cerramos la brecha entre la capacidad de los nuevos modelos y su ejecución real. No entregamos código y desaparecemos; acompañamos a tu equipo desde la hoja de ruta hasta la transformación de punta a punta.

### Selector interactivo

Ubicar debajo de los párrafos. Los botones son `[01] Negocio`, `[02] Metodología` y `[03] Tecnología`.

#### Estado 01 — Negocio

**Activo por defecto al cargar.**  
**Botón:** `01 Negocio`  
**Subtítulo:** Producción, no pruebas de concepto.  
**Cuerpo:** Diseñamos sistemas duraderos que escalan con tu negocio, evolucionan con los nuevos modelos y mueven indicadores financieros reales, protegiendo tu inversión de capital.

#### Estado 02 — Metodología

**Se activa al hacer clic en 02.**  
**Botón:** `02 Metodología`  
**Subtítulo:** Transformación de punta a punta con BrickFlow.  
**Cuerpo:** Nuestros ingenieros trabajan junto a tus líderes y operadores para conectar modelos con tus datos, controles y procesos centrales en el trabajo diario.

#### Estado 03 — Tecnología

**Se activa al hacer clic en 03.**  
**Botón:** `03 Tecnología`  
**Subtítulo:** Ingeniería de élite y línea directa a la frontera.  
**Cuerpo:** Desplegamos arquitecturas seguras, auditables y listas para producción sobre tus sistemas centrales desde el primer día.

### Especificación de interacción para la gráfica izquierda

#### Sincronización bidireccional

Los botones `[01]`, `[02]` y `[03]` de la derecha, las etiquetas inferiores de la gráfica izquierda (`01 NEGOCIO`, `02 METODOLOGÍA`, `03 TECNOLOGÍA`) y los rectángulos en perspectiva comparten el mismo estado: `activeLayer: 1 | 2 | 3`. Hacer clic en la gráfica o en un botón dispara el mismo cambio.

#### Comportamiento visual de los planos

- **Plano activo:** Opacidad del borde al 100% en color verde menta/cian brillante (`#10B981`), relleno con ligero *glow*, partículas al 100% y micro-traslación `translateY(-6px)`, con transición de `300ms cubic-bezier`.
- **Planos inactivos:** Opacidad del 25%–30%, bordes tenues y partículas atenuadas.

#### Auto-rotación

Avance automático cada 6–7 segundos entre `01`, `02` y `03`. La auto-rotación se detiene al primer clic manual del usuario.
