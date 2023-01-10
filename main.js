const menuButton = document.querySelector('#menu_button');
const searchButton = document.querySelector('#search_button');
const menu = document.querySelector('.main_nav');
const search = document.querySelector('.header_searchbar')

let isOpen = false;


menuButton.onclick = function open() {
    if (isOpen == false){
        menuButton.classList.remove('hamburger');
        menuButton.classList.add('close');
        menu.classList.remove('hide');
        isOpen = true;
    } else {
        menuButton.classList.remove('close');
        menuButton.classList.add('hamburger');
        menu.classList.add('hide');
        isOpen = false;
    }
}

searchButton.onclick = function open() {
    if (isOpen == false){
        searchButton.classList.remove('search');
        searchButton.classList.add('close');
        search.classList.remove('hide');
        isOpen = true;
    } else {
        searchButton.classList.remove('close');
        searchButton.classList.add('search');
        search.classList.add('hide');
        isOpen = false;
    }
}