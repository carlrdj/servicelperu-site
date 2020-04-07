$("#down-to-home").click(function() {
    $('#home').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});