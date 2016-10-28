$(document).ready(function() {
  console.log('Sanity check.');

  $('.box').on('click', function() {
    console.log($(this).html());
  });


});

function newBoard() {
  $('.box').empty();
}