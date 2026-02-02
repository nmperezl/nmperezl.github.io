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
