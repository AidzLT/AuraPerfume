// Render trang giỏ hàng
document.addEventListener("DOMContentLoaded", () => {
  renderCartPage();
  updateCartBadge();
  document.getElementById("checkout-btn")?.addEventListener("click", () => {
    if (getCart().length) alert("Đặt hàng thành công! Cảm ơn bạn.");
    else alert("Giỏ hàng đang trống.");
  });
});

function renderCartPage() {
  const wrap = document.getElementById("cart-list");
  const totalEl = document.getElementById("cart-total");
  const cart = getCart();
  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty">
      <p>Giỏ hàng trống.</p>
      <a class="btn btn-primary" href="products.html">Tiếp tục mua sắm</a>
    </div>`;
    totalEl.textContent = formatPrice(0);
    return;
  }
  let total = 0;
  wrap.innerHTML = cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return "";
      total += p.price * i.qty;
      return `<div class="cart-item">
        <img src="${p.image}" alt="${p.name}" />
        <div class="cart-item-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-notes">${p.notes}</p>
          <p class="product-price">${formatPrice(p.price)}</p>
        </div>
        <div class="qty-control">
          <button type="button" data-dec="${p.id}">−</button>
          <span>${i.qty}</span>
          <button type="button" data-inc="${p.id}">+</button>
        </div>
        <p class="product-price">${formatPrice(p.price * i.qty)}</p>
        <button class="btn btn-ghost" data-del="${p.id}">Xoá</button>
      </div>`;
    })
    .join("");
  totalEl.textContent = formatPrice(total);

  wrap.querySelectorAll("[data-inc]").forEach((b) => (b.onclick = () => { updateQty(Number(b.dataset.inc), 1); renderCartPage(); }));
  wrap.querySelectorAll("[data-dec]").forEach((b) => (b.onclick = () => { updateQty(Number(b.dataset.dec), -1); renderCartPage(); }));
  wrap.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => { removeFromCart(Number(b.dataset.del)); renderCartPage(); }));
}
