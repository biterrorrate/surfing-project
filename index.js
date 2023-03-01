////Hamburger-menu
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

////Accordion
parametrLink.addEventListener('click', e => {
    e.preventDefault()
})


$(document).ready(() => {

    $('.worker__polygone').on('click', e =>{

        let descDrop = $(e.currentTarget).parent().siblings('.worker__description');
        let polygone = $(e.currentTarget);

        if(descDrop.hasClass('worker__description--position--open')) {
            descDrop.removeClass('worker__description--position--open');
            polygone.css({
                'transform':'rotate(0deg)',
                'transition': 'transform 0.3s'
            })
        }else{
            $('.worker__description').removeClass('worker__description--position--open');
            $('.worker__polygone').css({
                'transform':'rotate(0deg)',
                'transition': 'transform 0.3s'
            })
            descDrop.addClass('worker__description--position--open');
            polygone.css({
                'transform':'rotate(-180deg)',
                'transition': 'transform 0.5s'
            })
        }
    })
})

////Product-Slider
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const slider = document.querySelector('.slider');
const computedStyle = window.getComputedStyle(slider);
const items = document.querySelectorAll('.product')

itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 940 / step
const maxRight = (items.length - preShownItems) * step;
const minRight = 0;
let currentRight = 0;

slider.style.right = currentRight;
rightBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step
        slider.style.right = `${currentRight}px`;
    }
})

leftBtn.addEventListener('click', e => {
    e.preventDefault();
    if(currentRight > minRight){
        currentRight -= step
        slider.style.right = `${currentRight}px`;
    }
})

////Review-Slider
const firstLink = document.querySelector('a[href="#first-review"]');
const secondLink = document.querySelector('a[href="#second-review"]');
const thirdLink = document.querySelector('a[href="#third-review"]');
const allLink = document.querySelectorAll('.interactive-avatar')
const anyLink = document.querySelector('.interactive-avatar')

const slideList = document.querySelector('.reviews__slides')
const slidesReview = document.querySelectorAll('.reviews__slide');
const slideReviewWidth = getComputedStyle(slidesReview[0]).width
const stepReview = parseInt(slideReviewWidth);


document.addEventListener("DOMContentLoaded", function() {

    firstLink.addEventListener('click', e => {
        e.preventDefault();

        let n = 0;
        slideList.style.right = `${n * stepReview}px`;

        allLink.forEach(anyLink => {
            anyLink.classList.remove('interactive-avatar--active');
        })

        firstLink.parentNode.classList.add('interactive-avatar--active');
        console.log(anyLink.classList)
    })

    secondLink.addEventListener('click', e => {
        e.preventDefault();

        let n = 1;
        slideList.style.right = `${n * stepReview}px`;

        allLink.forEach(anyLink => {
            anyLink.classList.remove('interactive-avatar--active');
        })

        secondLink.parentNode.classList.add('interactive-avatar--active');
    })

    thirdLink.addEventListener('click', e => {
        e.preventDefault();

        let n = 2;
        slideList.style.right = `${n * stepReview}px`;

        allLink.forEach(anyLink => {
            anyLink.classList.remove('interactive-avatar--active');
        })

        thirdLink.parentNode.classList.add('interactive-avatar--active');
    })
});


////Form
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit-btn');
const inputBackground = '#F08080'
const body = document.body;

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if(validateForm(form)) {
        
        const data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comment.value,
            to: 'loft@gmail.com'
        }

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            dataDeliveyMessage = inputMessage(xhr.response.message);
            body.appendChild(dataDeliveyMessage);
         });

        xhr.addEventListener('error', () => {
            dataDeliveyMessage = inputMessage('Ошибка отправки');
            body.appendChild(dataDeliveyMessage);
         });
    }

})
//Modal-window
function inputMessage (message) {

    const overlayElement = document.createElement('div');
    overlayElement.classList.add('modal');

    overlayElement.addEventListener('click', e => {
        if(e.target == overlayElement) {
            closeModal.click();
        }
    })

    const containerModal = document.createElement('div');
    containerModal.classList.add('modal__container');

    const contentModal = document.createElement('div');
    contentModal.classList.add('modal__content');
    contentModal.innerHTML = message;

    const closeModal = document.createElement('a');
    closeModal.classList.add('btn', 'btn--theme--yellow');
    closeModal.textContent = 'Закрыть';
    closeModal.href = "#";

    closeModal.addEventListener('click', e => {
        e.preventDefault()
        body.removeChild(overlayElement);
    })

    overlayElement.appendChild(containerModal);
    containerModal.appendChild(contentModal);
    containerModal.appendChild(closeModal);

    return overlayElement;   
}
//Validation
function validateForm(form) {
    let validate = true;

    if(!validateField(form.elements.name) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.name.style.background = inputBackground; 
    }else{
        form.elements.name.style.background = '#fff'; 
    }
    if(!validateField(form.elements.phone) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.phone.style.background = inputBackground; 
    }else{
        form.elements.phone.style.background = '#fff'; 
    }
    if(!validateField(form.elements.comment) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.comment.style.background = inputBackground; 
    }else{
        form.elements.comment.style.background = '#fff'; 
    }

    return validate;
}

function validateField(field) {
    return field.checkValidity();
}