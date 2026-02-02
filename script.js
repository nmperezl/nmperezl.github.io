const projects = {
  bariloche: {
    title: "Estudio Conceptual de la Movilidad en Bariloche",
    text: "Análisis conceptual de la movilidad urbana en la ciudad de Bariloche, con enfoque territorial y diagnóstico de dinámicas de desplazamiento."
  },
  atlas: {
    title: "Atlas Vial CABA",
    text: "Desarrollo de cartografía vial para la Ciudad de Buenos Aires, integrando análisis territorial y visualización de datos."
  },
  pms: {
    title: "Plan de Movilidad Sustentable CABA",
    text: "Participación en el Plan de Movilidad Sustentable de la Ciudad de Buenos Aires, con enfoque en análisis territorial y soporte cartográfico."
  },
  gtfs: {
    title: "GTFS CABA",
    text: "Procesamiento y análisis de datos GTFS para el estudio de redes de transporte público en la Ciudad de Buenos Aires."
  },
  ign: {
    title: "Mapas Base IGN",
    text: "Elaboración y uso de mapas base a partir de información del Instituto Geográfico Nacional."
  },
  ide: {
    title: "IDE Mendoza",
    text: "Trabajo con Infraestructura de Datos Espaciales de la provincia de Mendoza, organización y visualización de nodos de información."
  },
  indicadores: {
    title: "Indicadores Urbanos Mendoza",
    text: "Construcción y análisis de indicadores urbanos para el estudio del territorio mendocino."
  }
};

function openProject(key) {
  const project = projects[key];
  alert(project.title + "\n\n" + project.text);
}


function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}
