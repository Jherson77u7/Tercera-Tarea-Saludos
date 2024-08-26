const button = document.querySelector("#saludar-button");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoSelect = document.querySelector("#genero");
const idiomaSelect = document.querySelector("#idioma");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value, 10);
  const genero = generoSelect.value;
  const idioma = idiomaSelect.value;

  let saludo;


});
