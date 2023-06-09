const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorsButton = document.querySelector('#scissorsBtn');
const resultDiv = document.querySelector('#results');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const gameResultDisplay = document.querySelector('#game-result');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
  // Make Prayerselection case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "it's tie";
  }
}
// Test function by using console.log to see the results.
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playSingleRound(playerSelection, computerSelection));

function game(playerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  const computerSelection = getComputerChoice();
  const result = playSingleRound(playerSelection, computerSelection);
  resultDiv.textContent = result;

  // Updates the scores based on the result of each round
  if (result.includes('Win')) {
    playerScore++;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else if (result.includes('Lose')) {
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  // Prints the final scores and declares the winner
  gameResultDisplay.textContent = `Finalscore: You ${playerScore}, Computer ${computerScore}`;

  if (playerScore > computerScore) {
    resultDiv.textContent = 'Congratulations, You won the game!';
  } else if (playerScore < computerScore) {
    resultDiv.textContent = 'Sorry,You lost the game!';
  } else {
    resultDiv.textContent = 'The game is tied!';
  }
}

rockButton.addEventListener('click', () => {
  game('rock');
});

paperButton.addEventListener('click', () => {
  game('paper');
});

scissorsButton.addEventListener('click', () => {
  game('scissors');
});
