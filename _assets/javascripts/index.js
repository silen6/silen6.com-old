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
