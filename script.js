/* ============================
   PROYECTOS (MODAL)
============================ */

const projects = {

  atlas: {
    title: "Atlas Vial – CABA",
    place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Planificación Estratégica de la Movilidad",
    summary: "Digitalización normativa y construcción de una base georreferenciada.",
    image: "images/projects/atlas_vial2.png",
    text: "Ante la ausencia de una representación geográfica del Código de Tránsito y Transporte, se trabajó por comunas digitalizando la regulación vigente por tramo de cuadra y ambos lados de acera...",
    link: "https://buenosaires.gob.ar/jefaturadegabinete/movilidad/transporte/normas-de-estacionamiento"
  },

  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Planificación Estratégica de la Movilidad",
    summary: "Diagnóstico y sistematización para la actualización estratégica de la movilidad urbana.",
    image: "images/projects/pms_caba2.png",
    text: "Ante la necesidad de actualizar la estrategia de movilidad...",
    link: "https://buenosaires.gob.ar/gcaba_historico/noticias/la-ciudad-presento-el-plan-de-movilidad-sustentable-2030"
  },

  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    place: "Gobierno de la Ciudad de Buenos Aires · Gerencia Operativa de Innovación y Tecnología en Transporte",
    summary: "Integración y estandarización de datos de transporte público.",
    image: "images/projects/paradas_gtfs2.png",
    text: "El proyecto consistió en consolidar la información estática del sistema GTFS...",
    link: "https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3"
  },

  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    place: "Banco Interamericano de Desarrollo (BID)",
    summary: "Diagnóstico conceptual para mejorar la movilidad.",
    image: "images/projects/estudio_movilidad_brc2.png",
    text: "En el marco de una Consultoría...",
    link: "https://www.bariloche.gov.ar/participacion-ciudadana-3/"
  },

  ign: {
    title: "Mapas Base – IGN",
    place: "Instituto Geográfico Nacional",
    summary: "Criterios cartográficos y actualización de mapas.",
    image: "images/projects/mapas_base_ign2.png",
    text: "Participé en definir criterios de representación...",
    link: "https://mapa.ign.gob.ar/?zoom=4&lat=-40&lng=-59&layers=argenmap"
  },

  ide: {
    title: "Fortalecimiento de la IDE Mendoza",
    place: "Ministerio de Infraestructura · Mendoza",
    summary: "Estructuración de información geoespacial.",
    image: "images/projects/ide_mdz2.png",
    text: "Consultoría para modernizar la IDE...",
    link: "https://ide.mendoza.gov.ar/portal/home/index.html"
  },

  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    place: "Ministerio de Infraestructura · Mendoza",
    summary: "Sistema GIS para normativa urbana.",
    image: "images/projects/iu_mdz2.png",
    text: "Integración de Zonificación e Indicadores...",
    link: "https://ide.mendoza.gov.ar/portal/apps/experiencebuilder/experience/?id=9373b00cfbf24017a5b08471505615cd"
  },

};


/* ============================
   RENDER TARJETAS
============================ */

function renderProjects() {
  const container = document.querySelector(".projects-grid");
  if (!container) return;

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
      </div>
      <div class="project-footer">
        <span class="project-link">Ver proyecto →</span>
      </div>
    `;

    container.appendChild(card);
  });
}


/* ============================
   MODAL
============================ */

function openProject(key) {
  const project = projects[key];

  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-text").innerText = project.text;
  document.getElementById("modal-image").src = project.image;

  const linkContainer = document.getElementById("modal-link");

  if (project.link) {
    linkContainer.innerHTML = `<a href="${project.link}" target="_blank">Ver proyecto →</a>`;
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
   MAPA (CORREGIDO)
============================ */

function initMap() {

  const mapContainer = document.getElementById("map");

  // 🔥 CLAVE: evita que rompa todo
  if (!mapContainer || typeof L === "undefined") return;

  const map = L.map("map", { zoomControl: true }).setView([-38.4, -63.6], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const ciudades = [
    {
      nombre: "Buenos Aires (CABA)",
      coords: [-34.6037, -58.3816],
      zoom: 12,
      proyectos: ["• Atlas Vial", "• Plan Movilidad", "• GTFS", "• Argenmap"]
    },
    {
      nombre: "Bariloche",
      coords: [-41.1335, -71.3103],
      zoom: 12,
      proyectos: ["• Estudio Movilidad"]
    },
    {
      nombre: "Mendoza",
      coords: [-32.8895, -68.8458],
      zoom: 12,
      proyectos: ["• IDE Mendoza", "• Indicadores Urbanos"]
    }
  ];

  ciudades.forEach(c => {
    const marker = L.circleMarker(c.coords, {
      radius: 7,
      color: "#111",
      fillColor: "#111",
      fillOpacity: 1
    }).addTo(map);

    marker.bindPopup(`<b>${c.nombre}</b><br>${c.proyectos.join("<br>")}`);

    marker.on("click", () => {
      map.flyTo(c.coords, c.zoom, { duration: 1.5 });
    });
  });

}


/* ============================
   INIT (CLAVE)
============================ */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initMap();
});
