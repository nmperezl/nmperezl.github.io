const projects = {
  atlas: {
    title: "Atlas Vial – CABA",
    image: "images/projects/atlas_vial2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Elaboración de cartografía, digitalización y georreferenciación del Código de Tránsito y Transporte, contribuyendo al desarrollo del Atlas Vial del Gobierno de la Ciudad de Buenos Aires."
  },
  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    image: "images/projects/pms_caba2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Participación en la elaboración del Plan de Movilidad Sustentable 2020-2024 de la Ciudad de Buenos Aires."
  },
  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    image: "images/projects/paradas_gtfs2.png",
    text: "Gerencia Operativa de Innovación y Tecnología en Transporte - MDUyT - GCBA. Unificación de bases de datos de paradas de transporte urbano de pasajeros para su procesamiento en GTFS y sistemas predictivos."
  },
  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    image: "images/projects/estudio_movilidad_brc2.png",
    text: "Consultoría para el Banco Interamericano de Desarrollo (BID) en estudio conceptual para la mejora de la movilidad y el transporte en el centro de la ciudad de San Carlos de Bariloche."
  },
  ign: {
    title: "Mapas Base – IGN",
    image: "images/projects/mapas_base_ign2.png",
    text: "Dirección de Información Geoespacial – Instituto Geográfico Nacional (IGN). Elaboración y uso de mapas base a partir de información del Instituto Geográfico Nacional.",
    link: "https://mapa.ign.gob.ar/?zoom=4&lat=-40&lng=-59&layers=argenmap"
  },
  ide: {
    title: "Fortalecimiento de la IDE Mendoza",
    image: "images/projects/ide_mdz2.png",
    text: "Consultoría para el fortalecimiento y modernización de la Infraestructura de Datos Espaciales de Mendoza.",
    link: "https://ide.mendoza.gov.ar/portal/home/index.html"
  },
  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    image: "images/projects/iu_mdz2.png",
    text: "Integración de Zonificación e Indicadores Urbanos en un visualizador GIS para la gestión territorial del municipio de Mendoza.",
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

// MAPA RECORRIDOS
const map = L.map("map").setView([-41.1335, -71.3103], 12); // Bariloche (ajustamos después)

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  attribution: '© OpenStreetMap contributors, © OpenTopoMap'
}).addTo(map);


const recorridosInfo = {
  "Cinco Lagunas": {
    text: "Travesía de montaña entre lagunas."
  },
  "Cadenita": {
    text: "Encadenamiento de cerros."
  },
  "Capilla": {
    text: "Acercamiento en embarcación"
  },
  "Falso Granítico": {
    text: ""
  },
  "Laguna de los Tres": {
    text: ""
  },
  "Laguna Torre": {
    text: ""
  },
  "Cerro Otto": {
    text: ""
  }
  // después sumamos los demás
};



// =======================
// RECORRIDOS – Leaflet
// =======================





const recorridos = [
  { file: "5_lagunas.geojson", nombre: "Cinco Lagunas" },
  { file: "cadenita.geojson", nombre: "Cadenita" },
  { file: "capilla.geojson", nombre: "Capilla" },
  { file: "ex.geojson", nombre: "Ex" },
  { file: "falso_granitico.geojson", nombre: "Falso Granítico" },
  { file: "la_pataia.geojson", nombre: "La Pataia" },
  { file: "laguna_azul.geojson", nombre: "Laguna Azul" },
  { file: "laguna_de_los_tres.geojson", nombre: "Laguna de los Tres" },
  { file: "laguna_torre.geojson", nombre: "Laguna Torre" },
  { file: "lagunita_catedral.geojson", nombre: "Lagunita Catedral" },
  { file: "motoco.geojson", nombre: "Motoco" },
  { file: "otto.geojson", nombre: "Cerro Otto" },
  { file: "otto_meiling.geojson", nombre: "Otto – Refugio Meiling" },
  { file: "padre_laguna.geojson", nombre: "Padre Laguna" },
  { file: "palotinos.geojson", nombre: "Palotinos" },
  { file: "penitentes.geojson", nombre: "Penitentes" },
  { file: "piltiriquitron.geojson", nombre: "Cerro Piltiriquitron" },
  { file: "ponderado.geojson", nombre: "Ponderado" },
  { file: "tromen.geojson", nombre: "Tromen" },
  { file: "tronador.geojson", nombre: "Cerro Tronador" },
  { file: "ventana.geojson", nombre: "Ventana" }
];

const recorridosLayer = L.featureGroup().addTo(map);

recorridos.forEach(r => {
  fetch(`data/recorridos/${r.file}`)
    .then(res => res.json())
    .then(data => {
     const layer = L.geoJSON(data, {
  coordsToLatLng: function (coords) {
    return L.latLng(coords[1], coords[0]);
  },
  style: {
    color: "#000",
    weight: 3,
    opacity: 0.8
  },
  onEachFeature: function (feature, layer) {
    layer.on("click", () => openRecorrido(r.nombre));
  }
});




      
      
      recorridosLayer.addLayer(layer);
      map.fitBounds(recorridosLayer.getBounds());
    })
    .catch(err => console.error("Error cargando", r.file, err));
});


function openRecorrido(nombre) {
  document.getElementById("recorrido-title").innerText = nombre;

  const info = recorridosInfo[nombre];
  document.getElementById("recorrido-text").innerText =
    info ? info.text : "Recorrido personal.";

  document.getElementById("recorrido-modal").classList.remove("hidden");
}

function closeRecorrido() {
  document.getElementById("recorrido-modal").classList.add("hidden");
}

;


setTimeout(() => {
  map.invalidateSize();
}, 300)
