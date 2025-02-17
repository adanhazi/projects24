let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 9);
}

let compareGuesses = (human, computer, target) => {
  if (Math.abs(human - target) <= Math.abs(target - computer)){
    return true;
  } else {
    return false;
  }
}

function updateScore(winner){
  switch(winner){
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
    default:
      console.log('not valid');
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}