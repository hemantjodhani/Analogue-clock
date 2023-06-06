var seconds= 0;
var hour = 0;
var minute = 0;
var date = new Date()
setInterval(
        function(){
            date = new Date();
            seconds = date.getSeconds() *6 ;
            hour = date.getHours() * 30;
            minute = date.getMinutes() * 6;
            document.getElementById("second-hand").style.transform = "rotate(" + seconds + "deg)"
            document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)"
            document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)"
},1000);