const p1 = {
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Button"),
  score: 0,
};

const p2 = {
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Button"),
  score: 0,
};

const winningScoreSelector = document.querySelector("#playTo");
const resetButton = document.querySelector("#reset");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }

    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

winningScoreSelector.addEventListener("change", () => {
  winningScore = parseInt(winningScoreSelector.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;

  for (let player of [p1, p2]) {
    player.score = 0;
    player.display.textContent = player.score;
    player.display.classList.remove("has-text-success", "has-text-danger");
    player.button.disabled = false;
  }
}
