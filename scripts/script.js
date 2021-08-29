function computerPlay() { // Returns computer's move (ROCK, PAPER, or SCISSORS) based on a randomly generated input

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

function playRound(playerSelection, computerSelection) { // Logs result of the round AND returns a number corresponding to round winner
    
    // Tie
    if (playerSelection === computerSelection) {
        console.log(`Tie. ${playerSelection} ties ${computerSelection}`);
        return 0;
    }
    // User wins
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }
    // Computer Wins
    else {
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
        return 2;
    }
}

function game() { // Play 5 games AND display score after each round

    // Score at start of game
    let tieScore = 0;
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        // Prompt user for move AND capitalize input
        let player = prompt("Your move: ").toUpperCase();
        // Generate computer's move
        let computer = computerPlay();
        // Update score
        switch (playRound(player, computer)) {
            // Tie
            case 0: 
                tieScore++;
                break;
            // User wins
            case 1: 
                userScore++;
                break;
            // Computer wins
            case 2: 
                compScore++;
                break;
        }
        // Log updated overall score
        console.log(`User: ${userScore}, Computer: ${compScore}, Tie: ${tieScore}`);
    }

    console.log("");

    // Log result of game 
    if (userScore > compScore) {
        console.log("You beat the computer!");
    } else if (compScore > userScore) {
        console.log("The computer beat you.");
    } else {
        console.log("You tied the computer");
    }
}

game();