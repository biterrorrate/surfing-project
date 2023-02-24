const dropdown = document.querySelector('.dropdown');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownClose = document.querySelector('.dropdown__close');

const parametrDropdown = document.querySelector('.parametr__dropdown');
const parametrLink = document.querySelector('.parametrs__link');



hamburgerMenu.addEventListener('click', e => {
    e.preventDefault()
    dropdown.style.display = 'block';

    dropdownClose.addEventListener('click', e => {
        dropdown.style.display = 'none';
    })
})

parametrLink.addEventListener('click', e => {
    e.preventDefault()
})

// $(document).ready(() => {
 
//     $('.worker__polygone').on('click', e => {
//         let elem = $(e.currentTarget).parent().siblings('.worker__description');
//         elem.fadeToggle();
//     });
  
//  }); 

 $(document).ready(() => {

    $('.worker__polygone').on('click', e =>{

        let elem1 = $(e.currentTarget).parent().siblings('.worker__description');
        elem1.toggleClass('worker__description--position--open');
        console.log('Click');

    })
 })