let counter = {
    winCounter: 0,
    loseCounter: 0,
    drawCounter: 0
};

let jsResetCounter = {
  jsWinCounter: 0,
  jsLoseCounter: 0,
  jsDrawCounter: 0
};

let computerRepsonse = '';
let result = '';
let playerMovement;

function ComputerMove(playerMove){

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {

        computerRepsonse = 'Rock';
        playerMovement = playerMove;

    }
    else if (randomNumber > 1/3 && randomNumber < 2/3){
        
        computerRepsonse = 'Paper'
        playerMovement = playerMove;
    }
    else if (randomNumber > 2/3 && randomNumber < 1){

        computerRepsonse = 'Scissors';
        playerMovement = playerMove;
    }
    
}

function Result() {
    if (playerMovement === 'Scissors') {
  if (computerRepsonse === 'Rock') {
    result = 'You lose.';
    counter.loseCounter ++;
  } else if (computerRepsonse === 'Paper') {
    result = 'You win.';
    counter.winCounter ++;
  } else if (computerRepsonse === 'Scissors') {
    result = 'Tie.';
    counter.drawCounter ++;
  }

} else if (playerMovement === 'Paper') {
  if (computerRepsonse === 'Rock') {
    result = 'You win.';
    counter.winCounter ++;
  } else if (computerRepsonse === 'Paper') {
    result = 'Tie.';
    counter.drawCounter ++;
  } else if (computerRepsonse === 'Scissors') {
    result = 'You lose.';
    counter.loseCounter ++;
  }
  
} else if (playerMovement === 'Rock') {
  if (computerRepsonse === 'Rock') {
    result = 'Tie.';
    counter.drawCounter ++;
  } else if (computerRepsonse === 'Paper') {
    result = 'You lose.';
    counter.loseCounter ++;
  } else if (computerRepsonse === 'Scissors') {
    result = 'You win.';
    counter.winCounter ++;
  }
}

  const jsresult = document.getElementById('result');

  jsresult.innerText = result;

  const jsMyChoice = document.getElementById('mychoice');

  jsMyChoice.innerText = `Your move: ${playerMovement}`;

  const jsComputerMove = document.getElementById('computerMove');

  jsComputerMove.innerText = `Computer move: ${computerRepsonse}`;

  const jsWinCounter = document.getElementById('js-winCounter');

  jsWinCounter.innerText = `Wins: ${counter.winCounter}`;

  const jsLoseCounter = document.getElementById('js-loseCounter');

  jsLoseCounter.innerText = `Loss: ${counter.loseCounter}`;

  const jsDrawCounter = document.getElementById('js-drawCounter');

  jsDrawCounter.innerText = `Draws: ${counter.drawCounter}`;

  jsResetCounter.jsWinCounter = jsWinCounter;
  jsResetCounter.jsLoseCounter = jsLoseCounter;
  jsResetCounter.jsDrawCounter = jsDrawCounter;

}

function Reset() {
  counter.winCounter = 0;
  counter.loseCounter = 0;
  counter.drawCounter = 0;

  jsResetCounter.jsWinCounter.innerText = `Wins: ${counter.winCounter} |`;
  jsResetCounter.jsLoseCounter.innerText = `Loss: ${counter.loseCounter} |`;
  jsResetCounter.jsDrawCounter.innerText = `Draws: ${counter.drawCounter}`;
}