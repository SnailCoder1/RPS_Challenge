const { Rps } = require('../spec.helper')

//const RenderRps = () => {
//    let div = document.querySelector()
//	div.innerHTML =`<p> </p>`
//}

const userScore = 0;
const computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score.board")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function Rps(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        console.log("user wins");
        break;
    case "rp":
    case "ps":
    case "sr":
        console.log("user loses")
        break;
    case "rr":
    case "pp":
    case "ss":
        console-log("It's a draw");
            break;
}


function Rps() {

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


//describe('Your test case description', () => {
    // Setup
 //   let array

 //   beforeEach(() => {
        // assign values to your variables
   //     array = new Array(2, 3)
  //  });

    //it('add a descriptive test title', () => {
        // Execute code if needed
     //   const sum = array[0] + array[1]
        // add an assertion using the `expect` keyword
    //    expect(sum).to.eql()
  //  })
//})