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
                $('#return-to-top').stop().fadeOut();
            } else {
                $('#return-to-top').stop().fadeIn();
            }
        });

        moment.locale('fr');
        var currentMonth = moment().format('YYYY-MM');
        var nextMonth    = moment().add('month', 1).format('YYYY-MM');
        var events = [
            { date: currentMonth + '-' + '10', date_fr: moment(currentMonth + '-' + '10').format('LL'), title: 'Persian Kitten Auction', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, corporis dolorem eum ipsa magni molestiae porro quis quod, ratione repellendus vel velit veniam? Praesentium quibusdam sunt vero? Quam, repudiandae.', facebook: 'https://www.facebook.com/events/236119216854385/' },
            { date: currentMonth + '-' + '19', date_fr: moment(currentMonth + '-' + '19').format('LL'),title: 'Cat Frisbee', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, corporis dolorem eum ipsa magni molestiae porro quis quod, ratione repellendus vel velit veniam? Praesentium quibusdam sunt vero? Quam, repudiandae.' },
            { date: currentMonth + '-' + '23', date_fr: moment(currentMonth + '-' + '23').format('LL'),title: 'Kitten Demonstration', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, corporis dolorem eum ipsa magni molestiae porro quis quod, ratione repellendus vel velit veniam? Praesentium quibusdam sunt vero? Quam, repudiandae.' },
            { date: nextMonth + '-' + '07',    date_fr: moment(nextMonth + '-' + '07').format('LL'),title: 'Small Cat Photo Session', description: 'Center for Cat Photography' }
        ];
        $('#calendar').clndr({
            template: $('#full-clndr-template').html(),
            events: events,
            forceSixRows: true,
            moment: moment,
            clickEvents: {
                click: function (target) {
                    if (target.events.length == 1 && typeof target.events[0].facebook != 'undefined') {
                        var win = window.open(target.events[0].facebook, '_blank');
                        win.focus();
                    }
                },
            },
        });
    });
});