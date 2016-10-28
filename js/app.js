$(document).ready(function() {
  console.log('Sanity check.');

  $('.box').on('click', function() {
    console.log($(this).html());
  });


});

var playerOne;
var playerTwo;

function $determiningPlayerPieces() {
  while (playerOne !== ('x' || 'o')) {
    playerOne = String(prompt('Pick x or o:')).trim().toLowerCase();

  }
}

function $newBoard() {
  $('.box').empty();
}

function $drawPiece(playerTurn, box) {
  $
}