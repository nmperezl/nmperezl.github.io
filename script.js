const projects = {
  atlas: {
    title: "Atlas Vial – CABA",
    image: "images/projects/atlas_vial2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Elaboración de cartografía, digitalización y georreferenciación del Código de Tránsito y Transporte, contribuyendo al desarrollo del Atlas Vial del Gobierno de la Ciudad de Buenos Aires.",
     link: "https://buenosaires.gob.ar/jefaturadegabinete/movilidad/transporte/normas-de-estacionamiento"
  },
  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    image: "images/projects/pms_caba2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Participación en la elaboración del Plan de Movilidad Sustentable 2020-2024 de la Ciudad de Buenos Aires."
  },
  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    image: "images/projects/paradas_gtfs2.png",
    text: "Gerencia Operativa de Innovación y Tecnología en Transporte - MDUyT - GCBA. Unificación de bases de datos de paradas de transporte urbano de pasajeros para su procesamiento en GTFS y sistemas predictivos.",
    link: "https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3"
  },
  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    image: "images/projects/estudio_movilidad_brc2.png",
    text: "Consultoría para el Banco Interamericano de Desarrollo (BID) en estudio conceptual para la mejora de la movilidad y el transporte en el centro de la ciudad de San Carlos de Bariloche.",
    link: "https://www.bariloche.gov.ar/participacion-ciudadana-3/"
  },
  ign: {
    title: "Mapas Base – IGN",
    image: "images/projects/mapas_base_ign2.png",
    text: "Dirección de Información Geoespacial – Instituto Geográfico Nacional (IGN). Diseño cartográfico y de representación de Argenmap a partir de información publicada del Instituto Geográfico Nacional.",
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

const osmBase = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "© OpenStreetMap"
  }
);


const topoBase = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    attribution: "© OpenTopoMap"
  }
);

const map = L.map("map", {
  center: [-41.1335, -71.3103],
  zoom: 11,
  layers: [osmBase] // empieza con OSM común
});

map.on("zoomend", () => {
  const zoom = map.getZoom();

  if (zoom >= 12) {
    if (!map.hasLayer(topoBase)) {
      map.removeLayer(osmBase);
      map.addLayer(topoBase);
    }
  } else {
    if (!map.hasLayer(osmBase)) {
      map.removeLayer(topoBase);
      map.addLayer(osmBase);
    }
  }
});


const recorridosInfo = {
  "Cinco Lagunas": {
    text: "Travesía de montaña entre lagunas.",
    photos: [
      "images/recorridos/cinco_lagunas_1.jpg",
      "images/recorridos/cinco_lagunas_2.jpg"
    ]
  },
  "Cadenita": {
    text: "Encadenamiento de cerros.",
    photos: []
  },
  "Capilla": {
    text: "Acercamiento al inicio de sendero en embarcación lacustre.",
    photos: []
  },
  "Falso Granítico": {
    text: "Vistas al Tronador y Lago Mascardi.",
    photos: []
  },
  "La Pataia": {
    text: "",
    photos: []
  },
  "Laguna Azul": {
    text: "",
    photos: []
  },
  "Laguna de los Tres": {
    text: "Vistas al Fitz Roy.",
    photos: []
  },
  "Laguna Torre": {
    text: "",
    photos: []
  },
  "Lagunita Catedral": {
    text: "Recorrido por los filos.",
    photos: []
  },
  "Motoco": {
    text: "Valle del Motoco entre bosques de Alerces milenarios.",
    photos: []
  },
  "Cerro Otto": {
    text: "",
    photos: []
  },
  "Otto – Refugio Meiling": {
    text: "",
    photos: []
  },
  "Padre Laguna": {
    text: "",
    photos: []
  },
  "Palotinos": {
    text: "",
    photos: []
  },
  "Penitentes": {
  text: "Vistas al Aconcagua.",
  photos: [
  "/nmperezl/images/recorridos/penitentes_1.jpg",
  "/nmperezl/images/recorridos/penitentes_2.jpg",
  "/nmperezl/images/recorridos/penitentes_3.jpg"
  ]
},
  "Cerro Piltiriquitron": {
    text: "",
    photos: []
  },
  "Ponderado": {
    text: "",
    photos: []
  },
  "Tromen": {
    text: "",
    photos: []
  },
  "Cerro Tronador": {
    text: "",
    photos: []
  },
  "Ventana": {
    text: "",
    photos: []
  }
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
    info?.text || "Recorrido personal.";

  const photosContainer = document.getElementById("recorrido-gallery");
  photosContainer.innerHTML = "";

  if (info?.photos && info.photos.length > 0) {
    info.photos.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = nombre;
      img.loading = "lazy";
      photosContainer.appendChild(img);
    });
  }

  document.getElementById("recorrido-modal").classList.remove("hidden");
}



setTimeout(() => {
  map.invalidateSize();
}, 300)






const overlayLayers = {}; // capas para control

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

      // Guardar en overlayLayers
      overlayLayers[r.nombre] = layer;

      // Añadir al mapa
      layer.addTo(map);

      // Ajustar bounds
      map.fitBounds(layer.getBounds());
    })
    .catch(err => console.error("Error cargando", r.file, err));
});

L.control.layers(null, overlayLayers, { collapsed: false }).addTo(map);


function focusRecorrido(nombre) {
  const layer = overlayLayers[nombre];
  if(layer){
    map.fitBounds(layer.getBounds()); // hace zoom y centra
    layer.eachLayer(l => l.openPopup()); // opcional, abre popups
  }
}
