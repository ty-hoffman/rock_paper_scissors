// create variable to hold computer answer
let pc_answer = '';

// create variable to hold user answer
let user_answer = '';

// Create array with values of rock/paper/scissors
let choices = ['rock', 'paper', 'scissors'];

// Create variable to hold a user's score
let userScore = 0;

// Create variable to hold the number of games remaining with initial value at 5
let roundsLeft = 5;

let result = ''

// Create function getComputerChoice to randomly return rock/paper/scissors
function getComputerChoice () {
    let random_Index = Math.floor(Math.random() * choices.length);
    let random_answer = choices[random_Index];
    return random_answer;
}

// Create function getPlayerSelection to ask player for rock/paper/scissors input
function getPlayerSelection (e) {
    user_answer = e.target.innerText.toLowerCase();
    return user_answer;
}

// Create function to run one round of rock/paper/scissors
function playRound (e) {

    pc_answer = getComputerChoice();
    getPlayerSelection(e);

    let answer_combined = pc_answer + " | " +  user_answer

    if (roundsLeft === 0) {
        userScore = 0;
        roundsLeft = 5;
    }

    switch (answer_combined) {
        case "rock | paper":
            result = "You win! Paper beats Rock."
            userScore++;
            roundsLeft--;
            break;
        case "rock | scissors":
            result = "You lose! Rock beats Scissors."
            roundsLeft--;
            break;
        case "rock | rock":
            result = "Tie! Round will be played again."
            break;
        case "paper | paper":
            result = "Tie! Round will be played again."
            break;
        case "paper | scissors":
            result = "You win! Scissors beats Paper."
            userScore++;
            roundsLeft--;
            break;
        case "paper | rock":
            result = "You lose! Paper beats Rock."
            roundsLeft--;
            break;
        case "scissors | paper":
            result = "You lose! Scissors beats Paper."
            roundsLeft--;
            break;
        case "scissors | scissors":
            result = "Tie! Round will be played again."
            break;
        case "scissors | rock":
            result = "You win! Rock beats Scissors."
            userScore++;
            roundsLeft--;
            break;
    }
    game();
}

// Create function to run game five times (extra rounds if there is a tie)
function game() {
    roundResultText.textContent = result;
    cpuScore = (5 - userScore - roundsLeft);
    gameResult = `User: ${userScore} wins. PC: ${cpuScore} wins.`
    if (roundsLeft === 0) {
        if (userScore >= 3) {
            gameResult = `You won! You had ${userScore} wins.`;

        }
        else {
            gameResult = `You lost. You had only ${userScore} wins.`;
        }
    }
    mainGameHeaderText.textContent = gameResult;
}

// creating buttons node list
const buttons = document.querySelectorAll('button');

// add event listener for all buttons
buttons.forEach((button) => { 
    button.addEventListener("click", playRound);
});

const roundResultText = document.querySelector('.roundResult');
const mainGameHeaderText = document.querySelector('.mainGameHeader');