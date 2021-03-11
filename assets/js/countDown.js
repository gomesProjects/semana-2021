var conuntDate = new Date('Jul 8, 2021 12:30:00').getTime();

function countDown(){

    var now = new Date().getTime();
        gap = conuntDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;

        console.log(`${d}, ${h}:${m}:${s}`)
}

setInterval(function(){
    countDown();
},1000);