  /* global google:true */

(function(){
  'use strict';

  var map;

  $(document).ready(function(){
    var pos = getPosition();
    initMap(pos.lat, pos.lng, 11);
    addMarker(pos.lat, pos.lng, pos.name);
  });

  function addMarker(lat, lng, name){
    var latLng = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({map: map, position: latLng, title: name, animation: google.maps.Animation.DROP});
  }

  function getPosition(){
    var $vacation = $('#vacation'),
        name      = $vacation.attr('data-name'),
        lat       = $vacation.attr('data-lat'),
        lng       = $vacation.attr('data-lng'),
        pos       = {name:name, lat:parseFloat(lat), lng:parseFloat(lng)};

    return pos;
  }

  function initMap(lat, lng, zoom){
    var styles      = [{'elementType':'geometry','stylers':[{'hue':'#ff4400'},{'saturation':-68},{'lightness':-4},{'gamma':0.72}]},{'featureType':'road','elementType':'labels.icon'},{'featureType':'landscape.man_made','elementType':'geometry','stylers':[{'hue':'#0077ff'},{'gamma':3.1}]},{'featureType':'water','stylers':[{'hue':'#00ccff'},{'gamma':0.44},{'saturation':-33}]},{'featureType':'poi.park','stylers':[{'hue':'#44ff00'},{'saturation':-23}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'hue':'#007fff'},{'gamma':0.77},{'saturation':65},{'lightness':99}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'gamma':0.11},{'weight':5.6},{'saturation':99},{'hue':'#0091ff'},{'lightness':-86}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'lightness':-48},{'hue':'#ff5e00'},{'gamma':1.2},{'saturation':-23}]},{'featureType':'transit','elementType':'labels.text.stroke','stylers':[{'saturation':-64},{'hue':'#ff9100'},{'lightness':16},{'gamma':0.47},{'weight':2.7}]}],
        mapOptions  = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles: styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
})();
