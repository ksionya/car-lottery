$('.reviews-carousel').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// Меню бургер
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .header-menu').toggleClass('active');
    });
});