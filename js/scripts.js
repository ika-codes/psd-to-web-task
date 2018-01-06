$('#js-toggle').click(function() {
    $(this).toggleClass('is-active');
    $('#js-overlay').toggleClass('is-open');
   });

$('#js-search-toggle').click(function() {
    $(this).toggleClass('is-active');
    $('#js-search-overlay').toggleClass('is-open');
});

$(window).scroll(function(){
    changeNavbar();
});

function changeNavbar() {
    var home = $(document).scrollTop();
    if (home >= 100) {
        $('#js-nav').addClass('c-navigation__sticky');
        $('#js-toggle').addClass('is-sticky');
        $('#js-search-toggle').addClass('is-sticky');
    } else {
        $('#js-nav').removeClass('c-navigation__sticky');
        $('#js-toggle').removeClass('is-sticky');
        $('#js-search-toggle').removeClass('is-sticky');
    }
}