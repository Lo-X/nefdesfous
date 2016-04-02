jQuery(function($) {
    $(document).ready(function() {
        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            easing: 'swing',
        });

        $('.match-height').matchHeight({
            byRow: true
        });


        $('body').append('<a href="#" id="return-to-top" title="Retour en haut"><i class="fa fa-arrow-up"></i></a>');
        $('#return-to-top').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: 0}, 'slow');
        });

        $(window).scroll(function() {
            if($(window).scrollTop() === 0) {
                $('#return-to-top').fadeOut();
            } else {
                $('#return-to-top').fadeIn();
            }
        });
    });
});