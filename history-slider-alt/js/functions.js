(function ($) {
	var HistorySlider = function (settings) {
		var options = $.extend({
			sliderContainer: '.history-slider',
			sliderInner: '.history-sldr__holder',
			slide: '.history-sldr__item',
			arrowPrev: '.history-sldr__prev-btn',
			arrowNext: '.history-sldr__next-btn',
			padding: 40,
			largeWidth: 250,
			activeSlide: 5,
			animateSpeed: 300
		}, settings || {});

		this.options = options;
		var container = $(options.sliderContainer);
		this.$sliderContainer = container;
		this.$sliderInner = $(options.sliderInner, container);
		this.$slide = $(options.slide, container);
		this.$arrowPrev = $(options.arrowPrev, container);
		this.$arrowNext = $(options.arrowNext, container);
		//console.log(this.$slide);
		this._padding = options.padding;
		this._largeWidth = options.largeWidth;
		this._activeSlide = options.activeSlide;
		this._animateSpeed = options.animateSpeed;

		this.modifiers = {
			current: 'slide-current',
			track: 'slider-track',
			btnHidden: 'btn-hidden'
		};

		this.beforeStart();
		this.disabledArrows(this.$slide.eq(this._activeSlide));
		this.bindEvents();

		$('body').prepend('<div id="console"></div>');
	};

	HistorySlider.prototype.getLog = function (_class,log,color) {
		var tpl = '<div />';
		var $console = $('#console');
		var tplLog = '<b>' + _class + ': ' + '</b>' + log;
		if($console.has('.'+_class).length){
			$console.find('.'+_class).html(tplLog).css('color',color);
			return;
		}
		$(tpl).appendTo('#console').addClass(_class).html(tplLog).css('color',color);
	};

	HistorySlider.prototype.beforeStart = function () {
		var self = this,
			modifiers =self.modifiers;

		self.$slide.eq(self._activeSlide).css('width',250);

		var sumWidth = 0;
		for(var i = 0; i < self.$slide.length; i++){
			sumWidth += self.$slide.eq(i).outerWidth();
		}
		self.$sliderInner.addClass(modifiers.track).css({
			'width': sumWidth
		});

		self.$slide.eq(self._activeSlide).addClass(modifiers.current);
	};

	HistorySlider.prototype.disabledArrows = function (slide) {
		var self = this;
		if(self.$sliderInner.outerWidth() < self.$sliderContainer.outerWidth()){
			var modifiersBtnHidden = self.modifiers.btnHidden;
			self.$arrowPrev.addClass(modifiersBtnHidden);
			self.$arrowNext.addClass(modifiersBtnHidden);
		}

		self.$sliderContainer.removeClass('left-stop');
		self.$sliderContainer.removeClass('right-stop');

		var slidePrevWidth = slide.prev(),
			slideNextWidth = slide.next();
		if(slidePrevWidth.length == 0){
			self.$sliderContainer.addClass('left-stop');
		}
		if(slideNextWidth.length == 0){
			self.$sliderContainer.addClass('right-stop');
		}
	};

	HistorySlider.prototype.currentSlide = function ($currentSlide) {
		var self = this,
			_modifiersCurrent = this.modifiers.current;

		if($currentSlide.hasClass(_modifiersCurrent)){ return; }

		self.$slide.removeClass(_modifiersCurrent).css({
			'width': 80, 'height': 210, 'margin-top': 0, 'margin-bottom': 0
		});

		$currentSlide.addClass(_modifiersCurrent).css({
			'width': 250, 'height': 250, 'margin-top': -20, 'margin-bottom': -20
		});

		self.scrollToCurrentSlide($currentSlide.index());
		self.disabledArrows($currentSlide)
	};

	var scrollOffset = 0;
	HistorySlider.prototype.scrollToCurrentSlide = function (index) {
		var self = this;
		var slideWidth = self.$slide.eq(index).outerWidth(),
			slideNextWidth = self.$slide.eq(index).next().outerWidth(),
			slidePrevWidth = self.$slide.eq(index).prev().outerWidth(),
			slideLeftOffset = self.$slide.eq(index).offset().left,
			containerWidth = self.$sliderContainer.outerWidth(),
			containerLeftOffset = self.$sliderContainer.offset().left,
			slideLeftPosition = slideLeftOffset - containerLeftOffset,

			minPaddingLeft = self._padding,
			minPaddingRight = slideWidth + self._padding,

			rightEdge = containerWidth - minPaddingRight,
			innerWidth = self.$sliderInner.outerWidth(),
			innerLeftOffset = self.$sliderInner.offset().left,
			innerLeftPosition = innerLeftOffset - containerLeftOffset,
			//innerLeftPositionModule = Math.sqrt(Math.pow(innerLeftPosition, 2)),
			innerMaxLeftOffset = innerWidth - containerWidth;


		self.getLog('scrollOffset',scrollOffset);
		self.getLog('--slide','***');
		self.getLog('index',index);
		self.getLog('slideWidth',slideWidth);
		self.getLog('slideLeftOffset',slideLeftOffset);
		self.getLog('slideLeftPosition',slideLeftPosition);
		self.getLog('slideNextWidth',slideNextWidth,'#808080');
		self.getLog('slidePrevWidth',slidePrevWidth,'#808080');
		self.getLog('--container','***');
		self.getLog('containerWidth',containerWidth);
		self.getLog('containerLeftOffset',containerLeftOffset);
		self.getLog('a','------');
		self.getLog('rightEdge',rightEdge,'#333');
		self.getLog('innerWidth',innerWidth,'#333');
		self.getLog('innerLeftOffset',innerLeftOffset,'#333');
		self.getLog('innerLeftPosition',innerLeftPosition,'#333');
		//self.getLog('innerLeftPositionModule',innerLeftPositionModule,'#333');
		self.getLog('innerMaxLeftOffset',innerMaxLeftOffset,'#333');
		self.getLog('b','------');
		self.getLog('minPaddingLeft',minPaddingLeft);
		self.getLog('minPaddingRight',minPaddingRight);
		self.getLog('c','------');




		if(slideLeftPosition < minPaddingLeft && scrollOffset !== 0){

			slidePrevWidth = slidePrevWidth == null ? 0 : slidePrevWidth;
			if(scrollOffset > slidePrevWidth){
				console.log(2);
				scrollOffset -= slidePrevWidth;
			} else {
				console.log(3);
				scrollOffset = 0;
			}

			self.getLog('scrollOffset',scrollOffset, 'lightblue');
			self.$sliderInner.css('left', -scrollOffset);
			return;
		}

		if(slideLeftPosition < rightEdge || scrollOffset == innerMaxLeftOffset){
			console.log(1);
			self.getLog('scrollOffset',scrollOffset, 'green');

			return;
		}

		slideNextWidth = slideNextWidth == null ? 0 : slideNextWidth;
		if(slideNextWidth < innerMaxLeftOffset - scrollOffset){
			console.log(4);
			scrollOffset += slideNextWidth;

			self.getLog('scrollOffset',scrollOffset,'pink');

		} else {
			console.log(5);
			scrollOffset = innerMaxLeftOffset;

			self.getLog('scrollOffset',scrollOffset,'red');
		}


		self.$sliderInner.css('left', -scrollOffset);
	};

	HistorySlider.prototype.bindEvents = function () {
		var self = this,
			_modifiersCurrent = this.modifiers.current;

		self.$slide.on('click', function () {
			self.currentSlide($(this));
		});

		self.$arrowPrev.on('click', function(){
			var current = self.$sliderContainer.find('.'+_modifiersCurrent+'').prev();

			if(!current.length){ return; }

			self.currentSlide(current);
		});

		self.$arrowNext.on('click', function(){
			var current = self.$sliderContainer.find('.'+_modifiersCurrent+'').next();

			if(!current.length){ return; }

			self.currentSlide(current);
		})
	};

	window.HistorySlider = HistorySlider;
}(jQuery));

function historySliderInit() {
	if($('.history-slider').length){
		new HistorySlider({
			sliderContainer: '.history-slider',
			slide: '.history-sldr__item',
		});
	}
}


$(document).ready(function () {
	historySliderInit();
});