// function initialize() {     
// 	var myLatlng = new google.maps.LatLng(41.2982773, 69.2735701);
// 	var myOptions = {
// 		zoom: 15,
// 		center: myLatlng,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}
// 	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
// }

function initMap() {
    const pos = {lat: 41.29811047242975, lng: 69.27087785784158}
    let opt = {
        center: pos,
        zoom: 15

    }
    
    let map = new google.maps.Map(document.getElementById('map'), opt)
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'ReStyle Beauty Salon',

    })

    let info = new google.maps.InfoWindow({
        content: '<h3>ReStyle BS</h3><p>lorem ipsum eyc</p>'
    })

    marker.addListener('click', () => {
        info.open(map, marker)
    })
}