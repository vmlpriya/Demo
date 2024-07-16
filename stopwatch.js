var stopwatch = document.getElementById("stopwatch");
var startbtn = document.getElementById("startbtn");
var timeoutId = null;
var ms = 0;
var mins = 0;
var sec = 0;
function start(flag){
    if(flag){
        startbtn.disabled = true;
    }
    timeoutId = setTimeout(function(){
        ms = parseInt(ms);
        mins = parseInt(mins);
        sec = parseInt(sec);
        ms++;
        if(ms == 100){
            sec = sec + 1;
            ms=0;
        }
        if(sec == 60){
            mins= mins + 1;
            sec=0;
        }
        if(ms < 10){
            ms = '0' +ms;
        }
        if(mins < 10){
            mins = '0' +mins;
        }
        if(sec < 10){
            sec = '0' +sec;
        }
        stopwatch.innerHTML = mins + ':' + sec + ':' + ms;
        start();
    },10);
}
function stop(){
    clearTimeout(timeoutId);
    startbtn.disabled = false ;
}
function reset(){
    ms = 0;
    mins = 0;
    sec = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startbtn.disabled = false;
}