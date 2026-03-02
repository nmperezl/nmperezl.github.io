/* ======================================================
   PROYECTOS — MODAL
====================================================== */

const projects = {
  atlas: {
    title: "Atlas Vial – CABA",
    image: "images/projects/atlas_vial2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Se digitalizó la regulación del Código de Tránsito por tramo de cuadra construyendo una base georreferenciada consistente para análisis y regulación urbana.",
    link: "https://buenosaires.gob.ar/jefaturadegabinete/movilidad/transporte/normas-de-estacionamiento"
  },

  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    image: "images/projects/pms_caba2.png",
    text: "Participación en diagnóstico territorial y sistematización de información para la actualización estratégica de movilidad urbana, base del Plan de Movilidad 2030.",
    link: "https://buenosaires.gob.ar/gcaba_historico/noticias/la-ciudad-presento-el-plan-de-movilidad-sustentable-2030"
  },

  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    image: "images/projects/paradas_gtfs2.png",
    text: "Unificación y estructuración de bases dispersas del sistema de transporte para generar un GTFS consistente y documentar flujos de trabajo inter-áreas.",
    link: "https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3"
  },

  bariloche: {
    title: "Estudio Conceptual de Movilidad – Bariloche",
    image: "images/projects/estudio_movilidad_brc2.png",
    text: "Consultoría BID orientada al análisis del área central mediante relevamientos urbanos, evaluación del espacio público y esquemas conceptuales de intervención.",
    link: "https://www.bariloche.gov.ar/participacion-ciudadana-3/"
  },

  ign: {
    title: "Mapas Base – IGN",
    image: "images/projects/mapas_base_ign2.png",
    text: "Definición de criterios cartográficos para Argenmap, control y publicación de información geoespacial y articulación interdisciplinaria.",
    link: "https://mapa.ign.gob.ar/?zoom=4&lat=-40&lng=-59&layers=argenmap"
  },

  ide: {
    title: "Fortalecimiento IDE Mendoza",
    image: "images/projects/ide_mdz2.png",
    text: "Diagnóstico geoespacial municipal, definición de catálogo de objetos y capacitación técnica para fortalecer la autonomía de gestión de datos.",
    link: "https://ide.mendoza.gov.ar/portal/home/index.html"
  },

  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    image: "images/projects/iu_mdz2.png",
    text: "Transformación de normativa urbana dispersa en un sistema GIS estructurado consultable por parcela.",
    link: "https://ide.mendoza.gov.ar/portal/apps/experiencebuilder/experience/?id=9373b00cfbf24017a5b08471505615cd"
  }
};


function openProject(key) {

  const project = projects[key];

  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-text").innerText = project.text;
  document.getElementById("modal-image").src = project.image;

  const linkContainer = document.getElementById("modal-link");

  if (project.link) {
    linkContainer.innerHTML =
      `<a href="${project.link}" target="_blank" rel="noopener">Ver proyecto</a>`;
    linkContainer.style.display = "block";
  } else {
    linkContainer.style.display = "none";
  }

  document.getElementById("project-modal").classList.remove("hidden");
}

function closeProject() {
  document.getElementById("project-modal").classList.add("hidden");
}


/* ======================================================
   MAPA — TERRITORIO (Leaflet)
====================================================== */

const osmBase = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  { attribution: "© OpenStreetMap" }
);

const topoBase = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  { attribution: "© OpenTopoMap" }
);

const map = L.map("map", {
  center: [-41.13, -71.31],
  zoom: 11,
  layers: [osmBase]
});

/* cambio automático de base */
map.on("zoomend", () => {
  const zoom = map.getZoom();

  if (zoom >= 12 && !map.hasLayer(topoBase)) {
    map.removeLayer(osmBase);
    map.addLayer(topoBase);
  }

  if (zoom < 12 && !map.hasLayer(osmBase)) {
    map.removeLayer(topoBase);
    map.addLayer(osmBase);
  }
});


/* ======================================================
   INFO RECORRIDOS
====================================================== */

const recorridosInfo = {
  "Cinco Lagunas": {
    text: "Travesía de montaña entre lagunas de altura.",
    photos: [
      "images/recorridos/cinco_lagunas_1.jpg",
      "images/recorridos/cinco_lagunas_2.jpg"
    ]
  },

  "Capilla": {
    text: "Acceso lacustre y aproximación a senderos de montaña.",
    photos: []
  },

  "Falso Granítico": {
    text: "Vistas al Tronador y Lago Mascardi.",
    photos: []
  },

  "Laguna de los Tres": {
    text: "Sendero con vistas directas al Fitz Roy.",
    photos: []
  },

  "Motoco": {
    text: "Valle del Motoco entre bosques de alerces milenarios.",
    photos: []
  },

  "Penitentes": {
    text: "Recorrido andino con vistas al Aconcagua.",
    photos: [
      "images/recorridos/penitentes_1.jpg",
      "images/recorridos/penitentes_2.jpg",
      "images/recorridos/penitentes_3.jpg"
    ]
  }
};


/* ======================================================
   CARGA GEOJSON (UNA SOLA VEZ — FIX IMPORTANTE)
====================================================== */

const recorridos = [
  { file: "5_lagunas.geojson", nombre: "Cinco Lagunas" },
  { file: "capilla.geojson", nombre: "Capilla" },
  { file: "falso_granitico.geojson", nombre: "Falso Granítico" },
  { file: "laguna_de_los_tres.geojson", nombre: "Laguna de los Tres" },
  { file: "motoco.geojson", nombre: "Motoco" },
  { file: "penitentes.geojson", nombre: "Penitentes" }
];

const overlayLayers = {};

recorridos.forEach(r => {

  fetch(`data/recorridos/${r.file}`)
    .then(res => res.json())
    .then(data => {

      const layer = L.geoJSON(data, {

        coordsToLatLng: coords =>
          L.latLng(coords[1], coords[0]),

        style: {
          color: "#000",
          weight: 3,
          opacity: 0.85
        },

        onEachFeature: (_, layer) => {
          layer.on("click", () => openRecorrido(r.nombre));
        }

      }).addTo(map);

      overlayLayers[r.nombre] = layer;

      map.fitBounds(layer.getBounds());

    })
    .catch(err => console.error("Error cargando", r.file, err));
});


/* ======================================================
   MODAL TERRITORIO
====================================================== */

function openRecorrido(nombre) {

  document.getElementById("recorrido-title").innerText = nombre;

  const info = recorridosInfo[nombre];

  document.getElementById("recorrido-text").innerText =
    info?.text || "Recorrido personal.";

  const gallery = document.getElementById("recorrido-gallery");
  gallery.innerHTML = "";

  if (info?.photos) {
    info.photos.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = nombre;
      img.loading = "lazy";
      gallery.appendChild(img);
    });
  }

  document.getElementById("recorrido-modal")
    .classList.remove("hidden");
}

function closeRecorrido() {
  document.getElementById("recorrido-modal")
    .classList.add("hidden");
}


/* ======================================================
   CLICK DESDE LISTA → ZOOM MAPA
====================================================== */

function focusRecorrido(nombre) {

  const layer = overlayLayers[nombre];

  if (!layer) return;

  map.fitBounds(layer.getBounds(), {
    padding: [40, 40]
  });
}
