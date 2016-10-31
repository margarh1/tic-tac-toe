$(document).ready(function() {
  console.log('Sanity check.');

  //$determiningPlayerPieces();
  //$displayTurnMessage();

  $('#board').delegate('.box', 'click', function() {
    if ($isNotOccupied(this)) {
      $drawPiece($trackPlayerTurn(), this);
      $checkForWin();
      numOfTurns++;
      //$displayTurnMessage();
    }
  });

  $('button').on('click', function() {
    $newBoard();
  });

});

var numOfTurns = 0;
var playerOne = {};
var playerTwo = {};
var winner;

function $determiningPlayerPieces() {
  if ((playerOne.piece !== 'x') && (playerOne.piece !== 'o')) {
    do {
      playerOne.piece = prompt("Please enter x or o for Player One's piece:");
      if (playerOne.piece !== null) {
        playerOne.piece = playerOne.piece.trim().toLowerCase();
        if (playerOne.piece === 'x') {
          playerTwo.piece = 'o';
        } else if (playerOne.piece === 'o') {
          playerTwo.piece = 'x';
        }
      }
    }
    while ((playerOne.piece !== null) && (playerOne.piece !== '') && (playerOne.piece !== 'x') && (playerOne.piece !== 'o'));
  }
  $determiningPlayerPieceColor(playerOne);
  $determiningPlayerPieceColor(playerTwo);
}

function $determiningPlayerPieceColor(player) {
  var cnt = 0;
  do {
    player.color = prompt("Please select one of the following colors:\n\nRed\n\nOrange\n\nYellow\n\nGreen\n\nBlue\n\nPurple");
    if (player.color !== null) {
      player.color = player.color.trim().toLowerCase();
      console.log(player.color);
      switch (player.color) {
        case 'red':
          break;
        case 'orange':
          break;
        case 'yellow':
          break;
        case 'green':
          break;
        case 'blue':
          break;
        case 'purple':
          break;
        case '':
          break;
        case null:
          break;
        default:
          $determiningPlayerPieceColor(player);
      }
    }
    cnt++;
  }
  while ((player.color !== null) && (player.color !== '') && (player.color !== 'red') && (player.color !== 'orange') && (player.color !== 'yellow') && (player.color !== 'green') && (player.color !== 'blue') && (player.color !== 'purple') && (cnt < 10));
}

function $newBoard() {
  $('.box').empty();
  winner = null;
  numOfTurns = 0;
}

function $drawPiece(playerTurn, box) {
  $(box).html(playerTurn);
  $(box).css('color', playerTurn.color);
}

function $trackPlayerTurn() {
  if (numOfTurns % 2 === 0) {
    return playerOne.piece;
  }
  return playerTwo.piece;
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
      case playerOne.piece:
        alert("It is now Player One's turn.");
        break;
      case playerTwo.piece:
        alert("It is now Player Two's turn.");
        break;
    }
  }
}

function $displayWinMessage() {
  switch (winner) {
    case playerOne.piece:
      alert('The winner is:\n\nPlayer One (' + playerOne.piece + ')');
      return false;
    case playerTwo.piece:
      alert('The winner is:\n\nPlayer Two (' + playerTwo.piece + ')');
      return false;
    case 'Draw':
      alert('This game ended in a draw.');
      return false;
  }
  return true;
}

