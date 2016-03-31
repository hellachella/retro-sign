var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');



$btn.on('click', function() {
$lines.addClass('linify');
$lines.removeClass('lines');
$engage.addClass('is-engaged');
});

$btn.on('mouseenter', function () {
  $(this).children('path:last-child').css('fill', '#f60');
});


/*
$btn.on('click', function () {
  $lines.addClass('linify');
  $lines.removeClass('lines');
  $engage.children().css('fill', '#f60');

  $engage.children('path:nth-child(1)').css('transition', 'all .5s');
  $engage.children('path:nth-child(6)').css('transition', 'all .5s');
  $engage.children('path:nth-child(2)').css('transition', 'all 1s');
  $engage.children('path:nth-child(5)').css('transition', 'all 1s');
  $engage.children('path:nth-child(3)').css('transition', 'all 1.5s');
  $engage.children('path:nth-child(4)').css('transition', 'all 1.5s');
  $engage.children().css('transition-delay', '.5s');
});*/




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
