

let humanScore = 0
let computerScore = 0
let winnerDeclared = false;
let winner = '';

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

function getHumanChoice(choice){
    let userChoice = choice;
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function checkWinner(){
    if (humanScore > 4 && !winnerDeclared){
        winner = "human";
        winnerDeclared = true;
    } else if (computerScore > 4 && !winnerDeclared) {
        winner = "machine";
        winnerDeclared = true;
    }

    if (humanScore > 4 || computerScore > 4){

        const header = document.createElement("h3");
        header.textContent = `And the winner is the ${winner}! `;
        div.appendChild(header);
    }
}

const div = document.querySelector("#results");
const paragraph = document.createElement("p");

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){

    if (humanChoice === computerChoice){
        div.textContent = `Both sides selected ${humanChoice}. This is a tie!`
        paragraph.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
        div.appendChild(paragraph);
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore+=1
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        paragraph.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
        div.appendChild(paragraph);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore+=1
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        paragraph.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
        div.appendChild(paragraph);
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore+=1
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        paragraph.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
        div.appendChild(paragraph);
    } else {
        computerScore+=1
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
        paragraph.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
        div.appendChild(paragraph);
    }

    checkWinner();
}

const menu = document.querySelector("#menu");
menu.addEventListener("click", (e) =>{
let target = e.target;
switch(target.id){
    case 'rock':
        playRound(getHumanChoice('rock'),);
        break;
    case 'paper':
        playRound(getHumanChoice('paper'),);
        break;
    case 'scissor':
    playRound(getHumanChoice('scissor'),);
    break;
}
})

