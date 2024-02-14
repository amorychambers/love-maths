document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    runGame('addition');
})

/**
 * The main game 'loop', called when the script is first loaded 
 * and after the user's answer has been processed */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}
/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer() array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        incrementScore();
        alert('Hey! You got it right! :D');
    } else {
        alert(`Awww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

    }

/**
 * Gets the operands and the operator directly from the DOM,
 * returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition']
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let score = document.getElementById('score');
    score.innerText = parseInt(score.innerText) + 1;
}

/**
 * Gets the current incorrect score from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let foolScore = document.getElementById('incorrect');
    foolScore.innerText = parseInt(foolScore.innerText) + 1;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

