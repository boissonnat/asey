function initMap() {
    var myLatLng = {lat: 13.673451, lng: -2.415941};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: true,
        zoom: 3
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Pouponière ASEY'
    });
}
