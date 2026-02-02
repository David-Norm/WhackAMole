/**
 * Manages mole behavior and hole interactions
 */
class MoleManager {
    constructor(onMoleHit, onMoleMissed) {
        this.holes = document.querySelectorAll(".hole");
        this.currentHole = null;
        this.moleTimeout = undefined;
        this.onMoleHit = onMoleHit;
        this.onMoleMissed = onMoleMissed;
        this.setupClickHandlers();
    }

    setupClickHandlers() {
        this.holes.forEach((hole) => {
            hole.addEventListener("click", () => this.handleHoleClick(hole));
        });
    }

    handleHoleClick(hole) {
        if (hole === this.currentHole) {
            this.onMoleHit();
            hole.classList.remove("up");
            this.currentHole = null;
            if (this.moleTimeout !== undefined) {
                clearTimeout(this.moleTimeout);
            }
        } else {
            this.onMoleMissed();
        }
    }

    showRandomMole() {
        if (this.moleTimeout !== undefined) {
            clearTimeout(this.moleTimeout);
        }

        this.hideAllMoles();

        const index = Math.floor(Math.random() * this.holes.length);
        this.currentHole = this.holes[index];
        this.currentHole.classList.add("up");

        this.moleTimeout = window.setTimeout(() => {
            if (this.currentHole && this.currentHole.classList.contains("up")) {
                this.onMoleMissed();
                this.currentHole.classList.remove("up");
                this.currentHole = null;
            }
        }, 1500);
    }

    hideAllMoles() {
        this.holes.forEach(hole => hole.classList.remove("up"));
    }

    cleanup() {
        if (this.moleTimeout !== undefined) {
            clearTimeout(this.moleTimeout);
        }
        this.hideAllMoles();
        this.currentHole = null;
    }
}