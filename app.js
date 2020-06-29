// GAME FUNCTION:
// -Player must guess a number between min and max
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(),
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

//Play again Event Listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }

})

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
        gameOver(true, `${winningNum} is correct, YOU WIN!`)

    } else {
        //Wrong Number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game over / Lost
            gameOver(false, `Game Over Man, Game Over! (Bill Paxton) ${winningNum} was winning number`);


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

//Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input if true
    guessInput.disabled = true;
    //Change border to green if true
    guessInput.style.borderColor = color;
    //Set text color
    message.style.color = color;
    //Set Message
    setMessage(msg);

    //Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNum() {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

//Create setMessage function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}