window.onload = function() {

    // toggle search and menu

    const searchButton = document.querySelector('#js-search-toggle');
    const menuButton = document.querySelector('#js-toggle');
    

    function toggleOpen() {
        let searchToggle = document.querySelector('#js-search-overlay');
        let menuToggle = document.querySelector('#js-overlay');
        this.classList.toggle('is-active');
            if (this === searchButton) {
                searchToggle.classList.toggle('is-open');
            } else {
                menuToggle.classList.toggle('is-open');
            }
        }

    searchButton.addEventListener('click', toggleOpen);
    menuButton.addEventListener('click', toggleOpen);


    // Menu bar expanding and contracting

    const nav = document.querySelector('#js-nav');

    function changeNavbar() {
        let topOfNav = nav.offsetTop;
        let phoneImg = document.querySelector('#js-about-img');
        if(window.scrollY > topOfNav) {
            nav.classList.add('c-navigation__sticky');
            searchButton.classList.add('is-sticky');
            menuButton.classList.add('is-sticky');
            phoneImg.classList.add('is-visible');
        } else {
            nav.classList.remove('c-navigation__sticky');
            searchButton.classList.remove('is-sticky');
            menuButton.classList.remove('is-sticky');
        }
    }

    window.addEventListener('scroll', changeNavbar);

    //hero scene appearing text

    function slideIn() {
        let heading = document.querySelector('#js-heading');
        let paragraph = document.querySelector('#js-paragraph');
        heading.classList.add('u-slide-in');
        setTimeout(function() { paragraph.classList.add('u-slide-in')}, 500);
    }

    setTimeout(slideIn, 700);
}