$(window).on('load scroll', function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    $('.timeline-item').each(function() {
      var offsetTop = $(this).offset().top;
      if (scrollTop + windowHeight > offsetTop) {
        $(this).addClass('animated');
      }
    });
  });
  