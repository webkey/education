(function () {

	/*create function-constructor*/
	var ProductGallery = function (options) {
		this.options = options;
		var $container = $(options.container);

		this.$container = $container;
		this.$thumbs = $(options.thumbs, $container);
		this.$thumbsContainer = $(options.thumbs_container, $container);
		this.$zoom = $(options.zoom, $container);
		this.$close = $(options.close, $container);
		this.$fotoramaContainer = $(options.fotorama_container, $container);

		this.modifiers = {
			hover: 'is-hover',
			active: 'is-active',
			open: 'is-opened'
		};

		this.fotorama = this.initFotorama();

		console.log(this.fotorama.size);

		this.initScrollbar();
		this.bindEvents();
	};

	ProductGallery.prototype.initFotorama = function () {
		var $fotorama = this.$fotoramaContainer.fotorama({
			height: 721,
			width: "100%",
			nav: false,
			thumbfit: "scaledown",
			hash: false,
			keyboard: true,
			shadows: 0,
			fit: "contain",
			enableifsingleframe: true
		});

		return $fotorama.data('fotorama');
	};

	ProductGallery.prototype.initScrollbar = function () {
		this.$thumbsContainer.mCustomScrollbar({
			axis: 'x',
			setWidth: '100%',
			advanced: {
				updateOnContentResize: true,
				updateOnImageLoad: true
			},
			mouseWheel: {
				enable: false
			},
			keyboard: {
				enable: false
			},
			contentTouchScroll: 25,
			callbacks: {
				onScroll: function () {
					console.log("Content scrolled...");// delete
				}
			}
		});
	};

	ProductGallery.prototype.updateZoomUrl = function () {
		var originalUrl = this.$thumbs.eq(this.fotorama.activeIndex).attr('data-original');

		originalUrl ? this.$zoom.attr('href', originalUrl).fadeIn(600) : this.$zoom.hide();
	};

	ProductGallery.prototype.scrollToActiveThumb = function () {
		var left = this.$thumbs.eq(this.fotorama.activeIndex).position().left,
			width = this.$thumbsContainer.width(),
			scrollOffset = (left - width / 2 < 0) ? 0 : left - width / 2;

		this.$thumbsContainer.mCustomScrollbar('scrollTo', scrollOffset);
	};

	ProductGallery.prototype.bindEvents = function () {
		var self = this,
			options = this.options,
			$container = this.$container,
			modifiers = this.modifiers;

		this.$thumbs.on('click', function () {
			var $activeThumb = $(this),
				activeIndex = $activeThumb.index();

			self.$thumbs.removeClass(modifiers.active);
			$activeThumb.addClass(modifiers.active);

			self.$container.addClass(modifiers.open);
			self.fotorama.show(activeIndex);

			self.updateZoomUrl();
		});

		this.$close.on('mouseup', function () {
			self.$container.removeClass(modifiers.open);
			self.$thumbs.removeClass(modifiers.active);
			self.$zoom.hide();
		});

		/*this.$fotoramaContainer.bind('fotorama:load', function (e, fotorama, extra) {
			if (Onliner.isRetina) {
				(function getRetinaImage() {
					var $image = extra.frame.$stageFrame.find('img'),
						imageSrc = $image.attr('src').replace('main', 'main@2');

					$.get(imageSrc).done(function () {
						$image.attr('src', imageSrc);
					});
				})();
			}
		});*/

		this.$fotoramaContainer.bind('fotorama:show', function (e, fotorama) {
			self.$thumbs.removeClass(modifiers.active);
			self.$thumbs.eq(self.fotorama.activeIndex).addClass(modifiers.active);

			self.scrollToActiveThumb();
		});

		this.$fotoramaContainer.bind('fotorama:showend', function (e, fotorama) {
			self.updateZoomUrl();
		});

		var $window = $(window),
			$arrowPrev = $(options.arrow_prev, $container),
			$arrowNext = $(options.arrow_next, $container),
			$arrowPrevArea = $(options.arrow_prev_area, $container),
			$arrowNextArea = $(options.arrow_next_area, $container);

		//добавление/удаление классов "is-hover"
		this.$fotoramaContainer.on('mousemove', function (event) {
			if (overCheck(event, $arrowNextArea)) {
				$arrowPrev.removeClass(modifiers.hover);
				$arrowNext.addClass(modifiers.hover);
			} else if (overCheck(event, $arrowPrevArea)) {
				$arrowNext.removeClass(modifiers.hover);
				$arrowPrev.addClass(modifiers.hover);
			} else {
				$arrowPrev.removeClass(modifiers.hover);
				$arrowNext.removeClass(modifiers.hover);
			}
		});

		//условие добавления/удаления класса "is-hover"
		function overCheck(event, $element) {
			var overEl = (function () {
				var offset = $element.offset(),
					scrollLeft = $window.scrollLeft(),
					scrollTop = $window.scrollTop(),
					x = event.clientX,
					y = event.clientY,
					left = offset.left - scrollLeft,
					right = offset.left - scrollLeft + $element.width(),
					top = offset.top - scrollTop,
					bottom = offset.top - scrollTop + $element.height();


				return (x > left && x < right) && (y > top && y < bottom);
			}());

			return overEl;
		}
	};

	window.ProductGallery = ProductGallery;

}());

$(document).ready(function () {

});
