! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function n(e) {
        var t = e.length,
            n = K.type(e);
        return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (K.isFunction(t)) return K.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }));
        if (t.nodeType) return K.grep(e, (function(e) {
            return e === t !== n
        }));
        if ("string" == typeof t) {
            if (ae.test(t)) return K.filter(t, e, n);
            t = K.filter(t, e)
        }
        return K.grep(e, (function(e) {
            return z.call(t, e) >= 0 !== n
        }))
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = pe[e] = {};
        return K.each(e.match(de) || [], (function(e, n) {
            t[n] = !0
        })), t
    }

    function s() {
        X.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? K.parseJSON(n) : n)
                } catch (e) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return X.activeElement
        } catch (e) {}
    }

    function h(e, t) {
        return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (o = ge.access(e), s = ge.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) K.event.add(t, i, l[i][n]);
            ye.hasData(e) && (a = ye.access(e), u = K.extend({}, a), ye.set(t, u))
        }
    }

    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
    }

    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function _(t, n) {
        var r, i = K(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(), o
    }

    function w(e) {
        var t = X,
            n = We[e];
        return n || ("none" !== (n = _(e, t)) && n || ((t = (Ie = (Ie || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = _(e, t), Ie.detach()), We[e] = n), n
    }

    function b(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || $e(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || K.contains(e.ownerDocument, e) || (s = K.style(e, t)), Ue.test(s) && qe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function x(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ze.length; i--;)
            if ((t = Ze[i] + n) in e) return t;
        return r
    }

    function S(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function T(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += K.css(e, n + ke[o], !0, i)), r ? ("content" === n && (s -= K.css(e, "padding" + ke[o], !0, i)), "margin" !== n && (s -= K.css(e, "border" + ke[o] + "Width", !0, i))) : (s += K.css(e, "padding" + ke[o], !0, i), "padding" !== n && (s += K.css(e, "border" + ke[o] + "Width", !0, i)));
        return s
    }

    function D(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = $e(e),
            s = "border-box" === K.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = b(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ue.test(i)) return i;
            r = s && (Z.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + T(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function M(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = ge.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[s] = ge.access(r, "olddisplay", w(r.nodeName)))) : (i = Se(r), "none" === n && i || ge.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function C(e, t, n, r, i) {
        return new C.prototype.init(e, t, n, r, i)
    }

    function N() {
        return setTimeout((function() {
            Xe = void 0
        })), Xe = K.now()
    }

    function O(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ke[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function A(e, t, n) {
        for (var r, i = (rt[t] || []).concat(rt["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function E(e, t, n) {
        var r, i, o, s, a, u, l, c = this,
            f = {},
            h = e.style,
            d = e.nodeType && Se(e),
            p = ge.get(e, "fxshow");
        for (r in n.queue || (null == (a = K._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, c.always((function() {
                c.always((function() {
                    a.unqueued--, K.queue(e, "fx").length || a.empty.fire()
                }))
            }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (l = K.css(e, "display")) ? ge.get(e, "olddisplay") || w(e.nodeName) : l) && "none" === K.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", c.always((function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }))), t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !p || void 0 === p[r]) continue;
                    d = !0
                }
                f[r] = p && p[r] || K.style(e, r)
            } else l = void 0;
        if (K.isEmptyObject(f)) "inline" === ("none" === l ? w(e.nodeName) : l) && (h.display = l);
        else
            for (r in p ? "hidden" in p && (d = p.hidden) : p = ge.access(e, "fxshow", {}), o && (p.hidden = !d), d ? K(e).show() : c.done((function() {
                    K(e).hide()
                })), c.done((function() {
                    var t;
                    for (t in ge.remove(e, "fxshow"), f) K.style(e, t, f[t])
                })), f) s = A(d ? p[r] : 0, r, c), r in p || (p[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }

    function Y(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (i = t[r = K.camelCase(n)], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = K.cssHooks[r]) && "expand" in s)
                for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
    }

    function j(e, t, n) {
        var r, i, o = 0,
            s = nt.length,
            a = K.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (i) return !1;
                for (var t = Xe || N(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: K.extend({}, t),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xe || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (Y(c, l.opts.specialEasing); o < s; o++)
            if (r = nt[o].call(l, e, c, l.opts)) return r;
        return K.map(c, A, l), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(de) || [];
            if (K.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, K.each(e[a] || [], (function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            })), u
        }
        var o = {},
            s = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function L(e, t) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && K.extend(!0, e, r), e
    }

    function F(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function H(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var i;
        if (K.isArray(t)) K.each(t, (function(t, i) {
            n || Tt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== K.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function W(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var q = [],
        U = q.slice,
        $ = q.concat,
        V = q.push,
        z = q.indexOf,
        G = {},
        B = G.toString,
        Q = G.hasOwnProperty,
        Z = {},
        X = e.document,
        J = "2.1.1",
        K = function(e, t) {
            return new K.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : U.call(this)
        },
        pushStack: function(e) {
            var t = K.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(K.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: q.sort,
        splice: q.splice
    }, K.extend = K.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[t] = K.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !K.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[B.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = K.trim(e)) && (1 === e.indexOf("use strict") ? ((t = X.createElement("script")).text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i = 0,
                o = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; i < o && !1 !== t.apply(e[i], r); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], r)) break
            } else if (s)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : V.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = [];
            if (n(e))
                for (; o < s; o++) null != (i = t(e[o], o, r)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, r)) && a.push(i);
            return $.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e)) return r = U.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(U.call(arguments)))
            }, i.guid = e.guid = e.guid || K.guid++, i
        },
        now: Date.now,
        support: Z
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase()
    }));
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, p, m;
            if ((t ? t.ownerDocument || t : I) !== E && A(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = (t = t || E).nodeType) && 9 !== a) return [];
            if (j && !r) {
                if (i = ve.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && b.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                    }
                if (b.qsa && (!P || !P.test(e))) {
                    if (d = f = H, p = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = T(e), (f = t.getAttribute("id")) ? d = f.replace(we, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + h(l[u]);
                        p = _e.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m) try {
                        return K.apply(n, p.querySelectorAll(m)), n
                    } catch (e) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return M(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[H] = !0, e
        }

        function i(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || B) - (~e.sourceIndex || B);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r((function(t) {
                return t = +t, r((function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                }))
            }))
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== G && e
        }

        function f() {}

        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = q++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [W, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((a = (u = t[H] || (t[H] = {}))[r]) && a[0] === W && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function y(e, t, n, i, o, s) {
            return i && !i[H] && (i = y(i)), o && !o[H] && (o = y(o, s)), r((function(r, s, a, u) {
                var l, c, f, h = [],
                    d = [],
                    p = s.length,
                    y = r || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !r && t ? y : g(y, h, e, a, u),
                    _ = n ? o || (r ? e : p || i) ? [] : s : v;
                if (n && n(v, _, a, u), i)
                    for (l = g(_, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (_[d[c]] = !(v[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = _.length; c--;)(f = _[c]) && l.push(v[c] = f);
                            o(null, _ = [], l, u)
                        }
                        for (c = _.length; c--;)(f = _[c]) && (l = o ? te.call(r, f) : h[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else _ = g(_ === s ? _.splice(p, _.length) : _), o ? o(null, s, _, u) : K.apply(s, _)
            }))
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = d((function(e) {
                    return e === t
                }), s, !0), l = d((function(e) {
                    return te.call(t, e) > -1
                }), s, !0), c = [function(e, n, r) {
                    return !o && (r || n !== C) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; a < i; a++)
                if (n = x.relative[e[a].type]) c = [d(p(c), n)];
                else {
                    if ((n = x.filter[e[a].type].apply(null, e[a].matches))[H]) {
                        for (r = ++a; r < i && !x.relative[e[r].type]; r++);
                        return y(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, a < r && v(e.slice(a, r)), r < i && v(e = e.slice(r)), r < i && h(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function _(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, h, d = 0,
                        p = "0",
                        m = r && [],
                        y = [],
                        v = C,
                        _ = r || o && x.find.TAG("*", l),
                        w = W += null == v ? 1 : Math.random() || .1,
                        b = _.length;
                    for (l && (C = s !== E && s); p !== b && null != (c = _[p]); p++) {
                        if (o && c) {
                            for (f = 0; h = e[f++];)
                                if (h(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (W = w)
                        }
                        i && ((c = !h && c) && d--, r && m.push(c))
                    }
                    if (d += p, i && p !== d) {
                        for (f = 0; h = n[f++];) h(m, y, s, a);
                        if (r) {
                            if (d > 0)
                                for (; p--;) m[p] || y[p] || (y[p] = X.call(u));
                            y = g(y)
                        }
                        K.apply(u, y), l && !r && y.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = w, C = v), m
                };
            return i ? r(s) : s
        }
        var w, b, x, k, S, T, D, M, C, N, O, A, E, Y, j, P, R, L, F, H = "sizzle" + -new Date,
            I = e.document,
            W = 0,
            q = 0,
            U = n(),
            $ = n(),
            V = n(),
            z = function(e, t) {
                return e === t && (O = !0), 0
            },
            G = "undefined",
            B = 1 << 31,
            Q = {}.hasOwnProperty,
            Z = [],
            X = Z.pop,
            J = Z.push,
            K = Z.push,
            ee = Z.slice,
            te = Z.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            he = new RegExp(ae),
            de = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _e = /[+~]/,
            we = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            xe = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            K.apply(Z = ee.call(I.childNodes), I.childNodes), Z[I.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: Z.length ? function(e, t) {
                    J.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        for (w in b = t.support = {}, S = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, A = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : I,
                    r = n.defaultView;
                return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, Y = n.documentElement, j = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", (function() {
                    A()
                }), !1) : r.attachEvent && r.attachEvent("onunload", (function() {
                    A()
                }))), b.attributes = i((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), b.getElementsByTagName = i((function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                })), b.getElementsByClassName = ye.test(n.getElementsByClassName) && i((function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                })), b.getById = i((function(e) {
                    return Y.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                })), b.getById ? (x.find.ID = function(e, t) {
                    if (typeof t.getElementById !== G && j) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== G) return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== G && j) return t.getElementsByClassName(e)
                }, R = [], P = [], (b.qsa = ye.test(n.querySelectorAll)) && (i((function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
                })), i((function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                }))), (b.matchesSelector = ye.test(L = Y.matches || Y.webkitMatchesSelector || Y.mozMatchesSelector || Y.oMatchesSelector || Y.msMatchesSelector)) && i((function(e) {
                    b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), R.push("!=", ae)
                })), P = P.length && new RegExp(P.join("|")), R = R.length && new RegExp(R.join("|")), t = ye.test(Y.compareDocumentPosition), F = t || ye.test(Y.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, z = t ? function(e, t) {
                    if (e === t) return O = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === I && F(I, e) ? -1 : t === n || t.ownerDocument === I && F(I, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return O = !0, 0;
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        l = [t];
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
                    if (o === a) return s(e, t);
                    for (r = e; r = r.parentNode;) u.unshift(r);
                    for (r = t; r = r.parentNode;) l.unshift(r);
                    for (; u[i] === l[i];) i++;
                    return i ? s(u[i], l[i]) : u[i] === I ? -1 : l[i] === I ? 1 : 0
                }, n) : E
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== E && A(e), n = n.replace(fe, "='$1']"), b.matchesSelector && j && (!R || !R.test(n)) && (!P || !P.test(n))) try {
                    var r = L.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return t(n, E, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== E && A(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== E && A(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                return void 0 !== r ? r : b.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (O = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(z), O) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return N = null, e
            }, k = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += k(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && U(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, h, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                v = !u && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                    for (d = (l = (c = g[H] || (g[H] = {}))[e] || [])[0] === W && l[1], h = l[0] === W && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (h = d = 0) || p.pop();)
                                        if (1 === f.nodeType && ++h && f === t) {
                                            c[e] = [W, d, h];
                                            break
                                        }
                                } else if (v && (l = (t[H] || (t[H] = {}))[e]) && l[0] === W) h = l[1];
                                else
                                    for (;
                                        (f = ++d && f && f[m] || (h = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++h || (v && ((f[H] || (f[H] = {}))[e] = [W, h]), f !== t)););
                                return (h -= i) === r || h % r == 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r((function(e, t) {
                            for (var r, i = o(e, n), s = i.length; s--;) e[r = te.call(e, i[s])] = !(t[r] = i[s])
                        })) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r((function(e) {
                        var t = [],
                            n = [],
                            i = D(e.replace(ue, "$1"));
                        return i[H] ? r((function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        })) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), !n.pop()
                        }
                    })),
                    has: r((function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    })),
                    contains: r((function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    })),
                    lang: r((function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === Y
                    },
                    focus: function(e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l((function() {
                        return [0]
                    })),
                    last: l((function(e, t) {
                        return [t - 1]
                    })),
                    eq: l((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: l((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: l((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: l((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    })),
                    gt: l((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }, x.pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) x.pseudos[w] = u(w);
        return f.prototype = x.filters = x.pseudos, x.setFilters = new f, T = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = x.preFilter; a;) {
                for (s in r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ue, " ")
                    }), a = a.slice(r.length)), x.filter) !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : $(e, u).slice(0)
        }, D = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;)(o = v(t[n]))[H] ? r.push(o) : i.push(o);
                (o = V(e, _(i, r))).selector = e
            }
            return o
        }, M = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && T(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && j && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(be, xe), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !x.relative[a = s.type]);)
                    if ((u = x.find[a]) && (r = u(s.matches[0].replace(be, xe), _e.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && h(o))) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || D(e, f))(r, t, !j, n, _e.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = H.split("").sort(z).join("") === H, b.detectDuplicates = !!O, A(), b.sortDetached = i((function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        })), i((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || o("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), b.attributes && i((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || o("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), i((function(e) {
            return null == e.getAttribute("disabled")
        })) || o(ne, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        })), t
    }(e);
    K.find = ie, K.expr = ie.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ie.uniqueSort, K.text = ie.getText, K.isXMLDoc = ie.isXML, K.contains = ie.contains;
    var oe = K.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    K.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, K.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(K(e).filter((function() {
                for (t = 0; t < n; t++)
                    if (K.contains(i[t], this)) return !0
            })));
            for (t = 0; t < n; t++) K.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? K.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (K.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof K ? t[0] : t,
                    K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), se.test(n[1]) && K.isPlainObject(t))
                    for (n in t) K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = X.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = X, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? void 0 !== ue.ready ? ue.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
    }).prototype = K.fn, ue = K(X);
    var ce = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && K(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), K.fn.extend({
        has: function(e) {
            var t = K(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (K.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? z.call(K(e), this[0]) : z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || K.merge([], e.childNodes)
        }
    }, (function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (fe[e] || K.unique(i), ce.test(e) && i.reverse()), this.pushStack(i)
        }
    }));
    var he, de = /\S+/g,
        pe = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || o(e) : K.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && a < s; a++)
                    if (!1 === u[a].apply(o[0], o[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function t(n) {
                            K.each(n, (function(n, r) {
                                var i = K.type(r);
                                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            }))
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && K.each(arguments, (function(e, t) {
                        for (var n;
                            (n = K.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                    })), this
                },
                has: function(e) {
                    return e ? K.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, K.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return K.Deferred((function(n) {
                            K.each(t, (function(t, o) {
                                var s = K.isFunction(e[t]) && e[t];
                                i[o[1]]((function() {
                                    var e = s && s.apply(this, arguments);
                                    e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? K.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, K.each(t, (function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add((function() {
                    n = a
                }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            })), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = U.call(arguments),
                s = o.length,
                a = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : K.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? U.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), K.fn.ready = function(e) {
        return K.ready.promise().done(e), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --K.readyWait : K.isReady) || (K.isReady = !0, !0 !== e && --K.readyWait > 0 || (he.resolveWith(X, [K]), K.fn.triggerHandler && (K(X).triggerHandler("ready"), K(X).off("ready"))))
        }
    }), K.ready.promise = function(t) {
        return he || (he = K.Deferred(), "complete" === X.readyState ? setTimeout(K.ready) : (X.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), he.promise(t)
    }, K.ready.promise();
    var me = K.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === K.type(n))
            for (a in i = !0, n) K.access(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, K.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(K(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    K.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, K.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (K.isEmptyObject(o)) K.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, K.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (i = K.camelCase(t), r = t in s ? [t, i] : (r = i) in s ? [r] : r.match(de) || []), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !K.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new a,
        ye = new a,
        ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    K.extend({
        hasData: function(e) {
            return ye.hasData(e) || ge.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ge.access(e, t, n)
        },
        _removeData: function(e, t) {
            ge.remove(e, t)
        }
    }), K.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = K.camelCase(r.slice(5)), u(o, r, i[r]));
                    ge.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                ye.set(this, e)
            })) : me(this, (function(t) {
                var n, r = K.camelCase(e);
                if (o && void 0 === t) return void 0 !== (n = ye.get(o, e)) || void 0 !== (n = ye.get(o, r)) || void 0 !== (n = u(o, r, void 0)) ? n : void 0;
                this.each((function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                ye.remove(this, e)
            }))
        }
    }), K.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || K.isArray(n) ? r = ge.access(e, t, K.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = K._queueHooks(e, t),
                s = function() {
                    K.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: K.Callbacks("once memory").add((function() {
                    ge.remove(e, [t + "queue", n])
                }))
            })
        }
    }), K.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = K.queue(this, e, t);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                K.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = K.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ge.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we, be, xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Se = function(e, t) {
            return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
        },
        Te = /^(?:checkbox|radio)$/i;
    we = X.createDocumentFragment().appendChild(X.createElement("div")), (be = X.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), we.appendChild(be), Z.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var De = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var Me = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, h, d, p, m, g = ge.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = K.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof K !== De && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(de) || [""]).length; l--;) d = m = (a = Oe.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = K.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = K.event.special[d] || {}, c = K.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && K.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (h = u[d]) || ((h = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), K.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, h, d, p, m, g = ge.hasData(e) && ge.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(de) || [""]).length; l--;)
                    if (d = m = (a = Oe.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = K.event.special[d] || {}, h = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || K.removeEvent(e, d, g.handle), delete u[d])
                    } else
                        for (d in u) K.event.remove(e, d + t[l], n, r, !0);
                K.isEmptyObject(u) && (delete g.handle, ge.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, h = [r || X],
                d = Q.call(t, "type") ? t.type : t,
                p = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !Ne.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (t = t[K.expando] ? t : new K.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : K.makeArray(n, [t]), f = K.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || d, Ne.test(u + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (r.ownerDocument || X) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, (c = (ge.get(s, "events") || {})[t.type] && ge.get(s, "handle")) && c.apply(s, n), (c = l && s[l]) && c.apply && K.acceptData(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !K.acceptData(r) || l && K.isFunction(r[d]) && !K.isWindow(r) && ((a = r[l]) && (r[l] = null), K.event.triggered = d, r[d](), K.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = K.event.fix(e);
            var t, n, r, i, o, s = [],
                a = U.call(arguments),
                u = (ge.get(this, "events") || {})[e.type] || [],
                l = K.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = K.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || X).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[K.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ce.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new K.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && K.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return K.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, K.Event = function(e, t) {
        if (!(this instanceof K.Event)) return new K.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? l : c) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || K.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), Z.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        };
        K.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ge.access(r, t);
                i || r.addEventListener(e, n, !0), ge.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ge.access(r, t) - 1;
                i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
            }
        }
    })), K.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return K().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = K.guid++)), this.each((function() {
                K.event.add(this, e, r, n, t)
            }))
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = c), this.each((function() {
                K.event.remove(this, e, n, t)
            }))
        },
        trigger: function(e, t) {
            return this.each((function() {
                K.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return K.event.trigger(e, t, n, !0)
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ee = /<([\w:]+)/,
        Ye = /<|&#?\w+;/,
        je = /<(?:script|style|link)/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, K.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = K.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                for (s = y(a), r = 0, i = (o = y(e)).length; r < i; r++) v(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || y(e), s = s || y(a), r = 0, i = o.length; r < i; r++) g(o[r], s[r]);
                else g(e, a);
            return (s = y(a, "script")).length > 0 && m(s, !u && y(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], h = 0, d = e.length; h < d; h++)
                if ((i = e[h]) || 0 === i)
                    if ("object" === K.type(i)) K.merge(f, i.nodeType ? [i] : i);
                    else if (Ye.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Ee.exec(i) || ["", ""])[1].toLowerCase(), a = He[s] || He._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                K.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", h = 0; i = f[h++];)
                if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i), o = y(c.appendChild(i), "script"), u && m(o), n))
                    for (l = 0; i = o[l++];) Re.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = K.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (K.acceptData(n) && (i = n[ge.expando]) && (t = ge.cache[i])) {
                    if (t.events)
                        for (r in t.events) o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);
                    ge.cache[i] && delete ge.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), K.fn.extend({
        text: function(e) {
            return me(this, (function(e) {
                return void 0 === e ? K.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return this.domManip(arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return this.domManip(arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return this.domManip(arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        remove: function(e, t) {
            for (var n, r = e ? K.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || K.cleanData(y(n)), n.parentNode && (t && K.contains(n.ownerDocument, n) && m(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (K.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return K.clone(this, e, t)
            }))
        },
        html: function(e) {
            return me(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !je.test(e) && !He[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (K.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, (function(t) {
                e = this.parentNode, K.cleanData(y(this)), e && e.replaceChild(t, this)
            })), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = $.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                h = e[0],
                m = K.isFunction(h);
            if (m || l > 1 && "string" == typeof h && !Z.checkClone && Pe.test(h)) return this.each((function(n) {
                var r = c.eq(n);
                m && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
            }));
            if (l && (r = (n = K.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (o = (i = K.map(y(n, "script"), d)).length; u < l; u++) s = n, u !== f && (s = K.clone(s, !0, !0), o && K.merge(i, y(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, K.map(i, p), u = 0; u < o; u++) s = i[u], Re.test(s.type || "") && !ge.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Fe, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        K.fn[e] = function(e) {
            for (var n, r = [], i = K(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), K(i[s])[t](n), V.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Ie, We = {},
        qe = /^margin/,
        Ue = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        $e = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = X.documentElement,
            o = X.createElement("div"),
            s = X.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && K.extend(Z, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(X.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), K.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    };
    var Ve = /^(none|table(?!-c[ea]).+)/,
        ze = new RegExp("^(" + xe + ")(.*)$", "i"),
        Ge = new RegExp("^([+-])=(" + xe + ")", "i"),
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = K.camelCase(t),
                    u = e.style;
                if (t = K.cssProps[a] || (K.cssProps[a] = k(u, a)), s = K.cssHooks[t] || K.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                "string" === (o = typeof n) && (i = Ge.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || K.cssNumber[a] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = K.camelCase(t);
            return t = K.cssProps[a] || (K.cssProps[a] = k(e.style, a)), (s = K.cssHooks[t] || K.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = b(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || K.isNumeric(o) ? o || 0 : i) : i
        }
    }), K.each(["height", "width"], (function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return Ve.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Be, (function() {
                    return D(e, t, r)
                })) : D(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && $e(e);
                return S(e, n, r ? T(e, t, r, "border-box" === K.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    })), K.cssHooks.marginRight = x(Z.reliableMarginRight, (function(e, t) {
        if (t) return K.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"])
    })), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, qe.test(e) || (K.cssHooks[e + t].set = S)
    })), K.fn.extend({
        css: function(e, t) {
            return me(this, (function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (K.isArray(t)) {
                    for (r = $e(e), i = t.length; s < i; s++) o[t[s]] = K.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
            }), e, t, arguments.length > 1)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                Se(this) ? K(this).show() : K(this).hide()
            }))
        }
    }), K.Tween = C, C.prototype = {
        constructor: C,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = C.propHooks[this.prop];
            return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, K.fx = C.prototype.init, K.fx.step = {};
    var Xe, Je, Ke = /^(?:toggle|show|hide)$/,
        et = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        tt = /queueHooks$/,
        nt = [E],
        rt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = et.exec(t),
                    o = i && i[3] || (K.cssNumber[e] ? "" : "px"),
                    s = (K.cssNumber[e] || "px" !== o && +r) && et.exec(K.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do {
                        s /= a = a || ".5", K.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    K.Animation = K.extend(j, {
            tweener: function(e, t) {
                K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], rt[n] = rt[n] || [], rt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? nt.unshift(e) : nt.push(e)
            }
        }), K.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
            }, r
        }, K.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = K.isEmptyObject(e),
                    o = K.speed(t, n, r),
                    s = function() {
                        var t = j(this, K.extend({}, e), o);
                        (i || ge.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = K.timers,
                        s = ge.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && tt.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || K.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = ge.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = K.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, K.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), K.each(["toggle", "show", "hide"], (function(e, t) {
            var n = K.fn[t];
            K.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
            }
        })), K.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            K.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), K.timers = [], K.fx.tick = function() {
            var e, t = 0,
                n = K.timers;
            for (Xe = K.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || K.fx.stop(), Xe = void 0
        }, K.fx.timer = function(e) {
            K.timers.push(e), e() ? K.fx.start() : K.timers.pop()
        }, K.fx.interval = 13, K.fx.start = function() {
            Je || (Je = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.stop = function() {
            clearInterval(Je), Je = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fn.delay = function(e, t) {
            return e = K.fx && K.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            }))
        },
        function() {
            var e = X.createElement("input"),
                t = X.createElement("select"),
                n = t.appendChild(X.createElement("option"));
            e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled = !0, Z.optDisabled = !n.disabled, (e = X.createElement("input")).value = "t", e.type = "radio", Z.radioValue = "t" === e.value
        }();
    var it, ot, st = K.expr.attrHandle;
    K.fn.extend({
        attr: function(e, t) {
            return me(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                K.removeAttr(this, e)
            }))
        }
    }), K.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === De ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(), r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? ot : it)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = K.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void K.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Z.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = st[t.toLowerCase()] || K.find.attr;
        st[t.toLowerCase()] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = st[s], st[s] = i, i = null != n(e, t, r) ? s : null, st[s] = o), i
        }
    }));
    var at = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(e, t) {
            return me(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[K.propFix[e] || e]
            }))
        }
    }), K.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !K.isXMLDoc(e)) && (t = K.propFix[t] || t, i = K.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (K.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        K.propFix[this.toLowerCase()] = this
    }));
    var ut = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (K.isFunction(e)) return this.each((function(t) {
                K(this).addClass(e.call(this, t, this.className))
            }));
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = K.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (K.isFunction(e)) return this.each((function(t) {
                K(this).removeClass(e.call(this, t, this.className))
            }));
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? K.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : K.isFunction(e) ? this.each((function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            })) : this.each((function() {
                if ("string" === n)
                    for (var t, r = 0, i = K(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== De && "boolean" !== n || (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
            }))
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ut, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    K.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = K.isFunction(e), this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, K(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }))) : i ? (t = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(lt, "") : null == n ? "" : n : void 0
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = K.find.attr(e, "value");
                    return null != t ? t : K.trim(K.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (((n = r[u]).selected || u === i) && (Z.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                            if (t = K(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = K.makeArray(t), s = i.length; s--;)((r = i[s]).selected = K.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], (function() {
        K.valHooks[this] = {
            set: function(e, t) {
                if (K.isArray(t)) return e.checked = K.inArray(K(e).val(), t) >= 0
            }
        }, Z.checkOn || (K.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        K.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), K.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = K.now(),
        ft = /\?/;
    K.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, K.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e), t
    };
    var ht, dt, pt = /#.*$/,
        mt = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        xt = {},
        kt = "*/".concat("*");
    try {
        dt = location.href
    } catch (e) {
        (dt = X.createElement("a")).href = "", dt = dt.href
    }
    ht = wt.exec(dt.toLowerCase()) || [], K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt,
            type: "GET",
            isLocal: yt.test(ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, K.ajaxSettings), t) : L(K.ajaxSettings, e)
        },
        ajaxPrefilter: P(bt),
        ajaxTransport: P(xt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, y, v, w, x = t;
                2 !== _ && (_ = 2, a && clearTimeout(a), r = void 0, o = s || "", b.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (v = F(f, b, n)), v = H(f, v, b, u), u ? (f.ifModified && ((w = b.getResponseHeader("Last-Modified")) && (K.lastModified[i] = w), (w = b.getResponseHeader("etag")) && (K.etag[i] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state, c = v.data, u = !(y = v.error))) : (y = x, !e && x || (x = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || x) + "", u ? p.resolveWith(h, [c, x, b]) : p.rejectWith(h, [b, x, y]), b.statusCode(g), g = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? c : y]), m.fireWith(h, [b, x]), l && (d.trigger("ajaxComplete", [b, f]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = K.ajaxSetup({}, t),
                h = f.context || f,
                d = f.context && (h.nodeType || h.jquery) ? K(h) : K.event,
                p = K.Deferred(),
                m = K.Callbacks("once memory"),
                g = f.statusCode || {},
                y = {},
                v = {},
                _ = 0,
                w = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === _) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return _ || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return _ || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (_ < 2)
                                for (t in e) g[t] = [g[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (p.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || dt) + "").replace(pt, "").replace(_t, ht[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = wt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ht[1] && u[2] === ht[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ht[3] || ("http:" === ht[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), R(bt, f, t, b), 2 === _) return b;
            for (c in (l = f.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ft.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = mt.test(i) ? i.replace(mt, "$1_=" + ct++) : i + (ft.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (K.lastModified[i] && b.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && b.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]), f.headers) b.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, b, f) || 2 === _)) return b.abort();
            for (c in w = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[c](f[c]);
            if (r = R(xt, f, t, b)) {
                b.readyState = 1, l && d.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (a = setTimeout((function() {
                    b.abort("timeout")
                }), f.timeout));
                try {
                    _ = 1, r.send(y, n)
                } catch (e) {
                    if (!(_ < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return K.get(e, void 0, t, "script")
        }
    }), K.each(["get", "post"], (function(e, t) {
        K[t] = function(e, n, r, i) {
            return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    })), K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), K._evalUrl = function(e) {
        return K.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, K.fn.extend({
        wrapAll: function(e) {
            var t;
            return K.isFunction(e) ? this.each((function(t) {
                K(this).wrapAll(e.call(this, t))
            })) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this)
        },
        wrapInner: function(e) {
            return K.isFunction(e) ? this.each((function(t) {
                K(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = K(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = K.isFunction(e);
            return this.each((function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            })).end()
        }
    }), K.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    };
    var St = /%20/g,
        Tt = /\[\]$/,
        Dt = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    K.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = K.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, (function() {
            i(this.name, this.value)
        }));
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(St, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = K.prop(this, "elements");
                return e ? K.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !K(this).is(":disabled") && Ct.test(this.nodeName) && !Mt.test(e) && (this.checked || !Te.test(e))
            })).map((function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            })).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Nt = 0,
        Ot = {},
        At = {
            0: 200,
            1223: 204
        },
        Et = K.ajaxSettings.xhr();
    e.ActiveXObject && K(e).on("unload", (function() {
        for (var e in Ot) Ot[e]()
    })), Z.cors = !!Et && "withCredentials" in Et, Z.ajax = Et = !!Et, K.ajaxTransport((function(e) {
        var t;
        if (Z.cors || Et && !e.crossDomain) return {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++Nt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Ot[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Ot[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function() {
                t && t()
            }
        }
    })), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e), e
            }
        }
    }), K.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), K.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, i) {
                t = K("<script>").prop({
                    async: !0,
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), X.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Yt = [],
        jt = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || K.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), K.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + i) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || K.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always((function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), s && K.isFunction(o) && o(s[0]), s = o = void 0
        })), "script"
    })), K.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || X;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
    };
    var Pt = K.fn.load;
    K.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = K.trim(e.slice(a)), e = e.slice(0, a)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && K.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, s.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e)
        })).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, K.expr.filters.animated = function(e) {
        return K.grep(K.timers, (function(t) {
            return e === t.elem
        })).length
    };
    var Rt = e.document.documentElement;
    K.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = K.css(e, "position"),
                c = K(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = K.css(e, "top"), u = K.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), K.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, K.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                K.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, K.contains(t, r) ? (typeof r.getBoundingClientRect !== De && (i = r.getBoundingClientRect()), n = W(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (r = e.offset()), r.top += K.css(e[0], "borderTopWidth", !0), r.left += K.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - K.css(n, "marginTop", !0),
                    left: t.left - r.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent || Rt; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");) e = e.offsetParent;
                return e || Rt
            }))
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, n) {
        var r = "pageYOffset" === n;
        K.fn[t] = function(i) {
            return me(this, (function(t, i, o) {
                var s = W(t);
                if (void 0 === o) return s ? s[n] : t[i];
                s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o
            }), t, i, arguments.length, null)
        }
    })), K.each(["top", "left"], (function(e, t) {
        K.cssHooks[t] = x(Z.pixelPosition, (function(e, n) {
            if (n) return n = b(e, t), Ue.test(n) ? K(e).position()[t] + "px" : n
        }))
    })), K.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        K.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                return me(this, (function(t, n, r) {
                    var i;
                    return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? K.css(t, n, s) : K.style(t, n, r, s)
                }), t, o ? r : void 0, o, null)
            }
        }))
    })), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return K
    }));
    var Lt = e.jQuery,
        Ft = e.$;
    return K.noConflict = function(t) {
        return e.$ === K && (e.$ = Ft), t && e.jQuery === K && (e.jQuery = Lt), K
    }, typeof t === De && (e.jQuery = e.$ = K), K
})), jQuery.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })),
    function(e, t) {
        e.viewloader = t({}, e.jQuery || e.Zepto || e.$)
    }(this, (function(e, t) {
        "use strict";
        var n = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        };
        return e.execute = function(e, r) {
            (r ? r.find("[data-view]") : t("[data-view]")).each((function(r, i) {
                var o = t(i),
                    s = n(o.data("view"));
                s && e[s] && new e[s](o, i)
            }))
        }, e
    })), window.Market = {
        DOMUtils: {},
        Helpers: {},
        SpecialEvents: {},
        State: {},
        Validations: {},
        GoogleAnalytics: {}
    }, window.Views = {},
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }((function(e) {
        function t(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function r(e) {
            return t(a.json ? JSON.stringify(e) : String(e))
        }

        function i(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(s, " "))
            } catch (e) {
                return
            }
            try {
                return a.json ? JSON.parse(e) : e
            } catch (e) {}
        }

        function o(t, n) {
            var r = a.raw ? t : i(t);
            return e.isFunction(n) ? n(r) : r
        }
        var s = /\+/g,
            a = e.cookie = function(i, s, u) {
                if (void 0 !== s && !e.isFunction(s)) {
                    if ("number" == typeof(u = e.extend({}, a.defaults, u)).expires) {
                        var l = u.expires,
                            c = u.expires = new Date;
                        c.setDate(c.getDate() + l)
                    }
                    return document.cookie = [t(i), "=", r(s), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                for (var f = i ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], d = 0, p = h.length; d < p; d++) {
                    var m = h[d].split("="),
                        g = n(m.shift()),
                        y = m.join("=");
                    if (i && i === g) {
                        f = o(y, s);
                        break
                    }
                    i || void 0 === (y = o(y)) || (f[g] = y)
                }
                return f
            };
        a.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !0)
        }
    })),
    function(e, t) {
        "object" == typeof exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
    }(this, (function(e, t, n) {
        "use strict";

        function r(e, t) {
            return this instanceof r ? (void 0 === e && (e = "undefined" != typeof location ? location.href + "" : ""), this.href(e), void 0 !== t ? this.absoluteTo(t) : this) : new r(e, t)
        }

        function i(e) {
            return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }

        function o(e) {
            return String(Object.prototype.toString.call(e)).slice(8, -1)
        }

        function s(e) {
            return "Array" === o(e)
        }

        function a(e, t) {
            var n, r, i = {};
            if (s(t))
                for (n = 0, r = t.length; n < r; n++) i[t[n]] = !0;
            else i[t] = !0;
            for (n = 0, r = e.length; n < r; n++) void 0 !== i[e[n]] && (e.splice(n, 1), r--, n--);
            return e
        }

        function u(e, t) {
            var n, r;
            if (s(t)) {
                for (n = 0, r = t.length; n < r; n++)
                    if (!u(e, t[n])) return !1;
                return !0
            }
            var i = o(t);
            for (n = 0, r = e.length; n < r; n++)
                if ("RegExp" === i) {
                    if ("string" == typeof e[n] && e[n].match(t)) return !0
                } else if (e[n] === t) return !0;
            return !1
        }

        function l(e, t) {
            if (!s(e) || !s(t)) return !1;
            if (e.length !== t.length) return !1;
            e.sort(), t.sort();
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        }

        function c(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
        }
        var f = r.prototype,
            h = Object.prototype.hasOwnProperty;
        r._parts = function() {
            return {
                protocol: null,
                username: null,
                password: null,
                hostname: null,
                urn: null,
                port: null,
                path: null,
                query: null,
                fragment: null,
                duplicateQueryParameters: r.duplicateQueryParameters
            }
        }, r.duplicateQueryParameters = !1, r.protocol_expression = /^[a-z][a-z0-9-+-]*$/i, r.idn_expression = /[^a-z0-9\.-]/i, r.punycode_expression = /(xn--)/i, r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi, r.defaultPorts = {
            http: "80",
            https: "443",
            ftp: "21",
            gopher: "70",
            ws: "80",
            wss: "443"
        }, r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, r.encode = c, r.decode = decodeURIComponent, r.iso8859 = function() {
            r.encode = escape, r.decode = unescape
        }, r.unicode = function() {
            r.encode = c, r.decode = decodeURIComponent
        }, r.characters = {
            pathname: {
                encode: {
                    expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                    map: {
                        "%24": "$",
                        "%26": "&",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%3A": ":",
                        "%40": "@"
                    }
                },
                decode: {
                    expression: /[\/\?#]/g,
                    map: {
                        "/": "%2F",
                        "?": "%3F",
                        "#": "%23"
                    }
                }
            },
            reserved: {
                encode: {
                    expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                    map: {
                        "%3A": ":",
                        "%2F": "/",
                        "%3F": "?",
                        "%23": "#",
                        "%5B": "[",
                        "%5D": "]",
                        "%40": "@",
                        "%21": "!",
                        "%24": "$",
                        "%26": "&",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "="
                    }
                }
            }
        }, r.encodeQuery = function(e) {
            return r.encode(e + "").replace(/%20/g, "+")
        }, r.decodeQuery = function(e) {
            return r.decode((e + "").replace(/\+/g, "%20"))
        }, r.recodePath = function(e) {
            for (var t = (e + "").split("/"), n = 0, i = t.length; n < i; n++) t[n] = r.encodePathSegment(r.decode(t[n]));
            return t.join("/")
        }, r.decodePath = function(e) {
            for (var t = (e + "").split("/"), n = 0, i = t.length; n < i; n++) t[n] = r.decodePathSegment(t[n]);
            return t.join("/")
        };
        var d, p = {
                encode: "encode",
                decode: "decode"
            },
            m = function(e, t) {
                return function(n) {
                    return r[t](n + "").replace(r.characters[e][t].expression, (function(n) {
                        return r.characters[e][t].map[n]
                    }))
                }
            };
        for (d in p) r[d + "PathSegment"] = m("pathname", p[d]);
        for (d in r.encodeReserved = m("reserved", "encode"), r.parse = function(e, t) {
                var n;
                return t || (t = {}), (n = e.indexOf("#")) > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), (n = e.indexOf("?")) > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = "", e = e.substring(2), e = r.parseAuthority(e, t)) : (n = e.indexOf(":")) > -1 && (t.protocol = e.substring(0, n), t.protocol && !t.protocol.match(r.protocol_expression) ? t.protocol = void 0 : "file" === t.protocol ? e = e.substring(n + 3) : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = r.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0)), t.path = e, t
            }, r.parseHost = function(e, t) {
                var n, r, i = e.indexOf("/");
                return -1 === i && (i = e.length), "[" === e.charAt(0) ? (n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, i) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, i) || null, t.port = null) : (r = e.substring(0, i).split(":"), t.hostname = r[0] || null, t.port = r[1] || null), t.hostname && "/" !== e.substring(i).charAt(0) && (i++, e = "/" + e), e.substring(i) || "/"
            }, r.parseAuthority = function(e, t) {
                return e = r.parseUserinfo(e, t), r.parseHost(e, t)
            }, r.parseUserinfo = function(e, t) {
                var n, i = e.indexOf("@"),
                    o = e.indexOf("/");
                return i > -1 && (-1 === o || i < o) ? (n = e.substring(0, i).split(":"), t.username = n[0] ? r.decode(n[0]) : null, n.shift(), t.password = n[0] ? r.decode(n.join(":")) : null, e = e.substring(i + 1)) : (t.username = null, t.password = null), e
            }, r.parseQuery = function(e) {
                if (!e) return {};
                if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""))) return {};
                for (var t, n, i, o = {}, s = e.split("&"), a = s.length, u = 0; u < a; u++) t = s[u].split("="), n = r.decodeQuery(t.shift()), i = t.length ? r.decodeQuery(t.join("=")) : null, o[n] ? ("string" == typeof o[n] && (o[n] = [o[n]]), o[n].push(i)) : o[n] = i;
                return o
            }, r.build = function(e) {
                var t = "";
                return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += r.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
            }, r.buildHost = function(e) {
                var t = "";
                return e.hostname ? (r.ip6_expression.test(e.hostname) ? e.port ? t += "[" + e.hostname + "]:" + e.port : t += e.hostname : (t += e.hostname, e.port && (t += ":" + e.port)), t) : ""
            }, r.buildAuthority = function(e) {
                return r.buildUserinfo(e) + r.buildHost(e)
            }, r.buildUserinfo = function(e) {
                var t = "";
                return e.username && (t += r.encode(e.username), e.password && (t += ":" + r.encode(e.password)), t += "@"), t
            }, r.buildQuery = function(e, t) {
                var n, i, o, a, u = "";
                for (i in e)
                    if (h.call(e, i) && i)
                        if (s(e[i]))
                            for (n = {}, o = 0, a = e[i].length; o < a; o++) void 0 !== e[i][o] && void 0 === n[e[i][o] + ""] && (u += "&" + r.buildQueryParameter(i, e[i][o]), !0 !== t && (n[e[i][o] + ""] = !0));
                        else void 0 !== e[i] && (u += "&" + r.buildQueryParameter(i, e[i]));
                return u.substring(1)
            }, r.buildQueryParameter = function(e, t) {
                return r.encodeQuery(e) + (null !== t ? "=" + r.encodeQuery(t) : "")
            }, r.addQuery = function(e, t, n) {
                if ("object" == typeof t)
                    for (var i in t) h.call(t, i) && r.addQuery(e, i, t[i]);
                else {
                    if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                    if (void 0 === e[t]) return void(e[t] = n);
                    "string" == typeof e[t] && (e[t] = [e[t]]), s(n) || (n = [n]), e[t] = e[t].concat(n)
                }
            }, r.removeQuery = function(e, t, n) {
                var i, o, u;
                if (s(t))
                    for (i = 0, o = t.length; i < o; i++) e[t[i]] = void 0;
                else if ("object" == typeof t)
                    for (u in t) h.call(t, u) && r.removeQuery(e, u, t[u]);
                else {
                    if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
                    void 0 !== n ? e[t] === n ? e[t] = void 0 : s(e[t]) && (e[t] = a(e[t], n)) : e[t] = void 0
                }
            }, r.hasQuery = function(e, t, n, i) {
                if ("object" == typeof t) {
                    for (var a in t)
                        if (h.call(t, a) && !r.hasQuery(e, a, t[a])) return !1;
                    return !0
                }
                if ("string" != typeof t) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
                switch (o(n)) {
                    case "Undefined":
                        return t in e;
                    case "Boolean":
                        return n === Boolean(s(e[t]) ? e[t].length : e[t]);
                    case "Function":
                        return !!n(e[t], t, e);
                    case "Array":
                        return !!s(e[t]) && (i ? u : l)(e[t], n);
                    case "RegExp":
                        return s(e[t]) ? !!i && u(e[t], n) : Boolean(e[t] && e[t].match(n));
                    case "Number":
                        n = String(n);
                    case "String":
                        return s(e[t]) ? !!i && u(e[t], n) : e[t] === n;
                    default:
                        throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
                }
            }, r.commonPath = function(e, t) {
                var n, r = Math.min(e.length, t.length);
                for (n = 0; n < r; n++)
                    if (e.charAt(n) !== t.charAt(n)) {
                        n--;
                        break
                    }
                return n < 1 ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" === e.charAt(n) && "/" === t.charAt(n) || (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
            }, r.withinString = function(e, t) {
                return e.replace(r.find_uri_expression, t)
            }, r.ensureValidHostname = function(t) {
                if (t.match(r.invalid_hostname_characters)) {
                    if (!e) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
                    if (e.toASCII(t).match(r.invalid_hostname_characters)) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
                }
            }, f.build = function(e) {
                return !0 === e ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = r.build(this._parts), this._deferred_build = !1), this
            }, f.clone = function() {
                return new r(this)
            }, f.valueOf = f.toString = function() {
                return this.build(!1)._string
            }, m = function(e) {
                return function(t, n) {
                    return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t, this.build(!n), this)
                }
            }, p = {
                protocol: "protocol",
                username: "username",
                password: "password",
                hostname: "hostname",
                port: "port"
            }) f[d] = m(p[d]);
        for (d in m = function(e, t) {
                return function(n, r) {
                    return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "").charAt(0) === t && (n = n.substring(1)), this._parts[e] = n, this.build(!r), this)
                }
            }, p = {
                query: "?",
                fragment: "#"
            }) f[d] = m(d, p[d]);
        for (d in m = function(e, t) {
                return function(n, r) {
                    var i = this[e](n, r);
                    return "string" == typeof i && i.length ? t + i : i
                }
            }, p = {
                search: ["?", "query"],
                hash: ["#", "fragment"]
            }) f[d] = m(p[d][1], p[d][0]);
        f.pathname = function(e, t) {
            if (void 0 === e || !0 === e) {
                var n = this._parts.path || (this._parts.urn ? "" : "/");
                return e ? r.decodePath(n) : n
            }
            return this._parts.path = e ? r.recodePath(e) : "/", this.build(!t), this
        }, f.path = f.pathname, f.href = function(e, t) {
            var n;
            if (void 0 === e) return this.toString();
            this._string = "", this._parts = r._parts();
            var i = e instanceof r,
                o = "object" == typeof e && (e.hostname || e.path);
            if (!i && o && void 0 !== e.pathname && (e = e.toString()), "string" == typeof e) this._parts = r.parse(e, this._parts);
            else {
                if (!i && !o) throw new TypeError("invalid input");
                var s = i ? e._parts : e;
                for (n in s) h.call(this._parts, n) && (this._parts[n] = s[n])
            }
            return this.build(!t), this
        }, f.is = function(e) {
            var t = !1,
                i = !1,
                o = !1,
                s = !1,
                a = !1,
                u = !1,
                l = !1,
                c = !this._parts.urn;
            switch (this._parts.hostname && (c = !1, i = r.ip4_expression.test(this._parts.hostname), o = r.ip6_expression.test(this._parts.hostname), a = (s = !(t = i || o)) && n && n.has(this._parts.hostname), u = s && r.idn_expression.test(this._parts.hostname), l = s && r.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
                case "relative":
                    return c;
                case "absolute":
                    return !c;
                case "domain":
                case "name":
                    return s;
                case "sld":
                    return a;
                case "ip":
                    return t;
                case "ip4":
                case "ipv4":
                case "inet4":
                    return i;
                case "ip6":
                case "ipv6":
                case "inet6":
                    return o;
                case "idn":
                    return u;
                case "url":
                    return !this._parts.urn;
                case "urn":
                    return !!this._parts.urn;
                case "punycode":
                    return l
            }
            return null
        };
        var g = f.protocol,
            y = f.port,
            v = f.hostname;
        f.protocol = function(e, t) {
            if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, "")).match(/[^a-zA-z0-9\.+-]/)) throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]");
            return g.call(this, e, t)
        }, f.scheme = f.protocol, f.port = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 !== e && (0 === e && (e = null), e && (":" === (e += "").charAt(0) && (e = e.substring(1)), e.match(/[^0-9]/)))) throw new TypeError("Port '" + e + "' contains characters other than [0-9]");
            return y.call(this, e, t)
        }, f.hostname = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 !== e) {
                var n = {};
                r.parseHost(e, n), e = n.hostname
            }
            return v.call(this, e, t)
        }, f.host = function(e, t) {
            return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(e, this._parts), this.build(!t), this)
        }, f.authority = function(e, t) {
            return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(e, this._parts), this.build(!t), this)
        }, f.userinfo = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 === e) {
                if (!this._parts.username) return "";
                var n = r.buildUserinfo(this._parts);
                return n.substring(0, n.length - 1)
            }
            return "@" !== e[e.length - 1] && (e += "@"), r.parseUserinfo(e, this._parts), this.build(!t), this
        }, f.resource = function(e, t) {
            var n;
            return void 0 === e ? this.path() + this.search() + this.hash() : (n = r.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
        }, f.subdomain = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 === e) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var n = this._parts.hostname.length - this.domain().length - 1;
                return this._parts.hostname.substring(0, n) || ""
            }
            var o = this._parts.hostname.length - this.domain().length,
                s = this._parts.hostname.substring(0, o),
                a = new RegExp("^" + i(s));
            return e && "." !== e.charAt(e.length - 1) && (e += "."), e && r.ensureValidHostname(e), this._parts.hostname = this._parts.hostname.replace(a, e), this.build(!t), this
        }, f.domain = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var n = this._parts.hostname.match(/\./g);
                if (n && n.length < 2) return this._parts.hostname;
                var o = this._parts.hostname.length - this.tld(t).length - 1;
                return o = this._parts.hostname.lastIndexOf(".", o - 1) + 1, this._parts.hostname.substring(o) || ""
            }
            if (!e) throw new TypeError("cannot set domain empty");
            if (r.ensureValidHostname(e), !this._parts.hostname || this.is("IP")) this._parts.hostname = e;
            else {
                var s = new RegExp(i(this.domain()) + "$");
                this._parts.hostname = this._parts.hostname.replace(s, e)
            }
            return this.build(!t), this
        }, f.tld = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var r = this._parts.hostname.lastIndexOf("."),
                    o = this._parts.hostname.substring(r + 1);
                return !0 !== t && n && n.list[o.toLowerCase()] && n.get(this._parts.hostname) || o
            }
            var s;
            if (!e) throw new TypeError("cannot set TLD empty");
            if (e.match(/[^a-zA-Z0-9-]/)) {
                if (!n || !n.is(e)) throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
                s = new RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
            } else {
                if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
                s = new RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
            }
            return this.build(!t), this
        }, f.directory = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 === e || !0 === e) {
                if (!this._parts.path && !this._parts.hostname) return "";
                if ("/" === this._parts.path) return "/";
                var n = this._parts.path.length - this.filename().length - 1,
                    o = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
                return e ? r.decodePath(o) : o
            }
            var s = this._parts.path.length - this.filename().length,
                a = this._parts.path.substring(0, s),
                u = new RegExp("^" + i(a));
            return this.is("relative") || (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)), e && "/" !== e.charAt(e.length - 1) && (e += "/"), e = r.recodePath(e), this._parts.path = this._parts.path.replace(u, e), this.build(!t), this
        }, f.filename = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 === e || !0 === e) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var n = this._parts.path.lastIndexOf("/"),
                    o = this._parts.path.substring(n + 1);
                return e ? r.decodePathSegment(o) : o
            }
            var s = !1;
            "/" === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
            var a = new RegExp(i(this.filename()) + "$");
            return e = r.recodePath(e), this._parts.path = this._parts.path.replace(a, e), s ? this.normalizePath(t) : this.build(!t), this
        }, f.suffix = function(e, t) {
            if (this._parts.urn) return void 0 === e ? "" : this;
            if (void 0 === e || !0 === e) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var n, o, s = this.filename(),
                    a = s.lastIndexOf(".");
                return -1 === a ? "" : (n = s.substring(a + 1), o = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? r.decodePathSegment(o) : o)
            }
            "." === e.charAt(0) && (e = e.substring(1));
            var u, l = this.suffix();
            if (l) u = e ? new RegExp(i(l) + "$") : new RegExp(i("." + l) + "$");
            else {
                if (!e) return this;
                this._parts.path += "." + r.recodePath(e)
            }
            return u && (e = r.recodePath(e), this._parts.path = this._parts.path.replace(u, e)), this.build(!t), this
        }, f.segment = function(e, t, n) {
            var r = this._parts.urn ? ":" : "/",
                i = this.path(),
                o = "/" === i.substring(0, 1),
                a = i.split(r);
            if ("number" != typeof e && (n = t, t = e, e = void 0), void 0 !== e && "number" != typeof e) throw new Error("Bad segment '" + e + "', must be 0-based integer");
            return o && a.shift(), e < 0 && (e = Math.max(a.length + e, 0)), void 0 === t ? void 0 === e ? a : a[e] : (null === e || void 0 === a[e] ? s(t) ? a = t : (t || "string" == typeof t && t.length) && ("" === a[a.length - 1] ? a[a.length - 1] = t : a.push(t)) : t || "string" == typeof t && t.length ? a[e] = t : a.splice(e, 1), o && a.unshift(""), this.path(a.join(r), n))
        };
        var _ = f.query;
        return f.query = function(e, t) {
            if (!0 === e) return r.parseQuery(this._parts.query);
            if ("function" == typeof e) {
                var n = r.parseQuery(this._parts.query),
                    i = e.call(this, n);
                return this._parts.query = r.buildQuery(i || n, this._parts.duplicateQueryParameters), this.build(!t), this
            }
            return void 0 !== e && "string" != typeof e ? (this._parts.query = r.buildQuery(e, this._parts.duplicateQueryParameters), this.build(!t), this) : _.call(this, e, t)
        }, f.setQuery = function(e, t, n) {
            var i = r.parseQuery(this._parts.query);
            if ("object" == typeof e)
                for (var o in e) h.call(e, o) && (i[o] = e[o]);
            else {
                if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                i[e] = void 0 !== t ? t : null
            }
            return this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
        }, f.addQuery = function(e, t, n) {
            var i = r.parseQuery(this._parts.query);
            return r.addQuery(i, e, void 0 === t ? null : t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
        }, f.removeQuery = function(e, t, n) {
            var i = r.parseQuery(this._parts.query);
            return r.removeQuery(i, e, t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
        }, f.hasQuery = function(e, t, n) {
            var i = r.parseQuery(this._parts.query);
            return r.hasQuery(i, e, t, n)
        }, f.setSearch = f.setQuery, f.addSearch = f.addQuery, f.removeSearch = f.removeQuery, f.hasSearch = f.hasQuery, f.normalize = function() {
            return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
        }, f.normalizeProtocol = function(e) {
            return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
        }, f.normalizeHostname = function(n) {
            return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
        }, f.normalizePort = function(e) {
            return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
        }, f.normalizePath = function(e) {
            if (this._parts.urn) return this;
            if (!this._parts.path || "/" === this._parts.path) return this;
            var t, n, i, o = this._parts.path;
            for ("/" !== o.charAt(0) && ("." === o.charAt(0) && o.substring(0, o.indexOf("/")), t = !0, o = "/" + o), o = o.replace(/(\/(\.\/)+)|\/{2,}/g, "/"); - 1 !== (n = o.indexOf("/../"));) {
                if (0 === n) {
                    o = o.substring(3);
                    break
                } - 1 === (i = o.substring(0, n).lastIndexOf("/")) && (i = n), o = o.substring(0, i) + o.substring(n + 3)
            }
            return t && this.is("relative") && (o = o.substring(1)), o = r.recodePath(o), this._parts.path = o, this.build(!e), this
        }, f.normalizePathname = f.normalizePath, f.normalizeQuery = function(e) {
            return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query)) : this._parts.query = null, this.build(!e)), this
        }, f.normalizeFragment = function(e) {
            return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
        }, f.normalizeSearch = f.normalizeQuery, f.normalizeHash = f.normalizeFragment, f.iso8859 = function() {
            var e = r.encode,
                t = r.decode;
            return r.encode = escape, r.decode = decodeURIComponent, this.normalize(), r.encode = e, r.decode = t, this
        }, f.unicode = function() {
            var e = r.encode,
                t = r.decode;
            return r.encode = c, r.decode = unescape, this.normalize(), r.encode = e, r.decode = t, this
        }, f.readable = function() {
            var t = this.clone();
            t.username("").password("").normalize();
            var n = "";
            if (t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"), n += t.path(!0), t._parts.query) {
                for (var i = "", o = 0, s = t._parts.query.split("&"), a = s.length; o < a; o++) {
                    var u = (s[o] || "").split("=");
                    i += "&" + r.decodeQuery(u[0]).replace(/&/g, "%26"), void 0 !== u[1] && (i += "=" + r.decodeQuery(u[1]).replace(/&/g, "%26"))
                }
                n += "?" + i.substring(1)
            }
            return n += t.hash()
        }, f.absoluteTo = function(e) {
            var t, n, i, o = this.clone(),
                s = ["protocol", "username", "password", "hostname", "port"];
            if (this._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
            if (e instanceof r || (e = new r(e)), o._parts.protocol || (o._parts.protocol = e._parts.protocol), this._parts.hostname) return o;
            for (n = 0; i = s[n]; n++) o._parts[i] = e._parts[i];
            for (s = ["query", "path"], n = 0; i = s[n]; n++) !o._parts[i] && e._parts[i] && (o._parts[i] = e._parts[i]);
            return "/" !== o.path().charAt(0) && (t = e.directory(), o._parts.path = (t ? t + "/" : "") + o._parts.path, o.normalizePath()), o.build(), o
        }, f.relativeTo = function(e) {
            var t, n, o, s, a = this.clone(),
                u = ["protocol", "username", "password", "hostname", "port"];
            if (a._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
            if (e instanceof r || (e = new r(e)), "/" !== a.path().charAt(0) || "/" !== e.path().charAt(0)) throw new Error("Cannot calculate common path from non-relative URLs");
            t = r.commonPath(a.path(), e.path());
            for (var l, c = 0; l = u[c]; c++) a._parts[l] = null;
            if ("/" === t) return a;
            if (!t) return this.clone();
            if ((n = e.directory()) === (o = a.directory())) return a._parts.path = a.filename(), a.build();
            if (n.substring(t.length), s = o.substring(t.length), n + "/" === t) return s && (s += "/"), a._parts.path = s + a.filename(), a.build();
            for (var f = "../", h = new RegExp("^" + i(t)), d = n.replace(h, "/").match(/\//g).length - 1; d--;) f += "../";
            return a._parts.path = a._parts.path.replace(h, f), a.build()
        }, f.equals = function(e) {
            var t, n, i, o = this.clone(),
                a = new r(e),
                u = {},
                c = {},
                f = {};
            if (o.normalize(), a.normalize(), o.toString() === a.toString()) return !0;
            if (t = o.query(), n = a.query(), o.query(""), a.query(""), o.toString() !== a.toString()) return !1;
            if (t.length !== n.length) return !1;
            for (i in u = r.parseQuery(t), c = r.parseQuery(n), u)
                if (h.call(u, i)) {
                    if (s(u[i])) {
                        if (!l(u[i], c[i])) return !1
                    } else if (u[i] !== c[i]) return !1;
                    f[i] = !0
                }
            for (i in c)
                if (h.call(c, i) && !f[i]) return !1;
            return !0
        }, f.duplicateQueryParameters = function(e) {
            return this._parts.duplicateQueryParameters = !!e, this
        }, r
    })), Market.Helpers.CookieConsent = {
        given: function(e) {
            if ("undefined" != typeof Cookiebot && Cookiebot.consent) return Cookiebot.consent[e];
            const t = $.cookie("CookieConsent");
            if (!t) return console.log("could not read CCC"), !1;
            if ("-1" === t) return console.log("CC outside of targeted area"), !0;
            try {
                const n = JSON.parse(t.replace(/%2c/g, ",").replace(/'/g, '"').replace(/([{[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'));
                return n && !!n[e]
            } catch (e) {
                return console.log("could not parse CCC"), !1
            }
        },
        cookieAvailable: function() {
            return !!$.cookie("CookieConsent")
        },
        addListener: function(e, t) {
            window.addEventListener("CookiebotOnAccept", (function() {
                Market.Helpers.CookieConsent.given(e) && t()
            }), !1)
        }
    }, Views.AffiliatesTracker = class {
        constructor(e) {
            const t = e.data("cookiebot-enabled"),
                n = (Market.Helpers.CookieConsent.given, Market.Helpers.CookieConsent.cookieAvailable()),
                r = this.removeAffiliateCookies,
                i = this.registerReferral;
            this.setupReferralListener(t, i, r), n && t || i()
        }
        setupReferralListener(e, t, n) {
            const r = Market.Helpers.CookieConsent.given;
            e && window.addEventListener("CookiebotOnAccept", (function() {
                if (r("marketing")) {
                    $.cookie("click_id") || t()
                } else n()
            }), !1)
        }
        removeAffiliateCookies() {
            const e = "/consociate/recant";
            $.ajax({
                method: "GET",
                url: e,
                dataType: "JSON",
                timeout: 5e3,
                xhrFields: {
                    withCredentials: !0
                }
            }).then((function() {
                Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal", "success")
            }), (function(t, n, r) {
                Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal error", `${t.status} | ${n} | ${r}`, {
                    label: e
                })
            }))
        }
        registerReferral() {
            const e = window.location.href,
                t = URI.parse(e),
                n = t.query && !t.query.includes("redirect_back") ? `&url=${encodeURIComponent(e)}&referrer=${encodeURIComponent(document.referrer)}` : "",
                r = t.query ? `?${t.query}${n}` : "",
                i = t.port ? `:${t.port}` : "",
                o = `${t.protocol}://${t.hostname}${i}/consociate/indite${r}`;
            $.ajax({
                method: "GET",
                url: o,
                dataType: "JSON",
                timeout: 5e3,
                xhrFields: {
                    withCredentials: !0
                }
            }).then((function(e) {
                e && e.redirect && (window.location.href = e.redirect_url)
            }), (function(e, t, n) {
                Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie", `${e.status} | ${t} | ${n}`, {
                    label: o
                })
            }))
        }
    }, Market.Helpers.GaLsUtils = {
        getClientId: function() {
            var e = new URL(document.location.href).searchParams.get("_ga");
            return e ? e.match(/\d*\.\d*$/)[0] : this.retrieveClientId()
        },
        retrieveClientId: function() {
            return localStorage.getItem(this.clientIdLocalStorageKey())
        },
        storeClientId: function(e) {
            if (e) return localStorage.setItem(this.clientIdLocalStorageKey(), e)
        },
        removeClientId: function() {
            if (this.clientIdLocalStorageKey()) return localStorage.removeItem(this.clientIdLocalStorageKey())
        },
        clientIdLocalStorageKey: function() {
            return "ga:clientId"
        },
        clientIdValid: function(e) {
            if (null === e) return !0;
            var t = 10,
                n = /^[0-9]+\.[0-9]+$/g;
            return e.split("").length > t && n.test(e)
        },
        localStorageAvailable: function() {
            var e = "t";
            try {
                return localStorage.setItem(e, e), localStorage.removeItem(e), !0
            } catch (e) {
                return !1
            }
        },
        trackingCookieSet: function() {
            return !!document.cookie.match(/_ga=/)
        },
        linkerParamPresent: function() {
            return !!window.location.search.match(/_ga=/)
        },
        clientIdNotPresent: function() {
            return !(this.trackingCookieSet() || this.linkerParamPresent())
        }
    },
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("underscore", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self, function() {
            var n = e._,
                r = e._ = t();
            r.noConflict = function() {
                return e._ = n, r
            }
        }())
    }(this, (function() {
        function e(e, t) {
            return t = null == t ? e.length - 1 : +t,
                function() {
                    for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                    switch (t) {
                        case 0:
                            return e.call(this, r);
                        case 1:
                            return e.call(this, arguments[0], r);
                        case 2:
                            return e.call(this, arguments[0], arguments[1], r)
                    }
                    var o = Array(t + 1);
                    for (i = 0; i < t; i++) o[i] = arguments[i];
                    return o[t] = r, e.apply(this, o)
                }
        }

        function t(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function n(e) {
            return null === e
        }

        function r(e) {
            return void 0 === e
        }

        function i(e) {
            return !0 === e || !1 === e || "[object Boolean]" === ut.call(e)
        }

        function o(e) {
            return !(!e || 1 !== e.nodeType)
        }

        function s(e) {
            var t = "[object " + e + "]";
            return function(e) {
                return ut.call(e) === t
            }
        }

        function a(e) {
            return null != e && Ot(e.getInt8) && Mt(e.buffer)
        }

        function u(e, t) {
            return null != e && lt.call(e, t)
        }

        function l(e) {
            return !Dt(e) && yt(e) && !isNaN(parseFloat(e))
        }

        function c(e) {
            return xt(e) && gt(e)
        }

        function f(e) {
            return function() {
                return e
            }
        }

        function h(e) {
            return function(t) {
                var n = e(t);
                return "number" == typeof n && n >= 0 && n <= wt
            }
        }

        function d(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }

        function p(e) {
            return mt ? mt(e) && !Pt(e) : It(e) && Wt.test(ut.call(e))
        }

        function m(e) {
            for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
            return {
                contains: function(e) {
                    return !0 === t[e]
                },
                push: function(n) {
                    return t[n] = !0, e.push(n)
                }
            }
        }

        function g(e, t) {
            t = m(t);
            var n = _t.length,
                r = e.constructor,
                i = Ot(r) && r.prototype || it,
                o = "constructor";
            for (u(e, o) && !t.contains(o) && t.push(o); n--;)(o = _t[n]) in e && e[o] !== i[o] && !t.contains(o) && t.push(o)
        }

        function y(e) {
            if (!t(e)) return [];
            if (dt) return dt(e);
            var n = [];
            for (var r in e) u(e, r) && n.push(r);
            return vt && g(e, n), n
        }

        function v(e) {
            if (null == e) return !0;
            var t = Ut(e);
            return "number" == typeof t && (Rt(e) || bt(e) || Ft(e)) ? 0 === t : 0 === Ut(y(e))
        }

        function _(e, t) {
            var n = y(t),
                r = n.length;
            if (null == e) return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var s = n[o];
                if (t[s] !== i[s] || !(s in i)) return !1
            }
            return !0
        }

        function w(e) {
            return e instanceof w ? e : this instanceof w ? void(this._wrapped = e) : new w(e)
        }

        function b(e) {
            return new Uint8Array(e.buffer || e, e.byteOffset || 0, Ht(e))
        }

        function x(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return !1;
            if (e != e) return t != t;
            var i = typeof e;
            return ("function" === i || "object" === i || "object" == typeof t) && k(e, t, n, r)
        }

        function k(e, t, n, r) {
            e instanceof w && (e = e._wrapped), t instanceof w && (t = t._wrapped);
            var i = ut.call(e);
            if (i !== ut.call(t)) return !1;
            if (Et && "[object Object]" == i && Pt(e)) {
                if (!Pt(t)) return !1;
                i = $t
            }
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object Symbol]":
                    return ot.valueOf.call(e) === ot.valueOf.call(t);
                case "[object ArrayBuffer]":
                case $t:
                    return k(b(e), b(t), n, r)
            }
            var o = "[object Array]" === i;
            if (!o && qt(e)) {
                if (Ht(e) !== Ht(t)) return !1;
                if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                o = !0
            }
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var s = e.constructor,
                    a = t.constructor;
                if (s !== a && !(Ot(s) && s instanceof s && Ot(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
            }
            r = r || [];
            for (var l = (n = n || []).length; l--;)
                if (n[l] === e) return r[l] === t;
            if (n.push(e), r.push(t), o) {
                if ((l = e.length) !== t.length) return !1;
                for (; l--;)
                    if (!x(e[l], t[l], n, r)) return !1
            } else {
                var c, f = y(e);
                if (l = f.length, y(t).length !== l) return !1;
                for (; l--;)
                    if (!u(t, c = f[l]) || !x(e[c], t[c], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        }

        function S(e, t) {
            return x(e, t)
        }

        function T(e) {
            if (!t(e)) return [];
            var n = [];
            for (var r in e) n.push(r);
            return vt && g(e, n), n
        }

        function D(e) {
            var t = Ut(e);
            return function(n) {
                if (null == n) return !1;
                var r = T(n);
                if (Ut(r)) return !1;
                for (var i = 0; i < t; i++)
                    if (!Ot(n[e[i]])) return !1;
                return e !== Zt || !Ot(n[Vt])
            }
        }

        function M(e) {
            for (var t = y(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
            return r
        }

        function C(e) {
            for (var t = y(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
            return r
        }

        function N(e) {
            for (var t = {}, n = y(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t
        }

        function O(e) {
            var t = [];
            for (var n in e) Ot(e[n]) && t.push(n);
            return t.sort()
        }

        function A(e, t) {
            return function(n) {
                var r = arguments.length;
                if (t && (n = Object(n)), r < 2 || null == n) return n;
                for (var i = 1; i < r; i++)
                    for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                        var l = s[u];
                        t && void 0 !== n[l] || (n[l] = o[l])
                    }
                return n
            }
        }

        function E() {
            return function() {}
        }

        function Y(e) {
            if (!t(e)) return {};
            if (pt) return pt(e);
            var n = E();
            n.prototype = e;
            var r = new n;
            return n.prototype = null, r
        }

        function j(e, t) {
            var n = Y(e);
            return t && rn(n, t), n
        }

        function P(e) {
            return t(e) ? Rt(e) ? e.slice() : nn({}, e) : e
        }

        function R(e, t) {
            return t(e), e
        }

        function L(e) {
            return Rt(e) ? e : [e]
        }

        function F(e) {
            return w.toPath(e)
        }

        function H(e, t) {
            for (var n = t.length, r = 0; r < n; r++) {
                if (null == e) return;
                e = e[t[r]]
            }
            return n ? e : void 0
        }

        function I(e, t, n) {
            var i = H(e, F(t));
            return r(i) ? n : i
        }

        function W(e, t) {
            for (var n = (t = F(t)).length, r = 0; r < n; r++) {
                var i = t[r];
                if (!u(e, i)) return !1;
                e = e[i]
            }
            return !!n
        }

        function q(e) {
            return e
        }

        function U(e) {
            return e = rn({}, e),
                function(t) {
                    return _(t, e)
                }
        }

        function $(e) {
            return e = F(e),
                function(t) {
                    return H(t, e)
                }
        }

        function V(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }

        function z(e, n, r) {
            return null == e ? q : Ot(e) ? V(e, n, r) : t(e) && !Rt(e) ? U(e) : $(e)
        }

        function G(e, t) {
            return z(e, t, 1 / 0)
        }

        function B(e, t, n) {
            return w.iteratee !== G ? w.iteratee(e, t) : z(e, t, n)
        }

        function Q(e, t, n) {
            t = B(t, n);
            for (var r = y(e), i = r.length, o = {}, s = 0; s < i; s++) {
                var a = r[s];
                o[a] = t(e[a], a, e)
            }
            return o
        }

        function Z() {}

        function X(e) {
            return null == e ? Z : function(t) {
                return I(e, t)
            }
        }

        function J(e, t, n) {
            var r = Array(Math.max(0, e));
            t = V(t, n, 1);
            for (var i = 0; i < e; i++) r[i] = t(i);
            return r
        }

        function K(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }

        function ee(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + y(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        }

        function te(e) {
            return "\\" + hn[e]
        }

        function ne(e, t, n) {
            !t && n && (t = n), t = on({}, t, w.templateSettings);
            var r = RegExp([(t.escape || fn).source, (t.interpolate || fn).source, (t.evaluate || fn).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, (function(t, n, r, s, a) {
                return o += e.slice(i, a).replace(dn, te), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
            })), o += "';\n";
            var s, a = t.variable;
            if (a) {
                if (!pn.test(a)) throw new Error("variable is not a bare identifier: " + a)
            } else o = "with(obj||{}){\n" + o + "}\n", a = "obj";
            o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                s = new Function(a, "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var u = function(e) {
                return s.call(this, e, w)
            };
            return u.source = "function(" + a + "){\n" + o + "}", u
        }

        function re(e, t, n) {
            var r = (t = F(t)).length;
            if (!r) return Ot(n) ? n.call(e) : n;
            for (var i = 0; i < r; i++) {
                var o = null == e ? void 0 : e[t[i]];
                void 0 === o && (o = n, i = r), e = Ot(o) ? o.call(e) : o
            }
            return e
        }

        function ie(e) {
            var t = ++mn + "";
            return e ? e + t : t
        }

        function oe(e) {
            var t = w(e);
            return t._chain = !0, t
        }

        function se(e, n, r, i, o) {
            if (!(i instanceof n)) return e.apply(r, o);
            var s = Y(e.prototype),
                a = e.apply(s, o);
            return t(a) ? a : s
        }

        function ae(e, t, n, r) {
            if (r = r || [], t || 0 === t) {
                if (t <= 0) return r.concat(e)
            } else t = 1 / 0;
            for (var i = r.length, o = 0, s = Ut(e); o < s; o++) {
                var a = e[o];
                if (vn(a) && (Rt(a) || Ft(a)))
                    if (t > 1) ae(a, t - 1, n, r), i = r.length;
                    else
                        for (var u = 0, l = a.length; u < l;) r[i++] = a[u++];
                else n || (r[i++] = a)
            }
            return r
        }

        function ue(e, t) {
            var n = function(r) {
                var i = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return u(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }

        function le(e, t, n) {
            var r, i, o, s, a = 0;
            n || (n = {});
            var u = function() {
                    a = !1 === n.leading ? 0 : sn(), r = null, s = e.apply(i, o), r || (i = o = null)
                },
                l = function() {
                    var l = sn();
                    a || !1 !== n.leading || (a = l);
                    var c = t - (l - a);
                    return i = this, o = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), a = l, s = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, c)), s
                };
            return l.cancel = function() {
                clearTimeout(r), a = 0, r = i = o = null
            }, l
        }

        function ce(t, n, r) {
            var i, o, s, a, u, l = function() {
                    var e = sn() - o;
                    n > e ? i = setTimeout(l, n - e) : (i = null, r || (a = t.apply(u, s)), i || (s = u = null))
                },
                c = e((function(e) {
                    return u = this, s = e, o = sn(), i || (i = setTimeout(l, n), r && (a = t.apply(u, s))), a
                }));
            return c.cancel = function() {
                clearTimeout(i), i = s = u = null
            }, c
        }

        function fe(e, t) {
            return gn(t, e)
        }

        function he(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }

        function de() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                return r
            }
        }

        function pe(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }

        function me(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }

        function ge(e, t, n) {
            t = B(t, n);
            for (var r, i = y(e), o = 0, s = i.length; o < s; o++)
                if (t(e[r = i[o]], r, e)) return r
        }

        function ye(e) {
            return function(t, n, r) {
                n = B(n, r);
                for (var i = Ut(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function ve(e, t, n, r) {
            for (var i = (n = B(n, r, 1))(t), o = 0, s = Ut(e); o < s;) {
                var a = Math.floor((o + s) / 2);
                n(e[a]) < i ? o = a + 1 : s = a
            }
            return o
        }

        function _e(e, t, n) {
            return function(r, i, o) {
                var s = 0,
                    a = Ut(r);
                if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (n && o && a) return r[o = n(r, i)] === i ? o : -1;
                if (i != i) return (o = t(at.call(r, s, a), c)) >= 0 ? o + s : -1;
                for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
                    if (r[o] === i) return o;
                return -1
            }
        }

        function we(e, t, n) {
            var r = (vn(e) ? kn : ge)(e, t, n);
            if (void 0 !== r && -1 !== r) return e[r]
        }

        function be(e, t) {
            return we(e, U(t))
        }

        function xe(e, t, n) {
            var r, i;
            if (t = V(t, n), vn(e))
                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
            else {
                var o = y(e);
                for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
            }
            return e
        }

        function ke(e, t, n) {
            t = B(t, n);
            for (var r = !vn(e) && y(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
                var a = r ? r[s] : s;
                o[s] = t(e[a], a, e)
            }
            return o
        }

        function Se(e) {
            var t = function(t, n, r, i) {
                var o = !vn(t) && y(t),
                    s = (o || t).length,
                    a = e > 0 ? 0 : s - 1;
                for (i || (r = t[o ? o[a] : a], a += e); a >= 0 && a < s; a += e) {
                    var u = o ? o[a] : a;
                    r = n(r, t[u], u, t)
                }
                return r
            };
            return function(e, n, r, i) {
                var o = arguments.length >= 3;
                return t(e, V(n, i, 4), r, o)
            }
        }

        function Te(e, t, n) {
            var r = [];
            return t = B(t, n), xe(e, (function(e, n, i) {
                t(e, n, i) && r.push(e)
            })), r
        }

        function De(e, t, n) {
            return Te(e, he(B(t)), n)
        }

        function Me(e, t, n) {
            t = B(t, n);
            for (var r = !vn(e) && y(e), i = (r || e).length, o = 0; o < i; o++) {
                var s = r ? r[o] : o;
                if (!t(e[s], s, e)) return !1
            }
            return !0
        }

        function Ce(e, t, n) {
            t = B(t, n);
            for (var r = !vn(e) && y(e), i = (r || e).length, o = 0; o < i; o++) {
                var s = r ? r[o] : o;
                if (t(e[s], s, e)) return !0
            }
            return !1
        }

        function Ne(e, t, n, r) {
            return vn(e) || (e = M(e)), ("number" != typeof n || r) && (n = 0), Tn(e, t, n) >= 0
        }

        function Oe(e, t) {
            return ke(e, $(t))
        }

        function Ae(e, t) {
            return Te(e, U(t))
        }

        function Ee(e, t, n) {
            var r, i, o = -1 / 0,
                s = -1 / 0;
            if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
                for (var a = 0, u = (e = vn(e) ? e : M(e)).length; a < u; a++) null != (r = e[a]) && r > o && (o = r);
            else t = B(t, n), xe(e, (function(e, n, r) {
                ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = e, s = i)
            }));
            return o
        }

        function Ye(e, t, n) {
            var r, i, o = 1 / 0,
                s = 1 / 0;
            if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
                for (var a = 0, u = (e = vn(e) ? e : M(e)).length; a < u; a++) null != (r = e[a]) && r < o && (o = r);
            else t = B(t, n), xe(e, (function(e, n, r) {
                ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i)
            }));
            return o
        }

        function je(e) {
            return e ? Rt(e) ? at.call(e) : bt(e) ? e.match(On) : vn(e) ? ke(e, q) : M(e) : []
        }

        function Pe(e, t, n) {
            if (null == t || n) return vn(e) || (e = M(e)), e[K(e.length - 1)];
            var r = je(e),
                i = Ut(r);
            t = Math.max(Math.min(t, i), 0);
            for (var o = i - 1, s = 0; s < t; s++) {
                var a = K(s, o),
                    u = r[s];
                r[s] = r[a], r[a] = u
            }
            return r.slice(0, t)
        }

        function Re(e) {
            return Pe(e, 1 / 0)
        }

        function Le(e, t, n) {
            var r = 0;
            return t = B(t, n), Oe(ke(e, (function(e, n, i) {
                return {
                    value: e,
                    index: r++,
                    criteria: t(e, n, i)
                }
            })).sort((function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n) return 1;
                    if (n < r || void 0 === r) return -1
                }
                return e.index - t.index
            })), "value")
        }

        function Fe(e, t) {
            return function(n, r, i) {
                var o = t ? [
                    [],
                    []
                ] : {};
                return r = B(r, i), xe(n, (function(t, i) {
                    var s = r(t, i, n);
                    e(o, t, s)
                })), o
            }
        }

        function He(e) {
            return null == e ? 0 : vn(e) ? e.length : y(e).length
        }

        function Ie(e, t, n) {
            return t in n
        }

        function We(e, t, n) {
            return at.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }

        function qe(e, t, n) {
            return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[0] : We(e, e.length - t)
        }

        function Ue(e, t, n) {
            return at.call(e, null == t || n ? 1 : t)
        }

        function $e(e, t, n) {
            return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[e.length - 1] : Ue(e, Math.max(0, e.length - t))
        }

        function Ve(e) {
            return Te(e, Boolean)
        }

        function ze(e, t) {
            return ae(e, t, !1)
        }

        function Ge(e, t, n, r) {
            i(t) || (r = n, n = t, t = !1), null != n && (n = B(n, r));
            for (var o = [], s = [], a = 0, u = Ut(e); a < u; a++) {
                var l = e[a],
                    c = n ? n(l, a, e) : l;
                t && !n ? (a && s === c || o.push(l), s = c) : n ? Ne(s, c) || (s.push(c), o.push(l)) : Ne(o, l) || o.push(l)
            }
            return o
        }

        function Be(e) {
            for (var t = [], n = arguments.length, r = 0, i = Ut(e); r < i; r++) {
                var o = e[r];
                if (!Ne(t, o)) {
                    var s;
                    for (s = 1; s < n && Ne(arguments[s], o); s++);
                    s === n && t.push(o)
                }
            }
            return t
        }

        function Qe(e) {
            for (var t = e && Ee(e, Ut).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = Oe(e, r);
            return n
        }

        function Ze(e, t) {
            for (var n = {}, r = 0, i = Ut(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }

        function Xe(e, t, n) {
            null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
            return i
        }

        function Je(e, t) {
            if (null == t || t < 1) return [];
            for (var n = [], r = 0, i = e.length; r < i;) n.push(at.call(e, r, r += t));
            return n
        }

        function Ke(e, t) {
            return e._chain ? w(t).chain() : t
        }

        function et(e) {
            return xe(O(e), (function(t) {
                var n = w[t] = e[t];
                w.prototype[t] = function() {
                    var e = [this._wrapped];
                    return st.apply(e, arguments), Ke(this, n.apply(w, e))
                }
            })), w
        }
        var tt = "1.13.6",
            nt = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {},
            rt = Array.prototype,
            it = Object.prototype,
            ot = "undefined" != typeof Symbol ? Symbol.prototype : null,
            st = rt.push,
            at = rt.slice,
            ut = it.toString,
            lt = it.hasOwnProperty,
            ct = "undefined" != typeof ArrayBuffer,
            ft = "undefined" != typeof DataView,
            ht = Array.isArray,
            dt = Object.keys,
            pt = Object.create,
            mt = ct && ArrayBuffer.isView,
            gt = isNaN,
            yt = isFinite,
            vt = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            _t = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            wt = Math.pow(2, 53) - 1,
            bt = s("String"),
            xt = s("Number"),
            kt = s("Date"),
            St = s("RegExp"),
            Tt = s("Error"),
            Dt = s("Symbol"),
            Mt = s("ArrayBuffer"),
            Ct = s("Function"),
            Nt = nt.document && nt.document.childNodes;
        "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof Nt && (Ct = function(e) {
            return "function" == typeof e || !1
        });
        var Ot = Ct,
            At = s("Object"),
            Et = ft && At(new DataView(new ArrayBuffer(8))),
            Yt = "undefined" != typeof Map && At(new Map),
            jt = s("DataView"),
            Pt = Et ? a : jt,
            Rt = ht || s("Array"),
            Lt = s("Arguments");
        ! function() {
            Lt(arguments) || (Lt = function(e) {
                return u(e, "callee")
            })
        }();
        var Ft = Lt,
            Ht = d("byteLength"),
            It = h(Ht),
            Wt = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,
            qt = ct ? p : f(!1),
            Ut = d("length");
        w.VERSION = tt, w.prototype.value = function() {
            return this._wrapped
        }, w.prototype.valueOf = w.prototype.toJSON = w.prototype.value, w.prototype.toString = function() {
            return String(this._wrapped)
        };
        var $t = "[object DataView]",
            Vt = "forEach",
            zt = "has",
            Gt = ["clear", "delete"],
            Bt = ["get", zt, "set"],
            Qt = Gt.concat(Vt, Bt),
            Zt = Gt.concat(Bt),
            Xt = ["add"].concat(Gt, Vt, zt),
            Jt = Yt ? D(Qt) : s("Map"),
            Kt = Yt ? D(Zt) : s("WeakMap"),
            en = Yt ? D(Xt) : s("Set"),
            tn = s("WeakSet"),
            nn = A(T),
            rn = A(y),
            on = A(T, !0);
        w.toPath = L, w.iteratee = G;
        var sn = Date.now || function() {
                return (new Date).getTime()
            },
            an = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            un = ee(an),
            ln = ee(N(an)),
            cn = w.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            },
            fn = /(.)^/,
            hn = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            dn = /\\|'|\r|\n|\u2028|\u2029/g,
            pn = /^\s*(\w|\$)+\s*$/,
            mn = 0,
            gn = e((function(e, t) {
                var n = gn.placeholder,
                    r = function() {
                        for (var i = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[i++] : t[a];
                        for (; i < arguments.length;) s.push(arguments[i++]);
                        return se(e, r, this, this, s)
                    };
                return r
            }));
        gn.placeholder = w;
        var yn = e((function(t, n, r) {
                if (!Ot(t)) throw new TypeError("Bind must be called on a function");
                var i = e((function(e) {
                    return se(t, i, n, this, r.concat(e))
                }));
                return i
            })),
            vn = h(Ut),
            _n = e((function(e, t) {
                var n = (t = ae(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--;) {
                    var r = t[n];
                    e[r] = yn(e[r], e)
                }
                return e
            })),
            wn = e((function(e, t, n) {
                return setTimeout((function() {
                    return e.apply(null, n)
                }), t)
            })),
            bn = gn(wn, w, 1),
            xn = gn(me, 2),
            kn = ye(1),
            Sn = ye(-1),
            Tn = _e(1, kn, ve),
            Dn = _e(-1, Sn),
            Mn = Se(1),
            Cn = Se(-1),
            Nn = e((function(e, t, n) {
                var r, i;
                return Ot(t) ? i = t : (t = F(t), r = t.slice(0, -1), t = t[t.length - 1]), ke(e, (function(e) {
                    var o = i;
                    if (!o) {
                        if (r && r.length && (e = H(e, r)), null == e) return;
                        o = e[t]
                    }
                    return null == o ? o : o.apply(e, n)
                }))
            })),
            On = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g,
            An = Fe((function(e, t, n) {
                u(e, n) ? e[n].push(t) : e[n] = [t]
            })),
            En = Fe((function(e, t, n) {
                e[n] = t
            })),
            Yn = Fe((function(e, t, n) {
                u(e, n) ? e[n]++ : e[n] = 1
            })),
            jn = Fe((function(e, t, n) {
                e[n ? 0 : 1].push(t)
            }), !0),
            Pn = e((function(e, t) {
                var n = {},
                    r = t[0];
                if (null == e) return n;
                Ot(r) ? (t.length > 1 && (r = V(r, t[1])), t = T(e)) : (r = Ie, t = ae(t, !1, !1), e = Object(e));
                for (var i = 0, o = t.length; i < o; i++) {
                    var s = t[i],
                        a = e[s];
                    r(a, s, e) && (n[s] = a)
                }
                return n
            })),
            Rn = e((function(e, t) {
                var n, r = t[0];
                return Ot(r) ? (r = he(r), t.length > 1 && (n = t[1])) : (t = ke(ae(t, !1, !1), String), r = function(e, n) {
                    return !Ne(t, n)
                }), Pn(e, r, n)
            })),
            Ln = e((function(e, t) {
                return t = ae(t, !0, !0), Te(e, (function(e) {
                    return !Ne(t, e)
                }))
            })),
            Fn = e((function(e, t) {
                return Ln(e, t)
            })),
            Hn = e((function(e) {
                return Ge(ae(e, !0, !0))
            })),
            In = e(Qe);
        xe(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(e) {
            var t = rt[e];
            w.prototype[e] = function() {
                var n = this._wrapped;
                return null != n && (t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0]), Ke(this, n)
            }
        })), xe(["concat", "join", "slice"], (function(e) {
            var t = rt[e];
            w.prototype[e] = function() {
                var e = this._wrapped;
                return null != e && (e = t.apply(e, arguments)), Ke(this, e)
            }
        }));
        var Wn = et({
            __proto__: null,
            VERSION: tt,
            restArguments: e,
            isObject: t,
            isNull: n,
            isUndefined: r,
            isBoolean: i,
            isElement: o,
            isString: bt,
            isNumber: xt,
            isDate: kt,
            isRegExp: St,
            isError: Tt,
            isSymbol: Dt,
            isArrayBuffer: Mt,
            isDataView: Pt,
            isArray: Rt,
            isFunction: Ot,
            isArguments: Ft,
            isFinite: l,
            isNaN: c,
            isTypedArray: qt,
            isEmpty: v,
            isMatch: _,
            isEqual: S,
            isMap: Jt,
            isWeakMap: Kt,
            isSet: en,
            isWeakSet: tn,
            keys: y,
            allKeys: T,
            values: M,
            pairs: C,
            invert: N,
            functions: O,
            methods: O,
            extend: nn,
            extendOwn: rn,
            assign: rn,
            defaults: on,
            create: j,
            clone: P,
            tap: R,
            get: I,
            has: W,
            mapObject: Q,
            identity: q,
            constant: f,
            noop: Z,
            toPath: L,
            property: $,
            propertyOf: X,
            matcher: U,
            matches: U,
            times: J,
            random: K,
            now: sn,
            escape: un,
            unescape: ln,
            templateSettings: cn,
            template: ne,
            result: re,
            uniqueId: ie,
            chain: oe,
            iteratee: G,
            partial: gn,
            bind: yn,
            bindAll: _n,
            memoize: ue,
            delay: wn,
            defer: bn,
            throttle: le,
            debounce: ce,
            wrap: fe,
            negate: he,
            compose: de,
            after: pe,
            before: me,
            once: xn,
            findKey: ge,
            findIndex: kn,
            findLastIndex: Sn,
            sortedIndex: ve,
            indexOf: Tn,
            lastIndexOf: Dn,
            find: we,
            detect: we,
            findWhere: be,
            each: xe,
            forEach: xe,
            map: ke,
            collect: ke,
            reduce: Mn,
            foldl: Mn,
            inject: Mn,
            reduceRight: Cn,
            foldr: Cn,
            filter: Te,
            select: Te,
            reject: De,
            every: Me,
            all: Me,
            some: Ce,
            any: Ce,
            contains: Ne,
            includes: Ne,
            include: Ne,
            invoke: Nn,
            pluck: Oe,
            where: Ae,
            max: Ee,
            min: Ye,
            shuffle: Re,
            sample: Pe,
            sortBy: Le,
            groupBy: An,
            indexBy: En,
            countBy: Yn,
            partition: jn,
            toArray: je,
            size: He,
            pick: Pn,
            omit: Rn,
            first: qe,
            head: qe,
            take: qe,
            initial: We,
            last: $e,
            rest: Ue,
            tail: Ue,
            drop: Ue,
            compact: Ve,
            flatten: ze,
            without: Fn,
            uniq: Ge,
            unique: Ge,
            union: Hn,
            intersection: Be,
            difference: Ln,
            unzip: Qe,
            transpose: Qe,
            zip: In,
            object: Ze,
            range: Xe,
            chunk: Je,
            mixin: et,
            default: w
        });
        return Wn._ = Wn, Wn
    })),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, (function() {
        "use strict";

        function e() {
            return ti.apply(null, arguments)
        }

        function t(e) {
            ti = e
        }

        function n(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function r(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function o(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (i(e, t)) return !1;
            return !0
        }

        function s(e) {
            return void 0 === e
        }

        function a(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function u(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function l(e, t) {
            var n, r = [],
                i = e.length;
            for (n = 0; n < i; ++n) r.push(t(e[n], n));
            return r
        }

        function c(e, t) {
            for (var n in t) i(t, n) && (e[n] = t[n]);
            return i(t, "toString") && (e.toString = t.toString), i(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function f(e, t, n, r) {
            return Dt(e, t, n, r, !0).utc()
        }

        function h() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function d(e) {
            return null == e._pf && (e._pf = h()), e._pf
        }

        function p(e) {
            if (null == e._isValid) {
                var t = d(e),
                    n = ni.call(t.parsedDateParts, (function(e) {
                        return null != e
                    })),
                    r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                e._isValid = r
            }
            return e._isValid
        }

        function m(e) {
            var t = f(NaN);
            return null != e ? c(d(t), e) : d(t).userInvalidated = !0, t
        }

        function g(e, t) {
            var n, r, i, o = ii.length;
            if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = d(t)), s(t._locale) || (e._locale = t._locale), o > 0)
                for (n = 0; n < o; n++) s(i = t[r = ii[n]]) || (e[r] = i);
            return e
        }

        function y(t) {
            g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === oi && (oi = !0, e.updateOffset(this), oi = !1)
        }

        function v(e) {
            return e instanceof y || null != e && null != e._isAMomentObject
        }

        function _(t) {
            !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function w(t, n) {
            var r = !0;
            return c((function() {
                if (null != e.deprecationHandler && e.deprecationHandler(null, t), r) {
                    var o, s, a, u = [],
                        l = arguments.length;
                    for (s = 0; s < l; s++) {
                        if (o = "", "object" == typeof arguments[s]) {
                            for (a in o += "\n[" + s + "] ", arguments[0]) i(arguments[0], a) && (o += a + ": " + arguments[0][a] + ", ");
                            o = o.slice(0, -2)
                        } else o = arguments[s];
                        u.push(o)
                    }
                    _(t + "\nArguments: " + Array.prototype.slice.call(u).join("") + "\n" + (new Error).stack), r = !1
                }
                return n.apply(this, arguments)
            }), n)
        }

        function b(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), si[t] || (_(n), si[t] = !0)
        }

        function x(e) {
            return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function k(e) {
            var t, n;
            for (n in e) i(e, n) && (x(t = e[n]) ? this[n] = t : this["_" + n] = t);
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function S(e, t) {
            var n, o = c({}, e);
            for (n in t) i(t, n) && (r(e[n]) && r(t[n]) ? (o[n] = {}, c(o[n], e[n]), c(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
            for (n in e) i(e, n) && !i(t, n) && r(e[n]) && (o[n] = c({}, o[n]));
            return o
        }

        function T(e) {
            null != e && this.set(e)
        }

        function D(e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return x(r) ? r.call(t, n) : r
        }

        function M(e, t, n) {
            var r = "" + Math.abs(e),
                i = t - r.length;
            return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
        }

        function C(e, t, n, r) {
            var i = r;
            "string" == typeof r && (i = function() {
                return this[r]()
            }), e && (hi[e] = i), t && (hi[t[0]] = function() {
                return M(i.apply(this, arguments), t[1], t[2])
            }), n && (hi[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            })
        }

        function N(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function O(e) {
            var t, n, r = e.match(li);
            for (t = 0, n = r.length; t < n; t++) hi[r[t]] ? r[t] = hi[r[t]] : r[t] = N(r[t]);
            return function(t) {
                var i, o = "";
                for (i = 0; i < n; i++) o += x(r[i]) ? r[i].call(t, e) : r[i];
                return o
            }
        }

        function A(e, t) {
            return e.isValid() ? (t = E(t, e.localeData()), fi[t] = fi[t] || O(t), fi[t](e)) : e.localeData().invalidDate()
        }

        function E(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (ci.lastIndex = 0; r >= 0 && ci.test(e);) e = e.replace(ci, n), ci.lastIndex = 0, r -= 1;
            return e
        }

        function Y(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.match(li).map((function(e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
            })).join(""), this._longDateFormat[e])
        }

        function j() {
            return this._invalidDate
        }

        function P(e) {
            return this._ordinal.replace("%d", e)
        }

        function R(e, t, n, r) {
            var i = this._relativeTime[n];
            return x(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
        }

        function L(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return x(n) ? n(t) : n.replace(/%s/i, t)
        }

        function F(e, t) {
            var n = e.toLowerCase();
            vi[n] = vi[n + "s"] = vi[t] = e
        }

        function H(e) {
            return "string" == typeof e ? vi[e] || vi[e.toLowerCase()] : void 0
        }

        function I(e) {
            var t, n, r = {};
            for (n in e) i(e, n) && (t = H(n)) && (r[t] = e[n]);
            return r
        }

        function W(e, t) {
            _i[e] = t
        }

        function q(e) {
            var t, n = [];
            for (t in e) i(e, t) && n.push({
                unit: t,
                priority: _i[t]
            });
            return n.sort((function(e, t) {
                return e.priority - t.priority
            })), n
        }

        function U(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function $(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function V(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = $(t)), n
        }

        function z(t, n) {
            return function(r) {
                return null != r ? (B(this, t, r), e.updateOffset(this, n), this) : G(this, t)
            }
        }

        function G(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function B(e, t, n) {
            e.isValid() && !isNaN(n) && ("FullYear" === t && U(e.year()) && 1 === e.month() && 29 === e.date() ? (n = V(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), oe(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        function Q(e) {
            return x(this[e = H(e)]) ? this[e]() : this
        }

        function Z(e, t) {
            if ("object" == typeof e) {
                var n, r = q(e = I(e)),
                    i = r.length;
                for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit])
            } else if (x(this[e = H(e)])) return this[e](t);
            return this
        }

        function X(e, t, n) {
            ai[e] = x(t) ? t : function(e) {
                return e && n ? n : t
            }
        }

        function J(e, t) {
            return i(ai, e) ? ai[e](t._strict, t._locale) : new RegExp(K(e))
        }

        function K(e) {
            return ee(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, i) {
                return t || n || r || i
            })))
        }

        function ee(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function te(e, t) {
            var n, r, i = t;
            for ("string" == typeof e && (e = [e]), a(t) && (i = function(e, n) {
                    n[t] = V(e)
                }), r = e.length, n = 0; n < r; n++) Fi[e[n]] = i
        }

        function ne(e, t) {
            te(e, (function(e, n, r, i) {
                r._w = r._w || {}, t(e, r._w, r, i)
            }))
        }

        function re(e, t, n) {
            null != t && i(Fi, e) && Fi[e](t, n._a, n, e)
        }

        function ie(e, t) {
            return (e % t + t) % t
        }

        function oe(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = ie(t, 12);
            return e += (t - n) / 12, 1 === n ? U(e) ? 29 : 28 : 31 - n % 7 % 2
        }

        function se(e, t) {
            return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Zi).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
        }

        function ae(e, t) {
            return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Zi.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function ue(e, t, n) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = f([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = Li.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Li.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = Li.call(this._shortMonthsParse, s)) || -1 !== (i = Li.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Li.call(this._longMonthsParse, s)) || -1 !== (i = Li.call(this._shortMonthsParse, s)) ? i : null
        }

        function le(e, t, n) {
            var r, i, o;
            if (this._monthsParseExact) return ue.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                if (i = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                if (!n && this._monthsParse[r].test(e)) return r
            }
        }

        function ce(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = V(t);
                else if (!a(t = e.localeData().monthsParse(t))) return e;
            return n = Math.min(e.date(), oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function fe(t) {
            return null != t ? (ce(this, t), e.updateOffset(this, !0), this) : G(this, "Month")
        }

        function he() {
            return oe(this.year(), this.month())
        }

        function de(e) {
            return this._monthsParseExact ? (i(this, "_monthsRegex") || me.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = Xi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function pe(e) {
            return this._monthsParseExact ? (i(this, "_monthsRegex") || me.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = Ji), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }

        function me() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r = [],
                i = [],
                o = [];
            for (t = 0; t < 12; t++) n = f([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), o.sort(e), t = 0; t < 12; t++) r[t] = ee(r[t]), i[t] = ee(i[t]);
            for (t = 0; t < 24; t++) o[t] = ee(o[t]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function ge(e) {
            return U(e) ? 366 : 365
        }

        function ye() {
            return U(this.year())
        }

        function ve(e, t, n, r, i, o, s) {
            var a;
            return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, i, o, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, i, o, s), a
        }

        function _e(e) {
            var t, n;
            return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
        }

        function we(e, t, n) {
            var r = 7 + t - n;
            return -((7 + _e(e, 0, r).getUTCDay() - t) % 7) + r - 1
        }

        function be(e, t, n, r, i) {
            var o, s, a = 1 + 7 * (t - 1) + (7 + n - r) % 7 + we(e, r, i);
            return a <= 0 ? s = ge(o = e - 1) + a : a > ge(e) ? (o = e + 1, s = a - ge(e)) : (o = e, s = a), {
                year: o,
                dayOfYear: s
            }
        }

        function xe(e, t, n) {
            var r, i, o = we(e.year(), t, n),
                s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
            return s < 1 ? r = s + ke(i = e.year() - 1, t, n) : s > ke(e.year(), t, n) ? (r = s - ke(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = s), {
                week: r,
                year: i
            }
        }

        function ke(e, t, n) {
            var r = we(e, t, n),
                i = we(e + 1, t, n);
            return (ge(e) - r + i) / 7
        }

        function Se(e) {
            return xe(e, this._week.dow, this._week.doy).week
        }

        function Te() {
            return this._week.dow
        }

        function De() {
            return this._week.doy
        }

        function Me(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Ce(e) {
            var t = xe(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Ne(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }

        function Oe(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Ae(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t))
        }

        function Ee(e, t) {
            var r = n(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
            return !0 === e ? Ae(r, this._week.dow) : e ? r[e.day()] : r
        }

        function Ye(e) {
            return !0 === e ? Ae(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }

        function je(e) {
            return !0 === e ? Ae(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }

        function Pe(e, t, n) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = f([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = Li.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Li.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Li.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = Li.call(this._weekdaysParse, s)) || -1 !== (i = Li.call(this._shortWeekdaysParse, s)) || -1 !== (i = Li.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Li.call(this._shortWeekdaysParse, s)) || -1 !== (i = Li.call(this._weekdaysParse, s)) || -1 !== (i = Li.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Li.call(this._minWeekdaysParse, s)) || -1 !== (i = Li.call(this._weekdaysParse, s)) || -1 !== (i = Li.call(this._shortWeekdaysParse, s)) ? i : null
        }

        function Re(e, t, n) {
            var r, i, o;
            if (this._weekdaysParseExact) return Pe.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                if (i = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                if (!n && this._weekdaysParse[r].test(e)) return r
            }
        }

        function Le(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Ne(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Fe(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function He(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = Oe(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }

        function Ie(e) {
            return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = io), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function We(e) {
            return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = oo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function qe(e) {
            return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = so), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Ue() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r, i, o, s = [],
                a = [],
                u = [],
                l = [];
            for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t), r = ee(this.weekdaysMin(n, "")), i = ee(this.weekdaysShort(n, "")), o = ee(this.weekdays(n, "")), s.push(r), a.push(i), u.push(o), l.push(r), l.push(i), l.push(o);
            s.sort(e), a.sort(e), u.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function $e() {
            return this.hours() % 12 || 12
        }

        function Ve() {
            return this.hours() || 24
        }

        function ze(e, t) {
            C(e, 0, 0, (function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            }))
        }

        function Ge(e, t) {
            return t._meridiemParse
        }

        function Be(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Qe(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Ze(e, t) {
            var n, r = Math.min(e.length, t.length);
            for (n = 0; n < r; n += 1)
                if (e[n] !== t[n]) return n;
            return r
        }

        function Xe(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function Je(e) {
            for (var t, n, r, i, o = 0; o < e.length;) {
                for (t = (i = Xe(e[o]).split("-")).length, n = (n = Xe(e[o + 1])) ? n.split("-") : null; t > 0;) {
                    if (r = et(i.slice(0, t).join("-"))) return r;
                    if (n && n.length >= t && Ze(i, n) >= t - 1) break;
                    t--
                }
                o++
            }
            return ao
        }

        function Ke(e) {
            return null != e.match("^[^/\\\\]*$")
        }

        function et(e) {
            var t = null;
            if (void 0 === fo[e] && "undefined" != typeof module && module && module.exports && Ke(e)) try {
                t = ao._abbr, require("./locale/" + e), tt(t)
            } catch (t) {
                fo[e] = null
            }
            return fo[e]
        }

        function tt(e, t) {
            var n;
            return e && ((n = s(t) ? it(e) : nt(e, t)) ? ao = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ao._abbr
        }

        function nt(e, t) {
            if (null !== t) {
                var n, r = co;
                if (t.abbr = e, null != fo[e]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = fo[e]._config;
                else if (null != t.parentLocale)
                    if (null != fo[t.parentLocale]) r = fo[t.parentLocale]._config;
                    else {
                        if (null == (n = et(t.parentLocale))) return ho[t.parentLocale] || (ho[t.parentLocale] = []), ho[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        r = n._config
                    }
                return fo[e] = new T(S(r, t)), ho[e] && ho[e].forEach((function(e) {
                    nt(e.name, e.config)
                })), tt(e), fo[e]
            }
            return delete fo[e], null
        }

        function rt(e, t) {
            if (null != t) {
                var n, r, i = co;
                null != fo[e] && null != fo[e].parentLocale ? fo[e].set(S(fo[e]._config, t)) : (null != (r = et(e)) && (i = r._config), t = S(i, t), null == r && (t.abbr = e), (n = new T(t)).parentLocale = fo[e], fo[e] = n), tt(e)
            } else null != fo[e] && (null != fo[e].parentLocale ? (fo[e] = fo[e].parentLocale, e === tt() && tt(e)) : null != fo[e] && delete fo[e]);
            return fo[e]
        }

        function it(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ao;
            if (!n(e)) {
                if (t = et(e)) return t;
                e = [e]
            }
            return Je(e)
        }

        function ot() {
            return ri(fo)
        }

        function st(e) {
            var t, n = e._a;
            return n && -2 === d(e).overflow && (t = n[Ii] < 0 || n[Ii] > 11 ? Ii : n[Wi] < 1 || n[Wi] > oe(n[Hi], n[Ii]) ? Wi : n[qi] < 0 || n[qi] > 24 || 24 === n[qi] && (0 !== n[Ui] || 0 !== n[$i] || 0 !== n[Vi]) ? qi : n[Ui] < 0 || n[Ui] > 59 ? Ui : n[$i] < 0 || n[$i] > 59 ? $i : n[Vi] < 0 || n[Vi] > 999 ? Vi : -1, d(e)._overflowDayOfYear && (t < Hi || t > Wi) && (t = Wi), d(e)._overflowWeeks && -1 === t && (t = zi), d(e)._overflowWeekday && -1 === t && (t = Gi), d(e).overflow = t), e
        }

        function at(e) {
            var t, n, r, i, o, s, a = e._i,
                u = po.exec(a) || mo.exec(a),
                l = yo.length,
                c = vo.length;
            if (u) {
                for (d(e).iso = !0, t = 0, n = l; t < n; t++)
                    if (yo[t][1].exec(u[1])) {
                        i = yo[t][0], r = !1 !== yo[t][2];
                        break
                    }
                if (null == i) return void(e._isValid = !1);
                if (u[3]) {
                    for (t = 0, n = c; t < n; t++)
                        if (vo[t][1].exec(u[3])) {
                            o = (u[2] || " ") + vo[t][0];
                            break
                        }
                    if (null == o) return void(e._isValid = !1)
                }
                if (!r && null != o) return void(e._isValid = !1);
                if (u[4]) {
                    if (!go.exec(u[4])) return void(e._isValid = !1);
                    s = "Z"
                }
                e._f = i + (o || "") + (s || ""), _t(e)
            } else e._isValid = !1
        }

        function ut(e, t, n, r, i, o) {
            var s = [lt(e), Qi.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
            return o && s.push(parseInt(o, 10)), s
        }

        function lt(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
        }

        function ct(e) {
            return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function ft(e, t, n) {
            if (e && no.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return d(n).weekdayMismatch = !0, n._isValid = !1, !1;
            return !0
        }

        function ht(e, t, n) {
            if (e) return bo[e];
            if (t) return 0;
            var r = parseInt(n, 10),
                i = r % 100;
            return 60 * ((r - i) / 100) + i
        }

        function dt(e) {
            var t, n = wo.exec(ct(e._i));
            if (n) {
                if (t = ut(n[4], n[3], n[2], n[5], n[6], n[7]), !ft(n[1], t, e)) return;
                e._a = t, e._tzm = ht(n[8], n[9], n[10]), e._d = _e.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), d(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function pt(t) {
            var n = _o.exec(t._i);
            null === n ? (at(t), !1 === t._isValid && (delete t._isValid, dt(t), !1 === t._isValid && (delete t._isValid, t._strict ? t._isValid = !1 : e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
        }

        function mt(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function gt(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function yt(e) {
            var t, n, r, i, o, s = [];
            if (!e._d) {
                for (r = gt(e), e._w && null == e._a[Wi] && null == e._a[Ii] && vt(e), null != e._dayOfYear && (o = mt(e._a[Hi], r[Hi]), (e._dayOfYear > ge(o) || 0 === e._dayOfYear) && (d(e)._overflowDayOfYear = !0), n = _e(o, 0, e._dayOfYear), e._a[Ii] = n.getUTCMonth(), e._a[Wi] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
                for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[qi] && 0 === e._a[Ui] && 0 === e._a[$i] && 0 === e._a[Vi] && (e._nextDay = !0, e._a[qi] = 0), e._d = (e._useUTC ? _e : ve).apply(null, s), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[qi] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (d(e).weekdayMismatch = !0)
            }
        }

        function vt(e) {
            var t, n, r, i, o, s, a, u, l;
            null != (t = e._w).GG || null != t.W || null != t.E ? (o = 1, s = 4, n = mt(t.GG, e._a[Hi], xe(Mt(), 1, 4).year), r = mt(t.W, 1), ((i = mt(t.E, 1)) < 1 || i > 7) && (u = !0)) : (o = e._locale._week.dow, s = e._locale._week.doy, l = xe(Mt(), o, s), n = mt(t.gg, e._a[Hi], l.year), r = mt(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + o, (t.e < 0 || t.e > 6) && (u = !0)) : i = o), r < 1 || r > ke(n, o, s) ? d(e)._overflowWeeks = !0 : null != u ? d(e)._overflowWeekday = !0 : (a = be(n, r, i, o, s), e._a[Hi] = a.year, e._dayOfYear = a.dayOfYear)
        }

        function _t(t) {
            if (t._f !== e.ISO_8601)
                if (t._f !== e.RFC_2822) {
                    t._a = [], d(t).empty = !0;
                    var n, r, i, o, s, a, u, l = "" + t._i,
                        c = l.length,
                        f = 0;
                    for (u = (i = E(t._f, t._locale).match(li) || []).length, n = 0; n < u; n++) o = i[n], (r = (l.match(J(o, t)) || [])[0]) && ((s = l.substr(0, l.indexOf(r))).length > 0 && d(t).unusedInput.push(s), l = l.slice(l.indexOf(r) + r.length), f += r.length), hi[o] ? (r ? d(t).empty = !1 : d(t).unusedTokens.push(o), re(o, r, t)) : t._strict && !r && d(t).unusedTokens.push(o);
                    d(t).charsLeftOver = c - f, l.length > 0 && d(t).unusedInput.push(l), t._a[qi] <= 12 && !0 === d(t).bigHour && t._a[qi] > 0 && (d(t).bigHour = void 0), d(t).parsedDateParts = t._a.slice(0), d(t).meridiem = t._meridiem, t._a[qi] = wt(t._locale, t._a[qi], t._meridiem), null !== (a = d(t).era) && (t._a[Hi] = t._locale.erasConvertYear(a, t._a[Hi])), yt(t), st(t)
                } else dt(t);
            else at(t)
        }

        function wt(e, t, n) {
            var r;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
        }

        function bt(e) {
            var t, n, r, i, o, s, a = !1,
                u = e._f.length;
            if (0 === u) return d(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (i = 0; i < u; i++) o = 0, s = !1, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], _t(t), p(t) && (s = !0), o += d(t).charsLeftOver, o += 10 * d(t).unusedTokens.length, d(t).score = o, a ? o < r && (r = o, n = t) : (null == r || o < r || s) && (r = o, n = t, s && (a = !0));
            c(e, n || t)
        }

        function xt(e) {
            if (!e._d) {
                var t = I(e._i),
                    n = void 0 === t.day ? t.date : t.day;
                e._a = l([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                    return e && parseInt(e, 10)
                })), yt(e)
            }
        }

        function kt(e) {
            var t = new y(st(St(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function St(e) {
            var t = e._i,
                r = e._f;
            return e._locale = e._locale || it(e._l), null === t || void 0 === r && "" === t ? m({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new y(st(t)) : (u(t) ? e._d = t : n(r) ? bt(e) : r ? _t(e) : Tt(e), p(e) || (e._d = null), e))
        }

        function Tt(t) {
            var i = t._i;
            s(i) ? t._d = new Date(e.now()) : u(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? pt(t) : n(i) ? (t._a = l(i.slice(0), (function(e) {
                return parseInt(e, 10)
            })), yt(t)) : r(i) ? xt(t) : a(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
        }

        function Dt(e, t, i, s, a) {
            var u = {};
            return !0 !== t && !1 !== t || (s = t, t = void 0), !0 !== i && !1 !== i || (s = i, i = void 0), (r(e) && o(e) || n(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = i, u._i = e, u._f = t, u._strict = s, kt(u)
        }

        function Mt(e, t, n, r) {
            return Dt(e, t, n, r, !1)
        }

        function Ct(e, t) {
            var r, i;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Mt();
            for (r = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](r) || (r = t[i]);
            return r
        }

        function Nt() {
            return Ct("isBefore", [].slice.call(arguments, 0))
        }

        function Ot() {
            return Ct("isAfter", [].slice.call(arguments, 0))
        }

        function At(e) {
            var t, n, r = !1,
                o = To.length;
            for (t in e)
                if (i(e, t) && (-1 === Li.call(To, t) || null != e[t] && isNaN(e[t]))) return !1;
            for (n = 0; n < o; ++n)
                if (e[To[n]]) {
                    if (r) return !1;
                    parseFloat(e[To[n]]) !== V(e[To[n]]) && (r = !0)
                }
            return !0
        }

        function Et() {
            return this._isValid
        }

        function Yt() {
            return Kt(NaN)
        }

        function jt(e) {
            var t = I(e),
                n = t.year || 0,
                r = t.quarter || 0,
                i = t.month || 0,
                o = t.week || t.isoWeek || 0,
                s = t.day || 0,
                a = t.hour || 0,
                u = t.minute || 0,
                l = t.second || 0,
                c = t.millisecond || 0;
            this._isValid = At(t), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = it(), this._bubble()
        }

        function Pt(e) {
            return e instanceof jt
        }

        function Rt(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Lt(e, t, n) {
            var r, i = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                s = 0;
            for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && V(e[r]) !== V(t[r])) && s++;
            return s + o
        }

        function Ft(e, t) {
            C(e, 0, 0, (function() {
                var e = this.utcOffset(),
                    n = "+";
                return e < 0 && (e = -e, n = "-"), n + M(~~(e / 60), 2) + t + M(~~e % 60, 2)
            }))
        }

        function Ht(e, t) {
            var n, r, i = (t || "").match(e);
            return null === i ? null : 0 === (r = 60 * (n = ((i[i.length - 1] || []) + "").match(Do) || ["-", 0, 0])[1] + V(n[2])) ? 0 : "+" === n[0] ? r : -r
        }

        function It(t, n) {
            var r, i;
            return n._isUTC ? (r = n.clone(), i = (v(t) || u(t) ? t.valueOf() : Mt(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), e.updateOffset(r, !1), r) : Mt(t).local()
        }

        function Wt(e) {
            return -Math.round(e._d.getTimezoneOffset())
        }

        function qt(t, n, r) {
            var i, o = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = Ht(ji, t))) return this
                } else Math.abs(t) < 16 && !r && (t *= 60);
                return !this._isUTC && n && (i = Wt(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), o !== t && (!n || this._changeInProgress ? on(this, Kt(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? o : Wt(this)
        }

        function Ut(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function $t(e) {
            return this.utcOffset(0, e)
        }

        function Vt(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this
        }

        function zt() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = Ht(Yi, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }

        function Gt(e) {
            return !!this.isValid() && (e = e ? Mt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }

        function Bt() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Qt() {
            if (!s(this._isDSTShifted)) return this._isDSTShifted;
            var e, t = {};
            return g(t, this), (t = St(t))._a ? (e = t._isUTC ? f(t._a) : Mt(t._a), this._isDSTShifted = this.isValid() && Lt(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
        }

        function Zt() {
            return !!this.isValid() && !this._isUTC
        }

        function Xt() {
            return !!this.isValid() && this._isUTC
        }

        function Jt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function Kt(e, t) {
            var n, r, o, s = e,
                u = null;
            return Pt(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : a(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (u = Mo.exec(e)) ? (n = "-" === u[1] ? -1 : 1, s = {
                y: 0,
                d: V(u[Wi]) * n,
                h: V(u[qi]) * n,
                m: V(u[Ui]) * n,
                s: V(u[$i]) * n,
                ms: V(Rt(1e3 * u[Vi])) * n
            }) : (u = Co.exec(e)) ? (n = "-" === u[1] ? -1 : 1, s = {
                y: en(u[2], n),
                M: en(u[3], n),
                w: en(u[4], n),
                d: en(u[5], n),
                h: en(u[6], n),
                m: en(u[7], n),
                s: en(u[8], n)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (o = nn(Mt(s.from), Mt(s.to)), (s = {}).ms = o.milliseconds, s.M = o.months), r = new jt(s), Pt(e) && i(e, "_locale") && (r._locale = e._locale), Pt(e) && i(e, "_isValid") && (r._isValid = e._isValid), r
        }

        function en(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function tn(e, t) {
            var n = {};
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function nn(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = It(t, e), e.isBefore(t) ? n = tn(e, t) : ((n = tn(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function rn(e, t) {
            return function(n, r) {
                var i;
                return null === r || isNaN(+r) || (b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), on(this, Kt(n, r), e), this
            }
        }

        function on(t, n, r, i) {
            var o = n._milliseconds,
                s = Rt(n._days),
                a = Rt(n._months);
            t.isValid() && (i = null == i || i, a && ce(t, G(t, "Month") + a * r), s && B(t, "Date", G(t, "Date") + s * r), o && t._d.setTime(t._d.valueOf() + o * r), i && e.updateOffset(t, s || a))
        }

        function sn(e) {
            return "string" == typeof e || e instanceof String
        }

        function an(e) {
            return v(e) || u(e) || sn(e) || a(e) || ln(e) || un(e) || null == e
        }

        function un(e) {
            var t, n, s = r(e) && !o(e),
                a = !1,
                u = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                l = u.length;
            for (t = 0; t < l; t += 1) n = u[t], a = a || i(e, n);
            return s && a
        }

        function ln(e) {
            var t = n(e),
                r = !1;
            return t && (r = 0 === e.filter((function(t) {
                return !a(t) && sn(e)
            })).length), t && r
        }

        function cn(e) {
            var t, n, s = r(e) && !o(e),
                a = !1,
                u = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
            for (t = 0; t < u.length; t += 1) n = u[t], a = a || i(e, n);
            return s && a
        }

        function fn(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function hn(t, n) {
            1 === arguments.length && (arguments[0] ? an(arguments[0]) ? (t = arguments[0], n = void 0) : cn(arguments[0]) && (n = arguments[0], t = void 0) : (t = void 0, n = void 0));
            var r = t || Mt(),
                i = It(r, this).startOf("day"),
                o = e.calendarFormat(this, i) || "sameElse",
                s = n && (x(n[o]) ? n[o].call(this, r) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, Mt(r)))
        }

        function dn() {
            return new y(this)
        }

        function pn(e, t) {
            var n = v(e) ? e : Mt(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }

        function mn(e, t) {
            var n = v(e) ? e : Mt(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }

        function gn(e, t, n, r) {
            var i = v(e) ? e : Mt(e),
                o = v(t) ? t : Mt(t);
            return !!(this.isValid() && i.isValid() && o.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n)))
        }

        function yn(e, t) {
            var n, r = v(e) ? e : Mt(e);
            return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }

        function vn(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function _n(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function wn(e, t, n) {
            var r, i, o;
            if (!this.isValid()) return NaN;
            if (!(r = It(e, this)).isValid()) return NaN;
            switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = H(t)) {
                case "year":
                    o = bn(this, r) / 12;
                    break;
                case "month":
                    o = bn(this, r);
                    break;
                case "quarter":
                    o = bn(this, r) / 3;
                    break;
                case "second":
                    o = (this - r) / 1e3;
                    break;
                case "minute":
                    o = (this - r) / 6e4;
                    break;
                case "hour":
                    o = (this - r) / 36e5;
                    break;
                case "day":
                    o = (this - r - i) / 864e5;
                    break;
                case "week":
                    o = (this - r - i) / 6048e5;
                    break;
                default:
                    o = this - r
            }
            return n ? o : $(o)
        }

        function bn(e, t) {
            if (e.date() < t.date()) return -bn(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                r = e.clone().add(n, "months");
            return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
        }

        function xn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function kn(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
                n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999 ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }

        function Sn() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e, t, n, r, i = "moment",
                o = "";
            return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", o = "Z"), e = "[" + i + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", r = o + '[")]', this.format(e + t + n + r)
        }

        function Tn(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = A(this, t);
            return this.localeData().postformat(n)
        }

        function Dn(e, t) {
            return this.isValid() && (v(e) && e.isValid() || Mt(e).isValid()) ? Kt({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function Mn(e) {
            return this.from(Mt(), e)
        }

        function Cn(e, t) {
            return this.isValid() && (v(e) && e.isValid() || Mt(e).isValid()) ? Kt({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function Nn(e) {
            return this.to(Mt(), e)
        }

        function On(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = it(e)) && (this._locale = t), this)
        }

        function An() {
            return this._locale
        }

        function En(e, t) {
            return (e % t + t) % t
        }

        function Yn(e, t, n) {
            return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Po : new Date(e, t, n).valueOf()
        }

        function jn(e, t, n) {
            return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Po : Date.UTC(e, t, n)
        }

        function Pn(t) {
            var n, r;
            if (void 0 === (t = H(t)) || "millisecond" === t || !this.isValid()) return this;
            switch (r = this._isUTC ? jn : Yn, t) {
                case "year":
                    n = r(this.year(), 0, 1);
                    break;
                case "quarter":
                    n = r(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    n = r(this.year(), this.month(), 1);
                    break;
                case "week":
                    n = r(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    n = r(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    n = this._d.valueOf(), n -= En(n + (this._isUTC ? 0 : this.utcOffset() * Yo), jo);
                    break;
                case "minute":
                    n = this._d.valueOf(), n -= En(n, Yo);
                    break;
                case "second":
                    n = this._d.valueOf(), n -= En(n, Eo)
            }
            return this._d.setTime(n), e.updateOffset(this, !0), this
        }

        function Rn(t) {
            var n, r;
            if (void 0 === (t = H(t)) || "millisecond" === t || !this.isValid()) return this;
            switch (r = this._isUTC ? jn : Yn, t) {
                case "year":
                    n = r(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    n = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    n = r(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    n = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    n = r(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    n = this._d.valueOf(), n += jo - En(n + (this._isUTC ? 0 : this.utcOffset() * Yo), jo) - 1;
                    break;
                case "minute":
                    n = this._d.valueOf(), n += Yo - En(n, Yo) - 1;
                    break;
                case "second":
                    n = this._d.valueOf(), n += Eo - En(n, Eo) - 1
            }
            return this._d.setTime(n), e.updateOffset(this, !0), this
        }

        function Ln() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function Fn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function Hn() {
            return new Date(this.valueOf())
        }

        function In() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function Wn() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function qn() {
            return this.isValid() ? this.toISOString() : null
        }

        function Un() {
            return p(this)
        }

        function $n() {
            return c({}, d(this))
        }

        function Vn() {
            return d(this).overflow
        }

        function zn() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Gn() {
            var t, n, r, i = this._eras || it("en")._eras;
            for (t = 0, n = i.length; t < n; ++t) {
                if ("string" == typeof i[t].since) r = e(i[t].since).startOf("day"), i[t].since = r.valueOf();
                switch (typeof i[t].until) {
                    case "undefined":
                        i[t].until = 1 / 0;
                        break;
                    case "string":
                        r = e(i[t].until).startOf("day").valueOf(), i[t].until = r.valueOf()
                }
            }
            return i
        }

        function Bn(e, t, n) {
            var r, i, o, s, a, u = this.eras();
            for (e = e.toUpperCase(), r = 0, i = u.length; r < i; ++r)
                if (o = u[r].name.toUpperCase(), s = u[r].abbr.toUpperCase(), a = u[r].narrow.toUpperCase(), n) switch (t) {
                    case "N":
                    case "NN":
                    case "NNN":
                        if (s === e) return u[r];
                        break;
                    case "NNNN":
                        if (o === e) return u[r];
                        break;
                    case "NNNNN":
                        if (a === e) return u[r]
                } else if ([o, s, a].indexOf(e) >= 0) return u[r]
        }

        function Qn(t, n) {
            var r = t.since <= t.until ? 1 : -1;
            return void 0 === n ? e(t.since).year() : e(t.since).year() + (n - t.offset) * r
        }

        function Zn() {
            var e, t, n, r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
                if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].name;
                if (r[e].until <= n && n <= r[e].since) return r[e].name
            }
            return ""
        }

        function Xn() {
            var e, t, n, r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
                if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].narrow;
                if (r[e].until <= n && n <= r[e].since) return r[e].narrow
            }
            return ""
        }

        function Jn() {
            var e, t, n, r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
                if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].abbr;
                if (r[e].until <= n && n <= r[e].since) return r[e].abbr
            }
            return ""
        }

        function Kn() {
            var t, n, r, i, o = this.localeData().eras();
            for (t = 0, n = o.length; t < n; ++t)
                if (r = o[t].since <= o[t].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), o[t].since <= i && i <= o[t].until || o[t].until <= i && i <= o[t].since) return (this.year() - e(o[t].since).year()) * r + o[t].offset;
            return this.year()
        }

        function er(e) {
            return i(this, "_erasNameRegex") || ar.call(this), e ? this._erasNameRegex : this._erasRegex
        }

        function tr(e) {
            return i(this, "_erasAbbrRegex") || ar.call(this), e ? this._erasAbbrRegex : this._erasRegex
        }

        function nr(e) {
            return i(this, "_erasNarrowRegex") || ar.call(this), e ? this._erasNarrowRegex : this._erasRegex
        }

        function rr(e, t) {
            return t.erasAbbrRegex(e)
        }

        function ir(e, t) {
            return t.erasNameRegex(e)
        }

        function or(e, t) {
            return t.erasNarrowRegex(e)
        }

        function sr(e, t) {
            return t._eraYearOrdinalRegex || Ai
        }

        function ar() {
            var e, t, n = [],
                r = [],
                i = [],
                o = [],
                s = this.eras();
            for (e = 0, t = s.length; e < t; ++e) r.push(ee(s[e].name)), n.push(ee(s[e].abbr)), i.push(ee(s[e].narrow)), o.push(ee(s[e].name)), o.push(ee(s[e].abbr)), o.push(ee(s[e].narrow));
            this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function ur(e, t) {
            C(0, [e, e.length], 0, t)
        }

        function lr(e) {
            return mr.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function cr(e) {
            return mr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function fr() {
            return ke(this.year(), 1, 4)
        }

        function hr() {
            return ke(this.isoWeekYear(), 1, 4)
        }

        function dr() {
            var e = this.localeData()._week;
            return ke(this.year(), e.dow, e.doy)
        }

        function pr() {
            var e = this.localeData()._week;
            return ke(this.weekYear(), e.dow, e.doy)
        }

        function mr(e, t, n, r, i) {
            var o;
            return null == e ? xe(this, r, i).year : (t > (o = ke(e, r, i)) && (t = o), gr.call(this, e, t, n, r, i))
        }

        function gr(e, t, n, r, i) {
            var o = be(e, t, n, r, i),
                s = _e(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function yr(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function vr(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function _r(e, t) {
            t[Vi] = V(1e3 * ("0." + e))
        }

        function wr() {
            return this._isUTC ? "UTC" : ""
        }

        function br() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function xr(e) {
            return Mt(1e3 * e)
        }

        function kr() {
            return Mt.apply(null, arguments).parseZone()
        }

        function Sr(e) {
            return e
        }

        function Tr(e, t, n, r) {
            var i = it(),
                o = f().set(r, t);
            return i[n](o, e)
        }

        function Dr(e, t, n) {
            if (a(e) && (t = e, e = void 0), e = e || "", null != t) return Tr(e, t, n, "month");
            var r, i = [];
            for (r = 0; r < 12; r++) i[r] = Tr(e, r, n, "month");
            return i
        }

        function Mr(e, t, n, r) {
            "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, a(t) && (n = t, t = void 0), t = t || "");
            var i, o = it(),
                s = e ? o._week.dow : 0,
                u = [];
            if (null != n) return Tr(t, (n + s) % 7, r, "day");
            for (i = 0; i < 7; i++) u[i] = Tr(t, (i + s) % 7, r, "day");
            return u
        }

        function Cr(e, t) {
            return Dr(e, t, "months")
        }

        function Nr(e, t) {
            return Dr(e, t, "monthsShort")
        }

        function Or(e, t, n) {
            return Mr(e, t, n, "weekdays")
        }

        function Ar(e, t, n) {
            return Mr(e, t, n, "weekdaysShort")
        }

        function Er(e, t, n) {
            return Mr(e, t, n, "weekdaysMin")
        }

        function Yr() {
            var e = this._data;
            return this._milliseconds = Uo(this._milliseconds), this._days = Uo(this._days), this._months = Uo(this._months), e.milliseconds = Uo(e.milliseconds), e.seconds = Uo(e.seconds), e.minutes = Uo(e.minutes), e.hours = Uo(e.hours), e.months = Uo(e.months), e.years = Uo(e.years), this
        }

        function jr(e, t, n, r) {
            var i = Kt(t, n);
            return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
        }

        function Pr(e, t) {
            return jr(this, e, t, 1)
        }

        function Rr(e, t) {
            return jr(this, e, t, -1)
        }

        function Lr(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function Fr() {
            var e, t, n, r, i, o = this._milliseconds,
                s = this._days,
                a = this._months,
                u = this._data;
            return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Lr(Ir(a) + s), s = 0, a = 0), u.milliseconds = o % 1e3, e = $(o / 1e3), u.seconds = e % 60, t = $(e / 60), u.minutes = t % 60, n = $(t / 60), u.hours = n % 24, s += $(n / 24), a += i = $(Hr(s)), s -= Lr(Ir(i)), r = $(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, this
        }

        function Hr(e) {
            return 4800 * e / 146097
        }

        function Ir(e) {
            return 146097 * e / 4800
        }

        function Wr(e) {
            if (!this.isValid()) return NaN;
            var t, n, r = this._milliseconds;
            if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + Hr(t), e) {
                case "month":
                    return n;
                case "quarter":
                    return n / 3;
                case "year":
                    return n / 12
            } else switch (t = this._days + Math.round(Ir(this._months)), e) {
                case "week":
                    return t / 7 + r / 6048e5;
                case "day":
                    return t + r / 864e5;
                case "hour":
                    return 24 * t + r / 36e5;
                case "minute":
                    return 1440 * t + r / 6e4;
                case "second":
                    return 86400 * t + r / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + r;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function qr() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * V(this._months / 12) : NaN
        }

        function Ur(e) {
            return function() {
                return this.as(e)
            }
        }

        function $r() {
            return Kt(this)
        }

        function Vr(e) {
            return e = H(e), this.isValid() ? this[e + "s"]() : NaN
        }

        function zr(e) {
            return function() {
                return this.isValid() ? this._data[e] : NaN
            }
        }

        function Gr() {
            return $(this.days() / 7)
        }

        function Br(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function Qr(e, t, n, r) {
            var i = Kt(e).abs(),
                o = ss(i.as("s")),
                s = ss(i.as("m")),
                a = ss(i.as("h")),
                u = ss(i.as("d")),
                l = ss(i.as("M")),
                c = ss(i.as("w")),
                f = ss(i.as("y")),
                h = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || s <= 1 && ["m"] || s < n.m && ["mm", s] || a <= 1 && ["h"] || a < n.h && ["hh", a] || u <= 1 && ["d"] || u < n.d && ["dd", u];
            return null != n.w && (h = h || c <= 1 && ["w"] || c < n.w && ["ww", c]), (h = h || l <= 1 && ["M"] || l < n.M && ["MM", l] || f <= 1 && ["y"] || ["yy", f])[2] = t, h[3] = +e > 0, h[4] = r, Br.apply(null, h)
        }

        function Zr(e) {
            return void 0 === e ? ss : "function" == typeof e && (ss = e, !0)
        }

        function Xr(e, t) {
            return void 0 !== as[e] && (void 0 === t ? as[e] : (as[e] = t, "s" === e && (as.ss = t - 1), !0))
        }

        function Jr(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n, r, i = !1,
                o = as;
            return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (i = e), "object" == typeof t && (o = Object.assign({}, as, t), null != t.s && null == t.ss && (o.ss = t.s - 1)), r = Qr(this, !i, o, n = this.localeData()), i && (r = n.pastFuture(+this, r)), n.postformat(r)
        }

        function Kr(e) {
            return (e > 0) - (e < 0) || +e
        }

        function ei() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, n, r, i, o, s, a, u = us(this._milliseconds) / 1e3,
                l = us(this._days),
                c = us(this._months),
                f = this.asSeconds();
            return f ? (e = $(u / 60), t = $(e / 60), u %= 60, e %= 60, n = $(c / 12), c %= 12, r = u ? u.toFixed(3).replace(/\.?0+$/, "") : "", i = f < 0 ? "-" : "", o = Kr(this._months) !== Kr(f) ? "-" : "", s = Kr(this._days) !== Kr(f) ? "-" : "", a = Kr(this._milliseconds) !== Kr(f) ? "-" : "", i + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (l ? s + l + "D" : "") + (t || e || u ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (u ? a + r + "S" : "")) : "P0D"
        }
        var ti, ni;
        ni = Array.prototype.some ? Array.prototype.some : function(e) {
            var t, n = Object(this),
                r = n.length >>> 0;
            for (t = 0; t < r; t++)
                if (t in n && e.call(this, n[t], t, n)) return !0;
            return !1
        };
        var ri, ii = e.momentProperties = [],
            oi = !1,
            si = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null, ri = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) i(e, t) && n.push(t);
            return n
        };
        var ai, ui = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            li = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            ci = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            fi = {},
            hi = {},
            di = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            pi = "Invalid date",
            mi = "%d",
            gi = /\d{1,2}/,
            yi = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            vi = {},
            _i = {},
            wi = /\d/,
            bi = /\d\d/,
            xi = /\d{3}/,
            ki = /\d{4}/,
            Si = /[+-]?\d{6}/,
            Ti = /\d\d?/,
            Di = /\d\d\d\d?/,
            Mi = /\d\d\d\d\d\d?/,
            Ci = /\d{1,3}/,
            Ni = /\d{1,4}/,
            Oi = /[+-]?\d{1,6}/,
            Ai = /\d+/,
            Ei = /[+-]?\d+/,
            Yi = /Z|[+-]\d\d:?\d\d/gi,
            ji = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Pi = /[+-]?\d+(\.\d{1,3})?/,
            Ri = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        ai = {};
        var Li, Fi = {},
            Hi = 0,
            Ii = 1,
            Wi = 2,
            qi = 3,
            Ui = 4,
            $i = 5,
            Vi = 6,
            zi = 7,
            Gi = 8;
        Li = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, C("M", ["MM", 2], "Mo", (function() {
            return this.month() + 1
        })), C("MMM", 0, 0, (function(e) {
            return this.localeData().monthsShort(this, e)
        })), C("MMMM", 0, 0, (function(e) {
            return this.localeData().months(this, e)
        })), F("month", "M"), W("month", 8), X("M", Ti), X("MM", Ti, bi), X("MMM", (function(e, t) {
            return t.monthsShortRegex(e)
        })), X("MMMM", (function(e, t) {
            return t.monthsRegex(e)
        })), te(["M", "MM"], (function(e, t) {
            t[Ii] = V(e) - 1
        })), te(["MMM", "MMMM"], (function(e, t, n, r) {
            var i = n._locale.monthsParse(e, r, n._strict);
            null != i ? t[Ii] = i : d(n).invalidMonth = e
        }));
        var Bi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Qi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Zi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Xi = Ri,
            Ji = Ri;
        C("Y", 0, 0, (function() {
            var e = this.year();
            return e <= 9999 ? M(e, 4) : "+" + e
        })), C(0, ["YY", 2], 0, (function() {
            return this.year() % 100
        })), C(0, ["YYYY", 4], 0, "year"), C(0, ["YYYYY", 5], 0, "year"), C(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), W("year", 1), X("Y", Ei), X("YY", Ti, bi), X("YYYY", Ni, ki), X("YYYYY", Oi, Si), X("YYYYYY", Oi, Si), te(["YYYYY", "YYYYYY"], Hi), te("YYYY", (function(t, n) {
            n[Hi] = 2 === t.length ? e.parseTwoDigitYear(t) : V(t)
        })), te("YY", (function(t, n) {
            n[Hi] = e.parseTwoDigitYear(t)
        })), te("Y", (function(e, t) {
            t[Hi] = parseInt(e, 10)
        })), e.parseTwoDigitYear = function(e) {
            return V(e) + (V(e) > 68 ? 1900 : 2e3)
        };
        var Ki = z("FullYear", !0);
        C("w", ["ww", 2], "wo", "week"), C("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), W("week", 5), W("isoWeek", 5), X("w", Ti), X("ww", Ti, bi), X("W", Ti), X("WW", Ti, bi), ne(["w", "ww", "W", "WW"], (function(e, t, n, r) {
            t[r.substr(0, 1)] = V(e)
        }));
        var eo = {
            dow: 0,
            doy: 6
        };
        C("d", 0, "do", "day"), C("dd", 0, 0, (function(e) {
            return this.localeData().weekdaysMin(this, e)
        })), C("ddd", 0, 0, (function(e) {
            return this.localeData().weekdaysShort(this, e)
        })), C("dddd", 0, 0, (function(e) {
            return this.localeData().weekdays(this, e)
        })), C("e", 0, 0, "weekday"), C("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), X("d", Ti), X("e", Ti), X("E", Ti), X("dd", (function(e, t) {
            return t.weekdaysMinRegex(e)
        })), X("ddd", (function(e, t) {
            return t.weekdaysShortRegex(e)
        })), X("dddd", (function(e, t) {
            return t.weekdaysRegex(e)
        })), ne(["dd", "ddd", "dddd"], (function(e, t, n, r) {
            var i = n._locale.weekdaysParse(e, r, n._strict);
            null != i ? t.d = i : d(n).invalidWeekday = e
        })), ne(["d", "e", "E"], (function(e, t, n, r) {
            t[r] = V(e)
        }));
        var to = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            no = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            ro = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            io = Ri,
            oo = Ri,
            so = Ri;
        C("H", ["HH", 2], 0, "hour"), C("h", ["hh", 2], 0, $e), C("k", ["kk", 2], 0, Ve), C("hmm", 0, 0, (function() {
            return "" + $e.apply(this) + M(this.minutes(), 2)
        })), C("hmmss", 0, 0, (function() {
            return "" + $e.apply(this) + M(this.minutes(), 2) + M(this.seconds(), 2)
        })), C("Hmm", 0, 0, (function() {
            return "" + this.hours() + M(this.minutes(), 2)
        })), C("Hmmss", 0, 0, (function() {
            return "" + this.hours() + M(this.minutes(), 2) + M(this.seconds(), 2)
        })), ze("a", !0), ze("A", !1), F("hour", "h"), W("hour", 13), X("a", Ge), X("A", Ge), X("H", Ti), X("h", Ti), X("k", Ti), X("HH", Ti, bi), X("hh", Ti, bi), X("kk", Ti, bi), X("hmm", Di), X("hmmss", Mi), X("Hmm", Di), X("Hmmss", Mi), te(["H", "HH"], qi), te(["k", "kk"], (function(e, t) {
            var n = V(e);
            t[qi] = 24 === n ? 0 : n
        })), te(["a", "A"], (function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        })), te(["h", "hh"], (function(e, t, n) {
            t[qi] = V(e), d(n).bigHour = !0
        })), te("hmm", (function(e, t, n) {
            var r = e.length - 2;
            t[qi] = V(e.substr(0, r)), t[Ui] = V(e.substr(r)), d(n).bigHour = !0
        })), te("hmmss", (function(e, t, n) {
            var r = e.length - 4,
                i = e.length - 2;
            t[qi] = V(e.substr(0, r)), t[Ui] = V(e.substr(r, 2)), t[$i] = V(e.substr(i)), d(n).bigHour = !0
        })), te("Hmm", (function(e, t) {
            var n = e.length - 2;
            t[qi] = V(e.substr(0, n)), t[Ui] = V(e.substr(n))
        })), te("Hmmss", (function(e, t) {
            var n = e.length - 4,
                r = e.length - 2;
            t[qi] = V(e.substr(0, n)), t[Ui] = V(e.substr(n, 2)), t[$i] = V(e.substr(r))
        }));
        var ao, uo = /[ap]\.?m?\.?/i,
            lo = z("Hours", !0),
            co = {
                calendar: ui,
                longDateFormat: di,
                invalidDate: pi,
                ordinal: mi,
                dayOfMonthOrdinalParse: gi,
                relativeTime: yi,
                months: Bi,
                monthsShort: Qi,
                week: eo,
                weekdays: to,
                weekdaysMin: ro,
                weekdaysShort: no,
                meridiemParse: uo
            },
            fo = {},
            ho = {},
            po = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            mo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            go = /Z|[+-]\d\d(?::?\d\d)?/,
            yo = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/],
                ["YYYYMM", /\d{6}/, !1],
                ["YYYY", /\d{4}/, !1]
            ],
            vo = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            _o = /^\/?Date\((-?\d+)/i,
            wo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            bo = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
        e.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        })), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
        var xo = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = Mt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : m()
            })),
            ko = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = Mt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : m()
            })),
            So = function() {
                return Date.now ? Date.now() : +new Date
            },
            To = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        Ft("Z", ":"), Ft("ZZ", ""), X("Z", ji), X("ZZ", ji), te(["Z", "ZZ"], (function(e, t, n) {
            n._useUTC = !0, n._tzm = Ht(ji, e)
        }));
        var Do = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Mo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Co = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        Kt.fn = jt.prototype, Kt.invalid = Yt;
        var No = rn(1, "add"),
            Oo = rn(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Ao = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            })),
            Eo = 1e3,
            Yo = 60 * Eo,
            jo = 60 * Yo,
            Po = 3506328 * jo;
        C("N", 0, 0, "eraAbbr"), C("NN", 0, 0, "eraAbbr"), C("NNN", 0, 0, "eraAbbr"), C("NNNN", 0, 0, "eraName"), C("NNNNN", 0, 0, "eraNarrow"), C("y", ["y", 1], "yo", "eraYear"), C("y", ["yy", 2], 0, "eraYear"), C("y", ["yyy", 3], 0, "eraYear"), C("y", ["yyyy", 4], 0, "eraYear"), X("N", rr), X("NN", rr), X("NNN", rr), X("NNNN", ir), X("NNNNN", or), te(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, n, r) {
            var i = n._locale.erasParse(e, r, n._strict);
            i ? d(n).era = i : d(n).invalidEra = e
        })), X("y", Ai), X("yy", Ai), X("yyy", Ai), X("yyyy", Ai), X("yo", sr), te(["y", "yy", "yyy", "yyyy"], Hi), te(["yo"], (function(e, t, n) {
            var r;
            n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Hi] = n._locale.eraYearOrdinalParse(e, r) : t[Hi] = parseInt(e, 10)
        })), C(0, ["gg", 2], 0, (function() {
            return this.weekYear() % 100
        })), C(0, ["GG", 2], 0, (function() {
            return this.isoWeekYear() % 100
        })), ur("gggg", "weekYear"), ur("ggggg", "weekYear"), ur("GGGG", "isoWeekYear"), ur("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), X("G", Ei), X("g", Ei), X("GG", Ti, bi), X("gg", Ti, bi), X("GGGG", Ni, ki), X("gggg", Ni, ki), X("GGGGG", Oi, Si), X("ggggg", Oi, Si), ne(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, r) {
            t[r.substr(0, 2)] = V(e)
        })), ne(["gg", "GG"], (function(t, n, r, i) {
            n[i] = e.parseTwoDigitYear(t)
        })), C("Q", 0, "Qo", "quarter"), F("quarter", "Q"), W("quarter", 7), X("Q", wi), te("Q", (function(e, t) {
            t[Ii] = 3 * (V(e) - 1)
        })), C("D", ["DD", 2], "Do", "date"), F("date", "D"), W("date", 9), X("D", Ti), X("DD", Ti, bi), X("Do", (function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        })), te(["D", "DD"], Wi), te("Do", (function(e, t) {
            t[Wi] = V(e.match(Ti)[0])
        }));
        var Ro = z("Date", !0);
        C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), W("dayOfYear", 4), X("DDD", Ci), X("DDDD", xi), te(["DDD", "DDDD"], (function(e, t, n) {
            n._dayOfYear = V(e)
        })), C("m", ["mm", 2], 0, "minute"), F("minute", "m"), W("minute", 14), X("m", Ti), X("mm", Ti, bi), te(["m", "mm"], Ui);
        var Lo = z("Minutes", !1);
        C("s", ["ss", 2], 0, "second"), F("second", "s"), W("second", 15), X("s", Ti), X("ss", Ti, bi), te(["s", "ss"], $i);
        var Fo, Ho, Io = z("Seconds", !1);
        for (C("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100)
            })), C(0, ["SS", 2], 0, (function() {
                return ~~(this.millisecond() / 10)
            })), C(0, ["SSS", 3], 0, "millisecond"), C(0, ["SSSS", 4], 0, (function() {
                return 10 * this.millisecond()
            })), C(0, ["SSSSS", 5], 0, (function() {
                return 100 * this.millisecond()
            })), C(0, ["SSSSSS", 6], 0, (function() {
                return 1e3 * this.millisecond()
            })), C(0, ["SSSSSSS", 7], 0, (function() {
                return 1e4 * this.millisecond()
            })), C(0, ["SSSSSSSS", 8], 0, (function() {
                return 1e5 * this.millisecond()
            })), C(0, ["SSSSSSSSS", 9], 0, (function() {
                return 1e6 * this.millisecond()
            })), F("millisecond", "ms"), W("millisecond", 16), X("S", Ci, wi), X("SS", Ci, bi), X("SSS", Ci, xi), Fo = "SSSS"; Fo.length <= 9; Fo += "S") X(Fo, Ai);
        for (Fo = "S"; Fo.length <= 9; Fo += "S") te(Fo, _r);
        Ho = z("Milliseconds", !1), C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName");
        var Wo = y.prototype;
        Wo.add = No, Wo.calendar = hn, Wo.clone = dn, Wo.diff = wn, Wo.endOf = Rn, Wo.format = Tn, Wo.from = Dn, Wo.fromNow = Mn, Wo.to = Cn, Wo.toNow = Nn, Wo.get = Q, Wo.invalidAt = Vn, Wo.isAfter = pn, Wo.isBefore = mn, Wo.isBetween = gn, Wo.isSame = yn, Wo.isSameOrAfter = vn, Wo.isSameOrBefore = _n, Wo.isValid = Un, Wo.lang = Ao, Wo.locale = On, Wo.localeData = An, Wo.max = ko, Wo.min = xo, Wo.parsingFlags = $n, Wo.set = Z, Wo.startOf = Pn, Wo.subtract = Oo, Wo.toArray = In, Wo.toObject = Wn, Wo.toDate = Hn, Wo.toISOString = kn, Wo.inspect = Sn, "undefined" != typeof Symbol && null != Symbol.for && (Wo[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">"
        }), Wo.toJSON = qn, Wo.toString = xn, Wo.unix = Fn, Wo.valueOf = Ln, Wo.creationData = zn, Wo.eraName = Zn, Wo.eraNarrow = Xn, Wo.eraAbbr = Jn, Wo.eraYear = Kn, Wo.year = Ki, Wo.isLeapYear = ye, Wo.weekYear = lr, Wo.isoWeekYear = cr, Wo.quarter = Wo.quarters = yr, Wo.month = fe, Wo.daysInMonth = he, Wo.week = Wo.weeks = Me, Wo.isoWeek = Wo.isoWeeks = Ce, Wo.weeksInYear = dr, Wo.weeksInWeekYear = pr, Wo.isoWeeksInYear = fr, Wo.isoWeeksInISOWeekYear = hr, Wo.date = Ro, Wo.day = Wo.days = Le, Wo.weekday = Fe, Wo.isoWeekday = He, Wo.dayOfYear = vr, Wo.hour = Wo.hours = lo, Wo.minute = Wo.minutes = Lo, Wo.second = Wo.seconds = Io, Wo.millisecond = Wo.milliseconds = Ho, Wo.utcOffset = qt, Wo.utc = $t, Wo.local = Vt, Wo.parseZone = zt, Wo.hasAlignedHourOffset = Gt, Wo.isDST = Bt, Wo.isLocal = Zt, Wo.isUtcOffset = Xt, Wo.isUtc = Jt, Wo.isUTC = Jt, Wo.zoneAbbr = wr, Wo.zoneName = br, Wo.dates = w("dates accessor is deprecated. Use date instead.", Ro), Wo.months = w("months accessor is deprecated. Use month instead", fe), Wo.years = w("years accessor is deprecated. Use year instead", Ki), Wo.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ut), Wo.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Qt);
        var qo = T.prototype;
        qo.calendar = D, qo.longDateFormat = Y, qo.invalidDate = j, qo.ordinal = P, qo.preparse = Sr, qo.postformat = Sr, qo.relativeTime = R, qo.pastFuture = L, qo.set = k, qo.eras = Gn, qo.erasParse = Bn, qo.erasConvertYear = Qn, qo.erasAbbrRegex = tr, qo.erasNameRegex = er, qo.erasNarrowRegex = nr, qo.months = se, qo.monthsShort = ae, qo.monthsParse = le, qo.monthsRegex = pe, qo.monthsShortRegex = de, qo.week = Se, qo.firstDayOfYear = De, qo.firstDayOfWeek = Te, qo.weekdays = Ee, qo.weekdaysMin = je, qo.weekdaysShort = Ye, qo.weekdaysParse = Re, qo.weekdaysRegex = Ie, qo.weekdaysShortRegex = We, qo.weekdaysMinRegex = qe, qo.isPM = Be, qo.meridiem = Qe, tt("en", {
            eras: [{
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC"
            }],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === V(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), e.lang = w("moment.lang is deprecated. Use moment.locale instead.", tt), e.langData = w("moment.langData is deprecated. Use moment.localeData instead.", it);
        var Uo = Math.abs,
            $o = Ur("ms"),
            Vo = Ur("s"),
            zo = Ur("m"),
            Go = Ur("h"),
            Bo = Ur("d"),
            Qo = Ur("w"),
            Zo = Ur("M"),
            Xo = Ur("Q"),
            Jo = Ur("y"),
            Ko = zr("milliseconds"),
            es = zr("seconds"),
            ts = zr("minutes"),
            ns = zr("hours"),
            rs = zr("days"),
            is = zr("months"),
            os = zr("years"),
            ss = Math.round,
            as = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                w: null,
                M: 11
            },
            us = Math.abs,
            ls = jt.prototype;
        return ls.isValid = Et, ls.abs = Yr, ls.add = Pr, ls.subtract = Rr, ls.as = Wr, ls.asMilliseconds = $o, ls.asSeconds = Vo, ls.asMinutes = zo, ls.asHours = Go, ls.asDays = Bo, ls.asWeeks = Qo, ls.asMonths = Zo, ls.asQuarters = Xo, ls.asYears = Jo, ls.valueOf = qr, ls._bubble = Fr, ls.clone = $r, ls.get = Vr, ls.milliseconds = Ko, ls.seconds = es, ls.minutes = ts, ls.hours = ns, ls.days = rs, ls.weeks = Gr, ls.months = is, ls.years = os, ls.humanize = Jr, ls.toISOString = ei, ls.toString = ei, ls.toJSON = ei, ls.locale = On, ls.localeData = An, ls.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ei), ls.lang = Ao, C("X", 0, 0, "unix"), C("x", 0, 0, "valueOf"), X("x", Ei), X("X", Pi), te("X", (function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e))
        })), te("x", (function(e, t, n) {
            n._d = new Date(V(e))
        })), e.version = "2.29.4", t(Mt), e.fn = Wo, e.min = Nt, e.max = Ot, e.now = So, e.utc = f, e.unix = xr, e.months = Cr, e.isDate = u, e.locale = tt, e.invalid = m, e.duration = Kt, e.isMoment = v, e.weekdays = Or, e.parseZone = kr, e.localeData = it, e.isDuration = Pt, e.monthsShort = Nr, e.weekdaysMin = Er, e.defineLocale = nt, e.updateLocale = rt, e.locales = ot, e.weekdaysShort = Ar, e.normalizeUnits = H, e.relativeTimeRounding = Zr, e.relativeTimeThreshold = Xr, e.calendarFormat = fn, e.prototype = Wo, e.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        }, e
    })),
    function() {
        window.ga && ga((function(e) {
            var t;
            try {
                (t = e.get("clientId")) && ga("set", "dimension18", t)
            } catch (e) {
                e
            }
        })), Market.Helpers.GoogleAnalytics = {
            logPageView: function(e) {
                var t, n, r, i, o, s, a, u, l;
                if (i = (o = null != e ? e : {}).page, l = o.title, window.ga && window._envGaTrackerNames) {
                    for (t = _.omit({
                            hitType: "pageview",
                            page: null != i ? i : i = this.relativePath(),
                            title: null != l ? l : l = null
                        }, (function(e) {
                            return _.isNull(e)
                        })), a = [], n = 0, r = (s = window._envGaTrackerNames).length; n < r; n++) u = s[n], a.push(ga(u + ".send", t));
                    return a
                }
            },
            sendEvent: function(e, t, n, r) {
                var i, o, s, a, u, l, c, f, h, d, p, m;
                if (u = (f = null != r ? r : {}).label, m = f.value, s = f.hitCallback, c = f.nonInteraction, o = f.dimension11, window.ga && window._envGaTrackerNames) {
                    for (i = _.omit({
                            hitType: e,
                            eventCategory: t,
                            eventAction: n,
                            eventLabel: null != u ? u : u = null,
                            eventValue: null != m ? m : m = null,
                            hitCallback: null != s ? s : s = null,
                            nonInteraction: null != c ? c : c = null,
                            dimension11: null != o ? o : o = null
                        }, (function(e) {
                            return _.isNull(e)
                        })), d = [], a = 0, l = (h = window._envGaTrackerNames).length; a < l; a++) p = h[a], d.push(ga(p + ".send", i));
                    return d
                }
            },
            addProducts: function(e) {
                var t, n, r, i, o, s;
                if (window.ga && window._envGaTrackerNames) {
                    for (o = [], t = 0, n = (i = window._envGaTrackerNames).length; t < n; t++) s = i[t], o.push(function() {
                        var t, n, i, o;
                        for (o = [], t = 0, n = (i = e.productsArray).length; t < n; t++) r = i[t], o.push(ga(s + ".ec:addProduct", r));
                        return o
                    }());
                    return o
                }
            },
            addImpressions: function(e) {
                var t, n, r, i, o, s, a;
                if (window.ga && window._envGaTrackerNames) {
                    for (s = [], t = 0, n = (o = window._envGaTrackerNames).length; t < n; t++) a = o[t], s.push(function() {
                        var t, n, o;
                        for (o = [], t = 0, n = e.length; t < n; t++) r = e[t], o.push(function() {
                            var e, t, n, o;
                            for (o = [], e = 0, t = (n = r.productsArray).length; e < t; e++) i = n[e], o.push(ga(a + ".ec:addImpression", i));
                            return o
                        }());
                        return o
                    }());
                    return s
                }
            },
            addPromo: function(e) {
                var t, n, r, i, o;
                if (window.ga && window._envGaTrackerNames) {
                    for (i = [], t = 0, n = (r = window._envGaTrackerNames).length; t < n; t++) o = r[t], i.push(ga(o + ".ec:addPromo", e));
                    return i
                }
            },
            set: function(e, t) {
                var n, r, i, o, s;
                if (window.ga && window._envGaTrackerNames) {
                    for (o = [], n = 0, r = (i = window._envGaTrackerNames).length; n < r; n++) s = i[n], o.push(ga(s + ".set", e, t));
                    return o
                }
            },
            setAction: function(e, t) {
                var n, r, i, o, s;
                if (window.ga && window._envGaTrackerNames) {
                    for (o = [], n = 0, r = (i = window._envGaTrackerNames).length; n < r; n++) s = i[n], null != t ? o.push(ga(s + ".ec:setAction", e, t)) : o.push(ga(s + ".ec:setAction", e));
                    return o
                }
            },
            storeGaClientId: function() {
                if (window.ga) return ga((function(e) {
                    $.cookie("__ga_client_id", e.get("clientId"), {
                        path: "/",
                        expires: 60
                    })
                }))
            },
            relativePath: function() {
                return document.location.pathname + document.location.search
            },
            isEventStale: function(e) {
                var t;
                return e = moment.unix(e), t = moment(new Date).utc(), moment.duration(e.diff(t)).asMinutes() > 10
            },
            getLinker: function() {
                return ga.getByName("m").get("linkerParam")
            }
        }
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Views.CtaHeader = function() {
            function t(t) {
                var n;
                this.handleBuyNow = e(this.handleBuyNow, this), this.handleLogo = e(this.handleLogo, this), this.handleOnLoad = e(this.handleOnLoad, this), this.itemId = t.data().itemId, t.find(".header-envato_market").on("click", this.handleLogo), t.find(".header-buy-now").on("click", this.handleBuyNow), t.on("click", ".js-track-on-click", (n = this, function(e) {
                    return n.target = $(e.currentTarget), n.experimentId = n.target.data().experimentId, n.gaVariantId = n.target.data().gaVariantId, Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "click", {
                        label: n.experimentId,
                        value: n.gaVariantId,
                        nonInteraction: !0
                    })
                })), $(function(e) {
                    return function() {
                        return e.handleOnLoad()
                    }
                }(this))
            }
            return t.prototype.handleOnLoad = function() {
                return Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "impression", {
                    label: this.itemId.toString(),
                    nonInteraction: !0
                })
            }, t.prototype.handleLogo = function() {
                return Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "click;button", {
                    label: "envatomarket"
                })
            }, t.prototype.handleBuyNow = function() {
                var e;
                return e = $(event.target).text().toLowerCase(), Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "click;button", {
                    label: e
                })
            }, t
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Views.FullScreenPreview = function() {
            function t(t) {
                this.addHackyFix = e(this.addHackyFix, this), this.hasMobileSafariIFrameBug = e(this.hasMobileSafariIFrameBug, this), this.fixResponsivenessForMobileSafari = e(this.fixResponsivenessForMobileSafari, this), this.$el = t, t.load(this.fixResponsivenessForMobileSafari)
            }
            return t.prototype.fixResponsivenessForMobileSafari = function() {
                if (this.hasMobileSafariIFrameBug()) return this.addHackyFix()
            }, t.prototype.hasMobileSafariIFrameBug = function() {
                return this.$el.width() !== $("body").width()
            }, t.prototype.addHackyFix = function() {
                return this.$el.attr("scrolling", "no").addClass("-ios-fix")
            }, t
        }()
    }.call(this), window.addEventListener("CookiebotOnDialogDisplay", (function(e) {
        const t = e.srcElement.CookieConsentDialog.DOM;
        new MutationObserver((function(e) {
            e.forEach((function() {
                t.style.transform.match(t.style.top) || (t.style.setProperty("transform", "translateY(" + t.style.top + ")"), t.style.setProperty("opacity", "1", "important"))
            }))
        })).observe(t, {
            attributes: !0,
            attributeFilter: ["style"]
        })
    }));