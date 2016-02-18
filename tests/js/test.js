(function ($) {
	var SimpleAccordion = function (settings) {
		var options = $.extend({
			accordionHeader: 'h3',
			active: '0',
			animateSpeed: 300
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container;
		this.$accordionHeader = $(options.accordionHeader, container);
		this.$accordionBody = $(this.$accordionHeader.next('div'));
		this._active = options.active;
		this._animateSpeed = options.animateSpeed;

		this.modifiers = {
			active: 'active',
			current: 'current'
		};

		this.bindEvents();
		this.beforeStart();
	};

	SimpleAccordion.prototype.beforeStart = function () {
		var self = this,
			_modifiersActive = 	self.modifiers.active,
			_indexActive = self._active;
		self.$accordionBody.eq(_indexActive).slideDown(0).addClass(_modifiersActive);
		self.$accordionHeader.eq(_indexActive).addClass(_modifiersActive);
	};

	SimpleAccordion.prototype.bindEvents = function () {
		var self = this,
			_modifiersActive = this.modifiers.active,
			animateSpeed = this._animateSpeed,
			accordionBody = this.$accordionBody;

		self.$accordionHeader.on('click', function (e) {
			e.preventDefault();
			var current = $(this);
			if(current.hasClass(_modifiersActive)){
				current.next('div').slideUp(animateSpeed).removeClass(_modifiersActive);
				current.removeClass(_modifiersActive);
				return;
			}
			accordionBody.slideUp(animateSpeed).removeClass(_modifiersActive);
			self.$accordionHeader.removeClass(_modifiersActive);
			current.next('div').slideDown(animateSpeed).addClass(_modifiersActive);
			current.addClass(_modifiersActive);
		})
	};

	window.SimpleAccordion = SimpleAccordion;
}(jQuery));

function accordionInit() {
	if($('.faq-list').length){
		new SimpleAccordion({
			accordionContainer: '.faq-list',
			animateSpeed: 200
		});
	}



	function navPosition(){
		if(!$('.nav-inner-page__holder').length){return;}

		var $body,
			$window,
			$nav,
			$navHolder,
			$footer,
			$logo,
			navContainerTop,
			top = false,
			bottom = false,
			windowWidth,
			windowHeight,
			lastWindowPos = 0,
			topOffset,
			bodyHeight,
			navHolderHeight,
			footerHeight,
			logoHeight,
			resizeTimer;

		$body = $(document.body);
		$window = $(window);
		$nav = $('nav.nav');
		$navHolder = $('.nav-inner-page__holder');
		$footer = $('footer.footer');
		$logo = $('.logo');
		footerHeight = $footer.height();
		//console.log('footerHeight: ', footerHeight);
		logoHeight = $logo.height();
		console.log('logoHeight: ', logoHeight);
		//navContainerTop = $body.is('.admin-bar') ? $('#wpadminbar').height() : 0;
		topOffset = $logo.length ? logoHeight : 0;
		navContainerTop = $nav.offset().top;
		var navHolderOffsetTop = $navHolder.offset().top;
		console.log('navHolderOffsetTop (before scroll): ', navHolderOffsetTop);

		if (!$navHolder.length) {
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
			//if (1500 > windowWidth) {
			//	return;
			//}

			bodyHeight = $body.height();
			//console.log('bodyHeight: ', bodyHeight);

			navHolderHeight = $navHolder.outerHeight();
			navHolderOffsetTop = $navHolder.offset().top;
			navContainerTop = $nav.offset().top;
			console.log('navHolderHeight (after scroll): ', navHolderHeight);
			console.log('navHolderOffsetTop (after scroll): ', navHolderOffsetTop);
			console.log('navContainerTop (after scroll): ', navContainerTop);

			var logoHeightNew = $logo.height();
			console.log('logoHeightNew: ', logoHeightNew);

			windowHeight = $window.height();
			var windowPos = $window.scrollTop();
			console.log('windowHeight: ', windowHeight);
			console.log('windowPos: ', windowPos);

			console.log('lastWindowPos: ', lastWindowPos);

			console.log('navHolderHeight + logoHeightNew > windowHeight: ', navHolderHeight + logoHeightNew  + ' > '+ (windowHeight));
			if (navHolderHeight + logoHeightNew > windowHeight) {
				console.log('1 start');
				navHolderOffsetTop = $navHolder.offset().top;
				console.log('navOffsetTop2: ', navHolderOffsetTop);
				console.log('bottom_1: ', bottom + ', top_1: ' + top);

				if (windowPos > lastWindowPos) {
					console.log('scroll ?');
					console.log('top && windowPos + windowHeight > navHolderHeight + navHolderOffsetTop (1): --> ', top + ' && ' + (windowPos + windowHeight) + ' > ' + (navHolderHeight + navHolderOffsetTop));
					console.log('bottom && navHolderHeight + logoHeightNew < windowHeight (2.2): --> ', bottom + ' && ' + (navHolderHeight + logoHeightNew) + ' < ' + windowHeight);
					console.log('!bottom && windowPos + windowHeight > navHolderHeight + navHolderOffsetTop && navHolderHeight + logoHeightNew > windowHeight (2): --> ', !bottom + ' && ' + (windowPos + windowHeight) + ' > ' + (navHolderHeight + navHolderOffsetTop) + ' && ' + (navHolderHeight + logoHeightNew) + ' > ' + windowHeight);

					if (top && windowPos + windowHeight > navHolderHeight + navHolderOffsetTop) {
						console.log(1);

						top = false;
						topOffset = (navHolderOffsetTop > 0) ? navHolderOffsetTop - navContainerTop : 0;
						console.log('topOffset_1: ', topOffset);

						$navHolder.attr('style', 'position: relative; top: ' + topOffset + 'px;');

					} else if (!bottom && windowPos + windowHeight > navHolderHeight + navHolderOffsetTop && navHolderHeight + logoHeightNew > windowHeight) {
						console.log(2);

						bottom = true;
						$navHolder.attr('style', 'position: fixed; bottom: 0; top: auto;');
						//$navHolder.attr('style', 'position: fixed; top: '+ -windowPos +'px;');

					}
					else if (bottom && navHolderHeight + logoHeightNew < windowHeight) {
						console.log(2.2);

						bottom = false;
						top = true;
						topOffset = navHolderOffsetTop - logoHeight - logoHeightNew;
						console.log('topOffset_1.2 (navHolderOffsetTop - logoHeight - logoHeightNew): ', navHolderOffsetTop + ' - ' + logoHeight + ' - ' + logoHeightNew +' = '+ topOffset);

						$navHolder.attr('style', 'position: fixed; top: '+logoHeight+';');
					}

					console.log('2 return');
				} else if (windowPos < lastWindowPos) {
					console.log('scroll ?');
					console.log('bottom_3 (3): ', bottom + ', top_3: ' + top);
					console.log('!top && windowPos + logoHeightNew < navHolderOffsetTop (4): --> ', !top + ' && ' + (windowPos + logoHeightNew) + ' < ' + navHolderOffsetTop);

					if (bottom) {
						console.log(3);

						bottom = false;
						topOffset = (navHolderOffsetTop > 0) ? navHolderOffsetTop - navContainerTop : 0;
						console.log('topOffset_3: ', topOffset);

						$navHolder.attr('style', 'position: relative; top: ' + topOffset + 'px;');
					} else if (!top && windowPos + logoHeightNew < navHolderOffsetTop) {
						console.log(4);

						top = true;
						//$navHolder.attr('style', 'position: fixed;');
						$navHolder.attr('style', 'position: relative; top: 0;');
					} else if (navHolderOffsetTop == navContainerTop){
						console.log(4.1);

						top = false;

						$navHolder.attr('style', 'position: relative; top: 0');
					}
				} else {
					console.log('scroll ??');
					console.log(5);

					top = bottom = false;
					topOffset = (navHolderOffsetTop > 0) ? navHolderOffsetTop - navHolderOffsetTop : 0;
					//topOffset = $logo.length ? logoHeightNew : 0;
					console.log('topOffset_3: ', topOffset);
					$navHolder.attr('style', 'position: relative; top: '+ topOffset +';');
					//$navHolder.attr('style', 'position: fixed; top: '+ topOffset +';');
				}
				console.log('1 stop');
			} else if (!top) {
				console.log(6);

				top = true;
				$navHolder.attr('style', 'position: fixed;');
			}
			console.log(7);
			console.log('******************************************************************************************************');

			lastWindowPos = windowPos;
		}

		function resize() {
			windowWidth = $window.width();
			$navHolder.removeAttr('style');
			if (1500 > windowWidth) {
				top = bottom = false;
			}
		}
	}

}