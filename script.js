const miguelButton = document.getElementById("miguel-btn");
const message = document.getElementById("message");

miguelButton.addEventListener("click", function() {
    message.textContent = "Wrong answer! Try again.";
});
const manuelaButton = document.getElementById("manuela-btn");

const secondScreen = document.getElementById("second-screen");

manuelaButton.addEventListener("click", function() {
    document.querySelector("h1").style.display = "none";
    document.querySelector("h2").style.display = "none";
    document.querySelector("p").style.display = "none";
    miguelButton.style.display = "none";
    manuelaButton.style.display = "none";

    message.textContent = "";

    secondScreen.style.display = "block";
});


const continueButton = document.getElementById("continue-btn");
const thirdScreen = document.getElementById("third-screen");
const finalScreen = document.getElementById("final-screen");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

continueButton.addEventListener("click", function() {
    secondScreen.style.display = "none";
    thirdScreen.style.display = "block";
});

yesButton.addEventListener("click", function() {
    thirdScreen.style.display = "none";
    finalScreen.style.display = "block";
});
 

noButton.addEventListener("mouseover", function() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "fixed";
    noButton.style.left = Math.random() * maxX + "px";
    noButton.style.top = Math.random() * maxY + "px";
});
