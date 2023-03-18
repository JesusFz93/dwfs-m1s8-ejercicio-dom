const guardarInfo = () => {
  console.log("guardarInfo");
  localStorage.setItem("nombre", "Albertoss");
  localStorage.setItem("apellido", "Garcia");
};

const verInfo = () => {
  const edad = localStorage.getItem("edad");
  console.log(edad);
};

const eliminarInfo = () => {
  localStorage.removeItem("apellido");
};

const eliminarTodo = () => {
  localStorage.clear();
};
