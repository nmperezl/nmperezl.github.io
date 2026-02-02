// =======================
// MAPA
// =======================

const map = L.map("map").setView([-41.13, -71.31], 9);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// =======================
// INFO RECORRIDOS
// =======================

const recorridosInfo = {
  "Cerro Tronador": {
    text: "Travesía extensa, marcada por el clima cambiante y la escala del paisaje."
  },
  "Laguna de los Tres": {
    text: "Ascenso exigente, con final abierto y vistas dominantes."
  }
};

// =======================
// RECORRIDOS
// =======================

const recorridos = [
  { file: "tronador.geojson", nombre: "Cerro Tronador" },
  { file: "laguna_de_los_tres.geojson", nombre: "Laguna de los Tres" }
];

const recorridosLayer = L.featureGroup().addTo(map);

recorridos.forEach(r => {
  fetch(`data/recorridos/${r.file}`)
    .then(res => res.json())
    .then(data => {
      const layer = L.geoJSON(data, {
        coordsToLatLng: coords => L.latLng(coords[1], coords[0]),
        style: {
          color: "#000",
          weight: 3
        },
        onEachFeature: () => {}
      });

      layer.eachLayer(l => {
        l.on("click", () => openRecorrido(r.nombre));
      });

      recorridosLayer.addLayer(layer);
      map.fitBounds(recorridosLayer.getBounds());
    });
});

// =======================
// MODAL RECORRIDOS
// =======================

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
