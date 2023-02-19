const dropdown = document.querySelector('.dropdown');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownClose = document.querySelector('.dropdown__close');

const parametrDropdown = document.querySelector('.parametr__dropdown');
const parametrLink = document.querySelector('.parametr__link');



hamburgerMenu.addEventListener('click', e => {
    e.preventDefault()
    dropdown.style.display = 'block';

    dropdownClose.addEventListener('click', e => {
        dropdown.style.display = 'none';
    })
})

parametrLink.addEventListener('click', e => {
    e.preventDefault()
    parametrDropdown.style.display = 'block';

    if(!e.target == parametrLink) {
        parametrDropdown.style.display = 'none';
    }
    console.log(e.target);
})