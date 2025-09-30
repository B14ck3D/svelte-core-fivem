var Cr = Object.defineProperty;
var mn = (e) => {
  throw TypeError(e);
};
var Pr = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ze = (e, t, n) => Pr(e, typeof t != "symbol" ? t + "" : t, n), Yt = (e, t, n) => t.has(e) || mn("Cannot " + n);
var P = (e, t, n) => (Yt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Y = (e, t, n) => t.has(e) ? mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), J = (e, t, n, r) => (Yt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), we = (e, t, n) => (Yt(e, t, "access private method"), n);
import { createEventDispatcher as On } from "svelte";
const Fe = /* @__PURE__ */ new Map();
function Dn() {
  return typeof window < "u" && typeof window.GetParentResourceName == "function";
}
function Mr() {
  return Dn() ? window.GetParentResourceName() : "dev-resource";
}
function Ir() {
  typeof window > "u" || window.__fivemUiCoreMessageBound || (window.__fivemUiCoreMessageBound = !0, window.addEventListener("message", (e) => {
    const t = e == null ? void 0 : e.data;
    if (!t || typeof t != "object") return;
    const { action: n, data: r } = t;
    if (!n) return;
    const i = Fe.get(n);
    !i || i.size === 0 || i.forEach((l) => {
      try {
        l(r);
      } catch (a) {
        console.error("[fivem-ui/core] onEvent callback error:", a);
      }
    });
  }));
}
function Fn(e, t) {
  return Fe.has(e) || Fe.set(e, /* @__PURE__ */ new Set()), Fe.get(e).add(t), Ir(), () => Ln(e, t);
}
function Nr(e, t) {
  const n = Fn(e, (r) => {
    n(), t(r);
  });
  return n;
}
function Ln(e, t) {
  const n = Fe.get(e);
  n && (n.delete(t), n.size === 0 && Fe.delete(e));
}
async function Rr(e, t) {
  const n = Mr();
  if (!Dn())
    return console.debug("[fivem-ui/core] sendEvent (dev):", { eventName: e, data: t }), new Response(JSON.stringify({ ok: !0, dev: !0 }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  const r = `https://${n}/${e}`;
  return fetch(r, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(t ?? {})
  });
}
const qn = {
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
function Or(e = qn) {
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
const Il = {
  colors: {
    primary: "#3B82F6",
    success: "#16A34A",
    warning: "#D97706",
    error: "#DC2626",
    surface: "#ffffff",
    onSurface: "#111827",
    border: "#e5e7eb"
  },
  radius: "10px",
  fontFamily: "Inter, system-ui, sans-serif"
}, Nl = {
  colors: {
    primary: "#60A5FA",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#F87171",
    surface: "#0f1115",
    onSurface: "#e5e7eb",
    border: "#1f2430"
  },
  radius: "10px",
  fontFamily: "Inter, system-ui, sans-serif"
}, Rl = {
  red: {
    primary: "#ef4444",
    success: "#84cc16",
    warning: "#f59e0b",
    error: "#dc2626"
  },
  blue: {
    primary: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444"
  },
  purple: {
    primary: "#a855f7",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  }
};
function Un(e) {
  const t = (n) => `${e}:${n}`;
  return {
    on: (n, r) => Fn(t(n), r),
    once: (n, r) => Nr(t(n), r),
    off: (n, r) => Ln(t(n), r),
    send: (n, r) => Rr(t(n), r)
  };
}
const Ol = Un("esx"), Dl = Un("qb"), Dr = "5";
var Rn;
typeof window < "u" && ((Rn = window.__svelte ?? (window.__svelte = {})).v ?? (Rn.v = /* @__PURE__ */ new Set())).add(Dr);
let st = !1, Fr = !1;
function Lr() {
  st = !0;
}
Lr();
const Ct = 1, Pt = 2, Bn = 4, qr = 8, Ur = 16, Br = 1, jr = 2, Hr = 4, Vr = 8, Yr = 16, zr = 2, q = Symbol(), Wr = "http://www.w3.org/1999/xhtml", jn = !1;
var nn = Array.isArray, Kr = Array.prototype.indexOf, Hn = Array.from, bt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, Vn = Object.getOwnPropertyDescriptors, Gr = Object.prototype, Jr = Array.prototype, rn = Object.getPrototypeOf;
const Le = () => {
};
function Zr(e) {
  return e();
}
function yt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const G = 2, Yn = 4, Mt = 8, We = 16, fe = 32, Ke = 64, zn = 128, X = 256, wt = 512, U = 1024, Q = 2048, ue = 4096, $ = 8192, Ce = 16384, ln = 32768, an = 65536, En = 1 << 17, Qr = 1 << 18, It = 1 << 19, Wn = 1 << 20, Xt = 1 << 21, sn = 1 << 22, xe = 1 << 23, qe = Symbol("$state"), $r = Symbol("legacy props"), ei = Symbol(""), fn = new class extends Error {
  constructor() {
    super(...arguments);
    Ze(this, "name", "StaleReactionError");
    Ze(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ti() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ni(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ri() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ii(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function li() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ai(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function si() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ui() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let oi = !1;
function Kn(e) {
  return e === this.v;
}
function Gn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Jn(e) {
  return !Gn(e, this.v);
}
let L = null;
function mt(e) {
  L = e;
}
function Pe(e, t = !1, n) {
  L = {
    p: L,
    c: null,
    e: null,
    s: e,
    x: null,
    l: st && !t ? { s: null, u: null, $: [] } : null
  };
}
function Me(e) {
  var t = (
    /** @type {ComponentContext} */
    L
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      sr(r);
  }
  return L = t.p, /** @type {T} */
  {};
}
function ft() {
  return !st || L !== null && L.l === null;
}
let he = [], Et = [];
function Zn() {
  var e = he;
  he = [], yt(e);
}
function ci() {
  var e = Et;
  Et = [], yt(e);
}
function vi() {
  return he.length > 0 || Et.length > 0;
}
function un(e) {
  if (he.length === 0 && !Xe) {
    var t = he;
    queueMicrotask(() => {
      t === he && Zn();
    });
  }
  he.push(e);
}
function di() {
  he.length > 0 && Zn(), Et.length > 0 && ci();
}
const _i = /* @__PURE__ */ new WeakMap();
function hi(e) {
  var t = T;
  if (t === null)
    return k.f |= xe, e;
  if (t.f & ln)
    xt(e, t);
  else {
    if (!(t.f & zn))
      throw !t.parent && e instanceof Error && Xn(e), e;
    t.b.error(e);
  }
}
function xt(e, t) {
  for (; t !== null; ) {
    if (t.f & zn)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Xn(e), e;
}
function Xn(e) {
  const t = _i.get(e);
  t && (bt(e, "message", {
    value: t.message
  }), bt(e, "stack", {
    value: t.stack
  }));
}
const zt = /* @__PURE__ */ new Set();
let N = null, pt = null, xn = /* @__PURE__ */ new Set(), Ae = [], Nt = null, Qt = !1, Xe = !1;
var nt, Be, de, rt, it, me, je, Ee, _e, He, lt, at, ne, Qn, gt, $t;
const At = class At {
  constructor() {
    Y(this, ne);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ze(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Y(this, nt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Y(this, Be, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Y(this, de, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Y(this, rt, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    Y(this, it, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    Y(this, me, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Y(this, je, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Y(this, Ee, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Y(this, _e, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Y(this, He, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Y(this, lt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Y(this, at, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ze(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Ae = [], pt = null;
    for (const l of t)
      we(this, ne, Qn).call(this, l);
    if (P(this, me).length === 0 && P(this, de) === 0) {
      we(this, ne, $t).call(this);
      var n = P(this, Ee), r = P(this, _e);
      J(this, Ee, []), J(this, _e, []), J(this, He, []), pt = N, N = null, kn(n), kn(r), N === null ? N = this : zt.delete(this), (i = P(this, rt)) == null || i.resolve();
    } else
      we(this, ne, gt).call(this, P(this, Ee)), we(this, ne, gt).call(this, P(this, _e)), we(this, ne, gt).call(this, P(this, He));
    for (const l of P(this, me))
      Se(l);
    for (const l of P(this, je))
      Se(l);
    J(this, me, []), J(this, je, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    P(this, nt).has(t) || P(this, nt).set(t, n), this.current.set(t, t.v);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, pt = null;
    for (const t of xn)
      if (xn.delete(t), t(), N !== null)
        break;
  }
  neuter() {
    J(this, it, !0);
  }
  flush() {
    Ae.length > 0 ? $n() : we(this, ne, $t).call(this), N === this && (P(this, de) === 0 && zt.delete(this), this.deactivate());
  }
  increment() {
    J(this, de, P(this, de) + 1);
  }
  decrement() {
    if (J(this, de, P(this, de) - 1), P(this, de) === 0) {
      for (const t of P(this, lt))
        V(t, Q), Ve(t);
      for (const t of P(this, at))
        V(t, ue), Ve(t);
      J(this, Ee, []), J(this, _e, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    P(this, Be).add(t);
  }
  settled() {
    return (P(this, rt) ?? J(this, rt, Xr())).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new At();
      zt.add(N), Xe || At.enqueue(() => {
        N === t && t.flush();
      });
    }
    return N;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    un(t);
  }
};
nt = new WeakMap(), Be = new WeakMap(), de = new WeakMap(), rt = new WeakMap(), it = new WeakMap(), me = new WeakMap(), je = new WeakMap(), Ee = new WeakMap(), _e = new WeakMap(), He = new WeakMap(), lt = new WeakMap(), at = new WeakMap(), ne = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Qn = function(t) {
  var o;
  t.f ^= U;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (fe | Ke)) !== 0, l = i && (r & U) !== 0, a = l || (r & $) !== 0 || this.skipped_effects.has(n);
    if (!a && n.fn !== null) {
      if (i)
        n.f ^= U;
      else if (r & Yn)
        P(this, _e).push(n);
      else if (!(r & U))
        if (r & sn) {
          var f = (o = n.b) != null && o.is_pending() ? P(this, je) : P(this, me);
          f.push(n);
        } else ot(n) && (n.f & We && P(this, He).push(n), Se(n));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
gt = function(t) {
  for (const n of t)
    (n.f & Q ? P(this, lt) : P(this, at)).push(n), V(n, U);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
$t = function() {
  if (!P(this, it))
    for (const t of P(this, Be))
      t();
  P(this, Be).clear();
};
let kt = At;
function pi(e) {
  var t = Xe;
  Xe = !0;
  try {
    for (var n; ; ) {
      if (di(), Ae.length === 0 && !vi() && (N == null || N.flush(), Ae.length === 0))
        return Nt = null, /** @type {T} */
        n;
      $n();
    }
  } finally {
    Xe = t;
  }
}
function $n() {
  var e = Ue;
  Qt = !0;
  try {
    var t = 0;
    for (An(!0); Ae.length > 0; ) {
      var n = kt.ensure();
      if (t++ > 1e3) {
        var r, i;
        gi();
      }
      n.process(Ae), ge.clear();
    }
  } finally {
    Qt = !1, An(e), Nt = null;
  }
}
function gi() {
  try {
    li();
  } catch (e) {
    xt(e, Nt);
  }
}
let se = null;
function kn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (Ce | $)) && ot(r) && (se = [], Se(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? vr(r) : r.fn = null), (se == null ? void 0 : se.length) > 0)) {
        ge.clear();
        for (const i of se)
          Se(i);
        se = [];
      }
    }
    se = null;
  }
}
function Ve(e) {
  for (var t = Nt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Qt && t === T && n & We)
      return;
    if (n & (Ke | fe)) {
      if (!(n & U)) return;
      t.f ^= U;
    }
  }
  Ae.push(t);
}
function bi(e, t, n) {
  const r = ft() ? Rt : on;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = N, l = (
    /** @type {Effect} */
    T
  ), a = yi();
  Promise.all(t.map((f) => /* @__PURE__ */ wi(f))).then((f) => {
    i == null || i.activate(), a();
    try {
      n([...e.map(r), ...f]);
    } catch (u) {
      l.f & Ce || xt(u, l);
    }
    i == null || i.deactivate(), er();
  }).catch((f) => {
    xt(f, l);
  });
}
function yi() {
  var e = T, t = k, n = L, r = N;
  return function() {
    be(e), le(t), mt(n), r == null || r.activate();
  };
}
function er() {
  be(null), le(null), mt(null);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  var t = G | Q, n = k !== null && k.f & G ? (
    /** @type {Derived} */
    k
  ) : null;
  return T === null || n !== null && n.f & X ? t |= X : T.f |= It, {
    ctx: L,
    deps: null,
    effects: null,
    equals: Kn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      q
    ),
    wv: 0,
    parent: n ?? T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && ti();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Qe(
    /** @type {V} */
    q
  ), a = null, f = !k;
  return Mi(() => {
    try {
      var u = e();
      a && Promise.resolve(u).catch(() => {
      });
    } catch (_) {
      u = Promise.reject(_);
    }
    var s = () => u;
    i = (a == null ? void 0 : a.then(s, s)) ?? Promise.resolve(u), a = i;
    var o = (
      /** @type {Batch} */
      N
    ), v = r.is_pending();
    f && (r.update_pending_count(1), v || o.increment());
    const d = (_, c = void 0) => {
      a = null, v || o.activate(), c ? c !== fn && (l.f |= xe, $e(l, c)) : (l.f & xe && (l.f ^= xe), $e(l, _)), f && (r.update_pending_count(-1), v || o.decrement()), er();
    };
    if (i.then(d, (_) => d(null, _ || "unknown")), o)
      return () => {
        queueMicrotask(() => o.neuter());
      };
  }), new Promise((u) => {
    function s(o) {
      function v() {
        o === i ? u(l) : s(i);
      }
      o.then(v, v);
    }
    s(i);
  });
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  const t = /* @__PURE__ */ Rt(e);
  return t.equals = Jn, t;
}
function tr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ie(
        /** @type {Effect} */
        t[n]
      );
  }
}
function mi(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & G))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function cn(e) {
  var t, n = T;
  be(mi(e));
  try {
    tr(e), t = yr(e);
  } finally {
    be(n);
  }
  return t;
}
function nr(e) {
  var t = cn(e);
  if (e.equals(t) || (e.v = t, e.wv = gr()), !Ne) {
    var n = (pe || e.f & X) && e.deps !== null ? ue : U;
    V(e, n);
  }
}
const ge = /* @__PURE__ */ new Map();
function Qe(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Kn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  const n = Qe(e);
  return Ri(n), n;
}
// @__NO_SIDE_EFFECTS__
function ve(e, t = !1, n = !0) {
  var i;
  const r = Qe(e);
  return t || (r.equals = Jn), st && n && L !== null && L.l !== null && ((i = L.l).s ?? (i.s = [])).push(r), r;
}
function j(e, t, n = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ie || k.f & En) && ft() && k.f & (G | We | sn | En) && !(H != null && H.includes(e)) && ui();
  let r = n ? De(t) : t;
  return $e(e, r);
}
function $e(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ne ? ge.set(e, t) : ge.set(e, n), e.v = t;
    var r = kt.ensure();
    r.capture(e, n), e.f & G && (e.f & Q && cn(
      /** @type {Derived} */
      e
    ), V(e, e.f & X ? ue : U)), e.wv = gr(), rr(e, Q), ft() && T !== null && T.f & U && !(T.f & (fe | Ke)) && (Z === null ? Oi([e]) : Z.push(e));
  }
  return t;
}
function Wt(e) {
  j(e, e.v + 1);
}
function rr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ft(), i = n.length, l = 0; l < i; l++) {
      var a = n[l], f = a.f;
      if (!(!r && a === T)) {
        var u = (f & Q) === 0;
        u && V(a, t), f & G ? rr(
          /** @type {Derived} */
          a,
          ue
        ) : u && (f & We && se !== null && se.push(
          /** @type {Effect} */
          a
        ), Ve(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function De(e) {
  if (typeof e != "object" || e === null || qe in e)
    return e;
  const t = rn(e);
  if (t !== Gr && t !== Jr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = nn(e), i = /* @__PURE__ */ ce(0), l = ke, a = (f) => {
    if (ke === l)
      return f();
    var u = k, s = ke;
    le(null), Pn(l);
    var o = f();
    return le(u), Pn(s), o;
  };
  return r && n.set("length", /* @__PURE__ */ ce(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, u, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && si();
        var o = n.get(u);
        return o === void 0 ? o = a(() => {
          var v = /* @__PURE__ */ ce(s.value);
          return n.set(u, v), v;
        }) : j(o, s.value, !0), !0;
      },
      deleteProperty(f, u) {
        var s = n.get(u);
        if (s === void 0) {
          if (u in f) {
            const o = a(() => /* @__PURE__ */ ce(q));
            n.set(u, o), Wt(i);
          }
        } else
          j(s, q), Wt(i);
        return !0;
      },
      get(f, u, s) {
        var _;
        if (u === qe)
          return e;
        var o = n.get(u), v = u in f;
        if (o === void 0 && (!v || (_ = ht(f, u)) != null && _.writable) && (o = a(() => {
          var c = De(v ? f[u] : q), g = /* @__PURE__ */ ce(c);
          return g;
        }), n.set(u, o)), o !== void 0) {
          var d = h(o);
          return d === q ? void 0 : d;
        }
        return Reflect.get(f, u, s);
      },
      getOwnPropertyDescriptor(f, u) {
        var s = Reflect.getOwnPropertyDescriptor(f, u);
        if (s && "value" in s) {
          var o = n.get(u);
          o && (s.value = h(o));
        } else if (s === void 0) {
          var v = n.get(u), d = v == null ? void 0 : v.v;
          if (v !== void 0 && d !== q)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return s;
      },
      has(f, u) {
        var d;
        if (u === qe)
          return !0;
        var s = n.get(u), o = s !== void 0 && s.v !== q || Reflect.has(f, u);
        if (s !== void 0 || T !== null && (!o || (d = ht(f, u)) != null && d.writable)) {
          s === void 0 && (s = a(() => {
            var _ = o ? De(f[u]) : q, c = /* @__PURE__ */ ce(_);
            return c;
          }), n.set(u, s));
          var v = h(s);
          if (v === q)
            return !1;
        }
        return o;
      },
      set(f, u, s, o) {
        var E;
        var v = n.get(u), d = u in f;
        if (r && u === "length")
          for (var _ = s; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var c = n.get(_ + "");
            c !== void 0 ? j(c, q) : _ in f && (c = a(() => /* @__PURE__ */ ce(q)), n.set(_ + "", c));
          }
        if (v === void 0)
          (!d || (E = ht(f, u)) != null && E.writable) && (v = a(() => /* @__PURE__ */ ce(void 0)), j(v, De(s)), n.set(u, v));
        else {
          d = v.v !== q;
          var g = a(() => De(s));
          j(v, g);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, u);
        if (p != null && p.set && p.set.call(o, s), !d) {
          if (r && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), b = Number(u);
            Number.isInteger(b) && b >= y.v && j(y, b + 1);
          }
          Wt(i);
        }
        return !0;
      },
      ownKeys(f) {
        h(i);
        var u = Reflect.ownKeys(f).filter((v) => {
          var d = n.get(v);
          return d === void 0 || d.v !== q;
        });
        for (var [s, o] of n)
          o.v !== q && !(s in f) && u.push(s);
        return u;
      },
      setPrototypeOf() {
        fi();
      }
    }
  );
}
var Ei, xi, ki;
function ut(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return xi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return ki.call(e);
}
function S(e, t) {
  return /* @__PURE__ */ et(e);
}
function Dt(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ot(n) : n;
  }
}
function F(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ot(r);
  return r;
}
function Si(e) {
  e.textContent = "";
}
function ir() {
  return !1;
}
let Sn = !1;
function Ti() {
  Sn || (Sn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ft(e) {
  var t = k, n = T;
  le(null), be(null);
  try {
    return e();
  } finally {
    le(t), be(n);
  }
}
function Ai(e, t, n, r = n) {
  e.addEventListener(t, () => Ft(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Ti();
}
function lr(e) {
  T === null && k === null && ii(), k !== null && k.f & X && T === null && ri(), Ne && ni();
}
function Ci(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ye(e, t, n, r = !0) {
  var i = T;
  i !== null && i.f & $ && (e |= $);
  var l = {
    ctx: L,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Q,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Se(l), l.f |= ln;
    } catch (u) {
      throw Ie(l), u;
    }
  else t !== null && Ve(l);
  if (r) {
    var a = l;
    if (n && a.deps === null && a.teardown === null && a.nodes_start === null && a.first === a.last && // either `null`, or a singular child
    !(a.f & It) && (a = a.first), a !== null && (a.parent = i, i !== null && Ci(a, i), k !== null && k.f & G && !(e & Ke))) {
      var f = (
        /** @type {Derived} */
        k
      );
      (f.effects ?? (f.effects = [])).push(a);
    }
  }
  return l;
}
function ar(e) {
  const t = ye(Mt, null, !1);
  return V(t, U), t.teardown = e, t;
}
function Tn(e) {
  lr();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !k && (t & fe) !== 0 && (t & ln) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      L
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return sr(e);
}
function sr(e) {
  return ye(Yn | Wn, e, !1);
}
function Pi(e) {
  return lr(), ye(Mt | Wn, e, !0);
}
function Oe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    L
  ), r = { effect: null, ran: !1, deps: e };
  n.l.$.push(r), r.effect = vn(() => {
    e(), !r.ran && (r.ran = !0, M(t));
  });
}
function fr() {
  var e = (
    /** @type {ComponentContextLegacy} */
    L
  );
  vn(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      n.f & U && V(n, ue), ot(n) && Se(n), t.ran = !1;
    }
  });
}
function Mi(e) {
  return ye(sn | It, e, !0);
}
function vn(e, t = 0) {
  return ye(Mt | t, e, !0);
}
function D(e, t = [], n = []) {
  bi(t, n, (r) => {
    ye(Mt, () => e(...r.map(h)), !0);
  });
}
function ur(e, t = 0) {
  var n = ye(We | t, e, !0);
  return n;
}
function St(e, t = !0) {
  return ye(fe | It, e, !0, t);
}
function or(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ne, r = k;
    Cn(!0), le(null);
    try {
      t.call(null);
    } finally {
      Cn(n), le(r);
    }
  }
}
function cr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ft(() => {
      i.abort(fn);
    });
    var r = n.next;
    n.f & Ke ? n.parent = null : Ie(n, t), n = r;
  }
}
function Ii(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & fe || Ie(t), t = n;
  }
}
function Ie(e, t = !0) {
  var n = !1;
  (t || e.f & Qr) && e.nodes_start !== null && e.nodes_end !== null && (Ni(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), cr(e, t && !n), Tt(e, 0), V(e, Ce);
  var r = e.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  or(e);
  var i = e.parent;
  i !== null && i.first !== null && vr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ni(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(e)
    );
    e.remove(), e = n;
  }
}
function vr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function dr(e, t) {
  var n = [];
  dn(e, n, !0), _r(n, () => {
    Ie(e), t && t();
  });
}
function _r(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function dn(e, t, n) {
  if (!(e.f & $)) {
    if (e.f ^= $, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & an) !== 0 || (r.f & fe) !== 0;
      dn(r, t, l ? n : !1), r = i;
    }
  }
}
function _n(e) {
  hr(e, !0);
}
function hr(e, t) {
  if (e.f & $) {
    e.f ^= $, e.f & U || (V(e, Q), Ve(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & an) !== 0 || (n.f & fe) !== 0;
      hr(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let Ue = !1;
function An(e) {
  Ue = e;
}
let Ne = !1;
function Cn(e) {
  Ne = e;
}
let k = null, ie = !1;
function le(e) {
  k = e;
}
let T = null;
function be(e) {
  T = e;
}
let H = null;
function Ri(e) {
  k !== null && (H === null ? H = [e] : H.push(e));
}
let B = null, W = 0, Z = null;
function Oi(e) {
  Z = e;
}
let pr = 1, tt = 0, ke = tt;
function Pn(e) {
  ke = e;
}
let pe = !1;
function gr() {
  return ++pr;
}
function ot(e) {
  var v;
  var t = e.f;
  if (t & Q)
    return !0;
  if (t & ue) {
    var n = e.deps, r = (t & X) !== 0;
    if (n !== null) {
      var i, l, a = (t & wt) !== 0, f = r && T !== null && !pe, u = n.length;
      if ((a || f) && (T === null || !(T.f & Ce))) {
        var s = (
          /** @type {Derived} */
          e
        ), o = s.parent;
        for (i = 0; i < u; i++)
          l = n[i], (a || !((v = l == null ? void 0 : l.reactions) != null && v.includes(s))) && (l.reactions ?? (l.reactions = [])).push(s);
        a && (s.f ^= wt), f && o !== null && !(o.f & X) && (s.f ^= X);
      }
      for (i = 0; i < u; i++)
        if (l = n[i], ot(
          /** @type {Derived} */
          l
        ) && nr(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!r || T !== null && !pe) && V(e, U);
  }
  return !1;
}
function br(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(H != null && H.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      l.f & G ? br(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? V(l, Q) : l.f & U && V(l, ue), Ve(
        /** @type {Effect} */
        l
      ));
    }
}
function yr(e) {
  var g;
  var t = B, n = W, r = Z, i = k, l = pe, a = H, f = L, u = ie, s = ke, o = e.f;
  B = /** @type {null | Value[]} */
  null, W = 0, Z = null, pe = (o & X) !== 0 && (ie || !Ue || k === null), k = o & (fe | Ke) ? null : e, H = null, mt(e.ctx), ie = !1, ke = ++tt, e.ac !== null && (Ft(() => {
    e.ac.abort(fn);
  }), e.ac = null);
  try {
    e.f |= Xt;
    var v = (
      /** @type {Function} */
      e.fn
    ), d = v(), _ = e.deps;
    if (B !== null) {
      var c;
      if (Tt(e, W), _ !== null && W > 0)
        for (_.length = W + B.length, c = 0; c < B.length; c++)
          _[W + c] = B[c];
      else
        e.deps = _ = B;
      if (!pe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      o & G && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (c = W; c < _.length; c++)
          ((g = _[c]).reactions ?? (g.reactions = [])).push(e);
    } else _ !== null && W < _.length && (Tt(e, W), _.length = W);
    if (ft() && Z !== null && !ie && _ !== null && !(e.f & (G | ue | Q)))
      for (c = 0; c < /** @type {Source[]} */
      Z.length; c++)
        br(
          Z[c],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (tt++, Z !== null && (r === null ? r = Z : r.push(.../** @type {Source[]} */
    Z))), e.f & xe && (e.f ^= xe), d;
  } catch (p) {
    return hi(p);
  } finally {
    e.f ^= Xt, B = t, W = n, Z = r, k = i, pe = l, H = a, mt(f), ie = u, ke = s;
  }
}
function Di(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & G && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !B.includes(t)) && (V(t, ue), t.f & (X | wt) || (t.f ^= wt), tr(
    /** @type {Derived} **/
    t
  ), Tt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Tt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Di(e, n[r]);
}
function Se(e) {
  var t = e.f;
  if (!(t & Ce)) {
    V(e, U);
    var n = T, r = Ue;
    T = e, Ue = !0;
    try {
      t & We ? Ii(e) : cr(e), or(e);
      var i = yr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = pr;
      var l;
      jn && Fr && e.f & Q && e.deps;
    } finally {
      Ue = r, T = n;
    }
  }
}
async function Fi() {
  await Promise.resolve(), pi();
}
function h(e) {
  var t = e.f, n = (t & G) !== 0;
  if (k !== null && !ie) {
    var r = T !== null && (T.f & Ce) !== 0;
    if (!r && !(H != null && H.includes(e))) {
      var i = k.deps;
      if (k.f & Xt)
        e.rv < tt && (e.rv = tt, B === null && i !== null && i[W] === e ? W++ : B === null ? B = [e] : (!pe || !B.includes(e)) && B.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [k] : l.includes(k) || l.push(k);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), f = a.parent;
    f !== null && !(f.f & X) && (a.f ^= X);
  }
  if (Ne) {
    if (ge.has(e))
      return ge.get(e);
    if (n) {
      a = /** @type {Derived} */
      e;
      var u = a.v;
      return (!(a.f & U) && a.reactions !== null || wr(a)) && (u = cn(a)), ge.set(a, u), u;
    }
  } else n && (a = /** @type {Derived} */
  e, ot(a) && nr(a));
  if (e.f & xe)
    throw e.v;
  return e.v;
}
function wr(e) {
  if (e.v === q) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ge.has(t) || t.f & G && wr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function M(e) {
  var t = ie;
  try {
    return ie = !0, e();
  } finally {
    ie = t;
  }
}
const Li = -7169;
function V(e, t) {
  e.f = e.f & Li | t;
}
function z(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (qe in e)
      en(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && qe in n && en(n);
      }
  }
}
function en(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        en(e[r], t);
      } catch {
      }
    const n = rn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Vn(n);
      for (let i in r) {
        const l = r[i].get;
        if (l)
          try {
            l.call(e);
          } catch {
          }
      }
    }
  }
}
function qi(e, t, n, r = {}) {
  function i(l) {
    if (r.capture || Ui.call(t, l), !l.cancelBubble)
      return Ft(() => n == null ? void 0 : n.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? un(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function ee(e, t, n, r, i) {
  var l = { capture: r, passive: i }, a = qi(e, t, n, l);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ar(() => {
    t.removeEventListener(e, a, l);
  });
}
let Mn = null;
function Ui(e) {
  var b;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Mn = e;
  var a = 0, f = Mn === e && e.__root;
  if (f) {
    var u = i.indexOf(f);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (a = u);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var o = k, v = T;
    le(null), be(null);
    try {
      for (var d, _ = []; l !== null; ) {
        var c = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var g = l["__" + r];
          if (g != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (nn(g)) {
              var [p, ...y] = g;
              p.apply(l, [e, ...y]);
            } else
              g.call(l, e);
        } catch (E) {
          d ? _.push(E) : d = E;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        l = c;
      }
      if (d) {
        for (let E of _)
          queueMicrotask(() => {
            throw E;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, le(o), be(v);
    }
  }
}
function mr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Lt(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  var n = (t & zr) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = mr(i ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ et(r));
    var l = (
      /** @type {TemplateNode} */
      n || Ei ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Lt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, l;
  return () => {
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        mr(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ et(a)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ et(f);
    }
    var u = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Lt(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
  return /* @__PURE__ */ Bi(e, t, "svg");
}
function Hi(e = "") {
  {
    var t = ut(e + "");
    return Lt(t, t), t;
  }
}
function qt() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ut();
  return e.append(t, n), Lt(t, n), e;
}
function C(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function K(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function te(e, t, n = !1) {
  var r = e, i = null, l = null, a = q, f = n ? an : 0, u = !1;
  const s = (_, c = !0) => {
    u = !0, d(c, _);
  };
  var o = null;
  function v() {
    o !== null && (o.lastChild.remove(), r.before(o), o = null);
    var _ = a ? i : l, c = a ? l : i;
    _ && _n(_), c && dr(c, () => {
      a ? l = null : i = null;
    });
  }
  const d = (_, c) => {
    if (a !== (a = _)) {
      var g = ir(), p = r;
      if (g && (o = document.createDocumentFragment(), o.append(p = ut())), a ? i ?? (i = c && St(() => c(p))) : l ?? (l = c && St(() => c(p))), g) {
        var y = (
          /** @type {Batch} */
          N
        ), b = a ? i : l, E = a ? l : i;
        b && y.skipped_effects.delete(b), E && y.skipped_effects.add(E), y.add_callback(v);
      } else
        v();
    }
  };
  ur(() => {
    u = !1, t(s), u || d(null, null);
  }, f);
}
function Ut(e, t) {
  return t;
}
function Vi(e, t, n) {
  for (var r = e.items, i = [], l = t.length, a = 0; a < l; a++)
    dn(t[a].e, i, !0);
  var f = l > 0 && i.length === 0 && n !== null;
  if (f) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Si(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), re(e, t[0].prev, t[l - 1].next);
  }
  _r(i, () => {
    for (var s = 0; s < l; s++) {
      var o = t[s];
      f || (r.delete(o.k), re(e, o.prev, o.next)), Ie(o.e, !f);
    }
  });
}
function ct(e, t, n, r, i, l = null) {
  var a = e, f = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & Bn) !== 0;
  if (u) {
    var s = (
      /** @type {Element} */
      e
    );
    a = s.appendChild(ut());
  }
  var o = null, v = !1, d = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ on(() => {
    var y = n();
    return nn(y) ? y : y == null ? [] : Hn(y);
  }), c, g;
  function p() {
    Yi(
      g,
      c,
      f,
      d,
      a,
      i,
      t,
      r,
      n
    ), l !== null && (c.length === 0 ? o ? _n(o) : o = St(() => l(a)) : o !== null && dr(o, () => {
      o = null;
    }));
  }
  ur(() => {
    g ?? (g = /** @type {Effect} */
    T), c = /** @type {V[]} */
    h(_);
    var y = c.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var b, E, A, O;
      if (ir()) {
        var m = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          N
        );
        for (E = 0; E < y; E += 1) {
          A = c[E], O = r(A, E);
          var ae = f.items.get(O) ?? d.get(O);
          ae ? t & (Ct | Pt) && Er(ae, A, E, t) : (b = xr(
            null,
            f,
            null,
            null,
            A,
            O,
            E,
            i,
            t,
            n,
            !0
          ), d.set(O, b)), m.add(O);
        }
        for (const [vt, jt] of f.items)
          m.has(vt) || w.skipped_effects.add(jt.e);
        w.add_callback(p);
      } else
        p();
      h(_);
    }
  });
}
function Yi(e, t, n, r, i, l, a, f, u) {
  var pn, gn, bn, yn;
  var s = (a & qr) !== 0, o = (a & (Ct | Pt)) !== 0, v = t.length, d = n.items, _ = n.first, c = _, g, p = null, y, b = [], E = [], A, O, m, w;
  if (s)
    for (w = 0; w < v; w += 1)
      A = t[w], O = f(A, w), m = d.get(O), m !== void 0 && ((pn = m.a) == null || pn.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(m));
  for (w = 0; w < v; w += 1) {
    if (A = t[w], O = f(A, w), m = d.get(O), m === void 0) {
      var ae = r.get(O);
      if (ae !== void 0) {
        r.delete(O), d.set(O, ae);
        var vt = p ? p.next : c;
        re(n, p, ae), re(n, ae, vt), Kt(ae, vt, i), p = ae;
      } else {
        var jt = c ? (
          /** @type {TemplateNode} */
          c.e.nodes_start
        ) : i;
        p = xr(
          jt,
          n,
          p,
          p === null ? n.first : p.next,
          A,
          O,
          w,
          l,
          a,
          u
        );
      }
      d.set(O, p), b = [], E = [], c = p.next;
      continue;
    }
    if (o && Er(m, A, w, a), m.e.f & $ && (_n(m.e), s && ((gn = m.a) == null || gn.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(m))), m !== c) {
      if (g !== void 0 && g.has(m)) {
        if (b.length < E.length) {
          var dt = E[0], oe;
          p = dt.prev;
          var hn = b[0], Ht = b[b.length - 1];
          for (oe = 0; oe < b.length; oe += 1)
            Kt(b[oe], dt, i);
          for (oe = 0; oe < E.length; oe += 1)
            g.delete(E[oe]);
          re(n, hn.prev, Ht.next), re(n, p, hn), re(n, Ht, dt), c = dt, p = Ht, w -= 1, b = [], E = [];
        } else
          g.delete(m), Kt(m, c, i), re(n, m.prev, m.next), re(n, m, p === null ? n.first : p.next), re(n, p, m), p = m;
        continue;
      }
      for (b = [], E = []; c !== null && c.k !== O; )
        c.e.f & $ || (g ?? (g = /* @__PURE__ */ new Set())).add(c), E.push(c), c = c.next;
      if (c === null)
        continue;
      m = c;
    }
    b.push(m), p = m, c = m.next;
  }
  if (c !== null || g !== void 0) {
    for (var Je = g === void 0 ? [] : Hn(g); c !== null; )
      c.e.f & $ || Je.push(c), c = c.next;
    var Vt = Je.length;
    if (Vt > 0) {
      var Tr = a & Bn && v === 0 ? i : null;
      if (s) {
        for (w = 0; w < Vt; w += 1)
          (bn = Je[w].a) == null || bn.measure();
        for (w = 0; w < Vt; w += 1)
          (yn = Je[w].a) == null || yn.fix();
      }
      Vi(n, Je, Tr);
    }
  }
  s && un(() => {
    var wn;
    if (y !== void 0)
      for (m of y)
        (wn = m.a) == null || wn.apply();
  }), e.first = n.first && n.first.e, e.last = p && p.e;
  for (var Ar of r.values())
    Ie(Ar.e);
  r.clear();
}
function Er(e, t, n, r) {
  r & Ct && $e(e.v, t), r & Pt ? $e(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function xr(e, t, n, r, i, l, a, f, u, s, o) {
  var v = (u & Ct) !== 0, d = (u & Ur) === 0, _ = v ? d ? /* @__PURE__ */ ve(i, !1, !1) : Qe(i) : i, c = u & Pt ? Qe(a) : a, g = {
    i: c,
    v: _,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var p = document.createDocumentFragment();
      p.append(e = ut());
    }
    return g.e = St(() => f(
      /** @type {Node} */
      e,
      _,
      c,
      s
    ), oi), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? o || (t.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Kt(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== null && l !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(l)
    );
    i.before(l), l = a;
  }
}
function re(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ye(e, t, n, r, i) {
  var f;
  var l = (f = t.$$slots) == null ? void 0 : f[n], a = !1;
  l === !0 && (l = t[n === "default" ? "children" : n], a = !0), l === void 0 ? i !== null && i(e) : l(e, a ? () => r : r);
}
function zi(e, t, n) {
  var r = e == null ? "" : "" + e;
  return t && (r = r ? r + " " + t : t), r === "" ? null : r;
}
function Wi(e, t) {
  return e == null ? null : String(e);
}
function ze(e, t, n, r, i, l) {
  var a = e.__className;
  if (a !== n || a === void 0) {
    var f = zi(n, r);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = n;
  }
  return l;
}
function Te(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var l = Wi(t);
    l == null ? e.removeAttribute("style") : e.style.cssText = l, e.__style = t;
  }
  return r;
}
const Ki = Symbol("is custom element"), Gi = Symbol("is html");
function I(e, t, n, r) {
  var i = Ji(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[ei] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Zi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ji(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ki]: e.nodeName.includes("-"),
      [Gi]: e.namespaceURI === Wr
    })
  );
}
var In = /* @__PURE__ */ new Map();
function Zi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = In.get(t);
  if (n) return n;
  In.set(t, n = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Vn(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = rn(i);
  }
  return n;
}
function Gt(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ai(e, "input", async (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = Jt(e) ? Zt(l) : l, n(l), N !== null && r.add(N), await Fi(), l !== (l = t())) {
      var a = e.selectionStart, f = e.selectionEnd;
      e.value = l ?? "", f !== null && (e.selectionStart = a, e.selectionEnd = Math.min(f, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  M(t) == null && e.value && (n(Jt(e) ? Zt(e.value) : e.value), N !== null && r.add(N)), vn(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        pt ?? N
      );
      if (r.has(l))
        return;
    }
    Jt(e) && i === Zt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Jt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Zt(e) {
  return e === "" ? null : +e;
}
function Ge(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    L
  ), n = t.l.u;
  if (!n) return;
  let r = () => z(t.s);
  if (e) {
    let i = 0, l = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Rt(() => {
      let f = !1;
      const u = t.s;
      for (const s in u)
        u[s] !== l[s] && (l[s] = u[s], f = !0);
      return f && i++, i;
    });
    r = () => h(a);
  }
  n.b.length && Pi(() => {
    Nn(t, r), yt(n.b);
  }), Tn(() => {
    const i = M(() => n.m.map(Zr));
    return () => {
      for (const l of i)
        typeof l == "function" && l();
    };
  }), n.a.length && Tn(() => {
    Nn(t, r), yt(n.a);
  });
}
function Nn(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
  t();
}
function kr(e, t, n) {
  if (e == null)
    return t(void 0), Le;
  const r = M(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Re = [];
function Xi(e, t = Le) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(f) {
    if (Gn(e, f) && (e = f, n)) {
      const u = !Re.length;
      for (const s of r)
        s[1](), Re.push(s, e);
      if (u) {
        for (let s = 0; s < Re.length; s += 2)
          Re[s][0](Re[s + 1]);
        Re.length = 0;
      }
    }
  }
  function l(f) {
    i(f(
      /** @type {T} */
      e
    ));
  }
  function a(f, u = Le) {
    const s = [f, u];
    return r.add(s), r.size === 1 && (n = t(i, l) || Le), f(
      /** @type {T} */
      e
    ), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: l, subscribe: a };
}
function Qi(e) {
  let t;
  return kr(e, (n) => t = n)(), t;
}
let _t = !1, tn = Symbol();
function $i(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ve(void 0),
    unsubscribe: Le
  });
  if (r.store !== e && !(tn in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Le;
    else {
      var i = !0;
      r.unsubscribe = kr(e, (l) => {
        i ? r.source.v = l : j(r.source, l);
      }), i = !1;
    }
  return e && tn in n ? Qi(e) : h(r.source);
}
function el() {
  const e = {};
  function t() {
    ar(() => {
      for (var n in e)
        e[n].unsubscribe();
      bt(e, tn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function tl(e) {
  var t = _t;
  try {
    return _t = !1, [e(), _t];
  } finally {
    _t = t;
  }
}
function x(e, t, n, r) {
  var E;
  var i = !st || (n & jr) !== 0, l = (n & Vr) !== 0, a = (n & Yr) !== 0, f = (
    /** @type {V} */
    r
  ), u = !0, s = () => (u && (u = !1, f = a ? M(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), f), o;
  if (l) {
    var v = qe in e || $r in e;
    o = ((E = ht(e, t)) == null ? void 0 : E.set) ?? (v && t in e ? (A) => e[t] = A : void 0);
  }
  var d, _ = !1;
  l ? [d, _] = tl(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && r !== void 0 && (d = s(), o && (i && ai(), o(d)));
  var c;
  if (i ? c = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? s() : (u = !0, A);
  } : c = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A !== void 0 && (f = /** @type {V} */
    void 0), A === void 0 ? f : A;
  }, i && !(n & Hr))
    return c;
  if (o) {
    var g = e.$$legacy;
    return (
      /** @type {() => V} */
      function(A, O) {
        return arguments.length > 0 ? ((!i || !O || g || _) && o(O ? c() : A), A) : c();
      }
    );
  }
  var p = !1, y = (n & Br ? Rt : on)(() => (p = !1, c()));
  l && h(y);
  var b = (
    /** @type {Effect} */
    T
  );
  return (
    /** @type {() => V} */
    function(A, O) {
      if (arguments.length > 0) {
        const m = O ? h(y) : i && l ? De(A) : A;
        return j(y, m), p = !0, f !== void 0 && (f = m), A;
      }
      return Ne && p || b.f & Ce ? y.v : h(y);
    }
  );
}
var nl = /* @__PURE__ */ R(`<div><style>:global(:root) {
			font-family: var(--ui-font-family);
		}</style> <!></div>`);
function Ll(e, t) {
  Pe(t, !1);
  const n = /* @__PURE__ */ ve();
  let r = x(t, "theme", 8, qn);
  Oe(() => z(r()), () => {
    j(n, Or(r()));
  }), fr(), Ge();
  var i = nl(), l = F(S(i), 2);
  Ye(l, t, "default", {}, null), D((a) => Te(i, a), [
    () => (h(n), M(() => Object.entries(h(n)).map(([a, f]) => `${a}: ${f}`).join("; ")))
  ]), C(e, i), Me();
}
var rl = /* @__PURE__ */ R('<span class="icon svelte-1wg8nyl" aria-hidden="true"> </span>'), il = /* @__PURE__ */ R('<div><!> <span class="text svelte-1wg8nyl"> <!></span></div>');
function ql(e, t) {
  let n = x(t, "type", 8, "info"), r = x(t, "message", 8, ""), i = x(t, "icon", 8, null);
  var l = il(), a = S(l);
  {
    var f = (v) => {
      var d = rl(), _ = S(d);
      D(() => K(_, i())), C(v, d);
    };
    te(a, (v) => {
      i() && v(f);
    });
  }
  var u = F(a, 2), s = S(u), o = F(s);
  Ye(o, t, "default", {}, null), D(() => {
    ze(l, 1, `ui-notification ${n()}`, "svelte-1wg8nyl"), K(s, r());
  }), C(e, l);
}
var ll = /* @__PURE__ */ R('<header class="ui-modal__header svelte-1bxxaoh"> </header>'), al = /* @__PURE__ */ R('<div class="ui-modal-backdrop svelte-1bxxaoh" data-backdrop="1" role="presentation" tabindex="-1"><div class="ui-modal svelte-1bxxaoh" role="dialog" aria-modal="true"><!> <section class="ui-modal__content svelte-1bxxaoh"><!></section> <footer class="ui-modal__actions svelte-1bxxaoh"><!></footer></div></div>');
function Ul(e, t) {
  let n = x(t, "open", 12, !1), r = x(t, "title", 8, "");
  function i(s) {
    var o, v;
    ((v = (o = s.target) == null ? void 0 : o.dataset) == null ? void 0 : v.backdrop) === "1" && n(!1);
  }
  function l(s) {
    s.key === "Escape" && n(!1);
  }
  var a = qt(), f = Dt(a);
  {
    var u = (s) => {
      var o = al(), v = S(o), d = S(v);
      {
        var _ = (b) => {
          var E = ll(), A = S(E);
          D(() => K(A, r())), C(b, E);
        };
        te(d, (b) => {
          r() && b(_);
        });
      }
      var c = F(d, 2), g = S(c);
      Ye(g, t, "default", {}, null);
      var p = F(c, 2), y = S(p);
      Ye(y, t, "actions", {}, null), D(() => I(v, "aria-label", r())), ee("click", o, i), ee("keydown", o, l), C(s, o);
    };
    te(f, (s) => {
      n() && s(u);
    });
  }
  C(e, a);
}
var sl = /* @__PURE__ */ R('<div class="ui-progress svelte-um4ua8"><div class="ui-progress__track svelte-um4ua8"><div class="ui-progress__bar svelte-um4ua8"></div></div> <div class="ui-progress__label svelte-um4ua8"><!></div></div>');
function Bl(e, t) {
  let n = x(t, "value", 8, 0), r = x(t, "max", 8, 100), i = x(t, "color", 8, null);
  const l = () => Math.max(0, Math.min(100, n() / (r() || 1) * 100));
  var a = sl(), f = S(a), u = S(f), s = F(f, 2), o = S(s);
  Ye(o, t, "default", {}, (v) => {
    var d = Hi();
    D((_) => K(d, `${_ ?? ""}%`), [() => M(() => Math.round(l()))]), C(v, d);
  }), D((v) => Te(u, v), [
    () => (z(i()), M(() => `width:${l()}%; ${i() ? `background:${i()}` : ""}`))
  ]), C(e, a);
}
var fl = /* @__PURE__ */ ji('<svg class="ui-progress-circle"><circle stroke="rgba(255,255,255,0.08)" fill="none"></circle><circle stroke-linecap="round" fill="none"></circle></svg>');
function jl(e, t) {
  Pe(t, !1);
  const n = /* @__PURE__ */ ve(), r = /* @__PURE__ */ ve(), i = /* @__PURE__ */ ve(), l = /* @__PURE__ */ ve(), a = /* @__PURE__ */ ve();
  let f = x(t, "value", 8, 0), u = x(t, "max", 8, 100), s = x(t, "size", 8, 48), o = x(t, "stroke", 8, 6), v = x(t, "color", 8, null);
  Oe(() => (z(s()), z(o())), () => {
    j(n, (s() - o()) / 2);
  }), Oe(() => h(n), () => {
    j(r, 2 * Math.PI * h(n));
  }), Oe(() => (z(f()), z(u())), () => {
    j(i, Math.max(0, Math.min(1, f() / (u() || 1))));
  }), Oe(() => (h(r), h(i)), () => {
    j(l, h(r) * h(i));
  }), Oe(() => (h(r), h(l)), () => {
    j(a, h(r) - h(l));
  }), fr();
  var d = fl(), _ = S(d), c = F(_);
  D(() => {
    I(d, "width", s()), I(d, "height", s()), I(d, "viewBox", `0 0 ${s()} ${s()}`), I(_, "cx", s() / 2), I(_, "cy", s() / 2), I(_, "r", h(n)), I(_, "stroke-width", o()), I(c, "cx", s() / 2), I(c, "cy", s() / 2), I(c, "r", h(n)), I(c, "stroke", v() || "var(--ui-color-primary)"), I(c, "stroke-width", o()), I(c, "stroke-dasharray", `${h(l)} ${h(a)}`), I(c, "transform", `rotate(-90 ${s() / 2} ${s() / 2})`);
  }), C(e, d), Me();
}
var ul = /* @__PURE__ */ R('<div class="ui-statusbar svelte-161y12f"><div class="seg svelte-161y12f"><span class="name svelte-161y12f">HP</span> <div class="track svelte-161y12f"><div class="bar hp svelte-161y12f"></div></div></div> <div class="seg svelte-161y12f"><span class="name svelte-161y12f">Hunger</span> <div class="track svelte-161y12f"><div class="bar hunger svelte-161y12f"></div></div></div> <div class="seg svelte-161y12f"><span class="name svelte-161y12f">Stamina</span> <div class="track svelte-161y12f"><div class="bar stamina svelte-161y12f"></div></div></div></div>');
function Hl(e, t) {
  let n = x(t, "hp", 8, 100), r = x(t, "hunger", 8, 100), i = x(t, "stamina", 8, 100);
  function l(p) {
    return Math.max(0, Math.min(100, p));
  }
  var a = ul(), f = S(a), u = F(S(f), 2), s = S(u), o = F(f, 2), v = F(S(o), 2), d = S(v), _ = F(o, 2), c = F(S(_), 2), g = S(c);
  D(
    (p, y, b) => {
      Te(s, p), Te(d, y), Te(g, b);
    },
    [
      () => (z(n()), M(() => `width:${l(n())}%`)),
      () => (z(r()), M(() => `width:${l(r())}%`)),
      () => (z(i()), M(() => `width:${l(i())}%`))
    ]
  ), C(e, a);
}
var ol = /* @__PURE__ */ R('<span class="icon"> </span>'), cl = /* @__PURE__ */ R('<span class="label svelte-7ew1xg"> </span>'), vl = /* @__PURE__ */ R('<div><span class="num svelte-7ew1xg"> </span> <!> <!></div>'), dl = /* @__PURE__ */ R('<div class="ui-hotbar svelte-7ew1xg"></div>');
function Vl(e, t) {
  let n = x(t, "items", 24, () => []), r = x(t, "selected", 8, null);
  var i = dl();
  ct(i, 5, n, Ut, (l, a) => {
    var f = vl(), u = S(f), s = S(u), o = F(u, 2);
    {
      var v = (c) => {
        var g = ol(), p = S(g);
        D(() => K(p, (h(a), M(() => h(a).icon)))), C(c, g);
      };
      te(o, (c) => {
        h(a), M(() => h(a).icon) && c(v);
      });
    }
    var d = F(o, 2);
    {
      var _ = (c) => {
        var g = cl(), p = S(g);
        D(() => K(p, (h(a), M(() => h(a).label)))), C(c, g);
      };
      te(d, (c) => {
        h(a), M(() => h(a).label) && c(_);
      });
    }
    D(() => {
      ze(
        f,
        1,
        (z(r()), h(a), M(() => `slot ${r() === h(a).slot ? "selected" : ""}`)),
        "svelte-7ew1xg"
      ), K(s, (h(a), M(() => h(a).slot)));
    }), C(l, f);
  }), C(e, i);
}
var _l = /* @__PURE__ */ R('<button class="entry svelte-l2imo0"> </button>'), hl = /* @__PURE__ */ R('<div class="ui-radial svelte-l2imo0"><!> <div class="center svelte-l2imo0"></div></div>');
function Yl(e, t) {
  Pe(t, !1);
  let n = x(t, "open", 8, !1), r = x(t, "items", 24, () => []);
  const i = On(), l = 96;
  Ge();
  var a = qt(), f = Dt(a);
  {
    var u = (s) => {
      var o = hl(), v = S(o);
      ct(v, 1, r, Ut, (d, _, c) => {
        var g = _l(), p = S(g);
        D(() => {
          Te(g, (z(r()), M(() => `transform: translate(-50%, -50%) rotate(${c / r().length * 360}deg) translate(${l}px) rotate(-${c / r().length * 360}deg);`))), K(p, (h(_), M(() => h(_).label)));
        }), ee("click", g, () => i("select", h(_).id)), C(d, g);
      }), C(s, o);
    };
    te(f, (s) => {
      n() && s(u);
    });
  }
  C(e, a), Me();
}
var pl = /* @__PURE__ */ R('<div class="desc svelte-o4gsfs"> </div>'), gl = /* @__PURE__ */ R('<li role="option" tabindex="0"><div class="label svelte-o4gsfs"> </div> <!></li>'), bl = /* @__PURE__ */ R('<ul class="ui-list svelte-o4gsfs" role="listbox" tabindex="0"><!> <!></ul>');
function zl(e, t) {
  Pe(t, !1);
  let n = x(t, "items", 24, () => []), r = x(t, "selectedId", 12, null), i = x(t, "onSelect", 8, null);
  function l(s) {
    var o;
    r(s), (o = i()) == null || o(s);
  }
  Ge();
  var a = bl(), f = S(a);
  ct(f, 1, n, Ut, (s, o) => {
    var v = gl(), d = S(v), _ = S(d), c = F(d, 2);
    {
      var g = (p) => {
        var y = pl(), b = S(y);
        D(() => K(b, (h(o), M(() => h(o).description)))), C(p, y);
      };
      te(c, (p) => {
        h(o), M(() => h(o).description) && p(g);
      });
    }
    D(() => {
      I(v, "id", (h(o), M(() => `item-${h(o).id}`))), ze(
        v,
        1,
        (z(r()), h(o), M(() => `row ${r() === h(o).id ? "selected" : ""}`)),
        "svelte-o4gsfs"
      ), I(v, "aria-selected", (z(r()), h(o), M(() => r() === h(o).id))), K(_, (h(o), M(() => h(o).label)));
    }), ee("click", v, () => l(h(o).id)), ee("keydown", v, (p) => {
      (p.key === "Enter" || p.key === " ") && l(h(o).id);
    }), C(s, v);
  });
  var u = F(f, 2);
  Ye(u, t, "default", {}, null), D(() => I(a, "aria-activedescendant", r() ? `item-${r()}` : void 0)), ee("keydown", a, (s) => {
    var o;
    s.key === "Enter" && r() != null && ((o = i()) == null || o(r()));
  }), C(e, a), Me();
}
var yl = /* @__PURE__ */ R('<span class="ui-input__label svelte-1e5va0l"> </span>'), wl = /* @__PURE__ */ R('<input class="ui-input svelte-1e5va0l" type="text"/>'), ml = /* @__PURE__ */ R('<input class="ui-input svelte-1e5va0l" type="password"/>'), El = /* @__PURE__ */ R('<input class="ui-input svelte-1e5va0l" type="number"/>'), xl = /* @__PURE__ */ R('<label class="ui-input__wrap svelte-1e5va0l"><!> <!></label>');
function Wl(e, t) {
  Pe(t, !1);
  let n = x(t, "value", 12, ""), r = x(t, "placeholder", 8, ""), i = x(t, "label", 8, ""), l = x(t, "type", 8, "text"), a = x(t, "disabled", 8, !1), f = x(t, "name", 8, null), u = x(t, "id", 8, null), s = x(t, "onEnter", 8, null);
  function o(y) {
    var b;
    y.key === "Enter" && ((b = s()) == null || b(n()));
  }
  Ge();
  var v = xl(), d = S(v);
  {
    var _ = (y) => {
      var b = yl(), E = S(b);
      D(() => K(E, i())), C(y, b);
    };
    te(d, (y) => {
      i() && y(_);
    });
  }
  var c = F(d, 2);
  {
    var g = (y) => {
      var b = wl();
      D(() => {
        I(b, "placeholder", r()), b.disabled = a(), I(b, "name", f()), I(b, "id", u());
      }), Gt(b, n), ee("keydown", b, o), C(y, b);
    }, p = (y) => {
      var b = qt(), E = Dt(b);
      {
        var A = (m) => {
          var w = ml();
          D(() => {
            I(w, "placeholder", r()), w.disabled = a(), I(w, "name", f()), I(w, "id", u());
          }), Gt(w, n), ee("keydown", w, o), C(m, w);
        }, O = (m) => {
          var w = El();
          D(() => {
            I(w, "placeholder", r()), w.disabled = a(), I(w, "name", f()), I(w, "id", u());
          }), Gt(w, n), ee("keydown", w, o), C(m, w);
        };
        te(
          E,
          (m) => {
            l() === "password" ? m(A) : m(O, !1);
          },
          !0
        );
      }
      C(y, b);
    };
    te(c, (y) => {
      l() === "text" ? y(g) : y(p, !1);
    });
  }
  C(e, v), Me();
}
var kl = /* @__PURE__ */ R("<button> </button>"), Sl = /* @__PURE__ */ R('<div class="ui-context svelte-l8h85k"></div>');
function Kl(e, t) {
  Pe(t, !1);
  let n = x(t, "open", 8, !1), r = x(t, "x", 8, 0), i = x(t, "y", 8, 0), l = x(t, "items", 24, () => []);
  const a = On();
  function f(v, d) {
    d || a("select", v);
  }
  Ge();
  var u = qt(), s = Dt(u);
  {
    var o = (v) => {
      var d = Sl();
      ct(d, 5, l, Ut, (_, c) => {
        var g = kl(), p = S(g);
        D(() => {
          ze(
            g,
            1,
            (h(c), M(() => `row ${h(c).disabled ? "disabled" : ""}`)),
            "svelte-l8h85k"
          ), K(p, (h(c), M(() => h(c).label)));
        }), ee("click", g, () => f(h(c).id, h(c).disabled)), C(_, g);
      }), D(() => Te(d, `left:${r()}px; top:${i()}px`)), C(v, d);
    };
    te(s, (v) => {
      n() && v(o);
    });
  }
  C(e, u), Me();
}
let Tl = 1;
const Bt = Xi([]);
function Gl(e, t = {}) {
  const n = {
    id: Tl++,
    message: e,
    type: t.type ?? "info",
    timeout: t.timeout ?? 2500
  };
  return Bt.update((r) => [...r, n]), n.timeout && n.timeout > 0 && setTimeout(() => Sr(n.id), n.timeout), n.id;
}
function Sr(e) {
  Bt.update((t) => t.filter((n) => n.id !== e));
}
function Jl() {
  Bt.set([]);
}
var Al = /* @__PURE__ */ R('<div><span> </span> <button class="close svelte-1npb2u9">×</button></div>'), Cl = /* @__PURE__ */ R("<div></div>");
function Zl(e, t) {
  Pe(t, !1);
  const n = () => $i(Bt, "$toasts", r), [r, i] = el();
  let l = x(t, "position", 8, "top-right");
  Ge();
  var a = Cl();
  ct(a, 5, n, (f) => f.id, (f, u) => {
    var s = Al(), o = S(s), v = S(o), d = F(o, 2);
    D(() => {
      ze(s, 1, (h(u), M(() => `snack ${h(u).type}`)), "svelte-1npb2u9"), K(v, (h(u), M(() => h(u).message)));
    }), ee("click", d, () => Sr(h(u).id)), C(f, s);
  }), D(() => ze(a, 1, `ui-snackbar ${l()}`, "svelte-1npb2u9")), C(e, a), Me(), i();
}
export {
  Kl as ContextMenu,
  Vl as Hotbar,
  zl as List,
  Ul as Modal,
  ql as Notification,
  Bl as ProgressBar,
  jl as ProgressCircle,
  Yl as RadialMenu,
  Zl as Snackbar,
  Hl as StatusBar,
  Wl as TextInput,
  Ll as ThemeProvider,
  Jl as clear,
  Un as createAdapter,
  qn as defaultTheme,
  Ol as esx,
  Ln as offEvent,
  Fn as onEvent,
  Nr as onceEvent,
  Nl as presetDark,
  Il as presetLight,
  Gl as push,
  Dl as qb,
  Sr as remove,
  Rr as sendEvent,
  Rl as serverPalettes,
  Or as themeToCssVars,
  Bt as toasts
};
