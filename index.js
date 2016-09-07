var prompt = require('prompt-sync')();

while (true) {
    var n = prompt('Enter a number between 1 and 10: ');
    n = Number.parseInt(n);
    if (!isNaN(n) && n >= 1 && n <= 10) {
        break;
    }
    console.log("Entry was invalid.")
}

var compGuess = 10 * Math.random() //0.0-1.0

compGuess = Math.ceil(compGuess) //4

if (n === compGuess) {
    console.log('You win!');
} else {
    console.log('You lose, dummy! Computer picked ', compGuess);
}

console.log(n);
console.log(compGuess);
//adding a comment
//adding second comment