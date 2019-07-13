

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

//Transform name tag on hover
function nameLarge () {
    document.getElementById("combined-tags").style.transform = "scale(1.25)";
}
function nameRegular () {
    document.getElementById("combined-tags").style.transform = "scale(1)";
}

