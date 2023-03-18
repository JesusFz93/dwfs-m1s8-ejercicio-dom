// // Para accesar directamente a un elemento por el id
// const parrafo1 = document.getElementById("parrafo1");
// console.log(parrafo1);
// // Para accesar a un grupo por el nombre clase
// const parrafos = document.getElementsByClassName("parrafos");
// console.log(parrafos);
// // Para accesar a un grupo por el nombre de la etiqueta
// const etiquetas_p = document.getElementsByTagName("p");
// console.log(etiquetas_p);
// // Para accesar directamente a varios
// const parrafo1qs = document.querySelector("#parrafo1");
// console.log(parrafo1qs);
// // Para accesar directamente a un grupo de elementos
// const parrafosqs = document.querySelectorAll(["p", ".parrafos"]);
// console.log(parrafosqs);

// // Para crear elementos html y agregarlos comno hijos a otros elementos
// const seccion1 = document.getElementById("seccion1");
// const parrafo = document.createElement("p");
// const span = document.createElement("span");
// // const texto = document.createTextNode("Hola este es un saludo");
// parrafo.innerText = "Adios";
// span.innerText = "Esto es un Span";
// // parrafo.innerHTML = "Adios";
// // parrafo.appendChild(texto);
// seccion1.appendChild(span);
// seccion1.appendChild(parrafo);
// console.log(seccion1);

// const body = document.querySelector("body");
// const footer = document.createElement("footer");
// body.appendChild(footer);
// console.log(body);

const saludar = () => {
  console.log("Hola como estan?");
};

function despedir() {
  console.log("adios");
}

const btnDespedir = document.getElementById("btnDespedir");
btnDespedir.addEventListener("click", despedir);
