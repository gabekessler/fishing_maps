function CoreMap(map, infoWindow) {
  this.map = map;
  this.infoWindow = infoWindow;

  this.setPosition = function() {
    pos = window.mapControl.pos;
    console.log(pos);
    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.' + pos);
    map.setCenter(pos);
    window.mapControl.setFormFields(pos['lat'], pos['lng'])
  }

  this.getCurrent = function() {
    window.mapControl.showLoader()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        window.mapControl.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        window.mapControl.setPosition();
        window.mapControl.hideLoader();
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  this.placeMarkerAndPanTo = function(latLng) {
    console.log(latLng);
    window.mapControl.pos = {lat:latLng.lat, lng:latLng.lng}
    var marker = new google.maps.Marker({
      position: latLng,
      map: window.mapControl.map
    });
    window.mapControl.setFormFields(window.mapControl.pos.lat, window.mapControl.pos.lng)
    map.panTo(latLng);
  }

  this.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

  this.setFormFields = function(lat, lng) {
    $('#location_latitude').val(lat);
    $('#location_longitude').val(lng);
  }

    this.showLoader = function() {
      $('.spinner_overlay').removeClass('hidden');
    }

    this.hideLoader = function() {
      $('.spinner_overlay').addClass('hidden');
    }


  }
