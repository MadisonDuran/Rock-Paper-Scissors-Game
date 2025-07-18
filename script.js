      let wins = 0;
      let losses = 0;
      let ties = 0;

      function playGame() {
        const userInput = document.getElementById("game__user-input").value.toLowerCase();
        const resultDisplay = document.getElementById("game__result-text");
        const choices = ["rock", "paper", "scissors"];

        if (!choices.includes(userInput)) {
        resultDisplay.textContent = "Please type 'rock', 'paper', or 'scissors'.";
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

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

function updateScoreboard() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
    document.getElementById("total-games").textContent = wins + losses + ties;
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
    document.getElementById("total-games").textContent = wins + losses + ties;

    document.getElementById("game__user-input").value = "";
    document.getElementById("game__result-text").textContent = "Game reset. Start again!";
}