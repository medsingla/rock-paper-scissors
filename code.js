const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        result = playRound(playerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore = 5) {
        return "You win the game!";
    }
    return "You lose the game!"
}
console.log(game());