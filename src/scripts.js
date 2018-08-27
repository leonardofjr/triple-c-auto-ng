$(document).ready(() => {

    $('#hamburger-button, #close-mobile-navigation-btn').click((e) => {
        animateMobileNavigation(e, '#mobile-menu');
    });

    function animateMobileNavigation(e, target) {
        $(target).animate({
            opacity: 1,
            width: "toggle"
        }, 300, () => {
        });
    }

})
