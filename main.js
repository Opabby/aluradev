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

// select option to change card color

let cardColor = document.querySelector('#cardcolor');
let language = document.querySelector('#language');
let colorCard = document.querySelector('.color_card');

console.log(colorCard);

cardColor.addEventListener("change", function(){
    if (this.value == 'light-blue'){
        colorCard.style.backgroundColor = "var(--light-blue)";
        cardColor.style.backgroundColor = "var(--light-blue)";
    } else if (this.value == 'green'){
        colorCard.style.backgroundColor = "var(--green)";
        cardColor.style.backgroundColor = "var(--green)";
    } else if (this.value == 'purple'){
        colorCard.style.backgroundColor = "var(--purple)";
        cardColor.style.backgroundColor = "var(--purple)";
    } else if (this.value == 'orange'){
        colorCard.style.backgroundColor = "var(--orange)";
        cardColor.style.backgroundColor = "var(--orange)";
    } else {
        colorCard.style.backgroundColor = "var(--pink)";
        cardColor.style.backgroundColor = "var(--pink)";
    }
})