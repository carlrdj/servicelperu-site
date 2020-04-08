$("#goToHome").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top}, 'slow');
});
AOS.init();