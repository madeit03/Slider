const pauseHandle = $('#play');
const carouselElement = $('#carouselExampleAutoplaying');
const carouselHandle = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'), {
    interval: 2500,
    pause: false,
    // wrap: true,
});
let paused = false;
$(".dot").on('click', (e) => {
    const dotIndex = e.target.getAttribute('data-bs-slide-to');
    carouselHandle.to(dotIndex);
})
pauseHandle.on('click', () => {
    if (paused) {
        pauseHandle.removeClass("fa-solid fa-play")
        pauseHandle.addClass("fa-solid fa-pause")
        paused = false
        carouselHandle.cycle();
    }
    else {
        carouselHandle.pause();
        pauseHandle.removeClass("fa-solid fa-pause")
        pauseHandle.addClass("fa-solid fa-play")
        paused = true;
    }
})
$('.dot').eq(0).addClass('dotactive')
carouselElement.on('slid.bs.carousel', (e) => {
    const index = e.to;
    const dotsLength = $('.dot').length;
    for (let i = 0; i < dotsLength; i++) {
        $('.dot').eq(i).removeClass('dotactive')
    }
    $('.dot').eq(index).addClass('dotactive')
})
$('.button-slider').on('click', (e) => {
    const classes = e.target.classList;
    if (classes.contains('button-right')) {
        carouselHandle.next();
    }
    if (classes.contains("button-left")) {
        carouselHandle.prev();
    }
})
$('.chevron').on('click', (e) => {
    const classes = e.target.classList;
    if (classes.contains('fa-chevron-right')) {
        carouselHandle.next();

    }
    if (classes.contains("fa-chevron-left")) {
        carouselHandle.prev();
    }
})
