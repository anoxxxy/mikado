/**!
 * Mikado.js v0.8.211 (Light/Debug)
 * Copyright 2019-2024 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';
var n;
function p(a, b, c) {
  const e = b.length, g = [], k = {};
  for (let f = 0, l, q, m, u, A, x = null; f < e; f++) {
    l = b[f];
    if (q = l.v) {
      if (u = m = k[q], !u) {
        let t = void 0;
        var d = a, h = q;
        for (let y = 0, B = h.length, r = ""; y < B; y++) {
          const v = h[y];
          r += v;
          k[r] ? d = k[r] : (">" === v ? d = d.firstChild : "|" === v ? (t = d, d = d.firstChild) : "@" === v ? (t = d, d = d.style) : d = d.nextSibling, k[r] = d);
        }
        m = [d, t];
        u = m[0];
        m = m[1] || u;
      }
    } else {
      u = m = a;
    }
    c && A !== m && (A = m, m._mkc = x = {});
    g[f] = new w(x, u, "");
  }
  return a._mkp = g;
}
function z(a, b, c, e, g, k) {
  const d = g || (b.tag ? b.svg ? document.createElementNS("http://www.w3.org/2000/svg", b.tag) : document.createElement(b.tag) : document.createTextNode(b.text));
  let h, f;
  if (f = b.class) {
    "object" === typeof f ? c.push(new w(h = {_c:""}, d, e)) : g || (d.className = f);
  }
  if (f = b.attr) {
    for (const l in f) {
      let q = f[l];
      "object" === typeof q ? (h || c.push(new w(h = {}, d, e)), h["_a" + l] = !1) : g || d.setAttribute(l, q);
    }
  }
  if (f = b.event) {
    for (const l in f) {
      g || d.setAttribute(l, f[l]);
    }
  }
  if (f = b.style) {
    "object" === typeof f ? (c.push(new w(h || (h = {}), d.style, e + "@")), h._s = "") : g || (d.style.cssText = f);
  }
  if (f = b.text) {
    "object" === typeof f ? (a = d, f = f[0], b.tag ? (e += "|", a = !g && d.firstChild, a || (a = document.createTextNode(f), d.appendChild(a))) : h = {}, (h || (h = {}))._t = f, c.push(new w(h, a, e))) : g || (b.tag ? d.textContent = f : d.nodeValue = f);
  } else if (f = b.child) {
    if (g && (g = g.firstChild, !g)) {
      return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
    }
    f.constructor !== Array && (f = [f]);
    for (let l = 0, q, m = f.length; l < m; l++) {
      if (q = f[l], e = l ? e + "+" : e + ">", b = z(a, q, c, e, g, 1), g) {
        if (l < m - 1 && (g = g.nextSibling, !g)) {
          return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
        }
      } else {
        d.appendChild(b);
      }
    }
  } else if (f = b.html) {
    "object" === typeof f ? (h || c.push(new w(h = {}, d, e)), h._h = "") : g || (d.innerHTML = f);
  } else if (f = b.inc) {
    h || c.push(new w(null, d, e));
    let l;
    if ("string" === typeof f) {
      l = C[f];
      if (!l) {
        throw Error("The partial template '" + f + "' which is included by the root template '" + a.name + "' was not registered. When using named includes make sure you register all your includes by Mikado.register(tpl) before instantiating the Mikado view instance.");
      }
      if (!(l instanceof D)) {
        e = l[0];
        if (b = l[1]) {
          b.async = !1, g && (b.root = g, b.hydrate = !0);
        }
        C[f] = l = new D(e, b);
      }
    } else if (1 !== f) {
      e = a.inc.length;
      if (!a.tpl.fn.length) {
        throw Error("The template '" + a.name + "|" + e + "' has conflicts. It should provide a handler entry, but wasn't found.");
      }
      l = new D({name:a.name + "|" + e, tpl:f, key:f.key, cache:f.cache, fn:a.tpl.fn}, {recycle:a.recycle, cache:a.cache, pool:a.pool, state:a.state, mount:d, hydrate:!!g});
    }
    1 !== f && a.inc.push(l);
  }
  h && (d._mkc = h);
  k || (d._mkp = c);
  return d;
}
function w(a, b, c) {
  this.c = a;
  this.n = b;
  this.v = c;
}
n = w.prototype;
n._a = function(a, b) {
  if (this.c) {
    if (this.c["_a" + a] === b) {
      return;
    }
    this.c["_a" + a] = b;
  }
  !1 !== b ? this.n.setAttribute(a, b) : this.n.removeAttribute(a);
};
n._t = function(a) {
  if (this.c) {
    if (this.c._t === a) {
      return;
    }
    this.c._t = a;
  }
  this.n.nodeValue = a;
};
n._c = function(a) {
  if (this.c) {
    if (this.c._c === a) {
      return;
    }
    this.c._c = a;
  }
  this.n.className = a;
};
n._s = function(a) {
  if (this.c) {
    if (this.c._s === a) {
      return;
    }
    this.c._s = a;
  }
  this.n.cssText = a;
};
n._h = function(a) {
  if (this.c) {
    if (this.c._h === a) {
      return;
    }
    this.c._h = a;
  }
  this.n.innerHTML = a;
};
const C = Object.create(null);
function D(a, b = {}) {
  if (!(this instanceof D)) {
    return new D(a, b);
  }
  if ("string" === typeof a) {
    var c = C[a];
    if (!c) {
      throw Error("The template '" + a + "' is not registered.");
    }
    if (c instanceof D) {
      return c;
    }
    a = c[0];
    b || (b = c[1]);
  }
  if (!a) {
    throw Error("Initialization Error: Template is not defined.");
  }
  if (!a.tpl) {
    throw Error("Initialization Error: Template isn't supported.");
  }
  this.g = [];
  this.length = 0;
  this.root = b.root || b.mount || null;
  this.recycle = !!b.recycle;
  this.state = b.state || {};
  this.shadow = b.shadow || !!a.cmp;
  this.key = a.key || "";
  this.j = {};
  c = a.fn;
  a.m || c && (a.m = c.slice());
  this.apply = c && c.pop();
  this.tpl = a;
  this.name = a.name;
  this.inc = [];
  this.pool = (this.key || this.recycle) && b.pool || 0;
  this.l = [];
  this.i = new Map();
  this.cache = a.cache || !!b.cache;
  this.root ? this.mount(this.root, b.hydrate) : this.h = null;
}
n = D.prototype;
n.mount = function(a, b) {
  if (!a) {
    throw Error("No target was passed to .mount()");
  }
  this.shadow && (a = a.shadowRoot || a.attachShadow({mode:"open"}));
  const c = a._mki;
  var e = this.root !== a;
  if (c === this) {
    if (!e) {
      return this;
    }
    this.g = a._mkd;
    this.length = this.g.length;
  } else if (c) {
    if (c.clear(), a._mkd = this.g = [], this.length = 0, a.firstChild || a.shadowRoot) {
      a.textContent = "";
    }
  } else {
    if (b) {
      var g = a.children;
      const k = g.length, d = Array(k);
      for (let h = 0; h < k; h++) {
        d[h] = g[h];
      }
      this.g = d;
      this.length = this.g.length;
    } else {
      if (this.g = [], this.length = 0, a.firstChild || a.shadowRoot) {
        a.textContent = "";
      }
    }
    a._mkd = this.g;
  }
  if (this.key) {
    if (e && this.root && (this.root._mkl = this.j), c === this) {
      this.j = a._mkl;
    } else {
      e = {};
      if (!c && b && this.length) {
        for (let k = 0, d, h; k < this.length; k++) {
          d = this.g[k], h = d.getAttribute("key"), d._mkk = h, e[h] = d;
        }
      }
      a._mkl = this.j = e;
    }
  }
  a._mki = this;
  this.root = a;
  this.h || (b && this.length && (this.h = this.g[0].cloneNode(!0), z(this, this.tpl.tpl, [], "", this.h) && E(this)), this.tpl && (this.h = z(this, this.tpl.tpl, [], ""), E(this)));
  return this;
};
function E(a) {
  a.tpl.m && (a.tpl.fn = a.tpl.m, a.tpl.m = null);
  a.tpl = null;
}
n.render = function(a, b) {
  if (!this.root) {
    throw Error("Template was not mounted or root was not found.");
  }
  if (this.root._mki !== this) {
    throw Error("Another template is already assigned to this root. Please use '.mount(root_element)' before calling '.render()' to switch the context of a template.");
  }
  var c = this.length;
  if (!a) {
    return this.apply ? console.warn("When calling .render() by passing no data nothing will happen!") : this.g[0] || this.add(), this;
  }
  if (Array.isArray(a)) {
    var e = a.length;
    if (!e) {
      return this.remove(0, c);
    }
  } else {
    a = [a], e = 1;
  }
  var g = this.key;
  !c || g || this.recycle || (this.remove(0, c), c = 0);
  var k = c < e ? c : e, d = 0;
  if (d < k) {
    for (let l, q; d < k; d++) {
      l = this.g[d];
      q = a[d];
      if (g && l._mkk !== q[g]) {
        c = this.g;
        e = this.j;
        g = this.key;
        k = a.length;
        let m = c.length, u = m > k ? m : k, A = 0;
        for (d || (d = 0); d < u; d++) {
          var h = void 0;
          if (d < k) {
            const x = a[d];
            var f = d >= m;
            let t, y, B;
            if (!f && (t = c[d], y = x[g], B = t._mkk, B === y)) {
              this.update(t, x, b, d, 1);
              continue;
            }
            if (f || !e[y]) {
              f || !this.pool ? (m++, u = m > k ? m : k, this.add(x, b, d)) : this.replace(t, x, b, d);
              continue;
            }
            let r, v;
            for (f = d + 1; f < u; f++) {
              if (!r && f < m && c[f]._mkk === y && (r = f + 1), !v && f < k && a[f][g] === B && (v = f + 1), r && v) {
                r >= v ? (h = c[r - 1], this.root.insertBefore(h, t), this.update(h, x, b, d, 1), r === v ? (1 < f - d && this.root.insertBefore(t, c[r]), c[d] = c[f], (c[f] = t) || console.error("Error")) : (F(c, r - 1, d), A++)) : (h = v - 1 + A, this.root.insertBefore(t, c[h] || null), F(c, d, (h > m ? m : h) - 1), A--, d--);
                h = 1;
                break;
              }
            }
          }
          h || (this.remove(d), m--, u = m > k ? m : k, d--);
        }
        return this;
      }
      this.update(l, q, b, d, 1);
    }
  }
  if (d < e) {
    for (; d < e; d++) {
      this.add(a[d], b);
    }
  } else {
    e < c && this.remove(e, c - e);
  }
  return this;
};
n.replace = function(a, b, c, e) {
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a : a, a = this.g[e]) : e = this.index(a));
  var g;
  if (this.key) {
    var k = b[this.key];
    if (g = this.j[k]) {
      if (g !== a) {
        var d = this.index(g);
        this.g[e] = g;
        this.g[d] = a;
        k = d < e ? g : a;
        d = d < e ? a : g;
        const h = k.nextElementSibling;
        this.root.insertBefore(k, d);
        h !== d && this.root.insertBefore(d, h);
      }
    } else {
      this.pool && (g = this.i.get(k)) && (this.i.delete(k), G(this, a), this.g[e] = g, a.replaceWith(g));
    }
  } else {
    this.recycle && (g = a);
  }
  g ? !this.apply || this.apply(b, c || this.state, e, g._mkp || p(g, this.h._mkp, this.cache)) : (b = this.create(b, c, e, 1), (this.key || this.pool) && G(this, a), this.g[e] = b, a.replaceWith(b));
  return this;
};
n.update = function(a, b, c, e) {
  if (!this.apply) {
    return console.warn("The template '" + this.name + "' is a static template and should not be updated. Alternatively you can use .replace() to switch contents."), this;
  }
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a - 1 : a, a = this.g[e]) : e = this.index(a));
  this.apply(b, c || this.state, e, a._mkp || p(a, this.h._mkp, this.cache));
  return this;
};
n.create = function(a, b, c, e) {
  let g = this.key;
  const k = g && a[g];
  let d, h, f, l;
  g && this.pool && (h = this.i) && (d = h.get(k)) ? (l = 1, h.delete(k)) : (!g || this.recycle) && this.pool && (h = this.l) && h.length ? d = h.pop() : (d = f = this.h, f || (this.h = d = f = z(this, this.tpl.tpl, [], ""), E(this)));
  this.apply && this.apply(a, b || this.state, c, d._mkp || p(d, this.h._mkp, !!f || this.cache));
  f && (d = d.cloneNode(!0));
  g && (l || (d._mkk = k), e && (this.j[k] = d));
  return d;
};
n.add = function(a, b, c) {
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = c < this.length) : "number" === typeof c ? (0 > c && (c += this.length), e = c < this.length) : c = this.length;
  a = this.create(a, b, c, 1);
  e ? (this.root.insertBefore(a, this.g[c]), F(this.g, this.length - 1, c, a), this.length++) : (this.root.appendChild(a), this.g[this.length++] = a);
  return this;
};
function F(a, b, c, e) {
  const g = e || a[b];
  e && b++;
  if (b < c) {
    for (; b < c; b++) {
      a[b] = a[b + 1];
    }
  } else {
    for (; b > c; b--) {
      a[b] = a[b - 1];
    }
  }
  a[c] = g;
}
n.append = function(a, b, c) {
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = 1) : "number" === typeof c && (0 > c && (c += this.length), e = 1);
  const g = a.length;
  for (let k = 0; k < g; k++) {
    this.add(a[k], b, e ? c++ : null);
  }
  return this;
};
n.clear = function() {
  this.length && this.remove(0, this.length);
  return this;
};
n.remove = function(a, b) {
  let c = this.length;
  c && a && ("number" !== typeof a ? a = this.index(a) : 0 > a && (a = c + a));
  if (!c || a >= c) {
    return this;
  }
  b ? 0 > b && (a -= b + 1, 0 > a && (a = 0), b *= -1) : b = 1;
  !a && b >= c ? (a = this.g, b = a.length, this.root.textContent = "", this.root._mkd = this.g = [], c = 0) : (a = this.g.splice(a, b), c -= b);
  const e = this.pool && !this.key, g = this.key || this.pool;
  for (let k = 0, d; k < b; k++) {
    d = a[e ? b - k - 1 : k], c && d.remove(), g && G(this, d);
  }
  this.length = c;
  return this;
};
n.index = function(a) {
  return this.g.indexOf(a);
};
n.node = function(a) {
  return this.g[a];
};
function G(a, b) {
  if (a.key) {
    var c = b._mkk;
    a.j[c] = null;
  }
  if (a.pool) {
    if (c) {
      a.i.set(c, b), !0 !== a.pool && a.i.size > a.pool && a.i.delete(a.i.keys().next().value);
    } else {
      if (c = a.l.length, !0 === a.pool || c < a.pool) {
        a.l[c] = b;
      }
    }
  }
}
n.flush = function() {
  this.l = [];
  this.i = new Map();
  return this;
};
n.destroy = function() {
  for (let a = 0, b; a < this.inc.length; a++) {
    b = this.inc[a], C[b.name] || b.destroy();
  }
  this.key && (this.root && (this.root._mkl = null), this.j = null);
  this.root && (this.root._mkd = this.root._mki = null);
  this.i = this.l = this.g = this.root = this.tpl = this.apply = this.inc = this.state = this.h = null;
};
D.once = function(a, b, c, e) {
  if (!a) {
    throw Error("Root element is not defined.");
  }
  if (!b) {
    throw Error("Template is not defined.");
  }
  if (c || b.fn) {
    b = new D(b);
    if (c && Array.isArray(c)) {
      for (let g = 0; g < c.length; g++) {
        a.append(b.create(c[g], e, g));
      }
    } else {
      a.append(b.create(c, e));
    }
    b.destroy();
  } else {
    c = z({}, b.tpl, [], "", null, 1), a.append(c);
  }
  return D;
};
D.register = function(a, b) {
  let c, e;
  if ("string" === typeof a) {
    if (c = e = a, a = C[c], a instanceof D || (a = a[0]), !a) {
      throw Error("The template '" + c + "' was not found.");
    }
  } else {
    c = a.name;
  }
  C[c] && (e ? console.info("The template '" + c + "' was replaced by a new definition.") : console.warn("The template '" + c + "' was already registered and is getting overwritten. When this isn't your intention, then please check your template names about uniqueness and collision!"));
  C[c] = [a, b];
  return D;
};
D.unregister = function(a) {
  "object" === typeof a && (a = a.name);
  const b = C[a];
  b && (b instanceof D && b.destroy(), C[a] = null);
  return D;
};
const H = window;
let I;
(I = H.define) && I.amd ? I([], function() {
  return D;
}) : "object" === typeof H.exports ? H.exports = D : H.Mikado = D;
}).call(this);
