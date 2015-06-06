function initialize() {
      var sumatra = new google.maps.LatLng(-0.082918, 101.364743);
      var javaa = new google.maps.LatLng(-7.182422, 110.124670);
      var sunda = new google.maps.LatLng(-8.555344, 117.330322);
      var kalimantan = new google.maps.LatLng(0.012277, 113.725428);
      var sulawesi = new google.maps.LatLng(-1.409935, 121.517748);
      var maluku = new google.maps.LatLng(-3.263060, 130.146171);
      var png1 = new google.maps.LatLng(-6.415440, 144.120780);
     
      var pengaturan = {
        zoom: 4,
        center: sulawesi,
      }
      var map = new google.maps.Map(document.getElementById('maps'), pengaturan);

      var img ="js/map3.png"
      var tanda = new google.maps.Marker({
         map: map,
        position: sumatra,
        icon:img
       
      });
       var tanda = new google.maps.Marker({
         map: map,
        position: javaa,
        icon:img
       
      });
       var tanda = new google.maps.Marker({
         map: map,
        position: sunda,
        icon:img
       
      });
       var tanda = new google.maps.Marker({
         map: map,
        position: kalimantan,
        icon:img
       
      });
       var tanda = new google.maps.Marker({
         map: map,
        position: sulawesi,
        icon:img
       
      });
       var tanda = new google.maps.Marker({
         map: map,
        position: maluku,
        icon:img
       
      });
        var tanda = new google.maps.Marker({
         map: map,
        position: png1,
        icon:img
       
      });


      
    }
    google.maps.event.addDomListener(window, 'load', initialize);