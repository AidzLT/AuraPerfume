document.addEventListener("DOMContentLoaded", () => {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = PRODUCTS.find((x) => x.id === id);
  const el = document.getElementById("product-detail");
  if (!p) {
    el.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
    return;
  }
  document.title = p.name + " — Aura Perfume";
  document.getElementById("bc-name").textContent = p.name;
  el.innerHTML = `
          <div class="detail-media">
            <span class="detail-badge">${TAG_LABEL[p.tag]}</span>
            <img src="${p.image}" alt="${p.name}" />
          </div>
          <div class="detail-info">
            <p class="product-cat">${TAG_LABEL[p.tag]}</p>
            <h1 class="section-title">${p.name}</h1>
            <p class="product-notes">${p.notes}</p>
            <p class="product-desc">${p.desc || ""}</p>
            <p class="detail-stock">${p.stock > 0 ? `Còn hàng (${p.stock})` : 'Hết hàng'}</p>

            <p class="label-uppercase">Dung tích</p>
            <div class="volume-options">
              <label><input type="radio" name="volume" value="50" checked />50ml</label>
              <label><input type="radio" name="volume" value="100" />100ml</label>
            </div>

            <p class="product-price" id="detail-price">${formatPrice(p.price)}</p>

            <p class="label-uppercase">Số lượng</p>
            <div class="qty-control">
              <button type="button" id="qty-minus">−</button>
              <span id="qty-val">1</span>
              <button type="button" id="qty-plus">+</button>
            </div>

            <button class="btn btn-primary detail-add" id="detail-add">Thêm giỏ</button>
            <a class="btn btn-ghost detail-buynow" href="cart.html">Mua ngay</a>
            <a class="link-editorial" href="products.html">← Quay lại danh sách</a>

            <div class="notes-pyramid">
              <h4>Tầng hương</h4>
              <div class="notes-tier"><span>Top notes</span><p>${p.notes.split('·')[0]?.trim() || ''}</p></div>
              <div class="notes-tier"><span>Heart notes</span><p>${p.notes.split('·')[1]?.trim() || ''}</p></div>
              <div class="notes-tier"><span>Base notes</span><p>${p.notes.split('·')[2]?.trim() || ''}</p></div>
            </div>

            <div class="detail-trust">
              <p>Giao hàng toàn quốc</p>
              <p>Đổi trả trong 7 ngày</p>
              <p>Thanh toán an toàn</p>
            </div>
          </div>`;

  let qty = 1;
  const qtyEl = document.getElementById("qty-val");
  const priceEl = document.getElementById("detail-price");
  const getUnitPrice = () =>
    p.price *
    (Number(document.querySelector('input[name="volume"]:checked').value) === 100 ? 1.4 : 1);
  const refresh = () => {
    qtyEl.textContent = qty;
    priceEl.textContent = formatPrice(Math.round(getUnitPrice() * qty));
  };
  document.getElementById("qty-minus").onclick = () => {
    if (qty > 1) qty--;
    refresh();
  };
  document.getElementById("qty-plus").onclick = () => {
    qty++;
    refresh();
  };
  document
    .querySelectorAll('input[name="volume"]')
    .forEach((r) => r.addEventListener("change", refresh));
  const addBtn = document.getElementById("detail-add");
  addBtn.onclick = () => {
    if (p.stock > 0) addToCart(p.id, qty);
  };
  if (p.stock === 0) addBtn.disabled = true;

  const related = PRODUCTS.filter((x) => x.gender === p.gender && x.id !== p.id).slice(0, 4);
  document.getElementById("related-grid").innerHTML = related.map(productCard).join("");
});
