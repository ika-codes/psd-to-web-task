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
        $('#js-about-img').addClass('is-visible');
    } else {
        $('#js-nav').removeClass('c-navigation__sticky');
        $('#js-toggle').removeClass('is-sticky');
        $('#js-search-toggle').removeClass('is-sticky');
    }
}

var showText = function (target, message, index, interval) {    
    if (index < message.length) { 
      $(target).append(message[index++]); 
      setTimeout(function () { showText(target, message, index, interval); }, interval); 
    } 
  }
      
  $(function () { 
   
    showText("#js-letter-header", "Lorem ipsum", 0, 100);  
   
  }); 