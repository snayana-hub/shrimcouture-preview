/* Shrimcouture preview - currency, cart, rendering. Prices held in INR. */
var SC_RATES = {INR:{r:1,s:"\u20B9",d:0}, USD:{r:0.0115,s:"$",d:0}, EUR:{r:0.0106,s:"\u20AC",d:0}, GBP:{r:0.0091,s:"\u00A3",d:0}};
function scCur(){ return localStorage.getItem("sc_cur") || "INR"; }
function scSetCur(c){ localStorage.setItem("sc_cur", c); location.reload(); }
function scPrice(inr){
  var c = scCur(), x = SC_RATES[c];
  var v = Math.round(inr * x.r);
  return x.s + v.toLocaleString(c === "INR" ? "en-IN" : "en-US");
}
function scSalePrice(p){ return p.sale ? Math.round(p.price * (100 - p.sale) / 100) : p.price; }
function scPriceBlock(p){
  if (!p.sale) return '<p class="price">' + scPrice(p.price) + '</p>';
  return '<p class="price">' + scPrice(scSalePrice(p)) +
    ' <span class="was">' + scPrice(p.price) + '</span>' +
    ' <span class="off">' + p.sale + '% off</span></p>';
}
function scCart(){ try { return JSON.parse(localStorage.getItem("sc_cart")) || []; } catch(e){ return []; } }
function scSaveCart(c){ localStorage.setItem("sc_cart", JSON.stringify(c)); scBadge(); }
function scAdd(id, size, qty){
  var c = scCart(), found = c.filter(function(i){ return i.id===id && i.size===size; })[0];
  if (found) { found.qty += qty; } else { c.push({id:id, size:size, qty:qty}); }
  scSaveCart(c);
}
function scBadge(){
  var n = scCart().reduce(function(a,i){ return a + i.qty; }, 0);
  document.querySelectorAll(".cart-count").forEach(function(el){
    el.textContent = n ? "(" + n + ")" : "";
  });
}
function scFind(id){ return window.SC_PRODUCTS.filter(function(p){ return p.id===id; })[0]; }
function scCard(p){
  return '<a class="card" href="product.html?id=' + p.id + '">' +
    '<div class="card-img">' + (p.sale ? '<span class="tag">Sale</span>' : '') +
    '<img loading="lazy" src="' + p.img + '" alt="' + p.name + '"></div>' +
    '<div class="card-body"><h3>' + p.name + '</h3><p class="muted">' + p.blurb + '</p>' +
    scPriceBlock(p) + '</div></a>';
}
function scMountHeader(){
  var cur = scCur();
  document.querySelectorAll("#cur-select").forEach(function(sel){
    sel.value = cur;
    sel.addEventListener("change", function(){ scSetCur(this.value); });
  });
  var t = document.querySelector(".nav-toggle");
  if (t) t.addEventListener("click", function(){ document.querySelector(".nav-links").classList.toggle("open"); });
  scBadge();
}
document.addEventListener("DOMContentLoaded", scMountHeader);
