(function ($) {
	$(document).ready(function () {
		var $body,
			$window,
			$sidebar,
			adminbarOffset,
			top = false,
			bottom = false,
			windowWidth,
			windowHeight,
			lastWindowPos = 0,
			topOffset = 0,
			bodyHeight,
			sidebarHeight,
			resizeTimer;

		$body = $(document.body);
		$window = $(window);
		$sidebar = $('.main-right-sidebar .blog-articles__inner');
		adminbarOffset = $body.is('.admin-bar') ? $('#wpadminbar').height() : 0;

		if (!$sidebar.length) {
			return;
		}

		$window.on('scroll', scroll).on('resize', function () {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resizeAndScroll, 500);
		});

		resizeAndScroll();

		function resizeAndScroll() {
			resize();
			scroll();
		}

		function scroll() {
			var windowPos = $window.scrollTop();
			if (1500 > windowWidth) {
				return;
			}

			sidebarHeight = $sidebar.outerHeight();
			windowHeight = $window.height();
			bodyHeight = $body.height();

			if (sidebarHeight + adminbarOffset > windowHeight) {
				if (windowPos > lastWindowPos) {
					if (top) {
						top = false;
						topOffset = ($sidebar.offset().top > 0) ? $sidebar.offset().top - adminbarOffset : 0;
						$sidebar.attr('style', 'position: relative; top: ' + topOffset + 'px;');
					} else if (!bottom && windowPos + windowHeight > sidebarHeight + $sidebar.offset().top && sidebarHeight + adminbarOffset < bodyHeight) {
						bottom = true;
						$sidebar.attr('style', 'position: fixed; bottom: 0;');
					}
				} else if (windowPos < lastWindowPos) {
					if (bottom) {
						bottom = false;
						topOffset = ($sidebar.offset().top > 0) ? $sidebar.offset().top - adminbarOffset : 0;
						$sidebar.attr('style', 'position: relative; top: ' + topOffset + 'px;');
					} else if (!top && windowPos + adminbarOffset < $sidebar.offset().top) {
						top = true;
						$sidebar.attr('style', 'position: fixed;');
					}
				} else {
					top = bottom = false;
					topOffset = ($sidebar.offset().top > 0) ? $sidebar.offset().top - adminbarOffset : 0;
					$sidebar.attr('style', 'position: relative; top: ' + topOffset + 'px;');
				}
			} else if (!top) {
				top = true;
				$sidebar.attr('style', 'position: fixed;');
			}
			lastWindowPos = windowPos;
		}

		function resize() {
			windowWidth = $window.width();
			$sidebar.removeAttr('style');
			if (1500 > windowWidth) {
				top = bottom = false;
			}
		}
	});
});