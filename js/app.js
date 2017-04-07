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
        $('#main-nav a').on('click', function(event) {
            event.preventDefault();
            var anchor = $(this).attr('href');
            var target = $(anchor);
            $('html,body').animate({scrollTop: target.offset().top - 150}, 'slow');
            location.hash = anchor;
        });

        $(window).scroll(function() {
            if($(window).scrollTop() === 0) {
                $('#return-to-top').stop().fadeOut();
            } else {
                $('#return-to-top').stop().fadeIn();
            }
        });

        moment.locale('fr');
        var events = [
            { date: '2017-04-08 20:00:00', date_fr: moment('2017-04-08 20:00:00').format('LLL'), title: 'P V L S Λ R', description: 'Entre voyage interstellaire et ode à l\'humanité, PVLSAR distille à travers un électro-pop teinté de rock une mélodie planante mêlée a des percussions puissantes. C\'est fin 2016 après une année de gestation que le projet prend enfin son envol, développant son propre univers de science-fiction mais surtout son propre style cross-média alliant à la fois lumière son et image.', facebook: 'https://www.facebook.com/events/236119216854385/' },
            { date: '2017-04-27 20:00:00', date_fr: moment('2017-04-27 20:00:00').format('LLL'),title: 'Livresque (les jeudis de la Nef)', description: 'Au menu de la soirée : les gens d\'ici !<br>Ils parlent deux langues, mangent de la Wurst et des Krumpakieschele, s\'appellent Muller, Fischer ou Weber... Pourquoi ? Le roman de Pascale Hugues "Marthe et Mathilde" - une famille entre France et Allemagne - vous éclairera. Une soirée légèrement bilingue et musicale, mais pas que...' },
            { date: '2017-04-29 20:00:00', date_fr: moment('2017-04-29 21:00:00').format('LLL'),title: 'Allan Ros', description: 'Furieux ou intimiste, Allan Ros dresse, à travers un jeu de guitare atypique et un métissage de culture, un portrait moderne de la musique folk. Après un premier mini-album, ONCE, sorti en octobre 2014. Allan Ros sort le 7 mai 2016 son premier album : 10 titres qui cassent les codes de la musique folk, alliant l’énergie et la fureur du rock aux sonorités de la guitare acoustique.<br>La Bellevilloise (http://www.labellevilloise.com/allan-ros/)', facebook: 'https://www.facebook.com/AllanRosMusic/' },
            { date: '2017-05-11 20:00:00', date_fr: moment('2017-05-11 20:00:00').format('LLL'),title: 'Rencontre avec des agriculteurs Burkinabè (les jeudis de la Nef)', description: 'Plus d\'informations à venir. Rencontre, échange, débat organisé par l\'association Mil\'École avec des agriculteurs Burkinabè - Le bocage sahélien', facebook: 'https://www.facebook.com/ongmilecole/' },
        ];
        $('#calendar').clndr({
            template: $('#full-clndr-template').html(),
            events: events,
            forceSixRows: true,
            moment: moment,
        });
    });
});