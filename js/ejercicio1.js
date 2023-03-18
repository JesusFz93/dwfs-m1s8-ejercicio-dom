const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const body = document.querySelector("body");
const parrafo1 = document.getElementById("parrafo1");
const h1titulo = document.getElementById("h1titulo");

const parrafo1_texto = parrafo1.innerText;
const parrafo1_atributo = parrafo1.hasAttribute("class");
console.log(parrafo1_texto);
console.log(parrafo1_atributo);

const h1titulo_texto = h1titulo.innerText;
const h1titulo_atributo = h1titulo.hasAttribute("class");
console.log(h1titulo_texto);
console.log(h1titulo_atributo);

const agregarTitulo = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Titulo Principal";
  body.appendChild(h1);
};

boton1.addEventListener("click", agregarTitulo);

const agregarParrafo = () => {
  const p = document.createElement("p");
  p.innerText = "Parrafo";
  body.appendChild(p);
};

// const ejecutarAlerta = () => {
//   alert("Esta es una alerta");
// };

// boton3.addEventListener("click", ejecutarAlerta);
