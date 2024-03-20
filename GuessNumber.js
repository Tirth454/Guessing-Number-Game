let random = parseInt(Math.random() * 100 + 1)

const gu = document.querySelector('#noInput')
const subButton = document.querySelector('#submit')
const IsTrue = document.querySelector('.TF')
const preGuess = document.querySelector('.preGuess')
const RemainingGuess = document.querySelector('.RemGuess')

var guessCount = 1

subButton.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(gu.value);
    validGuess(guess)

}, false)

function validGuess(guess) {
    if (isNaN(guess)) {
        DisplayMessage(`${guess} is invalid plz enter valid no.`)
    } else if (guess < 1) {
        DisplayMessage(`${guess} is less than 1 plz enter valid no.`)
    } else if (guess > 100) {
        DisplayMessage(`${guess} is more than 100 plz enter valid no.`)
    } else {
        DisplayGuess(guess)
        CheckGuess(guess)
    }
}

function CheckGuess(guess) {
    if (guessCount > 10) {
        DisplayMessage(`Game over,unable to guess`)
        // endgame()
    } else if (guessCount <= 10 && guessCount >= 1) {
        if (guess == random) {
            DisplayMessage(`Guessed it right!!`)
            DisplayGuess(guess)
            // endgame()
        } else if (guess < random) {
            DisplayMessage(`${guess} is too less.`)
            guessCount++;
            // DisplayGuess(guess)
        } else if (guess > random) {
            DisplayMessage(`${guess}is too much. `)
            guessCount++;
            // DisplayGuess(guess)
        }
    }
}
function DisplayMessage(Message) {
    // IsTrue.appendChild(document.createTextNode(`${Message}`));
    IsTrue.innerHTML = ` ${Message}`;
}
function DisplayGuess(guess) {
    gu.value = ' '
    preGuess.innerHTML += `${guess} `
    RemainingGuess.innerHTML = `${10 - guessCount}`;
}
function endgame() {
    
}