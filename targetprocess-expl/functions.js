if (self != top) {
	document.getElementsByTagName('body')[0].className += ' tp-iframe';
}
;
(function (e, t) {
	var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
		return new x.fn.init(e, t, r)
	}, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
		return t.toUpperCase()
	}, q = function (e) {
		(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
	}, _ = function () {
		a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
	};
	x.fn = x.prototype = {
		jquery: f, constructor: x, init: function (e, n, r) {
			var i, o;
			if (!e)return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2])return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		}, selector: "", length: 0, toArray: function () {
			return g.call(this)
		}, get: function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		}, pushStack: function (e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		}, each: function (e, t) {
			return x.each(this, e, t)
		}, ready: function (e) {
			return x.ready.promise().done(e), this
		}, slice: function () {
			return this.pushStack(g.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (e) {
			var t = this.length, n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		}, map: function (e) {
			return this.pushStack(x.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		}, end: function () {
			return this.prevObject || this.constructor(null)
		}, push: h, sort: [].sort, splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
		var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		}, isReady: !1, readyWait: 1, holdReady: function (e) {
			e ? x.readyWait++ : x.ready(!0)
		}, ready: function (e) {
			if (e === !0 ? !--x.readyWait : !x.isReady) {
				if (!a.body)return setTimeout(x.ready);
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		}, isFunction: function (e) {
			return "function" === x.type(e)
		}, isArray: Array.isArray || function (e) {
			return "array" === x.type(e)
		}, isWindow: function (e) {
			return null != e && e == e.window
		}, isNumeric: function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		}, type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		}, isPlainObject: function (e) {
			var n;
			if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return !1;
			try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return !1
			} catch (r) {
				return !1
			}
			if (x.support.ownLast)for (n in e)return v.call(e, n);
			for (n in e);
			return n === t || v.call(e, n)
		}, isEmptyObject: function (e) {
			var t;
			for (t in e)return !1;
			return !0
		}, error: function (e) {
			throw Error(e)
		}, parseHTML: function (e, t, n) {
			if (!e || "string" != typeof e)return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e), i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		}, parseJSON: function (n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		}, parseXML: function (n) {
			var r, i;
			if (!n || "string" != typeof n)return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		}, noop: function () {
		}, globalEval: function (t) {
			t && x.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		}, camelCase: function (e) {
			return e.replace(D, "ms-").replace(L, H)
		}, nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}, each: function (e, t, n) {
			var r, i = 0, o = e.length, a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
				} else for (i in e)if (r = t.apply(e[i], n), r === !1)break
			} else if (a) {
				for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
			} else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
			return e
		}, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
			return null == e ? "" : b.call(e)
		} : function (e) {
			return null == e ? "" : (e + "").replace(C, "")
		}, makeArray: function (e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		}, inArray: function (e, t, n) {
			var r;
			if (t) {
				if (m)return m.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
			}
			return -1
		}, merge: function (e, n) {
			var r = n.length, i = e.length, o = 0;
			if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
			return e.length = i, e
		}, grep: function (e, t, n) {
			var r, i = [], o = 0, a = e.length;
			for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		}, map: function (e, t, n) {
			var r, i = 0, o = e.length, a = M(e), s = [];
			if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
			return d.apply([], s)
		}, guid: 1, proxy: function (e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		}, access: function (e, n, r, i, o, a, s) {
			var l = 0, u = e.length, c = null == r;
			if ("object" === x.type(r)) {
				o = !0;
				for (l in r)x.access(e, n, l, r[l], !0, a, s)
			} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
					return c.call(x(e), n)
				})), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		}, now: function () {
			return (new Date).getTime()
		}, swap: function (e, t, n, r) {
			var i, o, a = {};
			for (o in t)a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t)e.style[o] = a[o];
			return i
		}
	}), x.ready.promise = function (t) {
		if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r = !1;
			try {
				r = null == e.frameElement && a.documentElement
			} catch (i) {
			}
			r && r.doScroll && function o() {
				if (!x.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}()
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});
	function M(e) {
		var t = e.length, n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	r = x(a), function (e, t) {
		var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
			return e === t ? (S = !0, 0) : 0
		}, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
				var t = 0, n = this.length;
				for (; n > t; t++)if (this[t] === e)return t;
				return -1
			}, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
			ID: RegExp("^#(" + R + ")"),
			CLASS: RegExp("^\\.(" + R + ")"),
			TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
			ATTR: RegExp("^" + $),
			PSEUDO: RegExp("^" + I),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
			bool: RegExp("^(?:" + B + ")$", "i"),
			needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
		}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
		};
		try {
			M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
		} catch (ot) {
			M = {
				apply: H.length ? function (e, t) {
					_.apply(e, O.call(t))
				} : function (e, t) {
					var n = e.length, r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		function at(e, t, n, i) {
			var o, a, s, l, u, c, d, m, y, x;
			if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
			if (1 !== (l = t.nodeType) && 9 !== l)return [];
			if (h && !i) {
				if (o = Z.exec(e))if (s = o[1]) {
					if (9 === l) {
						if (a = t.getElementById(s), !a || !a.parentNode)return n;
						if (a.id === s)return n.push(a), n
					} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
				} else {
					if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
					if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
				}
				if (r.qsa && (!g || !g.test(e))) {
					if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
						c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
						while (u--)c[u] = m + yt(c[u]);
						y = V.test(e) && t.parentNode || t, x = c.join(",")
					}
					if (x)try {
						return M.apply(n, y.querySelectorAll(x)), n
					} catch (T) {
					} finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return kt(e.replace(z, "$1"), t, n, i)
		}

		function st() {
			var e = [];

			function t(n, r) {
				return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
			}

			return t
		}

		function lt(e) {
			return e[b] = !0, e
		}

		function ut(e) {
			var t = f.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ct(e, t) {
			var n = e.split("|"), r = e.length;
			while (r--)o.attrHandle[n[r]] = t
		}

		function pt(e, t) {
			var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
			if (r)return r;
			if (n)while (n = n.nextSibling)if (n === t)return -1;
			return e ? 1 : -1
		}

		function ft(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function dt(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function ht(e) {
			return lt(function (t) {
				return t = +t, lt(function (n, r) {
					var i, o = e([], n.length, t), a = o.length;
					while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		s = at.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, r = at.support = {}, p = at.setDocument = function (e) {
			var n = e ? e.ownerDocument || e : w, i = n.defaultView;
			return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
				p()
			}), r.attributes = ut(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), r.getElementsByTagName = ut(function (e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), r.getElementsByClassName = ut(function (e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), r.getById = ut(function (e) {
				return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
			}), r.getById ? (o.find.ID = function (e, t) {
				if (typeof t.getElementById !== j && h) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, o.filter.ID = function (e) {
				var t = e.replace(rt, it);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}) : (delete o.find.ID, o.filter.ID = function (e) {
				var t = e.replace(rt, it);
				return function (e) {
					var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), o.find.TAG = r.getElementsByTagName ? function (e, n) {
				return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
			} : function (e, t) {
				var n, r = [], i = 0, o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++])1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, o.find.CLASS = r.getElementsByClassName && function (e, n) {
					return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
				}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
			}), ut(function (e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
			})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
				r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
			}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function (e, t) {
				if (t)while (t = t.parentNode)if (t === e)return !0;
				return !1
			}, A = d.compareDocumentPosition ? function (e, t) {
				if (e === t)return S = !0, 0;
				var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
				return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function (e, t) {
				var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
				if (e === t)return S = !0, 0;
				if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
				if (o === a)return pt(e, t);
				r = e;
				while (r = r.parentNode)s.unshift(r);
				r = t;
				while (r = r.parentNode)l.unshift(r);
				while (s[i] === l[i])i++;
				return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
			}, n) : f
		}, at.matches = function (e, t) {
			return at(e, null, null, t)
		}, at.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
				var n = y.call(e, t);
				if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
			} catch (i) {
			}
			return at(t, f, null, [e]).length > 0
		}, at.contains = function (e, t) {
			return (e.ownerDocument || e) !== f && p(e), v(e, t)
		}, at.attr = function (e, n) {
			(e.ownerDocument || e) !== f && p(e);
			var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
			return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
		}, at.error = function (e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		}, at.uniqueSort = function (e) {
			var t, n = [], i = 0, o = 0;
			if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
				while (t = e[o++])t === e[o] && (i = n.push(o));
				while (i--)e.splice(n[i], 1)
			}
			return e
		}, a = at.getText = function (e) {
			var t, n = "", r = 0, i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent)return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
				} else if (3 === i || 4 === i)return e.nodeValue
			} else for (; t = e[r]; r++)n += a(t);
			return n
		}, o = at.selectors = {
			cacheLength: 50,
			createPseudo: lt,
			match: Q,
			attrHandle: {},
			find: {},
			relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}},
			preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				}, CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
				}, PSEUDO: function (e) {
					var n, r = !e[5] && e[2];
					return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(rt, it).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				}, CLASS: function (e) {
					var t = N[e + " "];
					return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
				}, ATTR: function (e, t, n) {
					return function (r) {
						var i = at.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				}, CHILD: function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
					return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode
					} : function (t, n, l) {
						var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && v) {
								c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
								while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
									c[e] = [T, d, f];
									break
								}
							} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
							return f -= i, f === r || 0 === f % r && f / r >= 0
						}
					}
				}, PSEUDO: function (e, t) {
					var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
					return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
						var i, o = r(e, t), a = o.length;
						while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
					}) : function (e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: lt(function (e) {
					var t = [], n = [], r = l(e.replace(z, "$1"));
					return r[b] ? lt(function (e, t, n, i) {
						var o, a = r(e, null, i, []), s = e.length;
						while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}), has: lt(function (e) {
					return function (t) {
						return at(e, t).length > 0
					}
				}), contains: lt(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
					}
				}), lang: lt(function (e) {
					return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
						var n;
						do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}), target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				}, root: function (e) {
					return e === d
				}, focus: function (e) {
					return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				}, enabled: function (e) {
					return e.disabled === !1
				}, disabled: function (e) {
					return e.disabled === !0
				}, checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				}, selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				}, empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
					return !0
				}, parent: function (e) {
					return !o.pseudos.empty(e)
				}, header: function (e) {
					return tt.test(e.nodeName)
				}, input: function (e) {
					return et.test(e.nodeName)
				}, button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				}, text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				}, first: ht(function () {
					return [0]
				}), last: ht(function (e, t) {
					return [t - 1]
				}), eq: ht(function (e, t, n) {
					return [0 > n ? n + t : n]
				}), even: ht(function (e, t) {
					var n = 0;
					for (; t > n; n += 2)e.push(n);
					return e
				}), odd: ht(function (e, t) {
					var n = 1;
					for (; t > n; n += 2)e.push(n);
					return e
				}), lt: ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0;)e.push(r);
					return e
				}), gt: ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r;)e.push(r);
					return e
				})
			}
		}, o.pseudos.nth = o.pseudos.eq;
		for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
		for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
		function gt() {
		}

		gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
		function mt(e, t) {
			var n, r, i, a, s, l, u, c = k[e + " "];
			if (c)return t ? 0 : c.slice(0);
			s = e, l = [], u = o.preFilter;
			while (s) {
				(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({value: n, type: r[0].replace(z, " ")}), s = s.slice(n.length));
				for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({value: n, type: a, matches: r}), s = s.slice(n.length));
				if (!n)break
			}
			return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
		}

		function yt(e) {
			var t = 0, n = e.length, r = "";
			for (; n > t; t++)r += e[t].value;
			return r
		}

		function vt(e, t, n) {
			var r = t.dir, o = n && "parentNode" === r, a = C++;
			return t.first ? function (t, n, i) {
				while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
			} : function (t, n, s) {
				var l, u, c, p = T + " " + a;
				if (s) {
					while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return !0
				} else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
					if ((l = u[1]) === !0 || l === i)return l === !0
				} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return !0
			}
		}

		function bt(e) {
			return e.length > 1 ? function (t, n, r) {
				var i = e.length;
				while (i--)if (!e[i](t, n, r))return !1;
				return !0
			} : e[0]
		}

		function xt(e, t, n, r, i) {
			var o, a = [], s = 0, l = e.length, u = null != t;
			for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
			return a
		}

		function wt(e, t, n, r, i, o) {
			return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
				var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
				if (n && n(m, y, s, l), r) {
					u = xt(y, d), r(u, [], s, l), c = u.length;
					while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
				}
				if (o) {
					if (i || e) {
						if (i) {
							u = [], c = y.length;
							while (c--)(p = y[c]) && u.push(m[c] = p);
							i(null, y = [], u, l)
						}
						c = y.length;
						while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
					}
				} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
			})
		}

		function Tt(e) {
			var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
				return e === t
			}, s, !0), p = vt(function (e) {
				return F.call(t, e) > -1
			}, s, !0), f = [function (e, n, r) {
				return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
			}];
			for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
				if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
					for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
					return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
				}
				f.push(n)
			}
			return bt(f)
		}

		function Ct(e, t) {
			var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
				var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
				for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
					if (a && h) {
						g = 0;
						while (m = e[g++])if (m(h, l, c)) {
							p.push(h);
							break
						}
						w && (T = k, i = ++n)
					}
					r && ((h = !m && h) && v--, s && x.push(h))
				}
				if (v += b, r && b !== v) {
					g = 0;
					while (m = t[g++])m(x, y, l, c);
					if (s) {
						if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
						y = xt(y)
					}
					M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
				}
				return w && (T = k, u = C), x
			};
			return r ? lt(s) : s
		}

		l = at.compile = function (e, t) {
			var n, r = [], i = [], o = E[e + " "];
			if (!o) {
				t || (t = mt(e)), n = t.length;
				while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
				o = E(e, Ct(i, r))
			}
			return o
		};
		function Nt(e, t, n) {
			var r = 0, i = t.length;
			for (; i > r; r++)at(e, t[r], n);
			return n
		}

		function kt(e, t, n, i) {
			var a, s, u, c, p, f = mt(e);
			if (!i && 1 === f.length) {
				if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
					if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
					e = e.slice(s.shift().value.length)
				}
				a = Q.needsContext.test(e) ? 0 : s.length;
				while (a--) {
					if (u = s[a], o.relative[c = u.type])break;
					if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
						if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
						break
					}
				}
			}
			return l(e, f)(i, t, !h, n, V.test(e)), n
		}

		r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
			return 1 & e.compareDocumentPosition(f.createElement("div"))
		}), ut(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || ct("type|href|height|width", function (e, n, r) {
			return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
		}), r.attributes && ut(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || ct("value", function (e, n, r) {
			return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
		}), ut(function (e) {
			return null == e.getAttribute("disabled")
		}) || ct(B, function (e, n, r) {
			var i;
			return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
		}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
	}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function (e, n) {
			t[n] = !0
		}), t
	}

	x.Callbacks = function (e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
			for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
				r = !1;
				break
			}
			n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
		}, p = {
			add: function () {
				if (l) {
					var t = l.length;
					(function i(t) {
						x.each(t, function (t, n) {
							var r = x.type(n);
							"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
						})
					})(arguments), n ? o = l.length : r && (s = t, c(r))
				}
				return this
			}, remove: function () {
				return l && x.each(arguments, function (e, t) {
					var r;
					while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
				}), this
			}, has: function (e) {
				return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
			}, empty: function () {
				return l = [], o = 0, this
			}, disable: function () {
				return l = u = r = t, this
			}, disabled: function () {
				return !l
			}, lock: function () {
				return u = t, r || p.disable(), this
			}, locked: function () {
				return !u
			}, fireWith: function (e, t) {
				return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
			}, fire: function () {
				return p.fireWith(this, arguments), this
			}, fired: function () {
				return !!i
			}
		};
		return p
	}, x.extend({
		Deferred: function (e) {
			var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {
				state: function () {
					return n
				}, always: function () {
					return i.done(arguments).fail(arguments), this
				}, then: function () {
					var e = arguments;
					return x.Deferred(function (n) {
						x.each(t, function (t, o) {
							var a = o[0], s = x.isFunction(e[t]) && e[t];
							i[o[1]](function () {
								var e = s && s.apply(this, arguments);
								e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
							})
						}), e = null
					}).promise()
				}, promise: function (e) {
					return null != e ? x.extend(e, r) : r
				}
			}, i = {};
			return r.pipe = r.then, x.each(t, function (e, o) {
				var a = o[2], s = o[3];
				r[o[1]] = a.add, s && a.add(function () {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		}, when: function (e) {
			var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
				return function (r) {
					t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
				}
			}, s, l, u;
			if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function (t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in{submit: !0, change: !0, focusin: !0})d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (f in x(t))break;
		return t.ownLast = "0" !== f, x(function () {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
		}
	}

	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while (i--)delete r[t[i]];
					if (n ? !I(r) : !x.isEmptyObject(r))return
				}
				(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	x.extend({
		cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
		}, data: function (e, t, n) {
			return R(e, t, n)
		}, removeData: function (e, t) {
			return W(e, t)
		}, _data: function (e, t, n) {
			return R(e, t, n, !0)
		}, _removeData: function (e, t) {
			return W(e, t, !0)
		}, acceptData: function (e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function (e, n) {
			var r, i, o = null, a = 0, s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function () {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function () {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		}, removeData: function (e) {
			return this.each(function () {
				x.removeData(this, e)
			})
		}
	});
	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch (o) {
				}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}

	function I(e) {
		var t;
		for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
		return !0
	}

	x.extend({
		queue: function (e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		}, dequeue: function (e, t) {
			t = t || "fx";
			var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
				x.dequeue(e, t)
			};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		}, _queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
					empty: x.Callbacks("once memory").add(function () {
						x._removeData(e, t + "queue"), x._removeData(e, n)
					})
				})
		}
	}), x.fn.extend({
		queue: function (e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		}, dequeue: function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		}, delay: function (e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		}, clearQueue: function (e) {
			return this.queue(e || "fx", [])
		}, promise: function (e, n) {
			var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
				--i || o.resolveWith(a, [a])
			};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
	x.fn.extend({
		attr: function (e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		}, removeAttr: function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		}, prop: function (e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		}, removeProp: function (e) {
			return e = x.propFix[e] || e, this.each(function () {
				try {
					this[e] = t, delete this[e]
				} catch (n) {
				}
			})
		}, addClass: function (e) {
			var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
			if (x.isFunction(e))return this.each(function (t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
				o = 0;
				while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
				n.className = x.trim(r)
			}
			return this
		}, removeClass: function (e) {
			var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e))return this.each(function (t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
				o = 0;
				while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
				n.className = e ? x.trim(r) : ""
			}
			return this
		}, toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n) {
					var t, r = 0, o = x(this), a = e.match(T) || [];
					while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			})
		}, hasClass: function (e) {
			var t = " " + e + " ", n = 0, r = this.length;
			for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return !0;
			return !1
		}, val: function (e) {
			var n, r, i, o = this[0];
			{
				if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			}, select: {
				get: function (e) {
					var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
					for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
						if (t = x(n).val(), o)return t;
						a.push(t)
					}
					return a
				}, set: function (e, t) {
					var n, r, i = e.options, o = x.makeArray(t), a = i.length;
					while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}, attr: function (e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		}, removeAttr: function (e, t) {
			var n, r, i = 0, o = t && t.match(T);
			if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		}, attrHooks: {
			type: {
				set: function (e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
		}, propHooks: {
			tabIndex: {
				get: function (e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function (e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
			var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function (e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function (e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function (e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function (e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		}, set: z.set
	}, x.attrHooks.contenteditable = {
		set: function (e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function (e, n) {
		x.attrHooks[n] = {
			set: function (e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
		x.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || t
		}, set: function (e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set: function (e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch (e) {
		}
	}

	x.event = {
		global: {},
		add: function (e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function (e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
					p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
					while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
					l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
				} else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function (n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {
					}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function (e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, n) {
			var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
				for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
				o.length && s.push({elem: u, handlers: o})
			}
			return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
		},
		fix: function (e) {
			if (e[x.expando])return e;
			var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while (t--)n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
				var r, i, o, s = n.button, l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== at() && this.focus)try {
						return this.focus(), !1
					} catch (e) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					return this === at() && this.blur ? (this.blur(), !1) : t
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				}, _default: function (e) {
					return x.nodeName(e.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function (e, t, n, r) {
			var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function (e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function (e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		}, stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		}, stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
		x.event.special[e] = {
			delegateType: t, bindType: t, handle: function (e) {
				var n, r = this, i = e.relatedTarget, o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function () {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
				var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		}, postDispatch: function (e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		}, teardown: function () {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function () {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		}, handle: function (e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		}, teardown: function () {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
		var n = 0, r = function (e) {
			x.event.simulate(t, e.target, x.event.fix(e), !0)
		};
		x.event.special[t] = {
			setup: function () {
				0 === n++ && a.addEventListener(e, r, !0)
			}, teardown: function () {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function (e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e)this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
			return 1 === o && (s = i, i = function (e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
				x.event.add(this, e, i, r, n)
			})
		}, one: function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		}, off: function (e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e)this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
				x.event.remove(this, e, r, n)
			})
		}, trigger: function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		}, triggerHandler: function (e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {children: !0, contents: !0, next: !0, prev: !0};
	x.fn.extend({
		find: function (e) {
			var t, n = [], r = this, i = r.length;
			if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
				for (t = 0; i > t; t++)if (x.contains(r[t], this))return !0
			}));
			for (t = 0; i > t; t++)x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		}, has: function (e) {
			var t, n = x(e, this), r = n.length;
			return this.filter(function () {
				for (t = 0; r > t; t++)if (x.contains(this, n[t]))return !0
			})
		}, not: function (e) {
			return this.pushStack(ft(this, e || [], !0))
		}, filter: function (e) {
			return this.pushStack(ft(this, e || [], !1))
		}, is: function (e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		}, closest: function (e, t) {
			var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
				n = o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		}, index: function (e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		}, addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});
	function pt(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	x.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		}, parents: function (e) {
			return x.dir(e, "parentNode")
		}, parentsUntil: function (e, t, n) {
			return x.dir(e, "parentNode", n)
		}, next: function (e) {
			return pt(e, "nextSibling")
		}, prev: function (e) {
			return pt(e, "previousSibling")
		}, nextAll: function (e) {
			return x.dir(e, "nextSibling")
		}, prevAll: function (e) {
			return x.dir(e, "previousSibling")
		}, nextUntil: function (e, t, n) {
			return x.dir(e, "nextSibling", n)
		}, prevUntil: function (e, t, n) {
			return x.dir(e, "previousSibling", n)
		}, siblings: function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		}, children: function (e) {
			return x.sibling(e.firstChild)
		}, contents: function (e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, dir: function (e, n, r) {
			var i = [], o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
			return i
		}, sibling: function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	function ft(e, t, n) {
		if (x.isFunction(t))return x.grep(e, function (e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType)return x.grep(e, function (e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t))return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function (e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"), n = e.createDocumentFragment();
		if (n.createElement)while (t.length)n.createElement(t.pop());
		return n
	}

	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	}, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function (e) {
			return x.access(this, function (e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		}, append: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		}, before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		}, after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		}, remove: function (e, t) {
			var n, r = e ? x.filter(e, this) : this, i = 0;
			for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		}, empty: function () {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while (e.firstChild)e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		}, clone: function (e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return x.clone(this, e, t)
			})
		}, html: function (e) {
			return x.access(this, function (e) {
				var n = this[0] || {}, r = 0, i = this.length;
				if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {
					}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		}, replaceWith: function () {
			var e = x.map(this, function (e) {
				return [e.nextSibling, e.parentNode]
			}), t = 0;
			return this.domManip(arguments, function (n) {
				var r = e[t++], i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		}, detach: function (e) {
			return this.remove(e, !0)
		}, domManip: function (e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
			if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	});
	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}

	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for (r in i.events)x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	x.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
		x.fn[e] = function (e) {
			var n, r = 0, i = [], o = x(e), a = o.length - 1;
			for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	function Ft(e, n) {
		var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}

	x.extend({
		clone: function (e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
			if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		}, buildFragment: function (e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
			for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--)s = s.lastChild;
				if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
					o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
				}
				x.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild)s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
				i = 0;
				while (o = s[i++])kt.test(o.type || "") && n.push(o)
			}
			return s = null, f
		}, cleanData: function (e, t) {
			var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
			for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
				if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
				u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
			}
		}, _evalUrl: function (e) {
			return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
		}
	}), x.fn.extend({
		wrapAll: function (e) {
			if (x.isFunction(e))return this.each(function (t) {
				x(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		}, wrapInner: function (e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = x(this), n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		}, wrap: function (e) {
			var t = x.isFunction(e);
			return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		}, unwrap: function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, Kt = {letterSpacing: 0, fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e)return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
		while (i--)if (t = en[i] + n, t in e)return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [], a = 0, s = e.length;
		for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	x.fn.extend({
		css: function (e, n) {
			return x.access(this, function (e, n, r) {
				var i, o, a = {}, s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		}, show: function () {
			return rn(this, !0)
		}, hide: function () {
			return rn(this)
		}, toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0},
		cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n), u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
					u[n] = r
				} catch (c) {
				}
			}
		},
		css: function (e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function (t) {
		return e.getComputedStyle(t, null)
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function (e) {
		return e.currentStyle
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});
	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
		for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a, n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
		return n.remove(), r
	}

	x.each(["height", "width"], function (e, n) {
		x.cssHooks[n] = {
			get: function (e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			}, set: function (e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function (e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		}, set: function (e, t) {
			var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function (e, n) {
				return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
			x.cssHooks[n] = {
				get: function (e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	}), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
		x.cssHooks[e + t] = {
			expand: function (n) {
				var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function () {
			return x.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function (e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return {name: t.name, value: e.replace(fn, "\r\n")}
				}) : {name: t.name, value: n.replace(fn, "\r\n")}
			}).get()
		}
	}), x.param = function (e, n) {
		var r, i = [], o = function (e, t) {
			t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
			o(this.name, this.value)
		}); else for (r in e)gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};
	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t))x.each(t, function (t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		}); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
	}

	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}, bind: function (e, t, n) {
			return this.on(e, null, t, n)
		}, unbind: function (e, t) {
			return this.off(e, null, t)
		}, delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		}, undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];
	function Hn(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0, o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {}, a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function (e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}

		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}

	x.fn.load = function (e, n, r) {
		if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
		var i, o, a, s = this, l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function (e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function (e, t) {
				s.each(r, o || [e.responseText, t, e])
			}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {"*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
			contents: {xml: /xml/, html: /html/, json: /json/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function (e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
				readyState: 0,
				getResponseHeader: function (e) {
					var t;
					if (2 === b) {
						if (!c) {
							c = {};
							while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
						}
						t = c[e.toLowerCase()]
					}
					return null == t ? null : t
				},
				getAllResponseHeaders: function () {
					return 2 === b ? a : null
				},
				setRequestHeader: function (e, t) {
					var n = e.toLowerCase();
					return b || (e = v[n] = v[n] || e, y[e] = t), this
				},
				overrideMimeType: function (e) {
					return b || (p.mimeType = e), this
				},
				statusCode: function (e) {
					var t;
					if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
					return this
				},
				abort: function (e) {
					var t = e || w;
					return u && u.abort(t), k(0, t), this
				}
			};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
			w = "abort";
			for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(2 > b))throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");
			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}

			return C
		},
		getJSON: function (e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function (e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function (e, n) {
		x[n] = function (e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({url: e, type: n, dataType: o, data: r, success: i})
		}
	});
	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents, u = e.dataTypes;
		while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o)for (s in l)if (l[s] && l[s].test(o)) {
			u.unshift(s);
			break
		}
		if (u[0]in r)a = u[0]; else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function On(e, t, n, r) {
		var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
		if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
				a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0)if (a && e["throws"])t = a(t); else try {
				t = a(t)
			} catch (p) {
				return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
			}
		}
		return {state: "success", data: t}
	}

	x.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {
			"text script": function (e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function (t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				}, abort: function () {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
			s = arguments
		}, i.always(function () {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
			var e;
			for (e in Pn)Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {
		}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {
		}
	}

	x.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
		if (!n.crossDomain || x.support.cors) {
			var r;
			return {
				send: function (i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i)l.setRequestHeader(s, i[s])
					} catch (u) {
					}
					l.send(n.hasContent && n.data || null), r = function (e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
								p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
								try {
									c = l.statusText
								} catch (f) {
									c = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
							}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
				}, abort: function () {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
		"*": [function (e, t) {
			var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
			if (a && a[3] !== o) {
				o = o || a[3], i = i || [], a = +r || 1;
				do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
			}
			return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
		}]
	};

	function Kn() {
		return setTimeout(function () {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
		for (; a > o; o++)if (r = i[o].call(n, t, e))return r
	}

	function er(e, t, n) {
		var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
			delete l.elem
		}), l = function () {
			if (i)return !1;
			var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
			for (; l > a; a++)u.tweens[a].run(o);
			return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
		}, u = s.promise({
			elem: e,
			props: x.extend({}, t),
			opts: x.extend(!0, {specialEasing: {}}, n),
			originalProperties: t,
			originalOptions: n,
			startTime: Xn || Kn(),
			duration: n.duration,
			tweens: [],
			createTween: function (t, n) {
				var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
				return u.tweens.push(r), r
			},
			stop: function (t) {
				var n = 0, r = t ? u.tweens.length : 0;
				if (i)return this;
				for (i = !0; r > n; n++)u.tweens[n].run(1);
				return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
			}
		}), c = u.props;
		for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
			o = a.expand(o), delete e[r];
			for (n in o)n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}

	x.Animation = x.extend(er, {
		tweener: function (e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0, i = e.length;
			for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		}, prefilter: function (e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});
	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
			s.unqueued || l()
		}), s.unqueued++, u.always(function () {
			u.always(function () {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)if (i = t[r], Vn.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
			c[r] = d && d[r] || x.style(e, r)
		}
		if (!x.isEmptyObject(c)) {
			d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
				x(e).hide()
			}), u.done(function () {
				var t;
				x._removeData(e, "fxshow");
				for (t in c)x.style(e, t, c[t])
			});
			for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}

	x.Tween = rr, rr.prototype = {
		constructor: rr, init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		}, cur: function () {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		}, run: function (e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			}, set: function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];
		x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
		}, animate: function (e, t, n, r) {
			var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
				var t = er(this, x.extend({}, e), o);
				(i || x._data(this, "finish")) && t.stop(!0)
			};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		}, stop: function (e, n, r) {
			var i = function (e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
				var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
				if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		}, finish: function (e) {
			return e !== !1 && (e = e || "fx"), this.each(function () {
				var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});
	function ir(e, t) {
		var n, r = {height: e}, i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	x.each({slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function (e) {
			return e
		}, swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
		var e, n = x.timers, r = 0;
		for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function () {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function () {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function (e) {
		if (arguments.length)return e === t ? this : this.each(function (t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
		if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, x.offset = {
		setOffset: function (e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function () {
			if (this[0]) {
				var e, t, n = {top: 0, left: 0}, r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function (i) {
			return x.access(this, function (e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});
	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}

	x.each({Height: "height", Width: "width"}, function (e, n) {
		x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
			x.fn[i] = function (i, o) {
				var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function (n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function () {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
		return x
	}))
})(window);
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function (e, t, n) {
	function r(n) {
		var r = t.console;
		i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
	}

	function a(t, a, i, o) {
		if (Object.defineProperty)try {
			return Object.defineProperty(t, a, {
				configurable: !0, enumerable: !0, get: function () {
					return r(o), i
				}, set: function (e) {
					r(o), i = e
				}
			}), n
		} catch (s) {
		}
		e._definePropertyBroken = !0, t[a] = i
	}

	var i = {};
	e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
		i = {}, e.migrateWarnings.length = 0
	}, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
	var o = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function () {
			return null
		}, c = e.attrHooks.value && e.attrHooks.value.set || function () {
			return n
		}, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
	a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, i, u) {
		var c = a.toLowerCase(), g = t && t.nodeType;
		return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
			get: function (t, r) {
				var a, i = e.prop(t, r);
				return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
			}, set: function (t, n, r) {
				var a;
				return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
			}
		}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
	}, e.attrHooks.value = {
		get: function (e, t) {
			var n = (e.nodeName || "").toLowerCase();
			return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
		}, set: function (e, t) {
			var a = (e.nodeName || "").toLowerCase();
			return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
		}
	};
	var g, h, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
	e.fn.init = function (t, n, a) {
		var i;
		return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
	}, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
		return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
	}, e.uaMatch = function (e) {
		e = e.toLowerCase();
		var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
		return {browser: t[1] || "", version: t[2] || "0"}
	}, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
		function t(e, n) {
			return new t.fn.init(e, n)
		}

		e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) {
			return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
		}, t.fn.init.prototype = t.fn;
		var n = t(document);
		return r("jQuery.sub() is deprecated"), t
	}, e.ajaxSetup({converters: {"text json": e.parseJSON}});
	var b = e.fn.data;
	e.fn.data = function (t) {
		var a, i, o = this[0];
		return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
	};
	var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
	e.fn.andSelf = function () {
		return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
	}, e.clean || (e.clean = function (t, a, i, o) {
		a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
		var s, u, c, l, d = [];
		if (e.merge(d, e.buildFragment(t, a).childNodes), i)for (c = function (e) {
			return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
		}, s = 0; null != (u = d[s]); s++)e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
		return d
	});
	var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, T = e.fn.live, M = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C = RegExp("\\b(?:" + S + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) {
		return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
	};
	e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, i) {
		e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
	}, e.event.remove = function (e, t, n, r, a) {
		x.call(this, e, A(t) || "", n, r, a)
	}, e.fn.error = function () {
		var e = Array.prototype.slice.call(arguments, 0);
		return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
	}, e.fn.toggle = function (t, n) {
		if (!e.isFunction(t) || !e.isFunction(n))return N.apply(this, arguments);
		r("jQuery.fn.toggle(handler, handler...) is deprecated");
		var a = arguments, i = t.guid || e.guid++, o = 0, s = function (n) {
			var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
			return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
		};
		for (s.guid = i; a.length > o;)a[o++].guid = i;
		return this.click(s)
	}, e.fn.live = function (t, n, a) {
		return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
	}, e.fn.die = function (t, n) {
		return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
	}, e.event.trigger = function (e, t, n, a) {
		return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
	}, e.each(S.split("|"), function (t, n) {
		e.event.special[n] = {
			setup: function () {
				var t = this;
				return t !== document && (e.event.add(document, n + "." + e.guid, function () {
					e.event.trigger(n, null, t, !0)
				}), e._data(this, n, e.guid++)), !1
			}, teardown: function () {
				return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
			}
		}
	})
}(jQuery, window);
(function (e, t) {
	function a(t) {
		t.preventDefault(), e.event.remove(T, "click", a)
	}

	function n(e, t) {
		return (p ? t.originalEvent.touches[0] : t)["page" + e.toUpperCase()]
	}

	function r(t, n, r) {
		var o = e.Event(n, b);
		e.event.trigger(o, {originalEvent: t}, t.target), o.isDefaultPrevented() && (~n.indexOf("tap") && !p ? e.event.add(T, "click", a) : t.preventDefault()), r && (e.event.remove(T, y + "." + D, i), e.event.remove(T, x + "." + D, d))
	}

	function o(t) {
		var o = t.timeStamp || +new Date;
		v != o && (v = o, k.x = b.x = n("x", t), k.y = b.y = n("y", t), k.time = o, k.target = t.target, b.orientation = null, b.end = !1, u = !1, l = !1, c = setTimeout(function () {
			l = !0, r(t, "press")
		}, e.Finger.pressDuration), e.event.add(T, y + "." + D, i), e.event.add(T, x + "." + D, d), w.preventDefault && (t.preventDefault(), e.event.add(T, "click", a)))
	}

	function i(t) {
		if (b.x = n("x", t), b.y = n("y", t), b.dx = b.x - k.x, b.dy = b.y - k.y, b.adx = Math.abs(b.dx), b.ady = Math.abs(b.dy), u = b.adx > w.motionThreshold || b.ady > w.motionThreshold) {
			for (clearTimeout(c), b.orientation || (b.adx > b.ady ? (b.orientation = "horizontal", b.direction = b.dx > 0 ? 1 : -1) : (b.orientation = "vertical", b.direction = b.dy > 0 ? 1 : -1)); t.target && t.target !== k.target;)t.target = t.target.parentNode;
			return t.target !== k.target ? (t.target = k.target, d.call(this, e.Event(x + "." + D, t)), void 0) : (r(t, "drag"), void 0)
		}
	}

	function d(e) {
		var t, a = e.timeStamp || +new Date, n = a - k.time;
		if (clearTimeout(c), u || l || e.target !== k.target)e.target = k.target, w.flickDuration > n && r(e, "flick"), b.end = !0, t = "drag"; else {
			var o = g === e.target && w.doubleTapInterval > a - s;
			t = o ? "doubletap" : "tap", g = o ? null : k.target, s = a
		}
		r(e, t, !0)
	}

	var u, l, v, c, g, s, m = /chrome/i.exec(t), f = /android/i.exec(t), p = "ontouchstart"in window && !(m && !f), h = p ? "touchstart" : "mousedown", x = p ? "touchend touchcancel" : "mouseup mouseleave", y = p ? "touchmove" : "mousemove", D = "finger", T = e("html")[0], k = {}, b = {}, w = e.Finger = {
		pressDuration: 300,
		doubleTapInterval: 300,
		flickDuration: 150,
		motionThreshold: 5
	};
	e.event.add(T, h + "." + D, o)
})(jQuery, navigator.userAgent);
;
window.Modernizr = function (a, b, c) {
	function y(a) {
		j.cssText = a
	}

	function z(a, b) {
		return y(m.join(a + ";") + (b || ""))
	}

	function A(a, b) {
		return typeof a === b
	}

	function B(a, b) {
		return !!~("" + a).indexOf(b)
	}

	function C(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!B(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
		}
		return !1
	}

	function D(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c)return d === !1 ? a[e] : A(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}

	function E(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
		return A(b, "string") || A(b, "undefined") ? C(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), D(e, b, c))
	}

	var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = {}.hasOwnProperty, x;
	!A(w, "undefined") && !A(w.call, "undefined") ? x = function (a, b) {
		return w.call(a, b)
	} : x = function (a, b) {
		return b in a && A(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function (b) {
		var c = this;
		if (typeof c != "function")throw new TypeError;
		var d = u.call(arguments, 1), e = function () {
			if (this instanceof e) {
				var a = function () {
				};
				a.prototype = c.prototype;
				var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
				return Object(g) === g ? g : f
			}
			return c.apply(b, d.concat(u.call(arguments)))
		};
		return e
	}), q.flexbox = function () {
		return E("flexWrap")
	}, q.flexboxlegacy = function () {
		return E("boxDirection")
	}, q.canvas = function () {
		var a = b.createElement("canvas");
		return !!a.getContext && !!a.getContext("2d")
	}, q.canvastext = function () {
		return !!e.canvas && !!A(b.createElement("canvas").getContext("2d").fillText, "function")
	}, q.csscolumns = function () {
		return E("columnCount")
	};
	for (var F in q)x(q, F) && (v = F.toLowerCase(), e[v] = q[F](), t.push((e[v] ? "" : "no-") + v));
	return e.addTest = function (a, b) {
		if (typeof a == "object")for (var d in a)x(a, d) && e.addTest(d, a[d]); else {
			a = a.toLowerCase();
			if (e[a] !== c)return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, y(""), i = k = null, function (a, b) {
		function l(a, b) {
			var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
			return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
		}

		function m() {
			var a = s.elements;
			return typeof a == "string" ? a.split(" ") : a
		}

		function n(a) {
			var b = j[a[h]];
			return b || (b = {}, i++, a[h] = i, j[i] = b), b
		}

		function o(a, c, d) {
			c || (c = b);
			if (k)return c.createElement(a);
			d || (d = n(c));
			var g;
			return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
		}

		function p(a, c) {
			a || (a = b);
			if (k)return a.createDocumentFragment();
			c = c || n(a);
			var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
			for (; e < g; e++)d.createElement(f[e]);
			return d
		}

		function q(a, b) {
			b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
				return s.shivMethods ? o(c, a, b) : b.createElem(c)
			}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
					return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
				}) + ");return n}")(s, b.frag)
		}

		function r(a) {
			a || (a = b);
			var c = n(a);
			return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
		}

		var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
		(function () {
			try {
				var a = b.createElement("a");
				a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function () {
						b.createElement("a");
						var a = b.createDocumentFragment();
						return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
					}()
			} catch (c) {
				g = !0, k = !0
			}
		})();
		var s = {
			elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
			version: c,
			shivCSS: d.shivCSS !== !1,
			supportsUnknownElements: k,
			shivMethods: d.shivMethods !== !1,
			type: "default",
			shivDocument: r,
			createElement: o,
			createDocumentFragment: p
		};
		a.html5 = s, r(b)
	}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
		return C([a])
	}, e.testAllProps = E, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
	function d(a) {
		return "[object Function]" == o.call(a)
	}

	function e(a) {
		return "string" == typeof a
	}

	function f() {
	}

	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}

	function h() {
		var a = p.shift();
		q = 1, a ? a.t ? m(function () {
			("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : q = 0
	}

	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && m(function () {
					t.removeChild(l)
				}, 50);
				for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		}

		var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
		1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
			k.call(this, r)
		}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	}

	function j(a, b, c, d, f) {
		return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	}

	function k() {
		var a = B;
		return a.loader = {load: j, i: 0}, a
	}

	var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
			return "[object Array]" == o.call(a)
		}, x = [], y = {}, z = {
		timeout: function (a, b) {
			return b.length && (a.timeout = b[0]), a
		}
	}, A, B;
	B = function (a) {
		function b(a) {
			var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f, g;
			for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
			for (f = 0; f < b; f++)c = x[f](c);
			return c
		}

		function g(a, e, f, g, h) {
			var i = b(a), j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
			})))
		}

		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a))c || (j = function () {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					}), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
						var b = 0, c;
						for (c in a)a.hasOwnProperty(c) && b++;
						return b
					}(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					} : j[n] = function (a) {
						return function () {
							var b = [].slice.call(arguments);
							a && a.apply(this, b), l()
						}
					}(k[n])), g(a[n], j, b, n, h))
				} else!c && l()
			}

			var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
			c(h ? a.yep : a.nope, !!i), i && c(i)
		}

		var i, j, l = this.yepnope.loader;
		if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
	}, B.addPrefix = function (a, b) {
		z[a] = b
	}, B.addFilter = function (a) {
		x.push(a)
	}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
		var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
		k.src = a;
		for (o in d)k.setAttribute(o, d[o]);
		c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
			!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
		}, m(function () {
			l || (l = 1, c(1))
		}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
		var e = b.createElement("link"), j, c = i ? h : c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d)e.setAttribute(j, d[j]);
		g || (n.parentNode.insertBefore(e, n), m(c, 0))
	}
}(this, document), Modernizr.load = function () {
	yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("csscalc", function () {
	var a = "width:", b = "calc(10px);", c = document.createElement("div");
	return c.style.cssText = a + Modernizr._prefixes.join(b + a), !!c.style.length
});
(function (b) {
	function d(a) {
		this.input = a;
		a.attr("type") == "password" && this.handlePassword();
		b(a[0].form).submit(function () {
			if (a.hasClass("placeholder") && a[0].value == a.attr("placeholder"))a[0].value = ""
		})
	}

	d.prototype = {
		show: function (a) {
			if (this.input[0].value === "" || a && this.valueIsPlaceholder()) {
				if (this.isPassword)try {
					this.input[0].setAttribute("type", "text")
				} catch (b) {
					this.input.before(this.fakePassword.show()).hide()
				}
				this.input.addClass("placeholder");
				this.input[0].value = this.input.attr("placeholder")
			}
		}, hide: function () {
			if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
				try {
					this.input[0].setAttribute("type", "password")
				} catch (a) {
				}
				this.input.show();
				this.input[0].focus()
			}
		}, valueIsPlaceholder: function () {
			return this.input[0].value == this.input.attr("placeholder")
		}, handlePassword: function () {
			var a = this.input;
			a.attr("realType", "password");
			this.isPassword = !0;
			if (b.browser.msie && a[0].outerHTML) {
				var c = b(a[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
				this.fakePassword = c.val(a.attr("placeholder")).addClass("placeholder").focus(function () {
					a.trigger("focus");
					b(this).hide()
				});
				b(a[0].form).submit(function () {
					c.remove();
					a.show()
				})
			}
		}
	};
	var e = !!("placeholder"in document.createElement("input"));
	b.fn.placeholder = function () {
		return e ? this : this.each(function () {
			var a = b(this), c = new d(a);
			c.show(!0);
			a.focus(function () {
				c.hide()
			});
			a.blur(function () {
				c.show(!1)
			});
			b.browser.msie && (b(window).load(function () {
				a.val() && a.removeClass("placeholder");
				c.show(!0)
			}), a.focus(function () {
				if (this.value == "") {
					var a = this.createTextRange();
					a.collapse(!0);
					a.moveStart("character", 0);
					a.select()
				}
			}))
		})
	}
})(jQuery);
(function (a) {
	var b = {
		vertical: !1,
		rtl: !1,
		start: 1,
		offset: 1,
		size: null,
		scroll: 3,
		visible: null,
		animation: "normal",
		easing: "swing",
		auto: 0,
		wrap: null,
		initCallback: null,
		setupCallback: null,
		reloadCallback: null,
		itemLoadCallback: null,
		itemFirstInCallback: null,
		itemFirstOutCallback: null,
		itemLastInCallback: null,
		itemLastOutCallback: null,
		itemVisibleInCallback: null,
		itemVisibleOutCallback: null,
		animationStepCallback: null,
		buttonNextHTML: "<div></div>",
		buttonPrevHTML: "<div></div>",
		buttonNextEvent: "click",
		buttonPrevEvent: "click",
		buttonNextCallback: null,
		buttonPrevCallback: null,
		itemFallbackDimension: null
	}, c = !1;
	a(window).bind("load.jcarousel", function () {
		c = !0
	}), a.jcarousel = function (e, f) {
		this.options = a.extend({}, b, f || {}), this.locked = !1, this.autoStopped = !1, this.container = null, this.clip = null, this.list = null, this.buttonNext = null, this.buttonPrev = null, this.buttonNextState = null, this.buttonPrevState = null, f && void 0 !== f.rtl || (this.options.rtl = "rtl" == (a(e).attr("dir") || a("html").attr("dir") || "").toLowerCase()), this.wh = this.options.vertical ? "height" : "width", this.lt = this.options.vertical ? "top" : this.options.rtl ? "right" : "left";
		for (var g = "", h = e.className.split(" "), i = 0; h.length > i; i++)if (-1 != h[i].indexOf("jcarousel-skin")) {
			a(e).removeClass(h[i]), g = h[i];
			break
		}
		"UL" == e.nodeName.toUpperCase() || "OL" == e.nodeName.toUpperCase() ? (this.list = a(e), this.clip = this.list.parents(".jcarousel-clip"), this.container = this.list.parents(".jcarousel-container")) : (this.container = a(e), this.list = this.container.find("ul,ol").eq(0), this.clip = this.container.find(".jcarousel-clip")), 0 === this.clip.size() && (this.clip = this.list.wrap("<div></div>").parent()), 0 === this.container.size() && (this.container = this.clip.wrap("<div></div>").parent()), "" !== g && -1 == this.container.parent()[0].className.indexOf("jcarousel-skin") && this.container.wrap('<div class=" ' + g + '"></div>'), this.buttonPrev = a(".jcarousel-prev", this.container), 0 === this.buttonPrev.size() && null !== this.options.buttonPrevHTML && (this.buttonPrev = a(this.options.buttonPrevHTML).appendTo(this.container)), this.buttonPrev.addClass(this.className("jcarousel-prev")), this.buttonNext = a(".jcarousel-next", this.container), 0 === this.buttonNext.size() && null !== this.options.buttonNextHTML && (this.buttonNext = a(this.options.buttonNextHTML).appendTo(this.container)), this.buttonNext.addClass(this.className("jcarousel-next")), this.clip.addClass(this.className("jcarousel-clip")).css({position: "relative"}), this.list.addClass(this.className("jcarousel-list")).css({
			overflow: "hidden",
			position: "relative",
			top: 0,
			margin: 0,
			padding: 0
		}).css(this.options.rtl ? "right" : "left", 0), this.container.addClass(this.className("jcarousel-container")).css({position: "relative"}), !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
		var j = null !== this.options.visible ? Math.ceil(this.clipping() / this.options.visible) : null, k = this.list.children("li"), l = this;
		if (k.size() > 0) {
			var m = 0, n = this.options.offset;
			k.each(function () {
				l.format(this, n++), m += l.dimension(this, j)
			}), this.list.css(this.wh, m + 100 + "px"), f && void 0 !== f.size || (this.options.size = k.size())
		}
		this.container.css("display", "block"), this.buttonNext.css("display", "block"), this.buttonPrev.css("display", "block"), this.funcNext = function () {
			return l.next(), !1
		}, this.funcPrev = function () {
			return l.prev(), !1
		}, this.funcResize = function () {
			l.resizeTimer && clearTimeout(l.resizeTimer), l.resizeTimer = setTimeout(function () {
				l.reload()
			}, 100)
		}, null !== this.options.initCallback && this.options.initCallback(this, "init"), !c && d.isSafari() ? (this.buttons(!1, !1), a(window).bind("load.jcarousel", function () {
			l.setup()
		})) : this.setup()
	};
	var d = a.jcarousel;
	d.fn = d.prototype = {jcarousel: "0.2.9"}, d.fn.extend = d.extend = a.extend, d.fn.extend({
		setup: function () {
			if (this.first = null, this.last = null, this.prevFirst = null, this.prevLast = null, this.animating = !1, this.timer = null, this.resizeTimer = null, this.tail = null, this.inTail = !1, !this.locked) {
				this.list.css(this.lt, this.pos(this.options.offset) + "px");
				var b = this.pos(this.options.start, !0);
				this.prevFirst = this.prevLast = null, this.animate(b, !1), a(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize), null !== this.options.setupCallback && this.options.setupCallback(this)
			}
		}, reset: function () {
			this.list.empty(), this.list.css(this.lt, "0px"), this.list.css(this.wh, "10px"), null !== this.options.initCallback && this.options.initCallback(this, "reset"), this.setup()
		}, reload: function () {
			if (null !== this.tail && this.inTail && this.list.css(this.lt, d.intval(this.list.css(this.lt)) + this.tail), this.tail = null, this.inTail = !1, null !== this.options.reloadCallback && this.options.reloadCallback(this), null !== this.options.visible) {
				var a = this, b = Math.ceil(this.clipping() / this.options.visible), c = 0, e = 0;
				this.list.children("li").each(function (d) {
					c += a.dimension(this, b), a.first > d + 1 && (e = c)
				}), this.list.css(this.wh, c + "px"), this.list.css(this.lt, -e + "px")
			}
			this.scroll(this.first, !1)
		}, lock: function () {
			this.locked = !0, this.buttons()
		}, unlock: function () {
			this.locked = !1, this.buttons()
		}, size: function (a) {
			return void 0 !== a && (this.options.size = a, this.locked || this.buttons()), this.options.size
		}, has: function (a, b) {
			void 0 !== b && b || (b = a), null !== this.options.size && b > this.options.size && (b = this.options.size);
			for (var c = a; b >= c; c++) {
				var d = this.get(c);
				if (!d.length || d.hasClass("jcarousel-item-placeholder"))return !1
			}
			return !0
		}, get: function (b) {
			return a(">.jcarousel-item-" + b, this.list)
		}, add: function (b, c) {
			var e = this.get(b), f = 0, g = a(c);
			if (0 === e.length) {
				var h, i = d.intval(b);
				for (e = this.create(b); ;)if (h = this.get(--i), 0 >= i || h.length) {
					0 >= i ? this.list.prepend(e) : h.after(e);
					break
				}
			} else f = this.dimension(e);
			"LI" == g.get(0).nodeName.toUpperCase() ? (e.replaceWith(g), e = g) : e.empty().append(c), this.format(e.removeClass(this.className("jcarousel-item-placeholder")), b);
			var j = null !== this.options.visible ? Math.ceil(this.clipping() / this.options.visible) : null, k = this.dimension(e, j) - f;
			return b > 0 && this.first > b && this.list.css(this.lt, d.intval(this.list.css(this.lt)) - k + "px"), this.list.css(this.wh, d.intval(this.list.css(this.wh)) + k + "px"), e
		}, remove: function (a) {
			var b = this.get(a);
			if (b.length && !(a >= this.first && this.last >= a)) {
				var c = this.dimension(b);
				this.first > a && this.list.css(this.lt, d.intval(this.list.css(this.lt)) + c + "px"), b.remove(), this.list.css(this.wh, d.intval(this.list.css(this.wh)) - c + "px")
			}
		}, next: function () {
			null === this.tail || this.inTail ? this.scroll("both" != this.options.wrap && "last" != this.options.wrap || null === this.options.size || this.last != this.options.size ? this.first + this.options.scroll : 1) : this.scrollTail(!1)
		}, prev: function () {
			null !== this.tail && this.inTail ? this.scrollTail(!0) : this.scroll("both" != this.options.wrap && "first" != this.options.wrap || null === this.options.size || 1 != this.first ? this.first - this.options.scroll : this.options.size)
		}, scrollTail: function (a) {
			if (!this.locked && !this.animating && this.tail) {
				this.pauseAuto();
				var b = d.intval(this.list.css(this.lt));
				b = a ? b + this.tail : b - this.tail, this.inTail = !a, this.prevFirst = this.first, this.prevLast = this.last, this.animate(b)
			}
		}, scroll: function (a, b) {
			this.locked || this.animating || (this.pauseAuto(), this.animate(this.pos(a), b))
		}, pos: function (a, b) {
			var c = d.intval(this.list.css(this.lt));
			if (this.locked || this.animating)return c;
			"circular" != this.options.wrap && (a = 1 > a ? 1 : this.options.size && a > this.options.size ? this.options.size : a);
			for (var m, e = this.first > a, f = "circular" != this.options.wrap && 1 >= this.first ? 1 : this.first, g = e ? this.get(f) : this.get(this.last), h = e ? f : f - 1, i = null, j = 0, k = !1, l = 0; e ? --h >= a : a > ++h;)i = this.get(h), k = !i.length, 0 === i.length && (i = this.create(h).addClass(this.className("jcarousel-item-placeholder")), g[e ? "before" : "after"](i), null !== this.first && "circular" == this.options.wrap && null !== this.options.size && (0 >= h || h > this.options.size) && (m = this.get(this.index(h)), m.length && (i = this.add(h, m.clone(!0))))), g = i, l = this.dimension(i), k && (j += l), null !== this.first && ("circular" == this.options.wrap || h >= 1 && (null === this.options.size || this.options.size >= h)) && (c = e ? c + l : c - l);
			var n = this.clipping(), o = [], p = 0, q = 0;
			for (g = this.get(a - 1), h = a; ++p;) {
				if (i = this.get(h), k = !i.length, 0 === i.length && (i = this.create(h).addClass(this.className("jcarousel-item-placeholder")), 0 === g.length ? this.list.prepend(i) : g[e ? "before" : "after"](i), null !== this.first && "circular" == this.options.wrap && null !== this.options.size && (0 >= h || h > this.options.size) && (m = this.get(this.index(h)), m.length && (i = this.add(h, m.clone(!0))))), g = i, l = this.dimension(i), 0 === l)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
				if ("circular" != this.options.wrap && null !== this.options.size && h > this.options.size ? o.push(i) : k && (j += l), q += l, q >= n)break;
				h++
			}
			for (var r = 0; o.length > r; r++)o[r].remove();
			j > 0 && (this.list.css(this.wh, this.dimension(this.list) + j + "px"), e && (c -= j, this.list.css(this.lt, d.intval(this.list.css(this.lt)) - j + "px")));
			var s = a + p - 1;
			if ("circular" != this.options.wrap && this.options.size && s > this.options.size && (s = this.options.size), h > s)for (p = 0, h = s, q = 0; ++p && (i = this.get(h--), i.length) && (q += this.dimension(i), !(q >= n)););
			var t = s - p + 1;
			if ("circular" != this.options.wrap && 1 > t && (t = 1), this.inTail && e && (c += this.tail, this.inTail = !1), this.tail = null, "circular" != this.options.wrap && s == this.options.size && s - p + 1 >= 1) {
				var u = d.intval(this.get(s).css(this.options.vertical ? "marginBottom" : "marginRight"));
				q - u > n && (this.tail = q - n - u)
			}
			for (b && a === this.options.size && this.tail && (c -= this.tail, this.inTail = !0); a-- > t;)c += this.dimension(this.get(a));
			return this.prevFirst = this.first, this.prevLast = this.last, this.first = t, this.last = s, c
		}, animate: function (b, c) {
			if (!this.locked && !this.animating) {
				this.animating = !0;
				var d = this, e = function () {
					if (d.animating = !1, 0 === b && d.list.css(d.lt, 0), !d.autoStopped && ("circular" == d.options.wrap || "both" == d.options.wrap || "last" == d.options.wrap || null === d.options.size || d.last < d.options.size || d.last == d.options.size && null !== d.tail && !d.inTail) && d.startAuto(), d.buttons(), d.notify("onAfterAnimation"), "circular" == d.options.wrap && null !== d.options.size)for (var a = d.prevFirst; d.prevLast >= a; a++)null === a || a >= d.first && d.last >= a || !(1 > a || a > d.options.size) || d.remove(a)
				};
				if (this.notify("onBeforeAnimation"), this.options.animation && c !== !1) {
					var f = this.options.vertical ? {top: b} : this.options.rtl ? {right: b} : {left: b}, g = {duration: this.options.animation, easing: this.options.easing, complete: e};
					a.isFunction(this.options.animationStepCallback) && (g.step = this.options.animationStepCallback), this.list.animate(f, g)
				} else this.list.css(this.lt, b + "px"), e()
			}
		}, startAuto: function (a) {
			if (void 0 !== a && (this.options.auto = a), 0 === this.options.auto)return this.stopAuto();
			if (null === this.timer) {
				this.autoStopped = !1;
				var b = this;
				this.timer = window.setTimeout(function () {
					b.next()
				}, 1e3 * this.options.auto)
			}
		}, stopAuto: function () {
			this.pauseAuto(), this.autoStopped = !0
		}, pauseAuto: function () {
			null !== this.timer && (window.clearTimeout(this.timer), this.timer = null)
		}, buttons: function (a, b) {
			null == a && (a = !this.locked && 0 !== this.options.size && (this.options.wrap && "first" != this.options.wrap || null === this.options.size || this.last < this.options.size), this.locked || this.options.wrap && "first" != this.options.wrap || null === this.options.size || !(this.last >= this.options.size) || (a = null !== this.tail && !this.inTail)), null == b && (b = !this.locked && 0 !== this.options.size && (this.options.wrap && "last" != this.options.wrap || this.first > 1), this.locked || this.options.wrap && "last" != this.options.wrap || null === this.options.size || 1 != this.first || (b = null !== this.tail && this.inTail));
			var c = this;
			this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), a && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), this.buttonNext[a ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", a ? !1 : !0), null !== this.options.buttonNextCallback && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function () {
				c.options.buttonNextCallback(c, this, a)
			}).data("jcarouselstate", a)) : null !== this.options.buttonNextCallback && this.buttonNextState != a && this.options.buttonNextCallback(c, null, a), this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), b && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), this.buttonPrev[b ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", b ? !1 : !0), null !== this.options.buttonPrevCallback && this.buttonPrev.data("jcarouselstate") != b && this.buttonPrev.each(function () {
				c.options.buttonPrevCallback(c, this, b)
			}).data("jcarouselstate", b)) : null !== this.options.buttonPrevCallback && this.buttonPrevState != b && this.options.buttonPrevCallback(c, null, b), this.buttonNextState = a, this.buttonPrevState = b
		}, notify: function (a) {
			var b = null === this.prevFirst ? "init" : this.prevFirst < this.first ? "next" : "prev";
			this.callback("itemLoadCallback", a, b), this.prevFirst !== this.first && (this.callback("itemFirstInCallback", a, b, this.first), this.callback("itemFirstOutCallback", a, b, this.prevFirst)), this.prevLast !== this.last && (this.callback("itemLastInCallback", a, b, this.last), this.callback("itemLastOutCallback", a, b, this.prevLast)), this.callback("itemVisibleInCallback", a, b, this.first, this.last, this.prevFirst, this.prevLast), this.callback("itemVisibleOutCallback", a, b, this.prevFirst, this.prevLast, this.first, this.last)
		}, callback: function (b, c, d, e, f, g, h) {
			if (null != this.options[b] && ("object" == typeof this.options[b] || "onAfterAnimation" == c)) {
				var i = "object" == typeof this.options[b] ? this.options[b][c] : this.options[b];
				if (a.isFunction(i)) {
					var j = this;
					if (void 0 === e)i(j, d, c); else if (void 0 === f)this.get(e).each(function () {
						i(j, this, e, d, c)
					}); else for (var k = function (a) {
						j.get(a).each(function () {
							i(j, this, a, d, c)
						})
					}, l = e; f >= l; l++)null === l || l >= g && h >= l || k(l)
				}
			}
		}, create: function (a) {
			return this.format("<li></li>", a)
		}, format: function (b, c) {
			b = a(b);
			for (var d = b.get(0).className.split(" "), e = 0; d.length > e; e++)-1 != d[e].indexOf("jcarousel-") && b.removeClass(d[e]);
			return b.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + c)).css({"float": this.options.rtl ? "right" : "left", "list-style": "none"}).attr("jcarouselindex", c), b
		}, className: function (a) {
			return a + " " + a + (this.options.vertical ? "-vertical" : "-horizontal")
		}, dimension: function (b, c) {
			var e = a(b);
			if (null == c)return this.options.vertical ? e.innerHeight() + d.intval(e.css("margin-top")) + d.intval(e.css("margin-bottom")) + d.intval(e.css("border-top-width")) + d.intval(e.css("border-bottom-width")) || d.intval(this.options.itemFallbackDimension) : e.innerWidth() + d.intval(e.css("margin-left")) + d.intval(e.css("margin-right")) + d.intval(e.css("border-left-width")) + d.intval(e.css("border-right-width")) || d.intval(this.options.itemFallbackDimension);
			var f = this.options.vertical ? c - d.intval(e.css("marginTop")) - d.intval(e.css("marginBottom")) : c - d.intval(e.css("marginLeft")) - d.intval(e.css("marginRight"));
			return a(e).css(this.wh, f + "px"), this.dimension(e)
		}, clipping: function () {
			return this.options.vertical ? this.clip[0].offsetHeight - d.intval(this.clip.css("borderTopWidth")) - d.intval(this.clip.css("borderBottomWidth")) : this.clip[0].offsetWidth - d.intval(this.clip.css("borderLeftWidth")) - d.intval(this.clip.css("borderRightWidth"))
		}, index: function (a, b) {
			return null == b && (b = this.options.size), Math.round(((a - 1) / b - Math.floor((a - 1) / b)) * b) + 1
		}
	}), d.extend({
		defaults: function (c) {
			return a.extend(b, c || {})
		}, intval: function (a) {
			return a = parseInt(a, 10), isNaN(a) ? 0 : a
		}, windowLoaded: function () {
			c = !0
		}, isSafari: function () {
			var a = navigator.userAgent.toLowerCase(), b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || [], c = b[1] || "";
			return "webkit" === c
		}
	}), a.fn.jcarousel = function (b) {
		if ("string" == typeof b) {
			var c = a(this).data("jcarousel"), e = Array.prototype.slice.call(arguments, 1);
			return c[b].apply(c, e)
		}
		return this.each(function () {
			var c = a(this).data("jcarousel");
			c ? (b && a.extend(c.options, b), c.reload()) : a(this).data("jcarousel", new d(this, b))
		})
	}
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var isRetina = (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches));
		var menu = $('.tp-sub-menu'), offset = menu.outerHeight(), menuItems = $('.tp-sub-menu a[href^=#]:not(".trial")'), menuContainer = menu.parent();
		menuItems.mouseup(function () {
			slideTo($(this).attr('href'));
		}).click(function (event) {
			event.preventDefault();
		});
		var points = [];
		$(window).load(function () {
			function createCaption(cssClass, item) {
				item = $(item);
				return $('<p />').addClass(cssClass).text(item.data('title')).append($('<span />').html(item.data('description')));
			}

			$('[data-slider]').each(function () {
				var items = $(this).find('[data-slide]');
				if (items.size() < 4) {
					$(this).append(items.clone());
					var items = $(this).find('[data-slide]');
				}
				var count = items.size();
				items.each(function (index, element) {
					var item = $(element);
					item.addClass('slide-cont').append($('<img />').attr({
						'src': item.data('slide'),
						'alt': ''
					})).append(createCaption('left', items[index == 0 ? count - 1 : index - 1])).append(createCaption('current', item)).append(createCaption('right', items[(index + 1) % count]));
				});
			});
			$('[data-src]').each(function () {
				var image = $(this);
				image.attr('src', image.data('src'));
			});
			determineMenuPosition();
			menuItems.each(function (index, item) {
				var item = $(item), target = item.attr('href'), scrollAmount = calculateScrollAmount(target);
				if (index == menuItems.length - 1) {
					scrollAmount -= 120;
				}
				points.push({offset: scrollAmount, element: item, target: target});
			});
			determineActiveItem();
		});
		$(document).scroll(function () {
			determineMenuPosition();
			determineActiveItem();
		});
		function calculateScrollAmount(element) {
			var visibleMenu = $('.tp-sub-menu').css('display') == 'none' ? false : true;
			var menuHeight = visibleMenu ? 50 : 0;
			return Math.floor($(element).offset().top - menuHeight);
		}

		function isMenuFixedOnTop() {
			return menuContainer.hasClass('header-fixed');
		}

		function determineMenuPosition() {
			var viz = $('#visualizations');
			if (viz.size() === 0) {
				return;
			}
			var vizTop = viz.offset().top, vizOffset = viz.outerHeight();
			var docViewTop = $(window).scrollTop(), displayHeaderAsFixed = docViewTop > vizTop + vizOffset - offset;
			if (displayHeaderAsFixed) {
				if (!isMenuFixedOnTop()) {
					menuContainer.addClass('header-fixed');
					menu.css('opacity', '0').animate({opacity: 1}, 500);
				}
			} else {
				menuContainer.removeClass('header-fixed');
			}
			return displayHeaderAsFixed;
		}

		function determineActiveItem() {
			menuItems.removeClass('active');
			var scrollTop = $(document).scrollTop();
			for (var i = 0; i < points.length; i++) {
				if (scrollTop >= points[i].offset) {
					if (i + 1 == points.length || scrollTop < points[i + 1].offset) {
						points[i].element.addClass('active');
						break;
					}
				}
			}
		}

		function slideTo(href, pushToHistory) {
			if (!href) {
				return;
			}
			if (typeof pushToHistory === 'undefined') {
				pushToHistory = true;
			}
			console.log()
			$('body, html').animate({scrollTop: calculateScrollAmount($(href)) + ($(href).data('adjustment') || 0)}, "slow");
			if (pushToHistory && history) {
				history.pushState(href, 'state', null);
			}
		}

		$('.tp-concept-features a[href^=#]').mouseup(function () {
			slideTo($(this).attr('href'));
		}).click(function (event) {
			event.preventDefault();
		});
		window.onpopstate = function (event) {
			window.scrollTo(0, 0);
			slideTo(event.state, false);
		}
	});
})(jQuery);
(function ($) {
	var isPointInInterval = function (intervalStart, intervalEnd, point) {
		return ((point >= intervalStart) && (point <= intervalEnd));
	};
	var isElementInVieport = function (el) {
		if (!el) {
			return false;
		}
		var viewportWidth = document.documentElement.clientWidth;
		var viewportHeight = document.documentElement.clientHeight;
		var elementRect = el.getBoundingClientRect();
		var isInX = isPointInInterval(0, viewportWidth - 1, elementRect.left) && isPointInInterval(0, viewportWidth - 1, elementRect.right);
		var isInY = isPointInInterval(0, viewportHeight - 1, elementRect.top) && isPointInInterval(0, viewportHeight - 1, elementRect.bottom);
		return (isInX && isInY);
	};
	var expandConceptFeatures = function (conceptFeaturesElement) {
		if (isElementInVieport(conceptFeaturesElement[0])) {
			conceptFeaturesElement.addClass('expanded');
			$(window).off('load resize scroll', expandConceptFeatures);
		}
	};
	var hideHelperIcon = function (conceptFeaturesElement) {
		if (isElementInVieport(conceptFeaturesElement[0])) {
			conceptFeaturesElement.addClass('expanded');
			$(window).off('load resize scroll', hideHelperIcon);
		}
	};
	$(function () {
		$(window).on('load resize scroll', $.proxy(hideHelperIcon, null, $('.helper', '.many-boards')));
	});
	$(function () {
		var bProductSlider = $('[data-slick-slider]');
		if (!bProductSlider.length || !$.fn.slick)return false;
		bProductSlider.each(function () {
			var _this = $(this);
			var carousel = _this.find('.slider-list');
			carousel.slick({
				centerMode: true, slidesToScroll: 1, variableWidth: true, centerPadding: '60px', dots: true, appendDots: _this.find('.slider-pager'), customPaging: function (slider, i) {
					var title = $(slider.$slides[i]).data('title');
					var name = $(slider.$slides[i]).data('name') ? $(slider.$slides[i]).data('name') : '';
					return '<a href="" data-name="' + name + '">' + title + '</a>';
				}, appendArrows: _this.find('.controls'), prevArrow: '<div class="prev"><a class="bx-prev" href=""> </a></div>', nextArrow: '<div class="next"><a class="bx-next" href=""> </a></div>'
			});
			carousel.on('click', '.left', function () {
				carousel.slick('slickPrev');
			});
			carousel.on('click', '.right', function () {
				carousel.slick('slickNext');
			});
		});
		function createCaption(cssClass, item) {
			item = $(item);
			return $('<p />').addClass(cssClass).text(item.data('title')).append($('<span />').html(item.data('description')));
		}

		$('[data-slider-with-caps]').each(function () {
			var items = $(this).find('.slider-item');
			var count = items.size();
			items.each(function (index, element) {
				var item = $(element);
				item.append(createCaption('left', items[index == 0 ? count - 1 : index - 1])).append(createCaption('current', item)).append(createCaption('right', items[(index + 1) % count]));
			});
		});
	});
})(jQuery);
$(window).load(function () {
	var bProductSlider = $('[data-slick-slider]');
	bProductSlider.each(function () {
		var _this = $(this);
		var slideHeight = _this.find('.slider-item').height() / 2;
		_this.find('.controls .next').css({'top': slideHeight + 'px'});
		_this.find('.controls .prev').css({'top': slideHeight + 'px'});
	});
});
(function ($) {
	$(document).ready(function () {
	});
})(jQuery);
(function (r, G, f, v) {
	var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function () {
		b.open.apply(this, arguments)
	}, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) {
		return a && a.hasOwnProperty && a instanceof f
	}, q = function (a) {
		return a && "string" === f.type(a)
	}, E = function (a) {
		return q(a) && 0 < a.indexOf("%")
	}, l = function (a, d) {
		var e = parseInt(a, 10) || 0;
		d && E(a) && (e *= b.getViewport()[d] / 100);
		return Math.ceil(e)
	}, w = function (a, b) {
		return l(a, b) + "px"
	};
	f.extend(b, {
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
			autoCenter: !s,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: 0.5,
			leftRatio: 0.5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3E3,
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
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
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
			onCancel: f.noop,
			beforeLoad: f.noop,
			afterLoad: f.noop,
			beforeShow: f.noop,
			afterShow: f.noop,
			beforeChange: f.noop,
			beforeClose: f.noop,
			afterClose: f.noop
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
		open: function (a, d) {
			if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
				var k = {}, g, h, j, m, l;
				"object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
					href: c.data("fancybox-href") || c.attr("href"),
					title: c.data("fancybox-title") || c.attr("title"),
					isDom: !0,
					element: c
				}, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
				g = d.href || k.href || (q(c) ? c : null);
				h = d.title !== v ? d.title : k.title || "";
				m = (j = d.content || k.content) ? "html" : d.type || k.type;
				!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
				q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
				j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
				f.extend(k, {href: g, type: m, content: j, title: h, selector: l});
				a[e] = k
			}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
		},
		cancel: function () {
			var a = b.coming;
			a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
		},
		close: function (a) {
			b.cancel();
			!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
		},
		play: function (a) {
			var d = function () {
				clearTimeout(b.player.timer)
			}, e = function () {
				d();
				b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
			}, c = function () {
				d();
				p.unbind(".player");
				b.player.isActive = !1;
				b.trigger("onPlayEnd")
			};
			if (!0 === a || !b.player.isActive && !1 !== a) {
				if (b.current && (b.current.loop || b.current.index < b.group.length - 1))b.player.isActive = !0, p.bind({
					"onCancel.player beforeClose.player": c,
					"onUpdate.player": e,
					"beforeLoad.player": d
				}), e(), b.trigger("onPlayStart")
			} else c()
		},
		next: function (a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
		},
		prev: function (a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
		},
		jumpto: function (a, d, e) {
			var c = b.current;
			c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
		},
		reposition: function (a, d) {
			var e = b.current, c = e ? e.wrap : null, k;
			c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
		},
		update: function (a) {
			var d = a && a.type, e = !d || "orientationchange" === d;
			e && (clearTimeout(B), B = null);
			b.isOpen && !B && (B = setTimeout(function () {
				var c = b.current;
				c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
			}, e && !s ? 0 : 300))
		},
		toggle: function (a) {
			b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
		},
		hideLoading: function () {
			p.unbind(".loading");
			f("#fancybox-loading").remove()
		},
		showLoading: function () {
			var a, d;
			b.hideLoading();
			a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
			p.bind("keydown.loading", function (a) {
				if (27 === (a.which || a.keyCode))a.preventDefault(), b.cancel()
			});
			b.defaults.fixed || (d = b.getViewport(), a.css({position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x}))
		},
		getViewport: function () {
			var a = b.current && b.current.locked || !1, d = {x: n.scrollLeft(), y: n.scrollTop()};
			a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
			return d
		},
		unbindEvents: function () {
			b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
			p.unbind(".fb");
			n.unbind(".fb")
		},
		bindEvents: function () {
			var a = b.current, d;
			a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
				var c = e.which || e.keyCode, k = e.target || e.srcElement;
				if (27 === c && b.coming)return !1;
				!e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
					if (1 < a.group.length && k[c] !== v)return b[d](k[c]), e.preventDefault(), !1;
					if (-1 < f.inArray(c, k))return b[d](), e.preventDefault(), !1
				})
			}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
				for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
				if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
					if (0 < g || 0 < k)b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > k)b.next(0 > g ? "up" : "right");
					d.preventDefault()
				}
			}))
		},
		trigger: function (a, d) {
			var e, c = d || b.coming || b.current;
			if (c) {
				f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
				if (!1 === e)return !1;
				c.helpers && f.each(c.helpers, function (d, e) {
					if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
				});
				p.trigger(a)
			}
		},
		isImage: function (a) {
			return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function (a) {
			return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (a) {
			var d = {}, e, c;
			a = l(a);
			e = b.group[a] || null;
			if (!e)return !1;
			d = f.extend(!0, {}, b.opts, e);
			e = d.margin;
			c = d.padding;
			"number" === f.type(e) && (d.margin = [e, e, e, e]);
			"number" === f.type(c) && (d.padding = [c, c, c, c]);
			d.modal && f.extend(!0, d, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}});
			d.autoSize && (d.autoWidth = d.autoHeight = !0);
			"auto" === d.width && (d.autoWidth = !0);
			"auto" === d.height && (d.autoHeight = !0);
			d.group = b.group;
			d.index = a;
			b.coming = d;
			if (!1 === b.trigger("beforeLoad"))b.coming = null; else {
				c = d.type;
				e = d.href;
				if (!c)return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
				b.isActive = !0;
				if ("image" === c || "swf" === c)d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
				"image" === c && (d.aspectRatio = !0);
				"iframe" === c && s && (d.scrolling = "scroll");
				d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
				f.extend(d, {skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap)});
				f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
					d.skin.css("padding" + b, w(d.padding[a]))
				});
				b.trigger("onReady");
				if ("inline" === c || "html" === c) {
					if (!d.content || !d.content.length)return b._error("content")
				} else if (!e)return b._error("href");
				"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
			}
		},
		_error: function (a) {
			f.extend(b.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error});
			b._afterLoad()
		},
		_loadImage: function () {
			var a = b.imgPreload = new Image;
			a.onload = function () {
				this.onload = this.onerror = null;
				b.coming.width = this.width / b.opts.pixelRatio;
				b.coming.height = this.height / b.opts.pixelRatio;
				b._afterLoad()
			};
			a.onerror = function () {
				this.onload = this.onerror = null;
				b._error("image")
			};
			a.src = b.coming.href;
			!0 !== a.complete && b.showLoading()
		},
		_loadAjax: function () {
			var a = b.coming;
			b.showLoading();
			b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
				url: a.href, error: function (a, e) {
					b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
				}, success: function (d, e) {
					"success" === e && (a.content = d, b._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
			f(a.wrap).bind("onReset", function () {
				try {
					f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (a) {
				}
			});
			a.iframe.preload && (b.showLoading(), d.one("load", function () {
				f(this).data("ready", 1);
				s || f(this).bind("load.fb", b.update);
				f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
				b._afterLoad()
			}));
			a.content = d.appendTo(a.inner);
			a.iframe.preload || b._afterLoad()
		},
		_preloadImages: function () {
			var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
			for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
		},
		_afterLoad: function () {
			var a = b.coming, d = b.current, e, c, k, g, h;
			b.hideLoading();
			if (a && !1 !== b.isActive)if (!1 === b.trigger("afterLoad", a, d))a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
				d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
				b.unbindEvents();
				e = a.content;
				c = a.type;
				k = a.scrolling;
				f.extend(b, {wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d});
				g = a.href;
				switch (c) {
					case"inline":
					case"ajax":
					case"html":
						a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
							f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
						}));
						break;
					case"image":
						e = a.tpl.image.replace("{href}", g);
						break;
					case"swf":
						e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
							e += '<param name="' + a + '" value="' + b + '"></param>';
							h += " " + a + '="' + b + '"'
						}), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
				}
				(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
				b.trigger("beforeShow");
				a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
				b._setDimension();
				b.reposition();
				b.isOpen = !1;
				b.coming = null;
				b.bindEvents();
				if (b.isOpened) {
					if (d.prevMethod)b.transitions[d.prevMethod]()
				} else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
				b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
				b._preloadImages()
			}
		},
		_setDimension: function () {
			var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
			e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
			x = l(k.outerWidth(!0) - k.width());
			v = l(k.outerHeight(!0) - k.height());
			z = y + x;
			t = r + v;
			C = E(c) ? (a.w - z) * l(c) / 100 : c;
			A = E(j) ? (a.h - t) * l(j) / 100 : j;
			if ("iframe" === h.type) {
				if (H = h.content, h.autoHeight && 1 === H.data("ready"))try {
					H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
				} catch (G) {
				}
			} else if (h.autoWidth || h.autoHeight)g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
			c = l(C);
			j = l(A);
			D = C / A;
			m = l(E(m) ? l(m, "w") - z : m);
			n = l(E(n) ? l(n, "w") - z : n);
			u = l(E(u) ? l(u, "h") - t : u);
			p = l(E(p) ? l(p, "h") - t : p);
			F = n;
			B = p;
			h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
			z = a.w - y;
			r = a.h - r;
			h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
			if (h.fitToView)if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(); else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
			q && ("auto" === s && j < A && c + x + q < z) && (c += q);
			g.width(c).height(j);
			e.width(c + x);
			a = e.width();
			y = e.height();
			e = (a > z || y > r) && c > m && j > u;
			c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
			f.extend(h, {dim: {width: w(a), height: w(y)}, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j});
			!H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
		},
		_getPosition: function (a) {
			var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {position: "absolute", top: c[0], left: c[3]};
			d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
			c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
			c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
			return c
		},
		_afterZoomIn: function () {
			var a = b.current;
			a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
				!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
			}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
				a.preventDefault();
				b.close()
			}), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
		},
		_afterZoomOut: function (a) {
			a = a || b.current;
			f(".fancybox-wrap").trigger("onReset").remove();
			f.extend(b, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null});
			b.trigger("afterClose", a)
		}
	});
	b.transitions = {
		getOrigPosition: function () {
			var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
			!e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
			t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
			if ("fixed" === b.wrap.css("position") || a.locked)c.top -= m.y, c.left -= m.x;
			return c = {top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h)}
		}, step: function (a, d) {
			var e, c, f = d.prop;
			c = b.current;
			var g = c.wrapSpace, h = c.skinSpace;
			if ("width" === f || "height" === f)e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
		}, zoomIn: function () {
			var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({opacity: 1}, d);
			delete k.position;
			c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
			b.wrap.css(d).animate(k, {duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn})
		}, zoomOut: function () {
			var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
			e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
			b.wrap.animate(c, {duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut})
		}, changeIn: function () {
			var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
			e.opacity = 0.1;
			"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
			"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn})
		}, changeOut: function () {
			var a = b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
			"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
			a.wrap.animate(e, {
				duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
					f(this).trigger("onReset").remove()
				}
			})
		}
	};
	b.helpers.overlay = {
		defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0}, overlay: null, fixed: !1, el: f("html"), create: function (a) {
			a = f.extend({}, this.defaults, a);
			this.overlay && this.close();
			this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
			this.fixed = !1;
			a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		}, open: function (a) {
			var d = this;
			a = f.extend({}, this.defaults, a);
			this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
			this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
			a.closeClick && this.overlay.bind("click.overlay", function (a) {
				if (f(a.target).hasClass("fancybox-overlay"))return b.isActive ? b.close() : d.close(), !1
			});
			this.overlay.css(a.css).show()
		}, close: function () {
			var a, b;
			n.unbind("resize.overlay");
			this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
			f(".fancybox-overlay").remove().hide();
			f.extend(this, {overlay: null, fixed: !1})
		}, update: function () {
			var a = "100%", b;
			this.overlay.width(a).height("100%");
			I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
			this.overlay.width(a).height(p.height())
		}, onReady: function (a, b) {
			var e = this.overlay;
			f(".fancybox-overlay").stop(!0, !0);
			e || this.create(a);
			a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
			!0 === a.showEarly && this.beforeShow.apply(this, arguments)
		}, beforeShow: function (a, b) {
			var e, c;
			b.locked && (!1 !== this.margin && (f("*").filter(function () {
				return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
			this.open(a)
		}, onUpdate: function () {
			this.fixed || this.update()
		}, afterClose: function (a) {
			this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
		}
	};
	b.helpers.title = {
		defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
			var d = b.current, e = d.title, c = a.type;
			f.isFunction(e) && (e = e.call(d.element, d));
			if (q(e) && "" !== f.trim(e)) {
				d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
				switch (c) {
					case"inside":
						c = b.skin;
						break;
					case"outside":
						c = b.wrap;
						break;
					case"over":
						c = b.inner;
						break;
					default:
						c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
				}
				d["top" === a.position ? "prependTo" : "appendTo"](c)
			}
		}
	};
	f.fn.fancybox = function (a) {
		var d, e = f(this), c = this.selector || "", k = function (g) {
			var h = f(this).blur(), j = d, k, l;
			!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
		};
		a = a || {};
		d = a.index || 0;
		!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
		this.filter("[data-fancybox-start=1]").trigger("click");
		return this
	};
	p.ready(function () {
		var a, d;
		f.scrollbarWidth === v && (f.scrollbarWidth = function () {
			var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
			a.remove();
			return b
		});
		if (f.support.fixedPosition === v) {
			a = f.support;
			d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
			var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
			d.remove();
			a.fixedPosition = e
		}
		f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
		a = f(r).width();
		J.addClass("fancybox-lock-test");
		d = f(r).width();
		J.removeClass("fancybox-lock-test");
		f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
	})
})(window, document, jQuery);
!function (t) {
	t.extend(t.fn, {
		validate: function (e) {
			if (!this.length)return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var i = t.data(this[0], "validator");
			return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
				i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0)
			}), this.submit(function (e) {
				function s() {
					var s;
					return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
				}

				return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
			})), i)
		}, valid: function () {
			if (t(this[0]).is("form"))return this.validate().form();
			var e = !0, i = t(this[0].form).validate();
			return this.each(function () {
				e &= i.element(this)
			}), e
		}, removeAttrs: function (e) {
			var i = {}, s = this;
			return t.each(e.split(/\s/), function (t, e) {
				i[e] = s.attr(e), s.removeAttr(e)
			}), i
		}, rules: function (e, i) {
			var s = this[0];
			if (e) {
				var r = t.data(s.form, "validator").settings, n = r.rules, a = t.validator.staticRules(s);
				switch (e) {
					case"add":
						t.extend(a, t.validator.normalizeRule(i)), n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
						break;
					case"remove":
						if (!i)return delete n[s.name], a;
						var u = {};
						return t.each(i.split(/\s/), function (t, e) {
							u[e] = a[e], delete a[e]
						}), u
				}
			}
			var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
			if (o.required) {
				var l = o.required;
				delete o.required, o = t.extend({required: l}, o)
			}
			return o
		}
	}), t.extend(t.expr[":"], {
		blank: function (e) {
			return !t.trim("" + e.value)
		}, filled: function (e) {
			return !!t.trim("" + e.value)
		}, unchecked: function (t) {
			return !t.checked
		}
	}), t.validator = function (e, i) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
	}, t.validator.format = function (e, i) {
		return 1 === arguments.length ? function () {
			var i = t.makeArray(arguments);
			return i.unshift(e), t.validator.format.apply(this, i)
		} : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
			e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
				return i
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (t) {
				this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
			},
			onfocusout: function (t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function (t, e) {
				(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
			},
			onclick: function (t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function (e, i, s) {
				"radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
			},
			unhighlight: function (e, i, s) {
				"radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
			}
		},
		setDefaults: function (e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function e(e) {
					var i = t.data(this[0].form, "validator"), s = "on" + e.type.replace(/^validate/, "");
					i.settings[s] && i.settings[s].call(i, this[0], e)
				}

				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i = this.groups = {};
				t.each(this.settings.groups, function (e, s) {
					"string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
						i[s] = e
					})
				});
				var s = this.settings.rules;
				t.each(s, function (e, i) {
					s[e] = t.validator.normalizeRule(i)
				}), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			}, form: function () {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			}, checkForm: function () {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
				return this.valid()
			}, element: function (e) {
				e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
				var i = this.check(e) !== !1;
				return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
			}, showErrors: function (e) {
				if (e) {
					t.extend(this.errorMap, e), this.errorList = [];
					for (var i in e)this.errorList.push({message: e[i], element: this.findByName(i)[0]});
					this.successList = t.grep(this.successList, function (t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			}, resetForm: function () {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			}, numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			}, objectLength: function (t) {
				var e = 0;
				for (var i in t)e++;
				return e
			}, hideErrors: function () {
				this.addWrapper(this.toHide).hide()
			}, valid: function () {
				return 0 === this.size()
			}, size: function () {
				return this.errorList.length
			}, focusInvalid: function () {
				if (this.settings.focusInvalid)try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {
				}
			}, findLastActive: function () {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function (t) {
						return t.element.name === e.name
					}).length && e
			}, elements: function () {
				var e = this, i = {};
				return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
					return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
				})
			}, clean: function (e) {
				return t(e)[0]
			}, errors: function () {
				var e = this.settings.errorClass.replace(" ", ".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			}, reset: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
			}, prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			}, prepareElement: function (t) {
				this.reset(), this.toHide = this.errorsFor(t)
			}, elementValue: function (e) {
				var i = t(e).attr("type"), s = t(e).val();
				return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
			}, check: function (e) {
				e = this.validationTargetFor(this.clean(e));
				var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
				for (var a in s) {
					var u = {method: a, parameters: s[a]};
					try {
						if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
							r = !0;
							continue
						}
						if (r = !1, "pending" === i)return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!i)return this.formatAndAdd(e, u), !1
					} catch (o) {
						throw this.settings.debug && window.console && console.log("Exception occured when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
					}
				}
				return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
			}, customDataMessage: function (e, i) {
				return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
			}, customMessage: function (t, e) {
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			}, findDefined: function () {
				for (var t = 0; t < arguments.length; t++)if (void 0 !== arguments[t])return arguments[t];
				return void 0
			}, defaultMessage: function (e, i) {
				return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
			}, formatAndAdd: function (e, i) {
				var s = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
				"function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
					message: s,
					element: e
				}), this.errorMap[e.name] = s, this.submitted[e.name] = s
			}, addWrapper: function (t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			}, defaultShowErrors: function () {
				var t, e;
				for (t = 0; this.errorList[t]; t++) {
					var i = this.errorList[t];
					this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
				if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			}, validElements: function () {
				return this.currentElements.not(this.invalidElements())
			}, invalidElements: function () {
				return t(this.errorList).map(function () {
					return this.element
				})
			}, showLabel: function (e, i) {
				var s = this.errorsFor(e);
				s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
			}, errorsFor: function (e) {
				var i = this.idOrName(e);
				return this.errors().filter(function () {
					return t(this).attr("for") === i
				})
			}, idOrName: function (t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			}, validationTargetFor: function (t) {
				return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
			}, checkable: function (t) {
				return /radio|checkbox/i.test(t.type)
			}, findByName: function (e) {
				return t(this.currentForm).find("[name='" + e + "']")
			}, getLength: function (e, i) {
				switch (i.nodeName.toLowerCase()) {
					case"select":
						return t("option:selected", i).length;
					case"input":
						if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
				}
				return e.length
			}, depend: function (t, e) {
				return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
			}, dependTypes: {
				"boolean": function (t) {
					return t
				}, string: function (e, i) {
					return !!t(e, i.form).length
				}, "function": function (t, e) {
					return t(e)
				}
			}, optional: function (e) {
				var i = this.elementValue(e);
				return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
			}, startRequest: function (t) {
				this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
			}, stopRequest: function (e, i) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			}, previousValue: function (e) {
				return t.data(e, "previousValue") || t.data(e, "previousValue", {old: null, valid: !0, message: this.defaultMessage(e, "remote")})
			}
		},
		classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}},
		addClassRules: function (e, i) {
			e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
		},
		classRules: function (e) {
			var i = {}, s = t(e).attr("class");
			return s && t.each(s.split(" "), function () {
				this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
			}), i
		},
		attributeRules: function (e) {
			var i = {}, s = t(e);
			for (var r in t.validator.methods) {
				var n;
				"required" === r ? (n = s.get(0).getAttribute(r), "" === n && (n = !0), n = !!n) : n = s.attr(r), n ? i[r] = n : s[0].getAttribute("type") === r && (i[r] = !0)
			}
			return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
		},
		dataRules: function (e) {
			var i, s, r = {}, n = t(e);
			for (i in t.validator.methods)s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
			return r
		},
		staticRules: function (e) {
			var i = {}, s = t.data(e.form, "validator");
			return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
		},
		normalizeRules: function (e, i) {
			return t.each(e, function (s, r) {
				if (r === !1)return void delete e[s];
				if (r.param || r.depends) {
					var n = !0;
					switch (typeof r.depends) {
						case"string":
							n = !!t(r.depends, i.form).length;
							break;
						case"function":
							n = r.depends.call(i, i)
					}
					n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
				}
			}), t.each(e, function (s, r) {
				e[s] = t.isFunction(r) ? r(i) : r
			}), t.each(["minlength", "maxlength"], function () {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength"], function () {
				var i;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
			}), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function (e) {
			if ("string" == typeof e) {
				var i = {};
				t.each(e.split(/\s/), function () {
					i[this] = !0
				}), e = i
			}
			return e
		},
		addMethod: function (e, i, s) {
			t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function (e, i, s) {
				if (!this.depend(s, i))return "dependency-mismatch";
				if ("select" === i.nodeName.toLowerCase()) {
					var r = t(i).val();
					return r && r.length > 0
				}
				return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
			}, remote: function (e, i, s) {
				if (this.optional(i))return "dependency-mismatch";
				var r = this.previousValue(i);
				if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = r.originalMessage || this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {url: s} || s, r.old === e)return r.valid;
				r.old = e;
				var n = this;
				this.startRequest(i);
				var a = {};
				return a[i.name] = e, t.ajax(t.extend(!0, {
					url: s, mode: "abort", port: "validate" + i.name, dataType: "json", data: a, success: function (s) {
						n.settings.messages[i.name].remote = r.originalMessage;
						var a = s === !0 || "true" === s;
						if (a) {
							var u = n.formSubmitted;
							n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
						} else {
							var o = {}, l = s || n.defaultMessage(i, "remote");
							o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
						}
						r.valid = a, n.stopRequest(i, a)
					}
				}, s)), "pending"
			}, minlength: function (e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s
			}, maxlength: function (e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || s >= r
			}, rangelength: function (e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s[0] && r <= s[1]
			}, min: function (t, e, i) {
				return this.optional(e) || t >= i
			}, max: function (t, e, i) {
				return this.optional(e) || i >= t
			}, range: function (t, e, i) {
				return this.optional(e) || t >= i[0] && t <= i[1]
			}, email: function (t, e) {
				return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
			}, url: function (t, e) {
				return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
			}, date: function (t, e) {
				return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
			}, dateISO: function (t, e) {
				return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
			}, number: function (t, e) {
				return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			}, digits: function (t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			}, creditcard: function (t, e) {
				if (this.optional(e))return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(t))return !1;
				var i = 0, s = 0, r = !1;
				t = t.replace(/\D/g, "");
				for (var n = t.length - 1; n >= 0; n--) {
					var a = t.charAt(n);
					s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
				}
				return i % 10 === 0
			}, equalTo: function (e, i, s) {
				var r = t(s);
				return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
					t(i).valid()
				}), e === r.val()
			}
		}
	}), t.format = t.validator.format
}(jQuery), function (t) {
	var e = {};
	if (t.ajaxPrefilter)t.ajaxPrefilter(function (t, i, s) {
		var r = t.port;
		"abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
	}); else {
		var i = t.ajax;
		t.ajax = function (s) {
			var r = ("mode"in s ? s : t.ajaxSettings).mode, n = ("port"in s ? s : t.ajaxSettings).port;
			return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments)) : i.apply(this, arguments)
		}
	}
}(jQuery), function (t) {
	t.extend(t.fn, {
		validateDelegate: function (e, i, s) {
			return this.bind(i, function (i) {
				var r = t(i.target);
				return r.is(e) ? s.apply(r, arguments) : void 0
			})
		}
	})
}(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			s = decodeURIComponent(s.replace(pluses, ' '));
		} catch (e) {
			return;
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch (e) {
		}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);
			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}
			return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
		}
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = read(cookie, value);
				break;
			}
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}
		return result;
	};
	config.defaults = {};
	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend({}, options, {expires: -1}));
			return true;
		}
		return false;
	};
}));
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}
(function ($) {
	$(document).ready(function () {
		var accountType = getUrlVars()["type"];
		var lics = accountType ? 10 : 5;
		var requestType = accountType ? 'Trial version registration' : 'Free version registration';
		if (accountType) {
			$('.page-main-head').html('Create <b>a trial account</b>');
			$('.page-main-desc').html('30-day trial');
		}
		var account = $('[data-account]');
		var form = account.find('form:first');
		var $commonError = form.find('.common-error-message');

		function formSettings(account) {
			var form = account.find('form:first');
			var data = {
				fullName: form.find('input[name=fullName]').val(),
				email: form.find('input[name=email]').val(),
				edition: 'Pro',
				isTp3: true,
				source: account.data('source'),
				host: form.find('input[name=host]').val(),
				leadSource: $.cookie("tpsource"),
				lics: lics,
				isNewPricingEnabled: account.data('newPricing') || false,
				jobTitle: form.find('input[name=jobTitle]').val() || '',
				companySize: form.find('input[name=employees]:checked').val() || form.find('select[name=employees]').val(),
				phone: form.find('input[name=phone]').val() || '',
				company: form.find('input[name=company]').val(),
				industry: form.find('select[name=industry]').val() || '',
				isTrial: accountType ? 'true' : 'false'
			};
			return data;
		}

		var getFieldContainer = function (element) {
			return $(element).closest('.field-container');
		};
		$.validator.addMethod("regex", function (value, element, regexp) {
			return this.optional(element) || new RegExp(regexp).test(value);
		}, "Invalid format.");
		$.validator.addMethod("latin", function (value, element, regexp) {
			return this.optional(element) || /^[\u0000-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F]*$/g.test(value);
		}, "use latin characters.");
		var validator = form.validate({
			errorClass: 'e',
			validClass: 'v',
			errorElement: 'div',
			rules: {
				company: {required: true},
				host: {required: true, regex: '^[a-zA-Z0-9]+$', maxlength: 50, remote: {type: 'POST', url: tp_vars.ajaxurl, dataType: "json", data: {action: 'tp-isAvailable'}}},
				fullName: {required: true, regex: '^[^<>%$]*$'},
				email: {required: true, email: true},
				employees: {required: true}
			},
			messages: {
				host: {required: 'Please provide an account name', regex: 'Only numbers and letters are allowed', remote: jQuery.validator.format('"{0}" has been already taken, please choose another name')},
				fullName: {required: 'Please provide your full name', regex: 'special characters are not allowed'},
				email: {required: 'Please provide a valid email address', email: 'Email is not valid'},
				jobTitle: {required: 'Please provide your job title'},
				company: {required: 'Please provide your company name'},
				employees: {required: 'Please choose what’s most relevant for your company'},
				industry: {required: 'Please choose what’s most relevant for your company'}
			},
			submitHandler: function (form) {
				form = $(form);
				var formData = formSettings(account);
				formData.action = 'tp-createAccount';
				var host = form.find('input[name=host]').val();
				$('body').startLoading();
				$.ajax({
					type: 'POST', url: tp_vars.ajaxurl, data: formData, dataType: "json", success: function (data) {
						form[0].reset();
						registerAddrollConversion();
						registerTP3LeadGoogleAdwordsConversion();
						getappTrackConversion();
						capterraTrackConversion();
						var gaActionValue = gaGetValue(formData.companySize);
						registerGoogleAnalyticsEvent('Lead', 'Register', requestType, gaActionValue);
						registerGoogleAnalyticsEvent('Debug', 'Register', host);
						registerGoogleAnalyticsEvent('Track', 'CustomerCenterId', data.ccid);
						function redirect() {
							if ($('body').hasClass('is-mobile')) {
								window.top.location.href = 'sign-up-mobile';
							} else {
								window.top.location.href = 'https://' + host + '.tpondemand.com/restui/board.aspx?start';
							}
						}

						$('body').append($('<iframe style="display: none"></iframe>').attr('src', data.pardot));
						setTimeout(redirect, 1000);
					}, error: function (data, dummy) {
						var response = JSON.parse(data.responseText);
						$commonError.addClass('error');
						$commonError.html('<div class="error-message">' + response.message + '</div>');
						$('body').stopLoading();
					}
				});
			},
			invalidHandler: function (event, validator) {
				registerGoogleAnalyticsEvent('Lead', 'Attempt to submit', requestType);
			},
			errorPlacement: function (error, element) {
				var $fieldContainer = getFieldContainer(element);
				error.addClass('error-message').appendTo($fieldContainer);
			},
			highlight: function (element, errorClass, validClass) {
				var $fieldContainer = getFieldContainer(element);
				$fieldContainer.addClass('error').removeClass('valid');
			},
			unhighlight: function (element, errorClass, validClass) {
				var $fieldContainer = getFieldContainer(element);
				$fieldContainer.addClass('valid').removeClass('error');
				$commonError.removeClass('error');
			}
		});
		$('.sign-up-page.b-version .submit-button').on('click', function () {
			form.submit();
		});
		form.find('input[name=company]').on('focusout', function () {
			var $hostField = form.find('.field-host');
			var $hostInput = $hostField.find('input[name=host]');
			var $hostLabel = $hostField.find('label');
			var hostLabelValue = $hostField.find('label').text();
			if (!$hostInput.val()) {
				$hostField.addClass('generating');
				$hostLabel.text('Loading...');
				var formData = formSettings(account);
				formData.action = 'tp-generateOnDemandUrl';
				$.ajax({
					type: 'POST', url: tp_vars.ajaxurl, data: formData, success: function (data) {
						var response = JSON.parse(data);
						if (response.account) {
							var responseText = response.account.substring(0, 50);
							$hostInput.val(responseText).change();
							$hostField.find('.host-name .name').text(responseText);
							$hostField.addClass('generated').removeClass('error');
						}
						$hostField.removeClass('generating');
						$hostLabel.text(hostLabelValue);
					}, error: function (data, dummy) {
						$hostField.removeClass('generating');
						$hostLabel.text(hostLabelValue);
					}
				});
			}
		});
	});
})(jQuery);
function registerAddrollConversion() {
	try {
		__adroll.record_user({"adroll_segments": "conversion_pixel_segment"});
	} catch (error) {
	}
}
function registerGoogleAdwordsConversion(id, label) {
	try {
		var image = new Image(1, 1);
		image.src = 'http://www.googleadservices.com/pagead/conversion/' + id + '/?label=' + label + ' &guid=ON&script=0';
	} catch (error) {
	}
}
function registerTP3LeadGoogleAdwordsConversion() {
	registerGoogleAdwordsConversion(1070219244, '36hoCNzXpgcQ7P-o_gM');
}
function registerGoogleAnalyticsEvent(category, action, label, value) {
	try {
		ga('send', 'event', category, action, label, value);
	} catch (error) {
	}
}
function gaGetValue(size) {
	var value;
	switch (size) {
		case'<10':
			value = 10;
			break;
		case'11-50':
			value = 50;
			break;
		case'51-200':
		case'<200':
			value = 200;
			break;
		case'201-500':
			value = 500;
			break;
		case'501-1000':
			value = 1000;
			break;
		case'1001-5000':
			value = 5000;
			break;
		case'5001-10000':
			value = 5000;
			break;
		case'10001+':
			value = 5000;
			break;
	}
	return value;
}
function getappTrackConversion() {
	var r = document.referrer;
	var h = window.location.href;
	var p = '0';
	var e = '';
	var listing_id = '91281';
	var a = document.createElement('script');
	a.type = 'text/javascript';
	a.async = true;
	a.src = 'https://www.getapp.com/conversion/' + encodeURIComponent(listing_id) + '/r.js?p=' + encodeURIComponent(p) + '&h=' + encodeURIComponent(h) + '&r=' + encodeURIComponent(r) + '&e=' + encodeURIComponent(e);
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(a, s);
}
function capterraTrackConversion() {
	var capterra_vkey = '3976424c29b708d49001f18c4aa46e86', capterra_vid = '2104000', capterra_prefix = (('https:' == document.location.protocol) ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
	(function () {
		var ct = document.createElement('script');
		ct.type = 'text/javascript';
		ct.async = true;
		ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ct, s);
	})();
}
window.piAId = '3812';
window.piCId = '1243';
(function () {
	function async_load() {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
		var c = document.getElementsByTagName('script')[0];
		c.parentNode.insertBefore(s, c);
	}

	if (window.attachEvent) {
		window.attachEvent('onload', async_load);
	} else {
		window.addEventListener('load', async_load, false);
	}
})();
adroll_adv_id = "X6DQHPCYGNEBTACL4AUHUL";
adroll_pix_id = "5DITYJDKDRFDXICLDR7NUA";
(function () {
	var oldonload = window.onload;
	window.onload = function () {
		__adroll_loaded = true;
		var scr = document.createElement("script");
		var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
		scr.setAttribute('async', 'true');
		scr.type = "text/javascript";
		scr.src = host + "/j/roundtrip.js";
		((document.getElementsByTagName('head') || [null])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
		if (oldonload) {
			oldonload()
		}
	};
}());
var tp_vars = {"ajaxurl": "https:\/\/www.targetprocess.com\/wordpress\/wp-admin\/admin-ajax.php", "themeurl": "https:\/\/www.targetprocess.com\/content\/themes\/targetprocess"};
(function ($) {
	$.fn.clearForm = function () {
		this.each(function () {
			var handler = $(this).data('onReset');
			if (handler) {
				handler();
			}
		});
	}
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$('input[placeholder], textarea[placeholder]').placeholder();
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var $body = $('body');
		if (((!Modernizr.csscalc) || ($.browser.msie && !navigator.userAgent.match(/Trident.*rv\:11\./)) && ($body.hasClass('.home-page')))) {
			$body.addClass('subs-layout');
			$('body > header, body > footer, body > section, body > article > section, body > main > section').wrapInner('<div class="wrapper"></div>');
		}
	});
})(jQuery);
$(function () {
	var post = function (player, action, value) {
		var data = {method: action};
		if (value) {
			data.value = value;
		}
		var url = window.location.protocol + $(player).attr('src').split('?')[0];
		console.log(player, url);
		$(player)[0].contentWindow.postMessage(data, url);
	}
	var previous = null;
	var player = $('.tabs-body iframe:first');
	player.load(function () {
		post(player, 'play');
	});
	$('.popup-tabs .tabs-head-item').each(function (index, item) {
		var thead = $(item);
		thead.click(function (e) {
			thead.siblings().removeClass('current');
			thead.addClass('current');
			player.attr('src', thead.data('video'));
		});
	});
});
$(function () {
	$(document).ready(function () {
		$('video').not('.mobile-controls-allowed').each(function (index) {
			this.controls = false;
			if ($(this).attr('autoplay')) {
				$(this).closest('.video-container').addClass('playing');
			}
			$(this).on('ended', function () {
				$(this).closest('.video-container').removeClass('playing');
			});
		});
		$('.play').on('click', function () {
			var parent = $(this).closest('.video-container');
			parent.find('video').get(0).play();
			parent.addClass('playing');
		});
	});
});
(function ($) {
	$(document).ready(function () {
		$('.tp-plans .trial').click(function (evt) {
			evt.preventDefault();
			var $$ = $(this);
			var $currentCard = $$.closest('.plan');
			$currentCard.addClass('active');
			var $otherCards = $currentCard.siblings('.plan');
			$otherCards.removeClass('active');
			$('.tp-plans form').clearForm();
		});
		$('.tp-plans .back').click(function () {
			$(this).closest('.plan').removeClass('active');
			$('.tp-plans form').clearForm();
		});
		if (($.browser.msie && ($.browser.version == '10.0')) || (!!navigator.userAgent.match(/Trident.*rv\:11\./))) {
			$('body').addClass('ie-flip');
		}
		if (/Edge\/12./i.test(navigator.userAgent)) {
			$('body').addClass('edge-browser');
		}
	});
})(jQuery);
(function ($) {
	$.fn.startLoading = function () {
		this.addClass('loading');
		return this;
	}
	$.fn.stopLoading = function () {
		this.removeClass('loading');
		return this;
	}
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$('.relation-network, .burndown, .process-control, .cycle-time-distr, .cumulative-flow-diagram, .single-image, .solution-pic, .fancybox-default, .solution-content a, .zoom-it').fancybox();
		$('.video-zoom-it').fancybox({
			wrapCSS: 'product-video', afterLoad: function () {
				this.content.removeClass('playing');
				this.content.find('.video-zoom-it').hide();
			}, afterClose: function () {
				this.content.show();
				this.content.find('.video-zoom-it').show();
				this.content.removeClass('playing');
			}
		});
		$('.watch-video').fancybox({
			wrapCSS: 'webinars-lightbox', afterLoad: function () {
				var content = this.content;
				content.find('.tabs-head-item').eq(window.pageData.selectedTab).click();
			}, beforeClose: function () {
				this.content.find('#popupVideo').attr('src', '');
			}
		});
		$('.video-links .video-link').fancybox({wrapCSS: 'our-concept-lightbox'});
		$('.tp-sub-menu .trial, .pricing-info .dialog').fancybox({
			beforeClose: function () {
				$(this.content).find('form').clearForm();
			}
		});
		$('.gallery a').fancybox({
			wrapCSS: 'gallery-fancybox', nextEffect: 'fade', prevEffect: 'fade', helpers: {title: {type: 'outside'}}, padding: 45, afterLoad: function () {
				var title = this.element.find('.gallery__title').text();
				var description = this.element.find('.gallery__excerpt').text();
				this.inner.before('<div class="fancybox-gallery-title">' + title + '</div>');
				this.inner.after('<div class="fancybox-gallery-desc">' + description + '</div>');
			}
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$('a[href="/enterprise/"]').on("click", function () {
			registerGoogleAnalyticsEvent('Lead', 'Click', 'Enterprise plan inquiry');
		});
		$('.sign-up-link').on('click', function () {
			registerGoogleAnalyticsEvent('Lead', 'Click');
		});
		$('.demo-link').on('click', function () {
			registerGoogleAnalyticsEvent('Demo', 'Click');
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		function calcSubMenuWidth() {
			var iw = $(window).width();
			$('nav', '#tp-sub-menu').css('width', iw);
			$('nav', '#tp-sub-menu').css('padding-left', (iw / 2) - 470 + 'px');
			$('nav', '#tp-sub-menu').css('padding-right', (iw / 2) - 470 + 'px');
		}

		calcSubMenuWidth();
		$(window).resize(function () {
			calcSubMenuWidth();
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		if ((!Modernizr.csscalc) || ($.browser.msie)) {
			$('body').addClass('subs-layout');
			$('.live-demo').wrapInner('<div class="wrapper"></div>');
		}
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var startChat = function (e) {
			var width = 800;
			var height = 620;
			var left = $(window).width() / 2 - width / 2;
			var top = $(window).height() / 2 - height / 2;
			var win = window.open('https://secure.livechatinc.com/licence/6880831/open_chat.cgi', "livechatwindow", "resizable=1" + ",left=" + left + ",top=" + top + ",width=" + width + ",height=" + height);
			e.preventDefault();
		};
		$('.sitemap-body .single-link.chat').click(startChat);
		$('.header .chat').click(startChat);
		$('.livechat').click(startChat);
		$('.nav-item .chat').click(startChat);
		$('.pricing-footer .chat').click(startChat);
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		if ($.browser.msie && ($.browser.version == '8.0')) {
			$('body').addClass('ie8');
		}
	});
})(jQuery);
(function ($) {
	var urlParams = {};
	(function () {
		var match, pl = /\+/g, search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
			return decodeURIComponent(s.replace(pl, " "));
		}, query = window.location.search.substring(1);
		while (match = search.exec(query))
			urlParams[decode(match[1])] = decode(match[2]);
	})();
	var source = urlParams["tpsource"];
	if (source)
		$.cookie("tpsource", source);
})(jQuery);
$(function () {
	$(window).load(function () {
		$('body').addClass('loaded');
	});
	var isRetina = (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches));
	if (isRetina) {
		$('video').each(function () {
			var poster = $(this).attr('poster');
			if (poster) {
				var retinaPoster = poster.replace(/.jpg?t=201628111319/g, '2x.jpg?t=201628111319');
				$(this).attr('poster', retinaPoster);
			}
		});
		$('[data-retina]').each(function () {
			var self = $(this);
			var src = self.attr('src');
			src = src.replace(/.jpg/g, '2x.jpg').replace(/.png/g, '2x.png');
			self.attr('src', src);
		});
	}
});
$(function () {
	$('.pricing-page .info-link').click(function (e) {
		e.stopPropagation();
		var $$ = $(this);
		var $thisInfoMark = $(this).closest('.info-mark');
		var $thisInfoBubble = $thisInfoMark.find('.info-bubble');
		$('.info-bubble', '.info-mark').not($thisInfoBubble).hide();
		$('.info-mark').not($thisInfoMark).removeClass('selected');
		$thisInfoMark.toggleClass('selected');
		$thisInfoBubble.toggle();
	});
	$('.pricing-page').click(function (e) {
		if ($(e.target).closest('.info-mark').length === 0) {
			$('.info-mark').removeClass('selected');
			$(this).find('.info-bubble').hide();
		}
	});
	$('.pricing-page .info-link, .pricing-page .info-mark, .pricing-page .info-bubble').on('click', function (e) {
		e.stopPropagation();
	});
	$('.pricing-page *').not($('.pricing-page .info-link')).not($('.pricing-page .info-mark')).not($('.pricing-page .info-bubble')).not($('.pricing-page .info-bubble *')).on('click', function () {
		$('.info-mark').removeClass('selected');
		$('.info-mark').find('.info-bubble').hide();
	});
});
(function ($) {
	$(document).ready(function () {
		$('body').not('.no-transformation').find('.logo').hover(function () {
			$(this).closest('.header').toggleClass('logo-is-expanded');
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$('.header').find('.livechat-item').hover(function () {
			$(this).closest('.header').toggleClass('chat-is-expanded');
		});
	});
})(jQuery);

(function ($) {
	$(document).ready(function () {
		var currentScrollTop = 0;
		var menu = $('.main-page-header');
		var minScrollTop = menu.outerHeight();
		$(window).scroll(function () {
			var newScrollTop = $(window).scrollTop();
			if (newScrollTop < minScrollTop || currentScrollTop - newScrollTop > 5) {
				menu.addClass('show');
			} else if (newScrollTop > currentScrollTop) {
				menu.removeClass('show');
			}
			currentScrollTop = newScrollTop;
		});
	});
})(jQuery);

(function ($) {
	$(document).ready(function () {
		var $subMenu = $('.secondary-menu');
		var $mainPageHeader = $('.main-page-header');
		if ($subMenu.length > 0) {
			$mainPageHeader.addClass('with-submenu');
			function subMenuScrolling() {
				var newScrollTop = $(window).scrollTop();
				if (newScrollTop > 0) {
					$subMenu.addClass('sub-menu-fixed');
				} else {
					$subMenu.removeClass('sub-menu-fixed');
				}
			}

			$(window).on('scroll', subMenuScrolling).on('resize', subMenuScrolling);
			subMenuScrolling();
		}
	});
})(jQuery);

(function ($) {
	$(document).ready(function () {
		var $body,
			$window,
			$sidebar,
			adminbarOffset,
			top = false, bottom = false, windowWidth, windowHeight, lastWindowPos = 0, topOffset = 0, bodyHeight, sidebarHeight, resizeTimer;
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
})(jQuery);

(function ($) {
	$(document).ready(function () {
		var video = $('iframe', '.congratulation-video-container');
		var ratio = 1.778;
		video.height(video.outerWidth() / ratio);
		$(window).resize(function () {
			video.height(video.outerWidth() / ratio);
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		if (!Modernizr.csscolumns) {
			$('body').addClass('no-columns-support');
		}
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		if (!Modernizr.flexbox) {
			$('body').addClass('no-flexbox-support');
		}
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var productBlog = $('.product-blog');
		var hasSidebar = $('.right-panel:not(.home-page)');
		var mainContent = $('[data-main-content]').first();
		if (productBlog.size()) {
			$('.blog-articles-tag-list').appendAround();
		}
		if (hasSidebar.size() && mainContent.size()) {
			var sidebar = $('#main-right-sidebar'), mainContentPadding = parseInt(mainContent.css('padding-top')), topStartPosition = mainContent.offset().top + mainContentPadding;

			function determineMenuPosition() {
				if (window.innerWidth < '1500') {
					var docViewTop = $(window).scrollTop(), sidebarHeight = sidebar.outerHeight(), topEndPosition = 100, bottomEndPosition = $(document).height() - mainContent.offset().top - mainContent.height() + 50, docViewBottom = $(document).height() - docViewTop - topEndPosition - sidebarHeight;
					sidebar.css('top', topStartPosition - docViewTop);
					if (topStartPosition - docViewTop < topEndPosition) {
						if (docViewBottom > bottomEndPosition) {
							sidebar.css('top', topEndPosition);
						} else {
							sidebar.css('top', topEndPosition - (bottomEndPosition - docViewBottom));
						}
					}
				} else {
					sidebar.css('top', '0');
				}
			}

			determineMenuPosition();
			sidebar.css('visibility', 'visible');
			$(document).scroll(function () {
				determineMenuPosition();
			});
			$(window).resize(function () {
				determineMenuPosition();
			});
		}
		productBlog.click(function (e) {
			if (($(e.target).closest('.archives-popup').length === 0) && ($(e.target).closest('.show-posts-link').length === 0)) {
				$('.archives-popup').removeClass('show');
			}
		});
		$('.archives-popup-close').click(function () {
			$('#archives').removeClass('show');
		});
		$('.show-posts-link').click(function () {
			$('#archives').addClass('show');
		});
	});
})(jQuery);
if (self != top) {
	document.getElementsByTagName('body')[0].className += ' tp-iframe';
}
(function ($) {
	$(document).ready(function () {
		$('.footer-site-map').appendAround();
		$('.applications').appendAround();
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var $nav = $('.main-navigation');
		$nav.appendAround();
		$('.mobile-menu').on('click', '.hasSubMenu > a', function () {
			var _this = $(this);
			var $parent = _this.closest('li');
			var $submenu = $parent.find('.sub-menu');
			if ($parent.hasClass('expand')) {
				$parent.removeClass('expand');
				$submenu.slideUp();
			} else {
				$nav.find('li').removeClass('expand').find('.sub-menu').slideUp();
				$parent.addClass('expand');
				$submenu.slideDown();
			}
		});
		var $header = $('#header'), smbtn = $header.find('.sitemap-btn'), smbody = $header.find('.sitemap-body');
		smbtn.click(function () {
			if ($(this).hasClass('expand')) {
				$(this).removeClass('expand');
				smbody.slideUp();
				$(this).parents('.mobile-menu').find('.hasSubMenu').each(function () {
					$(this).removeClass('expand').find('a:not(.selected) + .sub-menu').slideUp();
					$(this).parents('.header').find('.logo').removeClass('logo-colored');
				});
			} else {
				$(this).addClass('expand');
				smbody.slideDown();
				$(this).parents('.header').find('.logo').addClass('logo-colored');
				$nav.find('.hasSubMenu .selected').closest('li').addClass('expand');
			}
		});
		$(document).on('tap', function (event) {
			if ($(event.target).closest('.sitemap').length)return;
			smbtn.removeClass('expand');
			$('.mobile-menu').find('.hasSubMenu').each(function () {
				$(this).removeClass('expand').find('a:not(.selected) + .sub-menu').slideUp();
				$(this).parents('.header').find('.logo').removeClass('logo-colored');
			});
			smbody.slideUp(400, function () {
				$nav.find('.hasSubMenu .selected + .sub-menu').css('display', '');
			});
			event.stopPropagation();
		});
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			}, BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			}, iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			}, Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			}, Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			}, any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};
		if (isMobile.any()) {
			$('video', '#video').removeAttr('autoplay').removeAttr('preload').removeAttr('controls');
			$('body').addClass('is-mobile');
		}
	});
})(jQuery);
(function ($) {
	$(document).ready(function () {
		$('[data-demo-form]').each(function () {
			var form = $(this);

			function getValue(name) {
				return form.find('*[name=' + name + ']').val();
			}

			function getFieldContainer(element) {
				return $(element).closest('.field-container');
			}

			function getCheckboxes(name) {
				var output = '';
				$('input[name=' + name + ']:checked').each(function () {
					output += $(this).val() + ' ';
				});
				return output;
			}

			var validator = form.validate({
				errorClass: 'e',
				errorElement: 'div',
				rules: {companyName: {required: true}, contact: {required: true}, email: {required: true, email: true}, companySize: {required: true}},
				messages: {
					contact: {required: 'Please provide a contact person name'},
					email: {required: 'Please provide an email address', email: 'Email is not valid'},
					companyName: {required: 'Please provide your company name'},
					companySize: {required: 'Please choose what’s most relevant for your company'},
					industry: {required: 'Please choose what’s most relevant for your company'},
					interestedin: {required: 'Please let us make the demo time-efficient for you'}
				},
				submitHandler: function () {
					var $commonError = form.find('.common-error-message');
					$('body').startLoading();
					var formData = {
						Type: '1',
						ContactPerson: getValue('contact'),
						InterestedIn: getValue('interestedin'),
						Email: getValue('email'),
						Country: getValue('country'),
						CompanyName: getValue('companyName'),
						CompanySize: getValue('companySize'),
						Employees: form.find('input[name=employees]:checked').val() || '',
						Industry: getValue('industry'),
						IsTp3: true,
						IsDemo: true,
						action: 'tp-ccid'
					};
					$.ajax({
						type: 'POST', url: tp_vars.ajaxurl, data: formData, dataType: "json", success: function (data) {
							registerAddrollConversion();
							getappTrackConversion();
							capterraTrackConversion();
							var gaActionValue = gaGetValue(formData.CompanySize);
							registerGoogleAnalyticsEvent('Lead', 'Register', 'Demo request', gaActionValue);
							registerGoogleAnalyticsEvent('Track', 'CustomerCenterId', data);
							setTimeout(function () {
								window.location.href = '/product';
							}, 5000);
						}, error: function (xhr, ajaxOptions, thrownError) {
							$commonError.addClass('error');
							$commonError.html('<div class="error-message">' + JSON.parse(data.responseText) + '</div>');
							$('body').stopLoading();
						}
					});
				},
				invalidHandler: function (event, validator) {
					registerGoogleAnalyticsEvent('Lead', 'Attempt to submit', 'Demo request');
				},
				errorPlacement: function (error, element) {
					var $fieldContainer = getFieldContainer(element);
					error.addClass('error-message').appendTo($fieldContainer);
				},
				highlight: function (element, errorClass, validClass) {
					var $fieldContainer = getFieldContainer(element);
					$fieldContainer.addClass('error').removeClass('valid');
				},
				unhighlight: function (element, errorClass, validClass) {
					var $fieldContainer = getFieldContainer(element);
					$fieldContainer.addClass('valid').removeClass('error');
				}
			});
		});
	});
})($);
$('body').append($('<div id="fb-root" />'));
(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id))return;
	js = d.createElement(s);
	js.id = id;
	js.async = true;
	js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
(function () {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();
(function () {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = '//platform.linkedin.com/in.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();
!function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.async = true;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "twitter-wjs");
!function (t) {
	var e = {}, s = {
		mode: "horizontal",
		slideSelector: "",
		infiniteLoop: !0,
		hideControlOnEnd: !1,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: !1,
		captions: !1,
		ticker: !1,
		tickerHover: !1,
		adaptiveHeight: !1,
		adaptiveHeightSpeed: 500,
		video: !1,
		useCSS: !0,
		preloadImages: "visible",
		responsive: !0,
		slideZIndex: 50,
		touchEnabled: !0,
		swipeThreshold: 50,
		oneToOneTouch: !0,
		preventDefaultSwipeX: !0,
		preventDefaultSwipeY: !1,
		pager: !0,
		pagerType: "full",
		pagerShortSeparator: " / ",
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,
		controls: !0,
		nextText: "Next",
		prevText: "Prev",
		nextSelector: null,
		prevSelector: null,
		autoControls: !1,
		startText: "Start",
		stopText: "Stop",
		autoControlsCombine: !1,
		autoControlsSelector: null,
		auto: !1,
		pause: 4e3,
		autoStart: !0,
		autoDirection: "next",
		autoHover: !1,
		autoDelay: 0,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,
		onSliderLoad: function () {
		},
		onSlideBefore: function () {
		},
		onSlideAfter: function () {
		},
		onSlideNext: function () {
		},
		onSlidePrev: function () {
		},
		onSliderResize: function () {
		}
	};
	t.fn.bxSlider = function (n) {
		if (0 == this.length)return this;
		if (this.length > 1)return this.each(function () {
			t(this).bxSlider(n)
		}), this;
		var o = {}, r = this;
		e.el = this;
		var a = t(window).width(), l = t(window).height(), d = function () {
			o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {index: o.settings.startSlide}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
					var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var i in e)if (void 0 !== t.style[e[i]])return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
					return !1
				}(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
				t(this).data("origStyle", t(this).attr("style"))
			}), c()
		}, c = function () {
			r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
				width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
				position: "relative"
			}), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
				width: "100%",
				overflow: "hidden",
				position: "relative"
			}), o.viewport.parent().css({maxWidth: p()}), o.settings.pager || o.viewport.parent().css({margin: "0 auto 0px"}), o.children.css({
				"float": "horizontal" == o.settings.mode ? "left" : "none",
				listStyle: "none",
				position: "relative"
			}), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
				position: "absolute",
				zIndex: 0,
				display: "none"
			}), o.children.eq(o.settings.startSlide).css({
				zIndex: o.settings.slideZIndex,
				display: "block"
			})), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
			var e = o.children.eq(o.settings.startSlide);
			"all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
		}, g = function (e, i) {
			var s = e.find("img, iframe").length;
			if (0 == s)return i(), void 0;
			var n = 0;
			e.find("img, iframe").each(function () {
				t(this).one("load", function () {
					++n == s && i()
				}).each(function () {
					this.complete && t(this).load()
				})
			})
		}, h = function () {
			if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
				var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides, i = o.children.slice(0, e).clone().addClass("bx-clone"), s = o.children.slice(-e).clone().addClass("bx-clone");
				r.append(i).prepend(s)
			}
			o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
		}, v = function () {
			var e = 0, s = t();
			if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)if (o.carousel) {
				var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
				for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++)s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
			} else s = o.children.eq(o.active.index); else s = o.children;
			return "vertical" == o.settings.mode ? (s.each(function () {
				e += t(this).outerHeight()
			}), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
				return t(this).outerHeight(!1)
			}).get()), e
		}, p = function () {
			var t = "100%";
			return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
		}, u = function () {
			var t = o.settings.slideWidth, e = o.viewport.width();
			return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
		}, f = function () {
			var t = 1;
			if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)if (o.viewport.width() < o.minThreshold)t = o.settings.minSlides; else if (o.viewport.width() > o.maxThreshold)t = o.settings.maxSlides; else {
				var e = o.children.first().width();
				t = Math.floor(o.viewport.width() / e)
			} else"vertical" == o.settings.mode && (t = o.settings.minSlides);
			return t
		}, x = function () {
			var t = 0;
			if (o.settings.moveSlides > 0)if (o.settings.infiniteLoop)t = o.children.length / m(); else for (var e = 0, i = 0; e < o.children.length;)++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f(); else t = Math.ceil(o.children.length / f());
			return t
		}, m = function () {
			return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
		}, S = function () {
			if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
				if ("horizontal" == o.settings.mode) {
					var t = o.children.last(), e = t.position();
					b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
				} else if ("vertical" == o.settings.mode) {
					var i = o.children.length - o.settings.minSlides, e = o.children.eq(i).position();
					b(-e.top, "reset", 0)
				}
			} else {
				var e = o.children.eq(o.active.index * m()).position();
				o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
			}
		}, b = function (t, e, i, s) {
			if (o.usingCSS) {
				var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
				r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
					r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
				})) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
					r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
				}))
			} else {
				var a = {};
				a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
					D()
				}) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
					b(s.resetValue, "reset", 0), N()
				})
			}
		}, w = function () {
			for (var e = "", i = x(), s = 0; i > s; s++) {
				var n = "";
				o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
			}
			o.pagerEl.html(e)
		}, T = function () {
			o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
		}, C = function () {
			o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
		}, E = function () {
			o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
		}, P = function () {
			o.children.each(function () {
				var e = t(this).find("img:first").attr("title");
				void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
			})
		}, y = function (t) {
			o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
		}, z = function (t) {
			o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
		}, k = function (t) {
			r.startAuto(), t.preventDefault()
		}, M = function (t) {
			r.stopAuto(), t.preventDefault()
		}, I = function (e) {
			o.settings.auto && r.stopAuto();
			var i = t(e.currentTarget), s = parseInt(i.attr("data-slide-index"));
			s != o.active.index && r.goToSlide(s), e.preventDefault()
		}, q = function (e) {
			var i = o.children.length;
			return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
				t(s).find("a").eq(e).addClass("active")
			}), void 0)
		}, D = function () {
			if (o.settings.infiniteLoop) {
				var t = "";
				0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
			}
			o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
		}, A = function (t) {
			o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
		}, W = function () {
			1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
		}, H = function () {
			o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
				o.interval && (r.stopAuto(!0), o.autoPaused = !0)
			}, function () {
				o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
			})
		}, L = function () {
			var e = 0;
			if ("next" == o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone")); else {
				r.prepend(o.children.clone().addClass("bx-clone"));
				var i = o.children.first().position();
				e = "horizontal" == o.settings.mode ? -i.left : -i.top
			}
			b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
				r.stop()
			}, function () {
				var e = 0;
				o.children.each(function () {
					e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
				});
				var i = o.settings.speed / e, s = "horizontal" == o.settings.mode ? "left" : "top", n = i * (e - Math.abs(parseInt(r.css(s))));
				N(n)
			}), N()
		}, N = function (t) {
			speed = t ? t : o.settings.speed;
			var e = {left: 0, top: 0}, i = {left: 0, top: 0};
			"next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
			var s = "horizontal" == o.settings.mode ? -e.left : -e.top, n = "horizontal" == o.settings.mode ? -i.left : -i.top, a = {resetValue: n};
			b(s, "ticker", speed, a)
		}, O = function () {
			o.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, o.viewport.bind("touchstart", X)
		}, X = function (t) {
			if (o.working)t.preventDefault(); else {
				o.touch.originalPos = r.position();
				var e = t.originalEvent;
				o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
			}
		}, Y = function (t) {
			var e = t.originalEvent, i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x), s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
			if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
				var n = 0;
				if ("horizontal" == o.settings.mode) {
					var r = e.changedTouches[0].pageX - o.touch.start.x;
					n = o.touch.originalPos.left + r
				} else {
					var r = e.changedTouches[0].pageY - o.touch.start.y;
					n = o.touch.originalPos.top + r
				}
				b(n, "reset", 0)
			}
		}, V = function (t) {
			o.viewport.unbind("touchmove", Y);
			var e = t.originalEvent, i = 0;
			if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
				var s = Math.abs(o.touch.start.x - o.touch.end.x);
				s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
			} else {
				var s = 0;
				"horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
			}
			o.viewport.unbind("touchend", V)
		}, Z = function () {
			var e = t(window).width(), i = t(window).height();
			(a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
		};
		return r.goToSlide = function (e, i) {
			if (!o.working && o.active.index != e)if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode)o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({height: v()}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex: 0}), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
				t(this).css("zIndex", o.settings.slideZIndex), D()
			}); else {
				o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({height: v()}, o.settings.adaptiveHeightSpeed);
				var s = 0, n = {left: 0, top: 0};
				if (!o.settings.infiniteLoop && o.carousel && o.active.last)if ("horizontal" == o.settings.mode) {
					var a = o.children.eq(o.children.length - 1);
					n = a.position(), s = o.viewport.width() - a.outerWidth()
				} else {
					var l = o.children.length - o.settings.minSlides;
					n = o.children.eq(l).position()
				} else if (o.carousel && o.active.last && "prev" == i) {
					var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides), a = r.children(".bx-clone").eq(d);
					n = a.position()
				} else if ("next" == i && 0 == o.active.index)n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1; else if (e >= 0) {
					var c = e * m();
					n = o.children.eq(c).position()
				}
				if ("undefined" != typeof n) {
					var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
					b(g, "slide", o.settings.speed)
				}
			}
		}, r.goToNextSlide = function () {
			if (o.settings.infiniteLoop || !o.active.last) {
				var t = parseInt(o.active.index) + 1;
				r.goToSlide(t, "next")
			}
		}, r.goToPrevSlide = function () {
			if (o.settings.infiniteLoop || 0 != o.active.index) {
				var t = parseInt(o.active.index) - 1;
				r.goToSlide(t, "prev")
			}
		}, r.startAuto = function (t) {
			o.interval || (o.interval = setInterval(function () {
				"next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
			}, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
		}, r.stopAuto = function (t) {
			o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
		}, r.getCurrentSlide = function () {
			return o.active.index
		}, r.getCurrentSlideElement = function () {
			return o.children.eq(o.active.index)
		}, r.getSlideCount = function () {
			return o.children.length
		}, r.redrawSlider = function () {
			o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
		}, r.destroySlider = function () {
			o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
				void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
			}), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
		}, r.reloadSlider = function (t) {
			void 0 != t && (n = t), r.destroySlider(), d()
		}, d(), this
	}
}(jQuery);
!function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (a, b) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
		}

		var b = 0;
		return c
	}(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c)d = c, c = null; else if (0 > c || c >= e.slideCount)return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({height: b}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {}, e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.asNavFor = function (b) {
		var c = this, d = c.options.asNavFor;
		d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this, c = {};
		c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this;
		a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1)d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
			d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.html(e), a.$slider.children().children().children().css({width: 100 / a.options.slidesPerRow + "%", display: "inline-block"})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints)d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f, g, h, d = this, e = a(b.target);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case"previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case"next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case"index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])a = c[c.length - 1]; else for (var e in c) {
			if (a < c[e]) {
				a = d;
				break
			}
			d = c[e]
		}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpRows = function () {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this, c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: c.options.zIndex}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({opacity: 0, zIndex: b.options.zIndex - 2}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this, b = 0, c = 0, d = 0;
		if (a.options.infinite === !0)for (; b < a.slideCount;)++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0)d = a.slideCount; else for (; b < a.slideCount;)++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var c, d, f, b = this, e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var e, a = this, b = 0, c = 0, d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;)d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.on("click.slick", {message: "next"}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: "next"}}))
	}, b.prototype.lazyLoad = function () {
		function g(b) {
			a("img[data-lazy]", b).each(function () {
				var b = a(this), c = a(this).attr("data-lazy"), d = document.createElement("img");
				d.onload = function () {
					b.animate({opacity: 0}, 100, function () {
						b.attr("src", c).animate({opacity: 1}, 200, function () {
							b.removeAttr("data-lazy").removeClass("slick-loading")
						})
					})
				}, d.src = c
			})
		}

		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({data: {message: "next"}})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.paused = !1, a.autoPlay()
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({data: {message: "previous"}})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function () {
		var c, d, b = this;
		c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
		}).error(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad()
		}))
	}, b.prototype.refresh = function (b) {
		var c = this, d = c.currentSlide;
		c.destroy(!0), a.extend(c, c.initials, {currentSlide: d}), c.init(), b || c.changeSlide({data: {message: "index", index: d}}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var c, d, e, b = this, f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f)if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
				for (; e >= 0;)b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
				b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
			}
			b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
	}, b.prototype.setCSS = function (a) {
		var d, e, b = this, c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var c, b = this;
		b.$slides.each(function (d, e) {
			c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({zIndex: b.options.zIndex - 1, opacity: 1})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
		var f, g, e = this;
		if ("responsive" === b && "array" === a.type(c))for (g in c)if ("array" !== a.type(e.options.responsive))e.options.responsive = [c[g]]; else {
			for (f = e.options.responsive.length - 1; f >= 0;)e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
			e.options.responsive.push(c[g])
		} else e.options[b] = c;
		d === !0 && (e.unload(), e.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this, b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var c, d, e, f, b = this;
		d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1)d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.setPaused = function (a) {
		var b = this;
		b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
	}, b.prototype.selectHandler = function (b) {
		var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), c.asNavFor(e), void 0) : (c.slideHandler(e), void 0)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, h = null, i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e)
		})) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e)
		}) : i.postSlide(e), void 0)))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
	}, b.prototype.swipeEnd = function () {
		var c, b = this;
		if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)switch (b.swipeDirection()) {
			case"left":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
				break;
			case"right":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case"start":
				b.swipeStart(a);
				break;
			case"move":
				b.swipeMove(a);
				break;
			case"end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var c, b = this;
		return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({tabindex: "-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.activateADA = function () {
		var a = this, b = a.$slider.find("*").is(":focus");
		a.$slideTrack.find(".slick-active").attr({"aria-hidden": "false", tabindex: "0"}).find("a, input, button, select").attr({tabindex: "0"}), b && a.$slideTrack.find(".slick-active").focus()
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.on("focus.slick blur.slick", "*", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
			}, 0)
		})
	}, a.fn.slick = function () {
		var g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length, f = 0;
		for (f; e > f; f++)if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)return g;
		return a
	}
});
window.pageData = {selectedTab: 0};
(function ($) {
	$(document).ready(function () {
		$(function () {
			var mainNav = $('.main-navigation');
			mainNav.find('ul').find('.sub-menu').hover(function () {
				$(this).parent().children('a').toggleClass('highlight');
			});
			$('.non-link-menu-item').click(function (e) {
				if (!$(this).parent('.sitemap')) {
					e.preventDefault();
					e.stopPropagation();
				}
			});
		});
		var headerHeight = $('.header').outerHeight();
		var nyTreeLink = $('.ny-2015-link');
		$(window).scroll(function (e) {
			var currentScrollTop = $(window).scrollTop();
			if (currentScrollTop > headerHeight) {
				nyTreeLink.addClass('ontop');
			} else {
				nyTreeLink.removeClass('ontop');
			}
		});
		var video = $('.video-container:first');

		function blur() {
			video.addClass('blurred');
		}

		function unblur() {
			video.removeClass('blurred');
		}

		$('#account input').focusin(blur).focusout(unblur);
		$('.title-link').hover(blur, unblur);
		$('.mtabs-head-item').hover(blur, unblur);
	});
	$(function () {
		var inpParent = $('.line');
		if (!inpParent.length)return;
		inpParent.each(function () {
			var thisLine = $(this), inpTxtDemo = thisLine.find('.demo-input-text'), inpTextarea = thisLine.find('.demo-message'), inpTxtFree = thisLine.find('.free-input-text'), inpCapt = thisLine.find('.caption');

			function fIn() {
				$(this).parent().addClass('active');
			}

			function fOut() {
				if (inpTxtDemo.val() != 0) {
				} else {
					inpTxtDemo.parent().removeClass('active');
				}
			}

			function fInTxt() {
				inpTextarea.parent().addClass('active');
			}

			function fOutTxt() {
				if (inpTextarea.val() != 0) {
				} else {
					inpTextarea.parent().removeClass('active');
				}
			}

			function fInFree() {
				inpTxtFree.parent().addClass('active');
			}

			function fOutFree() {
				if (inpTxtFree.val() != 0) {
				} else {
					inpTxtFree.parent().removeClass('active');
				}
			}

			inpTxtDemo.focusin(fIn);
			inpTxtDemo.focusout(fOut);
			inpTextarea.focusin(fInTxt);
			inpTextarea.focusout(fOutTxt);
			inpTxtFree.focusin(fInFree);
			inpTxtFree.focusout(fOutFree);
		})
	});
	$(function () {
		var sliderWrap = $('.main-slider-wrap'), slider = sliderWrap.find('.slider-list');
		slider.slick({slide: '.slider-item', infinite: true, arrows: true, speed: 300, dots: false, slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: 1});
		slider.find('.main-slider-more').on('click', function (e) {
			e.preventDefault();
			sliderWrap.addClass('full');
		});
		slider.find('.main-slider-less').on('click', function (e) {
			e.preventDefault();
			sliderWrap.removeClass('full');
		});
	});
	$(function () {
		var mhead = $('.mtabs-head-item'), mbody = $('.mtabs-body-item'), mtext = $('.mtabs-text-item');
		mhead.eq(0).addClass('selected');
		mbody.eq(0).css('display', 'block');
		mtext.eq(0).css('display', 'block');
		mhead.each(function (index, item) {
			$(item).click(function () {
				if (!$(this).hasClass('selected')) {
					window.pageData.selectedTab = index;
					$(this).addClass('selected').siblings().removeClass('selected');
					mbody.parent().addClass('blurred');
					mbody.hide().eq($(this).index()).fadeIn(50, function () {
						mbody.parent().removeClass('blurred');
					});
					mtext.hide().eq($(this).index()).fadeIn(500);
				}
			});
		});
	});
	$(function () {
		$('.about-product .mtabs-head-item').on('click', function () {
			var $tabsList = $('.tabs-head-list');
			var scrollSize = $tabsList.scrollLeft();
			var leftPadding = parseInt($tabsList.css('padding-left'), 10);
			var elementPosition = $(this).offset().left;
			var scrollingNumber = scrollSize + elementPosition - leftPadding;
			$tabsList.animate({scrollLeft: scrollingNumber}, 400);
		});
	});
	$(function () {
		var $footer = $('#footer'), smbtn = $footer.find('.sitemap-btn'), smbody = $footer.find('.sitemap-body');
		smbtn.click(function () {
			if ($(this).hasClass('expand')) {
				$(this).removeClass('expand');
				smbody.slideUp();
			} else {
				$(this).addClass('expand');
				smbody.slideDown();
			}
		});
		$(document).on('tap', function (event) {
			if ($(event.target).closest('.sitemap').length)return;
			smbtn.removeClass('expand');
			smbody.slideUp();
			event.stopPropagation();
		});
	});
	$(function () {
		var sheduleDemo = $('#shedule-demo');
		var chooseClass = ['red', 'yellow', 'blue'];
		sheduleDemo.each(function () {
			var hoveredItem = $(this);
			var rand = Math.floor(Math.random() * chooseClass.length);
			hoveredItem.hover(function () {
				$(this).toggleClass(chooseClass[rand])
			});
		});
	});
	$(function () {
		var signUpProduct = $('#sign-up-product'), signUpHead = signUpProduct.find('.signup-prod-head'), signUpBody = signUpProduct.find('.signup-prod-body'), inputExpand = signUpHead.find('input'), closeBtn = signUpHead.find('.close-btn');
		signUpBody.slideUp();
		inputExpand.on("focus", function () {
			signUpBody.slideDown();
			signUpProduct.removeClass('roll-up');
		});
		closeBtn.on('click', function () {
			signUpBody.slideUp(100);
			signUpProduct.addClass('roll-up');
		})
	});
})(jQuery);
!function () {
	var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, d = e.filter, g = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, w = i.bind, j = function (n) {
		return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
	};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.1";
	var A = j.each = j.forEach = function (n, t, e) {
		if (null != n)if (s && n.forEach === s)n.forEach(t, e); else if (n.length === +n.length) {
			for (var u = 0, i = n.length; i > u; u++)if (t.call(e, n[u], u, n) === r)return
		} else for (var a in n)if (j.has(n, a) && t.call(e, n[a], a, n) === r)return
	};
	j.map = j.collect = function (n, t, r) {
		var e = [];
		return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function (n, u, i) {
			e.push(t.call(r, n, u, i))
		}), e)
	};
	var E = "Reduce of empty array with no initial value";
	j.reduce = j.foldl = j.inject = function (n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), v && n.reduce === v)return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
		if (A(n, function (n, i, a) {
				u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
			}), !u)throw new TypeError(E);
		return r
	}, j.reduceRight = j.foldr = function (n, t, r, e) {
		var u = arguments.length > 2;
		if (null == n && (n = []), h && n.reduceRight === h)return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
		var i = n.length;
		if (i !== +i) {
			var a = j.keys(n);
			i = a.length
		}
		if (A(n, function (o, c, l) {
				c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
			}), !u)throw new TypeError(E);
		return r
	}, j.find = j.detect = function (n, t, r) {
		var e;
		return O(n, function (n, u, i) {
			return t.call(r, n, u, i) ? (e = n, !0) : void 0
		}), e
	}, j.filter = j.select = function (n, t, r) {
		var e = [];
		return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function (n, u, i) {
			t.call(r, n, u, i) && e.push(n)
		}), e)
	}, j.reject = function (n, t, r) {
		return j.filter(n, function (n, e, u) {
			return !t.call(r, n, e, u)
		}, r)
	}, j.every = j.all = function (n, t, e) {
		t || (t = j.identity);
		var u = !0;
		return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function (n, i, a) {
			return (u = u && t.call(e, n, i, a)) ? void 0 : r
		}), !!u)
	};
	var O = j.some = j.any = function (n, t, e) {
		t || (t = j.identity);
		var u = !1;
		return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function (n, i, a) {
			return u || (u = t.call(e, n, i, a)) ? r : void 0
		}), !!u)
	};
	j.contains = j.include = function (n, t) {
		return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function (n) {
			return n === t
		})
	}, j.invoke = function (n, t) {
		var r = o.call(arguments, 2), e = j.isFunction(t);
		return j.map(n, function (n) {
			return (e ? t : n[t]).apply(n, r)
		})
	}, j.pluck = function (n, t) {
		return j.map(n, function (n) {
			return n[t]
		})
	}, j.where = function (n, t, r) {
		return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function (n) {
			for (var r in t)if (t[r] !== n[r])return !1;
			return !0
		})
	}, j.findWhere = function (n, t) {
		return j.where(n, t, !0)
	}, j.max = function (n, t, r) {
		if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)return Math.max.apply(Math, n);
		if (!t && j.isEmpty(n))return -1 / 0;
		var e = {computed: -1 / 0, value: -1 / 0};
		return A(n, function (n, u, i) {
			var a = t ? t.call(r, n, u, i) : n;
			a > e.computed && (e = {value: n, computed: a})
		}), e.value
	}, j.min = function (n, t, r) {
		if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)return Math.min.apply(Math, n);
		if (!t && j.isEmpty(n))return 1 / 0;
		var e = {computed: 1 / 0, value: 1 / 0};
		return A(n, function (n, u, i) {
			var a = t ? t.call(r, n, u, i) : n;
			a < e.computed && (e = {value: n, computed: a})
		}), e.value
	}, j.shuffle = function (n) {
		var t, r = 0, e = [];
		return A(n, function (n) {
			t = j.random(r++), e[r - 1] = e[t], e[t] = n
		}), e
	};
	var F = function (n) {
		return j.isFunction(n) ? n : function (t) {
			return t[n]
		}
	};
	j.sortBy = function (n, t, r) {
		var e = F(t);
		return j.pluck(j.map(n, function (n, t, u) {
			return {value: n, index: t, criteria: e.call(r, n, t, u)}
		}).sort(function (n, t) {
			var r = n.criteria, e = t.criteria;
			if (r !== e) {
				if (r > e || r === void 0)return 1;
				if (e > r || e === void 0)return -1
			}
			return n.index < t.index ? -1 : 1
		}), "value")
	};
	var k = function (n, t, r, e) {
		var u = {}, i = F(null == t ? j.identity : t);
		return A(n, function (t, a) {
			var o = i.call(r, t, a, n);
			e(u, o, t)
		}), u
	};
	j.groupBy = function (n, t, r) {
		return k(n, t, r, function (n, t, r) {
			(j.has(n, t) ? n[t] : n[t] = []).push(r)
		})
	}, j.countBy = function (n, t, r) {
		return k(n, t, r, function (n, t) {
			j.has(n, t) || (n[t] = 0), n[t]++
		})
	}, j.sortedIndex = function (n, t, r, e) {
		r = null == r ? j.identity : F(r);
		for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
			var o = i + a >>> 1;
			r.call(e, n[o]) < u ? i = o + 1 : a = o
		}
		return i
	}, j.toArray = function (n) {
		return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
	}, j.size = function (n) {
		return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
	}, j.first = j.head = j.take = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
	}, j.initial = function (n, t, r) {
		return o.call(n, 0, n.length - (null == t || r ? 1 : t))
	}, j.last = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
	}, j.rest = j.tail = j.drop = function (n, t, r) {
		return o.call(n, null == t || r ? 1 : t)
	}, j.compact = function (n) {
		return j.filter(n, j.identity)
	};
	var R = function (n, t, r) {
		return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function (n) {
			j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
		}), r)
	};
	j.flatten = function (n, t) {
		return R(n, t, [])
	}, j.without = function (n) {
		return j.difference(n, o.call(arguments, 1))
	}, j.uniq = j.unique = function (n, t, r, e) {
		j.isFunction(t) && (e = r, r = t, t = !1);
		var u = r ? j.map(n, r, e) : n, i = [], a = [];
		return A(u, function (r, e) {
			(t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
		}), i
	}, j.union = function () {
		return j.uniq(j.flatten(arguments, !0))
	}, j.intersection = function (n) {
		var t = o.call(arguments, 1);
		return j.filter(j.uniq(n), function (n) {
			return j.every(t, function (t) {
				return j.indexOf(t, n) >= 0
			})
		})
	}, j.difference = function (n) {
		var t = c.apply(e, o.call(arguments, 1));
		return j.filter(n, function (n) {
			return !j.contains(t, n)
		})
	}, j.zip = function () {
		for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++)t[r] = j.pluck(arguments, "" + r);
		return t
	}, j.object = function (n, t) {
		if (null == n)return {};
		for (var r = {}, e = 0, u = n.length; u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, j.indexOf = function (n, t, r) {
		if (null == n)return -1;
		var e = 0, u = n.length;
		if (r) {
			if ("number" != typeof r)return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
			e = 0 > r ? Math.max(0, u + r) : r
		}
		if (y && n.indexOf === y)return n.indexOf(t, r);
		for (; u > e; e++)if (n[e] === t)return e;
		return -1
	}, j.lastIndexOf = function (n, t, r) {
		if (null == n)return -1;
		var e = null != r;
		if (b && n.lastIndexOf === b)return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
		for (var u = e ? r : n.length; u--;)if (n[u] === t)return u;
		return -1
	}, j.range = function (n, t, r) {
		arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;)i[u++] = n, n += r;
		return i
	};
	var M = function () {
	};
	j.bind = function (n, t) {
		var r, e;
		if (w && n.bind === w)return w.apply(n, o.call(arguments, 1));
		if (!j.isFunction(n))throw new TypeError;
		return r = o.call(arguments, 2), e = function () {
			if (!(this instanceof e))return n.apply(t, r.concat(o.call(arguments)));
			M.prototype = n.prototype;
			var u = new M;
			M.prototype = null;
			var i = n.apply(u, r.concat(o.call(arguments)));
			return Object(i) === i ? i : u
		}
	}, j.partial = function (n) {
		var t = o.call(arguments, 1);
		return function () {
			return n.apply(this, t.concat(o.call(arguments)))
		}
	}, j.bindAll = function (n) {
		var t = o.call(arguments, 1);
		if (0 === t.length)throw new Error("bindAll must be passed function names");
		return A(t, function (t) {
			n[t] = j.bind(n[t], n)
		}), n
	}, j.memoize = function (n, t) {
		var r = {};
		return t || (t = j.identity), function () {
			var e = t.apply(this, arguments);
			return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
		}
	}, j.delay = function (n, t) {
		var r = o.call(arguments, 2);
		return setTimeout(function () {
			return n.apply(null, r)
		}, t)
	}, j.defer = function (n) {
		return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
	}, j.throttle = function (n, t, r) {
		var e, u, i, a = null, o = 0;
		r || (r = {});
		var c = function () {
			o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
		};
		return function () {
			var l = new Date;
			o || r.leading !== !1 || (o = l);
			var f = t - (l - o);
			return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
		}
	}, j.debounce = function (n, t, r) {
		var e, u = null;
		return function () {
			var i = this, a = arguments, o = function () {
				u = null, r || (e = n.apply(i, a))
			}, c = r && !u;
			return clearTimeout(u), u = setTimeout(o, t), c && (e = n.apply(i, a)), e
		}
	}, j.once = function (n) {
		var t, r = !1;
		return function () {
			return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
		}
	}, j.wrap = function (n, t) {
		return function () {
			var r = [n];
			return a.apply(r, arguments), t.apply(this, r)
		}
	}, j.compose = function () {
		var n = arguments;
		return function () {
			for (var t = arguments, r = n.length - 1; r >= 0; r--)t = [n[r].apply(this, t)];
			return t[0]
		}
	}, j.after = function (n, t) {
		return function () {
			return --n < 1 ? t.apply(this, arguments) : void 0
		}
	}, j.keys = _ || function (n) {
			if (n !== Object(n))throw new TypeError("Invalid object");
			var t = [];
			for (var r in n)j.has(n, r) && t.push(r);
			return t
		}, j.values = function (n) {
		var t = [];
		for (var r in n)j.has(n, r) && t.push(n[r]);
		return t
	}, j.pairs = function (n) {
		var t = [];
		for (var r in n)j.has(n, r) && t.push([r, n[r]]);
		return t
	}, j.invert = function (n) {
		var t = {};
		for (var r in n)j.has(n, r) && (t[n[r]] = r);
		return t
	}, j.functions = j.methods = function (n) {
		var t = [];
		for (var r in n)j.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, j.extend = function (n) {
		return A(o.call(arguments, 1), function (t) {
			if (t)for (var r in t)n[r] = t[r]
		}), n
	}, j.pick = function (n) {
		var t = {}, r = c.apply(e, o.call(arguments, 1));
		return A(r, function (r) {
			r in n && (t[r] = n[r])
		}), t
	}, j.omit = function (n) {
		var t = {}, r = c.apply(e, o.call(arguments, 1));
		for (var u in n)j.contains(r, u) || (t[u] = n[u]);
		return t
	}, j.defaults = function (n) {
		return A(o.call(arguments, 1), function (t) {
			if (t)for (var r in t)n[r] === void 0 && (n[r] = t[r])
		}), n
	}, j.clone = function (n) {
		return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
	}, j.tap = function (n, t) {
		return t(n), n
	};
	var S = function (n, t, r, e) {
		if (n === t)return 0 !== n || 1 / n == 1 / t;
		if (null == n || null == t)return n === t;
		n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
		var u = l.call(n);
		if (u != l.call(t))return !1;
		switch (u) {
			case"[object String]":
				return n == String(t);
			case"[object Number]":
				return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
			case"[object Date]":
			case"[object Boolean]":
				return +n == +t;
			case"[object RegExp]":
				return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
		}
		if ("object" != typeof n || "object" != typeof t)return !1;
		for (var i = r.length; i--;)if (r[i] == n)return e[i] == t;
		var a = n.constructor, o = t.constructor;
		if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o))return !1;
		r.push(n), e.push(t);
		var c = 0, f = !0;
		if ("[object Array]" == u) {
			if (c = n.length, f = c == t.length)for (; c-- && (f = S(n[c], t[c], r, e)););
		} else {
			for (var s in n)if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))))break;
			if (f) {
				for (s in t)if (j.has(t, s) && !c--)break;
				f = !c
			}
		}
		return r.pop(), e.pop(), f
	};
	j.isEqual = function (n, t) {
		return S(n, t, [], [])
	}, j.isEmpty = function (n) {
		if (null == n)return !0;
		if (j.isArray(n) || j.isString(n))return 0 === n.length;
		for (var t in n)if (j.has(n, t))return !1;
		return !0
	}, j.isElement = function (n) {
		return !(!n || 1 !== n.nodeType)
	}, j.isArray = x || function (n) {
			return "[object Array]" == l.call(n)
		}, j.isObject = function (n) {
		return n === Object(n)
	}, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) {
		j["is" + n] = function (t) {
			return l.call(t) == "[object " + n + "]"
		}
	}), j.isArguments(arguments) || (j.isArguments = function (n) {
		return !(!n || !j.has(n, "callee"))
	}), "function" != typeof/./ && (j.isFunction = function (n) {
		return "function" == typeof n
	}), j.isFinite = function (n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, j.isNaN = function (n) {
		return j.isNumber(n) && n != +n
	}, j.isBoolean = function (n) {
		return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
	}, j.isNull = function (n) {
		return null === n
	}, j.isUndefined = function (n) {
		return n === void 0
	}, j.has = function (n, t) {
		return f.call(n, t)
	}, j.noConflict = function () {
		return n._ = t, this
	}, j.identity = function (n) {
		return n
	}, j.times = function (n, t, r) {
		for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)e[u] = t.call(r, u);
		return e
	}, j.random = function (n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	};
	var I = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
	I.unescape = j.invert(I.escape);
	var T = {escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"), unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")};
	j.each(["escape", "unescape"], function (n) {
		j[n] = function (t) {
			return null == t ? "" : ("" + t).replace(T[n], function (t) {
				return I[n][t]
			})
		}
	}), j.result = function (n, t) {
		if (null == n)return void 0;
		var r = n[t];
		return j.isFunction(r) ? r.call(n) : r
	}, j.mixin = function (n) {
		A(j.functions(n), function (t) {
			var r = j[t] = n[t];
			j.prototype[t] = function () {
				var n = [this._wrapped];
				return a.apply(n, arguments), z.call(this, r.apply(j, n))
			}
		})
	};
	var N = 0;
	j.uniqueId = function (n) {
		var t = ++N + "";
		return n ? n + t : t
	}, j.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
	var q = /(.)^/, B = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", " ": "t", "\u2028": "u2028", "\u2029": "u2029"}, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	j.template = function (n, t, r) {
		var e;
		r = j.defaults({}, r, j.templateSettings);
		var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='";
		n.replace(u, function (t, r, e, u, o) {
			return a += n.slice(i, o).replace(D, function (n) {
				return "\\" + B[n]
			}), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
		}), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
		try {
			e = new Function(r.variable || "obj", "_", a)
		} catch (o) {
			throw o.source = a, o
		}
		if (t)return e(t, j);
		var c = function (n) {
			return e.call(this, n, j)
		};
		return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
	}, j.chain = function (n) {
		return j(n).chain()
	};
	var z = function (n) {
		return this._chain ? j(n).chain() : n
	};
	j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
		var t = e[n];
		j.prototype[n] = function () {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
		}
	}), A(["concat", "join", "slice"], function (n) {
		var t = e[n];
		j.prototype[n] = function () {
			return z.call(this, t.apply(this._wrapped, arguments))
		}
	}), j.extend(j.prototype, {
		chain: function () {
			return this._chain = !0, this
		}, value: function () {
			return this._wrapped
		}
	})
}.call(this);
!function (t) {
	function e(t, e) {
		return function (n) {
			return u(t.call(this, n), e)
		}
	}

	function n(t, e) {
		return function (n) {
			return this.lang().ordinal(t.call(this, n), e)
		}
	}

	function s() {
	}

	function i(t) {
		a(this, t)
	}

	function r(t) {
		var e = t.years || t.year || t.y || 0, n = t.months || t.month || t.M || 0, s = t.weeks || t.week || t.w || 0, i = t.days || t.day || t.d || 0, r = t.hours || t.hour || t.h || 0, a = t.minutes || t.minute || t.m || 0, o = t.seconds || t.second || t.s || 0, u = t.milliseconds || t.millisecond || t.ms || 0;
		this._input = t, this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r, this._days = i + 7 * s, this._months = n + 12 * e, this._data = {}, this._bubble()
	}

	function a(t, e) {
		for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}

	function o(t) {
		return 0 > t ? Math.ceil(t) : Math.floor(t)
	}

	function u(t, e) {
		for (var n = t + ""; n.length < e;)n = "0" + n;
		return n
	}

	function h(t, e, n, s) {
		var i, r, a = e._milliseconds, o = e._days, u = e._months;
		a && t._d.setTime(+t._d + a * n), (o || u) && (i = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), u && t.month(t.month() + u * n), a && !s && H.updateOffset(t), (o || u) && (t.minute(i), t.hour(r))
	}

	function d(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}

	function c(t, e) {
		var n, s = Math.min(t.length, e.length), i = Math.abs(t.length - e.length), r = 0;
		for (n = 0; s > n; n++)~~t[n] !== ~~e[n] && r++;
		return r + i
	}

	function f(t) {
		return t ? ie[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
	}

	function l(t, e) {
		return e.abbr = t, x[t] || (x[t] = new s), x[t].set(e), x[t]
	}

	function _(t) {
		if (!t)return H.fn._lang;
		if (!x[t] && A)try {
			require("./lang/" + t)
		} catch (e) {
			return H.fn._lang
		}
		return x[t]
	}

	function m(t) {
		return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}

	function y(t) {
		var e, n, s = t.match(E);
		for (e = 0, n = s.length; n > e; e++)s[e] = ue[s[e]] ? ue[s[e]] : m(s[e]);
		return function (i) {
			var r = "";
			for (e = 0; n > e; e++)r += s[e]instanceof Function ? s[e].call(i, t) : s[e];
			return r
		}
	}

	function M(t, e) {
		function n(e) {
			return t.lang().longDateFormat(e) || e
		}

		for (var s = 5; s-- && N.test(e);)e = e.replace(N, n);
		return re[e] || (re[e] = y(e)), re[e](t)
	}

	function g(t, e) {
		switch (t) {
			case"DDDD":
				return V;
			case"YYYY":
				return X;
			case"YYYYY":
				return $;
			case"S":
			case"SS":
			case"SSS":
			case"DDD":
				return I;
			case"MMM":
			case"MMMM":
			case"dd":
			case"ddd":
			case"dddd":
				return R;
			case"a":
			case"A":
				return _(e._l)._meridiemParse;
			case"X":
				return B;
			case"Z":
			case"ZZ":
				return j;
			case"T":
				return q;
			case"MM":
			case"DD":
			case"YY":
			case"HH":
			case"hh":
			case"mm":
			case"ss":
			case"M":
			case"D":
			case"d":
			case"H":
			case"h":
			case"m":
			case"s":
				return J;
			default:
				return new RegExp(t.replace("\\", ""))
		}
	}

	function p(t) {
		var e = (j.exec(t) || [])[0], n = (e + "").match(ee) || ["-", 0, 0], s = +(60 * n[1]) + ~~n[2];
		return "+" === n[0] ? -s : s
	}

	function D(t, e, n) {
		var s, i = n._a;
		switch (t) {
			case"M":
			case"MM":
				i[1] = null == e ? 0 : ~~e - 1;
				break;
			case"MMM":
			case"MMMM":
				s = _(n._l).monthsParse(e), null != s ? i[1] = s : n._isValid = !1;
				break;
			case"D":
			case"DD":
			case"DDD":
			case"DDDD":
				null != e && (i[2] = ~~e);
				break;
			case"YY":
				i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
				break;
			case"YYYY":
			case"YYYYY":
				i[0] = ~~e;
				break;
			case"a":
			case"A":
				n._isPm = _(n._l).isPM(e);
				break;
			case"H":
			case"HH":
			case"h":
			case"hh":
				i[3] = ~~e;
				break;
			case"m":
			case"mm":
				i[4] = ~~e;
				break;
			case"s":
			case"ss":
				i[5] = ~~e;
				break;
			case"S":
			case"SS":
			case"SSS":
				i[6] = ~~(1e3 * ("0." + e));
				break;
			case"X":
				n._d = new Date(1e3 * parseFloat(e));
				break;
			case"Z":
			case"ZZ":
				n._useUTC = !0, n._tzm = p(e)
		}
		null == e && (n._isValid = !1)
	}

	function Y(t) {
		var e, n, s = [];
		if (!t._d) {
			for (e = 0; 7 > e; e++)t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
		}
	}

	function w(t) {
		var e, n, s = t._f.match(E), i = t._i;
		for (t._a = [], e = 0; e < s.length; e++)n = (g(s[e], t).exec(i) || [])[0], n && (i = i.slice(i.indexOf(n) + n.length)), ue[s[e]] && D(s[e], n, t);
		i && (t._il = i), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), Y(t)
	}

	function k(t) {
		var e, n, s, r, o, u = 99;
		for (r = 0; r < t._f.length; r++)e = a({}, t), e._f = t._f[r], w(e), n = new i(e), o = c(e._a, n.toArray()), n._il && (o += n._il.length), u > o && (u = o, s = n);
		a(t, s)
	}

	function v(t) {
		var e, n = t._i, s = K.exec(n);
		if (s) {
			for (t._f = "YYYY-MM-DD" + (s[2] || " "), e = 0; 4 > e; e++)if (te[e][1].exec(n)) {
				t._f += te[e][0];
				break
			}
			j.exec(n) && (t._f += " Z"), w(t)
		} else t._d = new Date(n)
	}

	function T(e) {
		var n = e._i, s = G.exec(n);
		n === t ? e._d = new Date : s ? e._d = new Date(+s[1]) : "string" == typeof n ? v(e) : d(n) ? (e._a = n.slice(0), Y(e)) : e._d = n instanceof Date ? new Date(+n) : new Date(n)
	}

	function b(t, e, n, s, i) {
		return i.relativeTime(e || 1, !!n, t, s)
	}

	function S(t, e, n) {
		var s = W(Math.abs(t) / 1e3), i = W(s / 60), r = W(i / 60), a = W(r / 24), o = W(a / 365), u = 45 > s && ["s", s] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", W(a / 30)] || 1 === o && ["y"] || ["yy", o];
		return u[2] = e, u[3] = t > 0, u[4] = n, b.apply({}, u)
	}

	function F(t, e, n) {
		var s, i = n - e, r = n - t.day();
		return r > i && (r -= 7), i - 7 > r && (r += 7), s = H(t).add("d", r), {week: Math.ceil(s.dayOfYear() / 7), year: s.year()}
	}

	function O(t) {
		var e = t._i, n = t._f;
		return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), H.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? d(n) ? k(t) : w(t) : T(t), new i(t))
	}

	function z(t, e) {
		H.fn[t] = H.fn[t + "s"] = function (t) {
			var n = this._isUTC ? "UTC" : "";
			return null != t ? (this._d["set" + n + e](t), H.updateOffset(this), this) : this._d["get" + n + e]()
		}
	}

	function C(t) {
		H.duration.fn[t] = function () {
			return this._data[t]
		}
	}

	function L(t, e) {
		H.duration.fn["as" + t] = function () {
			return +this / e
		}
	}

	for (var H, P, U = "2.1.0", W = Math.round, x = {}, A = "undefined" != typeof module && module.exports, G = /^\/?Date\((\-?\d+)/i, Z = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, I = /\d{1,3}/, V = /\d{3}/, X = /\d{1,4}/, $ = /[+\-]?\d{1,6}/, R = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, j = /Z|[\+\-]\d\d:?\d\d/i, q = /T/i, B = /[\+\-]?\d+(\.\d{1,3})?/, K = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Q = "YYYY-MM-DDTHH:mm:ssZ", te = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], ee = /([\+\-]|\d\d)/gi, ne = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), se = {
		Milliseconds: 1,
		Seconds: 1e3,
		Minutes: 6e4,
		Hours: 36e5,
		Days: 864e5,
		Months: 2592e6,
		Years: 31536e6
	}, ie = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", w: "week", M: "month", y: "year"}, re = {}, ae = "DDD w W M D d".split(" "), oe = "M D H h m s w W".split(" "), ue = {
		M: function () {
			return this.month() + 1
		}, MMM: function (t) {
			return this.lang().monthsShort(this, t)
		}, MMMM: function (t) {
			return this.lang().months(this, t)
		}, D: function () {
			return this.date()
		}, DDD: function () {
			return this.dayOfYear()
		}, d: function () {
			return this.day()
		}, dd: function (t) {
			return this.lang().weekdaysMin(this, t)
		}, ddd: function (t) {
			return this.lang().weekdaysShort(this, t)
		}, dddd: function (t) {
			return this.lang().weekdays(this, t)
		}, w: function () {
			return this.week()
		}, W: function () {
			return this.isoWeek()
		}, YY: function () {
			return u(this.year() % 100, 2)
		}, YYYY: function () {
			return u(this.year(), 4)
		}, YYYYY: function () {
			return u(this.year(), 5)
		}, gg: function () {
			return u(this.weekYear() % 100, 2)
		}, gggg: function () {
			return this.weekYear()
		}, ggggg: function () {
			return u(this.weekYear(), 5)
		}, GG: function () {
			return u(this.isoWeekYear() % 100, 2)
		}, GGGG: function () {
			return this.isoWeekYear()
		}, GGGGG: function () {
			return u(this.isoWeekYear(), 5)
		}, e: function () {
			return this.weekday()
		}, E: function () {
			return this.isoWeekday()
		}, a: function () {
			return this.lang().meridiem(this.hours(), this.minutes(), !0)
		}, A: function () {
			return this.lang().meridiem(this.hours(), this.minutes(), !1)
		}, H: function () {
			return this.hours()
		}, h: function () {
			return this.hours() % 12 || 12
		}, m: function () {
			return this.minutes()
		}, s: function () {
			return this.seconds()
		}, S: function () {
			return ~~(this.milliseconds() / 100)
		}, SS: function () {
			return u(~~(this.milliseconds() / 10), 2)
		}, SSS: function () {
			return u(this.milliseconds(), 3)
		}, Z: function () {
			var t = -this.zone(), e = "+";
			return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2)
		}, ZZ: function () {
			var t = -this.zone(), e = "+";
			return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4)
		}, z: function () {
			return this.zoneAbbr()
		}, zz: function () {
			return this.zoneName()
		}, X: function () {
			return this.unix()
		}
	}; ae.length;)P = ae.pop(), ue[P + "o"] = n(ue[P], P);
	for (; oe.length;)P = oe.pop(), ue[P + P] = e(ue[P], 2);
	for (ue.DDDD = e(ue.DDD, 3), s.prototype = {
		set: function (t) {
			var e, n;
			for (n in t)e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
		},
		_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months: function (t) {
			return this._months[t.month()]
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function (t) {
			return this._monthsShort[t.month()]
		},
		monthsParse: function (t) {
			var e, n, s;
			for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)if (this._monthsParse[e] || (n = H([2e3, e]), s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")), this._monthsParse[e].test(t))return e
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function (t) {
			return this._weekdays[t.day()]
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function (t) {
			return this._weekdaysShort[t.day()]
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function (t) {
			return this._weekdaysMin[t.day()]
		},
		weekdaysParse: function (t) {
			var e, n, s;
			for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)if (this._weekdaysParse[e] || (n = H([2e3, 1]).day(e), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t))return e
		},
		_longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"},
		longDateFormat: function (t) {
			var e = this._longDateFormat[t];
			return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
				return t.slice(1)
			}), this._longDateFormat[t] = e), e
		},
		isPM: function (t) {
			return "p" === (t + "").toLowerCase()[0]
		},
		_meridiemParse: /[ap]\.?m?\.?/i,
		meridiem: function (t, e, n) {
			return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
		},
		_calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"},
		calendar: function (t, e) {
			var n = this._calendar[t];
			return "function" == typeof n ? n.apply(e) : n
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function (t, e, n, s) {
			var i = this._relativeTime[n];
			return "function" == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t)
		},
		pastFuture: function (t, e) {
			var n = this._relativeTime[t > 0 ? "future" : "past"];
			return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
		},
		ordinal: function (t) {
			return this._ordinal.replace("%d", t)
		},
		_ordinal: "%d",
		preparse: function (t) {
			return t
		},
		postformat: function (t) {
			return t
		},
		week: function (t) {
			return F(t, this._week.dow, this._week.doy).week
		},
		_week: {dow: 0, doy: 6}
	}, H = function (t, e, n) {
		return O({_i: t, _f: e, _l: n, _isUTC: !1})
	}, H.utc = function (t, e, n) {
		return O({_useUTC: !0, _isUTC: !0, _l: n, _i: t, _f: e})
	}, H.unix = function (t) {
		return H(1e3 * t)
	}, H.duration = function (t, e) {
		var n, s, i = H.isDuration(t), a = "number" == typeof t, o = i ? t._input : a ? {} : t, u = Z.exec(t);
		return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, o = {
			y: 0,
			d: ~~u[2] * n,
			h: ~~u[3] * n,
			m: ~~u[4] * n,
			s: ~~u[5] * n,
			ms: ~~u[6] * n
		}), s = new r(o), i && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
	}, H.version = U, H.defaultFormat = Q, H.updateOffset = function () {
	}, H.lang = function (t, e) {
		return t ? (e ? l(t, e) : x[t] || _(t), H.duration.fn._lang = H.fn._lang = _(t), void 0) : H.fn._lang._abbr
	}, H.langData = function (t) {
		return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t)
	}, H.isMoment = function (t) {
		return t instanceof i
	}, H.isDuration = function (t) {
		return t instanceof r
	}, H.fn = i.prototype = {
		clone: function () {
			return H(this)
		}, valueOf: function () {
			return +this._d + 6e4 * (this._offset || 0)
		}, unix: function () {
			return Math.floor(+this / 1e3)
		}, toString: function () {
			return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		}, toDate: function () {
			return this._offset ? new Date(+this) : this._d
		}, toISOString: function () {
			return M(H(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		}, toArray: function () {
			var t = this;
			return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
		}, isValid: function () {
			return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? H.utc(this._a) : H(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
		}, utc: function () {
			return this.zone(0)
		}, local: function () {
			return this.zone(0), this._isUTC = !1, this
		}, format: function (t) {
			var e = M(this, t || H.defaultFormat);
			return this.lang().postformat(e)
		}, add: function (t, e) {
			var n;
			return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, 1), this
		}, subtract: function (t, e) {
			var n;
			return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, -1), this
		}, diff: function (t, e, n) {
			var s, i, r = this._isUTC ? H(t).zone(this._offset || 0) : H(t).local(), a = 6e4 * (this.zone() - r.zone());
			return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), i = 12 * (this.year() - r.year()) + (this.month() - r.month()), i += (this - H(this).startOf("month") - (r - H(r).startOf("month"))) / s, i -= 6e4 * (this.zone() - H(this).startOf("month").zone() - (r.zone() - H(r).startOf("month").zone())) / s, "year" === e && (i /= 12)) : (s = this - r, i = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - a) / 864e5 : "week" === e ? (s - a) / 6048e5 : s), n ? i : o(i)
		}, from: function (t, e) {
			return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
		}, fromNow: function (t) {
			return this.from(H(), t)
		}, calendar: function () {
			var t = this.diff(H().startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
			return this.format(this.lang().calendar(e, this))
		}, isLeapYear: function () {
			var t = this.year();
			return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
		}, isDST: function () {
			return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
		}, day: function (t) {
			var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({d: t - e}) : e
		}, month: function (t) {
			var e, n = this._isUTC ? "UTC" : "";
			return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), H.updateOffset(this), this) : this._d["get" + n + "Month"]()
		}, startOf: function (t) {
			switch (t = f(t)) {
				case"year":
					this.month(0);
				case"month":
					this.date(1);
				case"week":
				case"day":
					this.hours(0);
				case"hour":
					this.minutes(0);
				case"minute":
					this.seconds(0);
				case"second":
					this.milliseconds(0)
			}
			return "week" === t && this.weekday(0), this
		}, endOf: function (t) {
			return this.startOf(t).add(t, 1).subtract("ms", 1)
		}, isAfter: function (t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +H(t).startOf(e)
		}, isBefore: function (t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +H(t).startOf(e)
		}, isSame: function (t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +H(t).startOf(e)
		}, min: function (t) {
			return t = H.apply(null, arguments), this > t ? this : t
		}, max: function (t) {
			return t = H.apply(null, arguments), t > this ? this : t
		}, zone: function (t) {
			var e = this._offset || 0;
			return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = p(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && h(this, H.duration(e - t, "m"), 1, !0), this)
		}, zoneAbbr: function () {
			return this._isUTC ? "UTC" : ""
		}, zoneName: function () {
			return this._isUTC ? "Coordinated Universal Time" : ""
		}, daysInMonth: function () {
			return H.utc([this.year(), this.month() + 1, 0]).date()
		}, dayOfYear: function (t) {
			var e = W((H(this).startOf("day") - H(this).startOf("year")) / 864e5) + 1;
			return null == t ? e : this.add("d", t - e)
		}, weekYear: function (t) {
			var e = F(this, this.lang()._week.dow, this.lang()._week.doy).year;
			return null == t ? e : this.add("y", t - e)
		}, isoWeekYear: function (t) {
			var e = F(this, 1, 4).year;
			return null == t ? e : this.add("y", t - e)
		}, week: function (t) {
			var e = this.lang().week(this);
			return null == t ? e : this.add("d", 7 * (t - e))
		}, isoWeek: function (t) {
			var e = F(this, 1, 4).week;
			return null == t ? e : this.add("d", 7 * (t - e))
		}, weekday: function (t) {
			var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
			return null == t ? e : this.add("d", t - e)
		}, isoWeekday: function (t) {
			return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
		}, lang: function (e) {
			return e === t ? this._lang : (this._lang = _(e), this)
		}
	}, P = 0; P < ne.length; P++)z(ne[P].toLowerCase().replace(/s$/, ""), ne[P]);
	z("year", "FullYear"), H.fn.days = H.fn.day, H.fn.months = H.fn.month, H.fn.weeks = H.fn.week, H.fn.isoWeeks = H.fn.isoWeek, H.fn.toJSON = H.fn.toISOString, H.duration.fn = r.prototype = {
		_bubble: function () {
			var t, e, n, s, i = this._milliseconds, r = this._days, a = this._months, u = this._data;
			u.milliseconds = i % 1e3, t = o(i / 1e3), u.seconds = t % 60, e = o(t / 60), u.minutes = e % 60, n = o(e / 60), u.hours = n % 24, r += o(n / 24), u.days = r % 30, a += o(r / 30), u.months = a % 12, s = o(a / 12), u.years = s
		}, weeks: function () {
			return o(this.days() / 7)
		}, valueOf: function () {
			return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
		}, humanize: function (t) {
			var e = +this, n = S(e, !t, this.lang());
			return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
		}, add: function (t, e) {
			var n = H.duration(t, e);
			return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
		}, subtract: function (t, e) {
			var n = H.duration(t, e);
			return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
		}, get: function (t) {
			return t = f(t), this[t.toLowerCase() + "s"]()
		}, as: function (t) {
			return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
		}, lang: H.fn.lang
	};
	for (P in se)se.hasOwnProperty(P) && (L(P, se[P]), C(P.toLowerCase()));
	L("Weeks", 6048e5), H.duration.fn.asMonths = function () {
		return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, H.lang("en", {
		ordinal: function (t) {
			var e = t % 10, n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
			return t + n
		}
	}), A && (module.exports = H), "undefined" == typeof ender && (this.moment = H), "function" == typeof define && define.amd && define("moment", [], function () {
		return H
	})
}.call(this);
(function () {
	function t(t) {
		function n(t) {
			t += "";
			var e = t.split(":"), n = ~t.indexOf("-") ? -1 : 1, s = Math.abs(+e[0]), r = parseInt(e[1], 10) || 0, i = parseInt(e[2], 10) || 0;
			return n * (60 * s + r + i / 60)
		}

		function s(t, e, s, r, i, u, a, o, h, f) {
			this.name = t, this.startYear = +e, this.endYear = +s, this.month = +r, this.day = +i, this.dayRule = +u, this.time = n(a), this.timeRule = +o, this.offset = n(h), this.letters = f || ""
		}

		function r(t, e) {
			this.rule = e, this.start = e.start(t)
		}

		function i(t, e) {
			return t.isLast ? -1 : e.isLast ? 1 : e.start - t.start
		}

		function u(t) {
			this.name = t, this.rules = []
		}

		function a(e, s, r, i, u, a) {
			var o, h = "string" == typeof u ? u.split("_") : [9999];
			for (this.name = e, this.offset = n(s), this.ruleSet = r, this.letters = i, o = 0; h.length > o; o++)h[o] = +h[o];
			this.until = t.utc(h).subtract("m", n(a))
		}

		function o(t, e) {
			return t.until - e.until
		}

		function h(t) {
			this.name = d(t), this.displayName = t, this.zones = []
		}

		function f(t) {
			var e, n, s;
			for (e in t)for (s = t[e], n = 0; s.length > n; n++)l(e + " " + s[n])
		}

		function l(t) {
			if (g[t])return g[t];
			var e = t.split(/\s/), n = d(e[0]), r = new s(n, e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10]);
			return g[t] = r, z(n).add(r), r
		}

		function d(t) {
			return (t || "").toLowerCase().replace(/\//g, "_")
		}

		function c(t) {
			var e, n, s;
			for (e in t)for (s = t[e], n = 0; s.length > n; n++)p(e + " " + s[n])
		}

		function m(t) {
			var e;
			for (e in t)A[d(e)] = d(t[e])
		}

		function p(t) {
			if (b[t])return b[t];
			var e = t.split(/\s/), n = d(e[0]), s = new a(n, e[1], z(e[2]), e[3], e[4], e[5]);
			return b[t] = s, y(e[0]).add(s), s
		}

		function z(t) {
			return t = d(t), Y[t] || (Y[t] = new u(t)), Y[t]
		}

		function y(t) {
			var e = d(t);
			return A[e] && (e = A[e]), M[e] || (M[e] = new h(t)), M[e]
		}

		function v(t) {
			t && (t.zones && c(t.zones), t.rules && f(t.rules), t.links && m(t.links))
		}

		var R, w = t.fn.zoneName, _ = t.fn.zoneAbbr, g = {}, Y = {}, b = {}, M = {}, A = {}, k = 1, L = 2, N = 7, q = 8;
		return s.prototype = {
			contains: function (t) {
				return t >= this.startYear && this.endYear >= t
			}, start: function (e) {
				return e = Math.min(Math.max(e, this.startYear), this.endYear), t.utc([e, this.month, this.date(e), 0, this.time])
			}, date: function (t) {
				return this.dayRule === N ? this.day : this.dayRule === q ? this.lastWeekday(t) : this.weekdayAfter(t)
			}, weekdayAfter: function (e) {
				for (var n = this.day, s = t([e, this.month, 1]).day(), r = this.dayRule + 1 - s; n > r;)r += 7;
				return r
			}, lastWeekday: function (e) {
				var n = this.day, s = n % 7, r = t([e, this.month + 1, 1]).day(), i = t([e, this.month, 1]).daysInMonth(), u = i + (s - (r - 1)) - 7 * ~~(n / 7);
				return s >= r && (u -= 7), u
			}
		}, r.prototype = {
			equals: function (t) {
				return t && t.rule === this.rule ? 864e5 > Math.abs(t.start - this.start) : !1
			}
		}, u.prototype = {
			add: function (t) {
				this.rules.push(t)
			}, ruleYears: function (t, e) {
				var n, s, u, a = t.year(), o = [];
				for (n = 0; this.rules.length > n; n++)s = this.rules[n], s.contains(a) ? o.push(new r(a, s)) : s.contains(a + 1) && o.push(new r(a + 1, s));
				return o.push(new r(a - 1, this.lastYearRule(a - 1))), e && (u = new r(a - 1, e.lastRule()), u.start = e.until.clone().utc(), u.isLast = e.ruleSet !== this, o.push(u)), o.sort(i), o
			}, rule: function (t, e, n) {
				var s, r, i, u, a, o = this.ruleYears(t, n), h = 0;
				for (n && (r = n.offset + n.lastRule().offset, i = 9e4 * Math.abs(r)), a = o.length - 1; a > -1; a--)u = s, s = o[a], s.equals(u) || (n && !s.isLast && i >= Math.abs(s.start - n.until) && (h += r - e), s.rule.timeRule === L && (h = e), s.rule.timeRule !== k && s.start.add("m", -h), h = s.rule.offset + e);
				for (a = 0; o.length > a; a++)if (s = o[a], t >= s.start && !s.isLast)return s.rule;
				return R
			}, lastYearRule: function (t) {
				var e, n, s, r = R, i = -1e30;
				for (e = 0; this.rules.length > e; e++)n = this.rules[e], t >= n.startYear && (s = n.start(t), s > i && (i = s, r = n));
				return r
			}
		}, a.prototype = {
			rule: function (t, e) {
				return this.ruleSet.rule(t, this.offset, e)
			}, lastRule: function () {
				return this._lastRule || (this._lastRule = this.rule(this.until)), this._lastRule
			}, format: function (t) {
				return this.letters.replace("%s", t.letters)
			}
		}, h.prototype = {
			zoneAndRule: function (t) {
				var e, n, s;
				for (t = t.clone().utc(), e = 0; this.zones.length > e && (n = this.zones[e], !(n.until > t)); e++)s = n;
				return [n, n.rule(t, s)]
			}, add: function (t) {
				this.zones.push(t), this.zones.sort(o)
			}, format: function (t) {
				var e = this.zoneAndRule(t);
				return e[0].format(e[1])
			}, offset: function (t) {
				var e = this.zoneAndRule(t);
				return -(e[0].offset + e[1].offset)
			}
		}, t.updateOffset = function (t) {
			var e;
			t._z && (e = t._z.offset(t), 16 > Math.abs(e) && (e /= 60), t.zone(e))
		}, t.fn.tz = function (e) {
			return e ? (this._z = y(e), this._z && t.updateOffset(this), this) : this._z ? this._z.displayName : void 0
		}, t.fn.zoneName = function () {
			return this._z ? this._z.format(this) : w.call(this)
		}, t.fn.zoneAbbr = function () {
			return this._z ? this._z.format(this) : _.call(this)
		}, t.tz = function () {
			var e, n = [], s = arguments.length - 1;
			for (e = 0; s > e; e++)n[e] = arguments[e];
			return t.apply(null, n).tz(arguments[s])
		}, t.tz.add = v, t.tz.addRule = l, t.tz.addZone = p, t.tz.version = e, R = l("- 0 9999 0 0 0 0 0 0"), t
	}

	var e = "0.0.1";
	"function" == typeof define && define.amd ? define("moment-timezone", ["moment"], t) : "undefined" != typeof window && window.moment ? t(window.moment) : "undefined" != typeof module && (module.exports = t(require("./moment")))
}).apply(this);

moment.tz.add({
	"zones": {
		"America/Adak": ["12:13:21 - LMT 1867_9_18 12:13:21", "-11:46:38 - LMT 1900_7_20_12 -11:46:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-10 US AH%sT 1983_10_30 -10", "-10 US HA%sT"],
		"America/Anchorage": ["14:0:24 - LMT 1867_9_18 14:0:24", "-9:59:36 - LMT 1900_7_20_12 -9:59:36", "-10 - CAT 1942 -10", "-10 US CAT/CAWT 1945_7_14_23", "-10 US CAT/CAPT 1946 -10", "-10 - CAT 1967_3 -10", "-10 - AHST 1969 -10", "-10 US AH%sT 1983_9_30_2 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
		"America/Anguilla": ["-4:12:16 - LMT 1912_2_2 -4:12:16", "-4 - AST"],
		"America/Antigua": ["-4:7:12 - LMT 1912_2_2 -4:7:12", "-5 - EST 1951 -5", "-4 - AST"],
		"America/Araguaina": ["-3:12:48 - LMT 1914 -3:12:48", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_8_14 -3", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2012_9_21 -3", "-3 Brazil BR%sT"],
		"America/Argentina/Buenos_Aires": ["-3:53:48 - LMT 1894_9_31 -3:53:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],
		"America/Argentina/Catamarca": ["-4:23:8 - LMT 1894_9_31 -4:23:8", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/Cordoba": ["-4:16:48 - LMT 1894_9_31 -4:16:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],
		"America/Argentina/Jujuy": ["-4:21:12 - LMT 1894_9_31 -4:21:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_28 -4", "-3 - WARST 1991_2_17 -3", "-4 - WART 1991_9_6 -4", "-2 - ARST 1992 -2", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/La_Rioja": ["-4:27:24 - LMT 1894_9_31 -4:27:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/Mendoza": ["-4:35:16 - LMT 1894_9_31 -4:35:16", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_9_15 -4", "-3 - WARST 1992_2_1 -3", "-4 - WART 1992_9_18 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_23 -3", "-4 - WART 2004_8_26 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/Rio_Gallegos": ["-4:36:52 - LMT 1894_9_31 -4:36:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/Salta": ["-4:21:40 - LMT 1894_9_31 -4:21:40", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/San_Juan": ["-4:34:4 - LMT 1894_9_31 -4:34:4", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Argentina/San_Luis": ["-4:25:24 - LMT 1894_9_31 -4:25:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990 -2", "-2 - ARST 1990_2_14 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_5_1 -4", "-3 - ART 1999_9_3 -3", "-3 - WARST 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_0_21 -2", "-4 SanLuis WAR%sT"],
		"America/Argentina/Tucuman": ["-4:20:52 - LMT 1894_9_31 -4:20:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_13 -4", "-3 Arg AR%sT"],
		"America/Argentina/Ushuaia": ["-4:33:12 - LMT 1894_9_31 -4:33:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_30 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],
		"America/Aruba": ["-4:40:24 - LMT 1912_1_12 -4:40:24", "-4:30 - ANT 1965 -4:30", "-4 - AST"],
		"America/Asuncion": ["-3:50:40 - LMT 1890 -3:50:40", "-3:50:40 - AMT 1931_9_10 -3:50:40", "-4 - PYT 1972_9 -4", "-3 - PYT 1974_3 -3", "-4 Para PY%sT"],
		"America/Atikokan": ["-6:6:28 - LMT 1895 -6:6:28", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT 1945_8_30_2 -5", "-5 - EST"],
		"America/Bahia": ["-2:34:4 - LMT 1914 -2:34:4", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2011_9_16 -3", "-3 Brazil BR%sT 2012_9_21 -3", "-3 - BRT"],
		"America/Bahia_Banderas": ["-7:1 - LMT 1921_11_31_23_59 -7:1", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 2010_3_4_2 -7", "-6 Mexico C%sT"],
		"America/Barbados": ["-3:58:29 - LMT 1924 -3:58:29", "-3:58:29 - BMT 1932 -3:58:29", "-4 Barb A%sT"],
		"America/Belem": ["-3:13:56 - LMT 1914 -3:13:56", "-3 Brazil BR%sT 1988_8_12 -3", "-3 - BRT"],
		"America/Belize": ["-5:52:48 - LMT 1912_3 -5:52:48", "-6 Belize C%sT"],
		"America/Blanc-Sablon": ["-3:48:28 - LMT 1884 -3:48:28", "-4 Canada A%sT 1970 -4", "-4 - AST"],
		"America/Boa_Vista": ["-4:2:40 - LMT 1914 -4:2:40", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1999_8_30 -4", "-4 Brazil AM%sT 2000_9_15 -3", "-4 - AMT"],
		"America/Bogota": ["-4:56:16 - LMT 1884_2_13 -4:56:16", "-4:56:16 - BMT 1914_10_23 -4:56:16", "-5 CO CO%sT"],
		"America/Boise": ["-7:44:49 - LMT 1883_10_18_12_15_11 -7:44:49", "-8 US P%sT 1923_4_13_2 -8", "-7 US M%sT 1974 -7", "-7 - MST 1974_1_3_2 -7", "-7 US M%sT"],
		"America/Cambridge_Bay": ["0 - zzz 1920", "-7 NT_YK M%sT 1999_9_31_2 -6", "-6 Canada C%sT 2000_9_29_2 -5", "-5 - EST 2000_10_5_0 -5", "-6 - CST 2001_3_1_3 -6", "-7 Canada M%sT"],
		"America/Campo_Grande": ["-3:38:28 - LMT 1914 -3:38:28", "-4 Brazil AM%sT"],
		"America/Cancun": ["-5:47:4 - LMT 1922_0_1_0_12_56 -5:47:4", "-6 - CST 1981_11_23 -6", "-5 Mexico E%sT 1998_7_2_2 -4", "-6 Mexico C%sT"],
		"America/Caracas": ["-4:27:44 - LMT 1890 -4:27:44", "-4:27:40 - CMT 1912_1_12 -4:27:40", "-4:30 - VET 1965 -4:30", "-4 - VET 2007_11_9_03 -4", "-4:30 - VET"],
		"America/Cayenne": ["-3:29:20 - LMT 1911_6 -3:29:20", "-4 - GFT 1967_9 -4", "-3 - GFT"],
		"America/Cayman": ["-5:25:32 - LMT 1890 -5:25:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST"],
		"America/Chicago": ["-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36", "-6 US C%sT 1920 -6", "-6 Chicago C%sT 1936_2_1_2 -6", "-5 - EST 1936_10_15_2 -5", "-6 Chicago C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Chicago C%sT 1967 -6", "-6 US C%sT"],
		"America/Chihuahua": ["-7:4:20 - LMT 1921_11_31_23_55_40 -7:4:20", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT"],
		"America/Costa_Rica": ["-5:36:13 - LMT 1890 -5:36:13", "-5:36:13 - SJMT 1921_0_15 -5:36:13", "-6 CR C%sT"],
		"America/Creston": ["-7:46:4 - LMT 1884 -7:46:4", "-7 - MST 1916_9_1 -7", "-8 - PST 1918_5_2 -8", "-7 - MST"],
		"America/Cuiaba": ["-3:44:20 - LMT 1914 -3:44:20", "-4 Brazil AM%sT 2003_8_24 -4", "-4 - AMT 2004_9_1 -4", "-4 Brazil AM%sT"],
		"America/Curacao": ["-4:35:47 - LMT 1912_1_12 -4:35:47", "-4:30 - ANT 1965 -4:30", "-4 - AST"],
		"America/Danmarkshavn": ["-1:14:40 - LMT 1916_6_28 -1:14:40", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT 1996 -3", "0 - GMT"],
		"America/Dawson": ["-9:17:40 - LMT 1900_7_20 -9:17:40", "-9 NT_YK Y%sT 1973_9_28_0 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],
		"America/Dawson_Creek": ["-8:0:56 - LMT 1884 -8:0:56", "-8 Canada P%sT 1947 -8", "-8 Vanc P%sT 1972_7_30_2 -7", "-7 - MST"],
		"America/Denver": ["-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56", "-7 US M%sT 1920 -7", "-7 Denver M%sT 1942 -7", "-7 US M%sT 1946 -7", "-7 Denver M%sT 1967 -7", "-7 US M%sT"],
		"America/Detroit": ["-5:32:11 - LMT 1905 -5:32:11", "-6 - CST 1915_4_15_2 -6", "-5 - EST 1942 -5", "-5 US E%sT 1946 -5", "-5 Detroit E%sT 1973 -5", "-5 US E%sT 1975 -5", "-5 - EST 1975_3_27_2 -5", "-5 US E%sT"],
		"America/Dominica": ["-4:5:36 - LMT 1911_6_1_0_1 -4:5:36", "-4 - AST"],
		"America/Edmonton": ["-7:33:52 - LMT 1906_8 -7:33:52", "-7 Edm M%sT 1987 -7", "-7 Canada M%sT"],
		"America/Eirunepe": ["-4:39:28 - LMT 1914 -4:39:28", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 1993_8_28 -5", "-5 Brazil AC%sT 1994_8_22 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],
		"America/El_Salvador": ["-5:56:48 - LMT 1921 -5:56:48", "-6 Salv C%sT"],
		"America/Fortaleza": ["-2:34 - LMT 1914 -2:34", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
		"America/Glace_Bay": ["-3:59:48 - LMT 1902_5_15 -3:59:48", "-4 Canada A%sT 1953 -4", "-4 Halifax A%sT 1954 -4", "-4 - AST 1972 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],
		"America/Godthab": ["-3:26:56 - LMT 1916_6_28 -3:26:56", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT"],
		"America/Goose_Bay": ["-4:1:40 - LMT 1884 -4:1:40", "-3:30:52 - NST 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 - NST 1935_2_30 -3:30:52", "-3:30 - NST 1936 -3:30", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 1966_2_15_2 -3:30", "-4 StJohns A%sT 2011_10 -3", "-4 Canada A%sT"],
		"America/Grand_Turk": ["-4:44:32 - LMT 1890 -4:44:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 TC E%sT"],
		"America/Grenada": ["-4:7 - LMT 1911_6 -4:7", "-4 - AST"],
		"America/Guadeloupe": ["-4:6:8 - LMT 1911_5_8 -4:6:8", "-4 - AST"],
		"America/Guatemala": ["-6:2:4 - LMT 1918_9_5 -6:2:4", "-6 Guat C%sT"],
		"America/Guayaquil": ["-5:19:20 - LMT 1890 -5:19:20", "-5:14 - QMT 1931 -5:14", "-5 - ECT"],
		"America/Guyana": ["-3:52:40 - LMT 1915_2 -3:52:40", "-3:45 - GBGT 1966_4_26 -3:45", "-3:45 - GYT 1975_6_31 -3:45", "-3 - GYT 1991 -3", "-4 - GYT"],
		"America/Halifax": ["-4:14:24 - LMT 1902_5_15 -4:14:24", "-4 Halifax A%sT 1918 -4", "-4 Canada A%sT 1919 -4", "-4 Halifax A%sT 1942_1_9_2 -4", "-4 Canada A%sT 1946 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],
		"America/Havana": ["-5:29:28 - LMT 1890 -5:29:28", "-5:29:36 - HMT 1925_6_19_12 -5:29:36", "-5 Cuba C%sT"],
		"America/Hermosillo": ["-7:23:52 - LMT 1921_11_31_23_36_8 -7:23:52", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 1999 -7", "-7 - MST"],
		"America/Indiana/Indianapolis": ["-5:44:38 - LMT 1883_10_18_12_15_22 -5:44:38", "-6 US C%sT 1920 -6", "-6 Indianapolis C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Indianapolis C%sT 1955_3_24_2 -6", "-5 - EST 1957_8_29_2 -5", "-6 - CST 1958_3_27_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
		"America/Indiana/Knox": ["-5:46:30 - LMT 1883_10_18_12_13_30 -5:46:30", "-6 US C%sT 1947 -6", "-6 Starke C%sT 1962_3_29_2 -6", "-5 - EST 1963_9_27_2 -5", "-6 US C%sT 1991_9_27_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],
		"America/Indiana/Marengo": ["-5:45:23 - LMT 1883_10_18_12_14_37 -5:45:23", "-6 US C%sT 1951 -6", "-6 Marengo C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT 1976 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
		"America/Indiana/Petersburg": ["-5:49:7 - LMT 1883_10_18_12_10_53 -5:49:7", "-6 US C%sT 1955 -6", "-6 Pike C%sT 1965_3_25_2 -6", "-5 - EST 1966_9_30_2 -5", "-6 US C%sT 1977_9_30_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],
		"America/Indiana/Tell_City": ["-5:47:3 - LMT 1883_10_18_12_12_57 -5:47:3", "-6 US C%sT 1946 -6", "-6 Perry C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],
		"America/Indiana/Vevay": ["-5:40:16 - LMT 1883_10_18_12_19_44 -5:40:16", "-6 US C%sT 1954_3_25_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1973 -5", "-5 - EST 2006 -5", "-5 US E%sT"],
		"America/Indiana/Vincennes": ["-5:50:7 - LMT 1883_10_18_12_9_53 -5:50:7", "-6 US C%sT 1946 -6", "-6 Vincennes C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],
		"America/Indiana/Winamac": ["-5:46:25 - LMT 1883_10_18_12_13_35 -5:46:25", "-6 US C%sT 1946 -6", "-6 Pulaski C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_2_11_2 -6", "-5 US E%sT"],
		"America/Inuvik": ["0 - zzz 1953", "-8 NT_YK P%sT 1979_3_29_2 -8", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],
		"America/Iqaluit": ["0 - zzz 1942_7", "-5 NT_YK E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],
		"America/Jamaica": ["-5:7:12 - LMT 1890 -5:7:12", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST 1974_3_28_2 -5", "-5 US E%sT 1984 -5", "-5 - EST"],
		"America/Juneau": ["15:2:19 - LMT 1867_9_18 15:2:19", "-8:57:41 - LMT 1900_7_20_12 -8:57:41", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1980_3_27_2 -8", "-9 US Y%sT 1980_9_26_2 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
		"America/Kentucky/Louisville": ["-5:43:2 - LMT 1883_10_18_12_16_58 -5:43:2", "-6 US C%sT 1921 -6", "-6 Louisville C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Louisville C%sT 1961_6_23_2 -5", "-5 - EST 1968 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT"],
		"America/Kentucky/Monticello": ["-5:39:24 - LMT 1883_10_18_12_20_36 -5:39:24", "-6 US C%sT 1946 -6", "-6 - CST 1968 -6", "-6 US C%sT 2000_9_29_2 -5", "-5 US E%sT"],
		"America/La_Paz": ["-4:32:36 - LMT 1890 -4:32:36", "-4:32:36 - CMT 1931_9_15 -4:32:36", "-3:32:36 - BOST 1932_2_21 -3:32:36", "-4 - BOT"],
		"America/Lima": ["-5:8:12 - LMT 1890 -5:8:12", "-5:8:36 - LMT 1908_6_28 -5:8:36", "-5 Peru PE%sT"],
		"America/Los_Angeles": ["-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58", "-8 US P%sT 1946 -8", "-8 CA P%sT 1967 -8", "-8 US P%sT"],
		"America/Maceio": ["-2:22:52 - LMT 1914 -2:22:52", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_9_13 -3", "-3 Brazil BR%sT 1996_8_4 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
		"America/Managua": ["-5:45:8 - LMT 1890 -5:45:8", "-5:45:12 - MMT 1934_5_23 -5:45:12", "-6 - CST 1973_4 -6", "-5 - EST 1975_1_16 -5", "-6 Nic C%sT 1992_0_1_4 -6", "-5 - EST 1992_8_24 -5", "-6 - CST 1993 -6", "-5 - EST 1997 -5", "-6 Nic C%sT"],
		"America/Manaus": ["-4:0:4 - LMT 1914 -4:0:4", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1993_8_28 -4", "-4 Brazil AM%sT 1994_8_22 -4", "-4 - AMT"],
		"America/Martinique": ["-4:4:20 - LMT 1890 -4:4:20", "-4:4:20 - FFMT 1911_4 -4:4:20", "-4 - AST 1980_3_6 -4", "-3 - ADT 1980_8_28 -3", "-4 - AST"],
		"America/Matamoros": ["-6:40 - LMT 1921_11_31_23_20 -6:40", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT 2010 -6", "-6 US C%sT"],
		"America/Mazatlan": ["-7:5:40 - LMT 1921_11_31_23_54_20 -7:5:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT"],
		"America/Menominee": ["-5:50:27 - LMT 1885_8_18_12 -5:50:27", "-6 US C%sT 1946 -6", "-6 Menominee C%sT 1969_3_27_2 -6", "-5 - EST 1973_3_29_2 -5", "-6 US C%sT"],
		"America/Merida": ["-5:58:28 - LMT 1922_0_1_0_1_32 -5:58:28", "-6 - CST 1981_11_23 -6", "-5 - EST 1982_11_2 -5", "-6 Mexico C%sT"],
		"America/Metlakatla": ["15:13:42 - LMT 1867_9_18 15:13:42", "-8:46:18 - LMT 1900_7_20_12 -8:46:18", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-8 - MeST"],
		"America/Mexico_City": ["-6:36:36 - LMT 1922_0_1_0_23_24 -6:36:36", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 Mexico C%sT 2001_8_30_02 -5", "-6 - CST 2002_1_20 -6", "-6 Mexico C%sT"],
		"America/Miquelon": ["-3:44:40 - LMT 1911_4_15 -3:44:40", "-4 - AST 1980_4 -4", "-3 - PMST 1987 -3", "-3 Canada PM%sT"],
		"America/Moncton": ["-4:19:8 - LMT 1883_11_9 -4:19:8", "-5 - EST 1902_5_15 -5", "-4 Canada A%sT 1933 -4", "-4 Moncton A%sT 1942 -4", "-4 Canada A%sT 1946 -4", "-4 Moncton A%sT 1973 -4", "-4 Canada A%sT 1993 -4", "-4 Moncton A%sT 2007 -4", "-4 Canada A%sT"],
		"America/Monterrey": ["-6:41:16 - LMT 1921_11_31_23_18_44 -6:41:16", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT"],
		"America/Montevideo": ["-3:44:44 - LMT 1898_5_28 -3:44:44", "-3:44:44 - MMT 1920_4_1 -3:44:44", "-3:30 Uruguay UY%sT 1942_11_14 -3:30", "-3 Uruguay UY%sT"],
		"America/Montreal": ["-4:54:16 - LMT 1884 -4:54:16", "-5 Mont E%sT 1918 -5", "-5 Canada E%sT 1919 -5", "-5 Mont E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Mont E%sT 1974 -5", "-5 Canada E%sT"],
		"America/Montserrat": ["-4:8:52 - LMT 1911_6_1_0_1 -4:8:52", "-4 - AST"],
		"America/Nassau": ["-5:9:30 - LMT 1912_2_2 -5:9:30", "-5 Bahamas E%sT 1976 -5", "-5 US E%sT"],
		"America/New_York": ["-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2", "-5 US E%sT 1920 -5", "-5 NYC E%sT 1942 -5", "-5 US E%sT 1946 -5", "-5 NYC E%sT 1967 -5", "-5 US E%sT"],
		"America/Nipigon": ["-5:53:4 - LMT 1895 -5:53:4", "-5 Canada E%sT 1940_8_29 -5", "-4 - EDT 1942_1_9_2 -5", "-5 Canada E%sT"],
		"America/Nome": ["12:58:21 - LMT 1867_9_18 12:58:21", "-11:1:38 - LMT 1900_7_20_12 -11:1:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
		"America/Noronha": ["-2:9:40 - LMT 1914 -2:9:40", "-2 Brazil FN%sT 1990_8_17 -2", "-2 - FNT 1999_8_30 -2", "-2 Brazil FN%sT 2000_9_15 -1", "-2 - FNT 2001_8_13 -2", "-2 Brazil FN%sT 2002_9_1 -2", "-2 - FNT"],
		"America/North_Dakota/Beulah": ["-6:47:7 - LMT 1883_10_18_12_12_53 -6:47:7", "-7 US M%sT 2010_10_7_2 -6", "-6 US C%sT"],
		"America/North_Dakota/Center": ["-6:45:12 - LMT 1883_10_18_12_14_48 -6:45:12", "-7 US M%sT 1992_9_25_02 -6", "-6 US C%sT"],
		"America/North_Dakota/New_Salem": ["-6:45:39 - LMT 1883_10_18_12_14_21 -6:45:39", "-7 US M%sT 2003_9_26_02 -6", "-6 US C%sT"],
		"America/Ojinaga": ["-6:57:40 - LMT 1922_0_1_0_2_20 -6:57:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT 2010 -7", "-7 US M%sT"],
		"America/Panama": ["-5:18:8 - LMT 1890 -5:18:8", "-5:19:36 - CMT 1908_3_22 -5:19:36", "-5 - EST"],
		"America/Pangnirtung": ["0 - zzz 1921", "-4 NT_YK A%sT 1995_3_2_2 -4", "-5 Canada E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],
		"America/Paramaribo": ["-3:40:40 - LMT 1911 -3:40:40", "-3:40:52 - PMT 1935 -3:40:52", "-3:40:36 - PMT 1945_9 -3:40:36", "-3:30 - NEGT 1975_10_20 -3:30", "-3:30 - SRT 1984_9 -3:30", "-3 - SRT"],
		"America/Phoenix": ["-7:28:18 - LMT 1883_10_18_11_31_42 -7:28:18", "-7 US M%sT 1944_0_1_00_1 -6", "-7 - MST 1944_3_1_00_1 -7", "-7 US M%sT 1944_9_1_00_1 -6", "-7 - MST 1967 -7", "-7 US M%sT 1968_2_21 -7", "-7 - MST"],
		"America/Port-au-Prince": ["-4:49:20 - LMT 1890 -4:49:20", "-4:49 - PPMT 1917_0_24_12 -4:49", "-5 Haiti E%sT"],
		"America/Port_of_Spain": ["-4:6:4 - LMT 1912_2_2 -4:6:4", "-4 - AST"],
		"America/Porto_Velho": ["-4:15:36 - LMT 1914 -4:15:36", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT"],
		"America/Puerto_Rico": ["-4:24:25 - LMT 1899_2_28_12 -4:24:25", "-4 - AST 1942_4_3 -4", "-4 US A%sT 1946 -4", "-4 - AST"],
		"America/Rainy_River": ["-6:18:16 - LMT 1895 -6:18:16", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT"],
		"America/Rankin_Inlet": ["0 - zzz 1957", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT"],
		"America/Recife": ["-2:19:36 - LMT 1914 -2:19:36", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_15 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],
		"America/Regina": ["-6:58:36 - LMT 1905_8 -6:58:36", "-7 Regina M%sT 1960_3_24_2 -7", "-6 - CST"],
		"America/Resolute": ["0 - zzz 1947_7_31", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT 2006_9_29_2 -5", "-5 - EST 2007_2_11_3 -5", "-6 Canada C%sT"],
		"America/Rio_Branco": ["-4:31:12 - LMT 1914 -4:31:12", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],
		"America/Santa_Isabel": ["-7:39:28 - LMT 1922_0_1_0_20_32 -7:39:28", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT"],
		"America/Santarem": ["-3:38:48 - LMT 1914 -3:38:48", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 2008_5_24_00 -4", "-3 - BRT"],
		"America/Santiago": ["-4:42:46 - LMT 1890 -4:42:46", "-4:42:46 - SMT 1910 -4:42:46", "-5 - CLT 1916_6_1 -5", "-4:42:46 - SMT 1918_8_1 -4:42:46", "-4 - CLT 1919_6_1 -4", "-4:42:46 - SMT 1927_8_1 -4:42:46", "-5 Chile CL%sT 1947_4_22 -5", "-4 Chile CL%sT"],
		"America/Santo_Domingo": ["-4:39:36 - LMT 1890 -4:39:36", "-4:40 - SDMT 1933_3_1_12 -4:40", "-5 DR E%sT 1974_9_27 -5", "-4 - AST 2000_9_29_02 -4", "-5 US E%sT 2000_11_3_01 -5", "-4 - AST"],
		"America/Sao_Paulo": ["-3:6:28 - LMT 1914 -3:6:28", "-3 Brazil BR%sT 1963_9_23_00 -3", "-2 - BRST 1964 -2", "-3 Brazil BR%sT"],
		"America/Scoresbysund": ["-1:27:52 - LMT 1916_6_28 -1:27:52", "-2 - CGT 1980_3_6_2 -2", "-2 C-Eur CG%sT 1981_2_29 -2", "-1 EU EG%sT"],
		"America/Sitka": ["14:58:47 - LMT 1867_9_18 14:58:47", "-9:1:13 - LMT 1900_7_20_12 -9:1:13", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
		"America/St_Johns": ["-3:30:52 - LMT 1884 -3:30:52", "-3:30:52 StJohns N%sT 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 StJohns N%sT 1935_2_30 -3:30:52", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 2011_10 -2:30", "-3:30 Canada N%sT"],
		"America/St_Kitts": ["-4:10:52 - LMT 1912_2_2 -4:10:52", "-4 - AST"],
		"America/St_Lucia": ["-4:4 - LMT 1890 -4:4", "-4:4 - CMT 1912 -4:4", "-4 - AST"],
		"America/St_Thomas": ["-4:19:44 - LMT 1911_6 -4:19:44", "-4 - AST"],
		"America/St_Vincent": ["-4:4:56 - LMT 1890 -4:4:56", "-4:4:56 - KMT 1912 -4:4:56", "-4 - AST"],
		"America/Swift_Current": ["-7:11:20 - LMT 1905_8 -7:11:20", "-7 Canada M%sT 1946_3_28_2 -7", "-7 Regina M%sT 1950 -7", "-7 Swift M%sT 1972_3_30_2 -7", "-6 - CST"],
		"America/Tegucigalpa": ["-5:48:52 - LMT 1921_3 -5:48:52", "-6 Hond C%sT"],
		"America/Thule": ["-4:35:8 - LMT 1916_6_28 -4:35:8", "-4 Thule A%sT"],
		"America/Thunder_Bay": ["-5:57 - LMT 1895 -5:57", "-6 - CST 1910 -6", "-5 - EST 1942 -5", "-5 Canada E%sT 1970 -5", "-5 Mont E%sT 1973 -5", "-5 - EST 1974 -5", "-5 Canada E%sT"],
		"America/Tijuana": ["-7:48:4 - LMT 1922_0_1_0_11_56 -7:48:4", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT 2010 -8", "-8 US P%sT"],
		"America/Toronto": ["-5:17:32 - LMT 1895 -5:17:32", "-5 Canada E%sT 1919 -5", "-5 Toronto E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Toronto E%sT 1974 -5", "-5 Canada E%sT"],
		"America/Tortola": ["-4:18:28 - LMT 1911_6 -4:18:28", "-4 - AST"],
		"America/Vancouver": ["-8:12:28 - LMT 1884 -8:12:28", "-8 Vanc P%sT 1987 -8", "-8 Canada P%sT"],
		"America/Whitehorse": ["-9:0:12 - LMT 1900_7_20 -9:0:12", "-9 NT_YK Y%sT 1966_6_1_2 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],
		"America/Winnipeg": ["-6:28:36 - LMT 1887_6_16 -6:28:36", "-6 Winn C%sT 2006 -6", "-6 Canada C%sT"],
		"America/Yakutat": ["14:41:5 - LMT 1867_9_18 14:41:5", "-9:18:55 - LMT 1900_7_20_12 -9:18:55", "-9 - YST 1942 -9", "-9 US Y%sT 1946 -9", "-9 - YST 1969 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],
		"America/Yellowknife": ["0 - zzz 1935", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],
		"CET": ["1 C-Eur CE%sT"],
		"CST6CDT": ["-6 US C%sT"],
		"EET": ["2 EU EE%sT"],
		"EST": ["-5 - EST"],
		"EST5EDT": ["-5 US E%sT"],
		"HST": ["-10 - HST"],
		"MET": ["1 C-Eur ME%sT"],
		"MST": ["-7 - MST"],
		"MST7MDT": ["-7 US M%sT"],
		"PST8PDT": ["-8 US P%sT"],
		"WET": ["0 EU WE%sT"],
		"Europe/Amsterdam": ["0:19:32 - LMT 1835 0:19:32", "0:19:32 Neth %s 1937_6_1 1:19:32", "0:20 Neth NE%sT 1940_4_16_0 0:20", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Neth CE%sT 1977 1", "1 EU CE%sT"],
		"Europe/Andorra": ["0:6:4 - LMT 1901 0:6:4", "0 - WET 1946_8_30", "1 - CET 1985_2_31_2 1", "1 EU CE%sT"],
		"Europe/Athens": ["1:34:52 - LMT 1895_8_14 1:34:52", "1:34:52 - AMT 1916_6_28_0_1 1:34:52", "2 Greece EE%sT 1941_3_30 3", "1 Greece CE%sT 1944_3_4 1", "2 Greece EE%sT 1981 2", "2 EU EE%sT"],
		"Europe/Belgrade": ["1:22 - LMT 1884 1:22", "1 - CET 1941_3_18_23 1", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_4_8_2 1", "2 - CEST 1945_8_16_2 1", "1 - CET 1982_10_27 1", "1 EU CE%sT"],
		"Europe/Berlin": ["0:53:28 - LMT 1893_3 0:53:28", "1 C-Eur CE%sT 1945_4_24_2 2", "1 SovietZone CE%sT 1946 1", "1 Germany CE%sT 1980 1", "1 EU CE%sT"],
		"Europe/Prague": ["0:57:44 - LMT 1850 0:57:44", "0:57:44 - PMT 1891_9 0:57:44", "1 C-Eur CE%sT 1944_8_17_2 1", "1 Czech CE%sT 1979 1", "1 EU CE%sT"],
		"Europe/Brussels": ["0:17:30 - LMT 1880 0:17:30", "0:17:30 - BMT 1892_4_1_12 0:17:30", "0 - WET 1914_10_8", "1 - CET 1916_4_1_0 1", "1 C-Eur CE%sT 1918_10_11_11", "0 Belgium WE%sT 1940_4_20_2", "1 C-Eur CE%sT 1944_8_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],
		"Europe/Bucharest": ["1:44:24 - LMT 1891_9 1:44:24", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1981_2_29_2 2", "2 C-Eur EE%sT 1991 2", "2 Romania EE%sT 1994 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
		"Europe/Budapest": ["1:16:20 - LMT 1890_9 1:16:20", "1 C-Eur CE%sT 1918 1", "1 Hungary CE%sT 1941_3_6_2 1", "1 C-Eur CE%sT 1945 1", "1 Hungary CE%sT 1980_8_28_2 1", "1 EU CE%sT"],
		"Europe/Zurich": ["0:34:8 - LMT 1848_8_12 0:34:8", "0:29:44 - BMT 1894_5 0:29:44", "1 Swiss CE%sT 1981 1", "1 EU CE%sT"],
		"Europe/Chisinau": ["1:55:20 - LMT 1880 1:55:20", "1:55 - CMT 1918_1_15 1:55", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1940_7_15 2", "3 - EEST 1941_6_17 3", "1 C-Eur CE%sT 1944_7_24 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_4_6 3", "2 - EET 1991 2", "2 Russia EE%sT 1992 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
		"Europe/Copenhagen": ["0:50:20 - LMT 1890 0:50:20", "0:50:20 - CMT 1894_0_1 0:50:20", "1 Denmark CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Denmark CE%sT 1980 1", "1 EU CE%sT"],
		"Europe/Dublin": ["-0:25 - LMT 1880_7_2 -0:25", "-0:25:21 - DMT 1916_4_21_2 -0:25:21", "0:34:39 - IST 1916_9_1_2 -0:25:21", "0 GB-Eire %s 1921_11_6", "0 GB-Eire GMT/IST 1940_1_25_2", "1 - IST 1946_9_6_2 1", "0 - GMT 1947_2_16_2", "1 - IST 1947_10_2_2 1", "0 - GMT 1948_3_18_2", "0 GB-Eire GMT/IST 1968_9_27 1", "1 - IST 1971_9_31_2", "0 GB-Eire GMT/IST 1996", "0 EU GMT/IST"],
		"Europe/Gibraltar": ["-0:21:24 - LMT 1880_7_2_0 -0:21:24", "0 GB-Eire %s 1957_3_14_2", "1 - CET 1982 1", "1 EU CE%sT"],
		"Europe/London": ["-0:1:15 - LMT 1847_11_1_0 -0:1:15", "0 GB-Eire %s 1968_9_27 1", "1 - BST 1971_9_31_2", "0 GB-Eire %s 1996", "0 EU GMT/BST"],
		"Europe/Helsinki": ["1:39:52 - LMT 1878_4_31 1:39:52", "1:39:52 - HMT 1921_4 1:39:52", "2 Finland EE%sT 1983 2", "2 EU EE%sT"],
		"Europe/Istanbul": ["1:55:52 - LMT 1880 1:55:52", "1:56:56 - IMT 1910_9 1:56:56", "2 Turkey EE%sT 1978_9_15 3", "3 Turkey TR%sT 1985_3_20 3", "2 Turkey EE%sT 2007 2", "2 EU EE%sT 2011_2_27_1", "2 - EET 2011_2_28_1", "2 EU EE%sT"],
		"Europe/Kaliningrad": ["1:22 - LMT 1893_3 1:22", "1 C-Eur CE%sT 1945 1", "2 Poland CE%sT 1946 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],
		"Europe/Kiev": ["2:2:4 - LMT 1880 2:2:4", "2:2:4 - KMT 1924_4_2 2:2:4", "2 - EET 1930_5_21 2", "3 - MSK 1941_8_20 3", "1 C-Eur CE%sT 1943_10_6 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],
		"Europe/Lisbon": ["-0:36:32 - LMT 1884 -0:36:32", "-0:36:32 - LMT 1912_0_1 -0:36:32", "0 Port WE%sT 1966_3_3_2", "1 - CET 1976_8_26_1 1", "0 Port WE%sT 1983_8_25_1", "0 W-Eur WE%sT 1992_8_27_1", "1 EU CE%sT 1996_2_31_1", "0 EU WE%sT"],
		"Europe/Luxembourg": ["0:24:36 - LMT 1904_5 0:24:36", "1 Lux CE%sT 1918_10_25 1", "0 Lux WE%sT 1929_9_6_2", "0 Belgium WE%sT 1940_4_14_3 1", "1 C-Eur WE%sT 1944_8_18_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],
		"Europe/Madrid": ["-0:14:44 - LMT 1901_0_1_0 -0:14:44", "0 Spain WE%sT 1946_8_30 2", "1 Spain CE%sT 1979 1", "1 EU CE%sT"],
		"Europe/Malta": ["0:58:4 - LMT 1893_10_2_0 0:58:4", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Italy CE%sT 1973_2_31 1", "1 Malta CE%sT 1981 1", "1 EU CE%sT"],
		"Europe/Minsk": ["1:50:16 - LMT 1880 1:50:16", "1:50 - MMT 1924_4_2 1:50", "2 - EET 1930_5_21 2", "3 - MSK 1941_5_28 3", "1 C-Eur CE%sT 1944_6_3 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 - EET 1992_2_29_0 2", "3 - EEST 1992_8_27_0 2", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],
		"Europe/Monaco": ["0:29:32 - LMT 1891_2_15 0:29:32", "0:9:21 - PMT 1911_2_11 0:9:21", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],
		"Europe/Moscow": ["2:30:20 - LMT 1880 2:30:20", "2:30 - MMT 1916_6_3 2:30", "2:30:48 Russia %s 1919_6_1_2 4:30:48", "3 Russia MSK/MSD 1922_9 3", "2 - EET 1930_5_21 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 1992_0_19_2 2", "3 Russia MSK/MSD 2011_2_27_2 3", "4 - MSK"],
		"Europe/Oslo": ["0:43 - LMT 1895_0_1 0:43", "1 Norway CE%sT 1940_7_10_23 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Norway CE%sT 1980 1", "1 EU CE%sT"],
		"Europe/Paris": ["0:9:21 - LMT 1891_2_15_0_1 0:9:21", "0:9:21 - PMT 1911_2_11_0_1 0:9:21", "0 France WE%sT 1940_5_14_23 1", "1 C-Eur CE%sT 1944_7_25 2", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],
		"Europe/Riga": ["1:36:24 - LMT 1880 1:36:24", "1:36:24 - RMT 1918_3_15_2 1:36:24", "2:36:24 - LST 1918_8_16_3 2:36:24", "1:36:24 - RMT 1919_3_1_2 1:36:24", "2:36:24 - LST 1919_4_22_3 2:36:24", "1:36:24 - RMT 1926_4_11 1:36:24", "2 - EET 1940_7_5 2", "3 - MSK 1941_6 3", "1 C-Eur CE%sT 1944_9_13 1", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 Latvia EE%sT 1997_0_21 2", "2 EU EE%sT 2000_1_29 2", "2 - EET 2001_0_2 2", "2 EU EE%sT"],
		"Europe/Rome": ["0:49:56 - LMT 1866_8_22 0:49:56", "0:49:56 - RMT 1893_10_1_0 0:49:56", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1944_6 2", "1 Italy CE%sT 1980 1", "1 EU CE%sT"],
		"Europe/Samara": ["3:20:36 - LMT 1919_6_1_2 3:20:36", "3 - SAMT 1930_5_21 3", "4 - SAMT 1935_0_27 4", "4 Russia KUY%sT 1989_2_26_2 4", "3 Russia KUY%sT 1991_2_31_2 3", "2 Russia KUY%sT 1991_8_29_2 2", "3 - KUYT 1991_9_20_3 3", "4 Russia SAM%sT 2010_2_28_2 4", "3 Russia SAM%sT 2011_2_27_2 3", "4 - SAMT"],
		"Europe/Simferopol": ["2:16:24 - LMT 1880 2:16:24", "2:16 - SMT 1924_4_2 2:16", "2 - EET 1930_5_21 2", "3 - MSK 1941_10 3", "1 C-Eur CE%sT 1944_3_13 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1994_4 3", "3 E-Eur MSK/MSD 1996_2_31_3 3", "4 - MSD 1996_9_27_3 3", "3 Russia MSK/MSD 1997 3", "3 - MSK 1997_2_30_1", "2 EU EE%sT"],
		"Europe/Sofia": ["1:33:16 - LMT 1880 1:33:16", "1:56:56 - IMT 1894_10_30 1:56:56", "2 - EET 1942_10_2_3 2", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_3_2_3 1", "2 - EET 1979_2_31_23 2", "2 Bulg EE%sT 1982_8_26_2 3", "2 C-Eur EE%sT 1991 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],
		"Europe/Stockholm": ["1:12:12 - LMT 1879_0_1 1:12:12", "1:0:14 - SET 1900_0_1 1:0:14", "1 - CET 1916_4_14_23 1", "2 - CEST 1916_9_1_01 2", "1 - CET 1980 1", "1 EU CE%sT"],
		"Europe/Tallinn": ["1:39 - LMT 1880 1:39", "1:39 - TMT 1918_1 1:39", "1 C-Eur CE%sT 1919_6 1", "1:39 - TMT 1921_4 1:39", "2 - EET 1940_7_6 2", "3 - MSK 1941_8_15 3", "1 C-Eur CE%sT 1944_8_22 2", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 C-Eur EE%sT 1998_8_22 3", "2 EU EE%sT 1999_10_1 3", "2 - EET 2002_1_21 2", "2 EU EE%sT"],
		"Europe/Tirane": ["1:19:20 - LMT 1914 1:19:20", "1 - CET 1940_5_16 1", "1 Albania CE%sT 1984_6 2", "1 EU CE%sT"],
		"Europe/Uzhgorod": ["1:29:12 - LMT 1890_9 1:29:12", "1 - CET 1940 1", "1 C-Eur CE%sT 1944_9 2", "2 - CEST 1944_9_26 2", "1 - CET 1945_5_29 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "1 - CET 1991_2_31_3 1", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],
		"Europe/Vaduz": ["0:38:4 - LMT 1894_5 0:38:4", "1 - CET 1981 1", "1 EU CE%sT"],
		"Europe/Vienna": ["1:5:21 - LMT 1893_3 1:5:21", "1 C-Eur CE%sT 1920 1", "1 Austria CE%sT 1940_3_1_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "2 - CEST 1945_3_12_2 1", "1 - CET 1946 1", "1 Austria CE%sT 1981 1", "1 EU CE%sT"],
		"Europe/Vilnius": ["1:41:16 - LMT 1880 1:41:16", "1:24 - WMT 1917 1:24", "1:35:36 - KMT 1919_9_10 1:35:36", "1 - CET 1920_6_12 1", "2 - EET 1920_9_9 2", "1 - CET 1940_7_3 1", "3 - MSK 1941_5_24 3", "1 C-Eur CE%sT 1944_7 2", "3 Russia MSK/MSD 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 C-Eur EE%sT 1998 2", "2 - EET 1998_2_29_1", "1 EU CE%sT 1999_9_31_1", "2 - EET 2003_0_1 2", "2 EU EE%sT"],
		"Europe/Volgograd": ["2:57:40 - LMT 1920_0_3 2:57:40", "3 - TSAT 1925_3_6 3", "3 - STAT 1930_5_21 3", "4 - STAT 1961_10_11 4", "4 Russia VOL%sT 1989_2_26_2 4", "3 Russia VOL%sT 1991_2_31_2 3", "4 - VOLT 1992_2_29_2 4", "3 Russia VOL%sT 2011_2_27_2 3", "4 - VOLT"],
		"Europe/Warsaw": ["1:24 - LMT 1880 1:24", "1:24 - WMT 1915_7_5 1:24", "1 C-Eur CE%sT 1918_8_16_3 2", "2 Poland EE%sT 1922_5 2", "1 Poland CE%sT 1940_5_23_2 1", "1 C-Eur CE%sT 1944_9 2", "1 Poland CE%sT 1977 1", "1 W-Eur CE%sT 1988 1", "1 EU CE%sT"],
		"Europe/Zaporozhye": ["2:20:40 - LMT 1880 2:20:40", "2:20 - CUT 1924_4_2 2:20", "2 - EET 1930_5_21 2", "3 - MSK 1941_7_25 3", "1 C-Eur CE%sT 1943_9_25 1", "3 Russia MSK/MSD 1991_2_31_2 3", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"]
	},
	"rules": {
		"US": ["1918 1919 2 0 8 2 0 1 D", "1918 1919 9 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1967 2006 9 0 8 2 0 0 S", "1967 1973 3 0 8 2 0 1 D", "1974 1974 0 6 7 2 0 1 D", "1975 1975 1 23 7 2 0 1 D", "1976 1986 3 0 8 2 0 1 D", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
		"Brazil": ["1931 1931 9 3 7 11 0 1 S", "1932 1933 3 1 7 0 0 0", "1932 1932 9 3 7 0 0 1 S", "1949 1952 11 1 7 0 0 1 S", "1950 1950 3 16 7 1 0 0", "1951 1952 3 1 7 0 0 0", "1953 1953 2 1 7 0 0 0", "1963 1963 11 9 7 0 0 1 S", "1964 1964 2 1 7 0 0 0", "1965 1965 0 31 7 0 0 1 S", "1965 1965 2 31 7 0 0 0", "1965 1965 11 1 7 0 0 1 S", "1966 1968 2 1 7 0 0 0", "1966 1967 10 1 7 0 0 1 S", "1985 1985 10 2 7 0 0 1 S", "1986 1986 2 15 7 0 0 0", "1986 1986 9 25 7 0 0 1 S", "1987 1987 1 14 7 0 0 0", "1987 1987 9 25 7 0 0 1 S", "1988 1988 1 7 7 0 0 0", "1988 1988 9 16 7 0 0 1 S", "1989 1989 0 29 7 0 0 0", "1989 1989 9 15 7 0 0 1 S", "1990 1990 1 11 7 0 0 0", "1990 1990 9 21 7 0 0 1 S", "1991 1991 1 17 7 0 0 0", "1991 1991 9 20 7 0 0 1 S", "1992 1992 1 9 7 0 0 0", "1992 1992 9 25 7 0 0 1 S", "1993 1993 0 31 7 0 0 0", "1993 1995 9 11 0 0 0 1 S", "1994 1995 1 15 0 0 0 0", "1996 1996 1 11 7 0 0 0", "1996 1996 9 6 7 0 0 1 S", "1997 1997 1 16 7 0 0 0", "1997 1997 9 6 7 0 0 1 S", "1998 1998 2 1 7 0 0 0", "1998 1998 9 11 7 0 0 1 S", "1999 1999 1 21 7 0 0 0", "1999 1999 9 3 7 0 0 1 S", "2000 2000 1 27 7 0 0 0", "2000 2001 9 8 0 0 0 1 S", "2001 2006 1 15 0 0 0 0", "2002 2002 10 3 7 0 0 1 S", "2003 2003 9 19 7 0 0 1 S", "2004 2004 10 2 7 0 0 1 S", "2005 2005 9 16 7 0 0 1 S", "2006 2006 10 5 7 0 0 1 S", "2007 2007 1 25 7 0 0 0", "2007 2007 9 8 0 0 0 1 S", "2008 9999 9 15 0 0 0 1 S", "2008 2011 1 15 0 0 0 0", "2012 2012 1 22 0 0 0 0", "2013 2014 1 15 0 0 0 0", "2015 2015 1 22 0 0 0 0", "2016 2022 1 15 0 0 0 0", "2023 2023 1 22 0 0 0 0", "2024 2025 1 15 0 0 0 0", "2026 2026 1 22 0 0 0 0", "2027 2033 1 15 0 0 0 0", "2034 2034 1 22 0 0 0 0", "2035 2036 1 15 0 0 0 0", "2037 2037 1 22 0 0 0 0", "2038 9999 1 15 0 0 0 0"],
		"Arg": ["1930 1930 11 1 7 0 0 1 S", "1931 1931 3 1 7 0 0 0", "1931 1931 9 15 7 0 0 1 S", "1932 1940 2 1 7 0 0 0", "1932 1939 10 1 7 0 0 1 S", "1940 1940 6 1 7 0 0 1 S", "1941 1941 5 15 7 0 0 0", "1941 1941 9 15 7 0 0 1 S", "1943 1943 7 1 7 0 0 0", "1943 1943 9 15 7 0 0 1 S", "1946 1946 2 1 7 0 0 0", "1946 1946 9 1 7 0 0 1 S", "1963 1963 9 1 7 0 0 0", "1963 1963 11 15 7 0 0 1 S", "1964 1966 2 1 7 0 0 0", "1964 1966 9 15 7 0 0 1 S", "1967 1967 3 2 7 0 0 0", "1967 1968 9 1 0 0 0 1 S", "1968 1969 3 1 0 0 0 0", "1974 1974 0 23 7 0 0 1 S", "1974 1974 4 1 7 0 0 0", "1988 1988 11 1 7 0 0 1 S", "1989 1993 2 1 0 0 0 0", "1989 1992 9 15 0 0 0 1 S", "1999 1999 9 1 0 0 0 1 S", "2000 2000 2 3 7 0 0 0", "2007 2007 11 30 7 0 0 1 S", "2008 2009 2 15 0 0 0 0", "2008 2008 9 15 0 0 0 1 S"],
		"SanLuis": ["2008 2009 2 8 0 0 0 0", "2007 2009 9 8 0 0 0 1 S"],
		"Para": ["1975 1988 9 1 7 0 0 1 S", "1975 1978 2 1 7 0 0 0", "1979 1991 3 1 7 0 0 0", "1989 1989 9 22 7 0 0 1 S", "1990 1990 9 1 7 0 0 1 S", "1991 1991 9 6 7 0 0 1 S", "1992 1992 2 1 7 0 0 0", "1992 1992 9 5 7 0 0 1 S", "1993 1993 2 31 7 0 0 0", "1993 1995 9 1 7 0 0 1 S", "1994 1995 1 0 8 0 0 0", "1996 1996 2 1 7 0 0 0", "1996 2001 9 1 0 0 0 1 S", "1997 1997 1 0 8 0 0 0", "1998 2001 2 1 0 0 0 0", "2002 2004 3 1 0 0 0 0", "2002 2003 8 1 0 0 0 1 S", "2004 2009 9 15 0 0 0 1 S", "2005 2009 2 8 0 0 0 0", "2010 9999 9 1 0 0 0 1 S", "2010 2012 3 8 0 0 0 0", "2013 9999 2 22 0 0 0 0"],
		"Canada": ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1974 1986 3 0 8 2 0 1 D", "1974 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
		"Mexico": ["1939 1939 1 5 7 0 0 1 D", "1939 1939 5 25 7 0 0 0 S", "1940 1940 11 9 7 0 0 1 D", "1941 1941 3 1 7 0 0 0 S", "1943 1943 11 16 7 0 0 1 W", "1944 1944 4 1 7 0 0 0 S", "1950 1950 1 12 7 0 0 1 D", "1950 1950 6 30 7 0 0 0 S", "1996 2000 3 1 0 2 0 1 D", "1996 2000 9 0 8 2 0 0 S", "2001 2001 4 1 0 2 0 1 D", "2001 2001 8 0 8 2 0 0 S", "2002 9999 3 1 0 2 0 1 D", "2002 9999 9 0 8 2 0 0 S"],
		"Barb": ["1977 1977 5 12 7 2 0 1 D", "1977 1978 9 1 0 2 0 0 S", "1978 1980 3 15 0 2 0 1 D", "1979 1979 8 30 7 2 0 0 S", "1980 1980 8 25 7 2 0 0 S"],
		"Belize": ["1918 1942 9 2 0 0 0 0:30 HD", "1919 1943 1 9 0 0 0 0 S", "1973 1973 11 5 7 0 0 1 D", "1974 1974 1 9 7 0 0 0 S", "1982 1982 11 18 7 0 0 1 D", "1983 1983 1 12 7 0 0 0 S"],
		"CO": ["1992 1992 4 3 7 0 0 1 S", "1993 1993 3 4 7 0 0 0"],
		"NT_YK": ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 25 7 2 0 1 D", "1919 1919 10 1 7 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1965 1965 3 0 8 0 0 2 DD", "1965 1965 9 0 8 2 0 0 S", "1980 1986 3 0 8 2 0 1 D", "1980 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D"],
		"Chicago": ["1920 1920 5 13 7 2 0 1 D", "1920 1921 9 0 8 2 0 0 S", "1921 1921 2 0 8 2 0 1 D", "1922 1966 3 0 8 2 0 1 D", "1922 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],
		"CR": ["1979 1980 1 0 8 0 0 1 D", "1979 1980 5 1 0 0 0 0 S", "1991 1992 0 15 6 0 0 1 D", "1991 1991 6 1 7 0 0 0 S", "1992 1992 2 15 7 0 0 0 S"],
		"EU": ["1977 1980 3 1 0 1 1 1 S", "1977 1977 8 0 8 1 1 0", "1978 1978 9 1 7 1 1 0", "1979 1995 8 0 8 1 1 0", "1981 9999 2 0 8 1 1 1 S", "1996 9999 9 0 8 1 1 0"],
		"Vanc": ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1946 1986 3 0 8 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1961 8 0 8 2 0 0 S", "1962 2006 9 0 8 2 0 0 S"],
		"Denver": ["1920 1921 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1921 4 22 7 2 0 0 S", "1965 1966 3 0 8 2 0 1 D", "1965 1966 9 0 8 2 0 0 S"],
		"Detroit": ["1948 1948 3 0 8 2 0 1 D", "1948 1948 8 0 8 2 0 0 S", "1967 1967 5 14 7 2 0 1 D", "1967 1967 9 0 8 2 0 0 S"],
		"Edm": ["1918 1919 3 8 0 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 27 7 2 0 0 S", "1920 1923 3 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1923 8 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1947 1947 3 0 8 2 0 1 D", "1947 1947 8 0 8 2 0 0 S", "1967 1967 3 0 8 2 0 1 D", "1967 1967 9 0 8 2 0 0 S", "1969 1969 3 0 8 2 0 1 D", "1969 1969 9 0 8 2 0 0 S", "1972 1986 3 0 8 2 0 1 D", "1972 2006 9 0 8 2 0 0 S"],
		"Salv": ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S"],
		"Halifax": ["1916 1916 3 1 7 0 0 1 D", "1916 1916 9 1 7 0 0 0 S", "1920 1920 4 9 7 0 0 1 D", "1920 1920 7 29 7 0 0 0 S", "1921 1921 4 6 7 0 0 1 D", "1921 1922 8 5 7 0 0 0 S", "1922 1922 3 30 7 0 0 1 D", "1923 1925 4 1 0 0 0 1 D", "1923 1923 8 4 7 0 0 0 S", "1924 1924 8 15 7 0 0 0 S", "1925 1925 8 28 7 0 0 0 S", "1926 1926 4 16 7 0 0 1 D", "1926 1926 8 13 7 0 0 0 S", "1927 1927 4 1 7 0 0 1 D", "1927 1927 8 26 7 0 0 0 S", "1928 1931 4 8 0 0 0 1 D", "1928 1928 8 9 7 0 0 0 S", "1929 1929 8 3 7 0 0 0 S", "1930 1930 8 15 7 0 0 0 S", "1931 1932 8 24 1 0 0 0 S", "1932 1932 4 1 7 0 0 1 D", "1933 1933 3 30 7 0 0 1 D", "1933 1933 9 2 7 0 0 0 S", "1934 1934 4 20 7 0 0 1 D", "1934 1934 8 16 7 0 0 0 S", "1935 1935 5 2 7 0 0 1 D", "1935 1935 8 30 7 0 0 0 S", "1936 1936 5 1 7 0 0 1 D", "1936 1936 8 14 7 0 0 0 S", "1937 1938 4 1 0 0 0 1 D", "1937 1941 8 24 1 0 0 0 S", "1939 1939 4 28 7 0 0 1 D", "1940 1941 4 1 0 0 0 1 D", "1946 1949 3 0 8 2 0 1 D", "1946 1949 8 0 8 2 0 0 S", "1951 1954 3 0 8 2 0 1 D", "1951 1954 8 0 8 2 0 0 S", "1956 1959 3 0 8 2 0 1 D", "1956 1959 8 0 8 2 0 0 S", "1962 1973 3 0 8 2 0 1 D", "1962 1973 9 0 8 2 0 0 S"],
		"StJohns": ["1917 1917 3 8 7 2 0 1 D", "1917 1917 8 17 7 2 0 0 S", "1919 1919 4 5 7 23 0 1 D", "1919 1919 7 12 7 23 0 0 S", "1920 1935 4 1 0 23 0 1 D", "1920 1935 9 0 8 23 0 0 S", "1936 1941 4 9 1 0 0 1 D", "1936 1941 9 2 1 0 0 0 S", "1946 1950 4 8 0 2 0 1 D", "1946 1950 9 2 0 2 0 0 S", "1951 1986 3 0 8 2 0 1 D", "1951 1959 8 0 8 2 0 0 S", "1960 1986 9 0 8 2 0 0 S", "1987 1987 3 1 0 0:1 0 1 D", "1987 2006 9 0 8 0:1 0 0 S", "1988 1988 3 1 0 0:1 0 2 DD", "1989 2006 3 1 0 0:1 0 1 D", "2007 2011 2 8 0 0:1 0 1 D", "2007 2010 10 1 0 0:1 0 0 S"],
		"TC": ["1979 1986 3 0 8 2 0 1 D", "1979 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
		"Guat": ["1973 1973 10 25 7 0 0 1 D", "1974 1974 1 24 7 0 0 0 S", "1983 1983 4 21 7 0 0 1 D", "1983 1983 8 22 7 0 0 0 S", "1991 1991 2 23 7 0 0 1 D", "1991 1991 8 7 7 0 0 0 S", "2006 2006 3 30 7 0 0 1 D", "2006 2006 9 1 7 0 0 0 S"],
		"Cuba": ["1928 1928 5 10 7 0 0 1 D", "1928 1928 9 10 7 0 0 0 S", "1940 1942 5 1 0 0 0 1 D", "1940 1942 8 1 0 0 0 0 S", "1945 1946 5 1 0 0 0 1 D", "1945 1946 8 1 0 0 0 0 S", "1965 1965 5 1 7 0 0 1 D", "1965 1965 8 30 7 0 0 0 S", "1966 1966 4 29 7 0 0 1 D", "1966 1966 9 2 7 0 0 0 S", "1967 1967 3 8 7 0 0 1 D", "1967 1968 8 8 0 0 0 0 S", "1968 1968 3 14 7 0 0 1 D", "1969 1977 3 0 8 0 0 1 D", "1969 1971 9 0 8 0 0 0 S", "1972 1974 9 8 7 0 0 0 S", "1975 1977 9 0 8 0 0 0 S", "1978 1978 4 7 7 0 0 1 D", "1978 1990 9 8 0 0 0 0 S", "1979 1980 2 15 0 0 0 1 D", "1981 1985 4 5 0 0 0 1 D", "1986 1989 2 14 0 0 0 1 D", "1990 1997 3 1 0 0 0 1 D", "1991 1995 9 8 0 0 2 0 S", "1996 1996 9 6 7 0 2 0 S", "1997 1997 9 12 7 0 2 0 S", "1998 1999 2 0 8 0 2 1 D", "1998 2003 9 0 8 0 2 0 S", "2000 2004 3 1 0 0 2 1 D", "2006 2010 9 0 8 0 2 0 S", "2007 2007 2 8 0 0 2 1 D", "2008 2008 2 15 0 0 2 1 D", "2009 2010 2 8 0 0 2 1 D", "2011 2011 2 15 0 0 2 1 D", "2011 2011 10 13 7 0 2 0 S", "2012 2012 3 1 7 0 2 1 D", "2012 9999 10 1 0 0 2 0 S", "2013 9999 2 8 0 0 2 1 D"],
		"Indianapolis": ["1941 1941 5 22 7 2 0 1 D", "1941 1954 8 0 8 2 0 0 S", "1946 1954 3 0 8 2 0 1 D"],
		"Starke": ["1947 1961 3 0 8 2 0 1 D", "1947 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1958 8 0 8 2 0 0 S", "1959 1961 9 0 8 2 0 0 S"],
		"Marengo": ["1951 1951 3 0 8 2 0 1 D", "1951 1951 8 0 8 2 0 0 S", "1954 1960 3 0 8 2 0 1 D", "1954 1960 8 0 8 2 0 0 S"],
		"Pike": ["1955 1955 4 1 7 0 0 1 D", "1955 1960 8 0 8 2 0 0 S", "1956 1964 3 0 8 2 0 1 D", "1961 1964 9 0 8 2 0 0 S"],
		"Perry": ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],
		"Vincennes": ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],
		"Pulaski": ["1946 1960 3 0 8 2 0 1 D", "1946 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1960 8 0 8 2 0 0 S"],
		"Louisville": ["1921 1921 4 1 7 2 0 1 D", "1921 1921 8 1 7 2 0 0 S", "1941 1961 3 0 8 2 0 1 D", "1941 1941 8 0 8 2 0 0 S", "1946 1946 5 2 7 2 0 0 S", "1950 1955 8 0 8 2 0 0 S", "1956 1960 9 0 8 2 0 0 S"],
		"Peru": ["1938 1938 0 1 7 0 0 1 S", "1938 1938 3 1 7 0 0 0", "1938 1939 8 0 8 0 0 1 S", "1939 1940 2 24 0 0 0 0", "1986 1987 0 1 7 0 0 1 S", "1986 1987 3 1 7 0 0 0", "1990 1990 0 1 7 0 0 1 S", "1990 1990 3 1 7 0 0 0", "1994 1994 0 1 7 0 0 1 S", "1994 1994 3 1 7 0 0 0"],
		"CA": ["1948 1948 2 14 7 2 0 1 D", "1949 1949 0 1 7 2 0 0 S", "1950 1966 3 0 8 2 0 1 D", "1950 1961 8 0 8 2 0 0 S", "1962 1966 9 0 8 2 0 0 S"],
		"Nic": ["1979 1980 2 16 0 0 0 1 D", "1979 1980 5 23 1 0 0 0 S", "2005 2005 3 10 7 0 0 1 D", "2005 2005 9 1 0 0 0 0 S", "2006 2006 3 30 7 2 0 1 D", "2006 2006 9 1 0 1 0 0 S"],
		"Menominee": ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1966 1966 3 0 8 2 0 1 D", "1966 1966 9 0 8 2 0 0 S"],
		"Moncton": ["1933 1935 5 8 0 1 0 1 D", "1933 1935 8 8 0 1 0 0 S", "1936 1938 5 1 0 1 0 1 D", "1936 1938 8 1 0 1 0 0 S", "1939 1939 4 27 7 1 0 1 D", "1939 1941 8 21 6 1 0 0 S", "1940 1940 4 19 7 1 0 1 D", "1941 1941 4 4 7 1 0 1 D", "1946 1972 3 0 8 2 0 1 D", "1946 1956 8 0 8 2 0 0 S", "1957 1972 9 0 8 2 0 0 S", "1993 2006 3 1 0 0:1 0 1 D", "1993 2006 9 0 8 0:1 0 0 S"],
		"Uruguay": ["1923 1923 9 2 7 0 0 0:30 HS", "1924 1926 3 1 7 0 0 0", "1924 1925 9 1 7 0 0 0:30 HS", "1933 1935 9 0 8 0 0 0:30 HS", "1934 1936 2 25 6 23:30 2 0", "1936 1936 10 1 7 0 0 0:30 HS", "1937 1941 2 0 8 0 0 0", "1937 1940 9 0 8 0 0 0:30 HS", "1941 1941 7 1 7 0 0 0:30 HS", "1942 1942 0 1 7 0 0 0", "1942 1942 11 14 7 0 0 1 S", "1943 1943 2 14 7 0 0 0", "1959 1959 4 24 7 0 0 1 S", "1959 1959 10 15 7 0 0 0", "1960 1960 0 17 7 0 0 1 S", "1960 1960 2 6 7 0 0 0", "1965 1967 3 1 0 0 0 1 S", "1965 1965 8 26 7 0 0 0", "1966 1967 9 31 7 0 0 0", "1968 1970 4 27 7 0 0 0:30 HS", "1968 1970 11 2 7 0 0 0", "1972 1972 3 24 7 0 0 1 S", "1972 1972 7 15 7 0 0 0", "1974 1974 2 10 7 0 0 0:30 HS", "1974 1974 11 22 7 0 0 1 S", "1976 1976 9 1 7 0 0 0", "1977 1977 11 4 7 0 0 1 S", "1978 1978 3 1 7 0 0 0", "1979 1979 9 1 7 0 0 1 S", "1980 1980 4 1 7 0 0 0", "1987 1987 11 14 7 0 0 1 S", "1988 1988 2 14 7 0 0 0", "1988 1988 11 11 7 0 0 1 S", "1989 1989 2 12 7 0 0 0", "1989 1989 9 29 7 0 0 1 S", "1990 1992 2 1 0 0 0 0", "1990 1991 9 21 0 0 0 1 S", "1992 1992 9 18 7 0 0 1 S", "1993 1993 1 28 7 0 0 0", "2004 2004 8 19 7 0 0 1 S", "2005 2005 2 27 7 2 0 0", "2005 2005 9 9 7 2 0 1 S", "2006 2006 2 12 7 2 0 0", "2006 9999 9 1 0 2 0 1 S", "2007 9999 2 8 0 2 0 0"],
		"Mont": ["1917 1917 2 25 7 2 0 1 D", "1917 1917 3 24 7 0 0 0 S", "1919 1919 2 31 7 2:30 0 1 D", "1919 1919 9 25 7 2:30 0 0 S", "1920 1920 4 2 7 2:30 0 1 D", "1920 1922 9 1 0 2:30 0 0 S", "1921 1921 4 1 7 2 0 1 D", "1922 1922 3 30 7 2 0 1 D", "1924 1924 4 17 7 2 0 1 D", "1924 1926 8 0 8 2:30 0 0 S", "1925 1926 4 1 0 2 0 1 D", "1927 1927 4 1 7 0 0 1 D", "1927 1932 8 0 8 0 0 0 S", "1928 1931 3 0 8 0 0 1 D", "1932 1932 4 1 7 0 0 1 D", "1933 1940 3 0 8 0 0 1 D", "1933 1933 9 1 7 0 0 0 S", "1934 1939 8 0 8 0 0 0 S", "1946 1973 3 0 8 2 0 1 D", "1945 1948 8 0 8 2 0 0 S", "1949 1950 9 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],
		"Bahamas": ["1964 1975 9 0 8 2 0 0 S", "1964 1975 3 0 8 2 0 1 D"],
		"NYC": ["1920 1920 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1966 3 0 8 2 0 1 D", "1921 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],
		"Haiti": ["1983 1983 4 8 7 0 0 1 D", "1984 1987 3 0 8 0 0 1 D", "1983 1987 9 0 8 0 0 0 S", "1988 1997 3 1 0 1 2 1 D", "1988 1997 9 0 8 1 2 0 S", "2005 2006 3 1 0 0 0 1 D", "2005 2006 9 0 8 0 0 0 S", "2012 9999 2 8 0 2 0 1 D", "2012 9999 10 1 0 2 0 0 S"],
		"Regina": ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1930 1934 4 1 0 0 0 1 D", "1930 1934 9 1 0 0 0 0 S", "1937 1941 3 8 0 0 0 1 D", "1937 1937 9 8 0 0 0 0 S", "1938 1938 9 1 0 0 0 0 S", "1939 1941 9 8 0 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 3 8 0 2 0 1 D", "1946 1946 9 8 0 2 0 0 S", "1947 1957 3 0 8 2 0 1 D", "1947 1957 8 0 8 2 0 0 S", "1959 1959 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S"],
		"Chile": ["1927 1932 8 1 7 0 0 1 S", "1928 1932 3 1 7 0 0 0", "1942 1942 5 1 7 4 1 0", "1942 1942 7 1 7 5 1 1 S", "1946 1946 6 15 7 4 1 1 S", "1946 1946 8 1 7 3 1 0", "1947 1947 3 1 7 4 1 0", "1968 1968 10 3 7 4 1 1 S", "1969 1969 2 30 7 3 1 0", "1969 1969 10 23 7 4 1 1 S", "1970 1970 2 29 7 3 1 0", "1971 1971 2 14 7 3 1 0", "1970 1972 9 9 0 4 1 1 S", "1972 1986 2 9 0 3 1 0", "1973 1973 8 30 7 4 1 1 S", "1974 1987 9 9 0 4 1 1 S", "1987 1987 3 12 7 3 1 0", "1988 1989 2 9 0 3 1 0", "1988 1988 9 1 0 4 1 1 S", "1989 1989 9 9 0 4 1 1 S", "1990 1990 2 18 7 3 1 0", "1990 1990 8 16 7 4 1 1 S", "1991 1996 2 9 0 3 1 0", "1991 1997 9 9 0 4 1 1 S", "1997 1997 2 30 7 3 1 0", "1998 1998 2 9 0 3 1 0", "1998 1998 8 27 7 4 1 1 S", "1999 1999 3 4 7 3 1 0", "1999 2010 9 9 0 4 1 1 S", "2000 2007 2 9 0 3 1 0", "2008 2008 2 30 7 3 1 0", "2009 2009 2 9 0 3 1 0", "2010 2010 3 1 0 3 1 0", "2011 2011 4 2 0 3 1 0", "2011 2011 7 16 0 4 1 1 S", "2012 9999 3 23 0 3 1 0", "2012 9999 8 2 0 4 1 1 S"],
		"DR": ["1966 1966 9 30 7 0 0 1 D", "1967 1967 1 28 7 0 0 0 S", "1969 1973 9 0 8 0 0 0:30 HD", "1970 1970 1 21 7 0 0 0 S", "1971 1971 0 20 7 0 0 0 S", "1972 1974 0 21 7 0 0 0 S"],
		"C-Eur": ["1916 1916 3 30 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1918 3 15 1 2 2 1 S", "1917 1918 8 15 1 2 2 0", "1940 1940 3 1 7 2 2 1 S", "1942 1942 10 2 7 2 2 0", "1943 1943 2 29 7 2 2 1 S", "1943 1943 9 4 7 2 2 0", "1944 1945 3 1 1 2 2 1 S", "1944 1944 9 2 7 2 2 0", "1945 1945 8 16 7 2 2 0", "1977 1980 3 1 0 2 2 1 S", "1977 1977 8 0 8 2 2 0", "1978 1978 9 1 7 2 2 0", "1979 1995 8 0 8 2 2 0", "1981 9999 2 0 8 2 2 1 S", "1996 9999 9 0 8 2 2 0"],
		"Swift": ["1957 1957 3 0 8 2 0 1 D", "1957 1957 9 0 8 2 0 0 S", "1959 1961 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S", "1960 1961 8 0 8 2 0 0 S"],
		"Hond": ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S", "2006 2006 4 1 0 0 0 1 D", "2006 2006 7 1 1 0 0 0 S"],
		"Thule": ["1991 1992 2 0 8 2 0 1 D", "1991 1992 8 0 8 2 0 0 S", "1993 2006 3 1 0 2 0 1 D", "1993 2006 9 0 8 2 0 0 S", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],
		"Toronto": ["1919 1919 2 30 7 23:30 0 1 D", "1919 1919 9 26 7 0 0 0 S", "1920 1920 4 2 7 2 0 1 D", "1920 1920 8 26 7 0 0 0 S", "1921 1921 4 15 7 2 0 1 D", "1921 1921 8 15 7 2 0 0 S", "1922 1923 4 8 0 2 0 1 D", "1922 1926 8 15 0 2 0 0 S", "1924 1927 4 1 0 2 0 1 D", "1927 1932 8 0 8 2 0 0 S", "1928 1931 3 0 8 2 0 1 D", "1932 1932 4 1 7 2 0 1 D", "1933 1940 3 0 8 2 0 1 D", "1933 1933 9 1 7 2 0 0 S", "1934 1939 8 0 8 2 0 0 S", "1945 1946 8 0 8 2 0 0 S", "1946 1946 3 0 8 2 0 1 D", "1947 1949 3 0 8 0 0 1 D", "1947 1948 8 0 8 0 0 0 S", "1949 1949 10 0 8 0 0 0 S", "1950 1973 3 0 8 2 0 1 D", "1950 1950 10 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],
		"Winn": ["1916 1916 3 23 7 0 0 1 D", "1916 1916 8 17 7 0 0 0 S", "1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1937 1937 4 16 7 2 0 1 D", "1937 1937 8 26 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 4 12 7 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1949 3 0 8 2 0 1 D", "1947 1949 8 0 8 2 0 0 S", "1950 1950 4 1 7 2 0 1 D", "1950 1950 8 30 7 2 0 0 S", "1951 1960 3 0 8 2 0 1 D", "1951 1958 8 0 8 2 0 0 S", "1959 1959 9 0 8 2 0 0 S", "1960 1960 8 0 8 2 0 0 S", "1963 1963 3 0 8 2 0 1 D", "1963 1963 8 22 7 2 0 0 S", "1966 1986 3 0 8 2 2 1 D", "1966 2005 9 0 8 2 2 0 S", "1987 2005 3 1 0 2 2 1 D"],
		"Neth": ["1916 1916 4 1 7 0 0 1 NST", "1916 1916 9 1 7 0 0 0 AMT", "1917 1917 3 16 7 2 2 1 NST", "1917 1917 8 17 7 2 2 0 AMT", "1918 1921 3 1 1 2 2 1 NST", "1918 1921 8 1 8 2 2 0 AMT", "1922 1922 2 0 8 2 2 1 NST", "1922 1936 9 2 0 2 2 0 AMT", "1923 1923 5 1 5 2 2 1 NST", "1924 1924 2 0 8 2 2 1 NST", "1925 1925 5 1 5 2 2 1 NST", "1926 1931 4 15 7 2 2 1 NST", "1932 1932 4 22 7 2 2 1 NST", "1933 1936 4 15 7 2 2 1 NST", "1937 1937 4 22 7 2 2 1 NST", "1937 1937 6 1 7 0 0 1 S", "1937 1939 9 2 0 2 2 0", "1938 1939 4 15 7 2 2 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0"],
		"Greece": ["1932 1932 6 7 7 0 0 1 S", "1932 1932 8 1 7 0 0 0", "1941 1941 3 7 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 30 7 0 0 1 S", "1943 1943 9 4 7 0 0 0", "1952 1952 6 1 7 0 0 1 S", "1952 1952 10 2 7 0 0 0", "1975 1975 3 12 7 0 2 1 S", "1975 1975 10 26 7 0 2 0", "1976 1976 3 11 7 2 2 1 S", "1976 1976 9 10 7 2 2 0", "1977 1978 3 1 0 2 2 1 S", "1977 1977 8 26 7 2 2 0", "1978 1978 8 24 7 4 0 0", "1979 1979 3 1 7 9 0 1 S", "1979 1979 8 29 7 2 0 0", "1980 1980 3 1 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"],
		"SovietZone": ["1945 1945 4 24 7 2 0 2 M", "1945 1945 8 24 7 3 0 1 S", "1945 1945 10 18 7 2 2 0"],
		"Germany": ["1946 1946 3 14 7 2 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1949 9 1 0 2 2 0", "1947 1947 3 6 7 3 2 1 S", "1947 1947 4 11 7 2 2 2 M", "1947 1947 5 29 7 3 0 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S"],
		"Czech": ["1945 1945 3 8 7 2 2 1 S", "1945 1945 10 18 7 2 2 0", "1946 1946 4 6 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1947 3 20 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 9 7 2 2 1 S"],
		"Belgium": ["1918 1918 2 9 7 0 2 1 S", "1918 1919 9 1 6 23 2 0", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1927 9 1 6 23 2 0", "1923 1923 3 21 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1928 1938 9 2 0 2 2 0", "1929 1929 3 21 7 2 2 1 S", "1930 1930 3 13 7 2 2 1 S", "1931 1931 3 19 7 2 2 1 S", "1932 1932 3 3 7 2 2 1 S", "1933 1933 2 26 7 2 2 1 S", "1934 1934 3 8 7 2 2 1 S", "1935 1935 2 31 7 2 2 1 S", "1936 1936 3 19 7 2 2 1 S", "1937 1937 3 4 7 2 2 1 S", "1938 1938 2 27 7 2 2 1 S", "1939 1939 3 16 7 2 2 1 S", "1939 1939 10 19 7 2 2 0", "1940 1940 1 25 7 2 2 1 S", "1944 1944 8 17 7 2 2 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0", "1946 1946 4 19 7 2 2 1 S", "1946 1946 9 7 7 2 2 0"],
		"Romania": ["1932 1932 4 21 7 0 2 1 S", "1932 1939 9 1 0 0 2 0", "1933 1939 3 2 0 0 2 1 S", "1979 1979 4 27 7 0 0 1 S", "1979 1979 8 0 8 0 0 0", "1980 1980 3 5 7 23 0 1 S", "1980 1980 8 0 8 1 0 0", "1991 1993 2 0 8 0 2 1 S", "1991 1993 8 0 8 0 2 0"],
		"E-Eur": ["1977 1980 3 1 0 0 0 1 S", "1977 1977 8 0 8 0 0 0", "1978 1978 9 1 7 0 0 0", "1979 1995 8 0 8 0 0 0", "1981 9999 2 0 8 0 0 1 S", "1996 9999 9 0 8 0 0 0"],
		"Hungary": ["1918 1918 3 1 7 3 0 1 S", "1918 1918 8 29 7 3 0 0", "1919 1919 3 15 7 3 0 1 S", "1919 1919 8 15 7 3 0 0", "1920 1920 3 5 7 3 0 1 S", "1920 1920 8 30 7 3 0 0", "1945 1945 4 1 7 23 0 1 S", "1945 1945 10 3 7 0 0 0", "1946 1946 2 31 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1949 3 4 0 2 2 1 S", "1950 1950 3 17 7 2 2 1 S", "1950 1950 9 23 7 2 2 0", "1954 1955 4 23 7 0 0 1 S", "1954 1955 9 3 7 0 0 0", "1956 1956 5 1 0 0 0 1 S", "1956 1956 8 0 8 0 0 0", "1957 1957 5 1 0 1 0 1 S", "1957 1957 8 0 8 3 0 0", "1980 1980 3 6 7 1 0 1 S"],
		"Swiss": ["1941 1942 4 1 1 1 0 1 S", "1941 1942 9 1 1 2 0 0"],
		"Russia": ["1917 1917 6 1 7 23 0 1 MST", "1917 1917 11 28 7 0 0 0 MMT", "1918 1918 4 31 7 22 0 2 MDST", "1918 1918 8 16 7 1 0 1 MST", "1919 1919 4 31 7 23 0 2 MDST", "1919 1919 6 1 7 2 0 1 S", "1919 1919 7 16 7 0 0 0", "1921 1921 1 14 7 23 0 1 S", "1921 1921 2 20 7 23 0 2 M", "1921 1921 8 1 7 0 0 1 S", "1921 1921 9 1 7 0 0 0", "1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 2010 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 2010 9 0 8 2 2 0"],
		"Denmark": ["1916 1916 4 14 7 23 0 1 S", "1916 1916 8 30 7 23 0 0", "1940 1940 4 15 7 0 0 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 7 15 7 2 2 0", "1946 1946 4 1 7 2 2 1 S", "1946 1946 8 1 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1947 7 10 7 2 2 0", "1948 1948 4 9 7 2 2 1 S", "1948 1948 7 8 7 2 2 0"],
		"GB-Eire": ["1916 1916 4 21 7 2 2 1 BST", "1916 1916 9 1 7 2 2 0 GMT", "1917 1917 3 8 7 2 2 1 BST", "1917 1917 8 17 7 2 2 0 GMT", "1918 1918 2 24 7 2 2 1 BST", "1918 1918 8 30 7 2 2 0 GMT", "1919 1919 2 30 7 2 2 1 BST", "1919 1919 8 29 7 2 2 0 GMT", "1920 1920 2 28 7 2 2 1 BST", "1920 1920 9 25 7 2 2 0 GMT", "1921 1921 3 3 7 2 2 1 BST", "1921 1921 9 3 7 2 2 0 GMT", "1922 1922 2 26 7 2 2 1 BST", "1922 1922 9 8 7 2 2 0 GMT", "1923 1923 3 16 0 2 2 1 BST", "1923 1924 8 16 0 2 2 0 GMT", "1924 1924 3 9 0 2 2 1 BST", "1925 1926 3 16 0 2 2 1 BST", "1925 1938 9 2 0 2 2 0 GMT", "1927 1927 3 9 0 2 2 1 BST", "1928 1929 3 16 0 2 2 1 BST", "1930 1930 3 9 0 2 2 1 BST", "1931 1932 3 16 0 2 2 1 BST", "1933 1933 3 9 0 2 2 1 BST", "1934 1934 3 16 0 2 2 1 BST", "1935 1935 3 9 0 2 2 1 BST", "1936 1937 3 16 0 2 2 1 BST", "1938 1938 3 9 0 2 2 1 BST", "1939 1939 3 16 0 2 2 1 BST", "1939 1939 10 16 0 2 2 0 GMT", "1940 1940 1 23 0 2 2 1 BST", "1941 1941 4 2 0 1 2 2 BDST", "1941 1943 7 9 0 1 2 1 BST", "1942 1944 3 2 0 1 2 2 BDST", "1944 1944 8 16 0 1 2 1 BST", "1945 1945 3 2 1 1 2 2 BDST", "1945 1945 6 9 0 1 2 1 BST", "1945 1946 9 2 0 2 2 0 GMT", "1946 1946 3 9 0 2 2 1 BST", "1947 1947 2 16 7 2 2 1 BST", "1947 1947 3 13 7 1 2 2 BDST", "1947 1947 7 10 7 1 2 1 BST", "1947 1947 10 2 7 2 2 0 GMT", "1948 1948 2 14 7 2 2 1 BST", "1948 1948 9 31 7 2 2 0 GMT", "1949 1949 3 3 7 2 2 1 BST", "1949 1949 9 30 7 2 2 0 GMT", "1950 1952 3 14 0 2 2 1 BST", "1950 1952 9 21 0 2 2 0 GMT", "1953 1953 3 16 0 2 2 1 BST", "1953 1960 9 2 0 2 2 0 GMT", "1954 1954 3 9 0 2 2 1 BST", "1955 1956 3 16 0 2 2 1 BST", "1957 1957 3 9 0 2 2 1 BST", "1958 1959 3 16 0 2 2 1 BST", "1960 1960 3 9 0 2 2 1 BST", "1961 1963 2 0 8 2 2 1 BST", "1961 1968 9 23 0 2 2 0 GMT", "1964 1967 2 19 0 2 2 1 BST", "1968 1968 1 18 7 2 2 1 BST", "1972 1980 2 16 0 2 2 1 BST", "1972 1980 9 23 0 2 2 0 GMT", "1981 1995 2 0 8 1 1 1 BST", "1981 1989 9 23 0 1 1 0 GMT", "1990 1995 9 22 0 1 1 0 GMT"],
		"Finland": ["1942 1942 3 3 7 0 0 1 S", "1942 1942 9 3 7 0 0 0", "1981 1982 2 0 8 2 0 1 S", "1981 1982 8 0 8 3 0 0"],
		"Turkey": ["1916 1916 4 1 7 0 0 1 S", "1916 1916 9 1 7 0 0 0", "1920 1920 2 28 7 0 0 1 S", "1920 1920 9 25 7 0 0 0", "1921 1921 3 3 7 0 0 1 S", "1921 1921 9 3 7 0 0 0", "1922 1922 2 26 7 0 0 1 S", "1922 1922 9 8 7 0 0 0", "1924 1924 4 13 7 0 0 1 S", "1924 1925 9 1 7 0 0 0", "1925 1925 4 1 7 0 0 1 S", "1940 1940 5 30 7 0 0 1 S", "1940 1940 9 5 7 0 0 0", "1940 1940 11 1 7 0 0 1 S", "1941 1941 8 21 7 0 0 0", "1942 1942 3 1 7 0 0 1 S", "1942 1942 10 1 7 0 0 0", "1945 1945 3 2 7 0 0 1 S", "1945 1945 9 8 7 0 0 0", "1946 1946 5 1 7 0 0 1 S", "1946 1946 9 1 7 0 0 0", "1947 1948 3 16 0 0 0 1 S", "1947 1950 9 2 0 0 0 0", "1949 1949 3 10 7 0 0 1 S", "1950 1950 3 19 7 0 0 1 S", "1951 1951 3 22 7 0 0 1 S", "1951 1951 9 8 7 0 0 0", "1962 1962 6 15 7 0 0 1 S", "1962 1962 9 8 7 0 0 0", "1964 1964 4 15 7 0 0 1 S", "1964 1964 9 1 7 0 0 0", "1970 1972 4 2 0 0 0 1 S", "1970 1972 9 2 0 0 0 0", "1973 1973 5 3 7 1 0 1 S", "1973 1973 10 4 7 3 0 0", "1974 1974 2 31 7 2 0 1 S", "1974 1974 10 3 7 5 0 0", "1975 1975 2 30 7 0 0 1 S", "1975 1976 9 0 8 0 0 0", "1976 1976 5 1 7 0 0 1 S", "1977 1978 3 1 0 0 0 1 S", "1977 1977 9 16 7 0 0 0", "1979 1980 3 1 0 3 0 1 S", "1979 1982 9 11 1 0 0 0", "1981 1982 2 0 8 3 0 1 S", "1983 1983 6 31 7 0 0 1 S", "1983 1983 9 2 7 0 0 0", "1985 1985 3 20 7 0 0 1 S", "1985 1985 8 28 7 0 0 0", "1986 1990 2 0 8 2 2 1 S", "1986 1990 8 0 8 2 2 0", "1991 2006 2 0 8 1 2 1 S", "1991 1995 8 0 8 1 2 0", "1996 2006 9 0 8 1 2 0"],
		"Poland": ["1918 1919 8 16 7 2 2 0", "1919 1919 3 15 7 2 2 1 S", "1944 1944 3 3 7 2 2 1 S", "1944 1944 9 4 7 2 0 0", "1945 1945 3 29 7 0 0 1 S", "1945 1945 10 1 7 0 0 0", "1946 1946 3 14 7 0 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S", "1957 1957 5 2 7 1 2 1 S", "1957 1958 8 0 8 1 2 0", "1958 1958 2 30 7 1 2 1 S", "1959 1959 4 31 7 1 2 1 S", "1959 1961 9 1 0 1 2 0", "1960 1960 3 3 7 1 2 1 S", "1961 1964 4 0 8 1 2 1 S", "1962 1964 8 0 8 1 2 0"],
		"Port": ["1916 1916 5 17 7 23 0 1 S", "1916 1916 10 1 7 1 0 0", "1917 1917 1 28 7 23 2 1 S", "1917 1921 9 14 7 23 2 0", "1918 1918 2 1 7 23 2 1 S", "1919 1919 1 28 7 23 2 1 S", "1920 1920 1 29 7 23 2 1 S", "1921 1921 1 28 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 14 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1931 1932 9 1 6 23 2 0", "1932 1932 3 2 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1934 1938 9 1 6 23 2 0", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 24 7 23 2 1 S", "1940 1941 9 5 7 23 2 0", "1941 1941 3 5 7 23 2 1 S", "1942 1945 2 8 6 23 2 1 S", "1942 1942 3 25 7 22 2 2 M", "1942 1942 7 15 7 22 2 1 S", "1942 1945 9 24 6 23 2 0", "1943 1943 3 17 7 22 2 2 M", "1943 1945 7 25 6 22 2 1 S", "1944 1945 3 21 6 22 2 2 M", "1946 1946 3 1 6 23 2 1 S", "1946 1946 9 1 6 23 2 0", "1947 1949 3 1 0 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1951 1965 3 1 0 2 2 1 S", "1951 1965 9 1 0 2 2 0", "1977 1977 2 27 7 0 2 1 S", "1977 1977 8 25 7 0 2 0", "1978 1979 3 1 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1982 8 0 8 1 2 0", "1980 1980 2 0 8 0 2 1 S", "1981 1982 2 0 8 1 2 1 S", "1983 1983 2 0 8 2 2 1 S"],
		"W-Eur": ["1977 1980 3 1 0 1 2 1 S", "1977 1977 8 0 8 1 2 0", "1978 1978 9 1 7 1 2 0", "1979 1995 8 0 8 1 2 0", "1981 9999 2 0 8 1 2 1 S", "1996 9999 9 0 8 1 2 0"],
		"Lux": ["1916 1916 4 14 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1917 3 28 7 23 0 1 S", "1917 1917 8 17 7 1 0 0", "1918 1918 3 15 1 2 2 1 S", "1918 1918 8 15 1 2 2 0", "1919 1919 2 1 7 23 0 1 S", "1919 1919 9 5 7 3 0 0", "1920 1920 1 14 7 23 0 1 S", "1920 1920 9 24 7 2 0 0", "1921 1921 2 14 7 23 0 1 S", "1921 1921 9 26 7 2 0 0", "1922 1922 2 25 7 23 0 1 S", "1922 1922 9 2 0 1 0 0", "1923 1923 3 21 7 23 0 1 S", "1923 1923 9 2 0 2 0 0", "1924 1924 2 29 7 23 0 1 S", "1924 1928 9 2 0 1 0 0", "1925 1925 3 5 7 23 0 1 S", "1926 1926 3 17 7 23 0 1 S", "1927 1927 3 9 7 23 0 1 S", "1928 1928 3 14 7 23 0 1 S", "1929 1929 3 20 7 23 0 1 S"],
		"Spain": ["1917 1917 4 5 7 23 2 1 S", "1917 1919 9 6 7 23 2 0", "1918 1918 3 15 7 23 2 1 S", "1919 1919 3 5 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 4 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1937 1937 4 22 7 23 2 1 S", "1937 1939 9 1 6 23 2 0", "1938 1938 2 22 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1940 1940 2 16 7 23 2 1 S", "1942 1942 4 2 7 22 2 2 M", "1942 1942 8 1 7 22 2 1 S", "1943 1946 3 13 6 22 2 2 M", "1943 1943 9 3 7 22 2 1 S", "1944 1944 9 10 7 22 2 1 S", "1945 1945 8 30 7 1 0 1 S", "1946 1946 8 30 7 0 0 0", "1949 1949 3 30 7 23 0 1 S", "1949 1949 8 30 7 1 0 0", "1974 1975 3 13 6 23 0 1 S", "1974 1975 9 1 0 1 0 0", "1976 1976 2 27 7 23 0 1 S", "1976 1977 8 0 8 1 0 0", "1977 1978 3 2 7 23 0 1 S", "1978 1978 9 1 7 1 0 0"],
		"Italy": ["1916 1916 5 3 7 0 2 1 S", "1916 1916 9 1 7 0 2 0", "1917 1917 3 1 7 0 2 1 S", "1917 1917 8 30 7 0 2 0", "1918 1918 2 10 7 0 2 1 S", "1918 1919 9 1 0 0 2 0", "1919 1919 2 2 7 0 2 1 S", "1920 1920 2 21 7 0 2 1 S", "1920 1920 8 19 7 0 2 0", "1940 1940 5 15 7 0 2 1 S", "1944 1944 8 17 7 0 2 0", "1945 1945 3 2 7 2 0 1 S", "1945 1945 8 15 7 0 2 0", "1946 1946 2 17 7 2 2 1 S", "1946 1946 9 6 7 2 2 0", "1947 1947 2 16 7 0 2 1 S", "1947 1947 9 5 7 0 2 0", "1948 1948 1 29 7 2 2 1 S", "1948 1948 9 3 7 2 2 0", "1966 1968 4 22 0 0 0 1 S", "1966 1969 8 22 0 0 0 0", "1969 1969 5 1 7 0 0 1 S", "1970 1970 4 31 7 0 0 1 S", "1970 1970 8 0 8 0 0 0", "1971 1972 4 22 0 0 0 1 S", "1971 1971 8 0 8 1 0 0", "1972 1972 9 1 7 0 0 0", "1973 1973 5 3 7 0 0 1 S", "1973 1974 8 0 8 0 0 0", "1974 1974 4 26 7 0 0 1 S", "1975 1975 5 1 7 0 2 1 S", "1975 1977 8 0 8 0 2 0", "1976 1976 4 30 7 0 2 1 S", "1977 1979 4 22 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1979 8 30 7 0 2 0"],
		"Malta": ["1973 1973 2 31 7 0 2 1 S", "1973 1973 8 29 7 0 2 0", "1974 1974 3 21 7 0 2 1 S", "1974 1974 8 16 7 0 2 0", "1975 1979 3 15 0 2 0 1 S", "1975 1980 8 15 0 2 0 0", "1980 1980 2 31 7 2 0 1 S"],
		"France": ["1916 1916 5 14 7 23 2 1 S", "1916 1919 9 1 0 23 2 0", "1917 1917 2 24 7 23 2 1 S", "1918 1918 2 9 7 23 2 1 S", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1938 9 1 6 23 2 0", "1923 1923 4 26 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1930 1930 3 12 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1932 1932 3 2 7 23 2 1 S", "1933 1933 2 25 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 25 7 2 0 1 S", "1941 1941 4 5 7 0 0 2 M", "1941 1941 9 6 7 0 0 1 S", "1942 1942 2 9 7 0 0 2 M", "1942 1942 10 2 7 3 0 1 S", "1943 1943 2 29 7 2 0 2 M", "1943 1943 9 4 7 3 0 1 S", "1944 1944 3 3 7 2 0 2 M", "1944 1944 9 8 7 1 0 1 S", "1945 1945 3 2 7 2 0 2 M", "1945 1945 8 16 7 3 0 0", "1976 1976 2 28 7 1 0 1 S", "1976 1976 8 26 7 1 0 0"],
		"Norway": ["1916 1916 4 22 7 1 0 1 S", "1916 1916 8 30 7 0 0 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 9 1 7 2 2 0", "1959 1964 2 15 0 2 2 1 S", "1959 1965 8 15 0 2 2 0", "1965 1965 3 25 7 2 2 1 S"],
		"Latvia": ["1989 1996 2 0 8 2 2 1 S", "1989 1996 8 0 8 2 2 0"],
		"Bulg": ["1979 1979 2 31 7 23 0 1 S", "1979 1979 9 1 7 1 0 0", "1980 1982 3 1 6 23 0 1 S", "1980 1980 8 29 7 1 0 0", "1981 1981 8 27 7 2 0 0"],
		"Albania": ["1940 1940 5 16 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 29 7 2 0 1 S", "1943 1943 3 10 7 3 0 0", "1974 1974 4 4 7 0 0 1 S", "1974 1974 9 2 7 0 0 0", "1975 1975 4 1 7 0 0 1 S", "1975 1975 9 2 7 0 0 0", "1976 1976 4 2 7 0 0 1 S", "1976 1976 9 3 7 0 0 0", "1977 1977 4 8 7 0 0 1 S", "1977 1977 9 2 7 0 0 0", "1978 1978 4 6 7 0 0 1 S", "1978 1978 9 1 7 0 0 0", "1979 1979 4 5 7 0 0 1 S", "1979 1979 8 30 7 0 0 0", "1980 1980 4 3 7 0 0 1 S", "1980 1980 9 4 7 0 0 0", "1981 1981 3 26 7 0 0 1 S", "1981 1981 8 27 7 0 0 0", "1982 1982 4 2 7 0 0 1 S", "1982 1982 9 3 7 0 0 0", "1983 1983 3 18 7 0 0 1 S", "1983 1983 9 1 7 0 0 0", "1984 1984 3 1 7 0 0 1 S"],
		"Austria": ["1920 1920 3 5 7 2 2 1 S", "1920 1920 8 13 7 2 2 0", "1946 1946 3 14 7 2 2 1 S", "1946 1948 9 1 0 2 2 0", "1947 1947 3 6 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1980 1980 3 6 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"]
	},
	"links": {
		"America/Kralendijk": "America/Curacao",
		"America/Lower_Princes": "America/Curacao",
		"America/Marigot": "America/Guadeloupe",
		"America/Shiprock": "America/Denver",
		"America/St_Barthelemy": "America/Guadeloupe",
		"Europe/Bratislava": "Europe/Prague",
		"Europe/Busingen": "Europe/Zurich",
		"Europe/Guernsey": "Europe/London",
		"Europe/Isle_of_Man": "Europe/London",
		"Europe/Jersey": "Europe/London",
		"Europe/Ljubljana": "Europe/Belgrade",
		"Europe/Mariehamn": "Europe/Helsinki",
		"Europe/Podgorica": "Europe/Belgrade",
		"Europe/San_Marino": "Europe/Rome",
		"Europe/Sarajevo": "Europe/Belgrade",
		"Europe/Skopje": "Europe/Belgrade",
		"Europe/Vatican": "Europe/Rome",
		"Europe/Zagreb": "Europe/Belgrade"
	}
});

(function ($) {
	$(document).ready(function () {
		var nextLiveSessionsLink = $('.next-live-sessions').click(function (e) {
			$('html, body').animate({scrollTop: $(".timetable").offset().top}, 'fast');
			e.preventDefault();
		});
		var webinarList = $('[data-webinar-list]');
		if (webinarList.length) {
			function hideWebinars() {
				$('[data-webinar-container]').hide();
				$('[data-no-webinar]').show();
			}

			$.post(tp_vars.ajaxurl, {action: 'tp-webinars'}, function (data) {
				var webinars = _(data).chain().map(function (item) {
					return {
						subject: item.subject,
						description: item.description.replace(/(\r\n|\n|\r)/g, '<br />'),
						link: item.registrationUrl,
						startTime: moment(item.times[0].startTime),
						timeZone: moment().tz(item.timeZone),
						getStartTime: function () {
							return this.startTime.clone().zone(moment().zone());
						}
					};
				}).filter(function (item) {
					return item.subject.indexOf('[private]') === -1
				}).sortBy(function (item) {
					return item.startTime.toISOString();
				}).value();
				if (webinars.length > 0) {
					var nextWebinar = _(webinars).chain().filter(function (x) {
						return x.getStartTime() > moment();
					}).first().value();
					if (nextWebinar) {
						nextLiveSessionsLink.text(_.template('Next live session <%= interval %>')({interval: nextWebinar.getStartTime().fromNow()})).show();
					}
					var compiledTemplate = _.template($('#webinarListTemplate').html());
					var html = _(webinars).map(function (webinar) {
						return compiledTemplate(webinar)
					});
					webinarList.empty().append(html);
				} else {
					hideWebinars();
				}
			}, "json").fail(hideWebinars);
		}
	});
})(jQuery);

(function ($) {
	$(document).ready(function () {
		$(function () {
			var bTabs = $('.learning'), thead = bTabs.find('.tabs-head .head-item'), tbody = bTabs.find('.tabs-body .body-item');
			thead.eq(0).addClass('selected');
			tbody.eq(0).css('display', 'block');
			thead.click(function (e) {
				if (!$(this).hasClass('selected')) {
					$(this).addClass('selected').siblings().removeClass('selected');
					tbody.hide().eq($(this).index()).fadeIn('slow');
					if (window.history && window.history.replaceState) {
						window.history.replaceState({}, '', '#' + $(this).data('tabId'));
					}
				}
				e.preventDefault();
			});
			activate_tab();
			$(window).on('hashchange', function () {
				activate_tab();
			});
			function activate_tab() {
				var hash = document.location.hash;
				if (hash) {
					$('[data-tab-id="' + hash.replace('#', '') + '"]').click();
				}
			}
		});
		$(function () {
			var popup = $('#workshop-popup'), closeBtn = popup.find('.close');
			$('.register-button').click(function (e) {
				popup.addClass('show');
				popup.fadeIn();
				var product = $(this).data('name');
				popup.find("#productInput").val(product);
				var level = $(this).data('level');
				var putLevelIntoTitle = $(this).data('putLevelIntoTitle');
				if (putLevelIntoTitle) {
					product = product + ': ' + level;
				}
				popup.find("#level").val(level);
				popup.find("#product").html(product);
				e.preventDefault();
			});
			closeBtn.click(function (e) {
				popup.fadeOut();
				popup.removeClass('show');
				e.preventDefault();
				e.stopPropagation();
			});
		});
		$('#workshop-reg-form').validate({
			errorClass: 'error', validClass: 'valid', rules: {name: {required: true}, email: {required: true, email: true}}, errorPlacement: function () {
			}, submitHandler: function (form) {
				form = $(form);
				var data = {
					name: form.find('[name="name"]').val(),
					email: form.find('[name="email"]').val(),
					comment: form.find('[name="comment"]').val(),
					workshops: form.parent().find('#productInput').val() + ': ' + form.parent().find('#level').val(),
					type: 'request_workshop',
					action: 'tp-mail'
				};
				form.startLoading();
				$.ajax({
					type: 'POST', url: tp_vars.ajaxurl, data: data, dataType: "json", traditional: true, success: function (data) {
						form.stopLoading();
						form.hide();
						$('.workshop-message-success').show();
					}, error: function (data) {
						form.stopLoading();
						form.hide();
						$('.workshop-message-error').show();
					}
				});
			}
		});
	});
	$(document).ready(function () {
		$('.flip-container .front').click(function (e) {
			$(this).closest('.flip-container').addClass('rotate');
		});
		$('.flip-container .back .close').click(function (e) {
			$(this).closest('.flip-container').removeClass('rotate');
			e.preventDefault();
			e.stopPropagation();
		});
	});
})(jQuery);
(function ($) {
	$.fn.appendAround = function () {
		return this.each(function () {
			var $self = $(this), att = "data-set", $parent = $self.parent(), parent = $parent[0], attval = $parent.attr(att), $set = $("[" + att + "='" + attval + "']");

			function isHidden(elem) {
				return $(elem).css("display") === "none";
			}

			function appendToVisibleContainer() {
				if (isHidden(parent)) {
					var found = 0;
					$set.each(function () {
						if (!isHidden(this) && !found) {
							$self.appendTo(this);
							found++;
							parent = this;
						}
					});
				}
			}

			appendToVisibleContainer();
			$(window).bind("resize", appendToVisibleContainer);
		});
	};
}(jQuery));
$(function () {
	$(function () {
		var $checkBoxContainer = $('.options-list.checks');
		if (!$checkBoxContainer.length)return;
		$checkBoxContainer.on("change", ".option-checkbox", function () {
			var thisCheck = $(this);
			var option = thisCheck.closest('.option');
			if (thisCheck.prop('checked')) {
				option.addClass('checked');
			} else {
				option.removeClass('checked');
			}
		});
	});
	$(function () {
		var radioBoxContainer = $('.options-list.radio'), radioBox = radioBoxContainer.find('.option');
		if (!radioBox.length)return;
		radioBox.each(function () {
			var thisRadio = $(this);
			var hideRadio = thisRadio.find('.option-radio');
			hideRadio.change(function () {
				if ($(this).prop('checked')) {
					thisRadio.addClass('checked');
					thisRadio.siblings().removeClass('checked')
				} else thisRadio.removeClass('checked');
			});
		})
	});
	$(function () {
		var inputContainer = $('.input-container');
		if (!inputContainer.length)return;
		inputContainer.each(function () {
			var currentContainer = $(this), input = currentContainer.find('.form-input-text'), textfield = currentContainer.find('.form-comment');
			input.change(function () {
				if (!input.val().length == 0) {
					input.addClass('full');
				} else input.removeClass('full');
			});
			textfield.change(function () {
				if (textfield.val()) {
					textfield.addClass('full');
				} else textfield.removeClass('full');
			});
		})
	});
	$(function () {
		if (window.location.pathname === '/special-price/' || window.location.pathname === '/special-price') {
			return;
		}
		var $regForms = $('.reg-form-page');
		if (!$regForms.length) {
			return;
		}
		$regForms.find('form input:first').focus();
	});
	$('.sign-up').on('propertychange change input paste', 'input[name=host]', function () {
		var _this = $(this);
		var $field = _this.closest('.field-host');
		var $fieldName = $field.find('.host-name .name');
		var value = _this.val();
		if (value) {
			$fieldName.text(value);
			$field.addClass('generated');
		} else {
			$fieldName.text('*');
			$field.removeClass('generated');
		}
	});
	$('.reg-form-page select').on('propertychange change', function () {
		$(this).addClass('selected');
	});
});
var countVars = {"disqusShortname": "tp3blogposts"};
var disqus_shortname = countVars.disqusShortname;
(function () {
	var nodes = document.getElementsByTagName('span');
	for (var i = 0, url; i < nodes.length; i++) {
		if (nodes[i].className.indexOf('dsq-postid') != -1) {
			nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
			var parentElm = nodes[i];
			do {
				parentElm = parentElm.parentNode;
			} while (parentElm.tagName != 'A' && parentElm.parentNode);
			if (parentElm.tagName !== 'A') {
				continue;
			}
			url = nodes[i].parentNode.href.split('#', 1);
			if (url.length == 1) {
				url = url[0];
			} else {
				url = url[1];
			}
			nodes[i].parentNode.href = url + '#disqus_thread';
		}
	}
	var s = document.createElement('script');
	s.async = true;
	s.type = 'text/javascript';
	s.src = '//' + disqus_shortname + '.disqus.com/count.js';
	(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());