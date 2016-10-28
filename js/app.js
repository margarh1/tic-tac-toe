$(document).ready(function() {
  console.log('Sanity check.');

  var clickedBox = $('.box').on('click', function() {
    $(this).html();
  });
  

});

function newBoard() {
  $('.box').empty();
}