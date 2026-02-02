/**
 * Manages game statistics (score and lives)
 */
class GameStats {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.scoreDisplay = document.getElementById("score");
        this.livesDisplay = document.getElementById("lives");
        this.finalScoreDisplay = document.getElementById("finalScore");
    }

    reset() {
        this.score = 0;
        this.lives = 3;
        this.updateDisplay();
    }

    incrementScore() {
        this.score++;
        this.scoreDisplay.textContent = this.score.toString();
    }

    decrementLives() {
        this.lives--;
        this.livesDisplay.textContent = this.lives.toString();
    }

    getScore() {
        return this.score;
    }

    getLives() {
        return this.lives;
    }

    showFinalScore() {
        this.finalScoreDisplay.textContent = this.score.toString();
    }

    updateDisplay() {
        this.scoreDisplay.textContent = this.score.toString();
        this.livesDisplay.textContent = this.lives.toString();
    }
}