$(document).ready(function() {
  console.log('Sanity check.');

  $displayTurnMessage();

  $('#board').delegate('.box', 'click', function() {
    if ($isNotOccupied(this)) {
      $drawPiece($trackPlayerTurn(), this);
      $checkForWin();
      numOfTurns++;
      $displayTurnMessage();
    }
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
  if (numOfTurns % 2 === 0) {
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

function $checkRow(winStr) {
  if ($('#board .row:nth-child(1)').text().trim().replace(/\s/g, '') === winStr) {
    winner = $trackPlayerTurn();
  } else if ($('#board .row:nth-child(2)').text().trim().replace(/\s/g, '') === winStr) {
    winner = $trackPlayerTurn();
  } else if ($('#board .row:nth-child(3)').text().trim().replace(/\s/g, '') === winStr) {
    winner = $trackPlayerTurn();
  }
}

function $checkColumn(winStr) {
  if ($('.row .box:nth-of-type(1)').text() === winStr) {
    winner = $trackPlayerTurn();
  } else if ($('.row .box:nth-of-type(2)').text() === winStr) {
    winner = $trackPlayerTurn();
  } else if ($('.row .box:nth-of-type(3)').text() === winStr) {
    winner = $trackPlayerTurn();
  }
}

function $checkDiagonal(winStr) {
  if (($('.box').eq(0).text() + $('.box').eq(4).text() + $('.box').eq(8).text()) === winStr) {
    winner = $trackPlayerTurn();
  } else if (($('.box').eq(2).text() + $('.box').eq(4).text() + $('.box').eq(6).text()) === winStr) {
    winner = $trackPlayerTurn();
  }
}

function $checkForWin() {
  var threePlayerPieces = ($trackPlayerTurn() + $trackPlayerTurn() + $trackPlayerTurn());
  $checkRow(threePlayerPieces);
  $checkColumn(threePlayerPieces);
  $checkDiagonal(threePlayerPieces);
  if (($isADraw() === true)) {
    winner = 'Draw';
  }
}

function $displayTurnMessage() {
  if ($displayWinMessage()) {
    switch ($trackPlayerTurn()) {
      case playerOne:
        alert("It is now Player One's turn.");
        break;
      case playerTwo:
        alert("It is now Player Two's turn.");
        break;
    }
  }
}

function $displayWinMessage() {
  switch (winner) {
    case playerOne:
      alert('The winner is: ' + playerOne);
      return false;
    case playerTwo:
      alert('The winner is: ' + playerTwo);
      return false;
    case 'Draw':
      alert('This game ended in a draw.');
      return false;
  }
  return true;
}

