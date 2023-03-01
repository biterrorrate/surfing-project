const dropdown = document.querySelector('.dropdown');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownClose = document.querySelector('.dropdown__close');


hamburgerMenu.addEventListener('click', e => {
    e.preventDefault()
    dropdown.style.display = 'block';

    dropdownClose.addEventListener('click', e => {
        dropdown.style.display = 'none';
    })
})