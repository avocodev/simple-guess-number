document.querySelector(".js-play-button").addEventListener("click", () => {
  startGame("block", "none");
});

document.querySelector(".js-back-button").addEventListener("click", () => {
  startGame("none", "block");
});

function startGame(selectLevels, playButton) {
  document.querySelector(".selection-levels").style.display = selectLevels;
  document.querySelector(".js-play-button").style.display = playButton;
}

function maxNumber(level) {
  localStorage.setItem("level", level);
  location.href = "game.html";
}
