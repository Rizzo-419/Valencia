


//Back to Top Button
window.addEventListener("scroll", backToTop);//Could also use window.onscroll = function() {backToTop()};
function backToTop() {
    if(document.documentElement.scrollTop > 375) {
        document.getElementById("backToTop").style.visibility = "visible";
        document.getElementById("logo-container").style.opacity = "1";   
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
