$(document).ready(function() {
    $(".navbar .navbar-collapse ul li span").click(function() {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
        $(this).next('ul').toggle();
    });
});