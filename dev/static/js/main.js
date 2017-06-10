;
// Начинать писать отсюда!!!!

var htmlName = window.location.pathname;

	$(".header__nav a").each(function(){
		var hash = $(this).attr("href");
		if('/' + hash == htmlName) {
			$(".header__nav a.active").removeClass("active");
			$(this).addClass("active");
		}
		
		if(htmlName == '/index.html' || htmlName == '/') {
			$(".sidebar").css('display', 'none');
			$(".slider.mini").removeClass("mini");
			$(".slider-bt__box.mini").removeClass("mini");
			$(".js-slick__slider-bt_mini").attr('class', 'js-slick__slider-bt');
		} else {
			$(".sidebar").css('display', 'block');
			$(".slider").addClass("mini");
			$(".slider-bt__box").addClass("mini");
			$(".js-slick__slider-bt").attr('class', 'js-slick__slider-bt_mini');
		}
	});


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
	
	$('.js-slick__slider-bt_mini').slick({
		dots: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '.slider-bt__arrow_next',
		prevArrow: '.slider-bt__arrow_prev',
	});
});