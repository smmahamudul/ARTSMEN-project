const menu = document.querySelector('#mobile-menu');
const menu_links = document.querySelector('.bar-menu');
const nav_logo = document.querySelector('#bar-logo');

// Display Mobile Menu
const mobile_menu = () => {
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
};

menu.addEventListener('click', mobile_menu);

// Show active menu when scrolling
const highlight_menu = () => {
    const elem = document.querySelector('.highlight');
    const home_menu = document.querySelector('#home-page');
    const about_menu = document.querySelector('#about-page');
    const design_menu = document.querySelector('#designs-page');
    const signup_menu = document.querySelector('#signup');
    let scrollPos = window.scrollY;

    // highlight
    if (window.innerWidth > 960 && scrollPos < 600) {
        home_menu.classList.add('highlight');
        about_menu.classList.remove('highlight');
        signup_menu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        about_menu.classList.add('highlight');
        home_menu.classList.remove('highlight');
        design_menu.classList.remove('highlight');
        signup_menu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        design_menu.classList.add('highlight');
        about_menu.classList.remove('highlight');
        signup_menu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        design_menu.classList.remove('highlight');
        signup_menu.classList.add('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlight_menu);
window.addEventListener('click', highlight_menu);

//  Closing mobile Menu 
const hide_mobile_menu = () => {
    const menu_bars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menu_bars) {
        menu.classList.toggle('is-active');
        menu_links.classList.remove('active');
    }
};

menu_links.addEventListener('click', hide_mobile_menu);
nav_logo.addEventListener('click', hide_mobile_menu);