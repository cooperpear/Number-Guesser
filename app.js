// GAME FUNCTION:
// -Player must guess a number between min and max
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess button
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate user input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if (guess === winningNum) {
        //Game over / Won
        //Disable input if true
        guessInput.disabled = true;
        //Change border to green if true
        guessInput.style.borderColor = 'green';
        //Set Message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        //Wrong Number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game over / Lost
            //Disable input if true
            guessInput.disabled = true;
            //Change border to green if true
            guessInput.style.borderColor = 'red';
            //Set Message
            setMessage(`Game Over Man, Game Over! (Bill Paxton)`, 'red');
        } else {
            //Game continues / Answer wrong
            //Change border color
            //Change border to green if true
            guessInput.style.borderColor = 'red';

            //Clear input
            guessInput.value = '';
            //Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left... `, 'red');

        }
    }

});

//Create setMessage function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}