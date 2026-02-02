/**
 * Manages screen transitions and visibility
 */
class ScreenManager {
    constructor() {
        this.menuScreen = document.getElementById("menuScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.endScreen = document.getElementById("endScreen");
    }

    showMenu() {
        this.hideAll();
        this.menuScreen.classList.add("active");
    }

    showGame() {
        this.hideAll();
        this.gameScreen.classList.add("active");
    }

    showEnd() {
        this.hideAll();
        this.endScreen.classList.add("active");
    }

    hideAll() {
        this.menuScreen.classList.remove("active");
        this.gameScreen.classList.remove("active");
        this.endScreen.classList.remove("active");
    }
}