
function clock(){
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    document.getElementById('hour').innerHTML = hour + " : ";
    document.getElementById('minute').innerHTML = minute + " : ";
    document.getElementById('second').innerHTML = second;

    setInterval(clock, 1000);
}

clock();