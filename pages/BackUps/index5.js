

window.onload = function(){transImgs};
window.addEventListener("scroll", backToTop);//when the onscroll even happens it calls the function backToTop. Could also use window.onscroll = function() {backToTop()};


//Back to Top Button
function backToTop() {
    if(document.documentElement.scrollTop > 750) {
        document.getElementById("backToTop").style.visibility = "visible";
    }
        else {
            document.getElementById("backToTop").style.visibility = "hidden";
    }
}

//Transform Imgs - instead of using CSS
function transImgs () {
    document.getElementById("name-tag").style.transform = "scale(1.25)"); {
       document.getElementById("name-tag2").style.transform = "scale(1.25)";
    }
    else {
        console.log("transImg error log");
    }
}