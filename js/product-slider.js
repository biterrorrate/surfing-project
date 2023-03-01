// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const slider = document.querySelector('.slider');
// const computedStyle = window.getComputedStyle(slider);
// const items = document.querySelectorAll('.product')

// itemWidth = getComputedStyle(items[0]).width;
// const step = parseInt(itemWidth);
// const preShownItems = 940 / step
// const maxRight = (items.length - preShownItems) * step;
// const minRight = 0;
// let currentRight = 0;

// slider.style.right = currentRight;
// rightBtn.addEventListener('click', e => {
//     e.preventDefault();
//     if (currentRight < maxRight) {
//         currentRight += step
//         slider.style.right = `${currentRight}px`;
//     }
// })

// leftBtn.addEventListener('click', e => {
//     e.preventDefault();
//     if(currentRight > minRight){
//         currentRight -= step
//         slider.style.right = `${currentRight}px`;
//     }
// })

//productSlide.style.background = '#F8FAF9'

const slider = $('.products').bxSlider({
    pager: false,
    controls: false
});

$('.arrow__right').on('click', e => {
    e.preventDefault();

    slider.goToNextSlide()
})

$('.arrow__left').on('click', e => {
    e.preventDefault();

    slider.goToPrevSlide()
})