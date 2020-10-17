var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(redirectToPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function redirectToPosition(position) {
    x.innerHTML = "lat = "+ position.coords.latitude + " long = " + position.coords.longitude
    //window.location='weather.php.php?lat='+position.coords.latitude+'&long='+position.coords.longitude;
}