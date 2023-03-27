// Rock Paper Scissors

const rps = ["rock", "paper", "scissors"];

// Game 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round", String(i + 1));
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("Player:", playerSelection);
        console.log("Computer:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
        console.log("Score:", String(playerScore), "-", String(computerScore));
    }
    if (playerScore > computerScore) {
        console.log("You are the rock, paper, scissors champion!");
    } else if (playerScore < computerScore) {
        console.log("The computer is the rock, paper, scissors champion!");
    } else if (playerScore == computerScore) {
        console.log("The game is a draw!");
    }
}

// Player selection 
function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        playerChoice = String(prompt("Rock, Paper, Scissors:"));
        if (playerChoice == null) {
            continue;
        }
        const choiceInLower = playerChoice.toLowerCase();
        if (rps.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

// Randomly returns rock, paper or scissors
function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * rps.length);
    const item = rps[computerChoice];
    return item;
}

// Check the winner of each round
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player"
    } else {
        return "Computer"
    }
}

// Round
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Draw") {
        return "It's a draw!"
    } else if (result == "Player") {
        const playerString = String(`${playerSelection}`);
        const playerString2 = playerString.charAt(0).toUpperCase() + playerString.slice(1);
        return playerString2 + ` beats ${computerSelection}. You win!`
        //return `${playerSelection} beats ${computerSelection}. You win!`
    } else {
        const computerString = String(`${computerSelection}`);
        const computerString2 = computerString.charAt(0).toUpperCase() + computerString.slice(1);
        return computerString2 + ` beats ${playerSelection}. Computer wins!`
        //return `${computerSelection} beats ${playerSelection}. Computer wins!`
    }
}

game();