const parametrDropdown = document.querySelector('.parametr__dropdown');
const parametrLink = document.querySelector('.parametrs__link');

parametrLink.addEventListener('click', e => {
    e.preventDefault()
})


$(document).ready(() => {

        $('.worker__headline').on('click', e =>{

            let descDrop = $(e.currentTarget).siblings('.worker__content');
            let polygone = $(e.currentTarget).find('.worker__polygone');

            if(descDrop.hasClass('worker__content--position--open')) {
                $('.worker__content').css({"height" : "0"});
                descDrop.removeClass('worker__content--position--open');
                polygone.css({
                    'transform':'rotate(0deg)',
                    'transition': 'transform 0.3s'
                })
            }else{
                $('.worker__content').css({"height" : "0"});
                $('.worker__content').removeClass('worker__content--position--open');
                $('.worker__polygone').css({
                    'transform':'rotate(0deg)',
                    'transition': 'transform 0.3s'
                })
                let blockHeight = $(e.currentTarget).siblings('.worker__content').find('.worker__description').height();
                console.log(blockHeight);
                descDrop.addClass('worker__content--position--open').css({"height" : `${blockHeight}px`});
                polygone.css({
                    'transform':'rotate(-180deg)',
                    'transition': 'transform 0.5s'
                })
            }
        })
})

