const projects = {
  atlas: {
    title: "Atlas Vial CABA",
    text: "Análisis y representación de la red vial urbana de la Ciudad de Buenos Aires."
  },
  movilidad: {
    title: "Plan de Movilidad Sustentable CABA",
    text: "Apoyo a la planificación de estrategias de movilidad urbana con enfoque sustentable."
  },
  gtfs: {
    title: "GTFS CABA",
    text: "Gestión y análisis de datos de transporte público en formato GTFS."
  },
  ign: {
    title: "Mapas Base – Instituto Geográfico Nacional",
    text: "Producción y sistematización de cartografía base."
  },
  ide: {
    title: "IDE Mendoza",
    text: "Desarrollo y organización de infraestructura de datos espaciales."
  },
  indicadores: {
    title: "Indicadores Urbanos – Mendoza",
    text: "Construcción y análisis de indicadores para la lectura del territorio urbano."
  }
};

function openProject(key) {
  document.getElementById("modal-title").innerText = projects[key].title;
  document.getElementById("modal-text").innerText = projects[key].text;
  document.getElementById("project-modal").style.display = "flex";
}

function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}
