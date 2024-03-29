
var GoogleMap = function () {

    var panorama1, panorama2;

    // Return
    return {

      //Basic Map
      initGoogleMap: function () {

        /* Map */
        var fenway = {lat: 9.9384041, lng: -84.0783353};

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



      // Basic Panorama Map 1
      initPanorama1: function () {

        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano1'),
          {
            position: {lat: 9.9384041, lng: -84.0783353},
            pov: {heading: 165, pitch: 0},
            zoom: 1
          }
        );

      },
      // End Basic Panorama Map 1


      // Basic Panorama Map 2
      initPanorama2: function () {

        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano2'),
          {
            position: {lat: 9.9384041, lng: -84.0783353},
            pov: {heading: 165, pitch: 0},
            zoom: 1
          }
        );

      },
      // End Basic Panorama Map 2

    };
    // End Return

}();