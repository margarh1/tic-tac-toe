$(document).ready(function() {
  console.log('Sanity check.');

  $('#board').on('.box', 'click', function() {
    console.log('Works!');
    console.log();
  });


});

function newBoard() {
  $('.box').empty();
}