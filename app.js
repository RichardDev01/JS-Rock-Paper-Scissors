const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay  = document.getElementById('userChoice')
const resultDisplay  = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.rps_button'); // Use dot (.) for class selector

let userChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}));