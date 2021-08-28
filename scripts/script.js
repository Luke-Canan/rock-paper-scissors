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
}