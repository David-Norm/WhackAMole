/**
 * Manages game statistics (score, lives, and high score)
 */
class GameStats {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.highScore = this.loadHighScore();
        this.scoreDisplay = document.getElementById("score");
        this.livesDisplay = document.getElementById("lives");
        this.finalScoreDisplay = document.getElementById("finalScore");
        this.highScoreDisplay = document.getElementById("highScore");
        this.menuHighScoreDisplay = document.getElementById("menuHighScore");
        this.newHighScoreMsg = document.getElementById("newHighScoreMsg");

        this.updateHighScoreDisplays();
    }

    loadHighScore() {
        const saved = localStorage.getItem("whackamole-highscore");
        return saved ? parseInt(saved, 10) : 0;
    }

    saveHighScore() {
        localStorage.setItem("whackamole-highscore", this.highScore.toString());
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

        // Check for new high score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore();
            this.newHighScoreMsg.style.display = "block";
        } else {
            this.newHighScoreMsg.style.display = "none";
        }

        this.updateHighScoreDisplays();
    }

    updateHighScoreDisplays() {
        this.highScoreDisplay.textContent = this.highScore.toString();
        this.menuHighScoreDisplay.textContent = this.highScore.toString();
    }

    updateDisplay() {
        this.scoreDisplay.textContent = this.score.toString();
        this.livesDisplay.textContent = this.lives.toString();
    }
}