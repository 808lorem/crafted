;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.header__nav a').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('.js-slick__slider').slick({
		dots: true,
		speed: 300,
		nextArrow: '.slider__arrow_next',
		prevArrow: '.slider__arrow_prev',
	});
	
	$('.js-slick__slider-bt').slick({
		dots: false,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		nextArrow: '.slider-bt__arrow_next',
		prevArrow: '.slider-bt__arrow_prev',
	});
});