const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

guessNum()

async function guessNum() {
  let firstGuess = await ask ("Are you thinking of the number..." + getRandomIntInclusive(1, 100) + "? \nYes or No? ");
    if (firstGuess.toLowerCase() === "correct") {
        console.log ("I'm so smart!!!");
    } else if (firstGuess.toLowerCase() === "no") { 

secondGuess()

async function secondGuess() {
    let tryAgain = await ask ("Higher or Lower or Correct?  ");
        while (tryAgain.toLowerCase() === "lower") {
            await ask ("How about " + getRandomIntInclusive(1, 100) + "? ");
        } while (tryAgain.toLowerCase() === "higher") {
                await ask ("How about " + getRandomIntInclusive(1, 100) +"? ");
            } if (tryAgain.toLowerCase() === "correct") {
        console.log ("I'm so smart!!!");}
        
      };

    }}}

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
