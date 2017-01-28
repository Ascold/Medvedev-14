/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav clearfix") {
        x.className += " responsive";
    } else {
        x.className = "topnav clearfix";
    }
}

$(document).ready(function () {
    $('#header-carousel').owlCarousel({
        loop: false,
        margin: 27,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            900: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });
});
$(document).ready(function () {
    $('#about-us-carousel').owlCarousel({
        loop: true,
        margin: 56,
        dots: false,
        nav: true,
        navText: ["", ""],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            550: {
                items: 2,
            },
            750: {
                items: 3
            },
            850: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});
$(document).ready(function () {
    $('#estate-carousel').owlCarousel({
        loop: true,
        items: 1,
        // margin: 27,
        nav: false,
        dots: true
    });
});