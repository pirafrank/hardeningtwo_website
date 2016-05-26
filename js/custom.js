

/*
$( "#trigger" ).click(function() {
  $( "#listofstuff" ).toggle( "slow" );
});
*/

$( "#trigger" ).click(function() {
  $( "#navbarlist" ).toggleClass( "navbar-elements" );
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-elements ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1050,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.to-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('to-is-visible') : $back_to_top.removeClass('to-is-visible to-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('to-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

    // bind click event to all internal page anchors
    $("a[href*=#]").bind("click", function(e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr("href");
        // scroll to each target
        $(target).velocity("scroll", {
            duration: 700,
            offset: -40,
            easing: "ease-in-out"
        });
    });
});
