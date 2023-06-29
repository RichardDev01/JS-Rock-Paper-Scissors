const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay  = document.getElementById('userChoice');
const resultDisplay  = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.rps_button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    computerChoice = Array.from(possibleChoices)[randomNumber].id;

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = "it's a draw!"
    }
    else if (computerChoice === 'rock' && userChoice ==='scissor'){
        result = "You Lost!"
    }
    else if (computerChoice === 'paper' && userChoice ==='rock'){
        result = "You Lost!"
    }
    else if (computerChoice === 'scissor' && userChoice ==='paper'){
        result = "You Lost!"
    }
    else {
        result = "You Won!"
    }

    resultDisplay.innerHTML= result
}