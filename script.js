<script>
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // --- Datos mínimos para que todo funcione sin errores ---
  const aulaContent = {
    '1': `
<h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Unidad 1 · Laboratorio Digital</h2>
<h3 class="text-center text-lg -mt-4 mb-6 text-slate-600">(Tecnología al servicio de las ciencias)</h3>

<h3>Introducción y Misión del Proyecto</h3>
<p>¡Bienvenidos a la Unidad 1! Vamos a poner la tecnología al servicio de la ciencia.</p>

<h3>Presentación interactiva (Storybook)</h3>
<div class="embed-wrap">
  <iframe
    src="https://g.co/gemini/share/5b3d7baab5ab"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    title="Storybook Unidad 1">
  </iframe>
</div>
<p class="embed-caption">
  Si no se carga dentro de la página, ábrela en una pestaña nueva:
  <a href="https://g.co/gemini/share/5b3d7baab5ab" target="_blank" rel="noopener">Abrir Storybook</a>.
</p>
`,

    '2': `
<h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Unidad 2 · Célula Interactiva</h2>
<h3 class="text-center text-lg -mt-4 mb-6 text-slate-600">(Tecnología al servicio de las ciencias)</h3>

<h3>1. Idea de la unidad</h3>
<p>El producto final es una <strong>mini-app “Explorador de la célula + Laboratorio iónico”</strong> creada con Visual Coding cuyo objetivo es <strong>explicar y practicar</strong>:</p>
<ul>
    <li><strong>Biología y Geología:</strong> la célula y los tejidos (orgánulos y funciones esenciales).</li>
    <li><strong>Física y Química:</strong> iones y sustancias iónicas (formación, ejemplo NaCl y pautas básicas).</li>
    <li><strong>Matemáticas:</strong> números enteros (suma, resta, producto, valor absoluto y situaciones con cambios de temperatura o altura).</li>
</ul>
<p>La tecnología se usa como <strong>medio</strong>: la app debe <strong>ilustrar</strong> conceptos y permitir <strong>práctica guiada</strong> con retroalimentación clara.</p>

<h3>2. Objetivos específicos</h3>
<ol class="list-decimal list-inside pl-1 space-y-2">
    <li>Comprender y comunicar la estructura y funciones básicas de la célula y la organización en tejidos.</li>
    <li>Interpretar la formación de iones y el concepto de sustancia iónica con ejemplos sencillos.</li>
    <li>Operar con números enteros en contextos científicos elementales (temperatura, altitud, carga).</li>
    <li>Diseñar una mini-app con pantallas de <strong>Exploración</strong> y un <strong>Quiz</strong> autocorregible centrado en los contenidos.</li>
    <li>Colaborar en equipo con roles, evidencias en Moodle y presentación pública del producto.</li>
</ol>

<h3>3. Criterios de evaluación del ámbito (selección)</h3>
<ul>
    <li>a) Aplicar modelos y operaciones para explicar fenómenos sencillos y resolver problemas cotidianos.</li>
    <li>b) Diseñar y desarrollar un proyecto tecnológico que <strong>comunique contenido científico con rigor</strong>.</li>
    <li>c) Usar TIC de forma segura y creativa para representar y practicar conocimiento.</li>
    <li>d) Comunicar resultados con vocabulario específico y soportes digitales.</li>
</ul>

<h3>4. Saberes básicos de referencia</h3>
<ul>
    <li><strong>Biología y Geología:</strong> célula (animal/vegetal), orgánulos esenciales y tejidos básicos.</li>
    <li><strong>Física y Química:</strong> iones (catión/anión) y sustancias iónicas; idea de atracción electrostática.</li>
    <li><strong>Matemáticas:</strong> números enteros, operaciones y valor absoluto; lectura de cambios y diferencias.</li>
</ul>

<h3>5. Especificaciones del producto</h3>
<ul>
    <li><strong>Módulo Exploración (explicar):</strong> pantallas con esquema de célula y tarjetas emergentes de orgánulos, más una pantalla simple que muestre ejemplos de iones y sustancias iónicas.</li>
    <li><strong>Módulo Quiz (practicar):</strong> al menos <strong>10 ítems</strong> mezclando célula/tejidos, iones y enteros; retroalimentación breve y correcta.</li>
    <li><strong>Mini-herramienta “IonLab”:</strong> dos ejemplos guiados (por ejemplo Na⁺ + Cl⁻ → NaCl y Ca²⁺ + O²⁻ → CaO) con explicación visual.</li>
    <li><strong>Accesibilidad:</strong> contraste alto, botones grandes, textos claros y opción de subtítulos o locución breve.</li>
    <li><strong>Datos y lógica:</strong> variables de aciertos/tiempo; listas para banco de preguntas y explicaciones.</li>
</ul>

<h3>6. Banco de ítems y contenidos de ejemplo</h3>
<h4>Exploración (textos breves sugeridos)</h4>
<ul>
    <li><strong>Núcleo:</strong> “Contiene la información genética y coordina funciones”.</li>
    <li><strong>Mitocondria:</strong> “Obtiene energía a partir de nutrientes”.</li>
    <li><strong>Cloroplasto (vegetales):</strong> “Realiza la fotosíntesis”.</li>
    <li><strong>Tejidos:</strong> “Epitelial, conectivo, muscular y nervioso (ideas fuerza)”.</li>
    <li><strong>Iones:</strong> “Catión (+) si pierde electrones; anión (−) si gana”.</li>
    <li><strong>Sustancia iónica:</strong> “Red de iones con atracción electrostática (ej. NaCl)”.</li>
</ul>

<h4>Quiz (muestra de 12 ítems)</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Identificación: “Señala el orgánulo que contiene el ADN.”</li>
    <li>Función: “¿Qué función principal tiene la mitocondria?”</li>
    <li>Diferencia: “Marca la afirmación correcta sobre célula vegetal.”</li>
    <li>Tejidos: “Relaciona tejido con función/ejemplo.”</li>
    <li>V/F: “Un catión es un ion con carga positiva.”</li>
    <li>Clasificación: “Clasifica: NaCl, O₂, Aire, CaO (Sustancia iónica, Elemento, Mezcla, Sustancia iónica).”</li>
    <li>Empareja: “Catión/Anión ↔ Pierde/Gana electrones.”</li>
    <li>Enteros en contexto: “Hoy 3 °C, ayer −2 °C. ¿Cambio?”</li>
    <li>Operación: “−4 + 7 = ?”</li>
    <li>Producto: “(−3) × (−2) = ?”</li>
    <li>Valor absoluto: “|−8| = ?”</li>
    <li>Aplicación: “Selecciona el ejemplo que representa sustancia iónica.”</li>
</ol>

<h3>7. Secuencia de sesiones (30 × 55 min aprox.)</h3>
<h4>Fase 0 · Arranque</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Diagnóstico de ideas previas y reparto de roles.</li>
    <li>Foro en Moodle con preguntas guía y glosario colaborativo de orgánulos.</li>
</ol>
<h4>Fase 1 · Base conceptual</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Célula y orgánulos esenciales; actividad de arrastre.</li>
    <li>Tejidos básicos y funciones; tarjetas de clasificación.</li>
    <li>Iones y sustancias iónicas; ejemplos cotidianos (sal común).</li>
    <li>Números enteros: suma, resta, producto y valor absoluto en contextos científicos.</li>
</ol>
<h4>Fase 2 · Visual Coding básico</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Esqueleto de la app: menú con “Exploración”, “Quiz” e “IonLab”.</li>
    <li>Eventos, escenas y sprites; navegación entre pantallas.</li>
    <li>Variables y listas para preguntas, opciones y explicaciones.</li>
    <li>Prototipo de tarjeta emergente (orgánulo → explicación).</li>
</ol>
<h4>Fase 3 · Diseño centrado en contenido</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Guion de pantallas y reparto de subtemas (célula/tejidos, iones, enteros en contexto).</li>
    <li>Redacción breve de textos científicos y validación entre equipos.</li>
    <li>Creación de recursos gráficos y citación de fuentes libres.</li>
    <li>Prototipo alfa: tres tarjetas de orgánulos y cuatro preguntas del quiz.</li>
</ol>
<h4>Fase 4 · Profundización y “IonLab”</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Implementación de “IonLab” con dos ejemplos guiados y explicación visual.</li>
    <li>Pruebas cruzadas y registro de errores.</li>
    <li>Ampliación del quiz a diez ítems equilibrados.</li>
    <li>Retroalimentación formativa con micro-explicación tras cada respuesta.</li>
</ol>
<h4>Fase 5 · Calidad, accesibilidad y enteros</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Revisión de accesibilidad: contraste, botones, lectura en voz alta opcional.</li>
    <li>Mejora de operaciones con enteros integradas en el quiz.</li>
    <li>Limpieza de bloques, comentarios y optimización.</li>
</ol>
<h4>Fase 6 · Cierre, publicación y defensa</h4>
<ol class="list-decimal list-inside pl-1 space-y-1">
    <li>Preparación de póster o vídeo “Así explica nuestra app”.</li>
    <li>Ensayo con feedback entre equipos.</li>
    <li>Entrega en Moodle del prototipo beta y memoria técnica.</li>
    <li>Correcciones y versión final.</li>
    <li>Feria de proyectos y votación.</li>
    <li>Autoevaluación y coevaluación.</li>
    <li>Ampliación/recuperación según necesidades del grupo.</li>
</ol>

<h3>8. Pseudocódigo orientativo (Scratch/MakeCode)</h3>
<ul>
    <li>Variables: <code>puntos</code>, <code>tiempo</code>, <code>indice</code>, <code>intentos</code>.</li>
    <li>Listas: <code>preguntas[]</code>, <code>opA[]</code>, <code>opB[]</code>, <code>correcta[]</code>, <code>explica[]</code>.</li>
    <li>Flujo: Menú → “Exploración” (tarjetas por orgánulo y una de iones) o “Quiz” (muestra pregunta, evalúa, explica, suma) o “IonLab” (demo paso a paso Na⁺ + Cl⁻ y Ca²⁺ + O²⁻).</li>
    <li>Pantalla final: resumen de puntos y tiempo.</li>
</ul>

<h3>9. Tareas en Moodle y evidencias</h3>
<ul>
    <li>Foro inicial “Lo que ya sé y lo que quiero aprender”.</li>
    <li>Glosario de orgánulos (definición breve y dibujo simple).</li>
    <li>Cuestionario “Enteros en contexto”.</li>
    <li>Cuestionario “Iones y sustancias iónicas”.</li>
    <li>Tarea “Prototipo alfa” y tarea final con memoria técnica.</li>
    <li>Coevaluación con formulario Feedback.</li>
    <li>Carpeta de equipo con actas y versiones.</li>
</ul>

<h3>10. Diferenciación y DUA</h3>
<ul>
    <li>Versión guiada con bloques esqueleto y tarjetas pre-hechas.</li>
    <li>Extensiones: barajar preguntas, contador de rachas, tercer ejemplo en “IonLab”.</li>
    <li>Apoyos: textos simplificados, pictogramas y subtítulos; opción de evaluación oral del contenido científico.</li>
</ul>

<h3>11. Rúbrica de evaluación del proyecto</h3>
<p><strong>Ponderación global:</strong> 40 % del trimestre.</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Criterio (peso)</th>
<th>Excelente · 4</th>
<th>Notable · 3</th>
<th>Básico · 2</th>
<th>En progreso · 1</th>
</tr>
</thead>
<tbody>
<tr><td>Rigor del contenido científico y matemático (30 %)</td><td>Explica con exactitud célula/tejidos, iones y enteros; retroalimentación clara y fundamentada.</td><td>Explicación precisa con pocas imprecisiones.</td><td>Explicación incompleta o con varias dudas.</td><td>Explicación incorrecta o confusa.</td></tr>
<tr><td>Funcionalidad y usabilidad (15 %)</td><td>Flujo estable, navegación clara y accesible.</td><td>Algún fallo menor.</td><td>Flujo parcial o poco claro.</td><td>App no operativa.</td></tr>
<tr><td>Programación y organización del código (10 %)</td><td>Variables/listas bien usadas, bloques ordenados y comentados.</td><td>Código adecuado con pequeñas redundancias.</td><td>Código desordenado o sin comentarios.</td><td>Código incoherente.</td></tr>
<tr><td>Calidad de la explicación en “Exploración” (15 %)</td><td>Tarjetas claras con ejemplos pertinentes y esquemas simples.</td><td>Explicación correcta con margen de mejora.</td><td>Explicación mínima y poco visual.</td><td>Sin explicación útil.</td></tr>
<tr><td>Quiz y retroalimentación (10 %)</td><td>Ítems variados con mini-explicaciones útiles.</td><td>Ítems adecuados y claros.</td><td>Ítems repetitivos o escasos.</td><td>Ítems mal planteados.</td></tr>
<tr><td>Trabajo cooperativo y evidencias en Moodle (10 %)</td><td>Roles rotados, actas y entregas completas y puntuales.</td><td>Evidencias casi completas.</td><td>Evidencias parciales.</td><td>Sin evidencias.</td></tr>
<tr><td>Comunicación y defensa (10 %)</td><td>Presentación clara y ajustada al tiempo; responde con seguridad.</td><td>Presentación correcta.</td><td>Presentación débil.</td><td>No presenta o no se entiende.</td></tr>
</tbody>
</table>
</div>

<h3>12. Lista de comprobación de entrega</h3>
<ul>
    <li>La app <strong>explica</strong> y <strong>practica</strong> célula/tejidos, iones y enteros.</li>
    <li>Hay mínimo dos pantallas de Exploración y diez ítems de Quiz.</li>
    <li>“IonLab” muestra al menos dos ejemplos guiados.</li>
    <li>Los textos son claros y citan recursos libres.</li>
    <li>El código está limpio y comentado.</li>
    <li>La memoria técnica tiene objetivo, guion, capturas y mejoras.</li>
</ul>
`,

    '3': `<h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Unidad 3</h2><p>Contenido en construcción.</p>`
  };

  const didacticaContent = `
    <h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Programación Didáctica</h2>
    <p>Este espacio recoge la programación didáctica del ámbito.</p>
  `;

  // --- Referencias a la interfaz (IDs presentes en tu index.html) ---
  const views = {
    'unidades': document.getElementById('view-unidades'),
    'materias': document.getElementById('view-materias'),
    'proyectos': document.getElementById('view-proyectos'),
    'programacion': document.getElementById('view-programacion'),
    'aula': document.getElementById('view-aula')
  };

  const navButtons = {
    'unidades': document.getElementById('nav-unidades'),
    'materias': document.getElementById('nav-materias'),
    'proyectos': document.getElementById('nav-proyectos'),
    'programacion': document.getElementById('nav-programacion'),
    'aula': document.getElementById('nav-aula')
  };

  const aulaContainer = document.getElementById('programacion-aula-content');
  const didacticaContainer = document.getElementById('programacion-didactica-content');
  const unitSelectorBtns = document.querySelectorAll('.unit-selector-btn');

  // --- Navegación entre vistas ---
  function switchView(viewName) {
    Object.values(views).forEach(v => v && v.classList.add('hidden'));
    if (views[viewName]) views[viewName].classList.remove('hidden');
    Object.values(navButtons).forEach(btn => btn && btn.classList.remove('active'));
    if (navButtons[viewName]) navButtons[viewName].classList.add('active');
  }

  Object.keys(navButtons).forEach(key => {
    const btn = navButtons[key];
    if (btn) btn.addEventListener('click', () => switchView(key));
  });

  // --- Acordeones (si los usas en algún bloque con .quiz-header) ---
  function setupAccordionListeners(containerSelector) {
    document.querySelectorAll(containerSelector).forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('span:last-child');
        if (content) content.classList.toggle('open');
        if (arrow) arrow.classList.toggle('rotate-180');
      });
    });
  }

  // --- Carga de contenido de aula ---
  function loadUnitContent(unitId) {
    if (!aulaContainer) return;
    if (aulaContent[unitId]) {
      aulaContainer.innerHTML = aulaContent[unitId];
      setupAccordionListeners('#view-aula .quiz-header');
    } else {
      aulaContainer.innerHTML = '<p>Unidad no encontrada.</p>';
    }
    // marcar activo en selector
    unitSelectorBtns.forEach(btn => {
      if (btn.dataset && btn.dataset.unit) {
        btn.classList.toggle('active', btn.dataset.unit === String(unitId));
      }
    });
  }

  // Listeners de selector de unidad
  unitSelectorBtns.forEach(btn => {
    btn.addEventListener('click', () => loadUnitContent(btn.dataset.unit));
  });

  // --- Rellenar programación didáctica y estado inicial ---
  if (didacticaContainer) didacticaContainer.innerHTML = didacticaContent;
  loadUnitContent('1');        // Abre por defecto la Unidad 1 (con el Storybook)
  switchView('aula');          // Muestra la vista de Aula al cargar
});
</script>
