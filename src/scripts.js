$('.toggle').click((e) => {
    let target = $(e.currentTarget).data("target");
    let collapsedStatus = $(e.currentTarget).data("collapsed");

    if (collapsedStatus !== 'on') {
        $(target).addClass('slide-in');
        $(e.currentTarget).addClass('slide-in-toggler');
        $(e.currentTarget).data("collapsed", "on");
    }
    else {
        $(target).removeClass('slide-in');
        $(e.currentTarget).removeClass('slide-in-toggler');
        $(e.currentTarget).data("collapsed", "off");
    }
});


$('#mobile-menu a').click((e) => {
    $('#mobile-menu').removeClass('slide-in');
    $('.mobile-nav-toggler').removeClass('slide-in-toggler');
    $('.mobile-nav-toggler').data("collapsed", "off");
})
