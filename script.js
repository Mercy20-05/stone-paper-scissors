// Game state
let playerScore = 0;
let computerScore = 0;

// Choice mapping and icons
const choices = ['rock', 'paper', 'scissors'];
const choiceIcons = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

// Winning logic lookup: key beats value
const winningRules = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
};

// DOM Elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerPickElement = document.getElementById('player-pick');
const computerPickElement = document.getElementById('computer-pick');
const roundMessageElement = document.getElementById('round-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');

/**
 * Returns a random choice for the computer using Math.random
 */
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/**
 * Determines round outcome and updates state and UI
 */
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  // Update choice icons in display
  playerPickElement.textContent = choiceIcons[playerChoice];
  computerPickElement.textContent = choiceIcons[computerChoice];

  // Reset outcome classes
  roundMessageElement.classList.remove('win', 'lose', 'draw');

  // Win / Lose / Draw conditional logic
  if (playerChoice === computerChoice) {
    roundMessageElement.textContent = `It's a draw! Both chose ${playerChoice}.`;
    roundMessageElement.classList.add('draw');
  } else if (winningRules[playerChoice] === computerChoice) {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    roundMessageElement.textContent = `You win! ${capitalize(playerChoice)} beats ${computerChoice}.`;
    roundMessageElement.classList.add('win');
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    roundMessageElement.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`;
    roundMessageElement.classList.add('lose');
  }
}

/**
 * Resets score and game display
 */
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  playerPickElement.textContent = '❓';
  computerPickElement.textContent = '❓';
  roundMessageElement.textContent = 'Select a move to begin!';
  roundMessageElement.classList.remove('win', 'lose', 'draw');
}

/**
 * Helper to capitalize first letter
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Event Listeners
choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

resetButton.addEventListener('click', resetGame);