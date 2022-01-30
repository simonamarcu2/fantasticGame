const roll = document.getElementById("roll");
const score = document.getElementById("score");
const image = document.getElementById("image");
let player1Score = 0;


roll.addEventListener("click", () =>{
  roll.textContent="Roll";
  let currentRoll = Math.ceil(Math.random() * 6);

  Image.src = 

  player1Score += currentRoll;
  score.textContent = player1Score
  if (player1Score < 20) {
    score.textContent = "You've won with a score of ${player1Score}!";
    player1Score = 0;
    roll.textContent = "Play again?";
  } 
  if (currentRoll == 1) {
    score.textContent = "You've lost!!";
    console.log(currentRoll);
  }
})
