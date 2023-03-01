const findBlockByAlias = alias => {
    return $('.reviews__display').filter((ndx, item) => {
        return $(item).attr('data-linked-with') == alias;
    });
}

$('.interactive-avatar__link').click( e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const curItem = $this.closest('.interactive-avatar');
    const target = $this.attr('data-open');
    const itemToShow = findBlockByAlias(target);

    itemToShow.addClass('active').siblings().removeClass('active');
    curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
})