// filepath: script.js
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }

    return "lose";
}

function updateResult(humanChoice, computerChoice, result) {
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    let message = "";
    if (result === "tie") {
        message = `It's a tie! Both chose ${humanChoice}`;
    } else if (result === "win") {
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    resultDiv.textContent = message;
}

function play(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateResult(humanChoice, computerChoice, result);
}

