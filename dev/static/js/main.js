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
});