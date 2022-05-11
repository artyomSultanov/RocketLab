$('.countdown').countdown('2018/05/31', function(event) {
  jQuery(this).html(event.strftime('<ul class="countdown_timer">' + '<li><span class="time"> %D </span><span class="meta"> Дней </span></li>' + '<li><span class="time"> %H </span><span class="meta"> Часов </span></li>' + '<li><span class="time"> %M </span><span class="meta"> Минут </span></li>' + '<li><span class="time"> %S </span><span class="meta"> Секунд </span></li>' + '</ul>'));
});

$('#info').click(function() {
  $('body').toggleClass('move-50');
});
$('.close-info-wrapper').click(function() {
  $('body').toggleClass('move-50');
});

var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    $('#preload').stop(true, true).fadeOut({duration: 1000, queue: false}).fadeOut(600);
    clearInterval(interval);
    //done();
  }
}, 100);


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href');
  var offset = 110;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});
