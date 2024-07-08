console.log("This is a test")

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100)
    console.log(randomNumber)
    if (randomNumber < 33){
        return "rock"
    } else if (randomNumber < 66){
        return "paper"
    } else{
        return "scissor"
    }
}