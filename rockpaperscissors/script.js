// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
  
    if (playerChoice === computerSelection.toLowerCase()) {
      return "Tie";
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "paper" && computerSelection === "rock") ||
      (playerChoice === "scissors" && computerSelection === "paper")
    ) {
      return "Win";
    } else {
      return "Lose";
    }
  }
  
  // Function to play a 5-round game of Rock Paper Scissors
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, Scissors):`);
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: You ${result}! (You chose ${playerSelection}, Computer chose ${computerSelection})`);
  
      if (result === "Win") {
        playerScore++;
      } else if (result === "Lose") {
        computerScore++;
      }
  
      console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Call the game function to start the game
  game();