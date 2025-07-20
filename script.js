      //Initializing the game variables
      
      let wins = 0;
      let losses = 0;
      let ties = 0;

        // Function to play the game

      function playGame() {
        const userInput = document.getElementById("game__user-input").value.toLowerCase();
        const resultDisplay = document.getElementById("game__result-text");
        const choices = ["rock", "paper", "scissors"];

    // Validate user input

        if (!choices.includes(userInput)) {
        resultDisplay.textContent = "Please type 'rock', 'paper', or 'scissors'.";
        return;
    }

    // Generate computer choice and determine the result

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    // Determine the outcome of the game

    if (userInput === computerChoice) {
        result = "It's a tie!";
        ties++;
    } else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        wins++;
    } else {
        result = "Computer wins!";
        losses++;
    }

   resultDisplay.textContent = `You chose ${userInput}, computer chose ${computerChoice}. ${result}`;
   updateScoreboard();
}

// Function to update the scoreboard

function updateScoreboard() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
    document.getElementById("total-games").textContent = wins + losses + ties;
}

// Function to reset the game

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;

    // Reset the scoreboard display

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
    document.getElementById("total-games").textContent = wins + losses + ties;

    // Reset the game input and result display

    document.getElementById("game__user-input").value = "";
    document.getElementById("game__result-text").textContent = "Game reset. Start again!";
}