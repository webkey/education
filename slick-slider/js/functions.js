/**
 * Created by Serhiy on 11.12.2015.
 */
$(document).ready(function () {

	var $slickElement = $('.slideshow');

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var $status = $(this).closest('.slide-wrap').find('.pagingInfo');
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		dots: true
	});


	$('.slide-syncing').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slide-syncing-thumbs'
	});
	$('.slide-syncing-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide-syncing',
		dots: true,
		arrows: true,
		centerMode: false,
		focusOnSelect: true
	});
});