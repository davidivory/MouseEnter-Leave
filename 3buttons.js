$(document).ready(function() {
    $('div').mouseenter(function() {
        $(this).fadeTo('fast', 2);
        $(this).stop();
        $(this).animate({
            "height": "+200px",
            "width": "+200px"
        });
    });
    $('div').mouseleave(function() {
        $(this).fadeTo('fast', 0.6);
        $(this).animate({
            "height": "60px",
            "width": "100px"
        });
    });
});