// Guess the Number Game in Node.js

const readline = require('readline');

// Generate a random number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    rl.question('Guess a number from 1 to 10: ', (input) => {
        const number = parseInt(input);
        if (number === random) {
            console.log('You guessed the correct number!');
            rl.close();
        } else {
            console.log('Wrong guess, try again.');
            askGuess();
        }
    });
}

askGuess();

