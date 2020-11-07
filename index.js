function computerPlay() {
    // Chooses rock, scissors, or paper for the AI each with a third chance each.
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {

    // To contain the information of who won.
    let result;

    // Used to track win count. Numbers get added to a running total in the game() function to determine results.
    let playerWin = 0;
    let computerWin = 0;

    if (computerSelection == "rock") {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                result = "It's a tie!";
                break;
            case "scissors":
                result = "Rock beats scissors.";
                computerWin = 1;
                break;
            default:
                result = "Paper beats rock!";
                playerWin = 1;
                break;
        }
    } else if (computerSelection == "scissors") {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                result = "Rock beats scissors!";
                playerWin = 1;
                break;
            case "scissors":
                result = "It's a tie!";
                break;
            default:
                result = "Scissors beats paper.";
                computerWin = 1;
                break;
        }
    } else {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                result = "Paper beats rock.";
                computerWin = 1;
                break;
            case "scissors":
                result = "Scissors beats paper.";
                playerWin = 1;
                break;
            default:
                result = "It's a tie!";
                break;
        }
    }
    roundUpdate(result, playerWin, computerWin);
}

let wins = 0;
let losses = 0;

const playerWins = document.querySelector('.p-wins');
const declaration = document.querySelector('.tag');
const compWins = document.querySelector('.c-wins');

function roundUpdate(result, pWin, compWin) {
    wins += pWin;
    losses += compWin;

        
    if (wins < 5 && losses < 5) {
        playerWins.textContent = `Player: ${wins}`;
        declaration.textContent = result;
        compWins.textContent = `Computer: ${losses}`;
    } else if (wins == 5 && losses < 5) {
        playerWins.textContent = `Player: ${wins}`;
        declaration.textContent = "You beat the computer to 5!";
        compWins.textContent = `Computer: ${losses}`;
    } else if (losses == 5 && wins < 5) {
        playerWins.textContent = `Player: ${wins}`;
        declaration.textContent = "The computer beat you to 5!";
        compWins.textContent = `Computer: ${losses}`;
    }
}

const buttonList = document.querySelectorAll('button');

buttonList.forEach(b => b.addEventListener("click", function(e) {
    console.log(playRound(b.className, computerPlay()));
}));