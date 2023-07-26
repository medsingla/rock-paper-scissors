const options = ["Rock", "Paper", "Scissors"];
const playerSelection = "Rock";

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (playerSelection == computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerSelection));