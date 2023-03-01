document.querySelector('a[href="#first-review"]');
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
