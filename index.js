
//Transform name tag on hover
function nameLarge () {
    document.getElementById("combined-tags").style.transform = "scale(1.25)";
}
function nameRegular () {
    document.getElementById("combined-tags").style.transform = "scale(1)";
}



//Back to Top Button & Logo Container visibility
window.onscroll = function() {backToTop()};//Could also use window.addEventListener("scroll", backToTop);
function backToTop() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backToTop").style.visibility = "visible";
        document.getElementById("logo-container").style.opacity = "1";
    }
        else {
            document.getElementById("backToTop").style.visibility = "hidden";
    }
}





/* ---------------------------------------------
The following section was a code along tutorial
-----------------------------------------------*/
var barSize=600;

function doFirst() {
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    bar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');

    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);
}
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended) {//video is playing
        myMovie.pause();
        playButton.innerHTML = "Play";
        window.clearInterval(updateBar);
    }else{
        myMovie.play();
        playButton.innerHTML="Pause";
        updateBar=setInterval(update,500);
    }       
}
function update(){
    if(!myMovie.ended){
        var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
        progressBar.style.width=size+"px";
    }else{
        progressBar.style.width="0px";
        playButton.innerHTML = "Play";
        window.clearInterval(updateBar);
    }
}
function clickedBar(e){//pasing e parameter in for mouse position
    if(!myMovie.paused && !myMovie.ended) {
        var mouseX = e.pageX-bar.offsetLeft*1.4;
        var newtime=mouseX*myMovie.duration/barSize;
        myMovie.currentTime = newtime;
        progressBar.style.width=MouseX+'px';
    }
}
window.addEventListener('load',doFirst, false);



