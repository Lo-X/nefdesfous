jQuery(function($) {
    $(document).ready(function() {
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