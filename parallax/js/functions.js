function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-end').css('top',(0-(scrolled*0.01))+'px');
	$('#parallax-middle').css('top',(0-(scrolled*.50))+'px');
	$('#parallax-front').css('top',(0-(scrolled*.30))+'px');
}

$(window).scroll(function(e){
	parallaxScroll();
});