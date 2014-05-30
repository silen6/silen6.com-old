(function($) {
  var loadShots = function() {
    var req = $.ajax({
      url: 'http://api.dribbble.com/players/silen6/shots',
      type: 'GET',
      dataType: 'jsonp'
    });

    return req;
  };

  $(function() {
    var shotsTemplate = $('#shots-template').html();


    loadShots().then(function(response) {
      console.log(response);
      $('.projects').html( _.template(shotsTemplate, response) );
    });
  });

})(jQuery);

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
