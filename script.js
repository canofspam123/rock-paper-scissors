let playerScore = 0;
let cpuScore = 0;

const optionsRelationshipMap = {
  rock : makeOption('scissors', 'paper'),
  paper : makeOption('rock', 'scissors'),
  scissors : makeOption('paper', 'rock'),
}
function makeOption(wins, loses) {
  return {
    winsAgainst : wins,
    losesAgainst : loses,
  }
}
//Creates the map for which option loses/wins against which options

function playRound (userChoice, cpuChoice) {
  if(optionsRelationshipMap[userChoice].winsAgainst === cpuChoice) {
    playerWin();
    return;
  }
  if(optionsRelationshipMap[userChoice].losesAgainst === cpuChoice) {
    cpuWin();
    return;
  }
}

function playerWin(){
  playerScore++;
  console.log(`You win ${playerScore} - ${cpuSore}`);
}
function cpuWin() {
  cpuScore++;
  console.log(`You lose ${playerScore} - ${cpuScore}`);
}