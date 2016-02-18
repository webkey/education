/**
 * Created by Serhiy on 11.12.2015.
 */
$(document).ready(function () {

	/*history slider*/
	var $history = $('.history');
	if($history.length){
		$('.history-slider')
			.on('init', function(event, slick){
			$(slick.$slides[slick.currentSlide]).animate({
				'width':250,
				'height':250,
				'margin-top':-20,
				'margin-bottom':-20
			},300);
		})
			.slick({
			slidesToScroll: 1,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			variableWidth: true,
			infinite: false,
			draggable: false,
			speed: 300,
			asNavFor: '.years-slider'
		})
			.on('beforeChange', function(event, slick, currentSlide){
			var $slickSliderCurrent = $(slick.$slider);

			$slickSliderCurrent.find('.slick-slide').removeClass('previous-slide');
			$(slick.$slides[currentSlide]).addClass('previous-slide');
		})
			.on('afterChange', function(event, slick, currentSlide){
			$(slick.$slider).find('.previous-slide:not(.current-slide)').animate({
				'width':80,
				'height':210,
				'margin-top':0,
				'margin-bottom':0
			},300);

			$(slick.$slides[currentSlide]).animate({
				'width':250,
				'height':250,
				'margin-top':-20,
				'margin-bottom':-20
			},300);

			if(currentSlide > $(slick.$slider).find('.previous-slide').attr('data-slick-index')){
				console.log(1);
				$(slick.$slideTrack).animate({
					left: "+=75"
				})
			} else {
				console.log(2);
				$(slick.$slideTrack).animate({
					left: "-=75"
				})
			}
		});

		$('.years-slider').on('init', function(event, slick){
			$(slick.$slides[slick.currentSlide]).animate({
				'width':250
			},300,function(){
				$(this).addClass('animated');
			});
		}).slick({
			arrow: false,
			//slidesToShow: 10,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect: true,
			variableWidth: true,
			useCSS:true,
			infinite: false,
			cssEase: 'linear',
			speed: 300,
			asNavFor: '.history-slider'
		}).on('afterChange', function(event, slick, currentSlide){
			$(slick.$slider).find('.animated:not(.current-slide)').animate({
				'width':80
			},300).removeClass('animated');

			if(currentSlide > $(slick.$slider).find('.animated').index()){
				$(slick.$slides[currentSlide]).animate({
					'width':250
				},300,function(){
					$(this).addClass('animated');
				});
			}
		});
		//$('.history-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//	if(currentSlide < nextSlide){
		//		$(slick.$slides[currentSlide]).animate({
		//			'width':80,
		//			'height':210,
		//			'margin-top':0,
		//			'margin-bottom':0
		//		},300).removeClass('animated');
		//	}
		//	if(currentSlide < nextSlide){
		//		$(slick.$slides[nextSlide]).animate({
		//			'width':250,
		//			'height':250,
		//			'margin-top':-20,
		//			'margin-bottom':-20
		//		},300,function(){
		//			$(this).addClass('animated');
		//		});
		//	}
		//});
		//$('.years-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//	if(currentSlide > nextSlide){
		//		$(slick.$slides[currentSlide]).animate({
		//			'width':80
		//		},300).removeClass('animated');
		//	}
		//	$(slick.$slides[nextSlide]).animate({
		//		'width':250
		//	},300,function(){
		//		$(this).addClass('animated');
		//	});
		//})
	}
	/*history slider end*/

});