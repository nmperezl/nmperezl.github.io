const projects = {
  atlas: {
    title: "Atlas Vial – CABA",
    image: "images/projects/atlas_vial.png",
    text: "Desarrollo de cartografía vial para la Ciudad de Buenos Aires, integrando análisis territorial y visualización de datos."
  },
  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    image: "images/projects/pms_caba.png",
    text: "Participación en el Plan de Movilidad Sustentable de la Ciudad de Buenos Aires, con enfoque territorial y soporte cartográfico."
  },
  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    image: "images/projects/paradas_gtfs.png",
    text: "Procesamiento y análisis de datos GTFS para el estudio de redes de transporte público."
  },
  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    image: "images/projects/estudio_movilidad_brc.png",
    text: "Análisis conceptual de la movilidad urbana en el centro de Bariloche, con enfoque territorial."
  },
  ign: {
    title: "Mapas Base – IGN",
    image: "images/projects/mapas_base_ign.png",
    text: "Elaboración y uso de mapas base a partir de información del Instituto Geográfico Nacional."
  },
  ide: {
    title: "Fortalecimiento de la IDE Mendoza",
    image: "images/projects/ide_mdz.png",
    text: "Trabajo con Infraestructura de Datos Espaciales de la provincia de Mendoza."
  },
  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    image: "images/projects/iu_mdz.png",
    text: "Construcción y análisis de indicadores urbanos para el estudio del territorio mendocino."
  }
};

function openProject(key) {
  const project = projects[key];

  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-text").innerText = project.text;
  document.getElementById("modal-image").src = project.image;

  document.getElementById("project-modal").classList.remove("hidden");
}

function closeProject() {
  document.getElementById("project-modal").classList.add("hidden");
}

// MAPA RECORRIDOS
const map = L.map("map").setView([-41.1335, -71.3103], 12); // Bariloche (ajustamos después)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
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
        onEachFeature: (feature, layer) => {
          layer.on("click", () => {
            alert(r.nombre);
          });
        }
      });

      recorridosLayer.addLayer(layer);
      map.fitBounds(recorridosLayer.getBounds());
    })
    .catch(err => console.error("Error cargando", r.file, err));
});
