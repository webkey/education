var md = new MobileDetect(window.navigator.userAgent);
/*products gallery initial*/

//main navigation
/*drop navigation*/
// при загрузке страницы, добавляем <div class="overlay-page"></div>
$(window).load(function () {
	if(!$('.overlay-page').length){
		$('.header').after('<div class="overlay-page" />');
	}
});

function dropNavigation() {
	$('.header').on('click', '.btn-menu, .overlay-page', function (e) {
		// Если открыта форма поиска, закрываем ее
		var $searchForm = $('.search-form');
		if($searchForm.is(':visible')){
			$searchForm.find('.btn-search-close').trigger('click');
		}

		var btn = $(this);

		// Очищаем аттрибут "style" у всех развернутых дропов.
		// Нельзя использовать .hide или подобные методы,
		// т.к. необходимо, чтоб не было записи инлайновой style="display: none;"
		var dropDownMenu = $('.panel .nav-drop, .panel .nav-sub-drop');
		if (!btn.hasClass('active')) {
			dropDownMenu.attr('style','');
		}

		// Удаляем с пунктов меню всех уровней классы-модификаторы
		$('.nav-list li').removeClass('active made-current:not(.has-drop-side)');

		// Добавляем на боди класс открывающий меню. Открытие через CSS3 translate
		$('body').toggleClass('nav-opened');

		// Добавляем на кнопку меню активный класс
		btn.toggleClass('active');

		e.preventDefault();
	});

	// По клику на область вне меню, закрываем меню
	// .overlay-page
	$('.wrapper').on('click', '.overlay-page', function () {
		$('body').toggleClass('nav-opened');
		$('.btn-menu').toggleClass('active');
	});

	//
	/*main navigation scroll*/
	if($('.nav-list').length){
		var $body = $('body'),
			$btnMenu = $('.btn-menu'),
			_classInit = 'nav-custom-scroll-initialized',
			_classDestroy = 'nav-custom-scroll-destroy';

		if($btnMenu.is(':hidden')){
			$('.panel-frame, .drop-side__holder').mCustomScrollbar({
				//axis:"x",
				theme:"minimal-dark",
				scrollbarPosition: "inside",
				autoExpandScrollbar:true,
				scrollInertia: 20
			});

			$body.addClass(_classInit);
		} else {
			$body.addClass(_classDestroy);
		}
		if(md.mobile()){
			$('.panel-frame, .drop-side__holder').mCustomScrollbar("destroy");
		}

		$(window).on('debouncedresize', function () {
			if($btnMenu.is(':hidden') && $body.hasClass(_classDestroy)){
				$body.removeClass(_classDestroy);
				$body.addClass(_classInit);

				$('.panel-frame, .drop-side__holder').mCustomScrollbar({
					//axis:"x",
					theme:"minimal-dark",
					scrollbarPosition: "inside",
					autoExpandScrollbar:true
				});

				return;
			}

			if($btnMenu.is(':visible') && $body.hasClass(_classInit)){
				$body.removeClass(_classInit);
				$body.addClass(_classDestroy);

				$('.panel-frame, .drop-side__holder').mCustomScrollbar("destroy");
			}
		});
	}
	/*main navigation scroll end*/
}
function clearDropNavigation() {
	var panel = $('.panel'),
		btn = $('.btn-menu');

	if (panel.is(':visible') && btn.is(':hidden') && btn.hasClass('active')) {
		$('body').removeClass('nav-opened');
		btn.removeClass('active');
	}

	if (panel.is(':visible') && btn.is(':hidden')) {
		$('.made-current>.nav-sub-drop').slideDown(300);
		panel.find('li').removeClass('active');
	}

	if (!md.mobile() && btn.is(':visible') && btn.hasClass('active')) {
		$('body').removeClass('nav-opened');
		btn.removeClass('active');
		panel.find('li').removeClass('active');
	}
}
/*drop navigation end*/

/*main navigation*/
function mainNavigation() {
	// скорость анимации
	var dur = 300;

	var $navigationList = $('.nav-list');
	if (!$navigationList.length) {
		return;
	}

	// открываем дроп текущего пункта
	// не цсс, а скриптом, чтобы можно было плано закрыть дроп
	$('.made-current>.nav-sub-drop').slideDown(0);

	$($navigationList).on('click', 'a', function (e) {
		var $currentLink = $(this);
		var $currentItem = $currentLink.closest('li');

		var $btnMenu = $('.btn-menu');

		if($btnMenu.is(':visible') && $currentItem.has('ul').length){
			e.preventDefault();
			$currentItem.addClass('active');

			$('.panel').addClass('level-overlay');

			//добавить кноку "< назад"
			var _templateBackTo = '<div class="nav-back"><i class="depict-angle fa fa-chevron-left"></i><span>Назад</span></div>';
			if($btnMenu.is(':visible')){
				if(!$currentLink.siblings('div').has('.nav-back').length){
					$currentLink.siblings('div').closest_child('ul').before(_templateBackTo);
				}
			}
			return;
		}

		if(!$currentItem.has('ul').length || $currentItem.has('.drop-side').length) {
			return;
		}

		var dropDownMenu = $('.nav-drop, .nav-sub-drop');
		var $siblingDrop = $currentItem.siblings('li:not(.has-drop-side)').find(dropDownMenu);
		var $currentItemDrop = $currentItem.find(dropDownMenu);

		e.preventDefault();

		if($currentItem.hasClass('active') || $currentItem.hasClass('made-current')){
			closeDrops($siblingDrop);
			closeDrops($currentItemDrop);
			return;
		}
		closeDrops($siblingDrop);
		closeDrops($currentItemDrop);

		$currentItem.toggleClass('active');

		$currentItem.children(dropDownMenu).stop().slideDown(dur);
	});

	$($navigationList).on('click', '.nav-back', function () {
		$(this).closest('li').removeClass('active');
	});

	$('.nav-drop>.nav-back').on('click', function () {
		$('.panel').removeClass('level-overlay');
	});

	/*close all drops*/
	function closeDrops(drop) {
		drop.closest('li').removeClass('active made-current');
		if ($('.btn-menu').is(':hidden')) {
			drop.slideUp(dur);
		}
	}
}
/*main navigation end*/
//main navigation end

(function () {
	var CompanyProducts = function (settings) {
		var options = $.extend({

		}, settings || {});

		this.options = options;

		var $container = $(options.container);
		this.$container = $container;
		this.$thumbs = $(options.thumbs, $container);
		this.$thumbsItem = $(options.thumbsItem, $container);
		this.$thumbsContainer = $(options.thumbsContainer, $container);
		this.$panel = $(options.panel, $container);
		this.$tabPanel = $(options.tabPanel, $container);

		this.modifiers = {
			active: 'made-active',
			openedTab: 'opened-tab',
			closedTab: 'closed-tab',
			disabledThumbs: 'prod-disabled-thumb'
		};

		this.initScrollbar();
		this.bindEvents();
		this.initAccordion();
	};

	CompanyProducts.prototype.thumbPosition = function (currentThumb) {
		var left = currentThumb.position().left,
			width = this.$thumbsContainer.width(),
			widthThumb = currentThumb.width(),
			scrollOffset = (left - width / 2 < 0) ? 0 : left - width / 2 + widthThumb / 2;

		this.$thumbsContainer.mCustomScrollbar('scrollTo', scrollOffset);
	};

	CompanyProducts.prototype.initScrollbar = function () {
		var self = this;
		var amount = Math.max.apply(Math, self.$thumbs.map(function () {
			return $(this).outerWidth(true);
		}).get());

		self.$thumbsContainer.mCustomScrollbar({
			axis:"x",
			scrollbarPosition: "outside",
			advanced:{autoExpandHorizontalScroll:true},
			scrollInertia:500,
			scrollButtons:{
				enable:true,
				scrollType:"stepped"
			},
			keyboard:{
				enable: true,
				scrollType:"stepped"
			},
			snapAmount:amount,
			mouseWheel:{
				scrollAmount:amount
			},
			callbacks:{
				onInit:function () {
					$(this).addClass('mCSB_buttonLeftDisabled');
				},
				whileScrolling:function(){
					if($(this).hasClass('mCSB_buttonLeftDisabled')){
						$(this).removeClass('mCSB_buttonLeftDisabled');
					}
					if($(this).hasClass('mCSB_buttonRightDisabled')){
						$(this).removeClass('mCSB_buttonRightDisabled');
					}
				},
				onTotalScroll: function () {
					$(this).addClass('mCSB_buttonRightDisabled');
				},
				onTotalScrollBack: function () {
					$(this).addClass('mCSB_buttonLeftDisabled');
				}
			}
		});
	};

	CompanyProducts.prototype.initAccordion = function () {
		new MultiAccordion({
			accordionContainer: '.prod-links__list',
			accordionItem: 'li', //непосредственный родитель сворачиваемого элемента
			accordionEvent: 'a', //элемент, по которому производим клик
			collapsibleElement: '.prod-links__list>li>ul, .prod-links__sub-sub', //элемент, который сворачивается/разворачивается
			animateSpeed: 200,
			collapsibleAll: true //сворачивать элементы в соседних аккордеонах
		});
	};

	CompanyProducts.prototype.bindEvents = function () {
		var self = this,
			modifiers = this.modifiers,
			tabPanel = this.$tabPanel;

		tabPanel.addClass(modifiers.closedTab);

		this.$thumbs.on('click', function (e) {
			var $currentThumb = $(this).parent();
			if ($currentThumb.hasClass(modifiers.disabledThumbs)) { return; }

			var activeIndex = $currentThumb.index();

			self.thumbPosition($currentThumb);

			self.$thumbs.parent().removeClass(modifiers.active);
			$currentThumb.addClass(modifiers.active);

			tabPanel.removeClass(modifiers.active);
			tabPanel.removeClass(modifiers.openedTab);
			tabPanel.eq(activeIndex).addClass(modifiers.active);

			e.preventDefault();
		});
	};

	window.CompanyProducts = CompanyProducts;

}());

/*multi accordion*/
(function () {
	var MultiAccordion = function (settings) {
		var options = $.extend({
			collapsibleAll: false,
			animateSpeed: 300
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container; //блок с аккордеоном
		this.$accordionItem = $(options.accordionItem, container); //непосредственный родитель сворачиваемого элемента
		this.$accordionEvent = $(options.accordionEvent, container); //элемент, по которому производим клик
		this.$collapsibleElement = $(options.collapsibleElement); //элемент, который сворачивается/разворачивается
		this._collapsibleAll = options.collapsibleAll;
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);//элемент, по клику на который сворачиваются все аккордены в наборе

		this.modifiers = {
			active: 'made-active'
		};

		this.bindEvents();
		this.totalCollapsible();
	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$collapsibleElement.slideUp(self._animateSpeed);
			self.$accordionItem.removeClass(self.modifiers.active);
		})
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
				currentAccordionItem.find(anyAccordionItem).removeClass(modifiers.active);
				return;
			}

			if (self._collapsibleAll){
				var siblingContainers = $(accordionContainer).not(current.closest(accordionContainer));
				siblingContainers.find(collapsibleElement).slideUp(animateSpeed);
				siblingContainers.find(anyAccordionItem).removeClass(modifiers.active);
			}

			currentAccordionItem.siblings().removeClass(modifiers.active).find(collapsibleElement).slideUp(animateSpeed);
			currentAccordionItem.siblings().find(anyAccordionItem).removeClass(modifiers.active);

			currentAccordionItem.addClass(modifiers.active);
			current.siblings(collapsibleElement).slideDown(animateSpeed);
		})
	};

	window.MultiAccordion = MultiAccordion;
}());

function companyProductsInit() {
	if(!$('.prod').length){return;}
	new CompanyProducts({
		container: '.prod',
		thumbs: '.prod-thumbs__item',
		thumbsItem: '.prod-thumbs-list>li',
		thumbsContainer: '.prod-thumbs',
		panel: '.prod-container',
		tabPanel: '.prod-tab'
	});
}
/*products gallery initial end*/

$(document).ready(function(){
	companyProductsInit();
});