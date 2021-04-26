let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient")

// change the background of the page with the current input
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    setCssOutput()
}
// Update the new color on the screen
function setCssOutput() {
    let output = body.style.background + ";";
    css.textContent = (output);
    console.log(output)
}
// display the default background
function displayDefaultBackground() {
    let elem = document.getElementById("gradient");
    let defaultBacground = window.getComputedStyle(elem, null).getPropertyValue("background-image");
    css.innerHTML = defaultBacground;
  }

// event listeners for color input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// call the function as soon as the site starts
displayDefaultBackground()