

//const RenderRPS = () => {
  //let div = document.querySelector()
	//div.innerHTML =`<p> Olá</p>`
//}

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score.board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWorld(letter) {
  if (letter === "r") return "Rock"
  if (letter === "p") return "Papper"
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  results_p.innerHTML = ` ${convertToWord(userChoice)}$(smallUserWord) beats  ${convertToWord(computerChoice)}$(mallCompWord). You win!`;
}

function lose() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  results_p.innerHTML = ` ${convertToWord(userChoice)}$(smallUserWord) beats  ${convertToWord(computerChoice)}$(mallCompWord). You win!`;

}

function draw() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  results_p.innerHTML = ` ${convertToWord(userChoice)}$(smallUserWord) beats  ${convertToWord(computerChoice)}$(mallCompWord). You win!`;

}




function Rps(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice, computerChoice);
   // console.log("user wins");
      break;
  case "rp":
  case "ps":
  case "sr":
  lose(userChoice, computerChoice);
   // console.log("user loses")
      break;
  case "rr":
  case "pp":
  case "ss":
  draw(userChoice, computerChoice);
   // console-log("It's a draw");
      break;
}



















function Rps () {

  rock_div.addEventListener("click", function() {
    Rps("r");
  })
paper_div.addEventListener("click", function() {
    Rps("p");
  })
  scissor_div.addEventListener("click", function() {
    Rps("s");
  });

}

}

Rps();