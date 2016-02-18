/*!
 * Master Slider � Responsive Touch Swipe Slider
 * @author Averta (www.averta.net)
 * Copyright � All Rights Reserved, Averta Ltd.
 *
 * @version 1.5.9
 * @date 4/3/2014
 */
window.averta = {}, function (n) {
	function o() {
		var t, n, i;
		if ("result"in arguments.callee)return arguments.callee.result;
		t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = document.getElementsByTagName("script")[0];
		for (i in n.style)if (t.test(i))return arguments.callee.result = i.match(t)[0];
		return arguments.callee.result = "WebkitOpacity"in n.style ? "Webkit" : "KhtmlOpacity"in n.style ? "Khtml" : ""
	}

	function r(n) {
		var u = document.body || document.documentElement, r = u.style, t = n, i;
		if (typeof r[t] == "string")return !0;
		for (v = ["Moz", "Webkit", "Khtml", "O", "ms"], t = t.charAt(0).toUpperCase() + t.substr(1), i = 0; i < v.length; i++)if (typeof r[v[i] + t] == "string")return !0;
		return !1
	}

	function s() {
		return r("transition")
	}

	function u() {
		return r("transform")
	}

	function h() {
		var n, t, r, i;
		if (!u())return !1;
		n = document.createElement("p"), r = {
			WebkitTransform: "-webkit-transform",
			OTransform: "-o-transform",
			MSTransform: "-ms-transform",
			msTransform: "-ms-transform",
			MozTransform: "-moz-transform",
			Transform: "transform",
			transform: "transform"
		}, document.body.insertBefore(n, null);
		for (i in r)n.style[i] !== undefined && (n.style[i] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(n).getPropertyValue(r[i]));
		return document.body.removeChild(n), t != null && t.length > 0 && t !== "none"
	}

	var t, i, f, e;
	window.package = function (n) {
		window[n] || (window[n] = {})
	}, t = function (n, t) {
		for (var i in t)n[i] = t[i]
	}, Function.prototype.extend = function (n) {
		typeof n.prototype.constructor == "function" ? (t(this.prototype, n.prototype), this.prototype.constructor = this) : (this.prototype.extend(n), this.prototype.constructor = this)
	}, i = {Moz: "-moz-", Webkit: "-webkit-", Khtml: "-khtml-", O: "-o-", ms: "-ms-", Icab: "-icab-"}, n(document).ready(function () {
		window._jcsspfx = o(), window._csspfx = i[window._jcsspfx], window._cssanim = s(), window._css3d = h(), window._css2d = u(), window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window._touch = "ontouchstart"in document
	}), window.parseQueryString = function (n) {
		var t = {};
		return n.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function (n, i, r, u) {
			t[i] = u
		}), t
	}, f = 50 / 3, window.requestAnimationFrame || (window.requestAnimationFrame = function () {
		return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
				window.setTimeout(n, f)
			}
	}()), window.getComputedStyle || (window.getComputedStyle = function (n) {
		return this.el = n, this.getPropertyValue = function (t) {
			var i = /(\-([a-z]){1})/g;
			return t == "float" && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function () {
				return arguments[2].toUpperCase()
			})), n.currentStyle[t] ? n.currentStyle[t] : null
		}, n.currentStyle
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function (n) {
		var i = this.length >>> 0, t = Number(arguments[1]) || 0;
		for (t = t < 0 ? Math.ceil(t) : Math.floor(t), t < 0 && (t += i); t < i; t++)if (t in this && this[t] === n)return t;
		return -1
	}), jQuery && (n.jqLoadFix = function () {
		if (this.complete) {
			var t = this;
			setTimeout(function () {
				n(t).load()
			}, 1)
		}
	}, jQuery.uaMatch = jQuery.uaMatch || function (n) {
			n = n.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
			return {browser: t[1] || "", version: t[2] || "0"}
		}, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), e = !!navigator.userAgent.match(/Trident\/7\./), e && (browser.msie = "true", delete browser.mozilla), jQuery.browser = browser, n.fn.preloadImg = function (t, i) {
		return this.each(function () {
			var u = n(this), f = this, r = new Image;
			r.onload = function (n) {
				n == null && (n = {}), u.attr("src", t), n.width = r.width, n.height = r.height, setTimeout(function () {
					i.call(f, n)
				}, 50), r = null
			}, r.src = t
		}), this
	})
}(jQuery), function () {
	"use strict";
	averta.EventDispatcher = function () {
		this.listeners = {}
	}, averta.EventDispatcher.extend = function (n) {
		var i = new averta.EventDispatcher, t;
		for (t in i)t != "constructor" && (n[t] = averta.EventDispatcher.prototype[t])
	}, averta.EventDispatcher.prototype = {
		constructor: averta.EventDispatcher, addEventListener: function (n, t, i) {
			this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push({listener: t, ref: i})
		}, removeEventListener: function (n, t, i) {
			if (this.listeners[n]) {
				for (var r = 0, u = this.listeners[n].length; r < u; ++r)t == this.listeners[n][r].listener && i == this.listeners[n][r].ref && this.listeners[n].splice(r, 0);
				this.listeners[n].length == 0 && delete this.listeners[n]
			}
		}, dispatchEvent: function (n) {
			if (n.target = this, this.listeners[n.type])for (var t = 0, i = this.listeners[n.type].length; t < i; ++t)this.listeners[n.type][t].listener.call(this.listeners[n.type][t].ref, n)
		}
	}
}(), function (n) {
	"use strict";
	var t = "ontouchstart"in document, r = !1, o = r ? "MSPointerDown" : t ? "touchstart" : "mousedown", u = r ? "MSPointerMove" : t ? "touchmove" : "mousemove", f = r ? "MSPointerUp" : t ? "touchend" : "mouseup", e = r ? "MSPointerUp" : "touchcancel", i;
	averta.TouchSwipe = function (n) {
		this.$element = n, this.enabled = !0, n.bind(o, {target: this}, this.__touchStart), n[0].swipe = this, this.onSwipe = null, this.swipeType = "horizontal", this.lastStatus = {}
	}, i = averta.TouchSwipe.prototype, i.getDirection = function (n, t) {
		switch (this.swipeType) {
			case"horizontal":
				return n <= this.start_x ? "left" : "right";
			case"vertical":
				return t <= this.start_y ? "up" : "down";
			case"all":
				return Math.abs(n - this.start_x) > Math.abs(t - this.start_y) ? n <= this.start_x ? "left" : "right" : t <= this.start_y ? "up" : "down"
		}
	}, i.priventDefultEvent = function (n, t) {
		var r = Math.abs(n - this.start_x), u = Math.abs(t - this.start_y), i = r > u;
		return this.swipeType === "horizontal" && i || this.swipeType === "vertical" && !i
	}, i.createStatusObject = function (n) {
		var t = {}, i, r;
		return i = this.lastStatus.distanceX || 0, r = this.lastStatus.distanceY || 0, t.distanceX = n.pageX - this.start_x, t.distanceY = n.pageY - this.start_y, t.moveX = t.distanceX - i, t.moveY = t.distanceY - r, t.distance = parseInt(Math.sqrt(Math.pow(t.distanceX, 2) + Math.pow(t.distanceY, 2))), t.duration = (new Date).getTime() - this.start_time, t.direction = this.getDirection(n.pageX, n.pageY), t
	}, i.__reset = function (n, i) {
		this.reset = !1, this.lastStatus = {}, this.start_time = (new Date).getTime(), this.start_x = t ? n.touches[0].pageX : i.pageX, this.start_y = t ? n.touches[0].pageY : i.pageY
	}, i.__touchStart = function (i) {
		var r = i.data.target, o = i, h, s;
		if (r.enabled) {
			if (i = i.originalEvent, !r.onSwipe) {
				n.error("Swipe listener is undefined");
				return
			}
			r.touchStarted || (r.start_x = t ? i.touches[0].pageX : o.pageX, r.start_y = t ? i.touches[0].pageY : o.pageY, r.start_time = (new Date).getTime(), n(document).bind(f, {target: r}, r.__touchEnd).bind(u, {target: r}, r.__touchMove).bind(e, {target: r}, r.__touchCancel), h = t ? i.touches[0] : o, s = r.createStatusObject(h), s.phase = "start", r.onSwipe.call(null, s), t || o.preventDefault(), r.lastStatus = s, r.touchStarted = !0)
		}
	}, i.__touchMove = function (n) {
		var i = n.data.target, f = n, r, u;
		(n = n.originalEvent, i.touchStarted) && (clearTimeout(i.timo), i.timo = setTimeout(function () {
			i.__reset(n, f)
		}, 60), r = t ? n.touches[0] : f, u = i.createStatusObject(r), i.priventDefultEvent(r.pageX, r.pageY) && f.preventDefault(), u.phase = "move", i.lastStatus = u, i.onSwipe.call(null, u))
	}, i.__touchEnd = function (i) {
		var r = i.data.target, s = i, h, o;
		i = i.originalEvent, clearTimeout(r.timo), h = t ? i.touches[0] : s, o = r.lastStatus, t || s.preventDefault(), o.phase = "end", r.touchStarted = !1, r.priventEvt = null, n(document).unbind(f, r.__touchEnd).unbind(u, r.__touchMove).unbind(e, r.__touchCancel), o.speed = o.distance / o.duration, r.onSwipe.call(null, o)
	}, i.__touchCancel = function (n) {
		var t = n.data.target;
		t.__touchEnd(n)
	}, i.enable = function () {
		this.enabled || (this.enabled = !0)
	}, i.disable = function () {
		this.enabled && (this.enabled = !1)
	}
}(jQuery), function () {
	"use strict";
	var r;
	averta.Ticker = function () {
	};
	var t = averta.Ticker, n = [], i = !0;
	t.add = function (i, r) {
		return n.push([i, r]), n.length === 1 && t.start(), n.length
	}, t.remove = function (t, i) {
		for (var r = 0, u = n.length; r < u; ++r)n[r] && n[r][0] === t && n[r][1] === i && n.splice(r, 1)
	}, t.start = function () {
		i && (i = !1, r())
	}, t.stop = function () {
		i = !0
	}, r = function () {
		if (!t.__stopped) {
			for (var i = 0; i < n.length; ++i)n[i][0].call(n[i][1]);
			requestAnimationFrame(r)
		}
	}
}(), function () {
	"use strict";
	Date.now || (Date.now = function () {
		return (new Date).getTime()
	}), averta.Timer = function (n, t) {
		this.delay = n, this.currentCount = 0, this.paused = !1, this.onTimer = null, this.refrence = null, t && this.start()
	}, averta.Timer.prototype = {
		constructor: averta.Timer, start: function () {
			this.paused = !1, this.lastTime = Date.now(), averta.Ticker.add(this.update, this)
		}, stop: function () {
			this.paused = !0, averta.Ticker.remove(this.update, this)
		}, reset: function () {
			this.currentCount = 0, this.paused = !0, this.lastTime = Date.now()
		}, update: function () {
			this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
		}, getTime: function () {
			return this.delay * this.currentCount
		}
	}
}(), function () {
	"use strict";
	var t = null, n;
	window.CSSTween = function (n, i, r, u) {
		this.$element = n, this.duration = i || 1e3, this.delay = r || 0, this.ease = u || "linear", t || (t = window._jcsspfx === "O" ? "otransitionend" : window._jcsspfx == "Webkit" ? "webkitTransitionEnd" : "transitionend")
	}, n = CSSTween.prototype, n.to = function (n, t) {
		return this.to_cb = n, this.to_cb_target = t, this
	}, n.from = function (n, t) {
		return this.fr_cb = n, this.fr_cb_target = t, this
	}, n.onComplete = function (n, t) {
		return this.oc_fb = n, this.oc_fb_target = t, this
	}, n.chain = function (n) {
		return this.chained_tween = n, this
	}, n.reset = function () {
		clearTimeout(this.start_to), clearTimeout(this.end_to)
	}, n.start = function () {
		clearTimeout(this.start_to), clearTimeout(this.end_to), this.fresh = !0, this.fr_cb && (this.$element.css(window._jcsspfx + "TransitionDuration", "0ms"), this.fr_cb.call(this.fr_cb_target));
		var n = this;
		return this.onTransComplete = function () {
			n.fresh && (n.reset(), this.$element.css(window._jcsspfx + "TransitionDuration", "").css(window._jcsspfx + "TransitionProperty", "").css(window._jcsspfx + "TransitionTimingFunction", "").css(window._jcsspfx + "TransitionDelay", ""), n.fresh = !1, n.chained_tween && n.chained_tween.start(), n.oc_fb && n.oc_fb.call(n.oc_fb_target))
		}, this.start_to = setTimeout(function () {
			n.$element.css(window._jcsspfx + "TransitionDuration", n.duration + "ms").css(window._jcsspfx + "TransitionProperty", "all"), n.delay > 0 ? n.$element.css(window._jcsspfx + "TransitionDelay", n.delay + "ms") : n.$element.css(window._jcsspfx + "TransitionDelay", ""), n.ease != "linear" && n.$element.css(window._jcsspfx + "TransitionTimingFunction", n.ease), n.to_cb && n.to_cb.call(n.to_cb_target), n.end_to = setTimeout(function () {
				n.onTransComplete()
			}, n.duration + (n.delay || 0))
		}, 100), this
	}
}(), function () {
	"use strict";
	function t(t, i) {
		var r, u, f;
		return (i.x !== undefined || i.y !== undefined) && (n ? (r = window._jcsspfx + "Transform", i.x !== undefined && (i[r] = (i[r] || "") + " translateX(" + i.x + "px)", delete i.x), i.y !== undefined && (i[r] = (i[r] || "") + " translateY(" + i.y + "px)", delete i.y)) : (i.x !== undefined && (u = t.css("right") !== "auto" ? "right" : "left", i[u] = i.x + "px", delete i.x), i.y !== undefined && (f = t.css("bottom") !== "auto" ? "bottom" : "top", i[f] = i.y + "px", delete i.y))), i
	}

	var n = null;
	window.CTween = {}, CTween.setPos = function (n, i) {
		n.css(t(n, i))
	}, CTween.animate = function (i, r, u, f) {
		var e, o;
		if (n == null && (n = window._cssanim), f = f || {}, t(i, u), n) {
			if (e = new CSSTween(i, r, f.delay, EaseDic[f.ease]), e.to(function () {
					i.css(u)
				}), f.complete)e.onComplete(f.complete, f.target);
			return e.start(), e.stop = e.reset, e
		}
		return f.delay && i.delay(f.delay), f.complete && (o = function () {
			f.complete.call(f.target)
		}), i.stop(!0).animate(u, r, f.ease || "linear", o), i
	}, CTween.fadeOut = function (n, t, i) {
		var r = {};
		i && (r.complete = function () {
			n.remove()
		}), CTween.animate(n, t || 1e3, {opacity: 0}, r)
	}, CTween.fadeIn = function (n, t) {
		n.css("opacity", 0), CTween.animate(n, t || 1e3, {opacity: 1})
	}
}(), function () {
	window.EaseDic = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
		easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
		easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
		easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
		easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
		easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
		easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
		easeOutExpo: "cubic-bezier(.19,1,.22,1)",
		easeInOutExpo: "cubic-bezier(1,0,0,1)",
		easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
		easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
		easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
		easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
		easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
		easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
		easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
		easeOutQuint: "cubic-bezier(.23,1,.32,1)",
		easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
		easeInSine: "cubic-bezier(.47,0,.745,.715)",
		easeOutSine: "cubic-bezier(.39,.575,.565,1)",
		easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
		easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
		easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
		easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
	}
}(), function () {
	"use strict";
	window.MSAligner = function (n, t, i) {
		this.$container = t, this.$img = i, this.type = n || "stretch", this.widthOnly = !1, this.heightOnly = !1
	};
	var n = MSAligner.prototype;
	n.init = function (n, t) {
		this.baseWidth = n, this.baseHeight = t, this.imgRatio = n / t, this.imgRatio2 = t / n;
		switch (this.type) {
			case"tile":
				this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$img.remove();
				break;
			case"center":
				this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$container.css({backgroundPosition: "center center", backgroundRepeat: "no-repeat"}), this.$img.remove();
				break;
			case"stretch":
				this.$img.css({width: "100%", height: "100%"});
				break;
			case"fill":
			case"fit":
				this.needAlign = !0, this.align()
		}
	}, n.align = function () {
		if (this.needAlign) {
			var n = this.$container.width(), t = this.$container.height(), i = n / t;
			this.type == "fill" ? this.imgRatio < i ? (this.$img.width(n), this.$img.height(n * this.imgRatio2)) : (this.$img.height(t), this.$img.width(t * this.imgRatio)) : this.type == "fit" && (this.imgRatio < i ? (this.$img.height(t), this.$img.width(t * this.imgRatio)) : (this.$img.width(n), this.$img.height(n * this.imgRatio2))), this.setMargin()
		}
	}, n.setMargin = function () {
		var n = this.$container.width(), t = this.$container.height();
		this.$img.css("margin-top", (t - this.$img[0].offsetHeight) / 2 + "px"), this.$img.css("margin-left", (n - this.$img[0].offsetWidth) / 2 + "px")
	}
}(), function () {
	"use strict";
	var t = {bouncing: !0, snapping: !1, snapsize: null, friction: .05, outFriction: .05, outAcceleration: .09, minValidDist: .3, snappingMinSpeed: 2, paging: !1, endless: !1, maxSpeed: 160}, i = function (n, i, r) {
		if (i === null || n === null)throw new Error("Max and Min values are required.");
		this.options = r || {};
		for (var u in t)u in this.options || (this.options[u] = t[u]);
		this._max_value = i, this._min_value = n, this.value = n, this.end_loc = n, this.current_snap = this.getSnapNum(n), this.__extrStep = 0, this.__extraMove = 0, this.__animID = -1
	}, n = i.prototype;
	n.changeTo = function (n, t, i, r, u) {
		if (this.stopped = !1, this._internalStop(), n = this._checkLimits(n), i = Math.abs(i || 0), this.options.snapping && (r = r || this.getSnapNum(n), u !== !1 && this._callsnapChange(r), this.current_snap = r), t) {
			this.animating = !0;
			var f = this, e = ++f.__animID, c = n - f.value, l = 0, a = n, o, s = 1 - f.options.friction, h = function () {
				if (e === f.__animID) {
					var t = n - f.value;
					if (Math.abs(t) > f.options.minValidDist && f.animating)window.requestAnimationFrame(h); else {
						f.animating && (f.value = n, f._callrenderer()), f.animating = !1, e !== f.__animID && (f.__animID = -1), f._callonComplete("anim");
						return
					}
					o = s + (i - 20) * s * 1.3 / f.options.maxSpeed, f.value = a - c * Math.exp(-++l * o), f._callrenderer()
				}
			};
			h();
			return
		}
		this.value = n, this._callrenderer()
	}, n.drag = function (n) {
		this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1), this.animating = !1, this._deceleration = !1, this.value -= n, !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += n * .6) : this.value = this.value > this._max_value ? this._max_value : 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1), this._callrenderer()
	}, n.push = function (n) {
		if (this.stopped = !1, this.options.snapping && Math.abs(n) <= this.options.snappingMinSpeed) {
			this.cancel();
			return
		}
		if (this.__speed = n, this.__startSpeed = n, this.end_loc = this._calculateEnd(), this.options.snapping) {
			var t = this.getSnapNum(this.value), i = this.getSnapNum(this.end_loc);
			if (this.options.paging) {
				t = this.getSnapNum(this.drag_start_loc), this.__isout = !1, n > 0 ? this.gotoSnap(t + 1, !0, n) : this.gotoSnap(t - 1, !0, n);
				return
			}
			if (t === i) {
				this.cancel();
				return
			}
			this._callsnapChange(i), this.current_snap = i
		}
		this.animating = !1, this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value, this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)), this._startDecelaration()
	}, n.bounce = function (n) {
		this.animating || (this.stopped = !1, this.animating = !1, this.__speed = n, this.__startSpeed = n, this.end_loc = this._calculateEnd(), this._startDecelaration())
	}, n.stop = function () {
		this.stopped = !0, this._internalStop()
	}, n.cancel = function () {
		this.start_drag = !0, this.__isout ? (this.__speed = .0004, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
	}, n.renderCallback = function (n, t) {
		this.__renderHook = {fun: n, ref: t}
	}, n.snappingCallback = function (n, t) {
		this.__snapHook = {fun: n, ref: t}
	}, n.snapCompleteCallback = function (n, t) {
		this.__compHook = {fun: n, ref: t}
	}, n.getSnapNum = function (n) {
		return Math.floor((n + this.options.snapsize / 2) / this.options.snapsize)
	}, n.nextSnap = function () {
		this._internalStop();
		var n = this.getSnapNum(this.value);
		!this.options.endless && (n + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(n + 1, !0)
	}, n.prevSnap = function () {
		this._internalStop();
		var n = this.getSnapNum(this.value);
		!this.options.endless && (n - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(n - 1, !0)
	}, n.gotoSnap = function (n, t, i) {
		this.changeTo(n * this.options.snapsize, t, i, n)
	}, n.destroy = function () {
		this._internalStop(), this.__renderHook = null, this.__snapHook = null, this.__compHook = null
	}, n._internalStop = function () {
		this.start_drag = !0, this.animating = !1, this._deceleration = !1, this.__extrStep = 0
	}, n._calculateExtraMove = function (n) {
		var t = n % this.options.snapsize;
		return t < this.options.snapsize / 2 ? -t : this.options.snapsize - t
	}, n._calculateEnd = function (n) {
		for (var t = this.__speed, i = this.value, r = 0; Math.abs(t) > this.options.minValidDist;)i += t, t *= this.options.friction, r++;
		return n ? r : i
	}, n._checkLimits = function (n) {
		return this.options.endless ? n : n < this._min_value ? this._min_value : n > this._max_value ? this._max_value : n
	}, n._callrenderer = function () {
		this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
	}, n._callsnapChange = function (n) {
		this.__snapHook && n !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, n, n - this.current_snap)
	}, n._callonComplete = function (n) {
		this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, n)
	}, n._computeDeceleration = function () {
		var t, n;
		this.options.snapping && this.__needsSnap ? (t = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove, this.value += this.__speed + t - this.__extrStep, this.__extrStep = t) : this.value += this.__speed, this.__speed *= this.options.friction, this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)), this._callrenderer(), !this.options.endless && this.options.bouncing && (n = 0, this.value < this._min_value ? n = this._min_value - this.value : this.value > this._max_value && (n = this._max_value - this.value), this.__isout = Math.abs(n) >= this.options.minValidDist, this.__isout && (this.__speed * n <= 0 ? this.__speed += n * this.options.outFriction : this.__speed = n * this.options.outAcceleration))
	}, n._startDecelaration = function () {
		if (!this._deceleration) {
			this._deceleration = !0;
			var n = this, t = function () {
				n._deceleration && (n._computeDeceleration(), Math.abs(n.__speed) > n.options.minValidDist || n.__isout ? window.requestAnimationFrame(t) : (n._deceleration = !1, n.__isout = !1, n.value = this.__needsSnap && n.options.snapping && !n.options.paging ? n._checkLimits(n.end_loc + n.__extraMove) : Math.round(n.value), n._callrenderer(), n._callonComplete("decel")))
			};
			t()
		}
	}, window.Controller = i
}(), function (n) {
	window.MSLayerEffects = {};
	var i, t = {opacity: 0};
	MSLayerEffects.setup = function () {
		if (!i) {
			i = !0;
			var r = MSLayerEffects, u = window._jcsspfx + "Transform", f = window._jcsspfx + "TransformOrigin", e = n.browser.opera;
			_2d = window._css2d && window._cssanim && !e, r.defaultValues = {left: 0, top: 0, opacity: 1, right: 0, bottom: 0}, r.defaultValues[u] = "", r.rf = 1, r.presetEffParams = {
				random: "30|300",
				long: 300,
				short: 30,
				"false": !1,
				"true": !0,
				tl: "top left",
				bl: "bottom left",
				tr: "top right",
				br: "bottom right",
				rt: "top right",
				lb: "bottom left",
				lt: "top left",
				rb: "bottom right",
				t: "top",
				b: "bottom",
				r: "right",
				l: "left",
				c: "center"
			}, r.fade = function () {
				return t
			}, r.left = _2d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "translateX(" + -n * r.rf + "px)", i
			} : function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i.left = -n * r.rf + "px", i
			}, r.right = _2d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "translateX(" + n * r.rf + "px)", i
			} : function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i.left = n * r.rf + "px", i
			}, r.top = _2d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "translateY(" + -n * r.rf + "px)", i
			} : function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i.top = -n * r.rf + "px", i
			}, r.bottom = _2d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "translateY(" + n * r.rf + "px)", i
			} : function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i.top = n * r.rf + "px", i
			}, r.from = _2d ? function (n, t, i) {
				var f = i === !1 ? {} : {opacity: 0};
				return f[u] = "translateX(" + n * r.rf + "px) translateY(" + t * r.rf + "px)", f
			} : function (n, t, i) {
				var u = i === !1 ? {} : {opacity: 0};
				return u.top = t * r.rf + "px", u.left = n * r.rf + "px", u
			}, r.rotate = _2d ? function (n, t) {
				var i = {opacity: 0};
				return i[u] = " rotate(" + n + "deg)", t && (i[f] = t), i
			} : function () {
				return t
			}, r.rotateleft = _2d ? function (n, t, i, e) {
				var o = r.left(t, e);
				return o[u] += " rotate(" + n + "deg)", i && (o[f] = i), o
			} : function (n, t, i, u) {
				return r.left(t, u)
			}, r.rotateright = _2d ? function (n, t, i, e) {
				var o = r.right(t, e);
				return o[u] += " rotate(" + n + "deg)", i && (o[f] = i), o
			} : function (n, t, i, u) {
				return r.right(t, u)
			}, r.rotatetop = _2d ? function (n, t, i, e) {
				var o = r.top(t, e);
				return o[u] += " rotate(" + n + "deg)", i && (o[f] = i), o
			} : function (n, t, i, u) {
				return r.top(t, u)
			}, r.rotatebottom = _2d ? function (n, t, i, e) {
				var o = r.bottom(t, e);
				return o[u] += " rotate(" + n + "deg)", i && (o[f] = i), o
			} : function (n, t, i, u) {
				return r.bottom(t, u)
			}, r.rotatefrom = _2d ? function (n, t, i, e, o) {
				var s = r.from(t, i, o);
				return s[u] += " rotate(" + n + "deg)", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.from(t, i, f)
			}, r.skewleft = _2d ? function (n, t, i) {
				var f = r.left(t, i);
				return f[u] += " skewX(" + n + "deg)", f
			} : function (n, t, i) {
				return r.left(t, i)
			}, r.skewright = _2d ? function (n, t, i) {
				var f = r.right(t, i);
				return f[u] += " skewX(" + -n + "deg)", f
			} : function (n, t, i) {
				return r.right(t, i)
			}, r.skewtop = _2d ? function (n, t, i) {
				var f = r.top(t, i);
				return f[u] += " skewY(" + n + "deg)", f
			} : function (n, t, i) {
				return r.top(t, i)
			}, r.skewbottom = _2d ? function (n, t, i) {
				var f = r.bottom(t, i);
				return f[u] += " skewY(" + -n + "deg)", f
			} : function (n, t, i) {
				return r.bottom(t, i)
			}, r.scale = _2d ? function (n, t, i, r) {
				var e = r === !1 ? {} : {opacity: 0};
				return e[u] = " scaleX(" + n + ") scaleY(" + t + ")", i && (e[f] = i), e
			} : function (n, t, i, r) {
				return r === !1 ? {} : {opacity: 0}
			}, r.scaleleft = _2d ? function (n, t, i, e, o) {
				var s = r.left(i, o);
				return s[u] = " scaleX(" + n + ") scaleY(" + t + ")", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.left(i, f)
			}, r.scaleright = _2d ? function (n, t, i, e, o) {
				var s = r.right(i, o);
				return s[u] = " scaleX(" + n + ") scaleY(" + t + ")", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.right(i, f)
			}, r.scaletop = _2d ? function (n, t, i, e, o) {
				var s = r.top(i, o);
				return s[u] = " scaleX(" + n + ") scaleY(" + t + ")", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.top(i, f)
			}, r.scalebottom = _2d ? function (n, t, i, e, o) {
				var s = r.bottom(i, o);
				return s[u] = " scaleX(" + n + ") scaleY(" + t + ")", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.bottom(i, f)
			}, r.scalefrom = _2d ? function (n, t, i, e, o, s) {
				var h = r.from(i, e, s);
				return h[u] += " scaleX(" + n + ") scaleY(" + t + ")", o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.from(i, u, e)
			}, r.rotatescale = _2d ? function (n, t, i, e, o) {
				var s = r.scale(t, i, e, o);
				return s[u] += " rotate(" + n + "deg)", e && (s[f] = e), s
			} : function (n, t, i, u, f) {
				return r.scale(t, i, u, f)
			}, r.front = window._css3d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "perspective(2000px) translate3d(0 , 0 ," + n + "px ) rotate(0.001deg)", i
			} : function () {
				return t
			}, r.back = window._css3d ? function (n, t) {
				var i = t === !1 ? {} : {opacity: 0};
				return i[u] = "perspective(2000px) translate3d(0 , 0 ," + -n + "px ) rotate(0.001deg)", i
			} : function () {
				return t
			}, r.rotatefront = window._css3d ? function (n, t, i, r) {
				var e = r === !1 ? {} : {opacity: 0};
				return e[u] = "perspective(2000px) translate3d(0 , 0 ," + t + "px ) rotate(" + (n || .001) + "deg)", i && (e[f] = i), e
			} : function () {
				return t
			}, r.rotateback = window._css3d ? function (n, t, i, r) {
				var e = r === !1 ? {} : {opacity: 0};
				return e[u] = "perspective(2000px) translate3d(0 , 0 ," + -t + "px ) rotate(" + (n || .001) + "deg)", i && (e[f] = i), e
			} : function () {
				return t
			}, r.rotate3dleft = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.left(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.left(u, e)
			}, r.rotate3dright = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.right(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.right(u, e)
			}, r.rotate3dtop = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.top(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.top(u, e)
			}, r.rotate3dbottom = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.bottom(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.bottom(u, e)
			}, r.rotate3dfront = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.front(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.front(u, e)
			}, r.rotate3dback = window._css3d ? function (n, t, i, e, o, s) {
				var h = r.back(e, s);
				return h[u] += (n ? " rotateX(" + n + "deg)" : " ") + (t ? " rotateY(" + t + "deg)" : "") + (i ? " rotateZ(" + i + "deg)" : ""), o && (h[f] = o), h
			} : function (n, t, i, u, f, e) {
				return r.back(u, e)
			}, r.t = window._css3d ? function (n, t, i, e, o, s, h, c, l, a, v, y, p, w, b) {
				var g = n === !1 ? {} : {opacity: 0}, k = "perspective(2000px) ", d;
				return t !== "n" && (k += "translateX(" + t * r.rf + "px) "), i !== "n" && (k += "translateY(" + i * r.rf + "px) "), e !== "n" && (k += "translateZ(" + e * r.rf + "px) "), o !== "n" && (k += "rotate(" + o + "deg) "), s !== "n" && (k += "rotateX(" + s + "deg) "), h !== "n" && (k += "rotateY(" + h + "deg) "), c !== "n" && (k += "rotateZ(" + c + "deg) "), v !== "n" && (k += "skewX(" + v + "deg) "), y !== "n" && (k += "skewY(" + y + "deg) "), l !== "n" && (k += "scaleX(" + l + ") "), a !== "n" && (k += "scaleY(" + a + ")"), g[u] = k, d = "", d += p !== "n" ? p + "% " : "50% ", d += w !== "n" ? w + "% " : "50% ", d += b !== "n" ? b + "px" : "", g[f] = d, g
			} : function (n, t, i, u, f) {
				var f = n === !1 ? {} : {opacity: 0};
				return t !== "n" && (f.left += t * r.rf + "px"), i !== "n" && (f.top += i * r.rf + "px"), f
			}
		}
	}
}(jQuery), function (n) {
	window.MSLayerElement = function () {
		this.$cont = n("<div><\/div>").addClass("layer-cont"), this.start_anim = {name: "fade", duration: 1e3, ease: "linear", delay: 0}, this.end_anim = {
			duration: 1e3,
			ease: "linear"
		}, this.type = "text", this.swipe = !0, this.resizable = !0, this.minWidth = -1, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom", "font-size", "line-height", "width"], this.baseStyle = {}
	};
	var t = MSLayerElement.prototype;
	t.__playAnimation = function (n, t) {
		var i = {};
		n.ease && (i.ease = n.ease), this.show_tween = CTween.animate(this.$element, n.duration, t, i)
	}, t._randomParam = function (n) {
		var t = Number(n.slice(0, n.indexOf("|"))), i = Number(n.slice(n.indexOf("|") + 1));
		return t + Math.random() * (i - t)
	}, t._parseEff = function (n) {
		var t = [], u, i, r, f;
		if (n.indexOf("(") !== -1)for (u = n.slice(0, n.indexOf("(")).toLowerCase(), t = n.slice(n.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), n = u, r = 0, f = t.length; r < f; ++r)i = t[r], i in MSLayerEffects.presetEffParams && (i = MSLayerEffects.presetEffParams[i]), t[r] = i;
		return {eff_name: n, eff_params: t}
	}, t._parseEffParams = function (n) {
		for (var r = [], t, i = 0, u = n.length; i < u; ++i)t = n[i], typeof t == "string" && t.indexOf("|") !== -1 && (t = this._randomParam(t)), r[i] = t;
		return r
	}, t._checkPosKey = function (n, t) {
		return n === "left" && !(n in this.baseStyle) && "right"in this.baseStyle ? (t.right = -parseInt(t.left) + "px", delete t.left, !0) : n === "top" && !(n in this.baseStyle) && "bottom"in this.baseStyle ? (t.bottom = -parseInt(t.top) + "px", delete t.top, !0) : !1
	}, t.setStartAnim = function (t) {
		n.extend(this.start_anim, t), n.extend(this.start_anim, this._parseEff(this.start_anim.name)), this.$element.css("visibility", "hidden")
	}, t.setEndAnim = function (t) {
		n.extend(this.end_anim, t)
	}, t.create = function () {
		this.$element.css("display", "none"), this.$element.removeAttr("data-delay").removeAttr("data-effect").removeAttr("data-duration").removeAttr("data-type"), this.end_anim.name || (this.end_anim.name = this.start_anim.name), this.end_anim.time && (this.autoHide = !0), n.extend(this.end_anim, this._parseEff(this.end_anim.name))
	}, t.init = function () {
		var n, t, r, i;
		for (this.initialized = !0, this.$element.css("visibility", ""), t = 0, r = this.__cssConfig.length; t < r; t++)i = this.__cssConfig[t], n = this.type === "text" && i === "width" ? this.$element[0].style.width : this.$element.css(i), n != "auto" && n != "" && n != "normal" && (this.baseStyle[i] = parseInt(n))
	}, t.locate = function () {
		var i = this.slide.$layers, t = parseFloat(i.css("width")), n;
		if (this.visible(this.minWidth < t), this.resizable) {
			this.factor = t / this.slide.slider.options.width;
			for (n in this.baseStyle)this.$element.css(n, this.baseStyle[n] * this.factor + "px")
		}
	}, t.start = function () {
		var n, u, i, r, t;
		if (!this.isShowing) {
			this.isShowing = !0, MSLayerEffects.rf = this.factor, i = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)), r = {};
			for (n in i)this._checkPosKey(n, i) || (MSLayerEffects.defaultValues[n] != null && (r[n] = MSLayerEffects.defaultValues[n]), n in this.baseStyle && (u = this.baseStyle[n], i[n] = u + parseFloat(i[n]) + "px", r[n] = u + "px"), this.$element.css(n, i[n]));
			t = this, clearTimeout(this.to), this.to = setTimeout(function () {
				t.$element.css("display", ""), t.__playAnimation(t.start_anim, r)
			}, t.start_anim.delay || .01), this.cl_to = setTimeout(function () {
				t.show_cl = !0
			}, (this.start_anim.delay || .01) + this.start_anim.duration), this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function () {
				t.hide()
			}, t.end_anim.time))
		}
	}, t.hide = function () {
		this.isShowing = !1;
		var n = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
		for (key in n)this._checkPosKey(key, n) || (key === window._jcsspfx + "TransformOrigin" && this.$element.css(key, n[key]), key in this.baseStyle && (n[key] = this.baseStyle[key] + parseFloat(n[key]) + "px"));
		this.__playAnimation(this.end_anim, n), clearTimeout(this.to), clearTimeout(this.hto), clearTimeout(this.cl_to)
	}, t.reset = function () {
		this.isShowing = !1, this.$element[0].style.display = "none", this.$element.css("opacity", "100"), this.$element[0].style.transitionDuration = "0ms", this.show_tween && this.show_tween.stop(!0), clearTimeout(this.to), clearTimeout(this.hto)
	}, t.destroy = function () {
		this.reset(), this.$element.remove(), this.$cont.remove()
	}, t.visible = function (n) {
		this.isVisible != n && (this.isVisible = n, this.$element.css("display", n ? "" : "none"))
	}
}(jQuery), function (n) {
	window.MSImageLayerElement = function () {
		MSLayerElement.call(this), this.needPreload = !0, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom", "width", "height"]
	}, MSImageLayerElement.extend(MSLayerElement);
	var t = MSImageLayerElement.prototype, i = MSLayerElement.prototype;
	t.create = function () {
		var r, t;
		if (this.link && (r = this.$element.parent(), r.append(this.link), this.link.append(this.$element), this.link.removeClass("ms-layer"), this.$element.addClass("ms-layer"), r = null), i.create.call(this), this.$element.data("src") != undefined ? (this.img_src = this.$element.data("src"), this.$element.removeAttr("data-src")) : (t = this, this.$element.on("load", function () {
				t.slide.preloadCount--, t.slide.preloadCount === 0 && t.slide.___onlayersReady()
			}).each(n.jqLoadFix)), n.browser.msie)this.$element.on("dragstart", function (n) {
			n.preventDefault()
		})
	}, t.loadImage = function () {
		var n = this;
		this.$element.preloadImg(this.img_src, function () {
			n.slide.preloadCount--, n.slide.preloadCount === 0 && n.slide.___onlayersReady()
		})
	}
}(jQuery), function (n) {
	window.MSVideoLayerElement = function () {
		MSLayerElement.call(this)
	}, MSVideoLayerElement.extend(MSLayerElement);
	var t = MSVideoLayerElement.prototype, i = MSLayerElement.prototype;
	t.__playVideo = function () {
		this.img && CTween.fadeOut(this.img, 500, !1), CTween.fadeOut(this.video_btn, 500, !1), this.video_frame.attr("src", "about:blank").css("display", "block"), this.video_url.indexOf("?") == -1 && (this.video_url += "?"), this.video_frame.attr("src", this.video_url + "&autoplay=1")
	}, t.reset = function () {
		if (i.reset.call(this), (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1), this.video_frame.attr("src", "about:blank").css("display", "none")), this.needPreload) {
			this.img.css("opacity", 1);
			return
		}
		this.video_frame.attr("src", this.video_url)
	}, t.create = function () {
		var r, t;
		if ((i.create.call(this), this.video_frame = this.$element.find("iframe").css({
				width: "100%",
				height: "100%"
			}), this.video_url = this.video_frame.attr("src"), r = this.$element.has("img").length != 0, r || this.$element.data("btn")) && (this.video_frame.attr("src", "about:blank").css("display", "none"), t = this, this.video_btn = n("<div><\/div>").appendTo(this.$element).addClass("ms-video-btn").click(function () {
				t.__playVideo()
			}), r) && (this.needPreload = !0, this.img = this.$element.find("img:first").addClass("ms-video-img"), this.img.data("src") !== undefined ? (this.img_src = this.img.data("src"), this.img.removeAttr("data-src")) : (t = this, this.img.attr("src", this.img_src).on("load", function () {
				t.slide.preloadCount--, t.slide.preloadCount == 0 && t.slide.___onlayersReady()
			}).each(n.jqLoadFix)), n.browser.msie))this.img.on("dragstart", function (n) {
			n.preventDefault()
		})
	}, t.loadImage = function () {
		var n = this;
		this.img.preloadImg(this.img_src, function () {
			n.slide.preloadCount--, n.slide.preloadCount == 0 && n.slide.___onlayersReady()
		})
	}
}(jQuery), function (n) {
	"use strict";
	window.MSHotspotLayer = function () {
		MSLayerElement.call(this), this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.ease = "Expo"
	}, MSHotspotLayer.extend(MSLayerElement);
	var t = MSHotspotLayer.prototype, i = MSLayerElement.prototype;
	t._showTT = function () {
		this.show_cl && (this.align = this._orgAlign, this._locateTT(), this.hide_start = !1, this._tween && this._tween.stop(!0), this.tt.css({display: "block"}), this._tween = CTween.animate(this.tt, 900, this.to, {ease: "easeOut" + this.ease}))
	}, t._hideTT = function () {
		if (this.show_cl) {
			this._tween && this._tween.stop(!0);
			var n = this;
			this._tween = CTween.animate(this.tt, 900, this.from, {
				ease: "easeOut" + this.ease, complete: function () {
					n.tt.css("display", "none")
				}
			})
		}
	}, t._updateClassName = function (n) {
		this._lastClass && this.tt.removeClass(this._lastClass), this.tt.addClass(n), this._lastClass = n
	}, t._alignPolicy = function () {
		var i = this.tt.outerHeight(), n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))), t = window.innerWidth, r = window.innerHeight;
		switch (this.align) {
			case"top":
				if (this.base_t < 0)return "bottom";
				break;
			case"right":
				if (this.base_l + n > t || this.base_t < 0)return "bottom";
				break;
			case"left":
				if (this.base_l < 0 || this.base_t < 0)return "bottom"
		}
		return null
	}, t._locateTT = function () {
		var e = this.$element.offset(), o = this.slide.slider.$element.offset(), t = 50, r = 15, i, u, n, f;
		this.pos_x = e.left - o.left - this.slide.slider.$element.scrollLeft(), this.pos_y = e.top - o.top - this.slide.slider.$element.scrollTop(), this.from = {opacity: 0}, this.to = {opacity: 1}, this._updateClassName("ms-tooltip-" + this.align), this.tt_arrow.css("margin-left", ""), i = 15, u = 15;
		switch (this.align) {
			case"top":
				n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))), this.base_t = this.pos_y - this.tt.outerHeight() - u - r, this.base_l = this.pos_x - n / 2, this.base_l + n > window.innerWidth && (this.tt_arrow.css("margin-left", -i / 2 + this.base_l + n - window.innerWidth + "px"), this.base_l = window.innerWidth - n), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -i / 2 + this.pos_x - this.tt.outerWidth() / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - t + "px", this.to.top = this.base_t + "px");
				break;
			case"bottom":
				n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))), this.base_t = this.pos_y + u + r, this.base_l = this.pos_x - n / 2, this.base_l + n > window.innerWidth && (this.tt_arrow.css("margin-left", -i / 2 + this.base_l + n - window.innerWidth + "px"), this.base_l = window.innerWidth - n), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -i / 2 + this.pos_x - this.tt.outerWidth() / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + t + "px", this.to.top = this.base_t + "px");
				break;
			case"right":
				this.base_l = this.pos_x + i + r, this.base_t = this.pos_y - this.tt.outerHeight() / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + t + "px", this.to.left = this.base_l + "px");
				break;
			case"left":
				this.base_l = this.pos_x - i - this.tt.outerWidth() - r, this.base_t = this.pos_y - this.tt.outerHeight() / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - t + "px", this.to.left = this.base_l + "px")
		}
		if (f = this._alignPolicy(), f !== null) {
			this.align = f, this._locateTT();
			return
		}
		this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"), this.tt.css(this.from)
	}, t.start = function () {
		i.start.call(this), this.tt.appendTo(this.slide.slider.$element), this.tt.css("display", "none")
	}, t.reset = function () {
		i.reset.call(this), this.tt.detach()
	}, t.create = function () {
		var r = this, t, u;
		i.create.call(this), this._orgAlign = this.align = this.$element.data("align") !== undefined ? this.$element.data("align") : "top", this.data = this.$element.html();
		this.$element.html("").on("mouseenter", function () {
			r._showTT()
		}).on("mouseleave", function () {
			r._hideTT()
		});
		if (this.point = n('<div><div class="ms-point-center"><\/div><div class="ms-point-border"><\/div><\/div>').addClass("ms-tooltip-point").appendTo(this.$element), t = this.$element.data("link"), u = this.$element.data("target"), t)this.point.on("click", function () {
			window.open(t, u || "_self")
		});
		this.tt = n("<div><\/div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0), this.tt_arrow = n("<div><\/div>").addClass("ms-tooltip-arrow").appendTo(this.tt), this._updateClassName("ms-tooltip-" + this.align), this.ttcont = n("<div><\/div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt)
	}
}(jQuery), window.MSSliderEvent = function (n) {
	this.type = n
}, MSSliderEvent.CHANGE_START = "changeStart", MSSliderEvent.CHANGE_END = "changeEnd", MSSliderEvent.WAITING = "waiting", MSSliderEvent.AUTOPLAY_CHANGE = "autoplayChange", MSSliderEvent.VIDEO_PLAY = "videoPlay", MSSliderEvent.VIDEO_CLOSE = "videoClose", MSSliderEvent.INIT = "init", MSSliderEvent.RESIZE = "resize", MSSliderEvent.RESERVED_SPACE_CHANGE = "rsc", function (n) {
	"use strict";
	window.MSSlide = function () {
		this.$element = null, this.$loading = n("<div><\/div>").addClass("ms-slide-loading"), this.layers = [], this.view = null, this.index = -1, this.__width = 0, this.__height = 0, this.preloadCount = 0, this.fillMode = "fill", this.selected = !1, this.pselected = !1, this.autoAppend = !0, this.moz = n.browser.mozilla
	};
	var t = MSSlide.prototype;
	t.onSwipeStart = function () {
		this.link && (this.linkdis = !0), this.video && (this.videodis = !0)
	}, t.onSwipeCancel = function () {
		this.link && (this.linkdis = !1), this.video && (this.videodis = !1)
	}, t.addLayer = function (t) {
		this.hasLayers || (this.$layers = n("<div><\/div>").addClass("ms-slide-layers")), this.hasLayers = !0, this.$layers.append(t.$element), this.layers.push(t), t.slide = this, t.create(), t.needPreload && this.preloadCount++
	}, t.___onlayersReady = function () {
		this.ready = !0, this.slider.api._startTimer(), this.selected && (this.showLayers(), this.vinit && (this.bgvideo.play(), this.autoPauseBgVid || (this.bgvideo.currentTime = 0))), this.isSleeping || this.setup(), CTween.fadeOut(this.$loading, 300, !0), (this.slider.options.preload === 0 || this.slider.options.preload === "all") && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : this.slider.options.preload === "all" && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
	}, t.startLayers = function () {
		for (var n = 0, t = this.layers.length; n < t; ++n)this.layers[n].start()
	}, t.initLayers = function (n) {
		if ((!this.init || n) && !this.slider.init_safemode) {
			this.init = !0;
			for (var t = 0, i = this.layers.length; t < i; ++t)this.layers[t].init()
		}
	}, t.locateLayers = function () {
		for (var n = 0, t = this.layers.length; n < t; ++n)this.layers[n].locate()
	}, t.resetLayers = function () {
		this.$layers.css("display", "none"), this.$layers.css("opacity", 1);
		for (var n = 0, t = this.layers.length; n < t; ++n)this.layers[n].reset()
	}, t.hideLayers = function () {
		if (this.preloadCount === 0)for (var n = 0, t = this.layers.length; n < t; ++n)this.layers[n].hide()
	}, t.showLayers = function () {
		this.hasLayers && (this.lht && (this.lht.reset ? this.lht.reset() : this.lht.stop("true")), this.resetLayers(), this.$layers.css("opacity", 1).css("display", ""), this.preloadCount === 0 && (this.initLayers(), this.locateLayers(), this.startLayers()))
	}, t.setBG = function (t) {
		this.hasBG = !0;
		var i = this;
		this.$imgcont = n("<div><\/div>").addClass("ms-slide-bgcont"), this.$element.append(this.$loading).append(this.$imgcont), this.$bg_img = n(t).css("visibility", "hidden"), this.$imgcont.append(this.$bg_img), this.bgAligner = new MSAligner(i.fillMode, i.$imgcont, i.$bg_img), this.bgAligner.widthOnly = this.slider.options.autoHeight, i.slider.options.autoHeight && (i.pselected || i.selected) && i.slider.setHeight(i.slider.options.height), this.$bg_img.data("src") !== undefined ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function (n) {
			i._onBGLoad(n)
		}).each(n.jqLoadFix), this.preloadCount++
	}, t._onBGLoad = function (t) {
		if (this.bgNatrualWidth = t.width, this.bgNatrualHeight = t.height, this.bgLoaded = !0, n.browser.msie)this.$bg_img.on("dragstart", function (n) {
			n.preventDefault()
		});
		this.preloadCount--, this.preloadCount === 0 && this.___onlayersReady()
	}, t.loadImages = function () {
		var t, n, i;
		if (!this.ls) {
			for (this.ls = !0, this.hasBG && this.bg_src && (t = this, this.$bg_img.preloadImg(this.bg_src, function (n) {
				t._onBGLoad(n)
			})), n = 0, i = this.layers.length; n < i; ++n)this.layers[n].needPreload && this.layers[n].loadImage();
			this.bgvideo && this.bgvideo.load()
		}
	}, t.setBGVideo = function (t) {
		if (t[0].play) {
			if (window._mobile) {
				t.remove();
				return
			}
			this.bgvideo = t[0];
			var i = this;
			t.addClass("ms-slide-bgvideo"), t.data("loop") !== !1 && this.bgvideo.addEventListener("ended", function () {
				i.bgvideo.play()
			}), t.data("mute") !== !1 && (this.bgvideo.muted = !0), t.data("autopause") === !0 && (this.autoPauseBgVid = !0), this.bgvideo_fillmode = t.data("fill-mode") || "fill", this.bgvideo_fillmode !== "none" && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode, this.$element, t), this.bgvideo.addEventListener("loadedmetadata", function () {
				i.vinit || (i.vinit = !0, i.video_aspect = i.bgVideoAligner.baseHeight / i.bgVideoAligner.baseWidth, i.bgVideoAligner.init(i.bgvideo.videoWidth, i.bgvideo.videoHeight), i._alignBGVideo(), CTween.fadeIn(n(i.bgvideo), 200), i.selected && i.bgvideo.play())
			})), t.css("opacity", 0), this.$bgvideocont = n("<div><\/div>").addClass("ms-slide-bgvideocont").append(t), this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
		}
	}, t._alignBGVideo = function () {
		this.bgvideo_fillmode && this.bgvideo_fillmode !== "none" && this.bgVideoAligner.align()
	}, t.setSize = function (n, t, i) {
		this.__width = n, this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, t = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(t)) : (this.ratio = n / this.slider.options.width, t = this.slider.options.height * this.ratio)), this.__height = t, this.$element.width(n).height(t), this.hasBG && this.bgLoaded && this.bgAligner.align(), this._alignBGVideo(), i && this.selected && this.initLayers(i), this.selected && this.locateLayers(), this.hasLayers && (this.slider.options.autoHeight && (this.$layers[0].style.height = this.getHeight() + "px"), this.slider.options.layersMode == "center" && (this.$layers[0].style.left = Math.max(0, (this.__width - this.slider.options.width) / 2) + "px"))
	}, t.getHeight = function () {
		return this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
	}, t.__playVideo = function () {
		this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
	}, t.__closeVideo = function () {
		if (this.vplayed) {
			this.vplayed = !1, this.roc && this.slider.api.resume();
			var n = this;
			CTween.fadeIn(this.vpbtn, 500), CTween.animate(this.vcbtn, 500, {opacity: 0}, {
				complete: function () {
					n.vcbtn.css("display", "none")
				}
			}), CTween.animate(this.vframe, 500, {opacity: 0}, {
				complete: function () {
					n.vframe.attr("src", "about:blank").css("display", "none")
				}
			}), this.view.swipeControl.enable(), this.view.$element.removeClass("ms-def-cursor"), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
		}
	}, t.create = function () {
		var t = this;
		this.hasLayers && (this.$element.append(this.$layers), this.slider.options.layersMode == "center" && this.$layers.css("max-width", this.slider.options.width + "px")), this.link && this.$element.css("cursor", "pointer").click(function () {
			t.linkdis || window.open(t.link, t.link_targ || "_self")
		}), this.video && (this.video.indexOf("?") === -1 && (this.video += "?"), this.vframe = n("<iframe><\/iframe>").addClass("ms-slide-video").css({
			width: "100%",
			height: "100%",
			display: "none"
		}).attr("src", "about:blank").appendTo(this.$element), this.vpbtn = n("<div><\/div>").addClass("ms-slide-vpbtn").click(function () {
			t.__playVideo()
		}).appendTo(this.$element), this.vcbtn = n("<div><\/div>").addClass("ms-slide-vcbtn").click(function () {
			t.__closeVideo()
		}).appendTo(this.$element).css("display", "none"), window._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video<\/div>').appendTo(this.view.$element.parent())), !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"), (this.fillMode === "center" || this.fillMode === "stretch") && (this.fillMode = "fill")), this.sleep()
	}, t.destroy = function () {
		for (var n = 0, t = this.layers.length; n < t; ++n)this.layers[n].$element.stop(!0).remove();
		this.$element.remove(), this.$element = null
	}, t.setup = function () {
		!this.initBG && this.bgLoaded && (this.initBG = !0, this.$bg_img.css("visibility", ""), this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(), this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
	}, t.prepareToSelect = function () {
		this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.loadImages(), this.preloadCount === 0 && (this.bgvideo && this.bgvideo.play(), this.slider.options.instantStartLayers && this.showLayers()), this.moz && this.$element.css("margin-top", ""))
	}, t.select = function () {
		this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.hasLayers && (this.slider.options.autoHeight && (this.$layers[0].style.height = this.getHeight() + "px"), this.slider.options.instantStartLayers || this.showLayers()), this.preloadCount === 0 && this.bgvideo && this.bgvideo.play())
	}, t.unselect = function () {
		if (this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.bgvideo && (this.bgvideo.pause(), !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)), this.selected) {
			if (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.hasLayers) {
				var n = this;
				n.lht = CTween.animate(this.$layers, 500, {opacity: 0}, {
					complete: function () {
						n.resetLayers()
					}
				})
			}
			this.video && this.vplayed && (this.__closeVideo(), this.roc = !1)
		}
	}, t.sleep = function () {
		this.isSleeping || (this.isSleeping = !0, this.autoAppend && this.$element.detach())
	}, t.wakeup = function () {
		this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setup(), this.hasBG && this.bgAligner.align())
	}
}(jQuery), function (n) {
	"use strict";
	var i = {}, t;
	window.MSSlideController = function (n) {
		this._delayProgress = 0, this._timer = new averta.Timer(100), this._timer.onTimer = this.onTimer, this._timer.refrence = this, this.currentSlide = null, this.slider = n, this.so = n.options, averta.EventDispatcher.call(this)
	}, MSSlideController.registerView = function (n, t) {
		if (n in i)throw new Error(n + ", is already registered.");
		i[n] = t
	}, MSSlideController.SliderControlList = {}, MSSlideController.registerControl = function (n, t) {
		if (n in MSSlideController.SliderControlList)throw new Error(n + ", is already registered.");
		MSSlideController.SliderControlList[n] = t
	}, t = MSSlideController.prototype, t.setupView = function () {
		var t = this, u, r;
		this.resize_listener = function () {
			t.__resize()
		}, u = {
			spacing: this.so.space,
			mouseSwipe: this.so.mouse,
			loop: this.so.loop,
			autoHeight: this.so.autoHeight,
			swipe: this.so.swipe,
			speed: this.so.speed,
			dir: this.so.dir,
			viewNum: this.so.inView,
			critMargin: this.so.critMargin
		}, this.so.viewOptions && n.extend(u, this.so.viewOptions), this.so.autoHeight && (this.so.heightLimit = !1), r = i[this.slider.options.view] || MSBasicView, r._3dreq && (!window._css3d || n.browser.msie) && (r = r._fallback || MSBasicView), this.view = new r(u), this.so.overPause && (t = this, this.slider.$element.mouseenter(function () {
			t.is_over = !0, t._stopTimer()
		}).mouseleave(function () {
			t.is_over = !1, t._startTimer()
		}))
	}, t.onChangeStart = function () {
		this.change_started = !0, this.currentSlide && this.currentSlide.unselect(), this.currentSlide = this.view.currentSlide, this.currentSlide.prepareToSelect(), this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()), this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
	}, t.onChangeEnd = function () {
		if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), this.so.preload > 1) {
			for (var n, i = this.so.preload - 1, t = 1; t <= i; ++t) {
				if (n = this.view.index + t, n >= this.view.slideList.length)if (this.so.loop)n = n - this.view.slideList.length; else {
					t = i;
					continue
				}
				this.view.slideList[n].loadImages()
			}
			for (i > this.view.slideList.length / 2 && (i = Math.floor(this.view.slideList.length / 2)), t = 1; t <= i; ++t) {
				if (n = this.view.index - t, n < 0)if (this.so.loop)n = this.view.slideList.length + n; else {
					t = i;
					continue
				}
				this.view.slideList[n].loadImages()
			}
		}
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
	}, t.onSwipeStart = function () {
		this.skipTimer()
	}, t.skipTimer = function () {
		this._timer.reset(), this._delayProgress = 0, this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
	}, t.onTimer = function () {
		this._timer.getTime() >= this.view.currentSlide.delay * 1e3 && (this.skipTimer(), this.view.next(), this.hideCalled = !1), this._delayProgress = this._timer.getTime() / (this.view.currentSlide.delay * 10), this.so.hideLayers && !this.hideCalled && this.view.currentSlide.delay * 1e3 - this._timer.getTime() <= 300 && (this.view.currentSlide.hideLayers(), this.hideCalled = !0), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
	}, t._stopTimer = function () {
		this._timer && this._timer.stop()
	}, t._startTimer = function () {
		this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
	}, t.__appendSlides = function () {
		var t, i, n = 0, r = this.view.slideList.length - 1;
		for (n; n < r; ++n)t = this.view.slideList[n], t.detached || (t.$element.detach(), t.detached = !0);
		for (this.view.appendSlide(this.view.slideList[this.view.index]), r = 3, n = 1; n <= r; ++n) {
			if (i = this.view.index + n, i >= this.view.slideList.length)if (this.so.loop)i = i - this.view.slideList.length; else {
				n = r;
				continue
			}
			t = this.view.slideList[i], t.detached = !1, this.view.appendSlide(t)
		}
		for (r > this.view.slideList.length / 2 && (r = Math.floor(this.view.slideList.length / 2)), n = 1; n <= r; ++n) {
			if (i = this.view.index - n, i < 0)if (this.so.loop)i = this.view.slideList.length + i; else {
				n = r;
				continue
			}
			t = this.view.slideList[i], t.detached = !1, this.view.appendSlide(t)
		}
	}, t.__resize = function (n) {
		this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.so.fullheight ? (this.so.heightLimit = !1, this.so.autoHeight = !1, this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect, this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, n), this.view.setSize(this.width, this.currentSlide.getHeight(), n)) : this.view.setSize(this.width, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height, n), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
	}, t.__dispatchInit = function () {
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
	}, t.setup = function () {
		if (this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slides[this.so.start - 1], this.__resize(), this.view.create(this.so.start - 1), this.so.preload === 0 && this.view.slides[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
			var t = this, i = (new Date).getTime();
			this.wheellistener = function (n) {
				var f = (new Date).getTime(), r, u;
				if (!(f - i < 350))return i = f, r = window.event || n.orginalEvent || n, u = Math.max(-1, Math.min(1, r.wheelDelta || -r.detail)), u < 0 ? t.next() : u > 0 && t.previous(), !1
			}, n.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
		}
		this.slider.$element[0].clientWidth === 0 && (this.slider.init_safemode = !0), this.__resize()
	}, t.index = function () {
		return this.view.index
	}, t.count = function () {
		return this.view.slidesCount
	}, t.next = function () {
		this.skipTimer(), this.view.next()
	}, t.previous = function () {
		this.skipTimer(), this.view.previous()
	}, t.gotoSlide = function (n) {
		this.skipTimer(), this.view.gotoSlide(n)
	}, t.destroy = function (n) {
		this.slider.destroy(n)
	}, t._destroy = function () {
		this._timer.reset(), this._timer = null, n(window).unbind("resize", this.resize_listener), this.view.destroy(), this.view = null, this.so.wheel && (n.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), this.so = null
	}, t.update = function (n) {
		this.slider.init_safemode && n && (this.slider.init_safemode = !1), this.__resize(n)
	}, t.locate = function () {
		this.__resize()
	}, t.resume = function () {
		this.paused && (this.paused = !1, this._startTimer())
	}, t.pause = function () {
		this.paused || (this.paused = !0, this._stopTimer())
	}, t.currentTime = function () {
		return this._delayProgress
	}, averta.EventDispatcher.extend(t)
}(jQuery), function (n) {
	"use strict";
	var i = {image: MSImageLayerElement,
		text: MSLayerElement,
		video: MSVideoLayerElement,
		hotspot: MSHotspotLayer},
		t;
	window.MasterSlider = function () {
		this.options = {
			autoplay: !1,
			loop: !1,
			mouse: !0,
			swipe: !0,
			grabCursor: !0,
			space: 0,
			fillMode: "fill",
			start: 1,
			view: "basic",
			width: 300,
			height: 150,
			inView: 15,
			critMargin: 1,
			heightLimit: !0,
			smoothHeight: !0,
			autoHeight: !1,
			fullwidth: !1,
			fullheight: !1,
			autofill: !1,
			layersMode: "center",
			hideLayers: !1,
			endPause: !1,
			centerControls: !0,
			overPause: !0,
			shuffle: !1,
			speed: 17,
			dir: "h",
			preload: 0,
			wheel: !1,
			layout: "boxed",
			fullscreenMargin: 0,
			instantStartLayers: !1
		},
			this.slides = [],
			this.$element = null,
			this.lastMargin = 0,
			this.leftSpace = 0,
			this.topSpace = 0,
			this.rightSpace = 0,
			this.bottomSpace = 0;
		var t = this;
		this.resize_listener = function () {
			t._resize()
		}, n(window).bind("resize", this.resize_listener)
	},
		MasterSlider.author = "Averta Ltd. (www.averta.net)",
		MasterSlider.version = "1.5.9",
		MasterSlider.releaseDate = "April 2014",
		t = MasterSlider.prototype,
		t.__setupSlides = function () {
		var i = this, t, r = 0;
		this.$element.children(".ms-slide").each(function () {
			var u = n(this), e, o, f, s, h;
			if (t = new MSSlide, t.$element = u, t.slider = i, t.delay = u.data("delay") !== undefined ? u.data("delay") : 3, t.fillMode = u.data("fill-mode") !== undefined ? u.data("fill-mode") : i.options.fillMode, t.index = r++, e = u.children("img"), e.length > 0 && t.setBG(e[0]), o = u.children("video"), o.length > 0 && t.setBGVideo(o), i.controls)for (f = 0, s = i.controls.length; f < s; ++f)i.controls[f].slideAction(t);
			h = u.children("a").each(function () {
				var i = n(this);
				this.getAttribute("data-type") === "video" ? (t.video = this.getAttribute("href"), i.remove()) : i.hasClass("ms-layer") || (t.link = this.getAttribute("href"), t.link_targ = this.getAttribute("target"), i.remove())
			}), i.__createSlideLayers(t, u.find(".ms-layer")), i.slides.push(t), i.slideController.view.addSlide(t)
		})
	}, t.__createSlideLayers = function (t, r) {
		r.length != 0 && r.each(function (r, u) {
			var f, h, e, o, s;
			u.nodeName === "A" ? (h = n(this), f = h.find("img")) : f = n(this), e = new i[f.data("type") || "text"], e.$element = f, e.link = h, o = {}, s = {}, f.data("effect") !== undefined && (o.name = f.data("effect")), f.data("ease") !== undefined && (o.ease = f.data("ease")), f.data("duration") !== undefined && (o.duration = f.data("duration")), f.data("delay") !== undefined && (o.delay = f.data("delay")), f.data("hide-effect") && (s.name = f.data("hide-effect")), f.data("hide-ease") && (s.ease = f.data("hide-ease")), f.data("hide-duration") !== undefined && (s.duration = f.data("hide-duration")), f.data("hide-time") !== undefined && (s.time = f.data("hide-time")), f.data("resize") !== undefined && (e.resizable = f.data("resize")), f.data("swipe") !== undefined && (e.swipe = f.data("swipe")), f.data("widthlimit") !== undefined && (e.minWidth = f.data("widthlimit")), e.setStartAnim(o), e.setEndAnim(s), t.addLayer(e)
		})
	}, t._removeLoading = function () {
		n(window).unbind("resize", this.resize_listener), this.$element = n("#" + this.id).removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0), CTween.fadeIn(this.$element), this.$loading.remove(), this.slideController && this.slideController.__resize()
	}, t._resize = function () {
		if (this.$loading) {
			var n = this.$loading[0].clientWidth / this.aspect;
			n = this.options.heightLimit ? Math.min(n, this.options.height) : n, this.$loading.height(n), this.$element.height(n)
		}
	}, t._shuffleSlides = function () {
		for (var t = this.$element.children(".ms-slide"), i, n = 0, r = t.length; n < r; ++n)i = Math.floor(Math.random() * (r - 1)), n != i && (this.$element[0].insertBefore(t[n], t[i]), t = this.$element.children(".ms-slide"))
	}, t._setupSliderLayout = function () {
		this._updateSideMargins(), this.lastMargin = this.leftSpace;
		var t = this.options.layout;
		t !== "boxed" && t !== "partialview" && (this.options.fullwidth = !0), (t === "fullscreen" || t === "autofill") && (this.options.fullheight = !0), t === "partialview" && this.$element.addClass("ms-layout-partialview"), (t === "fullscreen" || t === "fullwidth") && (n(window).bind("resize", {that: this}, this._updateLayout), this._updateLayout()), n(window).bind("resize", this.slideController.resize_listener)
	}, t._updateLayout = function (t) {
		var i = t ? t.data.that : this, f = i.options.layout, r = i.$element, u;
		r.width(n("body").innerWidth() - i.leftSpace - i.rightSpace), u = -r.offset().left + i.leftSpace + i.lastMargin, r.css("margin-left", u), i.lastMargin = u, f === "fullscreen" && r.height(window.innerHeight - i.options.fullscreenMargin - i.topSpace - i.bottomSpace)
	}, t._init = function () {
		var t, r, i;
		if (!this.preventInit) {
			if (this.initialized = !0, this.options.preload !== "all" && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), MSLayerEffects.setup(), this.slideController.setupView(), this.view = this.slideController.view, this.controls) {
				for (this.$controlsCont = n("<div><\/div>").addClass("ms-container").appendTo(this.$element), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), t = 0, r = this.controls.length; t < r; ++t)this.controls[t].setup();
				this.$controlsCont.prepend(this.view.$element)
			} else this.$element.append(this.view.$element);
			if (this._setupSliderLayout(), this.__setupSlides(), this.slideController.setup(), this.controls)for (t = 0, r = this.controls.length; t < r; ++t)this.controls[t].create();
			this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()), this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse && (i = this.view.$element, i.mousedown(function () {
				i.removeClass("ms-grab-cursor"), i.addClass("ms-grabbing-cursor")
			}).addClass("ms-grab-cursor"), n(document).mouseup(function () {
				i.removeClass("ms-grabbing-cursor"), i.addClass("ms-grab-cursor")
			})), this.slideController.__dispatchInit()
		}
	}, t.setHeight = function (n) {
		this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {height: n}, {ease: "easeOutQuart"})) : this.slideController.view.$element.height(n)
	}, t.reserveSpace = function (n, t) {
		var i = n + "Space", r = this[i];
		return this[i] += t, this._updateSideMargins(), r
	}, t._updateSideMargins = function () {
		this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
	}, t._realignControls = function () {
		this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0, this._updateSideMargins(), this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
	}, t.control = function (n, t) {
		if (n in MSSlideController.SliderControlList) {
			this.controls || (this.controls = []);
			var i = new MSSlideController.SliderControlList[n](t);
			return i.slider = this, this.controls.push(i), this
		}
	}, t.setup = function (t, i) {
		var r, u, f;
		if (this.id = t, this.$element = typeof t == "string" ? n("#" + t) : t.eq(0), this.setupMarkup = this.$element.html(), this.$element.length === 0) {
			console && console.log("Master Slider Error: #" + t + " not found.");
			return
		}
		return this.$element.addClass("master-slider").addClass("before-init"), n.browser.msie && this.$element.addClass("ms-ie").addClass("ms-ie" + n.browser.version.slice(0, n.browser.version.indexOf("."))), r = navigator.userAgent.toLowerCase(), u = r.indexOf("android") > -1, u && this.$element.addClass("ms-android"), f = this, n.extend(this.options, i), this.aspect = this.options.width / this.options.height, this.$loading = n("<div><\/div>").addClass("ms-loading-container").insertBefore(this.$element).append(n("<div><\/div>").addClass("ms-loading")), this.$loading.parent().css("position", "relative"), this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0), this.options.fullheight && this.$element.addClass("ms-fullheight"), this._resize(), this.slideController = new MSSlideController(this), this.api = this.slideController, n(document).ready(function () {
			f._init()
		}), this
	}, t.destroy = function (t) {
		var i, u, r;
		if (this.controls)for (i = 0, u = this.controls.length; i !== u; i++)this.controls[i].destroy();
		this.slideController && this.slideController._destroy(), this.$loading && this.$loading.remove(), t ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove(), r = this.options.layout, (r === "fullscreen" || r === "fullwidth") && n(window).unbind("resize", this._updateLayout), this.view = null, this.slides = null, this.options = null, this.slideController = null, this.api = null, this.resize_listener = null
	}
}(jQuery), window.MSViewEvents = function (n) {
	this.type = n
}, MSViewEvents.SWIPE_START = "swipeStart", MSViewEvents.SWIPE_END = "swipeEnd", MSViewEvents.SWIPE_MOVE = "swipeMove", MSViewEvents.SWIPE_CANCEL = "swipeCancel", MSViewEvents.SCROLL = "scoll", MSViewEvents.CHANGE_START = "slideChangeStart", MSViewEvents.CHANGE_END = "slideChangeEnd", function (n) {
	"use strict";
	window.MSBasicView = function (t) {
		this.options = {
			loop: !1,
			dir: "h",
			autoHeight: !1,
			spacing: 5,
			mouseSwipe: !0,
			swipe: !0,
			speed: 17,
			minSlideSpeed: 2,
			viewNum: 20,
			critMargin: 1
		}, n.extend(this.options, t), this.dir = this.options.dir, this.loop = this.options.loop, this.spacing = this.options.spacing, this.__width = 0, this.__height = 0, this.__cssProb = this.dir === "h" ? "left" : "top", this.__offset = this.dir === "h" ? "offsetLeft" : "offsetTop", this.__dimension = this.dir === "h" ? "__width" : "__height", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.$slideCont = n("<div><\/div>").addClass("ms-slide-container"), this.$element = n("<div><\/div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont), this.currentSlide = null, this.index = -1, this.slidesCount = 0, this.slides = [], this.slideList = [], this.viewSlidesList = [], this.css3 = window._cssanim, this.start_buffer = 0, this.firstslide_snap = 0, this.controller = new Controller(0, 0, {
			snapping: !0,
			snapsize: 100,
			paging: !0,
			snappingMinSpeed: this.options.minSlideSpeed,
			friction: (100 - this.options.speed * .5) / 100,
			endless: this.loop
		}), this.controller.renderCallback(this.dir === "h" ? this._horizUpdate : this._vertiUpdate, this), this.controller.snappingCallback(this.__snapUpdate, this), this.controller.snapCompleteCallback(this.__snapCompelet, this), averta.EventDispatcher.call(this)
	};
	var t = MSBasicView.prototype;
	t.__snapCompelet = function () {
		this.__locateSlides(), this.start_buffer = 0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END))
	}, t.__snapUpdate = function (t, i, r) {
		var u, f;
		if (this.loop)u = this.index + r, this.updateLoop(u), u >= this.slidesCount && (u = u - this.slidesCount), u < 0 && (u = this.slidesCount + u), this.index = u; else {
			if (i < 0 || i >= this.slidesCount)return;
			this.index = i
		}
		(this._checkCritMargins(), n.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = "")), f = this.slideList[this.index], f !== this.currentSlide) && (this.currentSlide = f, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
	}, t._checkCritMargins = function () {
		if (!this.normalMode) {
			var r = Math.floor(this.options.viewNum / 2), t = this.viewSlidesList.indexOf(this.slideList[this.index]), i = this[this.__dimension] + this.spacing, n = this.options.critMargin;
			if (this.loop) {
				(t <= n || t >= this.viewSlidesList.length - n) && (i *= t - r, this.__locateSlides(!1, i + this.start_buffer), this.start_buffer += i);
				return
			}
			(t < n && this.index >= n || t >= this.viewSlidesList.length - n && this.index < this.slidesCount - n) && this.__locateSlides(!1)
		}
	}, t._vertiUpdate = function (n, t) {
		if (this.__contPos = t, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3) {
			this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -t + "px)" + this.__translate_end;
			return
		}
		this.$slideCont[0].style.top = -t + "px"
	}, t._horizUpdate = function (n, t) {
		if (this.__contPos = t, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3) {
			this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -t + "px)" + this.__translate_end;
			return
		}
		this.$slideCont[0].style.left = -t + "px"
	}, t.__updateViewList = function () {
		var t, n, i, r;
		if (this.normalMode) {
			this.viewSlidesList = this.slides;
			return
		}
		if (t = this.viewSlidesList.slice(), this.viewSlidesList = [], n = 0, i = Math.floor(this.options.viewNum / 2), this.loop)for (; n !== this.options.viewNum; n++)this.viewSlidesList.push(this.slides[this.currentSlideLoc - i + n]); else {
			for (n = 0; n !== i && this.index - n != -1; n++)this.viewSlidesList.unshift(this.slideList[this.index - n]);
			for (n = 1; n !== i && this.index + n !== this.slidesCount; n++)this.viewSlidesList.push(this.slideList[this.index + n])
		}
		for (n = 0, r = t.length; n !== r; n++)this.viewSlidesList.indexOf(t[n]) === -1 && t[n].sleep();
		t = null
	}, t.__locateSlides = function (n, t) {
		var f, r, i, u;
		for (this.__updateViewList(), t = this.loop ? t || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), f = this.viewSlidesList.length, i = 0; i !== f; i++)u = t + i * (this[this.__dimension] + this.spacing), r = this.viewSlidesList[i], r.wakeup(), r.position = u, r.$element[0].style[this.__cssProb] = u + "px";
		n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
	}, t.__createLoopList = function () {
		var t = [], n = 0, i = this.slidesCount / 2, r = this.slidesCount % 2 == 0 ? i - 1 : Math.floor(i), u = this.slidesCount % 2 == 0 ? i : Math.floor(i);
		for (this.currentSlideLoc = r, n = 1; n <= r; ++n)t.unshift(this.slideList[this.index - n < 0 ? this.slidesCount - n + this.index : this.index - n]);
		for (t.push(this.slideList[this.index]), n = 1; n <= u; ++n)t.push(this.slideList[this.index + n >= this.slidesCount ? this.index + n - this.slidesCount : this.index + n]);
		return t
	}, t.__getSteps = function (n, t) {
		var i = t < n ? this.slidesCount - n + t : t - n, r = Math.abs(this.slidesCount - i);
		return i < r ? i : -r
	}, t.__pushEnd = function () {
		var n = this.slides.shift(), i = this.slides[this.slidesCount - 2], t;
		(this.slides.push(n), this.normalMode) && (t = i.$element[0][this.__offset] + this.spacing + this[this.__dimension], n.$element[0].style[this.__cssProb] = t + "px", n.position = t)
	}, t.__pushStart = function () {
		var n = this.slides.pop(), i = this.slides[0], t;
		(this.slides.unshift(n), this.normalMode) && (t = i.$element[0][this.__offset] - this.spacing - this[this.__dimension], n.$element[0].style[this.__cssProb] = t + "px", n.position = t)
	}, t.addSlide = function (n) {
		n.view = this, this.slides.push(n), this.slideList.push(n), this.slidesCount++
	}, t.appendSlide = function (n) {
		this.$slideCont.append(n.$element)
	}, t.updateLoop = function (n) {
		var t, i, r;
		if (this.loop)for (t = this.__getSteps(this.index, n), i = 0, r = Math.abs(t); i < r; ++i)t < 0 ? this.__pushStart() : this.__pushEnd()
	}, t.gotoSlide = function (n, t) {
		this.updateLoop(n), this.index = n;
		var i = this.slideList[this.index];
		(this._checkCritMargins(), this.controller.changeTo(i.position, !t, null, null, !1), i !== this.currentSlide) && (this.currentSlide = i, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), t && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
	}, t.next = function () {
		this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
	}, t.previous = function () {
		this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
	}, t.setupSwipe = function () {
		this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = this.dir === "h" ? "horizontal" : "vertical";
		var n = this;
		this.swipeControl.onSwipe = this.dir === "h" ? function (t) {
			n.horizSwipeMove(t)
		} : function (t) {
			n.vertSwipeMove(t)
		}
	}, t.vertSwipeMove = function (n) {
		var t = n.phase, i;
		t === "start" ? (this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START))) : t === "move" && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + n.moveY) < this.cont_size / 2) ? this.controller.drag(n.moveY) : (t === "end" || t === "cancel") && (i = n.distanceY / n.duration * 50 / 3, Math.abs(i) > .1 ? (this.controller.push(-i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL))))
	}, t.horizSwipeMove = function (n) {
		var t = n.phase, i;
		t === "start" ? (this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START))) : t === "move" && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + n.moveX) < this.cont_size / 2) ? this.controller.drag(n.moveX) : (t === "end" || t === "cancel") && (i = n.distanceX / n.duration * 50 / 3, Math.abs(i) > .1 ? (this.controller.push(-i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL))))
	}, t.setSize = function (n, t, i) {
		if (this.lastWidth !== n || t !== this.lastHeight || i) {
			this.$element.width(n).height(t);
			for (var r = 0; r < this.slidesCount; ++r)this.slides[r].setSize(n, t, i);
			this.__width = n, this.__height = t, this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = n, this.lastHeight = t)
		}
	}, t.create = function (n) {
		this.__created = !0, this.index = Math.min(n || 0, this.slidesCount - 1), this.loop && (this.slides = this.__createLoopList()), this.normalMode = this.slidesCount <= this.options.viewNum, this.__locateSlides();
		for (var t = 0; t < this.slidesCount; ++t)this.slides[t].create();
		this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)), this.gotoSlide(this.index, !0), this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
	}, t.destroy = function () {
		if (this.__created) {
			for (var n = 0; n < this.slidesCount; ++n)this.slides[n].destroy();
			this.slides = null, this.slideList = null, this.$element.remove(), this.controller.destroy(), this.controller = null
		}
	}, averta.EventDispatcher.extend(t), MSSlideController.registerView("basic", MSBasicView)
}(jQuery), function () {
	"use strict";
	window.MSWaveView = function (n) {
		MSBasicView.call(this, n), this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"), this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d")
	}, MSWaveView.extend(MSBasicView), MSWaveView._3dreq = !0, MSWaveView._fallback = MSBasicView;
	var n = MSWaveView.prototype, t = MSBasicView.prototype;
	n._horizUpdate = function (n, i) {
		var f, u, e, r;
		for (t._horizUpdate.call(this, n, i), f = -i, r = 0; r < this.slidesCount; ++r)u = this.slideList[r], e = -f - u.position, this.__updateSlidesHoriz(u, e)
	}, n._vertiUpdate = function (n, i) {
		var f, u, e, r;
		for (t._vertiUpdate.call(this, n, i), f = -i, r = 0; r < this.slidesCount; ++r)u = this.slideList[r], e = -f - u.position, this.__updateSlidesVertic(u, e)
	}, n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		n.$element.css(window._csspfx + "transform", "translateZ(" + -i * 3 + "px) rotateY(0.01deg)")
	}, n.__updateSlidesVertic = function (n, t) {
		this.__updateSlidesHoriz(n, t)
	}, MSSlideController.registerView("wave", MSWaveView)
}(jQuery), function () {
	window.MSFadeBasicView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")
	}, MSFadeBasicView.extend(MSWaveView);
	var n = MSFadeBasicView.prototype, t = MSFadeBasicView.prototype;
	n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * .6 / this.__width);
		i = 1 - Math.min(i, .6), n.$element.css("opacity", i)
	}, n.__updateSlidesVertic = function (n, t) {
		this.__updateSlidesHoriz(n, t)
	}, MSSlideController.registerView("fadeBasic", MSFadeBasicView), MSWaveView._fallback = MSFadeBasicView
}(), function () {
	window.MSFadeWaveView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")
	}, MSFadeWaveView.extend(MSWaveView), MSFadeWaveView._3dreq = !0, MSFadeWaveView._fallback = MSFadeBasicView;
	var n = MSFadeWaveView.prototype, t = MSWaveView.prototype;
	n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		i = Math.min(i, 100), n.$element.css("opacity", 1 - i / 300), n.$element.css(window._csspfx + "transform", "scale(" + (1 - i / 800) + ") rotateY(0.01deg) ")
	}, n.__updateSlidesVertic = function (n, t) {
		this.__updateSlidesHoriz(n, t)
	}, MSSlideController.registerView("fadeWave", MSFadeWaveView)
}(), function () {
	"use strict";
	window.MSFlowView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
	}, MSFlowView.extend(MSWaveView), MSFlowView._3dreq = !0, MSFlowView._fallback = MSFadeBasicView;
	var n = MSFlowView.prototype, t = MSWaveView.prototype;
	n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * 100 / this.__width), r = Math.min(i * .3, 30) * (t < 0 ? -1 : 1), u = i * 1.2;
		n.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -u * 5 + "px) rotateY(" + r + "deg) "
	}, n.__updateSlidesVertic = function (n, t) {
		var i = Math.abs(t * 100 / this.__width), r = Math.min(i * .3, 30) * (t < 0 ? -1 : 1), u = i * 1.2;
		n.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -u * 5 + "px) rotateX(" + -r + "deg) "
	}, MSSlideController.registerView("flow", MSFlowView)
}(jQuery), function () {
	window.MSFadeFlowView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")
	}, MSFadeFlowView.extend(MSWaveView), MSFadeFlowView._3dreq = !0;
	var n = MSFadeFlowView.prototype, t = MSWaveView.prototype;
	n.__calculate = function (n) {
		var t = Math.min(Math.abs(n * 100 / this.__width), 100), i = Math.min(t * .5, 50) * (n < 0 ? -1 : 1);
		return {value: t, rvalue: i}
	}, n.__updateSlidesHoriz = function (n, t) {
		var i = this.__calculate(t);
		n.$element.css("opacity", 1 - i.value / 300), n.$element[0].style[window._csspfx + "transform"] = "translateZ(" + -i.value + "px) rotateY(" + i.rvalue + "deg) "
	}, n.__updateSlidesVertic = function (n, t) {
		var i = this.__calculate(t);
		n.$element.css("opacity", 1 - i.value / 300), n.$element[0].style[window._csspfx + "transform"] = "translateZ(" + -i.value + "px) rotateX(" + -i.rvalue + "deg) "
	}, MSSlideController.registerView("fadeFlow", MSFadeFlowView)
}(), function (n) {
	"use strict";
	window.MSMaskView = function (n) {
		MSBasicView.call(this, n), this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
	}, MSMaskView.extend(MSBasicView);
	var t = MSMaskView.prototype, i = MSBasicView.prototype;
	t.addSlide = function (t) {
		t.view = this, t.$frame = n("<div><\/div>").addClass("ms-mask-frame").append(t.$element), t.$element[0].style.position = "relative", t.autoAppend = !1, this.slides.push(t), this.slideList.push(t), this.slidesCount++
	}, t.setSize = function (n, t) {
		for (var u = this.slides[0].slider, r = 0; r < this.slidesCount; ++r)this.slides[r].$frame[0].style.width = n + "px", u.options.autoHeight || (this.slides[r].$frame[0].style.height = t + "px");
		i.setSize.call(this, n, t)
	}, t._horizUpdate = function (n, t) {
		i._horizUpdate.call(this, n, t);
		var r = 0;
		if (this.css3) {
			for (r = 0; r < this.slidesCount; ++r)this.slideList[r].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (t - this.slideList[r].position) + "px)" + this.__translate_end;
			return
		}
		for (r = 0; r < this.slidesCount; ++r)this.slideList[r].$element[0].style.left = t - this.slideList[r].position + "px"
	}, t._vertiUpdate = function (n, t) {
		i._vertiUpdate.call(this, n, t);
		var r = 0;
		if (this.css3) {
			for (r = 0; r < this.slidesCount; ++r)this.slideList[r].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (t - this.slideList[r].position) + "px)" + this.__translate_end;
			return
		}
		for (r = 0; r < this.slidesCount; ++r)this.slideList[r].$element[0].style.top = t - this.slideList[r].position + "px"
	}, t.__pushEnd = function () {
		var n = this.slides.shift(), i = this.slides[this.slidesCount - 2], t;
		(this.slides.push(n), this.normalMode) && (t = i.$frame[0][this.__offset] + this.spacing + this[this.__dimension], n.$frame[0].style[this.__cssProb] = t + "px", n.position = t)
	}, t.__pushStart = function () {
		var n = this.slides.pop(), i = this.slides[0], t;
		(this.slides.unshift(n), this.normalMode) && (t = i.$frame[0][this.__offset] - this.spacing - this[this.__dimension], n.$frame[0].style[this.__cssProb] = t + "px", n.position = t)
	}, t.__updateViewList = function () {
		var t, n, i, r;
		if (this.normalMode) {
			this.viewSlidesList = this.slides;
			return
		}
		if (t = this.viewSlidesList.slice(), this.viewSlidesList = [], n = 0, i = Math.floor(this.options.viewNum / 2), this.loop)for (; n !== this.options.viewNum; n++)this.viewSlidesList.push(this.slides[this.currentSlideLoc - i + n]); else {
			for (n = 0; n !== i && this.index - n != -1; n++)this.viewSlidesList.unshift(this.slideList[this.index - n]);
			for (n = 1; n !== i && this.index + n !== this.slidesCount; n++)this.viewSlidesList.push(this.slideList[this.index + n])
		}
		for (n = 0, r = t.length; n !== r; n++)this.viewSlidesList.indexOf(t[n]) === -1 && (t[n].sleep(), t[n].$frame.detach());
		t = null
	}, t.__locateSlides = function (n, t) {
		var f, i, r, u;
		for (this.__updateViewList(), t = this.loop ? t || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), f = this.viewSlidesList.length, r = 0; r !== f; r++)u = t + r * (this[this.__dimension] + this.spacing), i = this.viewSlidesList[r], this.$slideCont.append(i.$frame), i.wakeup(!1), i.position = u, i.$frame[0].style[this.__cssProb] = u + "px";
		n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
	}, MSSlideController.registerView("mask", MSMaskView)
}(jQuery), function () {
	"use strict";
	window.MSFadeView = function (n) {
		MSBasicView.call(this, n), this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"), this.controller.renderCallback(this.__update, this)
	}, MSFadeView.extend(MSBasicView);
	var n = MSFadeView.prototype, t = MSBasicView.prototype;
	n.__update = function (n, t) {
		for (var f = -t, r, u, i = 0; i < this.slidesCount; ++i)r = this.slideList[i], u = -f - r.position, this.__updateSlides(r, u)
	}, n.__updateSlides = function (n, t) {
		var i = Math.abs(t / this[this.__dimension]);
		1 - i <= 0 ? n.$element.fadeTo(0, 0).css("visibility", "hidden") : n.$element.fadeTo(0, 1 - i).css("visibility", "")
	}, n.__locateSlides = function (n, t) {
		var u, r, i, f;
		for (this.__updateViewList(), t = this.loop ? t || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), u = this.viewSlidesList.length, i = 0; i !== u; i++)f = t + i * this[this.__dimension], r = this.viewSlidesList[i], r.wakeup(), r.position = f;
		n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
	}, n.__pushEnd = function () {
		var n = this.slides.shift(), t = this.slides[this.slidesCount - 2];
		this.slides.push(n), n.position = t.position + this[this.__dimension]
	}, n.__pushStart = function () {
		var n = this.slides.pop(), t = this.slides[0];
		this.slides.unshift(n), n.position = t.position - this[this.__dimension]
	}, n.create = function (n) {
		t.create.call(this, n), this.spacing = 0, this.controller.options.minValidDist = 10
	}, MSSlideController.registerView("fade", MSFadeView)
}(jQuery), function () {
	"use strict";
	window.MSScaleView = function (n) {
		MSBasicView.call(this, n), this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"), this.controller.renderCallback(this.__update, this)
	}, MSScaleView.extend(MSFadeView);
	var n = MSScaleView.prototype, t = MSFadeView.prototype;
	n.__updateSlides = function (n, t) {
		var i = Math.abs(t / this[this.__dimension]);
		1 - i <= 0 ? n.$element.fadeTo(0, 0).css("visibility", "hidden") : n.$element.fadeTo(0, 1 - i).css("visibility", "").css(window._jcsspfx + "Transform", "perspective(2000px) translateZ(" + i * (t < 0 ? -.5 : .5) * 300 + "px)")
	}, n.create = function (n) {
		t.create.call(this, n), this.controller.options.minValidDist = .03
	}, MSSlideController.registerView("scale", MSScaleView)
}(jQuery), function () {
	"use strict";
	var t = 2e3, n, i;
	window.MSFocusView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"), this.options.centerSpace = this.options.centerSpace || 1
	}, MSFocusView.extend(MSWaveView), MSFocusView._3dreq = !0, MSFocusView._fallback = MSFadeBasicView, n = MSFocusView.prototype, i = MSWaveView.prototype, n.__calcview = function (n, i) {
		var r = i / 2 * n / (n + t);
		return r * (n + t) / t
	}, n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		i = -Math.min(i, 100) * 15, n.$element.css(window._csspfx + "transform", "translateZ(" + i + "px) rotateY(0.01deg) translateX(" + (t < 0 ? 1 : -1) * -this.__calcview(i, this.__width) * this.options.centerSpace + "px)")
	}, n.__updateSlidesVertic = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		i = -Math.min(i, 100) * 15, n.$element.css(window._csspfx + "transform", "translateZ(" + i + "px) rotateY(0.01deg) translateY(" + (t < 0 ? 1 : -1) * -this.__calcview(i, this.__width) * this.options.centerSpace + "px)")
	}, MSSlideController.registerView("focus", MSFocusView)
}(), function () {
	window.MSPartialWaveView = function (n) {
		MSWaveView.call(this, n), this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")
	}, MSPartialWaveView.extend(MSWaveView), MSPartialWaveView._3dreq = !0, MSPartialWaveView._fallback = MSFadeBasicView;
	var n = MSPartialWaveView.prototype, t = MSWaveView.prototype;
	n.__updateSlidesHoriz = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		n.$bg_img.css("opacity", (100 - Math.abs(t * 120 / this.__width / 3)) / 100), n.$element.css(window._csspfx + "transform", "translateZ(" + -i * 3 + "px) rotateY(0.01deg) translateX(" + t * .75 + "px)")
	}, n.__updateSlidesVertic = function (n, t) {
		var i = Math.abs(t * 100 / this.__width);
		n.$bg_img.css("opacity", (100 - Math.abs(t * 120 / this.__width / 3)) / 100), n.$element.css(window._csspfx + "transform", "translateZ(" + -i * 3 + "px) rotateY(0.01deg) translateY(" + t * .75 + "px)")
	}, MSSlideController.registerView("partialWave", MSPartialWaveView)
}(), function (n) {
	"use strict";
	var i = function () {
		this.options = {prefix: "ms-", autohide: !0, overVideo: !0}
	}, t = i.prototype;
	t.slideAction = function () {
	}, t.setup = function () {
		this.cont = this.options.insertTo ? n(this.options.insertTo) : this.slider.$controlsCont, this.options.overVideo || this._hideOnvideoStarts(), this.options.hideUnder && (n(window).bind("resize", {that: this}, this.onResize), this.onResize())
	}, t.onResize = function (n) {
		var t = n && n.data.that || this, i = window.innerWidth;
		i <= t.options.hideUnder && !t.detached ? (t.hide(!0), t.detached = !0, t.onDetach && t.onDetach()) : i >= t.options.hideUnder && t.detached && (t.detached = !1, t.visible(), t.onAppend && t.onAppend())
	}, t.create = function () {
		var t = this;
		this.options.autohide && !window._touch && (this.hide(!0), this.slider.$controlsCont.mouseenter(function () {
			t._disableAH || t.mdown || t.visible(), t.mleave = !1
		}).mouseleave(function () {
			t.mleave = !0, t.mdown || t.hide()
		}).mousedown(function () {
			t.mdown = !0
		}), n(document).mouseup(function () {
			t.mdown && t.mleave && t.hide(), t.mdown = !1
		}))
	}, t._hideOnvideoStarts = function () {
		var n = this;
		slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function () {
			n._disableAH = !0, n.hide()
		}), slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function () {
			n._disableAH = !1, n.visible()
		})
	}, t.hide = function (n) {
		n ? (this.$element.css("opacity", 0), this.$element.css("display", "none")) : CTween.fadeOut(this.$element, 400, !1), this.$element.addClass("ms-ctrl-hide")
	}, t.visible = function () {
		this.detached || (this.$element.css("display", ""), CTween.fadeIn(this.$element, 400), this.$element.removeClass("ms-ctrl-hide"))
	}, t.destroy = function () {
		this.options && this.options.hideUnder && n(window).unbind("resize", this.onResize)
	}, window.BaseControl = i
}(jQuery), function (n) {
	"use strict";
	var i = function (t) {
		BaseControl.call(this), n.extend(this.options, t)
	}, t, r;
	i.extend(BaseControl), t = i.prototype, r = BaseControl.prototype, t.setup = function () {
		var t = this;
		this.$next = n("<div><\/div>").addClass(this.options.prefix + "nav-next").bind("click", function () {
			t.slider.options.loop || t.slider.api.index() !== t.slider.api.count() - 1 ? t.slider.api.next() : t.slider.view.controller.bounce(10)
		}), this.$prev = n("<div><\/div>").addClass(this.options.prefix + "nav-prev").bind("click", function () {
			t.slider.options.loop || t.slider.api.index() !== 0 ? t.slider.api.previous() : t.slider.view.controller.bounce(-10)
		}), r.setup.call(this), this.cont.append(this.$next), this.cont.append(this.$prev)
	}, t.hide = function (n) {
		if (n) {
			this.$prev.css("opacity", 0).css("display", "none"), this.$next.css("opacity", 0).css("display", "none");
			return
		}
		CTween.fadeOut(this.$prev, 400, !1), CTween.fadeOut(this.$next, 400, !1), this.$prev.addClass("ms-ctrl-hide"), this.$next.addClass("ms-ctrl-hide")
	}, t.visible = function () {
		this.detached || (CTween.fadeIn(this.$prev, 400), CTween.fadeIn(this.$next, 400), this.$prev.removeClass("ms-ctrl-hide").css("display", ""), this.$next.removeClass("ms-ctrl-hide").css("display", ""))
	}, t.destroy = function () {
		r.destroy(), this.$next.remove(), this.$prev.remove()
	}, window.MSArrows = i, MSSlideController.registerControl("arrows", i)
}(jQuery), function (n) {
	"use strict";
	var i = function (t) {
		BaseControl.call(this), this.options.dir = "h", this.options.wheel = t.dir === "v", this.options.arrows = !0, this.options.speed = 17, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.space = 10, this.options.width = 100, this.options.height = 100, this.options.type = "thumbs", n.extend(this.options, t), this.thumbs = [], this.index_count = 0, this.__dimen = this.options.dir === "h" ? "width" : "height", this.__alignsize = this.options.dir === "h" ? "height" : "width", this.__jdimen = this.options.dir === "h" ? "outerWidth" : "outerHeight", this.__pos = this.options.dir === "h" ? "left" : "top", this.click_enable = !0
	}, t, r;
	i.extend(BaseControl), t = i.prototype, r = BaseControl.prototype, t.setup = function () {
		var t, i;
		this.$element = n("<div><\/div>").addClass(this.options.prefix + "thumb-list"), this.options.type === "tabs" && this.$element.addClass(this.options.prefix + "tabs"), this.$element.addClass("ms-dir-" + this.options.dir), r.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$thumbscont = n("<div><\/div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows && (t = this, this.$fwd = n("<div><\/div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function () {
			t.controller.push(-15)
		}), this.$bwd = n("<div><\/div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function () {
			t.controller.push(15)
		})), !this.options.insetTo && this.options.align && (i = this.options.align, this.options.inset ? this.$element.css(i, this.options.margin) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), this.options.dir === "v" ? this.$element.width(this.options.width) : this.$element.height(this.options.height))
	}, t.onAppend = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.onDetach = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.align = function () {
		if (!this.detached) {
			var n = this.options.align, t = this.slider.reserveSpace(n, this.options[this.__alignsize] + this.options.margin * 2);
			this.$element.css(n, -t - this.options[this.__alignsize] - this.options.margin)
		}
	}, t.slideAction = function (t) {
		var r = n(t.$element.find(".ms-thumb")), u = this, i = n("<div><\/div>").addClass("ms-thumb-frame").append(r).append(n('<div class="ms-thumb-ol"><\/div>')).bind("click", function () {
			u.changeSlide(i)
		});
		if (this.options.align && i.width(this.options.width).height(this.options.height).css("margin-" + (this.options.dir === "v" ? "bottom" : "right"), this.options.space), i[0].index = this.index_count++, this.$thumbscont.append(i), n.browser.msie)r.on("dragstart", function (n) {
			n.preventDefault()
		});
		this.thumbs.push(i)
	}, t.create = function () {
		var t;
		r.create.call(this), this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.controller = new Controller(0, 0, {
			snappingMinSpeed: 2,
			friction: (100 - this.options.speed * .5) / 100
		}), this.controller.renderCallback(this.options.dir === "h" ? this._hMove : this._vMove, this), t = this, this.resize_listener = function () {
			t.__resize()
		}, n(window).bind("resize", this.resize_listener), this.thumbSize = this.thumbs[0][this.__jdimen](!0), this.setupSwipe(), this.__resize(), t = this, this.options.wheel && (this.wheellistener = function (n) {
			var i = window.event || n.orginalEvent || n, r = Math.max(-1, Math.min(1, i.wheelDelta || -i.detail));
			return t.controller.push(-r * 10), !1
		}, n.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.select(this.thumbs[this.cindex])
	}, t._hMove = function (n, t) {
		if (this.__contPos = t, window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -t + "px)" + this.__translate_end;
			return
		}
		this.$thumbscont[0].style.left = -t + "px"
	}, t._vMove = function (n, t) {
		if (this.__contPos = t, window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -t + "px)" + this.__translate_end;
			return
		}
		this.$thumbscont[0].style.top = -t + "px"
	}, t.setupSwipe = function () {
		this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = this.options.dir === "h" ? "horizontal" : "vertical";
		var n = this;
		this.swipeControl.onSwipe = this.options.dir === "h" ? function (t) {
			n.horizSwipeMove(t)
		} : function (t) {
			n.vertSwipeMove(t)
		}
	}, t.vertSwipeMove = function (n) {
		var t, i;
		this.dTouch || (t = n.phase, t === "start" ? this.controller.stop() : t === "move" ? this.controller.drag(n.moveY) : (t === "end" || t === "cancel") && (i = Math.abs(n.distanceY / n.duration * 50 / 3), i > .1 ? this.controller.push(-n.distanceY / n.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())))
	}, t.horizSwipeMove = function (n) {
		var t, i;
		this.dTouch || (t = n.phase, t === "start" ? (this.controller.stop(), this.click_enable = !1) : t === "move" ? this.controller.drag(n.moveX) : (t === "end" || t === "cancel") && (i = Math.abs(n.distanceX / n.duration * 50 / 3), i > .1 ? this.controller.push(-n.distanceX / n.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())))
	}, t.update = function () {
		var n = this.slider.api.index();
		this.cindex !== n && (this.cindex != null && this.unselect(this.thumbs[this.cindex]), this.cindex = n, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
	}, t.updateThumbscroll = function () {
		var n = this.thumbSize * this.cindex, t;
		if (this.controller.value == NaN && (this.controller.value = 0), n - this.controller.value < 0) {
			this.controller.gotoSnap(this.cindex, !0);
			return
		}
		if (n + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
			t = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1, this.controller.gotoSnap(t, !0);
			return
		}
	}, t.changeSlide = function (n) {
		this.click_enable && this.cindex !== n[0].index && this.slider.api.gotoSlide(n[0].index)
	}, t.unselect = function (n) {
		n.removeClass("ms-thumb-frame-selected")
	}, t.select = function (n) {
		n.addClass("ms-thumb-frame-selected")
	}, t.__resize = function () {
		var n = this.$element[this.__dimen](), t;
		this.ls !== n && (this.ls = n, this.thumbSize = this.thumbs[0][this.__jdimen](!0), t = this.slider.api.count() * this.thumbSize, this.$thumbscont[0].style[this.__dimen] = t + "px", t <= n ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = (n - t) * .5 + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = t - n, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll()))
	}, t.destroy = function () {
		r.destroy(), this.options.wheel && (n.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), n(window).unbind("resize", this.resize_listener), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
	}, window.MSThumblist = i, MSSlideController.registerControl("thumblist", i)
}(jQuery), function (n) {
	"use strict";
	var i = function (t) {
		BaseControl.call(this), this.options.dir = "h", this.options.inset = !0, this.options.margin = 10, n.extend(this.options, t), this.bullets = []
	}, t, r;
	i.extend(BaseControl), t = i.prototype, r = BaseControl.prototype, t.setup = function () {
		if (r.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$bullet_cont = n("<div><\/div>").addClass("ms-bullets-count").appendTo(this.$element), !this.options.insetTo && this.options.align) {
			this.$element.css({top: "auto", bottom: "auto"});
			var t = this.options.align;
			this.options.inset && this.$element.css(t, this.options.margin)
		}
	}, t.create = function () {
		var u, i, t;
		for (r.create.call(this), u = this, this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), i = 0; i < this.slider.api.count(); ++i) {
			t = n("<div><\/div>").addClass("ms-bullet"), t[0].index = i;
			t.on("click", function () {
				u.changeSlide(this.index)
			});
			this.$bullet_cont.append(t), this.bullets.push(t)
		}
		this.options.dir === "h" && this.$element.width(t.outerWidth(!0) * this.slider.api.count()), this.select(this.bullets[this.cindex])
	}, t.update = function () {
		var n = this.slider.api.index();
		this.cindex !== n && (this.cindex != null && this.unselect(this.bullets[this.cindex]), this.cindex = n, this.select(this.bullets[this.cindex]))
	}, t.changeSlide = function (n) {
		this.cindex !== n && this.slider.api.gotoSlide(n)
	}, t.unselect = function (n) {
		n.removeClass("ms-bullet-selected")
	}, t.select = function (n) {
		n.addClass("ms-bullet-selected")
	}, t.destroy = function () {
		r.destroy(), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.$element.remove()
	}, window.MSBulltes = i, MSSlideController.registerControl("bullets", i)
}(jQuery), function (n) {
	"use strict";
	var i = function (t) {
		BaseControl.call(this), this.options.dir = "h", this.options.autohide = !0, this.options.width = 4, this.options.color = "#3D3D3D", this.options.margin = 10, n.extend(this.options, t), this.__dimen = this.options.dir === "h" ? "width" : "height", this.__jdimen = this.options.dir === "h" ? "outerWidth" : "outerHeight", this.__pos = this.options.dir === "h" ? "left" : "top", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.__translate_start = this.options.dir === "h" ? " translateX(" : "translateY("
	}, t, r;
	i.extend(BaseControl), t = i.prototype, r = BaseControl.prototype, t.setup = function () {
		if (this.$element = n("<div><\/div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir), r.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$bar = n("<div><\/div>").addClass(this.options.prefix + "bar").appendTo(this.$element), this.slider.options.loop && (console.log("WARNING, MSScrollbar cannot work with looped slider."), this.disable = !0, this.$element.remove()), this.options.dir === "v" ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
			this.options.dir === "v" ? this.$element.css({right: "auto", left: "auto"}) : this.$element.css({top: "auto", bottom: "auto"});
			var t = this.options.align;
			this.options.inset ? this.$element.css(t, this.options.margin) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
		}
	}, t.onAppend = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.onDetach = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.align = function () {
		if (!this.detached) {
			var n = this.options.align, t = this.slider.reserveSpace(n, this.options.margin * 2 + this.options.width);
			this.$element.css(n, -t - this.options.margin - this.options.width)
		}
	}, t.create = function () {
		if (!this.disable) {
			var n = this;
			this.scroller = this.slider.api.scroller, this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this), this._resize(), this.options.autohide && this.$bar.css("opacity", "0")
		}
	}, t._resize = function () {
		this.vdimen = this.$element[this.__dimen](), this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value, this.$bar[this.__dimen](this.bar_dimen)
	}, t._update = function () {
		var n = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value, t;
		if (this.lvalue !== n) {
			if (this.lvalue = n, this.options.autohide && (clearTimeout(this.hto), this.$bar.css("opacity", "1"), t = this, this.hto = setTimeout(function () {
					t.$bar.css("opacity", "0")
				}, 150)), n < 0) {
				this.$bar[0].style[this.__dimen] = this.bar_dimen + n + "px";
				return
			}
			if (n > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - n + "px"), window._cssanim) {
				this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + n + "px)" + this.__translate_end;
				return
			}
			this.$bar[0].style[this.__pos] = n + "px"
		}
	}, t.destroy = function () {
		r.destroy(), this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.$element.remove()
	}, window.MSScrollbar = i, MSSlideController.registerControl("scrollbar", i)
}(jQuery), function (n) {
	"use strict";
	var r = function (t) {
		BaseControl.call(this), this.options.autohide = !1, this.options.width = 4, this.options.color = "#FFFFFF", this.options.inset = !0, this.options.margin = 0, n.extend(this.options, t)
	}, t, i;
	r.extend(BaseControl), t = r.prototype, i = BaseControl.prototype, t.setup = function () {
		var r = this, t;
		i.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "timerbar"), i.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$bar = n("<div><\/div>").addClass("ms-time-bar").appendTo(this.$element), this.options.dir === "v" ? (this.$bar.width(this.options.width), this.$element.width(this.options.width)) : (this.$bar.height(this.options.width), this.$element.height(this.options.width)), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align && (this.$element.css({
			top: "auto",
			bottom: "auto"
		}), t = this.options.align, this.options.inset ? this.$element.css(t, this.options.margin) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()))
	}, t.onAppend = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.onDetach = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.align = function () {
		if (!this.detached) {
			var n = this.options.align, t = this.slider.reserveSpace(n, this.options.margin * 2 + this.options.width);
			this.$element.css(n, -t - this.options.margin - this.options.width)
		}
	}, t.create = function () {
		i.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this), this._update()
	}, t._update = function () {
		this.$bar[0].style.width = this.slider.api._delayProgress + "%"
	}, t.destroy = function () {
		i.destroy(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove()
	}, window.MSTimerbar = r, MSSlideController.registerControl("timebar", r)
}(jQuery), function (n) {
	"use strict";
	var i = function (t) {
		BaseControl.call(this), this.options.color = "#A2A2A2", this.options.stroke = 10, this.options.radius = 4, this.options.autohide = !1, n.extend(this.options, t)
	}, t, r;
	i.extend(BaseControl), t = i.prototype, r = BaseControl.prototype, t.setup = function () {
		var t = this;
		if (r.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = n("<canvas><\/canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = n("<div><\/div>").addClass("ms-ctimer-bullet").appendTo(this.$element), !this.$canvas[0].getContext) {
			this.destroy(), this.disable = !0;
			return
		}
		this.ctx = this.$canvas[0].getContext("2d"), this.prog = 0, this.__w = (this.options.radius + this.options.stroke / 2) * 2, this.$canvas[0].width = this.__w, this.$canvas[0].height = this.__w
	}, t.create = function () {
		if (!this.disable) {
			r.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
			var n = this;
			this.$element.click(function () {
				n.slider.api.paused ? n.slider.api.resume() : n.slider.api.pause()
			}), this._update()
		}
	}, t._update = function () {
		var t = this;
		n(this).stop(!0).animate({prog: this.slider.api._delayProgress * .01}, {
			duration: 200, step: function () {
				t._draw()
			}
		})
	}, t._draw = function () {
		this.ctx.clearRect(0, 0, this.__w, this.__w), this.ctx.beginPath(), this.ctx.arc(this.__w * .5, this.__w * .5, this.options.radius, Math.PI * 1.5, Math.PI * 1.5 + 2 * Math.PI * this.prog, !1), this.ctx.strokeStyle = this.options.color, this.ctx.lineWidth = this.options.stroke, this.ctx.stroke()
	}, t.destroy = function () {
		(r.destroy(), this.disable) || (n(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove())
	}, window.MSCircleTimer = i, MSSlideController.registerControl("circletimer", i)
}(jQuery), function (n) {
	"use strict";
	window.MSLightbox = function (t) {
		BaseControl.call(this, t), this.options.autohide = !1, n.extend(this.options, t), this.data_list = []
	}, MSLightbox.fadeDuratation = 400, MSLightbox.extend(BaseControl);
	var t = MSLightbox.prototype, i = BaseControl.prototype;
	t.setup = function () {
		i.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont)
	}, t.slideAction = function (t) {
		n("<div><\/div>").addClass(this.options.prefix + "lightbox-btn").appendTo(t.$element).append(n(t.$element.find(".ms-lightbox")))
	}, t.create = function () {
		i.create.call(this)
	}, MSSlideController.registerControl("lightbox", MSLightbox)
}(jQuery), function (n) {
	"use strict";
	window.MSSlideInfo = function (t) {
		BaseControl.call(this, t), this.options.autohide = !1, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.size = 100, this.options.dir = "h", n.extend(this.options, t), this.data_list = []
	}, MSSlideInfo.fadeDuratation = 400, MSSlideInfo.extend(BaseControl);
	var t = MSSlideInfo.prototype, i = BaseControl.prototype;
	t.setup = function () {
		if (this.$element = n("<div><\/div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir), i.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), !this.options.insetTo && this.options.align) {
			var t = this.options.align;
			this.options.inset ? this.$element.css(t, this.options.margin) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), this.options.dir === "v" ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
		}
	}, t.onAppend = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.onDetach = function () {
		this.options.insetTo || !this.options.align || this.options.inset || this.slider._realignControls()
	}, t.align = function () {
		if (!this.detached) {
			var n = this.options.align, t = this.slider.reserveSpace(n, this.options.size + this.options.margin * 2);
			this.$element.css(n, -t - this.options.size - this.options.margin)
		}
	}, t.slideAction = function (t) {
		var i = n(t.$element.find(".ms-info")), r = this;
		i.detach(), this.data_list[t.index] = i
	}, t.create = function () {
		i.create.call(this), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.switchEle(this.data_list[this.cindex])
	}, t.update = function () {
		var n = this.slider.api.index();
		this.switchEle(this.data_list[n]), this.cindex = n
	}, t.switchEle = function (n) {
		if (this.current_ele) {
			var t = this;
			this.current_ele[0].tween && this.current_ele[0].tween.stop(!0), this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {opacity: 0}, {
				complete: function () {
					this.detach(), this[0].tween = null
				}, target: this.current_ele
			}), clearTimeout(this.tou), this.tou = setTimeout(function () {
				t.__show(n)
			}, MSSlideInfo.fadeDuratation + 200);
			return
		}
		this.__show(n)
	}, t.__show = function (n) {
		n.appendTo(this.$element).css("opacity", "0"), CTween.fadeIn(n, MSSlideInfo.fadeDuratation), n[0].tween && n[0].tween.stop(!0), this.current_ele = n
	}, t.destroy = function () {
		i.destroy(), clearTimeout(this.tou), this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
	}, MSSlideController.registerControl("slideinfo", MSSlideInfo)
}(jQuery), function (n) {
	window.MSGallery = function (t, i) {
		this.id = t, this.slider = i, this.telement = n("#" + t), this.botcont = n("<div><\/div>").addClass("ms-gallery-botcont").appendTo(this.telement), this.thumbcont = n("<div><\/div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont), this.playbtn = n("<div><\/div>").addClass("ms-gal-playbtn").appendTo(this.botcont), this.thumbtoggle = n("<div><\/div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont), i.control("thumblist", {
			insertTo: this.thumbcont,
			autohide: !1,
			dir: "h"
		}), i.control("slidenum", {insertTo: this.botcont, autohide: !1}), i.control("slideinfo", {insertTo: this.botcont, autohide: !1}), i.control("timebar", {
			insertTo: this.botcont,
			autohide: !1
		}), i.control("bullets", {insertTo: this.botcont, autohide: !1})
	};
	var t = MSGallery.prototype;
	t._init = function () {
		var n = this;
		this.slider.api.paused || this.playbtn.addClass("btn-pause"), this.playbtn.click(function () {
			n.slider.api.paused ? (n.slider.api.resume(), n.playbtn.addClass("btn-pause")) : (n.slider.api.pause(), n.playbtn.removeClass("btn-pause"))
		}), this.thumbtoggle.click(function () {
			n.vthumbs ? (n.thumbtoggle.removeClass("btn-hide"), n.vthumbs = !1, n.thumbcont.addClass("hide-thumbs")) : (n.thumbtoggle.addClass("btn-hide"), n.thumbcont.removeClass("hide-thumbs"), n.vthumbs = !0)
		})
	}, t.setup = function () {
		var t = this;
		n(document).ready(function () {
			t._init()
		})
	}
}(jQuery)
//@ sourceMappingURL=masterslider.map