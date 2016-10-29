$(document).ready(function() {
  console.log('Sanity check.');

  $('#board').delegate('.box', 'click', function() {
    console.log($(this).html());
  });


});

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
  $
}