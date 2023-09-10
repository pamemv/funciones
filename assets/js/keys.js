const container = document.getElementById("container");
const div1 = document.getElementById("key");
const newDiv = document.createElement("div");

const divString = `<div
id="key2"
style="
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid black;
"
></div>`;

function addDiv() {
  newDiv.innerHTML = divString;
  container.appendChild(newDiv);
}

document.addEventListener("keydown", function (event) {
  let colorDiv1 = "";
  let colorDiv2 = "";
  const div2 = document.getElementById("key2");

  if (event.key === "a") {
    colorDiv1 = "pink";
  } else if (event.key === "s") {
    colorDiv1 = "orange";
  } else if (event.key === "d") {
    colorDiv1 = "lightblue";
  } else if (event.key === "q") {
    !div2 && addDiv();
    colorDiv2 = "purple";
  } else if (event.key === "w") {
    !div2 && addDiv();
    colorDiv2 = "grey";
  } else if (event.key === "e") {
    !div2 && addDiv();
    colorDiv2 = "brown";
  }

  div1.style.backgroundColor = colorDiv1;
  if (div2) div2.style.backgroundColor = colorDiv2;
});
