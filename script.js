document.addEventListener('DOMContentLoaded', () => {
  const syllabusData = [
    { unit: 1, title: 'Laboratorio Digital', project: true, topics: { bio: ['Composición química de los seres vivos'], math: ['Números naturales y potencias'], fyq: ['Estructura de la materia'], tech: ['Componentes del ordenador', 'Visual Coding'] } },
    { unit: 2, title: 'La Maquinaria de la Vida', project: false, topics: { bio: ['La célula. Los tejidos', 'Los órganos y sistemas. Las funciones vitales'], math: ['Números enteros'], fyq: ['Los iones. Las sustancias iónicas'], tech: ['El procesador de textos', 'Medida de magnitudes y errores'] } },
    { unit: 3, title: 'Cuidamos Nuestro Cuerpo', project: true, topics: { bio: ['Salud y enfermedad', 'Salud mental. Primeros auxilios'], math: ['Sucesiones y progresiones'], fyq: ['Carácter aproximado de la medida', 'Proporción entre dibujo y realidad. Escalas'], tech: [] } },
    { unit: 4, title: 'El Ciclo de la Vida', project: false, topics: { bio: ['Reproducción y desarrollo', 'Sexo y sexualidad'], math: ['Fracciones. Números decimales', 'Aproximaciones. Porcentajes'], fyq: ['Propiedades generales y características de la materia'], tech: ['Hojas de cálculo', 'Tecnologías de la comunicación. Internet'] } },
    { unit: 5, title: 'El Centro de Mando', project: true, topics: { bio: ['El sistema nervioso. Receptores sensoriales', 'El sistema endocrino'], math: ['Expresiones algebraicas. Igualdades y ecuaciones', 'Sistemas de ecuaciones. Resolución de problemas'], fyq: ['La naturaleza eléctrica de la materia'], tech: ['El proceso tecnológico', 'El circuito eléctrico. Ley de Ohm'] } },
    { unit: 6, title: 'Energía para Vivir', project: false, topics: { bio: ['Aparato digestivo. Aparato respiratorio', 'Aparato circulatorio. Aparato excretor. Sistema linfático'], math: ['Coordenadas cartesianas', 'Relación entre magnitudes. Función'], fyq: ['Trabajo y energía'], tech: ['Estructuras'] } },
    { unit: 7, title: 'Nuestro Lugar en el Mundo', project: true, topics: { bio: ['El sistema locomotor'], math: ['Funciones lineales y afines'], fyq: ['El calor'], tech: ['Receptores eléctricos', 'Material de dibujo. Trazado de paralelas y perpendiculares'] } },
    { unit: 8, title: 'Modelando Nuestro Entorno', project: false, topics: { bio: ['El relieve. El paisaje', 'La protección del medioambiente'], math: ['Geometría. Teorema de Pitágoras. Teorema de Tales', 'Movimientos en el plano. Coordenadas geográficas'], fyq: ['Transformaciones energéticas'], tech: ['Proyecciones planas de figuras tridimensionales. Perspectivas'] } },
    { unit: 9, title: 'Un Planeta en Juego', project: true, topics: { bio: ['El cambio climático', 'Desarrollo sostenible y medioambiente'], math: ['Estadística. Probabilidad'], fyq: ['Conservación y degradación de la energía'], tech: ['El proyecto técnico'] } }
  ];

  const subjectDetails = {
    bio: { name: 'Biología y Geología', icon: '🧬', color: '#0d9488' },
    math: { name: 'Matemáticas', icon: '📐', color: '#ca8a04' },
    fyq: { name: 'Física y Química', icon: '⚛️', color: '#0284c7' },
    tech: { name: 'Tecnología', icon: '💻', color: '#64748b' }
  };

  // contenido largo tal cual lo tenías
  const didacticaContent = `...`; // (por brevedad, pega aquí el mismo bloque largo que ya tienes)
  const aulaContent = { 1: `...` }; // (ídem: pega el bloque de la unidad 1 que ya tienes)

  const views = {
    unidades: document.getElementById('view-unidades'),
    materias: document.getElementById('view-materias'),
    proyectos: document.getElementById('view-proyectos'),
    programacion: document.getElementById('view-programacion'),
    aula: document.getElementById('view-aula')
  };

  const navButtons = {
    unidades: document.getElementById('nav-unidades'),
    materias: document.getElementById('nav-materias'),
    proyectos: document.getElementById('nav-proyectos'),
    programacion: document.getElementById('nav-programacion'),
    aula: document.getElementById('nav-aula')
  };

  function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
    Object.values(navButtons).forEach(b => b.classList.remove('active'));
    navButtons[viewName].classList.add('active');
  }

  function setExpandable(headerSelector, withArrow = true) {
    document.querySelectorAll(headerSelector).forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = withArrow ? header.querySelector('span:last-child') : null;

        // animación con altura dinámica
        const isOpen = content.classList.contains('open');
        if (isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px'; // fijar altura actual
          requestAnimationFrame(() => {
            content.style.maxHeight = '0px';
          });
          content.classList.remove('open');
        } else {
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
        if (arrow) arrow.classList.toggle('rotate-180');
      });
    });
  }

  function renderUnidadesView() {
    const grid = document.getElementById('unidades-grid');
    if (!grid) return;
    grid.innerHTML = '';

    syllabusData.forEach(unit => {
      const card = document.createElement('div');
      card.className = 'unit-card bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden';

      let contentHTML = '<ul class="space-y-2">';
      Object.keys(unit.topics).forEach(key => {
        if (unit.topics[key].length) {
          contentHTML += `
            <li class="mb-3">
              <h4 class="font-semibold text-slate-700 flex items-center">
                <span class="subject-icon mr-2" style="background-color:${subjectDetails[key].color};">${subjectDetails[key].icon}</span>
                ${subjectDetails[key].name}
              </h4>
              <ul class="mt-1 ml-4 text-slate-600 space-y-1 text-sm list-disc list-inside">
                ${unit.topics[key].map(t => `<li>${t}</li>`).join('')}
              </ul>
            </li>`;
        }
      });
      contentHTML += '</ul>';

      card.innerHTML = `
        <div class="unit-card-header p-4 flex justify-between items-center">
          <div>
            <h3 class="text-lg font-bold text-slate-900">Unidad ${unit.unit}: ${unit.title}</h3>
            ${unit.project ? '<span class="text-xs font-semibold bg-amber-100 text-amber-800 py-1 px-2 rounded-full">PROYECTO</span>' : ''}
          </div>
          <span class="text-2xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
        </div>
        <div class="unit-card-content px-4" style="max-height:0;">
          <div class="py-4 border-t border-slate-200">${contentHTML}</div>
        </div>
      `;
      grid.appendChild(card);
    });

    setExpandable('#view-unidades .unit-card-header', true);
  }

  function renderMateriasView() {
    const accordion = document.getElementById('materias-accordion');
    if (!accordion) return;
    accordion.innerHTML = '';

    Object.keys(subjectDetails).forEach(key => {
      const subject = subjectDetails[key];
      let contentHTML = '<div class="space-y-4">';
      syllabusData.forEach(unit => {
        if (unit.topics[key] && unit.topics[key].length) {
          contentHTML += `
            <div>
              <h4 class="font-semibold text-slate-800">Unidad ${unit.unit}: ${unit.title}</h4>
              <ul class="mt-1 ml-4 text-slate-600 space-y-1 text-sm list-disc list-inside">
                ${unit.topics[key].map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>`;
        }
      });
      contentHTML += '</div>';

      const item = document.createElement('div');
      item.className = 'border border-slate-200 rounded-xl overflow-hidden mb-4';
      item.innerHTML = `
        <div class="unit-card-header p-4 flex items-center bg-slate-50">
          <span class="subject-icon mr-3" style="background-color:${subject.color};">${subject.icon}</span>
          <h3 class="text-lg font-bold text-slate-900">${subject.name}</h3>
        </div>
        <div class="unit-card-content px-4" style="max-height:0;">
          <div class="py-4 border-t border-slate-200">${contentHTML}</div>
        </div>`;
      accordion.appendChild(item);
    });

    setExpandable('#view-materias .unit-card-header', false);
  }

  function renderProyectosView() {
    const list = document.getElementById('proyectos-list');
    if (!list) return;
    list.innerHTML = '';
    const projectUnits = syllabusData.filter(u => u.project);
    projectUnits.forEach(unit => {
      const item = document.createElement('div');
      item.className = 'p-4 border border-slate-200 rounded-xl bg-amber-50';
      item.innerHTML = `
        <h3 class="text-lg font-bold text-amber-900">Unidad ${unit.unit}: ${unit.title}</h3>
        <p class="text-amber-800 mt-1">Este bloque concluye con un proyecto integrador para aplicar los saberes de forma práctica y cooperativa.</p>`;
      list.appendChild(item);
    });
  }

  function createChart() {
    const el = document.getElementById('subjectDistributionChart');
    if (!el || !window.Chart) return;
    const ctx = el.getContext('2d');

    const counts = { bio: 0, math: 0, fyq: 0, tech: 0 };
    syllabusData.forEach(u => {
      Object.keys(u.topics).forEach(k => { counts[k] += u.topics[k].length; });
    });

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(counts).map(k => subjectDetails[k].name),
        datasets: [{
          label: 'Nº de temas',
          data: Object.values(counts),
          backgroundColor: Object.keys(counts).map(k => subjectDetails[k].color),
          borderColor: '#f8fafc',
          borderWidth: 4,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { padding: 20, font: { size: 14 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.parsed}`
            }
          }
        },
        cutout: '60%'
      }
    });
  }

  Object.keys(navButtons).forEach(key => {
    navButtons[key].addEventListener('click', () => switchView(key));
  });

  function initViews() {
    const didactica = document.getElementById('programacion-didactica-content');
    if (didactica) didactica.innerHTML = didacticaContent;

    const aula = document.getElementById('programacion-aula-content');
    if (aula) aula.innerHTML = aulaContent[1];

    renderUnidadesView();
    renderMateriasView();
    renderProyectosView();
    createChart();
    switchView('unidades');
  }

  initViews();

  // ajustar altura al terminar la transición para permitir reabrir con autoaltura correcta
  document.addEventListener('transitionend', (e) => {
    if (e.target.classList.contains('unit-card-content')) {
      const c = e.target;
      if (!c.classList.contains('open')) {
        c.style.maxHeight = '0px';
      } else {
        c.style.maxHeight = c.scrollHeight + 'px';
      }
    }
  });
});
