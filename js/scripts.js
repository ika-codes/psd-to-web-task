$('#toggle').click(function() {
    $(this).toggleClass('is-active');
    $('#overlay').toggleClass('is-open');
   });

$('#search-toggle').click(function() {
    $(this).toggleClass('is-active');
    $('#search-overlay').toggleClass('is-open');
});