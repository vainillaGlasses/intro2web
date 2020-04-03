
var GoogleMap = function () {

    var panorama1, panorama2;

    // Return
    return {

      //Basic Map
      initGoogleMap: function () {

        /* Map */
        var fenway = {lat: 9.9380607, lng: -84.0783353};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: fenway,
          scrollwheel: false,
          zoom: 14
        });

        var marker = new google.maps.Marker({
          position: fenway,
          map: map,
          title: 'Company, Inc.'
        });

      },
      // End Basic Map

    };
    // End Return

}();