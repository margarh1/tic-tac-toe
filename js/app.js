$(document).ready(function() {
  console.log('Sanity check.');

  $('#board').delegate('.box', 'click', function() {
    if ($isNotOccupied(this)) {
      //$checkForWin();
      $drawPiece($trackPlayerTurn(), this);
    }
    //console.log($checkForWin());
    console.log(winner);
  });

  $('button').on('click', function() {
    $newBoard();
  });

});

var numOfTurns = 0;
var playerOne = 'x';
var playerTwo = 'o';
var winner;

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
  winner = null;
  numOfTurns = 0;
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

function $checkRow() {
  console.log('$checkRow');
  if (($('#board .row:nth-child(1)').text().trim().replace(/\s/g, '') === 'xxx') || ($('#board .row:nth-child(1)').text().trim().replace(/\s/g, '') === 'ooo')) {
    console.log($('#board .row:nth-child(1)').html());
  } else if (($('#board .row:nth-child(2)').text().trim().replace(/\s/g, '') === 'xxx') || ($('#board .row:nth-child(2)').text().trim().replace(/\s/g, '') === 'ooo')) {
    console.log($('#board .row:nth-child(2)').html());
  } else if (($('#board .row:nth-child(3)').text().trim().replace(/\s/g, '') === 'xxx') || ($('#board .row:nth-child(3)').text().trim().replace(/\s/g, '') === 'ooo')) {
    console.log($('#board .row:nth-child(3)').html());
  }
}

function $checkColumn() {
  console.log('$checkColumn is linked');

}

function $checkDiagonal() {
  console.log('$checkDiagonal is linked');

}

function $checkForWin() {
  $checkRow();
  $checkColumn();
  $checkDiagonal();
  if (($isADraw() === true)) {
    winner = 'Draw';
  }
}

