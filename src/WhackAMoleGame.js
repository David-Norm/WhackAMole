/**
 * Main game controller
 */
class WhackAMoleGame {
    constructor() {
        this.screenManager = new ScreenManager();
        this.gameStats = new GameStats();
        this.moleManager = new MoleManager(
            () => this.handleMoleHit(),
            () => this.handleMoleMissed()
        );
        this.gameInterval = undefined;
        this.isGameActive = false;

        this.setupEventListeners();
        this.screenManager.showMenu();
    }

    setupEventListeners() {
        const startBtn = document.getElementById("startBtn");
        const playAgainBtn = document.getElementById("playAgainBtn");

        startBtn.addEventListener("click", () => this.startGame());
        playAgainBtn.addEventListener("click", () => this.startGame());
    }

    handleMoleHit() {
        if (!this.isGameActive) return;
        this.gameStats.incrementScore();
    }

    handleMoleMissed() {
        if (!this.isGameActive) return;
        this.gameStats.decrementLives();

        if (this.gameStats.getLives() <= 0) {
            this.endGame();
        }
    }

    startGame() {
        this.isGameActive = true;
        this.gameStats.reset();
        this.moleManager.cleanup();

        if (this.gameInterval !== undefined) {
            clearInterval(this.gameInterval);
        }

        this.screenManager.showGame();

        this.gameInterval = window.setInterval(() => {
            if (this.isGameActive) {
                this.moleManager.showRandomMole();
            }
        }, 800);
    }

    endGame() {
        this.isGameActive = false;

        if (this.gameInterval !== undefined) {
            clearInterval(this.gameInterval);
        }

        this.moleManager.cleanup();
        this.gameStats.showFinalScore();
        this.screenManager.showEnd();
    }
}