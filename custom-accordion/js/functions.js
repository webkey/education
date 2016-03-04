/**!
 * first child method
 */
(function ($) {
	$.fn.firstChildElement = function(filter) {
		var $found = $(),
			$currentSet = this; // Current place
		while ($currentSet.length) {
			$found = $currentSet.filter(filter);
			if ($found.length) break;  // At least one match: break loop
			// Get all children of the current set
			$currentSet = $currentSet.children();
		}
		return $found.first(); // Return first match of the collection
	};
}(jQuery));
/**first child method end*/

/*multi accordion*/
(function ($) {
	var MultiAccordion = function (settings) {
		var options = $.extend({
			collapsibleElement: '.js-ma-panel',
			classReturn: null,
			collapsibleAll: false,
			animateSpeed: 300,
			resizeCollapsible: false
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container; //блок с аккордеоном
		this.$accordionItem = $(options.accordionItem, container); //непосредственный родитель сворачиваемого элемента
		this.$accordionEvent = $(options.accordionEvent, container); //элемент, по которому производим клик
		this.$collapsibleElement = $(options.collapsibleElement, container);  //элементы, которые сворачиваются/разворачиваются
		this._collapsibleAll = options.collapsibleAll;
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);//элемент, по клику на который сворачиваются все аккордены в наборе
		this._resizeCollapsible = options.resizeCollapsible;//флаг, сворачивание всех открытых аккордеонов при ресайзе

		this.modifiers = {
			active: 'active',
			current: 'current'
		};

		// открываем астивный аккордеон
		// не цсс, а скриптом, чтобы можно было плавно закрыть
		var $currentElements = this.$accordionItem.filter('.'+this.modifiers.current+'');
		$.each($currentElements, function () {
			$(this).firstChildElement(options.collapsibleElement).slideDown(0);
		});

		this.bindEvents();
		this.totalCollapsible();
		this.totalCollapsibleOnResize();

	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$collapsibleElement.slideUp(self._animateSpeed);
			self.$accordionItem.removeClass(self.modifiers.active);
			self.$accordionItem.removeClass(self.modifiers.current);
		})
	};

	MultiAccordion.prototype.totalCollapsibleOnResize = function () {
		var self = this;
		$(window).on('resize', function () {
			if(self._resizeCollapsible){
				self.$collapsibleElement.slideUp(self._animateSpeed);
				self.$accordionItem.removeClass(self.modifiers.active);
			}
		});
	};

	MultiAccordion.prototype.bindEvents = function () {
		var self = this,
			modifiers = this.modifiers,
			animateSpeed = this._animateSpeed,
			accordionContainer = this.$accordionContainer,
			anyAccordionItem = this.$accordionItem,
			collapsibleElement = this.$collapsibleElement;

		self.$accordionEvent.on('click', function (e) {
			var current = $(this);
			var currentAccordionItem = current.closest(anyAccordionItem);

			if (!currentAccordionItem.has(collapsibleElement).length){
				return;
			}

			e.preventDefault();

			if (current.parent().prop("tagName") != currentAccordionItem.prop("tagName")) {
				current = current.parent();
			}

			if (current.siblings(collapsibleElement).is(':visible')){
				currentAccordionItem.removeClass(modifiers.active).find(collapsibleElement).slideUp(animateSpeed);
				currentAccordionItem.removeClass(modifiers.current);
				currentAccordionItem.find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);
				return;
			}


			if (self._collapsibleAll){
				var siblingContainers = $(accordionContainer).not(current.closest(accordionContainer));
				siblingContainers.find(collapsibleElement).slideUp(animateSpeed);
				siblingContainers.find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);
			}

			currentAccordionItem.siblings().removeClass(modifiers.active).find(collapsibleElement).slideUp(animateSpeed);
			currentAccordionItem.siblings().removeClass(modifiers.current);
			currentAccordionItem.siblings().find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);

			currentAccordionItem.addClass(modifiers.active);
			current.siblings(collapsibleElement).slideDown(animateSpeed);
		})
	};

	window.MultiAccordion = MultiAccordion;
}(jQuery));

$(document).ready(function(){
	function multiAccordionInit() {
		var $nav = $('.nav');
		if($nav.length){
			new MultiAccordion({
				accordionContainer: $nav,
				classReturn: '.nav-main-page',
				accordionItem: 'li',
				accordionEvent: 'a',
				collapsibleElement: '.js-nav-drop',
				animateSpeed: 200
			});
		}
	}
	multiAccordionInit();
});
/*multi accordion end*/