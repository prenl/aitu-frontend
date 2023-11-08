var countDownDate = new Date("Nov 8, 2023 17:40:00").getTime();

var interval = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
