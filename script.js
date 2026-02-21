const projects = {
  atlas: {
    title: "Atlas Vial – CABA",
    image: "images/projects/atlas_vial2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Ante la ausencia de una representación geográfica del Código de Tránsito y Transporte, se trabajó por comunas digitalizando la regulación vigente por tramo de cuadra y ambos lados de acera. La estructuración de zonas y categorías permitió construir una base georreferenciada consistente. El desarrollo del Atlas Vial del Gobierno de la Ciudad de Buenos Aires fue fundamental para definir y regular áreas de estacionamiento y realizar análisis espaciales de capacidad urbana.",
     link: "https://buenosaires.gob.ar/jefaturadegabinete/movilidad/transporte/normas-de-estacionamiento"
  },
  pms: {
    title: "Plan de Movilidad Sustentable – CABA",
    image: "images/projects/pms_caba2.png",
    text: "Gerencia Operativa de Planificación Estratégica de la Movilidad - MDUyT. Ante la necesidad de actualizar la estrategia de movilidad de la Ciudad de Buenos Aires, participé en la recopilación de antecedentes y en la estructuración del nuevo plan. Formé parte de un equipo multidisciplinario elaborando diagnóstico, sistematización de información y análisis territorial. El trabajo sirvió como base técnica para el posterior Plan de Movilidad 2030 publicado por la Ciudad.", 
    link: "https://buenosaires.gob.ar/gcaba_historico/noticias/la-ciudad-presento-el-plan-de-movilidad-sustentable-2030"
  },
  gtfs: {
    title: "Base Única de Paradas – GTFS CABA",
    image: "images/projects/paradas_gtfs2.png",
    text: "Gerencia Operativa de Innovación y Tecnología en Transporte - MDUyT - GCBA. El desafío en este caso consistió en consolidar la información estática del sistema GTFS. En el caso de las paradas de colectivos, se encontraban distribuidas en tres bases operativas distintas: proyecto y ubicaciones legales, instalación en territorio y estimaciones derivadas del análisis de transacciones SUBE. Se realizó la unificación y estructuración de la información en una base única, documentando flujos de trabajo para articular las áreas de proyecto, instalación y fiscalización. Esta integración sirvió para generar el GTFS e integrar a los sistemas predictivos, así como para optimizar la planificación de nuevas paradas y evaluar costos de instalación.",
    link: "https://datosabiertos-apis.buenosaires.gob.ar/BA_Root/Documentacion?schema_name=Transporte_3"
  },
  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    image: "images/projects/estudio_movilidad_brc2.png",
    text: "En el marco de una Consultoría para el Banco Interamericano de Desarrollo (BID), el objetivo fue analizar el área central de San Carlos de Bariloche para proponer mejoras en su movilidad. Realicé relevamientos urbanos, evaluación de la calidad del espacio público y talleres participativos, elaborando un diagnóstico y esquemas conceptuales de posibles intervenciones. El estudio funciona como antecedente y base teórica para futuros proyectos de transformación urbana.",
    link: "https://www.bariloche.gov.ar/participacion-ciudadana-3/"
  },
  ign: {
    title: "Mapas Base – IGN",
    image: "images/projects/mapas_base_ign2.png",
    text: "Dirección de Información Geoespacial – Instituto Geográfico Nacional (IGN). En mi participación en el proyecto colaboré en definir los criterios de representación y diseño cartográfico para Argenmap, garantizando consistencia y actualización de los mapas base. Participé en el control y publicación de infomacion geoespacial, documentando procesos y articulando con equipos interdisciplinarios. Se desarrollaron nuevos mapas base y se aseguró su correcta actualización, transfiriendo además los conocimientos en las jornadas de la Infraestructura de Datos Espaciales de la Republica Argentina (IDERA).",
    link: "https://mapa.ign.gob.ar/?zoom=4&lat=-40&lng=-59&layers=argenmap"
  },
  ide: {
    title: "Fortalecimiento de la IDE Mendoza",
    image: "images/projects/ide_mdz2.png",
    text: "Consultoría para el fortalecimiento y modernización de la Infraestructura de Datos Espaciales de Mendoza. En el proyecto se trabajó en la estructuración de la información y en la definición del catálogo de objetos, junto con un diagnóstico de la gestión geoespacial en 12 municipios de Mendoza. Colaboré en la mejora de la calidad de datos y en las capacitaciones técnicas, contribuyendo a que cada municipio dispusiera de su propio visor y autonomía en la gestión y publicación de sus datos.",
    link: "https://ide.mendoza.gov.ar/portal/home/index.html"
  },
  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    image: "images/projects/iu_mdz2.png",
    text: "Integración de Zonificación e Indicadores Urbanos en un visualizador GIS para la gestión territorial del municipio de Mendoza. El desafío consistió en transformar la normativa urbana dispersa (documentación en papel y criterios de aplicación en áreas específicas) en un sistema estructurado y accesible. Se trabajó en el desarrollo metodológico para lograr la vinculación de la información con los parcelarios municipales y permitir su consulta por parcela en un visor GIS. El desarrollo sentó bases para su actualización sistemática y para futuros visores y herramientas de gestión territorial.",
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
