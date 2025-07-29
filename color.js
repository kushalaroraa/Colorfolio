const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.id;
    console.log("Changing background to:", color);
    body.style.backgroundImage = "none";
    body.style.backgroundColor = color;
  });
});

