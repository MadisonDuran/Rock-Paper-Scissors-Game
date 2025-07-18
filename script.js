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
    } else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

   resultDisplay.textContent = `You chose ${userInput}, computer chose ${computerChoice}. ${result}`;
   }