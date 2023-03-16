
let timer = 0;
function recheck() {
    let window_top = $(this).scrollTop();
    let window_height = $(this).height();
    let view_port_s = window_top;
    let view_port_e = window_top + window_height;

    if (timer) {
        clearTimeout(timer);
    }

    $('.fly').each(function () {
        let block = $(this);
        let block_top = block.offset().top;
       let block_height = block.height();

        if (block_top < view_port_e) {
            timer = setTimeout(function () {
                block.addClass('show-block');
            }, 60);
        } else {
            timer = setTimeout(function () {
                block.removeClass('show-block');
            }, 60);
        }
    });
}

$(function () {
    $(window).scroll(function () {
        recheck();
    });

    $(window).resize(function () {
        recheck();
    });

    recheck();
});