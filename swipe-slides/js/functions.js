//карусель-галерея в about, preident и gallery
/*
if ($('#carousel_wide').exists()){


}*/

$(window).load(function () {
	var _interval = setInterval(function () {

		if ($("#carousel_wide IMG:last").width() > 0) {

			clearInterval(_interval);

			(function($){
				var $slideshow=$("#carousel_wide"),
					$draged=$("#carousel_wide .in");

				//width of draged
				var comP=0;

				$draged.find("img").each(function(i){
					var aux=$(this).width();
					comP +=aux;
				});

				$draged.css("width", comP);

				//imagesLoaded( '#carousel_wide', function() {
				//
				//});

				$slideshow.overscroll({
					scrollLeft: 0,
					scrollTop: 0,
					direction: "horizontal",
					captureWheel: false,
					scrollDelta: 5.7
				});

				//$("#drag").fadeTo(250,1);
				//
				//$("#carousel_wide").mousedown(function(){
				//	$("#drag").fadeTo(200,0, function(){$(this).css("top","-5000px");})
				//});
				//
				//$(".carousel_container").mouseenter(function(){
				//	$("#drag").fadeTo(200,0, function(){$(this).css("top","-5000px");})
				//});
				//
				//$(".carousel_container").mouseleave(function(){
				//	$("#drag").fadeTo(200,1, function(){$(this).css("top","50%");})
				//});
				//
				//$('.carousel_container').bind( "touchstart", function(e){
				//	$("#drag").fadeTo(200,0, function(){$(this).css("top","50%");})
				//});

			})(jQuery);

		}


	}, 500);

});
