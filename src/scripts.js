$(document).ready(function() {
    $('.toggle').click((e) => {
        let target = $(e.currentTarget).data("target");
        let collapsedStatus = $(e.currentTarget).data("collapsed");

        if (collapsedStatus !== 'on') {
            $(target).addClass('slide-in');
            $(e.currentTarget).addClass('slide-in-toggler');
            $('body').addClass('slide-in-body');
            $(e.currentTarget).data("collapsed", "on");
        }
        else {
            $('body').removeClass('slide-in-body');
            $(target).removeClass('slide-in');
            $(e.currentTarget).removeClass('slide-in-toggler');
            $(e.currentTarget).data("collapsed", "off");
        }
    });


    $('#mobile-menu a').click((e) => {
        $('body').removeClass('slide-in-body');
        $('#mobile-menu').removeClass('slide-in');
        $('.mobile-nav-toggler').removeClass('slide-in-toggler');
        $('.mobile-nav-toggler').data("collapsed", "off");
    })


    $('.toggle-free-quote-toggler').click((e) => {
        let target = $(e.currentTarget).data("target");
        let collapsedStatus = $(e.currentTarget).data("collapsed");

        if (collapsedStatus !== 'on') {
            $(target).addClass('slide-in-fixed-free-quote-container');
            $(e.currentTarget).addClass('slide-in-fixed-free-quote-form-toggler');
            $(e.currentTarget).data("collapsed", "on");
        }
        else {
            $(target).removeClass('slide-in-fixed-free-quote-container');
            $(e.currentTarget).removeClass('slide-in-fixed-free-quote-form-toggler');
            $(e.currentTarget).data("collapsed", "off");
        }
    });

})
