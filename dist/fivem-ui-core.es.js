var Oe = Object.defineProperty;
var Pe = (e, t, n) => t in e ? Oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => Pe(e, typeof t != "symbol" ? t + "" : t, n);
import { createEventDispatcher as Te } from "svelte";
const R = /* @__PURE__ */ new Map();
function pe() {
  return typeof window < "u" && typeof window.GetParentResourceName == "function";
}
function qe() {
  return pe() ? window.GetParentResourceName() : "dev-resource";
}
function ze() {
  typeof window > "u" || window.__fivemUiCoreMessageBound || (window.__fivemUiCoreMessageBound = !0, window.addEventListener("message", (e) => {
    const t = e == null ? void 0 : e.data;
    if (!t || typeof t != "object") return;
    const { action: n, data: l } = t;
    if (!n) return;
    const i = R.get(n);
    !i || i.size === 0 || i.forEach((s) => {
      try {
        s(l);
      } catch (r) {
        console.error("[fivem-ui/core] onEvent callback error:", r);
      }
    });
  }));
}
function Fe(e, t) {
  return R.has(e) || R.set(e, /* @__PURE__ */ new Set()), R.get(e).add(t), ze(), () => Re(e, t);
}
function gt(e, t) {
  const n = Fe(e, (l) => {
    n(), t(l);
  });
  return n;
}
function Re(e, t) {
  const n = R.get(e);
  n && (n.delete(t), n.size === 0 && R.delete(e));
}
async function bt(e, t) {
  const n = qe();
  if (!pe())
    return console.debug("[fivem-ui/core] sendEvent (dev):", { eventName: e, data: t }), new Response(JSON.stringify({ ok: !0, dev: !0 }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  const l = `https://${n}/${e}`;
  return fetch(l, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(t ?? {})
  });
}
const Ee = {
  colors: {
    primary: "#4CC9F0",
    success: "#2ecc71",
    warning: "#f39c12",
    error: "#e74c3c",
    surface: "#161616",
    onSurface: "#ffffff",
    border: "#2a2a2a"
  },
  radius: "10px",
  fontFamily: "Inter, system-ui, sans-serif"
};
function Ae(e = Ee) {
  return {
    "--ui-color-primary": e.colors.primary,
    "--ui-color-success": e.colors.success,
    "--ui-color-warning": e.colors.warning,
    "--ui-color-error": e.colors.error,
    "--ui-color-surface": e.colors.surface,
    "--ui-color-on-surface": e.colors.onSurface,
    "--ui-color-border": e.colors.border,
    "--ui-radius": e.radius,
    "--ui-font-family": e.fontFamily
  };
}
function E() {
}
function Le(e, t) {
  for (const n in t) e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Ce(e) {
  return e();
}
function re() {
  return /* @__PURE__ */ Object.create(null);
}
function L(e) {
  e.forEach(Ce);
}
function Me(e) {
  return typeof e == "function";
}
function j(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ue(e) {
  return Object.keys(e).length === 0;
}
function G(e, t, n, l) {
  if (e) {
    const i = je(e, t, n, l);
    return e[0](i);
  }
}
function je(e, t, n, l) {
  return e[1] && l ? Le(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function J(e, t, n, l) {
  if (e[2] && l) {
    const i = e[2](l(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], r = Math.max(t.dirty.length, i.length);
      for (let f = 0; f < r; f += 1)
        s[f] = t.dirty[f] | i[f];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function V(e, t, n, l, i, s) {
  if (i) {
    const r = je(t, n, l, s);
    e.p(r, i);
  }
}
function D(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Y(e) {
  return e ?? "";
}
function m(e, t) {
  e.appendChild(t);
}
function w(e, t, n) {
  e.insertBefore(t, n || null);
}
function y(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Se(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function x(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function C(e) {
  return document.createTextNode(e);
}
function p() {
  return C(" ");
}
function Be() {
  return C("");
}
function te(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function u(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ie(e) {
  return Array.from(e.childNodes);
}
function T(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
let ie;
function H(e) {
  ie = e;
}
const F = [], oe = [];
let A = [];
const fe = [], He = /* @__PURE__ */ Promise.resolve();
let ne = !1;
function Ge() {
  ne || (ne = !0, He.then(Ne));
}
function le(e) {
  A.push(e);
}
const ee = /* @__PURE__ */ new Set();
let q = 0;
function Ne() {
  if (q !== 0)
    return;
  const e = ie;
  do {
    try {
      for (; q < F.length; ) {
        const t = F[q];
        q++, H(t), Je(t.$$);
      }
    } catch (t) {
      throw F.length = 0, q = 0, t;
    }
    for (H(null), F.length = 0, q = 0; oe.length; ) oe.pop()();
    for (let t = 0; t < A.length; t += 1) {
      const n = A[t];
      ee.has(n) || (ee.add(n), n());
    }
    A.length = 0;
  } while (F.length);
  for (; fe.length; )
    fe.pop()();
  ne = !1, ee.clear(), H(e);
}
function Je(e) {
  if (e.fragment !== null) {
    e.update(), L(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(le);
  }
}
function Ve(e) {
  const t = [], n = [];
  A.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), A = t;
}
const X = /* @__PURE__ */ new Set();
let O;
function De() {
  O = {
    r: 0,
    c: [],
    p: O
    // parent group
  };
}
function Ke() {
  O.r || L(O.c), O = O.p;
}
function M(e, t) {
  e && e.i && (X.delete(e), e.i(t));
}
function P(e, t, n, l) {
  if (e && e.o) {
    if (X.has(e)) return;
    X.add(e), O.c.push(() => {
      X.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else l && l();
}
function Z(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Qe(e, t, n) {
  const { fragment: l, after_update: i } = e.$$;
  l && l.m(t, n), le(() => {
    const s = e.$$.on_mount.map(Ce).filter(Me);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : L(s), e.$$.on_mount = [];
  }), i.forEach(le);
}
function We(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ve(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xe(e, t) {
  e.$$.dirty[0] === -1 && (F.push(e), Ge(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function S(e, t, n, l, i, s, r = null, f = [-1]) {
  const c = ie;
  H(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: E,
    not_equal: i,
    bound: re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: re(),
    dirty: f,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  r && r(o.root);
  let a = !1;
  if (o.ctx = n ? n(e, t.props || {}, (d, _, ...h) => {
    const b = h.length ? h[0] : _;
    return o.ctx && i(o.ctx[d], o.ctx[d] = b) && (!o.skip_bound && o.bound[d] && o.bound[d](b), a && Xe(e, d)), _;
  }) : [], o.update(), a = !0, L(o.before_update), o.fragment = l ? l(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = Ie(t.target);
      o.fragment && o.fragment.l(d), d.forEach(y);
    } else
      o.fragment && o.fragment.c();
    t.intro && M(e.$$.fragment), Qe(e, t.target, t.anchor), Ne();
  }
  H(c);
}
class B {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    We(this, 1), this.$destroy = E;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Me(n))
      return E;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Ue(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ye);
function Ze(e) {
  let t, n, l, i, s;
  const r = (
    /*#slots*/
    e[3].default
  ), f = G(
    r,
    e,
    /*$$scope*/
    e[2],
    null
  );
  return {
    c() {
      t = v("div"), n = v("style"), n.textContent = `:global(:root) {\r
			font-family: var(--ui-font-family);\r
		}`, l = p(), f && f.c(), u(t, "style", i = Object.entries(
        /*vars*/
        e[0]
      ).map(ue).join("; "));
    },
    m(c, o) {
      w(c, t, o), m(t, n), m(t, l), f && f.m(t, null), s = !0;
    },
    p(c, [o]) {
      f && f.p && (!s || o & /*$$scope*/
      4) && V(
        f,
        r,
        c,
        /*$$scope*/
        c[2],
        s ? J(
          r,
          /*$$scope*/
          c[2],
          o,
          null
        ) : D(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!s || o & /*vars*/
      1 && i !== (i = Object.entries(
        /*vars*/
        c[0]
      ).map(ue).join("; "))) && u(t, "style", i);
    },
    i(c) {
      s || (M(f, c), s = !0);
    },
    o(c) {
      P(f, c), s = !1;
    },
    d(c) {
      c && y(t), f && f.d(c);
    }
  };
}
const ue = ([e, t]) => `${e}: ${t}`;
function $e(e, t, n) {
  let l, { $$slots: i = {}, $$scope: s } = t, { theme: r = Ee } = t;
  return e.$$set = (f) => {
    "theme" in f && n(1, r = f.theme), "$$scope" in f && n(2, s = f.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*theme*/
    2 && n(0, l = Ae(r));
  }, [l, r, s, i];
}
class yt extends B {
  constructor(t) {
    super(), S(this, t, $e, Ze, j, { theme: 1 });
  }
}
function ce(e) {
  let t, n;
  return {
    c() {
      t = v("span"), n = C(
        /*icon*/
        e[2]
      ), u(t, "class", "icon svelte-12nvr3e"), u(t, "aria-hidden", "true");
    },
    m(l, i) {
      w(l, t, i), m(t, n);
    },
    p(l, i) {
      i & /*icon*/
      4 && T(
        n,
        /*icon*/
        l[2]
      );
    },
    d(l) {
      l && y(t);
    }
  };
}
function xe(e) {
  let t, n, l, i, s, r, f = (
    /*icon*/
    e[2] && ce(e)
  );
  const c = (
    /*#slots*/
    e[4].default
  ), o = G(
    c,
    e,
    /*$$scope*/
    e[3],
    null
  );
  return {
    c() {
      t = v("div"), f && f.c(), n = p(), l = v("span"), i = C(
        /*message*/
        e[1]
      ), o && o.c(), u(l, "class", "text svelte-12nvr3e"), u(t, "class", s = Y(`ui-notification ${/*type*/
      e[0]}`) + " svelte-12nvr3e");
    },
    m(a, d) {
      w(a, t, d), f && f.m(t, null), m(t, n), m(t, l), m(l, i), o && o.m(l, null), r = !0;
    },
    p(a, [d]) {
      /*icon*/
      a[2] ? f ? f.p(a, d) : (f = ce(a), f.c(), f.m(t, n)) : f && (f.d(1), f = null), (!r || d & /*message*/
      2) && T(
        i,
        /*message*/
        a[1]
      ), o && o.p && (!r || d & /*$$scope*/
      8) && V(
        o,
        c,
        a,
        /*$$scope*/
        a[3],
        r ? J(
          c,
          /*$$scope*/
          a[3],
          d,
          null
        ) : D(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!r || d & /*type*/
      1 && s !== (s = Y(`ui-notification ${/*type*/
      a[0]}`) + " svelte-12nvr3e")) && u(t, "class", s);
    },
    i(a) {
      r || (M(o, a), r = !0);
    },
    o(a) {
      P(o, a), r = !1;
    },
    d(a) {
      a && y(t), f && f.d(), o && o.d(a);
    }
  };
}
function et(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { type: s = "info" } = t, { message: r = "" } = t, { icon: f = null } = t;
  return e.$$set = (c) => {
    "type" in c && n(0, s = c.type), "message" in c && n(1, r = c.message), "icon" in c && n(2, f = c.icon), "$$scope" in c && n(3, i = c.$$scope);
  }, [s, r, f, i, l];
}
class wt extends B {
  constructor(t) {
    super(), S(this, t, et, xe, j, { type: 0, message: 1, icon: 2 });
  }
}
const tt = (e) => ({}), ae = (e) => ({});
function de(e) {
  let t, n, l, i, s, r, f, c, o, a = (
    /*title*/
    e[1] && _e(e)
  );
  const d = (
    /*#slots*/
    e[5].default
  ), _ = G(
    d,
    e,
    /*$$scope*/
    e[4],
    null
  ), h = (
    /*#slots*/
    e[5].actions
  ), b = G(
    h,
    e,
    /*$$scope*/
    e[4],
    ae
  );
  return {
    c() {
      t = v("div"), n = v("div"), a && a.c(), l = p(), i = v("section"), _ && _.c(), s = p(), r = v("footer"), b && b.c(), u(i, "class", "ui-modal__content svelte-1vnqye4"), u(r, "class", "ui-modal__actions svelte-1vnqye4"), u(n, "class", "ui-modal svelte-1vnqye4"), u(n, "role", "dialog"), u(n, "aria-modal", "true"), u(
        n,
        "aria-label",
        /*title*/
        e[1]
      ), u(t, "class", "ui-modal-backdrop svelte-1vnqye4"), u(t, "data-backdrop", "1"), u(t, "role", "presentation"), u(t, "tabindex", "-1");
    },
    m(g, k) {
      w(g, t, k), m(t, n), a && a.m(n, null), m(n, l), m(n, i), _ && _.m(i, null), m(n, s), m(n, r), b && b.m(r, null), f = !0, c || (o = [
        te(
          t,
          "click",
          /*onBackdropClick*/
          e[2]
        ),
        te(
          t,
          "keydown",
          /*onKeydown*/
          e[3]
        )
      ], c = !0);
    },
    p(g, k) {
      /*title*/
      g[1] ? a ? a.p(g, k) : (a = _e(g), a.c(), a.m(n, l)) : a && (a.d(1), a = null), _ && _.p && (!f || k & /*$$scope*/
      16) && V(
        _,
        d,
        g,
        /*$$scope*/
        g[4],
        f ? J(
          d,
          /*$$scope*/
          g[4],
          k,
          null
        ) : D(
          /*$$scope*/
          g[4]
        ),
        null
      ), b && b.p && (!f || k & /*$$scope*/
      16) && V(
        b,
        h,
        g,
        /*$$scope*/
        g[4],
        f ? J(
          h,
          /*$$scope*/
          g[4],
          k,
          tt
        ) : D(
          /*$$scope*/
          g[4]
        ),
        ae
      ), (!f || k & /*title*/
      2) && u(
        n,
        "aria-label",
        /*title*/
        g[1]
      );
    },
    i(g) {
      f || (M(_, g), M(b, g), f = !0);
    },
    o(g) {
      P(_, g), P(b, g), f = !1;
    },
    d(g) {
      g && y(t), a && a.d(), _ && _.d(g), b && b.d(g), c = !1, L(o);
    }
  };
}
function _e(e) {
  let t, n;
  return {
    c() {
      t = v("header"), n = C(
        /*title*/
        e[1]
      ), u(t, "class", "ui-modal__header svelte-1vnqye4");
    },
    m(l, i) {
      w(l, t, i), m(t, n);
    },
    p(l, i) {
      i & /*title*/
      2 && T(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && y(t);
    }
  };
}
function nt(e) {
  let t, n, l = (
    /*open*/
    e[0] && de(e)
  );
  return {
    c() {
      l && l.c(), t = Be();
    },
    m(i, s) {
      l && l.m(i, s), w(i, t, s), n = !0;
    },
    p(i, [s]) {
      /*open*/
      i[0] ? l ? (l.p(i, s), s & /*open*/
      1 && M(l, 1)) : (l = de(i), l.c(), M(l, 1), l.m(t.parentNode, t)) : l && (De(), P(l, 1, 1, () => {
        l = null;
      }), Ke());
    },
    i(i) {
      n || (M(l), n = !0);
    },
    o(i) {
      P(l), n = !1;
    },
    d(i) {
      i && y(t), l && l.d(i);
    }
  };
}
function lt(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { open: s = !1 } = t, { title: r = "" } = t;
  function f(o) {
    var a, d;
    ((d = (a = o.target) == null ? void 0 : a.dataset) == null ? void 0 : d.backdrop) === "1" && n(0, s = !1);
  }
  function c(o) {
    o.key === "Escape" && n(0, s = !1);
  }
  return e.$$set = (o) => {
    "open" in o && n(0, s = o.open), "title" in o && n(1, r = o.title), "$$scope" in o && n(4, i = o.$$scope);
  }, [s, r, f, c, i, l];
}
class kt extends B {
  constructor(t) {
    super(), S(this, t, lt, nt, j, { open: 0, title: 1 });
  }
}
function it(e) {
  let t = Math.round(
    /*pct*/
    e[1]()
  ) + "", n, l;
  return {
    c() {
      n = C(t), l = C("%");
    },
    m(i, s) {
      w(i, n, s), w(i, l, s);
    },
    p: E,
    d(i) {
      i && (y(n), y(l));
    }
  };
}
function st(e) {
  let t, n, l, i, s, r, f;
  const c = (
    /*#slots*/
    e[5].default
  ), o = G(
    c,
    e,
    /*$$scope*/
    e[4],
    null
  ), a = o || it(e);
  return {
    c() {
      t = v("div"), n = v("div"), l = v("div"), s = p(), r = v("div"), a && a.c(), u(l, "class", "ui-progress__bar svelte-1xhor73"), u(l, "style", i = `width:${/*pct*/
      e[1]()}%; ${/*color*/
      e[0] ? `background:${/*color*/
      e[0]}` : ""}`), u(n, "class", "ui-progress__track svelte-1xhor73"), u(r, "class", "ui-progress__label svelte-1xhor73"), u(t, "class", "ui-progress svelte-1xhor73");
    },
    m(d, _) {
      w(d, t, _), m(t, n), m(n, l), m(t, s), m(t, r), a && a.m(r, null), f = !0;
    },
    p(d, [_]) {
      (!f || _ & /*color*/
      1 && i !== (i = `width:${/*pct*/
      d[1]()}%; ${/*color*/
      d[0] ? `background:${/*color*/
      d[0]}` : ""}`)) && u(l, "style", i), o && o.p && (!f || _ & /*$$scope*/
      16) && V(
        o,
        c,
        d,
        /*$$scope*/
        d[4],
        f ? J(
          c,
          /*$$scope*/
          d[4],
          _,
          null
        ) : D(
          /*$$scope*/
          d[4]
        ),
        null
      );
    },
    i(d) {
      f || (M(a, d), f = !0);
    },
    o(d) {
      P(a, d), f = !1;
    },
    d(d) {
      d && y(t), a && a.d(d);
    }
  };
}
function rt(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { value: s = 0 } = t, { max: r = 100 } = t, { color: f = null } = t;
  const c = () => Math.max(0, Math.min(100, s / (r || 1) * 100));
  return e.$$set = (o) => {
    "value" in o && n(2, s = o.value), "max" in o && n(3, r = o.max), "color" in o && n(0, f = o.color), "$$scope" in o && n(4, i = o.$$scope);
  }, [f, c, s, r, i, l];
}
class pt extends B {
  constructor(t) {
    super(), S(this, t, rt, st, j, { value: 2, max: 3, color: 0 });
  }
}
function ot(e) {
  let t, n, l, i, s, r, f, c, o, a, d;
  return {
    c() {
      t = x("svg"), n = x("circle"), s = x("circle"), u(n, "cx", l = /*size*/
      e[0] / 2), u(n, "cy", i = /*size*/
      e[0] / 2), u(
        n,
        "r",
        /*radius*/
        e[4]
      ), u(n, "stroke", "rgba(255,255,255,0.08)"), u(
        n,
        "stroke-width",
        /*stroke*/
        e[1]
      ), u(n, "fill", "none"), u(s, "cx", r = /*size*/
      e[0] / 2), u(s, "cy", f = /*size*/
      e[0] / 2), u(
        s,
        "r",
        /*radius*/
        e[4]
      ), u(s, "stroke", c = /*color*/
      e[2] || "var(--ui-color-primary)"), u(
        s,
        "stroke-width",
        /*stroke*/
        e[1]
      ), u(s, "stroke-dasharray", o = `${/*dash*/
      e[3]} ${/*gap*/
      e[5]}`), u(s, "stroke-linecap", "round"), u(s, "fill", "none"), u(s, "transform", a = `rotate(-90 ${/*size*/
      e[0] / 2} ${/*size*/
      e[0] / 2})`), u(
        t,
        "width",
        /*size*/
        e[0]
      ), u(
        t,
        "height",
        /*size*/
        e[0]
      ), u(t, "viewBox", d = `0 0 ${/*size*/
      e[0]} ${/*size*/
      e[0]}`), u(t, "class", "ui-progress-circle");
    },
    m(_, h) {
      w(_, t, h), m(t, n), m(t, s);
    },
    p(_, [h]) {
      h & /*size*/
      1 && l !== (l = /*size*/
      _[0] / 2) && u(n, "cx", l), h & /*size*/
      1 && i !== (i = /*size*/
      _[0] / 2) && u(n, "cy", i), h & /*radius*/
      16 && u(
        n,
        "r",
        /*radius*/
        _[4]
      ), h & /*stroke*/
      2 && u(
        n,
        "stroke-width",
        /*stroke*/
        _[1]
      ), h & /*size*/
      1 && r !== (r = /*size*/
      _[0] / 2) && u(s, "cx", r), h & /*size*/
      1 && f !== (f = /*size*/
      _[0] / 2) && u(s, "cy", f), h & /*radius*/
      16 && u(
        s,
        "r",
        /*radius*/
        _[4]
      ), h & /*color*/
      4 && c !== (c = /*color*/
      _[2] || "var(--ui-color-primary)") && u(s, "stroke", c), h & /*stroke*/
      2 && u(
        s,
        "stroke-width",
        /*stroke*/
        _[1]
      ), h & /*dash, gap*/
      40 && o !== (o = `${/*dash*/
      _[3]} ${/*gap*/
      _[5]}`) && u(s, "stroke-dasharray", o), h & /*size*/
      1 && a !== (a = `rotate(-90 ${/*size*/
      _[0] / 2} ${/*size*/
      _[0] / 2})`) && u(s, "transform", a), h & /*size*/
      1 && u(
        t,
        "width",
        /*size*/
        _[0]
      ), h & /*size*/
      1 && u(
        t,
        "height",
        /*size*/
        _[0]
      ), h & /*size*/
      1 && d !== (d = `0 0 ${/*size*/
      _[0]} ${/*size*/
      _[0]}`) && u(t, "viewBox", d);
    },
    i: E,
    o: E,
    d(_) {
      _ && y(t);
    }
  };
}
function ft(e, t, n) {
  let l, i, s, r, f, { value: c = 0 } = t, { max: o = 100 } = t, { size: a = 48 } = t, { stroke: d = 6 } = t, { color: _ = null } = t;
  return e.$$set = (h) => {
    "value" in h && n(6, c = h.value), "max" in h && n(7, o = h.max), "size" in h && n(0, a = h.size), "stroke" in h && n(1, d = h.stroke), "color" in h && n(2, _ = h.color);
  }, e.$$.update = () => {
    e.$$.dirty & /*size, stroke*/
    3 && n(4, l = (a - d) / 2), e.$$.dirty & /*radius*/
    16 && n(8, i = 2 * Math.PI * l), e.$$.dirty & /*value, max*/
    192 && n(9, s = Math.max(0, Math.min(1, c / (o || 1)))), e.$$.dirty & /*circumference, pct*/
    768 && n(3, r = i * s), e.$$.dirty & /*circumference, dash*/
    264 && n(5, f = i - r);
  }, [a, d, _, r, l, f, c, o, i, s];
}
class Et extends B {
  constructor(t) {
    super(), S(this, t, ft, ot, j, {
      value: 6,
      max: 7,
      size: 0,
      stroke: 1,
      color: 2
    });
  }
}
function ut(e) {
  let t, n, l, i, s, r, f, c, o, a, d, _, h, b, g, k, K, se, Q, U, W;
  return {
    c() {
      t = v("div"), n = v("div"), l = v("span"), l.textContent = "HP", i = p(), s = v("div"), r = v("div"), c = p(), o = v("div"), a = v("span"), a.textContent = "Hunger", d = p(), _ = v("div"), h = v("div"), g = p(), k = v("div"), K = v("span"), K.textContent = "Stamina", se = p(), Q = v("div"), U = v("div"), u(l, "class", "name svelte-15t55bn"), u(r, "class", "bar hp svelte-15t55bn"), u(r, "style", f = `width:${z(
        /*hp*/
        e[0]
      )}%`), u(s, "class", "track svelte-15t55bn"), u(n, "class", "seg svelte-15t55bn"), u(a, "class", "name svelte-15t55bn"), u(h, "class", "bar hunger svelte-15t55bn"), u(h, "style", b = `width:${z(
        /*hunger*/
        e[1]
      )}%`), u(_, "class", "track svelte-15t55bn"), u(o, "class", "seg svelte-15t55bn"), u(K, "class", "name svelte-15t55bn"), u(U, "class", "bar stamina svelte-15t55bn"), u(U, "style", W = `width:${z(
        /*stamina*/
        e[2]
      )}%`), u(Q, "class", "track svelte-15t55bn"), u(k, "class", "seg svelte-15t55bn"), u(t, "class", "ui-statusbar svelte-15t55bn");
    },
    m(N, I) {
      w(N, t, I), m(t, n), m(n, l), m(n, i), m(n, s), m(s, r), m(t, c), m(t, o), m(o, a), m(o, d), m(o, _), m(_, h), m(t, g), m(t, k), m(k, K), m(k, se), m(k, Q), m(Q, U);
    },
    p(N, [I]) {
      I & /*hp*/
      1 && f !== (f = `width:${z(
        /*hp*/
        N[0]
      )}%`) && u(r, "style", f), I & /*hunger*/
      2 && b !== (b = `width:${z(
        /*hunger*/
        N[1]
      )}%`) && u(h, "style", b), I & /*stamina*/
      4 && W !== (W = `width:${z(
        /*stamina*/
        N[2]
      )}%`) && u(U, "style", W);
    },
    i: E,
    o: E,
    d(N) {
      N && y(t);
    }
  };
}
function z(e) {
  return Math.max(0, Math.min(100, e));
}
function ct(e, t, n) {
  let { hp: l = 100 } = t, { hunger: i = 100 } = t, { stamina: s = 100 } = t;
  return e.$$set = (r) => {
    "hp" in r && n(0, l = r.hp), "hunger" in r && n(1, i = r.hunger), "stamina" in r && n(2, s = r.stamina);
  }, [l, i, s];
}
class Ct extends B {
  constructor(t) {
    super(), S(this, t, ct, ut, j, { hp: 0, hunger: 1, stamina: 2 });
  }
}
function me(e, t, n) {
  const l = e.slice();
  return l[2] = t[n], l;
}
function he(e) {
  let t, n = (
    /*item*/
    e[2].icon + ""
  ), l;
  return {
    c() {
      t = v("span"), l = C(n), u(t, "class", "icon");
    },
    m(i, s) {
      w(i, t, s), m(t, l);
    },
    p(i, s) {
      s & /*items*/
      1 && n !== (n = /*item*/
      i[2].icon + "") && T(l, n);
    },
    d(i) {
      i && y(t);
    }
  };
}
function ve(e) {
  let t, n = (
    /*item*/
    e[2].label + ""
  ), l;
  return {
    c() {
      t = v("span"), l = C(n), u(t, "class", "label svelte-1yduwgy");
    },
    m(i, s) {
      w(i, t, s), m(t, l);
    },
    p(i, s) {
      s & /*items*/
      1 && n !== (n = /*item*/
      i[2].label + "") && T(l, n);
    },
    d(i) {
      i && y(t);
    }
  };
}
function ge(e) {
  let t, n, l = (
    /*item*/
    e[2].slot + ""
  ), i, s, r, f, c, o = (
    /*item*/
    e[2].icon && he(e)
  ), a = (
    /*item*/
    e[2].label && ve(e)
  );
  return {
    c() {
      t = v("div"), n = v("span"), i = C(l), s = p(), o && o.c(), r = p(), a && a.c(), f = p(), u(n, "class", "num svelte-1yduwgy"), u(t, "class", c = Y(`slot ${/*selected*/
      e[1] === /*item*/
      e[2].slot ? "selected" : ""}`) + " svelte-1yduwgy");
    },
    m(d, _) {
      w(d, t, _), m(t, n), m(n, i), m(t, s), o && o.m(t, null), m(t, r), a && a.m(t, null), m(t, f);
    },
    p(d, _) {
      _ & /*items*/
      1 && l !== (l = /*item*/
      d[2].slot + "") && T(i, l), /*item*/
      d[2].icon ? o ? o.p(d, _) : (o = he(d), o.c(), o.m(t, r)) : o && (o.d(1), o = null), /*item*/
      d[2].label ? a ? a.p(d, _) : (a = ve(d), a.c(), a.m(t, f)) : a && (a.d(1), a = null), _ & /*selected, items*/
      3 && c !== (c = Y(`slot ${/*selected*/
      d[1] === /*item*/
      d[2].slot ? "selected" : ""}`) + " svelte-1yduwgy") && u(t, "class", c);
    },
    d(d) {
      d && y(t), o && o.d(), a && a.d();
    }
  };
}
function at(e) {
  let t, n = Z(
    /*items*/
    e[0]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = ge(me(e, n, i));
  return {
    c() {
      t = v("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      u(t, "class", "ui-hotbar svelte-1yduwgy");
    },
    m(i, s) {
      w(i, t, s);
      for (let r = 0; r < l.length; r += 1)
        l[r] && l[r].m(t, null);
    },
    p(i, [s]) {
      if (s & /*selected, items*/
      3) {
        n = Z(
          /*items*/
          i[0]
        );
        let r;
        for (r = 0; r < n.length; r += 1) {
          const f = me(i, n, r);
          l[r] ? l[r].p(f, s) : (l[r] = ge(f), l[r].c(), l[r].m(t, null));
        }
        for (; r < l.length; r += 1)
          l[r].d(1);
        l.length = n.length;
      }
    },
    i: E,
    o: E,
    d(i) {
      i && y(t), Se(l, i);
    }
  };
}
function dt(e, t, n) {
  let { items: l = [] } = t, { selected: i = null } = t;
  return e.$$set = (s) => {
    "items" in s && n(0, l = s.items), "selected" in s && n(1, i = s.selected);
  }, [l, i];
}
class Mt extends B {
  constructor(t) {
    super(), S(this, t, dt, at, j, { items: 0, selected: 1 });
  }
}
function be(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l[6] = n, l;
}
function ye(e) {
  let t, n, l, i = Z(
    /*items*/
    e[1]
  ), s = [];
  for (let r = 0; r < i.length; r += 1)
    s[r] = we(be(e, i, r));
  return {
    c() {
      t = v("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      n = p(), l = v("div"), u(l, "class", "center svelte-wy0jhq"), u(t, "class", "ui-radial svelte-wy0jhq");
    },
    m(r, f) {
      w(r, t, f);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(t, null);
      m(t, n), m(t, l);
    },
    p(r, f) {
      if (f & /*items, radius, dispatch*/
      6) {
        i = Z(
          /*items*/
          r[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const o = be(r, i, c);
          s[c] ? s[c].p(o, f) : (s[c] = we(o), s[c].c(), s[c].m(t, n));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = i.length;
      }
    },
    d(r) {
      r && y(t), Se(s, r);
    }
  };
}
function we(e) {
  let t, n = (
    /*item*/
    e[4].label + ""
  ), l, i, s, r;
  function f() {
    return (
      /*click_handler*/
      e[3](
        /*item*/
        e[4]
      )
    );
  }
  return {
    c() {
      t = v("button"), l = C(n), u(t, "class", "entry svelte-wy0jhq"), u(t, "style", i = `transform: translate(-50%, -50%) rotate(${/*i*/
      e[6] / /*items*/
      e[1].length * 360}deg) translate(${ke}px) rotate(-${/*i*/
      e[6] / /*items*/
      e[1].length * 360}deg);`);
    },
    m(c, o) {
      w(c, t, o), m(t, l), s || (r = te(t, "click", f), s = !0);
    },
    p(c, o) {
      e = c, o & /*items*/
      2 && n !== (n = /*item*/
      e[4].label + "") && T(l, n), o & /*items*/
      2 && i !== (i = `transform: translate(-50%, -50%) rotate(${/*i*/
      e[6] / /*items*/
      e[1].length * 360}deg) translate(${ke}px) rotate(-${/*i*/
      e[6] / /*items*/
      e[1].length * 360}deg);`) && u(t, "style", i);
    },
    d(c) {
      c && y(t), s = !1, r();
    }
  };
}
function _t(e) {
  let t, n = (
    /*open*/
    e[0] && ye(e)
  );
  return {
    c() {
      n && n.c(), t = Be();
    },
    m(l, i) {
      n && n.m(l, i), w(l, t, i);
    },
    p(l, [i]) {
      /*open*/
      l[0] ? n ? n.p(l, i) : (n = ye(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: E,
    o: E,
    d(l) {
      l && y(t), n && n.d(l);
    }
  };
}
const ke = 96;
function mt(e, t, n) {
  let { open: l = !1 } = t, { items: i = [] } = t;
  const s = Te(), r = (f) => s("select", f.id);
  return e.$$set = (f) => {
    "open" in f && n(0, l = f.open), "items" in f && n(1, i = f.items);
  }, [l, i, s, r];
}
class jt extends B {
  constructor(t) {
    super(), S(this, t, mt, _t, j, { open: 0, items: 1 });
  }
}
export {
  Mt as Hotbar,
  kt as Modal,
  wt as Notification,
  pt as ProgressBar,
  Et as ProgressCircle,
  jt as RadialMenu,
  Ct as StatusBar,
  yt as ThemeProvider,
  Ee as defaultTheme,
  Re as offEvent,
  Fe as onEvent,
  gt as onceEvent,
  bt as sendEvent,
  Ae as themeToCssVars
};
