

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber < 33){
        return "rock";
    } else if (randomNumber < 66){
        return "paper";
    } else{
        return "scissor";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Make your choice: ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){

    if (humanChoice === computerChoice){
        console.log(`Both sides selected ${humanChoice}. This is a tie!`)
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore+=1
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore+=1
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore+=1
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore+=1
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)
    }
}

for (let i = 0; i < 5; i++){
    playRound()
}