$(document).ready(function() {
  console.log('Sanity check.');

  $('#board').delegate('.box', 'click', function() {
    $isNotOccupied(this);
    $(this).html('hi');
    console.log($('.box').eq(this));
  });

  $('button').on('click', function() {
    $newBoard();
  });

});

var numOfTurns = 0;
var playerOne;
var playerTwo;

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
  
}

function $trackPlayerTurn() {
  if (numOfTurns % 2 === 0) {
    return playerOne;
  }
  return playerTwo;
}

function $isNotOccupied(box) {
  if ($(box).html() === 'hi') {
    return false;
  }
  return true;
}

