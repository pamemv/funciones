const elemento = document.getElementById("ele1");

elemento.addEventListener("click", () => {
  pintar(elemento, "yellow");
});

function pintar(div, color = "green") {
  div.style.backgroundColor = color;
}
