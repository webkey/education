
function changeCounter(e) {
	window.clearTimeout(counterTimer),
		counterTimer = window.setTimeout(function () {
		$("#main-counter .dashboard").trigger("click")
	}, counterInterval),
		$counter = $("#main-counter"),
		$numbers = $counter.find(".numbers"),
		$counter.find("p").animate({opacity: 0}, 500, function () {
		$(this).html('<span class="metrics">' + e.metrics + "</span> " + e.text).animate({opacity: 1}, 500)
	});
	var t = e.number.toString().split("");
	$numbers.find("span").stop().animate({top: 44}, 1e3);
	var i = $numbers.find("i").length - t.length;
	$counter
		.find(".dashboard")
		.removeClass("animate fast"),
		$counter.width($counter.width())
			.width("auto"),
		$counter.find(".dashboard")
			.addClass("animate fast"),
		$numbers.find("i")
			.addClass("animate")
			.each(function (e) {
		if (e >= i) {
			var n = t[e - i];
			$(this).find("span").stop().hide().css("top", 0).fadeIn(250).animate({top: -44 * n}, 1e3, function () {
				$(this).parent().removeClass("animate"), $counter.find(".dashboard").removeClass("animate fast"), $counter.width($counter.width()).width("auto"), $counter.find(".dashboard").addClass("animate")
			})
		} else $(this).find("span").stop().css("top", 0).fadeOut(250, function () {
			$(this).css("top", 44).show().parent().removeClass("animate")
		})
	})
}

var counterInterval = 11e3, counterTimer, mobile = !1;
$(document).ready(function () {
	$("#main-counter .dashboard").on("click", function () {
		$("#main-counter i.animate").length || (currentCounter == counterInfo.length - 1 ? currentCounter = 0 : currentCounter += 1, changeCounter(counterInfo[currentCounter]))
	});
	$("#main-counter").each(function () {
		var e = $(this).offset().top;
		if(e < $(window).height()){
			$("#main-counter").css("visibility", "visible").addClass("animate").find(".dashboard").trigger("click")
		} else  (
			$(window).on("scroll.counter", function () {
				e + 50 <= $(window).scrollTop() + $(window).height() && ($("#main-counter").css("visibility", "visible").addClass("animate").find(".dashboard").trigger("click"), $(window).off("scroll.counter"))
			})
		)
	})
});
var currentCounter = -1;