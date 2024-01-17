document.addEventListener("DOMContentLoaded", function() {
     const diceElement = document.getElementById("dice");
     const rollButton = document.getElementById("rollButton");
   
     rollButton.addEventListener("click", rollDice);
     diceElement.addEventListener("click", rollDice);
   
     function rollDice() {
       const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
       const randomIndex = Math.floor(Math.random() * diceFaces.length);
       const randomFace = diceFaces[randomIndex];
       diceElement.textContent = randomFace;
     }
   });
   