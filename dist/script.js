"use strict";
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
let score = 0;
let currentHole = null;
let gameInterval;
/**
 * Choose a random hole and show the mole
 */
function randomHole() {
    holes.forEach(hole => hole.classList.remove("up"));
    const index = Math.floor(Math.random() * holes.length);
    currentHole = holes[index];
    currentHole.classList.add("up");
}
/**
 * Handle clicks on holes
 */
holes.forEach((hole) => {
    hole.addEventListener("click", () => {
        if (hole === currentHole) {
            score++;
            scoreDisplay.textContent = score.toString();
            hole.classList.remove("up");
            currentHole = null;
        }
    });
});
/**
 * Start the game
 */
function startGame() {
    score = 0;
    scoreDisplay.textContent = "0";
    if (gameInterval !== undefined) {
        clearInterval(gameInterval);
    }
    gameInterval = window.setInterval(randomHole, 800);
    window.setTimeout(() => {
        clearInterval(gameInterval);
        holes.forEach(hole => hole.classList.remove("up"));
        alert(`Game over! Final score: ${score}`);
    }, 15000);
}
startBtn.addEventListener("click", startGame);
