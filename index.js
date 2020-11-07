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
                result = "You lose! Rock beats scissors.";
                computerWin = 1;
                break;
            default:
                result = "You win! Paper beats rock!";
                playerWin = 1;
                break;
        }
    } else if (computerSelection == "scissors") {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                result = "You win! Rock beats scissors!";
                playerWin = 1;
                break;
            case "scissors":
                result = "It's a tie!";
                break;
            default:
                result = "You lose! Scissors beats paper.";
                computerWin = 1;
                break;
        }
    }
    else {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                result = "You lose! Paper beats rock.";
                computerWin = 1;
                break;
            case "scissors":
                result = "You win! Scissors beats rock.";
                playerWin = 1;
                break;
            default:
                result = "It's a tie!";
                break;
        }
    }
    return [result, playerWin, computerWin];
}

function game() {

    let wins = 0;
    let losses = 0;
    
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Select your weapon - Rock, Paper, or Scissors?");

        // Gathers game results.
        let [result, playerWin, computerWin] = playRound(playerSelection, computerPlay());

        // If the player won, their score goes up by 1.
        // If the computer won, player losses go up by 1.
        wins += playerWin;
        losses += computerWin;

        // Displays results in the console.
        console.log(result);
    }

    // Displays total game results. Differs depending on whether the player won, the computer won, or there was a tie..
    if (wins == losses) {
        console.log(`You won ${ wins } rounds, and tied with the computer.`);
    } else if (wins > losses) {
        console.log(`You won ${ wins } rounds, and beat the computer!`);
    } else {
        console.log(`You won ${ wins } times, but lost to the computer.`);
    }
}
