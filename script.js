function initMap() {
    const salonLocation = { lat: 55.7558, lng: 37.6173 }; // Пример координат (Москва)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: salonLocation,
    });
    const marker = new google.maps.Marker({
        position: salonLocation,
        map: map,
        title: "Наш маникюрный салон",
    });
}
