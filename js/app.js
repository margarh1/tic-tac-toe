$(document).ready(function() {
  console.log('Sanity check.');

  $('#board').delegate('.box', 'click', function() {
    if ($isNotOccupied(this)) {
      $drawPiece($trackPlayerTurn(), this);
    }
    console.log($isADraw());
    console.log(winner);
  });

  $('button').on('click', function() {
    $newBoard();
  });

});

var numOfTurns = 0;
var playerOne = 'x';
var playerTwo = 'o';
var winner = 'none';

function $determiningPlayerPieces() {
  if ((playerOne !== 'x') && (playerOne !== 'o')) {
    do {
      playerOne = prompt('Please enter x or o:');
      if (playerOne !== null) {
        playerOne = playerOne.trim().toLowerCase();
        if (playerOne === 'x') {
          playerTwo = 'o';
        } else if (playerOne === 'o') {
          playerTwo = 'x';
        }
      }
    }
    while ((playerOne !== null) && (playerOne !== '') && (playerOne !== 'x') && (playerOne !== 'o'));
  }
}

function $newBoard() {
  $('.box').empty();
}

function $drawPiece(playerTurn, box) {
  $(box).html(playerTurn);
}

function $trackPlayerTurn() {
  if (numOfTurns++ % 2 === 0) {
    return playerOne;
  }
  return playerTwo;
}

function $isNotOccupied(box) {
  if (($(box).html() === 'x') || ($(box).html() === 'o')) {
    alert('This space is already occupied. Please choose somewhere else.');
    return false;
  }
  return true;
}

function $isADraw() {
  if ($('.box:empty').length === 0) {
    return true;
  }
  return false;
}

function $3InARow() {
  console.log('$3InARow is linked');
}

function $checkForWin() {
  console.log('$checkForWin is linked');
  if (($isADraw() === true)) {
    winner = 'Draw';
  }
}

