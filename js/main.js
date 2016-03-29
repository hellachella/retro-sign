var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn')

$btn.on('click', function () {
  $lines.addClass('linify');
  $lines.removeClass('lines');
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
