const element_blue = document.getElementById("azul");
const element_red = document.getElementById("rojo");
const element_green = document.getElementById("verde");
const element_yellow = document.getElementById("amarillo");

function pintar(div, color) {
  div.style.backgroundColor = color;
}

element_blue.addEventListener("click", () => {
  pintar(element_blue, "black");
});

element_red.addEventListener("click", () => {
  pintar(element_red, "black");
});

element_green.addEventListener("click", () => {
  pintar(element_green, "black");
});

element_yellow.addEventListener("click", () => {
  pintar(element_yellow, "black");
});
