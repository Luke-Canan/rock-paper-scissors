function computerPlay() { // Outputs computer's move (ROCK, PAPER, or SCISSORS) based on a randomly generated input

    // Generate random integer between 1 and 3 (inclusive)
    let randomInt = Math.floor((Math.random() * 3) + 1);
    let compMove;
    
    // Assign computer's move
    switch(randomInt) {
        case 1:
            compMove = "ROCK";
            break;
        case 2:
            compMove = "PAPER";
            break;
        case 3:
            compMove = "SCISSORS";
            break;
    }
    return compMove;
}

function playRound(playerSelection, computerSelection) { // Outputs message displaying results of game
    
    // Potential output messages - win, lose, or tie
    let userWins = `You win! ${playerSelection} beats ${computerSelection}.`;
    let compWins = `You lose. ${computerSelection} beats ${playerSelection}.`;
    let tie = "Tie.";

    // TIE
    if (playerSelection === computerSelection) {
        return tie;
    } 
    // PAPER vs rock
    else if (playerSelection !== "SCISSORS" && computerSelection !== "SCISSORS") {
        return (playerSelection === "PAPER") ? userWins : compWins;
    }
    // ROCK vs scissors
    else if (playerSelection !== "PAPER" && computerSelection !== "PAPER") {
        return (playerSelection === "ROCK") ? userWins : compWins;
    }
    // SCISSORS vs paper
    else {
        return (playerSelection === "SCISSORS") ? userWins : compWins;
    }
}