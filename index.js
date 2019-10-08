const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function secondGuess() {
  let tryAgain = await ask("Higher or Lower?  ");
  if (tryAgain.toLowerCase() === "lower") {
    await ask("How about " + getRandomIntInclusive(min, max) + "? ");
  } else if (tryAgain.toLowerCase() === "higher") {
    await ask("How about " + getRandomIntInclusive(min, max) + "? ");
  } else if (tryAgain.toLowerCase() === "correct") {
    console.log("I'm so smart!!!");
  }

};
async function guessNum() {
  let firstGuess = await ask("Are you thinking of the number..." + computerGuess + "? \nYes or No? ");
  if (firstGuess.toLowerCase() === "correct") {
    console.log("I'm so smart!!!");
  } else if (firstGuess.toLowerCase() === "no") {

    secondGuess()

  }
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  let min = 1
  let max = 100
  let computerGuess = getRandomIntInclusive(min, max)

  // guessNum()

  let firstGuess = await ask("Are you thinking of the number..." + computerGuess + "? \nYes or No? ");
  while (firstGuess === "no") {
    let tryAgain = await ask("Higher or Lower?  ");
    if (tryAgain.toLowerCase() === "lower") {
      max = (computerGuess - 1)
    } else if (tryAgain.toLowerCase() === "higher") {
      min = (computerGuess + 1)
    }

    computerGuess = getRandomIntInclusive(min, max)
    firstGuess = await ask("How about " + computerGuess + "?\nYes on No ");
if (firstGuess === "yes"){
  console.log("I'm so smart!")
  process.exit()
}
  }

}

// This is the reverse number guess game I created
// console.log ("I'm thinking of a number between 1 and 100\nTake a guess!");
// process.stdin.on ('data', (chunk) => {
// let number = chunk;
// if (number > 20) {
//  console.log("Sorry! The number I'm thinking of is lower than " + number);
//  } else if (number < 20) {
//          console.log("Sorry! The number I'm thinking of is higher than " + number);
//      } else {
//  console.log ("Correct! How'd you know?");} 
//  
// });
