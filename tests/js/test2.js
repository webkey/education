function slidePlease(e, t) {
	window.clearTimeout(sliderTimer), $("#slider .pickers .current").length && ($pick = $("#slider .pickers i").eq(t), $("#slider .pickers .current").removeClass(), mobile ? ($slider.find(".slide").show(), $slider.find(".slider.current").removeClass("current"), $slider.find(".filmstrip").stop().animate({"margin-left": -1 * $slider.outerWidth() * e}, sliderSpeed, "easeOutQuart", function () {
		$pick.addClass("current"), $slider.find(".filmstrip").css("margin-left", -1 * $("#slider .viewport").outerWidth() * ($("#slider .pickers .current").index() + 1)), $slider.find(".slide").eq(e).addClass("current")
	})) : ($slider.find(".current").css({"z-index": 1}).removeClass("current").find(".first-line, .second-line").each(function () {
		$(this).stop().delay(50 * $(this).index()).animate({"margin-left": -500, opacity: 0}, 2 * sliderSpeed, function () {
			$(this).css({"margin-left": 0, opacity: 1})
		})
	}), $slider.find(".slide").stop().eq(e).each(function () {
		$(this).addClass("current").hide().css({"z-index": 2}).fadeIn(2 * sliderSpeed, function () {
			$pick.addClass("current"), $(this).siblings().hide(), sliderTimer = window.setTimeout(nextSlide, sliderInterval)
		}), $(this).find(".first-line, .second-line").css({"margin-left": -500, opacity: 0}).each(function () {
			$(this).stop().delay(50 * $(this).index()).animate({"margin-left": 0, opacity: 1}, 2 * sliderSpeed)
		})
	}), $slider.find(".filmstrip").css({"margin-left": -1 * $slider.outerWidth() * e})))
}
function prevSlide() {
	$("#slider .pickers .current").is(":first-child") ? slidePlease(0, $("#slider .pickers i").length - 1) : $("#slider .pickers .current").prev().trigger("click")
}
function nextSlide() {
	$("#slider .pickers .current").is(":last-child") ? slidePlease($("#slider .slide").length - 1, 0) : $("#slider .pickers .current").next().trigger("click")
}
function changeCounter(e) {
	window.clearTimeout(counterTimer), counterTimer = window.setTimeout(function () {
		$("#main-counter .dashboard").trigger("click")
	}, counterInterval), $counter = $("#main-counter"), $numbers = $counter.find(".numbers"), $counter.find("p").animate({opacity: 0}, 500, function () {
		$(this).html('<span class="metrics">' + e.metrics + "</span> " + e.text).animate({opacity: 1}, 500)
	});
	var t = e.number.toString().split("");
	$numbers.find("span").stop().animate({top: 44}, 1e3);
	var i = $numbers.find("i").length - t.length;
	$counter.find(".dashboard").removeClass("animate fast"), $counter.width($counter.width()).width("auto"), $counter.find(".dashboard").addClass("animate fast"), $numbers.find("i").addClass("animate").each(function (e) {
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
!function (e, t, i, n) {
	var r = i("html"), a = i(e), o = i(t), s = i.fancybox = function () {
		s.open.apply(this, arguments)
	}, l = navigator.userAgent.match(/msie/i), c = null, d = t.createTouch !== n, u = function (e) {
		return e && e.hasOwnProperty && e instanceof i
	}, h = function (e) {
		return e && "string" === i.type(e)
	}, f = function (e) {
		return h(e) && 0 < e.indexOf("%")
	}, p = function (e, t) {
		var i = parseInt(e, 10) || 0;
		return t && f(e) && (i *= s.getViewport()[t] / 100), Math.ceil(i)
	}, g = function (e, t) {
		return p(e, t) + "px"
	};
	i.extend(s, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !d,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
			iframe: {scrolling: "auto", preload: !0},
			swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
			keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]},
			direction: {next: "left", prev: "right"},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {overlay: !0, title: !0},
			onCancel: i.noop,
			beforeLoad: i.noop,
			afterLoad: i.noop,
			beforeShow: i.noop,
			afterShow: i.noop,
			beforeChange: i.noop,
			beforeClose: i.noop,
			afterClose: i.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {timer: null, isActive: !1},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function (e, t) {
			return e && (i.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (i.isArray(e) || (e = u(e) ? i(e).get() : [e]), i.each(e, function (r, a) {
				var o, l, c, d, f, p = {};
				"object" === i.type(a) && (a.nodeType && (a = i(a)), u(a) ? (p = {
					href: a.data("fancybox-href") || a.attr("href"),
					title: a.data("fancybox-title") || a.attr("title"),
					isDom: !0,
					element: a
				}, i.metadata && i.extend(!0, p, a.metadata())) : p = a), o = t.href || p.href || (h(a) ? a : null), l = t.title !== n ? t.title : p.title || "", d = (c = t.content || p.content) ? "html" : t.type || p.type, !d && p.isDom && (d = a.data("fancybox-type"), d || (d = (d = a.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)), h(o) && (d || (s.isImage(o) ? d = "image" : s.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (f = o.split(/\s+/, 2), o = f.shift(), f = f.shift())), c || ("inline" === d ? o ? c = i(h(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : p.isDom && (c = a) : "html" === d ? c = o : !d && !o && p.isDom && (d = "inline", c = a)), i.extend(p, {
					href: o,
					type: d,
					content: c,
					title: l,
					selector: f
				}), e[r] = p
			}), s.opts = i.extend(!0, {}, s.defaults, t), t.keys !== n && (s.opts.keys = t.keys ? i.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
		},
		cancel: function () {
			var e = s.coming;
			e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
		},
		close: function (e) {
			s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
		},
		play: function (e) {
			var t = function () {
				clearTimeout(s.player.timer)
			}, i = function () {
				t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
			}, n = function () {
				t(), o.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
			};
			!0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, o.bind({
				"onCancel.player beforeClose.player": n,
				"onUpdate.player": i,
				"beforeLoad.player": t
			}), i(), s.trigger("onPlayStart")) : n()
		},
		next: function (e) {
			var t = s.current;
			t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
		},
		prev: function (e) {
			var t = s.current;
			t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
		},
		jumpto: function (e, t, i) {
			var r = s.current;
			r && (e = p(e), s.direction = t || r.direction[e >= r.index ? "next" : "prev"], s.router = i || "jumpto", r.loop && (0 > e && (e = r.group.length + e % r.group.length), e %= r.group.length), r.group[e] !== n && (s.cancel(), s._start(e)))
		},
		reposition: function (e, t) {
			var n, r = s.current, a = r ? r.wrap : null;
			a && (n = s._getPosition(t), e && "scroll" === e.type ? (delete n.position, a.stop(!0, !0).animate(n, 200)) : (a.css(n), r.pos = i.extend({}, r.dim, n)))
		},
		update: function (e) {
			var t = e && e.type, i = !t || "orientationchange" === t;
			i && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function () {
				var n = s.current;
				n && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && s._setDimension(), "scroll" === t && n.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
			}, i && !d ? 0 : 300))
		},
		toggle: function (e) {
			s.isOpen && (s.current.fitToView = "boolean" === i.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
		},
		hideLoading: function () {
			o.unbind(".loading"), i("#fancybox-loading").remove()
		},
		showLoading: function () {
			var e, t;
			s.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), o.bind("keydown.loading", function (e) {
				27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
			}), s.defaults.fixed || (t = s.getViewport(), e.css({position: "absolute", top: .5 * t.h + t.y, left: .5 * t.w + t.x}))
		},
		getViewport: function () {
			var t = s.current && s.current.locked || !1, i = {x: a.scrollLeft(), y: a.scrollTop()};
			return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : a.width(), i.h = d && e.innerHeight ? e.innerHeight : a.height()), i
		},
		unbindEvents: function () {
			s.wrap && u(s.wrap) && s.wrap.unbind(".fb"), o.unbind(".fb"), a.unbind(".fb")
		},
		bindEvents: function () {
			var e, t = s.current;
			t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && o.bind("keydown.fb", function (r) {
				var a = r.which || r.keyCode, o = r.target || r.srcElement;
				return 27 === a && s.coming ? !1 : (!(r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || o && (o.type || i(o).is("[contenteditable]")) || !i.each(e, function (e, o) {
					return 1 < t.group.length && o[a] !== n ? (s[e](o[a]), r.preventDefault(), !1) : -1 < i.inArray(a, o) ? (s[e](), r.preventDefault(), !1) : void 0
				})), void 0)
			}), i.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function (e, n, r, a) {
				for (var o = i(e.target || null), l = !1; o.length && !l && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");)l = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = i(o).parent();
				0 !== n && !l && 1 < s.group.length && !t.canShrink && (a > 0 || r > 0 ? s.prev(a > 0 ? "down" : "left") : (0 > a || 0 > r) && s.next(0 > a ? "up" : "right"), e.preventDefault())
			}))
		},
		trigger: function (e, t) {
			var n, r = t || s.coming || s.current;
			if (r) {
				if (i.isFunction(r[e]) && (n = r[e].apply(r, Array.prototype.slice.call(arguments, 1))), !1 === n)return !1;
				r.helpers && i.each(r.helpers, function (t, n) {
					n && s.helpers[t] && i.isFunction(s.helpers[t][e]) && s.helpers[t][e](i.extend(!0, {}, s.helpers[t].defaults, n), r)
				}), o.trigger(e)
			}
		},
		isImage: function (e) {
			return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function (e) {
			return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (e) {
			var t, n, r = {};
			if (e = p(e), t = s.group[e] || null, !t)return !1;
			if (r = i.extend(!0, {}, s.opts, t), t = r.margin, n = r.padding, "number" === i.type(t) && (r.margin = [t, t, t, t]), "number" === i.type(n) && (r.padding = [n, n, n, n]), r.modal && i.extend(!0, r, {
					closeBtn: !1,
					closeClick: !1,
					nextClick: !1,
					arrows: !1,
					mouseWheel: !1,
					keys: null,
					helpers: {overlay: {closeClick: !1}}
				}), r.autoSize && (r.autoWidth = r.autoHeight = !0), "auto" === r.width && (r.autoWidth = !0), "auto" === r.height && (r.autoHeight = !0), r.group = s.group, r.index = e, s.coming = r, !1 === s.trigger("beforeLoad"))s.coming = null; else {
				if (n = r.type, t = r.href, !n)return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
				if (s.isActive = !0, ("image" === n || "swf" === n) && (r.autoHeight = r.autoWidth = !1, r.scrolling = "visible"), "image" === n && (r.aspectRatio = !0), "iframe" === n && d && (r.scrolling = "scroll"), r.wrap = i(r.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + r.wrapCSS).appendTo(r.parent || "body"), i.extend(r, {
						skin: i(".fancybox-skin", r.wrap),
						outer: i(".fancybox-outer", r.wrap),
						inner: i(".fancybox-inner", r.wrap)
					}), i.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
						r.skin.css("padding" + t, g(r.padding[e]))
					}), s.trigger("onReady"), "inline" === n || "html" === n) {
					if (!r.content || !r.content.length)return s._error("content")
				} else if (!t)return s._error("href");
				"image" === n ? s._loadImage() : "ajax" === n ? s._loadAjax() : "iframe" === n ? s._loadIframe() : s._afterLoad()
			}
		},
		_error: function (e) {
			i.extend(s.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: s.coming.tpl.error}), s._afterLoad()
		},
		_loadImage: function () {
			var e = s.imgPreload = new Image;
			e.onload = function () {
				this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
			}, e.onerror = function () {
				this.onload = this.onerror = null, s._error("image")
			}, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
		},
		_loadAjax: function () {
			var e = s.coming;
			s.showLoading(), s.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
				url: e.href, error: function (e, t) {
					s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
				}, success: function (t, i) {
					"success" === i && (e.content = t, s._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var e = s.coming, t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
			i(e.wrap).bind("onReset", function () {
				try {
					i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (e) {
				}
			}), e.iframe.preload && (s.showLoading(), t.one("load", function () {
				i(this).data("ready", 1), d || i(this).bind("load.fb", s.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
			})), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
		},
		_preloadImages: function () {
			var e, t, i = s.group, n = s.current, r = i.length, a = n.preload ? Math.min(n.preload, r - 1) : 0;
			for (t = 1; a >= t; t += 1)e = i[(n.index + t) % r], "image" === e.type && e.href && ((new Image).src = e.href)
		},
		_afterLoad: function () {
			var e, t, n, r, a, o = s.coming, l = s.current;
			if (s.hideLoading(), o && !1 !== s.isActive)if (!1 === s.trigger("afterLoad", o, l))o.wrap.stop(!0).trigger("onReset").remove(), s.coming = null; else {
				switch (l && (s.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = o.content, t = o.type, n = o.scrolling, i.extend(s, {
					wrap: o.wrap,
					skin: o.skin,
					outer: o.outer,
					inner: o.inner,
					current: o,
					previous: l
				}), r = o.href, t) {
					case"inline":
					case"ajax":
					case"html":
						o.selector ? e = i("<div>").html(e).find(o.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), o.wrap.bind("onReset", function () {
							i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
						}));
						break;
					case"image":
						e = o.tpl.image.replace("{href}", r);
						break;
					case"swf":
						e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', a = "", i.each(o.swf, function (t, i) {
							e += '<param name="' + t + '" value="' + i + '"></param>', a += " " + t + '="' + i + '"'
						}), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
				}
				(!u(e) || !e.parent().is(o.inner)) && o.inner.append(e), s.trigger("beforeShow"), o.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? l.prevMethod && s.transitions[l.prevMethod]() : i(".fancybox-wrap").not(o.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? o.nextMethod : o.openMethod](), s._preloadImages()
			}
		},
		_setDimension: function () {
			var e, t, n, r, a, o, l, c, d, u = s.getViewport(), h = 0, m = !1, v = !1, m = s.wrap, w = s.skin, b = s.inner, y = s.current, v = y.width, $ = y.height, x = y.minWidth, k = y.minHeight, T = y.maxWidth, C = y.maxHeight, S = y.scrolling, O = y.scrollOutside ? y.scrollbarWidth : 0, E = y.margin, P = p(E[1] + E[3]), L = p(E[0] + E[2]);
			if (m.add(w).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), E = p(w.outerWidth(!0) - w.width()), e = p(w.outerHeight(!0) - w.height()), t = P + E, n = L + e, r = f(v) ? (u.w - t) * p(v) / 100 : v, a = f($) ? (u.h - n) * p($) / 100 : $, "iframe" === y.type) {
				if (d = y.content, y.autoHeight && 1 === d.data("ready"))try {
					d[0].contentWindow.document.location && (b.width(r).height(9999), o = d.contents().find("body"), O && o.css("overflow-x", "hidden"), a = o.outerHeight(!0))
				} catch (M) {
				}
			} else(y.autoWidth || y.autoHeight) && (b.addClass("fancybox-tmp"), y.autoWidth || b.width(r), y.autoHeight || b.height(a), y.autoWidth && (r = b.width()), y.autoHeight && (a = b.height()), b.removeClass("fancybox-tmp"));
			if (v = p(r), $ = p(a), c = r / a, x = p(f(x) ? p(x, "w") - t : x), T = p(f(T) ? p(T, "w") - t : T), k = p(f(k) ? p(k, "h") - n : k), C = p(f(C) ? p(C, "h") - n : C), o = T, l = C, y.fitToView && (T = Math.min(u.w - t, T), C = Math.min(u.h - n, C)), t = u.w - P, L = u.h - L, y.aspectRatio ? (v > T && (v = T, $ = p(v / c)), $ > C && ($ = C, v = p($ * c)), x > v && (v = x, $ = p(v / c)), k > $ && ($ = k, v = p($ * c))) : (v = Math.max(x, Math.min(v, T)), y.autoHeight && "iframe" !== y.type && (b.width(v), $ = b.height()), $ = Math.max(k, Math.min($, C))), y.fitToView)if (b.width(v).height($), m.width(v + E), u = m.width(), P = m.height(), y.aspectRatio)for (; (u > t || P > L) && v > x && $ > k && !(19 < h++);)$ = Math.max(k, Math.min(C, $ - 10)), v = p($ * c), x > v && (v = x, $ = p(v / c)), v > T && (v = T, $ = p(v / c)), b.width(v).height($), m.width(v + E), u = m.width(), P = m.height(); else v = Math.max(x, Math.min(v, v - (u - t))), $ = Math.max(k, Math.min($, $ - (P - L)));
			O && "auto" === S && a > $ && t > v + E + O && (v += O), b.width(v).height($), m.width(v + E), u = m.width(), P = m.height(), m = (u > t || P > L) && v > x && $ > k, v = y.aspectRatio ? o > v && l > $ && r > v && a > $ : (o > v || l > $) && (r > v || a > $), i.extend(y, {
				dim: {
					width: g(u),
					height: g(P)
				}, origWidth: r, origHeight: a, canShrink: m, canExpand: v, wPadding: E, hPadding: e, wrapSpace: P - w.outerHeight(!0), skinSpace: w.height() - $
			}), !d && y.autoHeight && $ > k && C > $ && !v && b.height("auto")
		},
		_getPosition: function (e) {
			var t = s.current, i = s.getViewport(), n = t.margin, r = s.wrap.width() + n[1] + n[3], a = s.wrap.height() + n[0] + n[2], n = {position: "absolute", top: n[0], left: n[3]};
			return t.autoCenter && t.fixed && !e && a <= i.h && r <= i.w ? n.position = "fixed" : t.locked || (n.top += i.y, n.left += i.x), n.top = g(Math.max(n.top, n.top + (i.h - a) * t.topRatio)), n.left = g(Math.max(n.left, n.left + (i.w - r) * t.leftRatio)), n
		},
		_afterZoomIn: function () {
			var e = s.current;
			e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
				!i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
			}), e.closeBtn && i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function (e) {
				e.preventDefault(), s.close()
			}), e.arrows && 1 < s.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && i(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
		},
		_afterZoomOut: function (e) {
			e = e || s.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(s, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), s.trigger("afterClose", e)
		}
	}), s.transitions = {
		getOrigPosition: function () {
			var e = s.current, t = e.element, i = e.orig, n = {}, r = 50, a = 50, o = e.hPadding, l = e.wPadding, c = s.getViewport();
			return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), u(i) ? (n = i.offset(), i.is("img") && (r = i.outerWidth(), a = i.outerHeight())) : (n.top = c.y + (c.h - a) * e.topRatio, n.left = c.x + (c.w - r) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
				top: g(n.top - o * e.topRatio),
				left: g(n.left - l * e.leftRatio),
				width: g(r + l),
				height: g(a + o)
			}
		}, step: function (e, t) {
			var i, n, r = t.prop;
			n = s.current;
			var a = n.wrapSpace, o = n.skinSpace;
			("width" === r || "height" === r) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (i = 1 - i), n = "width" === r ? n.wPadding : n.hPadding, n = e - n, s.skin[r](p("width" === r ? n : n - a * i)), s.inner[r](p("width" === r ? n : n - a * i - o * i)))
		}, zoomIn: function () {
			var e = s.current, t = e.pos, n = e.openEffect, r = "elastic" === n, a = i.extend({opacity: 1}, t);
			delete a.position, r ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), s.wrap.css(t).animate(a, {
				duration: "none" === n ? 0 : e.openSpeed,
				easing: e.openEasing,
				step: r ? this.step : null,
				complete: s._afterZoomIn
			})
		}, zoomOut: function () {
			var e = s.current, t = e.closeEffect, i = "elastic" === t, n = {opacity: .1};
			i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), s.wrap.animate(n, {
				duration: "none" === t ? 0 : e.closeSpeed,
				easing: e.closeEasing,
				step: i ? this.step : null,
				complete: s._afterZoomOut
			})
		}, changeIn: function () {
			var e, t = s.current, i = t.nextEffect, n = t.pos, r = {opacity: 1}, a = s.direction;
			n.opacity = .1, "elastic" === i && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (n[e] = g(p(n[e]) - 200), r[e] = "+=200px") : (n[e] = g(p(n[e]) + 200), r[e] = "-=200px")), "none" === i ? s._afterZoomIn() : s.wrap.css(n).animate(r, {
				duration: t.nextSpeed,
				easing: t.nextEasing,
				complete: s._afterZoomIn
			})
		}, changeOut: function () {
			var e = s.previous, t = e.prevEffect, n = {opacity: .1}, r = s.direction;
			"elastic" === t && (n["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=200px"), e.wrap.animate(n, {
				duration: "none" === t ? 0 : e.prevSpeed,
				easing: e.prevEasing,
				complete: function () {
					i(this).trigger("onReset").remove()
				}
			})
		}
	}, s.helpers.overlay = {
		defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0}, overlay: null, fixed: !1, el: i("html"), create: function (e) {
			e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		}, open: function (e) {
			var t = this;
			e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
				return i(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
			}), this.overlay.css(e.css).show()
		}, close: function () {
			var e, t;
			a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
				overlay: null,
				fixed: !1
			})
		}, update: function () {
			var e, i = "100%";
			this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > a.width() && (i = o.width()), this.overlay.width(i).height(o.height())
		}, onReady: function (e, t) {
			var n = this.overlay;
			i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = o.height() > a.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
		}, beforeShow: function (e, t) {
			var n, r;
			t.locked && (!1 !== this.margin && (i("*").filter(function () {
				return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = a.scrollTop(), r = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(n).scrollLeft(r)), this.open(e)
		}, onUpdate: function () {
			this.fixed || this.update()
		}, afterClose: function (e) {
			this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
		}
	}, s.helpers.title = {
		defaults: {type: "float", position: "bottom"}, beforeShow: function (e) {
			var t = s.current, n = t.title, r = e.type;
			if (i.isFunction(n) && (n = n.call(t.element, t)), h(n) && "" !== i.trim(n)) {
				switch (t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + n + "</div>"), r) {
					case"inside":
						r = s.skin;
						break;
					case"outside":
						r = s.wrap;
						break;
					case"over":
						r = s.inner;
						break;
					default:
						r = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(p(t.css("margin-bottom")))
				}
				t["top" === e.position ? "prependTo" : "appendTo"](r)
			}
		}
	}, i.fn.fancybox = function (e) {
		var t, n = i(this), r = this.selector || "", a = function (a) {
			var o, l, c = i(this).blur(), d = t;
			!(a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (o = e.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = r.length ? i(r) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), e.index = d, !1 === s.open(c, e) || !a.preventDefault()))
		};
		return e = e || {}, t = e.index || 0, r && !1 !== e.live ? o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : n.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
	}, o.ready(function () {
		var t, a;
		if (i.scrollbarWidth === n && (i.scrollbarWidth = function () {
				var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), t = t.innerWidth() - t.height(99).innerWidth();
				return e.remove(), t
			}), i.support.fixedPosition === n) {
			t = i.support, a = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
			var o = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
			a.remove(), t.fixedPosition = o
		}
		i.extend(s.defaults, {
			scrollbarWidth: i.scrollbarWidth(),
			fixed: i.support.fixedPosition,
			parent: i("body")
		}), t = i(e).width(), r.addClass("fancybox-lock-test"), a = i(e).width(), r.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
	})
}(window, document, jQuery), function (e) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}(function (e) {
	function t(t) {
		return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = c), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function () {
			var n = e(this), r = n.data(C);
			r || (r = new i(this, t), n.data(C, r))
		})
	}

	function i(t, i) {
		function S(t) {
			if (!(st() || e(t.target).closest(i.excludedElements, Ut).length > 0)) {
				var n, r = t.originalEvent ? t.originalEvent : t, a = T ? r.touches[0] : r;
				return qt = y, T ? Nt = r.touches.length : t.preventDefault(), jt = 0, _t = null, Ht = null, At = 0, Dt = 0, It = 0, Wt = 1, zt = 0, Vt = ht(), Qt = gt(), at(), !T || Nt === i.fingers || i.fingers === w || Q() ? (ct(0, a), Ft = Tt(), 2 == Nt && (ct(1, r.touches[1]), Dt = It = wt(Vt[0].start, Vt[1].start)), (i.swipeStatus || i.pinchStatus) && (n = j(r, qt))) : n = !1, n === !1 ? (qt = k, j(r, qt), n) : (lt(!0), null)
			}
		}

		function O(e) {
			var t = e.originalEvent ? e.originalEvent : e;
			if (qt !== x && qt !== k && !ot()) {
				var n, r = T ? t.touches[0] : t, a = dt(r);
				if (Bt = Tt(), T && (Nt = t.touches.length), qt = $, 2 == Nt && (0 == Dt ? (ct(1, t.touches[1]), Dt = It = wt(Vt[0].start, Vt[1].start)) : (dt(t.touches[1]), It = wt(Vt[0].end, Vt[1].end), Ht = yt(Vt[0].end, Vt[1].end)), Wt = bt(Dt, It), zt = Math.abs(Dt - It)), Nt === i.fingers || i.fingers === w || !T || Q()) {
					if (_t = kt(a.start, a.end), z(e, _t), jt = $t(a.start, a.end), At = vt(), ft(_t, jt), (i.swipeStatus || i.pinchStatus) && (n = j(t, qt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
						var o = !0;
						if (i.triggerOnTouchLeave) {
							var s = Ct(this);
							o = St(a.end, s)
						}
						!i.triggerOnTouchEnd && o ? qt = R($) : i.triggerOnTouchLeave && !o && (qt = R(x)), (qt == k || qt == x) && j(t, qt)
					}
				} else qt = k, j(t, qt);
				n === !1 && (qt = k, j(t, qt))
			}
		}

		function E(e) {
			var t = e.originalEvent;
			return T && t.touches.length > 0 ? (rt(), !0) : (ot() && (Nt = Xt), e.preventDefault(), Bt = Tt(), At = vt(), D() ? (qt = k, j(t, qt)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && qt === $ ? (qt = x, j(t, qt)) : !i.triggerOnTouchEnd && Z() ? (qt = x, _(t, qt, f)) : qt === $ && (qt = k, j(t, qt)), lt(!1), null)
		}

		function P() {
			Nt = 0, Bt = 0, Ft = 0, Dt = 0, It = 0, Wt = 1, at(), lt(!1)
		}

		function L(e) {
			var t = e.originalEvent;
			i.triggerOnTouchLeave && (qt = R(x), j(t, qt))
		}

		function M() {
			Ut.unbind(Et, S), Ut.unbind(Rt, P), Ut.unbind(Pt, O), Ut.unbind(Lt, E), Mt && Ut.unbind(Mt, L), lt(!1)
		}

		function R(e) {
			var t = e, n = W(), r = A(), a = D();
			return !n || a ? t = k : !r || e != $ || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !r && e == x && i.triggerOnTouchLeave && (t = k) : t = x, t
		}

		function j(e, t) {
			var i = void 0;
			return V() || N() ? i = _(e, t, u) : (U() || Q()) && i !== !1 && (i = _(e, t, h)), it() && i !== !1 ? i = _(e, t, p) : nt() && i !== !1 ? i = _(e, t, g) : tt() && i !== !1 && (i = _(e, t, f)), t === k && P(e), t === x && (T ? 0 == e.touches.length && P(e) : P(e)), i
		}

		function _(t, c, d) {
			var m = void 0;
			if (d == u) {
				if (Ut.trigger("swipeStatus", [c, _t || null, jt || 0, At || 0, Nt]), i.swipeStatus && (m = i.swipeStatus.call(Ut, t, c, _t || null, jt || 0, At || 0, Nt), m === !1))return !1;
				if (c == x && q()) {
					if (Ut.trigger("swipe", [_t, jt, At, Nt]), i.swipe && (m = i.swipe.call(Ut, t, _t, jt, At, Nt), m === !1))return !1;
					switch (_t) {
						case n:
							Ut.trigger("swipeLeft", [_t, jt, At, Nt]), i.swipeLeft && (m = i.swipeLeft.call(Ut, t, _t, jt, At, Nt));
							break;
						case r:
							Ut.trigger("swipeRight", [_t, jt, At, Nt]), i.swipeRight && (m = i.swipeRight.call(Ut, t, _t, jt, At, Nt));
							break;
						case a:
							Ut.trigger("swipeUp", [_t, jt, At, Nt]), i.swipeUp && (m = i.swipeUp.call(Ut, t, _t, jt, At, Nt));
							break;
						case o:
							Ut.trigger("swipeDown", [_t, jt, At, Nt]), i.swipeDown && (m = i.swipeDown.call(Ut, t, _t, jt, At, Nt))
					}
				}
			}
			if (d == h) {
				if (Ut.trigger("pinchStatus", [c, Ht || null, zt || 0, At || 0, Nt, Wt]), i.pinchStatus && (m = i.pinchStatus.call(Ut, t, c, Ht || null, zt || 0, At || 0, Nt, Wt), m === !1))return !1;
				if (c == x && H())switch (Ht) {
					case s:
						Ut.trigger("pinchIn", [Ht || null, zt || 0, At || 0, Nt, Wt]), i.pinchIn && (m = i.pinchIn.call(Ut, t, Ht || null, zt || 0, At || 0, Nt, Wt));
						break;
					case l:
						Ut.trigger("pinchOut", [Ht || null, zt || 0, At || 0, Nt, Wt]), i.pinchOut && (m = i.pinchOut.call(Ut, t, Ht || null, zt || 0, At || 0, Nt, Wt))
				}
			}
			return d == f ? (c === k || c === x) && (clearTimeout(Yt), X() && !G() ? (Kt = Tt(), Yt = setTimeout(e.proxy(function () {
				Kt = null, Ut.trigger("tap", [t.target]), i.tap && (m = i.tap.call(Ut, t, t.target))
			}, this), i.doubleTapThreshold)) : (Kt = null, Ut.trigger("tap", [t.target]), i.tap && (m = i.tap.call(Ut, t, t.target)))) : d == p ? (c === k || c === x) && (clearTimeout(Yt), Kt = null, Ut.trigger("doubletap", [t.target]), i.doubleTap && (m = i.doubleTap.call(Ut, t, t.target))) : d == g && (c === k || c === x) && (clearTimeout(Yt), Kt = null, Ut.trigger("longtap", [t.target]), i.longTap && (m = i.longTap.call(Ut, t, t.target))), m
		}

		function A() {
			var e = !0;
			return null !== i.threshold && (e = jt >= i.threshold), e
		}

		function D() {
			var e = !1;
			return null !== i.cancelThreshold && null !== _t && (e = pt(_t) - jt >= i.cancelThreshold), e
		}

		function I() {
			return null !== i.pinchThreshold ? zt >= i.pinchThreshold : !0
		}

		function W() {
			var e;
			return e = i.maxTimeThreshold ? At >= i.maxTimeThreshold ? !1 : !0 : !0
		}

		function z(e, t) {
			if (i.allowPageScroll === c || Q())e.preventDefault(); else {
				var s = i.allowPageScroll === d;
				switch (t) {
					case n:
						(i.swipeLeft && s || !s && i.allowPageScroll != m) && e.preventDefault();
						break;
					case r:
						(i.swipeRight && s || !s && i.allowPageScroll != m) && e.preventDefault();
						break;
					case a:
						(i.swipeUp && s || !s && i.allowPageScroll != v) && e.preventDefault();
						break;
					case o:
						(i.swipeDown && s || !s && i.allowPageScroll != v) && e.preventDefault()
				}
			}
		}

		function H() {
			var e = F(), t = B(), i = I();
			return e && t && i
		}

		function Q() {
			return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
		}

		function U() {
			return !(!H() || !Q())
		}

		function q() {
			var e = W(), t = A(), i = F(), n = B(), r = D(), a = !r && n && i && t && e;
			return a
		}

		function N() {
			return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
		}

		function V() {
			return !(!q() || !N())
		}

		function F() {
			return Nt === i.fingers || i.fingers === w || !T
		}

		function B() {
			return 0 !== Vt[0].end.x
		}

		function Z() {
			return !!i.tap
		}

		function X() {
			return !!i.doubleTap
		}

		function K() {
			return !!i.longTap
		}

		function Y() {
			if (null == Kt)return !1;
			var e = Tt();
			return X() && e - Kt <= i.doubleTapThreshold
		}

		function G() {
			return Y()
		}

		function J() {
			return !(1 !== Nt && T || !isNaN(jt) && 0 !== jt)
		}

		function et() {
			return At > i.longTapThreshold && b > jt
		}

		function tt() {
			return !(!J() || !Z())
		}

		function it() {
			return !(!Y() || !X())
		}

		function nt() {
			return !(!et() || !K())
		}

		function rt() {
			Zt = Tt(), Xt = event.touches.length + 1
		}

		function at() {
			Zt = 0, Xt = 0
		}

		function ot() {
			var e = !1;
			if (Zt) {
				var t = Tt() - Zt;
				t <= i.fingerReleaseThreshold && (e = !0)
			}
			return e
		}

		function st() {
			return !(Ut.data(C + "_intouch") !== !0)
		}

		function lt(e) {
			e === !0 ? (Ut.bind(Pt, O), Ut.bind(Lt, E), Mt && Ut.bind(Mt, L)) : (Ut.unbind(Pt, O, !1), Ut.unbind(Lt, E, !1), Mt && Ut.unbind(Mt, L, !1)), Ut.data(C + "_intouch", e === !0)
		}

		function ct(e, t) {
			var i = void 0 !== t.identifier ? t.identifier : 0;
			return Vt[e].identifier = i, Vt[e].start.x = Vt[e].end.x = t.pageX || t.clientX, Vt[e].start.y = Vt[e].end.y = t.pageY || t.clientY, Vt[e]
		}

		function dt(e) {
			var t = void 0 !== e.identifier ? e.identifier : 0, i = ut(t);
			return i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i
		}

		function ut(e) {
			for (var t = 0; t < Vt.length; t++)if (Vt[t].identifier == e)return Vt[t]
		}

		function ht() {
			for (var e = [], t = 0; 5 >= t; t++)e.push({start: {x: 0, y: 0}, end: {x: 0, y: 0}, identifier: 0});
			return e
		}

		function ft(e, t) {
			t = Math.max(t, pt(e)), Qt[e].distance = t
		}

		function pt(e) {
			return Qt[e] ? Qt[e].distance : void 0
		}

		function gt() {
			var e = {};
			return e[n] = mt(n), e[r] = mt(r), e[a] = mt(a), e[o] = mt(o), e
		}

		function mt(e) {
			return {direction: e, distance: 0}
		}

		function vt() {
			return Bt - Ft
		}

		function wt(e, t) {
			var i = Math.abs(e.x - t.x), n = Math.abs(e.y - t.y);
			return Math.round(Math.sqrt(i * i + n * n))
		}

		function bt(e, t) {
			var i = 1 * (t / e);
			return i.toFixed(2)
		}

		function yt() {
			return 1 > Wt ? l : s
		}

		function $t(e, t) {
			return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
		}

		function xt(e, t) {
			var i = e.x - t.x, n = t.y - e.y, r = Math.atan2(n, i), a = Math.round(180 * r / Math.PI);
			return 0 > a && (a = 360 - Math.abs(a)), a
		}

		function kt(e, t) {
			var i = xt(e, t);
			return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? r : i > 45 && 135 > i ? o : a
		}

		function Tt() {
			var e = new Date;
			return e.getTime()
		}

		function Ct(t) {
			t = e(t);
			var i = t.offset(), n = {left: i.left, right: i.left + t.outerWidth(), top: i.top, bottom: i.top + t.outerHeight()};
			return n
		}

		function St(e, t) {
			return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
		}

		var Ot = T || !i.fallbackToMouseEvents, Et = Ot ? "touchstart" : "mousedown", Pt = Ot ? "touchmove" : "mousemove", Lt = Ot ? "touchend" : "mouseup", Mt = Ot ? null : "mouseleave", Rt = "touchcancel", jt = 0, _t = null, At = 0, Dt = 0, It = 0, Wt = 1, zt = 0, Ht = 0, Qt = null, Ut = e(t), qt = "start", Nt = 0, Vt = null, Ft = 0, Bt = 0, Zt = 0, Xt = 0, Kt = 0, Yt = null;
		try {
			Ut.bind(Et, S), Ut.bind(Rt, P)
		} catch (Gt) {
			e.error("events not supported " + Et + "," + Rt + " on jQuery.swipe")
		}
		this.enable = function () {
			return Ut.bind(Et, S), Ut.bind(Rt, P), Ut
		}, this.disable = function () {
			return M(), Ut
		}, this.destroy = function () {
			return M(), Ut.data(C, null), Ut
		}, this.option = function (t, n) {
			if (void 0 !== i[t]) {
				if (void 0 === n)return i[t];
				i[t] = n
			} else e.error("Option " + t + " does not exist on jQuery.swipe.options");
			return null
		}
	}

	var n = "left", r = "right", a = "up", o = "down", s = "in", l = "out", c = "none", d = "auto", u = "swipe", h = "pinch", f = "tap", p = "doubletap", g = "longtap", m = "horizontal", v = "vertical", w = "all", b = 10, y = "start", $ = "move", x = "end", k = "cancel", T = "ontouchstart"in window, C = "TouchSwipe", S = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		triggerOnTouchEnd: !0,
		triggerOnTouchLeave: !1,
		allowPageScroll: "auto",
		fallbackToMouseEvents: !0,
		excludedElements: "label, button, input, select, textarea, a, .noSwipe"
	};
	e.fn.swipe = function (i) {
		var n = e(this), r = n.data(C);
		if (r && "string" == typeof i) {
			if (r[i])return r[i].apply(this, Array.prototype.slice.call(arguments, 1));
			e.error("Method " + i + " does not exist on jQuery.swipe")
		} else if (!(r || "object" != typeof i && i))return t.apply(this, arguments);
		return n
	}, e.fn.swipe.defaults = S, e.fn.swipe.phases = {PHASE_START: y, PHASE_MOVE: $, PHASE_END: x, PHASE_CANCEL: k}, e.fn.swipe.directions = {
		LEFT: n,
		RIGHT: r,
		UP: a,
		DOWN: o,
		IN: s,
		OUT: l
	}, e.fn.swipe.pageScroll = {NONE: c, HORIZONTAL: m, VERTICAL: v, AUTO: d}, e.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, ALL: w}
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuart", easeInQuart: function (e, t, i, n, r) {
		return n * (t /= r) * t * t * t + i
	}, easeOutQuart: function (e, t, i, n, r) {
		return -n * ((t = t / r - 1) * t * t * t - 1) + i
	}, easeInOutQuart: function (e, t, i, n, r) {
		return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
	}
});
var sliderSpeed = 500, sliderInterval = 7e3, sliderTimer, counterInterval = 11e3, counterTimer, mobile = !1;
$(document).ready(function () {
	(navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i) || navigator.userAgent.match(/MSIE 6/i) || navigator.userAgent.match(/MSIE 5/i)) && ($("body").addClass("old-browser").prepend('<div id="youre-so-old-get-update"><span>Ваш</span> браузер устарел. <div>Скачайте актуальную версию или другой браузер <a href="http://www.google.ru/chrome/" target="_blank" class="chrome">Chrome</a> <a href="https://www.mozilla.org/ru/firefox/" target="_blank" class="firefox">Firefox</a> <a href="http://www.opera.com/ru/" target="_blank" class="opera">Opera</a> <a href="http://windows.microsoft.com/ru-ru/internet-explorer/download-ie" target="_blank">IE</a></div></div>'), $("#youre-so-old-get-update").slideDown(250)), ("appearance"in document.body.style || "webkitAppearance"in document.body.style || "MozAppearance"in document.body.style) && $("html").addClass("appearance"), $(".footer-nav ul").each(function () {
		$(this).find("li").eq(Math.ceil($(".footer-nav li").length / 2) - 1).nextAll("li").remove().prependTo($(this).next("ul"))
	}), $(window).on("resize", function () {
		mobile = $(window).width() < 768 ? !0 : !1, mobile ? ($("#main .alert").prependTo("#middle .wrap"), $("#slider .slide").css("width", $("#slider").outerWidth()).show(), $("#slider .arrows span").css("height", $(".slide").first().find("img").height()), $(".side-nav").insertAfter(".breadcrumbs")) : ($("#slider .slide, #slider .arrows span").removeAttr("style"), $("#slider .slide.current").show(), $("#main .alert").prependTo("aside"), $("header").css("top", 0), $(".side-nav").appendTo(".superdiv"), $(".main-nav ins ul").removeAttr("style")), $("#slider .slide").width($(document).width()), $("#slider .filmstrip").css("margin-left", -1 * $("#slider .viewport").outerWidth() * ($("#slider .pickers .current").index() + 1)), $("#middle .wrap").css("min-height", $(window).height() - $("header").outerHeight() - $("footer").outerHeight() - $(".art").outerHeight() - 18)
	}).on("load", function () {
		$(window).trigger("resize")
	}), $(".main-nav li ul").parent().parent().mouseenter(function () {
		$(this).find("ul").outerWidth() + 24 > $(document).width() - $(this).offset().left ? $(this).addClass("right") : $(this).removeClass("right")
	}), $("#slider").each(function () {
		$slider = $(this), $slider.swipe({
			swipeLeft: function () {
				nextSlide()
			}, swipeRight: function () {
				prevSlide()
			}
		}).find(".slide").swipe({
			tap: function () {
				ahref = $("#slider .slide").eq($("#slider .pickers .current").index() + 1).data("href"), ahref && (document.location = ahref)
			}
		}).each(function () {
			$slider.find(".pickers .wrap").append("<i/>")
		}).last().clone().prependTo($slider.find(".filmstrip")), $slider.find(".slide").eq(1).clone().appendTo($slider.find(".filmstrip")), $slider.find(".filmstrip").css({"margin-left": -1 * $("#slider .viewport").outerWidth()})
	}).on("click", ".pickers i", function () {
		slidePlease($(this).index() + 1, $(this).index())
	}), $("#slider .pickers i").first().addClass("current").trigger("click"), $(document).on("click", ".main-nav .toggler", function () {
		$("header").toggleClass("visible"), $(window).scrollTop(0)
	}), $(".main-nav > nav > ul > li, .additional-nav ul li").on({
		mouseenter: function () {
			$(this).find("ul").stop().slideDown(250), $(this).siblings().find("ul").stop().slideUp(250)
		}, mouseleave: function () {
			$(this).find("ul").stop().slideUp(250)
		}
	}), $(".feedback-order").each(function () {
		$(this).height() > 384 && $(this).addClass("collapsed").append('<div class="gradient"><a class="dashed">Ознакомиться полностью с порядком обращения</a></div>').on("click", ".gradient a", function () {
			$(this).parent().fadeOut(250).parents(".feedback-order").removeClass("collapsed")
		})
	}), $(".office-toggle, .tabs, .offices-tabs").each(function () {
		document.location.hash && $(this).find("a[href='" + document.location.hash.replace("-tab", "") + "']").addClass("selected").siblings().removeClass("selected")
	}).on("click", "a", function (e) {
		e.preventDefault(), "main" == $("body").attr("id") || $(this).hasClass("selected") || (document.location.hash = $(this).attr("href") + "-tab"), $(this).addClass("selected").siblings().removeClass("selected"), $(this).parent().find("a").each(function () {
			$(this).hasClass("selected") ? $($(this).attr("href")).show() : $($(this).attr("href")).hide()
		})
	}).find(".selected").trigger("click"), $(".qa").on("click", "h3 a", function () {
		$(this).parents(".qa").find(".answer").toggle()
	}), $("section img[align='left'], section img[align='right']").each(function () {
		$(this).parent().is("a") ? $(this).parent().addClass("preview") : $(this).wrap("<span class='preview'/>"), "right" == $(this).attr("align") && $(this).parent().addClass("right"), $(this).removeAttr("align"), void 0 != $(this).attr("alt") && $(this).attr("alt").length > 0 && $(this).parent().data("fancybox-title", $(this).attr("alt")).append(" " + $(this).attr("alt"))
	}), $("a[rel='fancybox']").fancybox(), $('a[rel="news-pic"]').fancybox(), /*$("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png']").fancybox()*/$("section table").wrap("<div class='table-scroll'><div class='overflow'><div class='padding'></div></div></div>"), $("#main-counter .dashboard").on("click", function () {
		$("#main-counter i.animate").length || (currentCounter == counterInfo.length - 1 ? currentCounter = 0 : currentCounter += 1, changeCounter(counterInfo[currentCounter]))
	}), $("#main-counter").each(function () {
		var e = $(this).offset().top;
		e < $(window).height() ? $("#main-counter").css("visibility", "visible").addClass("animate").find(".dashboard").trigger("click") : $(window).on("scroll.counter", function () {
			e + 50 <= $(window).scrollTop() + $(window).height() && ($("#main-counter").css("visibility", "visible").addClass("animate").find(".dashboard").trigger("click"), $(window).off("scroll.counter"))
		})
	}), $(".moscow-map .regions span").on({
		mouseenter: function () {
			$map = $(this).parents(".moscow-map").first(), $map.find(".hover").removeClass("hover"), $map.find(".placemarks i[data-district=" + $(this).attr("class").replace(" clicked", "") + "]").addClass("hover")
		}, click: function () {
			$select = $(this).parents(".tab").first().find(".select-district select"), $select.val($select.find("option[data-name=" + $(this).attr("class").replace(" clicked", "") + "]").attr("value")).trigger("change"), $(this).parents(".tab").first().find(".district-info").addClass("from-map")
		}
	}), $(".moscow-map .placemarks i").on({
		mouseenter: function () {
			$map = $(this).parents(".moscow-map").first(), $map.find(".hover").removeClass("hover"), $map.find(".regions span." + $(this).data("district")).addClass("hover"), $map.find(".placemarks i[data-district=" + $(this).data("district") + "]").addClass("hover")
		}, click: function () {
			$select = $(this).parents(".tab").first().find(".select-district select"), $select.val($select.find("option[data-name=" + $(this).data("district") + "]").attr("value")).trigger("change"), $(this).parents(".tab").first().find(".district-info").addClass("from-map")
		}
	}), $(".moscow-map").on("mouseleave", function () {
		$(this).find(".hover").removeClass("hover")
	}), $(".select-district select").on("change", function () {
		region = $(this).find("option[value=" + $(this).val() + "]").data("name"), $(this).parents(".tab").first().find(".district-info").removeClass("from-map").find(".district").hide().filter("." + region).show(), $(this).parents(".tab").first().find(".regions ." + region).addClass("clicked").siblings().removeClass("clicked"), $(this).parents(".tab").first().find(".placemarks i").removeClass("clicked").filter("[data-district='" + region + "']").addClass("clicked")
	}).trigger("change"), $("#offices-map .question a").on("click", function (e) {
		$(this).toggleClass("grey"), $(this).hasClass("grey") ? $(this).parents(".tab").first().find(".moscow-map").hide().end().find(".disclaimer").hide().end().find(".answer").show() : $(this).parents(".tab").first().find(".moscow-map").show().end().find(".disclaimer").show().end().find(".answer").hide(), e.preventDefault()
	}), $("#offices-map .answer").on("click", function () {
		$(this).parents(".tab").first().find(".question a").trigger("click")
	}), $(".info-tabs").on("click", "span", function (e) {
		$(this).parents(".district").first().find($(this).data("href")).show().siblings(".district-sub-info").hide(), $(this).addClass("current").siblings().removeClass("current"), e.preventDefault()
	}).each(function () {
		$(this).find("span").first().trigger("click")
	}), $(".structure").on("click", ".toggle", function () {
		$(this).toggleClass("expanded").parents(".l-second").first().find(".l-third").slideToggle(250)
	})
});
var currentCounter = -1;