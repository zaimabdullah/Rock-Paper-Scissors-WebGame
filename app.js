const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// const start = function() {
//   console.log('Game is starting...');
// };

// like this, we call function expression = function store in other variable
// using function expression OVER function declaration(normal style) is, it will force you to declare function first before can use it

// function without name = anonymous function & need ';'

// const person = {
//   name: 'Max', // call as property
//   greet: function greet() {
//     console.log('Hello there!');
//   } // call as method @ function attached to an object
// }
// person.greet();

// console.dir(startGame); function are object

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const add = (a, b) => a + b;
// show how arrow function can simplify the function
// const add2 = function(a, b) {
//   return a + b;
// };

// use of default argument in function parameter
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   cChoice === ROCK && pChoice === PAPER ||
//   cChoice === PAPER && pChoice === SCISSORS ||
//   cChoice === SCISSORS && pChoice === ROCK
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + `had a draw`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `won.`;
  } else {
    message = message + `lost.`;
  }
  alert(message);
  gameIsRunning = false;
});

//  use this style when the anonymous function only used here

// not related to the game

const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) { // don't use this magic arguments which rest parameters style in ES5
    sum += num;
  }
  return sum;
}

console.log(sumUp(1, 5, 10, -3, 6, 10)); // argument no more need in array when func declaration use ... @ rest parameters
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10, 15, 20));