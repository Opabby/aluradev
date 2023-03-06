const card = document.querySelector('.card');
const cardIcons = document.querySelector('.card_icons');

card.addEventListener('mouseover', () => {
    cardIcons.classList.remove('hide');
})

card.addEventListener('mouseout', () => {
    cardIcons.classList.add('hide');
})