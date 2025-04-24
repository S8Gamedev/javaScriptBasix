
let computerMove;
let result;
// displayScore();

function ComputerMove(useMove){
    const randomNumber= Math.random();
    if(randomNumber< 1/3 )
        return 'rock';
    else if(randomNumber< 2/3)
        return 'paper';
    else if(randomNumber< 1)
        return 'scissors';
}

function compareMove(userMove, computerMove){
    if(userMove === computerMove){
        return 'ties';
    }
    else if(userMove === 'rock'){
        return (computerMove === 'paper') ? 'losses' : 'wins';
    }else if(userMove === 'paper'){
        return (computerMove === 'scissors') ? 'losses' : 'wins';
    }else if(userMove === 'scissors'){
        return (computerMove === 'rock') ? 'losses' : 'wins';
    }
    
}
console.log('hello world'); 
let score ;

function get_score(){
    return JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
}
displayScore();
function displayScore(){
    score =  get_score() ;
    const scoreDisplay = document.querySelector('.js-score');
    console.log(scoreDisplay);
    scoreDisplay.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function updateScore(result) {
    score = get_score() ;
    score[result]++;
    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
    localStorage.removeItem('score');
    score = { wins: 0, losses: 0, ties: 0 };
    displayScore();
}


function displayResult(result){
    const resultDisplay = document.querySelector('.js-result');
    resultDisplay.innerHTML = `You ${result}!`;
}
// displayChoice('rock','paper');
function displayChoice(userMove, computerMove){
    const choiceDisplay = document.querySelector('.js-choices');
    // console.log(choiceDisplay);
    choiceDisplay.innerHTML = `You -- <img src='Images/${userMove}-emoji.png' class='emoji'> <img src='Images/${computerMove}-emoji.png' class='emoji'> -- computer` 
}