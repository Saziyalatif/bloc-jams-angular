/*
Refactor the individual style calls of the landing.js script to be a single function named revealPoint that:
takes a single argument: the index of the points class node element, and
gets called in a for loop.
- create revealPoint function
- have a single argument: points index
- create a for loop using the nodes
*/


var animatePoints = function() {

    var points = document.getElementsByClassName('point');

    // var revealFirstPoint = function() {
    //     points[0].style.opacity = 1;
    //     points[0].style.transform = "scaleX(1) translateY(0)";
    //     points[0].style.msTransform = "scaleX(1) translateY(0)";
    //     points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
    // };

    var revealPoints = function(index) {
        // points[index].style.opacity = 1;
        // points[index].style.transform = "scaleX(1) translateY(0)";
        // points[index].style.msTransform = "scaleX(1) translateY(0)";
        // points[index].style.WebkitTransform = "scaleX(1) translateY(0)";

        points[index].addClass("bounceIn");

        /**
         * CSS class looks like this:
         * 
         * .transformer {
             transform: scaleX(1) translateY(0);
             ms-transform: scaleX(1) translateY(0);
             webkit-transform: scaleX(1) translateY(0)
             opacity: 1
         }
         **/

    };

    
    var animatePoints = function(){
        var revealPoint = function() {
           $(this).css({
               opacity: 1,
               transform: 'scaleX(1) translateY(0)'
               });


            $(window).load(function() {
                if ($(window).height() > 950) {
                    animatePoints();
                }
                $(window).scroll(function(event) {
                    console.log(event);
                    if ($(window).scrollTop() >= 500) {
                        animatePoints();
                    }

                });

            
        });
}


    $.each($('.point'), revealPoint);

// var revealSecondPoint = function() {
//     points[1].style.opacity = 1;
//     points[1].style.transform = "scaleX(1) translateY(0)";
//     points[1].style.msTransform = "scaleX(1) translateY(0)";
//     points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
// };

// var revealThirdPoint = function() {
//     points[2].style.opacity = 1;
//     points[2].style.transform = "scaleX(1) translateY(0)";
//     points[2].style.msTransform = "scaleX(1) translateY(0)";
//     points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
// };

// revealFirstPoint();
// revealSecondPoint();
// revealThirdPoint();


};