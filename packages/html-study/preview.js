(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["preview"] = factory(require("React"), require("ReactDOM"));
	else
		root["preview"] = factory(root["React"], root["ReactDOM"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mybricks/plugin-connector-http/runtime/plugin.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mybricks/plugin-connector-http/runtime/plugin.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! For license information please see plugin.js.LICENSE.txt */
!function (t, e) {
   true ? module.exports = e(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-dom */ "react-dom")) : 0;
}(this, (__WEBPACK_EXTERNAL_MODULE__8156__, __WEBPACK_EXTERNAL_MODULE__7111__) => (() => {
  var __webpack_modules__ = {
      1194: function (t, e, n) {
        var r;
        r = t => (() => {
          "use strict";

          var e = {
              252: (t, e, n) => {
                n.d(e, {
                  Z: () => b
                });
                var r = n(359),
                  i = n.n(r),
                  o = n(62),
                  a = n(603),
                  l = n(95),
                  c = n(631),
                  u = n(905);
                function s(t) {
                  return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                  } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }, s(t);
                }
                function p() {
                  p = function () {
                    return t;
                  };
                  var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";
                  function l(t, e, n) {
                    return Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }), t[e];
                  }
                  try {
                    l({}, "");
                  } catch (t) {
                    l = function (t, e, n) {
                      return t[e] = n;
                    };
                  }
                  function c(t, e, n, r) {
                    var i = e && e.prototype instanceof f ? e : f,
                      o = Object.create(i.prototype),
                      a = new O(r || []);
                    return o._invoke = function (t, e, n) {
                      var r = "suspendedStart";
                      return function (i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                          if ("throw" === i) throw o;
                          return {
                            value: void 0,
                            done: !0
                          };
                        }
                        for (n.method = i, n.arg = o;;) {
                          var a = n.delegate;
                          if (a) {
                            var l = w(a, n);
                            if (l) {
                              if (l === d) continue;
                              return l;
                            }
                          }
                          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                          } else "return" === n.method && n.abrupt("return", n.arg);
                          r = "executing";
                          var c = u(t, e, n);
                          if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                              value: c.arg,
                              done: n.done
                            };
                          }
                          "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                        }
                      };
                    }(t, n, a), o;
                  }
                  function u(t, e, n) {
                    try {
                      return {
                        type: "normal",
                        arg: t.call(e, n)
                      };
                    } catch (t) {
                      return {
                        type: "throw",
                        arg: t
                      };
                    }
                  }
                  t.wrap = c;
                  var d = {};
                  function f() {}
                  function h() {}
                  function m() {}
                  var _ = {};
                  l(_, i, function () {
                    return this;
                  });
                  var g = Object.getPrototypeOf,
                    v = g && g(g(S([])));
                  v && v !== e && n.call(v, i) && (_ = v);
                  var y = m.prototype = f.prototype = Object.create(_);
                  function b(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                      l(t, e, function (t) {
                        return this._invoke(e, t);
                      });
                    });
                  }
                  function x(t, e) {
                    function r(i, o, a, l) {
                      var c = u(t[i], t, o);
                      if ("throw" !== c.type) {
                        var p = c.arg,
                          d = p.value;
                        return d && "object" == s(d) && n.call(d, "__await") ? e.resolve(d.__await).then(function (t) {
                          r("next", t, a, l);
                        }, function (t) {
                          r("throw", t, a, l);
                        }) : e.resolve(d).then(function (t) {
                          p.value = t, a(p);
                        }, function (t) {
                          return r("throw", t, a, l);
                        });
                      }
                      l(c.arg);
                    }
                    var i;
                    this._invoke = function (t, n) {
                      function o() {
                        return new e(function (e, i) {
                          r(t, n, e, i);
                        });
                      }
                      return i = i ? i.then(o, o) : o();
                    };
                  }
                  function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                      if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return d;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                      }
                      return d;
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, d;
                    var i = r.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d);
                  }
                  function E(t) {
                    var e = {
                      tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                  }
                  function Z(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                  }
                  function O(t) {
                    this.tryEntries = [{
                      tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0);
                  }
                  function S(t) {
                    if (t) {
                      var e = t[i];
                      if (e) return e.call(t);
                      if ("function" == typeof t.next) return t;
                      if (!isNaN(t.length)) {
                        var r = -1,
                          o = function e() {
                            for (; ++r < t.length;) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                          };
                        return o.next = o;
                      }
                    }
                    return {
                      next: j
                    };
                  }
                  function j() {
                    return {
                      value: void 0,
                      done: !0
                    };
                  }
                  return h.prototype = m, l(y, "constructor", m), l(m, "constructor", h), h.displayName = l(m, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
                  }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, l(t, a, "GeneratorFunction")), t.prototype = Object.create(y), t;
                  }, t.awrap = function (t) {
                    return {
                      __await: t
                    };
                  }, b(x.prototype), l(x.prototype, o, function () {
                    return this;
                  }), t.AsyncIterator = x, t.async = function (e, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(c(e, n, r, i), o);
                    return t.isGeneratorFunction(n) ? a : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
                  }, b(y), l(y, a, "Generator"), l(y, i, function () {
                    return this;
                  }), l(y, "toString", function () {
                    return "[object Generator]";
                  }), t.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(), function n() {
                      for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n;
                      }
                      return n.done = !0, n;
                    };
                  }, t.values = S, O.prototype = {
                    constructor: O,
                    reset: function (t) {
                      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(Z), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function () {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type) throw t.arg;
                      return this.rval;
                    },
                    dispatchException: function (t) {
                      if (this.done) throw t;
                      var e = this;
                      function r(n, r) {
                        return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r;
                      }
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                          a = o.completion;
                        if ("root" === o.tryLoc) return r("end");
                        if (o.tryLoc <= this.prev) {
                          var l = n.call(o, "catchLoc"),
                            c = n.call(o, "finallyLoc");
                          if (l && c) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                          } else if (l) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                          } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (t, e) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                          var o = i;
                          break;
                        }
                      }
                      o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                      var a = o ? o.completion : {};
                      return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a);
                    },
                    complete: function (t, e) {
                      if ("throw" === t.type) throw t.arg;
                      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
                    },
                    finish: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), Z(n), d;
                      }
                    },
                    catch: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                          var r = n.completion;
                          if ("throw" === r.type) {
                            var i = r.arg;
                            Z(n);
                          }
                          return i;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (t, e, n) {
                      return this.delegate = {
                        iterator: S(t),
                        resultName: e,
                        nextLoc: n
                      }, "next" === this.method && (this.arg = void 0), d;
                    }
                  }, t;
                }
                function d(t, e, n, r, i, o, a) {
                  try {
                    var l = t[o](a),
                      c = l.value;
                  } catch (t) {
                    return void n(t);
                  }
                  l.done ? e(c) : Promise.resolve(c).then(r, i);
                }
                function f(t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                  }
                  return n;
                }
                function h(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach(function (e) {
                      m(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                  }
                  return t;
                }
                function m(t, e, n) {
                  return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : t[e] = n, t;
                }
                function _(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                  return r;
                }
                var g = {
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
                  },
                  v = function (t, e) {
                    return t.fnParams ? "".concat(l.Y7).concat(e, "}") : e;
                  },
                  y = function (t, e) {
                    return t.fnParams ? e.replace("".concat(l.Y7, "\n"), "").slice(0, -3) : /export\s+default.*function.*\(/g.test(e) ? e : e.slice(0, -2);
                  };
                const b = function (t) {
                  var e,
                    n = function (t) {
                      if (Array.isArray(t)) return t;
                    }(e = (0, r.useState)(!1)) || function (t, e) {
                      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                      if (null != n) {
                        var r,
                          i,
                          o = [],
                          a = !0,
                          l = !1;
                        try {
                          for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), 2 !== o.length); a = !0);
                        } catch (t) {
                          l = !0, i = t;
                        } finally {
                          try {
                            a || null == n.return || n.return();
                          } finally {
                            if (l) throw i;
                          }
                        }
                        return o;
                      }
                    }(e) || function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return _(t, 2);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, 2) : void 0;
                      }
                    }(e) || function () {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }(),
                    s = n[0],
                    f = n[1],
                    m = (0, r.useRef)(),
                    b = (0, r.useRef)(),
                    x = (0, r.useRef)(),
                    w = (0, r.useRef)(),
                    E = (0, r.useRef)(),
                    Z = (0, r.useRef)(),
                    O = (0, r.useRef)(),
                    S = (0, r.useRef)(),
                    j = h(h(h({}, g), t), {}, {
                      suggestions: void 0
                    }),
                    k = j.suggestions,
                    N = void 0 === k ? {} : k,
                    A = j.extraLib,
                    C = void 0 === A ? "" : A,
                    L = j.useExtraLib,
                    M = j.schema,
                    T = (0, r.useCallback)(function () {
                      var t,
                        e = (t = p().mark(function t(e) {
                          var n, r;
                          return p().wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, a.aW)(l.wN.standalone, "prettier");
                              case 2:
                                return n = t.sent, t.next = 5, (0, a.aW)(l.wN.babel);
                              case 5:
                                return r = n.format(v(j, e.getValue()), {
                                  parser: "babel",
                                  plugins: window.prettierPlugins,
                                  singleQuote: !0
                                }), t.abrupt("return", [{
                                  range: e.getFullModelRange(),
                                  text: y(j, r)
                                }]);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                          }, t);
                        }), function () {
                          var e = this,
                            n = arguments;
                          return new Promise(function (r, i) {
                            var o = t.apply(e, n);
                            function a(t) {
                              d(o, r, i, a, l, "next", t);
                            }
                            function l(t) {
                              d(o, r, i, a, l, "throw", t);
                            }
                            a(void 0);
                          });
                        });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }(), []),
                    R = (0, r.useCallback)(function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "javascript",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = t.languages.registerCompletionItemProvider(e, {
                          triggerCharacters: ["."],
                          provideCompletionItems: function (e, i, o) {
                            var a = new t.Range(i.lineNumber, i.column - 26, i.lineNumber, i.column),
                              l = e.getValueInRange(a),
                              c = [];
                            if ("." === o.triggerCharacter) {
                              var u = Object.keys(n);
                              r && u.forEach(function (t) {
                                new RegExp("".concat(t, "\\[\\d+\\]")).test(l.slice(0, -1)) && n[t].forEach(function (t) {
                                  c.push({
                                    label: t.label,
                                    insertText: t.value || t.label,
                                    kind: t.kind || 0,
                                    detail: t.detail
                                  });
                                });
                              }), u.forEach(function (t) {
                                l.slice(0, -1).endsWith(t) && n[t].forEach(function (t) {
                                  c.push({
                                    label: t.label,
                                    insertText: t.value || t.label,
                                    kind: t.kind || 0,
                                    detail: t.detail
                                  });
                                });
                              });
                            }
                            return {
                              suggestions: c
                            };
                          }
                        });
                      return i;
                    }, []),
                    P = (0, r.useCallback)(function (t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "javascript";
                      t.languages.registerCompletionItemProvider(e, {
                        triggerCharacters: ["."],
                        provideCompletionItems: function (e, n, r) {
                          var i = new t.Range(n.lineNumber, n.column - 26, n.lineNumber, n.column),
                            o = e.getValueInRange(i),
                            a = [];
                          return l.c1.forEach(function (t) {
                            o.slice(0, -1).endsWith(t) && c.Z[t].forEach(function (t) {
                              a.push({
                                label: t.label,
                                insertText: t.value || t.label,
                                kind: t.kind,
                                detail: t.detail
                              });
                            });
                          }), {
                            suggestions: a
                          };
                        }
                      });
                    }, [N]),
                    I = (0, r.useCallback)(function (t) {
                      t.languages.registerDocumentFormattingEditProvider("javascript", {
                        provideDocumentFormattingEdits: T
                      });
                    }, []),
                    F = ((0, r.useCallback)(function (t) {
                      t.languages.registerOnTypeFormattingEditProvider("javascript", {
                        provideOnTypeFormattingEdits: T
                      });
                    }, []), (0, r.useCallback)(function () {
                      var e = b.current.editor.create(m.current, j);
                      x.current = e, t.onMounted && t.onMounted(e, b.current, m.current), f(!0);
                    }, [])),
                    D = (0, r.useCallback)(function (t) {
                      t.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                        noSemanticValidation: !0,
                        noSyntaxValidation: !1
                      }), t.languages.typescript.javascriptDefaults.setCompilerOptions({
                        target: t.languages.typescript.ScriptTarget.ES6,
                        allowNonTsExtensions: !0,
                        noImplicitAny: !0,
                        strict: !0
                      }), C || P(t), I(t), queueMicrotask(function () {
                        (0, a.aW)(l.wN.standalone, "prettier"), (0, a.aW)(l.wN.babel);
                      }), C && (E.current = t.languages.typescript.javascriptDefaults.addExtraLib(C, "ts:filename/facts.d.ts"));
                    }, []);
                  (0, r.useEffect)(function () {
                    var e = o.S(t.env, D);
                    return e.then(function (t) {
                      var e = t.monaco,
                        n = t.define;
                      (0, a.aW)(l.Cb, "eslint").then(function (t) {
                        Z.current = new t.Linter();
                      }), b.current = e, window.define = n, (0, a.cM)("define.amd:", n.amd), F();
                    }).catch(function () {}), function () {
                      x.current ? x.current.dispose() : e.cancel();
                    };
                  }, []);
                  var z = (0, r.useCallback)(function (e, n) {
                    t.onChange && t.onChange(e, n);
                  }, []);
                  return (0, r.useEffect)(function () {
                    x.current && x.current.getValue() !== t.value && x.current.setValue(t.value);
                  }, [t.value]), (0, r.useEffect)(function () {
                    if (s) {
                      var t = x.current,
                        e = b.current,
                        n = t.getModel();
                      t.addCommand(e.KeyMod.CtrlCmd | e.KeyCode.KeyS, function () {
                        z(t.getValue(), null);
                      });
                      var r = t.onDidChangeModelContent(function (r) {
                        if ("javascript" === j.language) {
                          var i = Z.current.verify(t.getValue(), h({
                            env: {
                              browser: !0,
                              es6: !0
                            },
                            parserOptions: {
                              ecmaVersion: 2018,
                              sourceType: "module"
                            }
                          }, j.eslint)).map(function (t) {
                            var e = t.line,
                              n = t.column,
                              r = t.message;
                            return {
                              startLineNumber: e,
                              endLineNumber: e,
                              startColumn: n,
                              endColumn: n,
                              message: "".concat(r),
                              severity: 3
                            };
                          });
                          e.editor.setModelMarkers(n, "ESlint", i);
                        }
                        j.autoSave && z(t.getValue(), r);
                      });
                      return function () {
                        var e;
                        r.dispose(), t.dispose(), null === (e = w.current) || void 0 === e || e.dispose();
                      };
                    }
                  }, [s]), (0, r.useEffect)(function () {
                    var t;
                    if (s && M) {
                      if ("object" === M.type) {
                        var e = {};
                        !function t(e) {
                          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inputValue",
                            r = arguments.length > 2 ? arguments[2] : void 0;
                          if (e) {
                            var i = e.properties;
                            i && Object.keys(i).forEach(function (e) {
                              r[n] = r[n] || [], r[n].push({
                                label: e,
                                value: e,
                                detail: i[e].title
                              }), t(i[e], "".concat(n, ".").concat(e), r);
                            });
                          }
                        }(M, void 0, e);
                        var n = R(b.current, "javascript", e);
                        O.current = n;
                      } else if (M.type = "object" === (null === (t = M.items) || void 0 === t ? void 0 : t.type)) {
                        var r = {},
                          i = M.items.properties;
                        r.inputValue = Object.keys(i).map(function (t) {
                          return {
                            label: t,
                            value: t,
                            detail: i[t].title
                          };
                        });
                        var o = R(b.current, "javascript", r, !0);
                        O.current = o;
                      }
                      return function () {
                        var t;
                        null === (t = O.current) || void 0 === t || t.dispose();
                      };
                    }
                  }, []), (0, r.useEffect)(function () {
                    if (s && Object.keys(N).length) {
                      var t = R(b.current, "javascript", N);
                      return S.current = t, function () {
                        var t;
                        null === (t = S.current) || void 0 === t || t.dispose();
                      };
                    }
                  }, [s, N]), (0, r.useEffect)(function () {
                    var t;
                    s && L && (null === (t = E.current) || void 0 === t || t.dispose(), E.current = b.current.languages.typescript.javascriptDefaults.addExtraLib("".concat(C, "\n").concat(null != N && N.context ? "" : u.O), "ts:filename/facts.d.ts"));
                  }, [s, C, M]), (0, a.cM)("[monaco editor] props:", t), i().createElement("div", {
                    ref: m,
                    className: j.className,
                    onBlur: t.onBlur,
                    onFocus: t.onFocus,
                    style: {
                      width: j.width,
                      height: j.height,
                      minHeight: j.minHeight
                    }
                  });
                };
              },
              905: (t, e, n) => {
                n.d(e, {
                  O: () => r
                });
                var r = "\ndeclare var context: {\n  /** \n* 获取地址栏query参数\n */\n  static getQuery(): {[key]: string};\n  /** \n* 获取主应用透传的用户信息\n */\n  static getUserInfo(): {[key]: string};\n  /** \n* 权限校验方法\n */\n  static hasPermission(): boolean;\n  /** \n* 通用工具方法\n */\n  static utils: {\n    /** \n* 获取地址栏参数 */\n    static getParams(): {[key]: string};\n    /** \n* 获取cookie */\n    static getCookies(): {[key]: string};\n    /** \n* 将时间进行格式化 */\n    static moment(params?: any): any;\n    [key: string]: any;\n  }\n}\n";
              },
              62: (t, e, n) => {
                n.d(e, {
                  S: () => u
                });
                var r,
                  i = n(95),
                  o = n(603);
                !function (t) {
                  t[t.CANCEL = 0] = "CANCEL", t[t.CONTINUE = 1] = "CONTINUE";
                }(r || (r = {}));
                var a = {
                    isInitialized: !1
                  },
                  l = new Promise(function (t) {
                    a.resolve = t;
                  });
                function c(t) {
                  var e = r.CONTINUE,
                    n = new Promise(function (n, i) {
                      t.then(function (t) {
                        return e === r.CANCEL ? i("cancel load") : n(t);
                      });
                    });
                  return n.cancel = function () {
                    e = r.CANCEL;
                  }, n;
                }
                function u(t, e) {
                  if (!a.isInitialized) {
                    if (window.monaco && window.monaco.editor) return c(Promise.resolve({
                      monaco: window.monaco,
                      define: a.define || window.define
                    }));
                    window["_monaco-env-config"] = t, (0, o.ve)(i.d2, function () {
                      window.require.config({
                        paths: i.Hb
                      }), window.require(["vs/editor/editor.main"], function (t) {
                        window.define.amd = void 0, a.define = a.define || window.define, e(t), a.resolve({
                          monaco: t,
                          define: a.define
                        });
                      });
                    }), a.isInitialized = !0;
                  }
                  return c(l);
                }
              },
              631: (t, e, n) => {
                n.d(e, {
                  Z: () => r
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
                };
              },
              95: (t, e, n) => {
                n.d(e, {
                  Cb: () => o,
                  Hb: () => i,
                  Y7: () => c,
                  c1: () => l,
                  d2: () => r,
                  wN: () => a
                });
                var r = "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/monaco-editor/0.33.0/min/loader.min.js",
                  i = {
                    vs: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/monaco-editor/0.33.0/min/vs"
                  },
                  o = "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/eslint/8.15.0/eslint.js",
                  a = {
                    standalone: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/prettier/2.6.2/standalone.js",
                    babel: "https://f2.eckwai.com/udata/pkg/eshop/fangzhou/pub/pkg/prettier/2.6.2/parser-babel.js"
                  },
                  l = ["context", "model", "utils"],
                  c = "function RT() {";
              },
              603: (t, e, n) => {
                function r(t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document,
                    i = r.createElement("script"),
                    o = r.getElementsByTagName("head")[0];
                  i.type = "text/javascript", i.charset = "UTF-8", i.src = t, o.appendChild(i), i.addEventListener ? i.addEventListener("load", e, !1) : i.attachEvent && i.attachEvent("onreadystatechange", function () {
                    var t = n.event && n.event.srcElement;
                    t && "loaded" == t.readyState && e();
                  });
                }
                function i() {
                  var t;
                  location.search.includes("debug=true") && (t = console).log.apply(t, arguments);
                }
                n.d(e, {
                  aW: () => l,
                  cM: () => i,
                  ve: () => r
                });
                var o = {},
                  a = {};
                function l(t, e) {
                  return o[t] || (o[t] = {}), a[t] || (a[t] = new Promise(function (e) {
                    return o[t].resolve = e;
                  })), new Promise(function (n) {
                    return e && window[e] ? n(window[e]) : function (t) {
                      for (var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).getElementsByTagName("script"), n = 0; n < e.length; n++) if (e[n].src === t) return !0;
                      return !1;
                    }(t) ? a[t].then(function (t) {
                      n(t);
                    }) : void r(t, function () {
                      o[t].resolve(window[e]), n(window[e]);
                    });
                  });
                }
              },
              359: e => {
                e.exports = t;
              }
            },
            n = {};
          function r(t) {
            var i = n[t];
            if (void 0 !== i) return i.exports;
            var o = n[t] = {
              exports: {}
            };
            return e[t](o, o.exports, r), o.exports;
          }
          r.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return r.d(e, {
              a: e
            }), e;
          }, r.d = (t, e) => {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
              enumerable: !0,
              get: e[n]
            });
          }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            });
          };
          var i = {};
          return (() => {
            r.r(i), r.d(i, {
              default: () => t
            });
            const t = r(252).Z;
          })(), i;
        })(), t.exports = r(n(8156));
      },
      5619: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(8156),
          i = n.n(r),
          o = n(3976),
          a = function (t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
            }
            return n;
          };
        function l(t) {
          var e = t.children,
            n = a(t, ["children"]);
          return i().createElement("button", Object.assign({
            className: o.Z.btn
          }, n), i().createElement("span", null, e));
        }
      },
      8250: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => u
        });
        var r = n(8156),
          i = n.n(r),
          o = n(8502),
          a = n(9493);
        function l(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var c = function (t, e) {
          var n = {};
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
          }
          return n;
        };
        function u(t) {
          var e,
            n,
            u = t.children,
            s = t.defaultFold,
            p = void 0 === s || s,
            d = t.header,
            f = t.headerStyle,
            h = t.contentStyle,
            m = c(t, ["children", "defaultFold", "header", "headerStyle", "contentStyle"]),
            _ = (e = (0, r.useState)(p), n = 2, function (t) {
              if (Array.isArray(t)) return t;
            }(e) || function (t, e) {
              var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  l = [],
                  c = !0,
                  u = !1;
                try {
                  if (o = (n = n.call(t)).next, 0 === e) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
                } catch (t) {
                  u = !0, i = t;
                } finally {
                  try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                  } finally {
                    if (u) throw i;
                  }
                }
                return l;
              }
            }(e, n) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
              }
            }(e, n) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()),
            g = _[0],
            v = _[1],
            y = (0, r.useCallback)(function () {
              v(function (t) {
                return !t;
              });
            }, []);
          return i().createElement("div", Object.assign({
            className: o.Z.collapse
          }, m), i().createElement("div", {
            className: "".concat(o.Z.header),
            style: f,
            onClick: y
          }, i().createElement("div", {
            className: "".concat(o.Z.icon, " ").concat(g ? o.Z.fold : "")
          }, a.Dp), d), g ? null : i().createElement("div", {
            className: "".concat(o.Z.content),
            style: h
          }, u));
        }
      },
      6233: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(8156),
          i = n.n(r),
          o = n(1673);
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        const l = function (t) {
          var e,
            n,
            l = t.dropDownStyle,
            c = t.children,
            u = t.overlay,
            s = t.onBlur,
            p = (e = (0, r.useState)(!1), n = 2, function (t) {
              if (Array.isArray(t)) return t;
            }(e) || function (t, e) {
              var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  l = [],
                  c = !0,
                  u = !1;
                try {
                  if (o = (n = n.call(t)).next, 0 === e) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
                } catch (t) {
                  u = !0, i = t;
                } finally {
                  try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                  } finally {
                    if (u) throw i;
                  }
                }
                return l;
              }
            }(e, n) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
              }
            }(e, n) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()),
            d = p[0],
            f = p[1],
            h = (0, r.useCallback)(function (t) {
              t.stopPropagation(), f(function (t) {
                return !t;
              });
            }, []);
          return (0, r.useEffect)(function () {
            null == s || s(function () {
              return f(!1);
            });
          }, []), i().createElement("div", {
            className: o.Z.dropdown
          }, i().createElement("div", {
            onClick: h
          }, c), i().createElement("div", {
            style: l,
            className: o.Z.content
          }, d ? u : null));
        };
      },
      6017: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(8156),
          i = n.n(r),
          o = n(7762);
        function a(t) {
          var e = t.label,
            n = t.require,
            r = t.contentStyle,
            a = t.children;
          return i().createElement("div", {
            className: o.Z.item
          }, i().createElement("label", null, n ? i().createElement("i", null, "*") : null, e), i().createElement("div", {
            className: o.Z.content,
            style: r
          }, a));
        }
      },
      5132: (t, e, n) => {
        "use strict";

        n.d(e, {
          K: () => l,
          Z: () => a
        });
        var r = n(8156),
          i = n.n(r),
          o = n(2808);
        function a(t) {
          var e = t.defaultValue,
            n = t.onChange,
            r = t.onBlur,
            a = t.validateError,
            l = void 0 === a ? "" : a,
            c = t.placeholder,
            u = t.type,
            s = void 0 === u ? "input" : u;
          return i().createElement("div", {
            className: o.Z.input
          }, i().createElement("div", {
            className: "".concat(o.Z.editor, " ").concat(o.Z.textEdt, " ").concat(l ? o.Z.error : ""),
            "data-err": l
          }, "input" === s ? i().createElement("input", {
            key: e,
            defaultValue: e,
            placeholder: c,
            onBlur: r,
            onChange: n
          }) : i().createElement("textarea", {
            key: e,
            defaultValue: e,
            placeholder: c,
            onChange: n,
            onBlur: r
          })));
        }
        function l(t) {
          return a(Object.assign(Object.assign({}, t), {
            type: "textarea"
          }));
        }
      },
      5196: (t, e, n) => {
        "use strict";

        n.d(e, {
          I: () => s
        });
        var r = n(8156),
          i = n.n(r),
          o = n(7111),
          a = n(9493),
          l = n(393),
          c = null,
          u = null,
          s = function () {
            var t,
              e,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                type: "error",
                timeout: 2e3
              };
            (null === (e = null === (t = document.querySelector("div[data-id=plugin-panel]")) || void 0 === t ? void 0 : t.parentNode) || void 0 === e ? void 0 : e.parentNode) && (c && (c = document.querySelector("div[data-id=http-plugin-panel-message]")) || (c = document.createElement("div")).setAttribute("data-id", "http-plugin-panel-message"), document.body.appendChild(c), clearTimeout(u), (0, o.render)(i().createElement(p, {
              type: r.type,
              message: n
            }), c), u = setTimeout(function () {
              return (0, o.unmountComponentAtNode)(c);
            }, r.timeout || 2e3));
          },
          p = function (t) {
            var e = t.type,
              n = void 0 === e ? "error" : e,
              r = t.message;
            return r ? i().createElement("div", {
              className: l.Z.message
            }, "error" === n ? a.vU : null, "warning" === n ? a.Kp : null, "success" === n ? a.Vp : null, i().createElement("span", {
              className: l.Z.content
            }, r)) : null;
          };
      },
      957: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(8156),
          i = n.n(r),
          o = n(1436);
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function l(t) {
          var e,
            n,
            l = t.defaultChecked,
            c = void 0 !== l && l,
            u = t.onChange,
            s = (e = (0, r.useState)(c), n = 2, function (t) {
              if (Array.isArray(t)) return t;
            }(e) || function (t, e) {
              var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  l = [],
                  c = !0,
                  u = !1;
                try {
                  if (o = (n = n.call(t)).next, 0 === e) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
                } catch (t) {
                  u = !0, i = t;
                } finally {
                  try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                  } finally {
                    if (u) throw i;
                  }
                }
                return l;
              }
            }(e, n) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
              }
            }(e, n) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()),
            p = s[0],
            d = s[1],
            f = (0, r.useCallback)(function () {
              d(!p), null == u || u(!p);
            }, [p, u]);
          return i().createElement("div", {
            className: o.Z.ct
          }, i().createElement("button", {
            onClick: f,
            className: "".concat(o.Z.switch, " ").concat(p ? o.Z.checked : "")
          }, i().createElement("div", {
            className: o.Z.handle
          })));
        }
      },
      5525: (t, e, n) => {
        "use strict";

        n.d(e, {
          Aj: () => o,
          Cq: () => l,
          MK: () => r,
          Q1: () => a,
          Ys: () => i,
          iz: () => c
        });
        var r = "@mybricks/plugins/service",
          i = "export default function ({ params, data, headers, url, method }) {\n  // 设置请求query、请求体、请求头\n  return { params, data, headers, url, method };\n }\n",
          o = "export default function (result, { method, url, params, data, headers }) {\n  // return {\n  //  total: result.all,\n  //  dataSource: result.list.map({id, name} => ({\n  //     value:id, label: name\n  //  }))\n  // }\n  return result;\n}\n",
          a = "export default function ({ response, config }) {\n  // if (response.code !== 0) {\n  //    throw new Error(response.errMsg)\n  // }\n  return response\n}\n",
          l = {
            HTTP: "http",
            TG: "http-tg",
            KDEV: "http-kdev"
          },
          c = "global-setting";
      },
      4e3: (t, e, n) => {
        "use strict";

        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        n.d(e, {
          ZP: () => a,
          rR: () => o
        });
        var i = {
            connectors: [],
            pureConnectors: {}
          },
          o = function () {
            return i.pureConnectors;
          };
        const a = {
          init: function (t) {
            var e;
            i.connectors = function (t) {
              if (Array.isArray(t)) return r(t);
            }(e = t) || function (t) {
              if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(e) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
              }
            }(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          },
          initPureConnectors: function (t) {
            i.pureConnectors = t;
          },
          add: function (t) {
            i.connectors.push(t);
          },
          remove: function (t) {
            i.connectors = i.connectors.filter(function (e) {
              return e.id !== t;
            });
          },
          update: function (t) {
            var e = i.connectors.find(function (e) {
              return e.id === t.id;
            });
            e && Object.assign(e, t);
          },
          getConnectors: function () {
            return i.connectors;
          }
        };
      },
      3887: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = {
          connectors: []
        };
      },
      9493: (t, e, n) => {
        "use strict";

        n.d(e, {
          Dp: () => h,
          JG: () => s,
          Kp: () => _,
          LW: () => d,
          Od: () => c,
          PD: () => f,
          Qx: () => a,
          Vp: () => g,
          dK: () => p,
          eP: () => l,
          qv: () => o,
          t8: () => u,
          vU: () => m
        });
        var r = n(8156),
          i = n.n(r),
          o = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32"
          }, i().createElement("path", {
            d: "M764.41958 521.462537l37.594406-37.594405a202.037962 202.037962 0 0 0 59.588412-144.23976 169.302697 169.302697 0 0 0-53.45055-121.734266l-6.137862-6.137862a163.932068 163.932068 0 0 0-127.872128-53.962038 193.854146 193.854146 0 0 0-135.032967 60.0999l-38.105894 37.082917zM373.386613 254.977023l106.901099-102.297702a281.318681 281.318681 0 0 1 197.69031-84.13986 250.117882 250.117882 0 0 1 160.095904 53.962038l127.872128-122.501499L1022.977023 58.565435l-127.872128 127.872127a279.784216 279.784216 0 0 1-30.689311 360.599401l-100.251748 102.297702zM227.100899 530.157842a189.250749 189.250749 0 0 0-5.370629 265.718282l6.137862 6.137862a164.443556 164.443556 0 0 0 127.872128 53.706294 194.621379 194.621379 0 0 0 135.032967-59.844156l42.965035-43.476524L270.065934 486.937063zM0 967.224775l133.242757-139.892108a278.761239 278.761239 0 0 1 30.689311-360.343656L270.065934 359.064935l80.559441 81.070929L430.929071 359.064935l57.798202 58.053946L409.190809 498.701299l120.1998 120.967033 83.628372-83.884116 53.962038 55.496503-85.418581 85.93007 74.933066 75.444556-106.133866 106.901099a283.108891 283.108891 0 0 1-198.457542 84.651348 251.396603 251.396603 0 0 1-160.095904-53.706293L58.30969 1024z"
          })),
          a = i().createElement("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 1057 1024"
          }, i().createElement("path", {
            d: "M342.016 214.016l468.010667 297.984-468.010667 297.984 0-596.010667z"
          })),
          l = i().createElement("svg", {
            viewBox: "64 64 896 896",
            focusable: "false",
            "data-icon": "form",
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true"
          }, i().createElement("path", {
            d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
          }), i().createElement("path", {
            d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
          })),
          c = i().createElement("svg", {
            viewBox: "64 64 896 896",
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true"
          }, i().createElement("path", {
            d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
          })),
          u = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20"
          }, i().createElement("path", {
            d: "M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"
          })),
          s = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M853.333333 224h-53.333333V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667H170.666667C130.133333 96 96 130.133333 96 170.666667v554.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h53.333333V853.333333c0 40.533333 34.133333 74.666667 74.666667 74.666667h554.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V298.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667zM160 725.333333V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h554.666666c6.4 0 10.666667 4.266667 10.666667 10.666667v554.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667z m704 128c0 6.4-4.266667 10.666667-10.666667 10.666667H298.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-53.333333H725.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V288H853.333333c6.4 0 10.666667 4.266667 10.666667 10.666667v554.666666z"
          }), i().createElement("path", {
            d: "M576 416h-96V320c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H320c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V576c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H576c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
          })),
          p = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M290 236.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L169 160c-5.1-0.6-9.5 3.7-8.9 8.9L179 329.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zM642.7 423.7c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7L863.9 169c0.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4zM845 694.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L734 787.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L855 864c5.1 0.6 9.5-3.7 8.9-8.9L845 694.9zM381.3 600.3c-3.1-3.1-8.2-3.1-11.3 0L236.3 733.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L160.1 855c-0.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-0.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
          })),
          d = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"
          })),
          f = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
          }), i().createElement("path", {
            d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
          })),
          h = i().createElement("svg", {
            viewBox: "64 64 896 896",
            focusable: "false",
            "data-icon": "right",
            width: "16",
            height: "16",
            fill: "currentColor",
            "aria-hidden": "true"
          }, i().createElement("path", {
            d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
          })),
          m = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M721.877333 303.104a48.469333 48.469333 0 0 0-68.437333 0l-141.909333 141.909333-136.277334-136.234666a46.933333 46.933333 0 1 0-66.432 66.432l136.277334 136.277333-141.952 141.952a48.384 48.384 0 0 0 68.394666 68.352l141.952-141.909333 137.045334 137.002666a46.933333 46.933333 0 1 0 66.432-66.432l-137.045334-137.002666 141.952-141.952a48.469333 48.469333 0 0 0 0-68.394667M512 1024C229.248 1024 0 794.752 0 512 0 229.205333 229.248 0 512 0c282.794667 0 512 229.205333 512 512 0 282.752-229.205333 512-512 512",
            fill: "#FA5555"
          })),
          _ = i().createElement("svg", {
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16"
          }, i().createElement("path", {
            d: "M512 53.248c129.707008 3.412992 237.739008 48.299008 324.096 134.656S967.339008 382.292992 970.752 512c-3.412992 129.707008-48.299008 237.739008-134.656 324.096S641.707008 967.339008 512 970.752c-129.707008-3.412992-237.739008-48.299008-324.096-134.656S56.660992 641.707008 53.248 512c3.412992-129.707008 48.299008-237.739008 134.656-324.096S382.292992 56.660992 512 53.248z m0 196.608c-17.748992 0-32.427008 6.484992-44.032 19.456-11.604992 12.971008-16.724992 28.331008-15.36 46.08l23.552 262.144c1.364992 9.556992 5.291008 17.236992 11.776 23.04 6.484992 5.803008 14.507008 8.704 24.064 8.704s17.579008-2.900992 24.064-8.704c6.484992-5.803008 10.411008-13.483008 11.776-23.04l23.552-262.144c1.364992-17.748992-3.755008-33.108992-15.36-46.08-11.604992-12.971008-26.283008-19.456-44.032-19.456z m0 524.288c15.019008-0.683008 27.476992-5.803008 37.376-15.36 9.899008-9.556992 14.848-21.844992 14.848-36.864 0-15.019008-4.948992-27.476992-14.848-37.376-9.899008-9.899008-22.356992-14.848-37.376-14.848-15.019008 0-27.476992 4.948992-37.376 14.848-9.899008 9.899008-14.848 22.356992-14.848 37.376 0 15.019008 4.948992 27.307008 14.848 36.864 9.899008 9.556992 22.356992 14.676992 37.376 15.36z",
            fill: "#faad14"
          })),
          g = i().createElement("svg", {
            viewBox: "64 64 896 896",
            width: "1em",
            height: "1em",
            fill: "#52c41a",
            "aria-hidden": "true"
          }, i().createElement("path", {
            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
          }));
      },
      3194: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => j
        });
        var r = n(8156),
          i = n.n(r),
          o = n(6178),
          a = n(1194),
          l = n.n(a),
          c = n(4651),
          u = n(4469),
          s = n(167),
          p = n(4931),
          d = n(6017),
          f = n(8543),
          h = n(4113),
          m = n(5619),
          _ = n(5196),
          g = n(5525),
          v = n(2552);
        function y(t) {
          return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, y(t);
        }
        function b() {
          b = function () {
            return e;
          };
          var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = Object.defineProperty || function (t, e, n) {
              t[e] = n.value;
            },
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            l = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, e, n) {
            return Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e];
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, n) {
              return t[e] = n;
            };
          }
          function s(t, e, n, r) {
            var o = e && e.prototype instanceof g ? e : g,
              a = Object.create(o.prototype),
              l = new L(r || []);
            return i(a, "_invoke", {
              value: k(t, n, l)
            }), a;
          }
          function p(t, e, n) {
            try {
              return {
                type: "normal",
                arg: t.call(e, n)
              };
            } catch (t) {
              return {
                type: "throw",
                arg: t
              };
            }
          }
          e.wrap = s;
          var d = "suspendedStart",
            f = "suspendedYield",
            h = "executing",
            m = "completed",
            _ = {};
          function g() {}
          function v() {}
          function x() {}
          var w = {};
          u(w, a, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            Z = E && E(E(M([])));
          Z && Z !== n && r.call(Z, a) && (w = Z);
          var O = x.prototype = g.prototype = Object.create(w);
          function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function j(t, e) {
            function n(i, o, a, l) {
              var c = p(t[i], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  s = u.value;
                return s && "object" == y(s) && r.call(s, "__await") ? e.resolve(s.__await).then(function (t) {
                  n("next", t, a, l);
                }, function (t) {
                  n("throw", t, a, l);
                }) : e.resolve(s).then(function (t) {
                  u.value = t, a(u);
                }, function (t) {
                  return n("throw", t, a, l);
                });
              }
              l(c.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (t, r) {
                function i() {
                  return new e(function (e, i) {
                    n(t, r, e, i);
                  });
                }
                return o = o ? o.then(i, i) : i();
              }
            });
          }
          function k(e, n, r) {
            var i = d;
            return function (o, a) {
              if (i === h) throw new Error("Generator is already running");
              if (i === m) {
                if ("throw" === o) throw a;
                return {
                  value: t,
                  done: !0
                };
              }
              for (r.method = o, r.arg = a;;) {
                var l = r.delegate;
                if (l) {
                  var c = N(l, r);
                  if (c) {
                    if (c === _) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                  if (i === d) throw i = m, r.arg;
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = h;
                var u = p(e, n, r);
                if ("normal" === u.type) {
                  if (i = r.done ? m : f, u.arg === _) continue;
                  return {
                    value: u.arg,
                    done: r.done
                  };
                }
                "throw" === u.type && (i = m, r.method = "throw", r.arg = u.arg);
              }
            };
          }
          function N(e, n) {
            var r = n.method,
              i = e.iterator[r];
            if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, N(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), _;
            var o = p(i, e.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, _;
            var a = o.arg;
            return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, _) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, _);
          }
          function A(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
          }
          function L(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(A, this), this.reset(!0);
          }
          function M(e) {
            if (e || "" === e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < e.length;) if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                    return n.value = t, n.done = !0, n;
                  };
                return o.next = o;
              }
            }
            throw new TypeError(y(e) + " is not iterable");
          }
          return v.prototype = x, i(O, "constructor", {
            value: x,
            configurable: !0
          }), i(x, "constructor", {
            value: v,
            configurable: !0
          }), v.displayName = u(x, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
          }, e.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, u(t, c, "GeneratorFunction")), t.prototype = Object.create(O), t;
          }, e.awrap = function (t) {
            return {
              __await: t
            };
          }, S(j.prototype), u(j.prototype, l, function () {
            return this;
          }), e.AsyncIterator = j, e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new j(s(t, n, r, i), o);
            return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
          }, S(O), u(O, c, "Generator"), u(O, a, function () {
            return this;
          }), u(O, "toString", function () {
            return "[object Generator]";
          }), e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return n.reverse(), function t() {
              for (; n.length;) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t;
              }
              return t.done = !0, t;
            };
          }, e.values = M, L.prototype = {
            constructor: L,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return l.type = "throw", l.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  l = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(a);
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), _;
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), _;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return this.delegate = {
                iterator: M(e),
                resultName: n,
                nextLoc: r
              }, "next" === this.method && (this.arg = t), _;
            }
          }, e;
        }
        function x(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || w(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function w(t, e) {
          if (t) {
            if ("string" == typeof t) return E(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(t, e) : void 0;
          }
        }
        function E(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var Z = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                c(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function l(t) {
              try {
                c(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              var e;
              t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                t(e);
              })).then(a, l);
            }
            c((r = r.apply(t, e || [])).next());
          });
        };
        function O(t) {
          var e = t.data,
            n = "";
          try {
            n = JSON.stringify(e, null, 2);
          } catch (t) {
            console.log(t, "error");
          }
          return n ? i().createElement("div", {
            style: {
              marginLeft: 87
            }
          }, i().createElement("div", {
            className: v.Z.title
          }, "标记后的返回结果示例"), i().createElement(l(), {
            value: n,
            language: "json",
            env: {
              isNode: !1,
              isElectronRenderer: !1
            },
            readOnly: !0
          })) : null;
        }
        var S = i().createElement("svg", {
          viewBox: "0 0 1027 1024",
          width: "16",
          height: "16",
          fill: "currentColor"
        }, i().createElement("path", {
          d: "M321.828571 226.742857c-14.628571-14.628571-36.571429-14.628571-51.2 0L7.314286 482.742857c-14.628571 14.628571-14.628571 36.571429 0 51.2l256 256c14.628571 14.628571 36.571429 14.628571 51.2 0 14.628571-14.628571 14.628571-36.571429 0-51.2L87.771429 512l234.057142-234.057143c7.314286-14.628571 7.314286-36.571429 0-51.2z m263.314286 0c-14.628571 0-36.571429 7.314286-43.885714 29.257143l-131.657143 497.371429c-7.314286 21.942857 7.314286 36.571429 29.257143 43.885714s36.571429-7.314286 43.885714-29.257143l131.657143-497.371429c7.314286-14.628571-7.314286-36.571429-29.257143-43.885714z m431.542857 256l-256-256c-14.628571-14.628571-36.571429-14.628571-51.2 0-14.628571 14.628571-14.628571 36.571429 0 51.2L936.228571 512l-234.057142 234.057143c-14.628571 14.628571-14.628571 36.571429 0 51.2 14.628571 14.628571 36.571429 14.628571 51.2 0l256-256c14.628571-14.628571 14.628571-43.885714 7.314285-58.514286z"
        }));
        function j(t) {
          var e = this,
            n = t.sidebarContext,
            a = t.validate,
            l = t.globalConfig,
            y = x((0, r.useState)(n.formModel.resultSchema), 2),
            j = y[0],
            k = y[1],
            N = x((0, r.useState)(), 2),
            A = N[0],
            C = N[1],
            L = x((0, r.useState)(!1), 2),
            M = L[0],
            T = L[1],
            R = x((0, r.useState)(!1), 2),
            P = R[0],
            I = R[1],
            F = (0, r.useRef)(),
            D = (0, r.useRef)(null),
            z = (0, r.useRef)(null),
            B = x((0, r.useState)(""), 2),
            U = B[0],
            q = B[1],
            V = x((0, r.useState)(n.formModel.params), 2),
            K = V[0],
            J = V[1],
            G = x((0, r.useState)(!1), 2),
            H = G[0],
            Q = G[1];
          n.formModel.params = n.formModel.params || {
            type: "root",
            name: "root",
            children: []
          }, (0, r.useEffect)(function () {
            k(n.formModel.resultSchema);
          }, [n.formModel.resultSchema]);
          var W = (0, r.useCallback)(function (t) {
              if (void 0 !== t) {
                var e = (0, o.Sm)(t || []),
                  r = (0, o.HD)(e);
                (0, o.rq)(r), n.formModel.inputSchema = r, n.formModel.params = t, J(t);
              }
            }, []),
            Y = (0, r.useCallback)(function () {
              var t,
                e,
                r,
                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                l = n.formModel.resultSchema;
              try {
                var c = !1,
                  u = {};
                0 === i.length ? u = n.formModel.resultSchema : 1 === i.length && "" === i[0] ? u = {
                  type: "any"
                } : (u = "array" === l.type ? {
                  type: "array",
                  items: "object" === (null === (t = l.items) || void 0 === t ? void 0 : t.type) ? {
                    type: "object",
                    properties: {}
                  } : "array" === (null === (e = l.items) || void 0 === e ? void 0 : e.type) ? {
                    type: "array",
                    items: {}
                  } : {
                    type: null === (r = l.items) || void 0 === r ? void 0 : r.type
                  }
                } : {
                  type: "object",
                  properties: {}
                }, i.forEach(function (t) {
                  var e,
                    n,
                    r,
                    i,
                    o = u.properties || (null === (e = u.items) || void 0 === e ? void 0 : e.properties) || (null === (n = u.items) || void 0 === n ? void 0 : n.items),
                    a = l.properties || (null === (r = l.items) || void 0 === r ? void 0 : r.properties) || (null === (i = l.items) || void 0 === i ? void 0 : i.items),
                    c = t.split(".");
                  c.forEach(function (t, e) {
                    if (o && a && a[t]) if (e === c.length - 1) o[t] = Object.assign({}, a[t]);else {
                      var n = a[t].type;
                      "array" === n ? (o[t] = o[t] || Object.assign(Object.assign({}, a[t]), {
                        items: "object" === a[t].items.type ? {
                          type: "object",
                          properties: {}
                        } : "array" === a[t].items.type ? {
                          type: "array",
                          items: {}
                        } : {
                          type: a[t].items.type
                        }
                      }), o = o[t].items.properties, a = a[t].items.properties) : "object" === n ? (o[t] = o[t] || Object.assign(Object.assign({}, a[t]), {
                        properties: {}
                      }), o = o[t].properties, a = a[t].properties) : (o[t] = Object.assign({}, a[t]), o = o[t].properties, a = a[t].properties);
                    }
                  });
                }), 1 === Object.keys(u.properties).length && (c = !0)), a = a.map(function (t) {
                  return t.split(".");
                }).filter(function (t) {
                  for (var e, n, r = u.properties || (null === (e = u.items) || void 0 === e ? void 0 : e.properties), i = 0; i < t.length; i++) {
                    var o = t[i];
                    if (!r || !r[o]) return !1;
                    r = r[o].properties || (null === (n = r[o].items) || void 0 === n ? void 0 : n.properties);
                  }
                  return !0;
                }).map(function (t) {
                  return t.join(".");
                });
                var s = (0, h.Xh)(u);
                null == a || a.forEach(function (t) {
                  for (var e = t.split("."), n = e.length, r = s, i = 0; i < n - 1; i++) r = (r.properties || r.items.properties)[e[i]];
                  try {
                    Reflect.deleteProperty(r.properties || r.items.properties, e[n - 1]);
                  } catch (t) {}
                });
                try {
                  var p = (0, h.Xh)(F.current),
                    d = (0, o.Zg)((0, o.AE)(p, a), i);
                  if (c) try {
                    for (var f = i.map(function (t) {
                      return t.split(".");
                    }); "object" === s.type && f.every(function (t) {
                      return !!t.length;
                    }) && 1 === Object.values(s.properties || {}).length;) d = F.current ? Object.values(d)[0] : d, s = Object.values(s.properties)[0], f.forEach(function (t) {
                      return t.shift();
                    });
                  } catch (t) {
                    console.log(t);
                  }
                  void 0 !== d && C(F.current ? d : void 0);
                } catch (t) {}
                n.formModel.outputKeys = i, n.formModel.excludeKeys = a, n.formModel.outputSchema = s;
              } catch (t) {
                console.log(t);
              }
            }, []),
            X = (0, r.useCallback)(function (t) {
              Y(t, n.formModel.excludeKeys);
            }, [n]),
            $ = (0, r.useCallback)(function (t) {
              Y(n.formModel.outputKeys, t);
            }, [n]),
            tt = (0, r.useCallback)(function (t) {
              n.formModel.resultSchema = t;
            }, []),
            et = (0, r.useCallback)(function (t) {
              var e;
              if (t.stopPropagation(), M) try {
                var r = JSON.parse(null === (e = D.current) || void 0 === e ? void 0 : e.value);
                if ("object" === r.type && r.properties) {
                  if (JSON.stringify(n.formModel.inputSchema) !== JSON.stringify(r)) {
                    n.formModel.inputSchema = r;
                    var i = (0, o.xF)(r);
                    n.formModel.params = i, J(i);
                  }
                } else if ("[object Object]" === Object.prototype.toString.call(r)) {
                  var a = (0, o.kl)(r),
                    l = a.params,
                    c = a.originSchema;
                  n.formModel.inputSchema = c, n.formModel.params = l, J(l);
                } else (0, _.I)("JSON 描述不合法，此次变更被忽略", {
                  type: "warning"
                });
              } catch (t) {
                console.warn("JSON 解析错误", t), (0, _.I)("JSON 解析错误，此次变更被忽略", {
                  type: "warning"
                });
              }
              T(!M);
            }, [M]),
            nt = (0, r.useCallback)(function (t) {
              var e;
              if (t.stopPropagation(), P) try {
                var r = JSON.parse(null === (e = z.current) || void 0 === e ? void 0 : e.value);
                JSON.stringify(n.formModel.resultSchema) !== JSON.stringify(r) && (n.formModel.resultSchema = r);
              } catch (t) {
                console.warn("JSON 解析错误", t), (0, _.I)("JSON 解析错误，此次变更被忽略", {
                  type: "warning"
                });
              }
              I(!P);
            }, [P]);
          return i().createElement(i().Fragment, null, i().createElement("div", {
            className: v.Z.paramEditContainer
          }, M ? i().createElement(d.Z, {
            label: "请求参数"
          }, i().createElement("textarea", {
            ref: D,
            className: v.Z.codeText,
            cols: 30,
            rows: 10,
            defaultValue: JSON.stringify(n.formModel.inputSchema, null, 2)
          }), i().createElement("div", null, "支持识别 JSON、JSON Schema 等描述协议")) : i().createElement(i().Fragment, null, i().createElement(d.Z, {
            label: "请求参数"
          }, i().createElement(u.Z, {
            value: n.formModel.params,
            ctx: n,
            onChange: W
          })), i().createElement(d.Z, null, i().createElement(s.Z, {
            onDebugClick: function () {
              return Z(e, void 0, void 0, b().mark(function t() {
                var e, r, i, c, u, s, p, d, h, m, _, v, y, x;
                return b().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (t.prev = 0, a()) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      return r = (null === (e = n.formModel.paramsList) || void 0 === e ? void 0 : e[0].data) || [], i = (0, o.Sm)(r), q(""), t.next = 8, n.connector.test({
                        type: n.formModel.type || "http",
                        mode: "test",
                        id: n.formModel.id,
                        connectorName: g.MK,
                        script: (0, o.Tp)((0, f.i)(Object.assign(Object.assign({}, n.formModel), {
                          globalParamsFn: l.paramsFn,
                          globalResultFn: l.resultFn,
                          path: n.formModel.path.trim(),
                          resultTransformDisabled: !0
                        })))
                      }, i);
                    case 8:
                      if (c = t.sent, F.current = c, u = n.formModel, s = u.outputKeys, p = void 0 === s ? [] : s, d = u.excludeKeys, h = void 0 === d ? [] : d, m = (0, o.HD)(c), n.formModel.resultSchema = m, p = p.filter(Boolean).map(function (t) {
                        return t.split(".");
                      }).filter(function (t) {
                        for (var e, n, r = m.properties || (null === (e = m.items) || void 0 === e ? void 0 : e.properties), i = 0; i < t.length; i++) {
                          var o = t[i];
                          if (!r || !r[o]) return !1;
                          r = r[o].properties || (null === (n = r[o].items) || void 0 === n ? void 0 : n.properties);
                        }
                        return !0;
                      }).map(function (t) {
                        return t.join(".");
                      }), h = h.filter(Boolean).map(function (t) {
                        return t.split(".");
                      }).filter(function (t) {
                        for (var e, n, r = m.properties || (null === (e = m.items) || void 0 === e ? void 0 : e.properties), i = 0; i < t.length; i++) {
                          var o = t[i];
                          if (!r || !r[o]) return !1;
                          r = r[o].properties || (null === (n = r[o].items) || void 0 === n ? void 0 : n.properties);
                        }
                        return !0;
                      }).map(function (t) {
                        return t.join(".");
                      }), _ = (0, o.AE)((0, o.Zg)(c, p), h), v = (0, o.HD)(_), Array.isArray(p) && p.length && (p.length > 1 || 1 !== p.length || "" !== p[0])) try {
                        for (y = (b = p, function (t) {
                          if (Array.isArray(t)) return E(t);
                        }(b) || function (t) {
                          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                        }(b) || w(b) || function () {
                          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }()).map(function (t) {
                          return t.split(".");
                        }); "[object Object]" === Object.prototype.toString.call(_) && y.every(function (t) {
                          return !!t.length;
                        }) && 1 === Object.values(_).length;) _ = Object.values(_)[0], v = Object.values(v.properties)[0], y.forEach(function (t) {
                          return t.shift();
                        });
                      } catch (t) {}
                      C(_), (0, o.rq)(n.formModel.resultSchema), (0, o.rq)(v), x = (0, o.HD)(i || {}), (0, o.rq)(x), n.formModel.outputKeys = p, n.formModel.excludeKeys = h, n.formModel.outputSchema = v, n.formModel.inputSchema = x, k(Object.assign({}, n.formModel.resultSchema)), t.next = 36;
                      break;
                    case 30:
                      t.prev = 30, t.t0 = t.catch(0), console.log(t.t0), n.formModel.outputSchema = void 0, n.formModel.resultSchema = void 0, q((null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message) || t.t0);
                    case 36:
                    case "end":
                      return t.stop();
                  }
                  var b;
                }, t, null, [[0, 30]]);
              }));
            },
            ctx: n,
            params: K
          }))), i().createElement("div", {
            className: "".concat(v.Z.codeIcon, " ").concat(M ? v.Z.focus : ""),
            onClick: et
          }, S)), H ? i().createElement(i().Fragment, null, i().createElement(d.Z, {
            label: "返回数据"
          }, n.formModel.resultSchema ? i().createElement(m.Z, {
            style: {
              margin: 0,
              marginBottom: 6
            },
            onClick: function () {
              Q(!1);
            }
          }, "保存") : null, i().createElement(p.Z, {
            schema: n.formModel.resultSchema,
            ctx: n,
            onChange: tt
          }))) : i().createElement(i().Fragment, null, i().createElement(d.Z, {
            label: "返回数据"
          }, P ? i().createElement(i().Fragment, null, i().createElement("textarea", {
            ref: z,
            className: v.Z.codeText,
            cols: 30,
            rows: 10,
            defaultValue: JSON.stringify(n.formModel.resultSchema, null, 2)
          }), i().createElement("div", null, "支持识别JSON Schema 描述协议")) : i().createElement(i().Fragment, null, n.formModel.resultSchema ? i().createElement(m.Z, {
            style: {
              margin: 0,
              marginBottom: 6
            },
            onClick: function () {
              Q(!0);
            }
          }, "编辑") : null, i().createElement(c.Z, {
            outputKeys: n.formModel.outputKeys,
            excludeKeys: n.formModel.excludeKeys,
            onOutputKeysChange: X,
            onExcludeKeysChange: $,
            schema: j,
            error: U
          })), i().createElement("div", {
            className: "".concat(v.Z.codeIcon, " ").concat(v.Z.responseCodeIcon, " ").concat(P ? v.Z.focus : ""),
            onClick: nt
          }, S)), i().createElement(O, {
            data: A
          })));
        }
      },
      9953: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => c
        });
        var r = n(9139),
          i = n(8156),
          o = n.n(i);
        function a(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || function (t, e) {
            if (t) {
              if ("string" == typeof t) return l(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
            }
          }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function l(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function c(t) {
          var e = t.options,
            n = a(t.binding, 2),
            l = n[0],
            c = n[1],
            u = a((0, i.useState)(l[c]), 2),
            s = u[0],
            p = u[1];
          return (0, i.useEffect)(function () {
            p(l[c]);
          }, [l[c]]), o().createElement("div", {
            className: r.Z.edt
          }, e.map(function (t) {
            return o().createElement("div", {
              key: t.value,
              className: "".concat(r.Z.opt, " ").concat(t.value === s ? r.Z.selected : ""),
              onClick: function () {
                l[c] = t.value, p(t.value);
              }
            }, t.title);
          }));
        }
      },
      9031: (t, e, n) => {
        "use strict";

        n.d(e, {
          Q: () => r
        });
        var r = (0, n(8156).createContext)({
          addBlurAry: function (t, e) {}
        });
      },
      9319: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => Z
        });
        var r = n(8156),
          i = n.n(r),
          o = n(7111),
          a = n.n(o),
          l = n(1194),
          c = n.n(l),
          u = n(3194),
          s = n(9493),
          p = n(9953),
          d = n(5619),
          f = n(8250),
          h = n(6017),
          m = n(5132),
          _ = n(6178),
          g = n(9031),
          v = n(8786),
          y = n(6346);
        function b(t) {
          return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, b(t);
        }
        function x(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || function (t, e) {
            if (t) {
              if ("string" == typeof t) return w(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(t, e) : void 0;
            }
          }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function w(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var E = [{
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
        }];
        function Z(t) {
          var e,
            n = t.sidebarContext,
            o = t.style,
            l = t.onSubmit,
            w = t.setRender,
            Z = t.globalConfig,
            O = (0, r.useRef)({}),
            S = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            k = (0, r.useRef)(),
            N = (0, r.useCallback)(function () {
              n.type = "", n.isDebug = !1, n.activeId = void 0, n.isEdit = !1, w(n);
            }, []),
            A = x((0, r.useState)(n.formModel.input), 2),
            C = A[0],
            L = A[1],
            M = x((0, r.useState)(n.formModel.output), 2),
            T = M[0],
            R = M[1],
            P = function () {
              var t;
              null === (t = S.current) || void 0 === t || t.classList.remove(v.Z["sidebar-panel-code-full"]), n.fullscreenParamsEditor = !1, w(n);
            },
            I = function () {
              var t;
              n.fullscrenResultEditor = !1, null === (t = j.current) || void 0 === t || t.classList.remove(v.Z["sidebar-panel-code-full"]), w(n);
            },
            F = function () {
              var t, e;
              return n.formModel.path ? (null === (t = k.current) || void 0 === t || t.classList.remove(y.Z.error), !0) : (null === (e = k.current) || void 0 === e || e.classList.add(y.Z.error), !1);
            };
          (0, r.useEffect)(function () {
            L(n.formModel.input);
          }, [n.formModel.input]), (0, r.useEffect)(function () {
            R(n.formModel.output);
          }, [n.formModel.output]), (0, r.useEffect)(function () {
            var t;
            n.formModel.path && (null === (t = k.current) || void 0 === t || t.classList.remove(y.Z.error));
          }, [n.formModel.path]);
          var D = (0, r.useMemo)(function () {
            return {
              addBlurAry: function (t, e) {
                return O.current = Object.assign(Object.assign({}, O.current), function (t, e, n) {
                  return (e = function (t) {
                    var e = function (t, e) {
                      if ("object" !== b(t) || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, "string");
                        if ("object" !== b(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return String(t);
                    }(t);
                    return "symbol" === b(e) ? e : String(e);
                  }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : t[e] = n, t;
                }({}, t, e));
              }
            };
          }, []);
          return a().createPortal(i().createElement("div", {
            "data-id": "plugin-panel",
            style: Object.assign({
              left: 361
            }, o),
            className: "".concat(v.Z["sidebar-panel-edit"]),
            onClick: function () {
              Object.values(O.current).forEach(function (t) {
                return null == t ? void 0 : t();
              });
            }
          }, i().createElement(g.Q.Provider, {
            value: D
          }, i().createElement("div", {
            className: v.Z["sidebar-panel-title"]
          }, i().createElement("div", null, null === (e = n.formModel) || void 0 === e ? void 0 : e.title), i().createElement("div", null, i().createElement("div", {
            className: v.Z.actions
          }, !n.isEidt && i().createElement(d.Z, {
            type: "primary",
            size: "small",
            onClick: function () {
              F() && l();
            }
          }, "保 存"), i().createElement(d.Z, {
            size: "small",
            onClick: function () {
              return N();
            }
          }, "关 闭")))), i().createElement("div", {
            className: v.Z["sidebar-panel-content"]
          }, i().createElement(i().Fragment, null, i().createElement("div", {
            className: y.Z.ct
          }, i().createElement(f.Z, {
            header: "基本信息",
            defaultFold: !1
          }, i().createElement("div", {
            className: y.Z.item
          }, i().createElement("label", null, "名称"), i().createElement("div", {
            className: "".concat(y.Z.editor, " ").concat(y.Z.textEdt, " ").concat(n.titleErr ? y.Z.error : ""),
            "data-err": n.titleErr
          }, i().createElement("input", {
            type: "text",
            placeholder: "服务接口的标题",
            defaultValue: n.formModel.title,
            key: n.formModel.title,
            onChange: function (t) {
              n.titleErr = void 0, n.formModel.title = t.target.value;
            }
          }))), i().createElement("div", {
            className: y.Z.item
          }, i().createElement("label", null, i().createElement("i", null, "*"), "地址"), i().createElement("div", {
            ref: k,
            className: "".concat(y.Z.editor, " ").concat(y.Z.textEdt),
            "data-err": "请填写完整的地址"
          }, i().createElement("textarea", {
            defaultValue: n.formModel.path,
            key: n.formModel.path,
            placeholder: "接口的请求路径",
            onChange: function (t) {
              var e;
              n.formModel.path = t.target.value, n.formModel.path && (null === (e = k.current) || void 0 === e || e.classList.remove(y.Z.error));
            }
          }))), i().createElement("div", {
            className: y.Z.sperator
          }), i().createElement("div", {
            className: y.Z.item
          }, i().createElement("label", null, i().createElement("i", null, "*"), "请求方法"), i().createElement("div", {
            className: y.Z.editor
          }, i().createElement(p.Z, {
            binding: [n.formModel, "method"],
            options: E
          }))))), i().createElement("div", {
            className: y.Z.ct
          }, i().createElement(f.Z, {
            header: "当开始请求"
          }, n.fullscreenParamsEditor ? i().createElement("div", {
            onClick: P,
            className: v.Z["sidebar-panel-code-icon-full"]
          }, s.LW) : i().createElement("div", {
            onClick: function () {
              var t;
              null === (t = S.current) || void 0 === t || t.classList.add(v.Z["sidebar-panel-code-full"]), n.fullscreenParamsEditor = !0, w(n);
            },
            className: v.Z["sidebar-panel-code-icon"]
          }, s.dK), i().createElement(c(), {
            onMounted: function (t, e, n) {
              S.current = n, n.onclick = function (t) {
                t.target === n && P();
              };
            },
            env: {
              isNode: !1,
              isElectronRenderer: !1
            },
            onChange: function (t) {
              n.formModel.input = encodeURIComponent(t), L(t);
            },
            value: (0, _.oV)(C),
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
          }))), i().createElement("div", {
            className: y.Z.ct
          }, i().createElement(f.Z, {
            header: "当返回响应"
          }, n.fullscrenResultEditor ? i().createElement("div", {
            onClick: I,
            className: v.Z["sidebar-panel-code-icon-full"]
          }, s.dK) : i().createElement("div", {
            onClick: function () {
              var t;
              n.fullscrenResultEditor = !0, null === (t = j.current) || void 0 === t || t.classList.add(v.Z["sidebar-panel-code-full"]), w(n);
            },
            className: v.Z["sidebar-panel-code-icon"]
          }, s.dK), i().createElement(c(), {
            onMounted: function (t, e, n) {
              j.current = n, n.onclick = function (t) {
                t.target === n && I();
              };
            },
            env: {
              isNode: !1,
              isElectronRenderer: !1
            },
            onChange: function (t) {
              n.formModel.output = encodeURIComponent(t), R(encodeURIComponent(t));
            },
            value: (0, _.oV)(T),
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
          }))), i().createElement("div", {
            className: y.Z.ct
          }, i().createElement(f.Z, {
            header: "其他信息"
          }, i().createElement(h.Z, {
            label: "接口描述"
          }, i().createElement(m.Z, {
            defaultValue: n.formModel.desc,
            onBlur: function (t) {
              n.formModel.desc = t.target.value;
            }
          })), i().createElement(h.Z, {
            label: "文档链接"
          }, i().createElement(m.K, {
            style: {
              height: 80
            },
            onBlur: function (t) {
              n.formModel.doc = t.target.value, w(n);
            },
            defaultValue: n.formModel.doc
          }))))), i().createElement("div", {
            className: y.Z.ct
          }, i().createElement(f.Z, {
            key: Math.random(),
            header: "接口调试",
            defaultFold: !1
          }, i().createElement(u.Z, {
            sidebarContext: n,
            setRender: w,
            validate: F,
            globalConfig: Z
          })))))), document.body);
        }
      },
      4839: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => f
        });
        var r = n(8156),
          i = n.n(r),
          o = n(7111),
          a = n.n(o),
          l = n(1194),
          c = n.n(l),
          u = n(8786),
          s = n(5619),
          p = n(8250),
          d = n(91);
        function f(t) {
          var e = t.closeTemplateForm,
            n = t.style,
            r = t.data,
            o = t.onChange;
          return a().createPortal(i().createElement("div", {
            "data-id": "plugin-panel",
            style: Object.assign({
              left: 361
            }, n),
            className: "".concat(u.Z["sidebar-panel-edit"])
          }, i().createElement("div", {
            className: u.Z["sidebar-panel-title"]
          }, i().createElement("div", null, "全局配置"), i().createElement("div", null, i().createElement("div", {
            className: u.Z.actions
          }, i().createElement(s.Z, {
            size: "small",
            onClick: function () {
              return e();
            }
          }, "关 闭")))), i().createElement("div", {
            className: d.Z.item
          }, i().createElement(p.Z, {
            header: "当开始请求"
          }, i().createElement(c(), {
            width: "100%",
            height: 400,
            language: "javascript",
            theme: "light",
            lineNumbers: "off",
            scrollbar: {
              horizontalScrollbarSize: 2,
              verticalScrollbarSize: 2
            },
            value: decodeURIComponent(r.config.paramsFn),
            onChange: function (t) {
              r.config.paramsFn = decodeURIComponent(t), o({
                paramsFn: t
              });
            },
            env: {
              isNode: !1,
              isElectronRenderer: !1
            },
            minimap: {
              enabled: !1
            }
          }))), r.config.resultFn ? i().createElement("div", {
            className: d.Z.item
          }, i().createElement(p.Z, {
            header: "当返回响应"
          }, i().createElement(c(), {
            width: "100%",
            height: 400,
            language: "javascript",
            theme: "light",
            lineNumbers: "off",
            scrollbar: {
              horizontalScrollbarSize: 2,
              verticalScrollbarSize: 2
            },
            value: decodeURIComponent(r.config.resultFn),
            onChange: function (t) {
              r.config.resultFn = decodeURIComponent(t), o({
                resultFn: t
              });
            },
            env: {
              isNode: !1,
              isElectronRenderer: !1
            },
            minimap: {
              enabled: !1
            }
          }))) : null), document.body);
        }
      },
      4931: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => p
        });
        var r = n(8156),
          i = n.n(r),
          o = (n(1194), n(9493)),
          a = n(6178),
          l = n(3174),
          c = (n(4113), n(6017), n(4763));
        function u(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || function (t, e) {
            if (t) {
              if ("string" == typeof t) return s(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0;
            }
          }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function s(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function p(t) {
          var e,
            n = t.schema,
            s = t.value,
            p = t.onChange,
            d = t.ctx,
            f = (0, r.useRef)(s),
            h = u((0, r.useState)({
              children: []
            }), 2),
            m = h[0],
            _ = h[1];
          f.current = m;
          var g = (0, r.useCallback)(function () {
              _(Object.assign({}, f.current));
              var t = (0, l.Vm)(f.current);
              p(t);
            }, []),
            v = (0, r.useCallback)(function (t) {
              ["minLength", "maxLength", "minimum", "maximum"].forEach(function (e) {
                Reflect.deleteProperty(t, e);
              }), t.children = [];
            }, []),
            y = (0, r.useCallback)(function (t, e, n) {
              t[e] !== n && (t[e] = n, "type" === e && (v(t), t.defaultValue = "", "array" === n && (t.children = [{
                name: "items",
                type: "string",
                id: (0, a.Vj)()
              }])), function (t, e, n) {
                Reflect.deleteProperty(t, "minError"), Reflect.deleteProperty(t, "maxError"), [["minLength", "maxLength", !1], ["maxLength", "minLength", !0], ["minItems", "maxItems", !1], ["maxItems", "minItems", !0], ["minimum", "maximum", !1], ["maximum", "minimum", !0]].forEach(function (r) {
                  var i = u(r, 3),
                    o = i[0],
                    a = i[1],
                    l = i[2];
                  !function (t, n, r, i, o) {
                    e === r && void 0 !== t[i] && (o ? n < t[i] : n > t[i]) && (e.startsWith("min") ? t.minError = !0 : t.maxError = !0);
                  }(t, n, o, a, l);
                });
              }(t, e, n), d.editNowId = t.id, g());
            }, []);
          (0, r.useEffect)(function () {
            _(n ? (0, l.n9)(n) : void 0);
          }, [n]);
          var b = function (t, e) {
              var n = (0, a.Vj)();
              if (!t || "object" !== t.type && "array" !== t.type) {
                e.children = e.children || [];
                var r = "name".concat(e.children.length + 1);
                e.children.push({
                  id: n,
                  type: "string",
                  name: r
                });
              } else {
                t.children = t.children || [];
                var i = "name".concat(t.children.length + 1);
                "array" === t.type && (i = "".concat(t.children.length)), t.children.push({
                  id: n,
                  name: i,
                  type: "string"
                });
              }
              d.editNowId = void 0, g();
            },
            x = (0, r.useCallback)(function (t, e) {
              return t.children.map(function (n) {
                return w(n, t, e);
              });
            }, []),
            w = (0, r.useCallback)(function (t, e) {
              var n,
                r,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              if (!t) return null;
              var l,
                u = t.type;
              if ("root" === u) return i().createElement("div", {
                className: c.Z.list
              }, x(t, a + 1));
              t.children && (l = x(t, a + 1));
              var s = "array" === e.type,
                p = (void 0 !== t.defaultValue && t.defaultValue, 0 === a && (null === (r = null === (n = e.children) || void 0 === n ? void 0 : n[Math.min(e.children.findLastIndex(function (t) {
                  var e = t.type;
                  return "string" === e || "number" === e;
                }), e.children.length - 1)]) || void 0 === r ? void 0 : r.name) === t.name || "object" === u || s && "items" === t.name && ("object" === u || "array" === u)),
                f = !(s && "items" === t.name);
              return i().createElement("div", {
                key: t.id,
                className: c.Z.ct
              }, i().createElement("div", {
                className: c.Z.item
              }, i().createElement("input", {
                style: {
                  width: 331 - 20 * a
                },
                type: "text",
                value: s && "items" !== t.name ? "[".concat(t.name, "]") : t.name,
                disabled: s,
                onChange: function (e) {
                  return y(t, "name", e.target.value);
                }
              }), i().createElement("select", {
                className: c.Z.type,
                value: t.type,
                onChange: function (e) {
                  return y(t, "type", e.target.value);
                }
              }, i().createElement("option", {
                label: "字符",
                value: "string"
              }), i().createElement("option", {
                label: "数字",
                value: "number"
              }), i().createElement("option", {
                label: "对象",
                value: "object"
              }), i().createElement("option", {
                label: "列表",
                value: "array"
              })), i().createElement("div", {
                className: "".concat(c.Z.operate, " ").concat(c.Z.flex)
              }, f ? i().createElement("span", {
                className: "".concat(c.Z.iconRemove),
                onClick: function (n) {
                  return function (t, e) {
                    e.children = e.children.filter(function (e) {
                      return e.name !== t.name;
                    }), "array" === e.type && e.children.forEach(function (t, n) {
                      t.name = "".concat(n), t.defaultValue = e.children[n].defaultValue;
                    }), d.editNowId = void 0, g();
                  }(t, e);
                }
              }, o.Od) : null, p ? i().createElement("span", {
                className: c.Z.iconAdder,
                onClick: function () {
                  return b(t, e);
                }
              }, "+") : null)), l);
            }, []);
          return i().createElement(i().Fragment, null, n ? i().createElement("div", null, 0 === (null === (e = null == m ? void 0 : m.children) || void 0 === e ? void 0 : e.length) ? i().createElement("div", {
            className: c.Z.adder
          }, i().createElement("span", {
            style: {
              cursor: "pointer"
            },
            onClick: function () {
              return b(f.current, f.current);
            }
          }, "+")) : i().createElement(i().Fragment, null, i().createElement("div", {
            className: c.Z.header
          }, i().createElement("p", {
            className: c.Z.fieldName
          }, "字段名"), i().createElement("p", {
            className: c.Z.type
          }, "类型"), i().createElement("p", {
            className: c.Z.operate
          }, "操作")), i().createElement("div", {
            className: c.Z.content
          }, w(f.current, f.current)))) : i().createElement("div", {
            className: c.Z.empty
          }, "类型无效"));
        }
      },
      3174: (t, e, n) => {
        "use strict";

        n.d(e, {
          Vm: () => a,
          n9: () => i
        });
        var r = n(6178);
        function i(t) {
          var e = {
            name: "root",
            type: "root",
            children: []
          };
          return function t(e, n, i) {
            var o,
              a = i;
            if (n && (a = {
              id: (0, r.Vj)(),
              name: n,
              type: e.type,
              children: []
            }, i.children.push(a)), "array" === e.type) {
              var l = {
                id: (0, r.Vj)(),
                name: "items",
                type: (null === (o = e.items) || void 0 === o ? void 0 : o.type) || "object",
                children: []
              };
              a.children.push(l), function (e, n) {
                var r;
                Object.keys((null === (r = e.items) || void 0 === r ? void 0 : r.properties) || {}).map(function (r) {
                  t(e.items.properties[r], r, n);
                });
              }(e, l);
            } else "object" === e.type && function (e, n) {
              Object.keys(e.properties || {}).map(function (r) {
                return t(e.properties[r], r, n);
              });
            }(e, a);
          }(t, "", e), e;
        }
        function o(t, e) {
          ["type", "defaultValue", "minItems", "maxItems", "minLength", "maxLength", "minimum", "maximum"].forEach(function (n) {
            void 0 !== t[n] && (e["defaultValue" === n ? "default" : n] = t[n]);
          });
        }
        function a(t) {
          if (t) {
            var e = {},
              n = t.type;
            if ("string" === n || "number" === n) {
              var r = {};
              return o(t, r), r;
            }
            return t.children && t.children.forEach(function (r) {
              e.type = n, "object" === n || "root" === n ? (e.type = "object", e.properties = e.properties || {}, e.properties[r.name] = a(r)) : (o(t, e), e[r.name] = a(r));
            }), e;
          }
        }
      },
      167: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => s
        });
        var r = n(8156),
          i = n.n(r),
          o = n(4113),
          a = n(5619),
          l = n(5739);
        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function u(t, e, n) {
          if (t && e) if (n.editNowId && e.id === n.editNowId && (Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          }), n.editNowId = void 0), Object.keys(t).forEach(function (n) {
            void 0 === e[n] && Reflect.deleteProperty(t, n);
          }), e.children) {
            if (t.children) {
              var r = t.children.reduce(function (t, e) {
                  return e && (t[e.id] = e), t;
                }, {}),
                i = [];
              e.children.forEach(function (t, e) {
                i.push(r[t.id]);
              }), t.children = i;
            }
            e.children && e.children.forEach(function (r, i) {
              t.children = t.children || [], void 0 === t.children[i] ? t.children[i] = r : u(t.children[i], e.children[i], n);
            });
          } else t.children = [];
        }
        function s(t) {
          var e,
            n,
            s,
            p,
            d = t.onDebugClick,
            f = t.ctx,
            h = t.params,
            m = (0, r.useRef)({}),
            _ = (s = (0, r.useState)(0), p = 2, function (t) {
              if (Array.isArray(t)) return t;
            }(s) || function (t, e) {
              var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  o,
                  a,
                  l = [],
                  c = !0,
                  u = !1;
                try {
                  if (o = (n = n.call(t)).next, 0 === e) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
                } catch (t) {
                  u = !0, i = t;
                } finally {
                  try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                  } finally {
                    if (u) throw i;
                  }
                }
                return l;
              }
            }(s, p) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
              }
            }(s, p) || function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()),
            g = (_[0], _[1]),
            v = (0, r.useCallback)(function () {
              f.formModel.paramsList = [{
                status: "success",
                title: "接口成功",
                data: Object.assign({}, m.current)
              }];
            }, []);
          (0, r.useEffect)(function () {
            var t,
              e = (0, o.Xh)(h);
            m.current = (0, o.Xh)(null === (t = f.formModel.paramsList) || void 0 === t ? void 0 : t[0].data), u(m.current, e, f), v(), g(Math.random());
          }, [h]);
          var y = (0, r.useCallback)(function (t, e, n) {
              t[e] = n, v();
            }, []),
            b = (0, r.useCallback)(function (t, e) {
              return t.children.map(function (n) {
                return x(n, t, e);
              });
            }, []),
            x = (0, r.useCallback)(function (t, e) {
              var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              if (!t) return null;
              if ("root" === t.type && !t.children) return null;
              "root" === t.type && (t.name = ""), t.children && (n = b(t, r + 1));
              var o = "array" === e.type,
                a = "object" === t.type,
                c = "root" === t.type,
                u = "array" === t.type,
                s = a || c || u;
              return i().createElement("div", {
                className: l.Z.ct,
                key: t.id || "root"
              }, i().createElement("div", {
                className: "".concat(l.Z.item, " ").concat(c ? l.Z.rootItem : "")
              }, i().createElement("div", {
                style: {
                  padding: "0 10px 0 2px"
                }
              }, o ? "[".concat(t.name, "]") : t.name, i().createElement("span", {
                className: l.Z.typeName
              }, "(", function (t) {
                switch (t) {
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
                    return "列表";
                }
              }(t.type), ")")), s ? null : i().createElement("input", {
                className: l.Z.column,
                type: "text",
                disabled: "object" === t.type || "array" === t.type,
                defaultValue: t.defaultValue,
                onChange: function (e) {
                  return y(t, "defaultValue", e.target.value);
                }
              })), n);
            }, []);
          return i().createElement("div", {
            className: l.Z.debug
          }, i().createElement("div", {
            className: l.Z.content
          }, (null === (n = null === (e = m.current) || void 0 === e ? void 0 : e.children) || void 0 === n ? void 0 : n.length) ? x(Object.assign({
            type: "root"
          }, m.current), Object.assign({
            type: "root"
          }, m.current)) : null), i().createElement(a.Z, {
            onClick: d,
            type: "primary",
            style: {
              marginTop: 12
            }
          }, "连接测试"));
        }
      },
      4469: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => c
        });
        var r = n(8156),
          i = n.n(r),
          o = n(8211),
          a = n(9493),
          l = n(6178);
        function c(t) {
          var e,
            n,
            c = t.value,
            u = t.onChange,
            s = t.ctx,
            p = (0, r.useRef)(c);
          p.current = c;
          var d = (0, r.useCallback)(function () {
              u(Object.assign({}, p.current));
            }, []),
            f = (0, r.useCallback)(function (t, e, n) {
              t[e] !== n && (t[e] = n, "type" === e && (t.defaultValue = "", t.children = []), s.editNowId = t.id, d());
            }, []),
            h = (0, r.useCallback)(function (t, e) {
              return t.children.map(function (n) {
                return m(n, t, e);
              });
            }, []),
            m = (0, r.useCallback)(function (t, e) {
              var n,
                r,
                c,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              if (!t) return null;
              if ("root" === t.type) return i().createElement("div", {
                className: o.Z.list
              }, h(t, u + 1));
              t.children && (c = h(t, u + 1));
              var p = "array" === e.type,
                m = 0 === u && (null === (r = null === (n = e.children) || void 0 === n ? void 0 : n[Math.min(e.children.findLastIndex(function (t) {
                  var e = t.type;
                  return "string" === e || "number" === e;
                }), e.children.length - 1)]) || void 0 === r ? void 0 : r.name) === t.name || "object" === t.type || "array" === t.type;
              return i().createElement("div", {
                key: t.id,
                className: o.Z.ct
              }, i().createElement("div", {
                className: o.Z.item
              }, i().createElement("input", {
                style: {
                  width: 270 - 20 * u
                },
                type: "text",
                value: p ? "[".concat(t.name, "]") : t.name,
                disabled: p,
                onChange: function (e) {
                  return f(t, "name", e.target.value);
                }
              }), i().createElement("select", {
                className: o.Z.column2,
                value: t.type,
                style: {
                  color: "#8d7a34",
                  cursor: "pointer"
                },
                onChange: function (e) {
                  return f(t, "type", e.target.value);
                }
              }, i().createElement("option", {
                label: "字符",
                value: "string"
              }), i().createElement("option", {
                label: "数字",
                value: "number"
              }), i().createElement("option", {
                label: "布尔",
                value: "boolean"
              }), i().createElement("option", {
                label: "对象",
                value: "object"
              }), i().createElement("option", {
                label: "列表",
                value: "array"
              })), i().createElement("input", {
                className: o.Z.column3,
                type: "text",
                disabled: "object" === t.type || "array" === t.type,
                value: t.defaultValue,
                onChange: function (e) {
                  return f(t, "defaultValue", e.target.value);
                }
              }), i().createElement("div", {
                className: "".concat(o.Z.column4, " ").concat(o.Z.flex)
              }, i().createElement("span", {
                className: "".concat(o.Z.iconRemove),
                onClick: function (n) {
                  return function (t, e) {
                    e.children = e.children.filter(function (e) {
                      return e.name !== t.name;
                    }), "array" === e.type && e.children.forEach(function (t, n) {
                      t.name = "".concat(n), t.defaultValue = e.children[n].defaultValue;
                    }), s.editNowId = void 0, d();
                  }(t, e);
                }
              }, a.Od), m ? i().createElement("span", {
                className: o.Z.iconAdder,
                onClick: function () {
                  return function (t, e) {
                    var n = (0, l.Vj)();
                    if (!t || "object" !== t.type && "array" !== t.type) {
                      e.children = e.children || [];
                      var r = "name".concat(e.children.length + 1);
                      e.children.push({
                        id: n,
                        type: "string",
                        name: r
                      });
                    } else {
                      t.children = t.children || [];
                      var i = "name".concat(t.children.length + 1);
                      "array" === t.type && (i = "".concat(t.children.length)), t.children.push({
                        id: n,
                        name: i,
                        type: "string"
                      });
                    }
                    s.editNowId = void 0, d();
                  }(t, e);
                }
              }, "+") : null)), c);
            }, []),
            _ = (0, r.useCallback)(function () {
              p.current.children.push({
                type: "string",
                id: (0, l.Vj)(),
                name: "name".concat(p.current.children.length + 1)
              }), d();
            }, []);
          return i().createElement(i().Fragment, null, i().createElement("div", null, 0 === (null === (e = null == c ? void 0 : c.children) || void 0 === e ? void 0 : e.length) ? null : i().createElement(i().Fragment, null, i().createElement("div", {
            className: o.Z.header
          }, i().createElement("p", {
            className: o.Z.column1
          }, "字段名"), i().createElement("p", {
            className: o.Z.column2
          }, "类型"), i().createElement("p", {
            className: o.Z.column3
          }, "调试值"), i().createElement("p", {
            className: o.Z.column4
          }, "操作")), i().createElement("div", {
            className: o.Z.content
          }, m(c, c))), (null === (n = null == c ? void 0 : c.children) || void 0 === n ? void 0 : n.every(function (t) {
            var e = t.type;
            return "object" === e || "array" === e;
          })) ? i().createElement("span", {
            className: o.Z.iconRootAdder,
            onClick: function () {
              return _();
            }
          }, "+") : null));
        }
      },
      4651: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => f
        });
        var r = n(8156),
          i = n.n(r),
          o = n(4113),
          a = n(9031),
          l = n(7992);
        function c(t) {
          return function (t) {
            if (Array.isArray(t)) return p(t);
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
          }(t) || s(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function u(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || s(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function s(t, e) {
          if (t) {
            if ("string" == typeof t) return p(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0;
          }
        }
        function p(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var d = [];
        function f(t) {
          var e = t.outputKeys,
            n = t.excludeKeys,
            s = t.onOutputKeysChange,
            p = t.onExcludeKeysChange,
            f = t.schema,
            h = t.error,
            m = (0, r.useContext)(a.Q),
            _ = (0, r.useRef)(),
            g = (0, r.useRef)(""),
            v = (0, r.useRef)([]),
            y = u((0, r.useState)(e || d), 2),
            b = y[0],
            x = y[1],
            w = u((0, r.useState)(n || []), 2),
            E = w[0],
            Z = w[1],
            O = u((0, r.useState)(), 2),
            S = O[0],
            j = O[1];
          v.current = E, (0, r.useEffect)(function () {
            x(e || d);
          }, [e]);
          var k = (0, r.useCallback)(function () {
            x(function (t) {
              if (v.current.some(function (t) {
                return t === g.current;
              })) return t;
              var e = [].concat(c(t.filter(function (t) {
                return !(t.includes(g.current) || g.current.includes(t));
              })), [g.current]).filter(function (t) {
                return "" !== t;
              });
              return s(c(e)), e;
            }), Z(function (t) {
              var e = t.filter(function (t) {
                return t !== g.current;
              });
              return p(e), e;
            });
          }, []);
          var N,
            A = (0, r.useCallback)(function (t, e) {
              var n = t.currentTarget,
                r = _.current.getBoundingClientRect(),
                i = n.getBoundingClientRect();
              g.current = e, j({
                display: "block",
                left: i.x - r.x,
                top: i.y - r.y + n.offsetHeight
              }), m.addBlurAry("return-schema", function () {
                return j(void 0);
              });
            }, []),
            C = (0, r.useCallback)(function (t, e) {
              x(function (t) {
                var n = c(t.filter(function (t) {
                  return t !== e;
                })).filter(function (t) {
                  return "" !== t;
                });
                return t.some(function (t) {
                  return t === e;
                }) || Z(function (t) {
                  var n = [].concat(c(t.filter(function (t) {
                    return !(t.includes(e) || e.includes(t));
                  })), [e]);
                  return p(n), n;
                }), s(n), n;
              });
            }, []),
            L = (0, r.useCallback)(function (t) {
              j(void 0), m.addBlurAry("return-schema", function () {}), t.stopPropagation();
            }, []);
          return h ? i().createElement("div", {
            className: l.Z.errorInfo
          }, i().createElement("span", null, h), i().createElement("div", null, (N = h).includes("Network Error") ? "请检查网络是否正常、当前请求是否存在跨域" : N.includes("404") ? "请检查请求地址是否拼写错误" : "")) : f ? i().createElement("div", {
            className: l.Z.returnParams,
            ref: _,
            onClick: L
          }, i().createElement("div", null, function t(e) {
            var n,
              r = e.val,
              a = e.key,
              c = e.xpath,
              u = e.root;
            "array" === r.type ? n = function (e, n) {
              return e ? t({
                val: e,
                xpath: n
              }) : null;
            }(r.items, c) : "object" === r.type && (n = function (e, n) {
              return e ? i().createElement(i().Fragment, null, Object.keys(e).map(function (r) {
                var i = void 0 !== n ? n ? "".concat(n, ".").concat(r) : r : void 0;
                return t({
                  val: e[r],
                  xpath: i,
                  key: r
                });
              })) : null;
            }(r.properties, c));
            var s = !(0, o.xb)(b),
              p = !s && u || a && s && (null == b ? void 0 : b.includes(c)),
              d = void 0 !== c && !E.some(function (t) {
                return c.startsWith(t) && t !== c;
              }),
              f = void 0 !== a && (p && !u || (b.some(function (t) {
                return null == c ? void 0 : c.startsWith(t);
              }) || !s) && !E.some(function (t) {
                return c.startsWith(t);
              }));
            return i().createElement("div", {
              key: a,
              className: "".concat(l.Z.item, " ").concat(u ? l.Z.rootItem : "", " ").concat(p ? l.Z.markAsReturn : "")
            }, p ? i().createElement("div", {
              className: l.Z.marked
            }) : null, E.includes(c) && a ? i().createElement("div", {
              className: l.Z.exclude
            }) : null, i().createElement("div", {
              className: l.Z.keyName
            }, a, i().createElement("span", {
              className: l.Z.typeName
            }, "(", function (t) {
              switch (t) {
                case "number":
                  return "数字";
                case "string":
                  return "字符";
                case "boolean":
                  return "布尔";
                case "object":
                  return "对象";
                case "array":
                  return "列表";
              }
            }(r.type), ")"), d && a ? i().createElement("button", {
              onClick: function (t) {
                A(t, c), t.stopPropagation();
              }
            }, "标记") : null, f ? i().createElement("button", {
              onClick: function (t) {
                C(t, c), t.stopPropagation();
              }
            }, "取消") : null), n);
          }({
            val: f,
            xpath: "",
            root: !0
          })), i().createElement("div", {
            className: l.Z.popMenu,
            style: S
          }, i().createElement("div", {
            className: l.Z.menuItem,
            onClick: function () {
              return k();
            }
          }, "返回内容"))) : i().createElement("div", {
            className: l.Z.empty
          }, "类型无效");
        }
      },
      5240: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => p
        });
        var r = n(9493),
          i = n(8156),
          o = n.n(i),
          a = n(6233),
          l = n(8705);
        function c(t) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, c(t);
        }
        function u() {
          u = function () {
            return e;
          };
          var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = Object.defineProperty || function (t, e, n) {
              t[e] = n.value;
            },
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            l = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function p(t, e, n) {
            return Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e];
          }
          try {
            p({}, "");
          } catch (t) {
            p = function (t, e, n) {
              return t[e] = n;
            };
          }
          function d(t, e, n, r) {
            var o = e && e.prototype instanceof y ? e : y,
              a = Object.create(o.prototype),
              l = new L(r || []);
            return i(a, "_invoke", {
              value: k(t, n, l)
            }), a;
          }
          function f(t, e, n) {
            try {
              return {
                type: "normal",
                arg: t.call(e, n)
              };
            } catch (t) {
              return {
                type: "throw",
                arg: t
              };
            }
          }
          e.wrap = d;
          var h = "suspendedStart",
            m = "suspendedYield",
            _ = "executing",
            g = "completed",
            v = {};
          function y() {}
          function b() {}
          function x() {}
          var w = {};
          p(w, a, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            Z = E && E(E(M([])));
          Z && Z !== n && r.call(Z, a) && (w = Z);
          var O = x.prototype = y.prototype = Object.create(w);
          function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
              p(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function j(t, e) {
            function n(i, o, a, l) {
              var u = f(t[i], t, o);
              if ("throw" !== u.type) {
                var s = u.arg,
                  p = s.value;
                return p && "object" == c(p) && r.call(p, "__await") ? e.resolve(p.__await).then(function (t) {
                  n("next", t, a, l);
                }, function (t) {
                  n("throw", t, a, l);
                }) : e.resolve(p).then(function (t) {
                  s.value = t, a(s);
                }, function (t) {
                  return n("throw", t, a, l);
                });
              }
              l(u.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (t, r) {
                function i() {
                  return new e(function (e, i) {
                    n(t, r, e, i);
                  });
                }
                return o = o ? o.then(i, i) : i();
              }
            });
          }
          function k(e, n, r) {
            var i = h;
            return function (o, a) {
              if (i === _) throw new Error("Generator is already running");
              if (i === g) {
                if ("throw" === o) throw a;
                return {
                  value: t,
                  done: !0
                };
              }
              for (r.method = o, r.arg = a;;) {
                var l = r.delegate;
                if (l) {
                  var c = N(l, r);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                  if (i === h) throw i = g, r.arg;
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = _;
                var u = f(e, n, r);
                if ("normal" === u.type) {
                  if (i = r.done ? g : m, u.arg === v) continue;
                  return {
                    value: u.arg,
                    done: r.done
                  };
                }
                "throw" === u.type && (i = g, r.method = "throw", r.arg = u.arg);
              }
            };
          }
          function N(e, n) {
            var r = n.method,
              i = e.iterator[r];
            if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, N(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
            var o = f(i, e.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, v;
            var a = o.arg;
            return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
          }
          function A(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
          }
          function L(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(A, this), this.reset(!0);
          }
          function M(e) {
            if (e || "" === e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < e.length;) if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                    return n.value = t, n.done = !0, n;
                  };
                return o.next = o;
              }
            }
            throw new TypeError(c(e) + " is not iterable");
          }
          return b.prototype = x, i(O, "constructor", {
            value: x,
            configurable: !0
          }), i(x, "constructor", {
            value: b,
            configurable: !0
          }), b.displayName = p(x, s, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name));
          }, e.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, p(t, s, "GeneratorFunction")), t.prototype = Object.create(O), t;
          }, e.awrap = function (t) {
            return {
              __await: t
            };
          }, S(j.prototype), p(j.prototype, l, function () {
            return this;
          }), e.AsyncIterator = j, e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new j(d(t, n, r, i), o);
            return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
          }, S(O), p(O, s, "Generator"), p(O, a, function () {
            return this;
          }), p(O, "toString", function () {
            return "[object Generator]";
          }), e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return n.reverse(), function t() {
              for (; n.length;) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t;
              }
              return t.done = !0, t;
            };
          }, e.values = M, L.prototype = {
            constructor: L,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return l.type = "throw", l.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  l = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return this.delegate = {
                iterator: M(e),
                resultName: n,
                nextLoc: r
              }, "next" === this.method && (this.arg = t), v;
            }
          }, e;
        }
        var s = function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                c(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function l(t) {
              try {
                c(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              var e;
              t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                t(e);
              })).then(a, l);
            }
            c((r = r.apply(t, e || [])).next());
          });
        };
        function p(t) {
          var e = this,
            n = t.ctx,
            i = t.setRender,
            c = t.blurMap,
            p = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "http";
              return s(e, void 0, void 0, u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      n.type = t, n.activeId = void 0, n.isEdit = !1, n.formModel = {
                        type: t
                      }, i(n), "http" === t && n.addDefaultService();
                    case 6:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
            };
          return o().createElement("div", {
            className: l.Z.toolbar
          }, o().createElement("div", {
            className: l.Z.search
          }, o().createElement("input", {
            type: "text",
            placeholder: "请输入名称搜索服务接口",
            onChange: function (t) {
              return n.search(t.target.value);
            }
          })), function () {
            if (!n.addActions || 1 === n.addActions.length) return o().createElement("div", {
              className: l.Z.icon,
              onClick: function () {
                return p("http");
              }
            }, r.PD);
            var t = o().createElement("div", {
              className: l.Z.ct
            }, n.addActions.map(function (t) {
              var e = t.type,
                n = t.title;
              return o().createElement("div", {
                className: l.Z.item,
                onClick: function () {
                  return p(e);
                },
                key: e
              }, n);
            }));
            return o().createElement(a.Z, {
              dropDownStyle: n.type ? {
                right: 0
              } : void 0,
              onBlur: function (t) {
                return c.toolbar = t;
              },
              overlay: t
            }, o().createElement("div", {
              className: l.Z.icon
            }, r.PD));
          }());
        }
      },
      2453: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => Z
        });
        var r = n(8156),
          i = n.n(r),
          o = n(6178),
          a = n(5525),
          l = n(8786),
          c = n(4113),
          u = n(1988),
          s = n(9319),
          p = n(5240),
          d = n(9493),
          f = n(4839),
          h = n(957);
        function m(t) {
          return function (t) {
            if (Array.isArray(t)) return b(t);
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
          }(t) || y(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function _(t) {
          return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, _(t);
        }
        function g() {
          g = function () {
            return e;
          };
          var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = Object.defineProperty || function (t, e, n) {
              t[e] = n.value;
            },
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            l = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, e, n) {
            return Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e];
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, n) {
              return t[e] = n;
            };
          }
          function s(t, e, n, r) {
            var o = e && e.prototype instanceof y ? e : y,
              a = Object.create(o.prototype),
              l = new L(r || []);
            return i(a, "_invoke", {
              value: k(t, n, l)
            }), a;
          }
          function p(t, e, n) {
            try {
              return {
                type: "normal",
                arg: t.call(e, n)
              };
            } catch (t) {
              return {
                type: "throw",
                arg: t
              };
            }
          }
          e.wrap = s;
          var d = "suspendedStart",
            f = "suspendedYield",
            h = "executing",
            m = "completed",
            v = {};
          function y() {}
          function b() {}
          function x() {}
          var w = {};
          u(w, a, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            Z = E && E(E(M([])));
          Z && Z !== n && r.call(Z, a) && (w = Z);
          var O = x.prototype = y.prototype = Object.create(w);
          function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function j(t, e) {
            function n(i, o, a, l) {
              var c = p(t[i], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  s = u.value;
                return s && "object" == _(s) && r.call(s, "__await") ? e.resolve(s.__await).then(function (t) {
                  n("next", t, a, l);
                }, function (t) {
                  n("throw", t, a, l);
                }) : e.resolve(s).then(function (t) {
                  u.value = t, a(u);
                }, function (t) {
                  return n("throw", t, a, l);
                });
              }
              l(c.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (t, r) {
                function i() {
                  return new e(function (e, i) {
                    n(t, r, e, i);
                  });
                }
                return o = o ? o.then(i, i) : i();
              }
            });
          }
          function k(e, n, r) {
            var i = d;
            return function (o, a) {
              if (i === h) throw new Error("Generator is already running");
              if (i === m) {
                if ("throw" === o) throw a;
                return {
                  value: t,
                  done: !0
                };
              }
              for (r.method = o, r.arg = a;;) {
                var l = r.delegate;
                if (l) {
                  var c = N(l, r);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                  if (i === d) throw i = m, r.arg;
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = h;
                var u = p(e, n, r);
                if ("normal" === u.type) {
                  if (i = r.done ? m : f, u.arg === v) continue;
                  return {
                    value: u.arg,
                    done: r.done
                  };
                }
                "throw" === u.type && (i = m, r.method = "throw", r.arg = u.arg);
              }
            };
          }
          function N(e, n) {
            var r = n.method,
              i = e.iterator[r];
            if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, N(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
            var o = p(i, e.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, v;
            var a = o.arg;
            return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
          }
          function A(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
          }
          function L(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(A, this), this.reset(!0);
          }
          function M(e) {
            if (e || "" === e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < e.length;) if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                    return n.value = t, n.done = !0, n;
                  };
                return o.next = o;
              }
            }
            throw new TypeError(_(e) + " is not iterable");
          }
          return b.prototype = x, i(O, "constructor", {
            value: x,
            configurable: !0
          }), i(x, "constructor", {
            value: b,
            configurable: !0
          }), b.displayName = u(x, c, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name));
          }, e.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, u(t, c, "GeneratorFunction")), t.prototype = Object.create(O), t;
          }, e.awrap = function (t) {
            return {
              __await: t
            };
          }, S(j.prototype), u(j.prototype, l, function () {
            return this;
          }), e.AsyncIterator = j, e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new j(s(t, n, r, i), o);
            return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
          }, S(O), u(O, c, "Generator"), u(O, a, function () {
            return this;
          }), u(O, "toString", function () {
            return "[object Generator]";
          }), e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return n.reverse(), function t() {
              for (; n.length;) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t;
              }
              return t.done = !0, t;
            };
          }, e.values = M, L.prototype = {
            constructor: L,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return l.type = "throw", l.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  l = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    C(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return this.delegate = {
                iterator: M(e),
                resultName: n,
                nextLoc: r
              }, "next" === this.method && (this.arg = t), v;
            }
          }, e;
        }
        function v(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t;
          }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(t)).next, 0 === e) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); c = !0);
              } catch (t) {
                u = !0, i = t;
              } finally {
                try {
                  if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          }(t, e) || y(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function y(t, e) {
          if (t) {
            if ("string" == typeof t) return b(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0;
          }
        }
        function b(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var x = function (t, e, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(t) {
                try {
                  c(r.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function l(t) {
                try {
                  c(r.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function c(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                  t(e);
                })).then(a, l);
              }
              c((r = r.apply(t, e || [])).next());
            });
          },
          w = function (t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
            }
            return n;
          },
          E = [{
            key: "id",
            name: "标识",
            copy: !0
          }, {
            key: "content.title",
            name: "标题"
          }, {
            key: "content.method",
            name: "方法"
          }, {
            key: "content.path",
            name: "路径"
          }, {
            key: "content.doc",
            name: "文档链接",
            link: !0
          }, {
            key: "updateTime",
            name: "更新时间",
            format: "YYYY-MM-DD HH:mm:ss"
          }];
        function Z(t) {
          var e,
            n,
            y = this,
            b = t.addActions,
            Z = t.connector,
            O = t.data,
            S = t.serviceListUrl,
            j = t.initialValue,
            k = void 0 === j ? {} : j,
            N = (0, r.useRef)(null),
            A = (0, r.useRef)({}),
            C = v((0, r.useState)(""), 2),
            L = C[0],
            M = C[1],
            T = (0, r.useState)({
              eidtVisible: !1,
              activeId: "",
              kdev: {
                departmentOptions: [],
                interfaceOptions: [],
                searchOptions: [],
                interfaceMap: {}
              },
              tg: {},
              type: "",
              isEdit: !1,
              formModel: {
                path: "",
                title: "",
                id: "",
                type: "",
                input: "",
                output: ""
              },
              isDebug: !1,
              addActions: b ? b.some(function (t) {
                return "defalut" === t.type;
              }) ? b : [{
                type: "http",
                title: "普通接口"
              }].concat(b) : [{
                type: "http",
                title: "普通接口"
              }],
              connector: {
                add: function (t) {
                  return Z.add(Object.assign({}, t));
                },
                remove: function (t) {
                  return Z.remove(t);
                },
                getAllByType: function (t) {
                  var e;
                  return (null === (e = Z.getAllByType) || void 0 === e ? void 0 : e.call(Z, t)) || [];
                },
                update: function (t) {
                  Z.update(Object.assign({}, t));
                },
                test: function () {
                  return Z.test.apply(Z, arguments);
                }
              },
              search: function (t) {
                M(t);
              }
            }),
            R = v(T, 2),
            P = R[0],
            I = R[1],
            F = function (t, e) {
              return x(y, void 0, void 0, g().mark(function n() {
                return g().wrap(function (n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return n.abrupt("return", new Promise(function (n) {
                        var r = e || P.formModel,
                          i = r.id,
                          l = void 0 === i ? (0, o.Vj)() : i,
                          c = r.script,
                          u = w(r, ["id", "script"]);
                        if ("create" === t) {
                          var s = {
                            id: l,
                            type: P.formModel.type || P.type || "http",
                            content: Object.assign({
                              input: encodeURIComponent(a.Ys),
                              output: encodeURIComponent(a.Aj),
                              inputSchema: {
                                type: "object"
                              }
                            }, u),
                            script: c,
                            createTime: Date.now(),
                            updateTime: Date.now()
                          };
                          O.connectors.push(s), P.connector.add({
                            id: l,
                            type: P.formModel.type || P.type || "http",
                            title: u.title,
                            connectorName: a.MK,
                            script: void 0,
                            globalMock: O.config.globalMock,
                            inputSchema: u.inputSchema,
                            outputSchema: u.outputSchema
                          });
                        } else {
                          var p = "updateAll" === t;
                          O.connectors.forEach(function (t, e) {
                            if (t.id === l || p) {
                              var n = O.connectors[e];
                              p || (n = Object.assign(Object.assign({}, t), {
                                updateTime: Date.now(),
                                content: Object.assign({}, u)
                              }), O.connectors[e] = n);
                              try {
                                P.connector.update({
                                  id: p ? n.id : l,
                                  title: u.title || n.content.title,
                                  type: t.type,
                                  connectorName: a.MK,
                                  script: void 0,
                                  globalMock: O.config.globalMock,
                                  inputSchema: n.content.inputSchema,
                                  outputSchema: n.content.outputSchema
                                });
                              } catch (t) {}
                            }
                          });
                        }
                        n("");
                      }));
                    case 1:
                    case "end":
                      return n.stop();
                  }
                }, n);
              }));
            },
            D = function () {
              return F("create");
            },
            z = (0, r.useCallback)(function (t) {
              return new Promise(function (e) {
                var n = O.connectors.findIndex(function (e) {
                  return String(e.id) === String(t.id);
                });
                O.connectors.splice(n, 1);
                try {
                  P.connector.remove(t.id);
                } catch (t) {}
                e("");
              });
            }, []),
            B = (0, r.useRef)(),
            U = (0, r.useCallback)(function (t) {
              I(function (e) {
                return Object.assign(Object.assign(Object.assign({}, e), {
                  formModel: Object.assign({}, e.formModel)
                }), t);
              });
            }, []),
            q = (0, r.useCallback)(function (t) {
              var e;
              if (P.isEdit && t.id === P.activeId) U({
                type: "",
                isDebug: !1,
                activeId: void 0,
                isEdit: !1
              });else {
                var n = {
                  isEdit: !0,
                  isDebug: !0,
                  activeId: t.id
                };
                if (t.type === a.Cq.TG) n.type = a.Cq.TG, n.formModel = Object.assign({
                  id: t.id,
                  type: t.type
                }, t.content);else {
                  var r = null === (e = P.addActions.find(function (e) {
                    return e.type === t.type;
                  })) || void 0 === e ? void 0 : e.noUseInnerEdit;
                  n.type = r ? t.type : a.Cq.HTTP, n.formModel = Object.assign(Object.assign({}, t.content), {
                    type: t.type,
                    id: t.id,
                    input: t.content.input || a.Ys,
                    output: t.content.output || a.Aj
                  });
                }
                U(n);
              }
            }, [P]),
            V = (0, r.useCallback)(function (t) {
              return x(y, void 0, void 0, g().mark(function e() {
                return g().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return P.formModel = (0, c.Xh)(t.content), P.formModel.title += " 复制", U(P), e.next = 5, D();
                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
            }, []),
            K = (0, r.useCallback)(function (t) {
              return x(y, void 0, void 0, g().mark(function e() {
                return g().wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!confirm("确认删除 ".concat(t.content.title, " 吗"))) {
                        e.next = 5;
                        break;
                      }
                      return e.next = 3, z(t);
                    case 3:
                      P.type = "", U(P);
                    case 5:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
            }, [P]);
          P.addDefaultService = (0, r.useCallback)(function () {
            return x(y, void 0, void 0, g().mark(function t() {
              return g().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    P.type = a.Cq.HTTP, P.formModel = {
                      title: "",
                      type: a.Cq.HTTP,
                      path: "",
                      desc: "",
                      method: "GET",
                      useMock: !1,
                      input: encodeURIComponent(a.Ys),
                      output: encodeURIComponent(a.Aj)
                    }, U(P);
                  case 3:
                  case "end":
                    return t.stop();
                }
              }, t);
            }));
          }, []), P.updateService = F;
          var J = (0, r.useCallback)(function () {
              P.type = a.iz, U(P);
            }, []),
            G = (0, r.useCallback)(function () {
              P.type = "", P.isEdit = !1, U(P);
            }, []);
          P.onCancel = (0, r.useCallback)(function () {
            P.type = "", P.isDebug = !1, P.activeId = void 0, P.isEdit = !1, U(P);
          }, []);
          var H = function () {
              return x(y, void 0, void 0, g().mark(function t() {
                return g().wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (!P.isEdit) {
                        t.next = 5;
                        break;
                      }
                      return t.next = 3, F();
                    case 3:
                      t.next = 7;
                      break;
                    case 5:
                      return t.next = 7, D();
                    case 7:
                      P.type = "", P.activeId = void 0, P.formModel = {}, P.isEdit = !1, U(P);
                    case 12:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
            },
            Q = (0, r.useCallback)(function (t, e) {
              if (e.id === P.expandId) return P.expandId = 0, void U(P);
              P.expandId = e.id, U(P);
            }, [U, P]),
            W = (0, r.useCallback)(function (t) {
              window.open(t);
            }, []),
            Y = (0, r.useCallback)(function (t, e) {
              var n = e.key,
                r = e.format,
                o = e.copy,
                a = e.link,
                s = e.isTpl;
              if (r) return (0, u.p)(t[n], r);
              if (o) return i().createElement("span", {
                className: l.Z["sidebar-panel-list-item__copy"]
              }, "".concat(t[n]));
              if (a) return (0, c.U2)(t, n) ? i().createElement("span", {
                onClick: function () {
                  return W((0, c.U2)(t, n));
                },
                className: l.Z["doc-link"]
              }, "点击跳转") : "无";
              if (s) {
                var p = t[n];
                return i().createElement(i().Fragment, null, i().createElement("span", null, "object" === _(p) ? p.domain || "无" : p || "无"), i().createElement("br", null), (0, c.U2)(t, [n, "laneId"]) && i().createElement("span", null, (0, c.U2)(t, [n, "laneId"])));
              }
              return (0, c.U2)(t, n, "无");
            }, []),
            X = (0, r.useCallback)(function () {
              var t,
                e = P.addActions.find(function (t) {
                  return t.type === P.type && t.render;
                }),
                n = null;
              return e ? n = (null == e ? void 0 : e.render({
                onClose: G,
                originConnectors: (0, c.Xh)(O.connectors),
                globalConfig: O.config,
                initService: P.isEdit ? P.formModel : void 0,
                connectorService: {
                  add: function (t) {
                    F("create", t);
                  },
                  remove: z,
                  update: function (t) {
                    F("update", t);
                  },
                  test: function (t, e, n) {
                    return P.connector.test(Object.assign(Object.assign({}, t), {
                      connectorName: a.MK,
                      mode: "test"
                    }), e, n);
                  }
                }
              })) || null : P.type === a.Cq.HTTP && (n = i().createElement(s.Z, {
                sidebarContext: P,
                setRender: U,
                onSubmit: H,
                key: P.type,
                globalConfig: O.config,
                style: {
                  top: null === (t = N.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top
                }
              })), n;
            }, [P, P.type, S, F]),
            $ = (0, r.useCallback)(function () {
              F("updateAll");
            }, []),
            tt = (0, r.useCallback)(function () {
              var t;
              return P.type === a.iz ? i().createElement(f.Z, {
                style: {
                  top: null === (t = N.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top
                },
                closeTemplateForm: G,
                data: O,
                onChange: $
              }) : null;
            }, [P]),
            et = (0, r.useCallback)(function (t) {
              return t.type === a.Cq.TG ? E.filter(function (t) {
                var e = t.key;
                return !["content.path", "content.method", "content.desc"].includes(e);
              }) : E;
            }, []),
            nt = (0, r.useCallback)(function () {
              var t;
              0 === O.connectors.length && (null === (t = k.serviceList) || void 0 === t ? void 0 : t.length) && (O.connectors = k.serviceList, k.serviceList.forEach(function (t) {
                var e = t.content || {},
                  n = e.title,
                  r = e.inputSchema,
                  i = e.outputSchema,
                  o = {
                    id: t.id,
                    type: P.formModel.type || P.type || "http",
                    title: n,
                    connectorName: a.MK,
                    globalMock: O.config.globalMock,
                    inputSchema: r,
                    outputSchema: i
                  };
                try {
                  P.connector.add(o);
                } catch (t) {
                  console.log(t);
                }
              }));
            }, []),
            rt = (0, r.useCallback)(function (t) {
              O.config.globalMock = t, F("updateAll");
            }, []);
          return (0, r.useMemo)(function () {
            O && nt();
            try {
              P.addActions.reduce(function (t, e) {
                return [].concat(m(t), m(P.connector.getAllByType(e.type)));
              }, []).forEach(function (t) {
                var e,
                  n = null === (e = O.connectors) || void 0 === e ? void 0 : e.find(function (e) {
                    return e.id === t.id;
                  });
                n ? n.content.title !== t.title && P.connector.update(Object.assign(Object.assign({}, t), {
                  title: n.content.title
                })) : P.connector.remove(t.id);
              });
            } catch (t) {
              console.log("连接器数据 format 失败", t);
            }
          }, []), i().createElement(i().Fragment, null, i().createElement("div", {
            ref: N,
            className: "".concat(l.Z["sidebar-panel"], " ").concat(l.Z["sidebar-panel-open"]),
            onClick: function () {
              return Object.values(A.current).forEach(function (t) {
                return t();
              });
            }
          }, i().createElement("div", {
            className: "".concat(l.Z["sidebar-panel-view"])
          }, i().createElement("div", {
            className: l.Z["sidebar-panel-header"]
          }, i().createElement("div", {
            className: l.Z["sidebar-panel-header__title"]
          }, i().createElement("span", null, "服务连接"), i().createElement("div", {
            className: l.Z.rightOperate
          }, i().createElement("div", {
            className: l.Z.globalMock,
            "data-mybricks-tip": "开启全局Mock，页面调试时所有接口将默认使用Mock能力"
          }, i().createElement("span", {
            className: (null === (e = null == O ? void 0 : O.config) || void 0 === e ? void 0 : e.globalMock) ? l.Z.warning : ""
          }, "全局 Mock:"), i().createElement(h.Z, {
            defaultChecked: null === (n = null == O ? void 0 : O.config) || void 0 === n ? void 0 : n.globalMock,
            onChange: rt
          })), i().createElement("div", {
            className: l.Z.icon,
            onClick: J
          }, d.t8))), i().createElement(p.Z, {
            blurMap: A.current,
            searchValue: L,
            ctx: P,
            setRender: U
          })), i().createElement("div", {
            className: l.Z["sidebar-panel-list"]
          }, null == O ? void 0 : O.connectors.filter(function (t) {
            return "domain" !== t.content.type;
          }).filter(function (t) {
            return !L || t.content.title.includes(L);
          }).map(function (t) {
            var e,
              n = P.expandId === t.id;
            t.updateTime = (0, u.p)(t.updateTime || t.createTime);
            var r = t.content,
              o = r.useMock,
              c = r.type,
              s = P.addActions.find(function (t) {
                return t.type === c;
              }),
              p = "接口";
            o ? p = "Mock" : P.addActions.length > 1 && (p = (null == s ? void 0 : s.title) || p);
            var f = (null === (e = null == s ? void 0 : s.getTitle) || void 0 === e ? void 0 : e.call(s, t)) || t.content.title;
            return i().createElement("div", {
              key: t.id
            }, i().createElement("div", {
              key: t.id,
              className: "".concat(l.Z["sidebar-panel-list-item"], " ").concat(P.activeId === t.id ? l.Z.active : "", " ").concat(P.isEdit ? P.activeId === t.id ? l.Z.chose : l.Z.disabled : "")
            }, i().createElement("div", null, i().createElement("div", {
              onClick: function (e) {
                return Q(e, t);
              },
              className: l.Z["sidebar-panel-list-item__left"]
            }, i().createElement("div", {
              className: "".concat(l.Z.icon, " ").concat(n ? l.Z.iconExpand : "")
            }, d.Qx), i().createElement("div", {
              className: l.Z.tag,
              onClick: function (e) {
                return function (t, e) {
                  t.stopPropagation();
                  var n = e.id,
                    r = e.content;
                  if (e.type !== a.Cq.TG) {
                    if (!r.mockAddress) return P.toolTipId = n, void setTimeout(function () {
                      P.toolTipId = void 0;
                    }, 2500);
                    P.formModel = Object.assign(Object.assign({
                      id: n
                    }, r), {
                      useMock: !r.useMock
                    }), F();
                  }
                }(e, t);
              }
            }, p), i().createElement("div", {
              className: l.Z.name
            }, i().createElement("span", {
              "data-mybricks-tip": f || void 0
            }, f))), i().createElement("div", {
              className: l.Z["sidebar-panel-list-item__right"]
            }, i().createElement("div", {
              "data-mybricks-tip": "编辑",
              ref: B,
              className: l.Z.action,
              onClick: function () {
                return q(t);
              }
            }, d.eP), i().createElement("div", {
              "data-mybricks-tip": "复制",
              className: l.Z.action,
              onClick: function () {
                return V(t);
              }
            }, d.JG), i().createElement("div", {
              "data-mybricks-tip": "删除",
              className: l.Z.action,
              onClick: function () {
                return K(t);
              }
            }, d.Od)))), n ? i().createElement("div", {
              className: l.Z["sidebar-panel-list-item__expand"]
            }, et(t).map(function (e) {
              return i().createElement("div", {
                className: l.Z["sidebar-panel-list-item__param"],
                key: e.key
              }, i().createElement("span", {
                className: l.Z["sidebar-panel-list-item__name"],
                style: {
                  width: e.width
                }
              }, e.name, ":"), i().createElement("span", {
                className: l.Z["sidebar-panel-list-item__content"]
              }, Y(t, e)));
            })) : null);
          }))), X(), tt()));
        }
      },
      8704: (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_212527__) => {
        "use strict";

        __nested_webpack_require_212527__.d(__nested_webpack_exports__, {
          call: () => call
        });
        var axios__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_212527__(5274),
          _script__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_212527__(8543);
        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, _typeof(t);
        }
        function _defineProperty(t, e, n) {
          return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }
        function _toPropertyKey(t) {
          var e = _toPrimitive(t, "string");
          return "symbol" === _typeof(e) ? e : String(e);
        }
        function _toPrimitive(t, e) {
          if ("object" !== _typeof(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== _typeof(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        }
        var defaultFn = function (t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return Object.assign(Object.assign({}, t), n);
          },
          httpRegExp = new RegExp("^(http|https)://");
        function call(connector, params, config) {
          return new Promise(function (resolve, reject) {
            try {
              var fn = connector.script ? eval("(".concat(decodeURIComponent(connector.script), ")")) : getFetch(connector),
                _ref = config || {},
                _ref$before = _ref.before,
                before = void 0 === _ref$before ? defaultFn : _ref$before;
              fn(params, {
                then: resolve,
                onError: reject
              }, {
                executeEnv: connector.executeEnv,
                ajax: function (t) {
                  var e,
                    n = before(Object.assign({}, t)),
                    r = n.url;
                  return r || reject("请求路径不能为空"), connector.useProxy && httpRegExp.test(r) && (null === (e = r.match(/^https?:\/\/([^/#&?])+/g)) || void 0 === e ? void 0 : e[0]) !== location.origin ? (0, axios__WEBPACK_IMPORTED_MODULE_1__.Z)(Object.assign(Object.assign({}, n), {
                    url: "/paas/api/proxy",
                    headers: Object.assign(Object.assign({}, n.headers || {}), _defineProperty({}, "x-target-url", n.url)),
                    data: n.data
                  })).then(function (t) {
                    return t.data;
                  }).catch(reject) : (0, axios__WEBPACK_IMPORTED_MODULE_1__.Z)(n || t).then(function (t) {
                    return t.data;
                  }).catch(function (t) {
                    reject(t);
                  });
                }
              });
            } catch (t) {
              console.log("连接器错误", t), reject("连接器script错误.");
            }
          });
        }
        var setData = function (t, e, n) {
            var r = e.length;
            return function t(n, i, o) {
              if (!n || i === r) return n;
              var a = e[i];
              return Array.isArray(n) ? n.map(function (e, n) {
                var r,
                  a = o[n];
                return void 0 === a ? (r = {}, o.push(r)) : r = a, t(e, i, r);
              }) : i === r - 1 ? (o[a] = n[a], n[a]) : (n = n[a], Array.isArray(n) ? o[a] = o[a] || [] : o[a] = o[a] || {}, t(n, i + 1, Array.isArray(o) ? o : o[a]));
            }(t, 0, n);
          },
          del = function (t, e) {
            var n = e.length;
            !function t(r, i) {
              if (r && i !== n) {
                var o = e[i];
                i === n - 1 && Reflect.deleteProperty(r, o), Array.isArray(r) ? r.forEach(function (e) {
                  t(e, i);
                }) : t(r[o], i + 1);
              }
            }(t, 0);
          },
          pluginRun = function pluginRun(functionString) {
            return eval("(() => { return ".concat(functionString ? (0, _script__WEBPACK_IMPORTED_MODULE_0__.T)(functionString) : "_ => _;", "})()"));
          },
          getFetch = function (t) {
            return function (e, n, r) {
              var i = n.then,
                o = n.onError,
                a = t.method,
                l = t.path.trim(),
                c = t.outputKeys || [],
                u = t.excludeKeys || [];
              try {
                var s = l,
                  p = pluginRun(t.globalParamsFn)(a.startsWith("GET") ? {
                    params: e,
                    url: s,
                    method: a
                  } : {
                    data: e,
                    url: s,
                    method: a
                  });
                p.url = p.url || s, p.method = p.method || a;
                var d = pluginRun(t.input)(p);
                d.url = (d.url || s).replace(/{(\w+)}/g, function (t, n) {
                  var r = e[n] || "";
                  return Reflect.deleteProperty(d.params || {}, n), r;
                }), d.method = d.method || a, r.ajax(d).then(function (e) {
                  return pluginRun(t.globalResultFn)({
                    response: e,
                    config: d
                  }, {
                    throwStatusCodeError: o
                  });
                }).then(function (e) {
                  return pluginRun(t.output)(e, Object.assign({}, d), {
                    throwStatusCodeError: o
                  });
                }).then(function (t) {
                  return null == u || u.forEach(function (e) {
                    return del(t, e.split("."));
                  }), t;
                }).then(function (t) {
                  var e = Array.isArray(t) ? [] : {};
                  if (void 0 === c || 0 === c.length) e = t;else if (c.forEach(function (n) {
                    setData(t, n.split("."), e);
                  }), Array.isArray(c) && c.length && (c.length > 1 || 1 !== c.length || "" !== c[0])) try {
                    for (var n = c.map(function (t) {
                      return t.split(".");
                    }); "[object Object]" === Object.prototype.toString.call(e) && n.every(function (t) {
                      return !!t.length;
                    }) && 1 === Object.values(e).length;) e = Object.values(e)[0], n.forEach(function (t) {
                      return t.shift();
                    });
                  } catch (t) {
                    console.log("connector format data error", t);
                  }
                  i(e);
                }).catch(function (t) {
                  o(t && t.message || t);
                });
              } catch (t) {
                return o(t);
              }
            };
          };
      },
      8543: (t, e, n) => {
        "use strict";

        n.d(e, {
          T: () => i,
          i: () => o
        });
        var r = n(5525);
        function i(t) {
          return t ? decodeURIComponent(t).replace(/export\s+default.*function.*\(/, "function _RT_(") : t;
        }
        function o(t) {
          return encodeURIComponent(function (t, {
            then: e,
            onError: n
          }, r) {
            return function (t, r) {
              const i = "__method__",
                o = __outputKeys__,
                a = __excludeKeys__,
                l = __resultTransformDisabled__;
              try {
                const c = "__path__",
                  u = __globalParamsFn__(i.startsWith("GET") ? {
                    params: t,
                    url: c,
                    method: i
                  } : {
                    data: t,
                    url: c,
                    method: i
                  }),
                  s = __hasGlobalResultFn__;
                u.url = u.url || c, u.method = u.method || i;
                const p = __input__(u);
                p.url = (p.url || c).replace(/{(\w+)}/g, (e, n) => {
                  const r = t[n] || "";
                  return Reflect.deleteProperty(p.params || {}, n), r;
                }), p.method = p.method || i, r.ajax(p).then(t => s ? __globalResultFn__({
                  response: t,
                  config: p
                }, {
                  throwStatusCodeError: t => {
                    n(t);
                  }
                }) : t).then(t => __output__(t, Object.assign({}, p), {
                  throwStatusCodeError: t => {
                    n(t);
                  }
                })).then(t => l ? e(t) : (0 === a.length || a.forEach(e => {
                  const n = e.split(".");
                  !function (t, e) {
                    const n = e.length;
                    !function t(r, i) {
                      if (!r || i === n) return;
                      const o = e[i];
                      i === n - 1 && Reflect.deleteProperty(r, o), Array.isArray(r) ? r.forEach(e => {
                        t(e, i);
                      }) : t(r[o], i + 1);
                    }(t, 0);
                  }(t, n);
                }), t)).then(t => {
                  let n = Array.isArray(t) ? [] : {};
                  if (void 0 === o || 0 === o.length) n = t;else if (o.forEach(e => {
                    !function (t, e, n) {
                      const r = e.length;
                      !function t(n, i, o) {
                        if (!n || i === r) return n;
                        const a = e[i];
                        return Array.isArray(n) ? n.map((e, n) => {
                          const r = o[n];
                          let a;
                          return void 0 === r ? (a = {}, o.push(a)) : a = r, t(e, i, a);
                        }) : i === r - 1 ? (o[a] = n[a], n[a]) : (n = n[a], Array.isArray(n) ? o[a] = o[a] || [] : o[a] = o[a] || {}, t(n, i + 1, Array.isArray(o) ? o : o[a]));
                      }(t, 0, n);
                    }(t, e.split("."), n);
                  }), Array.isArray(o) && o.length && (o.length > 1 || 1 !== o.length || "" !== o[0])) try {
                    let t = o.map(t => t.split("."));
                    for (; "[object Object]" === Object.prototype.toString.call(n) && t.every(t => !!t.length) && 1 === Object.values(n).length;) n = Object.values(n)[0], t.forEach(t => t.shift());
                  } catch (t) {
                    console.log("connector format data error", t);
                  }
                  "POST" === p.method.toUpperCase() && p.url.endsWith("/domain/run") && p.data && p.data.fileId && p.data.serviceId && p.data.params && p.data.params.showToplLog ? e({
                    __ORIGIN_RESPONSE__: t,
                    outputData: n
                  }) : e(n);
                }).catch(t => {
                  n(t && t.message || t);
                });
              } catch (t) {
                return n(t);
              }
            }(t, r);
          }.toString().replace("__input__", i(t.input)).replace("__output__", i(t.output)).replace("__globalResultFn__", t.globalResultFn ? i(t.globalResultFn) : void 0).replace("__hasGlobalResultFn__", !!t.globalResultFn).replace("__method__", t.method).replace("__path__", t.path.trim()).replace("__outputKeys__", JSON.stringify(t.outputKeys)).replace("__excludeKeys__", JSON.stringify(t.excludeKeys || [])).replace("__resultTransformDisabled__", t.resultTransformDisabled).replace("__globalParamsFn__", i(t.globalParamsFn || r.Ys)));
        }
      },
      2566: (t, e, n) => {
        "use strict";

        n.d(e, {
          q: () => i
        });
        var r = n(6178);
        function i(t) {
          return new Promise((e, n) => {
            if ("http" === t.type || "http-sql" === t.type) try {
              if (t.outputSchema) return e((0, r.AS)(t.outputSchema));
              n("当前接口不存在返回值schema，不支持Mock");
            } catch (t) {
              n("connecotr mock error.");
            } else n("error connecotr type");
          });
        }
      },
      6178: (t, e, n) => {
        "use strict";

        n.d(e, {
          AE: () => c,
          AS: () => p,
          HD: () => d,
          Sm: () => u,
          Tp: () => o,
          Vj: () => s,
          Zg: () => l,
          kl: () => g,
          oV: () => m,
          rq: () => a,
          xF: () => _
        });
        var r = n(4113);
        function i(t) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, i(t);
        }
        function o(t) {
          return decodeURIComponent(t).replace(/export\s+default.*function.*\(/, "function _RT_(");
        }
        function a(t) {
          t && ("object" === t.type ? Object.values(t.properties).forEach(function (t) {
            a(t);
          }) : "array" === t.type ? (0, r.xb)(t.items) ? (Object.defineProperty(t, "type", {
            writable: !0,
            value: "array"
          }), Reflect.deleteProperty(t, "items")) : "object" === t.items.type && Object.values(t.items.properties).forEach(function (t) {
            a(t);
          }) : "unknown" === t.type && Object.defineProperty(t, "type", {
            writable: !0,
            value: "string"
          }));
        }
        function l(t, e) {
          var n = Array.isArray(t) ? [] : {};
          return void 0 === e || 0 === e.length ? n = t : e.forEach(function (e) {
            !function (t, e, n) {
              var r = e.length;
              !function t(n, i, o) {
                if (!n || i === r) return n;
                var a = e[i];
                return Array.isArray(n) ? n.map(function (e, n) {
                  var r,
                    a = o[n];
                  return void 0 === a ? (r = {}, o.push(r)) : r = a, t(e, i, r);
                }) : i === r - 1 ? (o[a] = n[a], n[a]) : (n = n[a], Array.isArray(n) ? o[a] = o[a] || [] : o[a] = o[a] || {}, t(n, i + 1, Array.isArray(o) ? o : o[a]));
              }(t, 0, n);
            }(t, e.split("."), n);
          }), n;
        }
        function c(t, e) {
          if (!e || 0 === e.length) return t;
          var n = (0, r.Xh)(t);
          return e.forEach(function (t) {
            !function (t, e) {
              var n = e.length;
              !function t(r, i) {
                if (r && i !== n) {
                  var o = e[i];
                  i === n - 1 && Reflect.deleteProperty(r, o), Array.isArray(r) ? r.forEach(function (e) {
                    t(e, i);
                  }) : t(r[o], i + 1);
                }
              }(t, 0);
            }(n, t.split("."));
          }), n;
        }
        function u(t) {
          if (t) {
            var e = {};
            return "string" === t.type ? t.defaultValue || "" : "number" === t.type ? +t.defaultValue : (t.children && ("array" === t.type && (e = []), t.children.forEach(function (t) {
              e[t.name] = u(t);
            })), e);
          }
        }
        function s() {
          for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, e = "", n = 0; n < t; n++) e += "abcdefhijkmnprstwxyz".charAt(Math.floor(20 * Math.random()));
          return "u_" + e;
        }
        function p(t) {
          return function (t) {
            if (t) {
              var e,
                n = t.type;
              if ("string" === n || "number" === n) return function (t) {
                var e = t.type;
                if (void 0 !== t.default && "" !== t.default) return t.default;
                if ("string" === e) {
                  var n = t.minLength,
                    r = void 0 === n ? 0 : n,
                    i = t.maxLength,
                    o = +r,
                    a = +(void 0 === i ? 8 : i),
                    l = function () {
                      for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, e = "abcdefhijkmnprstwxyz", n = "", r = 0; r < t; r++) n += e.charAt(Math.floor(20 * Math.random()));
                      return n;
                    }(a).slice(a - Math.round(o + Math.random() * (a - o)));
                  return l;
                }
                var c = t.minimum,
                  u = void 0 === c ? 0 : c,
                  s = t.maximum,
                  p = +u,
                  d = +(void 0 === s ? 100 : s);
                return p + Math.round(Math.random() * (d - p));
              }(t);
              if ("array" === n) {
                e = [];
                for (var r = t.minItems, i = void 0 === r ? 1 : r, o = t.maxItems, a = void 0 === o ? 5 : o, l = i + Math.round(Math.random() * (a - i)), c = 0; c < l; c++) {
                  var u = p(t.items);
                  null != u && e.push(u);
                }
              }
              return "object" === t.type && (e = {}, Object.keys(t.properties || {}).forEach(function (n) {
                e[n] = p(t.properties[n]);
              })), e;
            }
          }(t);
        }
        function d(t) {
          var e = {
            type: void 0
          };
          return f({
            schema: e,
            val: t
          }), e.type ? e : void 0;
        }
        function f(t) {
          var e,
            n,
            r = t.schema,
            o = t.val,
            a = t.key,
            l = t.fromAry;
          if (Array.isArray(o)) {
            var c = o.length ? {} : void 0;
            a ? (r[a] = {
              type: "array",
              items: c
            }, c && (r[a].items = c)) : (r.type = "array", c && (r.items = c)), function (t, e) {
              if (t) {
                var n = [];
                e.length > 0 && e.forEach(function (e) {
                  var r = JSON.parse(JSON.stringify(t));
                  f({
                    schema: r,
                    val: e,
                    fromAry: !0
                  }), n.push(r);
                }), h(t, n.filter(Boolean));
              }
            }(c, o);
          } else if ("object" === i(o) && o) {
            var u;
            l && (r.type = "object", u = r.properties = {});
            var s = l ? u : {};
            l || (a ? r[a] = {
              type: "object",
              properties: s
            } : (r.type = "object", r.properties = s)), e = s, n = o, Object.keys(n).map(function (t) {
              return f({
                schema: e,
                val: n[t],
                key: t
              });
            });
          } else {
            var p = null == o ? "unknown" : i(o);
            void 0 === a ? r.type = p : r[a] = {
              type: p
            };
          }
        }
        var h = function t(e, n) {
          if (!n) return e;
          for (var r, i = null, o = function () {
              var t = n[a];
              if (!t || !Object.keys(t).length) return 0;
              if (i) "object" === e.type && "object" === t.type ? Object.keys(t.properties || {}).forEach(function (n) {
                var r = e.properties[n];
                (!r && t.properties[n] || "unknown" === r.type && "unknown" !== t.properties[n].type) && (e.properties[n] = t.properties[n]);
              }) : "array" === e.type && "array" === t.type && (e.items && Object.keys(e.items).length || (e.items = t.items || {}));else if ("unknown" !== t.type) {
                if ("object" !== t.type && "array" !== t.type) return delete e.properties, Object.assign(e, t), 1;
                i = t, Object.assign(e, t);
              } else delete e.properties, Object.assign(e, t);
            }, a = 0; a < n.length && (0 === (r = o()) || 1 !== r); a++);
          "object" === e.type ? Object.keys(e.properties || {}).forEach(function (r) {
            var i, o, a, l, c, u;
            "object" === (null === (o = null === (i = e.properties) || void 0 === i ? void 0 : i[r]) || void 0 === o ? void 0 : o.type) ? t(e.properties[r], n.filter(Boolean).map(function (t) {
              var e;
              return null === (e = null == t ? void 0 : t.properties) || void 0 === e ? void 0 : e[r];
            })) : "array" === (null === (l = null === (a = e.properties) || void 0 === a ? void 0 : a[r]) || void 0 === l ? void 0 : l.type) && ((null === (u = null === (c = e.properties) || void 0 === c ? void 0 : c[r]) || void 0 === u ? void 0 : u.items) || (e.properties[r].items = {}), t(e.properties[r], n.filter(Boolean).map(function (t) {
              var e;
              return null === (e = null == t ? void 0 : t.properties) || void 0 === e ? void 0 : e[r];
            })));
          }) : "array" === e.type && (e.items || (e.items = {}), t(e.items, n.filter(Boolean).map(function (t) {
            return (null == t ? void 0 : t.items) || {};
          })));
        };
        function m(t) {
          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        }
        var _ = function (t) {
            var e = {
              id: s(),
              name: "root",
              type: "root",
              children: []
            };
            return function t(e, n) {
              var r, i;
              if ("object" === n.type) Object.keys(n.properties).forEach(function (r) {
                var i,
                  o = n.properties[r],
                  a = {
                    type: o.type,
                    name: r,
                    id: s(),
                    defaultValue: null !== (i = o.defaultValue) && void 0 !== i ? i : "",
                    children: []
                  };
                e.children.push(a), ["array", "object"].includes(o.type) && t(a, o);
              });else if ("array" === n.type) {
                if (!(null === (r = n.items) || void 0 === r ? void 0 : r.type)) return;
                var o = {
                  type: n.items.type,
                  name: "0",
                  id: s(),
                  defaultValue: null !== (i = n.items.defaultValue) && void 0 !== i ? i : "",
                  children: []
                };
                e.children.push(o), ["array", "object"].includes(n.items.type) && t(o, n.items);
              }
            }(e, t), e;
          },
          g = function (t) {
            var e = {
                id: s(),
                name: "root",
                type: "root",
                children: []
              },
              n = d(t);
            return a(n), function t(e, n) {
              n && (Array.isArray(n) ? n.forEach(function (n, r) {
                var o = null == n ? "string" : Array.isArray(n) ? "array" : i(n),
                  a = {
                    name: String(r),
                    id: s(),
                    defaultValue: ["object", "array"].includes(o) ? "" : n,
                    children: [],
                    type: o
                  };
                e.children.push(a), t(a, n);
              }) : "object" === i(n) && Object.keys(n).forEach(function (r) {
                var o = null === n[r] || void 0 === n[r] ? "string" : Array.isArray(n[r]) ? "array" : i(n[r]),
                  a = {
                    name: r,
                    id: s(),
                    defaultValue: ["object", "array"].includes(o) ? "" : n[r],
                    children: [],
                    type: o
                  };
                e.children.push(a), t(a, n[r]);
              }));
            }(e, t), {
              params: e,
              originSchema: n
            };
          };
      },
      1327: (t, e, n) => {
        "use strict";

        function r(t) {
          return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, r(t);
        }
        function i(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          if (null === t || "object" !== r(t)) return t;
          var n = e.filter(function (e) {
            return e.original === t;
          })[0];
          if (n) return n.copy;
          var o = Array.isArray(t) ? [] : {};
          return e.push({
            original: t,
            copy: o
          }), Object.keys(t).forEach(function (n) {
            o[n] = i(t[n], e);
          }), o;
        }
        n.d(e, {
          X: () => i
        });
      },
      3286: (t, e, n) => {
        "use strict";

        Math.max, Math.min;
      },
      4522: (t, e, n) => {
        "use strict";

        function r(t) {
          return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, r(t);
        }
        function i(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function o(t, e, n) {
          if (!e || !t) return t;
          var o,
            a = Array.isArray(e) ? function (t) {
              if (Array.isArray(t)) return i(t);
            }(o = e) || function (t) {
              if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(o) || function (t, e) {
              if (t) {
                if ("string" == typeof t) return i(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0;
              }
            }(o) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }() : e.split("."),
            l = a.length;
          return function t(e, i) {
            if (i === l) return e;
            var o = a[i];
            return null == (e = Array.isArray(e) ? e.map(function (e) {
              return function (t, e, n) {
                return (e = function (t) {
                  var e = function (t, e) {
                    if ("object" !== r(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var i = n.call(t, "string");
                      if ("object" !== r(i)) return i;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                  }(t);
                  return "symbol" === r(e) ? e : String(e);
                }(e)) in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = n, t;
              }({}, o, t(e[o], i + 1));
            }) : e[o]) ? n : t(e, i + 1);
          }(t, 0);
        }
        n.d(e, {
          Z: () => o
        });
      },
      4113: (t, e, n) => {
        "use strict";

        n.d(e, {
          U2: () => i.Z,
          Xh: () => r.X,
          xb: () => o.Z
        }), n(3286);
        var r = n(1327),
          i = n(4522),
          o = n(273);
      },
      273: (t, e, n) => {
        "use strict";

        function r(t) {
          return !t || (Array.isArray(t) ? 0 === t.length : "[object Object]" !== Object.prototype.toString.call(t) || 0 === Object.keys(t).length);
        }
        n.d(e, {
          Z: () => r
        });
      },
      1988: (t, e, n) => {
        "use strict";

        function r(t) {
          return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, r(t);
        }
        function i(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YY-mm-dd HH:MM:SS";
          if ("number" == typeof t && (t = new Date(t)), "object" === r(t) && t instanceof Date) {
            var n,
              i = {
                "Y+": t.getFullYear().toString(),
                "m+": (t.getMonth() + 1).toString(),
                "d+": t.getDate().toString(),
                "H+": t.getHours().toString(),
                "M+": t.getMinutes().toString(),
                "S+": t.getSeconds().toString()
              };
            for (var o in i) (n = new RegExp("(" + o + ")").exec(e)) && (e = e.replace(n[1], 1 == n[1].length ? i[o] : i[o].padStart(n[1].length, "0")));
            return e;
          }
          return t;
        }
        n.d(e, {
          p: () => i
        });
      },
      1771: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, '.http_plugin_btn_35GaF {\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  margin-left: 8px !important;\n  color: rgba(0, 0, 0, 0.85);\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  font-size: 12px !important;\n  height: 24px;\n  line-height: 1 !important;\n  border-radius: 3px;\n  padding: 0 10px;\n  outline: 0;\n  cursor: pointer;\n  user-select: none;\n}\n.http_plugin_btn_35GaF[type="primary"] {\n  color: #fff;\n  border-color: #fa6400;\n  background-color: #fa6400;\n  font-weight: bold;\n}\n', ""]), i.locals = {
          btn: "http_plugin_btn_35GaF"
        };
        const o = i;
      },
      6866: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_collapse_BSQER {\n  position: relative;\n  font-size: 12px;\n  height: auto;\n}\n.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta {\n  display: flex;\n  height: 30px;\n  align-items: center;\n  cursor: pointer;\n}\n.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta svg {\n  max-width: 10px;\n}\n.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta .http_plugin_icon_dE9w9 {\n  display: flex;\n  align-items: center;\n  margin-right: 6px;\n  transform: rotate(90deg);\n}\n.http_plugin_collapse_BSQER .http_plugin_header_Vv1Ta .http_plugin_fold_zmH-D {\n  transform: rotate(0);\n}\n.http_plugin_collapse_BSQER .http_plugin_content_Ye5fL {\n  height: 100%;\n}\n", ""]), i.locals = {
          collapse: "http_plugin_collapse_BSQER",
          header: "http_plugin_header_Vv1Ta",
          icon: "http_plugin_icon_dE9w9",
          fold: "http_plugin_fold_zmH-D",
          content: "http_plugin_content_Ye5fL"
        };
        const o = i;
      },
      4647: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_dropdown_rYfiS {\n  position: relative;\n}\n.http_plugin_dropdown_rYfiS .http_plugin_content_gokc7 {\n  position: absolute;\n  z-index: 1;\n}\n.http_plugin_dropdown_rYfiS:hover .http_plugin_content_gokc7 {\n  display: inline-block;\n}\n", ""]), i.locals = {
          dropdown: "http_plugin_dropdown_rYfiS",
          content: "http_plugin_content_gokc7"
        };
        const o = i;
      },
      6846: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_item_bJJv8 {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  font-size: 12px;\n  position: relative;\n}\n.http_plugin_item_bJJv8 label {\n  flex: 0 0 80px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_item_bJJv8 label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.http_plugin_item_bJJv8 .http_plugin_editor_F2d0T {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r input,\n.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.http_plugin_item_bJJv8 .http_plugin_textEdt_5gQ7r textarea {\n  min-height: 50px;\n}\n.http_plugin_item_bJJv8 .http_plugin_content_ADEiD {\n  flex: 1;\n  padding-left: 6px;\n}\n", ""]), i.locals = {
          item: "http_plugin_item_bJJv8",
          editor: "http_plugin_editor_F2d0T",
          textEdt: "http_plugin_textEdt_5gQ7r",
          content: "http_plugin_content_ADEiD"
        };
        const o = i;
      },
      1053: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_input_B1NQM {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n}\n.http_plugin_input_B1NQM label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_input_B1NQM label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.http_plugin_input_B1NQM .http_plugin_editor_ipRem {\n  flex: 1;\n  display: flex;\n  position: relative;\n}\n.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 input,\n.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 input:focus,\n.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_input_B1NQM .http_plugin_textEdt_3cuh0 textarea {\n  min-height: 50px;\n}\n", ""]), i.locals = {
          input: "http_plugin_input_B1NQM",
          editor: "http_plugin_editor_ipRem",
          textEdt: "http_plugin_textEdt_3cuh0"
        };
        const o = i;
      },
      696: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, "@keyframes http_plugin_animation_ZEbqT {\n  0% {\n    top: -20px;\n  }\n  100% {\n    top: 20px;\n  }\n}\n.http_plugin_message_vZqSi {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  z-index: 1001;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  pointer-events: all;\n  animation: http_plugin_animation_ZEbqT 0.25s;\n}\n.http_plugin_message_vZqSi > svg {\n  flex-shrink: 0;\n}\n.http_plugin_message_vZqSi .http_plugin_content_IT5bL {\n  margin-left: 8px;\n}\n", ""]), i.locals = {
          message: "http_plugin_message_vZqSi",
          animation: "http_plugin_animation_ZEbqT",
          content: "http_plugin_content_IT5bL"
        };
        const o = i;
      },
      5235: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_ct_VLaxB {\n  display: flex;\n  align-items: center;\n}\n.http_plugin_ct_VLaxB label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_ct_VLaxB label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL {\n  display: inline-block;\n  box-sizing: border-box;\n  position: relative;\n  padding-left: 6px;\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 0;\n  border-radius: 100px;\n  cursor: pointer;\n  min-width: 28px;\n  height: 16px;\n  line-height: 16px;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  transition: all 0.2s;\n}\n.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL.http_plugin_checked_V90Jh {\n  background-color: #fa6400;\n}\n.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL.http_plugin_checked_V90Jh .http_plugin_handle_56\\+K2 {\n  left: initial;\n  right: 2px;\n}\n.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL .http_plugin_handle_56\\+K2 {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  transition: all 0.2s ease-in-out;\n  top: 2px;\n  left: 2px;\n}\n.http_plugin_ct_VLaxB .http_plugin_switch_xQgWL .http_plugin_handle_56\\+K2::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  border-radius: 9px;\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n  content: '';\n}\n", ""]), i.locals = {
          ct: "http_plugin_ct_VLaxB",
          switch: "http_plugin_switch_xQgWL",
          checked: "http_plugin_checked_V90Jh",
          handle: "http_plugin_handle_56+K2"
        };
        const o = i;
      },
      1218: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_title_0jgJA {\n  font-size: 12px;\n  padding: 4px;\n  margin-top: -20px;\n}\n.http_plugin_formItem_Omdlf label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_paramEditContainer_GPnBL {\n  position: relative;\n}\n.http_plugin_paramEditContainer_GPnBL .http_plugin_codeIcon_M8GzJ {\n  right: -2px;\n  top: -26px;\n}\n.http_plugin_codeText_WuKWf {\n  width: calc(100% - 12px);\n  padding: 5px;\n  border: 1px solid #CCC;\n  border-radius: 3px;\n  overflow: auto;\n  resize: vertical;\n}\n.http_plugin_codeIcon_M8GzJ {\n  position: absolute;\n  cursor: pointer;\n  width: 40px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px;\n}\n.http_plugin_codeIcon_M8GzJ.http_plugin_focus_RSgsC,\n.http_plugin_codeIcon_M8GzJ:hover {\n  background-color: #AAA;\n}\n.http_plugin_codeIcon_M8GzJ.http_plugin_focus_RSgsC svg,\n.http_plugin_codeIcon_M8GzJ:hover svg {\n  fill: #FFFFFF;\n}\n.http_plugin_responseCodeIcon_jQRR0 {\n  right: -2px;\n  top: -1px;\n}\n", ""]), i.locals = {
          title: "http_plugin_title_0jgJA",
          formItem: "http_plugin_formItem_Omdlf",
          paramEditContainer: "http_plugin_paramEditContainer_GPnBL",
          codeIcon: "http_plugin_codeIcon_M8GzJ",
          codeText: "http_plugin_codeText_WuKWf",
          focus: "http_plugin_focus_RSgsC",
          responseCodeIcon: "http_plugin_responseCodeIcon_jQRR0"
        };
        const o = i;
      },
      1332: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_edt_r9NLe {\n  display: flex;\n  flex-direction: row;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.http_plugin_edt_r9NLe .http_plugin_opt_n718P {\n  padding: 3px 8px;\n  font-size: 12px;\n  background: #FFF;\n  cursor: pointer;\n  border: 1px solid #DDD;\n  display: flex;\n  align-items: center;\n}\n.http_plugin_edt_r9NLe .http_plugin_opt_n718P:not(:last-child) {\n  border-right: 1px solid #DDD;\n}\n.http_plugin_edt_r9NLe .http_plugin_selected_l-JCz {\n  background: #616C81;\n  color: #FFF;\n  font-weight: bold;\n  margin: -1px;\n}\n", ""]), i.locals = {
          edt: "http_plugin_edt_r9NLe",
          opt: "http_plugin_opt_n718P",
          selected: "http_plugin_selected_l-JCz"
        };
        const o = i;
      },
      4275: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_ct_AoMva {\n  padding: 0 6px 0;\n  border-radius: 6px;\n  border: 1px solid #eee;\n  margin-bottom: 12px;\n}\n.http_plugin_item_cpnhp {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  align-items: center;\n  font-size: 12px;\n}\n.http_plugin_item_cpnhp label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_item_cpnhp label i {\n  font-style: normal;\n  color: #FF0000;\n}\n.http_plugin_item_cpnhp .http_plugin_editor_c2\\+ew {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.http_plugin_item_cpnhp .http_plugin_error_DQ2AB {\n  border: 1px solid #FF0000 !important;\n  padding: 0;\n  margin-bottom: 4px;\n}\n.http_plugin_item_cpnhp .http_plugin_error_DQ2AB::after {\n  content: attr(data-err);\n  color: red;\n  position: absolute;\n  bottom: -17px;\n}\n.http_plugin_item_cpnhp .http_plugin_textEdt_olQqY input,\n.http_plugin_item_cpnhp .http_plugin_textEdt_olQqY textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.http_plugin_item_cpnhp .http_plugin_textEdt_olQqY input:focus,\n.http_plugin_item_cpnhp .http_plugin_textEdt_olQqY textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_item_cpnhp .http_plugin_textEdt_olQqY textarea {\n  min-height: 50px;\n}\n", ""]), i.locals = {
          ct: "http_plugin_ct_AoMva",
          item: "http_plugin_item_cpnhp",
          editor: "http_plugin_editor_c2+ew",
          error: "http_plugin_error_DQ2AB",
          textEdt: "http_plugin_textEdt_olQqY"
        };
        const o = i;
      },
      8934: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_item_IfswP {\n  padding: 0 12px 2px 12px;\n}\n.http_plugin_envItem_TyO4t {\n  display: flex;\n  flex-direction: row;\n  margin: 14px 0;\n  align-items: center;\n  font-size: 12px;\n}\n.http_plugin_envItem_TyO4t label {\n  width: 75px;\n  text-align: right;\n  padding-right: 5px;\n  font-size: 12px;\n}\n.http_plugin_envItem_TyO4t .http_plugin_editor_Sm9Qr {\n  flex: 1;\n  display: flex;\n  position: relative;\n  padding-left: 6px;\n}\n.http_plugin_envItem_TyO4t .http_plugin_textEdt_-YK8Z input,\n.http_plugin_envItem_TyO4t .http_plugin_textEdt_-YK8Z textarea {\n  border: 1px solid #DDD;\n  border-radius: 3px;\n  padding: 5px;\n  background: #FFF;\n  width: 100%;\n  line-height: 1;\n}\n.http_plugin_envItem_TyO4t .http_plugin_textEdt_-YK8Z input:focus,\n.http_plugin_envItem_TyO4t .http_plugin_textEdt_-YK8Z textarea:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_envItem_TyO4t .http_plugin_textEdt_-YK8Z textarea {\n  min-height: 50px;\n}\n", ""]), i.locals = {
          item: "http_plugin_item_IfswP",
          envItem: "http_plugin_envItem_TyO4t",
          editor: "http_plugin_editor_Sm9Qr",
          textEdt: "http_plugin_textEdt_-YK8Z"
        };
        const o = i;
      },
      1010: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_item_N3plE,\n.http_plugin_header_awzLs {\n  display: flex;\n  font-size: 12px;\n}\n.http_plugin_item_N3plE .http_plugin_fieldName_LTGxl,\n.http_plugin_header_awzLs .http_plugin_fieldName_LTGxl {\n  width: 331px;\n}\n.http_plugin_item_N3plE .http_plugin_type_fPfhn,\n.http_plugin_header_awzLs .http_plugin_type_fPfhn {\n  text-align: center;\n  width: 60px;\n  border: none;\n  background-color: transparent;\n}\n.http_plugin_item_N3plE .http_plugin_defaultValue_w0fd9,\n.http_plugin_header_awzLs .http_plugin_defaultValue_w0fd9 {\n  text-align: center;\n  width: 48px;\n}\n.http_plugin_item_N3plE .http_plugin_range_pTOvl,\n.http_plugin_header_awzLs .http_plugin_range_pTOvl {\n  text-align: center;\n  width: 121px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 10px;\n}\n.http_plugin_item_N3plE .http_plugin_range_pTOvl input,\n.http_plugin_header_awzLs .http_plugin_range_pTOvl input {\n  width: 60px;\n}\n.http_plugin_item_N3plE .http_plugin_range_pTOvl .http_plugin_min_I5AvV,\n.http_plugin_header_awzLs .http_plugin_range_pTOvl .http_plugin_min_I5AvV {\n  margin-right: 1px;\n}\n.http_plugin_item_N3plE .http_plugin_range_pTOvl .http_plugin_max_n5Dua,\n.http_plugin_header_awzLs .http_plugin_range_pTOvl .http_plugin_max_n5Dua {\n  margin-left: 1px;\n}\n.http_plugin_item_N3plE .http_plugin_range_pTOvl .http_plugin_error_l8dhl,\n.http_plugin_header_awzLs .http_plugin_range_pTOvl .http_plugin_error_l8dhl {\n  border: 1px solid red;\n}\n.http_plugin_item_N3plE .http_plugin_operate_Is7W7,\n.http_plugin_header_awzLs .http_plugin_operate_Is7W7 {\n  width: 40px;\n  text-align: center;\n}\n.http_plugin_item_N3plE p,\n.http_plugin_header_awzLs p {\n  margin-bottom: 0;\n}\n.http_plugin_content_Qy2x0 {\n  display: flex;\n}\n.http_plugin_item_N3plE {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  height: 20px;\n}\n.http_plugin_item_N3plE .http_plugin_label_t6Dwx {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n.http_plugin_item_N3plE input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n  box-sizing: border-box;\n}\n.http_plugin_item_N3plE input:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_item_N3plE input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.http_plugin_item_N3plE .http_plugin_iconRemove_4MZOu {\n  height: 12px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n.http_plugin_item_N3plE .http_plugin_iconRemove_4MZOu:hover {\n  color: #fa6400;\n}\n.http_plugin_item_N3plE .http_plugin_iconAdder_lmFLu {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 12px;\n  height: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.http_plugin_item_N3plE .http_plugin_iconAdder_lmFLu:hover {\n  color: #fa6400;\n}\n.http_plugin_ct_T8qgE {\n  margin-left: 20px;\n}\n.http_plugin_list_Ou8sD {\n  margin-left: -20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.http_plugin_flex_4Cyds {\n  display: flex;\n  align-items: center;\n}\n.http_plugin_mockData_Z-xHW {\n  margin: 0 10px 0 -80px;\n}\n.http_plugin_empty_ZAI1y {\n  position: relative;\n  color: #999;\n  font-style: italic;\n  font-size: 12px;\n}\n", ""]), i.locals = {
          item: "http_plugin_item_N3plE",
          header: "http_plugin_header_awzLs",
          fieldName: "http_plugin_fieldName_LTGxl",
          type: "http_plugin_type_fPfhn",
          defaultValue: "http_plugin_defaultValue_w0fd9",
          range: "http_plugin_range_pTOvl",
          min: "http_plugin_min_I5AvV",
          max: "http_plugin_max_n5Dua",
          error: "http_plugin_error_l8dhl",
          operate: "http_plugin_operate_Is7W7",
          content: "http_plugin_content_Qy2x0",
          label: "http_plugin_label_t6Dwx",
          iconRemove: "http_plugin_iconRemove_4MZOu",
          iconAdder: "http_plugin_iconAdder_lmFLu",
          ct: "http_plugin_ct_T8qgE",
          list: "http_plugin_list_Ou8sD",
          flex: "http_plugin_flex_4Cyds",
          mockData: "http_plugin_mockData_Z-xHW",
          empty: "http_plugin_empty_ZAI1y"
        };
        const o = i;
      },
      2814: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_item_yHXO8,\n.http_plugin_header_O7Mrp {\n  display: flex;\n  font-size: 12px;\n}\n.http_plugin_item_yHXO8 .http_plugin_column_lHwyD,\n.http_plugin_header_O7Mrp .http_plugin_column_lHwyD {\n  text-align: center;\n  width: 78px;\n}\n.http_plugin_item_yHXO8 p,\n.http_plugin_header_O7Mrp p {\n  margin-bottom: 0;\n}\n.http_plugin_content_XuJcO {\n  display: flex;\n  margin-left: -30px;\n}\n.http_plugin_item_yHXO8 {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n  position: relative;\n}\n.http_plugin_item_yHXO8::before {\n  position: absolute;\n  left: -14px;\n  width: 12px;\n  top: 10px;\n  border-bottom: 1px solid #aaa;\n  content: '';\n}\n.http_plugin_item_yHXO8 .http_plugin_label_mLng0 {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n.http_plugin_item_yHXO8 .http_plugin_type_SAyIL {\n  width: 30px;\n  text-align: left;\n  padding-right: 5px;\n}\n.http_plugin_item_yHXO8 input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n}\n.http_plugin_item_yHXO8 input:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_item_yHXO8 input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.http_plugin_item_yHXO8 .http_plugin_iconRemove_aGa\\+f {\n  cursor: pointer;\n}\n.http_plugin_item_yHXO8 .http_plugin_iconAdder_bJ-MT {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 3px;\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n.http_plugin_item_yHXO8 .http_plugin_iconAdder_bJ-MT:hover {\n  color: #ffffff;\n  background-color: #fa6400;\n}\n.http_plugin_rootItem_F2qcU::before {\n  display: none;\n}\n.http_plugin_ct_qa6mj {\n  position: relative;\n  width: 100%;\n  margin-left: 12px;\n  padding: 0 5px 0 15px;\n}\n.http_plugin_ct_qa6mj::before {\n  position: absolute;\n  left: 0;\n  top: -2px;\n  bottom: -2px;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.http_plugin_ct_qa6mj:first-child::before {\n  display: none;\n}\n.http_plugin_ct_qa6mj:last-child::before {\n  height: 13px;\n}\n.http_plugin_list_c065d {\n  margin-left: -12px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.http_plugin_flex_AjFDN {\n  display: flex;\n  align-items: center;\n}\n.http_plugin_typeName_iTmyF {\n  font-style: italic;\n  color: #777;\n  padding-left: 3px;\n}\n.http_plugin_debug_EvexP {\n  border-top: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n", ""]), i.locals = {
          item: "http_plugin_item_yHXO8",
          header: "http_plugin_header_O7Mrp",
          column: "http_plugin_column_lHwyD",
          content: "http_plugin_content_XuJcO",
          label: "http_plugin_label_mLng0",
          type: "http_plugin_type_SAyIL",
          iconRemove: "http_plugin_iconRemove_aGa+f",
          iconAdder: "http_plugin_iconAdder_bJ-MT",
          rootItem: "http_plugin_rootItem_F2qcU",
          ct: "http_plugin_ct_qa6mj",
          list: "http_plugin_list_c065d",
          flex: "http_plugin_flex_AjFDN",
          typeName: "http_plugin_typeName_iTmyF",
          debug: "http_plugin_debug_EvexP"
        };
        const o = i;
      },
      4671: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_item_ZLvbv,\n.http_plugin_header_Z4rsc {\n  display: flex;\n  font-size: 12px;\n}\n.http_plugin_item_ZLvbv .http_plugin_column1_NRsMa,\n.http_plugin_header_Z4rsc .http_plugin_column1_NRsMa {\n  width: 270px;\n}\n.http_plugin_item_ZLvbv .http_plugin_column2_ZatCi,\n.http_plugin_header_Z4rsc .http_plugin_column2_ZatCi {\n  text-align: center;\n  width: 45px;\n  border: none;\n  background-color: transparent;\n}\n.http_plugin_item_ZLvbv .http_plugin_column3_ODABZ,\n.http_plugin_header_Z4rsc .http_plugin_column3_ODABZ {\n  text-align: center;\n  width: 68px;\n}\n.http_plugin_item_ZLvbv .http_plugin_column4_piwS\\+,\n.http_plugin_header_Z4rsc .http_plugin_column4_piwS\\+ {\n  width: 46px;\n  margin-left: 8px;\n}\n.http_plugin_item_ZLvbv p,\n.http_plugin_header_Z4rsc p {\n  margin-bottom: 0;\n}\n.http_plugin_content_1fW25 {\n  display: flex;\n}\n.http_plugin_item_ZLvbv {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n}\n.http_plugin_item_ZLvbv .http_plugin_label_tLjVB {\n  text-align: right;\n  padding: 0 5px;\n  color: #777;\n}\n.http_plugin_item_ZLvbv .http_plugin_type_DpoJY {\n  width: 30px;\n  text-align: left;\n  padding-right: 5px;\n}\n.http_plugin_item_ZLvbv input {\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #fff;\n  padding: 5px;\n  line-height: 1;\n  text-align: left !important;\n  box-sizing: border-box;\n}\n.http_plugin_item_ZLvbv input:focus {\n  outline: 1px solid #fa6400;\n}\n.http_plugin_item_ZLvbv input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.http_plugin_item_ZLvbv .http_plugin_iconRemove_ju0pa {\n  cursor: pointer;\n}\n.http_plugin_item_ZLvbv .http_plugin_iconRemove_ju0pa:hover {\n  color: #fa6400;\n}\n.http_plugin_item_ZLvbv .http_plugin_iconAdder_URoHq {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 3px;\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n.http_plugin_item_ZLvbv .http_plugin_iconAdder_URoHq:hover {\n  color: #fa6400;\n}\n.http_plugin_ct_MCWm\\+ {\n  width: 100%;\n  margin-left: 20px;\n}\n.http_plugin_list_IekhF {\n  margin-left: -20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.http_plugin_flex_ShDDj {\n  display: flex;\n  align-items: center;\n}\n.http_plugin_iconRootAdder_HsRGM {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: normal;\n  color: #555;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n.http_plugin_iconRootAdder_HsRGM:hover {\n  color: #fa6400;\n}\n", ""]), i.locals = {
          item: "http_plugin_item_ZLvbv",
          header: "http_plugin_header_Z4rsc",
          column1: "http_plugin_column1_NRsMa",
          column2: "http_plugin_column2_ZatCi",
          column3: "http_plugin_column3_ODABZ",
          column4: "http_plugin_column4_piwS+",
          content: "http_plugin_content_1fW25",
          label: "http_plugin_label_tLjVB",
          type: "http_plugin_type_DpoJY",
          iconRemove: "http_plugin_iconRemove_ju0pa",
          iconAdder: "http_plugin_iconAdder_URoHq",
          ct: "http_plugin_ct_MCWm+",
          list: "http_plugin_list_IekhF",
          flex: "http_plugin_flex_ShDDj",
          iconRootAdder: "http_plugin_iconRootAdder_HsRGM"
        };
        const o = i;
      },
      5080: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_returnParams_Gw1ig {\n  position: relative;\n  padding: 0 5px 5px 15px;\n  font-size: 12px;\n  margin-left: -10px;\n}\n.http_plugin_returnParams_Gw1ig:hover .http_plugin_keyName_OESI3 button {\n  display: block !important;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x {\n  margin-left: 10px;\n  padding: 0 5px 0 15px;\n  position: relative;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x:last-child:before {\n  left: 0;\n  top: 0;\n  height: 15px;\n  border-left: 1px solid #aaa;\n  content: '';\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x .http_plugin_keyName_OESI3 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 28px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x .http_plugin_keyName_OESI3:before {\n  position: absolute;\n  left: -14px;\n  width: 12px;\n  top: 14px;\n  border-bottom: 1px solid #aaa;\n  content: '';\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x .http_plugin_keyName_OESI3 .http_plugin_typeName_8goPJ {\n  font-style: italic;\n  color: #777;\n  padding-left: 3px;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_item_K210x .http_plugin_keyName_OESI3 button {\n  display: none;\n  margin: 0 0 0 5px;\n  padding: 2px;\n  font-size: 10px;\n  cursor: pointer;\n  line-height: 1;\n  border-radius: 3px;\n  background-color: #fff;\n  border: 1px solid #fa6400;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_rootItem_uJAC6 {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_rootItem_uJAC6:before {\n  border-left-width: 0 !important;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_rootItem_uJAC6 > .http_plugin_keyName_OESI3 {\n  margin-left: -8px;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_rootItem_uJAC6 > .http_plugin_keyName_OESI3:before {\n  border-bottom-width: 0 !important;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_markAsReturn_L7S4N .http_plugin_marked_Quhet {\n  border-radius: 10px;\n  border-left: 2px solid #fa6400;\n  color: #fa6400;\n  /* background: #fa6400; */\n  font-size: 10px;\n  font-weight: bold;\n  padding: 1px 5px;\n  position: absolute;\n  left: -11px;\n  right: 0;\n  height: 100%;\n  background: rgba(250, 100, 0, 0.1);\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_markAsReturn_L7S4N .http_plugin_marked_Quhet:before {\n  position: absolute;\n  content: '返回内容';\n  width: 49px;\n  height: 100%;\n  left: -50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_markAsReturn_L7S4N .http_plugin_exclude_0WX2v {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: linear-gradient(-45deg, #ccc 0, #ccc 25%, transparent 25%, transparent 50%, #ccc 50%, #ccc 75%, transparent 75%, transparent 100%);\n  background-size: 6px 6px;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_popMenu_GUh7F {\n  display: none;\n  width: 120px;\n  position: absolute;\n  background: #fff;\n  padding: 5px;\n  box-shadow: 0 1px 5px #aaa;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_popMenu_GUh7F .http_plugin_menuItem_Df-9U {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.http_plugin_returnParams_Gw1ig .http_plugin_popMenu_GUh7F .http_plugin_menuItem_Df-9U:hover {\n  background: #eee;\n}\n.http_plugin_errorInfo_r03FB {\n  font-size: 14px;\n  font-style: italic;\n  color: #fa6400;\n}\n.http_plugin_empty_VnReI {\n  position: relative;\n  color: #999;\n  font-style: italic;\n  font-size: 12px;\n}\n", ""]), i.locals = {
          returnParams: "http_plugin_returnParams_Gw1ig",
          keyName: "http_plugin_keyName_OESI3",
          item: "http_plugin_item_K210x",
          typeName: "http_plugin_typeName_8goPJ",
          rootItem: "http_plugin_rootItem_uJAC6",
          markAsReturn: "http_plugin_markAsReturn_L7S4N",
          marked: "http_plugin_marked_Quhet",
          exclude: "http_plugin_exclude_0WX2v",
          popMenu: "http_plugin_popMenu_GUh7F",
          menuItem: "http_plugin_menuItem_Df-9U",
          errorInfo: "http_plugin_errorInfo_r03FB",
          empty: "http_plugin_empty_VnReI"
        };
        const o = i;
      },
      2287: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_toolbar_petZh {\n  height: 30px;\n  background: #FFF;\n  border-bottom: 1px solid #DDD;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px 0 10px;\n}\n.http_plugin_toolbar_petZh .http_plugin_search_hpd5V {\n  border-radius: 3px;\n  height: 22px;\n  flex: 1;\n  padding: 0 5px 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.http_plugin_toolbar_petZh .http_plugin_search_hpd5V input {\n  flex: 1;\n  height: 100%;\n  padding: 5px;\n}\n.http_plugin_toolbar_petZh .http_plugin_search_hpd5V svg {\n  width: 13px;\n}\n.http_plugin_toolbar_petZh .http_plugin_search_hpd5V svg path {\n  stroke: #AAA;\n}\n.http_plugin_toolbar_petZh .http_plugin_icon_KVZsC {\n  cursor: pointer;\n  color: #555;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.http_plugin_toolbar_petZh .http_plugin_icon_KVZsC:hover {\n  color: #fa6400;\n}\n.http_plugin_toolbar_petZh .http_plugin_icon_KVZsC:last-child {\n  margin-right: -4px;\n}\n.http_plugin_toolbar_petZh .http_plugin_disable_foejX {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.http_plugin_center_Hd6uj {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.http_plugin_center_Hd6uj:hover {\n  color: #ffffff;\n  background-color: #fa6400;\n}\n.http_plugin_clickAble_QfvIy {\n  cursor: pointer;\n}\n.http_plugin_ct_HmqmC {\n  background-color: #fff;\n  padding: 4px 0;\n  box-shadow: 0 0 10px 3px #ddd;\n  width: 80px;\n}\n.http_plugin_ct_HmqmC .http_plugin_item_8TOP3 {\n  padding: 5px 12px;\n  cursor: pointer;\n}\n.http_plugin_ct_HmqmC .http_plugin_item_8TOP3:hover {\n  background-color: #f5f7f9;\n}\n", ""]), i.locals = {
          toolbar: "http_plugin_toolbar_petZh",
          search: "http_plugin_search_hpd5V",
          icon: "http_plugin_icon_KVZsC",
          disable: "http_plugin_disable_foejX",
          center: "http_plugin_center_Hd6uj",
          clickAble: "http_plugin_clickAble_QfvIy",
          ct: "http_plugin_ct_HmqmC",
          item: "http_plugin_item_8TOP3"
        };
        const o = i;
      },
      7688: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()(function (t) {
            return t[1];
          });
        i.push([t.id, ".http_plugin_sidebar-panel_xLItE {\n  width: 320px;\n  background-color: #f7f7f7;\n  z-index: 9;\n  display: none;\n  height: 100%;\n}\n.http_plugin_sidebar-panel-view_QjkK1 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.http_plugin_sidebar-panel-edit_lTSDc {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 5px 0 10px -5px #ddd;\n  overflow: hidden;\n  width: 560px;\n  position: absolute;\n  z-index: 1000;\n  bottom: 26px;\n  left: 271px;\n  background-color: #f7f7f7;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n}\n.http_plugin_sidebar-panel-edit-open_KMEjZ {\n  display: block;\n}\n.http_plugin_sidebar-panel-open_UJGMq {\n  display: flex;\n}\n.http_plugin_sidebar-panel-title_CHbln {\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0 10px;\n  line-height: 50px;\n  height: 50px;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: text;\n}\n.http_plugin_sidebar-panel-header_UaUAw {\n  background-color: #f7f7f7;\n  justify-content: space-between;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_icon_W3NYa {\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  height: 22px;\n  align-items: center;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_icon_W3NYa:hover {\n  color: #fa6400;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_rightOperate_h2-NY {\n  display: flex;\n  align-items: center;\n  height: 22px;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_globalMock_I1hJR {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  margin-top: 1px;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_globalMock_I1hJR .http_plugin_warning_izpS3 {\n  color: #ff4d4f;\n}\n.http_plugin_sidebar-panel-header_UaUAw .http_plugin_globalMock_I1hJR span {\n  font-size: 12px;\n  font-weight: 666;\n  margin-right: 4px;\n}\n.http_plugin_sidebar-panel-header__title_mrwtE {\n  font-size: 14px;\n  font-weight: 666;\n  height: 49px;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n}\n.http_plugin_sidebar-panel-header__title_mrwtE span {\n  line-height: 22px;\n}\n.http_plugin_sidebar-panel-header__sub-title_5MWIF {\n  font-size: 14px;\n  font-weight: 666;\n  color: #333;\n  height: 100%;\n  line-height: 200%;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px solid #ddd;\n  border-bottom: 1px solid #f7f7f7;\n  padding: 0 10px;\n  margin-bottom: -2px;\n}\n.http_plugin_sidebar-panel-header__toolbar_787dK {\n  padding: 0 10px 0 6px;\n  height: 26px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #fafafa;\n  align-items: center;\n}\n.http_plugin_sidebar-panel-content_0KmIg {\n  padding: 0 12px 12px ;\n  overflow-y: auto;\n  height: calc(100% - 32px);\n  font-size: 12px;\n}\n.http_plugin_sidebar-panel-content-title_z6nu6 {\n  height: 32px;\n  line-height: 32px;\n  background-color: #f7f7f7;\n  margin: 0 -12px;\n  padding: 0 12px;\n  margin-bottom: 12px;\n}\n.http_plugin_sidebar-panel-content_0KmIg .http_plugin_param-item_PrOXD {\n  display: flex;\n  width: 100%;\n  align-items: baseline;\n}\n.http_plugin_sidebar-panel-content_0KmIg .http_plugin_param-item-actions_8poHj {\n  margin-left: 12px;\n}\n.http_plugin_sidebar-panel-content_0KmIg .http_plugin_param-item-actions_8poHj .anticon:hover {\n  color: #fa6400;\n}\n.http_plugin_sidebar-panel-list_yLGMK {\n  display: flex;\n  width: 100%;\n  overflow-y: auto;\n  flex: 1;\n  flex-direction: column;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz {\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  font-size: 12px;\n  padding: 0 3px;\n  position: relative;\n  cursor: pointer;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz > div:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz.http_plugin_active_ImQlK {\n  background-color: rgba(247, 247, 247, 0.4);\n}\n.http_plugin_sidebar-panel-list-item__name_pOykE {\n  display: inline-block;\n  color: #aaa;\n  padding-right: 3px;\n  text-align: right;\n  flex: 0 0 55px;\n}\n.http_plugin_sidebar-panel-list-item__content_d6Csd {\n  flex: 1;\n  word-break: break-all;\n}\n.http_plugin_sidebar-panel-list-item__param_Z8NqJ {\n  display: flex;\n  margin-bottom: 4px;\n  font-size: 12px;\n  padding: 0 6px;\n}\n.http_plugin_sidebar-panel-list-item__param_Z8NqJ:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.http_plugin_sidebar-panel-list-item__expand_qrq0W {\n  background-color: #fff;\n  padding: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.http_plugin_sidebar-panel-list-item__copy_Tf9IJ {\n  user-select: text;\n}\n.http_plugin_sidebar-panel-list-item__copy_Tf9IJ:hover {\n  color: #fa6400;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz:hover {\n  background-color: #f1f1f1;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_icon_W3NYa {\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_icon_W3NYa svg {\n  max-width: 12px;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_iconExpand_Z19Q\\+ {\n  transform: rotate(90deg);\n  transition: 0.1s;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_tag_UIbtr {\n  padding: 0 8px 0 2px;\n  color: #fa6400;\n  min-width: 35px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_tag__no-address_iRCVJ {\n  color: rgba(255, 0, 0, 0.8);\n}\n.http_plugin_sidebar-panel-list-item_jAhTz .http_plugin_name_9wsX2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.http_plugin_sidebar-panel-list-item__left_NbdB3 {\n  padding: 12px 0 12px 4px;\n  display: flex;\n  min-width: 130px;\n  flex: 1;\n}\n.http_plugin_sidebar-panel-list-item__left--tag_suoLI {\n  display: none;\n  position: absolute;\n  right: 20px;\n  top: -14px;\n  transform: scale(0.8);\n}\n.http_plugin_sidebar-panel-list-item__right_YA8d5 {\n  display: flex;\n  flex: 0 0 58px;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 4px;\n  margin-right: 8px;\n}\n.http_plugin_sidebar-panel-list-item__right_YA8d5 .http_plugin_action_sYiQp {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.85);\n}\n.http_plugin_sidebar-panel-list-item__right_YA8d5 .http_plugin_action_sYiQp:hover {\n  color: #fa6400;\n}\n.http_plugin_sidebar-panel-code_xZurI {\n  position: relative;\n  font-size: 12px;\n}\n.http_plugin_sidebar-panel-code-icon_lSvKJ {\n  position: absolute;\n  top: 36px;\n  right: 6px;\n  z-index: 1;\n  cursor: pointer;\n}\n.http_plugin_sidebar-panel-code-icon-full_ruBR7 {\n  position: fixed;\n  top: 48px;\n  right: 50px;\n  z-index: 10;\n  cursor: pointer;\n}\n.http_plugin_sidebar-panel-code-full_ALi3K {\n  position: fixed;\n  z-index: 9;\n  padding: 40px 42px 26px;\n  background-color: rgba(0, 0, 0, 0.45);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.http_plugin_sidebar-panel-code-full_ALi3K .monaco-editor {\n  padding-top: 16px;\n}\n.http_plugin_sidebar-mask_lq-a4 {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 346px;\n  z-index: 1000;\n  height: 100%;\n}\n.http_plugin_doc-link_ZF1aE {\n  cursor: pointer;\n}\n.http_plugin_ct_pHO2r {\n  padding: 0 6px 0;\n  border-radius: 6px;\n  border: 1px solid #eee;\n  margin-bottom: 12px;\n}\n.http_plugin_disabled_QzdM0 {\n  opacity: 0.5;\n}\n.http_plugin_chose_vwGg8 {\n  border-bottom-color: transparent;\n  box-shadow: 0 0 6px 2px #ddd;\n}\n.http_plugin_chose_vwGg8:hover {\n  background-color: transparent;\n}\n.http_plugin_dashedDivider_JXzqw {\n  border-top: 1px dashed #ccc;\n  margin: 8px 0;\n}\n.http_plugin_dividerText_7-fMD {\n  font-style: italic;\n  color: #999999;\n  margin-top: 12px;\n}\n", ""]), i.locals = {
          "sidebar-panel": "http_plugin_sidebar-panel_xLItE",
          "sidebar-panel-view": "http_plugin_sidebar-panel-view_QjkK1",
          "sidebar-panel-edit": "http_plugin_sidebar-panel-edit_lTSDc",
          "sidebar-panel-edit-open": "http_plugin_sidebar-panel-edit-open_KMEjZ",
          "sidebar-panel-open": "http_plugin_sidebar-panel-open_UJGMq",
          "sidebar-panel-title": "http_plugin_sidebar-panel-title_CHbln",
          "sidebar-panel-header": "http_plugin_sidebar-panel-header_UaUAw",
          icon: "http_plugin_icon_W3NYa",
          rightOperate: "http_plugin_rightOperate_h2-NY",
          globalMock: "http_plugin_globalMock_I1hJR",
          warning: "http_plugin_warning_izpS3",
          "sidebar-panel-header__title": "http_plugin_sidebar-panel-header__title_mrwtE",
          "sidebar-panel-header__sub-title": "http_plugin_sidebar-panel-header__sub-title_5MWIF",
          "sidebar-panel-header__toolbar": "http_plugin_sidebar-panel-header__toolbar_787dK",
          "sidebar-panel-content": "http_plugin_sidebar-panel-content_0KmIg",
          "sidebar-panel-content-title": "http_plugin_sidebar-panel-content-title_z6nu6",
          "param-item": "http_plugin_param-item_PrOXD",
          "param-item-actions": "http_plugin_param-item-actions_8poHj",
          "sidebar-panel-list": "http_plugin_sidebar-panel-list_yLGMK",
          "sidebar-panel-list-item": "http_plugin_sidebar-panel-list-item_jAhTz",
          active: "http_plugin_active_ImQlK",
          "sidebar-panel-list-item__name": "http_plugin_sidebar-panel-list-item__name_pOykE",
          "sidebar-panel-list-item__content": "http_plugin_sidebar-panel-list-item__content_d6Csd",
          "sidebar-panel-list-item__param": "http_plugin_sidebar-panel-list-item__param_Z8NqJ",
          "sidebar-panel-list-item__expand": "http_plugin_sidebar-panel-list-item__expand_qrq0W",
          "sidebar-panel-list-item__copy": "http_plugin_sidebar-panel-list-item__copy_Tf9IJ",
          iconExpand: "http_plugin_iconExpand_Z19Q+",
          tag: "http_plugin_tag_UIbtr",
          "tag__no-address": "http_plugin_tag__no-address_iRCVJ",
          name: "http_plugin_name_9wsX2",
          "sidebar-panel-list-item__left": "http_plugin_sidebar-panel-list-item__left_NbdB3",
          "sidebar-panel-list-item__left--tag": "http_plugin_sidebar-panel-list-item__left--tag_suoLI",
          "sidebar-panel-list-item__right": "http_plugin_sidebar-panel-list-item__right_YA8d5",
          action: "http_plugin_action_sYiQp",
          "sidebar-panel-code": "http_plugin_sidebar-panel-code_xZurI",
          "sidebar-panel-code-icon": "http_plugin_sidebar-panel-code-icon_lSvKJ",
          "sidebar-panel-code-icon-full": "http_plugin_sidebar-panel-code-icon-full_ruBR7",
          "sidebar-panel-code-full": "http_plugin_sidebar-panel-code-full_ALi3K",
          "sidebar-mask": "http_plugin_sidebar-mask_lq-a4",
          "doc-link": "http_plugin_doc-link_ZF1aE",
          ct: "http_plugin_ct_pHO2r",
          disabled: "http_plugin_disabled_QzdM0",
          chose: "http_plugin_chose_vwGg8",
          dashedDivider: "http_plugin_dashedDivider_JXzqw",
          dividerText: "http_plugin_dividerText_7-fMD"
        };
        const o = i;
      },
      3645: t => {
        "use strict";

        t.exports = function (t) {
          var e = [];
          return e.toString = function () {
            return this.map(function (e) {
              var n = t(e);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
            }).join("");
          }, e.i = function (t, n, r) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var i = {};
            if (r) for (var o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (i[a] = !0);
            }
            for (var l = 0; l < t.length; l++) {
              var c = [].concat(t[l]);
              r && i[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), e.push(c));
            }
          }, e;
        };
      },
      3976: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(1771);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      8502: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(6866);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      1673: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(4647);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      7762: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(6846);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      2808: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(1053);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      393: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(696);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      1436: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(5235);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      2552: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(1218);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      9139: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(1332);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      6346: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(4275);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      91: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(8934);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      4763: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(1010);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      5739: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(2814);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      8211: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(4671);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      7992: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(5080);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      8705: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(2287);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      8786: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(3379),
          i = n.n(r),
          o = n(7688);
        i()(o.Z, {
          insert: "head",
          singleton: !1
        });
        const a = o.Z.locals || {};
      },
      3379: (t, e, n) => {
        "use strict";

        var r,
          i = function () {
            var t = {};
            return function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
                t[e] = n;
              }
              return t[e];
            };
          }(),
          o = [];
        function a(t) {
          for (var e = -1, n = 0; n < o.length; n++) if (o[n].identifier === t) {
            e = n;
            break;
          }
          return e;
        }
        function l(t, e) {
          for (var n = {}, r = [], i = 0; i < t.length; i++) {
            var l = t[i],
              c = e.base ? l[0] + e.base : l[0],
              u = n[c] || 0,
              s = "".concat(c, " ").concat(u);
            n[c] = u + 1;
            var p = a(s),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3]
              };
            -1 !== p ? (o[p].references++, o[p].updater(d)) : o.push({
              identifier: s,
              updater: m(d, e),
              references: 1
            }), r.push(s);
          }
          return r;
        }
        function c(t) {
          var e = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var o = n.nc;
            o && (r.nonce = o);
          }
          if (Object.keys(r).forEach(function (t) {
            e.setAttribute(t, r[t]);
          }), "function" == typeof t.insert) t.insert(e);else {
            var a = i(t.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e);
          }
          return e;
        }
        var u,
          s = (u = [], function (t, e) {
            return u[t] = e, u.filter(Boolean).join("\n");
          });
        function p(t, e, n, r) {
          var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
          if (t.styleSheet) t.styleSheet.cssText = s(e, i);else {
            var o = document.createTextNode(i),
              a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
          }
        }
        function d(t, e, n) {
          var r = n.css,
            i = n.media,
            o = n.sourceMap;
          if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleSheet) t.styleSheet.cssText = r;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r));
          }
        }
        var f = null,
          h = 0;
        function m(t, e) {
          var n, r, i;
          if (e.singleton) {
            var o = h++;
            n = f || (f = c(e)), r = p.bind(null, n, o, !1), i = p.bind(null, n, o, !0);
          } else n = c(e), r = d.bind(null, n, e), i = function () {
            !function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            }(n);
          };
          return r(t), function (e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              r(t = e);
            } else i();
          };
        }
        t.exports = function (t, e) {
          (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
          var n = l(t = t || [], e);
          return function (t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
              for (var r = 0; r < n.length; r++) {
                var i = a(n[r]);
                o[i].references--;
              }
              for (var c = l(t, e), u = 0; u < n.length; u++) {
                var s = a(n[u]);
                0 === o[s].references && (o[s].updater(), o.splice(s, 1));
              }
              n = c;
            }
          };
        };
      },
      8156: t => {
        "use strict";

        t.exports = __WEBPACK_EXTERNAL_MODULE__8156__;
      },
      7111: t => {
        "use strict";

        t.exports = __WEBPACK_EXTERNAL_MODULE__7111__;
      },
      8624: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => c
        });
        var r = n(8113),
          i = n(4198),
          o = n(6672),
          a = n(1333);
        const l = {
          http: i.Z,
          xhr: o.Z
        };
        r.Z.forEach(l, (t, e) => {
          if (t) {
            try {
              Object.defineProperty(t, "name", {
                value: e
              });
            } catch (t) {}
            Object.defineProperty(t, "adapterName", {
              value: e
            });
          }
        });
        const c = {
          getAdapter: t => {
            t = r.Z.isArray(t) ? t : [t];
            const {
              length: e
            } = t;
            let n, i;
            for (let o = 0; o < e && (n = t[o], !(i = r.Z.isString(n) ? l[n.toLowerCase()] : n)); o++);
            if (!i) {
              if (!1 === i) throw new a.Z(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
              throw new Error(r.Z.hasOwnProp(l, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            }
            if (!r.Z.isFunction(i)) throw new TypeError("adapter is not a function");
            return i;
          },
          adapters: l
        };
      },
      6672: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => g
        });
        var r = n(8113),
          i = n(1992),
          o = n(8308),
          a = n(3343),
          l = n(5315),
          c = n(8738),
          u = n(2913),
          s = n(1333),
          p = n(9619),
          d = n(2312),
          f = n(9698),
          h = n(1150),
          m = n(2141);
        function _(t, e) {
          let n = 0;
          const r = (0, m.Z)(50, 250);
          return i => {
            const o = i.loaded,
              a = i.lengthComputable ? i.total : void 0,
              l = o - n,
              c = r(l);
            n = o;
            const u = {
              loaded: o,
              total: a,
              progress: a ? o / a : void 0,
              bytes: l,
              rate: c || void 0,
              estimated: c && a && o <= a ? (a - o) / c : void 0,
              event: i
            };
            u[e ? "download" : "upload"] = !0, t(u);
          };
        }
        const g = "undefined" != typeof XMLHttpRequest && function (t) {
          return new Promise(function (e, n) {
            let m = t.data;
            const g = h.Z.from(t.headers).normalize(),
              v = t.responseType;
            let y;
            function b() {
              t.cancelToken && t.cancelToken.unsubscribe(y), t.signal && t.signal.removeEventListener("abort", y);
            }
            r.Z.isFormData(m) && (f.Z.isStandardBrowserEnv || f.Z.isStandardBrowserWebWorkerEnv ? g.setContentType(!1) : g.setContentType("multipart/form-data;", !1));
            let x = new XMLHttpRequest();
            if (t.auth) {
              const e = t.auth.username || "",
                n = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
              g.set("Authorization", "Basic " + btoa(e + ":" + n));
            }
            const w = (0, l.Z)(t.baseURL, t.url);
            function E() {
              if (!x) return;
              const r = h.Z.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()),
                o = {
                  data: v && "text" !== v && "json" !== v ? x.response : x.responseText,
                  status: x.status,
                  statusText: x.statusText,
                  headers: r,
                  config: t,
                  request: x
                };
              (0, i.Z)(function (t) {
                e(t), b();
              }, function (t) {
                n(t), b();
              }, o), x = null;
            }
            if (x.open(t.method.toUpperCase(), (0, a.Z)(w, t.params, t.paramsSerializer), !0), x.timeout = t.timeout, "onloadend" in x ? x.onloadend = E : x.onreadystatechange = function () {
              x && 4 === x.readyState && (0 !== x.status || x.responseURL && 0 === x.responseURL.indexOf("file:")) && setTimeout(E);
            }, x.onabort = function () {
              x && (n(new s.Z("Request aborted", s.Z.ECONNABORTED, t, x)), x = null);
            }, x.onerror = function () {
              n(new s.Z("Network Error", s.Z.ERR_NETWORK, t, x)), x = null;
            }, x.ontimeout = function () {
              let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
              const r = t.transitional || u.Z;
              t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(new s.Z(e, r.clarifyTimeoutError ? s.Z.ETIMEDOUT : s.Z.ECONNABORTED, t, x)), x = null;
            }, f.Z.isStandardBrowserEnv) {
              const e = (t.withCredentials || (0, c.Z)(w)) && t.xsrfCookieName && o.Z.read(t.xsrfCookieName);
              e && g.set(t.xsrfHeaderName, e);
            }
            void 0 === m && g.setContentType(null), "setRequestHeader" in x && r.Z.forEach(g.toJSON(), function (t, e) {
              x.setRequestHeader(e, t);
            }), r.Z.isUndefined(t.withCredentials) || (x.withCredentials = !!t.withCredentials), v && "json" !== v && (x.responseType = t.responseType), "function" == typeof t.onDownloadProgress && x.addEventListener("progress", _(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && x.upload && x.upload.addEventListener("progress", _(t.onUploadProgress)), (t.cancelToken || t.signal) && (y = e => {
              x && (n(!e || e.type ? new p.Z(null, t, x) : e), x.abort(), x = null);
            }, t.cancelToken && t.cancelToken.subscribe(y), t.signal && (t.signal.aborted ? y() : t.signal.addEventListener("abort", y)));
            const Z = (0, d.Z)(w);
            Z && -1 === f.Z.protocols.indexOf(Z) ? n(new s.Z("Unsupported protocol " + Z + ":", s.Z.ERR_BAD_REQUEST, t)) : x.send(m || null);
          });
        };
      },
      5274: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => x
        });
        var r = n(8113),
          i = n(6524),
          o = n(5411),
          a = n(8636),
          l = n(6239),
          c = n(4510),
          u = n(9619),
          s = n(2629),
          p = n(9126),
          d = n(2112),
          f = n(5238),
          h = n(1333),
          m = n(7990),
          _ = n(5511),
          g = n(1150),
          v = n(8624),
          y = n(2097);
        const b = function t(e) {
          const n = new o.Z(e),
            l = (0, i.Z)(o.Z.prototype.request, n);
          return r.Z.extend(l, o.Z.prototype, n, {
            allOwnKeys: !0
          }), r.Z.extend(l, n, null, {
            allOwnKeys: !0
          }), l.create = function (n) {
            return t((0, a.Z)(e, n));
          }, l;
        }(l.Z);
        b.Axios = o.Z, b.CanceledError = u.Z, b.CancelToken = s.Z, b.isCancel = p.Z, b.VERSION = d.q, b.toFormData = f.Z, b.AxiosError = h.Z, b.Cancel = b.CanceledError, b.all = function (t) {
          return Promise.all(t);
        }, b.spread = m.Z, b.isAxiosError = _.Z, b.mergeConfig = a.Z, b.AxiosHeaders = g.Z, b.formToJSON = t => (0, c.Z)(r.Z.isHTMLForm(t) ? new FormData(t) : t), b.getAdapter = v.Z.getAdapter, b.HttpStatusCode = y.Z, b.default = b;
        const x = b;
      },
      2629: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(9619);
        class i {
          constructor(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            let e;
            this.promise = new Promise(function (t) {
              e = t;
            });
            const n = this;
            this.promise.then(t => {
              if (!n._listeners) return;
              let e = n._listeners.length;
              for (; e-- > 0;) n._listeners[e](t);
              n._listeners = null;
            }), this.promise.then = t => {
              let e;
              const r = new Promise(t => {
                n.subscribe(t), e = t;
              }).then(t);
              return r.cancel = function () {
                n.unsubscribe(e);
              }, r;
            }, t(function (t, i, o) {
              n.reason || (n.reason = new r.Z(t, i, o), e(n.reason));
            });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(t) {
            this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t];
          }
          unsubscribe(t) {
            if (!this._listeners) return;
            const e = this._listeners.indexOf(t);
            -1 !== e && this._listeners.splice(e, 1);
          }
          static source() {
            let t;
            return {
              token: new i(function (e) {
                t = e;
              }),
              cancel: t
            };
          }
        }
        const o = i;
      },
      9619: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(1333);
        function i(t, e, n) {
          r.Z.call(this, null == t ? "canceled" : t, r.Z.ERR_CANCELED, e, n), this.name = "CanceledError";
        }
        n(8113).Z.inherits(i, r.Z, {
          __CANCEL__: !0
        });
        const o = i;
      },
      9126: (t, e, n) => {
        "use strict";

        function r(t) {
          return !(!t || !t.__CANCEL__);
        }
        n.d(e, {
          Z: () => r
        });
      },
      5411: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => f
        });
        var r = n(8113),
          i = n(3343),
          o = n(2881),
          a = n(4352),
          l = n(8636),
          c = n(5315),
          u = n(6011),
          s = n(1150);
        const p = u.Z.validators;
        class d {
          constructor(t) {
            this.defaults = t, this.interceptors = {
              request: new o.Z(),
              response: new o.Z()
            };
          }
          request(t, e) {
            "string" == typeof t ? (e = e || {}).url = t : e = t || {}, e = (0, l.Z)(this.defaults, e);
            const {
              transitional: n,
              paramsSerializer: i,
              headers: o
            } = e;
            void 0 !== n && u.Z.assertOptions(n, {
              silentJSONParsing: p.transitional(p.boolean),
              forcedJSONParsing: p.transitional(p.boolean),
              clarifyTimeoutError: p.transitional(p.boolean)
            }, !1), null != i && (r.Z.isFunction(i) ? e.paramsSerializer = {
              serialize: i
            } : u.Z.assertOptions(i, {
              encode: p.function,
              serialize: p.function
            }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
            let c = o && r.Z.merge(o.common, o[e.method]);
            o && r.Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
              delete o[t];
            }), e.headers = s.Z.concat(c, o);
            const d = [];
            let f = !0;
            this.interceptors.request.forEach(function (t) {
              "function" == typeof t.runWhen && !1 === t.runWhen(e) || (f = f && t.synchronous, d.unshift(t.fulfilled, t.rejected));
            });
            const h = [];
            let m;
            this.interceptors.response.forEach(function (t) {
              h.push(t.fulfilled, t.rejected);
            });
            let _,
              g = 0;
            if (!f) {
              const t = [a.Z.bind(this), void 0];
              for (t.unshift.apply(t, d), t.push.apply(t, h), _ = t.length, m = Promise.resolve(e); g < _;) m = m.then(t[g++], t[g++]);
              return m;
            }
            _ = d.length;
            let v = e;
            for (g = 0; g < _;) {
              const t = d[g++],
                e = d[g++];
              try {
                v = t(v);
              } catch (t) {
                e.call(this, t);
                break;
              }
            }
            try {
              m = a.Z.call(this, v);
            } catch (t) {
              return Promise.reject(t);
            }
            for (g = 0, _ = h.length; g < _;) m = m.then(h[g++], h[g++]);
            return m;
          }
          getUri(t) {
            t = (0, l.Z)(this.defaults, t);
            const e = (0, c.Z)(t.baseURL, t.url);
            return (0, i.Z)(e, t.params, t.paramsSerializer);
          }
        }
        r.Z.forEach(["delete", "get", "head", "options"], function (t) {
          d.prototype[t] = function (e, n) {
            return this.request((0, l.Z)(n || {}, {
              method: t,
              url: e,
              data: (n || {}).data
            }));
          };
        }), r.Z.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (n, r, i) {
              return this.request((0, l.Z)(i || {}, {
                method: t,
                headers: e ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
              }));
            };
          }
          d.prototype[t] = e(), d.prototype[t + "Form"] = e(!0);
        });
        const f = d;
      },
      1333: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(8113);
        function i(t, e, n, r, i) {
          Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
        }
        r.Z.inherits(i, Error, {
          toJSON: function () {
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
            };
          }
        });
        const o = i.prototype,
          a = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
          a[t] = {
            value: t
          };
        }), Object.defineProperties(i, a), Object.defineProperty(o, "isAxiosError", {
          value: !0
        }), i.from = (t, e, n, a, l, c) => {
          const u = Object.create(o);
          return r.Z.toFlatObject(t, u, function (t) {
            return t !== Error.prototype;
          }, t => "isAxiosError" !== t), i.call(u, t.message, e, n, a, l), u.cause = t, u.name = t.name, c && Object.assign(u, c), u;
        };
        const l = i;
      },
      1150: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => s
        });
        var r = n(8113),
          i = n(6283);
        const o = Symbol("internals");
        function a(t) {
          return t && String(t).trim().toLowerCase();
        }
        function l(t) {
          return !1 === t || null == t ? t : r.Z.isArray(t) ? t.map(l) : String(t);
        }
        function c(t, e, n, i, o) {
          return r.Z.isFunction(i) ? i.call(this, e, n) : (o && (e = n), r.Z.isString(e) ? r.Z.isString(i) ? -1 !== e.indexOf(i) : r.Z.isRegExp(i) ? i.test(e) : void 0 : void 0);
        }
        class u {
          constructor(t) {
            t && this.set(t);
          }
          set(t, e, n) {
            const o = this;
            function c(t, e, n) {
              const i = a(e);
              if (!i) throw new Error("header name must be a non-empty string");
              const c = r.Z.findKey(o, i);
              (!c || void 0 === o[c] || !0 === n || void 0 === n && !1 !== o[c]) && (o[c || e] = l(t));
            }
            const u = (t, e) => r.Z.forEach(t, (t, n) => c(t, n, e));
            return r.Z.isPlainObject(t) || t instanceof this.constructor ? u(t, e) : r.Z.isString(t) && (t = t.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()) ? u((0, i.Z)(t), e) : null != t && c(e, t, n), this;
          }
          get(t, e) {
            if (t = a(t)) {
              const n = r.Z.findKey(this, t);
              if (n) {
                const t = this[n];
                if (!e) return t;
                if (!0 === e) return function (t) {
                  const e = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; r = n.exec(t);) e[r[1]] = r[2];
                  return e;
                }(t);
                if (r.Z.isFunction(e)) return e.call(this, t, n);
                if (r.Z.isRegExp(e)) return e.exec(t);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(t, e) {
            if (t = a(t)) {
              const n = r.Z.findKey(this, t);
              return !(!n || void 0 === this[n] || e && !c(0, this[n], n, e));
            }
            return !1;
          }
          delete(t, e) {
            const n = this;
            let i = !1;
            function o(t) {
              if (t = a(t)) {
                const o = r.Z.findKey(n, t);
                !o || e && !c(0, n[o], o, e) || (delete n[o], i = !0);
              }
            }
            return r.Z.isArray(t) ? t.forEach(o) : o(t), i;
          }
          clear(t) {
            const e = Object.keys(this);
            let n = e.length,
              r = !1;
            for (; n--;) {
              const i = e[n];
              t && !c(0, this[i], i, t, !0) || (delete this[i], r = !0);
            }
            return r;
          }
          normalize(t) {
            const e = this,
              n = {};
            return r.Z.forEach(this, (i, o) => {
              const a = r.Z.findKey(n, o);
              if (a) return e[a] = l(i), void delete e[o];
              const c = t ? function (t) {
                return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
              }(o) : String(o).trim();
              c !== o && delete e[o], e[c] = l(i), n[c] = !0;
            }), this;
          }
          concat(...t) {
            return this.constructor.concat(this, ...t);
          }
          toJSON(t) {
            const e = Object.create(null);
            return r.Z.forEach(this, (n, i) => {
              null != n && !1 !== n && (e[i] = t && r.Z.isArray(n) ? n.join(", ") : n);
            }), e;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(t) {
            return t instanceof this ? t : new this(t);
          }
          static concat(t, ...e) {
            const n = new this(t);
            return e.forEach(t => n.set(t)), n;
          }
          static accessor(t) {
            const e = (this[o] = this[o] = {
                accessors: {}
              }).accessors,
              n = this.prototype;
            function i(t) {
              const i = a(t);
              e[i] || (function (t, e) {
                const n = r.Z.toCamelCase(" " + e);
                ["get", "set", "has"].forEach(r => {
                  Object.defineProperty(t, r + n, {
                    value: function (t, n, i) {
                      return this[r].call(this, e, t, n, i);
                    },
                    configurable: !0
                  });
                });
              }(n, t), e[i] = !0);
            }
            return r.Z.isArray(t) ? t.forEach(i) : i(t), this;
          }
        }
        u.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), r.Z.reduceDescriptors(u.prototype, ({
          value: t
        }, e) => {
          let n = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[n] = t;
            }
          };
        }), r.Z.freezeMethods(u);
        const s = u;
      },
      2881: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(8113);
        const i = class {
          constructor() {
            this.handlers = [];
          }
          use(t, e, n) {
            return this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1;
          }
          eject(t) {
            this.handlers[t] && (this.handlers[t] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(t) {
            r.Z.forEach(this.handlers, function (e) {
              null !== e && t(e);
            });
          }
        };
      },
      5315: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => o
        });
        var r = n(8474),
          i = n(4318);
        function o(t, e) {
          return t && !(0, r.Z)(e) ? (0, i.Z)(t, e) : e;
        }
      },
      4352: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => s
        });
        var r = n(4293),
          i = n(9126),
          o = n(6239),
          a = n(9619),
          l = n(1150),
          c = n(8624);
        function u(t) {
          if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new a.Z(null, t);
        }
        function s(t) {
          return u(t), t.headers = l.Z.from(t.headers), t.data = r.Z.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1), c.Z.getAdapter(t.adapter || o.Z.adapter)(t).then(function (e) {
            return u(t), e.data = r.Z.call(t, t.transformResponse, e), e.headers = l.Z.from(e.headers), e;
          }, function (e) {
            return (0, i.Z)(e) || (u(t), e && e.response && (e.response.data = r.Z.call(t, t.transformResponse, e.response), e.response.headers = l.Z.from(e.response.headers))), Promise.reject(e);
          });
        }
      },
      8636: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(8113),
          i = n(1150);
        const o = t => t instanceof i.Z ? t.toJSON() : t;
        function a(t, e) {
          e = e || {};
          const n = {};
          function i(t, e, n) {
            return r.Z.isPlainObject(t) && r.Z.isPlainObject(e) ? r.Z.merge.call({
              caseless: n
            }, t, e) : r.Z.isPlainObject(e) ? r.Z.merge({}, e) : r.Z.isArray(e) ? e.slice() : e;
          }
          function a(t, e, n) {
            return r.Z.isUndefined(e) ? r.Z.isUndefined(t) ? void 0 : i(void 0, t, n) : i(t, e, n);
          }
          function l(t, e) {
            if (!r.Z.isUndefined(e)) return i(void 0, e);
          }
          function c(t, e) {
            return r.Z.isUndefined(e) ? r.Z.isUndefined(t) ? void 0 : i(void 0, t) : i(void 0, e);
          }
          function u(n, r, o) {
            return o in e ? i(n, r) : o in t ? i(void 0, n) : void 0;
          }
          const s = {
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
            validateStatus: u,
            headers: (t, e) => a(o(t), o(e), !0)
          };
          return r.Z.forEach(Object.keys(Object.assign({}, t, e)), function (i) {
            const o = s[i] || a,
              l = o(t[i], e[i], i);
            r.Z.isUndefined(l) && o !== u || (n[i] = l);
          }), n;
        }
      },
      1992: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(1333);
        function i(t, e, n) {
          const i = n.config.validateStatus;
          n.status && i && !i(n.status) ? e(new r.Z("Request failed with status code " + n.status, [r.Z.ERR_BAD_REQUEST, r.Z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : t(n);
        }
      },
      4293: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(8113),
          i = n(6239),
          o = n(1150);
        function a(t, e) {
          const n = this || i.Z,
            a = e || n,
            l = o.Z.from(a.headers);
          let c = a.data;
          return r.Z.forEach(t, function (t) {
            c = t.call(n, c, l.normalize(), e ? e.status : void 0);
          }), l.normalize(), c;
        }
      },
      6239: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => p
        });
        var r = n(8113),
          i = n(1333),
          o = n(2913),
          a = n(5238),
          l = n(6856),
          c = n(9698),
          u = n(4510);
        const s = {
          transitional: o.Z,
          adapter: c.Z.isNode ? "http" : "xhr",
          transformRequest: [function (t, e) {
            const n = e.getContentType() || "",
              i = n.indexOf("application/json") > -1,
              o = r.Z.isObject(t);
            if (o && r.Z.isHTMLForm(t) && (t = new FormData(t)), r.Z.isFormData(t)) return i && i ? JSON.stringify((0, u.Z)(t)) : t;
            if (r.Z.isArrayBuffer(t) || r.Z.isBuffer(t) || r.Z.isStream(t) || r.Z.isFile(t) || r.Z.isBlob(t)) return t;
            if (r.Z.isArrayBufferView(t)) return t.buffer;
            if (r.Z.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let c;
            if (o) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1) return (0, l.Z)(t, this.formSerializer).toString();
              if ((c = r.Z.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                const e = this.env && this.env.FormData;
                return (0, a.Z)(c ? {
                  "files[]": t
                } : t, e && new e(), this.formSerializer);
              }
            }
            return o || i ? (e.setContentType("application/json", !1), function (t, e, n) {
              if (r.Z.isString(t)) try {
                return (0, JSON.parse)(t), r.Z.trim(t);
              } catch (t) {
                if ("SyntaxError" !== t.name) throw t;
              }
              return (0, JSON.stringify)(t);
            }(t)) : t;
          }],
          transformResponse: [function (t) {
            const e = this.transitional || s.transitional,
              n = e && e.forcedJSONParsing,
              o = "json" === this.responseType;
            if (t && r.Z.isString(t) && (n && !this.responseType || o)) {
              const n = !(e && e.silentJSONParsing) && o;
              try {
                return JSON.parse(t);
              } catch (t) {
                if (n) {
                  if ("SyntaxError" === t.name) throw i.Z.from(t, i.Z.ERR_BAD_RESPONSE, this, null, this.response);
                  throw t;
                }
              }
            }
            return t;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: c.Z.classes.FormData,
            Blob: c.Z.classes.Blob
          },
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0
            }
          }
        };
        r.Z.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
          s.headers[t] = {};
        });
        const p = s;
      },
      2913: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1
        };
      },
      2112: (t, e, n) => {
        "use strict";

        n.d(e, {
          q: () => r
        });
        const r = "1.5.0";
      },
      7709: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(5238);
        function i(t) {
          const e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
          };
          return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
            return e[t];
          });
        }
        function o(t, e) {
          this._pairs = [], t && (0, r.Z)(t, this, e);
        }
        const a = o.prototype;
        a.append = function (t, e) {
          this._pairs.push([t, e]);
        }, a.toString = function (t) {
          const e = t ? function (e) {
            return t.call(this, e, i);
          } : i;
          return this._pairs.map(function (t) {
            return e(t[0]) + "=" + e(t[1]);
          }, "").join("&");
        };
        const l = o;
      },
      2097: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
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
        Object.entries(r).forEach(([t, e]) => {
          r[e] = t;
        });
        const i = r;
      },
      6524: (t, e, n) => {
        "use strict";

        function r(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        n.d(e, {
          Z: () => r
        });
      },
      3343: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(8113),
          i = n(7709);
        function o(t) {
          return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function a(t, e, n) {
          if (!e) return t;
          const a = n && n.encode || o,
            l = n && n.serialize;
          let c;
          if (c = l ? l(e, n) : r.Z.isURLSearchParams(e) ? e.toString() : new i.Z(e, n).toString(a), c) {
            const e = t.indexOf("#");
            -1 !== e && (t = t.slice(0, e)), t += (-1 === t.indexOf("?") ? "?" : "&") + c;
          }
          return t;
        }
      },
      4318: (t, e, n) => {
        "use strict";

        function r(t, e) {
          return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        }
        n.d(e, {
          Z: () => r
        });
      },
      8308: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(8113);
        const i = n(9698).Z.isStandardBrowserEnv ? {
          write: function (t, e, n, i, o, a) {
            const l = [];
            l.push(t + "=" + encodeURIComponent(e)), r.Z.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), r.Z.isString(i) && l.push("path=" + i), r.Z.isString(o) && l.push("domain=" + o), !0 === a && l.push("secure"), document.cookie = l.join("; ");
          },
          read: function (t) {
            const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          }
        } : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {}
        };
      },
      4510: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(8113);
        const i = function (t) {
          function e(t, n, i, o) {
            let a = t[o++];
            const l = Number.isFinite(+a),
              c = o >= t.length;
            return a = !a && r.Z.isArray(i) ? i.length : a, c ? (r.Z.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !l) : (i[a] && r.Z.isObject(i[a]) || (i[a] = []), e(t, n, i[a], o) && r.Z.isArray(i[a]) && (i[a] = function (t) {
              const e = {},
                n = Object.keys(t);
              let r;
              const i = n.length;
              let o;
              for (r = 0; r < i; r++) o = n[r], e[o] = t[o];
              return e;
            }(i[a])), !l);
          }
          if (r.Z.isFormData(t) && r.Z.isFunction(t.entries)) {
            const n = {};
            return r.Z.forEachEntry(t, (t, i) => {
              e(function (t) {
                return r.Z.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0]);
              }(t), i, n, 0);
            }), n;
          }
          return null;
        };
      },
      8474: (t, e, n) => {
        "use strict";

        function r(t) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        }
        n.d(e, {
          Z: () => r
        });
      },
      5511: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(8113);
        function i(t) {
          return r.Z.isObject(t) && !0 === t.isAxiosError;
        }
      },
      8738: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(8113);
        const i = n(9698).Z.isStandardBrowserEnv ? function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
            e = document.createElement("a");
          let n;
          function i(n) {
            let r = n;
            return t && (e.setAttribute("href", r), r = e.href), e.setAttribute("href", r), {
              href: e.href,
              protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
              host: e.host,
              search: e.search ? e.search.replace(/^\?/, "") : "",
              hash: e.hash ? e.hash.replace(/^#/, "") : "",
              hostname: e.hostname,
              port: e.port,
              pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
            };
          }
          return n = i(window.location.href), function (t) {
            const e = r.Z.isString(t) ? i(t) : t;
            return e.protocol === n.protocol && e.host === n.host;
          };
        }() : function () {
          return !0;
        };
      },
      4198: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = null;
      },
      6283: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        const r = n(8113).Z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
          i = t => {
            const e = {};
            let n, i, o;
            return t && t.split("\n").forEach(function (t) {
              o = t.indexOf(":"), n = t.substring(0, o).trim().toLowerCase(), i = t.substring(o + 1).trim(), !n || e[n] && r[n] || ("set-cookie" === n ? e[n] ? e[n].push(i) : e[n] = [i] : e[n] = e[n] ? e[n] + ", " + i : i);
            }), e;
          };
      },
      2312: (t, e, n) => {
        "use strict";

        function r(t) {
          const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return e && e[1] || "";
        }
        n.d(e, {
          Z: () => r
        });
      },
      2141: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = function (t, e) {
          t = t || 10;
          const n = new Array(t),
            r = new Array(t);
          let i,
            o = 0,
            a = 0;
          return e = void 0 !== e ? e : 1e3, function (l) {
            const c = Date.now(),
              u = r[a];
            i || (i = c), n[o] = l, r[o] = c;
            let s = a,
              p = 0;
            for (; s !== o;) p += n[s++], s %= t;
            if (o = (o + 1) % t, o === a && (a = (a + 1) % t), c - i < e) return;
            const d = u && c - u;
            return d ? Math.round(1e3 * p / d) : void 0;
          };
        };
      },
      7990: (t, e, n) => {
        "use strict";

        function r(t) {
          return function (e) {
            return t.apply(null, e);
          };
        }
        n.d(e, {
          Z: () => r
        });
      },
      5238: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => s
        });
        var r = n(8113),
          i = n(1333),
          o = n(4198);
        function a(t) {
          return r.Z.isPlainObject(t) || r.Z.isArray(t);
        }
        function l(t) {
          return r.Z.endsWith(t, "[]") ? t.slice(0, -2) : t;
        }
        function c(t, e, n) {
          return t ? t.concat(e).map(function (t, e) {
            return t = l(t), !n && e ? "[" + t + "]" : t;
          }).join(n ? "." : "") : e;
        }
        const u = r.Z.toFlatObject(r.Z, {}, null, function (t) {
            return /^is[A-Z]/.test(t);
          }),
          s = function (t, e, n) {
            if (!r.Z.isObject(t)) throw new TypeError("target must be an object");
            e = e || new (o.Z || FormData)();
            const s = (n = r.Z.toFlatObject(n, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
              }, !1, function (t, e) {
                return !r.Z.isUndefined(e[t]);
              })).metaTokens,
              p = n.visitor || _,
              d = n.dots,
              f = n.indexes,
              h = (n.Blob || "undefined" != typeof Blob && Blob) && r.Z.isSpecCompliantForm(e);
            if (!r.Z.isFunction(p)) throw new TypeError("visitor must be a function");
            function m(t) {
              if (null === t) return "";
              if (r.Z.isDate(t)) return t.toISOString();
              if (!h && r.Z.isBlob(t)) throw new i.Z("Blob is not supported. Use a Buffer instead.");
              return r.Z.isArrayBuffer(t) || r.Z.isTypedArray(t) ? h && "function" == typeof Blob ? new Blob([t]) : Buffer.from(t) : t;
            }
            function _(t, n, i) {
              let o = t;
              if (t && !i && "object" == typeof t) if (r.Z.endsWith(n, "{}")) n = s ? n : n.slice(0, -2), t = JSON.stringify(t);else if (r.Z.isArray(t) && function (t) {
                return r.Z.isArray(t) && !t.some(a);
              }(t) || (r.Z.isFileList(t) || r.Z.endsWith(n, "[]")) && (o = r.Z.toArray(t))) return n = l(n), o.forEach(function (t, i) {
                !r.Z.isUndefined(t) && null !== t && e.append(!0 === f ? c([n], i, d) : null === f ? n : n + "[]", m(t));
              }), !1;
              return !!a(t) || (e.append(c(i, n, d), m(t)), !1);
            }
            const g = [],
              v = Object.assign(u, {
                defaultVisitor: _,
                convertValue: m,
                isVisitable: a
              });
            if (!r.Z.isObject(t)) throw new TypeError("data must be an object");
            return function t(n, i) {
              if (!r.Z.isUndefined(n)) {
                if (-1 !== g.indexOf(n)) throw Error("Circular reference detected in " + i.join("."));
                g.push(n), r.Z.forEach(n, function (n, o) {
                  !0 === (!(r.Z.isUndefined(n) || null === n) && p.call(e, n, r.Z.isString(o) ? o.trim() : o, i, v)) && t(n, i ? i.concat(o) : [o]);
                }), g.pop();
              }
            }(t), e;
          };
      },
      6856: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => a
        });
        var r = n(8113),
          i = n(5238),
          o = n(9698);
        function a(t, e) {
          return (0, i.Z)(t, new o.Z.classes.URLSearchParams(), Object.assign({
            visitor: function (t, e, n, i) {
              return o.Z.isNode && r.Z.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
            }
          }, e));
        }
      },
      6011: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => l
        });
        var r = n(2112),
          i = n(1333);
        const o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
          o[t] = function (n) {
            return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        });
        const a = {};
        o.transitional = function (t, e, n) {
          function o(t, e) {
            return "[Axios v" + r.q + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "");
          }
          return (n, r, l) => {
            if (!1 === t) throw new i.Z(o(r, " has been removed" + (e ? " in " + e : "")), i.Z.ERR_DEPRECATED);
            return e && !a[r] && (a[r] = !0, console.warn(o(r, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(n, r, l);
          };
        };
        const l = {
          assertOptions: function (t, e, n) {
            if ("object" != typeof t) throw new i.Z("options must be an object", i.Z.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(t);
            let o = r.length;
            for (; o-- > 0;) {
              const a = r[o],
                l = e[a];
              if (l) {
                const e = t[a],
                  n = void 0 === e || l(e, a, t);
                if (!0 !== n) throw new i.Z("option " + a + " must be " + n, i.Z.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new i.Z("Unknown option " + a, i.Z.ERR_BAD_OPTION);
            }
          },
          validators: o
        };
      },
      2004: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = "undefined" != typeof Blob ? Blob : null;
      },
      1951: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => r
        });
        const r = "undefined" != typeof FormData ? FormData : null;
      },
      3358: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => i
        });
        var r = n(7709);
        const i = "undefined" != typeof URLSearchParams ? URLSearchParams : r.Z;
      },
      9698: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => c
        });
        var r = n(3358),
          i = n(1951),
          o = n(2004);
        const a = (() => {
            let t;
            return ("undefined" == typeof navigator || "ReactNative" !== (t = navigator.product) && "NativeScript" !== t && "NS" !== t) && "undefined" != typeof window && "undefined" != typeof document;
          })(),
          l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
          c = {
            isBrowser: !0,
            classes: {
              URLSearchParams: r.Z,
              FormData: i.Z,
              Blob: o.Z
            },
            isStandardBrowserEnv: a,
            isStandardBrowserWebWorkerEnv: l,
            protocols: ["http", "https", "file", "blob", "url", "data"]
          };
      },
      8113: (t, e, n) => {
        "use strict";

        n.d(e, {
          Z: () => I
        });
        var r = n(6524);
        const {
            toString: i
          } = Object.prototype,
          {
            getPrototypeOf: o
          } = Object,
          a = (l = Object.create(null), t => {
            const e = i.call(t);
            return l[e] || (l[e] = e.slice(8, -1).toLowerCase());
          });
        var l;
        const c = t => (t = t.toLowerCase(), e => a(e) === t),
          u = t => e => typeof e === t,
          {
            isArray: s
          } = Array,
          p = u("undefined"),
          d = c("ArrayBuffer"),
          f = u("string"),
          h = u("function"),
          m = u("number"),
          _ = t => null !== t && "object" == typeof t,
          g = t => {
            if ("object" !== a(t)) return !1;
            const e = o(t);
            return !(null !== e && e !== Object.prototype && null !== Object.getPrototypeOf(e) || Symbol.toStringTag in t || Symbol.iterator in t);
          },
          v = c("Date"),
          y = c("File"),
          b = c("Blob"),
          x = c("FileList"),
          w = c("URLSearchParams");
        function E(t, e, {
          allOwnKeys: n = !1
        } = {}) {
          if (null == t) return;
          let r, i;
          if ("object" != typeof t && (t = [t]), s(t)) for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);else {
            const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
              o = i.length;
            let a;
            for (r = 0; r < o; r++) a = i[r], e.call(null, t[a], a, t);
          }
        }
        function Z(t, e) {
          e = e.toLowerCase();
          const n = Object.keys(t);
          let r,
            i = n.length;
          for (; i-- > 0;) if (r = n[i], e === r.toLowerCase()) return r;
          return null;
        }
        const O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : __webpack_require__.g,
          S = t => !p(t) && t !== O,
          j = (k = "undefined" != typeof Uint8Array && o(Uint8Array), t => k && t instanceof k);
        var k;
        const N = c("HTMLFormElement"),
          A = (({
            hasOwnProperty: t
          }) => (e, n) => t.call(e, n))(Object.prototype),
          C = c("RegExp"),
          L = (t, e) => {
            const n = Object.getOwnPropertyDescriptors(t),
              r = {};
            E(n, (n, i) => {
              let o;
              !1 !== (o = e(n, i, t)) && (r[i] = o || n);
            }), Object.defineProperties(t, r);
          },
          M = "abcdefghijklmnopqrstuvwxyz",
          T = "0123456789",
          R = {
            DIGIT: T,
            ALPHA: M,
            ALPHA_DIGIT: M + M.toUpperCase() + T
          },
          P = c("AsyncFunction"),
          I = {
            isArray: s,
            isArrayBuffer: d,
            isBuffer: function (t) {
              return null !== t && !p(t) && null !== t.constructor && !p(t.constructor) && h(t.constructor.isBuffer) && t.constructor.isBuffer(t);
            },
            isFormData: t => {
              let e;
              return t && ("function" == typeof FormData && t instanceof FormData || h(t.append) && ("formdata" === (e = a(t)) || "object" === e && h(t.toString) && "[object FormData]" === t.toString()));
            },
            isArrayBufferView: function (t) {
              let e;
              return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && d(t.buffer), e;
            },
            isString: f,
            isNumber: m,
            isBoolean: t => !0 === t || !1 === t,
            isObject: _,
            isPlainObject: g,
            isUndefined: p,
            isDate: v,
            isFile: y,
            isBlob: b,
            isRegExp: C,
            isFunction: h,
            isStream: t => _(t) && h(t.pipe),
            isURLSearchParams: w,
            isTypedArray: j,
            isFileList: x,
            forEach: E,
            merge: function t() {
              const {
                  caseless: e
                } = S(this) && this || {},
                n = {},
                r = (r, i) => {
                  const o = e && Z(n, i) || i;
                  g(n[o]) && g(r) ? n[o] = t(n[o], r) : g(r) ? n[o] = t({}, r) : s(r) ? n[o] = r.slice() : n[o] = r;
                };
              for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && E(arguments[t], r);
              return n;
            },
            extend: (t, e, n, {
              allOwnKeys: i
            } = {}) => (E(e, (e, i) => {
              n && h(e) ? t[i] = (0, r.Z)(e, n) : t[i] = e;
            }, {
              allOwnKeys: i
            }), t),
            trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
            inherits: (t, e, n, r) => {
              t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                value: e.prototype
              }), n && Object.assign(t.prototype, n);
            },
            toFlatObject: (t, e, n, r) => {
              let i, a, l;
              const c = {};
              if (e = e || {}, null == t) return e;
              do {
                for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0;) l = i[a], r && !r(l, t, e) || c[l] || (e[l] = t[l], c[l] = !0);
                t = !1 !== n && o(t);
              } while (t && (!n || n(t, e)) && t !== Object.prototype);
              return e;
            },
            kindOf: a,
            kindOfTest: c,
            endsWith: (t, e, n) => {
              t = String(t), (void 0 === n || n > t.length) && (n = t.length), n -= e.length;
              const r = t.indexOf(e, n);
              return -1 !== r && r === n;
            },
            toArray: t => {
              if (!t) return null;
              if (s(t)) return t;
              let e = t.length;
              if (!m(e)) return null;
              const n = new Array(e);
              for (; e-- > 0;) n[e] = t[e];
              return n;
            },
            forEachEntry: (t, e) => {
              const n = (t && t[Symbol.iterator]).call(t);
              let r;
              for (; (r = n.next()) && !r.done;) {
                const n = r.value;
                e.call(t, n[0], n[1]);
              }
            },
            matchAll: (t, e) => {
              let n;
              const r = [];
              for (; null !== (n = t.exec(e));) r.push(n);
              return r;
            },
            isHTMLForm: N,
            hasOwnProperty: A,
            hasOwnProp: A,
            reduceDescriptors: L,
            freezeMethods: t => {
              L(t, (e, n) => {
                if (h(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                const r = t[n];
                h(r) && (e.enumerable = !1, "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
              });
            },
            toObjectSet: (t, e) => {
              const n = {},
                r = t => {
                  t.forEach(t => {
                    n[t] = !0;
                  });
                };
              return s(t) ? r(t) : r(String(t).split(e)), n;
            },
            toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
              return e.toUpperCase() + n;
            }),
            noop: () => {},
            toFiniteNumber: (t, e) => (t = +t, Number.isFinite(t) ? t : e),
            findKey: Z,
            global: O,
            isContextDefined: S,
            ALPHABET: R,
            generateString: (t = 16, e = R.ALPHA_DIGIT) => {
              let n = "";
              const {
                length: r
              } = e;
              for (; t--;) n += e[Math.random() * r | 0];
              return n;
            },
            isSpecCompliantForm: function (t) {
              return !!(t && h(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator]);
            },
            toJSONObject: t => {
              const e = new Array(10),
                n = (t, r) => {
                  if (_(t)) {
                    if (e.indexOf(t) >= 0) return;
                    if (!("toJSON" in t)) {
                      e[r] = t;
                      const i = s(t) ? [] : {};
                      return E(t, (t, e) => {
                        const o = n(t, r + 1);
                        !p(o) && (i[e] = o);
                      }), e[r] = void 0, i;
                    }
                  }
                  return t;
                };
              return n(t, 0);
            },
            isAsyncFn: P,
            isThenable: t => t && (_(t) || h(t)) && h(t.then) && h(t.catch)
          };
      },
      4147: t => {
        "use strict";

        t.exports = JSON.parse('{"u2":"@mybricks/plugin-connector-http","i8":"1.1.54"}');
      }
    },
    __webpack_module_cache__ = {};
  function __nested_webpack_require_353582__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = __webpack_module_cache__[t] = {
      id: t,
      exports: {}
    };
    return __webpack_modules__[t].call(n.exports, n, n.exports, __nested_webpack_require_353582__), n.exports;
  }
  __nested_webpack_require_353582__.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return __nested_webpack_require_353582__.d(e, {
      a: e
    }), e;
  }, __nested_webpack_require_353582__.d = (t, e) => {
    for (var n in e) __nested_webpack_require_353582__.o(e, n) && !__nested_webpack_require_353582__.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    });
  }, __nested_webpack_require_353582__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __nested_webpack_require_353582__.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, __nested_webpack_require_353582__.nc = void 0;
  var __nested_webpack_exports__ = {};
  return (() => {
    "use strict";

    __nested_webpack_require_353582__.r(__nested_webpack_exports__), __nested_webpack_require_353582__.d(__nested_webpack_exports__, {
      call: () => o.call,
      default: () => u,
      mock: () => l.q
    });
    var t = __nested_webpack_require_353582__(2453),
      e = __nested_webpack_require_353582__(9493),
      n = __nested_webpack_require_353582__(3887),
      r = __nested_webpack_require_353582__(4e3),
      i = __nested_webpack_require_353582__(5525),
      o = __nested_webpack_require_353582__(8704),
      a = __nested_webpack_require_353582__(8543),
      l = __nested_webpack_require_353582__(2566),
      c = __nested_webpack_require_353582__(4147);
    function u() {
      var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return {
        name: i.MK,
        namespace: i.MK,
        title: "连接器",
        description: "连接器",
        data: n.Z,
        onLoad: function (t) {
          var e,
            n,
            o,
            a = t.data;
          a && (a.config = a.config || {
            paramsFn: (null === (e = null == c ? void 0 : c.initialValue) || void 0 === e ? void 0 : e.paramsFn) || i.Ys,
            resultFn: (null === (n = null == c ? void 0 : c.initialValue) || void 0 === n ? void 0 : n.resultFn) || i.Q1
          }, a.config.resultFn = a.config.resultFn || (null === (o = null == c ? void 0 : c.initialValue) || void 0 === o ? void 0 : o.resultFn) || i.Q1, r.ZP.initPureConnectors(a));
        },
        callConnector: function (t, e, n) {
          if (null == n ? void 0 : n.openMock) return (0, l.q)(Object.assign(Object.assign({}, t), {
            outputSchema: n.mockSchema
          }));
          var i = Object.assign({}, (0, r.rR)()),
            a = "test" === t.mode ? t : i.connectors.find(function (e) {
              return e.id === t.id;
            });
          if (a) {
            var c = Object.assign({}, a);
            return c.script || (c = Object.assign(Object.assign(Object.assign({}, c), {
              globalParamsFn: i.config.paramsFn,
              globalResultFn: i.config.resultFn
            }), a.content || {})), (0, o.call)(Object.assign(Object.assign(Object.assign({}, t), c), {
              useProxy: !0
            }), e, n);
          }
          return Promise.reject("找不到对应连接器 Script 执行脚本.");
        },
        toJSON: function () {
          var t = Object.assign({}, (0, r.rR)());
          if (null == c ? void 0 : c.pure) {
            try {
              t.config.paramsFn = (0, a.T)(t.config.paramsFn), t.config.resultFn = (0, a.T)(t.config.resultFn), t.connectors = t.connectors.map(function (t) {
                var e = t.type,
                  n = t.id,
                  r = t.content,
                  i = r.input,
                  o = r.output,
                  l = r.method,
                  c = r.path,
                  u = r.excludeKeys,
                  s = r.outputKeys;
                return {
                  type: e,
                  id: n,
                  input: (0, a.T)(i),
                  output: (0, a.T)(o),
                  method: l,
                  path: null == c ? void 0 : c.trim(),
                  excludeKeys: u,
                  outputKeys: s
                };
              });
            } catch (t) {
              console.log("连接器 toJSON 错误", t);
            }
            return t;
          }
          return t.connectors.map(function (e) {
            return {
              id: e.id,
              type: e.type,
              title: e.content.title,
              script: (0, a.i)(Object.assign(Object.assign({}, e.content), {
                globalParamsFn: t.config.paramsFn,
                globalResultFn: t.config.resultFn
              }))
            };
          });
        },
        contributes: {
          sliderView: {
            tab: {
              title: "连接器",
              icon: e.qv,
              apiSet: ["connector"],
              render: function (e) {
                return React.createElement(t.Z, Object.assign({}, c, e));
              }
            }
          }
        }
      };
    }
    console.log("%c ".concat(c.u2, " %c@").concat(c.i8), "color:#FFF;background:#fa6400", "", "");
  })(), __nested_webpack_exports__;
})());

/***/ }),

/***/ "./node_modules/@mybricks/render-web/index.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@mybricks/render-web/index.min.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-dom */ "react-dom")) : 0;
}(this, (__WEBPACK_EXTERNAL_MODULE__359__, __WEBPACK_EXTERNAL_MODULE__318__) => (() => {
  var __webpack_modules__ = {
      680: function (module) {
        var t;
        t = () => (() => {
          "use strict";

          var __webpack_modules__ = {
              356: (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_330__) => {
                function __WEBPACK_DEFAULT_EXPORT__({
                  data,
                  outputs,
                  inputs,
                  onError
                }) {
                  inputs.from((val, relOutpus) => {
                    var _a;
                    const script = null === (_a = data.exchange) || void 0 === _a ? void 0 : _a.script;
                    if (script) {
                      let fn, returnVal, isOk;
                      try {
                        eval(`fn = ${script}`), returnVal = fn(val), isOk = !0;
                      } catch (e) {
                        console.error(e), onError(`数据转换错误:${e.message}`, e);
                      }
                      isOk && outputs.to(returnVal);
                    } else onError("未配置转换规则");
                  });
                }
                __nested_webpack_require_330__.d(__nested_webpack_exports__, {
                  Z: () => __WEBPACK_DEFAULT_EXPORT__
                });
              }
            },
            __webpack_module_cache__ = {};
          function __nested_webpack_require_835__(e) {
            var t = __webpack_module_cache__[e];
            if (void 0 !== t) return t.exports;
            var n = __webpack_module_cache__[e] = {
              exports: {}
            };
            return __webpack_modules__[e](n, n.exports, __nested_webpack_require_835__), n.exports;
          }
          __nested_webpack_require_835__.d = (e, t) => {
            for (var n in t) __nested_webpack_require_835__.o(t, n) && !__nested_webpack_require_835__.o(e, n) && Object.defineProperty(e, n, {
              enumerable: !0,
              get: t[n]
            });
          }, __nested_webpack_require_835__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __nested_webpack_require_835__.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(e, "__esModule", {
              value: !0
            });
          };
          var __nested_webpack_exports__ = {};
          return (() => {
            __nested_webpack_require_835__.r(__nested_webpack_exports__), __nested_webpack_require_835__.d(__nested_webpack_exports__, {
              default: () => u,
              getCom: () => p
            });
            const e = JSON.parse('{"title":"Fn计算","namespace":"mybricks.core-comlib.fn","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"Fn计算","icon":"./icon.png","runtime":"./Fn.tsx","rtType":"js","visibility":false}'),
              t = JSON.parse('{"visibility":false,"title":"变量","namespace":"mybricks.core-comlib.var","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"变量","icon":"./icon.png","data":"./data.json","runtime":"./Var.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"get","title":"读取","schema":{"type":"any"},"rels":["return"]},{"id":"set","title":"赋值","schema":{"type":"follow"},"rels":["return"]},{"id":"reset","title":"重置","schema":{"type":"any"}}],"outputs":[{"id":"return","title":"完成","schema":{"type":"unknown"}},{"id":"changed","title":"当值发生变化","schema":{"type":"unknown"}}]}');
            function n(e) {
              if (e && "object" == typeof e) try {
                return JSON.parse(JSON.stringify(e));
              } catch (t) {
                return e;
              }
              return e;
            }
            const o = JSON.parse('{"title":"类型转换","visibility":false,"namespace":"mybricks.core-comlib.type-change","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"类型转换","icon":"./icon.png","runtime":"./rt.tsx","editors":"./editors.tsx","rtType":"js","inputs":[{"id":"from","title":"从","schema":{"type":"follow"},"rels":["to"]}],"outputs":[{"id":"to","title":"到","schema":{"type":"follow"},"conMax":1,"editable":true}]}');
            var r = __nested_webpack_require_835__(356);
            const s = JSON.parse('{"deprecated":true,"visibility":false,"title":"连接器","namespace":"mybricks.core-comlib.connector","author":"MyBricks","author_name":"MyBricks","version":"1.0.0","description":"连接器","runtime":"./runtime.ts","editors":"./editors.tsx","icon":"./icon.svg","rtType":"js-autorun","inputs":[{"id":"call","rels":["then","catch"],"title":"调用","schema":{"type":"object"}}],"outputs":[{"id":"then","title":"结果","schema":{"type":"unknown"}},{"id":"catch","title":"发生错误","schema":{"type":"string"}}]}');
            function i({
              env: e,
              data: t,
              outputs: n,
              onError: o
            }, r = {}) {
              if (t.connector) try {
                e.callConnector(t.connector, r, t.connectorConfig).then(e => {
                  n.then(e);
                }).catch(e => {
                  n.catch(e);
                });
              } catch (e) {
                console.error(e), n.catch(`执行错误 ${e.message || e}`);
              } else n.catch("没有选择接口");
            }
            const a = JSON.parse('{"visibility":false,"title":"作用域输入","namespace":"mybricks.core-comlib.frame-input","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"作用域输入","rtType":"js","runtime":"./runtime.ts","editors":"./editor.tsx","inputs":[{"id":"getCurValue","title":"获取","schema":{"type":"any"},"rels":["return"]}],"outputs":[{"id":"return","title":"结果","schema":{"type":"follow"}}]}'),
              c = JSON.parse('{"visibility":false,"title":"打开对话框","namespace":"mybricks.core-comlib.scenes","author":"CheMingjun","author_name":"车明君","version":"1.0.0","description":"切换场景","icon":"./icon.png","runtime":"./runtime.ts","data":"./data.json","rtType":"js","inputs":[{"id":"open","title":"打开","schema":{"type":"any"}}]}'),
              l = {
                id: "mybricks-core-comlib",
                title: "Mybrics核心组件库",
                author: "CheMingjun",
                icon: "",
                version: "1.0.1",
                comAray: [d({
                  comDef: e,
                  rt: function ({
                    inputs: e,
                    outputs: t
                  }) {}
                }), d({
                  comDef: t,
                  rt: function ({
                    env: e,
                    data: t,
                    outputs: o,
                    inputs: r,
                    _notifyBindings: s
                  }) {
                    r.get((e, o) => {
                      const r = n(void 0 !== t.val ? t.val : t.initValue);
                      o.return(r);
                    }), r.set((e, r) => {
                      t.val = e;
                      const i = n(e);
                      o.changed(i, !0), s(i), r.return(i);
                    }), r.reset(() => {
                      const e = t.initValue;
                      t.val = e;
                      const r = n(e);
                      o.changed(r, !0), s(r);
                    });
                  }
                }), d({
                  comDef: o,
                  rt: r.Z
                }), d({
                  comDef: s,
                  rt: function ({
                    env: e,
                    data: t,
                    inputs: n,
                    outputs: o,
                    onError: r
                  }) {
                    e.runtime && (t.immediate ? i({
                      env: e,
                      data: t,
                      outputs: o
                    }) : n.call(n => {
                      i({
                        env: e,
                        data: t,
                        outputs: o,
                        onError: r
                      }, n);
                    }));
                  }
                }), d({
                  comDef: a,
                  rt: function ({
                    env: e,
                    data: t,
                    inputs: n,
                    outputs: o
                  }) {
                    e.runtime && n.getCurValue((e, t) => {
                      t.return(e);
                    });
                  }
                }), d({
                  comDef: c,
                  rt: function ({
                    env: e,
                    data: t,
                    inputs: n,
                    _inputs: o,
                    _inputsCallable: r
                  }) {
                    n.open(n => {
                      e.canvas.open(t._sceneId, n, "popup" === t._sceneShowType ? null : t.openType), r._open(n);
                    });
                  }
                })]
              },
              u = l;
            function p(e) {
              return l.comAray.find(t => t.namespace === e);
            }
            function d({
              comDef: e,
              rt: t,
              data: n
            }) {
              return Object.assign(e, {
                runtime: t,
                data: n
              });
            }
          })(), __nested_webpack_exports__;
        })(), module.exports = t();
      },
      428: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => a
        });
        var o = n(81),
          r = n.n(o),
          s = n(645),
          i = n.n(s)()(r());
        i.push([e.id, ".error-c0f46 {\n  font-size: 12px;\n  color: #f5222d;\n  overflow: hidden;\n  white-space: pre-wrap;\n}\n", ""]), i.locals = {
          error: "error-c0f46"
        };
        const a = i;
      },
      818: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => a
        });
        var o = n(81),
          r = n.n(o),
          s = n(645),
          i = n.n(s)()(r());
        i.push([e.id, "@keyframes slipInto-fb013 {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.main-a6e42 {\n  animation: slipInto-fb013 0.1s ease-in-out 1;\n}\n", ""]), i.locals = {
          main: "main-a6e42",
          slipInto: "slipInto-fb013"
        };
        const a = i;
      },
      749: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => a
        });
        var o = n(81),
          r = n.n(o),
          s = n(645),
          i = n.n(s)()(r());
        i.push([e.id, ".container-ff9f5 {\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n}\n.container-ff9f5 .itemWrap-a3069 {\n  position: relative;\n}\n.container-ff9f5 .item-c8a43 {\n  padding: 16px;\n  background-color: #fff;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  max-width: 50vw;\n  max-height: 50vh;\n  overflow: auto;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n}\n.container-ff9f5 .errorItem-e6fc8 {\n  color: #f5222d;\n}\n.container-ff9f5 .closeIcon-c5e91 {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  cursor: pointer;\n}\n.container-ff9f5 .closeIcon-c5e91:hover {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n", ""]), i.locals = {
          container: "container-ff9f5",
          itemWrap: "itemWrap-a3069",
          item: "item-c8a43",
          errorItem: "errorItem-e6fc8",
          closeIcon: "closeIcon-c5e91"
        };
        const a = i;
      },
      250: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => a
        });
        var o = n(81),
          r = n.n(o),
          s = n(645),
          i = n.n(s)()(r());
        i.push([e.id, "/**\n * MyBricks Opensource\n * https://mybricks.world\n * This source code is licensed under the MIT license.\n *\n * CheMingjun @2019\n * mybricks@126.com\n */\n.slot-ced90 {\n  width: 100%;\n  height: 100% !important;\n  position: relative;\n}\n.lyFlexColumn-f7fd6 {\n  display: flex;\n  flex-direction: column;\n}\n.lyFlexRow-c8e04 {\n  display: flex;\n  flex-direction: row;\n}\n.justifyContentFlexStart-b95f6 {\n  justify-content: flex-start;\n}\n.justifyContentFlexCenter-e1ca1 {\n  justify-content: center;\n}\n.justifyContentFlexFlexEnd-ef832 {\n  justify-content: flex-end;\n}\n.justifyContentFlexSpaceAround-ad880 {\n  justify-content: space-around;\n}\n.justifyContentFlexSpaceBetween-a2f09 {\n  justify-content: space-between;\n}\n.alignItemsFlexStart-a8880 {\n  align-items: flex-start;\n}\n.alignItemsFlexCenter-c6d62 {\n  align-items: center;\n}\n.alignItemsFlexFlexEnd-d7b4c {\n  align-items: flex-end;\n}\n.debugFocus-def53 {\n  outline: 1px dashed red;\n  outline-offset: -3px;\n}\n.com-f9041 {\n  flex-shrink: 0;\n}\n.flex-ca980 {\n  flex: 1;\n  min-height: 0;\n  position: relative;\n}\n.flex-ca980 > div {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.flex-ca980 > * {\n  height: 100%;\n}\n.error-d4d00 {\n  font-size: 12px;\n  color: #f5222d;\n  overflow: hidden;\n}\n.errorRT-e9378 {\n  padding: 5px;\n  border: 1px dashed #f5222d;\n}\n.errorRT-e9378 .tt-d634d {\n  font-size: 12px;\n  color: #f5222d;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.errorRT-e9378 .info-d57d6 {\n  color: #f5222d;\n  margin-bottom: 5px;\n}\n", ""]), i.locals = {
          slot: "slot-ced90",
          lyFlexColumn: "lyFlexColumn-f7fd6",
          lyFlexRow: "lyFlexRow-c8e04",
          justifyContentFlexStart: "justifyContentFlexStart-b95f6",
          justifyContentFlexCenter: "justifyContentFlexCenter-e1ca1",
          justifyContentFlexFlexEnd: "justifyContentFlexFlexEnd-ef832",
          justifyContentFlexSpaceAround: "justifyContentFlexSpaceAround-ad880",
          justifyContentFlexSpaceBetween: "justifyContentFlexSpaceBetween-a2f09",
          alignItemsFlexStart: "alignItemsFlexStart-a8880",
          alignItemsFlexCenter: "alignItemsFlexCenter-c6d62",
          alignItemsFlexFlexEnd: "alignItemsFlexFlexEnd-d7b4c",
          debugFocus: "debugFocus-def53",
          com: "com-f9041",
          flex: "flex-ca980",
          error: "error-d4d00",
          errorRT: "errorRT-e9378",
          tt: "tt-d634d",
          info: "info-d57d6"
        };
        const a = i;
      },
      645: e => {
        "use strict";

        e.exports = function (e) {
          var t = [];
          return t.toString = function () {
            return this.map(function (t) {
              var n = "",
                o = void 0 !== t[5];
              return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), o && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n;
            }).join("");
          }, t.i = function (e, n, o, r, s) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var i = {};
            if (o) for (var a = 0; a < this.length; a++) {
              var c = this[a][0];
              null != c && (i[c] = !0);
            }
            for (var l = 0; l < e.length; l++) {
              var u = [].concat(e[l]);
              o && i[u[0]] || (void 0 !== s && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = s), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), t.push(u));
            }
          }, t;
        };
      },
      81: e => {
        "use strict";

        e.exports = function (e) {
          return e[1];
        };
      },
      543: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => v
        });
        var o = n(379),
          r = n.n(o),
          s = n(795),
          i = n.n(s),
          a = n(565),
          c = n.n(a),
          l = n(216),
          u = n.n(l),
          p = n(589),
          d = n.n(p),
          f = n(428),
          m = {};
        f.Z && f.Z.locals && (m.locals = f.Z.locals);
        var _,
          y = 0,
          g = {};
        g.styleTagTransform = d(), g.setAttributes = c(), g.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }, g.domAPI = i(), g.insertStyleElement = u(), m.use = function (e) {
          return g.options = e || {}, y++ || (_ = r()(f.Z, g)), m;
        }, m.unuse = function () {
          y > 0 && ! --y && (_(), _ = null);
        };
        const v = m;
      },
      822: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => v
        });
        var o = n(379),
          r = n.n(o),
          s = n(795),
          i = n.n(s),
          a = n(565),
          c = n.n(a),
          l = n(216),
          u = n.n(l),
          p = n(589),
          d = n.n(p),
          f = n(818),
          m = {};
        f.Z && f.Z.locals && (m.locals = f.Z.locals);
        var _,
          y = 0,
          g = {};
        g.styleTagTransform = d(), g.setAttributes = c(), g.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }, g.domAPI = i(), g.insertStyleElement = u(), m.use = function (e) {
          return g.options = e || {}, y++ || (_ = r()(f.Z, g)), m;
        }, m.unuse = function () {
          y > 0 && ! --y && (_(), _ = null);
        };
        const v = m;
      },
      514: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => v
        });
        var o = n(379),
          r = n.n(o),
          s = n(795),
          i = n.n(s),
          a = n(565),
          c = n.n(a),
          l = n(216),
          u = n.n(l),
          p = n(589),
          d = n.n(p),
          f = n(749),
          m = {};
        f.Z && f.Z.locals && (m.locals = f.Z.locals);
        var _,
          y = 0,
          g = {};
        g.styleTagTransform = d(), g.setAttributes = c(), g.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }, g.domAPI = i(), g.insertStyleElement = u(), m.use = function (e) {
          return g.options = e || {}, y++ || (_ = r()(f.Z, g)), m;
        }, m.unuse = function () {
          y > 0 && ! --y && (_(), _ = null);
        };
        const v = m;
      },
      397: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => v
        });
        var o = n(379),
          r = n.n(o),
          s = n(795),
          i = n.n(s),
          a = n(565),
          c = n.n(a),
          l = n(216),
          u = n.n(l),
          p = n(589),
          d = n.n(p),
          f = n(250),
          m = {};
        f.Z && f.Z.locals && (m.locals = f.Z.locals);
        var _,
          y = 0,
          g = {};
        g.styleTagTransform = d(), g.setAttributes = c(), g.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }, g.domAPI = i(), g.insertStyleElement = u(), m.use = function (e) {
          return g.options = e || {}, y++ || (_ = r()(f.Z, g)), m;
        }, m.unuse = function () {
          y > 0 && ! --y && (_(), _ = null);
        };
        const v = m;
      },
      379: e => {
        "use strict";

        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++) if (t[o].identifier === e) {
            n = o;
            break;
          }
          return n;
        }
        function o(e, o) {
          for (var s = {}, i = [], a = 0; a < e.length; a++) {
            var c = e[a],
              l = o.base ? c[0] + o.base : c[0],
              u = s[l] || 0,
              p = "".concat(l, " ").concat(u);
            s[l] = u + 1;
            var d = n(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5]
              };
            if (-1 !== d) t[d].references++, t[d].updater(f);else {
              var m = r(f, o);
              o.byIndex = a, t.splice(a, 0, {
                identifier: p,
                updater: m,
                references: 1
              });
            }
            i.push(p);
          }
          return i;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          n.update(e);
          return function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t);
            } else n.remove();
          };
        }
        e.exports = function (e, r) {
          var s = o(e = e || [], r = r || {});
          return function (e) {
            e = e || [];
            for (var i = 0; i < s.length; i++) {
              var a = n(s[i]);
              t[a].references--;
            }
            for (var c = o(e, r), l = 0; l < s.length; l++) {
              var u = n(s[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            s = c;
          };
        };
      },
      216: e => {
        "use strict";

        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";

        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: e => {
        "use strict";

        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")), n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), o += n.css, r && (o += "}"), n.media && (o += "}"), n.supports && (o += "}");
                var s = n.sourceMap;
                s && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleTagTransform(o, e, t.options);
              }(t, e, n);
            },
            remove: function () {
              !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              }(t);
            }
          };
        };
      },
      589: e => {
        "use strict";

        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      783: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => a
        });
        var o = n(359),
          r = n.n(o),
          s = n(724);
        const i = n(543).Z.locals;
        class a extends r().PureComponent {
          constructor() {
            super(...arguments), this.state = {
              hasError: !1,
              error: null,
              errorInfo: null
            };
          }
          static getDerivedStateFromError(e) {
            var t;
            return {
              hasError: !0,
              error: (null == e ? void 0 : e.stack) || (null == e ? void 0 : e.message) || (null === (t = null == e ? void 0 : e.toString) || void 0 === t ? void 0 : t.call(e))
            };
          }
          componentDidCatch(e, t) {
            var n, o;
            console.error(e, t), s.Z.error(e), this.setState({
              error: (null == e ? void 0 : e.stack) || (null == e ? void 0 : e.message) || (null === (n = null == e ? void 0 : e.toString) || void 0 === n ? void 0 : n.call(e)),
              errorInfo: (null == t ? void 0 : t.stack) || (null == t ? void 0 : t.message) || (null === (o = null == t ? void 0 : t.toString) || void 0 === o ? void 0 : o.call(t))
            });
          }
          render() {
            const {
                hasError: e,
                error: t,
                errorInfo: n
              } = this.state,
              {
                children: o,
                errorTip: s
              } = this.props;
            return e ? r().createElement("div", {
              className: i.error
            }, r().createElement("div", null, s || "渲染错误"), r().createElement("div", null, t || n)) : o;
          }
        }
      },
      294: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => b
        });
        var o = n(359),
          r = n.n(o),
          s = n(680),
          i = n.n(s),
          a = n(218),
          c = n(72),
          l = n(679),
          u = n(477),
          p = n(724),
          d = n(783),
          f = n(443),
          m = n(397),
          _ = n(822),
          y = n(543),
          g = n(514);
        const v = (e, t) => {
          e.forEach(e => {
            e.comAray ? v(e.comAray, t) : t[`${e.namespace}-${e.version}`] = e;
          });
        };
        let h = 1;
        function b({
          json: e,
          opts: t,
          style: n = {},
          className: s = ""
        }) {
          const b = (0, o.useMemo)(() => {
              var e, n, o, r, s;
              if (1 === h) {
                h = 2;
                const i = null === (e = t.env) || void 0 === e ? void 0 : e.pxToRem,
                  a = document.documentElement;
                if (i) {
                  const {
                    enableAdaptive: c = !1,
                    landscapeWidth: l = 1440
                  } = i;
                  if (c) {
                    function d() {
                      a.style.fontSize = a.clientWidth / (l / 12) + "px";
                    }
                    d(), window.addEventListener("resize", d);
                  }
                } else a.style.fontSize = "12px";
              }
              return (null === (n = null == t ? void 0 : t.env) || void 0 === n ? void 0 : n.silent) && (0, u.JE)(), p.Z.init(null === (o = null == t ? void 0 : t.env) || void 0 === o ? void 0 : o.showErrorNotification), Object.assign({
                runtime: {},
                i18n: e => e,
                canvasElement: t.debug && ((null === (r = t.env) || void 0 === r ? void 0 : r.shadowRoot) || (null === (s = document.getElementById("_mybricks-geo-webview_")) || void 0 === s ? void 0 : s.shadowRoot)) || document.body,
                canvas: {
                  type: window.document.body.clientWidth <= 414 ? "mobile" : "pc"
                }
              }, t.env);
            }, []),
            x = (0, o.useMemo)(() => {
              t.observable || (0, f.O)({
                pxToRem: b.pxToRem
              });
              let e = null;
              t.comDefs && (e = {}, Object.assign(e, t.comDefs));
              let n = [...(window.__comlibs_edit_ || []), ...(window.__comlibs_rt_ || [])];
              if (!e) {
                if (!n.length) throw new Error('组件库为空，请检查是否通过<script src="组件库地址"><\/script>加载或通过comDefs传入了组件库运行时.');
                e = {};
              }
              return n.push(i()), n.forEach(t => {
                const n = t.comAray;
                n && Array.isArray(n) && v(n, e);
              }), e;
            }, []),
            w = (0, o.useCallback)(e => {
              const t = x[e.namespace + "-" + e.version];
              if (!t) {
                const t = [];
                for (let n in x) n.startsWith(e.namespace + "-") && t.push(x[n]);
                if (t && t.length > 0) {
                  t.sort((e, t) => (0, l.yC)(e.version, t.version));
                  const n = t[0];
                  return console.warn(`【Mybricks】组件${e.namespace + "@" + e.version}未找到，使用${n.namespace}@${n.version}代替.`), n;
                }
                throw console.log(x), new Error(`组件${e.namespace + "@" + e.version}未找到，请确定是否存在该组件以及对应的版本号.`);
              }
              return t;
            }, []),
            {
              slot: k
            } = e,
            I = (0, o.useMemo)(() => e => {
              console.error(e), p.Z.error(e);
            }, []),
            E = (0, o.useMemo)(() => Object.assign(Object.assign({}, console), {
              error: e => {
                console.error(e), p.Z.error(e);
              }
            }), []),
            [j, C] = (0, o.useMemo)(() => {
              var n;
              (0, l.nZ)(m.Z, b.shadowRoot), (0, l.nZ)(_.Z, b.shadowRoot), (0, l.nZ)(y.Z, b.shadowRoot), (0, l.nZ)(g.Z, b.shadowRoot);
              try {
                let n;
                return [(0, a.Z)({
                  json: e,
                  getComDef: w,
                  events: t.events,
                  env: b,
                  ref(e) {
                    n = e, t.ref && t.ref(e);
                  },
                  onError: I,
                  debug: t.debug,
                  debugLogger: t.debugLogger,
                  logger: E,
                  scenesOperate: t.scenesOperate
                }, {
                  observable: t.observable || f.L
                }), n];
              } catch (e) {
                throw console.error(e), p.Z.error(`导出的JSON.script执行异常: ${(null == e ? void 0 : e.stack) || (null == e ? void 0 : e.message) || (null === (n = null == e ? void 0 : e.toString) || void 0 === n ? void 0 : n.call(e))}`), new Error("导出的JSON.script执行异常.");
              }
            }, []);
          return (0, o.useLayoutEffect)(() => {
            t.disableAutoRun || C.run();
          }, []), "js" === e.rtType ? r().createElement(r().Fragment, null) : r().createElement(d.Z, {
            errorTip: "页面渲染错误"
          }, r().createElement(c.Z, {
            env: b,
            style: n,
            _env: t._env,
            slot: k,
            getComDef: w,
            context: j,
            className: s,
            __rxui_child__: !t.observable,
            createPortal: t.createPortal || (() => {}),
            onError: I,
            logger: E,
            root: !0
          }));
        }
      },
      925: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => l
        });
        var o = n(359),
          r = n.n(o),
          s = n(294),
          i = n(822),
          a = function (e, t, n, o) {
            return new (n || (n = Promise))(function (r, s) {
              function i(e) {
                try {
                  c(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function a(e) {
                try {
                  c(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                  e(t);
                })).then(i, a);
              }
              c((o = o.apply(e, t || [])).next());
            });
          };
        const c = i.Z.locals;
        function l({
          json: e,
          opts: t
        }) {
          const [n, i] = (0, o.useState)(0),
            [l, d] = (0, o.useState)([]),
            [f, m] = (0, o.useState)([]),
            {
              scenesMap: _,
              scenesOperateInputsTodo: y,
              themes: g,
              permissions: v
            } = (0, o.useMemo)(() => {
              if (t.sceneId) {
                const n = e.scenes.findIndex(e => e.id === t.sceneId);
                if (-1 !== n) {
                  const t = e.scenes.splice(n, 1);
                  e.scenes.unshift(...t), "popup" === t[0].type && d([t[0].id]);
                }
              }
              const n = [];
              return e.scenes.forEach((e, t) => {
                "popup" === e.type ? t || d([e.id]) : n.push(e);
              }), m(n), {
                scenesMap: e.scenes.reduce((e, t, n) => {
                  var o;
                  return Object.assign(Object.assign({}, e), {
                    [t.id]: {
                      show: 0 === n,
                      todo: [],
                      json: t,
                      disableAutoRun: !!n,
                      useEntryAnimation: !1,
                      type: (null === (o = t.slot) || void 0 === o ? void 0 : o.showType) || t.type
                    }
                  });
                }, {}),
                scenesOperateInputsTodo: {},
                themes: e.themes,
                permissions: e.permissions || []
              };
            }, []);
          (0, o.useMemo)(() => {
            if (t.ref) {
              const e = t.ref;
              t.ref = n => o => (n(o), e.call(t, o));
            } else t.ref = e => t => {
              e(t);
            };
          }, []);
          const {
              fxFramesMap: h,
              fxFramesJsx: b
            } = (0, o.useMemo)(() => {
              const n = {},
                o = [],
                {
                  global: c
                } = e;
              if (c) {
                const {
                  fxFrames: l
                } = c;
                Array.isArray(l) && l.forEach(l => {
                  var u;
                  const {
                      id: f
                    } = l,
                    g = {};
                  n[f] = g;
                  const v = Object.assign(Object.assign({}, t), {
                    env: Object.assign(Object.assign({}, t.env), {
                      canvas: Object.assign({
                        id: f,
                        type: window.document.body.clientWidth <= 414 ? "mobile" : "pc",
                        open: (e, n, o) => a(this, void 0, void 0, function* () {
                          var n;
                          let r = _[e];
                          if (!r) {
                            if ("function" != typeof t.scenesLoader) return void console.error(`缺少场景信息: ${e}`);
                            const o = yield t.scenesLoader({
                              id: e
                            });
                            if (r = {
                              disableAutoRun: !1,
                              json: o,
                              show: !1,
                              parentScope: null,
                              todo: [],
                              type: (null === (n = o.slot) || void 0 === n ? void 0 : n.showType) || o.type,
                              useEntryAnimation: !1
                            }, _[e] = r, "popup" === o.type || m(e => [...e, o]), y[e]) {
                              const {
                                parentScope: t,
                                todo: n
                              } = y[e];
                              r.parentScope = t, n.forEach(({
                                value: e,
                                pinId: t,
                                parentScope: n
                              }) => {
                                r.todo = r.todo.concat({
                                  type: "inputs",
                                  todo: {
                                    pinId: t,
                                    value: e
                                  }
                                });
                              });
                            }
                          }
                          o ? Object.entries(_).forEach(([t, n]) => {
                            t === e ? (n.useEntryAnimation = "blank" === o, n.show = !0, "popup" === n.type ? d(t => [...t, e]) : i(e => e + 1)) : (n.show = !1, "popup" === n.type ? d(e => e.filter(e => e !== n.json.id)) : i(e => e + 1));
                          }) : r.show || (r.useEntryAnimation = "blank" === o, r.show = !0, "popup" === r.type ? d(t => [...t, e]) : i(e => e + 1));
                        })
                      }, null === (u = t.env) || void 0 === u ? void 0 : u.canvas)
                    }),
                    disableAutoRun: !0,
                    ref: t.ref(e => {
                      g._refs = e;
                      const {
                        inputs: t,
                        outputs: n
                      } = e;
                      l.outputs.forEach(e => {
                        n(e.id, t => {
                          var n;
                          null === (n = g.parentScope) || void 0 === n || n.outputs[e.id](t);
                        });
                      });
                    }),
                    _env: {
                      loadCSSLazy() {},
                      currentScenes: {
                        close() {}
                      }
                    },
                    scenesOperate: {
                      open({
                        todo: e,
                        frameId: t,
                        parentScope: o
                      }) {
                        const r = n[t];
                        (null == r ? void 0 : r._refs) && (r.parentScope = o, r._refs.inputs[e.pinId](e.value, void 0, !1), r._refs.run());
                      },
                      inputs({
                        frameId: e,
                        parentScope: t,
                        value: n,
                        pinId: o
                      }) {
                        const r = _[e];
                        r ? (r.parentScope = t, r._refs ? r._refs.inputs[o](n) : r.todo = r.todo.concat({
                          type: "inputs",
                          todo: {
                            pinId: o,
                            value: n
                          }
                        })) : y[e] ? y[e].todo.push({
                          frameId: e,
                          parentScope: t,
                          value: n,
                          pinId: o
                        }) : y[e] = {
                          parentScope: t,
                          todo: [{
                            value: n,
                            pinId: o
                          }]
                        };
                      },
                      _notifyBindings(e, t) {
                        const {
                          bindingsTo: n
                        } = t.model;
                        if (n) for (let t in n) for (let o in _) {
                          const r = _[o];
                          if (r.json.coms[t]) if (r._refs) p(r._refs, t, n[t], e);else {
                            const o = n[t];
                            r.todo = r.todo.concat({
                              type: "globalVar",
                              todo: {
                                comId: t,
                                bindings: o,
                                value: e
                              }
                            });
                          }
                        }
                      },
                      getGlobalComProps: t => _[e.scenes[0].id]._refs.get(t),
                      exeGlobalCom({
                        com: e,
                        value: t,
                        pinId: n
                      }) {
                        Object.keys(_).forEach(o => {
                          const r = _[o];
                          if (r.show && r._refs) {
                            const o = r._refs.get(e.id);
                            o && o.outputs[n](t, !0, null, !0);
                          }
                        });
                      }
                    }
                  });
                  let h = c.comsReg,
                    b = c.consReg,
                    x = c.pinRels;
                  Object.keys(h).forEach(e => {
                    h[e].global = !0;
                  }), Object.assign(l.coms, h), Object.assign(l.cons, b), Object.assign(l.pinRels, x), o.push(r().createElement(s.Z, {
                    key: f,
                    json: Object.assign(Object.assign({}, l), {
                      rtType: "js"
                    }),
                    opts: v
                  }));
                });
              }
              return {
                fxFramesMap: n,
                fxFramesJsx: o
              };
            }, []),
            x = (0, o.useCallback)(n => {
              var o;
              const r = _[n],
                s = t.env.hasPermission;
              return Object.assign(Object.assign({}, t), {
                env: Object.assign(Object.assign({}, t.env), {
                  themes: g,
                  permissions: v,
                  hasPermission: "function" == typeof s ? e => {
                    if ("string" == typeof e) {
                      const t = v.find(t => t.id === e);
                      return s({
                        permission: t
                      });
                    }
                    return s(e);
                  } : null,
                  canvas: Object.assign({
                    id: n,
                    type: window.document.body.clientWidth <= 414 ? "mobile" : "pc",
                    open: (e, n, o) => a(this, void 0, void 0, function* () {
                      var n;
                      let r = _[e];
                      if (!r) {
                        if ("function" != typeof t.scenesLoader) return void console.error(`缺少场景信息: ${e}`);
                        const o = yield t.scenesLoader({
                          id: e
                        });
                        if (r = {
                          disableAutoRun: !1,
                          json: o,
                          show: !1,
                          parentScope: null,
                          todo: [],
                          type: (null === (n = o.slot) || void 0 === n ? void 0 : n.showType) || o.type,
                          useEntryAnimation: !1
                        }, _[e] = r, "popup" === o.type || m(e => [...e, o]), y[e]) {
                          const {
                            parentScope: t,
                            todo: n
                          } = y[e];
                          r.parentScope = t, n.forEach(({
                            value: e,
                            pinId: t,
                            parentScope: n
                          }) => {
                            r.todo = r.todo.concat({
                              type: "inputs",
                              todo: {
                                pinId: t,
                                value: e
                              }
                            });
                          });
                        }
                      }
                      o ? Object.entries(_).forEach(([t, n]) => {
                        t === e ? (n.useEntryAnimation = "blank" === o, n.show = !0, "popup" === n.type ? d(t => [...t, e]) : i(e => e + 1)) : (n.show = !1, "popup" === n.type ? d(e => e.filter(e => e !== n.json.id)) : i(e => e + 1));
                      }) : r.show || (r.useEntryAnimation = "blank" === o, r.show = !0, "popup" === r.type ? d(t => [...t, e]) : i(e => e + 1));
                    })
                  }, null === (o = t.env) || void 0 === o ? void 0 : o.canvas)
                }),
                get disableAutoRun() {
                  return r.disableAutoRun;
                },
                ref: t.ref(e => {
                  r._refs = e;
                  const t = r.todo,
                    {
                      inputs: o,
                      outputs: s
                    } = e,
                    a = r.disableAutoRun;
                  r.json.outputs.forEach(e => {
                    s(e.id, t => {
                      var n;
                      r.show = !1, r.todo = [], r._refs = null, null === (n = r.parentScope) || void 0 === n || n.outputs[e.id](t), r.parentScope = null, "popup" === r.type ? d(e => e.filter(e => e !== r.json.id)) : i(e => e + 1);
                    });
                  }), t.length ? (t.forEach(({
                    type: t,
                    todo: r
                  }) => {
                    if ("inputs" === t) Promise.resolve().then(() => {
                      o[r.pinId](r.value, n);
                    });else if ("globalVar" === t) {
                      const {
                        comId: t,
                        value: n,
                        bindings: o
                      } = r;
                      p(e, t, o, n);
                    }
                  }), r.todo = []) : a || (r.disableAutoRun = !0, Promise.resolve().then(() => {
                    var e, t;
                    null === (t = null === (e = r.json.inputs) || void 0 === e ? void 0 : e.forEach) || void 0 === t || t.call(e, ({
                      id: e
                    }) => {
                      o[e](void 0);
                    });
                  })), a && Promise.resolve().then(() => {
                    e.run();
                  });
                }),
                _env: {
                  loadCSSLazy() {},
                  currentScenes: {
                    close() {
                      r.show = !1, r.todo = [], r._refs = null, "popup" === r.type ? d(e => e.filter(e => e !== r.json.id)) : i(e => e + 1);
                    }
                  }
                },
                scenesOperate: {
                  open({
                    todo: e,
                    frameId: t,
                    parentScope: n
                  }) {
                    const o = _[t];
                    if (o) o.show || (o.show = !0, o.todo = o.todo.concat({
                      type: "inputs",
                      todo: e
                    }), o.parentScope = n, "popup" === o.type ? d(e => [...e, t]) : i(e => e + 1));else {
                      const o = h[t];
                      (null == o ? void 0 : o._refs) && (o.parentScope = n, o._refs.inputs[e.pinId](e.value, void 0, !1), o._refs.run());
                    }
                  },
                  inputs({
                    frameId: e,
                    parentScope: t,
                    value: n,
                    pinId: o
                  }) {
                    const r = _[e];
                    r ? (r.parentScope = t, r._refs ? r._refs.inputs[o](n) : r.todo = r.todo.concat({
                      type: "inputs",
                      todo: {
                        pinId: o,
                        value: n
                      }
                    })) : y[e] ? y[e].todo.push({
                      frameId: e,
                      parentScope: t,
                      value: n,
                      pinId: o
                    }) : y[e] = {
                      parentScope: t,
                      todo: [{
                        value: n,
                        pinId: o
                      }]
                    };
                  },
                  _notifyBindings(e, t) {
                    const {
                      bindingsTo: n
                    } = t.model;
                    if (n) for (let t in n) for (let o in _) {
                      const r = _[o];
                      if (r.json.coms[t]) if (r._refs) p(r._refs, t, n[t], e);else {
                        const o = n[t];
                        r.todo = r.todo.concat({
                          type: "globalVar",
                          todo: {
                            comId: t,
                            bindings: o,
                            value: e
                          }
                        });
                      }
                    }
                  },
                  getGlobalComProps: t => _[e.scenes[0].id]._refs.get(t),
                  exeGlobalCom({
                    com: e,
                    value: t,
                    pinId: n
                  }) {
                    Object.keys(_).forEach(o => {
                      const r = _[o];
                      if (r.show && r._refs) {
                        const o = r._refs.get(e.id);
                        o && o.outputs[n](t, !0, null, !0);
                      }
                    });
                  }
                }
              });
            }, []),
            w = (0, o.useMemo)(() => {
              if (!f.length) return null;
              const {
                global: t
              } = e;
              let n = {},
                o = {},
                s = {};
              return t && (n = t.comsReg, o = t.consReg, s = t.pinRels, Object.keys(n).forEach(e => {
                n[e].global = !0;
              })), f.map((e, t) => {
                const {
                  id: i
                } = e;
                Object.assign(e.coms, n), Object.assign(e.cons, o), Object.assign(e.pinRels, s);
                const a = _[i];
                return a.show && r().createElement(u, {
                  key: e.id,
                  json: Object.assign(Object.assign({}, e), {
                    scenesMap: _
                  }),
                  opts: x(i),
                  className: a.useEntryAnimation ? c.main : "",
                  style: "popup" === a.type ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "#ffffff00"
                  } : {}
                });
              });
            }, [n, f]),
            k = (0, o.useMemo)(() => {
              if (l.length) {
                const {
                  global: t
                } = e;
                let n = {},
                  o = {},
                  s = {};
                return t && (n = t.comsReg, o = t.consReg, s = t.pinRels, Object.keys(n).forEach(e => {
                  n[e].global = !0;
                })), l.map(e => {
                  const t = _[e].json,
                    {
                      id: i
                    } = t;
                  return Object.assign(t.coms, n), Object.assign(t.cons, o), Object.assign(t.pinRels, s), r().createElement(u, {
                    key: t.id,
                    json: Object.assign(Object.assign({}, t), {
                      scenesMap: _
                    }),
                    opts: x(i),
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "#ffffff00"
                    }
                  });
                });
              }
              return null;
            }, [l]);
          return r().createElement(r().Fragment, null, b, w, k);
        }
        function u({
          json: e,
          opts: t,
          style: n = {},
          className: o = ""
        }) {
          return r().createElement(s.Z, {
            json: e,
            opts: t,
            style: n,
            className: o
          });
        }
        function p(e, t, n, o) {
          const r = e.get(t);
          r && Array.isArray(n) && n.forEach(e => {
            let t = r;
            const n = e.split(".");
            n.forEach((e, r) => {
              r !== n.length - 1 ? t = t[e] : t[e] = o;
            });
          });
        }
      },
      724: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => y
        });
        var o = n(359),
          r = n.n(o),
          s = n(318),
          i = n.n(s);
        const a = n(514).Z.locals;
        let c = !1;
        var l;
        !function (e) {
          e.Error = "error";
        }(l || (l = {}));
        const u = "__fz-debug-info-container__";
        let p,
          d = document.getElementById(u),
          f = 0;
        const m = ({
            content: e,
            type: t
          }) => {
            const [n, s] = (0, o.useState)([]),
              i = e => {
                const t = `__fz-notification-id-${++f}__`;
                e = Object.assign({
                  _nid: t
                }, e), s(t => [...t, e]);
              },
              c = e => {
                s(t => t.filter(t => t._nid !== e));
              };
            return (0, o.useEffect)(() => {
              p = {
                add: i,
                remove: c
              }, e && p.add({
                content: e,
                type: t
              });
            }, []), r().createElement("div", {
              className: a.container
            }, n.map(e => r().createElement("div", {
              key: e._nid,
              className: a.itemWrap
            }, r().createElement("div", {
              className: `${a.item} ${a.errorItem}`
            }, r().createElement("svg", {
              className: a.closeIcon,
              viewBox: "0 0 1045 1024",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: () => p.remove(e._nid)
            }, r().createElement("path", {
              d: "M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z",
              fill: "#555555"
            })), e.content))));
          },
          _ = ["ResizeObserver loop limit exceeded"],
          y = {
            init: e => {
              c = !1 !== e, c && (window.onerror = function (e, t, n, o, r) {
                if ("string" != typeof e || !_.includes(e)) return !1;
              });
            },
            error: e => {
              var t;
              if (c) {
                const n = (null == e ? void 0 : e.stack) || (null == e ? void 0 : e.message) || (null === (t = null == e ? void 0 : e.toString) || void 0 === t ? void 0 : t.call(e)) || e;
                if ("string" == typeof n && _.includes(n)) return;
                ((e, t) => {
                  let n = {
                    content: "",
                    type: t
                  };
                  if ("string" == typeof e) n.content = e;else try {
                    n.content = JSON.stringify(e);
                  } catch (t) {
                    console.error("showNotification JSON.stringify Error", t, {
                      message: e
                    });
                  }
                  n.content && (d ? null == p || p.add(n) : (d = document.createElement("div"), d.setAttribute("id", u), document.body.appendChild(d), i().render(r().createElement(m, {
                    content: n.content,
                    type: n.type
                  }), d)));
                })(n, l.Error);
              }
            }
          };
      },
      72: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => u
        });
        var o = n(359),
          r = n.n(o),
          s = n(679),
          i = n(397),
          a = n(783),
          c = function (e, t) {
            var n = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
            }
            return n;
          };
        const l = i.Z.locals;
        function u({
          scope: e,
          root: t,
          slot: n,
          style: o = {},
          createPortal: s,
          className: i,
          params: a,
          inputs: c,
          outputs: u,
          _inputs: d,
          _outputs: _,
          wrapper: y,
          template: g,
          env: v,
          _env: h,
          getComDef: b,
          context: x,
          __rxui_child__: w,
          onError: k,
          logger: I
        }) {
          const {
              style: E,
              comAry: j
            } = n,
            C = [];
          if (j.forEach((t, n) => {
            var o;
            const {
                id: i,
                def: a,
                name: f
              } = t,
              m = x.getComInfo(i),
              {
                hasPermission: y
              } = v,
              E = null === (o = null == m ? void 0 : m.model) || void 0 === o ? void 0 : o.permissions;
            if (E && "function" == typeof y && !y(E.id)) return;
            if (b(a)) {
              const o = x.get(i, e, {
                  inputs: c,
                  outputs: u,
                  _inputs: d,
                  _outputs: _
                }),
                a = (e ? e.id : "") + n;
              C.push({
                id: i,
                jsx: r().createElement(p, {
                  key: a,
                  com: t,
                  getComDef: b,
                  context: x,
                  scope: e,
                  props: o,
                  env: v,
                  _env: h,
                  template: g,
                  onError: k,
                  logger: I,
                  createPortal: s,
                  __rxui_child__: w
                }),
                name: f,
                inputs: o.inputsCallable,
                style: o.style
              });
            } else {
              const e = r().createElement("div", {
                className: l.error
              }, "组件 (namespace = ", a.namespace, "）未找到.");
              C.push({
                id: i,
                jsx: e,
                name: f
              });
            }
          }), "function" == typeof y) return y(C);
          {
            const e = null == a ? void 0 : a.style,
              n = e || E;
            return r().createElement("div", {
              "data-isslot": "1",
              className: `${m(n)}${t && i ? ` ${i}` : ""}`,
              style: Object.assign(Object.assign({}, f(n, !!e, t)), o)
            }, C.map(e => e.jsx));
          }
        }
        function p({
          com: e,
          props: t,
          scope: n,
          template: i,
          env: c,
          createPortal: u,
          _env: p,
          getComDef: f,
          context: m,
          __rxui_child__: _,
          onError: y,
          logger: g
        }) {
          const {
              id: v,
              def: h,
              name: b,
              slots: x = {}
            } = e,
            {
              data: w,
              title: k,
              style: I,
              inputs: E,
              outputs: j,
              _inputs: C,
              _outputs: O,
              _notifyBindings: S
            } = t;
          (0, o.useMemo)(() => {
            var e;
            const {
                pxToRem: t
              } = c,
              n = function ({
                env: e,
                style: t,
                def: n
              }) {
                var o;
                const r = null === (o = null == e ? void 0 : e.themes) || void 0 === o ? void 0 : o.comThemes;
                if (!r) return t.styleAry;
                let s;
                const {
                    themesId: i
                  } = t,
                  {
                    namespace: a
                  } = n;
                if (i) {
                  if ("_defined" === i) s = t.styleAry;else {
                    const e = r[a];
                    if (Array.isArray(e)) {
                      const t = e.find(({
                        id: e
                      }) => e === i);
                      t && (s = t.styleAry);
                    }
                  }
                } else {
                  const e = r[a];
                  if (Array.isArray(e)) {
                    const t = e.find(({
                      isDefault: e
                    }) => e);
                    t && (s = t.styleAry);
                  }
                }
                if (!s) return t.styleAry;
                return s;
              }({
                env: c,
                def: h,
                style: I
              });
            if (Array.isArray(n)) {
              const o = (null == c ? void 0 : c.shadowRoot) || (null === (e = document.getElementById("_mybricks-geo-webview_")) || void 0 === e ? void 0 : e.shadowRoot);
              if (!(o || document).querySelector(`style[id="${v}"]`)) {
                const e = document.createElement("style");
                let r = "";
                e.id = v, n.forEach(({
                  css: e,
                  selector: n,
                  global: o
                }) => {
                  ":root" === n && (n = "> *:first-child"), r += `\n            ${o ? "" : `#${v} `}${n.replace(/\{id\}/g, `${v}`)} {\n              ${Object.keys(e).map(n => {
                    let o = e[n];
                    return t && "string" == typeof o && -1 !== o.indexOf("px") && (o = (0, s.Q1)(o)), `${(0, s.Lc)(n)}: ${o};`;
                  }).join("\n")}\n            }\n          `;
                }), e.innerHTML = r, o ? o.appendChild(e) : document.head.appendChild(e);
              }
            }
            Reflect.deleteProperty(I, "styleAry"), Reflect.deleteProperty(I, "themesId");
          }, []);
          const P = f(h),
            R = new Proxy(x, {
              get(e, t) {
                const o = m.get(v, t, n),
                  s = `组件(namespace=${h.namespace}）的插槽(id=${t})`;
                if (!o) throw new Error(`${s} 获取context失败.`);
                return {
                  render(e) {
                    const i = x[t];
                    return i ? r().createElement(d, {
                      slotId: t,
                      slot: i,
                      props: o,
                      params: e,
                      style: I,
                      onError: y,
                      createPortal: u,
                      logger: g,
                      env: c,
                      _env: p,
                      scope: n,
                      getComDef: f,
                      context: m,
                      __rxui_child__: _
                    }) : r().createElement("div", {
                      className: l.error
                    }, s, " 未找到.");
                  },
                  get size() {
                    var e, n;
                    return !!(null === (n = null === (e = x[t]) || void 0 === e ? void 0 : e.comAry) || void 0 === n ? void 0 : n.length);
                  },
                  _inputs: o._inputs,
                  inputs: o.inputs,
                  outputs: o.outputs
                };
              }
            }),
            A = (0, o.useMemo)(() => {
              if (t.frameId && t.parentComId) {
                const e = m.get(t.parentComId, t.frameId, null == n ? void 0 : n.parent);
                if (e) return {
                  get _inputs() {
                    return new Proxy({}, {
                      get: (t, n) => e._inputRegs[n]
                    });
                  }
                };
              }
            }, []),
            T = function ({
              style: e,
              id: t
            }) {
              const n = [t, l.com];
              1 === e.flex && n.push(l.flex);
              return n.join(" ");
            }({
              style: I,
              id: v
            }),
            F = function ({
              style: e
            }) {
              const t = {},
                {
                  width: n,
                  height: o
                } = e;
              n ? (0, s.hj)(n) ? t.width = n + "px" : n && (t.width = n) : t.width = "100%";
              (0, s.hj)(o) ? t.height = o + "px" : o && (t.height = o);
              return t;
            }({
              style: I
            }),
            M = function ({
              style: e
            }) {
              const t = {},
                {
                  width: n,
                  marginTop: o,
                  marginLeft: r,
                  marginRight: i,
                  marginBottom: a
                } = e;
              (0, s.hj)(o) && (t.marginTop = o + "px");
              (0, s.hj)(r) && ("number" == typeof n || r < 0 ? t.marginLeft = r + "px" : t.paddingLeft = r + "px");
              (0, s.hj)(i) && ("number" == typeof n || i < 0 ? t.marginRight = i + "px" : t.paddingRight = i + "px");
              (0, s.hj)(a) && (t.marginBottom = a + "px");
              return t;
            }({
              style: I
            }),
            $ = {};
          if (["fixed", "absolute"].includes(I.position)) {
            const {
              top: e,
              left: t,
              right: n,
              bottom: o
            } = I;
            (e || (0, s.hj)(e)) && ($.top = (0, s.hj)(e) ? e + "px" : e), (o || (0, s.hj)(o)) && ($.bottom = (0, s.hj)(o) ? o + "px" : o), (t || (0, s.hj)(t)) && ($.left = (0, s.hj)(t) ? t + "px" : t), (n || (0, s.hj)(n)) && ($.right = (0, s.hj)(n) ? n + "px" : n), "fixed" === I.position && ($.zIndex = 1e3);
          }
          let Z = P.runtime({
            id: v,
            env: c,
            _env: p,
            data: w,
            name: b,
            title: k,
            style: I,
            inputs: E,
            outputs: j,
            _inputs: C,
            _outputs: O,
            _notifyBindings: S,
            slots: R,
            createPortal: u,
            parentSlot: A,
            __rxui_child__: _,
            onError: y,
            logger: g
          });
          return "function" == typeof i && (Z = i({
            id: v,
            jsx: Z,
            name: b
          })), Z = Z ? r().createElement("div", {
            id: v,
            key: v,
            style: Object.assign(Object.assign(Object.assign(Object.assign({
              display: I.display,
              position: I.position || "relative"
            }, $), F), M), I.ext || {}),
            className: T
          }, r().createElement(a.Z, {
            errorTip: `组件 (namespace = ${h.namespace}@${h.version}）渲染错误`
          }, Z)) : null, Z;
        }
        const d = (0, o.memo)(({
          slotId: e,
          props: t,
          slot: n,
          params: i,
          scope: a,
          env: c,
          createPortal: l,
          _env: p,
          style: d,
          getComDef: f,
          context: m,
          onError: _,
          logger: y,
          __rxui_child__: g
        }) => {
          let v, h;
          if ("scope" === (null == n ? void 0 : n.type)) {
            v = {
              id: (0, s.Vj)(10, 16),
              frameId: e
            }, a && (v.parent = a);
          } else v = a;
          if (i) {
            const e = i.inputValues;
            if ("object" == typeof e) for (let n in e) t.inputs[n](e[n], v);
            "function" == typeof i.wrap && (h = i.wrap);
          }
          return t.run(v), (0, o.useEffect)(() => () => {
            t.destroy();
          }, []), r().createElement(u, {
            scope: v,
            env: c,
            createPortal: l,
            _env: p,
            slot: n,
            params: i,
            wrapper: h,
            template: null == i ? void 0 : i.itemWrap,
            getComDef: f,
            context: m,
            inputs: null == i ? void 0 : i.inputs,
            outputs: null == i ? void 0 : i.outputs,
            _inputs: null == i ? void 0 : i._inputs,
            _outputs: null == i ? void 0 : i._outputs,
            onError: _,
            logger: y,
            __rxui_child__: g
          });
        }, (e, t) => {
          var n, o, r, s;
          const i = null === (n = e.params) || void 0 === n ? void 0 : n.key,
            a = null === (o = null == t ? void 0 : t.params) || void 0 === o ? void 0 : o.key;
          if (void 0 === i && void 0 === a) return !0;
          if (i !== a) return !1;
          if (void 0 !== i && void 0 !== a && i === a) try {
            if (JSON.stringify(null === (r = e.params) || void 0 === r ? void 0 : r.inputValues) !== JSON.stringify(null === (s = t.params) || void 0 === s ? void 0 : s.inputValues)) return !1;
          } catch (e) {}
          return !0;
        });
        function f(e, t, n) {
          const {
              paddingLeft: o,
              paddingTop: r,
              paddingRight: s,
              paddingBottom: i,
              background: a,
              backgroundColor: l,
              backgroundImage: u,
              backgroundPosition: p,
              backgroundRepeat: d,
              backgroundSize: f
            } = e,
            m = c(e, ["paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "background", "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundRepeat", "backgroundSize"]);
          let _ = {
            paddingLeft: o || 0,
            paddingTop: r || 0,
            paddingRight: s || 0,
            paddingBottom: i || 0,
            backgroundColor: l || (n ? "#ffffff" : void 0),
            backgroundImage: u,
            backgroundPosition: p,
            backgroundRepeat: d,
            backgroundSize: f
          };
          if (a) {
            if ("object" == typeof a) {
              const {
                background: e,
                backgroundImage: t,
                backgroundColor: n,
                backgroundRepeat: o,
                backgroundSize: r
              } = a;
              _.backgroundRepeat = o, _.backgroundSize = r, e ? _.background = e : (_.backgroundImage = t, _.backgroundColor = n);
            } else _.background = a;
          }
          return t && (_ = Object.assign(_, m)), _;
        }
        function m(e) {
          var t, n;
          const o = [l.slot, "slot"],
            r = e;
          if (r) {
            "flex-column" == (null === (t = r.layout) || void 0 === t ? void 0 : t.toLowerCase()) ? o.push(l.lyFlexColumn) : "flex-row" == (null === (n = r.layout) || void 0 === n ? void 0 : n.toLowerCase()) && o.push(l.lyFlexRow);
            const e = r.justifyContent;
            e && ("FLEX-START" === e.toUpperCase() ? o.push(l.justifyContentFlexStart) : "CENTER" === e.toUpperCase() ? o.push(l.justifyContentFlexCenter) : "FLEX-END" === e.toUpperCase() ? o.push(l.justifyContentFlexFlexEnd) : "SPACE-AROUND" === e.toUpperCase() ? o.push(l.justifyContentFlexSpaceAround) : "SPACE-BETWEEN" === e.toUpperCase() && o.push(l.justifyContentFlexSpaceBetween));
            const s = r.alignItems;
            s && ("FLEX-START" === s.toUpperCase() ? o.push(l.alignItemsFlexStart) : "CENTER" === s.toUpperCase() ? o.push(l.alignItemsFlexCenter) : "FLEX-END" === s.toUpperCase() && o.push(l.alignItemsFlexFlexEnd));
          }
          return o.join(" ");
        }
      },
      218: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => i
        });
        var o = n(477),
          r = n(679);
        const s = "_rootFrame_";
        function i(e, {
          observable: t
        }) {
          const {
              json: n,
              getComDef: i,
              env: a,
              ref: c,
              onError: l,
              logger: u,
              debug: p,
              debugLogger: d,
              scenesOperate: f
            } = e,
            {
              slot: m,
              coms: _ = {},
              comsAutoRun: y = {},
              cons: g = [],
              pinRels: v = {},
              pinProxies: h = {},
              pinValueProxies: b = {}
            } = n,
            x = a,
            w = {},
            k = {},
            I = {},
            E = {},
            j = {};
          Object.keys(g).forEach(e => {
            const t = g[e],
              {
                startPinParentKey: n
              } = t[0];
            n && (j[n] = e);
          });
          const C = {},
            O = {};
          function S(e, t) {
            if ("com" === e) {
              const {
                com: e,
                pinHostId: n,
                val: r,
                fromCon: s,
                notifyAll: i,
                comDef: a
              } = t;
              d ? d("com", "output", {
                id: e.id,
                pinHostId: n,
                val: r,
                fromCon: s,
                notifyAll: i,
                comDef: a
              }) : (0, o.J2)(e.title, a, n, r);
            } else if ("frame" === e) {
              const {
                comId: e,
                frameId: n,
                pinHostId: o,
                val: r,
                sceneId: s
              } = t;
              d && d("frame", "output", {
                comId: e,
                frameId: n,
                pinHostId: o,
                val: r,
                sceneId: s
              });
            }
          }
          function P(e) {
            const {
              com: t,
              pinHostId: n,
              val: r,
              frameKey: s,
              finishPinParentKey: i,
              comDef: a
            } = e;
            d ? d("com", "input", {
              id: t.id,
              pinHostId: n,
              val: r,
              frameKey: s,
              finishPinParentKey: i,
              comDef: a
            }) : (0, o.Wg)(t.title, a, n, r);
          }
          function R(e, t, n, o, i) {
            function a(e, n) {
              var s, i;
              const a = h[e.comId + "-" + e.pinId];
              if (a) {
                if (O[`${a.frameId}-${a.pinId}`] = t, o && o.finishPinParentKey !== e.startPinParentKey) return;
                if ("frame" === a.type) {
                  const o = A(e.comId, n);
                  let s;
                  return s = {
                    id: (0, r.Vj)(10, 16),
                    frameId: a.frameId,
                    parent: n,
                    proxyComProps: o
                  }, L(a, t, s), void N({
                    frameId: a.frameId
                  });
                }
              }
              if ("com" === e.type) o ? o.finishPinParentKey === e.startPinParentKey && F(e, t, n) : F(e, t, n);else {
                if ("frame" !== e.type) throw new Error("尚未实现");
                if (o && o.finishPinParentKey !== e.startPinParentKey) return;
                if (e.comId) {
                  if ("inner-input" === e.direction) {
                    const o = k[e.comId + "-" + e.frameId + "-" + ((null === (s = null == n ? void 0 : n.parent) || void 0 === s ? void 0 : s.id) ? n.parent.id + "-" : "") + e.pinId];
                    o && o(t);
                  } else if ("inner-output" === e.direction && "joint" === e.pinType) {
                    const n = g[e.comId + "-" + e.frameId + "-" + e.pinId];
                    n && R(n, t);
                  }
                } else {
                  const o = null == n ? void 0 : n.proxyComProps;
                  if (o) {
                    const r = o.outputs[e.pinId];
                    if (r) return void r(t, n.parent);
                  }
                  null === (i = E[e.pinId]) || void 0 === i || i.call(E, t);
                }
              }
            }
            e.forEach(e => {
              if (p && e.isIgnored) return;
              let t = n;
              if (i) {
                const n = e.frameKey;
                if (!n) throw new Error("数据异常，请检查toJSON结果.");
                if (n === s) a(e, {});else {
                  const o = n.split("-");
                  if (o.length >= 2) {
                    const n = Z(o[0], o[1], null, i);
                    n.curScope ? (n.curScope !== t && (t = n.curScope), a(e, t)) : n.pushTodo(n => {
                      n !== t && (t = n), a(e, t);
                    });
                  }
                }
              } else {
                const n = e.frameKey.split("-");
                if (n.length >= 2 && !t) {
                  const o = Z(n[0], n[1], null, !1);
                  if ("scope" === (null == o ? void 0 : o.type) && !(null == o ? void 0 : o.curScope)) return void o.pushTodo(n => {
                    n !== t && (t = n), a(e, t);
                  });
                }
                a(e, t);
              }
            });
          }
          function A(n, o) {
            var r;
            const c = _[n];
            if (!c) return null;
            const p = n + (c.frameId || s);
            let d,
              m = w[p];
            m || (m = w[p] = {});
            let y = o;
            for (!y && c.parentComId && c.frameId && (y = null === (r = w[`${c.parentComId}-${c.frameId}`]) || void 0 === r ? void 0 : r.curScope); y;) {
              const e = y.id + "-" + n;
              if (y.frameId === c.frameId) {
                d = y.id;
                const t = m[e];
                if (t) return t;
                break;
              }
              y = y.parent;
            }
            const b = (d ? d + "-" : "") + n,
              x = m[b];
            if (x) return x;
            const k = c.def,
              I = c.model;
            let E = e ? JSON.parse(JSON.stringify(I)) : I;
            const j = t(E),
              C = {},
              P = {},
              T = {},
              M = {},
              $ = function (e) {
                return new Proxy({}, {
                  ownKeys: e => c.inputs,
                  getOwnPropertyDescriptor: e => ({
                    enumerable: !0,
                    configurable: !0
                  }),
                  get: (t, n) => function (t) {
                    const o = null == e ? void 0 : e.inputs;
                    if (o) {
                      const e = o[n];
                      "function" == typeof e && e(t);
                    }
                    C[n] = t;
                    const r = P[n];
                    r && (r.forEach(({
                      val: e,
                      fromCon: n,
                      fromScope: o
                    }) => {
                      t(e, new Proxy({}, {
                        get: (e, t) => function (e) {
                          const r = L()[t];
                          if ("function" != typeof r) throw new Error(`outputs.${t} not found`);
                          r(e, o || y, n);
                        }
                      }));
                    }), P[n] = void 0);
                  }
                });
              },
              Z = new Proxy({}, {
                get: (e, t) => function (e) {
                  const r = v[n + "-" + t];
                  if (r) {
                    const s = {},
                      i = {};
                    return r.forEach(e => {
                      s[e] = t => {
                        i[e] = t;
                      };
                    }), Promise.resolve().then(() => {
                      F({
                        comId: n,
                        def: k,
                        pinId: t
                      }, e, o, i);
                    }), s;
                  }
                  F({
                    comId: n,
                    def: k,
                    pinId: t
                  }, e, o);
                }
              }),
              N = new Proxy({}, {
                get: (e, t) => function (e) {
                  const o = h[n + "-" + t];
                  o && (null == f || f.inputs(Object.assign(Object.assign({}, o), {
                    value: e,
                    parentScope: B
                  })));
                }
              }),
              L = function (e) {
                return new Proxy({}, {
                  ownKeys: e => c.outputs,
                  getOwnPropertyDescriptor: e => ({
                    enumerable: !0,
                    configurable: !0
                  }),
                  get(t, r, s) {
                    const l = function (t, s, l, u) {
                      const p = "boolean" == typeof s && s;
                      if (c.global && p && !u) return void (null == f || f.exeGlobalCom({
                        com: c,
                        value: t,
                        pinId: r
                      }));
                      const d = arguments,
                        m = null == e ? void 0 : e.outputs;
                      if (m) {
                        const e = m[r];
                        "function" == typeof e && e(t);
                      }
                      let _;
                      s && "object" == typeof s && (_ = s);
                      const y = i(k);
                      S("com", {
                        com: c,
                        pinHostId: r,
                        val: t,
                        fromCon: l,
                        notifyAll: p,
                        comDef: y
                      });
                      const v = I.outputEvents;
                      let b;
                      if (v) {
                        const e = v[r];
                        if (e && Array.isArray(e)) {
                          const o = e.find(e => e.active);
                          if (o) {
                            const {
                              type: e
                            } = o;
                            switch (e) {
                              case "none":
                                b = [];
                                break;
                              case "fx":
                                const s = h[n + "-" + r];
                                if ("frame" === (null == s ? void 0 : s.type)) {
                                  const e = `${s.frameId}-${s.pinId}`;
                                  b = g[e] || [], O[e] = t;
                                } else b = [];
                                break;
                              case "defined":
                                break;
                              default:
                                if (b = [], Array.isArray(null == a ? void 0 : a.events)) {
                                  const t = a.events.find(t => {
                                    if (t.type === e) return t;
                                  });
                                  t && "function" == typeof t.exe && t.exe({
                                    options: o.options
                                  });
                                }
                            }
                          }
                        }
                      }
                      b = b || g[n + "-" + r], (null == b ? void 0 : b.length) && (d.length >= 3 ? R(b, t, _, l) : R(b, t, _ || o, l, p));
                    };
                    return l.getConnections = () => g[n + "-" + r] || [], l;
                  }
                });
              },
              D = new Proxy({}, {
                get: (e, t, n) => function (e) {
                  T[t] = e;
                  const n = M[t];
                  n && (n.forEach(t => {
                    e(t);
                  }), M[t] = void 0);
                }
              }),
              q = new Proxy({}, {
                get: (e, t, r) => function (e) {
                  const r = g[n + "-" + t];
                  r && (S("com", {
                    com: c,
                    pinHostId: t,
                    val: e,
                    comDef: k
                  }), R(r, e, o));
                }
              });
            const B = {
              id: c.id,
              title: c.title,
              frameId: c.frameId,
              parentComId: c.parentComId,
              data: j.data,
              style: j.style,
              _inputRegs: C,
              addInputTodo: (e, t, n, o) => {
                let r = P[e];
                r || (P[e] = r = []), r.push({
                  val: t,
                  fromCon: n,
                  fromScope: o
                });
              },
              inputs: $(),
              inputsCallable: Z,
              _inputsCallable: N,
              outputs: L(),
              _inputs: D,
              _outputs: q,
              clone(e) {
                const t = {
                  inputs: $(e),
                  outputs: L(e)
                };
                return Object.setPrototypeOf(t, this), t;
              },
              _notifyBindings: function (e) {
                if (c.global) return void (null == f || f._notifyBindings(e, c));
                const {
                  bindingsTo: t
                } = c.model;
                if (t) for (let n in t) {
                  const o = A(n);
                  if (o) {
                    const r = t[n];
                    Array.isArray(r) && r.forEach(t => {
                      let n = o;
                      const r = t.split(".");
                      r.forEach((t, o) => {
                        o !== r.length - 1 ? n = n[t] : n[t] = e;
                      });
                    });
                  }
                }
              },
              logger: u,
              onError: l
            };
            return m[b] = B, B;
          }
          function T(e, t) {
            let n = O[`${e}${t ? `-${t.id}-${t.frameId}` : ""}`];
            return void 0 === n && (null == t ? void 0 : t.parent) && (n = T(e, t.parent)), n;
          }
          function F(e, t, n, o) {
            var r;
            const {
              comId: s,
              def: a,
              pinId: c,
              pinType: p,
              frameKey: d,
              finishPinParentKey: m
            } = e;
            if ("ext" === p) {
              const e = w[s] || A(s, n);
              if ("show" === c) e.style.display = "";else if ("hide" === c) e.style.display = "none";else if ("showOrHide" === c) {
                const t = e.style;
                "none" === t.display ? t.display = "" : t.display = "none";
              }
            } else if ("config" === p) {
              const o = A(s, n),
                r = i(a);
              P({
                com: o,
                pinHostId: c,
                val: t,
                frameKey: d,
                finishPinParentKey: m,
                comDef: r
              });
              const {
                  extBinding: l
                } = e,
                u = l.split(".");
              let p = o;
              u.forEach((e, n) => {
                n !== u.length - 1 ? p = p[e] : p[e] = t;
              });
            } else if (null === (r = a.rtType) || void 0 === r ? void 0 : r.match(/^js/gi)) {
              const o = _[s];
              if (o) {
                const r = A(s, n),
                  p = i(a);
                if (o.global) {
                  const e = null == f ? void 0 : f.getGlobalComProps(s);
                  e && (r.data = e.data);
                }
                const _ = null == n ? void 0 : n.id,
                  y = (_ ? _ + "-" : "") + s;
                P({
                  com: o,
                  val: t,
                  pinHostId: c,
                  frameKey: d,
                  finishPinParentKey: m,
                  comDef: p
                }), I[y] || (I[y] = !0, p.runtime({
                  env: x,
                  data: r.data,
                  inputs: r.inputs,
                  outputs: r.outputs,
                  _notifyBindings: r._notifyBindings,
                  _inputsCallable: r._inputsCallable,
                  logger: u,
                  onError: l
                }));
                const {
                  realId: g,
                  realVal: v,
                  isReady: h,
                  isMultipleInput: w
                } = M(e, t, r);
                "function" == typeof r._inputRegs[g] && (w && h || !w) && r._inputRegs[g](v, new Proxy({}, {
                  get: (t, o) => function (t) {
                    if (b) {
                      const e = b[`${s}-${c}`];
                      e && void 0 === (t = T(`${d}-${e.pinId}`, n)) && (t = T(`${d}-${e.pinId}`, null));
                    }
                    r.outputs[o](t, n, e);
                  }
                }));
              }
            } else {
              const r = A(s, n);
              if (!r) return;
              const l = i(a);
              P({
                com: r,
                pinHostId: c,
                val: t,
                frameKey: d,
                finishPinParentKey: m,
                comDef: l
              });
              const {
                  realId: u,
                  realVal: p,
                  isReady: f,
                  isMultipleInput: _
                } = M(e, t, r),
                y = r._inputRegs[u];
              if (_ && f || !_) if ("function" == typeof y) {
                let t;
                t = o || new Proxy({}, {
                  get: (t, o) => function (t) {
                    r.outputs[o](t, n, e);
                  }
                }), y(p, t);
              } else r.addInputTodo(u, p, e, n);
            }
            if (m) {
              const e = g[j[m]];
              e && !v[`${s}-${c}`] && R(e, void 0);
            }
          }
          function M(e, t, n) {
            const {
                pinId: o,
                comId: r
              } = e,
              s = o.indexOf(".");
            if (-1 !== s) {
              let e = o.substring(0, s);
              const i = o.substring(s + 1);
              let a = C[r];
              a || (a = C[r] = {}), a[i] = t;
              const c = new RegExp(`${e}.`),
                l = Object.keys(n.inputs).filter(e => !!e.match(c));
              return Object.keys(a).length === l.length ? (delete C[r], {
                isMultipleInput: !0,
                isReady: !0,
                realId: e,
                realVal: a
              }) : {
                isMultipleInput: !0,
                isReady: !1
              };
            }
            return {
              isMultipleInput: !1,
              isReady: !0,
              realId: o,
              realVal: t
            };
          }
          function $(e, t) {
            let n;
            return e.comAry && e.comAry.find(e => {
              if (e.id === t) return n = e, e;
              if (e.slots) for (let o in e.slots) if (n = $(e.slots[o], t), n) return n;
            }), n;
          }
          function Z(e, t, n, o) {
            let r = e + "-" + t + (n ? `-${n.id}` : ""),
              s = w[r];
            if (o && !s && (s = w[Object.keys(w).find(e => e.startsWith(r))]), !s) {
              const o = $(m, e),
                i = null == o ? void 0 : o.slots[t],
                a = {};
              let c;
              if (n) {
                const n = w[e + "-" + t];
                n && (c = n.todo);
              }
              const l = {
                  scope: n,
                  todo: c
                },
                u = new Proxy({}, {
                  get: (e, t) => function (e) {
                    a[t] = e;
                  }
                }),
                p = new Proxy({}, {
                  get(n, o) {
                    const r = function (n, r) {
                      const s = e + "-" + t + "-" + o,
                        i = g[s];
                      O[`${s}${r ? `-${r.id}-${r.frameId}` : ""}`] = n, S("frame", {
                        comId: e,
                        frameId: t,
                        pinHostId: o,
                        val: n
                      }), i && R(i, n, r || l.scope);
                    };
                    return r.getConnections = () => g[e + "-" + t + "-" + o] || [], r;
                  }
                }),
                d = new Proxy({}, {
                  get: (e, t, n) => function (e) {
                    k[r + "-" + t] = e;
                  }
                });
              let f = {};
              s = w[r] = {
                type: null == i ? void 0 : i.type,
                run(n) {
                  l.scope = n;
                  const o = (null == n ? void 0 : n.id) || "none";
                  f[o] || (f[o] = !0, N({
                    comId: e,
                    frameId: t,
                    scope: n
                  })), Array.isArray(l.todo) && (l.todo.forEach(e => {
                    Promise.resolve().then(() => {
                      e(n);
                    });
                  }), l.todo = void 0);
                },
                destroy() {
                  Reflect.deleteProperty(w, r);
                },
                _inputs: u,
                _inputRegs: a,
                inputs: p,
                outputs: d,
                get curScope() {
                  return l.scope;
                },
                get todo() {
                  return l.todo;
                },
                pushTodo(e) {
                  l.todo || (l.todo = []), l.todo.push(e);
                }
              };
            }
            return s;
          }
          function N(e) {
            const {
                comId: t,
                frameId: n,
                scope: r
              } = e,
              s = y[t ? `${t}-${n}` : `${n}`];
            s && s.forEach(e => {
              const {
                id: t,
                def: n
              } = e;
              if (_[t]) {
                const e = A(t, r),
                  s = i(n);
                (0, o.cM)(`${s.namespace} 开始执行`), s.runtime({
                  env: x,
                  data: e.data,
                  inputs: e.inputs,
                  outputs: e.outputs,
                  _inputsCallable: e._inputsCallable,
                  logger: u,
                  onError: l
                });
              }
            });
          }
          function L(e, t, n = void 0, o = !0) {
            const {
                frameId: r,
                comId: i,
                pinId: a,
                sceneId: c
              } = e,
              l = g[(i ? `${i}-${r}` : `${r}`) + "-" + a];
            O[`${r}-${a}`] = t, o && S("frame", {
              comId: i,
              frameId: r,
              pinHostId: a,
              val: t,
              sceneId: c
            }), l ? R(l, t, n) : r !== s && (null == f || f.open({
              frameId: r,
              todo: {
                pinId: a,
                value: t
              },
              parentScope: n.proxyComProps
            }));
          }
          const D = {
            get(e, t, n, o) {
              let r, s, i;
              for (let e = 0; e < arguments.length; e++) {
                const t = arguments[e];
                e > 0 && "string" == typeof t && (r = t), "object" == typeof t && (t.inputs || t.outputs || t._inputs || t._outputs ? i = t : (t.id || t.parent) && (s = t));
              }
              if (r) return Z(e, r, s);
              {
                const t = A(e, s);
                return i ? t.clone(i) : t;
              }
            },
            getComInfo: e => _[e]
          };
          return "function" == typeof c && c({
            run() {
              N({
                frameId: s
              });
            },
            inputs: new Proxy({}, {
              get: (e, t) => function (e, n = void 0, o = !0) {
                L({
                  frameId: s,
                  pinId: t,
                  sceneId: n
                }, e, void 0, o);
              }
            }),
            outputs(e, t) {
              E[e] = t;
            },
            get: D.get,
            getComInfo: D.getComInfo
          }), D;
        }
      },
      477: (e, t, n) => {
        "use strict";

        n.d(t, {
          J2: () => l,
          JE: () => r,
          Wg: () => c,
          cM: () => a
        });
        let o = !1;
        function r() {
          o = !0;
        }
        const s = "__IOEventList__",
          i = {
            log: (...e) => {
              window[s] || (window[s] = []), window[s].push(e[0]), console.log(...e);
            }
          };
        function a(e) {
          console.log(`%c[Mybricks]%c ${e}\n`, "color:#FFF;background:#fa6400", "", "");
        }
        function c(e, t, n, r) {
          if (o) return;
          let s;
          try {
            s = JSON.stringify(r);
          } catch (e) {
            s = r;
          }
          i.log(`%c[Mybricks] 输入项 %c ${e || t.title || t.namespace} | ${n} -> ${s}`, "color:#FFF;background:#000", "", "");
        }
        function l(e, t, n, r) {
          if (o) return;
          let s;
          try {
            s = JSON.stringify(r);
          } catch (e) {
            s = r;
          }
          i.log(`%c[Mybricks] 输出项 %c ${e || t.title || t.namespace} | ${n} -> ${s}`, "color:#FFF;background:#fa6400", "", "");
        }
      },
      131: (e, t, n) => {
        "use strict";

        n.d(t, {
          ep: () => o.e,
          in: () => i,
          kU: () => s,
          st: () => r.s
        });
        var o = n(180),
          r = n(872);
        const s = new WeakMap(),
          i = new WeakMap();
      },
      872: (e, t, n) => {
        "use strict";

        n.d(t, {
          s: () => r
        });
        var o = n(131);
        const r = new class {
          constructor() {
            this.reactionStack = [];
          }
          regist(e) {
            let t = this.getCurrentReaction();
            t && o.ep.registReaction(t, e);
          }
          autoRun(e, t) {
            const {
              reactionStack: n
            } = this;
            if (-1 === n.indexOf(e)) try {
              return n.push(e), t();
            } finally {
              n.pop();
            }
          }
          getCurrentReaction() {
            const {
              reactionStack: e
            } = this;
            return e[e.length - 1];
          }
        }();
      },
      180: (e, t, n) => {
        "use strict";

        n.d(t, {
          e: () => i
        });
        var o = n(679),
          r = n(131);
        function s(e) {
          e();
        }
        const i = new class {
          constructor() {
            this.taskMap = new WeakMap(), this.reactionToTaskMap = new WeakMap();
          }
          addTask(e) {
            this.taskMap.set(e, new Map());
          }
          deleteTask(e) {
            if (!(0, o.Kn)(e)) return;
            const t = r.kU.get(e);
            r.kU.delete(e), r.in.delete(t);
            this.taskMap.get(t);
            this.taskMap.delete(t);
          }
          deleteReaction(e) {
            let t = this.reactionToTaskMap.get(e);
            t && (this.reactionToTaskMap.delete(e), t.forEach(t => {
              t.forEach(t => {
                t.delete(e);
              });
            }));
          }
          registReaction(e, {
            target: t,
            key: n
          }) {
            const o = this.taskMap.get(t);
            if (o) {
              let t = o.get(n);
              t || (t = new Set(), o.set(n, t)), t.has(e) || t.add(e);
              let r = this.reactionToTaskMap.get(e);
              r || (r = new Set(), this.reactionToTaskMap.set(e, r)), r.has(o) || r.add(o);
            }
          }
          getReactions({
            target: e,
            key: t
          }) {
            const n = this.taskMap.get(e);
            if (!n) return [];
            return n.get(t) || [];
          }
          runTask(e) {
            const t = this.getReactions(e);
            t.size && t.forEach(s);
          }
        }();
      },
      819: (e, t, n) => {
        "use strict";

        n.d(t, {
          Z: () => i
        });
        var o = n(443),
          r = n(679),
          s = n(131);
        const i = {
          get: function (e, t) {
            const n = e[t];
            if (["$$typeof", "constructor"].includes(t)) return n;
            s.st.regist({
              target: e,
              key: t
            });
            const i = s.in.get(n);
            return (0, r.Kn)(n) ? i || (0, o.L)(n) : i || n;
          },
          set: function (e, t, n) {
            (0, r.Kn)(n) && (n = s.kU.get(n) || n);
            const o = Object.hasOwnProperty.call(e, t),
              i = e[t];
            e[t] = n;
            let a = !1;
            switch (!0) {
              case !o || Array.isArray(e) && "length" === t:
              case n !== i:
                a = !0;
            }
            return a && (s.ep.runTask({
              target: e,
              key: t
            }), s.ep.deleteTask(s.in.get(i))), !0;
          }
        };
      },
      443: (e, t, n) => {
        "use strict";

        n.d(t, {
          L: () => p,
          O: () => u
        });
        var o = n(359),
          r = n.n(o),
          s = n(131),
          i = n(679),
          a = n(819);
        const c = "__render-web-createElement__";
        let l;
        function u(e) {
          const {
            pxToRem: t
          } = e;
          r()[c] || (r()[c] = !0, l = r().createElement, r().createElement = function (...e) {
            let [n, a, ...c] = e;
            if (t && (null == a ? void 0 : a.style)) {
              const u = a.style;
              Object.keys(u).forEach(e => {
                const t = u[e];
                "string" == typeof t && -1 !== t.indexOf("px") && (u[e] = (0, i.Q1)(t));
              });
            }
            if ("function" != typeof n || !n.prototype || n.prototype instanceof r().Component || n.prototype.isReactComponent || !a) return l(n, a, ...c);
            {
              let p = a.__rxui_child__ || n.__rxui__;
              if (p || (p = !!Object.keys(a).find(e => {
                const t = a[e];
                return s.kU.has(t);
              })), p) {
                if (!n.__rxui__) {
                  function f(e) {
                    var t;
                    const r = (0, o.useRef)(null),
                      [, s] = (0, o.useState)([]),
                      i = (0, o.useCallback)(() => {
                        s([]);
                      }, []);
                    let a;
                    return (0, o.useMemo)(() => {
                      r.current || (r.current = new d(i));
                    }, []), (0, o.useEffect)(() => () => {
                      var e;
                      null === (e = r.current) || void 0 === e || e.destroy(), r.current = null;
                    }, []), null === (t = r.current) || void 0 === t || t.track(() => {
                      a = n(e);
                    }), a;
                  }
                  n.__rxui__ = (0, o.memo)(f);
                }
                return l(n.__rxui__, a, ...c);
              }
              return l(n, a, ...c);
            }
          });
        }
        function p(e) {
          return (0, i.Kn)(e) ? s.kU.has(e) ? e : s.in.get(e) || function (e) {
            const t = a.Z,
              n = new Proxy(e, t);
            return s.in.set(e, n), s.kU.set(n, e), s.ep.addTask(e), n;
          }(e) : {};
        }
        class d {
          constructor(e) {
            this.update = e;
          }
          track(e) {
            s.st.autoRun(this.update, e);
          }
          destroy() {
            s.ep.deleteReaction(this.update);
          }
        }
      },
      679: (e, t, n) => {
        "use strict";

        function o(e) {
          return e && "object" == typeof e;
        }
        function r(e) {
          return "number" == typeof e && !isNaN(e);
        }
        function s(e, t) {
          const n = e.split("."),
            o = t.split("."),
            r = n.length,
            s = o.length,
            i = Math.min(r, s);
          let a = 0;
          for (; a < i; a++) {
            let e = parseInt(n[a]),
              t = parseInt(o[a]);
            if (e > t) return 1;
            if (e < t) return -1;
          }
          if (r > s) {
            for (let e = a; e < r; e++) if (0 != parseInt(n[e])) return 1;
            return 0;
          }
          if (r < s) {
            for (let e = a; e < s; e++) if (0 != parseInt(o[e])) return -1;
            return 0;
          }
          return 0;
        }
        function i(e = 5, t = 8) {
          const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            o = [];
          if (t = t || n.length, e) for (let r = 0; r < e; r++) o[r] = n[0 | Math.random() * t];else {
            let e;
            o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4";
            for (let t = 0; t < 36; t++) o[t] || (e = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & e | 8 : e]);
          }
          return o.join("");
        }
        function a(e) {
          return e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        n.d(t, {
          Kn: () => o,
          Lc: () => a,
          Q1: () => m,
          Vj: () => i,
          hj: () => r,
          nZ: () => _,
          yC: () => s
        });
        const c = (l = 12, u = 0, p = 5, d = "rem", function (e, t) {
          var n,
            o,
            r,
            s,
            i = parseFloat(t);
          return !t || i <= u ? e : "".concat((n = i / l, o = p, r = Math.pow(10, o + 1), s = Math.floor(n * r), 10 * Math.round(s / 10) / r)).concat(d);
        });
        var l, u, p, d;
        const f = /"[^"]+"|'[^']+'|url\([^)]+\)|(\d*\.?\d+)px/g,
          m = e => e.replace(f, c),
          _ = (e, t) => {
            var n;
            const o = t || (null === (n = document.getElementById("_mybricks-geo-webview_")) || void 0 === n ? void 0 : n.shadowRoot) || document.head;
            e.use({
              target: o
            });
          };
      },
      359: e => {
        "use strict";

        e.exports = __WEBPACK_EXTERNAL_MODULE__359__;
      },
      318: e => {
        "use strict";

        e.exports = __WEBPACK_EXTERNAL_MODULE__318__;
      },
      147: e => {
        "use strict";

        e.exports = JSON.parse('{"u2":"@mybricks/render-web","i8":"1.1.91"}');
      }
    },
    __webpack_module_cache__ = {};
  function __nested_webpack_require_106895__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = __webpack_module_cache__[e] = {
      id: e,
      exports: {}
    };
    return __webpack_modules__[e].call(n.exports, n, n.exports, __nested_webpack_require_106895__), n.exports;
  }
  __nested_webpack_require_106895__.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __nested_webpack_require_106895__.d(t, {
      a: t
    }), t;
  }, __nested_webpack_require_106895__.d = (e, t) => {
    for (var n in t) __nested_webpack_require_106895__.o(t, n) && !__nested_webpack_require_106895__.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, __nested_webpack_require_106895__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __nested_webpack_require_106895__.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, __nested_webpack_require_106895__.nc = void 0;
  var __nested_webpack_exports__ = {};
  return (() => {
    "use strict";

    __nested_webpack_require_106895__.r(__nested_webpack_exports__), __nested_webpack_require_106895__.d(__nested_webpack_exports__, {
      render: () => s
    });
    var e = __nested_webpack_require_106895__(359),
      t = __nested_webpack_require_106895__.n(e),
      n = __nested_webpack_require_106895__(294),
      o = __nested_webpack_require_106895__(147),
      r = __nested_webpack_require_106895__(925);
    function s(e, o = {}) {
      return Array.isArray(e.scenes) ? t().createElement(r.Z, {
        json: e,
        opts: o
      }) : t().createElement(n.Z, {
        json: e,
        opts: o
      });
    }
    console.log(`%c ${o.u2} %c@${o.i8}`, "color:#FFF;background:#fa6400", "", "");
  })(), __nested_webpack_exports__;
})());

/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML;

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var _defColors = {
  reset: ['fff', '000'],
  // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
};
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
};
var _openTags = {
  '1': 'font-weight:bold',
  // bold
  '2': 'opacity:0.5',
  // dim
  '3': '<i>',
  // italic
  '4': '<u>',
  // underscore
  '8': 'display:none',
  // hidden
  '9': '<del>' // delete
};

var _closeTags = {
  '23': '</i>',
  // reset italic
  '24': '</u>',
  // reset underscore
  '29': '</del>' // reset delete
};

[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>';
});

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML(text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text;
  }

  // Cache opened sequence.
  var ansiCodes = [];
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq];
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) {
        // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop();
        return '</span>';
      }
      // Open tag.
      ansiCodes.push(seq);
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
    }
    var ct = _closeTags[seq];
    if (ct) {
      // Pop sequence
      ansiCodes.pop();
      return ct;
    }
    return '';
  });

  // Make sure tags are closed.
  var l = ansiCodes.length;
  l > 0 && (ret += Array(l + 1).join('</span>'));
  return ret;
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.');
  }
  var _finalColors = {};
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null;
    if (!hex) {
      _finalColors[key] = _defColors[key];
      continue;
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex];
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string';
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
      }
      var defHexColor = _defColors[key];
      if (!hex[0]) {
        hex[0] = defHexColor[0];
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]];
        hex.push(defHexColor[1]);
      }
      hex = hex.slice(0, 2);
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
    }
    _finalColors[key] = hex;
  }
  _setTags(_finalColors);
};

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors);
};

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {};
if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () {
      return _openTags;
    }
  });
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () {
      return _closeTags;
    }
  });
} else {
  ansiHTML.tags.open = _openTags;
  ansiHTML.tags.close = _closeTags;
}
function _setTags(colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey;
  for (var code in _styles) {
    var color = _styles[code];
    var oriColor = colors[color] || '000';
    _openTags[code] = 'color:#' + oriColor;
    code = parseInt(code);
    _openTags[(code + 10).toString()] = 'background:#' + oriColor;
  }
}
ansiHTML.reset();

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;
  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }
  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events !== undefined) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
  all: named_references_1.namedReferences.html5
});
var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
    _c = _b.mode,
    mode = _c === void 0 ? 'specialChars' : _c,
    _d = _b.numeric,
    numeric = _d === void 0 ? 'decimal' : _d,
    _e = _b.level,
    level = _e === void 0 ? 'all' : _e;
  if (!text) {
    return '';
  }
  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  encodeRegExp.lastIndex = 0;
  var _b = encodeRegExp.exec(text);
  var _c;
  if (_b) {
    _c = '';
    var _d = 0;
    do {
      if (_d !== _b.index) {
        _c += text.substring(_d, _b.index);
      }
      var _e = _b[0];
      var result_1 = references[_e];
      if (!result_1) {
        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
      }
      _c += result_1;
      _d = _b.index + _e.length;
    } while (_b = encodeRegExp.exec(text));
    if (_d !== text.length) {
      _c += text.substring(_d);
    }
  } else {
    _c = text;
  }
  return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html5
  }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
    level = _b === void 0 ? 'all' : _b;
  if (!entity) {
    return '';
  }
  var _b = entity;
  var decodeEntityLastChar_1 = entity[entity.length - 1];
  if (false) {} else if (false) {} else {
    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
    if (decodeResultByReference_1) {
      _b = decodeResultByReference_1;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar_1 = entity[2];
      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
    }
  }
  return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
    decodeCode_1 = decodeSecondChar_1.level,
    level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,
    _b = decodeSecondChar_1.scope,
    scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
  if (!text) {
    return '';
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  decodeRegExp.lastIndex = 0;
  var replaceMatch_1 = decodeRegExp.exec(text);
  var replaceResult_1;
  if (replaceMatch_1) {
    replaceResult_1 = '';
    var replaceLastIndex_1 = 0;
    do {
      if (replaceLastIndex_1 !== replaceMatch_1.index) {
        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
      }
      var replaceInput_1 = replaceMatch_1[0];
      var decodeResult_1 = replaceInput_1;
      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
      if (isAttribute && decodeEntityLastChar_2 === '=') {
        decodeResult_1 = replaceInput_1;
      } else if (isStrict && decodeEntityLastChar_2 !== ';') {
        decodeResult_1 = replaceInput_1;
      } else {
        var decodeResultByReference_2 = references[replaceInput_1];
        if (decodeResultByReference_2) {
          decodeResult_1 = decodeResultByReference_2;
        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
          var decodeSecondChar_2 = replaceInput_1[2];
          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
        }
      }
      replaceResult_1 += decodeResult_1;
      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
    } while (replaceMatch_1 = decodeRegExp.exec(text));
    if (replaceLastIndex_1 !== text.length) {
      replaceResult_1 += text.substring(replaceLastIndex_1);
    }
  } else {
    replaceResult_1 = text;
  }
  return replaceResult_1;
}
exports.decode = decode;

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
exports.namedReferences = {
  xml: {
    entities: {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&"
    },
    characters: {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;"
    }
  },
  html4: {
    entities: {
      "&apos;": "'",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&cent": "¢",
      "&cent;": "¢",
      "&pound": "£",
      "&pound;": "£",
      "&curren": "¤",
      "&curren;": "¤",
      "&yen": "¥",
      "&yen;": "¥",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&sect": "§",
      "&sect;": "§",
      "&uml": "¨",
      "&uml;": "¨",
      "&copy": "©",
      "&copy;": "©",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&laquo": "«",
      "&laquo;": "«",
      "&not": "¬",
      "&not;": "¬",
      "&shy": "­",
      "&shy;": "­",
      "&reg": "®",
      "&reg;": "®",
      "&macr": "¯",
      "&macr;": "¯",
      "&deg": "°",
      "&deg;": "°",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&acute": "´",
      "&acute;": "´",
      "&micro": "µ",
      "&micro;": "µ",
      "&para": "¶",
      "&para;": "¶",
      "&middot": "·",
      "&middot;": "·",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&ordm": "º",
      "&ordm;": "º",
      "&raquo": "»",
      "&raquo;": "»",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&times": "×",
      "&times;": "×",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&agrave": "à",
      "&agrave;": "à",
      "&aacute": "á",
      "&aacute;": "á",
      "&acirc": "â",
      "&acirc;": "â",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&aring": "å",
      "&aring;": "å",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&egrave": "è",
      "&egrave;": "è",
      "&eacute": "é",
      "&eacute;": "é",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&euml": "ë",
      "&euml;": "ë",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&iacute": "í",
      "&iacute;": "í",
      "&icirc": "î",
      "&icirc;": "î",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&eth": "ð",
      "&eth;": "ð",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&divide": "÷",
      "&divide;": "÷",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&quot": '"',
      "&quot;": '"',
      "&amp": "&",
      "&amp;": "&",
      "&lt": "<",
      "&lt;": "<",
      "&gt": ">",
      "&gt;": ">",
      "&OElig;": "Œ",
      "&oelig;": "œ",
      "&Scaron;": "Š",
      "&scaron;": "š",
      "&Yuml;": "Ÿ",
      "&circ;": "ˆ",
      "&tilde;": "˜",
      "&ensp;": " ",
      "&emsp;": " ",
      "&thinsp;": " ",
      "&zwnj;": "‌",
      "&zwj;": "‍",
      "&lrm;": "‎",
      "&rlm;": "‏",
      "&ndash;": "–",
      "&mdash;": "—",
      "&lsquo;": "‘",
      "&rsquo;": "’",
      "&sbquo;": "‚",
      "&ldquo;": "“",
      "&rdquo;": "”",
      "&bdquo;": "„",
      "&dagger;": "†",
      "&Dagger;": "‡",
      "&permil;": "‰",
      "&lsaquo;": "‹",
      "&rsaquo;": "›",
      "&euro;": "€",
      "&fnof;": "ƒ",
      "&Alpha;": "Α",
      "&Beta;": "Β",
      "&Gamma;": "Γ",
      "&Delta;": "Δ",
      "&Epsilon;": "Ε",
      "&Zeta;": "Ζ",
      "&Eta;": "Η",
      "&Theta;": "Θ",
      "&Iota;": "Ι",
      "&Kappa;": "Κ",
      "&Lambda;": "Λ",
      "&Mu;": "Μ",
      "&Nu;": "Ν",
      "&Xi;": "Ξ",
      "&Omicron;": "Ο",
      "&Pi;": "Π",
      "&Rho;": "Ρ",
      "&Sigma;": "Σ",
      "&Tau;": "Τ",
      "&Upsilon;": "Υ",
      "&Phi;": "Φ",
      "&Chi;": "Χ",
      "&Psi;": "Ψ",
      "&Omega;": "Ω",
      "&alpha;": "α",
      "&beta;": "β",
      "&gamma;": "γ",
      "&delta;": "δ",
      "&epsilon;": "ε",
      "&zeta;": "ζ",
      "&eta;": "η",
      "&theta;": "θ",
      "&iota;": "ι",
      "&kappa;": "κ",
      "&lambda;": "λ",
      "&mu;": "μ",
      "&nu;": "ν",
      "&xi;": "ξ",
      "&omicron;": "ο",
      "&pi;": "π",
      "&rho;": "ρ",
      "&sigmaf;": "ς",
      "&sigma;": "σ",
      "&tau;": "τ",
      "&upsilon;": "υ",
      "&phi;": "φ",
      "&chi;": "χ",
      "&psi;": "ψ",
      "&omega;": "ω",
      "&thetasym;": "ϑ",
      "&upsih;": "ϒ",
      "&piv;": "ϖ",
      "&bull;": "•",
      "&hellip;": "…",
      "&prime;": "′",
      "&Prime;": "″",
      "&oline;": "‾",
      "&frasl;": "⁄",
      "&weierp;": "℘",
      "&image;": "ℑ",
      "&real;": "ℜ",
      "&trade;": "™",
      "&alefsym;": "ℵ",
      "&larr;": "←",
      "&uarr;": "↑",
      "&rarr;": "→",
      "&darr;": "↓",
      "&harr;": "↔",
      "&crarr;": "↵",
      "&lArr;": "⇐",
      "&uArr;": "⇑",
      "&rArr;": "⇒",
      "&dArr;": "⇓",
      "&hArr;": "⇔",
      "&forall;": "∀",
      "&part;": "∂",
      "&exist;": "∃",
      "&empty;": "∅",
      "&nabla;": "∇",
      "&isin;": "∈",
      "&notin;": "∉",
      "&ni;": "∋",
      "&prod;": "∏",
      "&sum;": "∑",
      "&minus;": "−",
      "&lowast;": "∗",
      "&radic;": "√",
      "&prop;": "∝",
      "&infin;": "∞",
      "&ang;": "∠",
      "&and;": "∧",
      "&or;": "∨",
      "&cap;": "∩",
      "&cup;": "∪",
      "&int;": "∫",
      "&there4;": "∴",
      "&sim;": "∼",
      "&cong;": "≅",
      "&asymp;": "≈",
      "&ne;": "≠",
      "&equiv;": "≡",
      "&le;": "≤",
      "&ge;": "≥",
      "&sub;": "⊂",
      "&sup;": "⊃",
      "&nsub;": "⊄",
      "&sube;": "⊆",
      "&supe;": "⊇",
      "&oplus;": "⊕",
      "&otimes;": "⊗",
      "&perp;": "⊥",
      "&sdot;": "⋅",
      "&lceil;": "⌈",
      "&rceil;": "⌉",
      "&lfloor;": "⌊",
      "&rfloor;": "⌋",
      "&lang;": "〈",
      "&rang;": "〉",
      "&loz;": "◊",
      "&spades;": "♠",
      "&clubs;": "♣",
      "&hearts;": "♥",
      "&diams;": "♦"
    },
    characters: {
      "'": "&apos;",
      " ": "&nbsp;",
      "¡": "&iexcl;",
      "¢": "&cent;",
      "£": "&pound;",
      "¤": "&curren;",
      "¥": "&yen;",
      "¦": "&brvbar;",
      "§": "&sect;",
      "¨": "&uml;",
      "©": "&copy;",
      "ª": "&ordf;",
      "«": "&laquo;",
      "¬": "&not;",
      "­": "&shy;",
      "®": "&reg;",
      "¯": "&macr;",
      "°": "&deg;",
      "±": "&plusmn;",
      "²": "&sup2;",
      "³": "&sup3;",
      "´": "&acute;",
      "µ": "&micro;",
      "¶": "&para;",
      "·": "&middot;",
      "¸": "&cedil;",
      "¹": "&sup1;",
      "º": "&ordm;",
      "»": "&raquo;",
      "¼": "&frac14;",
      "½": "&frac12;",
      "¾": "&frac34;",
      "¿": "&iquest;",
      "À": "&Agrave;",
      "Á": "&Aacute;",
      "Â": "&Acirc;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "Å": "&Aring;",
      "Æ": "&AElig;",
      "Ç": "&Ccedil;",
      "È": "&Egrave;",
      "É": "&Eacute;",
      "Ê": "&Ecirc;",
      "Ë": "&Euml;",
      "Ì": "&Igrave;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "Ï": "&Iuml;",
      "Ð": "&ETH;",
      "Ñ": "&Ntilde;",
      "Ò": "&Ograve;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "Õ": "&Otilde;",
      "Ö": "&Ouml;",
      "×": "&times;",
      "Ø": "&Oslash;",
      "Ù": "&Ugrave;",
      "Ú": "&Uacute;",
      "Û": "&Ucirc;",
      "Ü": "&Uuml;",
      "Ý": "&Yacute;",
      "Þ": "&THORN;",
      "ß": "&szlig;",
      "à": "&agrave;",
      "á": "&aacute;",
      "â": "&acirc;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "å": "&aring;",
      "æ": "&aelig;",
      "ç": "&ccedil;",
      "è": "&egrave;",
      "é": "&eacute;",
      "ê": "&ecirc;",
      "ë": "&euml;",
      "ì": "&igrave;",
      "í": "&iacute;",
      "î": "&icirc;",
      "ï": "&iuml;",
      "ð": "&eth;",
      "ñ": "&ntilde;",
      "ò": "&ograve;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "õ": "&otilde;",
      "ö": "&ouml;",
      "÷": "&divide;",
      "ø": "&oslash;",
      "ù": "&ugrave;",
      "ú": "&uacute;",
      "û": "&ucirc;",
      "ü": "&uuml;",
      "ý": "&yacute;",
      "þ": "&thorn;",
      "ÿ": "&yuml;",
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "Œ": "&OElig;",
      "œ": "&oelig;",
      "Š": "&Scaron;",
      "š": "&scaron;",
      "Ÿ": "&Yuml;",
      "ˆ": "&circ;",
      "˜": "&tilde;",
      " ": "&ensp;",
      " ": "&emsp;",
      " ": "&thinsp;",
      "‌": "&zwnj;",
      "‍": "&zwj;",
      "‎": "&lrm;",
      "‏": "&rlm;",
      "–": "&ndash;",
      "—": "&mdash;",
      "‘": "&lsquo;",
      "’": "&rsquo;",
      "‚": "&sbquo;",
      "“": "&ldquo;",
      "”": "&rdquo;",
      "„": "&bdquo;",
      "†": "&dagger;",
      "‡": "&Dagger;",
      "‰": "&permil;",
      "‹": "&lsaquo;",
      "›": "&rsaquo;",
      "€": "&euro;",
      "ƒ": "&fnof;",
      "Α": "&Alpha;",
      "Β": "&Beta;",
      "Γ": "&Gamma;",
      "Δ": "&Delta;",
      "Ε": "&Epsilon;",
      "Ζ": "&Zeta;",
      "Η": "&Eta;",
      "Θ": "&Theta;",
      "Ι": "&Iota;",
      "Κ": "&Kappa;",
      "Λ": "&Lambda;",
      "Μ": "&Mu;",
      "Ν": "&Nu;",
      "Ξ": "&Xi;",
      "Ο": "&Omicron;",
      "Π": "&Pi;",
      "Ρ": "&Rho;",
      "Σ": "&Sigma;",
      "Τ": "&Tau;",
      "Υ": "&Upsilon;",
      "Φ": "&Phi;",
      "Χ": "&Chi;",
      "Ψ": "&Psi;",
      "Ω": "&Omega;",
      "α": "&alpha;",
      "β": "&beta;",
      "γ": "&gamma;",
      "δ": "&delta;",
      "ε": "&epsilon;",
      "ζ": "&zeta;",
      "η": "&eta;",
      "θ": "&theta;",
      "ι": "&iota;",
      "κ": "&kappa;",
      "λ": "&lambda;",
      "μ": "&mu;",
      "ν": "&nu;",
      "ξ": "&xi;",
      "ο": "&omicron;",
      "π": "&pi;",
      "ρ": "&rho;",
      "ς": "&sigmaf;",
      "σ": "&sigma;",
      "τ": "&tau;",
      "υ": "&upsilon;",
      "φ": "&phi;",
      "χ": "&chi;",
      "ψ": "&psi;",
      "ω": "&omega;",
      "ϑ": "&thetasym;",
      "ϒ": "&upsih;",
      "ϖ": "&piv;",
      "•": "&bull;",
      "…": "&hellip;",
      "′": "&prime;",
      "″": "&Prime;",
      "‾": "&oline;",
      "⁄": "&frasl;",
      "℘": "&weierp;",
      "ℑ": "&image;",
      "ℜ": "&real;",
      "™": "&trade;",
      "ℵ": "&alefsym;",
      "←": "&larr;",
      "↑": "&uarr;",
      "→": "&rarr;",
      "↓": "&darr;",
      "↔": "&harr;",
      "↵": "&crarr;",
      "⇐": "&lArr;",
      "⇑": "&uArr;",
      "⇒": "&rArr;",
      "⇓": "&dArr;",
      "⇔": "&hArr;",
      "∀": "&forall;",
      "∂": "&part;",
      "∃": "&exist;",
      "∅": "&empty;",
      "∇": "&nabla;",
      "∈": "&isin;",
      "∉": "&notin;",
      "∋": "&ni;",
      "∏": "&prod;",
      "∑": "&sum;",
      "−": "&minus;",
      "∗": "&lowast;",
      "√": "&radic;",
      "∝": "&prop;",
      "∞": "&infin;",
      "∠": "&ang;",
      "∧": "&and;",
      "∨": "&or;",
      "∩": "&cap;",
      "∪": "&cup;",
      "∫": "&int;",
      "∴": "&there4;",
      "∼": "&sim;",
      "≅": "&cong;",
      "≈": "&asymp;",
      "≠": "&ne;",
      "≡": "&equiv;",
      "≤": "&le;",
      "≥": "&ge;",
      "⊂": "&sub;",
      "⊃": "&sup;",
      "⊄": "&nsub;",
      "⊆": "&sube;",
      "⊇": "&supe;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "⊥": "&perp;",
      "⋅": "&sdot;",
      "⌈": "&lceil;",
      "⌉": "&rceil;",
      "⌊": "&lfloor;",
      "⌋": "&rfloor;",
      "〈": "&lang;",
      "〉": "&rang;",
      "◊": "&loz;",
      "♠": "&spades;",
      "♣": "&clubs;",
      "♥": "&hearts;",
      "♦": "&diams;"
    }
  },
  html5: {
    entities: {
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&AMP": "&",
      "&AMP;": "&",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Abreve;": "Ă",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Acy;": "А",
      "&Afr;": "𝔄",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Alpha;": "Α",
      "&Amacr;": "Ā",
      "&And;": "⩓",
      "&Aogon;": "Ą",
      "&Aopf;": "𝔸",
      "&ApplyFunction;": "⁡",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&Ascr;": "𝒜",
      "&Assign;": "≔",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Backslash;": "∖",
      "&Barv;": "⫧",
      "&Barwed;": "⌆",
      "&Bcy;": "Б",
      "&Because;": "∵",
      "&Bernoullis;": "ℬ",
      "&Beta;": "Β",
      "&Bfr;": "𝔅",
      "&Bopf;": "𝔹",
      "&Breve;": "˘",
      "&Bscr;": "ℬ",
      "&Bumpeq;": "≎",
      "&CHcy;": "Ч",
      "&COPY": "©",
      "&COPY;": "©",
      "&Cacute;": "Ć",
      "&Cap;": "⋒",
      "&CapitalDifferentialD;": "ⅅ",
      "&Cayleys;": "ℭ",
      "&Ccaron;": "Č",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Ccirc;": "Ĉ",
      "&Cconint;": "∰",
      "&Cdot;": "Ċ",
      "&Cedilla;": "¸",
      "&CenterDot;": "·",
      "&Cfr;": "ℭ",
      "&Chi;": "Χ",
      "&CircleDot;": "⊙",
      "&CircleMinus;": "⊖",
      "&CirclePlus;": "⊕",
      "&CircleTimes;": "⊗",
      "&ClockwiseContourIntegral;": "∲",
      "&CloseCurlyDoubleQuote;": "”",
      "&CloseCurlyQuote;": "’",
      "&Colon;": "∷",
      "&Colone;": "⩴",
      "&Congruent;": "≡",
      "&Conint;": "∯",
      "&ContourIntegral;": "∮",
      "&Copf;": "ℂ",
      "&Coproduct;": "∐",
      "&CounterClockwiseContourIntegral;": "∳",
      "&Cross;": "⨯",
      "&Cscr;": "𝒞",
      "&Cup;": "⋓",
      "&CupCap;": "≍",
      "&DD;": "ⅅ",
      "&DDotrahd;": "⤑",
      "&DJcy;": "Ђ",
      "&DScy;": "Ѕ",
      "&DZcy;": "Џ",
      "&Dagger;": "‡",
      "&Darr;": "↡",
      "&Dashv;": "⫤",
      "&Dcaron;": "Ď",
      "&Dcy;": "Д",
      "&Del;": "∇",
      "&Delta;": "Δ",
      "&Dfr;": "𝔇",
      "&DiacriticalAcute;": "´",
      "&DiacriticalDot;": "˙",
      "&DiacriticalDoubleAcute;": "˝",
      "&DiacriticalGrave;": "`",
      "&DiacriticalTilde;": "˜",
      "&Diamond;": "⋄",
      "&DifferentialD;": "ⅆ",
      "&Dopf;": "𝔻",
      "&Dot;": "¨",
      "&DotDot;": "⃜",
      "&DotEqual;": "≐",
      "&DoubleContourIntegral;": "∯",
      "&DoubleDot;": "¨",
      "&DoubleDownArrow;": "⇓",
      "&DoubleLeftArrow;": "⇐",
      "&DoubleLeftRightArrow;": "⇔",
      "&DoubleLeftTee;": "⫤",
      "&DoubleLongLeftArrow;": "⟸",
      "&DoubleLongLeftRightArrow;": "⟺",
      "&DoubleLongRightArrow;": "⟹",
      "&DoubleRightArrow;": "⇒",
      "&DoubleRightTee;": "⊨",
      "&DoubleUpArrow;": "⇑",
      "&DoubleUpDownArrow;": "⇕",
      "&DoubleVerticalBar;": "∥",
      "&DownArrow;": "↓",
      "&DownArrowBar;": "⤓",
      "&DownArrowUpArrow;": "⇵",
      "&DownBreve;": "̑",
      "&DownLeftRightVector;": "⥐",
      "&DownLeftTeeVector;": "⥞",
      "&DownLeftVector;": "↽",
      "&DownLeftVectorBar;": "⥖",
      "&DownRightTeeVector;": "⥟",
      "&DownRightVector;": "⇁",
      "&DownRightVectorBar;": "⥗",
      "&DownTee;": "⊤",
      "&DownTeeArrow;": "↧",
      "&Downarrow;": "⇓",
      "&Dscr;": "𝒟",
      "&Dstrok;": "Đ",
      "&ENG;": "Ŋ",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecaron;": "Ě",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Ecy;": "Э",
      "&Edot;": "Ė",
      "&Efr;": "𝔈",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Element;": "∈",
      "&Emacr;": "Ē",
      "&EmptySmallSquare;": "◻",
      "&EmptyVerySmallSquare;": "▫",
      "&Eogon;": "Ę",
      "&Eopf;": "𝔼",
      "&Epsilon;": "Ε",
      "&Equal;": "⩵",
      "&EqualTilde;": "≂",
      "&Equilibrium;": "⇌",
      "&Escr;": "ℰ",
      "&Esim;": "⩳",
      "&Eta;": "Η",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Exists;": "∃",
      "&ExponentialE;": "ⅇ",
      "&Fcy;": "Ф",
      "&Ffr;": "𝔉",
      "&FilledSmallSquare;": "◼",
      "&FilledVerySmallSquare;": "▪",
      "&Fopf;": "𝔽",
      "&ForAll;": "∀",
      "&Fouriertrf;": "ℱ",
      "&Fscr;": "ℱ",
      "&GJcy;": "Ѓ",
      "&GT": ">",
      "&GT;": ">",
      "&Gamma;": "Γ",
      "&Gammad;": "Ϝ",
      "&Gbreve;": "Ğ",
      "&Gcedil;": "Ģ",
      "&Gcirc;": "Ĝ",
      "&Gcy;": "Г",
      "&Gdot;": "Ġ",
      "&Gfr;": "𝔊",
      "&Gg;": "⋙",
      "&Gopf;": "𝔾",
      "&GreaterEqual;": "≥",
      "&GreaterEqualLess;": "⋛",
      "&GreaterFullEqual;": "≧",
      "&GreaterGreater;": "⪢",
      "&GreaterLess;": "≷",
      "&GreaterSlantEqual;": "⩾",
      "&GreaterTilde;": "≳",
      "&Gscr;": "𝒢",
      "&Gt;": "≫",
      "&HARDcy;": "Ъ",
      "&Hacek;": "ˇ",
      "&Hat;": "^",
      "&Hcirc;": "Ĥ",
      "&Hfr;": "ℌ",
      "&HilbertSpace;": "ℋ",
      "&Hopf;": "ℍ",
      "&HorizontalLine;": "─",
      "&Hscr;": "ℋ",
      "&Hstrok;": "Ħ",
      "&HumpDownHump;": "≎",
      "&HumpEqual;": "≏",
      "&IEcy;": "Е",
      "&IJlig;": "Ĳ",
      "&IOcy;": "Ё",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Icy;": "И",
      "&Idot;": "İ",
      "&Ifr;": "ℑ",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Im;": "ℑ",
      "&Imacr;": "Ī",
      "&ImaginaryI;": "ⅈ",
      "&Implies;": "⇒",
      "&Int;": "∬",
      "&Integral;": "∫",
      "&Intersection;": "⋂",
      "&InvisibleComma;": "⁣",
      "&InvisibleTimes;": "⁢",
      "&Iogon;": "Į",
      "&Iopf;": "𝕀",
      "&Iota;": "Ι",
      "&Iscr;": "ℐ",
      "&Itilde;": "Ĩ",
      "&Iukcy;": "І",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&Jcirc;": "Ĵ",
      "&Jcy;": "Й",
      "&Jfr;": "𝔍",
      "&Jopf;": "𝕁",
      "&Jscr;": "𝒥",
      "&Jsercy;": "Ј",
      "&Jukcy;": "Є",
      "&KHcy;": "Х",
      "&KJcy;": "Ќ",
      "&Kappa;": "Κ",
      "&Kcedil;": "Ķ",
      "&Kcy;": "К",
      "&Kfr;": "𝔎",
      "&Kopf;": "𝕂",
      "&Kscr;": "𝒦",
      "&LJcy;": "Љ",
      "&LT": "<",
      "&LT;": "<",
      "&Lacute;": "Ĺ",
      "&Lambda;": "Λ",
      "&Lang;": "⟪",
      "&Laplacetrf;": "ℒ",
      "&Larr;": "↞",
      "&Lcaron;": "Ľ",
      "&Lcedil;": "Ļ",
      "&Lcy;": "Л",
      "&LeftAngleBracket;": "⟨",
      "&LeftArrow;": "←",
      "&LeftArrowBar;": "⇤",
      "&LeftArrowRightArrow;": "⇆",
      "&LeftCeiling;": "⌈",
      "&LeftDoubleBracket;": "⟦",
      "&LeftDownTeeVector;": "⥡",
      "&LeftDownVector;": "⇃",
      "&LeftDownVectorBar;": "⥙",
      "&LeftFloor;": "⌊",
      "&LeftRightArrow;": "↔",
      "&LeftRightVector;": "⥎",
      "&LeftTee;": "⊣",
      "&LeftTeeArrow;": "↤",
      "&LeftTeeVector;": "⥚",
      "&LeftTriangle;": "⊲",
      "&LeftTriangleBar;": "⧏",
      "&LeftTriangleEqual;": "⊴",
      "&LeftUpDownVector;": "⥑",
      "&LeftUpTeeVector;": "⥠",
      "&LeftUpVector;": "↿",
      "&LeftUpVectorBar;": "⥘",
      "&LeftVector;": "↼",
      "&LeftVectorBar;": "⥒",
      "&Leftarrow;": "⇐",
      "&Leftrightarrow;": "⇔",
      "&LessEqualGreater;": "⋚",
      "&LessFullEqual;": "≦",
      "&LessGreater;": "≶",
      "&LessLess;": "⪡",
      "&LessSlantEqual;": "⩽",
      "&LessTilde;": "≲",
      "&Lfr;": "𝔏",
      "&Ll;": "⋘",
      "&Lleftarrow;": "⇚",
      "&Lmidot;": "Ŀ",
      "&LongLeftArrow;": "⟵",
      "&LongLeftRightArrow;": "⟷",
      "&LongRightArrow;": "⟶",
      "&Longleftarrow;": "⟸",
      "&Longleftrightarrow;": "⟺",
      "&Longrightarrow;": "⟹",
      "&Lopf;": "𝕃",
      "&LowerLeftArrow;": "↙",
      "&LowerRightArrow;": "↘",
      "&Lscr;": "ℒ",
      "&Lsh;": "↰",
      "&Lstrok;": "Ł",
      "&Lt;": "≪",
      "&Map;": "⤅",
      "&Mcy;": "М",
      "&MediumSpace;": " ",
      "&Mellintrf;": "ℳ",
      "&Mfr;": "𝔐",
      "&MinusPlus;": "∓",
      "&Mopf;": "𝕄",
      "&Mscr;": "ℳ",
      "&Mu;": "Μ",
      "&NJcy;": "Њ",
      "&Nacute;": "Ń",
      "&Ncaron;": "Ň",
      "&Ncedil;": "Ņ",
      "&Ncy;": "Н",
      "&NegativeMediumSpace;": "​",
      "&NegativeThickSpace;": "​",
      "&NegativeThinSpace;": "​",
      "&NegativeVeryThinSpace;": "​",
      "&NestedGreaterGreater;": "≫",
      "&NestedLessLess;": "≪",
      "&NewLine;": "\n",
      "&Nfr;": "𝔑",
      "&NoBreak;": "⁠",
      "&NonBreakingSpace;": " ",
      "&Nopf;": "ℕ",
      "&Not;": "⫬",
      "&NotCongruent;": "≢",
      "&NotCupCap;": "≭",
      "&NotDoubleVerticalBar;": "∦",
      "&NotElement;": "∉",
      "&NotEqual;": "≠",
      "&NotEqualTilde;": "≂̸",
      "&NotExists;": "∄",
      "&NotGreater;": "≯",
      "&NotGreaterEqual;": "≱",
      "&NotGreaterFullEqual;": "≧̸",
      "&NotGreaterGreater;": "≫̸",
      "&NotGreaterLess;": "≹",
      "&NotGreaterSlantEqual;": "⩾̸",
      "&NotGreaterTilde;": "≵",
      "&NotHumpDownHump;": "≎̸",
      "&NotHumpEqual;": "≏̸",
      "&NotLeftTriangle;": "⋪",
      "&NotLeftTriangleBar;": "⧏̸",
      "&NotLeftTriangleEqual;": "⋬",
      "&NotLess;": "≮",
      "&NotLessEqual;": "≰",
      "&NotLessGreater;": "≸",
      "&NotLessLess;": "≪̸",
      "&NotLessSlantEqual;": "⩽̸",
      "&NotLessTilde;": "≴",
      "&NotNestedGreaterGreater;": "⪢̸",
      "&NotNestedLessLess;": "⪡̸",
      "&NotPrecedes;": "⊀",
      "&NotPrecedesEqual;": "⪯̸",
      "&NotPrecedesSlantEqual;": "⋠",
      "&NotReverseElement;": "∌",
      "&NotRightTriangle;": "⋫",
      "&NotRightTriangleBar;": "⧐̸",
      "&NotRightTriangleEqual;": "⋭",
      "&NotSquareSubset;": "⊏̸",
      "&NotSquareSubsetEqual;": "⋢",
      "&NotSquareSuperset;": "⊐̸",
      "&NotSquareSupersetEqual;": "⋣",
      "&NotSubset;": "⊂⃒",
      "&NotSubsetEqual;": "⊈",
      "&NotSucceeds;": "⊁",
      "&NotSucceedsEqual;": "⪰̸",
      "&NotSucceedsSlantEqual;": "⋡",
      "&NotSucceedsTilde;": "≿̸",
      "&NotSuperset;": "⊃⃒",
      "&NotSupersetEqual;": "⊉",
      "&NotTilde;": "≁",
      "&NotTildeEqual;": "≄",
      "&NotTildeFullEqual;": "≇",
      "&NotTildeTilde;": "≉",
      "&NotVerticalBar;": "∤",
      "&Nscr;": "𝒩",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Nu;": "Ν",
      "&OElig;": "Œ",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Ocy;": "О",
      "&Odblac;": "Ő",
      "&Ofr;": "𝔒",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Omacr;": "Ō",
      "&Omega;": "Ω",
      "&Omicron;": "Ο",
      "&Oopf;": "𝕆",
      "&OpenCurlyDoubleQuote;": "“",
      "&OpenCurlyQuote;": "‘",
      "&Or;": "⩔",
      "&Oscr;": "𝒪",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Otimes;": "⨷",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&OverBar;": "‾",
      "&OverBrace;": "⏞",
      "&OverBracket;": "⎴",
      "&OverParenthesis;": "⏜",
      "&PartialD;": "∂",
      "&Pcy;": "П",
      "&Pfr;": "𝔓",
      "&Phi;": "Φ",
      "&Pi;": "Π",
      "&PlusMinus;": "±",
      "&Poincareplane;": "ℌ",
      "&Popf;": "ℙ",
      "&Pr;": "⪻",
      "&Precedes;": "≺",
      "&PrecedesEqual;": "⪯",
      "&PrecedesSlantEqual;": "≼",
      "&PrecedesTilde;": "≾",
      "&Prime;": "″",
      "&Product;": "∏",
      "&Proportion;": "∷",
      "&Proportional;": "∝",
      "&Pscr;": "𝒫",
      "&Psi;": "Ψ",
      "&QUOT": '"',
      "&QUOT;": '"',
      "&Qfr;": "𝔔",
      "&Qopf;": "ℚ",
      "&Qscr;": "𝒬",
      "&RBarr;": "⤐",
      "&REG": "®",
      "&REG;": "®",
      "&Racute;": "Ŕ",
      "&Rang;": "⟫",
      "&Rarr;": "↠",
      "&Rarrtl;": "⤖",
      "&Rcaron;": "Ř",
      "&Rcedil;": "Ŗ",
      "&Rcy;": "Р",
      "&Re;": "ℜ",
      "&ReverseElement;": "∋",
      "&ReverseEquilibrium;": "⇋",
      "&ReverseUpEquilibrium;": "⥯",
      "&Rfr;": "ℜ",
      "&Rho;": "Ρ",
      "&RightAngleBracket;": "⟩",
      "&RightArrow;": "→",
      "&RightArrowBar;": "⇥",
      "&RightArrowLeftArrow;": "⇄",
      "&RightCeiling;": "⌉",
      "&RightDoubleBracket;": "⟧",
      "&RightDownTeeVector;": "⥝",
      "&RightDownVector;": "⇂",
      "&RightDownVectorBar;": "⥕",
      "&RightFloor;": "⌋",
      "&RightTee;": "⊢",
      "&RightTeeArrow;": "↦",
      "&RightTeeVector;": "⥛",
      "&RightTriangle;": "⊳",
      "&RightTriangleBar;": "⧐",
      "&RightTriangleEqual;": "⊵",
      "&RightUpDownVector;": "⥏",
      "&RightUpTeeVector;": "⥜",
      "&RightUpVector;": "↾",
      "&RightUpVectorBar;": "⥔",
      "&RightVector;": "⇀",
      "&RightVectorBar;": "⥓",
      "&Rightarrow;": "⇒",
      "&Ropf;": "ℝ",
      "&RoundImplies;": "⥰",
      "&Rrightarrow;": "⇛",
      "&Rscr;": "ℛ",
      "&Rsh;": "↱",
      "&RuleDelayed;": "⧴",
      "&SHCHcy;": "Щ",
      "&SHcy;": "Ш",
      "&SOFTcy;": "Ь",
      "&Sacute;": "Ś",
      "&Sc;": "⪼",
      "&Scaron;": "Š",
      "&Scedil;": "Ş",
      "&Scirc;": "Ŝ",
      "&Scy;": "С",
      "&Sfr;": "𝔖",
      "&ShortDownArrow;": "↓",
      "&ShortLeftArrow;": "←",
      "&ShortRightArrow;": "→",
      "&ShortUpArrow;": "↑",
      "&Sigma;": "Σ",
      "&SmallCircle;": "∘",
      "&Sopf;": "𝕊",
      "&Sqrt;": "√",
      "&Square;": "□",
      "&SquareIntersection;": "⊓",
      "&SquareSubset;": "⊏",
      "&SquareSubsetEqual;": "⊑",
      "&SquareSuperset;": "⊐",
      "&SquareSupersetEqual;": "⊒",
      "&SquareUnion;": "⊔",
      "&Sscr;": "𝒮",
      "&Star;": "⋆",
      "&Sub;": "⋐",
      "&Subset;": "⋐",
      "&SubsetEqual;": "⊆",
      "&Succeeds;": "≻",
      "&SucceedsEqual;": "⪰",
      "&SucceedsSlantEqual;": "≽",
      "&SucceedsTilde;": "≿",
      "&SuchThat;": "∋",
      "&Sum;": "∑",
      "&Sup;": "⋑",
      "&Superset;": "⊃",
      "&SupersetEqual;": "⊇",
      "&Supset;": "⋑",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&TRADE;": "™",
      "&TSHcy;": "Ћ",
      "&TScy;": "Ц",
      "&Tab;": "\t",
      "&Tau;": "Τ",
      "&Tcaron;": "Ť",
      "&Tcedil;": "Ţ",
      "&Tcy;": "Т",
      "&Tfr;": "𝔗",
      "&Therefore;": "∴",
      "&Theta;": "Θ",
      "&ThickSpace;": "  ",
      "&ThinSpace;": " ",
      "&Tilde;": "∼",
      "&TildeEqual;": "≃",
      "&TildeFullEqual;": "≅",
      "&TildeTilde;": "≈",
      "&Topf;": "𝕋",
      "&TripleDot;": "⃛",
      "&Tscr;": "𝒯",
      "&Tstrok;": "Ŧ",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Uarr;": "↟",
      "&Uarrocir;": "⥉",
      "&Ubrcy;": "Ў",
      "&Ubreve;": "Ŭ",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Ucy;": "У",
      "&Udblac;": "Ű",
      "&Ufr;": "𝔘",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Umacr;": "Ū",
      "&UnderBar;": "_",
      "&UnderBrace;": "⏟",
      "&UnderBracket;": "⎵",
      "&UnderParenthesis;": "⏝",
      "&Union;": "⋃",
      "&UnionPlus;": "⊎",
      "&Uogon;": "Ų",
      "&Uopf;": "𝕌",
      "&UpArrow;": "↑",
      "&UpArrowBar;": "⤒",
      "&UpArrowDownArrow;": "⇅",
      "&UpDownArrow;": "↕",
      "&UpEquilibrium;": "⥮",
      "&UpTee;": "⊥",
      "&UpTeeArrow;": "↥",
      "&Uparrow;": "⇑",
      "&Updownarrow;": "⇕",
      "&UpperLeftArrow;": "↖",
      "&UpperRightArrow;": "↗",
      "&Upsi;": "ϒ",
      "&Upsilon;": "Υ",
      "&Uring;": "Ů",
      "&Uscr;": "𝒰",
      "&Utilde;": "Ũ",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&VDash;": "⊫",
      "&Vbar;": "⫫",
      "&Vcy;": "В",
      "&Vdash;": "⊩",
      "&Vdashl;": "⫦",
      "&Vee;": "⋁",
      "&Verbar;": "‖",
      "&Vert;": "‖",
      "&VerticalBar;": "∣",
      "&VerticalLine;": "|",
      "&VerticalSeparator;": "❘",
      "&VerticalTilde;": "≀",
      "&VeryThinSpace;": " ",
      "&Vfr;": "𝔙",
      "&Vopf;": "𝕍",
      "&Vscr;": "𝒱",
      "&Vvdash;": "⊪",
      "&Wcirc;": "Ŵ",
      "&Wedge;": "⋀",
      "&Wfr;": "𝔚",
      "&Wopf;": "𝕎",
      "&Wscr;": "𝒲",
      "&Xfr;": "𝔛",
      "&Xi;": "Ξ",
      "&Xopf;": "𝕏",
      "&Xscr;": "𝒳",
      "&YAcy;": "Я",
      "&YIcy;": "Ї",
      "&YUcy;": "Ю",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&Ycirc;": "Ŷ",
      "&Ycy;": "Ы",
      "&Yfr;": "𝔜",
      "&Yopf;": "𝕐",
      "&Yscr;": "𝒴",
      "&Yuml;": "Ÿ",
      "&ZHcy;": "Ж",
      "&Zacute;": "Ź",
      "&Zcaron;": "Ž",
      "&Zcy;": "З",
      "&Zdot;": "Ż",
      "&ZeroWidthSpace;": "​",
      "&Zeta;": "Ζ",
      "&Zfr;": "ℨ",
      "&Zopf;": "ℤ",
      "&Zscr;": "𝒵",
      "&aacute": "á",
      "&aacute;": "á",
      "&abreve;": "ă",
      "&ac;": "∾",
      "&acE;": "∾̳",
      "&acd;": "∿",
      "&acirc": "â",
      "&acirc;": "â",
      "&acute": "´",
      "&acute;": "´",
      "&acy;": "а",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&af;": "⁡",
      "&afr;": "𝔞",
      "&agrave": "à",
      "&agrave;": "à",
      "&alefsym;": "ℵ",
      "&aleph;": "ℵ",
      "&alpha;": "α",
      "&amacr;": "ā",
      "&amalg;": "⨿",
      "&amp": "&",
      "&amp;": "&",
      "&and;": "∧",
      "&andand;": "⩕",
      "&andd;": "⩜",
      "&andslope;": "⩘",
      "&andv;": "⩚",
      "&ang;": "∠",
      "&ange;": "⦤",
      "&angle;": "∠",
      "&angmsd;": "∡",
      "&angmsdaa;": "⦨",
      "&angmsdab;": "⦩",
      "&angmsdac;": "⦪",
      "&angmsdad;": "⦫",
      "&angmsdae;": "⦬",
      "&angmsdaf;": "⦭",
      "&angmsdag;": "⦮",
      "&angmsdah;": "⦯",
      "&angrt;": "∟",
      "&angrtvb;": "⊾",
      "&angrtvbd;": "⦝",
      "&angsph;": "∢",
      "&angst;": "Å",
      "&angzarr;": "⍼",
      "&aogon;": "ą",
      "&aopf;": "𝕒",
      "&ap;": "≈",
      "&apE;": "⩰",
      "&apacir;": "⩯",
      "&ape;": "≊",
      "&apid;": "≋",
      "&apos;": "'",
      "&approx;": "≈",
      "&approxeq;": "≊",
      "&aring": "å",
      "&aring;": "å",
      "&ascr;": "𝒶",
      "&ast;": "*",
      "&asymp;": "≈",
      "&asympeq;": "≍",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&awconint;": "∳",
      "&awint;": "⨑",
      "&bNot;": "⫭",
      "&backcong;": "≌",
      "&backepsilon;": "϶",
      "&backprime;": "‵",
      "&backsim;": "∽",
      "&backsimeq;": "⋍",
      "&barvee;": "⊽",
      "&barwed;": "⌅",
      "&barwedge;": "⌅",
      "&bbrk;": "⎵",
      "&bbrktbrk;": "⎶",
      "&bcong;": "≌",
      "&bcy;": "б",
      "&bdquo;": "„",
      "&becaus;": "∵",
      "&because;": "∵",
      "&bemptyv;": "⦰",
      "&bepsi;": "϶",
      "&bernou;": "ℬ",
      "&beta;": "β",
      "&beth;": "ℶ",
      "&between;": "≬",
      "&bfr;": "𝔟",
      "&bigcap;": "⋂",
      "&bigcirc;": "◯",
      "&bigcup;": "⋃",
      "&bigodot;": "⨀",
      "&bigoplus;": "⨁",
      "&bigotimes;": "⨂",
      "&bigsqcup;": "⨆",
      "&bigstar;": "★",
      "&bigtriangledown;": "▽",
      "&bigtriangleup;": "△",
      "&biguplus;": "⨄",
      "&bigvee;": "⋁",
      "&bigwedge;": "⋀",
      "&bkarow;": "⤍",
      "&blacklozenge;": "⧫",
      "&blacksquare;": "▪",
      "&blacktriangle;": "▴",
      "&blacktriangledown;": "▾",
      "&blacktriangleleft;": "◂",
      "&blacktriangleright;": "▸",
      "&blank;": "␣",
      "&blk12;": "▒",
      "&blk14;": "░",
      "&blk34;": "▓",
      "&block;": "█",
      "&bne;": "=⃥",
      "&bnequiv;": "≡⃥",
      "&bnot;": "⌐",
      "&bopf;": "𝕓",
      "&bot;": "⊥",
      "&bottom;": "⊥",
      "&bowtie;": "⋈",
      "&boxDL;": "╗",
      "&boxDR;": "╔",
      "&boxDl;": "╖",
      "&boxDr;": "╓",
      "&boxH;": "═",
      "&boxHD;": "╦",
      "&boxHU;": "╩",
      "&boxHd;": "╤",
      "&boxHu;": "╧",
      "&boxUL;": "╝",
      "&boxUR;": "╚",
      "&boxUl;": "╜",
      "&boxUr;": "╙",
      "&boxV;": "║",
      "&boxVH;": "╬",
      "&boxVL;": "╣",
      "&boxVR;": "╠",
      "&boxVh;": "╫",
      "&boxVl;": "╢",
      "&boxVr;": "╟",
      "&boxbox;": "⧉",
      "&boxdL;": "╕",
      "&boxdR;": "╒",
      "&boxdl;": "┐",
      "&boxdr;": "┌",
      "&boxh;": "─",
      "&boxhD;": "╥",
      "&boxhU;": "╨",
      "&boxhd;": "┬",
      "&boxhu;": "┴",
      "&boxminus;": "⊟",
      "&boxplus;": "⊞",
      "&boxtimes;": "⊠",
      "&boxuL;": "╛",
      "&boxuR;": "╘",
      "&boxul;": "┘",
      "&boxur;": "└",
      "&boxv;": "│",
      "&boxvH;": "╪",
      "&boxvL;": "╡",
      "&boxvR;": "╞",
      "&boxvh;": "┼",
      "&boxvl;": "┤",
      "&boxvr;": "├",
      "&bprime;": "‵",
      "&breve;": "˘",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&bscr;": "𝒷",
      "&bsemi;": "⁏",
      "&bsim;": "∽",
      "&bsime;": "⋍",
      "&bsol;": "\\",
      "&bsolb;": "⧅",
      "&bsolhsub;": "⟈",
      "&bull;": "•",
      "&bullet;": "•",
      "&bump;": "≎",
      "&bumpE;": "⪮",
      "&bumpe;": "≏",
      "&bumpeq;": "≏",
      "&cacute;": "ć",
      "&cap;": "∩",
      "&capand;": "⩄",
      "&capbrcup;": "⩉",
      "&capcap;": "⩋",
      "&capcup;": "⩇",
      "&capdot;": "⩀",
      "&caps;": "∩︀",
      "&caret;": "⁁",
      "&caron;": "ˇ",
      "&ccaps;": "⩍",
      "&ccaron;": "č",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&ccirc;": "ĉ",
      "&ccups;": "⩌",
      "&ccupssm;": "⩐",
      "&cdot;": "ċ",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&cemptyv;": "⦲",
      "&cent": "¢",
      "&cent;": "¢",
      "&centerdot;": "·",
      "&cfr;": "𝔠",
      "&chcy;": "ч",
      "&check;": "✓",
      "&checkmark;": "✓",
      "&chi;": "χ",
      "&cir;": "○",
      "&cirE;": "⧃",
      "&circ;": "ˆ",
      "&circeq;": "≗",
      "&circlearrowleft;": "↺",
      "&circlearrowright;": "↻",
      "&circledR;": "®",
      "&circledS;": "Ⓢ",
      "&circledast;": "⊛",
      "&circledcirc;": "⊚",
      "&circleddash;": "⊝",
      "&cire;": "≗",
      "&cirfnint;": "⨐",
      "&cirmid;": "⫯",
      "&cirscir;": "⧂",
      "&clubs;": "♣",
      "&clubsuit;": "♣",
      "&colon;": ":",
      "&colone;": "≔",
      "&coloneq;": "≔",
      "&comma;": ",",
      "&commat;": "@",
      "&comp;": "∁",
      "&compfn;": "∘",
      "&complement;": "∁",
      "&complexes;": "ℂ",
      "&cong;": "≅",
      "&congdot;": "⩭",
      "&conint;": "∮",
      "&copf;": "𝕔",
      "&coprod;": "∐",
      "&copy": "©",
      "&copy;": "©",
      "&copysr;": "℗",
      "&crarr;": "↵",
      "&cross;": "✗",
      "&cscr;": "𝒸",
      "&csub;": "⫏",
      "&csube;": "⫑",
      "&csup;": "⫐",
      "&csupe;": "⫒",
      "&ctdot;": "⋯",
      "&cudarrl;": "⤸",
      "&cudarrr;": "⤵",
      "&cuepr;": "⋞",
      "&cuesc;": "⋟",
      "&cularr;": "↶",
      "&cularrp;": "⤽",
      "&cup;": "∪",
      "&cupbrcap;": "⩈",
      "&cupcap;": "⩆",
      "&cupcup;": "⩊",
      "&cupdot;": "⊍",
      "&cupor;": "⩅",
      "&cups;": "∪︀",
      "&curarr;": "↷",
      "&curarrm;": "⤼",
      "&curlyeqprec;": "⋞",
      "&curlyeqsucc;": "⋟",
      "&curlyvee;": "⋎",
      "&curlywedge;": "⋏",
      "&curren": "¤",
      "&curren;": "¤",
      "&curvearrowleft;": "↶",
      "&curvearrowright;": "↷",
      "&cuvee;": "⋎",
      "&cuwed;": "⋏",
      "&cwconint;": "∲",
      "&cwint;": "∱",
      "&cylcty;": "⌭",
      "&dArr;": "⇓",
      "&dHar;": "⥥",
      "&dagger;": "†",
      "&daleth;": "ℸ",
      "&darr;": "↓",
      "&dash;": "‐",
      "&dashv;": "⊣",
      "&dbkarow;": "⤏",
      "&dblac;": "˝",
      "&dcaron;": "ď",
      "&dcy;": "д",
      "&dd;": "ⅆ",
      "&ddagger;": "‡",
      "&ddarr;": "⇊",
      "&ddotseq;": "⩷",
      "&deg": "°",
      "&deg;": "°",
      "&delta;": "δ",
      "&demptyv;": "⦱",
      "&dfisht;": "⥿",
      "&dfr;": "𝔡",
      "&dharl;": "⇃",
      "&dharr;": "⇂",
      "&diam;": "⋄",
      "&diamond;": "⋄",
      "&diamondsuit;": "♦",
      "&diams;": "♦",
      "&die;": "¨",
      "&digamma;": "ϝ",
      "&disin;": "⋲",
      "&div;": "÷",
      "&divide": "÷",
      "&divide;": "÷",
      "&divideontimes;": "⋇",
      "&divonx;": "⋇",
      "&djcy;": "ђ",
      "&dlcorn;": "⌞",
      "&dlcrop;": "⌍",
      "&dollar;": "$",
      "&dopf;": "𝕕",
      "&dot;": "˙",
      "&doteq;": "≐",
      "&doteqdot;": "≑",
      "&dotminus;": "∸",
      "&dotplus;": "∔",
      "&dotsquare;": "⊡",
      "&doublebarwedge;": "⌆",
      "&downarrow;": "↓",
      "&downdownarrows;": "⇊",
      "&downharpoonleft;": "⇃",
      "&downharpoonright;": "⇂",
      "&drbkarow;": "⤐",
      "&drcorn;": "⌟",
      "&drcrop;": "⌌",
      "&dscr;": "𝒹",
      "&dscy;": "ѕ",
      "&dsol;": "⧶",
      "&dstrok;": "đ",
      "&dtdot;": "⋱",
      "&dtri;": "▿",
      "&dtrif;": "▾",
      "&duarr;": "⇵",
      "&duhar;": "⥯",
      "&dwangle;": "⦦",
      "&dzcy;": "џ",
      "&dzigrarr;": "⟿",
      "&eDDot;": "⩷",
      "&eDot;": "≑",
      "&eacute": "é",
      "&eacute;": "é",
      "&easter;": "⩮",
      "&ecaron;": "ě",
      "&ecir;": "≖",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&ecolon;": "≕",
      "&ecy;": "э",
      "&edot;": "ė",
      "&ee;": "ⅇ",
      "&efDot;": "≒",
      "&efr;": "𝔢",
      "&eg;": "⪚",
      "&egrave": "è",
      "&egrave;": "è",
      "&egs;": "⪖",
      "&egsdot;": "⪘",
      "&el;": "⪙",
      "&elinters;": "⏧",
      "&ell;": "ℓ",
      "&els;": "⪕",
      "&elsdot;": "⪗",
      "&emacr;": "ē",
      "&empty;": "∅",
      "&emptyset;": "∅",
      "&emptyv;": "∅",
      "&emsp13;": " ",
      "&emsp14;": " ",
      "&emsp;": " ",
      "&eng;": "ŋ",
      "&ensp;": " ",
      "&eogon;": "ę",
      "&eopf;": "𝕖",
      "&epar;": "⋕",
      "&eparsl;": "⧣",
      "&eplus;": "⩱",
      "&epsi;": "ε",
      "&epsilon;": "ε",
      "&epsiv;": "ϵ",
      "&eqcirc;": "≖",
      "&eqcolon;": "≕",
      "&eqsim;": "≂",
      "&eqslantgtr;": "⪖",
      "&eqslantless;": "⪕",
      "&equals;": "=",
      "&equest;": "≟",
      "&equiv;": "≡",
      "&equivDD;": "⩸",
      "&eqvparsl;": "⧥",
      "&erDot;": "≓",
      "&erarr;": "⥱",
      "&escr;": "ℯ",
      "&esdot;": "≐",
      "&esim;": "≂",
      "&eta;": "η",
      "&eth": "ð",
      "&eth;": "ð",
      "&euml": "ë",
      "&euml;": "ë",
      "&euro;": "€",
      "&excl;": "!",
      "&exist;": "∃",
      "&expectation;": "ℰ",
      "&exponentiale;": "ⅇ",
      "&fallingdotseq;": "≒",
      "&fcy;": "ф",
      "&female;": "♀",
      "&ffilig;": "ﬃ",
      "&fflig;": "ﬀ",
      "&ffllig;": "ﬄ",
      "&ffr;": "𝔣",
      "&filig;": "ﬁ",
      "&fjlig;": "fj",
      "&flat;": "♭",
      "&fllig;": "ﬂ",
      "&fltns;": "▱",
      "&fnof;": "ƒ",
      "&fopf;": "𝕗",
      "&forall;": "∀",
      "&fork;": "⋔",
      "&forkv;": "⫙",
      "&fpartint;": "⨍",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac13;": "⅓",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac15;": "⅕",
      "&frac16;": "⅙",
      "&frac18;": "⅛",
      "&frac23;": "⅔",
      "&frac25;": "⅖",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&frac35;": "⅗",
      "&frac38;": "⅜",
      "&frac45;": "⅘",
      "&frac56;": "⅚",
      "&frac58;": "⅝",
      "&frac78;": "⅞",
      "&frasl;": "⁄",
      "&frown;": "⌢",
      "&fscr;": "𝒻",
      "&gE;": "≧",
      "&gEl;": "⪌",
      "&gacute;": "ǵ",
      "&gamma;": "γ",
      "&gammad;": "ϝ",
      "&gap;": "⪆",
      "&gbreve;": "ğ",
      "&gcirc;": "ĝ",
      "&gcy;": "г",
      "&gdot;": "ġ",
      "&ge;": "≥",
      "&gel;": "⋛",
      "&geq;": "≥",
      "&geqq;": "≧",
      "&geqslant;": "⩾",
      "&ges;": "⩾",
      "&gescc;": "⪩",
      "&gesdot;": "⪀",
      "&gesdoto;": "⪂",
      "&gesdotol;": "⪄",
      "&gesl;": "⋛︀",
      "&gesles;": "⪔",
      "&gfr;": "𝔤",
      "&gg;": "≫",
      "&ggg;": "⋙",
      "&gimel;": "ℷ",
      "&gjcy;": "ѓ",
      "&gl;": "≷",
      "&glE;": "⪒",
      "&gla;": "⪥",
      "&glj;": "⪤",
      "&gnE;": "≩",
      "&gnap;": "⪊",
      "&gnapprox;": "⪊",
      "&gne;": "⪈",
      "&gneq;": "⪈",
      "&gneqq;": "≩",
      "&gnsim;": "⋧",
      "&gopf;": "𝕘",
      "&grave;": "`",
      "&gscr;": "ℊ",
      "&gsim;": "≳",
      "&gsime;": "⪎",
      "&gsiml;": "⪐",
      "&gt": ">",
      "&gt;": ">",
      "&gtcc;": "⪧",
      "&gtcir;": "⩺",
      "&gtdot;": "⋗",
      "&gtlPar;": "⦕",
      "&gtquest;": "⩼",
      "&gtrapprox;": "⪆",
      "&gtrarr;": "⥸",
      "&gtrdot;": "⋗",
      "&gtreqless;": "⋛",
      "&gtreqqless;": "⪌",
      "&gtrless;": "≷",
      "&gtrsim;": "≳",
      "&gvertneqq;": "≩︀",
      "&gvnE;": "≩︀",
      "&hArr;": "⇔",
      "&hairsp;": " ",
      "&half;": "½",
      "&hamilt;": "ℋ",
      "&hardcy;": "ъ",
      "&harr;": "↔",
      "&harrcir;": "⥈",
      "&harrw;": "↭",
      "&hbar;": "ℏ",
      "&hcirc;": "ĥ",
      "&hearts;": "♥",
      "&heartsuit;": "♥",
      "&hellip;": "…",
      "&hercon;": "⊹",
      "&hfr;": "𝔥",
      "&hksearow;": "⤥",
      "&hkswarow;": "⤦",
      "&hoarr;": "⇿",
      "&homtht;": "∻",
      "&hookleftarrow;": "↩",
      "&hookrightarrow;": "↪",
      "&hopf;": "𝕙",
      "&horbar;": "―",
      "&hscr;": "𝒽",
      "&hslash;": "ℏ",
      "&hstrok;": "ħ",
      "&hybull;": "⁃",
      "&hyphen;": "‐",
      "&iacute": "í",
      "&iacute;": "í",
      "&ic;": "⁣",
      "&icirc": "î",
      "&icirc;": "î",
      "&icy;": "и",
      "&iecy;": "е",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&iff;": "⇔",
      "&ifr;": "𝔦",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&ii;": "ⅈ",
      "&iiiint;": "⨌",
      "&iiint;": "∭",
      "&iinfin;": "⧜",
      "&iiota;": "℩",
      "&ijlig;": "ĳ",
      "&imacr;": "ī",
      "&image;": "ℑ",
      "&imagline;": "ℐ",
      "&imagpart;": "ℑ",
      "&imath;": "ı",
      "&imof;": "⊷",
      "&imped;": "Ƶ",
      "&in;": "∈",
      "&incare;": "℅",
      "&infin;": "∞",
      "&infintie;": "⧝",
      "&inodot;": "ı",
      "&int;": "∫",
      "&intcal;": "⊺",
      "&integers;": "ℤ",
      "&intercal;": "⊺",
      "&intlarhk;": "⨗",
      "&intprod;": "⨼",
      "&iocy;": "ё",
      "&iogon;": "į",
      "&iopf;": "𝕚",
      "&iota;": "ι",
      "&iprod;": "⨼",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&iscr;": "𝒾",
      "&isin;": "∈",
      "&isinE;": "⋹",
      "&isindot;": "⋵",
      "&isins;": "⋴",
      "&isinsv;": "⋳",
      "&isinv;": "∈",
      "&it;": "⁢",
      "&itilde;": "ĩ",
      "&iukcy;": "і",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&jcirc;": "ĵ",
      "&jcy;": "й",
      "&jfr;": "𝔧",
      "&jmath;": "ȷ",
      "&jopf;": "𝕛",
      "&jscr;": "𝒿",
      "&jsercy;": "ј",
      "&jukcy;": "є",
      "&kappa;": "κ",
      "&kappav;": "ϰ",
      "&kcedil;": "ķ",
      "&kcy;": "к",
      "&kfr;": "𝔨",
      "&kgreen;": "ĸ",
      "&khcy;": "х",
      "&kjcy;": "ќ",
      "&kopf;": "𝕜",
      "&kscr;": "𝓀",
      "&lAarr;": "⇚",
      "&lArr;": "⇐",
      "&lAtail;": "⤛",
      "&lBarr;": "⤎",
      "&lE;": "≦",
      "&lEg;": "⪋",
      "&lHar;": "⥢",
      "&lacute;": "ĺ",
      "&laemptyv;": "⦴",
      "&lagran;": "ℒ",
      "&lambda;": "λ",
      "&lang;": "⟨",
      "&langd;": "⦑",
      "&langle;": "⟨",
      "&lap;": "⪅",
      "&laquo": "«",
      "&laquo;": "«",
      "&larr;": "←",
      "&larrb;": "⇤",
      "&larrbfs;": "⤟",
      "&larrfs;": "⤝",
      "&larrhk;": "↩",
      "&larrlp;": "↫",
      "&larrpl;": "⤹",
      "&larrsim;": "⥳",
      "&larrtl;": "↢",
      "&lat;": "⪫",
      "&latail;": "⤙",
      "&late;": "⪭",
      "&lates;": "⪭︀",
      "&lbarr;": "⤌",
      "&lbbrk;": "❲",
      "&lbrace;": "{",
      "&lbrack;": "[",
      "&lbrke;": "⦋",
      "&lbrksld;": "⦏",
      "&lbrkslu;": "⦍",
      "&lcaron;": "ľ",
      "&lcedil;": "ļ",
      "&lceil;": "⌈",
      "&lcub;": "{",
      "&lcy;": "л",
      "&ldca;": "⤶",
      "&ldquo;": "“",
      "&ldquor;": "„",
      "&ldrdhar;": "⥧",
      "&ldrushar;": "⥋",
      "&ldsh;": "↲",
      "&le;": "≤",
      "&leftarrow;": "←",
      "&leftarrowtail;": "↢",
      "&leftharpoondown;": "↽",
      "&leftharpoonup;": "↼",
      "&leftleftarrows;": "⇇",
      "&leftrightarrow;": "↔",
      "&leftrightarrows;": "⇆",
      "&leftrightharpoons;": "⇋",
      "&leftrightsquigarrow;": "↭",
      "&leftthreetimes;": "⋋",
      "&leg;": "⋚",
      "&leq;": "≤",
      "&leqq;": "≦",
      "&leqslant;": "⩽",
      "&les;": "⩽",
      "&lescc;": "⪨",
      "&lesdot;": "⩿",
      "&lesdoto;": "⪁",
      "&lesdotor;": "⪃",
      "&lesg;": "⋚︀",
      "&lesges;": "⪓",
      "&lessapprox;": "⪅",
      "&lessdot;": "⋖",
      "&lesseqgtr;": "⋚",
      "&lesseqqgtr;": "⪋",
      "&lessgtr;": "≶",
      "&lesssim;": "≲",
      "&lfisht;": "⥼",
      "&lfloor;": "⌊",
      "&lfr;": "𝔩",
      "&lg;": "≶",
      "&lgE;": "⪑",
      "&lhard;": "↽",
      "&lharu;": "↼",
      "&lharul;": "⥪",
      "&lhblk;": "▄",
      "&ljcy;": "љ",
      "&ll;": "≪",
      "&llarr;": "⇇",
      "&llcorner;": "⌞",
      "&llhard;": "⥫",
      "&lltri;": "◺",
      "&lmidot;": "ŀ",
      "&lmoust;": "⎰",
      "&lmoustache;": "⎰",
      "&lnE;": "≨",
      "&lnap;": "⪉",
      "&lnapprox;": "⪉",
      "&lne;": "⪇",
      "&lneq;": "⪇",
      "&lneqq;": "≨",
      "&lnsim;": "⋦",
      "&loang;": "⟬",
      "&loarr;": "⇽",
      "&lobrk;": "⟦",
      "&longleftarrow;": "⟵",
      "&longleftrightarrow;": "⟷",
      "&longmapsto;": "⟼",
      "&longrightarrow;": "⟶",
      "&looparrowleft;": "↫",
      "&looparrowright;": "↬",
      "&lopar;": "⦅",
      "&lopf;": "𝕝",
      "&loplus;": "⨭",
      "&lotimes;": "⨴",
      "&lowast;": "∗",
      "&lowbar;": "_",
      "&loz;": "◊",
      "&lozenge;": "◊",
      "&lozf;": "⧫",
      "&lpar;": "(",
      "&lparlt;": "⦓",
      "&lrarr;": "⇆",
      "&lrcorner;": "⌟",
      "&lrhar;": "⇋",
      "&lrhard;": "⥭",
      "&lrm;": "‎",
      "&lrtri;": "⊿",
      "&lsaquo;": "‹",
      "&lscr;": "𝓁",
      "&lsh;": "↰",
      "&lsim;": "≲",
      "&lsime;": "⪍",
      "&lsimg;": "⪏",
      "&lsqb;": "[",
      "&lsquo;": "‘",
      "&lsquor;": "‚",
      "&lstrok;": "ł",
      "&lt": "<",
      "&lt;": "<",
      "&ltcc;": "⪦",
      "&ltcir;": "⩹",
      "&ltdot;": "⋖",
      "&lthree;": "⋋",
      "&ltimes;": "⋉",
      "&ltlarr;": "⥶",
      "&ltquest;": "⩻",
      "&ltrPar;": "⦖",
      "&ltri;": "◃",
      "&ltrie;": "⊴",
      "&ltrif;": "◂",
      "&lurdshar;": "⥊",
      "&luruhar;": "⥦",
      "&lvertneqq;": "≨︀",
      "&lvnE;": "≨︀",
      "&mDDot;": "∺",
      "&macr": "¯",
      "&macr;": "¯",
      "&male;": "♂",
      "&malt;": "✠",
      "&maltese;": "✠",
      "&map;": "↦",
      "&mapsto;": "↦",
      "&mapstodown;": "↧",
      "&mapstoleft;": "↤",
      "&mapstoup;": "↥",
      "&marker;": "▮",
      "&mcomma;": "⨩",
      "&mcy;": "м",
      "&mdash;": "—",
      "&measuredangle;": "∡",
      "&mfr;": "𝔪",
      "&mho;": "℧",
      "&micro": "µ",
      "&micro;": "µ",
      "&mid;": "∣",
      "&midast;": "*",
      "&midcir;": "⫰",
      "&middot": "·",
      "&middot;": "·",
      "&minus;": "−",
      "&minusb;": "⊟",
      "&minusd;": "∸",
      "&minusdu;": "⨪",
      "&mlcp;": "⫛",
      "&mldr;": "…",
      "&mnplus;": "∓",
      "&models;": "⊧",
      "&mopf;": "𝕞",
      "&mp;": "∓",
      "&mscr;": "𝓂",
      "&mstpos;": "∾",
      "&mu;": "μ",
      "&multimap;": "⊸",
      "&mumap;": "⊸",
      "&nGg;": "⋙̸",
      "&nGt;": "≫⃒",
      "&nGtv;": "≫̸",
      "&nLeftarrow;": "⇍",
      "&nLeftrightarrow;": "⇎",
      "&nLl;": "⋘̸",
      "&nLt;": "≪⃒",
      "&nLtv;": "≪̸",
      "&nRightarrow;": "⇏",
      "&nVDash;": "⊯",
      "&nVdash;": "⊮",
      "&nabla;": "∇",
      "&nacute;": "ń",
      "&nang;": "∠⃒",
      "&nap;": "≉",
      "&napE;": "⩰̸",
      "&napid;": "≋̸",
      "&napos;": "ŉ",
      "&napprox;": "≉",
      "&natur;": "♮",
      "&natural;": "♮",
      "&naturals;": "ℕ",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&nbump;": "≎̸",
      "&nbumpe;": "≏̸",
      "&ncap;": "⩃",
      "&ncaron;": "ň",
      "&ncedil;": "ņ",
      "&ncong;": "≇",
      "&ncongdot;": "⩭̸",
      "&ncup;": "⩂",
      "&ncy;": "н",
      "&ndash;": "–",
      "&ne;": "≠",
      "&neArr;": "⇗",
      "&nearhk;": "⤤",
      "&nearr;": "↗",
      "&nearrow;": "↗",
      "&nedot;": "≐̸",
      "&nequiv;": "≢",
      "&nesear;": "⤨",
      "&nesim;": "≂̸",
      "&nexist;": "∄",
      "&nexists;": "∄",
      "&nfr;": "𝔫",
      "&ngE;": "≧̸",
      "&nge;": "≱",
      "&ngeq;": "≱",
      "&ngeqq;": "≧̸",
      "&ngeqslant;": "⩾̸",
      "&nges;": "⩾̸",
      "&ngsim;": "≵",
      "&ngt;": "≯",
      "&ngtr;": "≯",
      "&nhArr;": "⇎",
      "&nharr;": "↮",
      "&nhpar;": "⫲",
      "&ni;": "∋",
      "&nis;": "⋼",
      "&nisd;": "⋺",
      "&niv;": "∋",
      "&njcy;": "њ",
      "&nlArr;": "⇍",
      "&nlE;": "≦̸",
      "&nlarr;": "↚",
      "&nldr;": "‥",
      "&nle;": "≰",
      "&nleftarrow;": "↚",
      "&nleftrightarrow;": "↮",
      "&nleq;": "≰",
      "&nleqq;": "≦̸",
      "&nleqslant;": "⩽̸",
      "&nles;": "⩽̸",
      "&nless;": "≮",
      "&nlsim;": "≴",
      "&nlt;": "≮",
      "&nltri;": "⋪",
      "&nltrie;": "⋬",
      "&nmid;": "∤",
      "&nopf;": "𝕟",
      "&not": "¬",
      "&not;": "¬",
      "&notin;": "∉",
      "&notinE;": "⋹̸",
      "&notindot;": "⋵̸",
      "&notinva;": "∉",
      "&notinvb;": "⋷",
      "&notinvc;": "⋶",
      "&notni;": "∌",
      "&notniva;": "∌",
      "&notnivb;": "⋾",
      "&notnivc;": "⋽",
      "&npar;": "∦",
      "&nparallel;": "∦",
      "&nparsl;": "⫽⃥",
      "&npart;": "∂̸",
      "&npolint;": "⨔",
      "&npr;": "⊀",
      "&nprcue;": "⋠",
      "&npre;": "⪯̸",
      "&nprec;": "⊀",
      "&npreceq;": "⪯̸",
      "&nrArr;": "⇏",
      "&nrarr;": "↛",
      "&nrarrc;": "⤳̸",
      "&nrarrw;": "↝̸",
      "&nrightarrow;": "↛",
      "&nrtri;": "⋫",
      "&nrtrie;": "⋭",
      "&nsc;": "⊁",
      "&nsccue;": "⋡",
      "&nsce;": "⪰̸",
      "&nscr;": "𝓃",
      "&nshortmid;": "∤",
      "&nshortparallel;": "∦",
      "&nsim;": "≁",
      "&nsime;": "≄",
      "&nsimeq;": "≄",
      "&nsmid;": "∤",
      "&nspar;": "∦",
      "&nsqsube;": "⋢",
      "&nsqsupe;": "⋣",
      "&nsub;": "⊄",
      "&nsubE;": "⫅̸",
      "&nsube;": "⊈",
      "&nsubset;": "⊂⃒",
      "&nsubseteq;": "⊈",
      "&nsubseteqq;": "⫅̸",
      "&nsucc;": "⊁",
      "&nsucceq;": "⪰̸",
      "&nsup;": "⊅",
      "&nsupE;": "⫆̸",
      "&nsupe;": "⊉",
      "&nsupset;": "⊃⃒",
      "&nsupseteq;": "⊉",
      "&nsupseteqq;": "⫆̸",
      "&ntgl;": "≹",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ntlg;": "≸",
      "&ntriangleleft;": "⋪",
      "&ntrianglelefteq;": "⋬",
      "&ntriangleright;": "⋫",
      "&ntrianglerighteq;": "⋭",
      "&nu;": "ν",
      "&num;": "#",
      "&numero;": "№",
      "&numsp;": " ",
      "&nvDash;": "⊭",
      "&nvHarr;": "⤄",
      "&nvap;": "≍⃒",
      "&nvdash;": "⊬",
      "&nvge;": "≥⃒",
      "&nvgt;": ">⃒",
      "&nvinfin;": "⧞",
      "&nvlArr;": "⤂",
      "&nvle;": "≤⃒",
      "&nvlt;": "<⃒",
      "&nvltrie;": "⊴⃒",
      "&nvrArr;": "⤃",
      "&nvrtrie;": "⊵⃒",
      "&nvsim;": "∼⃒",
      "&nwArr;": "⇖",
      "&nwarhk;": "⤣",
      "&nwarr;": "↖",
      "&nwarrow;": "↖",
      "&nwnear;": "⤧",
      "&oS;": "Ⓢ",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&oast;": "⊛",
      "&ocir;": "⊚",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&ocy;": "о",
      "&odash;": "⊝",
      "&odblac;": "ő",
      "&odiv;": "⨸",
      "&odot;": "⊙",
      "&odsold;": "⦼",
      "&oelig;": "œ",
      "&ofcir;": "⦿",
      "&ofr;": "𝔬",
      "&ogon;": "˛",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&ogt;": "⧁",
      "&ohbar;": "⦵",
      "&ohm;": "Ω",
      "&oint;": "∮",
      "&olarr;": "↺",
      "&olcir;": "⦾",
      "&olcross;": "⦻",
      "&oline;": "‾",
      "&olt;": "⧀",
      "&omacr;": "ō",
      "&omega;": "ω",
      "&omicron;": "ο",
      "&omid;": "⦶",
      "&ominus;": "⊖",
      "&oopf;": "𝕠",
      "&opar;": "⦷",
      "&operp;": "⦹",
      "&oplus;": "⊕",
      "&or;": "∨",
      "&orarr;": "↻",
      "&ord;": "⩝",
      "&order;": "ℴ",
      "&orderof;": "ℴ",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&ordm": "º",
      "&ordm;": "º",
      "&origof;": "⊶",
      "&oror;": "⩖",
      "&orslope;": "⩗",
      "&orv;": "⩛",
      "&oscr;": "ℴ",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&osol;": "⊘",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&otimes;": "⊗",
      "&otimesas;": "⨶",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&ovbar;": "⌽",
      "&par;": "∥",
      "&para": "¶",
      "&para;": "¶",
      "&parallel;": "∥",
      "&parsim;": "⫳",
      "&parsl;": "⫽",
      "&part;": "∂",
      "&pcy;": "п",
      "&percnt;": "%",
      "&period;": ".",
      "&permil;": "‰",
      "&perp;": "⊥",
      "&pertenk;": "‱",
      "&pfr;": "𝔭",
      "&phi;": "φ",
      "&phiv;": "ϕ",
      "&phmmat;": "ℳ",
      "&phone;": "☎",
      "&pi;": "π",
      "&pitchfork;": "⋔",
      "&piv;": "ϖ",
      "&planck;": "ℏ",
      "&planckh;": "ℎ",
      "&plankv;": "ℏ",
      "&plus;": "+",
      "&plusacir;": "⨣",
      "&plusb;": "⊞",
      "&pluscir;": "⨢",
      "&plusdo;": "∔",
      "&plusdu;": "⨥",
      "&pluse;": "⩲",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&plussim;": "⨦",
      "&plustwo;": "⨧",
      "&pm;": "±",
      "&pointint;": "⨕",
      "&popf;": "𝕡",
      "&pound": "£",
      "&pound;": "£",
      "&pr;": "≺",
      "&prE;": "⪳",
      "&prap;": "⪷",
      "&prcue;": "≼",
      "&pre;": "⪯",
      "&prec;": "≺",
      "&precapprox;": "⪷",
      "&preccurlyeq;": "≼",
      "&preceq;": "⪯",
      "&precnapprox;": "⪹",
      "&precneqq;": "⪵",
      "&precnsim;": "⋨",
      "&precsim;": "≾",
      "&prime;": "′",
      "&primes;": "ℙ",
      "&prnE;": "⪵",
      "&prnap;": "⪹",
      "&prnsim;": "⋨",
      "&prod;": "∏",
      "&profalar;": "⌮",
      "&profline;": "⌒",
      "&profsurf;": "⌓",
      "&prop;": "∝",
      "&propto;": "∝",
      "&prsim;": "≾",
      "&prurel;": "⊰",
      "&pscr;": "𝓅",
      "&psi;": "ψ",
      "&puncsp;": " ",
      "&qfr;": "𝔮",
      "&qint;": "⨌",
      "&qopf;": "𝕢",
      "&qprime;": "⁗",
      "&qscr;": "𝓆",
      "&quaternions;": "ℍ",
      "&quatint;": "⨖",
      "&quest;": "?",
      "&questeq;": "≟",
      "&quot": '"',
      "&quot;": '"',
      "&rAarr;": "⇛",
      "&rArr;": "⇒",
      "&rAtail;": "⤜",
      "&rBarr;": "⤏",
      "&rHar;": "⥤",
      "&race;": "∽̱",
      "&racute;": "ŕ",
      "&radic;": "√",
      "&raemptyv;": "⦳",
      "&rang;": "⟩",
      "&rangd;": "⦒",
      "&range;": "⦥",
      "&rangle;": "⟩",
      "&raquo": "»",
      "&raquo;": "»",
      "&rarr;": "→",
      "&rarrap;": "⥵",
      "&rarrb;": "⇥",
      "&rarrbfs;": "⤠",
      "&rarrc;": "⤳",
      "&rarrfs;": "⤞",
      "&rarrhk;": "↪",
      "&rarrlp;": "↬",
      "&rarrpl;": "⥅",
      "&rarrsim;": "⥴",
      "&rarrtl;": "↣",
      "&rarrw;": "↝",
      "&ratail;": "⤚",
      "&ratio;": "∶",
      "&rationals;": "ℚ",
      "&rbarr;": "⤍",
      "&rbbrk;": "❳",
      "&rbrace;": "}",
      "&rbrack;": "]",
      "&rbrke;": "⦌",
      "&rbrksld;": "⦎",
      "&rbrkslu;": "⦐",
      "&rcaron;": "ř",
      "&rcedil;": "ŗ",
      "&rceil;": "⌉",
      "&rcub;": "}",
      "&rcy;": "р",
      "&rdca;": "⤷",
      "&rdldhar;": "⥩",
      "&rdquo;": "”",
      "&rdquor;": "”",
      "&rdsh;": "↳",
      "&real;": "ℜ",
      "&realine;": "ℛ",
      "&realpart;": "ℜ",
      "&reals;": "ℝ",
      "&rect;": "▭",
      "&reg": "®",
      "&reg;": "®",
      "&rfisht;": "⥽",
      "&rfloor;": "⌋",
      "&rfr;": "𝔯",
      "&rhard;": "⇁",
      "&rharu;": "⇀",
      "&rharul;": "⥬",
      "&rho;": "ρ",
      "&rhov;": "ϱ",
      "&rightarrow;": "→",
      "&rightarrowtail;": "↣",
      "&rightharpoondown;": "⇁",
      "&rightharpoonup;": "⇀",
      "&rightleftarrows;": "⇄",
      "&rightleftharpoons;": "⇌",
      "&rightrightarrows;": "⇉",
      "&rightsquigarrow;": "↝",
      "&rightthreetimes;": "⋌",
      "&ring;": "˚",
      "&risingdotseq;": "≓",
      "&rlarr;": "⇄",
      "&rlhar;": "⇌",
      "&rlm;": "‏",
      "&rmoust;": "⎱",
      "&rmoustache;": "⎱",
      "&rnmid;": "⫮",
      "&roang;": "⟭",
      "&roarr;": "⇾",
      "&robrk;": "⟧",
      "&ropar;": "⦆",
      "&ropf;": "𝕣",
      "&roplus;": "⨮",
      "&rotimes;": "⨵",
      "&rpar;": ")",
      "&rpargt;": "⦔",
      "&rppolint;": "⨒",
      "&rrarr;": "⇉",
      "&rsaquo;": "›",
      "&rscr;": "𝓇",
      "&rsh;": "↱",
      "&rsqb;": "]",
      "&rsquo;": "’",
      "&rsquor;": "’",
      "&rthree;": "⋌",
      "&rtimes;": "⋊",
      "&rtri;": "▹",
      "&rtrie;": "⊵",
      "&rtrif;": "▸",
      "&rtriltri;": "⧎",
      "&ruluhar;": "⥨",
      "&rx;": "℞",
      "&sacute;": "ś",
      "&sbquo;": "‚",
      "&sc;": "≻",
      "&scE;": "⪴",
      "&scap;": "⪸",
      "&scaron;": "š",
      "&sccue;": "≽",
      "&sce;": "⪰",
      "&scedil;": "ş",
      "&scirc;": "ŝ",
      "&scnE;": "⪶",
      "&scnap;": "⪺",
      "&scnsim;": "⋩",
      "&scpolint;": "⨓",
      "&scsim;": "≿",
      "&scy;": "с",
      "&sdot;": "⋅",
      "&sdotb;": "⊡",
      "&sdote;": "⩦",
      "&seArr;": "⇘",
      "&searhk;": "⤥",
      "&searr;": "↘",
      "&searrow;": "↘",
      "&sect": "§",
      "&sect;": "§",
      "&semi;": ";",
      "&seswar;": "⤩",
      "&setminus;": "∖",
      "&setmn;": "∖",
      "&sext;": "✶",
      "&sfr;": "𝔰",
      "&sfrown;": "⌢",
      "&sharp;": "♯",
      "&shchcy;": "щ",
      "&shcy;": "ш",
      "&shortmid;": "∣",
      "&shortparallel;": "∥",
      "&shy": "­",
      "&shy;": "­",
      "&sigma;": "σ",
      "&sigmaf;": "ς",
      "&sigmav;": "ς",
      "&sim;": "∼",
      "&simdot;": "⩪",
      "&sime;": "≃",
      "&simeq;": "≃",
      "&simg;": "⪞",
      "&simgE;": "⪠",
      "&siml;": "⪝",
      "&simlE;": "⪟",
      "&simne;": "≆",
      "&simplus;": "⨤",
      "&simrarr;": "⥲",
      "&slarr;": "←",
      "&smallsetminus;": "∖",
      "&smashp;": "⨳",
      "&smeparsl;": "⧤",
      "&smid;": "∣",
      "&smile;": "⌣",
      "&smt;": "⪪",
      "&smte;": "⪬",
      "&smtes;": "⪬︀",
      "&softcy;": "ь",
      "&sol;": "/",
      "&solb;": "⧄",
      "&solbar;": "⌿",
      "&sopf;": "𝕤",
      "&spades;": "♠",
      "&spadesuit;": "♠",
      "&spar;": "∥",
      "&sqcap;": "⊓",
      "&sqcaps;": "⊓︀",
      "&sqcup;": "⊔",
      "&sqcups;": "⊔︀",
      "&sqsub;": "⊏",
      "&sqsube;": "⊑",
      "&sqsubset;": "⊏",
      "&sqsubseteq;": "⊑",
      "&sqsup;": "⊐",
      "&sqsupe;": "⊒",
      "&sqsupset;": "⊐",
      "&sqsupseteq;": "⊒",
      "&squ;": "□",
      "&square;": "□",
      "&squarf;": "▪",
      "&squf;": "▪",
      "&srarr;": "→",
      "&sscr;": "𝓈",
      "&ssetmn;": "∖",
      "&ssmile;": "⌣",
      "&sstarf;": "⋆",
      "&star;": "☆",
      "&starf;": "★",
      "&straightepsilon;": "ϵ",
      "&straightphi;": "ϕ",
      "&strns;": "¯",
      "&sub;": "⊂",
      "&subE;": "⫅",
      "&subdot;": "⪽",
      "&sube;": "⊆",
      "&subedot;": "⫃",
      "&submult;": "⫁",
      "&subnE;": "⫋",
      "&subne;": "⊊",
      "&subplus;": "⪿",
      "&subrarr;": "⥹",
      "&subset;": "⊂",
      "&subseteq;": "⊆",
      "&subseteqq;": "⫅",
      "&subsetneq;": "⊊",
      "&subsetneqq;": "⫋",
      "&subsim;": "⫇",
      "&subsub;": "⫕",
      "&subsup;": "⫓",
      "&succ;": "≻",
      "&succapprox;": "⪸",
      "&succcurlyeq;": "≽",
      "&succeq;": "⪰",
      "&succnapprox;": "⪺",
      "&succneqq;": "⪶",
      "&succnsim;": "⋩",
      "&succsim;": "≿",
      "&sum;": "∑",
      "&sung;": "♪",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&sup;": "⊃",
      "&supE;": "⫆",
      "&supdot;": "⪾",
      "&supdsub;": "⫘",
      "&supe;": "⊇",
      "&supedot;": "⫄",
      "&suphsol;": "⟉",
      "&suphsub;": "⫗",
      "&suplarr;": "⥻",
      "&supmult;": "⫂",
      "&supnE;": "⫌",
      "&supne;": "⊋",
      "&supplus;": "⫀",
      "&supset;": "⊃",
      "&supseteq;": "⊇",
      "&supseteqq;": "⫆",
      "&supsetneq;": "⊋",
      "&supsetneqq;": "⫌",
      "&supsim;": "⫈",
      "&supsub;": "⫔",
      "&supsup;": "⫖",
      "&swArr;": "⇙",
      "&swarhk;": "⤦",
      "&swarr;": "↙",
      "&swarrow;": "↙",
      "&swnwar;": "⤪",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&target;": "⌖",
      "&tau;": "τ",
      "&tbrk;": "⎴",
      "&tcaron;": "ť",
      "&tcedil;": "ţ",
      "&tcy;": "т",
      "&tdot;": "⃛",
      "&telrec;": "⌕",
      "&tfr;": "𝔱",
      "&there4;": "∴",
      "&therefore;": "∴",
      "&theta;": "θ",
      "&thetasym;": "ϑ",
      "&thetav;": "ϑ",
      "&thickapprox;": "≈",
      "&thicksim;": "∼",
      "&thinsp;": " ",
      "&thkap;": "≈",
      "&thksim;": "∼",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&tilde;": "˜",
      "&times": "×",
      "&times;": "×",
      "&timesb;": "⊠",
      "&timesbar;": "⨱",
      "&timesd;": "⨰",
      "&tint;": "∭",
      "&toea;": "⤨",
      "&top;": "⊤",
      "&topbot;": "⌶",
      "&topcir;": "⫱",
      "&topf;": "𝕥",
      "&topfork;": "⫚",
      "&tosa;": "⤩",
      "&tprime;": "‴",
      "&trade;": "™",
      "&triangle;": "▵",
      "&triangledown;": "▿",
      "&triangleleft;": "◃",
      "&trianglelefteq;": "⊴",
      "&triangleq;": "≜",
      "&triangleright;": "▹",
      "&trianglerighteq;": "⊵",
      "&tridot;": "◬",
      "&trie;": "≜",
      "&triminus;": "⨺",
      "&triplus;": "⨹",
      "&trisb;": "⧍",
      "&tritime;": "⨻",
      "&trpezium;": "⏢",
      "&tscr;": "𝓉",
      "&tscy;": "ц",
      "&tshcy;": "ћ",
      "&tstrok;": "ŧ",
      "&twixt;": "≬",
      "&twoheadleftarrow;": "↞",
      "&twoheadrightarrow;": "↠",
      "&uArr;": "⇑",
      "&uHar;": "⥣",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&uarr;": "↑",
      "&ubrcy;": "ў",
      "&ubreve;": "ŭ",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&ucy;": "у",
      "&udarr;": "⇅",
      "&udblac;": "ű",
      "&udhar;": "⥮",
      "&ufisht;": "⥾",
      "&ufr;": "𝔲",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uharl;": "↿",
      "&uharr;": "↾",
      "&uhblk;": "▀",
      "&ulcorn;": "⌜",
      "&ulcorner;": "⌜",
      "&ulcrop;": "⌏",
      "&ultri;": "◸",
      "&umacr;": "ū",
      "&uml": "¨",
      "&uml;": "¨",
      "&uogon;": "ų",
      "&uopf;": "𝕦",
      "&uparrow;": "↑",
      "&updownarrow;": "↕",
      "&upharpoonleft;": "↿",
      "&upharpoonright;": "↾",
      "&uplus;": "⊎",
      "&upsi;": "υ",
      "&upsih;": "ϒ",
      "&upsilon;": "υ",
      "&upuparrows;": "⇈",
      "&urcorn;": "⌝",
      "&urcorner;": "⌝",
      "&urcrop;": "⌎",
      "&uring;": "ů",
      "&urtri;": "◹",
      "&uscr;": "𝓊",
      "&utdot;": "⋰",
      "&utilde;": "ũ",
      "&utri;": "▵",
      "&utrif;": "▴",
      "&uuarr;": "⇈",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&uwangle;": "⦧",
      "&vArr;": "⇕",
      "&vBar;": "⫨",
      "&vBarv;": "⫩",
      "&vDash;": "⊨",
      "&vangrt;": "⦜",
      "&varepsilon;": "ϵ",
      "&varkappa;": "ϰ",
      "&varnothing;": "∅",
      "&varphi;": "ϕ",
      "&varpi;": "ϖ",
      "&varpropto;": "∝",
      "&varr;": "↕",
      "&varrho;": "ϱ",
      "&varsigma;": "ς",
      "&varsubsetneq;": "⊊︀",
      "&varsubsetneqq;": "⫋︀",
      "&varsupsetneq;": "⊋︀",
      "&varsupsetneqq;": "⫌︀",
      "&vartheta;": "ϑ",
      "&vartriangleleft;": "⊲",
      "&vartriangleright;": "⊳",
      "&vcy;": "в",
      "&vdash;": "⊢",
      "&vee;": "∨",
      "&veebar;": "⊻",
      "&veeeq;": "≚",
      "&vellip;": "⋮",
      "&verbar;": "|",
      "&vert;": "|",
      "&vfr;": "𝔳",
      "&vltri;": "⊲",
      "&vnsub;": "⊂⃒",
      "&vnsup;": "⊃⃒",
      "&vopf;": "𝕧",
      "&vprop;": "∝",
      "&vrtri;": "⊳",
      "&vscr;": "𝓋",
      "&vsubnE;": "⫋︀",
      "&vsubne;": "⊊︀",
      "&vsupnE;": "⫌︀",
      "&vsupne;": "⊋︀",
      "&vzigzag;": "⦚",
      "&wcirc;": "ŵ",
      "&wedbar;": "⩟",
      "&wedge;": "∧",
      "&wedgeq;": "≙",
      "&weierp;": "℘",
      "&wfr;": "𝔴",
      "&wopf;": "𝕨",
      "&wp;": "℘",
      "&wr;": "≀",
      "&wreath;": "≀",
      "&wscr;": "𝓌",
      "&xcap;": "⋂",
      "&xcirc;": "◯",
      "&xcup;": "⋃",
      "&xdtri;": "▽",
      "&xfr;": "𝔵",
      "&xhArr;": "⟺",
      "&xharr;": "⟷",
      "&xi;": "ξ",
      "&xlArr;": "⟸",
      "&xlarr;": "⟵",
      "&xmap;": "⟼",
      "&xnis;": "⋻",
      "&xodot;": "⨀",
      "&xopf;": "𝕩",
      "&xoplus;": "⨁",
      "&xotime;": "⨂",
      "&xrArr;": "⟹",
      "&xrarr;": "⟶",
      "&xscr;": "𝓍",
      "&xsqcup;": "⨆",
      "&xuplus;": "⨄",
      "&xutri;": "△",
      "&xvee;": "⋁",
      "&xwedge;": "⋀",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&yacy;": "я",
      "&ycirc;": "ŷ",
      "&ycy;": "ы",
      "&yen": "¥",
      "&yen;": "¥",
      "&yfr;": "𝔶",
      "&yicy;": "ї",
      "&yopf;": "𝕪",
      "&yscr;": "𝓎",
      "&yucy;": "ю",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&zacute;": "ź",
      "&zcaron;": "ž",
      "&zcy;": "з",
      "&zdot;": "ż",
      "&zeetrf;": "ℨ",
      "&zeta;": "ζ",
      "&zfr;": "𝔷",
      "&zhcy;": "ж",
      "&zigrarr;": "⇝",
      "&zopf;": "𝕫",
      "&zscr;": "𝓏",
      "&zwj;": "‍",
      "&zwnj;": "‌"
    },
    characters: {
      "Æ": "&AElig;",
      "&": "&amp;",
      "Á": "&Aacute;",
      "Ă": "&Abreve;",
      "Â": "&Acirc;",
      "А": "&Acy;",
      "𝔄": "&Afr;",
      "À": "&Agrave;",
      "Α": "&Alpha;",
      "Ā": "&Amacr;",
      "⩓": "&And;",
      "Ą": "&Aogon;",
      "𝔸": "&Aopf;",
      "⁡": "&af;",
      "Å": "&angst;",
      "𝒜": "&Ascr;",
      "≔": "&coloneq;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "∖": "&ssetmn;",
      "⫧": "&Barv;",
      "⌆": "&doublebarwedge;",
      "Б": "&Bcy;",
      "∵": "&because;",
      "ℬ": "&bernou;",
      "Β": "&Beta;",
      "𝔅": "&Bfr;",
      "𝔹": "&Bopf;",
      "˘": "&breve;",
      "≎": "&bump;",
      "Ч": "&CHcy;",
      "©": "&copy;",
      "Ć": "&Cacute;",
      "⋒": "&Cap;",
      "ⅅ": "&DD;",
      "ℭ": "&Cfr;",
      "Č": "&Ccaron;",
      "Ç": "&Ccedil;",
      "Ĉ": "&Ccirc;",
      "∰": "&Cconint;",
      "Ċ": "&Cdot;",
      "¸": "&cedil;",
      "·": "&middot;",
      "Χ": "&Chi;",
      "⊙": "&odot;",
      "⊖": "&ominus;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "∲": "&cwconint;",
      "”": "&rdquor;",
      "’": "&rsquor;",
      "∷": "&Proportion;",
      "⩴": "&Colone;",
      "≡": "&equiv;",
      "∯": "&DoubleContourIntegral;",
      "∮": "&oint;",
      "ℂ": "&complexes;",
      "∐": "&coprod;",
      "∳": "&awconint;",
      "⨯": "&Cross;",
      "𝒞": "&Cscr;",
      "⋓": "&Cup;",
      "≍": "&asympeq;",
      "⤑": "&DDotrahd;",
      "Ђ": "&DJcy;",
      "Ѕ": "&DScy;",
      "Џ": "&DZcy;",
      "‡": "&ddagger;",
      "↡": "&Darr;",
      "⫤": "&DoubleLeftTee;",
      "Ď": "&Dcaron;",
      "Д": "&Dcy;",
      "∇": "&nabla;",
      "Δ": "&Delta;",
      "𝔇": "&Dfr;",
      "´": "&acute;",
      "˙": "&dot;",
      "˝": "&dblac;",
      "`": "&grave;",
      "˜": "&tilde;",
      "⋄": "&diamond;",
      "ⅆ": "&dd;",
      "𝔻": "&Dopf;",
      "¨": "&uml;",
      "⃜": "&DotDot;",
      "≐": "&esdot;",
      "⇓": "&dArr;",
      "⇐": "&lArr;",
      "⇔": "&iff;",
      "⟸": "&xlArr;",
      "⟺": "&xhArr;",
      "⟹": "&xrArr;",
      "⇒": "&rArr;",
      "⊨": "&vDash;",
      "⇑": "&uArr;",
      "⇕": "&vArr;",
      "∥": "&spar;",
      "↓": "&downarrow;",
      "⤓": "&DownArrowBar;",
      "⇵": "&duarr;",
      "̑": "&DownBreve;",
      "⥐": "&DownLeftRightVector;",
      "⥞": "&DownLeftTeeVector;",
      "↽": "&lhard;",
      "⥖": "&DownLeftVectorBar;",
      "⥟": "&DownRightTeeVector;",
      "⇁": "&rightharpoondown;",
      "⥗": "&DownRightVectorBar;",
      "⊤": "&top;",
      "↧": "&mapstodown;",
      "𝒟": "&Dscr;",
      "Đ": "&Dstrok;",
      "Ŋ": "&ENG;",
      "Ð": "&ETH;",
      "É": "&Eacute;",
      "Ě": "&Ecaron;",
      "Ê": "&Ecirc;",
      "Э": "&Ecy;",
      "Ė": "&Edot;",
      "𝔈": "&Efr;",
      "È": "&Egrave;",
      "∈": "&isinv;",
      "Ē": "&Emacr;",
      "◻": "&EmptySmallSquare;",
      "▫": "&EmptyVerySmallSquare;",
      "Ę": "&Eogon;",
      "𝔼": "&Eopf;",
      "Ε": "&Epsilon;",
      "⩵": "&Equal;",
      "≂": "&esim;",
      "⇌": "&rlhar;",
      "ℰ": "&expectation;",
      "⩳": "&Esim;",
      "Η": "&Eta;",
      "Ë": "&Euml;",
      "∃": "&exist;",
      "ⅇ": "&exponentiale;",
      "Ф": "&Fcy;",
      "𝔉": "&Ffr;",
      "◼": "&FilledSmallSquare;",
      "▪": "&squf;",
      "𝔽": "&Fopf;",
      "∀": "&forall;",
      "ℱ": "&Fscr;",
      "Ѓ": "&GJcy;",
      ">": "&gt;",
      "Γ": "&Gamma;",
      "Ϝ": "&Gammad;",
      "Ğ": "&Gbreve;",
      "Ģ": "&Gcedil;",
      "Ĝ": "&Gcirc;",
      "Г": "&Gcy;",
      "Ġ": "&Gdot;",
      "𝔊": "&Gfr;",
      "⋙": "&ggg;",
      "𝔾": "&Gopf;",
      "≥": "&geq;",
      "⋛": "&gtreqless;",
      "≧": "&geqq;",
      "⪢": "&GreaterGreater;",
      "≷": "&gtrless;",
      "⩾": "&ges;",
      "≳": "&gtrsim;",
      "𝒢": "&Gscr;",
      "≫": "&gg;",
      "Ъ": "&HARDcy;",
      "ˇ": "&caron;",
      "^": "&Hat;",
      "Ĥ": "&Hcirc;",
      "ℌ": "&Poincareplane;",
      "ℋ": "&hamilt;",
      "ℍ": "&quaternions;",
      "─": "&boxh;",
      "Ħ": "&Hstrok;",
      "≏": "&bumpeq;",
      "Е": "&IEcy;",
      "Ĳ": "&IJlig;",
      "Ё": "&IOcy;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "И": "&Icy;",
      "İ": "&Idot;",
      "ℑ": "&imagpart;",
      "Ì": "&Igrave;",
      "Ī": "&Imacr;",
      "ⅈ": "&ii;",
      "∬": "&Int;",
      "∫": "&int;",
      "⋂": "&xcap;",
      "⁣": "&ic;",
      "⁢": "&it;",
      "Į": "&Iogon;",
      "𝕀": "&Iopf;",
      "Ι": "&Iota;",
      "ℐ": "&imagline;",
      "Ĩ": "&Itilde;",
      "І": "&Iukcy;",
      "Ï": "&Iuml;",
      "Ĵ": "&Jcirc;",
      "Й": "&Jcy;",
      "𝔍": "&Jfr;",
      "𝕁": "&Jopf;",
      "𝒥": "&Jscr;",
      "Ј": "&Jsercy;",
      "Є": "&Jukcy;",
      "Х": "&KHcy;",
      "Ќ": "&KJcy;",
      "Κ": "&Kappa;",
      "Ķ": "&Kcedil;",
      "К": "&Kcy;",
      "𝔎": "&Kfr;",
      "𝕂": "&Kopf;",
      "𝒦": "&Kscr;",
      "Љ": "&LJcy;",
      "<": "&lt;",
      "Ĺ": "&Lacute;",
      "Λ": "&Lambda;",
      "⟪": "&Lang;",
      "ℒ": "&lagran;",
      "↞": "&twoheadleftarrow;",
      "Ľ": "&Lcaron;",
      "Ļ": "&Lcedil;",
      "Л": "&Lcy;",
      "⟨": "&langle;",
      "←": "&slarr;",
      "⇤": "&larrb;",
      "⇆": "&lrarr;",
      "⌈": "&lceil;",
      "⟦": "&lobrk;",
      "⥡": "&LeftDownTeeVector;",
      "⇃": "&downharpoonleft;",
      "⥙": "&LeftDownVectorBar;",
      "⌊": "&lfloor;",
      "↔": "&leftrightarrow;",
      "⥎": "&LeftRightVector;",
      "⊣": "&dashv;",
      "↤": "&mapstoleft;",
      "⥚": "&LeftTeeVector;",
      "⊲": "&vltri;",
      "⧏": "&LeftTriangleBar;",
      "⊴": "&trianglelefteq;",
      "⥑": "&LeftUpDownVector;",
      "⥠": "&LeftUpTeeVector;",
      "↿": "&upharpoonleft;",
      "⥘": "&LeftUpVectorBar;",
      "↼": "&lharu;",
      "⥒": "&LeftVectorBar;",
      "⋚": "&lesseqgtr;",
      "≦": "&leqq;",
      "≶": "&lg;",
      "⪡": "&LessLess;",
      "⩽": "&les;",
      "≲": "&lsim;",
      "𝔏": "&Lfr;",
      "⋘": "&Ll;",
      "⇚": "&lAarr;",
      "Ŀ": "&Lmidot;",
      "⟵": "&xlarr;",
      "⟷": "&xharr;",
      "⟶": "&xrarr;",
      "𝕃": "&Lopf;",
      "↙": "&swarrow;",
      "↘": "&searrow;",
      "↰": "&lsh;",
      "Ł": "&Lstrok;",
      "≪": "&ll;",
      "⤅": "&Map;",
      "М": "&Mcy;",
      " ": "&MediumSpace;",
      "ℳ": "&phmmat;",
      "𝔐": "&Mfr;",
      "∓": "&mp;",
      "𝕄": "&Mopf;",
      "Μ": "&Mu;",
      "Њ": "&NJcy;",
      "Ń": "&Nacute;",
      "Ň": "&Ncaron;",
      "Ņ": "&Ncedil;",
      "Н": "&Ncy;",
      "​": "&ZeroWidthSpace;",
      "\n": "&NewLine;",
      "𝔑": "&Nfr;",
      "⁠": "&NoBreak;",
      " ": "&nbsp;",
      "ℕ": "&naturals;",
      "⫬": "&Not;",
      "≢": "&nequiv;",
      "≭": "&NotCupCap;",
      "∦": "&nspar;",
      "∉": "&notinva;",
      "≠": "&ne;",
      "≂̸": "&nesim;",
      "∄": "&nexists;",
      "≯": "&ngtr;",
      "≱": "&ngeq;",
      "≧̸": "&ngeqq;",
      "≫̸": "&nGtv;",
      "≹": "&ntgl;",
      "⩾̸": "&nges;",
      "≵": "&ngsim;",
      "≎̸": "&nbump;",
      "≏̸": "&nbumpe;",
      "⋪": "&ntriangleleft;",
      "⧏̸": "&NotLeftTriangleBar;",
      "⋬": "&ntrianglelefteq;",
      "≮": "&nlt;",
      "≰": "&nleq;",
      "≸": "&ntlg;",
      "≪̸": "&nLtv;",
      "⩽̸": "&nles;",
      "≴": "&nlsim;",
      "⪢̸": "&NotNestedGreaterGreater;",
      "⪡̸": "&NotNestedLessLess;",
      "⊀": "&nprec;",
      "⪯̸": "&npreceq;",
      "⋠": "&nprcue;",
      "∌": "&notniva;",
      "⋫": "&ntriangleright;",
      "⧐̸": "&NotRightTriangleBar;",
      "⋭": "&ntrianglerighteq;",
      "⊏̸": "&NotSquareSubset;",
      "⋢": "&nsqsube;",
      "⊐̸": "&NotSquareSuperset;",
      "⋣": "&nsqsupe;",
      "⊂⃒": "&vnsub;",
      "⊈": "&nsubseteq;",
      "⊁": "&nsucc;",
      "⪰̸": "&nsucceq;",
      "⋡": "&nsccue;",
      "≿̸": "&NotSucceedsTilde;",
      "⊃⃒": "&vnsup;",
      "⊉": "&nsupseteq;",
      "≁": "&nsim;",
      "≄": "&nsimeq;",
      "≇": "&ncong;",
      "≉": "&napprox;",
      "∤": "&nsmid;",
      "𝒩": "&Nscr;",
      "Ñ": "&Ntilde;",
      "Ν": "&Nu;",
      "Œ": "&OElig;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "О": "&Ocy;",
      "Ő": "&Odblac;",
      "𝔒": "&Ofr;",
      "Ò": "&Ograve;",
      "Ō": "&Omacr;",
      "Ω": "&ohm;",
      "Ο": "&Omicron;",
      "𝕆": "&Oopf;",
      "“": "&ldquo;",
      "‘": "&lsquo;",
      "⩔": "&Or;",
      "𝒪": "&Oscr;",
      "Ø": "&Oslash;",
      "Õ": "&Otilde;",
      "⨷": "&Otimes;",
      "Ö": "&Ouml;",
      "‾": "&oline;",
      "⏞": "&OverBrace;",
      "⎴": "&tbrk;",
      "⏜": "&OverParenthesis;",
      "∂": "&part;",
      "П": "&Pcy;",
      "𝔓": "&Pfr;",
      "Φ": "&Phi;",
      "Π": "&Pi;",
      "±": "&pm;",
      "ℙ": "&primes;",
      "⪻": "&Pr;",
      "≺": "&prec;",
      "⪯": "&preceq;",
      "≼": "&preccurlyeq;",
      "≾": "&prsim;",
      "″": "&Prime;",
      "∏": "&prod;",
      "∝": "&vprop;",
      "𝒫": "&Pscr;",
      "Ψ": "&Psi;",
      '"': "&quot;",
      "𝔔": "&Qfr;",
      "ℚ": "&rationals;",
      "𝒬": "&Qscr;",
      "⤐": "&drbkarow;",
      "®": "&reg;",
      "Ŕ": "&Racute;",
      "⟫": "&Rang;",
      "↠": "&twoheadrightarrow;",
      "⤖": "&Rarrtl;",
      "Ř": "&Rcaron;",
      "Ŗ": "&Rcedil;",
      "Р": "&Rcy;",
      "ℜ": "&realpart;",
      "∋": "&niv;",
      "⇋": "&lrhar;",
      "⥯": "&duhar;",
      "Ρ": "&Rho;",
      "⟩": "&rangle;",
      "→": "&srarr;",
      "⇥": "&rarrb;",
      "⇄": "&rlarr;",
      "⌉": "&rceil;",
      "⟧": "&robrk;",
      "⥝": "&RightDownTeeVector;",
      "⇂": "&downharpoonright;",
      "⥕": "&RightDownVectorBar;",
      "⌋": "&rfloor;",
      "⊢": "&vdash;",
      "↦": "&mapsto;",
      "⥛": "&RightTeeVector;",
      "⊳": "&vrtri;",
      "⧐": "&RightTriangleBar;",
      "⊵": "&trianglerighteq;",
      "⥏": "&RightUpDownVector;",
      "⥜": "&RightUpTeeVector;",
      "↾": "&upharpoonright;",
      "⥔": "&RightUpVectorBar;",
      "⇀": "&rightharpoonup;",
      "⥓": "&RightVectorBar;",
      "ℝ": "&reals;",
      "⥰": "&RoundImplies;",
      "⇛": "&rAarr;",
      "ℛ": "&realine;",
      "↱": "&rsh;",
      "⧴": "&RuleDelayed;",
      "Щ": "&SHCHcy;",
      "Ш": "&SHcy;",
      "Ь": "&SOFTcy;",
      "Ś": "&Sacute;",
      "⪼": "&Sc;",
      "Š": "&Scaron;",
      "Ş": "&Scedil;",
      "Ŝ": "&Scirc;",
      "С": "&Scy;",
      "𝔖": "&Sfr;",
      "↑": "&uparrow;",
      "Σ": "&Sigma;",
      "∘": "&compfn;",
      "𝕊": "&Sopf;",
      "√": "&radic;",
      "□": "&square;",
      "⊓": "&sqcap;",
      "⊏": "&sqsubset;",
      "⊑": "&sqsubseteq;",
      "⊐": "&sqsupset;",
      "⊒": "&sqsupseteq;",
      "⊔": "&sqcup;",
      "𝒮": "&Sscr;",
      "⋆": "&sstarf;",
      "⋐": "&Subset;",
      "⊆": "&subseteq;",
      "≻": "&succ;",
      "⪰": "&succeq;",
      "≽": "&succcurlyeq;",
      "≿": "&succsim;",
      "∑": "&sum;",
      "⋑": "&Supset;",
      "⊃": "&supset;",
      "⊇": "&supseteq;",
      "Þ": "&THORN;",
      "™": "&trade;",
      "Ћ": "&TSHcy;",
      "Ц": "&TScy;",
      "\t": "&Tab;",
      "Τ": "&Tau;",
      "Ť": "&Tcaron;",
      "Ţ": "&Tcedil;",
      "Т": "&Tcy;",
      "𝔗": "&Tfr;",
      "∴": "&therefore;",
      "Θ": "&Theta;",
      "  ": "&ThickSpace;",
      " ": "&thinsp;",
      "∼": "&thksim;",
      "≃": "&simeq;",
      "≅": "&cong;",
      "≈": "&thkap;",
      "𝕋": "&Topf;",
      "⃛": "&tdot;",
      "𝒯": "&Tscr;",
      "Ŧ": "&Tstrok;",
      "Ú": "&Uacute;",
      "↟": "&Uarr;",
      "⥉": "&Uarrocir;",
      "Ў": "&Ubrcy;",
      "Ŭ": "&Ubreve;",
      "Û": "&Ucirc;",
      "У": "&Ucy;",
      "Ű": "&Udblac;",
      "𝔘": "&Ufr;",
      "Ù": "&Ugrave;",
      "Ū": "&Umacr;",
      _: "&lowbar;",
      "⏟": "&UnderBrace;",
      "⎵": "&bbrk;",
      "⏝": "&UnderParenthesis;",
      "⋃": "&xcup;",
      "⊎": "&uplus;",
      "Ų": "&Uogon;",
      "𝕌": "&Uopf;",
      "⤒": "&UpArrowBar;",
      "⇅": "&udarr;",
      "↕": "&varr;",
      "⥮": "&udhar;",
      "⊥": "&perp;",
      "↥": "&mapstoup;",
      "↖": "&nwarrow;",
      "↗": "&nearrow;",
      "ϒ": "&upsih;",
      "Υ": "&Upsilon;",
      "Ů": "&Uring;",
      "𝒰": "&Uscr;",
      "Ũ": "&Utilde;",
      "Ü": "&Uuml;",
      "⊫": "&VDash;",
      "⫫": "&Vbar;",
      "В": "&Vcy;",
      "⊩": "&Vdash;",
      "⫦": "&Vdashl;",
      "⋁": "&xvee;",
      "‖": "&Vert;",
      "∣": "&smid;",
      "|": "&vert;",
      "❘": "&VerticalSeparator;",
      "≀": "&wreath;",
      " ": "&hairsp;",
      "𝔙": "&Vfr;",
      "𝕍": "&Vopf;",
      "𝒱": "&Vscr;",
      "⊪": "&Vvdash;",
      "Ŵ": "&Wcirc;",
      "⋀": "&xwedge;",
      "𝔚": "&Wfr;",
      "𝕎": "&Wopf;",
      "𝒲": "&Wscr;",
      "𝔛": "&Xfr;",
      "Ξ": "&Xi;",
      "𝕏": "&Xopf;",
      "𝒳": "&Xscr;",
      "Я": "&YAcy;",
      "Ї": "&YIcy;",
      "Ю": "&YUcy;",
      "Ý": "&Yacute;",
      "Ŷ": "&Ycirc;",
      "Ы": "&Ycy;",
      "𝔜": "&Yfr;",
      "𝕐": "&Yopf;",
      "𝒴": "&Yscr;",
      "Ÿ": "&Yuml;",
      "Ж": "&ZHcy;",
      "Ź": "&Zacute;",
      "Ž": "&Zcaron;",
      "З": "&Zcy;",
      "Ż": "&Zdot;",
      "Ζ": "&Zeta;",
      "ℨ": "&zeetrf;",
      "ℤ": "&integers;",
      "𝒵": "&Zscr;",
      "á": "&aacute;",
      "ă": "&abreve;",
      "∾": "&mstpos;",
      "∾̳": "&acE;",
      "∿": "&acd;",
      "â": "&acirc;",
      "а": "&acy;",
      "æ": "&aelig;",
      "𝔞": "&afr;",
      "à": "&agrave;",
      "ℵ": "&aleph;",
      "α": "&alpha;",
      "ā": "&amacr;",
      "⨿": "&amalg;",
      "∧": "&wedge;",
      "⩕": "&andand;",
      "⩜": "&andd;",
      "⩘": "&andslope;",
      "⩚": "&andv;",
      "∠": "&angle;",
      "⦤": "&ange;",
      "∡": "&measuredangle;",
      "⦨": "&angmsdaa;",
      "⦩": "&angmsdab;",
      "⦪": "&angmsdac;",
      "⦫": "&angmsdad;",
      "⦬": "&angmsdae;",
      "⦭": "&angmsdaf;",
      "⦮": "&angmsdag;",
      "⦯": "&angmsdah;",
      "∟": "&angrt;",
      "⊾": "&angrtvb;",
      "⦝": "&angrtvbd;",
      "∢": "&angsph;",
      "⍼": "&angzarr;",
      "ą": "&aogon;",
      "𝕒": "&aopf;",
      "⩰": "&apE;",
      "⩯": "&apacir;",
      "≊": "&approxeq;",
      "≋": "&apid;",
      "'": "&apos;",
      "å": "&aring;",
      "𝒶": "&ascr;",
      "*": "&midast;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "⨑": "&awint;",
      "⫭": "&bNot;",
      "≌": "&bcong;",
      "϶": "&bepsi;",
      "‵": "&bprime;",
      "∽": "&bsim;",
      "⋍": "&bsime;",
      "⊽": "&barvee;",
      "⌅": "&barwedge;",
      "⎶": "&bbrktbrk;",
      "б": "&bcy;",
      "„": "&ldquor;",
      "⦰": "&bemptyv;",
      "β": "&beta;",
      "ℶ": "&beth;",
      "≬": "&twixt;",
      "𝔟": "&bfr;",
      "◯": "&xcirc;",
      "⨀": "&xodot;",
      "⨁": "&xoplus;",
      "⨂": "&xotime;",
      "⨆": "&xsqcup;",
      "★": "&starf;",
      "▽": "&xdtri;",
      "△": "&xutri;",
      "⨄": "&xuplus;",
      "⤍": "&rbarr;",
      "⧫": "&lozf;",
      "▴": "&utrif;",
      "▾": "&dtrif;",
      "◂": "&ltrif;",
      "▸": "&rtrif;",
      "␣": "&blank;",
      "▒": "&blk12;",
      "░": "&blk14;",
      "▓": "&blk34;",
      "█": "&block;",
      "=⃥": "&bne;",
      "≡⃥": "&bnequiv;",
      "⌐": "&bnot;",
      "𝕓": "&bopf;",
      "⋈": "&bowtie;",
      "╗": "&boxDL;",
      "╔": "&boxDR;",
      "╖": "&boxDl;",
      "╓": "&boxDr;",
      "═": "&boxH;",
      "╦": "&boxHD;",
      "╩": "&boxHU;",
      "╤": "&boxHd;",
      "╧": "&boxHu;",
      "╝": "&boxUL;",
      "╚": "&boxUR;",
      "╜": "&boxUl;",
      "╙": "&boxUr;",
      "║": "&boxV;",
      "╬": "&boxVH;",
      "╣": "&boxVL;",
      "╠": "&boxVR;",
      "╫": "&boxVh;",
      "╢": "&boxVl;",
      "╟": "&boxVr;",
      "⧉": "&boxbox;",
      "╕": "&boxdL;",
      "╒": "&boxdR;",
      "┐": "&boxdl;",
      "┌": "&boxdr;",
      "╥": "&boxhD;",
      "╨": "&boxhU;",
      "┬": "&boxhd;",
      "┴": "&boxhu;",
      "⊟": "&minusb;",
      "⊞": "&plusb;",
      "⊠": "&timesb;",
      "╛": "&boxuL;",
      "╘": "&boxuR;",
      "┘": "&boxul;",
      "└": "&boxur;",
      "│": "&boxv;",
      "╪": "&boxvH;",
      "╡": "&boxvL;",
      "╞": "&boxvR;",
      "┼": "&boxvh;",
      "┤": "&boxvl;",
      "├": "&boxvr;",
      "¦": "&brvbar;",
      "𝒷": "&bscr;",
      "⁏": "&bsemi;",
      "\\": "&bsol;",
      "⧅": "&bsolb;",
      "⟈": "&bsolhsub;",
      "•": "&bullet;",
      "⪮": "&bumpE;",
      "ć": "&cacute;",
      "∩": "&cap;",
      "⩄": "&capand;",
      "⩉": "&capbrcup;",
      "⩋": "&capcap;",
      "⩇": "&capcup;",
      "⩀": "&capdot;",
      "∩︀": "&caps;",
      "⁁": "&caret;",
      "⩍": "&ccaps;",
      "č": "&ccaron;",
      "ç": "&ccedil;",
      "ĉ": "&ccirc;",
      "⩌": "&ccups;",
      "⩐": "&ccupssm;",
      "ċ": "&cdot;",
      "⦲": "&cemptyv;",
      "¢": "&cent;",
      "𝔠": "&cfr;",
      "ч": "&chcy;",
      "✓": "&checkmark;",
      "χ": "&chi;",
      "○": "&cir;",
      "⧃": "&cirE;",
      "ˆ": "&circ;",
      "≗": "&cire;",
      "↺": "&olarr;",
      "↻": "&orarr;",
      "Ⓢ": "&oS;",
      "⊛": "&oast;",
      "⊚": "&ocir;",
      "⊝": "&odash;",
      "⨐": "&cirfnint;",
      "⫯": "&cirmid;",
      "⧂": "&cirscir;",
      "♣": "&clubsuit;",
      ":": "&colon;",
      ",": "&comma;",
      "@": "&commat;",
      "∁": "&complement;",
      "⩭": "&congdot;",
      "𝕔": "&copf;",
      "℗": "&copysr;",
      "↵": "&crarr;",
      "✗": "&cross;",
      "𝒸": "&cscr;",
      "⫏": "&csub;",
      "⫑": "&csube;",
      "⫐": "&csup;",
      "⫒": "&csupe;",
      "⋯": "&ctdot;",
      "⤸": "&cudarrl;",
      "⤵": "&cudarrr;",
      "⋞": "&curlyeqprec;",
      "⋟": "&curlyeqsucc;",
      "↶": "&curvearrowleft;",
      "⤽": "&cularrp;",
      "∪": "&cup;",
      "⩈": "&cupbrcap;",
      "⩆": "&cupcap;",
      "⩊": "&cupcup;",
      "⊍": "&cupdot;",
      "⩅": "&cupor;",
      "∪︀": "&cups;",
      "↷": "&curvearrowright;",
      "⤼": "&curarrm;",
      "⋎": "&cuvee;",
      "⋏": "&cuwed;",
      "¤": "&curren;",
      "∱": "&cwint;",
      "⌭": "&cylcty;",
      "⥥": "&dHar;",
      "†": "&dagger;",
      "ℸ": "&daleth;",
      "‐": "&hyphen;",
      "⤏": "&rBarr;",
      "ď": "&dcaron;",
      "д": "&dcy;",
      "⇊": "&downdownarrows;",
      "⩷": "&eDDot;",
      "°": "&deg;",
      "δ": "&delta;",
      "⦱": "&demptyv;",
      "⥿": "&dfisht;",
      "𝔡": "&dfr;",
      "♦": "&diams;",
      "ϝ": "&gammad;",
      "⋲": "&disin;",
      "÷": "&divide;",
      "⋇": "&divonx;",
      "ђ": "&djcy;",
      "⌞": "&llcorner;",
      "⌍": "&dlcrop;",
      $: "&dollar;",
      "𝕕": "&dopf;",
      "≑": "&eDot;",
      "∸": "&minusd;",
      "∔": "&plusdo;",
      "⊡": "&sdotb;",
      "⌟": "&lrcorner;",
      "⌌": "&drcrop;",
      "𝒹": "&dscr;",
      "ѕ": "&dscy;",
      "⧶": "&dsol;",
      "đ": "&dstrok;",
      "⋱": "&dtdot;",
      "▿": "&triangledown;",
      "⦦": "&dwangle;",
      "џ": "&dzcy;",
      "⟿": "&dzigrarr;",
      "é": "&eacute;",
      "⩮": "&easter;",
      "ě": "&ecaron;",
      "≖": "&eqcirc;",
      "ê": "&ecirc;",
      "≕": "&eqcolon;",
      "э": "&ecy;",
      "ė": "&edot;",
      "≒": "&fallingdotseq;",
      "𝔢": "&efr;",
      "⪚": "&eg;",
      "è": "&egrave;",
      "⪖": "&eqslantgtr;",
      "⪘": "&egsdot;",
      "⪙": "&el;",
      "⏧": "&elinters;",
      "ℓ": "&ell;",
      "⪕": "&eqslantless;",
      "⪗": "&elsdot;",
      "ē": "&emacr;",
      "∅": "&varnothing;",
      " ": "&emsp13;",
      " ": "&emsp14;",
      " ": "&emsp;",
      "ŋ": "&eng;",
      " ": "&ensp;",
      "ę": "&eogon;",
      "𝕖": "&eopf;",
      "⋕": "&epar;",
      "⧣": "&eparsl;",
      "⩱": "&eplus;",
      "ε": "&epsilon;",
      "ϵ": "&varepsilon;",
      "=": "&equals;",
      "≟": "&questeq;",
      "⩸": "&equivDD;",
      "⧥": "&eqvparsl;",
      "≓": "&risingdotseq;",
      "⥱": "&erarr;",
      "ℯ": "&escr;",
      "η": "&eta;",
      "ð": "&eth;",
      "ë": "&euml;",
      "€": "&euro;",
      "!": "&excl;",
      "ф": "&fcy;",
      "♀": "&female;",
      "ﬃ": "&ffilig;",
      "ﬀ": "&fflig;",
      "ﬄ": "&ffllig;",
      "𝔣": "&ffr;",
      "ﬁ": "&filig;",
      fj: "&fjlig;",
      "♭": "&flat;",
      "ﬂ": "&fllig;",
      "▱": "&fltns;",
      "ƒ": "&fnof;",
      "𝕗": "&fopf;",
      "⋔": "&pitchfork;",
      "⫙": "&forkv;",
      "⨍": "&fpartint;",
      "½": "&half;",
      "⅓": "&frac13;",
      "¼": "&frac14;",
      "⅕": "&frac15;",
      "⅙": "&frac16;",
      "⅛": "&frac18;",
      "⅔": "&frac23;",
      "⅖": "&frac25;",
      "¾": "&frac34;",
      "⅗": "&frac35;",
      "⅜": "&frac38;",
      "⅘": "&frac45;",
      "⅚": "&frac56;",
      "⅝": "&frac58;",
      "⅞": "&frac78;",
      "⁄": "&frasl;",
      "⌢": "&sfrown;",
      "𝒻": "&fscr;",
      "⪌": "&gtreqqless;",
      "ǵ": "&gacute;",
      "γ": "&gamma;",
      "⪆": "&gtrapprox;",
      "ğ": "&gbreve;",
      "ĝ": "&gcirc;",
      "г": "&gcy;",
      "ġ": "&gdot;",
      "⪩": "&gescc;",
      "⪀": "&gesdot;",
      "⪂": "&gesdoto;",
      "⪄": "&gesdotol;",
      "⋛︀": "&gesl;",
      "⪔": "&gesles;",
      "𝔤": "&gfr;",
      "ℷ": "&gimel;",
      "ѓ": "&gjcy;",
      "⪒": "&glE;",
      "⪥": "&gla;",
      "⪤": "&glj;",
      "≩": "&gneqq;",
      "⪊": "&gnapprox;",
      "⪈": "&gneq;",
      "⋧": "&gnsim;",
      "𝕘": "&gopf;",
      "ℊ": "&gscr;",
      "⪎": "&gsime;",
      "⪐": "&gsiml;",
      "⪧": "&gtcc;",
      "⩺": "&gtcir;",
      "⋗": "&gtrdot;",
      "⦕": "&gtlPar;",
      "⩼": "&gtquest;",
      "⥸": "&gtrarr;",
      "≩︀": "&gvnE;",
      "ъ": "&hardcy;",
      "⥈": "&harrcir;",
      "↭": "&leftrightsquigarrow;",
      "ℏ": "&plankv;",
      "ĥ": "&hcirc;",
      "♥": "&heartsuit;",
      "…": "&mldr;",
      "⊹": "&hercon;",
      "𝔥": "&hfr;",
      "⤥": "&searhk;",
      "⤦": "&swarhk;",
      "⇿": "&hoarr;",
      "∻": "&homtht;",
      "↩": "&larrhk;",
      "↪": "&rarrhk;",
      "𝕙": "&hopf;",
      "―": "&horbar;",
      "𝒽": "&hscr;",
      "ħ": "&hstrok;",
      "⁃": "&hybull;",
      "í": "&iacute;",
      "î": "&icirc;",
      "и": "&icy;",
      "е": "&iecy;",
      "¡": "&iexcl;",
      "𝔦": "&ifr;",
      "ì": "&igrave;",
      "⨌": "&qint;",
      "∭": "&tint;",
      "⧜": "&iinfin;",
      "℩": "&iiota;",
      "ĳ": "&ijlig;",
      "ī": "&imacr;",
      "ı": "&inodot;",
      "⊷": "&imof;",
      "Ƶ": "&imped;",
      "℅": "&incare;",
      "∞": "&infin;",
      "⧝": "&infintie;",
      "⊺": "&intercal;",
      "⨗": "&intlarhk;",
      "⨼": "&iprod;",
      "ё": "&iocy;",
      "į": "&iogon;",
      "𝕚": "&iopf;",
      "ι": "&iota;",
      "¿": "&iquest;",
      "𝒾": "&iscr;",
      "⋹": "&isinE;",
      "⋵": "&isindot;",
      "⋴": "&isins;",
      "⋳": "&isinsv;",
      "ĩ": "&itilde;",
      "і": "&iukcy;",
      "ï": "&iuml;",
      "ĵ": "&jcirc;",
      "й": "&jcy;",
      "𝔧": "&jfr;",
      "ȷ": "&jmath;",
      "𝕛": "&jopf;",
      "𝒿": "&jscr;",
      "ј": "&jsercy;",
      "є": "&jukcy;",
      "κ": "&kappa;",
      "ϰ": "&varkappa;",
      "ķ": "&kcedil;",
      "к": "&kcy;",
      "𝔨": "&kfr;",
      "ĸ": "&kgreen;",
      "х": "&khcy;",
      "ќ": "&kjcy;",
      "𝕜": "&kopf;",
      "𝓀": "&kscr;",
      "⤛": "&lAtail;",
      "⤎": "&lBarr;",
      "⪋": "&lesseqqgtr;",
      "⥢": "&lHar;",
      "ĺ": "&lacute;",
      "⦴": "&laemptyv;",
      "λ": "&lambda;",
      "⦑": "&langd;",
      "⪅": "&lessapprox;",
      "«": "&laquo;",
      "⤟": "&larrbfs;",
      "⤝": "&larrfs;",
      "↫": "&looparrowleft;",
      "⤹": "&larrpl;",
      "⥳": "&larrsim;",
      "↢": "&leftarrowtail;",
      "⪫": "&lat;",
      "⤙": "&latail;",
      "⪭": "&late;",
      "⪭︀": "&lates;",
      "⤌": "&lbarr;",
      "❲": "&lbbrk;",
      "{": "&lcub;",
      "[": "&lsqb;",
      "⦋": "&lbrke;",
      "⦏": "&lbrksld;",
      "⦍": "&lbrkslu;",
      "ľ": "&lcaron;",
      "ļ": "&lcedil;",
      "л": "&lcy;",
      "⤶": "&ldca;",
      "⥧": "&ldrdhar;",
      "⥋": "&ldrushar;",
      "↲": "&ldsh;",
      "≤": "&leq;",
      "⇇": "&llarr;",
      "⋋": "&lthree;",
      "⪨": "&lescc;",
      "⩿": "&lesdot;",
      "⪁": "&lesdoto;",
      "⪃": "&lesdotor;",
      "⋚︀": "&lesg;",
      "⪓": "&lesges;",
      "⋖": "&ltdot;",
      "⥼": "&lfisht;",
      "𝔩": "&lfr;",
      "⪑": "&lgE;",
      "⥪": "&lharul;",
      "▄": "&lhblk;",
      "љ": "&ljcy;",
      "⥫": "&llhard;",
      "◺": "&lltri;",
      "ŀ": "&lmidot;",
      "⎰": "&lmoustache;",
      "≨": "&lneqq;",
      "⪉": "&lnapprox;",
      "⪇": "&lneq;",
      "⋦": "&lnsim;",
      "⟬": "&loang;",
      "⇽": "&loarr;",
      "⟼": "&xmap;",
      "↬": "&rarrlp;",
      "⦅": "&lopar;",
      "𝕝": "&lopf;",
      "⨭": "&loplus;",
      "⨴": "&lotimes;",
      "∗": "&lowast;",
      "◊": "&lozenge;",
      "(": "&lpar;",
      "⦓": "&lparlt;",
      "⥭": "&lrhard;",
      "‎": "&lrm;",
      "⊿": "&lrtri;",
      "‹": "&lsaquo;",
      "𝓁": "&lscr;",
      "⪍": "&lsime;",
      "⪏": "&lsimg;",
      "‚": "&sbquo;",
      "ł": "&lstrok;",
      "⪦": "&ltcc;",
      "⩹": "&ltcir;",
      "⋉": "&ltimes;",
      "⥶": "&ltlarr;",
      "⩻": "&ltquest;",
      "⦖": "&ltrPar;",
      "◃": "&triangleleft;",
      "⥊": "&lurdshar;",
      "⥦": "&luruhar;",
      "≨︀": "&lvnE;",
      "∺": "&mDDot;",
      "¯": "&strns;",
      "♂": "&male;",
      "✠": "&maltese;",
      "▮": "&marker;",
      "⨩": "&mcomma;",
      "м": "&mcy;",
      "—": "&mdash;",
      "𝔪": "&mfr;",
      "℧": "&mho;",
      "µ": "&micro;",
      "⫰": "&midcir;",
      "−": "&minus;",
      "⨪": "&minusdu;",
      "⫛": "&mlcp;",
      "⊧": "&models;",
      "𝕞": "&mopf;",
      "𝓂": "&mscr;",
      "μ": "&mu;",
      "⊸": "&mumap;",
      "⋙̸": "&nGg;",
      "≫⃒": "&nGt;",
      "⇍": "&nlArr;",
      "⇎": "&nhArr;",
      "⋘̸": "&nLl;",
      "≪⃒": "&nLt;",
      "⇏": "&nrArr;",
      "⊯": "&nVDash;",
      "⊮": "&nVdash;",
      "ń": "&nacute;",
      "∠⃒": "&nang;",
      "⩰̸": "&napE;",
      "≋̸": "&napid;",
      "ŉ": "&napos;",
      "♮": "&natural;",
      "⩃": "&ncap;",
      "ň": "&ncaron;",
      "ņ": "&ncedil;",
      "⩭̸": "&ncongdot;",
      "⩂": "&ncup;",
      "н": "&ncy;",
      "–": "&ndash;",
      "⇗": "&neArr;",
      "⤤": "&nearhk;",
      "≐̸": "&nedot;",
      "⤨": "&toea;",
      "𝔫": "&nfr;",
      "↮": "&nleftrightarrow;",
      "⫲": "&nhpar;",
      "⋼": "&nis;",
      "⋺": "&nisd;",
      "њ": "&njcy;",
      "≦̸": "&nleqq;",
      "↚": "&nleftarrow;",
      "‥": "&nldr;",
      "𝕟": "&nopf;",
      "¬": "&not;",
      "⋹̸": "&notinE;",
      "⋵̸": "&notindot;",
      "⋷": "&notinvb;",
      "⋶": "&notinvc;",
      "⋾": "&notnivb;",
      "⋽": "&notnivc;",
      "⫽⃥": "&nparsl;",
      "∂̸": "&npart;",
      "⨔": "&npolint;",
      "↛": "&nrightarrow;",
      "⤳̸": "&nrarrc;",
      "↝̸": "&nrarrw;",
      "𝓃": "&nscr;",
      "⊄": "&nsub;",
      "⫅̸": "&nsubseteqq;",
      "⊅": "&nsup;",
      "⫆̸": "&nsupseteqq;",
      "ñ": "&ntilde;",
      "ν": "&nu;",
      "#": "&num;",
      "№": "&numero;",
      " ": "&numsp;",
      "⊭": "&nvDash;",
      "⤄": "&nvHarr;",
      "≍⃒": "&nvap;",
      "⊬": "&nvdash;",
      "≥⃒": "&nvge;",
      ">⃒": "&nvgt;",
      "⧞": "&nvinfin;",
      "⤂": "&nvlArr;",
      "≤⃒": "&nvle;",
      "<⃒": "&nvlt;",
      "⊴⃒": "&nvltrie;",
      "⤃": "&nvrArr;",
      "⊵⃒": "&nvrtrie;",
      "∼⃒": "&nvsim;",
      "⇖": "&nwArr;",
      "⤣": "&nwarhk;",
      "⤧": "&nwnear;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "о": "&ocy;",
      "ő": "&odblac;",
      "⨸": "&odiv;",
      "⦼": "&odsold;",
      "œ": "&oelig;",
      "⦿": "&ofcir;",
      "𝔬": "&ofr;",
      "˛": "&ogon;",
      "ò": "&ograve;",
      "⧁": "&ogt;",
      "⦵": "&ohbar;",
      "⦾": "&olcir;",
      "⦻": "&olcross;",
      "⧀": "&olt;",
      "ō": "&omacr;",
      "ω": "&omega;",
      "ο": "&omicron;",
      "⦶": "&omid;",
      "𝕠": "&oopf;",
      "⦷": "&opar;",
      "⦹": "&operp;",
      "∨": "&vee;",
      "⩝": "&ord;",
      "ℴ": "&oscr;",
      "ª": "&ordf;",
      "º": "&ordm;",
      "⊶": "&origof;",
      "⩖": "&oror;",
      "⩗": "&orslope;",
      "⩛": "&orv;",
      "ø": "&oslash;",
      "⊘": "&osol;",
      "õ": "&otilde;",
      "⨶": "&otimesas;",
      "ö": "&ouml;",
      "⌽": "&ovbar;",
      "¶": "&para;",
      "⫳": "&parsim;",
      "⫽": "&parsl;",
      "п": "&pcy;",
      "%": "&percnt;",
      ".": "&period;",
      "‰": "&permil;",
      "‱": "&pertenk;",
      "𝔭": "&pfr;",
      "φ": "&phi;",
      "ϕ": "&varphi;",
      "☎": "&phone;",
      "π": "&pi;",
      "ϖ": "&varpi;",
      "ℎ": "&planckh;",
      "+": "&plus;",
      "⨣": "&plusacir;",
      "⨢": "&pluscir;",
      "⨥": "&plusdu;",
      "⩲": "&pluse;",
      "⨦": "&plussim;",
      "⨧": "&plustwo;",
      "⨕": "&pointint;",
      "𝕡": "&popf;",
      "£": "&pound;",
      "⪳": "&prE;",
      "⪷": "&precapprox;",
      "⪹": "&prnap;",
      "⪵": "&prnE;",
      "⋨": "&prnsim;",
      "′": "&prime;",
      "⌮": "&profalar;",
      "⌒": "&profline;",
      "⌓": "&profsurf;",
      "⊰": "&prurel;",
      "𝓅": "&pscr;",
      "ψ": "&psi;",
      " ": "&puncsp;",
      "𝔮": "&qfr;",
      "𝕢": "&qopf;",
      "⁗": "&qprime;",
      "𝓆": "&qscr;",
      "⨖": "&quatint;",
      "?": "&quest;",
      "⤜": "&rAtail;",
      "⥤": "&rHar;",
      "∽̱": "&race;",
      "ŕ": "&racute;",
      "⦳": "&raemptyv;",
      "⦒": "&rangd;",
      "⦥": "&range;",
      "»": "&raquo;",
      "⥵": "&rarrap;",
      "⤠": "&rarrbfs;",
      "⤳": "&rarrc;",
      "⤞": "&rarrfs;",
      "⥅": "&rarrpl;",
      "⥴": "&rarrsim;",
      "↣": "&rightarrowtail;",
      "↝": "&rightsquigarrow;",
      "⤚": "&ratail;",
      "∶": "&ratio;",
      "❳": "&rbbrk;",
      "}": "&rcub;",
      "]": "&rsqb;",
      "⦌": "&rbrke;",
      "⦎": "&rbrksld;",
      "⦐": "&rbrkslu;",
      "ř": "&rcaron;",
      "ŗ": "&rcedil;",
      "р": "&rcy;",
      "⤷": "&rdca;",
      "⥩": "&rdldhar;",
      "↳": "&rdsh;",
      "▭": "&rect;",
      "⥽": "&rfisht;",
      "𝔯": "&rfr;",
      "⥬": "&rharul;",
      "ρ": "&rho;",
      "ϱ": "&varrho;",
      "⇉": "&rrarr;",
      "⋌": "&rthree;",
      "˚": "&ring;",
      "‏": "&rlm;",
      "⎱": "&rmoustache;",
      "⫮": "&rnmid;",
      "⟭": "&roang;",
      "⇾": "&roarr;",
      "⦆": "&ropar;",
      "𝕣": "&ropf;",
      "⨮": "&roplus;",
      "⨵": "&rotimes;",
      ")": "&rpar;",
      "⦔": "&rpargt;",
      "⨒": "&rppolint;",
      "›": "&rsaquo;",
      "𝓇": "&rscr;",
      "⋊": "&rtimes;",
      "▹": "&triangleright;",
      "⧎": "&rtriltri;",
      "⥨": "&ruluhar;",
      "℞": "&rx;",
      "ś": "&sacute;",
      "⪴": "&scE;",
      "⪸": "&succapprox;",
      "š": "&scaron;",
      "ş": "&scedil;",
      "ŝ": "&scirc;",
      "⪶": "&succneqq;",
      "⪺": "&succnapprox;",
      "⋩": "&succnsim;",
      "⨓": "&scpolint;",
      "с": "&scy;",
      "⋅": "&sdot;",
      "⩦": "&sdote;",
      "⇘": "&seArr;",
      "§": "&sect;",
      ";": "&semi;",
      "⤩": "&tosa;",
      "✶": "&sext;",
      "𝔰": "&sfr;",
      "♯": "&sharp;",
      "щ": "&shchcy;",
      "ш": "&shcy;",
      "­": "&shy;",
      "σ": "&sigma;",
      "ς": "&varsigma;",
      "⩪": "&simdot;",
      "⪞": "&simg;",
      "⪠": "&simgE;",
      "⪝": "&siml;",
      "⪟": "&simlE;",
      "≆": "&simne;",
      "⨤": "&simplus;",
      "⥲": "&simrarr;",
      "⨳": "&smashp;",
      "⧤": "&smeparsl;",
      "⌣": "&ssmile;",
      "⪪": "&smt;",
      "⪬": "&smte;",
      "⪬︀": "&smtes;",
      "ь": "&softcy;",
      "/": "&sol;",
      "⧄": "&solb;",
      "⌿": "&solbar;",
      "𝕤": "&sopf;",
      "♠": "&spadesuit;",
      "⊓︀": "&sqcaps;",
      "⊔︀": "&sqcups;",
      "𝓈": "&sscr;",
      "☆": "&star;",
      "⊂": "&subset;",
      "⫅": "&subseteqq;",
      "⪽": "&subdot;",
      "⫃": "&subedot;",
      "⫁": "&submult;",
      "⫋": "&subsetneqq;",
      "⊊": "&subsetneq;",
      "⪿": "&subplus;",
      "⥹": "&subrarr;",
      "⫇": "&subsim;",
      "⫕": "&subsub;",
      "⫓": "&subsup;",
      "♪": "&sung;",
      "¹": "&sup1;",
      "²": "&sup2;",
      "³": "&sup3;",
      "⫆": "&supseteqq;",
      "⪾": "&supdot;",
      "⫘": "&supdsub;",
      "⫄": "&supedot;",
      "⟉": "&suphsol;",
      "⫗": "&suphsub;",
      "⥻": "&suplarr;",
      "⫂": "&supmult;",
      "⫌": "&supsetneqq;",
      "⊋": "&supsetneq;",
      "⫀": "&supplus;",
      "⫈": "&supsim;",
      "⫔": "&supsub;",
      "⫖": "&supsup;",
      "⇙": "&swArr;",
      "⤪": "&swnwar;",
      "ß": "&szlig;",
      "⌖": "&target;",
      "τ": "&tau;",
      "ť": "&tcaron;",
      "ţ": "&tcedil;",
      "т": "&tcy;",
      "⌕": "&telrec;",
      "𝔱": "&tfr;",
      "θ": "&theta;",
      "ϑ": "&vartheta;",
      "þ": "&thorn;",
      "×": "&times;",
      "⨱": "&timesbar;",
      "⨰": "&timesd;",
      "⌶": "&topbot;",
      "⫱": "&topcir;",
      "𝕥": "&topf;",
      "⫚": "&topfork;",
      "‴": "&tprime;",
      "▵": "&utri;",
      "≜": "&trie;",
      "◬": "&tridot;",
      "⨺": "&triminus;",
      "⨹": "&triplus;",
      "⧍": "&trisb;",
      "⨻": "&tritime;",
      "⏢": "&trpezium;",
      "𝓉": "&tscr;",
      "ц": "&tscy;",
      "ћ": "&tshcy;",
      "ŧ": "&tstrok;",
      "⥣": "&uHar;",
      "ú": "&uacute;",
      "ў": "&ubrcy;",
      "ŭ": "&ubreve;",
      "û": "&ucirc;",
      "у": "&ucy;",
      "ű": "&udblac;",
      "⥾": "&ufisht;",
      "𝔲": "&ufr;",
      "ù": "&ugrave;",
      "▀": "&uhblk;",
      "⌜": "&ulcorner;",
      "⌏": "&ulcrop;",
      "◸": "&ultri;",
      "ū": "&umacr;",
      "ų": "&uogon;",
      "𝕦": "&uopf;",
      "υ": "&upsilon;",
      "⇈": "&uuarr;",
      "⌝": "&urcorner;",
      "⌎": "&urcrop;",
      "ů": "&uring;",
      "◹": "&urtri;",
      "𝓊": "&uscr;",
      "⋰": "&utdot;",
      "ũ": "&utilde;",
      "ü": "&uuml;",
      "⦧": "&uwangle;",
      "⫨": "&vBar;",
      "⫩": "&vBarv;",
      "⦜": "&vangrt;",
      "⊊︀": "&vsubne;",
      "⫋︀": "&vsubnE;",
      "⊋︀": "&vsupne;",
      "⫌︀": "&vsupnE;",
      "в": "&vcy;",
      "⊻": "&veebar;",
      "≚": "&veeeq;",
      "⋮": "&vellip;",
      "𝔳": "&vfr;",
      "𝕧": "&vopf;",
      "𝓋": "&vscr;",
      "⦚": "&vzigzag;",
      "ŵ": "&wcirc;",
      "⩟": "&wedbar;",
      "≙": "&wedgeq;",
      "℘": "&wp;",
      "𝔴": "&wfr;",
      "𝕨": "&wopf;",
      "𝓌": "&wscr;",
      "𝔵": "&xfr;",
      "ξ": "&xi;",
      "⋻": "&xnis;",
      "𝕩": "&xopf;",
      "𝓍": "&xscr;",
      "ý": "&yacute;",
      "я": "&yacy;",
      "ŷ": "&ycirc;",
      "ы": "&ycy;",
      "¥": "&yen;",
      "𝔶": "&yfr;",
      "ї": "&yicy;",
      "𝕪": "&yopf;",
      "𝓎": "&yscr;",
      "ю": "&yucy;",
      "ÿ": "&yuml;",
      "ź": "&zacute;",
      "ž": "&zcaron;",
      "з": "&zcy;",
      "ż": "&zdot;",
      "ζ": "&zeta;",
      "𝔷": "&zfr;",
      "ж": "&zhcy;",
      "⇝": "&zigrarr;",
      "𝕫": "&zopf;",
      "𝓏": "&zscr;",
      "‍": "&zwj;",
      "‌": "&zwnj;"
    }
  }
};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
exports.getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
};
exports.highSurrogateFrom = 55296;
exports.highSurrogateTo = 56319;

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function (c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }

  /**
   * @param {(...args: any[]) => void} f
   */
  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }

    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);
  return WebSocketClient;
}();


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=warn&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=warn&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=warn&overlay=true&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js");
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />










/**
 * @typedef {Object} OverlayOptions
 * @property {boolean | (error: Error) => boolean} [warnings]
 * @property {boolean | (error: Error) => boolean} [errors]
 * @property {boolean | (error: Error) => boolean} [runtimeErrors]
 * @property {string} [trustedTypesPolicyName]
 */

/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | OverlayOptions} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions
 */
var decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {
  if (typeof overlayOptions === "object") {
    ["warnings", "errors", "runtimeErrors"].forEach(function (property) {
      if (typeof overlayOptions[property] === "string") {
        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);

        // eslint-disable-next-line no-new-func
        var overlayFilterFunction = new Function("message", "var callback = ".concat(overlayFilterFunctionString, "\n        return callback(message)"));
        overlayOptions[property] = overlayFilterFunction;
      }
    });
  }
};

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (e) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Error parsing overlay options from resource query:", e);
  }

  // Fill in default "true" params for partially-specified objects.
  if (typeof options.overlay === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
    decodeOverlayOptions(options.overlay);
  }
  enabledFeatures.Overlay = true;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {string} level
 */
function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}
if (options.logging) {
  setAllLogLevel(options.logging);
}
(0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.createOverlay)(typeof options.overlay === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },
  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
    decodeOverlayOptions(options.overlay);
  },
  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'
  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }
    var overlayWarningsSetting = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (overlayWarningsSetting) {
      var warningsToDisplay = typeof overlayWarningsSetting === "function" ? _warnings.filter(overlayWarningsSetting) : _warnings;
      if (warningsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "warning",
          messages: _warnings
        });
      }
    }
    if (params && params.preventReloading) {
      return;
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }
    var overlayErrorsSettings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (overlayErrorsSettings) {
      var errorsToDisplay = typeof overlayErrorsSettings === "function" ? _errors.filter(overlayErrorsSettings) : _errors;
      if (errorsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "error",
          messages: _errors
        });
      }
    }
  },
  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./client-src/modules/logger/SyncBailHookFake.js":
    /*!*******************************************************!*\
      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
      \*******************************************************/
    /***/
    function (module) {
      /**
       * Client stub for tapable SyncBailHook
       */
      module.exports = function clientTapableSyncBailHook() {
        return {
          call: function call() {}
        };
      };

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/Logger.js":
    /*!****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/Logger.js ***!
      \****************************************************/
    /***/
    function (__unused_webpack_module, exports) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var LogType = Object.freeze({
        error: /** @type {"error"} */"error",
        // message, c style arguments
        warn: /** @type {"warn"} */"warn",
        // message, c style arguments
        info: /** @type {"info"} */"info",
        // message, c style arguments
        log: /** @type {"log"} */"log",
        // message, c style arguments
        debug: /** @type {"debug"} */"debug",
        // message, c style arguments

        trace: /** @type {"trace"} */"trace",
        // no arguments

        group: /** @type {"group"} */"group",
        // [label]
        groupCollapsed: /** @type {"groupCollapsed"} */"groupCollapsed",
        // [label]
        groupEnd: /** @type {"groupEnd"} */"groupEnd",
        // [label]

        profile: /** @type {"profile"} */"profile",
        // [profileName]
        profileEnd: /** @type {"profileEnd"} */"profileEnd",
        // [profileName]

        time: /** @type {"time"} */"time",
        // name, time as [seconds, nanoseconds]

        clear: /** @type {"clear"} */"clear",
        // no arguments
        status: /** @type {"status"} */"status" // message, arguments
      });

      exports.LogType = LogType;

      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

      var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger raw log method");
      var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger times");
      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger aggregated times");
      var WebpackLogger = /*#__PURE__*/function () {
        /**
         * @param {function(LogTypeEnum, any[]=): void} log log function
         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
         */
        function WebpackLogger(log, getChildLogger) {
          _classCallCheck(this, WebpackLogger);
          this[LOG_SYMBOL] = log;
          this.getChildLogger = getChildLogger;
        }
        _createClass(WebpackLogger, [{
          key: "error",
          value: function error() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            this[LOG_SYMBOL](LogType.error, args);
          }
        }, {
          key: "warn",
          value: function warn() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            this[LOG_SYMBOL](LogType.warn, args);
          }
        }, {
          key: "info",
          value: function info() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            this[LOG_SYMBOL](LogType.info, args);
          }
        }, {
          key: "log",
          value: function log() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            this[LOG_SYMBOL](LogType.log, args);
          }
        }, {
          key: "debug",
          value: function debug() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            this[LOG_SYMBOL](LogType.debug, args);
          }
        }, {
          key: "assert",
          value: function assert(assertion) {
            if (!assertion) {
              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                args[_key6 - 1] = arguments[_key6];
              }
              this[LOG_SYMBOL](LogType.error, args);
            }
          }
        }, {
          key: "trace",
          value: function trace() {
            this[LOG_SYMBOL](LogType.trace, ["Trace"]);
          }
        }, {
          key: "clear",
          value: function clear() {
            this[LOG_SYMBOL](LogType.clear);
          }
        }, {
          key: "status",
          value: function status() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }
            this[LOG_SYMBOL](LogType.status, args);
          }
        }, {
          key: "group",
          value: function group() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }
            this[LOG_SYMBOL](LogType.group, args);
          }
        }, {
          key: "groupCollapsed",
          value: function groupCollapsed() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }
            this[LOG_SYMBOL](LogType.groupCollapsed, args);
          }
        }, {
          key: "groupEnd",
          value: function groupEnd() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }
            this[LOG_SYMBOL](LogType.groupEnd, args);
          }
        }, {
          key: "profile",
          value: function profile(label) {
            this[LOG_SYMBOL](LogType.profile, [label]);
          }
        }, {
          key: "profileEnd",
          value: function profileEnd(label) {
            this[LOG_SYMBOL](LogType.profileEnd, [label]);
          }
        }, {
          key: "time",
          value: function time(label) {
            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
            this[TIMERS_SYMBOL].set(label, process.hrtime());
          }
        }, {
          key: "timeLog",
          value: function timeLog(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
            }
            var time = process.hrtime(prev);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeEnd",
          value: function timeEnd(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
            }
            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeAggregate",
          value: function timeAggregate(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
            }
            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (current !== undefined) {
              if (time[1] + current[1] > 1e9) {
                time[0] += current[0] + 1;
                time[1] = time[1] - 1e9 + current[1];
              } else {
                time[0] += current[0];
                time[1] += current[1];
              }
            }
            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
          }
        }, {
          key: "timeAggregateEnd",
          value: function timeAggregateEnd(label) {
            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (time === undefined) return;
            this[TIMERS_AGGREGATES_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }]);
        return WebpackLogger;
      }();
      exports.Logger = WebpackLogger;

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/createConsoleLogger.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
      \*****************************************************************/
    /***/
    function (module, __unused_webpack_exports, __nested_webpack_require_13155__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _require = __nested_webpack_require_13155__( /*! ./Logger */"./node_modules/webpack/lib/logging/Logger.js"),
        LogType = _require.LogType;

      /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
      /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
      /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

      /** @typedef {function(string): boolean} FilterFunction */

      /**
       * @typedef {Object} LoggerConsole
       * @property {function(): void} clear
       * @property {function(): void} trace
       * @property {(...args: any[]) => void} info
       * @property {(...args: any[]) => void} log
       * @property {(...args: any[]) => void} warn
       * @property {(...args: any[]) => void} error
       * @property {(...args: any[]) => void=} debug
       * @property {(...args: any[]) => void=} group
       * @property {(...args: any[]) => void=} groupCollapsed
       * @property {(...args: any[]) => void=} groupEnd
       * @property {(...args: any[]) => void=} status
       * @property {(...args: any[]) => void=} profile
       * @property {(...args: any[]) => void=} profileEnd
       * @property {(...args: any[]) => void=} logTime
       */

      /**
       * @typedef {Object} LoggerOptions
       * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
       * @property {FilterTypes|boolean} debug filter for debug logging
       * @property {LoggerConsole} console the console to log to
       */

      /**
       * @param {FilterItemTypes} item an input item
       * @returns {FilterFunction} filter function
       */
      var filterToFunction = function filterToFunction(item) {
        if (typeof item === "string") {
          var regExp = new RegExp("[\\\\/]".concat(item.replace(
          // eslint-disable-next-line no-useless-escape
          /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
          return function (ident) {
            return regExp.test(ident);
          };
        }
        if (item && typeof item === "object" && typeof item.test === "function") {
          return function (ident) {
            return item.test(ident);
          };
        }
        if (typeof item === "function") {
          return item;
        }
        if (typeof item === "boolean") {
          return function () {
            return item;
          };
        }
      };

      /**
       * @enum {number}
       */
      var LogLevel = {
        none: 6,
        false: 6,
        error: 5,
        warn: 4,
        info: 3,
        log: 2,
        true: 2,
        verbose: 1
      };

      /**
       * @param {LoggerOptions} options options object
       * @returns {function(string, LogTypeEnum, any[]): void} logging function
       */
      module.exports = function (_ref) {
        var _ref$level = _ref.level,
          level = _ref$level === void 0 ? "info" : _ref$level,
          _ref$debug = _ref.debug,
          debug = _ref$debug === void 0 ? false : _ref$debug,
          console = _ref.console;
        var debugFilters = typeof debug === "boolean" ? [function () {
          return debug;
        }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);
        /** @type {number} */
        var loglevel = LogLevel["".concat(level)] || 0;

        /**
         * @param {string} name name of the logger
         * @param {LogTypeEnum} type type of the log entry
         * @param {any[]} args arguments of the log entry
         * @returns {void}
         */
        var logger = function logger(name, type, args) {
          var labeledArgs = function labeledArgs() {
            if (Array.isArray(args)) {
              if (args.length > 0 && typeof args[0] === "string") {
                return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
              } else {
                return ["[".concat(name, "]")].concat(_toConsumableArray(args));
              }
            } else {
              return [];
            }
          };
          var debug = debugFilters.some(function (f) {
            return f(name);
          });
          switch (type) {
            case LogType.debug:
              if (!debug) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.debug === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.debug.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.log:
              if (!debug && loglevel > LogLevel.log) return;
              console.log.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.info:
              if (!debug && loglevel > LogLevel.info) return;
              console.info.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.warn:
              if (!debug && loglevel > LogLevel.warn) return;
              console.warn.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.error:
              if (!debug && loglevel > LogLevel.error) return;
              console.error.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.trace:
              if (!debug) return;
              console.trace();
              break;
            case LogType.groupCollapsed:
              if (!debug && loglevel > LogLevel.log) return;
              if (!debug && loglevel > LogLevel.verbose) {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                if (typeof console.groupCollapsed === "function") {
                  // eslint-disable-next-line node/no-unsupported-features/node-builtins
                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
                } else {
                  console.log.apply(console, _toConsumableArray(labeledArgs()));
                }
                break;
              }
            // falls through
            case LogType.group:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.group === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.group.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.groupEnd:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.groupEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.groupEnd();
              }
              break;
            case LogType.time:
              {
                if (!debug && loglevel > LogLevel.log) return;
                var ms = args[1] * 1000 + args[2] / 1000000;
                var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");
                if (typeof console.logTime === "function") {
                  console.logTime(msg);
                } else {
                  console.log(msg);
                }
                break;
              }
            case LogType.profile:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profile === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profile.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.profileEnd:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profileEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.clear:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.clear === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.clear();
              }
              break;
            case LogType.status:
              if (!debug && loglevel > LogLevel.info) return;
              if (typeof console.status === "function") {
                if (args.length === 0) {
                  console.status();
                } else {
                  console.status.apply(console, _toConsumableArray(labeledArgs()));
                }
              } else {
                if (args.length !== 0) {
                  console.info.apply(console, _toConsumableArray(labeledArgs()));
                }
              }
              break;
            default:
              throw new Error("Unexpected LogType ".concat(type));
          }
        };
        return logger;
      };

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/runtime.js":
    /*!*****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/runtime.js ***!
      \*****************************************************/
    /***/
    function (__unused_webpack_module, exports, __nested_webpack_require_24769__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      var SyncBailHook = __nested_webpack_require_24769__( /*! tapable/lib/SyncBailHook */"./client-src/modules/logger/SyncBailHookFake.js");
      var _require = __nested_webpack_require_24769__( /*! ./Logger */"./node_modules/webpack/lib/logging/Logger.js"),
        Logger = _require.Logger;
      var createConsoleLogger = __nested_webpack_require_24769__( /*! ./createConsoleLogger */"./node_modules/webpack/lib/logging/createConsoleLogger.js");

      /** @type {createConsoleLogger.LoggerOptions} */
      var currentDefaultLoggerOptions = {
        level: "info",
        debug: false,
        console: console
      };
      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

      /**
       * @param {string} name name of the logger
       * @returns {Logger} a logger
       */
      exports.getLogger = function (name) {
        return new Logger(function (type, args) {
          if (exports.hooks.log.call(name, type, args) === undefined) {
            currentDefaultLogger(name, type, args);
          }
        }, function (childName) {
          return exports.getLogger("".concat(name, "/").concat(childName));
        });
      };

      /**
       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
       * @returns {void}
       */
      exports.configureDefaultLogger = function (options) {
        _extends(currentDefaultLoggerOptions, options);
        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      };
      exports.hooks = {
        log: new SyncBailHook(["origin", "type", "args"])
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_27234__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27234__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_27234__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_27234__.o(definition, key) && !__nested_webpack_require_27234__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_27234__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  !function () {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_27234__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  }();
  /******/
  /************************************************************************/
  var __nested_webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    /*!********************************************!*\
      !*** ./client-src/modules/logger/index.js ***!
      \********************************************/
    __nested_webpack_require_27234__.r(__nested_webpack_exports__);
    /* harmony export */
    __nested_webpack_require_27234__.d(__nested_webpack_exports__, {
      /* harmony export */"default": function () {
        return (/* reexport default export from named module */webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__
        );
      }
      /* harmony export */
    });
    /* harmony import */
    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27234__( /*! webpack/lib/logging/runtime.js */"./node_modules/webpack/lib/logging/runtime.js");
  }();
  var __webpack_export_target__ = exports;
  for (var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];
  if (__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverlay: () => (/* binding */ createOverlay),
/* harmony export */   formatProblem: () => (/* binding */ formatProblem)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay/runtime-error.js */ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js");
/* harmony import */ var _overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay/state-machine.js */ "./node_modules/webpack-dev-server/client/overlay/state-machine.js");
/* harmony import */ var _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay/styles.js */ "./node_modules/webpack-dev-server/client/overlay/styles.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).






var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item
 * @returns {{ header: string, body: string }}
 */
function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    // eslint-disable-next-line no-nested-ternary
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
}

/**
 * @typedef {Object} CreateOverlayOptions
 * @property {string | null} trustedTypesPolicyName
 * @property {boolean | (error: Error) => void} [catchRuntimeError]
 */

/**
 *
 * @param {CreateOverlayOptions} options
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var headerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {TrustedTypePolicy | undefined} */
  var overlayTrustedTypesPolicy;

  /**
   *
   * @param {HTMLElement} element
   * @param {CSSStyleDeclaration} style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[prop] = style[prop];
    });
  }

  /**
   * @param {string | null} trustedTypesPolicyName
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      containerElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.containerStyle);
      headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad( /** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback
   * @param {string | null} trustedTypesPolicyName
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      containerElement.innerHTML = "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type
   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
   * @param {string | null} trustedTypesPolicyName
   * @param {'build' | 'runtime'} messageSource
   */
  function show(type, messages, trustedTypesPolicyName, messageSource) {
    ensureOverlayExists(function () {
      headerElement.innerText = messageSource === "runtime" ? "Uncaught runtime errors:" : "Compiled with problems:";
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.warning : _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTypeStyle);
        if (message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", true);
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTextStyle);
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }
  var overlayService = (0,_overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    showOverlay: function showOverlay(_ref) {
      var _ref$level = _ref.level,
        level = _ref$level === void 0 ? "error" : _ref$level,
        messages = _ref.messages,
        messageSource = _ref.messageSource;
      return show(level, messages, options.trustedTypesPolicyName, messageSource);
    },
    hideOverlay: hide
  });
  if (options.catchRuntimeError) {
    /**
     * @param {Error | undefined} error
     * @param {string} fallbackMessage
     */
    var handleError = function handleError(error, fallbackMessage) {
      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);
      var shouldDisplay = typeof options.catchRuntimeError === "function" ? options.catchRuntimeError(errorObject) : true;
      if (shouldDisplay) {
        overlayService.send({
          type: "RUNTIME_ERROR",
          messages: [{
            message: errorObject.message,
            stack: (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.parseErrorToStacks)(errorObject)
          }]
        });
      }
    };
    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToRuntimeError)(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }
      handleError(error, message);
    });
    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToUnhandledRejection)(function (promiseRejectionEvent) {
      var reason = promiseRejectionEvent.reason;
      handleError(reason, "Unknown promise rejection reason");
    });
  }
  return overlayService;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/fsm.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/fsm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
/**
 * @typedef {Object} StateDefinitions
 * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]
 */

/**
 * @typedef {Object} Options
 * @property {{[state: string]: StateDefinitions}} states
 * @property {object} context;
 * @property {string} initial
 */

/**
 * @typedef {Object} Implementation
 * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 *
 *  - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 *  - event passed to `send` must be an object with `type` property.
 *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 *  Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 *
 * @param {Options} options
 * @param {Implementation} implementation
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/runtime-error.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenToRuntimeError: () => (/* binding */ listenToRuntimeError),
/* harmony export */   listenToUnhandledRejection: () => (/* binding */ listenToUnhandledRejection),
/* harmony export */   parseErrorToStacks: () => (/* binding */ parseErrorToStacks)
/* harmony export */ });
/**
 *
 * @param {Error} error
 */
function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
}

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback
 */
function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
}

/**
 * @callback UnhandledRejectionCallback
 * @param {PromiseRejectionEvent} rejectionEvent
 * @returns {void}
 */

/**
 * @param {UnhandledRejectionCallback} callback
 */
function listenToUnhandledRejection(callback) {
  window.addEventListener("unhandledrejection", callback);
  return function cleanup() {
    window.removeEventListener("unhandledrejection", callback);
  };
}


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/state-machine.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/state-machine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fsm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsm.js */ "./node_modules/webpack-dev-server/client/overlay/fsm.js");


/**
 * @typedef {Object} ShowOverlayData
 * @property {'warning' | 'error'} level
 * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
 * @property {'build' | 'runtime'} messageSource
 */

/**
 * @typedef {Object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay
 * @property {() => void} hideOverlay
 */

/**
 * @param {CreateOverlayMachineOptions} options
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  var overlayMachine = (0,_fsm_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    initial: "hidden",
    context: {
      level: "error",
      messages: [],
      messageSource: "build"
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error",
          messageSource: "build"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
  return overlayMachine;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOverlayMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/styles.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerStyle: () => (/* binding */ containerStyle),
/* harmony export */   dismissButtonStyle: () => (/* binding */ dismissButtonStyle),
/* harmony export */   headerStyle: () => (/* binding */ headerStyle),
/* harmony export */   iframeStyle: () => (/* binding */ iframeStyle),
/* harmony export */   msgStyles: () => (/* binding */ msgStyles),
/* harmony export */   msgTextStyle: () => (/* binding */ msgTextStyle),
/* harmony export */   msgTypeStyle: () => (/* binding */ msgTypeStyle)
/* harmony export */ });
// styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




// this WebsocketClient is here as a default fallback, in case the client is not injected
/* eslint-disable camelcase */
var Client =
// eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports
var client = null;

/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */
var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  var auth = objURL.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var host = "";
  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }
  var pathname = objURL.pathname || "";
  if (objURL.slashes) {
    host = "//".concat(host || "");
    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }
  var search = objURL.search || "";
  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }
  var hash = objURL.hash || "";
  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }
  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */
function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname;

  // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'
  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]";

  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }
  var socketURLProtocol = parsedURL.protocol || self.location.protocol;

  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }
  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = "";

  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them
  if (parsedURL.username) {
    socketURLAuth = parsedURL.username;

    // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.
    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  }

  // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided
  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;
  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  }

  // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.
  var socketURLPathname = "/ws";
  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }
  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  }

  // Fallback to getting all scripts running in the document.
  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });
  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  }

  // Fail as there was no script to use.
  throw new Error("[webpack-dev-server] Failed to get current script source.");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   logEnabledFeatures: () => (/* binding */ logEnabledFeatures),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);
var logEnabledFeatures = function logEnabledFeatures(features) {
  var enabledFeatures = Object.keys(features);
  if (!features || enabledFeatures.length === 0) {
    return;
  }
  var logString = "Server started:";

  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
  for (var i = 0; i < enabledFeatures.length; i++) {
    var key = enabledFeatures[i];
    logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
  }
  // replace last comma with a period
  logString = logString.slice(0, -1).concat(".");
  log.info(logString);
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");


/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */
function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};
  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");
    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;
    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {
      // URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }
    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }
  return options;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");



/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */
function reloadApp(_ref, status) {
  var hot = _ref.hot,
    liveReload = _ref.liveReload;
  if (status.isUnloading) {
    return;
  }
  var currentHash = status.currentHash,
    previousHash = status.previousHash;
  var isInitial = currentHash.indexOf( /** @type {string} */previousHash) >= 0;
  if (isInitial) {
    return;
  }

  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */
  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }
  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);
    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  }
  // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self;

    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");

/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }
  return string.replace(ansiRegex, "");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
  /** @type {undefined|string} */
  var lastHash;
  var upToDate = function upToDate() {
    return (/** @type {string} */lastHash.indexOf(__webpack_require__.h()) >= 0
    );
  };
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  var check = function check() {
    module.hot.check(true).then(function (updatedModules) {
      if (!updatedModules) {
        log("warning", "[HMR] Cannot find update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
        log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
        if (typeof window !== "undefined") {
          window.location.reload();
        }
        return;
      }
      if (!upToDate()) {
        check();
      }
      __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
      if (upToDate()) {
        log("info", "[HMR] App is up to date.");
      }
    }).catch(function (err) {
      var status = module.hot.status();
      if (["abort", "fail"].indexOf(status) >= 0) {
        log("warning", "[HMR] Cannot apply update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
        log("warning", "[HMR] " + log.formatError(err));
        if (typeof window !== "undefined") {
          window.location.reload();
        }
      } else {
        log("warning", "[HMR] Update failed: " + log.formatError(err));
      }
    });
  };
  var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
  hotEmitter.on("webpackHotUpdate", function (currentHash) {
    lastHash = currentHash;
    if (!upToDate() && module.hot.status() === "idle") {
      log("info", "[HMR] Checking for updates on the server...");
      check();
    }
  });
  log("info", "[HMR] Waiting for update signal from WDS...");
} else {}

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }
  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";
function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;
  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

/***/ }),

/***/ "./_scripts/componentLibrary/dev/src/preview/index.tsx":
/*!*************************************************************!*\
  !*** ./_scripts/componentLibrary/dev/src/preview/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mybricks_plugin_connector_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybricks/plugin-connector-http */ "./node_modules/@mybricks/plugin-connector-http/runtime/plugin.js");
/* harmony import */ var _mybricks_plugin_connector_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybricks_plugin_connector_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybricks_render_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybricks/render-web */ "./node_modules/@mybricks/render-web/index.min.js");
/* harmony import */ var _mybricks_render_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybricks_render_web__WEBPACK_IMPORTED_MODULE_3__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




// @ts-ignore

//准备编译的数据，结构为 {slot,script}，根据 toJSON 导出
var json = localStorage.getItem("--preview--");
if (!json) {
  throw new Error("数据错误");
}
try {
  json = JSON.parse(json);
} catch (ex) {
  throw ex;
}
(function init() {
  return __awaiter(this, void 0, void 0, function () {
    var root;
    return __generator(this, function (_a) {
      root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
      root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Page, null));
      return [2 /*return*/];
    });
  });
})();

function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, (0,_mybricks_render_web__WEBPACK_IMPORTED_MODULE_3__.render)(json, {
    env: {
      i18n: function (text) {
        return text;
      },
      callConnector: _mybricks_plugin_connector_http__WEBPACK_IMPORTED_MODULE_2__.call,
      vars: {
        getQuery: function () {
          return {};
        }
      },
      ajax: function (url, opts) {
        return new Promise(function (resolve, reject) {
          if (typeof url !== 'string') {
            reject('url is undefined');
          }
          (0,axios__WEBPACK_IMPORTED_MODULE_4__["default"])(__assign({
            url: url
          }, opts)).then(function (resp) {
            if (resp && resp.status === 200) {
              resolve(resp.data);
            } else {
              reject(resp);
            }
          }).catch(function (error) {
            reject(error);
          });
        });
      }
    }
  }));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: adapters => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if (adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
      }
      throw new Error(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
    }
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    return adapter;
  },
  adapters: knownAdapters
});

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);
  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath)) && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);
    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
});

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];
axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];
axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;
axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];
axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");










const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(headers.common, headers[config.method]);
    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype = AxiosError.prototype;
const descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");




const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");



class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, response);
    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, reason.response);
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");




const headersToObject = thing => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({
        caseless
      }, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Request failed with status code ' + response.status, [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  adapter: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].isNode ? 'http' : 'xhr',
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);
    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);
    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data)) : data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__["default"])(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
  defaults.headers[method] = {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);

/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.5.0";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
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
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ? params.toString() : new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
        cookie.push('path=' + path);
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement('a');
  let originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    let href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    const parsed = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
});

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value) || (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = thing => {
  let kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  const {
    caseless
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const toJSONObject = obj => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("preview." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("eeca2d926f6cdcb6663d")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Mybricks:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"preview": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateMybricks"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=warn&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./_scripts/componentLibrary/dev/src/preview/index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=preview.js.map