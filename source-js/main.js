/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav clearfix") {
        x.className += " responsive";
    } else {
        x.className = "topnav clearfix";
    }
}

$(document).ready(function(){
    $('#header-carousel').owlCarousel({
        loop: true,
        items: 4,
        margin: 27,
        nav: false,
        dots: true
    });
    $('#about-us-carousel').owlCarousel({
        loop: true,
        margin: 56,
        items: 5,
        dots: false,
        nav: true,
        navText: ["",""]
    });
    $('#estate-carousel').owlCarousel({
        loop: true,
        items: 1,
        // margin: 27,
        nav: false,
        dots: true
    });
});