!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react-dom"), require("antd"), require("react"), require("axios")) : "function" == typeof define && define.amd ? define(["react-dom", "antd", "react", "axios"], t) : "object" == typeof exports ? exports.preview = t(require("react-dom"), require("antd"), require("react"), require("axios")) : e.preview = t(e.ReactDOM, e.antd, e.React, e.axios)
}(self, ((__WEBPACK_EXTERNAL_MODULE__4318__,__WEBPACK_EXTERNAL_MODULE__2721__,__WEBPACK_EXTERNAL_MODULE__359__,__WEBPACK_EXTERNAL_MODULE__3300__)=>(()=>{
    var __webpack_modules__ = {
        4684: function(module, __unused_webpack_exports, __webpack_require__) {
            var t;
            t = (__WEBPACK_EXTERNAL_MODULE__8156__,__WEBPACK_EXTERNAL_MODULE__7111__,__WEBPACK_EXTERNAL_MODULE__2721__)=>(()=>{
                var __webpack_modules__ = {
                    1194: function(e, t, n) {
                        var r;
                        r = e=>(()=>{
                            "use strict";
                            var t = {
                                252: (e,t,n)=>{
                                    n.d(t, {
                                        Z: ()=>w
                                    });
                                    var r = n(359)
                                      , o = n.n(r)
                                      , a = n(62)
                                      , i = n(603)
                                      , l = n(95)
                                      , c = n(631)
                                      , s = n(905);
                                    function u(e) {
                                        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                            return typeof e
                                        }
                                        : function(e) {
                                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                        }
                                        ,
                                        u(e)
                                    }
                                    function d() {
                                        d = function() {
                                            return e
                                        }
                                        ;
                                        var e = {}
                                          , t = Object.prototype
                                          , n = t.hasOwnProperty
                                          , r = "function" == typeof Symbol ? Symbol : {}
                                          , o = r.iterator || "@@iterator"
                                          , a = r.asyncIterator || "@@asyncIterator"
                                          , i = r.toStringTag || "@@toStringTag";
                                        function l(e, t, n) {
                                            return Object.defineProperty(e, t, {
                                                value: n,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }),
                                            e[t]
                                        }
                                        try {
                                            l({}, "")
                                        } catch (e) {
                                            l = function(e, t, n) {
                                                return e[t] = n
                                            }
                                        }
                                        function c(e, t, n, r) {
                                            var o = t && t.prototype instanceof f ? t : f
                                              , a = Object.create(o.prototype)
                                              , i = new j(r || []);
                                            return a._invoke = function(e, t, n) {
                                                var r = "suspendedStart";
                                                return function(o, a) {
                                                    if ("executing" === r)
                                                        throw new Error("Generator is already running");
                                                    if ("completed" === r) {
                                                        if ("throw" === o)
                                                            throw a;
                                                        return {
                                                            value: void 0,
                                                            done: !0
                                                        }
                                                    }
                                                    for (n.method = o,
                                                    n.arg = a; ; ) {
                                                        var i = n.delegate;
                                                        if (i) {
                                                            var l = E(i, n);
                                                            if (l) {
                                                                if (l === p)
                                                                    continue;
                                                                return l
                                                            }
                                                        }
                                                        if ("next" === n.method)
                                                            n.sent = n._sent = n.arg;
                                                        else if ("throw" === n.method) {
                                                            if ("suspendedStart" === r)
                                                                throw r = "completed",
                                                                n.arg;
                                                            n.dispatchException(n.arg)
                                                        } else
                                                            "return" === n.method && n.abrupt("return", n.arg);
                                                        r = "executing";
                                                        var c = s(e, t, n);
                                                        if ("normal" === c.type) {
                                                            if (r = n.done ? "completed" : "suspendedYield",
                                                            c.arg === p)
                                                                continue;
                                                            return {
                                                                value: c.arg,
                                                                done: n.done
                                                            }
                                                        }
                                                        "throw" === c.type && (r = "completed",
                                                        n.method = "throw",
                                                        n.arg = c.arg)
                                                    }
                                                }
                                            }(e, n, i),
                                            a
                                        }
                                        function s(e, t, n) {
                                            try {
                                                return {
                                                    type: "normal",
                                                    arg: e.call(t, n)
                                                }
                                            } catch (e) {
                                                return {
                                                    type: "throw",
                                                    arg: e
                                                }
                                            }
                                        }
                                        e.wrap = c;
                                        var p = {};
                                        function f() {}
                                        function m() {}
                                        function h() {}
                                        var g = {};
                                        l(g, o, (function() {
                                            return this
                                        }
                                        ));
                                        var y = Object.getPrototypeOf
                                          , v = y && y(y(O([])));
                                        v && v !== t && n.call(v, o) && (g = v);
                                        var b = h.prototype = f.prototype = Object.create(g);
                                        function w(e) {
                                            ["next", "throw", "return"].forEach((function(t) {
                                                l(e, t, (function(e) {
                                                    return this._invoke(t, e)
                                                }
                                                ))
                                            }
                                            ))
                                        }
                                        function x(e, t) {
                                            function r(o, a, i, l) {
                                                var c = s(e[o], e, a);
                                                if ("throw" !== c.type) {
                                                    var d = c.arg
                                                      , p = d.value;
                                                    return p && "object" == u(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                        r("next", e, i, l)
                                                    }
                                                    ), (function(e) {
                                                        r("throw", e, i, l)
                                                    }
                                                    )) : t.resolve(p).then((function(e) {
                                                        d.value = e,
                                                        i(d)
                                                    }
                                                    ), (function(e) {
                                                        return r("throw", e, i, l)
                                                    }
                                                    ))
                                                }
                                                l(c.arg)
                                            }
                                            var o;
                                            this._invoke = function(e, n) {
                                                function a() {
                                                    return new t((function(t, o) {
                                                        r(e, n, t, o)
                                                    }
                                                    ))
                                                }
                                                return o = o ? o.then(a, a) : a()
                                            }
                                        }
                                        function E(e, t) {
                                            var n = e.iterator[t.method];
                                            if (void 0 === n) {
                                                if (t.delegate = null,
                                                "throw" === t.method) {
                                                    if (e.iterator.return && (t.method = "return",
                                                    t.arg = void 0,
                                                    E(e, t),
                                                    "throw" === t.method))
                                                        return p;
                                                    t.method = "throw",
                                                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                                }
                                                return p
                                            }
                                            var r = s(n, e.iterator, t.arg);
                                            if ("throw" === r.type)
                                                return t.method = "throw",
                                                t.arg = r.arg,
                                                t.delegate = null,
                                                p;
                                            var o = r.arg;
                                            return o ? o.done ? (t[e.resultName] = o.value,
                                            t.next = e.nextLoc,
                                            "return" !== t.method && (t.method = "next",
                                            t.arg = void 0),
                                            t.delegate = null,
                                            p) : o : (t.method = "throw",
                                            t.arg = new TypeError("iterator result is not an object"),
                                            t.delegate = null,
                                            p)
                                        }
                                        function _(e) {
                                            var t = {
                                                tryLoc: e[0]
                                            };
                                            1 in e && (t.catchLoc = e[1]),
                                            2 in e && (t.finallyLoc = e[2],
                                            t.afterLoc = e[3]),
                                            this.tryEntries.push(t)
                                        }
                                        function S(e) {
                                            var t = e.completion || {};
                                            t.type = "normal",
                                            delete t.arg,
                                            e.completion = t
                                        }
                                        function j(e) {
                                            this.tryEntries = [{
                                                tryLoc: "root"
                                            }],
                                            e.forEach(_, this),
                                            this.reset(!0)
                                        }
                                        function O(e) {
                                            if (e) {
                                                var t = e[o];
                                                if (t)
                                                    return t.call(e);
                                                if ("function" == typeof e.next)
                                                    return e;
                                                if (!isNaN(e.length)) {
                                                    var r = -1
                                                      , a = function t() {
                                                        for (; ++r < e.length; )
                                                            if (n.call(e, r))
                                                                return t.value = e[r],
                                                                t.done = !1,
                                                                t;
                                                        return t.value = void 0,
                                                        t.done = !0,
                                                        t
                                                    };
                                                    return a.next = a
                                                }
                                            }
                                            return {
                                                next: Z
                                            }
                                        }
                                        function Z() {
                                            return {
                                                value: void 0,
                                                done: !0
                                            }
                                        }
                                        return m.prototype = h,
                                        l(b, "constructor", h),
                                        l(h, "constructor", m),
                                        m.displayName = l(h, i, "GeneratorFunction"),
                                        e.isGeneratorFunction = function(e) {
                                            var t = "function" == typeof e && e.constructor;
                                            return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                                        }
                                        ,
                                        e.mark = function(e) {
                                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h,
                                            l(e, i, "GeneratorFunction")),
                                            e.prototype = Object.create(b),
                                            e
                                        }
                                        ,
                                        e.awrap = function(e) {
                                            return {
                                                __await: e
                                            }
                                        }
                                        ,
                                        w(x.prototype),
                                        l(x.prototype, a, (function() {
                                            return this
                                        }
                                        )),
                                        e.AsyncIterator = x,
                                        e.async = function(t, n, r, o, a) {
                                            void 0 === a && (a = Promise);
                                            var i = new x(c(t, n, r, o),a);
                                            return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                                                return e.done ? e.value : i.next()
                                            }
                                            ))
                                        }
                                        ,
                                        w(b),
                                        l(b, i, "Generator"),
                                        l(b, o, (function() {
                                            return this
                                        }
                                        )),
                                        l(b, "toString", (function() {
                                            return "[object Generator]"
                                        }
                                        )),
                                        e.keys = function(e) {
                                            var t = [];
                                            for (var n in e)
                                                t.push(n);
                                            return t.reverse(),
                                            function n() {
                                                for (; t.length; ) {
                                                    var r = t.pop();
                                                    if (r in e)
                                                        return n.value = r,
                                                        n.done = !1,
                                                        n
                                                }
                                                return n.done = !0,
                                                n
                                            }
                                        }
                                        ,
                                        e.values = O,
                                        j.prototype = {
                                            constructor: j,
                                            reset: function(e) {
                                                if (this.prev = 0,
                                                this.next = 0,
                                                this.sent = this._sent = void 0,
                                                this.done = !1,
                                                this.delegate = null,
                                                this.method = "next",
                                                this.arg = void 0,
                                                this.tryEntries.forEach(S),
                                                !e)
                                                    for (var t in this)
                                                        "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                                            },
                                            stop: function() {
                                                this.done = !0;
                                                var e = this.tryEntries[0].completion;
                                                if ("throw" === e.type)
                                                    throw e.arg;
                                                return this.rval
                                            },
                                            dispatchException: function(e) {
                                                if (this.done)
                                                    throw e;
                                                var t = this;
                                                function r(n, r) {
                                                    return i.type = "throw",
                                                    i.arg = e,
                                                    t.next = n,
                                                    r && (t.method = "next",
                                                    t.arg = void 0),
                                                    !!r
                                                }
                                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                                    var a = this.tryEntries[o]
                                                      , i = a.completion;
                                                    if ("root" === a.tryLoc)
                                                        return r("end");
                                                    if (a.tryLoc <= this.prev) {
                                                        var l = n.call(a, "catchLoc")
                                                          , c = n.call(a, "finallyLoc");
                                                        if (l && c) {
                                                            if (this.prev < a.catchLoc)
                                                                return r(a.catchLoc, !0);
                                                            if (this.prev < a.finallyLoc)
                                                                return r(a.finallyLoc)
                                                        } else if (l) {
                                                            if (this.prev < a.catchLoc)
                                                                return r(a.catchLoc, !0)
                                                        } else {
                                                            if (!c)
                                                                throw new Error("try statement without catch or finally");
                                                            if (this.prev < a.finallyLoc)
                                                                return r(a.finallyLoc)
                                                        }
                                                    }
                                                }
                                            },
                                            abrupt: function(e, t) {
                                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                                    var o = this.tryEntries[r];
                                                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                                        var a = o;
                                                        break
                                                    }
                                                }
                                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                                var i = a ? a.completion : {};
                                                return i.type = e,
                                                i.arg = t,
                                                a ? (this.method = "next",
                                                this.next = a.finallyLoc,
                                                p) : this.complete(i)
                                            },
                                            complete: function(e, t) {
                                                if ("throw" === e.type)
                                                    throw e.arg;
                                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                                this.method = "return",
                                                this.next = "end") : "normal" === e.type && t && (this.next = t),
                                                p
                                            },
                                            finish: function(e) {
                                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                                    var n = this.tryEntries[t];
                                                    if (n.finallyLoc === e)
                                                        return this.complete(n.completion, n.afterLoc),
                                                        S(n),
                                                        p
                                                }
                                            },
                                            catch: function(e) {
                                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                                    var n = this.tryEntries[t];
                                                    if (n.tryLoc === e) {
                                                        var r = n.completion;
                                                        if ("throw" === r.type) {
                                                            var o = r.arg;
                                                            S(n)
                                                        }
                                                        return o
                                                    }
                                                }
                                                throw new Error("illegal catch attempt")
                                            },
                                            delegateYield: function(e, t, n) {
                                                return this.delegate = {
                                                    iterator: O(e),
                                                    resultName: t,
                                                    nextLoc: n
                                                },
                                                "next" === this.method && (this.arg = void 0),
                                                p
                                            }
                                        },
                                        e
                                    }
                                    function p(e, t, n, r, o, a, i) {
                                        try {
                                            var l = e[a](i)
                                              , c = l.value
                                        } catch (e) {
                                            return void n(e)
                                        }
                                        l.done ? t(c) : Promise.resolve(c).then(r, o)
                                    }
                                    function f(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t && (r = r.filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                                            }
                                            ))),
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    }
                                    function m(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? f(Object(n), !0).forEach((function(t) {
                                                h(e, t, n[t])
                                            }
                                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            }
                                            ))
                                        }
                                        return e
                                    }
                                    function h(e, t, n) {
                                        return t in e ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = n,
                                        e
                                    }
                                    function g(e, t) {
                                        (null == t || t > e.length) && (t = e.length);
                                        for (var n = 0, r = new Array(t); n < t; n++)
                                            r[n] = e[n];
                                        return r
                                    }
                                    var y = {
                                        automaticLayout: !0,
                                        detectIndentation: !1,
                                        formatOnType: !1,
                                        lineNumbers: "on",
                                        minimap: {
                                            enabled: !1
                                        },
                                        scrollbar: {
                                            horizontalScrollbarSize: 0,
                                            verticalScrollbarSize: 2
                                        },
                                        value: "",
                                        language: "javascript",
                                        theme: "light",
                                        tabSize: 2,
                                        readOnly: !1,
                                        autoSave: !0,
                                        width: "100%",
                                        height: 200,
                                        lineNumbersMinChars: 3,
                                        lineDecorationsWidth: 0,
                                        useExtraLib: !0,
                                        extraLib: ""
                                    }
                                      , v = function(e, t) {
                                        return e.fnParams ? "".concat(l.Y7).concat(t, "}") : t
                                    }
                                      , b = function(e, t) {
                                        return e.fnParams ? t.replace("".concat(l.Y7, "\n"), "").slice(0, -3) : /export\s+default.*function.*\(/g.test(t) ? t : t.slice(0, -2)
                                    };
                                    const w = function(e) {
                                        var t, n = function(e) {
                                            if (Array.isArray(e))
                                                return e
                                        }(t = (0,
                                        r.useState)(!1)) || function(e, t) {
                                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != n) {
                                                var r, o, a = [], i = !0, l = !1;
                                                try {
                                                    for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value),
                                                    2 !== a.length); i = !0)
                                                        ;
                                                } catch (e) {
                                                    l = !0,
                                                    o = e
                                                } finally {
                                                    try {
                                                        i || null == n.return || n.return()
                                                    } finally {
                                                        if (l)
                                                            throw o
                                                    }
                                                }
                                                return a
                                            }
                                        }(t) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e)
                                                    return g(e, 2);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, 2) : void 0
                                            }
                                        }(t) || function() {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(), u = n[0], f = n[1], h = (0,
                                        r.useRef)(), w = (0,
                                        r.useRef)(), x = (0,
                                        r.useRef)(), E = (0,
                                        r.useRef)(), _ = (0,
                                        r.useRef)(), S = (0,
                                        r.useRef)(), j = (0,
                                        r.useRef)(), O = (0,
                                        r.useRef)(), Z = m(m(m({}, y), e), {}, {
                                            suggestions: void 0
                                        }), k = Z.suggestions, A = void 0 === k ? {} : k, C = Z.extraLib, N = void 0 === C ? "" : C, P = Z.useExtraLib, R = Z.schema, L = (0,
                                        r.useCallback)(function() {
                                            var e, t = (e = d().mark((function e(t) {
                                                var n, r;
                                                return d().wrap((function(e) {
                                                    for (; ; )
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                            (0,
                                                            i.aW)(l.wN.standalone, "prettier");
                                                        case 2:
                                                            return n = e.sent,
                                                            e.next = 5,
                                                            (0,
                                                            i.aW)(l.wN.babel);
                                                        case 5:
                                                            return r = n.format(v(Z, t.getValue()), {
                                                                parser: "babel",
                                                                plugins: window.prettierPlugins,
                                                                singleQuote: !0
                                                            }),
                                                            e.abrupt("return", [{
                                                                range: t.getFullModelRange(),
                                                                text: b(Z, r)
                                                            }]);
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e)
                                            }
                                            )),
                                            function() {
                                                var t = this
                                                  , n = arguments;
                                                return new Promise((function(r, o) {
                                                    var a = e.apply(t, n);
                                                    function i(e) {
                                                        p(a, r, o, i, l, "next", e)
                                                    }
                                                    function l(e) {
                                                        p(a, r, o, i, l, "throw", e)
                                                    }
                                                    i(void 0)
                                                }
                                                ))
                                            }
                                            );
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }(), []), T = (0,
                                        r.useCallback)((function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "javascript"
                                              , n = arguments.length > 2 ? arguments[2] : void 0
                                              , r = arguments.length > 3 ? arguments[3] : void 0
                                              , o = e.languages.registerCompletionItemProvider(t, {
                                                triggerCharacters: ["."],
                                                provideCompletionItems: function(t, o, a) {
                                                    var i = new e.Range(o.lineNumber,o.column - 26,o.lineNumber,o.column)
                                                      , l = t.getValueInRange(i)
                                                      , c = [];
                                                    if ("." === a.triggerCharacter) {
                                                        var s = Object.keys(n);
                                                        r && s.forEach((function(e) {
                                                            new RegExp("".concat(e, "\\[\\d+\\]")).test(l.slice(0, -1)) && n[e].forEach((function(e) {
                                                                c.push({
                                                                    label: e.label,
                                                                    insertText: e.value || e.label,
                                                                    kind: e.kind || 0,
                                                                    detail: e.detail
                                                                })
                                                            }
                                                            ))
                                                        }
                                                        )),
                                                        s.forEach((function(e) {
                                                            l.slice(0, -1).endsWith(e) && n[e].forEach((function(e) {
                                                                c.push({
                                                                    label: e.label,
                                                                    insertText: e.value || e.label,
                                                                    kind: e.kind || 0,
                                                                    detail: e.detail
                                                                })
                                                            }
                                                            ))
                                                        }
                                                        ))
                                                    }
                                                    return {
                                                        suggestions: c
                                                    }
                                                }
                                            });
                                            return o
                                        }
                                        ), []), I = (0,
                                        r.useCallback)((function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "javascript";
                                            e.languages.registerCompletionItemProvider(t, {
                                                triggerCharacters: ["."],
                                                provideCompletionItems: function(t, n, r) {
                                                    var o = new e.Range(n.lineNumber,n.column - 26,n.lineNumber,n.column)
                                                      , a = t.getValueInRange(o)
                                                      , i = [];
                                                    return l.c1.forEach((function(e) {
                                                        a.slice(0, -1).endsWith(e) && c.Z[e].forEach((function(e) {
                                                            i.push({
                                                                label: e.label,
                                                                insertText: e.value || e.label,
                                                                kind: e.kind,
                                                                detail: e.detail
                                                            })
                                                        }
                                                        ))
                                                    }
                                                    )),
                                                    {
                                                        suggestions: i
                                                    }
                                                }
                                            })
                                        }
                                        ), [A]), U = (0,
                                        r.useCallback)((function(e) {
                                            e.languages.registerDocumentFormattingEditProvider("javascript", {
                                                provideDocumentFormattingEdits: L
                                            })
                                        }
                                        ), []), z = ((0,
                                        r.useCallback)((function(e) {
                                            e.languages.registerOnTypeFormattingEditProvider("javascript", {
                                                provideOnTypeFormattingEdits: L
                                            })
                                        }
                                        ), []),
                                        (0,
                                        r.useCallback)((function() {
                                            var t = w.current.editor.create(h.current, Z);
                                            x.current = t,
                                            e.onMounted && e.onMounted(t, w.current, h.current),
                                            f(!0)
                                        }
                                        ), [])), M = (0,
                                        r.useCallback)((function(e) {
                                            e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                                                noSemanticValidation: !0,
                                                noSyntaxValidation: !1
                                            }),
                                            e.languages.typescript.javascriptDefaults.setCompilerOptions({
                                                target: e.languages.typescript.ScriptTarget.ES6,
                                                allowNonTsExtensions: !0,
                                                noImplicitAny: !0,
                                                strict: !0
                                            }),
                                            N || I(e),
                                            U(e),
                                            queueMicrotask((function() {
                                                (0,
                                                i.aW)(l.wN.standalone, "prettier"),
                                                (0,
                                                i.aW)(l.wN.babel)
                                            }
                                            )),
                                            N && (_.current = e.languages.typescript.javascriptDefaults.addExtraLib(N, "ts:filename/facts.d.ts"))
                                        }
                                        ), []);
                                        (0,
                                        r.useEffect)((function() {
                                            var t = a.S(e.env, M);
                                            return t.then((function(e) {
                                                var t = e.monaco
                                                  , n = e.define;
                                                (0,
                                                i.aW)(l.Cb, "eslint").then((function(e) {
                                                    S.current = new e.Linter
                                                }
                                                )),
                                                w.current = t,
                                                window.define = n,
                                                (0,
                                                i.cM)("define.amd:", n.amd),
                                                z()
                                            }
                                            )).catch((function() {}
                                            )),
                                            function() {
                                                x.current ? x.current.dispose() : t.cancel()
                                            }
                                        }
                                        ), []);
                                        var V = (0,
                                        r.useCallback)((function(t, n) {
                                            e.onChange && e.onChange(t, n)
                                        }
                                        ), []);
                                        return (0,
                                        r.useEffect)((function() {
                                            x.current && x.current.getValue() !== e.value && x.current.setValue(e.value)
                                        }
                                        ), [e.value]),
                                        (0,
                                        r.useEffect)((function() {
                                            if (u) {
                                                var e = x.current
                                                  , t = w.current
                                                  , n = e.getModel();
                                                e.addCommand(t.KeyMod.CtrlCmd | t.KeyCode.KeyS, (function() {
                                                    V(e.getValue(), null)
                                                }
                                                ));
                                                var r = e.onDidChangeModelContent((function(r) {
                                                    if ("javascript" === Z.language) {
                                                        var o = S.current.verify(e.getValue(), m({
                                                            env: {
                                                                browser: !0,
                                                                es6: !0
                                                            },
                                                            parserOptions: {
                                                                ecmaVersion: 2018,
                                                                sourceType: "module"
                                                            }
                                                        }, Z.eslint)).map((function(e) {
                                                            var t = e.line
                                                              , n = e.column
                                                              , r = e.message;
                                                            return {
                                                                startLineNumber: t,
                                                                endLineNumber: t,
                                                                startColumn: n,
                                                                endColumn: n,
                                                                message: "".concat(r),
                                                                severity: 3
                                                            }
                                                        }
                                                        ));
                                                        t.editor.setModelMarkers(n, "ESlint", o)
                                                    }
                                                    Z.autoSave && V(e.getValue(), r)
                                                }
                                                ));
                                                return function() {
                                                    var t;
                                                    r.dispose(),
                                                    e.dispose(),
                                                    null === (t = E.current) || void 0 === t || t.dispose()
                                                }
                                            }
                                        }
                                        ), [u]),
                                        (0,
                                        r.useEffect)((function() {
                                            var e;
                                            if (u && R) {
                                                if ("object" === R.type) {
                                                    var t = {};
                                                    !function e(t) {
                                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inputValue"
                                                          , r = arguments.length > 2 ? arguments[2] : void 0;
                                                        if (t) {
                                                            var o = t.properties;
                                                            o && Object.keys(o).forEach((function(t) {
                                                                r[n] = r[n] || [],
                                                                r[n].push({
                                                                    label: t,
                                                                    value: t,
                                                                    detail: o[t].title
                                                                }),
                                                                e(o[t], "".concat(n, ".").concat(t), r)
                                                            }
                                                            ))
                                                        }
                                                    }(R, void 0, t);
                                                    var n = T(w.current, "javascript", t);
                                                    j.current = n
                                                } else if (R.type = "object" === (null === (e = R.items) || void 0 === e ? void 0 : e.type)) {
                                                    var r = {}
                                                      , o = R.items.properties;
                                                    r.inputValue = Object.keys(o).map((function(e) {
                                                        return {
                                                            label: e,
                                                            value: e,
                                                            detail: o[e].title
                                                        }
                                                    }
                                                    ));
                                                    var a = T(w.current, "javascript", r, !0);
                                                    j.current = a
                                                }
                                                return function() {
                                                    var e;
                                                    null === (e = j.current) || void 0 === e || e.dispose()
                                                }
                                            }
                                        }
                                        ), []),
                                        (0,
                                        r.useEffect)((function() {
                                            if (u && Object.keys(A).length) {
                                                var e = T(w.current, "javascript", A);
                                                return O.current = e,
                                                function() {
                                                    var e;
                                                    null === (e = O.current) || void 0 === e || e.dispose()
                                                }
                                            }
                                        }
                                        ), [u, A]),
                                        (0,
                                        r.useEffect)((function() {
                                            var e;
                                            u && P && (null === (e = _.current) || void 0 === e || e.dispose(),
                                            _.current = w.current.languages.typescript.javascriptDefaults.addExtraLib("".concat(N, "\n").concat(null != A && A.context ? "" : s.O), "ts:filename/facts.d.ts"))
                                        }
                                        ), [u, N, R]),
                                        (0,
                                        i.cM)("[monaco editor] props:", e),
                                        o().createElement("div", {
                                            ref: h,
                                            className: Z.className,
                                            onBlur: e.onBlur,
                                            onFocus: e.onFocus,
                                            style: {
                                                width: Z.width,
                                                height: Z.height,
                                                minHeight: Z.minHeight
                                            }
                                        })
                                    }
                                }
                                ,
                                905: (e,t,n)=>{
                                    n.d(t, {
                                        O: ()=>r
                                    });
                                    var r = "\ndeclare var context: {\n  /** \n* 获取地址栏query参数\n */\n  static getQuery(): {[key]: string};\n  /** \n* 获取主应用透传的用户信息\n */\n  static getUserInfo(): {[key]: string};\n  /** \n* 权限校验方法\n */\n  static hasPermission(): boolean;\n  /** \n* 通用工具方法\n */\n  static utils: {\n    /** \n* 获取地址栏参数 */\n    static getParams(): {[key]: string};\n    /** \n* 获取cookie */\n    static getCookies(): {[key]: string};\n    /** \n* 将时间进行格式化 */\n    static moment(params?: any): any;\n    [key: string]: any;\n  }\n}\n"
                                }
                                ,
                                62: (e,t,n)=>{
                                    n.d(t, {
                                        S: ()=>s
                                    });
                                    var r, o = n(95), a = n(603);
                                    !function(e) {
                                        e[e.CANCEL = 0] = "CANCEL",
                                        e[e.CONTINUE = 1] = "CONTINUE"
                                    }(r || (r = {}));
                                    var i = {
                                        isInitialized: !1
                                    }
                                      , l = new Promise((function(e) {
                                        i.resolve = e
                                    }
                                    ));
                                    function c(e) {
                                        var t = r.CONTINUE
                                          , n = new Promise((function(n, o) {
                                            e.then((function(e) {
                                                return t === r.CANCEL ? o("cancel load") : n(e)
                                            }
                                            ))
                                        }
                                        ));
                                        return n.cancel = function() {
                                            t = r.CANCEL
                                        }
                                        ,
                                        n
                                    }
                                    function s(e, t) {
                                        if (!i.isInitialized) {
                                            if (window.monaco && window.monaco.editor)
                                                return c(Promise.resolve({
                                                    monaco: window.monaco,
                                                    define: i.define || window.define
                                                }));
                                            window["_monaco-env-config"] = e,
                                            (0,
                                            a.ve)(o.d2, (function() {
                                                window.require.config({
                                                    paths: o.Hb
                                                }),
                                                window.require(["vs/editor/editor.main"], (function(e) {
                                                    window.define.amd = void 0,
                                                    i.define = i.define || window.define,
                                                    t(e),
                                                    i.resolve({
                                                        monaco: e,
                                                        define: i.define
                                                    })
                                                }
                                                ))
                                            }
                                            )),
                                            i.isInitialized = !0
                                        }
                                        return c(l)
                                    }
                                }
                                ,
                                631: (e,t,n)=>{
                                    n.d(t, {
                                        Z: ()=>r
                                    });
                                    const r = {
                                        context: [{
                                            label: "callService",
                                            value: "callService('', {})",
                                            kind: 1,
                                            detail: "调用服务接口"
                                        }, {
                                            label: "getQuery",
                                            value: "getQuery()",
                                            kind: 1,
                                            detail: "获取地址栏query参数"
                                        }, {
                                            label: "getUserInfo",
                                            value: "getUserInfo()",
                                            kind: 1,
                                            detail: "获取主应用透传的用户信息"
                                        }, {
                                            label: "hasPermission",
                                            value: "hasPermission('')",
                                            kind: 1,
                                            detail: "权限校验方法"
                                        }, {
                                            label: "i18n",
                                            value: "i18n()",
                                            kind: 1,
                                            detail: "国际化"
                                        }, {
                                            label: "utils",
                                            value: "utils",
                                            kind: 0,
                                            detail: "通用工具方法"
                                        }],
                                        utils: [{
                                            label: "getParams",
                                            value: "getParams()",
                                            kind: 1,
                                            detail: "获取地址栏参数"
                                        }, {
                                            label: "getCookies",
                                            value: "getCookies()",
                                            kind: 1,
                                            detail: "获取cookie"
                                        }, {
                                            label: "moment",
                                            value: "moment().format('YYYY-MM-DD HH:mm:ss')",
                                            kind: 1,
                                            detail: "将时间进行格式化"
                                        }],
                                        model: [{
                                            label: "formItems",
                                            value: "formItems['name']",
                                            kind: 3,
                                            detail: "根据字段名获取表单项"
                                        }, {
                                            label: "params",
                                            value: "params",
                                            kind: 3,
                                            detail: "表单额外参数"
                                        }]
                                    }
                                }
                                ,
                                95: (e,t,n)=>{
                                    n.d(t, {
                                        Cb: ()=>a,
                                        Hb: ()=>o,
                                        Y7: ()=>c,
                                        c1: ()=>l,
                                        d2: ()=>r,
                                        wN: ()=>i
                                    });
                                    var r = "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/monaco-editor/0.33.0/min/loader.min.js"
                                      , o = {
                                        vs: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/monaco-editor/0.33.0/min/vs"
                                    }
                                      , a = "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/eslint/8.15.0/eslint.js"
                                      , i = {
                                        standalone: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/prettier/2.6.2/standalone.js",
                                        babel: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/prettier/2.6.2/parser-babel.js"
                                    }
                                      , l = ["context", "model", "utils"]
                                      , c = "function RT() {"
                                }
                                ,
                                603: (e,t,n)=>{
                                    function r(e, t) {
                                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
                                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document
                                          , o = r.createElement("script")
                                          , a = r.getElementsByTagName("head")[0];
                                        o.type = "text/javascript",
                                        o.charset = "UTF-8",
                                        o.src = e,
                                        a.appendChild(o),
                                        o.addEventListener ? o.addEventListener("load", t, !1) : o.attachEvent && o.attachEvent("onreadystatechange", (function() {
                                            var e = n.event && n.event.srcElement;
                                            e && "loaded" == e.readyState && t()
                                        }
                                        ))
                                    }
                                    function o() {
                                        var e;
                                        location.search.includes("debug=true") && (e = console).log.apply(e, arguments)
                                    }
                                    n.d(t, {
                                        aW: ()=>l,
                                        cM: ()=>o,
                                        ve: ()=>r
                                    });
                                    var a = {}
                                      , i = {};
                                    function l(e, t) {
                                        return a[e] || (a[e] = {}),
                                        i[e] || (i[e] = new Promise((function(t) {
                                            return a[e].resolve = t
                                        }
                                        ))),
                                        new Promise((function(n) {
                                            return t && window[t] ? n(window[t]) : function(e) {
                                                for (var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).getElementsByTagName("script"), n = 0; n < t.length; n++)
                                                    if (t[n].src === e)
                                                        return !0;
                                                return !1
                                            }(e) ? i[e].then((function(e) {
                                                n(e)
                                            }
                                            )) : void r(e, (function() {
                                                a[e].resolve(window[t]),
                                                n(window[t])
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                }
                                ,
                                359: t=>{
                                    t.exports = e
                                }
                            }
                              , n = {};
                            function r(e) {
                                var o = n[e];
                                if (void 0 !== o)
                                    return o.exports;
                                var a = n[e] = {
                                    exports: {}
                                };
                                return t[e](a, a.exports, r),
                                a.exports
                            }
                            r.n = e=>{
                                var t = e && e.__esModule ? ()=>e.default : ()=>e;
                                return r.d(t, {
                                    a: t
                                }),
                                t
                            }
                            ,
                            r.d = (e,t)=>{
                                for (var n in t)
                                    r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                                        enumerable: !0,
                                        get: t[n]
                                    })
                            }
                            ,
                            r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
                            r.r = e=>{
                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                    value: "Module"
                                }),
                                Object.defineProperty(e, "__esModule", {
                                    value: !0
                                })
                            }
                            ;
                            var o = {};
                            return (()=>{
                                r.r(o),
                                r.d(o, {
                                    default: ()=>e
                                });
                                const e = r(252).Z
                            }
                            )(),
                            o
                        }
                        )(),
                        e.exports = r(n(8156))
                    },
                    5619: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(3976)
                          , i = function(e, t) {
                            var n = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                            }
                            return n
                        };
                        function l(e) {
                            var t, n = e.children, r = i(e, ["children"]);
                            return o().createElement("button", Object.assign({}, r, {
                                className: "".concat(a.Z.btn, " ").concat(null !== (t = r.className) && void 0 !== t ? t : "")
                            }), o().createElement("span", null, n))
                        }
                    }
                    ,
                    8250: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>s
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(9493)
                          , i = n(8502);
                        function l(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        var c = function(e, t) {
                            var n = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                            }
                            return n
                        };
                        function s(e) {
                            var t, n = e.children, s = e.defaultFold, u = void 0 === s || s, d = e.header, p = e.headerStyle, f = e.contentStyle, m = c(e, ["children", "defaultFold", "header", "headerStyle", "contentStyle"]), h = function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(t = (0,
                            r.useState)(u)) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        for (a = (n = n.call(e)).next; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                        2 !== l.length); c = !0)
                                            ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return l(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, 2) : void 0
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), g = h[0], y = h[1], v = (0,
                            r.useCallback)((function() {
                                y((function(e) {
                                    return !e
                                }
                                ))
                            }
                            ), []);
                            return o().createElement("div", Object.assign({
                                className: i.Z.collapse
                            }, m), o().createElement("div", {
                                className: "".concat(i.Z.header),
                                style: p,
                                onClick: v
                            }, o().createElement("div", {
                                className: "".concat(i.Z.icon, " ").concat(g ? i.Z.fold : "")
                            }, a.x7), d), g ? null : o().createElement("div", {
                                className: "".concat(i.Z.content),
                                style: f
                            }, n))
                        }
                    }
                    ,
                    6233: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1673);
                        function i(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const l = function(e) {
                            var t, n = e.dropDownStyle, l = e.children, c = e.overlay, s = e.onBlur, u = function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(t = (0,
                            r.useState)(!1)) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        for (a = (n = n.call(e)).next; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                        2 !== l.length); c = !0)
                                            ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return i(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, 2) : void 0
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), d = u[0], p = u[1], f = (0,
                            r.useCallback)((function(e) {
                                e.stopPropagation(),
                                p((function(e) {
                                    return !e
                                }
                                ))
                            }
                            ), []);
                            return (0,
                            r.useEffect)((function() {
                                null == s || s((function() {
                                    return p(!1)
                                }
                                ))
                            }
                            ), []),
                            o().createElement("div", {
                                className: a.Z.dropdown
                            }, o().createElement("div", {
                                onClick: f
                            }, l), o().createElement("div", {
                                style: n,
                                className: a.Z.content
                            }, d ? c : null))
                        }
                    }
                    ,
                    6017: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(7762);
                        function i(e) {
                            var t = e.label
                              , n = e.labelStyle
                              , r = e.require
                              , i = e.contentStyle
                              , l = e.children;
                            return o().createElement("div", {
                                className: a.Z.item
                            }, o().createElement("label", {
                                style: n
                            }, r ? o().createElement("i", null, "*") : null, t), o().createElement("div", {
                                className: a.Z.content,
                                style: i
                            }, l))
                        }
                    }
                    ,
                    5132: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            K: ()=>l,
                            Z: ()=>i
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(2808);
                        function i(e) {
                            var t = e.defaultValue
                              , n = e.onChange
                              , r = e.onBlur
                              , i = e.validateError
                              , l = void 0 === i ? "" : i
                              , c = e.placeholder
                              , s = e.type
                              , u = void 0 === s ? "input" : s;
                            return o().createElement("div", {
                                className: a.Z.input
                            }, o().createElement("div", {
                                className: "".concat(a.Z.editor, " ").concat(a.Z.textEdt, " ").concat(l ? a.Z.error : ""),
                                "data-err": l
                            }, "input" === u ? o().createElement("input", {
                                key: t,
                                defaultValue: t,
                                placeholder: c,
                                onBlur: r,
                                onChange: n
                            }) : o().createElement("textarea", {
                                key: t,
                                defaultValue: t,
                                placeholder: c,
                                onChange: n,
                                onBlur: r
                            })))
                        }
                        function l(e) {
                            return i(Object.assign(Object.assign({}, e), {
                                type: "textarea"
                            }))
                        }
                    }
                    ,
                    5196: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            I: ()=>u
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(7111)
                          , i = n(9493)
                          , l = n(393)
                          , c = null
                          , s = null
                          , u = function() {
                            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                type: "error",
                                timeout: 2e3
                            };
                            (null === (t = null === (e = document.querySelector("div[data-id=active-plugin-panel]")) || void 0 === e ? void 0 : e.parentNode) || void 0 === t ? void 0 : t.parentNode) && (c && (c = document.querySelector("div[data-id=domain-plugin-panel-message]")) || (c = document.createElement("div")).setAttribute("data-id", "domain-plugin-panel-message"),
                            document.body.appendChild(c),
                            clearTimeout(s),
                            (0,
                            a.render)(o().createElement(d, {
                                type: r.type,
                                message: n
                            }), c),
                            s = setTimeout((function() {
                                return (0,
                                a.unmountComponentAtNode)(c)
                            }
                            ), r.timeout || 2e3))
                        }
                          , d = function(e) {
                            var t = e.type
                              , n = void 0 === t ? "error" : t
                              , r = e.message;
                            return r ? o().createElement("div", {
                                className: l.Z.message
                            }, "error" === n ? i.vU : null, "warning" === n ? i.Kp : null, "success" === n ? i.Vp : null, o().createElement("span", {
                                className: l.Z.content
                            }, r)) : null
                        }
                    }
                    ,
                    6242: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>c
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(2643);
                        function i(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function l(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        function c(e) {
                            var t = e.options
                              , n = e.binding
                              , l = e.onChange
                              , c = i(n, 2)
                              , s = c[0]
                              , u = c[1]
                              , d = i((0,
                            r.useState)(s[u]), 2)
                              , p = d[0]
                              , f = d[1];
                            return (0,
                            r.useEffect)((function() {
                                f(s[u])
                            }
                            ), [s[u]]),
                            o().createElement("div", {
                                className: a.Z.edt
                            }, t.map((function(e) {
                                return o().createElement("div", {
                                    key: e.value,
                                    className: "".concat(a.Z.opt, " ").concat(e.value === p ? a.Z.selected : ""),
                                    onClick: function() {
                                        s[u] = e.value,
                                        f(e.value),
                                        null == l || l(e.value)
                                    }
                                }, e.title)
                            }
                            )))
                        }
                    }
                    ,
                    957: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1436);
                        function i(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        function l(e) {
                            var t, n = e.defaultChecked, l = void 0 !== n && n, c = e.onChange, s = function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(t = (0,
                            r.useState)(l)) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        for (a = (n = n.call(e)).next; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                        2 !== l.length); c = !0)
                                            ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return i(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, 2) : void 0
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), u = s[0], d = s[1], p = (0,
                            r.useCallback)((function() {
                                d((function(e) {
                                    return c && c(!e),
                                    !e
                                }
                                ))
                            }
                            ), []);
                            return o().createElement("div", {
                                className: a.Z.ct
                            }, o().createElement("button", {
                                onClick: p,
                                className: "".concat(a.Z.switch, " ").concat(u ? a.Z.checked : "")
                            }, o().createElement("div", {
                                className: a.Z.handle
                            })))
                        }
                    }
                    ,
                    5525: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Aj: ()=>a,
                            E0: ()=>d,
                            G8: ()=>s,
                            Gy: ()=>r,
                            Nd: ()=>p,
                            Vr: ()=>u,
                            Ys: ()=>o,
                            aG: ()=>c,
                            d9: ()=>h,
                            oR: ()=>f,
                            tc: ()=>i,
                            yI: ()=>l,
                            zi: ()=>m
                        });
                        var r, o = "export default function ({ params, data, headers, url, method }) {\n  // 设置请求query、请求体、请求头\n  return { params, data, headers, url, method };\n }\n", a = "export default function (result, { method, url, params, data, headers }) {\n  return result;\n}", i = "export default function ({ params, data, headers, url, method }) {\n  const domainInfo = {\n    serviceId: '__serviceId__',\n    fileId: '__fileId__'\n  }\n  // 设置请求query、请求体、请求头\n  return { params, data: {\n    params: {\n      ...data\n    },\n    ...domainInfo,\n  }, headers, url, method };\n }\n", l = "export default function ({ params, data, headers, url, method }) {\n  const domainInfo = {\n    serviceId: '__serviceId__',\n    fileId: '__fileId__'\n  }\n  \n  // 设置请求query、请求体、请求头\n  return { params, data: {\n    params: {\n      ...data,\n\t\t\taction: '__action__'\n    },\n    ...domainInfo,\n  }, headers, url, method };\n }\n", c = 0, s = 16, u = 32, d = [{
                            title: "GET",
                            value: "GET"
                        }, {
                            title: "POST",
                            value: "POST"
                        }, {
                            title: "PUT",
                            value: "PUT"
                        }, {
                            title: "DELETE",
                            value: "DELETE"
                        }], p = [{
                            key: "successStatus",
                            title: "请求成功标识",
                            description: "标识请求是否成功",
                            needMarkValue: !0
                        }, {
                            key: "dataSource",
                            title: "列表数据源",
                            description: "标识数据列表数据源"
                        }, {
                            key: "total",
                            title: "数据源总数",
                            description: "数据列表总条数"
                        }, {
                            key: "pageNum",
                            title: "分页索引",
                            description: "数据分页索引值，即当前页码"
                        }, {
                            key: "pageSize",
                            title: "分页大小",
                            description: "列表每页展示数据量大小，如每页10条"
                        }, {
                            key: "error",
                            title: "错误提示信息",
                            description: "透传到领域模型 CRUD 组件中的错误信息"
                        }], f = [{
                            key: "successStatus",
                            title: "请求成功标识",
                            description: "标识请求是否成功",
                            needMarkValue: !0
                        }, {
                            key: "response",
                            title: "数据响应值",
                            description: "透传到领域模型 CRUD 组件中的值"
                        }, {
                            key: "error",
                            title: "错误提示信息",
                            description: "透传到领域模型 CRUD 组件中的错误信息"
                        }], m = {
                            dataSource: "列表数据源",
                            id: "数据主键",
                            total: "数据源总数",
                            pageNum: "分页索引",
                            pageSize: "分页大小",
                            successStatus: "请求成功标识",
                            response: "数据响应值",
                            error: "错误提示信息"
                        }, h = {
                            dataSource: ["array"],
                            id: ["string", "number"],
                            total: ["number"],
                            pageNum: ["number"],
                            pageSize: ["number"],
                            response: ["any"],
                            successStatus: ["number", "string", "boolean"],
                            error: ["any"]
                        };
                        !function(e) {
                            e.STRING = "string",
                            e.NUMBER = "number",
                            e.DATETIME = "datetime",
                            e.JSON = "json",
                            e.ENUM = "enum",
                            e.RELATION = "relation",
                            e.MAPPING = "mapping",
                            e.SYS_USER = "SYS_USER",
                            e.SYS_ROLE = "SYS_ROLE",
                            e.SYS_ROLE_RELATION = "SYS_ROLE_RELATION"
                        }(r || (r = {}))
                    }
                    ,
                    3887: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = {
                            domainModels: []
                        }
                    }
                    ,
                    9493: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Kp: ()=>h,
                            LW: ()=>d,
                            Od: ()=>s,
                            PD: ()=>p,
                            Qx: ()=>i,
                            Vp: ()=>g,
                            bi: ()=>c,
                            dK: ()=>u,
                            eP: ()=>l,
                            qv: ()=>a,
                            vU: ()=>m,
                            x7: ()=>f
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            width: "32",
                            height: "32"
                        }, o().createElement("path", {
                            d: "M512 230.4c-63.5136 0-115.2-51.6864-115.2-115.2s51.6864-115.2 115.2-115.2c63.5264 0 115.2 51.6864 115.2 115.2s-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM512 1024c-63.5136 0-115.2-51.6736-115.2-115.2s51.6864-115.2 115.2-115.2c63.5264 0 115.2 51.6736 115.2 115.2s-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM908.8 627.2c-63.5264 0-115.2-51.6736-115.2-115.2 0-63.5136 51.6736-115.2 115.2-115.2s115.2 51.6864 115.2 115.2c0 63.5264-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM115.2 627.2c-63.5136 0-115.2-51.6736-115.2-115.2 0-63.5136 51.6864-115.2 115.2-115.2s115.2 51.6864 115.2 115.2c0 63.5264-51.6864 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64z",
                            fill: "#555555"
                        }), o().createElement("path", {
                            d: "M320.5376 219.392a25.6 25.6 0 0 1-13.184-47.5648 392.256 392.256 0 0 1 116.5184-46.6688 25.6 25.6 0 0 1 11.1488 49.984 341.5552 341.5552 0 0 0-101.3376 40.6016 25.6384 25.6384 0 0 1-13.1456 3.648zM703.4624 219.4048c-4.4928 0-9.024-1.1776-13.1456-3.6608a341.2736 341.2736 0 0 0-101.3248-40.6016 25.6256 25.6256 0 0 1-19.4176-30.5664 25.664 25.664 0 0 1 30.5664-19.4176 392.3968 392.3968 0 0 1 116.5312 46.6688 25.6128 25.6128 0 0 1-13.2096 47.5776zM429.4656 899.456c-1.8432 0-3.7248-0.2048-5.5936-0.6144a392.64 392.64 0 0 1-116.5184-46.656 25.6 25.6 0 0 1 26.3296-43.9296 341.2096 341.2096 0 0 0 101.3376 40.6016 25.6 25.6 0 0 1-5.5552 50.5984zM594.5344 899.456a25.6 25.6 0 0 1-5.5424-50.5856 341.1712 341.1712 0 0 0 101.3248-40.6144 25.6 25.6 0 1 1 26.3424 43.904 392.0256 392.0256 0 0 1-116.5312 46.6816 26.0864 26.0864 0 0 1-5.5936 0.6144zM150.1696 455.04a25.6256 25.6256 0 0 1-25.024-31.1808 391.808 391.808 0 0 1 46.6816-116.5184 25.6 25.6 0 0 1 43.904 26.3424 341.184 341.184 0 0 0-40.6144 101.3376 25.5872 25.5872 0 0 1-24.9472 20.0192zM193.8176 729.088c-8.704 0-17.1776-4.4288-21.9776-12.4288a392.1664 392.1664 0 0 1-46.6816-116.5312 25.6 25.6 0 0 1 49.984-11.1488 341.0304 341.0304 0 0 0 40.6144 101.3248 25.6 25.6 0 0 1-21.9392 38.784zM830.1952 729.088a25.5744 25.5744 0 0 1-21.9392-38.7584 341.2096 341.2096 0 0 0 40.6016-101.3248 25.6768 25.6768 0 0 1 30.5536-19.4304 25.6 25.6 0 0 1 19.4304 30.5536 392.512 392.512 0 0 1-46.656 116.5312 25.6256 25.6256 0 0 1-21.9904 12.4288zM873.8304 455.04a25.6128 25.6128 0 0 1-24.96-20.032 341.4912 341.4912 0 0 0-40.6016-101.3376 25.6128 25.6128 0 0 1 43.9296-26.3296 392.64 392.64 0 0 1 46.656 116.5184 25.6 25.6 0 0 1-25.024 31.1808z",
                            fill: "#555555"
                        }), o().createElement("path", {
                            d: "M231.424 913.0496a102.016 102.016 0 0 1-72.3712-29.9264l-18.176-18.176c-39.9104-39.9104-39.9104-104.832 0-144.7552l34.816-34.816a25.6 25.6 0 0 1 36.2112 36.1984l-34.816 34.816a51.2256 51.2256 0 0 0 0 72.3456l18.176 18.176a51.2256 51.2256 0 0 0 72.3456 0l34.816-34.8288a25.6 25.6 0 0 1 36.2112 36.1984l-34.816 34.8288a102.0928 102.0928 0 0 1-72.3968 29.9392zM830.1952 346.112a25.6 25.6 0 0 1-18.0992-43.712l34.8288-34.816a50.7648 50.7648 0 0 0 14.9632-36.16 50.8416 50.8416 0 0 0-14.9632-36.1856l-18.176-18.176a51.2256 51.2256 0 0 0-72.3456 0l-34.816 34.816a25.6 25.6 0 1 1-36.1984-36.2112l34.816-34.816c39.8976-39.9104 104.8448-39.9104 144.7552 0l18.176 18.176a101.6832 101.6832 0 0 1 29.9648 72.384 101.632 101.632 0 0 1-29.9648 72.3712l-34.8288 34.816a25.4848 25.4848 0 0 1-18.112 7.5136zM792.576 913.0624a101.952 101.952 0 0 1-72.3712-29.9392l-34.816-34.8288a25.6 25.6 0 1 1 36.1984-36.1984l34.816 34.8288c19.3024 19.3024 53.056 19.3024 72.3456 0l18.176-18.176c9.6512-9.6512 14.9632-22.5024 14.9632-36.1728s-5.312-26.5216-14.9632-36.1728l-34.8288-34.816a25.6 25.6 0 1 1 36.1984-36.1984l34.8288 34.816c39.9104 39.9104 39.9104 104.832 0 144.7552l-18.176 18.176a101.9904 101.9904 0 0 1-72.3712 29.9264zM193.792 346.112a25.472 25.472 0 0 1-18.0992-7.5008l-34.816-34.816c-19.328-19.3152-29.9648-45.0304-29.9648-72.3712s10.6496-53.056 29.9648-72.3712l18.176-18.1632c39.9104-39.8976 104.8576-39.8976 144.7424 0l34.816 34.816a25.6 25.6 0 1 1-36.1984 36.1984l-34.816-34.816a51.2256 51.2256 0 0 0-72.3456 0l-18.176 18.1632c-9.6512 9.6512-14.9632 22.4896-14.9632 36.1728s5.312 26.5216 14.9632 36.1728l34.816 34.816a25.6 25.6 0 0 1-18.0992 43.6992zM512 665.6c-84.6976 0-153.6-68.9024-153.6-153.6s68.9024-153.6 153.6-153.6 153.6 68.9024 153.6 153.6-68.9024 153.6-153.6 153.6z m0-256c-56.4608 0-102.4 45.9392-102.4 102.4s45.9392 102.4 102.4 102.4 102.4-45.9392 102.4-102.4-45.9392-102.4-102.4-102.4z",
                            fill: "#555555"
                        }))
                          , i = o().createElement("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 1057 1024"
                        }, o().createElement("path", {
                            d: "M342.016 214.016l468.010667 297.984-468.010667 297.984 0-596.010667z"
                        }))
                          , l = o().createElement("svg", {
                            viewBox: "64 64 896 896",
                            focusable: "false",
                            "data-icon": "form",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }, o().createElement("path", {
                            d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
                        }), o().createElement("path", {
                            d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
                        }))
                          , c = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor"
                        }, o().createElement("path", {
                            d: "M187.456 425.024a336 336 0 0 0 368.384 420.224 48 48 0 0 1 12.544 95.168 432 432 0 0 1-473.664-540.16l-57.28-15.36a12.8 12.8 0 0 1-6.272-20.928l159.168-179.456a12.8 12.8 0 0 1 22.144 5.888l48.064 235.072a12.8 12.8 0 0 1-15.808 14.912l-57.28-15.36zM836.48 599.04a336 336 0 0 0-368.384-420.224 48 48 0 1 1-12.544-95.168 432 432 0 0 1 473.664 540.16l57.28 15.36a12.8 12.8 0 0 1 6.272 20.928l-159.168 179.456a12.8 12.8 0 0 1-22.144-5.888l-48.064-235.072a12.8 12.8 0 0 1 15.808-14.912l57.28 15.36z"
                        }))
                          , s = o().createElement("svg", {
                            viewBox: "64 64 896 896",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }, o().createElement("path", {
                            d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                        }))
                          , u = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M290 236.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L169 160c-5.1-0.6-9.5 3.7-8.9 8.9L179 329.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zM642.7 423.7c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7L863.9 169c0.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4zM845 694.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L734 787.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L855 864c5.1 0.6 9.5-3.7 8.9-8.9L845 694.9zM381.3 600.3c-3.1-3.1-8.2-3.1-11.3 0L236.3 733.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L160.1 855c-0.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-0.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
                        }))
                          , d = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"
                        }))
                          , p = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            fill: "currentColor",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
                        }), o().createElement("path", {
                            d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
                        }))
                          , f = o().createElement("svg", {
                            viewBox: "64 64 896 896",
                            focusable: "false",
                            "data-icon": "right",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }, o().createElement("path", {
                            d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                        }))
                          , m = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M721.877333 303.104a48.469333 48.469333 0 0 0-68.437333 0l-141.909333 141.909333-136.277334-136.234666a46.933333 46.933333 0 1 0-66.432 66.432l136.277334 136.277333-141.952 141.952a48.384 48.384 0 0 0 68.394666 68.352l141.952-141.909333 137.045334 137.002666a46.933333 46.933333 0 1 0 66.432-66.432l-137.045334-137.002666 141.952-141.952a48.469333 48.469333 0 0 0 0-68.394667M512 1024C229.248 1024 0 794.752 0 512 0 229.205333 229.248 0 512 0c282.794667 0 512 229.205333 512 512 0 282.752-229.205333 512-512 512",
                            fill: "#FA5555"
                        }))
                          , h = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M512 53.248c129.707008 3.412992 237.739008 48.299008 324.096 134.656S967.339008 382.292992 970.752 512c-3.412992 129.707008-48.299008 237.739008-134.656 324.096S641.707008 967.339008 512 970.752c-129.707008-3.412992-237.739008-48.299008-324.096-134.656S56.660992 641.707008 53.248 512c3.412992-129.707008 48.299008-237.739008 134.656-324.096S382.292992 56.660992 512 53.248z m0 196.608c-17.748992 0-32.427008 6.484992-44.032 19.456-11.604992 12.971008-16.724992 28.331008-15.36 46.08l23.552 262.144c1.364992 9.556992 5.291008 17.236992 11.776 23.04 6.484992 5.803008 14.507008 8.704 24.064 8.704s17.579008-2.900992 24.064-8.704c6.484992-5.803008 10.411008-13.483008 11.776-23.04l23.552-262.144c1.364992-17.748992-3.755008-33.108992-15.36-46.08-11.604992-12.971008-26.283008-19.456-44.032-19.456z m0 524.288c15.019008-0.683008 27.476992-5.803008 37.376-15.36 9.899008-9.556992 14.848-21.844992 14.848-36.864 0-15.019008-4.948992-27.476992-14.848-37.376-9.899008-9.899008-22.356992-14.848-37.376-14.848-15.019008 0-27.476992 4.948992-37.376 14.848-9.899008 9.899008-14.848 22.356992-14.848 37.376 0 15.019008 4.948992 27.307008 14.848 36.864 9.899008 9.556992 22.356992 14.676992 37.376 15.36z",
                            fill: "#faad14"
                        }))
                          , g = o().createElement("svg", {
                            viewBox: "64 64 896 896",
                            width: "1em",
                            height: "1em",
                            fill: "#52c41a",
                            "aria-hidden": "true"
                        }, o().createElement("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                        }))
                    }
                    ,
                    6690: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            R: ()=>r
                        });
                        var r = (0,
                        n(8156).createContext)({
                            addBlurAry: function(e, t) {}
                        })
                    }
                    ,
                    255: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>S
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(7111)
                          , i = n.n(a)
                          , l = n(5619)
                          , c = n(5525)
                          , s = n(530)
                          , u = n(5502)
                          , d = n(6178)
                          , p = n(8543)
                          , f = n(5196)
                          , m = n(4113)
                          , h = n(6690)
                          , g = n(790);
                        function y(e) {
                            return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            y(e)
                        }
                        function v(e, t, n) {
                            return (t = function(e) {
                                var t = function(e, t) {
                                    if ("object" !== y(e) || null === e)
                                        return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" !== y(r))
                                            return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(e);
                                return "symbol" === y(t) ? t : String(t)
                            }(t))in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                            e
                        }
                        function b(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return w(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function w(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        var x = [{
                            name: "查询",
                            key: "SELECT"
                        }, {
                            name: "新建",
                            key: "INSERT"
                        }, {
                            name: "更新",
                            key: "UPDATE"
                        }, {
                            name: "删除",
                            key: "DELETE"
                        }]
                          , E = {
                            SELECT: "查询",
                            INSERT: "新建",
                            UPDATE: "更新",
                            DELETE: "删除"
                        }
                          , _ = {
                            SELECT: {
                                method: "GET",
                                entity: {
                                    fieldAry: []
                                },
                                input: encodeURIComponent(c.Ys),
                                output: encodeURIComponent(c.Aj)
                            },
                            DELETE: {
                                method: "DELETE",
                                input: encodeURIComponent(c.Ys),
                                output: encodeURIComponent(c.Aj),
                                params: {
                                    type: "root",
                                    name: "root",
                                    children: [{
                                        type: "string",
                                        id: (0,
                                        d.Vj)(),
                                        name: "id"
                                    }]
                                }
                            },
                            UPDATE: {
                                method: "PUT",
                                input: encodeURIComponent(c.Ys),
                                output: encodeURIComponent(c.Aj),
                                params: {
                                    type: "root",
                                    name: "root",
                                    children: [{
                                        type: "string",
                                        id: (0,
                                        d.Vj)(),
                                        name: "id"
                                    }]
                                }
                            },
                            INSERT: {
                                method: "POST",
                                input: encodeURIComponent(c.Ys),
                                output: encodeURIComponent(c.Aj)
                            },
                            entity: {
                                id: (0,
                                d.Vj)(),
                                fieldAry: []
                            },
                            abilitySet: []
                        };
                        const S = function(e) {
                            var t = e.panelVisible
                              , n = e.style
                              , a = e.onClose
                              , y = e.updateService
                              , w = e.initialModel
                              , S = e.sidebarContext
                              , j = b((0,
                            r.useState)("SELECT"), 2)
                              , O = j[0]
                              , Z = j[1]
                              , k = (0,
                            r.useRef)({})
                              , A = b((0,
                            r.useState)((0,
                            m.Xh)(w) || {
                                id: (0,
                                d.Vj)(),
                                title: "",
                                type: "aggregation-model",
                                query: JSON.parse(JSON.stringify(_)),
                                createTime: Date.now(),
                                updateTime: Date.now()
                            }), 2)
                              , C = A[0]
                              , N = A[1]
                              , P = (0,
                            r.useMemo)((function() {
                                return {
                                    addBlurAry: function(e, t) {
                                        return k.current = Object.assign(Object.assign({}, k.current), v({}, e, t))
                                    }
                                }
                            }
                            ), [])
                              , R = (0,
                            r.useCallback)((function() {
                                for (var e, t, n, r, o, i = C.query.abilitySet.filter((function(e) {
                                    return "PAGE" !== e
                                }
                                )), l = 0; l < i.length; l++) {
                                    var c = i[l];
                                    if (!(null === (t = null === (e = C.query[c]) || void 0 === e ? void 0 : e.path) || void 0 === t ? void 0 : t.trim()))
                                        return (0,
                                        f.I)("".concat(E[c], "的请求路径不能为空")),
                                        void Z(c)
                                }
                                (null === (o = null === (r = null === (n = C.query.SELECT.markedKeymap) || void 0 === n ? void 0 : n.dataSource) || void 0 === r ? void 0 : r.path) || void 0 === o ? void 0 : o.length) || ((0,
                                f.I)("未标识查询的接口返回信息数据源，可能会造成组件运行错误", {
                                    type: "warning"
                                }),
                                Z("SELECT")),
                                null == i || i.forEach((function(e) {
                                    C.query[e].script = (0,
                                    p.i)(C.query[e])
                                }
                                )),
                                y(w ? "update" : "create", C),
                                a()
                            }
                            ), [C, w])
                              , L = (0,
                            r.useCallback)((function() {
                                return "SELECT" === O ? o().createElement(s.Z, {
                                    sidebarContext: S,
                                    entity: C.query.entity,
                                    formModel: C.query.SELECT,
                                    onChangeEntity: function(e) {
                                        return N((function(t) {
                                            return Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    entity: e
                                                })
                                            })
                                        }
                                        ))
                                    },
                                    onChange: function(e) {
                                        N((function(t) {
                                            var n = t.query.abilitySet || [];
                                            return n.includes("SELECT") || n.push("SELECT"),
                                            e.pageInfo ? n.includes("PAGE") || n.push("PAGE") : n = n.filter((function(e) {
                                                return "PAGE" !== e
                                            }
                                            )),
                                            Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    SELECT: e,
                                                    abilitySet: n
                                                })
                                            })
                                        }
                                        ))
                                    }
                                }) : ["INSERT", "UPDATE", "DELETE"].includes(O) ? o().createElement(u.Z, {
                                    key: O,
                                    sidebarContext: S,
                                    entity: C.query.entity,
                                    formModel: C.query[O],
                                    onChangeEntity: function(e) {
                                        return N((function(t) {
                                            return Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    entity: e
                                                })
                                            })
                                        }
                                        ))
                                    },
                                    onChange: function(e) {
                                        N((function(t) {
                                            var n, r = t.query.abilitySet || [];
                                            return r.includes(O) || r.push(O),
                                            Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), (n = {},
                                                v(n, O, e),
                                                v(n, "abilitySet", r),
                                                n))
                                            })
                                        }
                                        ))
                                    }
                                }) : null
                            }
                            ), [O]);
                            return i().createPortal(t & c.Vr ? o().createElement("div", {
                                className: g.Z.sidebarPanelEdit,
                                "data-id": "plugin-panel",
                                style: Object.assign(Object.assign({}, n), {
                                    left: 361
                                }),
                                onClick: function() {
                                    Object.values(k.current).forEach((function(e) {
                                        return null == e ? void 0 : e()
                                    }
                                    ))
                                }
                            }, o().createElement(h.R.Provider, {
                                value: P
                            }, o().createElement("div", {
                                className: g.Z.sidebarPanelTitle
                            }, o().createElement("div", null, "聚合模型"), o().createElement("div", null, o().createElement(l.Z, {
                                size: "small",
                                type: "primary",
                                onClick: R
                            }, "保 存"), o().createElement(l.Z, {
                                size: "small",
                                style: {
                                    marginLeft: "12px"
                                },
                                onClick: a
                            }, "关 闭"))), o().createElement("div", {
                                className: g.Z.item
                            }, o().createElement("label", null, "模型名称"), o().createElement("div", {
                                className: "".concat(g.Z.editor, " ").concat(g.Z.textEdt),
                                style: {
                                    marginRight: "12px"
                                }
                            }, o().createElement("input", {
                                type: "text",
                                placeholder: "模型名称",
                                defaultValue: C.title,
                                onChange: function(e) {
                                    return N((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            title: e.target.value
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: g.Z.tabs
                            }, x.map((function(e) {
                                return o().createElement("div", {
                                    key: e.key,
                                    className: "".concat(g.Z.tab, " ").concat(O === e.key ? g.Z.activeTab : ""),
                                    onClick: function() {
                                        return Z(e.key)
                                    }
                                }, e.name)
                            }
                            ))), o().createElement("div", {
                                className: g.Z.tabContent
                            }, L()))) : null, document.body)
                        }
                    }
                    ,
                    5502: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>b
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1194)
                          , i = n.n(a)
                          , l = n(8250)
                          , c = n(6242)
                          , s = n(9493)
                          , u = n(6178)
                          , d = n(6017)
                          , p = n(5132)
                          , f = n(5525)
                          , m = n(5968)
                          , h = n(8786)
                          , g = n(790);
                        function y(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return v(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function v(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const b = function(e) {
                            var t = e.formModel
                              , n = e.onChange
                              , a = e.sidebarContext
                              , v = y((0,
                            r.useState)(t), 2)
                              , b = v[0]
                              , w = v[1]
                              , x = (0,
                            r.useRef)()
                              , E = (0,
                            r.useRef)()
                              , _ = (0,
                            r.useRef)(!0)
                              , S = y((0,
                            r.useState)({}), 2)
                              , j = S[0]
                              , O = S[1]
                              , Z = y((0,
                            r.useState)(!1), 2)
                              , k = Z[0]
                              , A = Z[1]
                              , C = y((0,
                            r.useState)(!1), 2)
                              , N = C[0]
                              , P = C[1]
                              , R = function() {
                                var e;
                                null === (e = x.current) || void 0 === e || e.classList.remove(h.Z["sidebar-panel-code-full"]),
                                A(!1)
                            }
                              , L = function() {
                                var e;
                                P(!1),
                                null === (e = E.current) || void 0 === e || e.classList.remove(h.Z["sidebar-panel-code-full"])
                            }
                              , T = (0,
                            r.useCallback)((function(e) {
                                w((function(t) {
                                    return Object.assign(Object.assign(Object.assign({}, t), e), e.markedKeymap ? (0,
                                    u.gp)(e.resultSchema || t.resultSchema, e.markedKeymap) : {})
                                }
                                ))
                            }
                            ), []);
                            return (0,
                            r.useEffect)((function() {
                                _.current ? _.current = !1 : n(b)
                            }
                            ), [b]),
                            o().createElement(o().Fragment, null, o().createElement("div", {
                                className: g.Z.ct
                            }, o().createElement(l.Z, {
                                header: "基本信息",
                                defaultFold: !1
                            }, o().createElement("div", {
                                className: g.Z.item
                            }, o().createElement("label", null, "名称"), o().createElement("div", {
                                className: "".concat(g.Z.editor, " ").concat(g.Z.textEdt)
                            }, o().createElement("input", {
                                type: "text",
                                placeholder: "服务接口的标题",
                                defaultValue: b.title,
                                onChange: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            title: e.target.value
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: g.Z.item
                            }, o().createElement("label", null, o().createElement("i", null, "*"), "地址"), o().createElement("div", {
                                className: "".concat(g.Z.editor, " ").concat(g.Z.textEdt, " ").concat(j.path ? g.Z.error : ""),
                                "data-err": j.path
                            }, o().createElement("textarea", {
                                defaultValue: b.path,
                                placeholder: "接口的请求路径",
                                onChange: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            path: e.target.value
                                        })
                                    }
                                    )),
                                    e.target.value && O((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            path: ""
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", null), o().createElement("div", {
                                className: g.Z.item
                            }, o().createElement("label", null, o().createElement("i", null, "*"), "请求方法"), o().createElement("div", {
                                className: g.Z.editor
                            }, o().createElement(c.Z, {
                                binding: [b, "method"],
                                options: f.E0,
                                onChange: function(e) {
                                    return w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            method: e
                                        })
                                    }
                                    ))
                                }
                            }))))), o().createElement("div", {
                                className: g.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当开始请求"
                            }, k ? o().createElement("div", {
                                onClick: R,
                                className: h.Z["sidebar-panel-code-icon-full"]
                            }, s.LW) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    null === (e = x.current) || void 0 === e || e.classList.add(h.Z["sidebar-panel-code-full"]),
                                    A(!0)
                                },
                                className: h.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    x.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && R()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            input: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(b.input),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: g.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当返回响应"
                            }, N ? o().createElement("div", {
                                onClick: L,
                                className: h.Z["sidebar-panel-code-icon-full"]
                            }, s.dK) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    P(!0),
                                    null === (e = E.current) || void 0 === e || e.classList.add(h.Z["sidebar-panel-code-full"])
                                },
                                className: h.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    E.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && L()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            output: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(b.output),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: g.Z.ct
                            }, o().createElement(l.Z, {
                                header: "其他信息"
                            }, o().createElement(d.Z, {
                                label: "接口描述"
                            }, o().createElement(p.Z, {
                                defaultValue: b.desc,
                                onBlur: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            desc: e.target.value
                                        })
                                    }
                                    ))
                                }
                            })), o().createElement(d.Z, {
                                label: "文档链接"
                            }, o().createElement(p.K, {
                                style: {
                                    height: 80
                                },
                                onBlur: function(e) {
                                    w((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            doc: e.target.value
                                        })
                                    }
                                    ))
                                },
                                defaultValue: b.doc
                            })))), o().createElement("div", {
                                className: g.Z.ct
                            }, o().createElement(l.Z, {
                                header: "接口调试",
                                defaultFold: !1
                            }, o().createElement(m.Z, {
                                markList: f.oR,
                                sidebarContext: a,
                                formModel: b,
                                validate: function() {
                                    return !!b.path || (O((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            path: "请填写完整的地址"
                                        })
                                    }
                                    )),
                                    !1)
                                },
                                onChange: T
                            }))))
                        }
                    }
                    ,
                    5968: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>x
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(6178)
                          , i = n(6017)
                          , l = n(4469)
                          , c = n(5619)
                          , s = n(373)
                          , u = n(4651)
                          , d = n(167)
                          , p = n(8543)
                          , f = n(5196)
                          , m = n(5525);
                        function h(e) {
                            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            h(e)
                        }
                        function g() {
                            g = function() {
                                return e
                            }
                            ;
                            var e = {}
                              , t = Object.prototype
                              , n = t.hasOwnProperty
                              , r = Object.defineProperty || function(e, t, n) {
                                e[t] = n.value
                            }
                              , o = "function" == typeof Symbol ? Symbol : {}
                              , a = o.iterator || "@@iterator"
                              , i = o.asyncIterator || "@@asyncIterator"
                              , l = o.toStringTag || "@@toStringTag";
                            function c(e, t, n) {
                                return Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }),
                                e[t]
                            }
                            try {
                                c({}, "")
                            } catch (e) {
                                c = function(e, t, n) {
                                    return e[t] = n
                                }
                            }
                            function s(e, t, n, o) {
                                var a = t && t.prototype instanceof p ? t : p
                                  , i = Object.create(a.prototype)
                                  , l = new Z(o || []);
                                return r(i, "_invoke", {
                                    value: _(e, n, l)
                                }),
                                i
                            }
                            function u(e, t, n) {
                                try {
                                    return {
                                        type: "normal",
                                        arg: e.call(t, n)
                                    }
                                } catch (e) {
                                    return {
                                        type: "throw",
                                        arg: e
                                    }
                                }
                            }
                            e.wrap = s;
                            var d = {};
                            function p() {}
                            function f() {}
                            function m() {}
                            var y = {};
                            c(y, a, (function() {
                                return this
                            }
                            ));
                            var v = Object.getPrototypeOf
                              , b = v && v(v(k([])));
                            b && b !== t && n.call(b, a) && (y = b);
                            var w = m.prototype = p.prototype = Object.create(y);
                            function x(e) {
                                ["next", "throw", "return"].forEach((function(t) {
                                    c(e, t, (function(e) {
                                        return this._invoke(t, e)
                                    }
                                    ))
                                }
                                ))
                            }
                            function E(e, t) {
                                function o(r, a, i, l) {
                                    var c = u(e[r], e, a);
                                    if ("throw" !== c.type) {
                                        var s = c.arg
                                          , d = s.value;
                                        return d && "object" == h(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            o("next", e, i, l)
                                        }
                                        ), (function(e) {
                                            o("throw", e, i, l)
                                        }
                                        )) : t.resolve(d).then((function(e) {
                                            s.value = e,
                                            i(s)
                                        }
                                        ), (function(e) {
                                            return o("throw", e, i, l)
                                        }
                                        ))
                                    }
                                    l(c.arg)
                                }
                                var a;
                                r(this, "_invoke", {
                                    value: function(e, n) {
                                        function r() {
                                            return new t((function(t, r) {
                                                o(e, n, t, r)
                                            }
                                            ))
                                        }
                                        return a = a ? a.then(r, r) : r()
                                    }
                                })
                            }
                            function _(e, t, n) {
                                var r = "suspendedStart";
                                return function(o, a) {
                                    if ("executing" === r)
                                        throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === o)
                                            throw a;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    for (n.method = o,
                                    n.arg = a; ; ) {
                                        var i = n.delegate;
                                        if (i) {
                                            var l = S(i, n);
                                            if (l) {
                                                if (l === d)
                                                    continue;
                                                return l
                                            }
                                        }
                                        if ("next" === n.method)
                                            n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r)
                                                throw r = "completed",
                                                n.arg;
                                            n.dispatchException(n.arg)
                                        } else
                                            "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var c = u(e, t, n);
                                        if ("normal" === c.type) {
                                            if (r = n.done ? "completed" : "suspendedYield",
                                            c.arg === d)
                                                continue;
                                            return {
                                                value: c.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === c.type && (r = "completed",
                                        n.method = "throw",
                                        n.arg = c.arg)
                                    }
                                }
                            }
                            function S(e, t) {
                                var n = t.method
                                  , r = e.iterator[n];
                                if (void 0 === r)
                                    return t.delegate = null,
                                    "throw" === n && e.iterator.return && (t.method = "return",
                                    t.arg = void 0,
                                    S(e, t),
                                    "throw" === t.method) || "return" !== n && (t.method = "throw",
                                    t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                                    d;
                                var o = u(r, e.iterator, t.arg);
                                if ("throw" === o.type)
                                    return t.method = "throw",
                                    t.arg = o.arg,
                                    t.delegate = null,
                                    d;
                                var a = o.arg;
                                return a ? a.done ? (t[e.resultName] = a.value,
                                t.next = e.nextLoc,
                                "return" !== t.method && (t.method = "next",
                                t.arg = void 0),
                                t.delegate = null,
                                d) : a : (t.method = "throw",
                                t.arg = new TypeError("iterator result is not an object"),
                                t.delegate = null,
                                d)
                            }
                            function j(e) {
                                var t = {
                                    tryLoc: e[0]
                                };
                                1 in e && (t.catchLoc = e[1]),
                                2 in e && (t.finallyLoc = e[2],
                                t.afterLoc = e[3]),
                                this.tryEntries.push(t)
                            }
                            function O(e) {
                                var t = e.completion || {};
                                t.type = "normal",
                                delete t.arg,
                                e.completion = t
                            }
                            function Z(e) {
                                this.tryEntries = [{
                                    tryLoc: "root"
                                }],
                                e.forEach(j, this),
                                this.reset(!0)
                            }
                            function k(e) {
                                if (e) {
                                    var t = e[a];
                                    if (t)
                                        return t.call(e);
                                    if ("function" == typeof e.next)
                                        return e;
                                    if (!isNaN(e.length)) {
                                        var r = -1
                                          , o = function t() {
                                            for (; ++r < e.length; )
                                                if (n.call(e, r))
                                                    return t.value = e[r],
                                                    t.done = !1,
                                                    t;
                                            return t.value = void 0,
                                            t.done = !0,
                                            t
                                        };
                                        return o.next = o
                                    }
                                }
                                return {
                                    next: A
                                }
                            }
                            function A() {
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            return f.prototype = m,
                            r(w, "constructor", {
                                value: m,
                                configurable: !0
                            }),
                            r(m, "constructor", {
                                value: f,
                                configurable: !0
                            }),
                            f.displayName = c(m, l, "GeneratorFunction"),
                            e.isGeneratorFunction = function(e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                            }
                            ,
                            e.mark = function(e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                                c(e, l, "GeneratorFunction")),
                                e.prototype = Object.create(w),
                                e
                            }
                            ,
                            e.awrap = function(e) {
                                return {
                                    __await: e
                                }
                            }
                            ,
                            x(E.prototype),
                            c(E.prototype, i, (function() {
                                return this
                            }
                            )),
                            e.AsyncIterator = E,
                            e.async = function(t, n, r, o, a) {
                                void 0 === a && (a = Promise);
                                var i = new E(s(t, n, r, o),a);
                                return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                                    return e.done ? e.value : i.next()
                                }
                                ))
                            }
                            ,
                            x(w),
                            c(w, l, "Generator"),
                            c(w, a, (function() {
                                return this
                            }
                            )),
                            c(w, "toString", (function() {
                                return "[object Generator]"
                            }
                            )),
                            e.keys = function(e) {
                                var t = Object(e)
                                  , n = [];
                                for (var r in t)
                                    n.push(r);
                                return n.reverse(),
                                function e() {
                                    for (; n.length; ) {
                                        var r = n.pop();
                                        if (r in t)
                                            return e.value = r,
                                            e.done = !1,
                                            e
                                    }
                                    return e.done = !0,
                                    e
                                }
                            }
                            ,
                            e.values = k,
                            Z.prototype = {
                                constructor: Z,
                                reset: function(e) {
                                    if (this.prev = 0,
                                    this.next = 0,
                                    this.sent = this._sent = void 0,
                                    this.done = !1,
                                    this.delegate = null,
                                    this.method = "next",
                                    this.arg = void 0,
                                    this.tryEntries.forEach(O),
                                    !e)
                                        for (var t in this)
                                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                                },
                                stop: function() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return this.rval
                                },
                                dispatchException: function(e) {
                                    if (this.done)
                                        throw e;
                                    var t = this;
                                    function r(n, r) {
                                        return i.type = "throw",
                                        i.arg = e,
                                        t.next = n,
                                        r && (t.method = "next",
                                        t.arg = void 0),
                                        !!r
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o]
                                          , i = a.completion;
                                        if ("root" === a.tryLoc)
                                            return r("end");
                                        if (a.tryLoc <= this.prev) {
                                            var l = n.call(a, "catchLoc")
                                              , c = n.call(a, "finallyLoc");
                                            if (l && c) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            } else if (l) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0)
                                            } else {
                                                if (!c)
                                                    throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var o = this.tryEntries[r];
                                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                            var a = o;
                                            break
                                        }
                                    }
                                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                    var i = a ? a.completion : {};
                                    return i.type = e,
                                    i.arg = t,
                                    a ? (this.method = "next",
                                    this.next = a.finallyLoc,
                                    d) : this.complete(i)
                                },
                                complete: function(e, t) {
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                                    d
                                },
                                finish: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e)
                                            return this.complete(n.completion, n.afterLoc),
                                            O(n),
                                            d
                                    }
                                },
                                catch: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var o = r.arg;
                                                O(n)
                                            }
                                            return o
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, t, n) {
                                    return this.delegate = {
                                        iterator: k(e),
                                        resultName: t,
                                        nextLoc: n
                                    },
                                    "next" === this.method && (this.arg = void 0),
                                    d
                                }
                            },
                            e
                        }
                        function y(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return w(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || b(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function v(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || b(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function b(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return w(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                            }
                        }
                        function w(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const x = function(e) {
                            var t = e.formModel
                              , n = e.validate
                              , h = e.onChange
                              , b = e.sidebarContext
                              , w = e.markList
                              , x = v((0,
                            r.useState)(""), 2)
                              , E = x[0]
                              , _ = x[1]
                              , S = v((0,
                            r.useState)(!1), 2)
                              , j = S[0]
                              , O = S[1]
                              , Z = (0,
                            r.useRef)(null)
                              , k = (0,
                            r.useCallback)((function(e) {
                                if (void 0 !== e) {
                                    var t = (0,
                                    a.Sm)(e || [])
                                      , n = (0,
                                    a.HD)(t);
                                    (0,
                                    a.rq)(n),
                                    h({
                                        inputSchema: n,
                                        params: e
                                    })
                                }
                            }
                            ), [h])
                              , A = (0,
                            r.useCallback)((function() {
                                return O(!0)
                            }
                            ), [])
                              , C = (0,
                            r.useCallback)((function() {
                                var e, n, r, o, a, i;
                                O(!1);
                                for (var l = null === (n = null === (e = Z.current) || void 0 === e ? void 0 : e.getSchema) || void 0 === n ? void 0 : n.call(e), c = t.markedKeymap, s = [], u = Object.keys(c || {}).filter((function(e) {
                                    var t, n;
                                    return !!(null === (n = null === (t = c[e]) || void 0 === t ? void 0 : t.path) || void 0 === n ? void 0 : n.length)
                                }
                                )), d = 0; d < u.length; d++) {
                                    for (var p = u[d], g = y(c[p].path), v = m.d9[p] || [], b = l; g.length && b; ) {
                                        var w = g.shift();
                                        b = (null === (r = b.properties) || void 0 === r ? void 0 : r[w]) || (null === (a = null === (o = b.items) || void 0 === o ? void 0 : o.properties) || void 0 === a ? void 0 : a[w])
                                    }
                                    v.includes("any") || b && v.includes(b.type) && !g.length && (!v.includes("array") || "object" === (null === (i = null == b ? void 0 : b.items) || void 0 === i ? void 0 : i.type)) || (s.push(m.zi[p]),
                                    c[p] = {
                                        path: []
                                    })
                                }
                                s.length && (0,
                                f.I)("【".concat(s.join("、"), "】标识数据类型错误，已被重置"), {
                                    type: "warning"
                                }),
                                h({
                                    resultSchema: l,
                                    markedKeymap: c
                                })
                            }
                            ), [h]);
                            return o().createElement(o().Fragment, null, o().createElement(i.Z, {
                                label: "请求参数"
                            }, o().createElement(l.Z, {
                                value: t.params || {
                                    type: "root",
                                    name: "root",
                                    children: []
                                },
                                onChange: k
                            })), o().createElement(i.Z, null, o().createElement(d.Z, {
                                onDebugClick: function() {
                                    return e = void 0,
                                    r = g().mark((function e() {
                                        var r, o, i, l, c, s, u, d, v, w, x, E, S, j, O, Z, k;
                                        return g().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0,
                                                    n()) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 3:
                                                    return s = (0,
                                                    a.Sm)(t.params),
                                                    _(""),
                                                    e.next = 7,
                                                    b.domainModel.test({
                                                        type: "aggregation-model",
                                                        mode: "test",
                                                        id: t.id,
                                                        script: (0,
                                                        a.Tp)((0,
                                                        p.i)(Object.assign(Object.assign({}, t), {
                                                            path: null === (r = t.path) || void 0 === r ? void 0 : r.trim()
                                                        }), !0))
                                                    }, "", s);
                                                case 7:
                                                    for (u = e.sent,
                                                    d = (0,
                                                    a.HD)(u),
                                                    (0,
                                                    a.rq)(d),
                                                    v = t.markedKeymap,
                                                    w = [],
                                                    x = Object.keys(v || {}).filter((function(e) {
                                                        var t, n;
                                                        return !!(null === (n = null === (t = v[e]) || void 0 === t ? void 0 : t.path) || void 0 === n ? void 0 : n.length)
                                                    }
                                                    )),
                                                    E = 0; E < x.length; E++) {
                                                        for (S = x[E],
                                                        j = y(v[S].path),
                                                        O = m.d9[S] || [],
                                                        Z = d; j.length && Z; )
                                                            k = j.shift(),
                                                            Z = (null === (o = Z.properties) || void 0 === o ? void 0 : o[k]) || (null === (l = null === (i = Z.items) || void 0 === i ? void 0 : i.properties) || void 0 === l ? void 0 : l[k]);
                                                        O.includes("any") || Z && O.includes(Z.type) && !j.length && (!O.includes("array") || "object" === (null === (c = null == Z ? void 0 : Z.items) || void 0 === c ? void 0 : c.type)) || (w.push(m.zi[S]),
                                                        v[S] = {
                                                            path: []
                                                        })
                                                    }
                                                    w.length && (0,
                                                    f.I)("【".concat(w.join("、"), "】标识数据类型错误，已被重置"), {
                                                        type: "warning"
                                                    }),
                                                    h({
                                                        resultSchema: d,
                                                        markedKeymap: v
                                                    }),
                                                    e.next = 23;
                                                    break;
                                                case 18:
                                                    e.prev = 18,
                                                    e.t0 = e.catch(0),
                                                    console.log(e.t0),
                                                    h({
                                                        resultSchema: void 0,
                                                        markedKeymap: void 0
                                                    }),
                                                    _((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || e.t0);
                                                case 23:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 18]])
                                    }
                                    )),
                                    new (e || (e = Promise))((function(t, n) {
                                        function o(e) {
                                            try {
                                                i(r.next(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function a(e) {
                                            try {
                                                i(r.throw(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function i(n) {
                                            var r;
                                            n.done ? t(n.value) : (r = n.value,
                                            r instanceof e ? r : new e((function(e) {
                                                e(r)
                                            }
                                            ))).then(o, a)
                                        }
                                        i((r = r.apply(void 0, [])).next())
                                    }
                                    ));
                                    var e, r
                                },
                                params: t.params,
                                onChange: k
                            })), j ? o().createElement(o().Fragment, null, o().createElement(i.Z, {
                                label: "返回数据"
                            }, t.resultSchema ? o().createElement(c.Z, {
                                style: {
                                    margin: 0,
                                    marginBottom: 6
                                },
                                onClick: C
                            }, "保存") : null, o().createElement(s.Z, {
                                schema: t.resultSchema,
                                ref: Z
                            }))) : o().createElement(o().Fragment, null, o().createElement(i.Z, {
                                label: "返回数据"
                            }, t.resultSchema ? o().createElement(c.Z, {
                                style: {
                                    margin: 0,
                                    marginBottom: 6
                                },
                                onClick: A
                            }, "编辑") : null, o().createElement(u.Z, {
                                markList: w,
                                setMarkedKeymap: function(e) {
                                    return h({
                                        markedKeymap: e
                                    })
                                },
                                markedKeymap: t.markedKeymap,
                                schema: t.resultSchema,
                                error: E
                            }))))
                        }
                    }
                    ,
                    4241: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>u
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(6017)
                          , i = n(957)
                          , l = n(5132);
                        function c(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return s(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function s(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const u = function(e) {
                            var t = e.pageInfo
                              , n = e.onChange
                              , s = c((0,
                            r.useState)(!!t), 2)
                              , u = s[0]
                              , d = s[1]
                              , p = c((0,
                            r.useState)(t || {
                                pageNumKey: "",
                                pageSizeKey: ""
                            }), 2)
                              , f = p[0]
                              , m = p[1]
                              , h = (0,
                            r.useCallback)((function(e) {
                                n(e ? f : void 0),
                                d(e)
                            }
                            ), [f, n]);
                            return o().createElement(o().Fragment, null, o().createElement(a.Z, {
                                label: "开启分页"
                            }, o().createElement(i.Z, {
                                defaultChecked: u,
                                onChange: h
                            })), u ? o().createElement(o().Fragment, null, o().createElement(a.Z, {
                                label: "分页索引参数",
                                labelStyle: {
                                    lineHeight: "27px"
                                }
                            }, o().createElement(l.Z, {
                                defaultValue: f.pageNumKey,
                                placeholder: "请输入接口需要传递的分页索引参数命名，例如：pageNum",
                                onBlur: function(e) {
                                    m((function(t) {
                                        return n(Object.assign(Object.assign({}, t), {
                                            pageNumKey: e.target.value
                                        })),
                                        Object.assign(Object.assign({}, t), {
                                            pageNumKey: e.target.value
                                        })
                                    }
                                    ))
                                }
                            })), o().createElement(a.Z, {
                                label: "分页大小参数",
                                labelStyle: {
                                    lineHeight: "27px"
                                }
                            }, o().createElement(l.Z, {
                                defaultValue: f.pageSizeKey,
                                placeholder: "请输入接口需要传递的分页大小参数命名，例如：pageSize",
                                onBlur: function(e) {
                                    m((function(t) {
                                        return n(Object.assign(Object.assign({}, t), {
                                            pageSizeKey: e.target.value
                                        })),
                                        Object.assign(Object.assign({}, t), {
                                            pageSizeKey: e.target.value
                                        })
                                    }
                                    ))
                                }
                            }))) : null)
                        }
                    }
                    ,
                    530: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>x
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1194)
                          , i = n.n(a)
                          , l = n(8250)
                          , c = n(6242)
                          , s = n(9493)
                          , u = n(6178)
                          , d = n(6017)
                          , p = n(5132)
                          , f = n(5525)
                          , m = n(4241)
                          , h = n(5968)
                          , g = n(8786)
                          , y = n(790);
                        function v(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || b(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function b(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return w(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                            }
                        }
                        function w(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const x = function(e) {
                            var t = e.formModel
                              , n = e.onChange
                              , a = e.sidebarContext
                              , x = e.onChangeEntity
                              , E = e.entity
                              , _ = v((0,
                            r.useState)(t), 2)
                              , S = _[0]
                              , j = _[1]
                              , O = (0,
                            r.useRef)()
                              , Z = (0,
                            r.useRef)()
                              , k = (0,
                            r.useRef)(!0)
                              , A = v((0,
                            r.useState)({}), 2)
                              , C = A[0]
                              , N = A[1]
                              , P = v((0,
                            r.useState)(!1), 2)
                              , R = P[0]
                              , L = P[1]
                              , T = v((0,
                            r.useState)(!1), 2)
                              , I = T[0]
                              , U = T[1]
                              , z = function() {
                                var e;
                                null === (e = O.current) || void 0 === e || e.classList.remove(g.Z["sidebar-panel-code-full"]),
                                L(!1)
                            }
                              , M = function() {
                                var e;
                                U(!1),
                                null === (e = Z.current) || void 0 === e || e.classList.remove(g.Z["sidebar-panel-code-full"])
                            }
                              , V = (0,
                            r.useCallback)((function(e) {
                                var t, n, r, o = E || {
                                    id: (0,
                                    u.Vj)(),
                                    fieldAry: []
                                };
                                e.markedKeymap && (o = (null === (n = null === (t = e.markedKeymap.dataSource) || void 0 === t ? void 0 : t.path) || void 0 === n ? void 0 : n.length) ? Object.assign({
                                    id: o.id
                                }, (0,
                                u.UK)("resultSchema"in e ? e.resultSchema : S.resultSchema, function(e) {
                                    if (Array.isArray(e))
                                        return w(e)
                                }(r = e.markedKeymap.dataSource.path) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(r) || b(r) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())) : {
                                    id: o.id,
                                    fieldAry: []
                                }),
                                x(o),
                                j((function(t) {
                                    return Object.assign(Object.assign(Object.assign({}, t), e), e.markedKeymap ? (0,
                                    u.gp)(e.resultSchema || t.resultSchema, e.markedKeymap) : {})
                                }
                                ))
                            }
                            ), [x, E, S]);
                            return (0,
                            r.useEffect)((function() {
                                k.current ? k.current = !1 : n(S)
                            }
                            ), [S]),
                            o().createElement(o().Fragment, null, o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "基本信息",
                                defaultFold: !1
                            }, o().createElement("div", {
                                className: y.Z.item
                            }, o().createElement("label", null, "名称"), o().createElement("div", {
                                className: "".concat(y.Z.editor, " ").concat(y.Z.textEdt)
                            }, o().createElement("input", {
                                type: "text",
                                placeholder: "服务接口的标题",
                                defaultValue: S.title,
                                onChange: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            title: e.target.value
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: y.Z.item
                            }, o().createElement("label", null, o().createElement("i", null, "*"), "地址"), o().createElement("div", {
                                className: "".concat(y.Z.editor, " ").concat(y.Z.textEdt, " ").concat(C.path ? y.Z.error : ""),
                                "data-err": C.path
                            }, o().createElement("textarea", {
                                defaultValue: S.path,
                                placeholder: "接口的请求路径",
                                onChange: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            path: e.target.value
                                        })
                                    }
                                    )),
                                    e.target.value && N((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            path: ""
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", null), o().createElement("div", {
                                className: y.Z.item
                            }, o().createElement("label", null, o().createElement("i", null, "*"), "请求方法"), o().createElement("div", {
                                className: y.Z.editor
                            }, o().createElement(c.Z, {
                                binding: [S, "method"],
                                options: f.E0,
                                onChange: function(e) {
                                    return j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            method: e
                                        })
                                    }
                                    ))
                                }
                            }))))), o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当开始请求"
                            }, R ? o().createElement("div", {
                                onClick: z,
                                className: g.Z["sidebar-panel-code-icon-full"]
                            }, s.LW) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    null === (e = O.current) || void 0 === e || e.classList.add(g.Z["sidebar-panel-code-full"]),
                                    L(!0)
                                },
                                className: g.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    O.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && z()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            input: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(S.input),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当返回响应"
                            }, I ? o().createElement("div", {
                                onClick: M,
                                className: g.Z["sidebar-panel-code-icon-full"]
                            }, s.dK) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    U(!0),
                                    null === (e = Z.current) || void 0 === e || e.classList.add(g.Z["sidebar-panel-code-full"])
                                },
                                className: g.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    Z.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && M()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            output: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(S.output),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "其他信息"
                            }, o().createElement(d.Z, {
                                label: "接口描述"
                            }, o().createElement(p.Z, {
                                defaultValue: S.desc,
                                onBlur: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            desc: e.target.value
                                        })
                                    }
                                    ))
                                }
                            })), o().createElement(d.Z, {
                                label: "文档链接"
                            }, o().createElement(p.K, {
                                style: {
                                    height: 80
                                },
                                onBlur: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            doc: e.target.value
                                        })
                                    }
                                    ))
                                },
                                defaultValue: S.doc
                            })))), o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "请求入参",
                                defaultFold: !1
                            }, o().createElement(m.Z, {
                                pageInfo: null == S ? void 0 : S.pageInfo,
                                onChange: function(e) {
                                    j((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            pageInfo: e
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: y.Z.ct
                            }, o().createElement(l.Z, {
                                header: "接口调试",
                                defaultFold: !1
                            }, o().createElement(h.Z, {
                                markList: f.Nd,
                                sidebarContext: a,
                                formModel: S,
                                validate: function() {
                                    return !!S.path || (N((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            path: "请填写完整的地址"
                                        })
                                    }
                                    )),
                                    !1)
                                },
                                onChange: V
                            }))))
                        }
                    }
                    ,
                    7380: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>x
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(7111)
                          , i = n.n(a)
                          , l = n(5619)
                          , c = n(5e3)
                          , s = n(2008)
                          , u = n(8543)
                          , d = n(5196)
                          , p = n(4113)
                          , f = n(6690)
                          , m = n(309);
                        function h(e) {
                            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            h(e)
                        }
                        function g(e, t, n) {
                            return (t = function(e) {
                                var t = function(e, t) {
                                    if ("object" !== h(e) || null === e)
                                        return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" !== h(r))
                                            return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(e);
                                return "symbol" === h(t) ? t : String(t)
                            }(t))in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                            e
                        }
                        function y(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return v(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function v(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        var b = [{
                            name: "查询",
                            key: "SELECT"
                        }, {
                            name: "新建",
                            key: "INSERT"
                        }, {
                            name: "更新",
                            key: "UPDATE"
                        }, {
                            name: "删除",
                            key: "DELETE"
                        }]
                          , w = {
                            SELECT: "查询",
                            INSERT: "新建",
                            UPDATE: "更新",
                            DELETE: "删除"
                        };
                        const x = function(e) {
                            var t = e.style
                              , n = e.onClose
                              , a = e.updateService
                              , h = e.initialModel
                              , v = e.sidebarContext
                              , x = y((0,
                            r.useState)("SELECT"), 2)
                              , E = x[0]
                              , _ = x[1]
                              , S = (0,
                            r.useRef)({})
                              , j = y((0,
                            r.useState)((0,
                            p.Xh)(h)), 2)
                              , O = j[0]
                              , Z = j[1]
                              , k = (0,
                            r.useMemo)((function() {
                                return {
                                    addBlurAry: function(e, t) {
                                        return S.current = Object.assign(Object.assign({}, S.current), g({}, e, t))
                                    }
                                }
                            }
                            ), [])
                              , A = (0,
                            r.useCallback)((function() {
                                for (var e, t, r, o, i, l = O.query.abilitySet.filter((function(e) {
                                    return "PAGE" !== e
                                }
                                )), c = 0; c < l.length; c++) {
                                    var s = l[c];
                                    if (!(null === (t = null === (e = O.query[s]) || void 0 === e ? void 0 : e.path) || void 0 === t ? void 0 : t.trim()))
                                        return (0,
                                        d.I)("".concat(w[s], "的请求路径不能为空")),
                                        void _(s)
                                }
                                (null === (i = null === (o = null === (r = O.query.SELECT.markedKeymap) || void 0 === r ? void 0 : r.dataSource) || void 0 === o ? void 0 : o.path) || void 0 === i ? void 0 : i.length) || ((0,
                                d.I)("未标识查询的接口返回信息数据源，可能会造成组件运行错误", {
                                    type: "warning"
                                }),
                                _("SELECT")),
                                null == l || l.forEach((function(e) {
                                    O.query[e].script = (0,
                                    u.i)(Object.assign(Object.assign({}, O.query[e]), {
                                        modelType: "domain"
                                    }))
                                }
                                )),
                                a(h ? "update" : "create", Object.assign(Object.assign({}, O), {
                                    query: Object.assign(Object.assign({}, O.query), {
                                        edited: !0
                                    })
                                })),
                                n()
                            }
                            ), [O, h])
                              , C = (0,
                            r.useCallback)((function() {
                                return "SELECT" === E ? o().createElement(c.Z, {
                                    sidebarContext: v,
                                    entity: O.query.entity,
                                    formModel: O.query.SELECT,
                                    onChangeEntity: function(e) {
                                        Z((function(t) {
                                            return Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    entity: Object.assign(Object.assign({}, e), {
                                                        domainFileId: t.query.entity.domainFileId,
                                                        domainFileName: t.query.entity.domainFileName,
                                                        entityId: t.query.entity.entityId
                                                    })
                                                })
                                            })
                                        }
                                        ))
                                    },
                                    onChange: function(e) {
                                        Z((function(t) {
                                            var n = t.query.abilitySet || [];
                                            return n.includes("SELECT") || n.push("SELECT"),
                                            e.pageInfo ? n.includes("PAGE") || n.push("PAGE") : n = n.filter((function(e) {
                                                return "PAGE" !== e
                                            }
                                            )),
                                            Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    SELECT: e,
                                                    abilitySet: n
                                                })
                                            })
                                        }
                                        ))
                                    }
                                }) : ["INSERT", "UPDATE", "DELETE"].includes(E) ? o().createElement(s.Z, {
                                    key: E,
                                    sidebarContext: v,
                                    entity: O.query.entity,
                                    formModel: O.query[E],
                                    onChangeEntity: function(e) {
                                        return Z((function(t) {
                                            return Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), {
                                                    entity: e
                                                })
                                            })
                                        }
                                        ))
                                    },
                                    onChange: function(e) {
                                        Z((function(t) {
                                            var n, r = t.query.abilitySet || [];
                                            return r.includes(E) || r.push(E),
                                            Object.assign(Object.assign({}, t), {
                                                query: Object.assign(Object.assign({}, t.query), (n = {},
                                                g(n, E, e),
                                                g(n, "abilitySet", r),
                                                n))
                                            })
                                        }
                                        ))
                                    }
                                }) : null
                            }
                            ), [E]);
                            return i().createPortal(o().createElement("div", {
                                className: m.Z.sidebarPanelEdit,
                                "data-id": "plugin-panel",
                                style: Object.assign(Object.assign({}, t), {
                                    left: 361
                                }),
                                onClick: function() {
                                    Object.values(S.current).forEach((function(e) {
                                        return null == e ? void 0 : e()
                                    }
                                    ))
                                }
                            }, o().createElement(f.R.Provider, {
                                value: k
                            }, o().createElement("div", {
                                className: m.Z.sidebarPanelTitle
                            }, o().createElement("div", null, "领域模型"), o().createElement("div", null, o().createElement(l.Z, {
                                size: "small",
                                type: "primary",
                                onClick: A
                            }, "保 存"), o().createElement(l.Z, {
                                size: "small",
                                style: {
                                    marginLeft: "12px"
                                },
                                onClick: n
                            }, "关 闭"))), o().createElement("div", {
                                className: m.Z.item
                            }, o().createElement("label", null, "模型名称"), o().createElement("div", {
                                className: "".concat(m.Z.editor, " ").concat(m.Z.textEdt),
                                style: {
                                    marginRight: "12px"
                                }
                            }, o().createElement("input", {
                                type: "text",
                                placeholder: "模型名称",
                                defaultValue: O.title,
                                onChange: function(e) {
                                    return Z((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            title: e.target.value
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: m.Z.tabs
                            }, b.map((function(e) {
                                return o().createElement("div", {
                                    key: e.key,
                                    className: "".concat(m.Z.tab, " ").concat(E === e.key ? m.Z.activeTab : ""),
                                    onClick: function() {
                                        return _(e.key)
                                    }
                                }, e.name)
                            }
                            ))), o().createElement("div", {
                                className: m.Z.tabContent
                            }, C()))), document.body)
                        }
                    }
                    ,
                    2008: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>y
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1194)
                          , i = n.n(a)
                          , l = n(8250)
                          , c = n(9493)
                          , s = n(6178)
                          , u = n(5525)
                          , d = n(5968)
                          , p = n(8786)
                          , f = n(309)
                          , m = n(5619);
                        function h(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return g(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function g(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const y = function(e) {
                            var t = e.formModel
                              , n = e.onChange
                              , a = e.sidebarContext
                              , g = h((0,
                            r.useState)(t), 2)
                              , y = g[0]
                              , v = g[1]
                              , b = (0,
                            r.useRef)()
                              , w = (0,
                            r.useRef)()
                              , x = (0,
                            r.useRef)(!0)
                              , E = h((0,
                            r.useState)({}), 2)
                              , _ = (E[0],
                            E[1])
                              , S = h((0,
                            r.useState)(!1), 2)
                              , j = S[0]
                              , O = S[1]
                              , Z = h((0,
                            r.useState)(!1), 2)
                              , k = Z[0]
                              , A = Z[1]
                              , C = function() {
                                var e;
                                null === (e = b.current) || void 0 === e || e.classList.remove(p.Z["sidebar-panel-code-full"]),
                                O(!1)
                            }
                              , N = function() {
                                var e;
                                A(!1),
                                null === (e = w.current) || void 0 === e || e.classList.remove(p.Z["sidebar-panel-code-full"])
                            }
                              , P = (0,
                            r.useCallback)((function(e) {
                                v((function(t) {
                                    return Object.assign(Object.assign(Object.assign({}, t), e), e.markedKeymap ? (0,
                                    s.gp)(e.resultSchema || t.resultSchema, e.markedKeymap) : {})
                                }
                                ))
                            }
                            ), []);
                            return (0,
                            r.useEffect)((function() {
                                x.current ? x.current = !1 : n(y)
                            }
                            ), [y]),
                            o().createElement(o().Fragment, null, o().createElement("div", {
                                className: f.Z.ct
                            }, o().createElement(l.Z, {
                                header: "基本信息",
                                defaultFold: !1
                            }, o().createElement("div", {
                                className: f.Z.item
                            }, o().createElement("label", null, "领域接口"), o().createElement("div", {
                                className: "".concat(f.Z.editor, " ").concat(f.Z.textEdt)
                            }, o().createElement(m.Z, {
                                size: "small",
                                type: "default",
                                className: f.Z.defaultButton
                            }, "更新接口"), o().createElement("div", {
                                className: f.Z.serviceTitle
                            }, "已选择接口: ", y.title))))), o().createElement("div", {
                                className: f.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当开始请求"
                            }, j ? o().createElement("div", {
                                onClick: C,
                                className: p.Z["sidebar-panel-code-icon-full"]
                            }, c.LW) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    null === (e = b.current) || void 0 === e || e.classList.add(p.Z["sidebar-panel-code-full"]),
                                    O(!0)
                                },
                                className: p.Z["sidebar-panel-code-icon"]
                            }, c.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    b.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && C()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    v((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            input: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                s.oV)(y.input),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: f.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当返回响应"
                            }, k ? o().createElement("div", {
                                onClick: N,
                                className: p.Z["sidebar-panel-code-icon-full"]
                            }, c.dK) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    A(!0),
                                    null === (e = w.current) || void 0 === e || e.classList.add(p.Z["sidebar-panel-code-full"])
                                },
                                className: p.Z["sidebar-panel-code-icon"]
                            }, c.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    w.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && N()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    v((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            output: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                s.oV)(y.output),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: f.Z.ct
                            }, o().createElement(l.Z, {
                                header: "接口调试",
                                defaultFold: !1
                            }, o().createElement(d.Z, {
                                markList: u.oR,
                                sidebarContext: a,
                                formModel: y,
                                validate: function() {
                                    return !!y.path || (_((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            path: "请填写完整的地址"
                                        })
                                    }
                                    )),
                                    !1)
                                },
                                onChange: P
                            }))))
                        }
                    }
                    ,
                    5e3: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>E
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(1194)
                          , i = n.n(a)
                          , l = n(8250)
                          , c = n(5619)
                          , s = n(9493)
                          , u = n(6178)
                          , d = n(5525)
                          , p = n(4241)
                          , f = n(5968)
                          , m = n(6357)
                          , h = n(6429)
                          , g = n(8543)
                          , y = n(8786)
                          , v = n(309);
                        function b(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || w(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function w(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return x(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                            }
                        }
                        function x(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const E = function(e) {
                            var t = e.formModel
                              , n = e.onChange
                              , a = e.sidebarContext
                              , E = e.onChangeEntity
                              , _ = e.entity
                              , S = b((0,
                            r.useState)(t), 2)
                              , j = S[0]
                              , O = S[1]
                              , Z = b((0,
                            r.useState)(!1), 2)
                              , k = Z[0]
                              , A = Z[1]
                              , C = (0,
                            r.useRef)()
                              , N = (0,
                            r.useRef)()
                              , P = (0,
                            r.useRef)(!0)
                              , R = b((0,
                            r.useState)(!1), 2)
                              , L = R[0]
                              , T = R[1]
                              , I = b((0,
                            r.useState)(!1), 2)
                              , U = I[0]
                              , z = I[1]
                              , M = function() {
                                var e;
                                null === (e = C.current) || void 0 === e || e.classList.remove(y.Z["sidebar-panel-code-full"]),
                                T(!1)
                            }
                              , V = function() {
                                var e;
                                z(!1),
                                null === (e = N.current) || void 0 === e || e.classList.remove(y.Z["sidebar-panel-code-full"])
                            }
                              , q = (0,
                            r.useCallback)((function(e) {
                                var t, n, r, o = _ || {
                                    id: (0,
                                    u.Vj)(),
                                    fieldAry: []
                                };
                                e.markedKeymap && (o = (null === (n = null === (t = e.markedKeymap.dataSource) || void 0 === t ? void 0 : t.path) || void 0 === n ? void 0 : n.length) ? Object.assign({
                                    id: o.id
                                }, (0,
                                u.UK)("resultSchema"in e ? e.resultSchema : j.resultSchema, function(e) {
                                    if (Array.isArray(e))
                                        return x(e)
                                }(r = e.markedKeymap.dataSource.path) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(r) || w(r) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())) : {
                                    id: o.id,
                                    fieldAry: []
                                }),
                                E(o),
                                O((function(t) {
                                    return Object.assign(Object.assign(Object.assign({}, t), e), e.markedKeymap ? (0,
                                    u.gp)(e.resultSchema || t.resultSchema, e.markedKeymap) : {})
                                }
                                ))
                            }
                            ), [E, _, j])
                              , D = (0,
                            r.useCallback)((function() {
                                return A(!0)
                            }
                            ), [])
                              , W = (0,
                            r.useCallback)((function() {
                                return A(!1)
                            }
                            ), [])
                              , Q = (0,
                            r.useMemo)((function() {
                                return {
                                    add: function(e) {
                                        O((function(t) {
                                            return Object.assign(Object.assign(Object.assign({}, t), e), {
                                                serviceId: e.id,
                                                errorSchema: h.fZ,
                                                pageInfo: void 0,
                                                script: (0,
                                                g.i)(Object.assign(Object.assign({}, e), {
                                                    modelType: "domain"
                                                })),
                                                markedKeymap: {}
                                            })
                                        }
                                        ))
                                    }
                                }
                            }
                            ), []);
                            return (0,
                            r.useEffect)((function() {
                                P.current ? P.current = !1 : n(j)
                            }
                            ), [j]),
                            o().createElement(o().Fragment, null, o().createElement("div", {
                                className: v.Z.ct
                            }, o().createElement(l.Z, {
                                header: "基本信息",
                                defaultFold: !1
                            }, o().createElement("div", {
                                className: v.Z.item
                            }, o().createElement("label", null, "领域接口"), o().createElement("div", {
                                className: "".concat(v.Z.editor, " ").concat(v.Z.textEdt)
                            }, o().createElement(c.Z, {
                                size: "small",
                                type: "default",
                                className: v.Z.defaultButton,
                                onClick: D
                            }, "更新接口"), o().createElement("div", {
                                className: v.Z.serviceTitle
                            }, "已选择接口: ", j.title))))), o().createElement("div", {
                                className: v.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当开始请求"
                            }, L ? o().createElement("div", {
                                onClick: M,
                                className: y.Z["sidebar-panel-code-icon-full"]
                            }, s.LW) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    null === (e = C.current) || void 0 === e || e.classList.add(y.Z["sidebar-panel-code-full"]),
                                    T(!0)
                                },
                                className: y.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    C.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && M()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    O((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            input: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(j.input),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: v.Z.ct
                            }, o().createElement(l.Z, {
                                header: "当返回响应"
                            }, U ? o().createElement("div", {
                                onClick: V,
                                className: y.Z["sidebar-panel-code-icon-full"]
                            }, s.dK) : o().createElement("div", {
                                onClick: function() {
                                    var e;
                                    z(!0),
                                    null === (e = N.current) || void 0 === e || e.classList.add(y.Z["sidebar-panel-code-full"])
                                },
                                className: y.Z["sidebar-panel-code-icon"]
                            }, s.dK), o().createElement(i(), {
                                onMounted: function(e, t, n) {
                                    N.current = n,
                                    n.onclick = function(e) {
                                        e.target === n && V()
                                    }
                                },
                                env: {
                                    isNode: !1,
                                    isElectronRenderer: !1
                                },
                                onChange: function(e) {
                                    O((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            output: encodeURIComponent(e)
                                        })
                                    }
                                    ))
                                },
                                value: (0,
                                u.oV)(j.output),
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                language: "javascript",
                                theme: "light",
                                lineNumbers: "off",
                                scrollbar: {
                                    horizontalScrollbarSize: 2,
                                    verticalScrollbarSize: 2
                                },
                                minimap: {
                                    enabled: !1
                                }
                            }))), o().createElement("div", {
                                className: v.Z.ct
                            }, o().createElement(l.Z, {
                                header: "请求入参",
                                defaultFold: !1
                            }, o().createElement(p.Z, {
                                key: JSON.stringify(null == j ? void 0 : j.pageInfo),
                                pageInfo: null == j ? void 0 : j.pageInfo,
                                onChange: function(e) {
                                    O((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            pageInfo: e
                                        })
                                    }
                                    ))
                                }
                            }))), o().createElement("div", {
                                className: v.Z.ct
                            }, o().createElement(l.Z, {
                                header: "接口调试",
                                defaultFold: !1
                            }, o().createElement(f.Z, {
                                markList: d.Nd,
                                sidebarContext: a,
                                formModel: j,
                                validate: function() {
                                    return !0
                                },
                                onChange: q
                            }))), k ? o().createElement(m.Z, {
                                single: !0,
                                openFileSelector: a.openFileSelector,
                                onClose: W,
                                connectorService: Q
                            }) : null)
                        }
                    }
                    ,
                    6429: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Dp: ()=>y,
                            FN: ()=>b,
                            ZP: ()=>E,
                            fZ: ()=>m,
                            lE: ()=>w,
                            nr: ()=>v
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(5274)
                          , i = n(2721)
                          , l = n(5525)
                          , c = n(8543)
                          , s = n(6178)
                          , u = n(6984);
                        function d(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || p(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function p(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return f(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                            }
                        }
                        function f(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        var m = {
                            type: "object",
                            properties: {
                                code: {
                                    type: "number"
                                },
                                msg: {
                                    type: "string"
                                }
                            }
                        }
                          , h = {
                            type: "object",
                            properties: {
                                code: {
                                    type: "number"
                                },
                                data: {
                                    type: "number"
                                },
                                msg: {
                                    type: "string"
                                }
                            }
                        }
                          , g = {
                            successStatus: {
                                path: ["code"],
                                value: 1
                            },
                            response: {
                                path: ["data"]
                            },
                            error: {
                                path: ["msg"]
                            }
                        }
                          , y = function(e, t) {
                            var n = l.yI.replace("__serviceId__", t.id).replace("__fileId__", String(t.domainFileId))
                              , r = function(e) {
                                return {
                                    method: "POST",
                                    type: "domain",
                                    serviceId: t.id + "_" + e,
                                    path: "/api/system/domain/run",
                                    input: encodeURIComponent(n.replace("__action__", e)),
                                    output: encodeURIComponent(l.Aj)
                                }
                            };
                            return {
                                id: e,
                                type: "domain",
                                title: t.name,
                                query: {
                                    SELECT: Object.assign(Object.assign({}, r("SELECT")), {
                                        title: t.name + "的查询接口",
                                        outputSchema: (0,
                                        s.gu)(t),
                                        resultSchema: (0,
                                        s.gu)(t),
                                        markedKeymap: {
                                            successStatus: {
                                                path: ["code"],
                                                value: 1
                                            },
                                            dataSource: {
                                                path: ["data", "dataSource"]
                                            },
                                            total: {
                                                path: ["data", "total"]
                                            },
                                            pageNum: {
                                                path: ["data", "pageNum"]
                                            },
                                            pageSize: {
                                                path: ["data", "pageSize"]
                                            },
                                            error: {
                                                path: ["msg"]
                                            }
                                        },
                                        pageInfo: {
                                            pageNumKey: "pageNum",
                                            pageSizeKey: "pageSize"
                                        },
                                        errorSchema: m,
                                        script: (0,
                                        c.i)(Object.assign(Object.assign({}, r("SELECT")), {
                                            modelType: "domain"
                                        }))
                                    }),
                                    DELETE: Object.assign(Object.assign({}, r("DELETE")), {
                                        title: t.name + "的删除接口",
                                        outputSchema: h,
                                        resultSchema: h,
                                        errorSchema: m,
                                        markedKeymap: g,
                                        script: (0,
                                        c.i)(Object.assign(Object.assign({}, r("DELETE")), {
                                            modelType: "domain"
                                        }))
                                    }),
                                    UPDATE: Object.assign(Object.assign({}, r("UPDATE")), {
                                        title: t.name + "的更新接口",
                                        outputSchema: h,
                                        errorSchema: m,
                                        resultSchema: h,
                                        markedKeymap: g,
                                        script: (0,
                                        c.i)(Object.assign(Object.assign({}, r("UPDATE")), {
                                            modelType: "domain"
                                        }))
                                    }),
                                    INSERT: Object.assign(Object.assign({}, r("INSERT")), {
                                        title: t.name + "的新建接口",
                                        outputSchema: h,
                                        resultSchema: h,
                                        markedKeymap: g,
                                        errorSchema: m,
                                        script: (0,
                                        c.i)(Object.assign(Object.assign({}, r("INSERT")), {
                                            modelType: "domain"
                                        }))
                                    }),
                                    SEARCH_BY_FIELD: Object.assign(Object.assign({}, r("SEARCH_BY_FIELD")), {
                                        title: t.name + "的关联字段检索接口",
                                        outputSchema: (0,
                                        s.gL)(t),
                                        resultSchema: (0,
                                        s.gL)(t),
                                        errorSchema: m,
                                        markedKeymap: g,
                                        script: (0,
                                        c.i)(Object.assign(Object.assign({}, r("SEARCH_BY_FIELD")), {
                                            modelType: "domain"
                                        }))
                                    }),
                                    abilitySet: ["SELECT", "DELETE", "UPDATE", "INSERT", "SEARCH_BY_FIELD", "PAGE"],
                                    entity: t
                                },
                                createTime: Date.now(),
                                updateTime: Date.now()
                            }
                        }
                          , v = function(e) {
                            return new Promise((function(t, n) {
                                a.Z.get("/paas/api/domain/bundle?fileId=".concat(e)).then((function(e) {
                                    1 === e.data.code ? t(e.data.data.entityAry.filter((function(e) {
                                        return e.isOpen
                                    }
                                    )).map((function(e) {
                                        return Object.assign(Object.assign({}, e), {
                                            id: e.id
                                        })
                                    }
                                    ))) : n(e.data.msg || e.data.message)
                                }
                                )).catch(n)
                            }
                            ))
                        }
                          , b = function(e, t) {
                            if (!e)
                                return "deleted";
                            if (e.fieldAry.length !== t.fieldAry.length)
                                return "changed";
                            for (var n = 0; n < e.fieldAry.length; n++) {
                                var r = e.fieldAry[n]
                                  , o = t.fieldAry[n];
                                if (r.id !== o.id || r.name !== o.name || r.bizType !== o.bizType || r.dbType !== o.dbType || (0,
                                s.or)(r.mapping) !== (0,
                                s.or)(o.mapping) || "enum" === r.bizType && (0,
                                s.or)(r.enumValues) !== (0,
                                s.or)(o.enumValues))
                                    return "changed"
                            }
                        }
                          , w = {
                            changed: "实体信息存在变更，请刷新实体~",
                            deleted: "对应模型中实体已删除 或 未开放领域服务，请前往模型编辑页确认~"
                        }
                          , x = o().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            width: "16",
                            height: "16"
                        }, o().createElement("path", {
                            d: "M512 230.4c-63.5136 0-115.2-51.6864-115.2-115.2s51.6864-115.2 115.2-115.2c63.5264 0 115.2 51.6864 115.2 115.2s-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM512 1024c-63.5136 0-115.2-51.6736-115.2-115.2s51.6864-115.2 115.2-115.2c63.5264 0 115.2 51.6736 115.2 115.2s-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM908.8 627.2c-63.5264 0-115.2-51.6736-115.2-115.2 0-63.5136 51.6736-115.2 115.2-115.2s115.2 51.6864 115.2 115.2c0 63.5264-51.6736 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64zM115.2 627.2c-63.5136 0-115.2-51.6736-115.2-115.2 0-63.5136 51.6864-115.2 115.2-115.2s115.2 51.6864 115.2 115.2c0 63.5264-51.6864 115.2-115.2 115.2z m0-179.2c-35.2896 0-64 28.7104-64 64s28.7104 64 64 64 64-28.7104 64-64-28.7104-64-64-64z",
                            fill: "#555555"
                        }), o().createElement("path", {
                            d: "M320.5376 219.392a25.6 25.6 0 0 1-13.184-47.5648 392.256 392.256 0 0 1 116.5184-46.6688 25.6 25.6 0 0 1 11.1488 49.984 341.5552 341.5552 0 0 0-101.3376 40.6016 25.6384 25.6384 0 0 1-13.1456 3.648zM703.4624 219.4048c-4.4928 0-9.024-1.1776-13.1456-3.6608a341.2736 341.2736 0 0 0-101.3248-40.6016 25.6256 25.6256 0 0 1-19.4176-30.5664 25.664 25.664 0 0 1 30.5664-19.4176 392.3968 392.3968 0 0 1 116.5312 46.6688 25.6128 25.6128 0 0 1-13.2096 47.5776zM429.4656 899.456c-1.8432 0-3.7248-0.2048-5.5936-0.6144a392.64 392.64 0 0 1-116.5184-46.656 25.6 25.6 0 0 1 26.3296-43.9296 341.2096 341.2096 0 0 0 101.3376 40.6016 25.6 25.6 0 0 1-5.5552 50.5984zM594.5344 899.456a25.6 25.6 0 0 1-5.5424-50.5856 341.1712 341.1712 0 0 0 101.3248-40.6144 25.6 25.6 0 1 1 26.3424 43.904 392.0256 392.0256 0 0 1-116.5312 46.6816 26.0864 26.0864 0 0 1-5.5936 0.6144zM150.1696 455.04a25.6256 25.6256 0 0 1-25.024-31.1808 391.808 391.808 0 0 1 46.6816-116.5184 25.6 25.6 0 0 1 43.904 26.3424 341.184 341.184 0 0 0-40.6144 101.3376 25.5872 25.5872 0 0 1-24.9472 20.0192zM193.8176 729.088c-8.704 0-17.1776-4.4288-21.9776-12.4288a392.1664 392.1664 0 0 1-46.6816-116.5312 25.6 25.6 0 0 1 49.984-11.1488 341.0304 341.0304 0 0 0 40.6144 101.3248 25.6 25.6 0 0 1-21.9392 38.784zM830.1952 729.088a25.5744 25.5744 0 0 1-21.9392-38.7584 341.2096 341.2096 0 0 0 40.6016-101.3248 25.6768 25.6768 0 0 1 30.5536-19.4304 25.6 25.6 0 0 1 19.4304 30.5536 392.512 392.512 0 0 1-46.656 116.5312 25.6256 25.6256 0 0 1-21.9904 12.4288zM873.8304 455.04a25.6128 25.6128 0 0 1-24.96-20.032 341.4912 341.4912 0 0 0-40.6016-101.3376 25.6128 25.6128 0 0 1 43.9296-26.3296 392.64 392.64 0 0 1 46.656 116.5184 25.6 25.6 0 0 1-25.024 31.1808z",
                            fill: "#555555"
                        }), o().createElement("path", {
                            d: "M231.424 913.0496a102.016 102.016 0 0 1-72.3712-29.9264l-18.176-18.176c-39.9104-39.9104-39.9104-104.832 0-144.7552l34.816-34.816a25.6 25.6 0 0 1 36.2112 36.1984l-34.816 34.816a51.2256 51.2256 0 0 0 0 72.3456l18.176 18.176a51.2256 51.2256 0 0 0 72.3456 0l34.816-34.8288a25.6 25.6 0 0 1 36.2112 36.1984l-34.816 34.8288a102.0928 102.0928 0 0 1-72.3968 29.9392zM830.1952 346.112a25.6 25.6 0 0 1-18.0992-43.712l34.8288-34.816a50.7648 50.7648 0 0 0 14.9632-36.16 50.8416 50.8416 0 0 0-14.9632-36.1856l-18.176-18.176a51.2256 51.2256 0 0 0-72.3456 0l-34.816 34.816a25.6 25.6 0 1 1-36.1984-36.2112l34.816-34.816c39.8976-39.9104 104.8448-39.9104 144.7552 0l18.176 18.176a101.6832 101.6832 0 0 1 29.9648 72.384 101.632 101.632 0 0 1-29.9648 72.3712l-34.8288 34.816a25.4848 25.4848 0 0 1-18.112 7.5136zM792.576 913.0624a101.952 101.952 0 0 1-72.3712-29.9392l-34.816-34.8288a25.6 25.6 0 1 1 36.1984-36.1984l34.816 34.8288c19.3024 19.3024 53.056 19.3024 72.3456 0l18.176-18.176c9.6512-9.6512 14.9632-22.5024 14.9632-36.1728s-5.312-26.5216-14.9632-36.1728l-34.8288-34.816a25.6 25.6 0 1 1 36.1984-36.1984l34.8288 34.816c39.9104 39.9104 39.9104 104.832 0 144.7552l-18.176 18.176a101.9904 101.9904 0 0 1-72.3712 29.9264zM193.792 346.112a25.472 25.472 0 0 1-18.0992-7.5008l-34.816-34.816c-19.328-19.3152-29.9648-45.0304-29.9648-72.3712s10.6496-53.056 29.9648-72.3712l18.176-18.1632c39.9104-39.8976 104.8576-39.8976 144.7424 0l34.816 34.816a25.6 25.6 0 1 1-36.1984 36.1984l-34.816-34.816a51.2256 51.2256 0 0 0-72.3456 0l-18.176 18.1632c-9.6512 9.6512-14.9632 22.4896-14.9632 36.1728s5.312 26.5216 14.9632 36.1728l34.816 34.816a25.6 25.6 0 0 1-18.0992 43.6992zM512 665.6c-84.6976 0-153.6-68.9024-153.6-153.6s68.9024-153.6 153.6-153.6 153.6 68.9024 153.6 153.6-68.9024 153.6-153.6 153.6z m0-256c-56.4608 0-102.4 45.9392-102.4 102.4s45.9392 102.4 102.4 102.4 102.4-45.9392 102.4-102.4-45.9392-102.4-102.4-102.4z"
                        }));
                        const E = function(e) {
                            var t = e.onClose
                              , n = e.updateService
                              , a = e.sidebarContext
                              , c = e.panelVisible
                              , m = d((0,
                            r.useState)(null), 2)
                              , h = m[0]
                              , g = m[1]
                              , b = d((0,
                            r.useState)([]), 2)
                              , w = b[0]
                              , E = b[1]
                              , _ = d((0,
                            r.useState)([]), 2)
                              , S = _[0]
                              , j = _[1]
                              , O = (0,
                            r.useRef)(null)
                              , Z = (0,
                            r.useCallback)((function() {
                                O.current = null,
                                g(null),
                                null == t || t()
                            }
                            ), [t])
                              , k = (0,
                            r.useCallback)((function() {
                                j((function(e) {
                                    return e.forEach((function(e) {
                                        n("create", y(e.id, Object.assign(Object.assign({}, e), {
                                            id: e.entityId
                                        })))
                                    }
                                    )),
                                    []
                                }
                                )),
                                Z()
                            }
                            ), [Z])
                              , A = (0,
                            r.useCallback)((function(e) {
                                j((function(t) {
                                    return [].concat(function(e) {
                                        if (Array.isArray(e))
                                            return f(e)
                                    }(n = t) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                            return Array.from(e)
                                    }(n) || p(n) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(), [e]);
                                    var n
                                }
                                ))
                            }
                            ), [])
                              , C = (0,
                            r.useCallback)((function(e) {
                                v(e).then(E)
                            }
                            ), [])
                              , N = (0,
                            r.useCallback)((function(e) {
                                j((function(t) {
                                    return t.filter((function(t) {
                                        return t.id !== e.id
                                    }
                                    ))
                                }
                                ))
                            }
                            ), []);
                            return (0,
                            r.useEffect)((function() {
                                var e;
                                c & l.G8 ? (O.current && (O.current = null,
                                g(null)),
                                null === (e = a.openFileSelector) || void 0 === e || e.call(a).then((function(e) {
                                    O.current = e,
                                    g(e),
                                    E([]),
                                    e && C(e.id)
                                }
                                )).finally((function() {
                                    t()
                                }
                                ))) : c !== l.aG && (O.current = null,
                                g(null))
                            }
                            ), [c, t]),
                            o().createElement(i.Modal, {
                                wrapClassName: "fangzhou-theme",
                                visible: !!h,
                                className: u.Z.domainModal,
                                title: "模型实体选择",
                                onCancel: Z,
                                onOk: k,
                                destroyOnClose: !0,
                                width: 800,
                                cancelText: "取消",
                                okText: "确定"
                            }, o().createElement("div", {
                                className: u.Z.domainContainer
                            }, o().createElement("div", {
                                className: u.Z.leftPanel
                            }, o().createElement("div", {
                                className: u.Z.header
                            }, "已选择领域接口列表:"), o().createElement("div", {
                                className: u.Z.panelContent
                            }, S.length ? S.map((function(e) {
                                return o().createElement("div", {
                                    key: e.id,
                                    className: u.Z.sqlHttp
                                }, x, o().createElement("div", {
                                    className: u.Z.title
                                }, e.name), o().createElement("div", {
                                    className: u.Z.operate
                                }, o().createElement("svg", {
                                    onClick: function() {
                                        return N(e)
                                    },
                                    viewBox: "64 64 896 896",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor"
                                }, o().createElement("path", {
                                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                }))))
                            }
                            )) : o().createElement("div", {
                                className: u.Z.empty
                            }, "未添加领域模型实体"))), o().createElement("div", {
                                className: u.Z.rightPanel
                            }, o().createElement("div", {
                                className: u.Z.header
                            }, "来自于模型：", null == h ? void 0 : h.name), o().createElement("div", {
                                className: u.Z.panelContent
                            }, w.length ? w.map((function(e) {
                                return o().createElement("div", {
                                    key: e.id,
                                    className: u.Z.sqlHttpItem,
                                    onClick: function() {
                                        return A(Object.assign(Object.assign({}, e), {
                                            entityId: e.id,
                                            id: (0,
                                            s.Vj)(),
                                            domainFileId: h.id,
                                            domainFileName: h.name
                                        }))
                                    }
                                }, x, o().createElement("div", {
                                    className: u.Z.title
                                }, e.name))
                            }
                            )) : o().createElement("div", {
                                className: u.Z.empty
                            }, "暂无可添加的领域模型实体")))))
                        }
                    }
                    ,
                    239: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(3127);
                        const i = function() {
                            return o().createElement("div", {
                                className: a.Z.loadingContainer
                            }, o().createElement("div", {
                                className: a.Z.loadingText
                            }, "加载中，请稍后..."))
                        }
                    }
                    ,
                    373: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>u
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(9493)
                          , i = n(2066);
                        function l(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return s(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || c(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function c(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return s(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                            }
                        }
                        function s(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        const u = (0,
                        r.forwardRef)((function(e, t) {
                            var n, s = e.schema, u = (0,
                            r.useRef)(s || {
                                type: "object",
                                properties: {}
                            }), d = function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(n = (0,
                            r.useState)(s || {
                                type: "object",
                                properties: {}
                            })) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        for (a = (n = n.call(e)).next; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                        2 !== l.length); c = !0)
                                            ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(n) || c(n, 2) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), p = d[0], f = d[1];
                            (0,
                            r.useEffect)((function() {
                                u.current = p || {
                                    type: "object",
                                    properties: {}
                                },
                                f(p || {
                                    type: "object",
                                    properties: {}
                                })
                            }
                            ), [s]),
                            (0,
                            r.useImperativeHandle)(t, (function() {
                                return {
                                    getSchema: function() {
                                        return u.current
                                    }
                                }
                            }
                            ), []);
                            var m = (0,
                            r.useCallback)((function(e, t, n, r) {
                                var o = "array" === e.type ? e : e.properties
                                  , a = o[t];
                                "name" === n ? t !== r && (o[r] = o[t],
                                delete o[t]) : "type" === n && (a && a.type === r || (a.type = r,
                                "object" === r ? (a.properties = {},
                                delete a.items) : "array" === r ? (a.items = {},
                                delete a.properties) : (delete a.properties,
                                delete a.items))),
                                f(Object.assign({}, u.current))
                            }
                            ), [])
                              , h = function(e, t) {
                                "object" === t.type && (delete t.properties[e],
                                f(Object.assign({}, u.current)))
                            }
                              , g = function(e) {
                                if ("object" === e.type) {
                                    var t = "name".concat(Object.keys(e.properties || {}).length + 1);
                                    e.properties[t] = {
                                        title: t,
                                        type: "string"
                                    },
                                    f(Object.assign({}, u.current))
                                }
                            }
                              , y = (0,
                            r.useCallback)((function(e, t) {
                                return b(e.items, e, [].concat(l(t), ["items"]))
                            }
                            ), [])
                              , v = (0,
                            r.useCallback)((function(e, t, n) {
                                return Object.keys((null == e ? void 0 : e.properties) || {}).map((function(r, o) {
                                    var a;
                                    return b(null === (a = null == e ? void 0 : e.properties) || void 0 === a ? void 0 : a[r], e, [].concat(l(t), [r]), n && !o)
                                }
                                ))
                            }
                            ), [])
                              , b = (0,
                            r.useCallback)((function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                                  , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (!n.length)
                                    return "object" === t.type ? v(t, n, !0) : y(t, n);
                                if (!e)
                                    return null;
                                var l = null
                                  , c = "array" === t.type
                                  , s = n[n.length - 1];
                                "array" === e.type ? l = y(e, n) : "object" === e.type && (l = v(e, n));
                                var u = r || !c && "object" === e.type || c && "items" === s && ("object" === e.type || "array" === e.type)
                                  , d = !(c && "items" === s);
                                return o().createElement("div", {
                                    key: e.id,
                                    className: i.Z.ct
                                }, o().createElement("div", {
                                    className: i.Z.item
                                }, o().createElement("input", {
                                    style: {
                                        width: 331 - 20 * (n.length - 1)
                                    },
                                    type: "text",
                                    value: c && "items" !== s ? "[".concat(s, "]") : s,
                                    disabled: c,
                                    onChange: function(e) {
                                        return m(t, s, "name", e.target.value)
                                    }
                                }), o().createElement("select", {
                                    className: i.Z.type,
                                    value: e.type,
                                    onChange: function(e) {
                                        return m(t, s, "type", e.target.value)
                                    }
                                }, o().createElement("option", {
                                    label: "字符",
                                    value: "string"
                                }), o().createElement("option", {
                                    label: "数字",
                                    value: "number"
                                }), o().createElement("option", {
                                    label: "布尔",
                                    value: "boolean"
                                }), o().createElement("option", {
                                    label: "对象",
                                    value: "object"
                                }), o().createElement("option", {
                                    label: "列表",
                                    value: "array"
                                })), o().createElement("div", {
                                    className: "".concat(i.Z.operate, " ").concat(i.Z.flex)
                                }, d ? o().createElement("span", {
                                    className: "".concat(i.Z.iconRemove),
                                    onClick: function() {
                                        return h(s, t)
                                    }
                                }, a.Od) : null, u ? o().createElement("span", {
                                    className: i.Z.iconAdder,
                                    onClick: function() {
                                        return g(r ? t : e)
                                    }
                                }, "+") : null)), l)
                            }
                            ), []);
                            return o().createElement(o().Fragment, null, p ? o().createElement("div", null, Object.keys((null == p ? void 0 : p.properties) || p.items.properties || {}).length ? o().createElement(o().Fragment, null, o().createElement("div", {
                                className: i.Z.header
                            }, o().createElement("p", {
                                className: i.Z.fieldName
                            }, "字段名"), o().createElement("p", {
                                className: i.Z.type
                            }, "类型"), o().createElement("p", {
                                className: i.Z.operate
                            }, "操作")), o().createElement("div", {
                                className: i.Z.content
                            }, o().createElement("div", {
                                className: i.Z.list
                            }, b(p, p)))) : o().createElement("div", {
                                className: i.Z.adder
                            }, o().createElement("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return g(p)
                                }
                            }, "+"))) : o().createElement("div", {
                                className: i.Z.empty
                            }, "类型无效"))
                        }
                        ))
                    }
                    ,
                    167: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(5619)
                          , i = n(5739);
                        const l = function(e) {
                            var t, n = e.onDebugClick, l = e.params, c = e.onChange, s = (0,
                            r.useCallback)((function(e, t, n) {
                                e[t] = n,
                                c(Object.assign({}, l))
                            }
                            ), [l]), u = (0,
                            r.useCallback)((function(e, t) {
                                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                                if (!e)
                                    return null;
                                if ("root" === e.type && !e.children)
                                    return null;
                                "root" === e.type && (e.name = ""),
                                e.children && (n = d(e, r + 1));
                                var a = "array" === t.type
                                  , l = "object" === e.type
                                  , c = "root" === e.type
                                  , u = "array" === e.type
                                  , p = l || c || u;
                                return o().createElement("div", {
                                    className: i.Z.ct,
                                    key: e.id || "root"
                                }, o().createElement("div", {
                                    className: "".concat(i.Z.item, " ").concat(c ? i.Z.rootItem : "")
                                }, o().createElement("div", {
                                    style: {
                                        padding: "0 10px 0 2px"
                                    }
                                }, a ? "[".concat(e.name, "]") : e.name, o().createElement("span", {
                                    className: i.Z.typeName
                                }, "(", function(e) {
                                    switch (e) {
                                    case "number":
                                        return "数字";
                                    case "string":
                                        return "字符";
                                    case "boolean":
                                        return "布尔";
                                    case "object":
                                    case "root":
                                        return "对象";
                                    case "array":
                                        return "列表"
                                    }
                                }(e.type), ")")), p ? null : o().createElement("input", {
                                    className: i.Z.column,
                                    type: "text",
                                    disabled: "object" === e.type || "array" === e.type,
                                    defaultValue: e.defaultValue,
                                    onChange: function(t) {
                                        return s(e, "defaultValue", t.target.value)
                                    }
                                })), n)
                            }
                            ), [l]), d = (0,
                            r.useCallback)((function(e, t) {
                                return e.children.map((function(n) {
                                    return u(n, e, t)
                                }
                                ))
                            }
                            ), [l]);
                            return o().createElement("div", {
                                className: i.Z.debug
                            }, o().createElement("div", {
                                className: i.Z.content
                            }, (null === (t = null == l ? void 0 : l.children) || void 0 === t ? void 0 : t.length) ? u(Object.assign({
                                type: "root"
                            }, l), Object.assign({
                                type: "root"
                            }, l)) : null), o().createElement(a.Z, {
                                onClick: n,
                                type: "primary",
                                style: {
                                    marginTop: 12
                                }
                            }, "连接测试"))
                        }
                    }
                    ,
                    4469: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>c
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(9493)
                          , i = n(6178)
                          , l = n(8211);
                        function c(e) {
                            var t, n, c = e.value, s = e.onChange, u = (0,
                            r.useRef)(c);
                            (0,
                            r.useEffect)((function() {
                                u.current = c
                            }
                            ), [c]);
                            var d = (0,
                            r.useCallback)((function() {
                                s(Object.assign({}, u.current))
                            }
                            ), [])
                              , p = (0,
                            r.useCallback)((function(e, t, n) {
                                e[t] !== n && (e[t] = n,
                                "type" === t && (e.defaultValue = "",
                                e.children = []),
                                d())
                            }
                            ), [])
                              , f = function(e, t) {
                                var n = (0,
                                i.Vj)();
                                if (!e || "object" !== e.type && "array" !== e.type) {
                                    t.children = t.children || [];
                                    var r = "name".concat(t.children.length + 1);
                                    t.children.push({
                                        id: n,
                                        type: "string",
                                        name: r
                                    })
                                } else {
                                    e.children = e.children || [];
                                    var o = "name".concat(e.children.length + 1);
                                    "array" === e.type && (o = "".concat(e.children.length)),
                                    e.children.push({
                                        id: n,
                                        name: o,
                                        type: "string"
                                    })
                                }
                                d()
                            }
                              , m = (0,
                            r.useCallback)((function(e, t) {
                                return e.children.map((function(n) {
                                    return h(n, e, t)
                                }
                                ))
                            }
                            ), [])
                              , h = (0,
                            r.useCallback)((function(e, t) {
                                var n, r, i, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                                if (!e)
                                    return null;
                                if ("root" === e.type)
                                    return o().createElement("div", {
                                        className: l.Z.list
                                    }, m(e, c + 1));
                                e.children && (i = m(e, c + 1));
                                var s = "array" === t.type
                                  , u = 0 === c && (null === (r = null === (n = t.children) || void 0 === n ? void 0 : n[Math.min(t.children.findLastIndex((function(e) {
                                    var t = e.type;
                                    return "string" === t || "number" === t
                                }
                                )), t.children.length - 1)]) || void 0 === r ? void 0 : r.name) === e.name || "object" === e.type || "array" === e.type;
                                return o().createElement("div", {
                                    key: e.id,
                                    className: l.Z.ct
                                }, o().createElement("div", {
                                    className: l.Z.item
                                }, o().createElement("input", {
                                    style: {
                                        width: 270 - 20 * c
                                    },
                                    type: "text",
                                    value: s ? "[".concat(e.name, "]") : e.name,
                                    disabled: s,
                                    onChange: function(t) {
                                        return p(e, "name", t.target.value)
                                    }
                                }), o().createElement("select", {
                                    className: l.Z.column2,
                                    value: e.type,
                                    onChange: function(t) {
                                        return p(e, "type", t.target.value)
                                    }
                                }, o().createElement("option", {
                                    label: "字符",
                                    value: "string"
                                }), o().createElement("option", {
                                    label: "数字",
                                    value: "number"
                                }), o().createElement("option", {
                                    label: "布尔",
                                    value: "boolean"
                                }), o().createElement("option", {
                                    label: "对象",
                                    value: "object"
                                }), o().createElement("option", {
                                    label: "列表",
                                    value: "array"
                                })), o().createElement("input", {
                                    className: l.Z.column3,
                                    type: "text",
                                    disabled: "object" === e.type || "array" === e.type,
                                    value: e.defaultValue,
                                    onChange: function(t) {
                                        return p(e, "defaultValue", t.target.value)
                                    }
                                }), o().createElement("div", {
                                    className: "".concat(l.Z.column4, " ").concat(l.Z.flex)
                                }, o().createElement("span", {
                                    className: "".concat(l.Z.iconRemove),
                                    onClick: function() {
                                        return function(e, t) {
                                            t.children = t.children.filter((function(t) {
                                                return t.name !== e.name
                                            }
                                            )),
                                            "array" === t.type && t.children.forEach((function(e, n) {
                                                e.name = "".concat(n),
                                                e.defaultValue = t.children[n].defaultValue
                                            }
                                            )),
                                            d()
                                        }(e, t)
                                    }
                                }, a.Od), u ? o().createElement("span", {
                                    className: l.Z.iconAdder,
                                    onClick: function() {
                                        return f(e, t)
                                    }
                                }, "+") : null)), i)
                            }
                            ), [])
                              , g = (0,
                            r.useCallback)((function() {
                                u.current.children.push({
                                    type: "string",
                                    id: (0,
                                    i.Vj)(),
                                    name: "name".concat(u.current.children.length + 1)
                                }),
                                d()
                            }
                            ), []);
                            return o().createElement(o().Fragment, null, o().createElement("div", null, 0 === (null === (t = null == c ? void 0 : c.children) || void 0 === t ? void 0 : t.length) ? null : o().createElement(o().Fragment, null, o().createElement("div", {
                                className: l.Z.header
                            }, o().createElement("p", {
                                className: l.Z.column1
                            }, "字段名"), o().createElement("p", {
                                className: l.Z.column2
                            }, "类型"), o().createElement("p", {
                                className: l.Z.column3
                            }, "调试值"), o().createElement("p", {
                                className: l.Z.column4
                            }, "操作")), o().createElement("div", {
                                className: l.Z.content
                            }, h(c, c))), (null === (n = null == c ? void 0 : c.children) || void 0 === n ? void 0 : n.every((function(e) {
                                var t = e.type;
                                return "object" === t || "array" === t
                            }
                            ))) ? o().createElement("span", {
                                className: l.Z.iconRootAdder,
                                onClick: function() {
                                    return g()
                                }
                            }, "+") : null))
                        }
                    }
                    ,
                    4651: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>f
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(5196)
                          , i = n(5525)
                          , l = n(6690)
                          , c = n(7992);
                        function s(e) {
                            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            s(e)
                        }
                        function u(e, t, n) {
                            return (t = function(e) {
                                var t = function(e, t) {
                                    if ("object" !== s(e) || null === e)
                                        return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" !== s(r))
                                            return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(e);
                                return "symbol" === s(t) ? t : String(t)
                            }(t))in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                            e
                        }
                        function d(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        function p(e) {
                            switch (e) {
                            case "number":
                                return "数字";
                            case "string":
                                return "字符";
                            case "boolean":
                                return "布尔";
                            case "object":
                                return "对象";
                            case "array":
                                return "列表"
                            }
                        }
                        const f = function(e) {
                            var t, n, s = e.markedKeymap, f = e.schema, m = e.error, h = e.setMarkedKeymap, g = e.markList, y = (0,
                            r.useContext)(l.R), v = (0,
                            r.useRef)(null), b = (0,
                            r.useRef)(""), w = function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(t = (0,
                            r.useState)()) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        for (a = (n = n.call(e)).next; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                        2 !== l.length); c = !0)
                                            ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(t) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return d(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, 2) : void 0
                                }
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), x = w[0], E = w[1], _ = (0,
                            r.useCallback)((function(e) {
                                for (var t, n, r, o, l, c, d, m = i.d9[e] || [], y = (null === (t = b.current) || void 0 === t ? void 0 : t.split(".")) || [], v = f; y.length && v; ) {
                                    var w = y.shift();
                                    v = (null === (n = v.properties) || void 0 === n ? void 0 : n[w]) || (null === (o = null === (r = v.items) || void 0 === r ? void 0 : r.properties) || void 0 === o ? void 0 : o[w])
                                }
                                if (m.includes("any") || m.includes(v.type) && !y.length)
                                    if (m.includes("any") || !m.includes("array") || "object" === (null === (c = null == v ? void 0 : v.items) || void 0 === c ? void 0 : c.type)) {
                                        var x = g.find((function(t) {
                                            return t.key === e
                                        }
                                        ))
                                          , E = {
                                            path: (null === (d = b.current) || void 0 === d ? void 0 : d.split(".")) || []
                                        };
                                        x.needMarkValue && "boolean" === v.type && (E.value = !0),
                                        h(Object.assign(Object.assign({}, s || {}), u({}, e, E)))
                                    } else
                                        (0,
                                        a.I)("【".concat(i.zi[e], "】所标识数据类型必须为列表，且列表内数据类型必须为对象"));
                                else
                                    (0,
                                    a.I)("【".concat(i.zi[e], "】所标识数据类型必须为 ").concat(null === (l = i.d9[e]) || void 0 === l ? void 0 : l.map((function(e) {
                                        return p(e)
                                    }
                                    )).join("、")))
                            }
                            ), [s, h, f]), S = (0,
                            r.useCallback)((function(e, t) {
                                var n = e.currentTarget
                                  , r = v.current.getBoundingClientRect()
                                  , o = n.getBoundingClientRect();
                                b.current = t;
                                var a = o.y - r.y + n.offsetHeight
                                  , i = 28 * g.length + 10;
                                (a + i > r.height || o.top + i > document.body.clientHeight) && (a -= i + n.offsetHeight),
                                E({
                                    display: "block",
                                    left: o.x - r.x,
                                    top: a
                                }),
                                y.addBlurAry("return-schema", (function() {
                                    return E(void 0)
                                }
                                ))
                            }
                            ), [g]), j = (0,
                            r.useCallback)((function(e, t) {
                                h(Object.assign(Object.assign({}, s || {}), u({}, t, {
                                    path: []
                                })))
                            }
                            ), [s]), O = (0,
                            r.useCallback)((function(e) {
                                E(void 0),
                                y.addBlurAry("return-schema", (function() {}
                                )),
                                e.stopPropagation()
                            }
                            ), []);
                            return m ? o().createElement("div", {
                                className: c.Z.errorInfo
                            }, o().createElement("span", null, m), o().createElement("div", null, (n = m).includes("Network Error") ? "请检查网络是否正常、当前请求是否存在跨域" : n.includes("404") ? "请检查请求地址是否拼写错误" : "")) : f ? o().createElement("div", {
                                className: c.Z.returnParams,
                                ref: v,
                                onClick: O
                            }, o().createElement("div", null, function e(t) {
                                var n, r = t.val, a = t.key, l = t.xpath, d = t.root;
                                "array" === r.type ? n = function(t, n) {
                                    return t ? e({
                                        val: t,
                                        xpath: n
                                    }) : null
                                }(r.items, l) : "object" === r.type && (n = function(t, n) {
                                    return t ? o().createElement(o().Fragment, null, Object.keys(t).map((function(r) {
                                        var o = void 0 !== n ? n ? "".concat(n, ".").concat(r) : r : void 0;
                                        return e({
                                            val: t[r],
                                            xpath: o,
                                            key: r
                                        })
                                    }
                                    ))) : null
                                }(r.properties, l));
                                var f = Object.keys(s || {}).find((function(e) {
                                    var t, n;
                                    return (null === (n = null === (t = s[e]) || void 0 === t ? void 0 : t.path) || void 0 === n ? void 0 : n.join(".")) === l
                                }
                                ))
                                  , m = g.find((function(e) {
                                    return e.key === f
                                }
                                ))
                                  , y = !!f && void 0 !== a
                                  , v = void 0 !== l && void 0 !== a && !y
                                  , b = void 0 !== a && void 0 !== l && y && !d
                                  , w = function(e) {
                                    h(Object.assign(Object.assign({}, s || {}), u({}, f, {
                                        path: s[f].path,
                                        value: e
                                    })))
                                };
                                return o().createElement("div", {
                                    key: a,
                                    className: "".concat(c.Z.item, " ").concat(d ? c.Z.rootItem : "", " ").concat(y ? c.Z.markAsReturn : "")
                                }, y ? o().createElement("div", {
                                    className: c.Z.marked,
                                    "data-text": i.zi[f]
                                }) : null, o().createElement("div", {
                                    className: c.Z.keyName
                                }, a, o().createElement("span", {
                                    className: c.Z.typeName
                                }, "(", p(r.type), ")"), v ? o().createElement("button", {
                                    onClick: function(e) {
                                        S(e, l),
                                        e.stopPropagation()
                                    }
                                }, "标记") : null, (null == m ? void 0 : m.needMarkValue) && y ? o().createElement(o().Fragment, null, o().createElement("span", {
                                    className: c.Z.markValueSelect
                                }, "当请求成功时，值为："), "string" === r.type ? o().createElement("input", {
                                    value: s[f].value,
                                    className: c.Z.markValueInput,
                                    type: "text",
                                    onChange: function(e) {
                                        return w(e.target.value)
                                    }
                                }) : null, "number" === r.type ? o().createElement("input", {
                                    value: s[f].value,
                                    className: c.Z.markValueInput,
                                    type: "number",
                                    onChange: function(e) {
                                        return w(Number(e.target.value))
                                    }
                                }) : null, "boolean" === r.type ? o().createElement("select", {
                                    value: Number(s[f].value),
                                    className: c.Z.markValueInput,
                                    onChange: function(e) {
                                        return w(Boolean(e.target.value))
                                    }
                                }, o().createElement("option", {
                                    value: 1
                                }, "True"), o().createElement("option", {
                                    value: 0
                                }, "false")) : null) : null, b ? o().createElement("button", {
                                    onClick: function(e) {
                                        j(e, f),
                                        e.stopPropagation()
                                    }
                                }, "取消") : null), n)
                            }({
                                val: f,
                                xpath: "",
                                root: !0
                            })), o().createElement("div", {
                                className: c.Z.popMenu,
                                style: x
                            }, g.map((function(e) {
                                return o().createElement("div", {
                                    className: c.Z.menuItem,
                                    key: e.key,
                                    onClick: function() {
                                        return _(e.key)
                                    },
                                    "data-mybricks-tip": {
                                        content: e.description
                                    }
                                }, e.title)
                            }
                            )))) : o().createElement("div", {
                                className: c.Z.empty
                            }, "类型无效")
                        }
                    }
                    ,
                    6357: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>b
                        });
                        var r, o = n(8156), a = n.n(o), i = n(5274), l = n(2721), c = n(5525), s = n(4907);
                        function u(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return f(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || p(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function d(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || p(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function p(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return f(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                            }
                        }
                        function f(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        !function(e) {
                            e.STRING = "string",
                            e.NUMBER = "number",
                            e.DATETIME = "datetime",
                            e.JSON = "json",
                            e.ENUM = "enum",
                            e.RELATION = "relation",
                            e.MAPPING = "mapping",
                            e.SYS_USER = "SYS_USER",
                            e.SYS_ROLE = "SYS_ROLE",
                            e.SYS_ROLE_RELATION = "SYS_ROLE_RELATION"
                        }(r || (r = {}));
                        var m = function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, t = "", n = 0; n < e; n++)
                                t += "abcdefhijkmnprstwxyz".charAt(Math.floor(20 * Math.random()));
                            return "u_" + t
                        }
                          , h = function(e) {
                            switch (e.bizType) {
                            case r.ENUM:
                                return "string";
                            case r.DATETIME:
                                return e.showFormat ? "string" : "number";
                            case r.STRING:
                                return "string";
                            case r.NUMBER:
                                return "number";
                            case r.JSON:
                                return "any";
                            case r.RELATION:
                            case r.SYS_USER:
                            case r.SYS_ROLE:
                            case r.SYS_ROLE_RELATION:
                                return "number"
                            }
                        }
                          , g = function e(t, n) {
                            var r;
                            if ("object" === t.type || "array" === t.type) {
                                var o = t.properties || (null === (r = t.items) || void 0 === r ? void 0 : r.properties) || {};
                                Object.keys(o).forEach((function(t) {
                                    var r = {
                                        id: m(),
                                        name: t,
                                        type: o[t].type
                                    }
                                      , a = "object" === o[t].type || "array" === o[t].type;
                                    a && (r.children = []),
                                    n.push(r),
                                    a && e(o[t] || o[t].items || {}, r.children)
                                }
                                ))
                            } else
                                n.push({
                                    id: m(),
                                    name: t.name,
                                    type: t.type
                                })
                        }
                          , y = a().createElement("svg", {
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16"
                        }, a().createElement("path", {
                            d: "M764.41958 521.462537l37.594406-37.594405a202.037962 202.037962 0 0 0 59.588412-144.23976 169.302697 169.302697 0 0 0-53.45055-121.734266l-6.137862-6.137862a163.932068 163.932068 0 0 0-127.872128-53.962038 193.854146 193.854146 0 0 0-135.032967 60.0999l-38.105894 37.082917zM373.386613 254.977023l106.901099-102.297702a281.318681 281.318681 0 0 1 197.69031-84.13986 250.117882 250.117882 0 0 1 160.095904 53.962038l127.872128-122.501499L1022.977023 58.565435l-127.872128 127.872127a279.784216 279.784216 0 0 1-30.689311 360.599401l-100.251748 102.297702zM227.100899 530.157842a189.250749 189.250749 0 0 0-5.370629 265.718282l6.137862 6.137862a164.443556 164.443556 0 0 0 127.872128 53.706294 194.621379 194.621379 0 0 0 135.032967-59.844156l42.965035-43.476524L270.065934 486.937063zM0 967.224775l133.242757-139.892108a278.761239 278.761239 0 0 1 30.689311-360.343656L270.065934 359.064935l80.559441 81.070929L430.929071 359.064935l57.798202 58.053946L409.190809 498.701299l120.1998 120.967033 83.628372-83.884116 53.962038 55.496503-85.418581 85.93007 74.933066 75.444556-106.133866 106.901099a283.108891 283.108891 0 0 1-198.457542 84.651348 251.396603 251.396603 0 0 1-160.095904-53.706293L58.30969 1024z"
                        }))
                          , v = {
                            INSERT: "新增接口",
                            UPDATE: "更新接口",
                            SELECT: "查询接口",
                            DELETE: "删除接口"
                        };
                        const b = function(e) {
                            var t = e.openFileSelector
                              , n = e.onClose
                              , r = e.connectorService
                              , p = e.single
                              , f = d((0,
                            o.useState)(null), 2)
                              , b = f[0]
                              , w = f[1]
                              , x = d((0,
                            o.useState)([]), 2)
                              , E = x[0]
                              , _ = x[1]
                              , S = d((0,
                            o.useState)([]), 2)
                              , j = S[0]
                              , O = S[1]
                              , Z = d((0,
                            o.useState)([]), 2)
                              , k = Z[0]
                              , A = Z[1]
                              , C = (0,
                            o.useRef)(null)
                              , N = (0,
                            o.useCallback)((function(e) {
                                A((function(t) {
                                    return p ? [Object.assign(Object.assign({}, e), {
                                        id: m()
                                    })] : [].concat(u(t), [Object.assign(Object.assign({}, e), {
                                        id: m()
                                    })])
                                }
                                ))
                            }
                            ), [p])
                              , P = (0,
                            o.useCallback)((function(e) {
                                var t, n;
                                w(null),
                                C.current = null;
                                for (var o = function() {
                                    var o = e[i]
                                      , a = o.fileId
                                      , l = o.isOpen
                                      , s = o.serviceId
                                      , u = o.action
                                      , d = o.inputSchema || {
                                        type: "any"
                                    }
                                      , p = o.outputSchema || {
                                        type: "any"
                                    }
                                      , f = [];
                                    if (l)
                                        if ("SELECT" === u) {
                                            f = [{
                                                id: m(),
                                                name: "keyword",
                                                type: "string"
                                            }],
                                            p = {
                                                type: "object",
                                                properties: {
                                                    dataSource: {
                                                        type: "array",
                                                        items: {
                                                            type: "object",
                                                            properties: {}
                                                        }
                                                    },
                                                    total: {
                                                        type: "number"
                                                    },
                                                    pageNum: {
                                                        type: "number"
                                                    },
                                                    pageSize: {
                                                        type: "number"
                                                    }
                                                }
                                            },
                                            d = {
                                                type: "object",
                                                properties: {
                                                    keyword: {
                                                        type: "string"
                                                    },
                                                    fields: {
                                                        type: "array",
                                                        items: {
                                                            type: "object",
                                                            properties: {
                                                                name: {
                                                                    type: "string"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    orders: {
                                                        type: "array",
                                                        items: {
                                                            type: "object",
                                                            properties: {
                                                                fieldName: {
                                                                    type: "string"
                                                                },
                                                                order: {
                                                                    type: "string"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    page: {
                                                        type: "object",
                                                        properties: {
                                                            pageNum: {
                                                                type: "number"
                                                            },
                                                            pageSize: {
                                                                type: "number"
                                                            }
                                                        }
                                                    }
                                                }
                                            };
                                            try {
                                                null === (t = o.originEntity) || void 0 === t || t.fieldAry.filter((function(e) {
                                                    return "mapping" !== e.bizType && !e.isPrivate
                                                }
                                                )).forEach((function(e) {
                                                    p.properties.dataSource.items.properties[e.name] = {
                                                        type: h(e)
                                                    }
                                                }
                                                ))
                                            } catch (e) {
                                                console.log("parse outputSchema error", e)
                                            }
                                        } else
                                            "UPDATE" === u || "INSERT" === u ? (d = {
                                                type: "object",
                                                properties: {}
                                            },
                                            null === (n = o.originEntity) || void 0 === n || n.fieldAry.filter((function(e) {
                                                return "mapping" !== e.bizType && !e.isPrivate
                                            }
                                            )).forEach((function(e) {
                                                f.push({
                                                    id: m(),
                                                    name: e.name,
                                                    type: h(e)
                                                }),
                                                d.properties[e.name] = {
                                                    type: h(e)
                                                }
                                            }
                                            )),
                                            "INSERT" === u && (p = {
                                                type: "number"
                                            },
                                            delete d.properties.id)) : "DELETE" === u && (f = [{
                                                id: m(),
                                                name: "id",
                                                type: "number"
                                            }],
                                            d = {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "number"
                                                    }
                                                }
                                            });
                                    else
                                        g(d, f);
                                    r.add({
                                        id: o.id,
                                        title: o.title,
                                        method: "POST",
                                        type: "http-sql",
                                        inputSchema: d,
                                        outputSchema: {
                                            type: "object",
                                            properties: {
                                                code: {
                                                    type: "number"
                                                },
                                                data: p,
                                                msg: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        resultSchema: {
                                            type: "object",
                                            properties: {
                                                code: {
                                                    type: "number"
                                                },
                                                data: p,
                                                msg: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        domainServiceMap: {
                                            serviceId: s,
                                            fileId: a,
                                            serviceTitle: o.title
                                        },
                                        params: f ? {
                                            type: "root",
                                            name: "root",
                                            children: f
                                        } : void 0,
                                        input: encodeURIComponent(l ? c.yI.replace("__serviceId__", s).replace("__fileId__", o.fileId).replace("__action__", u) : c.tc.replace("__serviceId__", s).replace("__fileId__", o.fileId)),
                                        output: encodeURIComponent(c.Aj),
                                        path: "/api/system/domain/run"
                                    })
                                }, a = e.length, i = 0; i < a; i++)
                                    o()
                            }
                            ), [j, r])
                              , R = (0,
                            o.useCallback)((function(e) {
                                i.Z.get("/paas/api/domain/bundle?fileId=".concat(e)).then((function(t) {
                                    if (1 === t.data.code) {
                                        var n = [].concat(u(t.data.data.service.map((function(t) {
                                            return Object.assign(Object.assign({}, t), {
                                                id: m(),
                                                serviceId: t.id,
                                                fileId: e
                                            })
                                        }
                                        ))), u(t.data.data.entityAry.filter((function(e) {
                                            return e.isOpen
                                        }
                                        )).map((function(t) {
                                            return {
                                                id: m(),
                                                serviceId: t.id,
                                                entityName: t.name,
                                                title: "".concat(t.name, "的领域服务"),
                                                originEntity: t,
                                                fileId: e,
                                                isOpen: !0
                                            }
                                        }
                                        ))));
                                        _(n),
                                        O(t.data.data.entityAry)
                                    }
                                }
                                ))
                            }
                            ), [])
                              , L = (0,
                            o.useCallback)((function(e) {
                                A((function(t) {
                                    return t.filter((function(t) {
                                        return t.id !== e.id
                                    }
                                    ))
                                }
                                ))
                            }
                            ), []);
                            return (0,
                            o.useEffect)((function() {
                                C.current && (C.current = null,
                                w(null)),
                                null == t || t().then((function(e) {
                                    e ? (C.current = e,
                                    w(e),
                                    _([]),
                                    O([]),
                                    e && R(e.id)) : null == n || n()
                                }
                                ))
                            }
                            ), [n]),
                            a().createElement(l.Modal, {
                                wrapClassName: "fangzhou-theme",
                                visible: !!b,
                                className: s.Z.domainModal,
                                title: "领域接口选择",
                                onCancel: n,
                                onOk: function() {
                                    P(k),
                                    w(null),
                                    A([]),
                                    null == n || n()
                                },
                                destroyOnClose: !0,
                                width: 800,
                                cancelText: "取消",
                                okText: "确定"
                            }, a().createElement("div", {
                                className: s.Z.domainContainer
                            }, a().createElement("div", {
                                className: s.Z.leftPanel
                            }, a().createElement("div", {
                                className: s.Z.header
                            }, "已选择领域接口列表:"), a().createElement("div", {
                                className: s.Z.panelContent
                            }, k.length ? k.map((function(e) {
                                return a().createElement("div", {
                                    key: e.id,
                                    className: s.Z.sqlHttp
                                }, y, a().createElement("div", {
                                    className: s.Z.title
                                }, e.title), a().createElement("div", {
                                    className: s.Z.operate
                                }, a().createElement("svg", {
                                    onClick: function() {
                                        return L(e)
                                    },
                                    viewBox: "64 64 896 896",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor"
                                }, a().createElement("path", {
                                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                }))))
                            }
                            )) : a().createElement("div", {
                                className: s.Z.empty
                            }, "未添加领域接口"))), a().createElement("div", {
                                className: s.Z.rightPanel
                            }, a().createElement("div", {
                                className: s.Z.header
                            }, "来自于模型：", null == b ? void 0 : b.name), a().createElement("div", {
                                className: s.Z.panelContent
                            }, E.length ? a().createElement(a().Fragment, null, null == E ? void 0 : E.filter((function(e) {
                                return !e.isOpen
                            }
                            )).map((function(e) {
                                return a().createElement("div", {
                                    key: e.id,
                                    className: s.Z.sqlHttpItem,
                                    onClick: function() {
                                        return N(e)
                                    }
                                }, y, a().createElement("div", {
                                    className: s.Z.title
                                }, e.title))
                            }
                            )), null == E ? void 0 : E.filter((function(e) {
                                return e.isOpen
                            }
                            )).map((function(e) {
                                return a().createElement("div", {
                                    key: e.id,
                                    className: s.Z.sqlHttpGroup
                                }, a().createElement("div", {
                                    className: s.Z.groupTitle
                                }, e.title), a().createElement("div", {
                                    className: s.Z.groupContent
                                }, ["SELECT", "INSERT", "UPDATE", "DELETE"].map((function(t) {
                                    return a().createElement("div", {
                                        key: t,
                                        className: s.Z.sqlHttpItem,
                                        onClick: function() {
                                            return N(Object.assign(Object.assign({}, e), {
                                                title: "".concat(e.entityName, "的").concat(v[t]),
                                                action: t
                                            }))
                                        }
                                    }, y, a().createElement("div", {
                                        className: s.Z.title
                                    }, e.entityName, "的", v[t]))
                                }
                                ))))
                            }
                            ))) : a().createElement("div", {
                                className: s.Z.empty
                            }, "暂无可添加的领域接口")))))
                        }
                    }
                    ,
                    5240: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>p
                        });
                        var r = n(9493)
                          , o = n(8156)
                          , a = n.n(o)
                          , i = n(5525)
                          , l = n(6233)
                          , c = n(8705);
                        function s(e) {
                            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            s(e)
                        }
                        function u() {
                            u = function() {
                                return e
                            }
                            ;
                            var e = {}
                              , t = Object.prototype
                              , n = t.hasOwnProperty
                              , r = Object.defineProperty || function(e, t, n) {
                                e[t] = n.value
                            }
                              , o = "function" == typeof Symbol ? Symbol : {}
                              , a = o.iterator || "@@iterator"
                              , i = o.asyncIterator || "@@asyncIterator"
                              , l = o.toStringTag || "@@toStringTag";
                            function c(e, t, n) {
                                return Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }),
                                e[t]
                            }
                            try {
                                c({}, "")
                            } catch (e) {
                                c = function(e, t, n) {
                                    return e[t] = n
                                }
                            }
                            function d(e, t, n, o) {
                                var a = t && t.prototype instanceof m ? t : m
                                  , i = Object.create(a.prototype)
                                  , l = new Z(o || []);
                                return r(i, "_invoke", {
                                    value: _(e, n, l)
                                }),
                                i
                            }
                            function p(e, t, n) {
                                try {
                                    return {
                                        type: "normal",
                                        arg: e.call(t, n)
                                    }
                                } catch (e) {
                                    return {
                                        type: "throw",
                                        arg: e
                                    }
                                }
                            }
                            e.wrap = d;
                            var f = {};
                            function m() {}
                            function h() {}
                            function g() {}
                            var y = {};
                            c(y, a, (function() {
                                return this
                            }
                            ));
                            var v = Object.getPrototypeOf
                              , b = v && v(v(k([])));
                            b && b !== t && n.call(b, a) && (y = b);
                            var w = g.prototype = m.prototype = Object.create(y);
                            function x(e) {
                                ["next", "throw", "return"].forEach((function(t) {
                                    c(e, t, (function(e) {
                                        return this._invoke(t, e)
                                    }
                                    ))
                                }
                                ))
                            }
                            function E(e, t) {
                                function o(r, a, i, l) {
                                    var c = p(e[r], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg
                                          , d = u.value;
                                        return d && "object" == s(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            o("next", e, i, l)
                                        }
                                        ), (function(e) {
                                            o("throw", e, i, l)
                                        }
                                        )) : t.resolve(d).then((function(e) {
                                            u.value = e,
                                            i(u)
                                        }
                                        ), (function(e) {
                                            return o("throw", e, i, l)
                                        }
                                        ))
                                    }
                                    l(c.arg)
                                }
                                var a;
                                r(this, "_invoke", {
                                    value: function(e, n) {
                                        function r() {
                                            return new t((function(t, r) {
                                                o(e, n, t, r)
                                            }
                                            ))
                                        }
                                        return a = a ? a.then(r, r) : r()
                                    }
                                })
                            }
                            function _(e, t, n) {
                                var r = "suspendedStart";
                                return function(o, a) {
                                    if ("executing" === r)
                                        throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === o)
                                            throw a;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    for (n.method = o,
                                    n.arg = a; ; ) {
                                        var i = n.delegate;
                                        if (i) {
                                            var l = S(i, n);
                                            if (l) {
                                                if (l === f)
                                                    continue;
                                                return l
                                            }
                                        }
                                        if ("next" === n.method)
                                            n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r)
                                                throw r = "completed",
                                                n.arg;
                                            n.dispatchException(n.arg)
                                        } else
                                            "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var c = p(e, t, n);
                                        if ("normal" === c.type) {
                                            if (r = n.done ? "completed" : "suspendedYield",
                                            c.arg === f)
                                                continue;
                                            return {
                                                value: c.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === c.type && (r = "completed",
                                        n.method = "throw",
                                        n.arg = c.arg)
                                    }
                                }
                            }
                            function S(e, t) {
                                var n = t.method
                                  , r = e.iterator[n];
                                if (void 0 === r)
                                    return t.delegate = null,
                                    "throw" === n && e.iterator.return && (t.method = "return",
                                    t.arg = void 0,
                                    S(e, t),
                                    "throw" === t.method) || "return" !== n && (t.method = "throw",
                                    t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                                    f;
                                var o = p(r, e.iterator, t.arg);
                                if ("throw" === o.type)
                                    return t.method = "throw",
                                    t.arg = o.arg,
                                    t.delegate = null,
                                    f;
                                var a = o.arg;
                                return a ? a.done ? (t[e.resultName] = a.value,
                                t.next = e.nextLoc,
                                "return" !== t.method && (t.method = "next",
                                t.arg = void 0),
                                t.delegate = null,
                                f) : a : (t.method = "throw",
                                t.arg = new TypeError("iterator result is not an object"),
                                t.delegate = null,
                                f)
                            }
                            function j(e) {
                                var t = {
                                    tryLoc: e[0]
                                };
                                1 in e && (t.catchLoc = e[1]),
                                2 in e && (t.finallyLoc = e[2],
                                t.afterLoc = e[3]),
                                this.tryEntries.push(t)
                            }
                            function O(e) {
                                var t = e.completion || {};
                                t.type = "normal",
                                delete t.arg,
                                e.completion = t
                            }
                            function Z(e) {
                                this.tryEntries = [{
                                    tryLoc: "root"
                                }],
                                e.forEach(j, this),
                                this.reset(!0)
                            }
                            function k(e) {
                                if (e) {
                                    var t = e[a];
                                    if (t)
                                        return t.call(e);
                                    if ("function" == typeof e.next)
                                        return e;
                                    if (!isNaN(e.length)) {
                                        var r = -1
                                          , o = function t() {
                                            for (; ++r < e.length; )
                                                if (n.call(e, r))
                                                    return t.value = e[r],
                                                    t.done = !1,
                                                    t;
                                            return t.value = void 0,
                                            t.done = !0,
                                            t
                                        };
                                        return o.next = o
                                    }
                                }
                                return {
                                    next: A
                                }
                            }
                            function A() {
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            return h.prototype = g,
                            r(w, "constructor", {
                                value: g,
                                configurable: !0
                            }),
                            r(g, "constructor", {
                                value: h,
                                configurable: !0
                            }),
                            h.displayName = c(g, l, "GeneratorFunction"),
                            e.isGeneratorFunction = function(e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                            }
                            ,
                            e.mark = function(e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                                c(e, l, "GeneratorFunction")),
                                e.prototype = Object.create(w),
                                e
                            }
                            ,
                            e.awrap = function(e) {
                                return {
                                    __await: e
                                }
                            }
                            ,
                            x(E.prototype),
                            c(E.prototype, i, (function() {
                                return this
                            }
                            )),
                            e.AsyncIterator = E,
                            e.async = function(t, n, r, o, a) {
                                void 0 === a && (a = Promise);
                                var i = new E(d(t, n, r, o),a);
                                return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                                    return e.done ? e.value : i.next()
                                }
                                ))
                            }
                            ,
                            x(w),
                            c(w, l, "Generator"),
                            c(w, a, (function() {
                                return this
                            }
                            )),
                            c(w, "toString", (function() {
                                return "[object Generator]"
                            }
                            )),
                            e.keys = function(e) {
                                var t = Object(e)
                                  , n = [];
                                for (var r in t)
                                    n.push(r);
                                return n.reverse(),
                                function e() {
                                    for (; n.length; ) {
                                        var r = n.pop();
                                        if (r in t)
                                            return e.value = r,
                                            e.done = !1,
                                            e
                                    }
                                    return e.done = !0,
                                    e
                                }
                            }
                            ,
                            e.values = k,
                            Z.prototype = {
                                constructor: Z,
                                reset: function(e) {
                                    if (this.prev = 0,
                                    this.next = 0,
                                    this.sent = this._sent = void 0,
                                    this.done = !1,
                                    this.delegate = null,
                                    this.method = "next",
                                    this.arg = void 0,
                                    this.tryEntries.forEach(O),
                                    !e)
                                        for (var t in this)
                                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                                },
                                stop: function() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return this.rval
                                },
                                dispatchException: function(e) {
                                    if (this.done)
                                        throw e;
                                    var t = this;
                                    function r(n, r) {
                                        return i.type = "throw",
                                        i.arg = e,
                                        t.next = n,
                                        r && (t.method = "next",
                                        t.arg = void 0),
                                        !!r
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o]
                                          , i = a.completion;
                                        if ("root" === a.tryLoc)
                                            return r("end");
                                        if (a.tryLoc <= this.prev) {
                                            var l = n.call(a, "catchLoc")
                                              , c = n.call(a, "finallyLoc");
                                            if (l && c) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            } else if (l) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0)
                                            } else {
                                                if (!c)
                                                    throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var o = this.tryEntries[r];
                                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                            var a = o;
                                            break
                                        }
                                    }
                                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                    var i = a ? a.completion : {};
                                    return i.type = e,
                                    i.arg = t,
                                    a ? (this.method = "next",
                                    this.next = a.finallyLoc,
                                    f) : this.complete(i)
                                },
                                complete: function(e, t) {
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                                    f
                                },
                                finish: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e)
                                            return this.complete(n.completion, n.afterLoc),
                                            O(n),
                                            f
                                    }
                                },
                                catch: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var o = r.arg;
                                                O(n)
                                            }
                                            return o
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, t, n) {
                                    return this.delegate = {
                                        iterator: k(e),
                                        resultName: t,
                                        nextLoc: n
                                    },
                                    "next" === this.method && (this.arg = void 0),
                                    f
                                }
                            },
                            e
                        }
                        var d = function(e, t, n, r) {
                            return new (n || (n = Promise))((function(o, a) {
                                function i(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }
                                function l(e) {
                                    try {
                                        c(r.throw(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value,
                                    t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }
                                    ))).then(i, l)
                                }
                                c((r = r.apply(e, t || [])).next())
                            }
                            ))
                        };
                        function p(e) {
                            var t = this
                              , n = e.ctx
                              , o = e.setRender
                              , s = e.setPanelVisible
                              , p = e.blurMap
                              , f = e.panelVisible
                              , m = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "domain";
                                return d(t, void 0, void 0, u().mark((function t() {
                                    return u().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                n.type = e,
                                                n.activeId = void 0,
                                                n.templateVisible = !1,
                                                t.t0 = e,
                                                t.next = "domain" === t.t0 ? 6 : "aggregation-model" === t.t0 ? 9 : 12;
                                                break;
                                            case 6:
                                                return s(i.G8),
                                                o(n),
                                                t.abrupt("break", 14);
                                            case 9:
                                                return s(i.Vr),
                                                o(n),
                                                t.abrupt("break", 14);
                                            case 12:
                                                s(i.G8),
                                                o(n);
                                            case 14:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )))
                            };
                            return a().createElement("div", {
                                className: c.Z.toolbar
                            }, a().createElement("div", {
                                className: c.Z.search
                            }, a().createElement("input", {
                                type: "text",
                                placeholder: "请输入名称搜索模型",
                                onChange: function(e) {
                                    return n.search(e.target.value)
                                }
                            })), function() {
                                if (!n.addActions)
                                    return null;
                                if (1 === n.addActions.length)
                                    return a().createElement("div", {
                                        className: c.Z.icon,
                                        onClick: function() {
                                            return m(n.addActions[0].type)
                                        }
                                    }, r.PD);
                                var e = a().createElement("div", {
                                    className: c.Z.ct
                                }, n.addActions.map((function(e) {
                                    var t = e.type
                                      , n = e.title;
                                    return a().createElement("div", {
                                        className: c.Z.item,
                                        onClick: function() {
                                            return m(t)
                                        },
                                        key: t
                                    }, n)
                                }
                                )));
                                return a().createElement(l.Z, {
                                    dropDownStyle: f || document.querySelector("div[data-id=plugin-panel]") ? {
                                        right: 0
                                    } : void 0,
                                    onBlur: function(e) {
                                        return p.toolbar = e
                                    },
                                    overlay: e
                                }, a().createElement("div", {
                                    className: c.Z.icon
                                }, r.PD))
                            }())
                        }
                    }
                    ,
                    2453: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>_
                        });
                        var r = n(8156)
                          , o = n.n(r)
                          , a = n(7111)
                          , i = n.n(a)
                          , l = n(5525)
                          , c = n(8786)
                          , s = n(1988)
                          , u = n(5240)
                          , d = n(9493)
                          , p = n(6429)
                          , f = n(255)
                          , m = n(239)
                          , h = n(5196)
                          , g = n(7380);
                        function y(e) {
                            return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            y(e)
                        }
                        function v() {
                            v = function() {
                                return e
                            }
                            ;
                            var e = {}
                              , t = Object.prototype
                              , n = t.hasOwnProperty
                              , r = Object.defineProperty || function(e, t, n) {
                                e[t] = n.value
                            }
                              , o = "function" == typeof Symbol ? Symbol : {}
                              , a = o.iterator || "@@iterator"
                              , i = o.asyncIterator || "@@asyncIterator"
                              , l = o.toStringTag || "@@toStringTag";
                            function c(e, t, n) {
                                return Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }),
                                e[t]
                            }
                            try {
                                c({}, "")
                            } catch (e) {
                                c = function(e, t, n) {
                                    return e[t] = n
                                }
                            }
                            function s(e, t, n, o) {
                                var a = t && t.prototype instanceof p ? t : p
                                  , i = Object.create(a.prototype)
                                  , l = new Z(o || []);
                                return r(i, "_invoke", {
                                    value: _(e, n, l)
                                }),
                                i
                            }
                            function u(e, t, n) {
                                try {
                                    return {
                                        type: "normal",
                                        arg: e.call(t, n)
                                    }
                                } catch (e) {
                                    return {
                                        type: "throw",
                                        arg: e
                                    }
                                }
                            }
                            e.wrap = s;
                            var d = {};
                            function p() {}
                            function f() {}
                            function m() {}
                            var h = {};
                            c(h, a, (function() {
                                return this
                            }
                            ));
                            var g = Object.getPrototypeOf
                              , b = g && g(g(k([])));
                            b && b !== t && n.call(b, a) && (h = b);
                            var w = m.prototype = p.prototype = Object.create(h);
                            function x(e) {
                                ["next", "throw", "return"].forEach((function(t) {
                                    c(e, t, (function(e) {
                                        return this._invoke(t, e)
                                    }
                                    ))
                                }
                                ))
                            }
                            function E(e, t) {
                                function o(r, a, i, l) {
                                    var c = u(e[r], e, a);
                                    if ("throw" !== c.type) {
                                        var s = c.arg
                                          , d = s.value;
                                        return d && "object" == y(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            o("next", e, i, l)
                                        }
                                        ), (function(e) {
                                            o("throw", e, i, l)
                                        }
                                        )) : t.resolve(d).then((function(e) {
                                            s.value = e,
                                            i(s)
                                        }
                                        ), (function(e) {
                                            return o("throw", e, i, l)
                                        }
                                        ))
                                    }
                                    l(c.arg)
                                }
                                var a;
                                r(this, "_invoke", {
                                    value: function(e, n) {
                                        function r() {
                                            return new t((function(t, r) {
                                                o(e, n, t, r)
                                            }
                                            ))
                                        }
                                        return a = a ? a.then(r, r) : r()
                                    }
                                })
                            }
                            function _(e, t, n) {
                                var r = "suspendedStart";
                                return function(o, a) {
                                    if ("executing" === r)
                                        throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === o)
                                            throw a;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    for (n.method = o,
                                    n.arg = a; ; ) {
                                        var i = n.delegate;
                                        if (i) {
                                            var l = S(i, n);
                                            if (l) {
                                                if (l === d)
                                                    continue;
                                                return l
                                            }
                                        }
                                        if ("next" === n.method)
                                            n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r)
                                                throw r = "completed",
                                                n.arg;
                                            n.dispatchException(n.arg)
                                        } else
                                            "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var c = u(e, t, n);
                                        if ("normal" === c.type) {
                                            if (r = n.done ? "completed" : "suspendedYield",
                                            c.arg === d)
                                                continue;
                                            return {
                                                value: c.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === c.type && (r = "completed",
                                        n.method = "throw",
                                        n.arg = c.arg)
                                    }
                                }
                            }
                            function S(e, t) {
                                var n = t.method
                                  , r = e.iterator[n];
                                if (void 0 === r)
                                    return t.delegate = null,
                                    "throw" === n && e.iterator.return && (t.method = "return",
                                    t.arg = void 0,
                                    S(e, t),
                                    "throw" === t.method) || "return" !== n && (t.method = "throw",
                                    t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                                    d;
                                var o = u(r, e.iterator, t.arg);
                                if ("throw" === o.type)
                                    return t.method = "throw",
                                    t.arg = o.arg,
                                    t.delegate = null,
                                    d;
                                var a = o.arg;
                                return a ? a.done ? (t[e.resultName] = a.value,
                                t.next = e.nextLoc,
                                "return" !== t.method && (t.method = "next",
                                t.arg = void 0),
                                t.delegate = null,
                                d) : a : (t.method = "throw",
                                t.arg = new TypeError("iterator result is not an object"),
                                t.delegate = null,
                                d)
                            }
                            function j(e) {
                                var t = {
                                    tryLoc: e[0]
                                };
                                1 in e && (t.catchLoc = e[1]),
                                2 in e && (t.finallyLoc = e[2],
                                t.afterLoc = e[3]),
                                this.tryEntries.push(t)
                            }
                            function O(e) {
                                var t = e.completion || {};
                                t.type = "normal",
                                delete t.arg,
                                e.completion = t
                            }
                            function Z(e) {
                                this.tryEntries = [{
                                    tryLoc: "root"
                                }],
                                e.forEach(j, this),
                                this.reset(!0)
                            }
                            function k(e) {
                                if (e) {
                                    var t = e[a];
                                    if (t)
                                        return t.call(e);
                                    if ("function" == typeof e.next)
                                        return e;
                                    if (!isNaN(e.length)) {
                                        var r = -1
                                          , o = function t() {
                                            for (; ++r < e.length; )
                                                if (n.call(e, r))
                                                    return t.value = e[r],
                                                    t.done = !1,
                                                    t;
                                            return t.value = void 0,
                                            t.done = !0,
                                            t
                                        };
                                        return o.next = o
                                    }
                                }
                                return {
                                    next: A
                                }
                            }
                            function A() {
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            return f.prototype = m,
                            r(w, "constructor", {
                                value: m,
                                configurable: !0
                            }),
                            r(m, "constructor", {
                                value: f,
                                configurable: !0
                            }),
                            f.displayName = c(m, l, "GeneratorFunction"),
                            e.isGeneratorFunction = function(e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                            }
                            ,
                            e.mark = function(e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                                c(e, l, "GeneratorFunction")),
                                e.prototype = Object.create(w),
                                e
                            }
                            ,
                            e.awrap = function(e) {
                                return {
                                    __await: e
                                }
                            }
                            ,
                            x(E.prototype),
                            c(E.prototype, i, (function() {
                                return this
                            }
                            )),
                            e.AsyncIterator = E,
                            e.async = function(t, n, r, o, a) {
                                void 0 === a && (a = Promise);
                                var i = new E(s(t, n, r, o),a);
                                return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                                    return e.done ? e.value : i.next()
                                }
                                ))
                            }
                            ,
                            x(w),
                            c(w, l, "Generator"),
                            c(w, a, (function() {
                                return this
                            }
                            )),
                            c(w, "toString", (function() {
                                return "[object Generator]"
                            }
                            )),
                            e.keys = function(e) {
                                var t = Object(e)
                                  , n = [];
                                for (var r in t)
                                    n.push(r);
                                return n.reverse(),
                                function e() {
                                    for (; n.length; ) {
                                        var r = n.pop();
                                        if (r in t)
                                            return e.value = r,
                                            e.done = !1,
                                            e
                                    }
                                    return e.done = !0,
                                    e
                                }
                            }
                            ,
                            e.values = k,
                            Z.prototype = {
                                constructor: Z,
                                reset: function(e) {
                                    if (this.prev = 0,
                                    this.next = 0,
                                    this.sent = this._sent = void 0,
                                    this.done = !1,
                                    this.delegate = null,
                                    this.method = "next",
                                    this.arg = void 0,
                                    this.tryEntries.forEach(O),
                                    !e)
                                        for (var t in this)
                                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                                },
                                stop: function() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return this.rval
                                },
                                dispatchException: function(e) {
                                    if (this.done)
                                        throw e;
                                    var t = this;
                                    function r(n, r) {
                                        return i.type = "throw",
                                        i.arg = e,
                                        t.next = n,
                                        r && (t.method = "next",
                                        t.arg = void 0),
                                        !!r
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o]
                                          , i = a.completion;
                                        if ("root" === a.tryLoc)
                                            return r("end");
                                        if (a.tryLoc <= this.prev) {
                                            var l = n.call(a, "catchLoc")
                                              , c = n.call(a, "finallyLoc");
                                            if (l && c) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            } else if (l) {
                                                if (this.prev < a.catchLoc)
                                                    return r(a.catchLoc, !0)
                                            } else {
                                                if (!c)
                                                    throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc)
                                                    return r(a.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var o = this.tryEntries[r];
                                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                            var a = o;
                                            break
                                        }
                                    }
                                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                    var i = a ? a.completion : {};
                                    return i.type = e,
                                    i.arg = t,
                                    a ? (this.method = "next",
                                    this.next = a.finallyLoc,
                                    d) : this.complete(i)
                                },
                                complete: function(e, t) {
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                                    d
                                },
                                finish: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e)
                                            return this.complete(n.completion, n.afterLoc),
                                            O(n),
                                            d
                                    }
                                },
                                catch: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var o = r.arg;
                                                O(n)
                                            }
                                            return o
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, t, n) {
                                    return this.delegate = {
                                        iterator: k(e),
                                        resultName: t,
                                        nextLoc: n
                                    },
                                    "next" === this.method && (this.arg = void 0),
                                    d
                                }
                            },
                            e
                        }
                        function b(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, o, a, i, l = [], c = !0, s = !1;
                                    try {
                                        if (a = (n = n.call(e)).next,
                                        0 === t) {
                                            if (Object(n) !== n)
                                                return;
                                            c = !1
                                        } else
                                            for (; !(c = (r = a.call(n)).done) && (l.push(r.value),
                                            l.length !== t); c = !0)
                                                ;
                                    } catch (e) {
                                        s = !0,
                                        o = e
                                    } finally {
                                        try {
                                            if (!c && null != n.return && (i = n.return(),
                                            Object(i) !== i))
                                                return
                                        } finally {
                                            if (s)
                                                throw o
                                        }
                                    }
                                    return l
                                }
                            }(e, t) || w(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function w(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return x(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                            }
                        }
                        function x(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        var E = function(e, t, n, r) {
                            return new (n || (n = Promise))((function(o, a) {
                                function i(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }
                                function l(e) {
                                    try {
                                        c(r.throw(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value,
                                    t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }
                                    ))).then(i, l)
                                }
                                c((r = r.apply(e, t || [])).next())
                            }
                            ))
                        };
                        function _(e) {
                            var t, n = this, a = e.addActions, _ = e.domainModel, S = e.data, j = e.openFileSelector, O = void 0 === j ? function() {
                                return Promise.resolve(null)
                            }
                            : j, Z = (0,
                            r.useRef)(null), k = (0,
                            r.useRef)({}), A = b((0,
                            r.useState)(""), 2), C = A[0], N = A[1], P = b((0,
                            r.useState)({}), 2), R = P[0], L = P[1], T = b((0,
                            r.useState)(l.aG), 2), I = T[0], U = T[1], z = (0,
                            r.useState)({
                                openFileSelector: O,
                                eidtVisible: !1,
                                activeId: "",
                                type: "",
                                isDebug: !1,
                                leftWidth: 271,
                                addActions: Array.isArray(a) ? a : [{
                                    type: "domain",
                                    title: "领域模型"
                                }, {
                                    type: "aggregation-model",
                                    title: "聚合模型"
                                }],
                                domainModel: {
                                    add: function(e) {
                                        return _.add(Object.assign({}, e))
                                    },
                                    remove: function(e) {
                                        return _.remove(e)
                                    },
                                    update: function(e) {
                                        _.update(Object.assign({}, e))
                                    },
                                    test: function() {
                                        return _.test.apply(_, arguments)
                                    }
                                },
                                search: function(e) {
                                    N(e)
                                }
                            }), M = b(z, 2), V = M[0], q = M[1], D = b((0,
                            r.useState)(void 0), 2), W = D[0], Q = D[1], B = (0,
                            r.useCallback)((function(e, t) {
                                if ("create" === e)
                                    S.domainModels.push(t),
                                    V.domainModel.add(t);
                                else {
                                    var n = S.domainModels.findIndex((function(e) {
                                        return e.id === t.id
                                    }
                                    ));
                                    -1 !== n && (S.domainModels[n] = t,
                                    V.domainModel.update(t))
                                }
                            }
                            ), [V]), F = (0,
                            r.useCallback)((function(e) {
                                return new Promise((function(t) {
                                    var n = S.domainModels.findIndex((function(t) {
                                        return String(t.id) === String(e.id)
                                    }
                                    ));
                                    S.domainModels.splice(n, 1);
                                    try {
                                        V.domainModel.remove(e.id)
                                    } catch (e) {}
                                    t("")
                                }
                                ))
                            }
                            ), []), K = (0,
                            r.useCallback)((function(e) {
                                q((function(t) {
                                    return Object.assign(Object.assign({}, t), e)
                                }
                                ))
                            }
                            ), []), J = (0,
                            r.useCallback)((function(e) {
                                return E(n, void 0, void 0, v().mark((function t() {
                                    return v().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (!confirm("确认删除 ".concat(e.title, " 吗"))) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 3,
                                                F(e);
                                            case 3:
                                                U(l.aG);
                                            case 4:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )))
                            }
                            ), [V]), Y = (0,
                            r.useCallback)((function(e) {
                                U("aggregation-model" === e.type ? l.Vr : l.G8),
                                Q(e)
                            }
                            ), [V]), G = (0,
                            r.useCallback)((function(e) {
                                (0,
                                p.nr)(e.query.entity.domainFileId).then((function(t) {
                                    var n, r, o, a = t.find((function(t) {
                                        return t.id === e.query.entity.id && t.isOpen
                                    }
                                    ));
                                    e.query.edited ? (0,
                                    h.I)("模型已被修改，无法自动刷新实体~") : a ? (B("", (0,
                                    p.Dp)(e.id, Object.assign(Object.assign({}, a), {
                                        domainFileId: e.query.entity.domainFileId,
                                        domainFileName: e.query.entity.domainFileName
                                    }))),
                                    L(Object.assign(Object.assign({}, R), (n = {},
                                    o = void 0,
                                    (r = function(e) {
                                        var t = function(e, t) {
                                            if ("object" !== y(e) || null === e)
                                                return e;
                                            var n = e[Symbol.toPrimitive];
                                            if (void 0 !== n) {
                                                var r = n.call(e, "string");
                                                if ("object" !== y(r))
                                                    return r;
                                                throw new TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(e)
                                        }(e);
                                        return "symbol" === y(t) ? t : String(t)
                                    }(r = e.query.entity.domainFileId + e.query.entity.id))in n ? Object.defineProperty(n, r, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : n[r] = o,
                                    n))),
                                    (0,
                                    h.I)("实体刷新成功~", {
                                        type: "success"
                                    })) : (0,
                                    h.I)("对应模型中实体已删除 或 未开放领域服务，请前往模型编辑页确认~")
                                }
                                ))
                            }
                            ), [V, R, B]), H = (0,
                            r.useCallback)((function() {
                                U(l.aG),
                                Q(void 0)
                            }
                            ), []), X = (0,
                            r.useCallback)((function(e, t) {
                                if (t.id === V.expandId)
                                    return V.expandId = 0,
                                    void K(V);
                                V.expandId = t.id,
                                K(V)
                            }
                            ), [K, V]), $ = (0,
                            r.useCallback)((function() {
                                return V.addActions.filter((function(e) {
                                    return !["aggregation-model"].includes(e.type)
                                }
                                )).map((function(e) {
                                    var t, n, r = e.type, a = e.visible, s = e.render, u = s ? i().createPortal(I & a ? o().createElement("div", {
                                        style: {
                                            left: 361,
                                            top: null === (t = Z.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top
                                        },
                                        key: r,
                                        className: "".concat(c.Z["sidebar-panel-edit"])
                                    }, o().createElement(s, {
                                        panelCtx: V,
                                        constant: {
                                            exampleParamsFunc: l.Ys,
                                            exampleResultFunc: l.Aj,
                                            NO_PANEL_VISIBLE: l.aG
                                        }
                                    })) : null, document.body) : null;
                                    return "domain" === r && (u = W ? o().createElement(g.Z, {
                                        sidebarContext: V,
                                        onClose: H,
                                        initialModel: W,
                                        updateService: B,
                                        key: "domain",
                                        style: {
                                            top: null === (n = Z.current) || void 0 === n ? void 0 : n.getBoundingClientRect().top
                                        }
                                    }) : o().createElement(p.ZP, {
                                        sidebarContext: V,
                                        panelVisible: I,
                                        updateService: B,
                                        onClose: H,
                                        key: "domain",
                                        data: S
                                    })),
                                    u
                                }
                                ))
                            }
                            ), [V, I, B, H, S, W]);
                            return (0,
                            r.useEffect)((function() {
                                var e, t = S.domainModels.filter((function(e) {
                                    return "domain" === e.type && !e.query.edited
                                }
                                ));
                                if (t.length) {
                                    var n = []
                                      , r = {};
                                    n.push.apply(n, function(e) {
                                        if (Array.isArray(e))
                                            return x(e)
                                    }(e = t.map((function(e) {
                                        return (0,
                                        p.nr)(e.query.entity.domainFileId).then((function(t) {
                                            r[e.query.entity.domainFileId + e.query.entity.id] = (0,
                                            p.FN)(t.find((function(t) {
                                                return t.id === e.query.entity.id && t.isOpen
                                            }
                                            )), e.query.entity)
                                        }
                                        ))
                                    }
                                    ))) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                            return Array.from(e)
                                    }(e) || w(e) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    Promise.all(n).then((function() {
                                        L(r)
                                    }
                                    ))
                                }
                            }
                            ), []),
                            o().createElement(o().Fragment, null, o().createElement("div", {
                                ref: Z,
                                "data-id": "active-plugin-panel",
                                className: "".concat(c.Z["sidebar-panel"], " ").concat(c.Z["sidebar-panel-open"]),
                                onClick: function() {
                                    return Object.values(k.current).forEach((function(e) {
                                        return e()
                                    }
                                    ))
                                }
                            }, o().createElement("div", {
                                className: "".concat(c.Z["sidebar-panel-view"])
                            }, o().createElement("div", {
                                className: c.Z["sidebar-panel-header"]
                            }, o().createElement("div", {
                                className: c.Z["sidebar-panel-header__title"]
                            }, o().createElement("span", null, "模型列表")), o().createElement(u.Z, {
                                blurMap: k.current,
                                searchValue: C,
                                ctx: V,
                                setRender: K,
                                setPanelVisible: U,
                                panelVisible: I
                            })), S ? o().createElement("div", {
                                className: c.Z["sidebar-panel-list"]
                            }, S.domainModels.filter((function(e) {
                                return !C || e.content.title.includes(C)
                            }
                            )).map((function(e) {
                                var t = V.expandId === e.id;
                                e.updateTime = (0,
                                s.p)(e.updateTime || e.createTime);
                                var n = "domain" === e.type ? R[e.query.entity.domainFileId + e.query.entity.id] : void 0;
                                return o().createElement("div", {
                                    key: e.id
                                }, o().createElement("div", {
                                    key: e.id,
                                    className: c.Z["sidebar-panel-list-item"]
                                }, o().createElement("div", null, o().createElement("div", {
                                    onClick: function(t) {
                                        return X(t, e)
                                    },
                                    className: c.Z["sidebar-panel-list-item__left"]
                                }, o().createElement("div", {
                                    className: "".concat(c.Z.icon, " ").concat(t ? c.Z.iconExpand : "")
                                }, d.Qx), o().createElement("div", {
                                    className: c.Z.tag
                                }, "domain" === e.type ? "领域模型" : "聚合模型"), o().createElement("div", {
                                    className: c.Z.name
                                }, o().createElement("span", null, e.title))), o().createElement("div", {
                                    className: c.Z["sidebar-panel-list-item__right"]
                                }, "domain" === e.type ? o().createElement("div", {
                                    "data-mybricks-tip": p.lE[n] || "刷新领域模型实体",
                                    className: "".concat(c.Z.action, " ").concat(n ? c.Z.upgrade : ""),
                                    onClick: function() {
                                        return G(e)
                                    }
                                }, d.bi) : o().createElement("svg", {
                                    viewBox: "0 0 1024 1024",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor"
                                }), o().createElement("div", {
                                    "data-mybricks-tip": "编辑",
                                    className: c.Z.action,
                                    onClick: function() {
                                        return Y(e)
                                    }
                                }, d.eP), o().createElement("div", {
                                    className: c.Z.action,
                                    "data-mybricks-tip": "删除",
                                    onClick: function() {
                                        return J(e)
                                    }
                                }, d.Od)))), t ? o().createElement("div", {
                                    className: c.Z["sidebar-panel-list-item__expand"]
                                }, o().createElement("div", {
                                    className: c.Z["sidebar-panel-list-item__param"]
                                }, o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__name"]
                                }, "标识:"), o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__content"]
                                }, e.id)), "domain" === e.type ? o().createElement(o().Fragment, null, o().createElement("div", {
                                    className: c.Z["sidebar-panel-list-item__param"]
                                }, o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__name"]
                                }, "模型:"), o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__content"]
                                }, e.query.entity.domainFileName)), o().createElement("div", {
                                    className: c.Z["sidebar-panel-list-item__param"]
                                }, o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__name"]
                                }, "实体:"), o().createElement("span", {
                                    className: c.Z["sidebar-panel-list-item__content"]
                                }, e.query.entity.name))) : null) : null)
                            }
                            ))) : o().createElement(m.Z, null)), $(), I & l.Vr ? o().createElement(f.Z, {
                                panelVisible: I,
                                sidebarContext: V,
                                onClose: H,
                                initialModel: W,
                                updateService: B,
                                key: "aggregation-model",
                                style: {
                                    top: null === (t = Z.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top
                                }
                            }) : null))
                        }
                    }
                    ,
                    8704: (__unused_webpack_module,__nested_webpack_exports__,__nested_webpack_require_155454__)=>{
                        "use strict";
                        __nested_webpack_require_155454__.d(__nested_webpack_exports__, {
                            call: ()=>call,
                            mock: ()=>mock
                        });
                        var axios__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_155454__(5274)
                          , _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_155454__(6178)
                          , defaultFn = function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                                n[r - 1] = arguments[r];
                            return Object.assign(Object.assign({}, e), n)
                        }
                          , httpRegExp = new RegExp("^(http|https)://");
                        function call(domainModel, params, config) {
                            return new Promise((function(resolve, reject) {
                                try {
                                    var fn = eval("(".concat(decodeURIComponent("test" === domainModel.mode ? domainModel.script : domainModel.query[config.action.toLocaleUpperCase()].script), ")"))
                                      , _ref = config || {}
                                      , _ref$before = _ref.before
                                      , before = void 0 === _ref$before ? defaultFn : _ref$before;
                                    fn(params, {
                                        then: resolve,
                                        onError: reject
                                    }, {
                                        ajax: function(e) {
                                            var t = before(Object.assign({}, e))
                                              , n = t.url;
                                            return domainModel.useProxy && httpRegExp.test(n) ? (0,
                                            axios__WEBPACK_IMPORTED_MODULE_1__.Z)({
                                                url: "/paas/api/proxy",
                                                method: "post",
                                                data: t || e
                                            }).catch((function(e) {
                                                reject(e)
                                            }
                                            )) : (0,
                                            axios__WEBPACK_IMPORTED_MODULE_1__.Z)(t || e).catch((function(e) {
                                                reject(e)
                                            }
                                            ))
                                        }
                                    })
                                } catch (e) {
                                    console.error(e),
                                    reject("连接器script错误.")
                                }
                            }
                            ))
                        }
                        function mock(e) {
                            return new Promise((function(t, n) {
                                if ("http" === e.type || "http-sql" === e.type)
                                    try {
                                        if (e.outputSchema)
                                            return t((0,
                                            _utils__WEBPACK_IMPORTED_MODULE_0__.AS)(e.outputSchema));
                                        n("当前接口不存在返回值schema，不支持Mock")
                                    } catch (e) {
                                        n("connecotr mock error.")
                                    }
                                else
                                    n("error connecotr type")
                            }
                            ))
                        }
                    }
                    ,
                    8543: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return e ? decodeURIComponent(e).replace(/export\s+default.*function.*\(/, "function _RT_(") : e
                        }
                        function o(e, t=!1) {
                            var n;
                            let o = function(e, {then: t, onError: n}, r) {
                                return function(e, r) {
                                    const o = "__method__";
                                    try {
                                        const a = "__path__";
                                        __convert_page_info__(e);
                                        const i = o.startsWith("GET") ? {
                                            params: e,
                                            url: a,
                                            method: o
                                        } : {
                                            data: e,
                                            url: a,
                                            method: o
                                        }
                                          , l = __input__(i);
                                        l.url = (l.url || a).replace(/{(\w+)}/g, ((t,n)=>{
                                            const r = e[n] || "";
                                            return Reflect.deleteProperty(l.params || {}, n),
                                            r
                                        }
                                        )),
                                        l.method = l.method || o,
                                        r.ajax(l).then((e=>e.data)).then((e=>__output__(e, Object.assign({}, l), {
                                            throwStatusCodeError: e=>{
                                                n(e)
                                            }
                                        }))).then((e=>__convert_response__(e))).then(t).catch((e=>{
                                            n(e && e.message || e)
                                        }
                                        ))
                                    } catch (e) {
                                        return n(e)
                                    }
                                }(e, r)
                            }
                            .toString().replace("__input__", r(e.input)).replace("__output__", r(e.output)).replace("__method__", e.method).replace("__path__", null === (n = e.path) || void 0 === n ? void 0 : n.trim());
                            return encodeURIComponent(t ? o.replace("__convert_page_info__", "(() => {})").replace("__convert_response__", "(response => response)") : o.replace("__convert_page_info__", "domain" === e.modelType ? "(() => {})" : e.pageInfo ? `((params) => {\n\t\t\t\t\t\t\t\t\tif (!params) { return; }\n\t\t\t\t\t\t\t\t\tconst pageNum = params.page ? params.page.pageNum : undefined;\n\t\t\t\t\t\t\t\t\tconst pageSize = params.page ? params.page.pageSize : undefined;\n\t\t\t\t\t\t\t\t\tdelete params.page;\n\t\t\t\t\t\t\t\t\tdelete params.fields;\n\t\t\t\t\t\t\t\t\tObject.assign(params, params.query || {});\n\t\t\t\t\t\t\t\t\tdelete params.query;\n\t\t\t\t\t\t\t\t\tdelete params.orders;\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t ${e.pageInfo.pageNumKey ? `params.${e.pageInfo.pageNumKey} = pageNum;` : ""}\n\t\t\t\t\t\t\t\t\t ${e.pageInfo.pageSizeKey ? `params.${e.pageInfo.pageSizeKey} = pageSize;` : ""}\n\t\t\t\t\t\t\t\t})` : "((params) => {\n\t\t\t\t\t\t\t\t\tif (!params) { return; }\n\t\t\t\t\t\t\t\t\tdelete params.page;\n\t\t\t\t\t\t\t\t\tdelete params.fields;\n\t\t\t\t\t\t\t\t\tObject.assign(params, params.query || {});\n\t\t\t\t\t\t\t\t\tdelete params.query;\n\t\t\t\t\t\t\t\t})").replace("__convert_response__", e.markedKeymap ? `((response) => {\n        const markedKeyMap = ${JSON.stringify(e.markedKeymap)};\n        \n        if (!markedKeyMap.successStatus || !Array.isArray(markedKeyMap.successStatus.path) || markedKeyMap.successStatus.value === undefined) {\n          return { code: -1, msg: '未标记请求成功标识值' };\n        }\n        const newResponse = { code: 1, data: {} };\n        \n        for(let markedKey in markedKeyMap) {\n          if (markedKeyMap[markedKey] && Array.isArray(markedKeyMap[markedKey].path) && markedKeyMap[markedKey].path.length) {\n            let keys = markedKeyMap[markedKey].path;\n\t\t\t      let originResponse = response;\n\t\t\t      \n\t\t\t      while (keys.length && originResponse) {\n\t\t\t        const key = keys.shift();\n\t\t\t        originResponse = originResponse[key];\n\t\t\t      }\n\t\t\t      \n\t\t\t      if (markedKey === 'successStatus' && markedKeyMap[markedKey].value !== originResponse) {\n\t\t\t        newResponse.code = -1;\n\t\t\t        newResponse.msg = newResponse.msg || '接口请求失败';\n\t\t\t        continue;\n\t\t\t      } else if (keys.length || originResponse === undefined || originResponse === null || (markedKey === 'dataSource' && !Array.isArray(originResponse))) {\n\t\t\t        continue;\n\t\t\t      }\n\t\t\t      \n\t\t\t      if (markedKey === 'error') {\n\t\t\t      \tnewResponse.msg = originResponse;\n\t\t\t      } else if (markedKey !== 'successStatus') {\n\t\t\t\t\t\t\tnewResponse.data[markedKey] = originResponse;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n        }\n        \n        return newResponse;\n      })` : "(response => response)"))
                        }
                        n.d(t, {
                            i: ()=>o
                        })
                    }
                    ,
                    6178: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            AS: ()=>d,
                            HD: ()=>p,
                            Sm: ()=>s,
                            Tp: ()=>l,
                            UK: ()=>v,
                            Vj: ()=>u,
                            gL: ()=>E,
                            gp: ()=>_,
                            gu: ()=>x,
                            oV: ()=>h,
                            or: ()=>b,
                            rq: ()=>c
                        });
                        var r = n(4113)
                          , o = n(5525);
                        function a(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        function i(e) {
                            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            i(e)
                        }
                        function l(e) {
                            return decodeURIComponent(e).replace(/export\s+default.*function.*\(/, "function _RT_(")
                        }
                        function c(e) {
                            e && ("object" === e.type ? Object.values(e.properties).forEach((function(e) {
                                c(e)
                            }
                            )) : "array" === e.type ? (0,
                            r.xb)(e.items) ? (Object.defineProperty(e, "type", {
                                writable: !0,
                                value: "array"
                            }),
                            Reflect.deleteProperty(e, "items")) : "object" === e.items.type && Object.values(e.items.properties).forEach((function(e) {
                                c(e)
                            }
                            )) : "unknown" === e.type && Object.defineProperty(e, "type", {
                                writable: !0,
                                value: "string"
                            }))
                        }
                        function s(e) {
                            if (e) {
                                var t = {};
                                return "string" === e.type ? e.defaultValue || "" : "number" === e.type ? +e.defaultValue : (e.children && ("array" === e.type && (t = []),
                                e.children.forEach((function(e) {
                                    t[e.name] = s(e)
                                }
                                ))),
                                t)
                            }
                        }
                        function u() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, t = "", n = 0; n < e; n++)
                                t += "abcdefhijkmnprstwxyz".charAt(Math.floor(20 * Math.random()));
                            return "u_" + t
                        }
                        function d(e) {
                            return function(e) {
                                if (e) {
                                    var t, n = e.type;
                                    if ("string" === n || "number" === n)
                                        return function(e) {
                                            var t = e.type;
                                            if (void 0 !== e.default && "" !== e.default)
                                                return e.default;
                                            if ("string" === t) {
                                                var n = e.minLength
                                                  , r = void 0 === n ? 0 : n
                                                  , o = e.maxLength
                                                  , a = +r
                                                  , i = +(void 0 === o ? 8 : o)
                                                  , l = function() {
                                                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, t = "", n = 0; n < e; n++)
                                                        t += "abcdefhijkmnprstwxyz".charAt(Math.floor(20 * Math.random()));
                                                    return t
                                                }(i).slice(i - Math.round(a + Math.random() * (i - a)));
                                                return l
                                            }
                                            var c = e.minimum
                                              , s = void 0 === c ? 0 : c
                                              , u = e.maximum
                                              , d = +s
                                              , p = +(void 0 === u ? 100 : u);
                                            return d + Math.round(Math.random() * (p - d))
                                        }(e);
                                    if ("array" === n) {
                                        t = [];
                                        for (var r = e.minItems, o = void 0 === r ? 1 : r, a = e.maxItems, i = void 0 === a ? 5 : a, l = o + Math.round(Math.random() * (i - o)), c = 0; c < l; c++) {
                                            var s = d(e.items);
                                            null != s && t.push(s)
                                        }
                                    }
                                    return "object" === e.type && (t = {},
                                    Object.keys(e.properties || {}).forEach((function(n) {
                                        t[n] = d(e.properties[n])
                                    }
                                    ))),
                                    t
                                }
                            }(e)
                        }
                        function p(e) {
                            var t = {
                                type: void 0
                            };
                            return f({
                                schema: t,
                                val: e
                            }),
                            t.type ? t : void 0
                        }
                        function f(e) {
                            var t, n, r = e.schema, o = e.val, a = e.key, l = e.fromAry;
                            if (Array.isArray(o)) {
                                var c = o.length ? {} : void 0;
                                a ? (r[a] = {
                                    type: "array",
                                    items: c
                                },
                                c && (r[a].items = c)) : (r.type = "array",
                                c && (r.items = c)),
                                function(e, t) {
                                    if (e) {
                                        var n = [];
                                        t.length > 0 && t.forEach((function(t) {
                                            var r = JSON.parse(JSON.stringify(e));
                                            f({
                                                schema: r,
                                                val: t,
                                                fromAry: !0
                                            }),
                                            n.push(r)
                                        }
                                        )),
                                        m(e, n.filter(Boolean))
                                    }
                                }(c, o)
                            } else if ("object" === i(o) && o) {
                                var s;
                                l && (r.type = "object",
                                s = r.properties = {});
                                var u = l ? s : {};
                                l || (a ? r[a] = {
                                    type: "object",
                                    properties: u
                                } : (r.type = "object",
                                r.properties = u)),
                                t = u,
                                n = o,
                                Object.keys(n).map((function(e) {
                                    return f({
                                        schema: t,
                                        val: n[e],
                                        key: e
                                    })
                                }
                                ))
                            } else {
                                var d = null == o ? "unknown" : i(o);
                                void 0 === a ? r.type = d : r[a] = {
                                    type: d
                                }
                            }
                        }
                        var m = function e(t, n) {
                            if (!n)
                                return t;
                            for (var r = null, o = function() {
                                var e = n[a];
                                if (!e || !Object.keys(e).length)
                                    return "continue";
                                if (r)
                                    "object" === t.type && "object" === e.type ? Object.keys(e.properties || {}).forEach((function(n) {
                                        var r = t.properties[n];
                                        (!r && e.properties[n] || "unknown" === r.type && "unknown" !== e.properties[n].type) && (t.properties[n] = e.properties[n])
                                    }
                                    )) : "array" === t.type && "array" === e.type && (t.items && Object.keys(t.items).length || (t.items = e.items || {}));
                                else if ("unknown" !== e.type) {
                                    if ("object" !== e.type && "array" !== e.type)
                                        return delete t.properties,
                                        Object.assign(t, e),
                                        "break";
                                    r = e,
                                    Object.assign(t, e)
                                } else
                                    delete t.properties,
                                    Object.assign(t, e)
                            }, a = 0; a < n.length; a++) {
                                var i = o();
                                if ("continue" !== i && "break" === i)
                                    break
                            }
                            "object" === t.type ? Object.keys(t.properties || {}).forEach((function(r) {
                                var o, a, i, l, c, s;
                                "object" === (null === (a = null === (o = t.properties) || void 0 === o ? void 0 : o[r]) || void 0 === a ? void 0 : a.type) ? e(t.properties[r], n.filter(Boolean).map((function(e) {
                                    var t;
                                    return null === (t = null == e ? void 0 : e.properties) || void 0 === t ? void 0 : t[r]
                                }
                                ))) : "array" === (null === (l = null === (i = t.properties) || void 0 === i ? void 0 : i[r]) || void 0 === l ? void 0 : l.type) && ((null === (s = null === (c = t.properties) || void 0 === c ? void 0 : c[r]) || void 0 === s ? void 0 : s.items) || (t.properties[r].items = {}),
                                e(t.properties[r], n.filter(Boolean).map((function(e) {
                                    var t;
                                    return null === (t = null == e ? void 0 : e.properties) || void 0 === t ? void 0 : t[r]
                                }
                                ))))
                            }
                            )) : "array" === t.type && (t.items || (t.items = {}),
                            e(t.items, n.filter(Boolean).map((function(e) {
                                return (null == e ? void 0 : e.items) || {}
                            }
                            ))))
                        };
                        function h(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e
                            }
                        }
                        var g = function(e) {
                            switch (e) {
                            case "string":
                            default:
                                return "string";
                            case "boolean":
                                return "boolean";
                            case "number":
                                return "number";
                            case "object":
                                return "relation";
                            case "array":
                                return "mapping"
                            }
                        }
                          , y = function(e) {
                            switch (e) {
                            case "string":
                            case "boolean":
                                return "varchar";
                            case "number":
                            case "object":
                                return "bigint";
                            default:
                                return ""
                            }
                        }
                          , v = function(e) {
                            for (var t, n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], a = e; o.length && a; )
                                a = null === (n = a.properties || (null === (t = a.items) || void 0 === t ? void 0 : t.properties)) || void 0 === n ? void 0 : n[o.shift()];
                            return o.length || !a || "array" !== a.type || "object" !== (null === (r = a.items) || void 0 === r ? void 0 : r.type) ? {
                                fieldAry: []
                            } : {
                                fieldAry: function e(t) {
                                    var n;
                                    return "object" === t.type || "array" === t.type && "object" === (null === (n = t.items) || void 0 === n ? void 0 : n.type) ? Object.keys(("object" === t.type ? t.properties : t.items.properties) || {}).map((function(n) {
                                        var r, o = t.properties[n], a = {
                                            id: u(),
                                            name: n,
                                            bizType: g(o.type),
                                            dbType: y(o.type)
                                        };
                                        return "object" === o.type ? a.mapping = {
                                            condition: "-1",
                                            type: "primary",
                                            entity: {
                                                id: u(),
                                                fieldAry: e(o)
                                            }
                                        } : "array" === o.type && "object" === (null === (r = o.items) || void 0 === r ? void 0 : r.type) && (a.mapping = {
                                            condition: "-1",
                                            type: "foreigner",
                                            entity: {
                                                id: u(),
                                                fieldAry: e(o.items)
                                            }
                                        }),
                                        a
                                    }
                                    )) : []
                                }(a.items)
                            }
                        }
                          , b = function(e) {
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return ""
                            }
                        }
                          , w = function(e) {
                            switch (e.bizType) {
                            case o.Gy.ENUM:
                                return "string";
                            case o.Gy.DATETIME:
                                return e.showFormat ? "string" : "number";
                            case o.Gy.STRING:
                                return "string";
                            case o.Gy.NUMBER:
                                return "number";
                            case o.Gy.JSON:
                                return "any";
                            case o.Gy.RELATION:
                            case o.Gy.SYS_USER:
                            case o.Gy.SYS_ROLE:
                            case o.Gy.SYS_ROLE_RELATION:
                                return "number"
                            }
                        }
                          , x = function(e) {
                            var t = {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "number"
                                    },
                                    data: {
                                        type: "object",
                                        properties: {
                                            dataSource: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {}
                                                }
                                            },
                                            total: {
                                                type: "number"
                                            },
                                            pageNum: {
                                                type: "number"
                                            },
                                            pageSize: {
                                                type: "number"
                                            }
                                        }
                                    },
                                    msg: {
                                        type: "string"
                                    }
                                }
                            };
                            return null == e || e.fieldAry.filter((function(e) {
                                return "mapping" !== e.bizType && !e.isPrivate
                            }
                            )).forEach((function(e) {
                                t.properties.data.properties.dataSource.items.properties[e.name] = {
                                    type: w(e)
                                }
                            }
                            )),
                            t
                        }
                          , E = function(e) {
                            var t = {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "number"
                                    },
                                    data: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {}
                                        }
                                    },
                                    msg: {
                                        type: "string"
                                    }
                                }
                            };
                            return null == e || e.fieldAry.filter((function(e) {
                                return "mapping" !== e.bizType && !e.isPrivate
                            }
                            )).forEach((function(e) {
                                t.properties.data.items.properties[e.name] = {
                                    type: w(e)
                                }
                            }
                            )),
                            t
                        }
                          , _ = function(e, t) {
                            if (!e || !t)
                                return {
                                    outputSchema: void 0,
                                    errorSchema: void 0
                                };
                            var n = {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "number"
                                    },
                                    data: {
                                        type: "object",
                                        properties: {}
                                    },
                                    msg: {
                                        type: "string"
                                    }
                                }
                            }
                              , r = {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "number"
                                    }
                                }
                            };
                            return Object.keys(t).filter((function(e) {
                                var n, r;
                                return !!(null === (r = null === (n = t[e]) || void 0 === n ? void 0 : n.path) || void 0 === r ? void 0 : r.length)
                            }
                            )).forEach((function(o) {
                                for (var i, l, c, s = e, u = function(e) {
                                    if (Array.isArray(e))
                                        return a(e)
                                }(p = t[o].path) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(p) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return a(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name),
                                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                                    }
                                }(p) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(); u.length && s; ) {
                                    var d = u.shift();
                                    s = (null === (i = s.properties) || void 0 === i ? void 0 : i[d]) || (null === (c = null === (l = s.items) || void 0 === l ? void 0 : l.properties) || void 0 === c ? void 0 : c[d])
                                }
                                var p;
                                !u.length && s && (["dataSource", "total", "pageNum", "pageSize"].includes(o) ? n.properties.data.properties[o] = s : "response" === o ? n.properties.data = s : "error" === o && (r.properties.msg = s))
                            }
                            )),
                            {
                                outputSchema: n,
                                errorSchema: r
                            }
                        }
                    }
                    ,
                    1327: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            r(e)
                        }
                        function o(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            if (null === e || "object" !== r(e))
                                return e;
                            var n = t.filter((function(t) {
                                return t.original === e
                            }
                            ))[0];
                            if (n)
                                return n.copy;
                            var a = Array.isArray(e) ? [] : {};
                            return t.push({
                                original: e,
                                copy: a
                            }),
                            Object.keys(e).forEach((function(n) {
                                a[n] = o(e[n], t)
                            }
                            )),
                            a
                        }
                        n.d(t, {
                            X: ()=>o
                        })
                    }
                    ,
                    3286: (e,t,n)=>{
                        "use strict";
                        Math.max,
                        Math.min
                    }
                    ,
                    4113: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Xh: ()=>r.X,
                            xb: ()=>o.Z
                        }),
                        n(3286);
                        var r = n(1327)
                          , o = n(273)
                    }
                    ,
                    273: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return !e || (Array.isArray(e) ? 0 === e.length : "[object Object]" !== Object.prototype.toString.call(e) || 0 === Object.keys(e).length)
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    1988: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            r(e)
                        }
                        function o(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YY-mm-dd HH:MM:SS";
                            if ("number" == typeof e && (e = new Date(e)),
                            "object" === r(e) && e instanceof Date) {
                                var n, o = {
                                    "Y+": e.getFullYear().toString(),
                                    "m+": (e.getMonth() + 1).toString(),
                                    "d+": e.getDate().toString(),
                                    "H+": e.getHours().toString(),
                                    "M+": e.getMinutes().toString(),
                                    "S+": e.getSeconds().toString()
                                };
                                for (var a in o)
                                    (n = new RegExp("(" + a + ")").exec(t)) && (t = t.replace(n[1], 1 == n[1].length ? o[a] : o[a].padStart(n[1].length, "0")));
                                return t
                            }
                            return e
                        }
                        n.d(t, {
                            p: ()=>o
                        })
                    }
                    ,
                    1771: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, '._35GaFVAwvS7vIciKe6W3Ug\\=\\= {\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  margin-left: 8px !important;\n  color: rgba(0, 0, 0, 0.85);\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  font-size: 12px !important;\n  height: 24px;\n  line-height: 1 !important;\n  border-radius: 3px;\n  padding: 0 10px;\n  outline: 0;\n  cursor: pointer;\n  user-select: none;\n}\n._35GaFVAwvS7vIciKe6W3Ug\\=\\=[type="primary"] {\n  color: #fff;\n  border-color: #fa6400;\n  background-color: #fa6400;\n  font-weight: bold;\n}\n._35GaFVAwvS7vIciKe6W3Ug\\=\\=[type="default"] {\n  color: #fa6400;\n  border-color: #fa6400;\n}\n', ""]),
                        o.locals = {
                            btn: "_35GaFVAwvS7vIciKe6W3Ug=="
                        };
                        const a = o
                    }
                    ,
                    6866: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".BSQERif2l3CF7xJxA2Jgtg\\=\\= {\n  position: relative;\n  font-size: 12px;\n  height: auto;\n}\n.BSQERif2l3CF7xJxA2Jgtg\\=\\= .Vv1Ta3iUmESoH3yRYwzJSw\\=\\= {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  cursor: pointer;\n}\n.BSQERif2l3CF7xJxA2Jgtg\\=\\= .Vv1Ta3iUmESoH3yRYwzJSw\\=\\= svg {\n  max-width: 10px;\n}\n.BSQERif2l3CF7xJxA2Jgtg\\=\\= .Vv1Ta3iUmESoH3yRYwzJSw\\=\\= .dE9w9KYwnaAUlwc--W\\+ipA\\=\\= {\n  display: flex;\n  align-items: center;\n  margin-right: 6px;\n  transform: rotate(90deg);\n}\n.BSQERif2l3CF7xJxA2Jgtg\\=\\= .Vv1Ta3iUmESoH3yRYwzJSw\\=\\= .zmH-D2zDQHfckULoUH7P4w\\=\\= {\n  transform: rotate(0);\n}\n.BSQERif2l3CF7xJxA2Jgtg\\=\\= .Ye5fLU\\+9fxFNxgLkP2X-KQ\\=\\= {\n  height: 100%;\n}\n", ""]),
                        o.locals = {
                            collapse: "BSQERif2l3CF7xJxA2Jgtg==",
                            header: "Vv1Ta3iUmESoH3yRYwzJSw==",
                            icon: "dE9w9KYwnaAUlwc--W+ipA==",
                            fold: "zmH-D2zDQHfckULoUH7P4w==",
                            content: "Ye5fLU+9fxFNxgLkP2X-KQ=="
                        };
                        const a = o
                    }
                    ,
                    4647: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".rYfiSo664NbGbvYBpafWjw\\=\\= {\n  position: relative;\n}\n.rYfiSo664NbGbvYBpafWjw\\=\\= .gokc7NLWWU5n4cNwD7dSaA\\=\\= {\n  position: absolute;\n  z-index: 1;\n}\n.rYfiSo664NbGbvYBpafWjw\\=\\=:hover .gokc7NLWWU5n4cNwD7dSaA\\=\\= {\n  display: inline-block;\n}\n", ""]),
                        o.locals = {
                            dropdown: "rYfiSo664NbGbvYBpafWjw==",
                            content: "gokc7NLWWU5n4cNwD7dSaA=="
                        };
                        const a = o
                    }
                    ,
                    6846: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".bJJv8pvLzSKypUgqSvMLVQ\\=\\= {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  font-size: 12px;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= label {\n  flex: 0 0 80px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= .F2d0TEfKKh-hRFWVd4U9hQ\\=\\= {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= ._5gQ7rRCy\\+0TSKWtcZ9h1Kw\\=\\= input,\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= ._5gQ7rRCy\\+0TSKWtcZ9h1Kw\\=\\= textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= ._5gQ7rRCy\\+0TSKWtcZ9h1Kw\\=\\= textarea {\n  min-height: 50px;\n}\n.bJJv8pvLzSKypUgqSvMLVQ\\=\\= .ADEiDpKTgNPh3h4vWiL7QA\\=\\= {\n  flex: 1;\n  padding-left: 6px;\n}\n", ""]),
                        o.locals = {
                            item: "bJJv8pvLzSKypUgqSvMLVQ==",
                            editor: "F2d0TEfKKh-hRFWVd4U9hQ==",
                            textEdt: "_5gQ7rRCy+0TSKWtcZ9h1Kw==",
                            content: "ADEiDpKTgNPh3h4vWiL7QA=="
                        };
                        const a = o
                    }
                    ,
                    1053: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= .ipRemGzHU5VOtBUS7RI97w\\=\\= {\n  flex: 1;\n  display: flex;\n  position: relative;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= ._3cuh0cvFS1WmOeljQkvIqA\\=\\= input,\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= ._3cuh0cvFS1WmOeljQkvIqA\\=\\= textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= ._3cuh0cvFS1WmOeljQkvIqA\\=\\= input:focus,\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= ._3cuh0cvFS1WmOeljQkvIqA\\=\\= textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.B1NQMzVY3LVc6Cm5XoMqnQ\\=\\= ._3cuh0cvFS1WmOeljQkvIqA\\=\\= textarea {\n  min-height: 50px;\n}\n", ""]),
                        o.locals = {
                            input: "B1NQMzVY3LVc6Cm5XoMqnQ==",
                            editor: "ipRemGzHU5VOtBUS7RI97w==",
                            textEdt: "_3cuh0cvFS1WmOeljQkvIqA=="
                        };
                        const a = o
                    }
                    ,
                    696: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, "@keyframes ZEbqTHBoyOqbkUcOc\\+8l9A\\=\\= {\n  0% {\n    top: -20px;\n  }\n  100% {\n    top: 20px;\n  }\n}\n.vZqSiipV\\+1J0qyMEejsi\\+A\\=\\= {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  z-index: 1001;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  pointer-events: all;\n  animation: ZEbqTHBoyOqbkUcOc\\+8l9A\\=\\= 0.25s;\n}\n.vZqSiipV\\+1J0qyMEejsi\\+A\\=\\= > svg {\n  flex-shrink: 0;\n}\n.vZqSiipV\\+1J0qyMEejsi\\+A\\=\\= .IT5bLuGR2nesl25gUkFKRg\\=\\= {\n  margin-left: 8px;\n}\n", ""]),
                        o.locals = {
                            message: "vZqSiipV+1J0qyMEejsi+A==",
                            animation: "ZEbqTHBoyOqbkUcOc+8l9A==",
                            content: "IT5bLuGR2nesl25gUkFKRg=="
                        };
                        const a = o
                    }
                    ,
                    2055: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".DUm9JZAJdUJl6qm4JRcOFw\\=\\= {\n  display: flex;\n  flex-direction: row;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.DUm9JZAJdUJl6qm4JRcOFw\\=\\= .E1HhyzTALiNt8pbH4KRCUg\\=\\= {\n  padding: 3px 8px;\n  font-size: 12px;\n  background: #FFF;\n  cursor: pointer;\n  border: 1px solid #DDD;\n  display: flex;\n  align-items: center;\n}\n.DUm9JZAJdUJl6qm4JRcOFw\\=\\= .E1HhyzTALiNt8pbH4KRCUg\\=\\=:not(:last-child) {\n  border-right: 1px solid #DDD;\n}\n.DUm9JZAJdUJl6qm4JRcOFw\\=\\= .psrsFEZNdps36zvgEfnSIA\\=\\= {\n  background: #616C81;\n  color: #FFF;\n  font-weight: bold;\n  margin: -1px;\n}\n", ""]),
                        o.locals = {
                            edt: "DUm9JZAJdUJl6qm4JRcOFw==",
                            opt: "E1HhyzTALiNt8pbH4KRCUg==",
                            selected: "psrsFEZNdps36zvgEfnSIA=="
                        };
                        const a = o
                    }
                    ,
                    5235: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".VLaxByI47I1mCRcVEOAt5g\\=\\= {\n  display: flex;\n  align-items: center;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= .xQgWL\\+iT8YpRfmk8lki9tw\\=\\= {\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 0;\n  border-radius: 100px;\n  cursor: pointer;\n  min-width: 28px;\n  height: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  transition: all 0.2s;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= .xQgWL\\+iT8YpRfmk8lki9tw\\=\\=.V90JhZG4kGJxiR1\\+QW66Iw\\=\\= {\n  background-color: #fa6400;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= .xQgWL\\+iT8YpRfmk8lki9tw\\=\\=.V90JhZG4kGJxiR1\\+QW66Iw\\=\\= ._56\\+K28otzRtjzQkiSALzeA\\=\\= {\n  left: initial;\n  right: 2px;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= .xQgWL\\+iT8YpRfmk8lki9tw\\=\\= ._56\\+K28otzRtjzQkiSALzeA\\=\\= {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  transition: all 0.2s ease-in-out;\n  top: 2px;\n  left: 2px;\n}\n.VLaxByI47I1mCRcVEOAt5g\\=\\= .xQgWL\\+iT8YpRfmk8lki9tw\\=\\= ._56\\+K28otzRtjzQkiSALzeA\\=\\=::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  border-radius: 9px;\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n  content: '';\n}\n", ""]),
                        o.locals = {
                            ct: "VLaxByI47I1mCRcVEOAt5g==",
                            switch: "xQgWL+iT8YpRfmk8lki9tw==",
                            checked: "V90JhZG4kGJxiR1+QW66Iw==",
                            handle: "_56+K28otzRtjzQkiSALzeA=="
                        };
                        const a = o
                    }
                    ,
                    2952: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".qrz9iwllgDZRNhSVLNvJuQ\\=\\= {\n  box-shadow: 5px 0 10px -5px #ddd;\n  overflow: hidden;\n  width: 560px;\n  position: absolute;\n  z-index: 1000;\n  bottom: 26px;\n  left: 271px;\n  background-color: #f7f7f7;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n}\n.KLfkDOdn3UgAJNIxRCQj-w\\=\\= {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0 10px;\n  line-height: 50px;\n  height: 50px;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: text;\n  border-bottom: 1px solid #D8D8D8;\n}\n._1h\\+SlHuqobYd225sKAa4OA\\=\\= {\n  font-size: 14px;\n  width: 100%;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #D8D8D8;\n  position: relative;\n  background: #EBECEE;\n}\n._1h\\+SlHuqobYd225sKAa4OA\\=\\= .ZSHc2z2etoTnchFka8OlOA\\=\\= {\n  cursor: pointer;\n  color: #9B9B9B;\n  min-width: 80px;\n  max-width: 180px;\n  text-align: center;\n  border-right: 1px solid #D8D8D8;\n  padding: 0 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: calc(100% + 2px);\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: #EBECEE;\n  border-bottom: 1px solid #D8D8D8;\n  border-top: 1px solid #D8D8D8;\n}\n._1h\\+SlHuqobYd225sKAa4OA\\=\\= .duXs5snDwm--q64H4Cva9w\\=\\= {\n  cursor: inherit;\n  color: #333333;\n  font-weight: 700;\n  background-color: #F7F7F7;\n  border-bottom-width: 0 !important;\n}\n.JLyLZG29oYkjvxzkqVgPEA\\=\\= {\n  margin-bottom: 36px;\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n}\n._1SU4dIOsgRLRXBkQLSv0CA\\=\\= {\n  padding: 0 6px 0;\n  border-radius: 6px;\n  border: 1px solid #eee;\n  margin-bottom: 12px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  align-items: center;\n  font-size: 12px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .gUA\\+PMlvYvp5o8sHXGBpFQ\\=\\= {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .TKPQ3n2dkdxUIXa5wlqrFQ\\=\\= {\n  border: 1px solid #FF0000 !important;\n  padding: 0;\n  margin-bottom: 4px;\n  border-radius: 3px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .TKPQ3n2dkdxUIXa5wlqrFQ\\=\\=::after {\n  content: attr(data-err);\n  color: red;\n  position: absolute;\n  bottom: -17px;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .pN8UDCvg9sAB6zDUbcV7UQ\\=\\= input,\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .pN8UDCvg9sAB6zDUbcV7UQ\\=\\= textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .pN8UDCvg9sAB6zDUbcV7UQ\\=\\= input:focus,\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .pN8UDCvg9sAB6zDUbcV7UQ\\=\\= textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.r33TFuZuB5ENVvPEjIMxSg\\=\\= .pN8UDCvg9sAB6zDUbcV7UQ\\=\\= textarea {\n  min-height: 50px;\n}\n", ""]),
                        o.locals = {
                            sidebarPanelEdit: "qrz9iwllgDZRNhSVLNvJuQ==",
                            sidebarPanelTitle: "KLfkDOdn3UgAJNIxRCQj-w==",
                            tabs: "_1h+SlHuqobYd225sKAa4OA==",
                            tab: "ZSHc2z2etoTnchFka8OlOA==",
                            activeTab: "duXs5snDwm--q64H4Cva9w==",
                            tabContent: "JLyLZG29oYkjvxzkqVgPEA==",
                            ct: "_1SU4dIOsgRLRXBkQLSv0CA==",
                            item: "r33TFuZuB5ENVvPEjIMxSg==",
                            editor: "gUA+PMlvYvp5o8sHXGBpFQ==",
                            error: "TKPQ3n2dkdxUIXa5wlqrFQ==",
                            textEdt: "pN8UDCvg9sAB6zDUbcV7UQ=="
                        };
                        const a = o
                    }
                    ,
                    3533: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".CnNYkg8aU1rlMYKbNe9eGw\\=\\= {\n  box-shadow: 5px 0 10px -5px #ddd;\n  overflow: hidden;\n  width: 560px;\n  position: absolute;\n  z-index: 1000;\n  bottom: 26px;\n  left: 271px;\n  background-color: #f7f7f7;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n}\n._5447qwvU2YPe2qmaej5RVg\\=\\= {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0 10px;\n  line-height: 50px;\n  height: 50px;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: text;\n  border-bottom: 1px solid #D8D8D8;\n}\n.ZZ9v3dUKeu0\\+QEnqS1WhpQ\\=\\= {\n  font-size: 14px;\n  width: 100%;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #D8D8D8;\n  position: relative;\n  background: #EBECEE;\n}\n.ZZ9v3dUKeu0\\+QEnqS1WhpQ\\=\\= .cEMXYGh1vIaqey2MWGX6Ug\\=\\= {\n  cursor: pointer;\n  color: #9B9B9B;\n  min-width: 80px;\n  max-width: 180px;\n  text-align: center;\n  border-right: 1px solid #D8D8D8;\n  padding: 0 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: calc(100% + 2px);\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: #EBECEE;\n  border-bottom: 1px solid #D8D8D8;\n  border-top: 1px solid #D8D8D8;\n}\n.ZZ9v3dUKeu0\\+QEnqS1WhpQ\\=\\= .Vsi91c-rrZ4fsVnx6DtPbQ\\=\\= {\n  cursor: inherit;\n  color: #333333;\n  font-weight: 700;\n  background-color: #F7F7F7;\n  border-bottom-width: 0 !important;\n}\n.Z-ILqJMaMhcLXkcYBzZ3Zg\\=\\= {\n  margin-bottom: 36px;\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n}\n.\\+d10BiAOXyTa2S85UcMorA\\=\\= {\n  padding: 0 6px 0;\n  border-radius: 6px;\n  border: 1px solid #eee;\n  margin-bottom: 12px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  align-items: center;\n  font-size: 12px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .G\\+xPvXoPdjLdRb5NJhUXBg\\=\\= {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .PI16tP4XXtw3DsH2FxSzHQ\\=\\= {\n  border: 1px solid #FF0000 !important;\n  padding: 0;\n  margin-bottom: 4px;\n  border-radius: 3px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .PI16tP4XXtw3DsH2FxSzHQ\\=\\=::after {\n  content: attr(data-err);\n  color: red;\n  position: absolute;\n  bottom: -17px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .QzApqNwyUzVVRWmeFfaziw\\=\\= input,\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .QzApqNwyUzVVRWmeFfaziw\\=\\= textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .QzApqNwyUzVVRWmeFfaziw\\=\\= input:focus,\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .QzApqNwyUzVVRWmeFfaziw\\=\\= textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .QzApqNwyUzVVRWmeFfaziw\\=\\= textarea {\n  min-height: 50px;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .h1BIh1qwiWhuTpzLa3NptA\\=\\= {\n  margin-left: 0 !important;\n}\n.Cz\\+yCWJa2y5alqMJIA90Qw\\=\\= .VzErXJor6DBCCWGaGAiN-Q\\=\\= {\n  line-height: 26px;\n  margin-left: 16px;\n  font-style: italic;\n  color: #AAA;\n  user-select: text;\n}\ndiv[data-id=file-panel-root] .ant-modal-mask, div[data-id=file-panel-root] .ant-modal-wrap {\n  z-index: 1001;\n}\n", ""]),
                        o.locals = {
                            sidebarPanelEdit: "CnNYkg8aU1rlMYKbNe9eGw==",
                            sidebarPanelTitle: "_5447qwvU2YPe2qmaej5RVg==",
                            tabs: "ZZ9v3dUKeu0+QEnqS1WhpQ==",
                            tab: "cEMXYGh1vIaqey2MWGX6Ug==",
                            activeTab: "Vsi91c-rrZ4fsVnx6DtPbQ==",
                            tabContent: "Z-ILqJMaMhcLXkcYBzZ3Zg==",
                            ct: "+d10BiAOXyTa2S85UcMorA==",
                            item: "Cz+yCWJa2y5alqMJIA90Qw==",
                            editor: "G+xPvXoPdjLdRb5NJhUXBg==",
                            error: "PI16tP4XXtw3DsH2FxSzHQ==",
                            textEdt: "QzApqNwyUzVVRWmeFfaziw==",
                            defaultButton: "h1BIh1qwiWhuTpzLa3NptA==",
                            serviceTitle: "VzErXJor6DBCCWGaGAiN-Q=="
                        };
                        const a = o
                    }
                    ,
                    4402: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".Q4HxlzvZKrrWTSrf0arUHg\\=\\= .ant-modal-body {\n  padding: 0;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= {\n  height: 520px;\n  display: flex;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .ly6lVeHybEg2PgL9WccgPw\\=\\= {\n  height: 28px;\n  flex-shrink: 0;\n  font-size: 14px;\n  line-height: 28px;\n  font-weight: bold;\n  margin: 4px 0;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .QlUnN5jhdeT3fSm3ppjAUg\\=\\= {\n  flex: 1;\n  overflow: auto;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .QlUnN5jhdeT3fSm3ppjAUg\\=\\=::-webkit-scrollbar {\n  display: none;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\=,\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  padding: 6px 12px;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= {\n  width: 280px;\n  background-color: #f8fafb;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\= {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n  border-radius: 4px;\n  color: #5c6066;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\=:hover {\n  cursor: pointer;\n  background: #3d5c8014;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\= > svg {\n  margin-right: 10px;\n  flex-shrink: 0;\n  fill: currentColor;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\= .xVjlquIrDqJRDU-yYw8\\+1Q\\=\\= {\n  flex: 1;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\= .TxWolPhLpFKYKR8S76\\+uGg\\=\\= {\n  margin-left: 10px;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .K6eZAxJo4q7Cbtbatt4Rgg\\=\\= .BE4EUEx8rPVAla\\+qvhDy6g\\=\\= .TxWolPhLpFKYKR8S76\\+uGg\\=\\= > svg:hover {\n  color: #FA6400;\n  cursor: pointer;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= {\n  flex: 1;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .QlUnN5jhdeT3fSm3ppjAUg\\=\\= {\n  display: block;\n  padding-top: 4px;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .aP\\+QH8aRUCp0\\+m8Ey999\\+w\\=\\= {\n  width: 234px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 6px 0 10px;\n  border-radius: 4px;\n  color: #5c6066;\n  margin-bottom: 16px;\n  vertical-align: top;\n  cursor: pointer;\n  position: relative;\n  background: #F7F7F7;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .aP\\+QH8aRUCp0\\+m8Ey999\\+w\\=\\= > svg {\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .aP\\+QH8aRUCp0\\+m8Ey999\\+w\\=\\=:nth-of-type(2n) {\n  margin-left: 28px;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .aP\\+QH8aRUCp0\\+m8Ey999\\+w\\=\\=:hover {\n  background-color: #F3F3F3;\n}\n.Q4HxlzvZKrrWTSrf0arUHg\\=\\= .Bn1XdwPWlWQxE2E\\+lL19Dg\\=\\= .eT0nIQGjNXtiktzBYxpNIw\\=\\= .aP\\+QH8aRUCp0\\+m8Ey999\\+w\\=\\= .xVjlquIrDqJRDU-yYw8\\+1Q\\=\\= {\n  flex: 1;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n}\n._6ZJDN66NP0\\+TZPPb0n8YxA\\=\\= {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: italic;\n  color: #AAA;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n}\n", ""]),
                        o.locals = {
                            domainModal: "Q4HxlzvZKrrWTSrf0arUHg==",
                            domainContainer: "Bn1XdwPWlWQxE2E+lL19Dg==",
                            header: "ly6lVeHybEg2PgL9WccgPw==",
                            panelContent: "QlUnN5jhdeT3fSm3ppjAUg==",
                            leftPanel: "K6eZAxJo4q7Cbtbatt4Rgg==",
                            rightPanel: "eT0nIQGjNXtiktzBYxpNIw==",
                            sqlHttp: "BE4EUEx8rPVAla+qvhDy6g==",
                            title: "xVjlquIrDqJRDU-yYw8+1Q==",
                            operate: "TxWolPhLpFKYKR8S76+uGg==",
                            sqlHttpItem: "aP+QH8aRUCp0+m8Ey999+w==",
                            empty: "_6ZJDN66NP0+TZPPb0n8YxA=="
                        };
                        const a = o
                    }
                    ,
                    4915: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".tfyraAaIWVWYWrZ1dlGpVQ\\=\\= {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tfyraAaIWVWYWrZ1dlGpVQ\\=\\= ._0fPAmXMjA4r2NzbQFsM0iw\\=\\= {\n  background: #7e7e7e -webkit-linear-gradient(left, #fa6400, #fa6400) no-repeat 0 0;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  -webkit-background-clip: text;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  position: relative;\n  background-size: 100% 100%;\n  animation: _6XJx-E5arXsJON\\+-LMCmYg\\=\\= 3s linear infinite;\n  color: #7e7e7e;\n}\n@keyframes _6XJx-E5arXsJON\\+-LMCmYg\\=\\= {\n  0% {\n    background-size: 0 100%;\n  }\n  100% {\n    background-size: 100% 100%;\n  }\n}\n", ""]),
                        o.locals = {
                            loadingContainer: "tfyraAaIWVWYWrZ1dlGpVQ==",
                            loadingText: "_0fPAmXMjA4r2NzbQFsM0iw==",
                            scan: "_6XJx-E5arXsJON+-LMCmYg=="
                        };
                        const a = o
                    }
                    ,
                    7725: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, "._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= {\n  display: flex;\n  font-size: 12px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .E1i2wNnoaHxVEWhX9DAlFA\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .E1i2wNnoaHxVEWhX9DAlFA\\=\\= {\n  width: 331px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= ._8yaL8YCmIACdaO3tul1xcA\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= ._8yaL8YCmIACdaO3tul1xcA\\=\\= {\n  text-align: center;\n  width: 60px;\n  border: none;\n  background-color: transparent;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .vOAkU-j\\+fAlL0aE1ZZ3fbw\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .vOAkU-j\\+fAlL0aE1ZZ3fbw\\=\\= {\n  text-align: center;\n  width: 48px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= {\n  text-align: center;\n  width: 121px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 10px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= input,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= input {\n  width: 60px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= .sUnAPdyroPhI1V9KsmcIRQ\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= .sUnAPdyroPhI1V9KsmcIRQ\\=\\= {\n  margin-right: 1px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= ._8o44Bq7hO2TRHlStP1r48g\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= ._8o44Bq7hO2TRHlStP1r48g\\=\\= {\n  margin-left: 1px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= .fR3s81e6hjyXz3H7YaONiA\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= .s4Kw4K75\\+wGMGWkhCboSGA\\=\\= .fR3s81e6hjyXz3H7YaONiA\\=\\= {\n  border: 1px solid red;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= ._40ffaMPQ47g3P2j\\+4wLWyQ\\=\\=,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= ._40ffaMPQ47g3P2j\\+4wLWyQ\\=\\= {\n  width: 40px;\n  text-align: center;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= p,\n.V4JgWg0J04l0ZzdMb3F8NA\\=\\= p {\n  margin-bottom: 0;\n}\n.gw5JWyK9\\+m2TBeVU\\+mwX0w\\=\\= {\n  display: flex;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  height: 20px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .cCDJ0fXXOd31ptwrOoUyaA\\=\\= {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n  box-sizing: border-box;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= input:focus {\n  outline: 1px solid #fa6400;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .bp5ntxo2rwRTPpZ6opXqlg\\=\\= {\n  height: 12px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .bp5ntxo2rwRTPpZ6opXqlg\\=\\=:hover {\n  color: #fa6400;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .B7MEukPkA7gVeoyw0SwaQg\\=\\= {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 12px;\n  height: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._7VPW-DRJBCqxUJEyyBJ\\+0Q\\=\\= .B7MEukPkA7gVeoyw0SwaQg\\=\\=:hover {\n  color: #fa6400;\n}\n.YCG6XOFwPqDcvdhqZ\\+mhww\\=\\= {\n  margin-left: 20px;\n}\n._0i0B8GEY6MYch02hsAPjpg\\=\\= {\n  margin-left: -20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.p1dhBif4xMkaBnEeByTkeg\\=\\= {\n  display: flex;\n  align-items: center;\n}\n._6OPL-CP1ED2H0oAshfbhFg\\=\\= {\n  margin: 0 10px 0 -80px;\n}\n.OMzJFZV6oL0sWv3HsdgH\\+w\\=\\= {\n  position: relative;\n  color: #999;\n  font-style: italic;\n  font-size: 12px;\n}\n", ""]),
                        o.locals = {
                            item: "_7VPW-DRJBCqxUJEyyBJ+0Q==",
                            header: "V4JgWg0J04l0ZzdMb3F8NA==",
                            fieldName: "E1i2wNnoaHxVEWhX9DAlFA==",
                            type: "_8yaL8YCmIACdaO3tul1xcA==",
                            defaultValue: "vOAkU-j+fAlL0aE1ZZ3fbw==",
                            range: "s4Kw4K75+wGMGWkhCboSGA==",
                            min: "sUnAPdyroPhI1V9KsmcIRQ==",
                            max: "_8o44Bq7hO2TRHlStP1r48g==",
                            error: "fR3s81e6hjyXz3H7YaONiA==",
                            operate: "_40ffaMPQ47g3P2j+4wLWyQ==",
                            content: "gw5JWyK9+m2TBeVU+mwX0w==",
                            label: "cCDJ0fXXOd31ptwrOoUyaA==",
                            iconRemove: "bp5ntxo2rwRTPpZ6opXqlg==",
                            iconAdder: "B7MEukPkA7gVeoyw0SwaQg==",
                            ct: "YCG6XOFwPqDcvdhqZ+mhww==",
                            list: "_0i0B8GEY6MYch02hsAPjpg==",
                            flex: "p1dhBif4xMkaBnEeByTkeg==",
                            mockData: "_6OPL-CP1ED2H0oAshfbhFg==",
                            empty: "OMzJFZV6oL0sWv3HsdgH+w=="
                        };
                        const a = o
                    }
                    ,
                    2814: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".yHXO8VWq7L2ACYmhTl7JVQ\\=\\=,\n.O7MrpEgFqIDmrjtR-1I1Yw\\=\\= {\n  display: flex;\n  font-size: 12px;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .lHwyDhEPNGquZTe2n9S2xg\\=\\=,\n.O7MrpEgFqIDmrjtR-1I1Yw\\=\\= .lHwyDhEPNGquZTe2n9S2xg\\=\\= {\n  text-align: center;\n  width: 78px;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= p,\n.O7MrpEgFqIDmrjtR-1I1Yw\\=\\= p {\n  margin-bottom: 0;\n}\n.XuJcOlHGw7EZWKyQsou6Vg\\=\\= {\n  display: flex;\n  margin-left: -30px;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n  position: relative;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\=::before {\n  position: absolute;\n  left: -14px;\n  width: 12px;\n  top: 10px;\n  border-bottom: 1px solid #aaa;\n  content: '';\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .mLng0U1oxUB7m2L3lkrGWQ\\=\\= {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .SAyILyp0oCEpd36afHHuLQ\\=\\= {\n  width: 30px;\n  text-align: left;\n  padding-right: 5px;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= input:focus {\n  outline: 1px solid #fa6400;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .aGa\\+fgExiFAgf9oUpFhtPw\\=\\= {\n  cursor: pointer;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .bJ-MTIknFwUwdJYnOugtnQ\\=\\= {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 3px;\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n.yHXO8VWq7L2ACYmhTl7JVQ\\=\\= .bJ-MTIknFwUwdJYnOugtnQ\\=\\=:hover {\n  color: #ffffff;\n  background-color: #fa6400;\n}\n.F2qcUagAgDOBxI9quRFH5w\\=\\=::before {\n  display: none;\n}\n.qa6mjvrbat\\+gH31Pie\\+cww\\=\\= {\n  position: relative;\n  width: 100%;\n  margin-left: 12px;\n  padding: 0 5px 0 15px;\n}\n.qa6mjvrbat\\+gH31Pie\\+cww\\=\\=::before {\n  position: absolute;\n  left: 0;\n  top: -2px;\n  bottom: -2px;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.qa6mjvrbat\\+gH31Pie\\+cww\\=\\=:first-child::before {\n  display: none;\n}\n.qa6mjvrbat\\+gH31Pie\\+cww\\=\\=:last-child::before {\n  height: 13px;\n}\n.c065dnp1dI4XPmhXXSGQTw\\=\\= {\n  margin-left: -12px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.AjFDNtf4VynfuvfR9dTQCg\\=\\= {\n  display: flex;\n  align-items: center;\n}\n.iTmyFMo\\+NJyFmvUUWGoFxg\\=\\= {\n  font-style: italic;\n  color: #777;\n  padding-left: 3px;\n}\n.EvexPuAIU-CbCv\\+tf\\+kBIQ\\=\\= {\n  border-top: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n", ""]),
                        o.locals = {
                            item: "yHXO8VWq7L2ACYmhTl7JVQ==",
                            header: "O7MrpEgFqIDmrjtR-1I1Yw==",
                            column: "lHwyDhEPNGquZTe2n9S2xg==",
                            content: "XuJcOlHGw7EZWKyQsou6Vg==",
                            label: "mLng0U1oxUB7m2L3lkrGWQ==",
                            type: "SAyILyp0oCEpd36afHHuLQ==",
                            iconRemove: "aGa+fgExiFAgf9oUpFhtPw==",
                            iconAdder: "bJ-MTIknFwUwdJYnOugtnQ==",
                            rootItem: "F2qcUagAgDOBxI9quRFH5w==",
                            ct: "qa6mjvrbat+gH31Pie+cww==",
                            list: "c065dnp1dI4XPmhXXSGQTw==",
                            flex: "AjFDNtf4VynfuvfR9dTQCg==",
                            typeName: "iTmyFMo+NJyFmvUUWGoFxg==",
                            debug: "EvexPuAIU-CbCv+tf+kBIQ=="
                        };
                        const a = o
                    }
                    ,
                    4671: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".ZLvbvy8sGzqYCtNUsoiRvA\\=\\=,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= {\n  display: flex;\n  font-size: 12px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .NRsMau3jm-KeJrQuqnt8ow\\=\\=,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= .NRsMau3jm-KeJrQuqnt8ow\\=\\= {\n  width: 270px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .ZatCiWMgID9vPR3bwLM7FA\\=\\=,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= .ZatCiWMgID9vPR3bwLM7FA\\=\\= {\n  text-align: center;\n  width: 45px;\n  border: none;\n  background-color: transparent;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .ODABZqg89ucivX6jkW3sfg\\=\\=,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= .ODABZqg89ucivX6jkW3sfg\\=\\= {\n  text-align: center;\n  width: 68px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .piwS\\+Xgl8-M\\+Thd6APxpPw\\=\\=,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= .piwS\\+Xgl8-M\\+Thd6APxpPw\\=\\= {\n  width: 46px;\n  margin-left: 8px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= p,\n.Z4rscrOk-XAYHkHsylWuaw\\=\\= p {\n  margin-bottom: 0;\n}\n._1fW25\\+TKh40nAyHbFVPpvA\\=\\= {\n  display: flex;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .tLjVBBD3DzX25IPbSeYHFQ\\=\\= {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .DpoJYDgKY\\+Dr1-IOXAfntA\\=\\= {\n  width: 30px;\n  text-align: left;\n  padding-right: 5px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n  box-sizing: border-box;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= input:focus {\n  outline: 1px solid #fa6400;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .ju0pa9eGzmdptQn2NUuGkw\\=\\= {\n  cursor: pointer;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .ju0pa9eGzmdptQn2NUuGkw\\=\\=:hover {\n  color: #fa6400;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .URoHqvrjZwNdiOj\\+Z4yzFQ\\=\\= {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 3px;\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n.ZLvbvy8sGzqYCtNUsoiRvA\\=\\= .URoHqvrjZwNdiOj\\+Z4yzFQ\\=\\=:hover {\n  color: #fa6400;\n}\n.MCWm\\+2ihSiBX1gPxVTua2Q\\=\\= {\n  width: 100%;\n  margin-left: 20px;\n}\n.IekhFBpBagMGtYsY8H-nlg\\=\\= {\n  margin-left: -20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.ShDDjy-D2ro0DJjB5Yo9gg\\=\\= {\n  display: flex;\n  align-items: center;\n}\n.HsRGM4XBQgNZ3XBIdYV1mA\\=\\= {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n.HsRGM4XBQgNZ3XBIdYV1mA\\=\\=:hover {\n  color: #fa6400;\n}\n", ""]),
                        o.locals = {
                            item: "ZLvbvy8sGzqYCtNUsoiRvA==",
                            header: "Z4rscrOk-XAYHkHsylWuaw==",
                            column1: "NRsMau3jm-KeJrQuqnt8ow==",
                            column2: "ZatCiWMgID9vPR3bwLM7FA==",
                            column3: "ODABZqg89ucivX6jkW3sfg==",
                            column4: "piwS+Xgl8-M+Thd6APxpPw==",
                            content: "_1fW25+TKh40nAyHbFVPpvA==",
                            label: "tLjVBBD3DzX25IPbSeYHFQ==",
                            type: "DpoJYDgKY+Dr1-IOXAfntA==",
                            iconRemove: "ju0pa9eGzmdptQn2NUuGkw==",
                            iconAdder: "URoHqvrjZwNdiOj+Z4yzFQ==",
                            ct: "MCWm+2ihSiBX1gPxVTua2Q==",
                            list: "IekhFBpBagMGtYsY8H-nlg==",
                            flex: "ShDDjy-D2ro0DJjB5Yo9gg==",
                            iconRootAdder: "HsRGM4XBQgNZ3XBIdYV1mA=="
                        };
                        const a = o
                    }
                    ,
                    5080: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= {\n  position: relative;\n  padding: 0 5px 5px 15px;\n  font-size: 12px;\n  margin-left: -10px;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\=:hover .OESI30MvWrOr3lQYPUj5FQ\\=\\= button {\n  display: block !important;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\= {\n  margin-left: 10px;\n  padding: 0 5px 0 15px;\n  position: relative;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\=:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\=:last-child:before {\n  left: 0;\n  top: 0;\n  height: 15px;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\= .OESI30MvWrOr3lQYPUj5FQ\\=\\= {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 28px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\= .OESI30MvWrOr3lQYPUj5FQ\\=\\=:before {\n  position: absolute;\n  left: -14px;\n  width: 12px;\n  top: 14px;\n  border-bottom: 1px solid #aaa;\n  content: '';\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\= .OESI30MvWrOr3lQYPUj5FQ\\=\\= ._8goPJoZFZmEwONhn13tngw\\=\\= {\n  font-style: italic;\n  color: #777;\n  padding-left: 3px;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .K210xnj2P-rIl-eW3PUkNQ\\=\\= .OESI30MvWrOr3lQYPUj5FQ\\=\\= button {\n  display: none;\n  margin: 0 0 0 5px;\n  padding: 2px;\n  font-size: 10px;\n  cursor: pointer;\n  line-height: 1;\n  border-radius: 3px;\n  background-color: #fff;\n  border: 1px solid #fa6400;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .uJAC69c7XBZO\\+KQN5RsuPA\\=\\= {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .uJAC69c7XBZO\\+KQN5RsuPA\\=\\=:before {\n  border-left-width: 0 !important;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .uJAC69c7XBZO\\+KQN5RsuPA\\=\\= > .OESI30MvWrOr3lQYPUj5FQ\\=\\= {\n  margin-left: -8px;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .uJAC69c7XBZO\\+KQN5RsuPA\\=\\= > .OESI30MvWrOr3lQYPUj5FQ\\=\\=:before {\n  border-bottom-width: 0 !important;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .L7S4NY6R9gncb\\+9CxtLljQ\\=\\= .QuhetZnW7E4kZ9jDEgk\\+aQ\\=\\= {\n  z-index: -1;\n  border-radius: 10px;\n  border-left: 2px solid #fa6400;\n  color: #fa6400;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 1px 5px;\n  position: absolute;\n  left: -24px;\n  right: 0;\n  height: 100%;\n  background: rgba(250, 100, 0, 0.1);\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .L7S4NY6R9gncb\\+9CxtLljQ\\=\\= .QuhetZnW7E4kZ9jDEgk\\+aQ\\=\\=:before {\n  position: absolute;\n  content: attr(data-text);\n  width: 50px;\n  height: 100%;\n  left: -58px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .GUh7FWdxiAPy0fbpDTWvBQ\\=\\= {\n  display: none;\n  width: 120px;\n  position: absolute;\n  background: #fff;\n  padding: 5px;\n  box-shadow: 0 1px 5px #aaa;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .GUh7FWdxiAPy0fbpDTWvBQ\\=\\= .Df-9UwSBi9i961j0Rq6Xhg\\=\\= {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.Gw1igRCjK0wivr-Y7\\+H9sg\\=\\= .GUh7FWdxiAPy0fbpDTWvBQ\\=\\= .Df-9UwSBi9i961j0Rq6Xhg\\=\\=:hover {\n  background: #eee;\n}\n.r03FB9aKWur1JW5ZVacziQ\\=\\= {\n  font-size: 14px;\n  font-style: italic;\n  color: #fa6400;\n}\n.VnReIMKotrOTzCGhJY45Lw\\=\\= {\n  position: relative;\n  color: #999;\n  font-style: italic;\n  font-size: 12px;\n}\n.enEmTnaPEvgwwTFA2jGiTg\\=\\= {\n  margin: 0 0 0 10px;\n  color: #8d7a34;\n  font-style: normal;\n}\n.UYeY5HX\\+-UTTMeYWyl-tkQ\\=\\= {\n  margin: 0 10px;\n  width: 60px;\n  border: 1px solid #CCC;\n  padding-left: 4px;\n  border-radius: 3px;\n}\n", ""]),
                        o.locals = {
                            returnParams: "Gw1igRCjK0wivr-Y7+H9sg==",
                            keyName: "OESI30MvWrOr3lQYPUj5FQ==",
                            item: "K210xnj2P-rIl-eW3PUkNQ==",
                            typeName: "_8goPJoZFZmEwONhn13tngw==",
                            rootItem: "uJAC69c7XBZO+KQN5RsuPA==",
                            markAsReturn: "L7S4NY6R9gncb+9CxtLljQ==",
                            marked: "QuhetZnW7E4kZ9jDEgk+aQ==",
                            popMenu: "GUh7FWdxiAPy0fbpDTWvBQ==",
                            menuItem: "Df-9UwSBi9i961j0Rq6Xhg==",
                            errorInfo: "r03FB9aKWur1JW5ZVacziQ==",
                            empty: "VnReIMKotrOTzCGhJY45Lw==",
                            markValueSelect: "enEmTnaPEvgwwTFA2jGiTg==",
                            markValueInput: "UYeY5HX+-UTTMeYWyl-tkQ=="
                        };
                        const a = o
                    }
                    ,
                    6946: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".w9wCCv2hL7bf4js2VVmOVA\\=\\= .ant-modal-body {\n  padding: 0;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= {\n  height: 520px;\n  display: flex;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .TDuvAKpw-eMN2qibewV4UA\\=\\= {\n  height: 28px;\n  flex-shrink: 0;\n  font-size: 14px;\n  line-height: 28px;\n  font-weight: bold;\n  margin: 4px 0;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .Royom1wxhHUCsSzhVG6Z3g\\=\\= {\n  flex: 1;\n  overflow: auto;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .Royom1wxhHUCsSzhVG6Z3g\\=\\=::-webkit-scrollbar {\n  display: none;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\=,\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  padding: 6px 12px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= {\n  width: 280px;\n  background-color: #f8fafb;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\= {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n  border-radius: 4px;\n  color: #5c6066;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\=:hover {\n  cursor: pointer;\n  background: #3d5c8014;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\= > svg {\n  margin-right: 10px;\n  flex-shrink: 0;\n  fill: currentColor;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\= .DEhfZneY0p81ukuTA4ko1A\\=\\= {\n  flex: 1;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\= .CARH7L5hU6fwKT\\+AN3\\+EgA\\=\\= {\n  margin-left: 10px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .fgbl1kV-ENSnwVur7jl4PQ\\=\\= .pBzOEYJ1kTqp2xkbzW9GEg\\=\\= .CARH7L5hU6fwKT\\+AN3\\+EgA\\=\\= > svg:hover {\n  color: #FA6400;\n  cursor: pointer;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= {\n  flex: 1;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= .Royom1wxhHUCsSzhVG6Z3g\\=\\= {\n  display: block;\n  padding-top: 4px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= .yxVW9Xqxzzivna8ojO1Wgg\\=\\= {\n  border: 1px solid #EEE;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 4px;\n  margin-bottom: 20px;\n  padding: 10px 8px 0;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= .yxVW9Xqxzzivna8ojO1Wgg\\=\\= .jG6ZU-6FrCn9QIRcRjTs8w\\=\\= {\n  font-style: italic;\n  color: #999999;\n  margin-bottom: 10px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= .yxVW9Xqxzzivna8ojO1Wgg\\=\\= .U7d31MWUiMSyvmDx8IfVHw\\=\\= {\n  display: block;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= .yxVW9Xqxzzivna8ojO1Wgg\\=\\= .U7d31MWUiMSyvmDx8IfVHw\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\=:nth-of-type(2n) {\n  margin-left: 10px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\= {\n  width: 234px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 6px 0 10px;\n  border-radius: 4px;\n  color: #5c6066;\n  margin-bottom: 16px;\n  vertical-align: top;\n  cursor: pointer;\n  position: relative;\n  background: #F7F7F7;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\= > svg {\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\=:nth-of-type(2n) {\n  margin-left: 28px;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\=:hover {\n  background-color: #F3F3F3;\n}\n.w9wCCv2hL7bf4js2VVmOVA\\=\\= ._3veoR-lPBhv95DxYn\\+-7GQ\\=\\= .rnYKTnGqtW-SUs3WjZOR6A\\=\\= ._2r05I3AiMuz1Ro-tqYU8cQ\\=\\= .DEhfZneY0p81ukuTA4ko1A\\=\\= {\n  flex: 1;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.z7Tt1oufA8bmpAuxHONdxw\\=\\= {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: italic;\n  color: #AAA;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n}\n", ""]),
                        o.locals = {
                            domainModal: "w9wCCv2hL7bf4js2VVmOVA==",
                            domainContainer: "_3veoR-lPBhv95DxYn+-7GQ==",
                            header: "TDuvAKpw-eMN2qibewV4UA==",
                            panelContent: "Royom1wxhHUCsSzhVG6Z3g==",
                            leftPanel: "fgbl1kV-ENSnwVur7jl4PQ==",
                            rightPanel: "rnYKTnGqtW-SUs3WjZOR6A==",
                            sqlHttp: "pBzOEYJ1kTqp2xkbzW9GEg==",
                            title: "DEhfZneY0p81ukuTA4ko1A==",
                            operate: "CARH7L5hU6fwKT+AN3+EgA==",
                            sqlHttpGroup: "yxVW9Xqxzzivna8ojO1Wgg==",
                            groupTitle: "jG6ZU-6FrCn9QIRcRjTs8w==",
                            groupContent: "U7d31MWUiMSyvmDx8IfVHw==",
                            sqlHttpItem: "_2r05I3AiMuz1Ro-tqYU8cQ==",
                            empty: "z7Tt1oufA8bmpAuxHONdxw=="
                        };
                        const a = o
                    }
                    ,
                    2287: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".petZhUoPxq70Y-rWPPokGQ\\=\\= {\n  height: 30px;\n  background: #FFF;\n  border-bottom: 1px solid #DDD;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px 0 10px;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .hpd5V46jjIMgvdlU8-CFWA\\=\\= {\n  border-radius: 3px;\n  height: 22px;\n  flex: 1;\n  padding: 0 5px 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .hpd5V46jjIMgvdlU8-CFWA\\=\\= input {\n  flex: 1;\n  height: 100%;\n  padding: 5px;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .hpd5V46jjIMgvdlU8-CFWA\\=\\= svg {\n  width: 13px;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .hpd5V46jjIMgvdlU8-CFWA\\=\\= svg path {\n  stroke: #AAA;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .KVZsCY6aTy\\+7wpw29-42Vg\\=\\= {\n  cursor: pointer;\n  color: #555;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .KVZsCY6aTy\\+7wpw29-42Vg\\=\\=:hover {\n  color: #fa6400;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .KVZsCY6aTy\\+7wpw29-42Vg\\=\\=:last-child {\n  margin-right: -4px;\n}\n.petZhUoPxq70Y-rWPPokGQ\\=\\= .foejXFkJ8-35hIHr0QHYow\\=\\= {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.Hd6ujEvRocu9izas1oISyw\\=\\= {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.Hd6ujEvRocu9izas1oISyw\\=\\=:hover {\n  color: #ffffff;\n  background-color: #fa6400;\n}\n.QfvIyUqtVVWcrG855rJnZQ\\=\\= {\n  cursor: pointer;\n}\n.HmqmCGDariBcJ-SQeJD87Q\\=\\= {\n  background-color: #fff;\n  padding: 4px 0;\n  box-shadow: 0 0 10px 3px #ddd;\n  width: 80px;\n}\n.HmqmCGDariBcJ-SQeJD87Q\\=\\= ._8TOP3dhH6lRg51agax\\+bfg\\=\\= {\n  padding: 5px 12px;\n  cursor: pointer;\n}\n.HmqmCGDariBcJ-SQeJD87Q\\=\\= ._8TOP3dhH6lRg51agax\\+bfg\\=\\=:hover {\n  background-color: #f5f7f9;\n}\n", ""]),
                        o.locals = {
                            toolbar: "petZhUoPxq70Y-rWPPokGQ==",
                            search: "hpd5V46jjIMgvdlU8-CFWA==",
                            icon: "KVZsCY6aTy+7wpw29-42Vg==",
                            disable: "foejXFkJ8-35hIHr0QHYow==",
                            center: "Hd6ujEvRocu9izas1oISyw==",
                            clickAble: "QfvIyUqtVVWcrG855rJnZQ==",
                            ct: "HmqmCGDariBcJ-SQeJD87Q==",
                            item: "_8TOP3dhH6lRg51agax+bfg=="
                        };
                        const a = o
                    }
                    ,
                    7688: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(3645)
                          , o = n.n(r)()((function(e) {
                            return e[1]
                        }
                        ));
                        o.push([e.id, ".xLItER7U8nL0YmLpWmm0yA\\=\\= {\n  position: relative;\n  width: 320px;\n  background-color: #f7f7f7;\n  z-index: 9;\n  display: none;\n  height: 100%;\n}\n.QjkK1-3-dAzWE1UFz9oxiw\\=\\= {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.lTSDc83tBySG-a4pmgduEQ\\=\\= {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 5px 0 10px -5px #ddd;\n  overflow: hidden;\n  width: 560px;\n  position: absolute;\n  z-index: 1000;\n  bottom: 26px;\n  left: 271px;\n  background-color: #f7f7f7;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n}\n.KMEjZ2qSD1fKfR3nTqtsgA\\=\\= {\n  display: block;\n}\n.UJGMqVslwyT1Two3fTXp8Q\\=\\= {\n  display: flex;\n}\n.CHblnTidkAaXZXXgEPzXFA\\=\\= {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0 10px;\n  line-height: 50px;\n  height: 50px;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: text;\n}\n.UaUAwl7xaOeW\\+xVujt804g\\=\\= {\n  background-color: #f7f7f7;\n  justify-content: space-between;\n}\n.UaUAwl7xaOeW\\+xVujt804g\\=\\= .W3NYaSzMBRh5d2EQpw\\+\\+PA\\=\\= {\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n.UaUAwl7xaOeW\\+xVujt804g\\=\\= .W3NYaSzMBRh5d2EQpw\\+\\+PA\\=\\=:hover {\n  color: #fa6400;\n}\n.mrwtEdV6BMcpKTOWWFVcDg\\=\\= {\n  font-size: 14px;\n  font-weight: 666;\n  height: 49px;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n}\n._5MWIFC3V0rJ3Sjg1Rrn5Mw\\=\\= {\n  font-size: 14px;\n  font-weight: 666;\n  color: #333;\n  height: 100%;\n  line-height: 200%;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px solid #ddd;\n  border-bottom: 1px solid #f7f7f7;\n  padding: 0 10px;\n  margin-bottom: -2px;\n}\n._787dKBLrmwwatc41nT50lw\\=\\= {\n  padding: 0 10px 0 6px;\n  height: 26px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #fafafa;\n  align-items: center;\n}\n._0KmIgNYn\\+9GUMkpnc1Oy7A\\=\\= {\n  padding: 0 12px 12px ;\n  overflow-y: auto;\n  height: calc(100% - 32px);\n  font-size: 12px;\n}\n.z6nu6sK9oj8taa3m\\+I8oGg\\=\\= {\n  height: 32px;\n  line-height: 32px;\n  background-color: #f7f7f7;\n  margin: 0 -12px;\n  padding: 0 12px;\n  margin-bottom: 12px;\n}\n._0KmIgNYn\\+9GUMkpnc1Oy7A\\=\\= .PrOXD\\+snltrc4y1DG3VR\\+A\\=\\= {\n  display: flex;\n  width: 100%;\n  align-items: baseline;\n}\n._0KmIgNYn\\+9GUMkpnc1Oy7A\\=\\= ._8poHjwAbE1nvVoz8r\\+NknA\\=\\= {\n  margin-left: 12px;\n}\n.yLGMK9LGh9FIaLVQlz4PYA\\=\\= {\n  display: flex;\n  width: 100%;\n  overflow-y: auto;\n  flex: 1;\n  flex-direction: column;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= {\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  font-size: 12px;\n  padding: 0 3px;\n  position: relative;\n  cursor: pointer;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= > div:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\=.ImQlKwD2amrRFnp0UWN67A\\=\\= {\n  background-color: rgba(247, 247, 247, 0.4);\n}\n.pOykEzrta6mSZKI6SPj-0g\\=\\= {\n  display: inline-block;\n  color: #aaa;\n  padding-right: 3px;\n  text-align: right;\n  flex: 0 0 55px;\n}\n.d6CsdRq2kZ7-ZFzrxKjbrA\\=\\= {\n  flex: 1;\n  word-break: break-all;\n}\n.Z8NqJhd-i6OQh5RHCB0WVQ\\=\\= {\n  display: flex;\n  margin-bottom: 4px;\n  font-size: 12px;\n  padding: 0 6px;\n}\n.Z8NqJhd-i6OQh5RHCB0WVQ\\=\\=:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.qrq0WqTslpLZqRVc-AcuCA\\=\\= {\n  background-color: #fff;\n  padding: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.Tf9IJkWqx8-kBL9Zruk9NA\\=\\= {\n  user-select: text;\n}\n.Tf9IJkWqx8-kBL9Zruk9NA\\=\\=:hover {\n  color: #fa6400;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\=:hover {\n  background-color: #f1f1f1;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= .W3NYaSzMBRh5d2EQpw\\+\\+PA\\=\\= {\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= .W3NYaSzMBRh5d2EQpw\\+\\+PA\\=\\= svg {\n  max-width: 12px;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= .Z19Q\\+fIAc30cqSAx6A-LyQ\\=\\= {\n  transform: rotate(90deg);\n  transition: 0.1s;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= .UIbtrxTQGcEREdB\\+vgIKng\\=\\= {\n  padding: 0 8px 0 2px;\n  color: #fa6400;\n  min-width: 35px;\n  cursor: pointer;\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= .iRCVJ5biQIjtl9WD5ME2qA\\=\\= {\n  color: rgba(255, 0, 0, 0.8);\n}\n.jAhTzVbJXN16VlqsnghiVQ\\=\\= ._9wsX2xhCYdREQRsqk2jJxg\\=\\= {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.NbdB3g20U-lKhnmSw\\+lsPQ\\=\\= {\n  padding: 12px 0 12px 4px;\n  display: flex;\n  min-width: 130px;\n  flex: 1;\n}\n.suoLI\\+pFWPIN38CnF12GvA\\=\\= {\n  display: none;\n  position: absolute;\n  right: 20px;\n  top: -14px;\n  transform: scale(0.8);\n}\n.YA8d58dcdIuKOuf2SR1UlA\\=\\= {\n  display: flex;\n  flex: 0 0 58px;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 4px;\n  margin-right: 8px;\n}\n.YA8d58dcdIuKOuf2SR1UlA\\=\\= .sYiQpHTYbzDi7YRU1zkklw\\=\\= {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.85);\n  position: relative;\n}\n.YA8d58dcdIuKOuf2SR1UlA\\=\\= .sYiQpHTYbzDi7YRU1zkklw\\=\\=:hover {\n  color: #fa6400;\n}\n.YA8d58dcdIuKOuf2SR1UlA\\=\\= .sYiQpHTYbzDi7YRU1zkklw\\=\\=._7vViFToPLDwogUkO9EusmQ\\=\\=:after {\n  content: '';\n  background-color: #FF0000;\n  border: 1px solid #FFF;\n  width: 7px;\n  height: 7px;\n  border-radius: 6px;\n  position: absolute;\n  top: -7px;\n  right: -8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.xZurIbO9vwSGvuTD84D0ag\\=\\= {\n  position: relative;\n  font-size: 12px;\n}\n.lSvKJLB\\+OssjgB5H-tjPzw\\=\\= {\n  position: absolute;\n  top: 36px;\n  right: 6px;\n  z-index: 1;\n  cursor: pointer;\n}\n.ruBR7o-demA9YXzRlRw7Jg\\=\\= {\n  position: fixed;\n  top: 48px;\n  right: 50px;\n  z-index: 10;\n  cursor: pointer;\n}\n.ALi3KsulEYUCgP4ixfCWGQ\\=\\= {\n  position: fixed;\n  z-index: 9;\n  padding: 40px 42px 26px;\n  background-color: rgba(0, 0, 0, 0.45);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.ALi3KsulEYUCgP4ixfCWGQ\\=\\= .monaco-editor {\n  padding-top: 16px;\n}\n.lq-a4JlG7hU8RkAXpxL4LQ\\=\\= {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 346px;\n  z-index: 1000;\n  height: 100%;\n}\n.ZF1aEtoxmTdjiwVWzToirw\\=\\= {\n  cursor: pointer;\n}\n.pHO2rOoEcyXkxjif2SPltA\\=\\= {\n  padding: 0 6px 0;\n  border-radius: 6px;\n  border: 1px solid #eee;\n  margin-bottom: 12px;\n}\n.QzdM0yeoNFtL-17bKWqK-A\\=\\= {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.vwGg8rMB2WpTDe0LmqtR3g\\=\\= {\n  border-bottom-color: transparent;\n  box-shadow: 0 0 6px 2px #ddd;\n  pointer-events: none;\n}\n.vwGg8rMB2WpTDe0LmqtR3g\\=\\=:hover {\n  background-color: transparent;\n}\n.JXzqw7mYdlrx-Qr1cfotBA\\=\\= {\n  border-top: 1px dashed #ccc;\n  margin: 8px 0;\n}\n._7-fMDqz7kgG0u21loTnBlg\\=\\= {\n  font-style: italic;\n  color: #999999;\n  margin-top: 12px;\n}\n", ""]),
                        o.locals = {
                            "sidebar-panel": "xLItER7U8nL0YmLpWmm0yA==",
                            "sidebar-panel-view": "QjkK1-3-dAzWE1UFz9oxiw==",
                            "sidebar-panel-edit": "lTSDc83tBySG-a4pmgduEQ==",
                            "sidebar-panel-edit-open": "KMEjZ2qSD1fKfR3nTqtsgA==",
                            "sidebar-panel-open": "UJGMqVslwyT1Two3fTXp8Q==",
                            "sidebar-panel-title": "CHblnTidkAaXZXXgEPzXFA==",
                            "sidebar-panel-header": "UaUAwl7xaOeW+xVujt804g==",
                            icon: "W3NYaSzMBRh5d2EQpw++PA==",
                            "sidebar-panel-header__title": "mrwtEdV6BMcpKTOWWFVcDg==",
                            "sidebar-panel-header__sub-title": "_5MWIFC3V0rJ3Sjg1Rrn5Mw==",
                            "sidebar-panel-header__toolbar": "_787dKBLrmwwatc41nT50lw==",
                            "sidebar-panel-content": "_0KmIgNYn+9GUMkpnc1Oy7A==",
                            "sidebar-panel-content-title": "z6nu6sK9oj8taa3m+I8oGg==",
                            "param-item": "PrOXD+snltrc4y1DG3VR+A==",
                            "param-item-actions": "_8poHjwAbE1nvVoz8r+NknA==",
                            "sidebar-panel-list": "yLGMK9LGh9FIaLVQlz4PYA==",
                            "sidebar-panel-list-item": "jAhTzVbJXN16VlqsnghiVQ==",
                            active: "ImQlKwD2amrRFnp0UWN67A==",
                            "sidebar-panel-list-item__name": "pOykEzrta6mSZKI6SPj-0g==",
                            "sidebar-panel-list-item__content": "d6CsdRq2kZ7-ZFzrxKjbrA==",
                            "sidebar-panel-list-item__param": "Z8NqJhd-i6OQh5RHCB0WVQ==",
                            "sidebar-panel-list-item__expand": "qrq0WqTslpLZqRVc-AcuCA==",
                            "sidebar-panel-list-item__copy": "Tf9IJkWqx8-kBL9Zruk9NA==",
                            iconExpand: "Z19Q+fIAc30cqSAx6A-LyQ==",
                            tag: "UIbtrxTQGcEREdB+vgIKng==",
                            "tag__no-address": "iRCVJ5biQIjtl9WD5ME2qA==",
                            name: "_9wsX2xhCYdREQRsqk2jJxg==",
                            "sidebar-panel-list-item__left": "NbdB3g20U-lKhnmSw+lsPQ==",
                            "sidebar-panel-list-item__left--tag": "suoLI+pFWPIN38CnF12GvA==",
                            "sidebar-panel-list-item__right": "YA8d58dcdIuKOuf2SR1UlA==",
                            action: "sYiQpHTYbzDi7YRU1zkklw==",
                            upgrade: "_7vViFToPLDwogUkO9EusmQ==",
                            "sidebar-panel-code": "xZurIbO9vwSGvuTD84D0ag==",
                            "sidebar-panel-code-icon": "lSvKJLB+OssjgB5H-tjPzw==",
                            "sidebar-panel-code-icon-full": "ruBR7o-demA9YXzRlRw7Jg==",
                            "sidebar-panel-code-full": "ALi3KsulEYUCgP4ixfCWGQ==",
                            "sidebar-mask": "lq-a4JlG7hU8RkAXpxL4LQ==",
                            "doc-link": "ZF1aEtoxmTdjiwVWzToirw==",
                            ct: "pHO2rOoEcyXkxjif2SPltA==",
                            disabled: "QzdM0yeoNFtL-17bKWqK-A==",
                            chose: "vwGg8rMB2WpTDe0LmqtR3g==",
                            dashedDivider: "JXzqw7mYdlrx-Qr1cfotBA==",
                            dividerText: "_7-fMDqz7kgG0u21loTnBlg=="
                        };
                        const a = o
                    }
                    ,
                    3645: e=>{
                        "use strict";
                        e.exports = function(e) {
                            var t = [];
                            return t.toString = function() {
                                return this.map((function(t) {
                                    var n = e(t);
                                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                                }
                                )).join("")
                            }
                            ,
                            t.i = function(e, n, r) {
                                "string" == typeof e && (e = [[null, e, ""]]);
                                var o = {};
                                if (r)
                                    for (var a = 0; a < this.length; a++) {
                                        var i = this[a][0];
                                        null != i && (o[i] = !0)
                                    }
                                for (var l = 0; l < e.length; l++) {
                                    var c = [].concat(e[l]);
                                    r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                                    t.push(c))
                                }
                            }
                            ,
                            t
                        }
                    }
                    ,
                    3976: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(1771);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    8502: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(6866);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    1673: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(4647);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    7762: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(6846);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    2808: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(1053);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    393: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(696);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    2643: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(2055);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    1436: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(5235);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    790: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(2952);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    309: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(3533);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    6984: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(4402);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    3127: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(4915);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    2066: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(7725);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    5739: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(2814);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    8211: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(4671);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    7992: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(5080);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    4907: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(6946);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    8705: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(2287);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    8786: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(3379)
                          , o = n.n(r)
                          , a = n(7688);
                        o()(a.Z, {
                            insert: "head",
                            singleton: !1
                        });
                        const i = a.Z.locals || {}
                    }
                    ,
                    3379: (e,t,n)=>{
                        "use strict";
                        var r, o = function() {
                            var e = {};
                            return function(t) {
                                if (void 0 === e[t]) {
                                    var n = document.querySelector(t);
                                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                        try {
                                            n = n.contentDocument.head
                                        } catch (e) {
                                            n = null
                                        }
                                    e[t] = n
                                }
                                return e[t]
                            }
                        }(), a = [];
                        function i(e) {
                            for (var t = -1, n = 0; n < a.length; n++)
                                if (a[n].identifier === e) {
                                    t = n;
                                    break
                                }
                            return t
                        }
                        function l(e, t) {
                            for (var n = {}, r = [], o = 0; o < e.length; o++) {
                                var l = e[o]
                                  , c = t.base ? l[0] + t.base : l[0]
                                  , s = n[c] || 0
                                  , u = "".concat(c, " ").concat(s);
                                n[c] = s + 1;
                                var d = i(u)
                                  , p = {
                                    css: l[1],
                                    media: l[2],
                                    sourceMap: l[3]
                                };
                                -1 !== d ? (a[d].references++,
                                a[d].updater(p)) : a.push({
                                    identifier: u,
                                    updater: h(p, t),
                                    references: 1
                                }),
                                r.push(u)
                            }
                            return r
                        }
                        function c(e) {
                            var t = document.createElement("style")
                              , r = e.attributes || {};
                            if (void 0 === r.nonce) {
                                var a = n.nc;
                                a && (r.nonce = a)
                            }
                            if (Object.keys(r).forEach((function(e) {
                                t.setAttribute(e, r[e])
                            }
                            )),
                            "function" == typeof e.insert)
                                e.insert(t);
                            else {
                                var i = o(e.insert || "head");
                                if (!i)
                                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                                i.appendChild(t)
                            }
                            return t
                        }
                        var s, u = (s = [],
                        function(e, t) {
                            return s[e] = t,
                            s.filter(Boolean).join("\n")
                        }
                        );
                        function d(e, t, n, r) {
                            var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                            if (e.styleSheet)
                                e.styleSheet.cssText = u(t, o);
                            else {
                                var a = document.createTextNode(o)
                                  , i = e.childNodes;
                                i[t] && e.removeChild(i[t]),
                                i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
                            }
                        }
                        function p(e, t, n) {
                            var r = n.css
                              , o = n.media
                              , a = n.sourceMap;
                            if (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                            e.styleSheet)
                                e.styleSheet.cssText = r;
                            else {
                                for (; e.firstChild; )
                                    e.removeChild(e.firstChild);
                                e.appendChild(document.createTextNode(r))
                            }
                        }
                        var f = null
                          , m = 0;
                        function h(e, t) {
                            var n, r, o;
                            if (t.singleton) {
                                var a = m++;
                                n = f || (f = c(t)),
                                r = d.bind(null, n, a, !1),
                                o = d.bind(null, n, a, !0)
                            } else
                                n = c(t),
                                r = p.bind(null, n, t),
                                o = function() {
                                    !function(e) {
                                        if (null === e.parentNode)
                                            return !1;
                                        e.parentNode.removeChild(e)
                                    }(n)
                                }
                                ;
                            return r(e),
                            function(t) {
                                if (t) {
                                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                                        return;
                                    r(e = t)
                                } else
                                    o()
                            }
                        }
                        e.exports = function(e, t) {
                            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
                            r));
                            var n = l(e = e || [], t);
                            return function(e) {
                                if (e = e || [],
                                "[object Array]" === Object.prototype.toString.call(e)) {
                                    for (var r = 0; r < n.length; r++) {
                                        var o = i(n[r]);
                                        a[o].references--
                                    }
                                    for (var c = l(e, t), s = 0; s < n.length; s++) {
                                        var u = i(n[s]);
                                        0 === a[u].references && (a[u].updater(),
                                        a.splice(u, 1))
                                    }
                                    n = c
                                }
                            }
                        }
                    }
                    ,
                    2721: e=>{
                        "use strict";
                        e.exports = __WEBPACK_EXTERNAL_MODULE__2721__
                    }
                    ,
                    8156: e=>{
                        "use strict";
                        e.exports = __WEBPACK_EXTERNAL_MODULE__8156__
                    }
                    ,
                    7111: e=>{
                        "use strict";
                        e.exports = __WEBPACK_EXTERNAL_MODULE__7111__
                    }
                    ,
                    8624: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>c
                        });
                        var r = n(8113)
                          , o = n(4198)
                          , a = n(6672)
                          , i = n(1333);
                        const l = {
                            http: o.Z,
                            xhr: a.Z
                        };
                        r.Z.forEach(l, ((e,t)=>{
                            if (e) {
                                try {
                                    Object.defineProperty(e, "name", {
                                        value: t
                                    })
                                } catch (e) {}
                                Object.defineProperty(e, "adapterName", {
                                    value: t
                                })
                            }
                        }
                        ));
                        const c = {
                            getAdapter: e=>{
                                e = r.Z.isArray(e) ? e : [e];
                                const {length: t} = e;
                                let n, o;
                                for (let a = 0; a < t && (n = e[a],
                                !(o = r.Z.isString(n) ? l[n.toLowerCase()] : n)); a++)
                                    ;
                                if (!o) {
                                    if (!1 === o)
                                        throw new i.Z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");
                                    throw new Error(r.Z.hasOwnProp(l, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
                                }
                                if (!r.Z.isFunction(o))
                                    throw new TypeError("adapter is not a function");
                                return o
                            }
                            ,
                            adapters: l
                        }
                    }
                    ,
                    6672: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>y
                        });
                        var r = n(8113)
                          , o = n(1992)
                          , a = n(8308)
                          , i = n(3343)
                          , l = n(5315)
                          , c = n(8738)
                          , s = n(2913)
                          , u = n(1333)
                          , d = n(9619)
                          , p = n(2312)
                          , f = n(9698)
                          , m = n(1150)
                          , h = n(2141);
                        function g(e, t) {
                            let n = 0;
                            const r = (0,
                            h.Z)(50, 250);
                            return o=>{
                                const a = o.loaded
                                  , i = o.lengthComputable ? o.total : void 0
                                  , l = a - n
                                  , c = r(l);
                                n = a;
                                const s = {
                                    loaded: a,
                                    total: i,
                                    progress: i ? a / i : void 0,
                                    bytes: l,
                                    rate: c || void 0,
                                    estimated: c && i && a <= i ? (i - a) / c : void 0,
                                    event: o
                                };
                                s[t ? "download" : "upload"] = !0,
                                e(s)
                            }
                        }
                        const y = "undefined" != typeof XMLHttpRequest && function(e) {
                            return new Promise((function(t, n) {
                                let h = e.data;
                                const y = m.Z.from(e.headers).normalize()
                                  , v = e.responseType;
                                let b;
                                function w() {
                                    e.cancelToken && e.cancelToken.unsubscribe(b),
                                    e.signal && e.signal.removeEventListener("abort", b)
                                }
                                r.Z.isFormData(h) && (f.Z.isStandardBrowserEnv || f.Z.isStandardBrowserWebWorkerEnv) && y.setContentType(!1);
                                let x = new XMLHttpRequest;
                                if (e.auth) {
                                    const t = e.auth.username || ""
                                      , n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                    y.set("Authorization", "Basic " + btoa(t + ":" + n))
                                }
                                const E = (0,
                                l.Z)(e.baseURL, e.url);
                                function _() {
                                    if (!x)
                                        return;
                                    const r = m.Z.from("getAllResponseHeaders"in x && x.getAllResponseHeaders())
                                      , a = {
                                        data: v && "text" !== v && "json" !== v ? x.response : x.responseText,
                                        status: x.status,
                                        statusText: x.statusText,
                                        headers: r,
                                        config: e,
                                        request: x
                                    };
                                    (0,
                                    o.Z)((function(e) {
                                        t(e),
                                        w()
                                    }
                                    ), (function(e) {
                                        n(e),
                                        w()
                                    }
                                    ), a),
                                    x = null
                                }
                                if (x.open(e.method.toUpperCase(), (0,
                                i.Z)(E, e.params, e.paramsSerializer), !0),
                                x.timeout = e.timeout,
                                "onloadend"in x ? x.onloadend = _ : x.onreadystatechange = function() {
                                    x && 4 === x.readyState && (0 !== x.status || x.responseURL && 0 === x.responseURL.indexOf("file:")) && setTimeout(_)
                                }
                                ,
                                x.onabort = function() {
                                    x && (n(new u.Z("Request aborted",u.Z.ECONNABORTED,e,x)),
                                    x = null)
                                }
                                ,
                                x.onerror = function() {
                                    n(new u.Z("Network Error",u.Z.ERR_NETWORK,e,x)),
                                    x = null
                                }
                                ,
                                x.ontimeout = function() {
                                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                                    const r = e.transitional || s.Z;
                                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                                    n(new u.Z(t,r.clarifyTimeoutError ? u.Z.ETIMEDOUT : u.Z.ECONNABORTED,e,x)),
                                    x = null
                                }
                                ,
                                f.Z.isStandardBrowserEnv) {
                                    const t = (e.withCredentials || (0,
                                    c.Z)(E)) && e.xsrfCookieName && a.Z.read(e.xsrfCookieName);
                                    t && y.set(e.xsrfHeaderName, t)
                                }
                                void 0 === h && y.setContentType(null),
                                "setRequestHeader"in x && r.Z.forEach(y.toJSON(), (function(e, t) {
                                    x.setRequestHeader(t, e)
                                }
                                )),
                                r.Z.isUndefined(e.withCredentials) || (x.withCredentials = !!e.withCredentials),
                                v && "json" !== v && (x.responseType = e.responseType),
                                "function" == typeof e.onDownloadProgress && x.addEventListener("progress", g(e.onDownloadProgress, !0)),
                                "function" == typeof e.onUploadProgress && x.upload && x.upload.addEventListener("progress", g(e.onUploadProgress)),
                                (e.cancelToken || e.signal) && (b = t=>{
                                    x && (n(!t || t.type ? new d.Z(null,e,x) : t),
                                    x.abort(),
                                    x = null)
                                }
                                ,
                                e.cancelToken && e.cancelToken.subscribe(b),
                                e.signal && (e.signal.aborted ? b() : e.signal.addEventListener("abort", b)));
                                const S = (0,
                                p.Z)(E);
                                S && -1 === f.Z.protocols.indexOf(S) ? n(new u.Z("Unsupported protocol " + S + ":",u.Z.ERR_BAD_REQUEST,e)) : x.send(h || null)
                            }
                            ))
                        }
                    }
                    ,
                    5274: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>w
                        });
                        var r = n(8113)
                          , o = n(6524)
                          , a = n(5411)
                          , i = n(8636)
                          , l = n(6239)
                          , c = n(4510)
                          , s = n(9619)
                          , u = n(2629)
                          , d = n(9126)
                          , p = n(2112)
                          , f = n(5238)
                          , m = n(1333)
                          , h = n(7990)
                          , g = n(5511)
                          , y = n(1150)
                          , v = n(2097);
                        const b = function e(t) {
                            const n = new a.Z(t)
                              , l = (0,
                            o.Z)(a.Z.prototype.request, n);
                            return r.Z.extend(l, a.Z.prototype, n, {
                                allOwnKeys: !0
                            }),
                            r.Z.extend(l, n, null, {
                                allOwnKeys: !0
                            }),
                            l.create = function(n) {
                                return e((0,
                                i.Z)(t, n))
                            }
                            ,
                            l
                        }(l.Z);
                        b.Axios = a.Z,
                        b.CanceledError = s.Z,
                        b.CancelToken = u.Z,
                        b.isCancel = d.Z,
                        b.VERSION = p.q,
                        b.toFormData = f.Z,
                        b.AxiosError = m.Z,
                        b.Cancel = b.CanceledError,
                        b.all = function(e) {
                            return Promise.all(e)
                        }
                        ,
                        b.spread = h.Z,
                        b.isAxiosError = g.Z,
                        b.mergeConfig = i.Z,
                        b.AxiosHeaders = y.Z,
                        b.formToJSON = e=>(0,
                        c.Z)(r.Z.isHTMLForm(e) ? new FormData(e) : e),
                        b.HttpStatusCode = v.Z,
                        b.default = b;
                        const w = b
                    }
                    ,
                    2629: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(9619);
                        class o {
                            constructor(e) {
                                if ("function" != typeof e)
                                    throw new TypeError("executor must be a function.");
                                let t;
                                this.promise = new Promise((function(e) {
                                    t = e
                                }
                                ));
                                const n = this;
                                this.promise.then((e=>{
                                    if (!n._listeners)
                                        return;
                                    let t = n._listeners.length;
                                    for (; t-- > 0; )
                                        n._listeners[t](e);
                                    n._listeners = null
                                }
                                )),
                                this.promise.then = e=>{
                                    let t;
                                    const r = new Promise((e=>{
                                        n.subscribe(e),
                                        t = e
                                    }
                                    )).then(e);
                                    return r.cancel = function() {
                                        n.unsubscribe(t)
                                    }
                                    ,
                                    r
                                }
                                ,
                                e((function(e, o, a) {
                                    n.reason || (n.reason = new r.Z(e,o,a),
                                    t(n.reason))
                                }
                                ))
                            }
                            throwIfRequested() {
                                if (this.reason)
                                    throw this.reason
                            }
                            subscribe(e) {
                                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                            }
                            unsubscribe(e) {
                                if (!this._listeners)
                                    return;
                                const t = this._listeners.indexOf(e);
                                -1 !== t && this._listeners.splice(t, 1)
                            }
                            static source() {
                                let e;
                                return {
                                    token: new o((function(t) {
                                        e = t
                                    }
                                    )),
                                    cancel: e
                                }
                            }
                        }
                        const a = o
                    }
                    ,
                    9619: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(1333);
                        function o(e, t, n) {
                            r.Z.call(this, null == e ? "canceled" : e, r.Z.ERR_CANCELED, t, n),
                            this.name = "CanceledError"
                        }
                        n(8113).Z.inherits(o, r.Z, {
                            __CANCEL__: !0
                        });
                        const a = o
                    }
                    ,
                    9126: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return !(!e || !e.__CANCEL__)
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    5411: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>f
                        });
                        var r = n(8113)
                          , o = n(3343)
                          , a = n(2881)
                          , i = n(4352)
                          , l = n(8636)
                          , c = n(5315)
                          , s = n(6011)
                          , u = n(1150);
                        const d = s.Z.validators;
                        class p {
                            constructor(e) {
                                this.defaults = e,
                                this.interceptors = {
                                    request: new a.Z,
                                    response: new a.Z
                                }
                            }
                            request(e, t) {
                                "string" == typeof e ? (t = t || {}).url = e : t = e || {},
                                t = (0,
                                l.Z)(this.defaults, t);
                                const {transitional: n, paramsSerializer: o, headers: a} = t;
                                let c;
                                void 0 !== n && s.Z.assertOptions(n, {
                                    silentJSONParsing: d.transitional(d.boolean),
                                    forcedJSONParsing: d.transitional(d.boolean),
                                    clarifyTimeoutError: d.transitional(d.boolean)
                                }, !1),
                                void 0 !== o && s.Z.assertOptions(o, {
                                    encode: d.function,
                                    serialize: d.function
                                }, !0),
                                t.method = (t.method || this.defaults.method || "get").toLowerCase(),
                                c = a && r.Z.merge(a.common, a[t.method]),
                                c && r.Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e=>{
                                    delete a[e]
                                }
                                )),
                                t.headers = u.Z.concat(c, a);
                                const p = [];
                                let f = !0;
                                this.interceptors.request.forEach((function(e) {
                                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (f = f && e.synchronous,
                                    p.unshift(e.fulfilled, e.rejected))
                                }
                                ));
                                const m = [];
                                let h;
                                this.interceptors.response.forEach((function(e) {
                                    m.push(e.fulfilled, e.rejected)
                                }
                                ));
                                let g, y = 0;
                                if (!f) {
                                    const e = [i.Z.bind(this), void 0];
                                    for (e.unshift.apply(e, p),
                                    e.push.apply(e, m),
                                    g = e.length,
                                    h = Promise.resolve(t); y < g; )
                                        h = h.then(e[y++], e[y++]);
                                    return h
                                }
                                g = p.length;
                                let v = t;
                                for (y = 0; y < g; ) {
                                    const t = p[y++]
                                      , n = p[y++];
                                    try {
                                        v = t(v)
                                    } catch (e) {
                                        n.call(this, e);
                                        break
                                    }
                                }
                                try {
                                    h = i.Z.call(this, v)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                for (y = 0,
                                g = m.length; y < g; )
                                    h = h.then(m[y++], m[y++]);
                                return h
                            }
                            getUri(e) {
                                e = (0,
                                l.Z)(this.defaults, e);
                                const t = (0,
                                c.Z)(e.baseURL, e.url);
                                return (0,
                                o.Z)(t, e.params, e.paramsSerializer)
                            }
                        }
                        r.Z.forEach(["delete", "get", "head", "options"], (function(e) {
                            p.prototype[e] = function(t, n) {
                                return this.request((0,
                                l.Z)(n || {}, {
                                    method: e,
                                    url: t,
                                    data: (n || {}).data
                                }))
                            }
                        }
                        )),
                        r.Z.forEach(["post", "put", "patch"], (function(e) {
                            function t(t) {
                                return function(n, r, o) {
                                    return this.request((0,
                                    l.Z)(o || {}, {
                                        method: e,
                                        headers: t ? {
                                            "Content-Type": "multipart/form-data"
                                        } : {},
                                        url: n,
                                        data: r
                                    }))
                                }
                            }
                            p.prototype[e] = t(),
                            p.prototype[e + "Form"] = t(!0)
                        }
                        ));
                        const f = p
                    }
                    ,
                    1333: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(8113);
                        function o(e, t, n, r, o) {
                            Error.call(this),
                            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
                            this.message = e,
                            this.name = "AxiosError",
                            t && (this.code = t),
                            n && (this.config = n),
                            r && (this.request = r),
                            o && (this.response = o)
                        }
                        r.Z.inherits(o, Error, {
                            toJSON: function() {
                                return {
                                    message: this.message,
                                    name: this.name,
                                    description: this.description,
                                    number: this.number,
                                    fileName: this.fileName,
                                    lineNumber: this.lineNumber,
                                    columnNumber: this.columnNumber,
                                    stack: this.stack,
                                    config: r.Z.toJSONObject(this.config),
                                    code: this.code,
                                    status: this.response && this.response.status ? this.response.status : null
                                }
                            }
                        });
                        const a = o.prototype
                          , i = {};
                        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e=>{
                            i[e] = {
                                value: e
                            }
                        }
                        )),
                        Object.defineProperties(o, i),
                        Object.defineProperty(a, "isAxiosError", {
                            value: !0
                        }),
                        o.from = (e,t,n,i,l,c)=>{
                            const s = Object.create(a);
                            return r.Z.toFlatObject(e, s, (function(e) {
                                return e !== Error.prototype
                            }
                            ), (e=>"isAxiosError" !== e)),
                            o.call(s, e.message, t, n, i, l),
                            s.cause = e,
                            s.name = e.name,
                            c && Object.assign(s, c),
                            s
                        }
                        ;
                        const l = o
                    }
                    ,
                    1150: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>u
                        });
                        var r = n(8113)
                          , o = n(6283);
                        const a = Symbol("internals");
                        function i(e) {
                            return e && String(e).trim().toLowerCase()
                        }
                        function l(e) {
                            return !1 === e || null == e ? e : r.Z.isArray(e) ? e.map(l) : String(e)
                        }
                        function c(e, t, n, o, a) {
                            return r.Z.isFunction(o) ? o.call(this, t, n) : (a && (t = n),
                            r.Z.isString(t) ? r.Z.isString(o) ? -1 !== t.indexOf(o) : r.Z.isRegExp(o) ? o.test(t) : void 0 : void 0)
                        }
                        class s {
                            constructor(e) {
                                e && this.set(e)
                            }
                            set(e, t, n) {
                                const a = this;
                                function c(e, t, n) {
                                    const o = i(t);
                                    if (!o)
                                        throw new Error("header name must be a non-empty string");
                                    const c = r.Z.findKey(a, o);
                                    (!c || void 0 === a[c] || !0 === n || void 0 === n && !1 !== a[c]) && (a[c || t] = l(e))
                                }
                                const s = (e,t)=>r.Z.forEach(e, ((e,n)=>c(e, n, t)));
                                return r.Z.isPlainObject(e) || e instanceof this.constructor ? s(e, t) : r.Z.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim()) ? s((0,
                                o.Z)(e), t) : null != e && c(t, e, n),
                                this
                            }
                            get(e, t) {
                                if (e = i(e)) {
                                    const n = r.Z.findKey(this, e);
                                    if (n) {
                                        const e = this[n];
                                        if (!t)
                                            return e;
                                        if (!0 === t)
                                            return function(e) {
                                                const t = Object.create(null)
                                                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                                let r;
                                                for (; r = n.exec(e); )
                                                    t[r[1]] = r[2];
                                                return t
                                            }(e);
                                        if (r.Z.isFunction(t))
                                            return t.call(this, e, n);
                                        if (r.Z.isRegExp(t))
                                            return t.exec(e);
                                        throw new TypeError("parser must be boolean|regexp|function")
                                    }
                                }
                            }
                            has(e, t) {
                                if (e = i(e)) {
                                    const n = r.Z.findKey(this, e);
                                    return !(!n || void 0 === this[n] || t && !c(0, this[n], n, t))
                                }
                                return !1
                            }
                            delete(e, t) {
                                const n = this;
                                let o = !1;
                                function a(e) {
                                    if (e = i(e)) {
                                        const a = r.Z.findKey(n, e);
                                        !a || t && !c(0, n[a], a, t) || (delete n[a],
                                        o = !0)
                                    }
                                }
                                return r.Z.isArray(e) ? e.forEach(a) : a(e),
                                o
                            }
                            clear(e) {
                                const t = Object.keys(this);
                                let n = t.length
                                  , r = !1;
                                for (; n--; ) {
                                    const o = t[n];
                                    e && !c(0, this[o], o, e, !0) || (delete this[o],
                                    r = !0)
                                }
                                return r
                            }
                            normalize(e) {
                                const t = this
                                  , n = {};
                                return r.Z.forEach(this, ((o,a)=>{
                                    const i = r.Z.findKey(n, a);
                                    if (i)
                                        return t[i] = l(o),
                                        void delete t[a];
                                    const c = e ? function(e) {
                                        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e,t,n)=>t.toUpperCase() + n))
                                    }(a) : String(a).trim();
                                    c !== a && delete t[a],
                                    t[c] = l(o),
                                    n[c] = !0
                                }
                                )),
                                this
                            }
                            concat(...e) {
                                return this.constructor.concat(this, ...e)
                            }
                            toJSON(e) {
                                const t = Object.create(null);
                                return r.Z.forEach(this, ((n,o)=>{
                                    null != n && !1 !== n && (t[o] = e && r.Z.isArray(n) ? n.join(", ") : n)
                                }
                                )),
                                t
                            }
                            [Symbol.iterator]() {
                                return Object.entries(this.toJSON())[Symbol.iterator]()
                            }
                            toString() {
                                return Object.entries(this.toJSON()).map((([e,t])=>e + ": " + t)).join("\n")
                            }
                            get[Symbol.toStringTag]() {
                                return "AxiosHeaders"
                            }
                            static from(e) {
                                return e instanceof this ? e : new this(e)
                            }
                            static concat(e, ...t) {
                                const n = new this(e);
                                return t.forEach((e=>n.set(e))),
                                n
                            }
                            static accessor(e) {
                                const t = (this[a] = this[a] = {
                                    accessors: {}
                                }).accessors
                                  , n = this.prototype;
                                function o(e) {
                                    const o = i(e);
                                    t[o] || (function(e, t) {
                                        const n = r.Z.toCamelCase(" " + t);
                                        ["get", "set", "has"].forEach((r=>{
                                            Object.defineProperty(e, r + n, {
                                                value: function(e, n, o) {
                                                    return this[r].call(this, t, e, n, o)
                                                },
                                                configurable: !0
                                            })
                                        }
                                        ))
                                    }(n, e),
                                    t[o] = !0)
                                }
                                return r.Z.isArray(e) ? e.forEach(o) : o(e),
                                this
                            }
                        }
                        s.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
                        r.Z.freezeMethods(s.prototype),
                        r.Z.freezeMethods(s);
                        const u = s
                    }
                    ,
                    2881: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(8113);
                        const o = class {
                            constructor() {
                                this.handlers = []
                            }
                            use(e, t, n) {
                                return this.handlers.push({
                                    fulfilled: e,
                                    rejected: t,
                                    synchronous: !!n && n.synchronous,
                                    runWhen: n ? n.runWhen : null
                                }),
                                this.handlers.length - 1
                            }
                            eject(e) {
                                this.handlers[e] && (this.handlers[e] = null)
                            }
                            clear() {
                                this.handlers && (this.handlers = [])
                            }
                            forEach(e) {
                                r.Z.forEach(this.handlers, (function(t) {
                                    null !== t && e(t)
                                }
                                ))
                            }
                        }
                    }
                    ,
                    5315: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>a
                        });
                        var r = n(8474)
                          , o = n(4318);
                        function a(e, t) {
                            return e && !(0,
                            r.Z)(t) ? (0,
                            o.Z)(e, t) : t
                        }
                    }
                    ,
                    4352: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>u
                        });
                        var r = n(4293)
                          , o = n(9126)
                          , a = n(6239)
                          , i = n(9619)
                          , l = n(1150)
                          , c = n(8624);
                        function s(e) {
                            if (e.cancelToken && e.cancelToken.throwIfRequested(),
                            e.signal && e.signal.aborted)
                                throw new i.Z(null,e)
                        }
                        function u(e) {
                            return s(e),
                            e.headers = l.Z.from(e.headers),
                            e.data = r.Z.call(e, e.transformRequest),
                            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
                            c.Z.getAdapter(e.adapter || a.Z.adapter)(e).then((function(t) {
                                return s(e),
                                t.data = r.Z.call(e, e.transformResponse, t),
                                t.headers = l.Z.from(t.headers),
                                t
                            }
                            ), (function(t) {
                                return (0,
                                o.Z)(t) || (s(e),
                                t && t.response && (t.response.data = r.Z.call(e, e.transformResponse, t.response),
                                t.response.headers = l.Z.from(t.response.headers))),
                                Promise.reject(t)
                            }
                            ))
                        }
                    }
                    ,
                    8636: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8113)
                          , o = n(1150);
                        const a = e=>e instanceof o.Z ? e.toJSON() : e;
                        function i(e, t) {
                            t = t || {};
                            const n = {};
                            function o(e, t, n) {
                                return r.Z.isPlainObject(e) && r.Z.isPlainObject(t) ? r.Z.merge.call({
                                    caseless: n
                                }, e, t) : r.Z.isPlainObject(t) ? r.Z.merge({}, t) : r.Z.isArray(t) ? t.slice() : t
                            }
                            function i(e, t, n) {
                                return r.Z.isUndefined(t) ? r.Z.isUndefined(e) ? void 0 : o(void 0, e, n) : o(e, t, n)
                            }
                            function l(e, t) {
                                if (!r.Z.isUndefined(t))
                                    return o(void 0, t)
                            }
                            function c(e, t) {
                                return r.Z.isUndefined(t) ? r.Z.isUndefined(e) ? void 0 : o(void 0, e) : o(void 0, t)
                            }
                            function s(n, r, a) {
                                return a in t ? o(n, r) : a in e ? o(void 0, n) : void 0
                            }
                            const u = {
                                url: l,
                                method: l,
                                data: l,
                                baseURL: c,
                                transformRequest: c,
                                transformResponse: c,
                                paramsSerializer: c,
                                timeout: c,
                                timeoutMessage: c,
                                withCredentials: c,
                                adapter: c,
                                responseType: c,
                                xsrfCookieName: c,
                                xsrfHeaderName: c,
                                onUploadProgress: c,
                                onDownloadProgress: c,
                                decompress: c,
                                maxContentLength: c,
                                maxBodyLength: c,
                                beforeRedirect: c,
                                transport: c,
                                httpAgent: c,
                                httpsAgent: c,
                                cancelToken: c,
                                socketPath: c,
                                responseEncoding: c,
                                validateStatus: s,
                                headers: (e,t)=>i(a(e), a(t), !0)
                            };
                            return r.Z.forEach(Object.keys(e).concat(Object.keys(t)), (function(o) {
                                const a = u[o] || i
                                  , l = a(e[o], t[o], o);
                                r.Z.isUndefined(l) && a !== s || (n[o] = l)
                            }
                            )),
                            n
                        }
                    }
                    ,
                    1992: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(1333);
                        function o(e, t, n) {
                            const o = n.config.validateStatus;
                            n.status && o && !o(n.status) ? t(new r.Z("Request failed with status code " + n.status,[r.Z.ERR_BAD_REQUEST, r.Z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
                        }
                    }
                    ,
                    4293: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8113)
                          , o = n(6239)
                          , a = n(1150);
                        function i(e, t) {
                            const n = this || o.Z
                              , i = t || n
                              , l = a.Z.from(i.headers);
                            let c = i.data;
                            return r.Z.forEach(e, (function(e) {
                                c = e.call(n, c, l.normalize(), t ? t.status : void 0)
                            }
                            )),
                            l.normalize(),
                            c
                        }
                    }
                    ,
                    6239: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>p
                        });
                        var r = n(8113)
                          , o = n(1333)
                          , a = n(2913)
                          , i = n(5238)
                          , l = n(6856)
                          , c = n(9698)
                          , s = n(4510);
                        const u = {
                            "Content-Type": void 0
                        }
                          , d = {
                            transitional: a.Z,
                            adapter: ["xhr", "http"],
                            transformRequest: [function(e, t) {
                                const n = t.getContentType() || ""
                                  , o = n.indexOf("application/json") > -1
                                  , a = r.Z.isObject(e);
                                if (a && r.Z.isHTMLForm(e) && (e = new FormData(e)),
                                r.Z.isFormData(e))
                                    return o && o ? JSON.stringify((0,
                                    s.Z)(e)) : e;
                                if (r.Z.isArrayBuffer(e) || r.Z.isBuffer(e) || r.Z.isStream(e) || r.Z.isFile(e) || r.Z.isBlob(e))
                                    return e;
                                if (r.Z.isArrayBufferView(e))
                                    return e.buffer;
                                if (r.Z.isURLSearchParams(e))
                                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                                    e.toString();
                                let c;
                                if (a) {
                                    if (n.indexOf("application/x-www-form-urlencoded") > -1)
                                        return (0,
                                        l.Z)(e, this.formSerializer).toString();
                                    if ((c = r.Z.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                        const t = this.env && this.env.FormData;
                                        return (0,
                                        i.Z)(c ? {
                                            "files[]": e
                                        } : e, t && new t, this.formSerializer)
                                    }
                                }
                                return a || o ? (t.setContentType("application/json", !1),
                                function(e, t, n) {
                                    if (r.Z.isString(e))
                                        try {
                                            return (0,
                                            JSON.parse)(e),
                                            r.Z.trim(e)
                                        } catch (e) {
                                            if ("SyntaxError" !== e.name)
                                                throw e
                                        }
                                    return (0,
                                    JSON.stringify)(e)
                                }(e)) : e
                            }
                            ],
                            transformResponse: [function(e) {
                                const t = this.transitional || d.transitional
                                  , n = t && t.forcedJSONParsing
                                  , a = "json" === this.responseType;
                                if (e && r.Z.isString(e) && (n && !this.responseType || a)) {
                                    const n = !(t && t.silentJSONParsing) && a;
                                    try {
                                        return JSON.parse(e)
                                    } catch (e) {
                                        if (n) {
                                            if ("SyntaxError" === e.name)
                                                throw o.Z.from(e, o.Z.ERR_BAD_RESPONSE, this, null, this.response);
                                            throw e
                                        }
                                    }
                                }
                                return e
                            }
                            ],
                            timeout: 0,
                            xsrfCookieName: "XSRF-TOKEN",
                            xsrfHeaderName: "X-XSRF-TOKEN",
                            maxContentLength: -1,
                            maxBodyLength: -1,
                            env: {
                                FormData: c.Z.classes.FormData,
                                Blob: c.Z.classes.Blob
                            },
                            validateStatus: function(e) {
                                return e >= 200 && e < 300
                            },
                            headers: {
                                common: {
                                    Accept: "application/json, text/plain, */*"
                                }
                            }
                        };
                        r.Z.forEach(["delete", "get", "head"], (function(e) {
                            d.headers[e] = {}
                        }
                        )),
                        r.Z.forEach(["post", "put", "patch"], (function(e) {
                            d.headers[e] = r.Z.merge(u)
                        }
                        ));
                        const p = d
                    }
                    ,
                    2913: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = {
                            silentJSONParsing: !0,
                            forcedJSONParsing: !0,
                            clarifyTimeoutError: !1
                        }
                    }
                    ,
                    2112: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            q: ()=>r
                        });
                        const r = "1.3.4"
                    }
                    ,
                    7709: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(5238);
                        function o(e) {
                            const t = {
                                "!": "%21",
                                "'": "%27",
                                "(": "%28",
                                ")": "%29",
                                "~": "%7E",
                                "%20": "+",
                                "%00": "\0"
                            };
                            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
                                return t[e]
                            }
                            ))
                        }
                        function a(e, t) {
                            this._pairs = [],
                            e && (0,
                            r.Z)(e, this, t)
                        }
                        const i = a.prototype;
                        i.append = function(e, t) {
                            this._pairs.push([e, t])
                        }
                        ,
                        i.toString = function(e) {
                            const t = e ? function(t) {
                                return e.call(this, t, o)
                            }
                            : o;
                            return this._pairs.map((function(e) {
                                return t(e[0]) + "=" + t(e[1])
                            }
                            ), "").join("&")
                        }
                        ;
                        const l = a
                    }
                    ,
                    2097: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        const r = {
                            Continue: 100,
                            SwitchingProtocols: 101,
                            Processing: 102,
                            EarlyHints: 103,
                            Ok: 200,
                            Created: 201,
                            Accepted: 202,
                            NonAuthoritativeInformation: 203,
                            NoContent: 204,
                            ResetContent: 205,
                            PartialContent: 206,
                            MultiStatus: 207,
                            AlreadyReported: 208,
                            ImUsed: 226,
                            MultipleChoices: 300,
                            MovedPermanently: 301,
                            Found: 302,
                            SeeOther: 303,
                            NotModified: 304,
                            UseProxy: 305,
                            Unused: 306,
                            TemporaryRedirect: 307,
                            PermanentRedirect: 308,
                            BadRequest: 400,
                            Unauthorized: 401,
                            PaymentRequired: 402,
                            Forbidden: 403,
                            NotFound: 404,
                            MethodNotAllowed: 405,
                            NotAcceptable: 406,
                            ProxyAuthenticationRequired: 407,
                            RequestTimeout: 408,
                            Conflict: 409,
                            Gone: 410,
                            LengthRequired: 411,
                            PreconditionFailed: 412,
                            PayloadTooLarge: 413,
                            UriTooLong: 414,
                            UnsupportedMediaType: 415,
                            RangeNotSatisfiable: 416,
                            ExpectationFailed: 417,
                            ImATeapot: 418,
                            MisdirectedRequest: 421,
                            UnprocessableEntity: 422,
                            Locked: 423,
                            FailedDependency: 424,
                            TooEarly: 425,
                            UpgradeRequired: 426,
                            PreconditionRequired: 428,
                            TooManyRequests: 429,
                            RequestHeaderFieldsTooLarge: 431,
                            UnavailableForLegalReasons: 451,
                            InternalServerError: 500,
                            NotImplemented: 501,
                            BadGateway: 502,
                            ServiceUnavailable: 503,
                            GatewayTimeout: 504,
                            HttpVersionNotSupported: 505,
                            VariantAlsoNegotiates: 506,
                            InsufficientStorage: 507,
                            LoopDetected: 508,
                            NotExtended: 510,
                            NetworkAuthenticationRequired: 511
                        };
                        Object.entries(r).forEach((([e,t])=>{
                            r[t] = e
                        }
                        ));
                        const o = r
                    }
                    ,
                    6524: (e,t,n)=>{
                        "use strict";
                        function r(e, t) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    3343: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8113)
                          , o = n(7709);
                        function a(e) {
                            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                        }
                        function i(e, t, n) {
                            if (!t)
                                return e;
                            const i = n && n.encode || a
                              , l = n && n.serialize;
                            let c;
                            if (c = l ? l(t, n) : r.Z.isURLSearchParams(t) ? t.toString() : new o.Z(t,n).toString(i),
                            c) {
                                const t = e.indexOf("#");
                                -1 !== t && (e = e.slice(0, t)),
                                e += (-1 === e.indexOf("?") ? "?" : "&") + c
                            }
                            return e
                        }
                    }
                    ,
                    4318: (e,t,n)=>{
                        "use strict";
                        function r(e, t) {
                            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    8308: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(8113);
                        const o = n(9698).Z.isStandardBrowserEnv ? {
                            write: function(e, t, n, o, a, i) {
                                const l = [];
                                l.push(e + "=" + encodeURIComponent(t)),
                                r.Z.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
                                r.Z.isString(o) && l.push("path=" + o),
                                r.Z.isString(a) && l.push("domain=" + a),
                                !0 === i && l.push("secure"),
                                document.cookie = l.join("; ")
                            },
                            read: function(e) {
                                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                                return t ? decodeURIComponent(t[3]) : null
                            },
                            remove: function(e) {
                                this.write(e, "", Date.now() - 864e5)
                            }
                        } : {
                            write: function() {},
                            read: function() {
                                return null
                            },
                            remove: function() {}
                        }
                    }
                    ,
                    4510: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(8113);
                        const o = function(e) {
                            function t(e, n, o, a) {
                                let i = e[a++];
                                const l = Number.isFinite(+i)
                                  , c = a >= e.length;
                                return i = !i && r.Z.isArray(o) ? o.length : i,
                                c ? (r.Z.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n,
                                !l) : (o[i] && r.Z.isObject(o[i]) || (o[i] = []),
                                t(e, n, o[i], a) && r.Z.isArray(o[i]) && (o[i] = function(e) {
                                    const t = {}
                                      , n = Object.keys(e);
                                    let r;
                                    const o = n.length;
                                    let a;
                                    for (r = 0; r < o; r++)
                                        a = n[r],
                                        t[a] = e[a];
                                    return t
                                }(o[i])),
                                !l)
                            }
                            if (r.Z.isFormData(e) && r.Z.isFunction(e.entries)) {
                                const n = {};
                                return r.Z.forEachEntry(e, ((e,o)=>{
                                    t(function(e) {
                                        return r.Z.matchAll(/\w+|\[(\w*)]/g, e).map((e=>"[]" === e[0] ? "" : e[1] || e[0]))
                                    }(e), o, n, 0)
                                }
                                )),
                                n
                            }
                            return null
                        }
                    }
                    ,
                    8474: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    5511: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(8113);
                        function o(e) {
                            return r.Z.isObject(e) && !0 === e.isAxiosError
                        }
                    }
                    ,
                    8738: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(8113);
                        const o = n(9698).Z.isStandardBrowserEnv ? function() {
                            const e = /(msie|trident)/i.test(navigator.userAgent)
                              , t = document.createElement("a");
                            let n;
                            function o(n) {
                                let r = n;
                                return e && (t.setAttribute("href", r),
                                r = t.href),
                                t.setAttribute("href", r),
                                {
                                    href: t.href,
                                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                                    host: t.host,
                                    search: t.search ? t.search.replace(/^\?/, "") : "",
                                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                                    hostname: t.hostname,
                                    port: t.port,
                                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                                }
                            }
                            return n = o(window.location.href),
                            function(e) {
                                const t = r.Z.isString(e) ? o(e) : e;
                                return t.protocol === n.protocol && t.host === n.host
                            }
                        }() : function() {
                            return !0
                        }
                    }
                    ,
                    4198: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = null
                    }
                    ,
                    6283: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        const r = n(8113).Z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
                          , o = e=>{
                            const t = {};
                            let n, o, a;
                            return e && e.split("\n").forEach((function(e) {
                                a = e.indexOf(":"),
                                n = e.substring(0, a).trim().toLowerCase(),
                                o = e.substring(a + 1).trim(),
                                !n || t[n] && r[n] || ("set-cookie" === n ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o)
                            }
                            )),
                            t
                        }
                    }
                    ,
                    2312: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                            return t && t[1] || ""
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    2141: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = function(e, t) {
                            e = e || 10;
                            const n = new Array(e)
                              , r = new Array(e);
                            let o, a = 0, i = 0;
                            return t = void 0 !== t ? t : 1e3,
                            function(l) {
                                const c = Date.now()
                                  , s = r[i];
                                o || (o = c),
                                n[a] = l,
                                r[a] = c;
                                let u = i
                                  , d = 0;
                                for (; u !== a; )
                                    d += n[u++],
                                    u %= e;
                                if (a = (a + 1) % e,
                                a === i && (i = (i + 1) % e),
                                c - o < t)
                                    return;
                                const p = s && c - s;
                                return p ? Math.round(1e3 * d / p) : void 0
                            }
                        }
                    }
                    ,
                    7990: (e,t,n)=>{
                        "use strict";
                        function r(e) {
                            return function(t) {
                                return e.apply(null, t)
                            }
                        }
                        n.d(t, {
                            Z: ()=>r
                        })
                    }
                    ,
                    5238: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>u
                        });
                        var r = n(8113)
                          , o = n(1333)
                          , a = n(4198);
                        function i(e) {
                            return r.Z.isPlainObject(e) || r.Z.isArray(e)
                        }
                        function l(e) {
                            return r.Z.endsWith(e, "[]") ? e.slice(0, -2) : e
                        }
                        function c(e, t, n) {
                            return e ? e.concat(t).map((function(e, t) {
                                return e = l(e),
                                !n && t ? "[" + e + "]" : e
                            }
                            )).join(n ? "." : "") : t
                        }
                        const s = r.Z.toFlatObject(r.Z, {}, null, (function(e) {
                            return /^is[A-Z]/.test(e)
                        }
                        ))
                          , u = function(e, t, n) {
                            if (!r.Z.isObject(e))
                                throw new TypeError("target must be an object");
                            t = t || new (a.Z || FormData);
                            const u = (n = r.Z.toFlatObject(n, {
                                metaTokens: !0,
                                dots: !1,
                                indexes: !1
                            }, !1, (function(e, t) {
                                return !r.Z.isUndefined(t[e])
                            }
                            ))).metaTokens
                              , d = n.visitor || g
                              , p = n.dots
                              , f = n.indexes
                              , m = (n.Blob || "undefined" != typeof Blob && Blob) && r.Z.isSpecCompliantForm(t);
                            if (!r.Z.isFunction(d))
                                throw new TypeError("visitor must be a function");
                            function h(e) {
                                if (null === e)
                                    return "";
                                if (r.Z.isDate(e))
                                    return e.toISOString();
                                if (!m && r.Z.isBlob(e))
                                    throw new o.Z("Blob is not supported. Use a Buffer instead.");
                                return r.Z.isArrayBuffer(e) || r.Z.isTypedArray(e) ? m && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                            }
                            function g(e, n, o) {
                                let a = e;
                                if (e && !o && "object" == typeof e)
                                    if (r.Z.endsWith(n, "{}"))
                                        n = u ? n : n.slice(0, -2),
                                        e = JSON.stringify(e);
                                    else if (r.Z.isArray(e) && function(e) {
                                        return r.Z.isArray(e) && !e.some(i)
                                    }(e) || (r.Z.isFileList(e) || r.Z.endsWith(n, "[]")) && (a = r.Z.toArray(e)))
                                        return n = l(n),
                                        a.forEach((function(e, o) {
                                            !r.Z.isUndefined(e) && null !== e && t.append(!0 === f ? c([n], o, p) : null === f ? n : n + "[]", h(e))
                                        }
                                        )),
                                        !1;
                                return !!i(e) || (t.append(c(o, n, p), h(e)),
                                !1)
                            }
                            const y = []
                              , v = Object.assign(s, {
                                defaultVisitor: g,
                                convertValue: h,
                                isVisitable: i
                            });
                            if (!r.Z.isObject(e))
                                throw new TypeError("data must be an object");
                            return function e(n, o) {
                                if (!r.Z.isUndefined(n)) {
                                    if (-1 !== y.indexOf(n))
                                        throw Error("Circular reference detected in " + o.join("."));
                                    y.push(n),
                                    r.Z.forEach(n, (function(n, a) {
                                        !0 === (!(r.Z.isUndefined(n) || null === n) && d.call(t, n, r.Z.isString(a) ? a.trim() : a, o, v)) && e(n, o ? o.concat(a) : [a])
                                    }
                                    )),
                                    y.pop()
                                }
                            }(e),
                            t
                        }
                    }
                    ,
                    6856: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>i
                        });
                        var r = n(8113)
                          , o = n(5238)
                          , a = n(9698);
                        function i(e, t) {
                            return (0,
                            o.Z)(e, new a.Z.classes.URLSearchParams, Object.assign({
                                visitor: function(e, t, n, o) {
                                    return a.Z.isNode && r.Z.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                    !1) : o.defaultVisitor.apply(this, arguments)
                                }
                            }, t))
                        }
                    }
                    ,
                    6011: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>l
                        });
                        var r = n(2112)
                          , o = n(1333);
                        const a = {};
                        ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e,t)=>{
                            a[e] = function(n) {
                                return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                            }
                        }
                        ));
                        const i = {};
                        a.transitional = function(e, t, n) {
                            function a(e, t) {
                                return "[Axios v" + r.q + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                            }
                            return (n,r,l)=>{
                                if (!1 === e)
                                    throw new o.Z(a(r, " has been removed" + (t ? " in " + t : "")),o.Z.ERR_DEPRECATED);
                                return t && !i[r] && (i[r] = !0,
                                console.warn(a(r, " has been deprecated since v" + t + " and will be removed in the near future"))),
                                !e || e(n, r, l)
                            }
                        }
                        ;
                        const l = {
                            assertOptions: function(e, t, n) {
                                if ("object" != typeof e)
                                    throw new o.Z("options must be an object",o.Z.ERR_BAD_OPTION_VALUE);
                                const r = Object.keys(e);
                                let a = r.length;
                                for (; a-- > 0; ) {
                                    const i = r[a]
                                      , l = t[i];
                                    if (l) {
                                        const t = e[i]
                                          , n = void 0 === t || l(t, i, e);
                                        if (!0 !== n)
                                            throw new o.Z("option " + i + " must be " + n,o.Z.ERR_BAD_OPTION_VALUE)
                                    } else if (!0 !== n)
                                        throw new o.Z("Unknown option " + i,o.Z.ERR_BAD_OPTION)
                                }
                            },
                            validators: a
                        }
                    }
                    ,
                    2004: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = "undefined" != typeof Blob ? Blob : null
                    }
                    ,
                    1951: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>r
                        });
                        const r = "undefined" != typeof FormData ? FormData : null
                    }
                    ,
                    3358: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>o
                        });
                        var r = n(7709);
                        const o = "undefined" != typeof URLSearchParams ? URLSearchParams : r.Z
                    }
                    ,
                    9698: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>c
                        });
                        var r = n(3358)
                          , o = n(1951)
                          , a = n(2004);
                        const i = (()=>{
                            let e;
                            return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && "undefined" != typeof window && "undefined" != typeof document
                        }
                        )()
                          , l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
                          , c = {
                            isBrowser: !0,
                            classes: {
                                URLSearchParams: r.Z,
                                FormData: o.Z,
                                Blob: a.Z
                            },
                            isStandardBrowserEnv: i,
                            isStandardBrowserWebWorkerEnv: l,
                            protocols: ["http", "https", "file", "blob", "url", "data"]
                        }
                    }
                    ,
                    8113: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>I
                        });
                        var r = n(6524);
                        const {toString: o} = Object.prototype
                          , {getPrototypeOf: a} = Object
                          , i = (l = Object.create(null),
                        e=>{
                            const t = o.call(e);
                            return l[t] || (l[t] = t.slice(8, -1).toLowerCase())
                        }
                        );
                        var l;
                        const c = e=>(e = e.toLowerCase(),
                        t=>i(t) === e)
                          , s = e=>t=>typeof t === e
                          , {isArray: u} = Array
                          , d = s("undefined")
                          , p = c("ArrayBuffer")
                          , f = s("string")
                          , m = s("function")
                          , h = s("number")
                          , g = e=>null !== e && "object" == typeof e
                          , y = e=>{
                            if ("object" !== i(e))
                                return !1;
                            const t = a(e);
                            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
                        }
                          , v = c("Date")
                          , b = c("File")
                          , w = c("Blob")
                          , x = c("FileList")
                          , E = c("URLSearchParams");
                        function _(e, t, {allOwnKeys: n=!1}={}) {
                            if (null == e)
                                return;
                            let r, o;
                            if ("object" != typeof e && (e = [e]),
                            u(e))
                                for (r = 0,
                                o = e.length; r < o; r++)
                                    t.call(null, e[r], r, e);
                            else {
                                const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
                                  , a = o.length;
                                let i;
                                for (r = 0; r < a; r++)
                                    i = o[r],
                                    t.call(null, e[i], i, e)
                            }
                        }
                        function S(e, t) {
                            t = t.toLowerCase();
                            const n = Object.keys(e);
                            let r, o = n.length;
                            for (; o-- > 0; )
                                if (r = n[o],
                                t === r.toLowerCase())
                                    return r;
                            return null
                        }
                        const j = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : __webpack_require__.g
                          , O = e=>!d(e) && e !== j
                          , Z = (k = "undefined" != typeof Uint8Array && a(Uint8Array),
                        e=>k && e instanceof k);
                        var k;
                        const A = c("HTMLFormElement")
                          , C = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
                          , N = c("RegExp")
                          , P = (e,t)=>{
                            const n = Object.getOwnPropertyDescriptors(e)
                              , r = {};
                            _(n, ((n,o)=>{
                                !1 !== t(n, o, e) && (r[o] = n)
                            }
                            )),
                            Object.defineProperties(e, r)
                        }
                          , R = "abcdefghijklmnopqrstuvwxyz"
                          , L = "0123456789"
                          , T = {
                            DIGIT: L,
                            ALPHA: R,
                            ALPHA_DIGIT: R + R.toUpperCase() + L
                        }
                          , I = {
                            isArray: u,
                            isArrayBuffer: p,
                            isBuffer: function(e) {
                                return null !== e && !d(e) && null !== e.constructor && !d(e.constructor) && m(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                            },
                            isFormData: e=>{
                                const t = "[object FormData]";
                                return e && ("function" == typeof FormData && e instanceof FormData || o.call(e) === t || m(e.toString) && e.toString() === t)
                            }
                            ,
                            isArrayBufferView: function(e) {
                                let t;
                                return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer),
                                t
                            },
                            isString: f,
                            isNumber: h,
                            isBoolean: e=>!0 === e || !1 === e,
                            isObject: g,
                            isPlainObject: y,
                            isUndefined: d,
                            isDate: v,
                            isFile: b,
                            isBlob: w,
                            isRegExp: N,
                            isFunction: m,
                            isStream: e=>g(e) && m(e.pipe),
                            isURLSearchParams: E,
                            isTypedArray: Z,
                            isFileList: x,
                            forEach: _,
                            merge: function e() {
                                const {caseless: t} = O(this) && this || {}
                                  , n = {}
                                  , r = (r,o)=>{
                                    const a = t && S(n, o) || o;
                                    y(n[a]) && y(r) ? n[a] = e(n[a], r) : y(r) ? n[a] = e({}, r) : u(r) ? n[a] = r.slice() : n[a] = r
                                }
                                ;
                                for (let e = 0, t = arguments.length; e < t; e++)
                                    arguments[e] && _(arguments[e], r);
                                return n
                            },
                            extend: (e,t,n,{allOwnKeys: o}={})=>(_(t, ((t,o)=>{
                                n && m(t) ? e[o] = (0,
                                r.Z)(t, n) : e[o] = t
                            }
                            ), {
                                allOwnKeys: o
                            }),
                            e),
                            trim: e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                            stripBOM: e=>(65279 === e.charCodeAt(0) && (e = e.slice(1)),
                            e),
                            inherits: (e,t,n,r)=>{
                                e.prototype = Object.create(t.prototype, r),
                                e.prototype.constructor = e,
                                Object.defineProperty(e, "super", {
                                    value: t.prototype
                                }),
                                n && Object.assign(e.prototype, n)
                            }
                            ,
                            toFlatObject: (e,t,n,r)=>{
                                let o, i, l;
                                const c = {};
                                if (t = t || {},
                                null == e)
                                    return t;
                                do {
                                    for (o = Object.getOwnPropertyNames(e),
                                    i = o.length; i-- > 0; )
                                        l = o[i],
                                        r && !r(l, e, t) || c[l] || (t[l] = e[l],
                                        c[l] = !0);
                                    e = !1 !== n && a(e)
                                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                                return t
                            }
                            ,
                            kindOf: i,
                            kindOfTest: c,
                            endsWith: (e,t,n)=>{
                                e = String(e),
                                (void 0 === n || n > e.length) && (n = e.length),
                                n -= t.length;
                                const r = e.indexOf(t, n);
                                return -1 !== r && r === n
                            }
                            ,
                            toArray: e=>{
                                if (!e)
                                    return null;
                                if (u(e))
                                    return e;
                                let t = e.length;
                                if (!h(t))
                                    return null;
                                const n = new Array(t);
                                for (; t-- > 0; )
                                    n[t] = e[t];
                                return n
                            }
                            ,
                            forEachEntry: (e,t)=>{
                                const n = (e && e[Symbol.iterator]).call(e);
                                let r;
                                for (; (r = n.next()) && !r.done; ) {
                                    const n = r.value;
                                    t.call(e, n[0], n[1])
                                }
                            }
                            ,
                            matchAll: (e,t)=>{
                                let n;
                                const r = [];
                                for (; null !== (n = e.exec(t)); )
                                    r.push(n);
                                return r
                            }
                            ,
                            isHTMLForm: A,
                            hasOwnProperty: C,
                            hasOwnProp: C,
                            reduceDescriptors: P,
                            freezeMethods: e=>{
                                P(e, ((t,n)=>{
                                    if (m(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                                        return !1;
                                    const r = e[n];
                                    m(r) && (t.enumerable = !1,
                                    "writable"in t ? t.writable = !1 : t.set || (t.set = ()=>{
                                        throw Error("Can not rewrite read-only method '" + n + "'")
                                    }
                                    ))
                                }
                                ))
                            }
                            ,
                            toObjectSet: (e,t)=>{
                                const n = {}
                                  , r = e=>{
                                    e.forEach((e=>{
                                        n[e] = !0
                                    }
                                    ))
                                }
                                ;
                                return u(e) ? r(e) : r(String(e).split(t)),
                                n
                            }
                            ,
                            toCamelCase: e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                                return t.toUpperCase() + n
                            }
                            )),
                            noop: ()=>{}
                            ,
                            toFiniteNumber: (e,t)=>(e = +e,
                            Number.isFinite(e) ? e : t),
                            findKey: S,
                            global: j,
                            isContextDefined: O,
                            ALPHABET: T,
                            generateString: (e=16,t=T.ALPHA_DIGIT)=>{
                                let n = "";
                                const {length: r} = t;
                                for (; e--; )
                                    n += t[Math.random() * r | 0];
                                return n
                            }
                            ,
                            isSpecCompliantForm: function(e) {
                                return !!(e && m(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                            },
                            toJSONObject: e=>{
                                const t = new Array(10)
                                  , n = (e,r)=>{
                                    if (g(e)) {
                                        if (t.indexOf(e) >= 0)
                                            return;
                                        if (!("toJSON"in e)) {
                                            t[r] = e;
                                            const o = u(e) ? [] : {};
                                            return _(e, ((e,t)=>{
                                                const a = n(e, r + 1);
                                                !d(a) && (o[t] = a)
                                            }
                                            )),
                                            t[r] = void 0,
                                            o
                                        }
                                    }
                                    return e
                                }
                                ;
                                return n(e, 0)
                            }
                        }
                    }
                    ,
                    4147: e=>{
                        "use strict";
                        e.exports = JSON.parse('{"u2":"@mybricks/plugin-connector-domain","i8":"0.0.48"}')
                    }
                }
                  , __webpack_module_cache__ = {};
                function __nested_webpack_require_263941__(e) {
                    var t = __webpack_module_cache__[e];
                    if (void 0 !== t)
                        return t.exports;
                    var n = __webpack_module_cache__[e] = {
                        id: e,
                        exports: {}
                    };
                    return __webpack_modules__[e].call(n.exports, n, n.exports, __nested_webpack_require_263941__),
                    n.exports
                }
                __nested_webpack_require_263941__.n = e=>{
                    var t = e && e.__esModule ? ()=>e.default : ()=>e;
                    return __nested_webpack_require_263941__.d(t, {
                        a: t
                    }),
                    t
                }
                ,
                __nested_webpack_require_263941__.d = (e,t)=>{
                    for (var n in t)
                        __nested_webpack_require_263941__.o(t, n) && !__nested_webpack_require_263941__.o(e, n) && Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n]
                        })
                }
                ,
                __nested_webpack_require_263941__.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
                __nested_webpack_require_263941__.r = e=>{
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                __nested_webpack_require_263941__.nc = void 0;
                var __nested_webpack_exports__ = {};
                return (()=>{
                    "use strict";
                    __nested_webpack_require_263941__.r(__nested_webpack_exports__),
                    __nested_webpack_require_263941__.d(__nested_webpack_exports__, {
                        call: ()=>i.call,
                        default: ()=>l,
                        mock: ()=>i.mock
                    });
                    var e = __nested_webpack_require_263941__(8156)
                      , t = __nested_webpack_require_263941__.n(e)
                      , n = __nested_webpack_require_263941__(2453)
                      , r = __nested_webpack_require_263941__(9493)
                      , o = __nested_webpack_require_263941__(3887)
                      , a = __nested_webpack_require_263941__(4147)
                      , i = __nested_webpack_require_263941__(8704);
                    function l(e) {
                        return {
                            name: "@mybricks/plugins/domain-service",
                            title: "领域模型",
                            description: "领域模型连接器",
                            data: o.Z,
                            contributes: {
                                sliderView: {
                                    tab: {
                                        title: "连接器",
                                        icon: r.qv,
                                        apiSet: ["domainModel"],
                                        render: function(r) {
                                            return t().createElement(n.Z, Object.assign({}, e, r))
                                        }
                                    }
                                }
                            }
                        }
                    }
                    console.log("%c ".concat(a.u2, " %c@").concat(a.i8), "color:#FFF;background:#fa6400", "", "")
                }
                )(),
                __nested_webpack_exports__
            }
            )(),
            module.exports = t(__webpack_require__(359), __webpack_require__(4318), __webpack_require__(2721))
        },
        3951: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Wz: ()=>getQueryString,
                kU: ()=>shapeUrlByEnv
            });
            var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3300)
              , axios__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__)
              , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(359)
              , react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__)
              , react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4318)
              , react_dom__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__)
              , antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2721)
              , antd__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__)
              , __awaiter = function(e, t, n, r) {
                return new (n || (n = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(i, l)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , __generator = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(c) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (i = 0)),
                            i; )
                                try {
                                    if (n = 1,
                                    r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, l[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (l = [2 & l[0], o.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        o = l;
                                        break;
                                    case 4:
                                        return i.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < o[1]) {
                                            i.label = o[1],
                                            o = l;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2],
                                            i.ops.push(l);
                                            break
                                        }
                                        o[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, i)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, c])
                    }
                }
            };
            function getApiUrl(e) {
                return e
            }
            function setCookie(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                var o = "expires=" + r.toGMTString();
                document.cookie = e + "=" + t + "; " + o
            }
            function getCookie(e) {
                e += "=";
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    var r = t[n].trim();
                    if (0 == r.indexOf(e))
                        return r.substring(e.length, r.length)
                }
            }
            function removeCookie(e) {
                document.cookie = "".concat(e, "=;expires=Thu,01 Jan 1970 00:00:00 UTC;path=/;")
            }
            function getQueryString(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                  , n = window.location.search.substring(1).match(t);
                return null != n ? n[2] : null
            }
            function copyText(e) {
                var t = document.createElement("input");
                return document.body.appendChild(t),
                t.value = e,
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t),
                !0
            }
            function eventOperation(e) {
                function t(t) {
                    e && e(t)
                }
                return t.stop = function(e) {
                    var n;
                    if ("function" == typeof e.stopPropagation)
                        e.stopPropagation();
                    else {
                        var r = null === (n = e.evt) || void 0 === n ? void 0 : n.stopPropagation;
                        "function" == typeof r && (r(),
                        e.cancelBubble = !0)
                    }
                    t(e)
                }
                ,
                t
            }
            function replaceUrlVal(paramName, replaceWith, config) {
                void 0 === config && (config = {
                    url: location.search
                });
                var oldUrl = config.url
                  , newUrl = oldUrl;
                if (replaceWith)
                    if (oldUrl) {
                        var re = eval("/(" + paramName + "=)([^&]*)/gi");
                        newUrl = re.test(oldUrl) ? oldUrl.replace(re, paramName + "=" + replaceWith) : oldUrl + "&".concat(paramName, "=").concat(replaceWith)
                    } else
                        newUrl = "?".concat(paramName, "=").concat(replaceWith);
                else
                    newUrl = deleteUrlVal(paramName);
                newUrl && history.replaceState(null, "", newUrl)
            }
            function deleteUrlVal(e, t) {
                void 0 === t && (t = location.search);
                var n = t.slice(1);
                if (n.indexOf(e) > -1) {
                    for (var r = {}, o = n.split("&"), a = 0; a < o.length; a++)
                        o[a] = o[a].split("="),
                        r[o[a][0]] = o[a][1];
                    return Reflect.deleteProperty(r, e),
                    "?" + JSON.stringify(r).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&")
                }
            }
            var isPublicVersion = function() {
                return "mybricks.world" === new URL(window.location.href).hostname
            };
            function uploadApi(e) {
                return __awaiter(this, void 0, void 0, (function() {
                    var t;
                    return __generator(this, (function(n) {
                        return t = new FormData,
                        e.forEach((function(e) {
                            t.append("file", e)
                        }
                        )),
                        t.append("folderPath", "/fiels/".concat(Date.now())),
                        [2, axios.post("/paas/api/flow/saveFile", t, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(e) {
                            var t, n;
                            if (e && 1 === (null === (t = e.data) || void 0 === t ? void 0 : t.code)) {
                                message.success("上传成功");
                                var r = null === (n = e.data) || void 0 === n ? void 0 : n.data;
                                return Array.isArray(r) ? r : [r]
                            }
                            throw console.warn("上传失败", (null == e ? void 0 : e.data) || e),
                            message.error("上传失败"),
                            new Error("接口调用失败")
                        }
                        )).catch((function(e) {
                            throw console.warn("上传失败", e),
                            message.error("上传失败"),
                            e
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            function getManateeUserInfo() {
                var e = {};
                try {
                    var t = localStorage.getItem("token")
                      , n = localStorage.getItem("session");
                    e.token = t ? atob(atob(t)) : t,
                    e.session = n ? atob(atob(n)) : n
                } catch (e) {
                    console.error(e)
                }
                return e
            }
            var importScript = (cache = {},
            lastWindowKeys = [],
            window.react || (window.react = window.React || react__WEBPACK_IMPORTED_MODULE_1___default()),
            window["react-dom"] || (window["react-dom"] = window.ReactDOM || react_dom__WEBPACK_IMPORTED_MODULE_2___default()),
            function(e) {
                var t = e.url;
                return cache[t] ? Promise.resolve(cache[t]) : new Promise((function(e, n) {
                    var r = Object.keys(window).pop();
                    lastWindowKeys.push(r);
                    var o = document.createElement("script");
                    o.setAttribute("src", t),
                    document.head.appendChild(o),
                    o.addEventListener("load", (function() {
                        document.head.removeChild(o);
                        var r = Object.keys(window).pop()
                          , a = !lastWindowKeys.includes(r) && window[r];
                        a || n("插件未挂载到window"),
                        lastWindowKeys.push(r);
                        var i = a.default ? a.default : a;
                        cache[t] = i,
                        e(i)
                    }
                    )),
                    o.addEventListener("error", (function(e) {
                        n(e)
                    }
                    ))
                }
                ))
            }
            ), cache, lastWindowKeys, fetchPlugins = function(e) {
                return __awaiter(void 0, void 0, void 0, (function() {
                    var t;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return t = e.map((function(e) {
                                return importScript(e).then((function(e) {
                                    return e()
                                }
                                )).catch((function(t) {
                                    return message.error("".concat(e.title, " 插件加载失败，失败信息：").concat(t)),
                                    console.error("".concat(e.title, " 插件加载失败，失败信息：").concat(t)),
                                    null
                                }
                                ))
                            }
                            )),
                            [4, Promise.all(t)];
                        case 1:
                            return [2, n.sent().filter((function(e) {
                                return null !== e
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }, removeBadChar = function(e) {
                return e ? e.replace(/\\t/g, "") : e
            }, shapeUrlByEnv = function(e, t, n) {
                if (!e || !t || /^(https?|ws)/.test(n))
                    return n;
                var r = (e || []).find((function(e) {
                    return e.name === t
                }
                ));
                return r && r.value ? r.value + n : n
            }
        }
        ,
        2721: e=>{
            "use strict";
            e.exports = __WEBPACK_EXTERNAL_MODULE__2721__
        }
        ,
        3300: e=>{
            "use strict";
            e.exports = __WEBPACK_EXTERNAL_MODULE__3300__
        }
        ,
        359: e=>{
            "use strict";
            e.exports = __WEBPACK_EXTERNAL_MODULE__359__
        }
        ,
        4318: e=>{
            "use strict";
            e.exports = __WEBPACK_EXTERNAL_MODULE__4318__
        }
    }
      , __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t)
            return t.exports;
        var n = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__),
        n.exports
    }
    __webpack_require__.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    __webpack_require__.d = (e,t)=>{
        for (var n in t)
            __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    __webpack_require__.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ;
    var __webpack_exports__ = {};
    return (()=>{
        "use strict";
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            bootstrap: ()=>M,
            mount: ()=>V,
            unmount: ()=>q
        });
        var e = __webpack_require__(4318)
          , t = __webpack_require__.n(e)
          , n = __webpack_require__(2721);
        function r() {
            return r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            r.apply(this, arguments)
        }
        const o = {
            placeholder: "请选择时间",
            rangePlaceholder: ["开始时间", "结束时间"]
        };
        var a = {
            lang: r({
                placeholder: "请选择日期",
                yearPlaceholder: "请选择年份",
                quarterPlaceholder: "请选择季度",
                monthPlaceholder: "请选择月份",
                weekPlaceholder: "请选择周",
                rangePlaceholder: ["开始日期", "结束日期"],
                rangeYearPlaceholder: ["开始年份", "结束年份"],
                rangeMonthPlaceholder: ["开始月份", "结束月份"],
                rangeQuarterPlaceholder: ["开始季度", "结束季度"],
                rangeWeekPlaceholder: ["开始周", "结束周"]
            }, {
                locale: "zh_CN",
                today: "今天",
                now: "此刻",
                backToToday: "返回今天",
                ok: "确定",
                timeSelect: "选择时间",
                dateSelect: "选择日期",
                weekSelect: "选择周",
                clear: "清除",
                month: "月",
                year: "年",
                previousMonth: "上个月 (翻页上键)",
                nextMonth: "下个月 (翻页下键)",
                monthSelect: "选择月份",
                yearSelect: "选择年份",
                decadeSelect: "选择年代",
                yearFormat: "YYYY年",
                dayFormat: "D日",
                dateFormat: "YYYY年M月D日",
                dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
                previousYear: "上一年 (Control键加左方向键)",
                nextYear: "下一年 (Control键加右方向键)",
                previousDecade: "上一年代",
                nextDecade: "下一年代",
                previousCentury: "上一世纪",
                nextCentury: "下一世纪"
            }),
            timePickerLocale: r({}, o)
        };
        a.lang.ok = "确定";
        var i = "${label}不是一个有效的${type}";
        const l = {
            locale: "zh-cn",
            Pagination: {
                items_per_page: "条/页",
                jump_to: "跳至",
                jump_to_confirm: "确定",
                page: "页",
                prev_page: "上一页",
                next_page: "下一页",
                prev_5: "向前 5 页",
                next_5: "向后 5 页",
                prev_3: "向前 3 页",
                next_3: "向后 3 页",
                page_size: "页码"
            },
            DatePicker: a,
            TimePicker: o,
            Calendar: a,
            global: {
                placeholder: "请选择"
            },
            Table: {
                filterTitle: "筛选",
                filterConfirm: "确定",
                filterReset: "重置",
                filterEmptyText: "无筛选项",
                filterCheckall: "全选",
                filterSearchPlaceholder: "在筛选项中搜索",
                selectAll: "全选当页",
                selectInvert: "反选当页",
                selectNone: "清空所有",
                selectionAll: "全选所有",
                sortTitle: "排序",
                expand: "展开行",
                collapse: "关闭行",
                triggerDesc: "点击降序",
                triggerAsc: "点击升序",
                cancelSort: "取消排序"
            },
            Modal: {
                okText: "确定",
                cancelText: "取消",
                justOkText: "知道了"
            },
            Popconfirm: {
                cancelText: "取消",
                okText: "确定"
            },
            Transfer: {
                titles: ["", ""],
                searchPlaceholder: "请输入搜索内容",
                itemUnit: "项",
                itemsUnit: "项",
                remove: "删除",
                selectCurrent: "全选当页",
                removeCurrent: "删除当页",
                selectAll: "全选所有",
                removeAll: "删除全部",
                selectInvert: "反选当页"
            },
            Upload: {
                uploading: "文件上传中",
                removeFile: "删除文件",
                uploadError: "上传错误",
                previewFile: "预览文件",
                downloadFile: "下载文件"
            },
            Empty: {
                description: "暂无数据"
            },
            Icon: {
                icon: "图标"
            },
            Text: {
                edit: "编辑",
                copy: "复制",
                copied: "复制成功",
                expand: "展开"
            },
            PageHeader: {
                back: "返回"
            },
            Form: {
                optional: "（可选）",
                defaultValidateMessages: {
                    default: "字段验证错误${label}",
                    required: "请输入${label}",
                    enum: "${label}必须是其中一个[${enum}]",
                    whitespace: "${label}不能为空字符",
                    date: {
                        format: "${label}日期格式无效",
                        parse: "${label}不能转换为日期",
                        invalid: "${label}是一个无效日期"
                    },
                    types: {
                        string: i,
                        method: i,
                        array: i,
                        object: i,
                        number: i,
                        date: i,
                        boolean: i,
                        integer: i,
                        float: i,
                        regexp: i,
                        email: i,
                        url: i,
                        hex: i
                    },
                    string: {
                        len: "${label}须为${len}个字符",
                        min: "${label}最少${min}个字符",
                        max: "${label}最多${max}个字符",
                        range: "${label}须在${min}-${max}字符之间"
                    },
                    number: {
                        len: "${label}必须等于${len}",
                        min: "${label}最小值为${min}",
                        max: "${label}最大值为${max}",
                        range: "${label}须在${min}-${max}之间"
                    },
                    array: {
                        len: "须为${len}个${label}",
                        min: "最少${min}个${label}",
                        max: "最多${max}个${label}",
                        range: "${label}数量须在${min}-${max}之间"
                    },
                    pattern: {
                        mismatch: "${label}与模式不匹配${pattern}"
                    }
                }
            },
            Image: {
                preview: "预览"
            }
        };
        var c, s = __webpack_require__(4684), u = ((c = {})["https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.15/2023-07-20_11-14-04/edit.js"] = "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.15/2023-07-20_11-14-04/rt.js",
        c["https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/5952_1.0.0-main.0/2022-12-06_16-24-51/edit.js"] = "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/5952_1.0.0-main.0/2022-12-06_16-24-51/rt.js",
        c["https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.28/2023-07-19_16-26-08/edit.js"] = "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.28/2023-07-19_16-26-08/rt.js",
        __webpack_require__(3951)), d = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, a = t.length; o < a; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }, p = window.setInterval, f = window.clearInterval, m = window.setTimeout, h = window.clearTimeout, g = window, y = new WeakMap, v = new WeakMap, b = new WeakMap, w = {
            undefined: !0,
            Array: !0,
            Object: !0,
            String: !0,
            Boolean: !0,
            Math: !0,
            Number: !0,
            Symbol: !0,
            parseFloat: !0,
            Float32Array: !0
        };
        function x() {
            var e = {};
            return Object.getOwnPropertyNames(g).forEach((function(t) {
                var n = Object.getOwnPropertyDescriptor(g, t);
                if (n && !n.configurable) {
                    var r = Object.prototype.hasOwnProperty.call(n, "get");
                    "top" !== t && "parent" !== t && "self" !== t && "window" !== t || (n.configurable = !0,
                    r || (n.writable = !0)),
                    Object.defineProperty(e, t, Object.freeze(n))
                }
            }
            )),
            e
        }
        const E = function() {
            function e(e) {
                void 0 === e && (e = {});
                var t = this;
                this.hasDisposed = !1,
                this.fakeWindow = x(),
                this.timeoutList = [],
                this.intervalList = [],
                this.options = {},
                this.options = e || {},
                this.proxy = new Proxy(window,{
                    set: function(e, n, r) {
                        if (!t.hasDisposed)
                            try {
                                !t.fakeWindow.hasOwnProperty(n) && e.hasOwnProperty(n) && (o = n,
                                a = t.fakeWindow,
                                (i = Object.getOwnPropertyDescriptor(window, o)) && i.writable && Object.defineProperty(a, o, {
                                    configurable: i.configurable,
                                    enumerable: i.enumerable,
                                    writable: i.writable,
                                    value: i.value
                                })),
                                t.fakeWindow[n] = r
                            } catch (e) {
                                throw console.error("set-key-error", n, e),
                                e
                            }
                        var o, a, i;
                        return !0
                    },
                    get: function(e, n) {
                        if (n === Symbol.unscopables)
                            return w;
                        if ("window" === n || "self" === n)
                            return t.proxy;
                        if ("document" !== n) {
                            if ("hasOwnProperty" === n)
                                return e.hasOwnProperty;
                            if ("eval" === n)
                                return e.eval;
                            if ("location" === n)
                                return e.location;
                            try {
                                var r = n in t.fakeWindow ? t.fakeWindow[n] : e[n];
                                return "function" != typeof r || function(e) {
                                    if (v.has(e))
                                        return v.get(e);
                                    var t = 0 === e.name.indexOf("bound ") && !e.hasOwnProperty("prototype");
                                    return v.set(e, t),
                                    t
                                }(r) || function(e) {
                                    if (y.has(e))
                                        return y.get(e);
                                    var t = e.prototype && e.prototype.constructor === e && Object.getOwnPropertyNames(e.prototype).length > 1 || /^function\b\s[A-Z].*/.test(e.toString()) || /^class\b/.test(e.toString());
                                    return y.set(e, t),
                                    t
                                }(r) ? r : (r = Function.prototype.bind.call(r, e),
                                function(e, t) {
                                    var n = b.get(t);
                                    if (n)
                                        return n;
                                    var r = Function.prototype.bind.call(t, e);
                                    for (var o in t)
                                        r[o] = t[o];
                                    return t.hasOwnProperty("prototype") && !r.hasOwnProperty("prototype") && (r.prototype = t.prototype),
                                    b.set(t, r),
                                    r
                                }(window, r))
                            } catch (e) {
                                throw console.error("get-key-error", n, e),
                                e
                            }
                        }
                    },
                    has: function(e, n) {
                        return !t.options.module || "params" !== n && "cb" !== n
                    }
                }),
                this.proxy.setTimeout = function(e, n) {
                    for (var r = [], o = 2; o < arguments.length; o++)
                        r[o - 2] = arguments[o];
                    if (t.hasDisposed)
                        return 0;
                    var a = m.apply(void 0, d([e, n], r, !1));
                    return t.timeoutList.push(a),
                    a
                }
                ,
                this.proxy.clearTimeout = function(e) {
                    var n = t.timeoutList.indexOf(e);
                    return -1 !== n && t.timeoutList.splice(n, 1),
                    h(e)
                }
                ,
                this.proxy.setInterval = function(e, n) {
                    for (var r = [], o = 2; o < arguments.length; o++)
                        r[o - 2] = arguments[o];
                    if (t.hasDisposed)
                        return 0;
                    var a = p.apply(void 0, d([e, n], r, !1));
                    return t.intervalList.push(a),
                    a
                }
                ,
                this.proxy.clearInterval = function(e) {
                    var n = t.intervalList.indexOf(e);
                    return -1 !== n && t.intervalList.splice(n, 1),
                    f(e)
                }
                ,
                g.proxy = this.proxy
            }
            return e.prototype.compile = function(e) {
                if (this.hasDisposed)
                    throw new Error("sandbox has been destroyed");
                var t, n = this.options.module;
                t = n ? function(e) {
                    return "(\n                function(window, params, cb) {\n                    with(window) {\n                        return (".concat(e, ")(...params, cb)\n                    }\n                }\n            )")
                }(e) : function(e) {
                    return "(\n                function(window) {\n                    with(window){\n                        ".concat(e, "\n                    } \n                }\n            ).bind(window.proxy)\n        ")
                }(e);
                var r = g.eval("".concat(t, ";//@ sourceURL=sandbox-code.js"));
                return {
                    run: function(e, t) {
                        try {
                            return n ? r(window.proxy, e, t) : r(window.proxy)
                        } catch (e) {
                            throw console.error("js sandbox error occur:", e),
                            e
                        }
                    }
                }
            }
            ,
            e.prototype.dispose = function() {
                this.timeoutList.forEach((function(e) {
                    window.clearTimeout(e)
                }
                )),
                this.timeoutList = [],
                this.intervalList.forEach((function(e) {
                    return f(e)
                }
                )),
                this.intervalList = [],
                this.fakeWindow = x(),
                this.options = {},
                delete g.proxy,
                this.hasDisposed = !0,
                console.log("Sandbox was successfully destroyed")
            }
            ,
            e
        }();
        var _ = function() {
            return _ = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            _.apply(this, arguments)
        }
          , S = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, a) {
                function i(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function l(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , j = function(e, t) {
            var n, r, o, a, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function l(l) {
                return function(c) {
                    return function(l) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a && (a = 0,
                        l[0] && (i = 0)),
                        i; )
                            try {
                                if (n = 1,
                                r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, l[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (l = [2 & l[0], o.value]),
                                l[0]) {
                                case 0:
                                case 1:
                                    o = l;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = l[1],
                                    l = [0];
                                    continue;
                                case 7:
                                    l = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                        i.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = l;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(l);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                l = t.call(e, i)
                            } catch (e) {
                                l = [6, e],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & l[0])
                            throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }([l, c])
                }
            }
        }
          , O = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, a = t.length; o < a; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
          , Z = window._mybricks_render_web.render
          , k = new function(e) {
            var t = e.fileId
              , n = this;
            this.fileId = "",
            this.getFileKeyTemplate = function(e) {
                return "--preview-".concat(e, "-")
            }
            ,
            this.savePreviewPageData = function(e) {
                var t = e.dumpJson
                  , r = e.comlibs
                  , o = e.hasPermissionFn
                  , a = e.executeEnv
                  , i = e.appConfig
                  , l = e.envList;
                sessionStorage.setItem("--preview-".concat(n.fileId, "-"), JSON.stringify(t)),
                sessionStorage.setItem("--preview--comlibs--".concat(n.fileId, "-"), JSON.stringify(r)),
                sessionStorage.setItem("--preview--hasPermissionFn--".concat(n.fileId, "-"), o),
                sessionStorage.setItem("--preview--executeEnv--".concat(n.fileId, "-"), a),
                sessionStorage.setItem("--preview--appConfig--".concat(n.fileId, "-"), i),
                sessionStorage.setItem("--preview--envList--".concat(n.fileId, "-"), JSON.stringify(l))
            }
            ,
            this.getPreviewPageData = function() {
                var e, t = sessionStorage.getItem("--preview-".concat(n.fileId, "-")), r = sessionStorage.getItem("--preview--comlibs--".concat(n.fileId, "-")), o = sessionStorage.getItem("--preview--hasPermissionFn--".concat(n.fileId, "-")), a = sessionStorage.getItem("--preview--executeEnv--".concat(n.fileId, "-")), i = [];
                try {
                    t = JSON.parse(t)
                } catch (e) {
                    throw e
                }
                try {
                    e = JSON.parse(sessionStorage.getItem("--preview--appConfig--".concat(n.fileId, "-")))
                } catch (e) {
                    throw e
                }
                try {
                    i = JSON.parse(sessionStorage.getItem("--preview--envList--".concat(n.fileId, "-")))
                } catch (e) {
                    throw e
                }
                try {
                    r = JSON.parse(r)
                } catch (e) {}
                return {
                    dumpJson: t,
                    comlibs: r,
                    hasPermissionFn: o,
                    executeEnv: a,
                    appConfig: e,
                    envList: i
                }
            }
            ,
            this.fileId = t
        }
        ({
            fileId: (0,
            u.Wz)("fileId")
        }).getPreviewPageData()
          , A = k.dumpJson
          , C = k.comlibs
          , N = k.hasPermissionFn
          , P = k.executeEnv
          , R = k.appConfig
          , L = k.envList
          , T = new Promise((function(e, t) {
            var r = R.plugins
              , o = (void 0 === r ? [] : r).find((function(e) {
                return "connector" === (null == e ? void 0 : e.type)
            }
            ));
            if (!o)
                return e(!1);
            if (!o.runtimeUrl)
                return n.message.error("插件【".concat(o, "】没有设置runtime地址")),
                e(!1);
            var a = document.createElement("script");
            a.src = o.runtimeUrl,
            a.onload = function() {
                e(!0)
            }
            ,
            a.onerror = function() {
                return n.message.error("插件【".concat(o, "】加载失败")),
                e(!1)
            }
            ,
            document.body.appendChild(a)
        }
        ));
        if (!A)
            throw new Error("数据错误：项目数据缺失");
        !function(e) {
            var t, n, r = null === (n = null === (t = null == e ? void 0 : e.plugins) || void 0 === t ? void 0 : t["@mybricks/plugins/theme/use"]) || void 0 === n ? void 0 : n.themes;
            Array.isArray(r) && r.forEach((function(e) {
                var t = e.namespace
                  , n = e.content
                  , r = null == n ? void 0 : n.variables;
                if (Array.isArray(r)) {
                    var o = document.createElement("style");
                    o.id = t;
                    var a = "";
                    r.forEach((function(e) {
                        var t = e.configs;
                        Array.isArray(t) && t.forEach((function(e) {
                            var t = e.key
                              , n = e.value;
                            a += "".concat(t, ": ").concat(n, ";\n")
                        }
                        ))
                    }
                    )),
                    o.innerHTML = ":root {\n".concat(a, "}"),
                    document.body.appendChild(o)
                }
            }
            ))
        }(A),
        C || (console.warn("数据错误: 组件库缺失"),
        C = ["https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7632_1.2.72/2023-08-28_16-50-20/rt.js", "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/5952_1.0.1/2023-07-25_22-02-32/rt.js", "https://f2.eckwai.com/kos/nlav12333/fangzhou/pub/comlibs/7182_1.0.29/2023-07-25_22-04-55/rt.js"]);
        var I = function(e) {
            var t = document.createElement("script");
            return t.setAttribute("src", e),
            new Promise((function(e, n) {
                t.onload = e,
                document.body.appendChild(t)
            }
            ))
        }
          , U = function() {
            var e = {}
              , t = function(n) {
                n.forEach((function(n) {
                    n.comAray ? t(n.comAray) : e["".concat(n.namespace, "-").concat(n.version)] = n
                }
                ))
            };
            return O(O([], window.__comlibs_edit_ || [], !0), window.__comlibs_rt_ || [], !0).forEach((function(e) {
                var n = e.comAray;
                n && Array.isArray(n) && t(n)
            }
            )),
            e
        };
        function z(e) {
            var n = e.container;
            C && Array.isArray(C) && Promise.all(C.map((function(e) {
                return I(e)
            }
            ))).then((function() {
                t().render(React.createElement(W, {
                    props: e,
                    hasPermissionFn: N
                }), n ? n.querySelector("#root") : document.querySelector("#root"))
            }
            ))
        }
        function M() {
            return S(this, void 0, void 0, (function() {
                return j(this, (function(e) {
                    return console.log("react app bootstraped"),
                    [2]
                }
                ))
            }
            ))
        }
        function V(e) {
            return S(this, void 0, void 0, (function() {
                return j(this, (function(t) {
                    return z(e),
                    [2]
                }
                ))
            }
            ))
        }
        function q(e) {
            return S(this, void 0, void 0, (function() {
                var n;
                return j(this, (function(r) {
                    return n = e.container,
                    t().unmountComponentAtNode(n ? n.querySelector("#root") : document.querySelector("#root")),
                    [2]
                }
                ))
            }
            ))
        }
        function D(e) {
            try {
                return decodeURIComponent(e)
            } catch (e) {}
            return e
        }
        function W(e) {
            var t = e.props
              , r = e.hasPermissionFn;
            return React.createElement(n.ConfigProvider, {
                locale: l
            }, Z(A, {
                env: {
                    renderCom: function(e, t, n) {
                        return Z(e, _(_({
                            comDefs: _(_({}, U()), n)
                        }, t || {}), {
                            env: _(_({}, (null == t ? void 0 : t.env) || {}), {
                                edit: !1,
                                runtime: !0
                            }),
                            callDomainModel: function(e, t, n) {
                                return (0,
                                s.call)(e, n, {
                                    action: t
                                })
                            },
                            callConnector: function(e, t) {
                                return S(this, void 0, void 0, (function() {
                                    var n;
                                    return j(this, (function(r) {
                                        switch (r.label) {
                                        case 0:
                                            return [4, T];
                                        case 1:
                                            return r.sent(),
                                            (n = window[e.connectorName] || window["@mybricks/plugins/service"]) ? [2, n.call(_(_({}, e), {
                                                useProxy: !0
                                            }), t, {
                                                before: "@mybricks/plugins/service" === e.connectorName ? function(e) {
                                                    return _(_({}, e), {
                                                        url: (0,
                                                        u.kU)(L, P, e.url)
                                                    })
                                                }
                                                : void 0
                                            })] : [2, Promise.reject("错误的连接器类型.")]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }))
                    },
                    i18n: function(e) {
                        return e
                    },
                    callDomainModel: function(e, t, n) {
                        return (0,
                        s.call)(e, n, {
                            action: t
                        })
                    },
                    callConnector: function(e, t) {
                        return S(this, void 0, void 0, (function() {
                            var n, r;
                            return j(this, (function(o) {
                                switch (o.label) {
                                case 0:
                                    return [4, T];
                                case 1:
                                    return o.sent(),
                                    (n = window[e.connectorName] || window["@mybricks/plugins/service"]) ? [2, (r = e.script ? e : (A.plugins[e.connectorName] || []).find((function(t) {
                                        return t.id === e.id
                                    }
                                    ))) ? n.call(_(_(_({}, e), r), {
                                        executeEnv: P,
                                        useProxy: !0
                                    }), t, {
                                        before: "@mybricks/plugins/service" === e.connectorName ? function(e) {
                                            return _(_({}, e), {
                                                url: (0,
                                                u.kU)(L, P, e.url)
                                            })
                                        }
                                        : void 0
                                    }) : Promise.reject("找不到对应连接器 Script 执行脚本.")] : [2, Promise.reject("错误的连接器类型.")]
                                }
                            }
                            ))
                        }
                        ))
                    },
                    vars: {
                        get getExecuteEnv() {
                            return function() {
                                return P
                            }
                        },
                        getQuery: function() {
                            return e = location.search,
                            t = {},
                            (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach((function(e) {
                                var n = e.replace(/\+/g, " ").split("=")
                                  , r = D(n.shift())
                                  , o = n.length > 0 ? D(n.join("=")) : null;
                                void 0 === t[r] ? t[r] = o : Array.isArray(t[r]) ? t[r].push(o) : t[r] = [t[r], o]
                            }
                            )),
                            t) : t;
                            var e, t
                        },
                        get getProps() {
                            return function() {
                                if (t)
                                    return t
                            }
                        },
                        get getRouter() {
                            return function() {
                                return {
                                    reload: function() {
                                        return location.reload()
                                    },
                                    redirect: function(e) {
                                        var t = e.url;
                                        return location.replace(t)
                                    },
                                    back: function() {
                                        return history.back()
                                    },
                                    forward: function() {
                                        return history.forward()
                                    },
                                    pushState: function(e) {
                                        var t = e.state
                                          , n = e.title
                                          , r = e.url;
                                        !function(e) {
                                            return /^http[s]?:\/\/([\w\-\.]+)+[\w-]*([\w\-\.\/\?%&=]+)?$/gi.test(e)
                                        }(r) ? history.pushState(t, n, r) : location.href = r
                                    },
                                    openTab: function(e) {
                                        var t = e.url
                                          , n = e.title;
                                        return open(t, n || "_blank")
                                    }
                                }
                            }
                        }
                    },
                    get hasPermission() {
                        return function(e) {
                            var t, n = e.permission, o = e.key;
                            if (!r)
                                return !0;
                            var a, i = (null === (t = null == n ? void 0 : n.register) || void 0 === t ? void 0 : t.code) || o;
                            try {
                                a = function(e, t, n) {
                                    var r, o = {}, a = o.env, i = o.callback, l = void 0 === i ? function() {}
                                    : i, c = (null == a ? void 0 : a.runtime) && !(null === (r = null == a ? void 0 : a.runtime) || void 0 === r ? void 0 : r.debug);
                                    "object" == typeof e && (e = c && (null == e ? void 0 : e.transformCode) || (null == e ? void 0 : e.code));
                                    var s = null;
                                    if (t && t.length) {
                                        var u = new E({
                                            module: !0
                                        })
                                          , d = decodeURIComponent(e);
                                        s = /export\s+default.*async.*function.*\(/g.test(d) ? u.compile("".concat(d.replace(/export\s+default.*function.*\(/g, "async function _RT_("))) : u.compile("".concat(d.replace(/export\s+default.*function.*\(/g, "function _RT_(")))
                                    } else
                                        s = (u = new E).compile("".concat(decodeURIComponent(e)));
                                    return s.run(t, l)
                                }(decodeURIComponent(r), [{
                                    key: i
                                }]),
                                "boolean" != typeof a && (a = !0,
                                console.warn("权限方法返回值类型应为 Boolean 请检查，[key] ".concat(i, "; [返回值] type: ").concat(typeof a, "; value: ").concat(JSON.stringify(a))))
                            } catch (e) {
                                a = !0,
                                console.error("权限方法出错 [key] ".concat(i, "；"), e)
                            }
                            return a
                        }
                    }
                },
                events: [{
                    type: "jump",
                    title: "跳转到",
                    exe: function(e) {
                        var t = e.options.page;
                        t && (window.location.href = t)
                    },
                    options: [{
                        id: "page",
                        title: "页面",
                        editor: "textarea"
                    }]
                }]
            }))
        }
        window.__POWERED_BY_QIANKUN__ || z({})
    }
    )(),
    __webpack_exports__
}
)()));
