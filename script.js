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

// Create function getComputerChoice to randomly return rock/paper/scissors
function getComputerChoice () {
    let random_Index = Math.floor(Math.random() * choices.length);
    let random_answer = choices[random_Index];
    return random_answer;
}

// Create function getPlayerSelection to ask player for rock/paper/scissors input
function getPlayerSelection () {
    let player_input = prompt('Do you choose rock, paper, or scissors?');
    let player_answer = player_input.toLowerCase();
        while (player_answer != 'rock' && player_answer != 'paper' && player_answer != 'scissors') {
            player_input = prompt('Incorrect Selection! Please choose again.');
            player_answer = player_input.toLowerCase();
        }
    return player_answer;
}

// Create function to run one round of rock/paper/scissors
function playRound (pc_answer, user_answer) {
    let answer_combined = pc_answer + " | " +  user_answer
    let result = ''
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
    return result;
}

// Create function to run game five times (extra rounds if there is a tie)
function game() {
    userScore = 0;
    roundsLeft = 5;
    while (roundsLeft != 0) {
        pc_answer = getComputerChoice();
        user_answer = getPlayerSelection();
        round_result = playRound(pc_answer, user_answer);
        console.log(round_result);
    }
    if (userScore >= 3) {
        console.log (`You won! You had ${userScore} wins.`);

    }
    else {
        console.log (`You lost. You had only ${userScore} wins.`);
    }
}