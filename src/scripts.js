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




    // On Load 
    setActiveTab('.tabs li:nth-child(1)');
    showTabContent('.tabs_content', 'tabs li:nth-child(1)')

    // On Click
    $('.tabs').children().click(function () {
        if (!$(this).hasClass('active')) {
            setActiveTab($(this));
            showTabContent('.tabs_content', $(this));
        }
    })


    function setActiveTab(e) {
        // Removing active class from siblings
        $(e).siblings().removeClass('active');
        // Adding active class to current selection
        $(e).addClass('active');

    }

    function hideTabContent(e) {
        // Hiding all tab content as a precaution
        $(e).children().slideUp();
    }
    function showTabContent(e, listItem) {
        hideTabContent(e);
        // Displaying content to the corresponding selection
        $(e).children().eq($(listItem).index()).slideDown();
    }
})
