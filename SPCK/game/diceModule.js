function createDiceContainer(containerId) {
  const diceContainer = document.getElementById(containerId);
  const diceElement = document.createElement("div");
  diceElement.id = "dice";
  diceElement.classList.add("dice");
  diceElement.textContent = "⚀";

  diceContainer.appendChild(diceElement);

  // Gọi hàm rollDice khi phần tử "dice" đã được tạo
  rollDice();
}

function rollDice() {
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const diceElement = document.getElementById("dice");

  if (diceElement) {
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    const randomFace = diceFaces[randomIndex];

    diceElement.textContent = randomFace;
  }
}