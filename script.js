/* ============================
   PROYECTOS (MODAL)
============================ */

const projects = {
  atlas:{title:"Atlas Vial – CABA",image:"images/projects/atlas_vial2.png",text:"Digitalización normativa vial y base georreferenciada.",link:"https://buenosaires.gob.ar"},
  pms:{title:"Plan Movilidad Sustentable – CABA",image:"images/projects/pms_caba2.png",text:"Diagnóstico territorial y planificación estratégica."},
  gtfs:{title:"Base Única Paradas – GTFS",image:"images/projects/paradas_gtfs2.png",text:"Unificación de datos del sistema de transporte."},
  bariloche:{title:"Movilidad Bariloche",image:"images/projects/estudio_movilidad_brc2.png",text:"Análisis urbano del área central."},
  ide:{title:"IDE Mendoza",image:"images/projects/ide_mdz2.png",text:"Fortalecimiento geoespacial municipal."},
  indicadores:{title:"Indicadores Urbanos Mendoza",image:"images/projects/iu_mdz2.png",text:"Sistema GIS consultable por parcela."}
};

function openProject(key){
  const p = projects[key];

  document.getElementById("modal-title").innerText=p.title;
  document.getElementById("modal-text").innerText=p.text;
  document.getElementById("modal-image").src=p.image;

  const link=document.getElementById("modal-link");
  link.innerHTML=p.link?`<a href="${p.link}" target="_blank">Ver proyecto</a>`:"";

  document.getElementById("project-modal").classList.remove("hidden");
}

function closeProject(){
  document.getElementById("project-modal").classList.add("hidden");
}


/* ============================
   MAPA TERRITORIO
============================ */

const map = L.map("map", {
  zoomControl:true
}).setView([-38.4, -63.6], 4); // Argentina completa


L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:"© OpenStreetMap contributors"
  }
).addTo(map);


/* ===== CIUDADES ===== */

const ciudades = [

{
  nombre:"Buenos Aires (CABA)",
  coords:[-34.6037,-58.3816],
  zoom:12,
  proyectos:["Atlas Vial","Plan Movilidad","GTFS"]
},

{
  nombre:"Bariloche",
  coords:[-41.1335,-71.3103],
  zoom:12,
  proyectos:["Estudio Movilidad"]
},

{
  nombre:"Mendoza",
  coords:[-32.8895,-68.8458],
  zoom:12,
  proyectos:["IDE Mendoza","Indicadores Urbanos"]
}

];


/* ===== MARCADORES ===== */

ciudades.forEach(c=>{

  const marker=L.circleMarker(c.coords,{
    radius:7,
    color:"#111",
    fillColor:"#111",
    fillOpacity:1
  }).addTo(map);

  marker.bindPopup(`
    <b>${c.nombre}</b><br>
    ${c.proyectos.join("<br>")}
  `);

  marker.on("click",()=>{
    map.flyTo(c.coords,c.zoom,{
      duration:1.5
    });
  });

});
