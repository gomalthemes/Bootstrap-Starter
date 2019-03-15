function initialize() {
    var data_lat,data_lng,data_marker,data_zoom;
    data_lat = jQuery('#gmap').attr('data-latitude');
    data_lng = jQuery('#gmap').attr('data-longitude');
    data_zoom = jQuery('#gmap').attr('data-zoom');
    data_marker = jQuery('#gmap').attr('data-marker');
    // Create an array of styles.
    var styles = [
        {elementType: 'geometry', stylers: [{color: '#f7f7f7'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f7f7f7'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#929292'}]},
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#929292'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#ededed'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#7aa2e0'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#7aa2e0'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#7aa2e0'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#ededed'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#b1b3b6'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#7aa2e0'}]
        }
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var myLatlng = new google.maps.LatLng(data_lat, data_lng);
    var mapOptions = {
        zoom: parseInt(data_zoom),
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('gmap'),
        mapOptions);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    // To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "",
        icon: data_marker
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);