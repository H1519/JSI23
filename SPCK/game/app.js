document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");
  const startButton = document.getElementById("startButton");

  // Khởi tạo vị trí của 2 nhân vật
  let player1Position = 1;
  let player2Position = 1;

  startButton.addEventListener("click", startGame);

  function startGame() {
    // Xóa bảng trò chơi cũ và xúc xắc cũ
    main.innerHTML = "";
    const diceContainer = document.getElementById("dice-container");
    diceContainer.innerHTML = "";

    // Tạo bảng trò chơi
    const rows = 6;
    const columns = 10;

    for (let i = 0; i < rows; i++) {
      let row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < columns; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        // Kiểm tra nếu ô là vị trí của player1 hoặc player2 thì thêm class tương ứng
        if (player1Position === calculateCellNumber(i, j)) {
          cell.classList.add("player1");
        } else if (player2Position === calculateCellNumber(i, j)) {
          cell.classList.add("player2");
        }

        row.appendChild(cell);
      }

      main.appendChild(row);
    }

    // Tạo xúc xắc
    createDiceContainer("dice-container");

    // Gọi hàm rollDice khi bắt đầu trò chơi
    rollDice();
  }

  function calculateCellNumber(row, column) {
    // Tính số ô tương ứng với vị trí trong bảng
    return row * 10 + column + 1;
  }
});
