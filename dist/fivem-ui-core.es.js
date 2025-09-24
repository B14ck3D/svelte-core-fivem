var Pe = Object.defineProperty;
var Ne = (t, e, n) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => Ne(t, typeof e != "symbol" ? e + "" : e, n);
import { createEventDispatcher as qe } from "svelte";
const A = /* @__PURE__ */ new Map();
function we() {
  return typeof window < "u" && typeof window.GetParentResourceName == "function";
}
function Oe() {
  return we() ? window.GetParentResourceName() : "dev-resource";
}
function Te() {
  typeof window > "u" || window.__fivemUiCoreMessageBound || (window.__fivemUiCoreMessageBound = !0, window.addEventListener("message", (t) => {
    const e = t == null ? void 0 : t.data;
    if (!e || typeof e != "object") return;
    const { action: n, data: l } = e;
    if (!n) return;
    const i = A.get(n);
    !i || i.size === 0 || i.forEach((s) => {
      try {
        s(l);
      } catch (o) {
        console.error("[fivem-ui/core] onEvent callback error:", o);
      }
    });
  }));
}
function Fe(t, e) {
  return A.has(t) || A.set(t, /* @__PURE__ */ new Set()), A.get(t).add(e), Te(), () => ze(t, e);
}
function gt(t, e) {
  const n = Fe(t, (l) => {
    n(), e(l);
  });
  return n;
}
function ze(t, e) {
  const n = A.get(t);
  n && (n.delete(e), n.size === 0 && A.delete(t));
}
async function bt(t, e) {
  const n = Oe();
  if (!we()) {
    console.debug("[fivem-ui/core] sendEvent (dev):", { eventName: t, data: e });
    return;
  }
  const l = `https://${n}/${t}`;
  return fetch(l, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(e ?? {})
  });
}
const ke = {
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
function Ae(t = ke) {
  return {
    "--ui-color-primary": t.colors.primary,
    "--ui-color-success": t.colors.success,
    "--ui-color-warning": t.colors.warning,
    "--ui-color-error": t.colors.error,
    "--ui-color-surface": t.colors.surface,
    "--ui-color-on-surface": t.colors.onSurface,
    "--ui-color-border": t.colors.border,
    "--ui-radius": t.radius,
    "--ui-font-family": t.fontFamily
  };
}
function j() {
}
function Le(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function pe(t) {
  return t();
}
function se() {
  return /* @__PURE__ */ Object.create(null);
}
function J(t) {
  t.forEach(pe);
}
function je(t) {
  return typeof t == "function";
}
function M(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Re(t) {
  return Object.keys(t).length === 0;
}
function H(t, e, n, l) {
  if (t) {
    const i = Ce(t, e, n, l);
    return t[0](i);
  }
}
function Ce(t, e, n, l) {
  return t[1] && l ? Le(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function G(t, e, n, l) {
  if (t[2] && l) {
    const i = t[2](l(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(e.dirty.length, i.length);
      for (let r = 0; r < o; r += 1)
        s[r] = e.dirty[r] | i[r];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function V(t, e, n, l, i, s) {
  if (i) {
    const o = Ce(e, n, l, s);
    t.p(o, i);
  }
}
function D(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Y(t) {
  return t ?? "";
}
function m(t, e) {
  t.appendChild(e);
}
function w(t, e, n) {
  t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ee(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function h(t) {
  return document.createElement(t);
}
function x(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function C(t) {
  return document.createTextNode(t);
}
function p() {
  return C(" ");
}
function Me() {
  return C("");
}
function Se(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function u(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ie(t) {
  return Array.from(t.childNodes);
}
function O(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let le;
function U(t) {
  le = t;
}
const z = [], oe = [];
let L = [];
const re = [], Ue = /* @__PURE__ */ Promise.resolve();
let te = !1;
function He() {
  te || (te = !0, Ue.then(Be));
}
function ne(t) {
  L.push(t);
}
const ee = /* @__PURE__ */ new Set();
let T = 0;
function Be() {
  if (T !== 0)
    return;
  const t = le;
  do {
    try {
      for (; T < z.length; ) {
        const e = z[T];
        T++, U(e), Ge(e.$$);
      }
    } catch (e) {
      throw z.length = 0, T = 0, e;
    }
    for (U(null), z.length = 0, T = 0; oe.length; ) oe.pop()();
    for (let e = 0; e < L.length; e += 1) {
      const n = L[e];
      ee.has(n) || (ee.add(n), n());
    }
    L.length = 0;
  } while (z.length);
  for (; re.length; )
    re.pop()();
  te = !1, ee.clear(), U(t);
}
function Ge(t) {
  if (t.fragment !== null) {
    t.update(), J(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ne);
  }
}
function Ve(t) {
  const e = [], n = [];
  L.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), L = e;
}
const X = /* @__PURE__ */ new Set();
let N;
function De() {
  N = {
    r: 0,
    c: [],
    p: N
    // parent group
  };
}
function Je() {
  N.r || J(N.c), N = N.p;
}
function E(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function q(t, e, n, l) {
  if (t && t.o) {
    if (X.has(t)) return;
    X.add(t), N.c.push(() => {
      X.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else l && l();
}
function Z(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Ke(t, e, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, n), ne(() => {
    const s = t.$$.on_mount.map(pe).filter(je);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : J(s), t.$$.on_mount = [];
  }), i.forEach(ne);
}
function Qe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ve(n.after_update), J(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function We(t, e) {
  t.$$.dirty[0] === -1 && (z.push(t), He(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function S(t, e, n, l, i, s, o = null, r = [-1]) {
  const c = le;
  U(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: j,
    not_equal: i,
    bound: se(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: se(),
    dirty: r,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  o && o(f.root);
  let a = !1;
  if (f.ctx = n ? n(t, e.props || {}, (d, _, ...g) => {
    const b = g.length ? g[0] : _;
    return f.ctx && i(f.ctx[d], f.ctx[d] = b) && (!f.skip_bound && f.bound[d] && f.bound[d](b), a && We(t, d)), _;
  }) : [], f.update(), a = !0, J(f.before_update), f.fragment = l ? l(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Ie(e.target);
      f.fragment && f.fragment.l(d), d.forEach(y);
    } else
      f.fragment && f.fragment.c();
    e.intro && E(t.$$.fragment), Ke(t, e.target, e.anchor), Be();
  }
  U(c);
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
    Qe(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!je(n))
      return j;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Re(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Xe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Xe);
function Ye(t) {
  let e, n, l, i;
  const s = (
    /*#slots*/
    t[3].default
  ), o = H(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = h("div"), n = h("style"), n.textContent = `:global(:root) {\r
			font-family: var(--ui-font-family);\r
		}`, l = p(), o && o.c(), u(e, "style", Object.entries(
        /*vars*/
        t[0]
      ).map(Ze).join("; "));
    },
    m(r, c) {
      w(r, e, c), m(e, n), m(e, l), o && o.m(e, null), i = !0;
    },
    p(r, [c]) {
      o && o.p && (!i || c & /*$$scope*/
      4) && V(
        o,
        s,
        r,
        /*$$scope*/
        r[2],
        i ? G(
          s,
          /*$$scope*/
          r[2],
          c,
          null
        ) : D(
          /*$$scope*/
          r[2]
        ),
        null
      );
    },
    i(r) {
      i || (E(o, r), i = !0);
    },
    o(r) {
      q(o, r), i = !1;
    },
    d(r) {
      r && y(e), o && o.d(r);
    }
  };
}
const Ze = ([t, e]) => `${t}: ${e}`;
function $e(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { theme: s = ke } = e;
  const o = Ae(s);
  return t.$$set = (r) => {
    "theme" in r && n(1, s = r.theme), "$$scope" in r && n(2, i = r.$$scope);
  }, [o, s, i, l];
}
class yt extends B {
  constructor(e) {
    super(), S(this, e, $e, Ye, M, { theme: 1 });
  }
}
function fe(t) {
  let e, n;
  return {
    c() {
      e = h("span"), n = C(
        /*icon*/
        t[2]
      ), u(e, "class", "icon svelte-12nvr3e"), u(e, "aria-hidden", "true");
    },
    m(l, i) {
      w(l, e, i), m(e, n);
    },
    p(l, i) {
      i & /*icon*/
      4 && O(
        n,
        /*icon*/
        l[2]
      );
    },
    d(l) {
      l && y(e);
    }
  };
}
function xe(t) {
  let e, n, l, i, s, o, r = (
    /*icon*/
    t[2] && fe(t)
  );
  const c = (
    /*#slots*/
    t[4].default
  ), f = H(
    c,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      e = h("div"), r && r.c(), n = p(), l = h("span"), i = C(
        /*message*/
        t[1]
      ), f && f.c(), u(l, "class", "text svelte-12nvr3e"), u(e, "class", s = Y(`ui-notification ${/*type*/
      t[0]}`) + " svelte-12nvr3e");
    },
    m(a, d) {
      w(a, e, d), r && r.m(e, null), m(e, n), m(e, l), m(l, i), f && f.m(l, null), o = !0;
    },
    p(a, [d]) {
      /*icon*/
      a[2] ? r ? r.p(a, d) : (r = fe(a), r.c(), r.m(e, n)) : r && (r.d(1), r = null), (!o || d & /*message*/
      2) && O(
        i,
        /*message*/
        a[1]
      ), f && f.p && (!o || d & /*$$scope*/
      8) && V(
        f,
        c,
        a,
        /*$$scope*/
        a[3],
        o ? G(
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
      ), (!o || d & /*type*/
      1 && s !== (s = Y(`ui-notification ${/*type*/
      a[0]}`) + " svelte-12nvr3e")) && u(e, "class", s);
    },
    i(a) {
      o || (E(f, a), o = !0);
    },
    o(a) {
      q(f, a), o = !1;
    },
    d(a) {
      a && y(e), r && r.d(), f && f.d(a);
    }
  };
}
function et(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { type: s = "info" } = e, { message: o = "" } = e, { icon: r = null } = e;
  return t.$$set = (c) => {
    "type" in c && n(0, s = c.type), "message" in c && n(1, o = c.message), "icon" in c && n(2, r = c.icon), "$$scope" in c && n(3, i = c.$$scope);
  }, [s, o, r, i, l];
}
class wt extends B {
  constructor(e) {
    super(), S(this, e, et, xe, M, { type: 0, message: 1, icon: 2 });
  }
}
const tt = (t) => ({}), ue = (t) => ({});
function ce(t) {
  let e, n, l, i, s, o, r, c, f, a = (
    /*title*/
    t[1] && ae(t)
  );
  const d = (
    /*#slots*/
    t[4].default
  ), _ = H(
    d,
    t,
    /*$$scope*/
    t[3],
    null
  ), g = (
    /*#slots*/
    t[4].actions
  ), b = H(
    g,
    t,
    /*$$scope*/
    t[3],
    ue
  );
  return {
    c() {
      e = h("div"), n = h("div"), a && a.c(), l = p(), i = h("section"), _ && _.c(), s = p(), o = h("footer"), b && b.c(), u(i, "class", "ui-modal__content svelte-1vnqye4"), u(o, "class", "ui-modal__actions svelte-1vnqye4"), u(n, "class", "ui-modal svelte-1vnqye4"), u(n, "role", "dialog"), u(n, "aria-modal", "true"), u(
        n,
        "aria-label",
        /*title*/
        t[1]
      ), u(e, "class", "ui-modal-backdrop svelte-1vnqye4"), u(e, "data-backdrop", "1"), u(e, "role", "presentation");
    },
    m(v, k) {
      w(v, e, k), m(e, n), a && a.m(n, null), m(n, l), m(n, i), _ && _.m(i, null), m(n, s), m(n, o), b && b.m(o, null), r = !0, c || (f = Se(
        e,
        "click",
        /*onBackdropClick*/
        t[2]
      ), c = !0);
    },
    p(v, k) {
      /*title*/
      v[1] ? a ? a.p(v, k) : (a = ae(v), a.c(), a.m(n, l)) : a && (a.d(1), a = null), _ && _.p && (!r || k & /*$$scope*/
      8) && V(
        _,
        d,
        v,
        /*$$scope*/
        v[3],
        r ? G(
          d,
          /*$$scope*/
          v[3],
          k,
          null
        ) : D(
          /*$$scope*/
          v[3]
        ),
        null
      ), b && b.p && (!r || k & /*$$scope*/
      8) && V(
        b,
        g,
        v,
        /*$$scope*/
        v[3],
        r ? G(
          g,
          /*$$scope*/
          v[3],
          k,
          tt
        ) : D(
          /*$$scope*/
          v[3]
        ),
        ue
      ), (!r || k & /*title*/
      2) && u(
        n,
        "aria-label",
        /*title*/
        v[1]
      );
    },
    i(v) {
      r || (E(_, v), E(b, v), r = !0);
    },
    o(v) {
      q(_, v), q(b, v), r = !1;
    },
    d(v) {
      v && y(e), a && a.d(), _ && _.d(v), b && b.d(v), c = !1, f();
    }
  };
}
function ae(t) {
  let e, n;
  return {
    c() {
      e = h("header"), n = C(
        /*title*/
        t[1]
      ), u(e, "class", "ui-modal__header svelte-1vnqye4");
    },
    m(l, i) {
      w(l, e, i), m(e, n);
    },
    p(l, i) {
      i & /*title*/
      2 && O(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && y(e);
    }
  };
}
function nt(t) {
  let e, n, l = (
    /*open*/
    t[0] && ce(t)
  );
  return {
    c() {
      l && l.c(), e = Me();
    },
    m(i, s) {
      l && l.m(i, s), w(i, e, s), n = !0;
    },
    p(i, [s]) {
      /*open*/
      i[0] ? l ? (l.p(i, s), s & /*open*/
      1 && E(l, 1)) : (l = ce(i), l.c(), E(l, 1), l.m(e.parentNode, e)) : l && (De(), q(l, 1, 1, () => {
        l = null;
      }), Je());
    },
    i(i) {
      n || (E(l), n = !0);
    },
    o(i) {
      q(l), n = !1;
    },
    d(i) {
      i && y(e), l && l.d(i);
    }
  };
}
function lt(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { open: s = !1 } = e, { title: o = "" } = e;
  function r(c) {
    var f, a;
    ((a = (f = c.target) == null ? void 0 : f.dataset) == null ? void 0 : a.backdrop) === "1" && n(0, s = !1);
  }
  return t.$$set = (c) => {
    "open" in c && n(0, s = c.open), "title" in c && n(1, o = c.title), "$$scope" in c && n(3, i = c.$$scope);
  }, [s, o, r, i, l];
}
class kt extends B {
  constructor(e) {
    super(), S(this, e, lt, nt, M, { open: 0, title: 1 });
  }
}
function it(t) {
  let e = Math.round(
    /*pct*/
    t[1]()
  ) + "", n, l;
  return {
    c() {
      n = C(e), l = C("%");
    },
    m(i, s) {
      w(i, n, s), w(i, l, s);
    },
    p: j,
    d(i) {
      i && (y(n), y(l));
    }
  };
}
function st(t) {
  let e, n, l, i, s, o, r;
  const c = (
    /*#slots*/
    t[5].default
  ), f = H(
    c,
    t,
    /*$$scope*/
    t[4],
    null
  ), a = f || it(t);
  return {
    c() {
      e = h("div"), n = h("div"), l = h("div"), s = p(), o = h("div"), a && a.c(), u(l, "class", "ui-progress__bar svelte-1xhor73"), u(l, "style", i = `width:${/*pct*/
      t[1]()}%; ${/*color*/
      t[0] ? `background:${/*color*/
      t[0]}` : ""}`), u(n, "class", "ui-progress__track svelte-1xhor73"), u(o, "class", "ui-progress__label svelte-1xhor73"), u(e, "class", "ui-progress svelte-1xhor73");
    },
    m(d, _) {
      w(d, e, _), m(e, n), m(n, l), m(e, s), m(e, o), a && a.m(o, null), r = !0;
    },
    p(d, [_]) {
      (!r || _ & /*color*/
      1 && i !== (i = `width:${/*pct*/
      d[1]()}%; ${/*color*/
      d[0] ? `background:${/*color*/
      d[0]}` : ""}`)) && u(l, "style", i), f && f.p && (!r || _ & /*$$scope*/
      16) && V(
        f,
        c,
        d,
        /*$$scope*/
        d[4],
        r ? G(
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
      r || (E(a, d), r = !0);
    },
    o(d) {
      q(a, d), r = !1;
    },
    d(d) {
      d && y(e), a && a.d(d);
    }
  };
}
function ot(t, e, n) {
  let { $$slots: l = {}, $$scope: i } = e, { value: s = 0 } = e, { max: o = 100 } = e, { color: r = null } = e;
  const c = () => Math.max(0, Math.min(100, s / (o || 1) * 100));
  return t.$$set = (f) => {
    "value" in f && n(2, s = f.value), "max" in f && n(3, o = f.max), "color" in f && n(0, r = f.color), "$$scope" in f && n(4, i = f.$$scope);
  }, [r, c, s, o, i, l];
}
class pt extends B {
  constructor(e) {
    super(), S(this, e, ot, st, M, { value: 2, max: 3, color: 0 });
  }
}
function rt(t) {
  let e, n, l, i, s, o, r, c, f, a;
  return {
    c() {
      e = x("svg"), n = x("circle"), s = x("circle"), u(n, "cx", l = /*size*/
      t[0] / 2), u(n, "cy", i = /*size*/
      t[0] / 2), u(
        n,
        "r",
        /*radius*/
        t[3]
      ), u(n, "stroke", "rgba(255,255,255,0.08)"), u(
        n,
        "stroke-width",
        /*stroke*/
        t[1]
      ), u(n, "fill", "none"), u(s, "cx", o = /*size*/
      t[0] / 2), u(s, "cy", r = /*size*/
      t[0] / 2), u(
        s,
        "r",
        /*radius*/
        t[3]
      ), u(s, "stroke", c = /*color*/
      t[2] || "var(--ui-color-primary)"), u(
        s,
        "stroke-width",
        /*stroke*/
        t[1]
      ), u(s, "stroke-dasharray", `${/*dash*/
      t[4]} ${/*gap*/
      t[5]}`), u(s, "stroke-linecap", "round"), u(s, "fill", "none"), u(s, "transform", f = `rotate(-90 ${/*size*/
      t[0] / 2} ${/*size*/
      t[0] / 2})`), u(
        e,
        "width",
        /*size*/
        t[0]
      ), u(
        e,
        "height",
        /*size*/
        t[0]
      ), u(e, "viewBox", a = `0 0 ${/*size*/
      t[0]} ${/*size*/
      t[0]}`), u(e, "class", "ui-progress-circle");
    },
    m(d, _) {
      w(d, e, _), m(e, n), m(e, s);
    },
    p(d, [_]) {
      _ & /*size*/
      1 && l !== (l = /*size*/
      d[0] / 2) && u(n, "cx", l), _ & /*size*/
      1 && i !== (i = /*size*/
      d[0] / 2) && u(n, "cy", i), _ & /*stroke*/
      2 && u(
        n,
        "stroke-width",
        /*stroke*/
        d[1]
      ), _ & /*size*/
      1 && o !== (o = /*size*/
      d[0] / 2) && u(s, "cx", o), _ & /*size*/
      1 && r !== (r = /*size*/
      d[0] / 2) && u(s, "cy", r), _ & /*color*/
      4 && c !== (c = /*color*/
      d[2] || "var(--ui-color-primary)") && u(s, "stroke", c), _ & /*stroke*/
      2 && u(
        s,
        "stroke-width",
        /*stroke*/
        d[1]
      ), _ & /*size*/
      1 && f !== (f = `rotate(-90 ${/*size*/
      d[0] / 2} ${/*size*/
      d[0] / 2})`) && u(s, "transform", f), _ & /*size*/
      1 && u(
        e,
        "width",
        /*size*/
        d[0]
      ), _ & /*size*/
      1 && u(
        e,
        "height",
        /*size*/
        d[0]
      ), _ & /*size*/
      1 && a !== (a = `0 0 ${/*size*/
      d[0]} ${/*size*/
      d[0]}`) && u(e, "viewBox", a);
    },
    i: j,
    o: j,
    d(d) {
      d && y(e);
    }
  };
}
function ft(t, e, n) {
  let { value: l = 0 } = e, { max: i = 100 } = e, { size: s = 48 } = e, { stroke: o = 6 } = e, { color: r = null } = e;
  const c = (s - o) / 2, f = 2 * Math.PI * c, a = Math.max(0, Math.min(1, l / (i || 1))), d = f * a, _ = f - d;
  return t.$$set = (g) => {
    "value" in g && n(6, l = g.value), "max" in g && n(7, i = g.max), "size" in g && n(0, s = g.size), "stroke" in g && n(1, o = g.stroke), "color" in g && n(2, r = g.color);
  }, [s, o, r, c, d, _, l, i];
}
class jt extends B {
  constructor(e) {
    super(), S(this, e, ft, rt, M, {
      value: 6,
      max: 7,
      size: 0,
      stroke: 1,
      color: 2
    });
  }
}
function ut(t) {
  let e, n, l, i, s, o, r, c, f, a, d, _, g, b, v, k, K, ie, Q, R, W;
  return {
    c() {
      e = h("div"), n = h("div"), l = h("span"), l.textContent = "HP", i = p(), s = h("div"), o = h("div"), c = p(), f = h("div"), a = h("span"), a.textContent = "Hunger", d = p(), _ = h("div"), g = h("div"), v = p(), k = h("div"), K = h("span"), K.textContent = "Stamina", ie = p(), Q = h("div"), R = h("div"), u(l, "class", "name svelte-19lnj73"), u(o, "class", "bar svelte-19lnj73"), u(o, "style", r = `width:${F(
        /*hp*/
        t[0]
      )}%; background:#e74c3c`), u(s, "class", "track svelte-19lnj73"), u(n, "class", "seg svelte-19lnj73"), u(a, "class", "name svelte-19lnj73"), u(g, "class", "bar svelte-19lnj73"), u(g, "style", b = `width:${F(
        /*hunger*/
        t[1]
      )}%; background:#f39c12`), u(_, "class", "track svelte-19lnj73"), u(f, "class", "seg svelte-19lnj73"), u(K, "class", "name svelte-19lnj73"), u(R, "class", "bar svelte-19lnj73"), u(R, "style", W = `width:${F(
        /*stamina*/
        t[2]
      )}%; background:#4CC9F0`), u(Q, "class", "track svelte-19lnj73"), u(k, "class", "seg svelte-19lnj73"), u(e, "class", "ui-statusbar svelte-19lnj73");
    },
    m(P, I) {
      w(P, e, I), m(e, n), m(n, l), m(n, i), m(n, s), m(s, o), m(e, c), m(e, f), m(f, a), m(f, d), m(f, _), m(_, g), m(e, v), m(e, k), m(k, K), m(k, ie), m(k, Q), m(Q, R);
    },
    p(P, [I]) {
      I & /*hp*/
      1 && r !== (r = `width:${F(
        /*hp*/
        P[0]
      )}%; background:#e74c3c`) && u(o, "style", r), I & /*hunger*/
      2 && b !== (b = `width:${F(
        /*hunger*/
        P[1]
      )}%; background:#f39c12`) && u(g, "style", b), I & /*stamina*/
      4 && W !== (W = `width:${F(
        /*stamina*/
        P[2]
      )}%; background:#4CC9F0`) && u(R, "style", W);
    },
    i: j,
    o: j,
    d(P) {
      P && y(e);
    }
  };
}
function F(t) {
  return Math.max(0, Math.min(100, t));
}
function ct(t, e, n) {
  let { hp: l = 100 } = e, { hunger: i = 100 } = e, { stamina: s = 100 } = e;
  return t.$$set = (o) => {
    "hp" in o && n(0, l = o.hp), "hunger" in o && n(1, i = o.hunger), "stamina" in o && n(2, s = o.stamina);
  }, [l, i, s];
}
class Ct extends B {
  constructor(e) {
    super(), S(this, e, ct, ut, M, { hp: 0, hunger: 1, stamina: 2 });
  }
}
function de(t, e, n) {
  const l = t.slice();
  return l[2] = e[n], l;
}
function _e(t) {
  let e, n = (
    /*item*/
    t[2].icon + ""
  ), l;
  return {
    c() {
      e = h("span"), l = C(n), u(e, "class", "icon");
    },
    m(i, s) {
      w(i, e, s), m(e, l);
    },
    p(i, s) {
      s & /*items*/
      1 && n !== (n = /*item*/
      i[2].icon + "") && O(l, n);
    },
    d(i) {
      i && y(e);
    }
  };
}
function me(t) {
  let e, n = (
    /*item*/
    t[2].label + ""
  ), l;
  return {
    c() {
      e = h("span"), l = C(n), u(e, "class", "label svelte-1yduwgy");
    },
    m(i, s) {
      w(i, e, s), m(e, l);
    },
    p(i, s) {
      s & /*items*/
      1 && n !== (n = /*item*/
      i[2].label + "") && O(l, n);
    },
    d(i) {
      i && y(e);
    }
  };
}
function he(t) {
  let e, n, l = (
    /*item*/
    t[2].slot + ""
  ), i, s, o, r, c, f = (
    /*item*/
    t[2].icon && _e(t)
  ), a = (
    /*item*/
    t[2].label && me(t)
  );
  return {
    c() {
      e = h("div"), n = h("span"), i = C(l), s = p(), f && f.c(), o = p(), a && a.c(), r = p(), u(n, "class", "num svelte-1yduwgy"), u(e, "class", c = Y(`slot ${/*selected*/
      t[1] === /*item*/
      t[2].slot ? "selected" : ""}`) + " svelte-1yduwgy");
    },
    m(d, _) {
      w(d, e, _), m(e, n), m(n, i), m(e, s), f && f.m(e, null), m(e, o), a && a.m(e, null), m(e, r);
    },
    p(d, _) {
      _ & /*items*/
      1 && l !== (l = /*item*/
      d[2].slot + "") && O(i, l), /*item*/
      d[2].icon ? f ? f.p(d, _) : (f = _e(d), f.c(), f.m(e, o)) : f && (f.d(1), f = null), /*item*/
      d[2].label ? a ? a.p(d, _) : (a = me(d), a.c(), a.m(e, r)) : a && (a.d(1), a = null), _ & /*selected, items*/
      3 && c !== (c = Y(`slot ${/*selected*/
      d[1] === /*item*/
      d[2].slot ? "selected" : ""}`) + " svelte-1yduwgy") && u(e, "class", c);
    },
    d(d) {
      d && y(e), f && f.d(), a && a.d();
    }
  };
}
function at(t) {
  let e, n = Z(
    /*items*/
    t[0]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = he(de(t, n, i));
  return {
    c() {
      e = h("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      u(e, "class", "ui-hotbar svelte-1yduwgy");
    },
    m(i, s) {
      w(i, e, s);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(e, null);
    },
    p(i, [s]) {
      if (s & /*selected, items*/
      3) {
        n = Z(
          /*items*/
          i[0]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const r = de(i, n, o);
          l[o] ? l[o].p(r, s) : (l[o] = he(r), l[o].c(), l[o].m(e, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: j,
    o: j,
    d(i) {
      i && y(e), Ee(l, i);
    }
  };
}
function dt(t, e, n) {
  let { items: l = [] } = e, { selected: i = null } = e;
  return t.$$set = (s) => {
    "items" in s && n(0, l = s.items), "selected" in s && n(1, i = s.selected);
  }, [l, i];
}
class Et extends B {
  constructor(e) {
    super(), S(this, e, dt, at, M, { items: 0, selected: 1 });
  }
}
function ve(t, e, n) {
  const l = t.slice();
  return l[4] = e[n], l[6] = n, l;
}
function ge(t) {
  let e, n, l, i = Z(
    /*items*/
    t[1]
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = be(ve(t, i, o));
  return {
    c() {
      e = h("div");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      n = p(), l = h("div"), u(l, "class", "center svelte-wy0jhq"), u(e, "class", "ui-radial svelte-wy0jhq");
    },
    m(o, r) {
      w(o, e, r);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      m(e, n), m(e, l);
    },
    p(o, r) {
      if (r & /*items, radius, dispatch*/
      6) {
        i = Z(
          /*items*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ve(o, i, c);
          s[c] ? s[c].p(f, r) : (s[c] = be(f), s[c].c(), s[c].m(e, n));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = i.length;
      }
    },
    d(o) {
      o && y(e), Ee(s, o);
    }
  };
}
function be(t) {
  let e, n = (
    /*item*/
    t[4].label + ""
  ), l, i, s, o;
  function r() {
    return (
      /*click_handler*/
      t[3](
        /*item*/
        t[4]
      )
    );
  }
  return {
    c() {
      e = h("button"), l = C(n), u(e, "class", "entry svelte-wy0jhq"), u(e, "style", i = `transform: translate(-50%, -50%) rotate(${/*i*/
      t[6] / /*items*/
      t[1].length * 360}deg) translate(${ye}px) rotate(-${/*i*/
      t[6] / /*items*/
      t[1].length * 360}deg);`);
    },
    m(c, f) {
      w(c, e, f), m(e, l), s || (o = Se(e, "click", r), s = !0);
    },
    p(c, f) {
      t = c, f & /*items*/
      2 && n !== (n = /*item*/
      t[4].label + "") && O(l, n), f & /*items*/
      2 && i !== (i = `transform: translate(-50%, -50%) rotate(${/*i*/
      t[6] / /*items*/
      t[1].length * 360}deg) translate(${ye}px) rotate(-${/*i*/
      t[6] / /*items*/
      t[1].length * 360}deg);`) && u(e, "style", i);
    },
    d(c) {
      c && y(e), s = !1, o();
    }
  };
}
function _t(t) {
  let e, n = (
    /*open*/
    t[0] && ge(t)
  );
  return {
    c() {
      n && n.c(), e = Me();
    },
    m(l, i) {
      n && n.m(l, i), w(l, e, i);
    },
    p(l, [i]) {
      /*open*/
      l[0] ? n ? n.p(l, i) : (n = ge(l), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(l) {
      l && y(e), n && n.d(l);
    }
  };
}
const ye = 96;
function mt(t, e, n) {
  let { open: l = !1 } = e, { items: i = [] } = e;
  const s = qe(), o = (r) => s("select", r.id);
  return t.$$set = (r) => {
    "open" in r && n(0, l = r.open), "items" in r && n(1, i = r.items);
  }, [l, i, s, o];
}
class Mt extends B {
  constructor(e) {
    super(), S(this, e, mt, _t, M, { open: 0, items: 1 });
  }
}
export {
  Et as Hotbar,
  kt as Modal,
  wt as Notification,
  pt as ProgressBar,
  jt as ProgressCircle,
  Mt as RadialMenu,
  Ct as StatusBar,
  yt as ThemeProvider,
  ke as defaultTheme,
  ze as offEvent,
  Fe as onEvent,
  gt as onceEvent,
  bt as sendEvent,
  Ae as themeToCssVars
};
