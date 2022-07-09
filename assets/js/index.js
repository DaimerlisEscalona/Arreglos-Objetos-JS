const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];


let arregloPropiedades = document.getElementById("cardPropiedades");
let buscarPropiedad = document.getElementById("buscarP");
let volverAtras = document.getElementById("volver");
  
function vistaGeneral(arregloPropiedades){

  return`
  <div class="propiedad">
    <div class="img" style="background-image: url('${arregloPropiedades.src}')"></div>
    <section>
      <h5>${arregloPropiedades.nombre}</h5>
      <div class="d-flex justify-content-space-evenly">
        <p> Cuartos: ${arregloPropiedades.cuartos} </p>
        <p> Metros: ${arregloPropiedades.metros}</p>
      </div>
      <p class="my-3">${arregloPropiedades.descripcion}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`;
  
}

function cargaVistaGeneral(arregloPropiedades){

  let html = "";
  let contadorBusquedaPropiedades = 0;
  for (const arregloPropiedades of propiedadesJSON) {
    html += vistaGeneral(arregloPropiedades);
    contadorBusquedaPropiedades += 1;
   
  }
  document.querySelector("#impTotalPropiedades").innerHTML = "Total de Propiedades: " + contadorBusquedaPropiedades;
  arregloPropiedades.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', (event) => {

  cargaVistaGeneral(arregloPropiedades);

});

buscarPropiedad.addEventListener("click", function () {

  let html = "";
  let cantidadHab = document.getElementById("impCantidadCuartos").value;
  let menorCantMetros = document.getElementById("impMenorValorMetros").value;
  let mayorCantMetros = document.getElementById("impMayorValorMetros").value;
  let contadorBusquedaPropiedades = 0;

  if ((cantidadHab == "") || (menorCantMetros == "") || (mayorCantMetros == "")) {
    alert("Faltan campos por llenar");
  } else if ((cantidadHab <= 0) || (menorCantMetros <= 0) || (mayorCantMetros <= 0)) {
    alert("Debe ingresar un valor positivo");
  } else if ((isNaN(cantidadHab)) || (isNaN(menorCantMetros)) || (isNaN(mayorCantMetros))) {
    alert("Debe ingresar un numero");
  }

  
  for (const arregloPropiedades of propiedadesJSON) {
    if ((arregloPropiedades.cuartos >= cantidadHab) 
        && (arregloPropiedades.metros >= menorCantMetros)
        && (arregloPropiedades.metros <= mayorCantMetros)) {
      html += vistaGeneral(arregloPropiedades);
      contadorBusquedaPropiedades += 1;
      }
    }
    
    document.querySelector("#impTotalPropiedades").innerHTML = "Total de Propiedades: " + contadorBusquedaPropiedades;
    arregloPropiedades.innerHTML = html;
    alert("Ninguna propiedad encontrada");
})

volverAtras.addEventListener("click", function(){

  cargaVistaGeneral(arregloPropiedades);
});



