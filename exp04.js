$(function() {
    $('#hidebtn').click(function() {
        $('.card').hide();
    });
    $('#showbtn').click(function() {
        $('.card').show();
    });
    $('#togglebtn').click(function() {
        $('.card').toggle();
    });
    $('#fadeinbtn').click(function() {
        $('.card').fadeIn();
    });
    $('#fadeoutbtn').click(function() {
        $('.card').fadeOut();
    });
    $('#animatebtn').click(function() {
        // simple two-stage animation: shrink then expand using known sizes
        $('.card').animate({
            opacity: 0.5,
            width: '100px',
            height: '120px'
        }, 3000)
        .animate({
            opacity: 1,
            width: '300px',
            height: '400px'
        }, 3000);
    });
});