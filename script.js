/* ============================
   PROYECTOS (MODAL)
============================ */

const projects = {

    atlas: {
    title: "Atlas Vial – CABA",
    place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Planificación Estratégica de la Movilidad",
    summary:
      "Digitalización normativa y construcción de una base georreferenciada.",
    image: "images/projects/atlas_vial2.png",
    text:
      "Ante la ausencia de una representación geográfica del Código de Tránsito y Transporte, se trabajó por comunas digitalizando la regulación vigente por tramo de cuadra y ambos lados de acera. La estructuración de zonas y categorías permitió construir una base georreferenciada consistente. El desarrollo del Atlas Vial del Gobierno de la Ciudad de Buenos Aires fue fundamental para definir y regular áreas de estacionamiento y realizar análisis espaciales de capacidad urbana.", 
    link:
      "https://buenosaires.gob.ar/jefaturadegabinete/movilidad/transporte/normas-de-estacionamiento"
  },
   


   pms: {
  title: "Plan de Movilidad Sustentable – CABA",
  place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Planificación Estratégica de la Movilidad",

  summary:
    "Diagnóstico y sistematización para la actualización estratégica de la movilidad urbana.",

  image: "images/projects/pms_caba2.png",

  text:
    "Ante la necesidad de actualizar la estrategia de movilidad de la Ciudad de Buenos Aires, participé en la recopilación de antecedentes y en la estructuración del nuevo plan. Formé parte de un equipo multidisciplinario elaborando diagnóstico, sistematización de información y análisis territorial. El trabajo sirvió como base técnica para el posterior Plan de Movilidad 2030 publicado por la Ciudad.",

  link:
    "https://buenosaires.gob.ar/gcaba_historico/noticias/la-ciudad-presento-el-plan-de-movilidad-sustentable-2030"
},

   
gtfs: {
  title: "Base Única de Paradas – GTFS CABA",
  place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Innovación y Tecnología en Transporte",

  summary:
    "Integración y estandarización de datos de transporte público para la generación del GTFS y sistemas predictivos.",

  image: "images/projects/paradas_gtfs2.png",

  text:
    "El proyecto consistió en consolidar la información estática del sistema GTFS. Las paradas de colectivos estaban distribuidas en tres bases distintas (proyecto y ubicaciones legales, instalación en territorio y estimaciones a partir de transacciones SUBE). Se unificó y estructuró la información en una base única, documentando flujos de trabajo para articular áreas y asegurar consistencia. Esta integración permitió generar el GTFS, alimentar sistemas predictivos y optimizar la planificación y evaluación de nuevas paradas.",

  link:
    "https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3"
},
   

bariloche: {
  title: "Estudio Conceptual de la Movilidad en Bariloche",
  place: "Banco Interamericano de Desarrollo (BID) · San Carlos de Bariloche",

  summary:
    "Relevamiento urbano y diagnóstico conceptual para mejorar la movilidad y calidad del espacio público.",

  image: "images/projects/estudio_movilidad_brc2.png",

  text:
    "En el marco de una Consultoría para el Banco Interamericano de Desarrollo (BID), el objetivo fue analizar el área central de San Carlos de Bariloche para proponer mejoras en su movilidad. Realicé relevamientos urbanos, evaluación de la calidad del espacio público y talleres participativos, elaborando un diagnóstico y esquemas conceptuales de posibles intervenciones. El estudio funciona como antecedente y base teórica para futuros proyectos de transformación urbana.",

  link:
    "https://www.bariloche.gov.ar/participacion-ciudadana-3/"
},
   
  

ign: {
  title: "Mapas Base – IGN",
  place: "Instituto Geográfico Nacional · Argentina",

  summary:
    "Definición de criterios cartográficos y actualización de mapas base para Argenmap. Publicación de información geoespacial.",

  image: "images/projects/mapas_base_ign2.png",

  text:
    "En mi participación en el proyecto colaboré en definir los criterios de representación y diseño cartográfico para Argenmap, garantizando consistencia y actualización de los mapas base. Participé en el control y publicación de infomacion geoespacial, documentando procesos y articulando con equipos interdisciplinarios. Se desarrollaron nuevos mapas base y se aseguró su correcta actualización, transfiriendo además los conocimientos en las jornadas de la Infraestructura de Datos Espaciales de la Republica Argentina (IDERA).",

  link:
    "https://mapa.ign.gob.ar/?zoom=4&lat=-40&lng=-59&layers=argenmap"
},


ide: {
  title: "Fortalecimiento de la IDE Mendoza",
  place: "Ministerio de Infraestructura y Desarrollo Territorial · Mendoza",

  summary:
    "Modernización y estructuración de la información geoespacial para mejorar calidad de datos y autonomía en la gestión.",

  image: "images/projects/ide_mdz2.png",

  text:
    "Consultoría para el fortalecimiento y modernización de la Infraestructura de Datos Espaciales de Mendoza. En el proyecto se trabajó en la estructuración de la información y en la definición del catálogo de objetos, junto con un diagnóstico de la gestión geoespacial en 12 municipios de Mendoza. Colaboré en la mejora de la calidad de datos y en las capacitaciones técnicas, contribuyendo a que cada municipio dispusiera de su propio visor y autonomía en la gestión y publicación de sus datos.",

  link:
    "https://ide.mendoza.gov.ar/portal/home/index.html"
},
   

indicadores: {
  title: "Indicadores Urbanos – Mendoza",
  place: "Ministerio de Infraestructura y Desarrollo Territorial · Mendoza",

  summary:
    "Integración y estructuración de normativa urbana y zonificación en un visualizador GIS para gestión territorial.",

  image: "images/projects/iu_mdz2.png",

  text:
    "Integración de Zonificación e Indicadores Urbanos en un visualizador GIS para la gestión territorial del municipio de Mendoza. El desafío consistió en transformar la normativa urbana dispersa (documentación en papel y criterios de aplicación en áreas específicas) en un sistema estructurado y accesible. Se trabajó en el desarrollo metodológico para lograr la vinculación de la información con los parcelarios municipales y permitir su consulta por parcela en un visor GIS. El desarrollo sentó bases para su actualización sistemática y para futuros visores y herramientas de gestión territorial.",

  link:
    "https://ide.mendoza.gov.ar/portal/apps/experiencebuilder/experience/?id=9373b00cfbf24017a5b08471505615cd"
},
   
};



function openProject(key) {
  const project = projects[key];

  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-text").innerText = project.text;
  document.getElementById("modal-image").src = project.image;

  const linkContainer = document.getElementById("modal-link");

  if (project.link) {
    linkContainer.innerHTML = `
      <a href="${project.link}" target="_blank" rel="noopener">
        Ver proyecto
      </a>
    `;
    linkContainer.style.display = "block";
  } else {
    linkContainer.style.display = "none";
  }

  document.getElementById("project-modal").classList.remove("hidden");
}


function closeProject() {
  document.getElementById("project-modal").classList.add("hidden");
}

/* ============================
   MAPA TERRITORIO
============================ */

const map = L.map("map", {
  zoomControl:true
}).setView([-38.4, -63.6], 4); // Argentina completa


L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:"© OpenStreetMap contributors"
  }
).addTo(map);


/* ===== CIUDADES ===== */

const ciudades = [

{
  nombre:"Buenos Aires (CABA)",
  coords:[-34.6037,-58.3816],
  zoom:12,
  proyectos:["• Atlas Vial","• Plan Movilidad","• GTFS","• Argenmap"]
},

{
  nombre:"Bariloche",
  coords:[-41.1335,-71.3103],
  zoom:12,
  proyectos:["• Estudio Movilidad"]
},

{
  nombre:"Mendoza",
  coords:[-32.8895,-68.8458],
  zoom:12,
  proyectos:["• IDE Mendoza","• Indicadores Urbanos"]
}

];


/* ===== MARCADORES ===== */

ciudades.forEach(c=>{

  const marker=L.circleMarker(c.coords,{
    radius:7,
    color:"#111",
    fillColor:"#111",
    fillOpacity:1
  }).addTo(map);

  marker.bindPopup(`
    <b>${c.nombre}</b><br>
    ${c.proyectos.join("<br>")}
  `);

  marker.on("click",()=>{
    map.flyTo(c.coords,c.zoom,{
      duration:1.5
    });
  });

});


function renderProjects() {

  const container = document.querySelector(".projects-grid");
  container.innerHTML = "";

  Object.entries(projects).forEach(([key, project]) => {

    const card = document.createElement("div");
    card.className = "project-card";
    card.onclick = () => openProject(key);

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">

      <div class="project-info">
        <h3>${project.title}</h3>
        <p class="project-place">${project.place}</p>
        <p class="project-description">${project.summary}</p>
        <span class="project-link">Ver proyecto →</span>
      </div>
    `;

    container.appendChild(card);
  });
}

renderProjects();
