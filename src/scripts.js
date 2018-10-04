$(document).ready(function() {
    /* This script is to collapse the bootstrap mobile menu when a nav item is clicked */
    /* When a nav item is clicked */
    $('.dropdown-item , .nav-item').click(function(e) {
        /* we will remove the bootstrap show class */
        $('#navbarNavDropdown').removeClass('show');
    })
})
