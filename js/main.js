var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {
  $lines.addClass('linify');
  $lines.removeClass('lines');
});

$btn.on('mouseenter', function (){
$('svg btn:nth-child(2)').css('fill', '#f60');

});



/*
$('.btn').on('click', function () {
  if ($svg.hasClass('is-engaged')) {
    $svg.addClass('is-disengaged');
    $svg.removeClass('is-engaged');
  } else {
    $svg.addClass('is-engaged');
    $svg.removeClass('is-disengaged');
  }
});
*/
