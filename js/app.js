// Aura Perfume — khởi tạo giao diện & logic chính
document.addEventListener("DOMContentLoaded", () => {
  renderHomeSections();
  initSlider();
  initContactForm();
  initDarkMode();
  initCountdown();
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle)
    navToggle.addEventListener("click", () =>
      document.querySelector(".main-nav").classList.toggle("open"),
    );
  if (document.getElementById("catalog-grid")) initCatalog();
  updateCartBadge();
});

/* ---------- Render sản phẩm theo nhóm ---------- */
function productCard(p) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" />
        <span class="product-tag">${TAG_LABEL[p.tag]}</span>
      </div>
      <p class="product-cat">${p.gender === "qua-tang" ? "Quà Tặng" : p.gender === "unisex" ? "Unisex" : p.gender === "nam" ? "Nước Hoa Nam" : "Nước Hoa Nữ"}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-notes">${p.notes}</p>
      <p class="product-price">${formatPrice(p.price)}</p>
      <div class="product-actions">
        <a class="btn btn-ghost" href="product.html?id=${p.id}">Xem chi tiết</a>
        <button class="btn btn-primary" data-add="${p.id}">Thêm giỏ</button>
      </div>
    </article>`;
}

function renderHomeSections() {
  const map = {
    "grid-nam": "nam",
    "grid-nu": "nu",
    "grid-unisex": "unisex",
    "grid-quatang": "qua-tang",
  };
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) addToCart(Number(add.dataset.add));
  });
  Object.entries(map).forEach(([id, gender]) => {
    const el = document.getElementById(id);
    if (el)
      el.innerHTML = PRODUCTS.filter((p) => p.gender === gender)
        .slice(0, 4)
        .map(productCard)
        .join("");
  });
}

/* ---------- Slider / Banner ---------- */
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  let i = 0;
  const dots = document.querySelectorAll(".slide-dot");
  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
  };
  let timer = setInterval(() => show(i + 1), 5000);
  const reset = () => {
    clearInterval(timer);
    timer = setInterval(() => show(i + 1), 5000);
  };
  document.querySelector(".slide-prev")?.addEventListener("click", () => {
    show(i - 1);
    reset();
  });
  document.querySelector(".slide-next")?.addEventListener("click", () => {
    show(i + 1);
    reset();
  });
  dots.forEach((d, k) =>
    d.addEventListener("click", () => {
      show(k);
      reset();
    }),
  );
  document.querySelector(".slider")?.addEventListener("mouseenter", () => clearInterval(timer));
  document.querySelector(".slider")?.addEventListener("mouseleave", reset);
}

/* ---------- Form liên hệ ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    const show = (id, msg) => {
      const el = document.getElementById(id);
      el.textContent = msg;
      if (msg) ok = false;
    };
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const msg = form.message.value.trim();
    show("err-name", name ? "" : "Vui lòng nhập họ tên");
    show("err-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email không hợp lệ");
    show("err-phone", /^0\d{9}$/.test(phone) ? "" : "SĐT phải 10 số, bắt đầu bằng 0");
    show("err-message", msg ? "" : "Vui lòng nhập nội dung");
    if (ok) {
      alert("Gửi liên hệ thành công!");
      form.reset();
    }
  });
}

/* ---------- Dark mode ---------- */
function initDarkMode() {
  const btn = document.getElementById("dark-toggle");
  if (!btn) return;
  if (localStorage.getItem("aura_theme") === "dark") document.body.classList.add("dark");
  const syncIcon = () => (btn.textContent = document.body.classList.contains("dark") ? "☀" : "☾");
  syncIcon();
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("aura_theme", document.body.classList.contains("dark") ? "dark" : "light");
    syncIcon();
  });
}

/* ---------- Countdown Flash Sale ---------- */
function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const tick = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    let d = Math.max(0, end - now);
    const h = String(Math.floor(d / 3.6e6)).padStart(2, "0");
    const m = String(Math.floor((d % 3.6e6) / 6e4)).padStart(2, "0");
    const s = String(Math.floor((d % 6e4) / 1e3)).padStart(2, "0");
    el.textContent = `${h}:${m}:${s}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Trang danh mục: tìm kiếm + lọc ---------- */
function initCatalog() {
  const params = new URLSearchParams(location.search);
  let group = params.get("group") || "all";
  document.getElementById("group-filter").value = group;
  let tag = "all";
  let keyword = "";
  let min = 0,
    max = Infinity;
  let stock = "all";
  let sort = "featured";

  const syncURL = () => {
    const p = new URLSearchParams();
    if (group !== "all") p.set("group", group);
    if (tag !== "all") p.set("tag", tag);
    if (stock !== "all") p.set("stock", stock);
    if (keyword) p.set("q", keyword);
    if (min > 0) p.set("min", min);
    if (max !== Infinity) p.set("max", max);
    if (sort !== "featured") p.set("sort", sort);
    history.replaceState(null, "", p.toString() ? "?" + p.toString() : location.pathname);
  };

  const render = () => {
    const grid = document.getElementById("catalog-grid");
    let list = PRODUCTS.filter(
      (p) =>
        (group === "all" || p.gender === group) &&
        (tag === "all" || p.tag === tag) &&
        p.name.toLowerCase().includes(keyword.toLowerCase()) &&
        p.price >= min &&
        p.price <= max &&
        (stock === "all" || (stock === "in" && p.stock > 0) || (stock === "out" && p.stock === 0)),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    document.getElementById("result-count").textContent = `${list.length} sản phẩm`;
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : "<p>Không có sản phẩm phù hợp.</p>";
    syncURL();
  };

  document.querySelectorAll(".tag-filter").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".tag-filter").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      tag = b.dataset.tag;
      render();
    }),
  );
  document.getElementById("search-input").addEventListener("input", (e) => {
    keyword = e.target.value;
    render();
  });
  document.getElementById("group-filter").addEventListener("change", (e) => {
    group = e.target.value;
    render();
  });
  document.getElementById("price-min").addEventListener("input", (e) => {
    min = Number(e.target.value) || 0;
    render();
  });
  document.getElementById("price-max").addEventListener("input", (e) => {
    max = Number(e.target.value) || Infinity;
    render();
  });
  document.getElementById("stock-filter").addEventListener("change", (e) => {
    stock = e.target.value;
    render();
  });
  document.getElementById("sort-filter").addEventListener("change", (e) => {
    sort = e.target.value;
    render();
  });
  document.getElementById("clear-filters").addEventListener("click", () => {
    group = "all"; tag = "all"; stock = "all"; keyword = ""; min = 0; max = Infinity; sort = "featured";
    document.getElementById("group-filter").value = "all";
    document.getElementById("stock-filter").value = "all";
    document.getElementById("sort-filter").value = "featured";
    document.getElementById("search-input").value = "";
    document.getElementById("price-min").value = "";
    document.getElementById("price-max").value = "";
    document.querySelectorAll(".tag-filter").forEach((x) => x.classList.remove("active"));
    document.querySelector('.tag-filter[data-tag="all"]').classList.add("active");
    render();
  });
  document.getElementById("filter-open").addEventListener("click", () =>
    document.getElementById("filter-sidebar").classList.add("open"),
  );
  document.getElementById("filter-close").addEventListener("click", () =>
    document.getElementById("filter-sidebar").classList.remove("open"),
  );
  // khôi phục trạng thái từ URL
  tag = params.get("tag") || "all";
  stock = params.get("stock") || "all";
  keyword = params.get("q") || "";
  min = Number(params.get("min")) || 0;
  max = params.get("max") ? Number(params.get("max")) : Infinity;
  sort = params.get("sort") || "featured";
  document.getElementById("search-input").value = keyword;
  document.getElementById("price-min").value = min > 0 ? min : "";
  document.getElementById("price-max").value = max !== Infinity ? max : "";
  document.getElementById("stock-filter").value = stock;
  document.getElementById("sort-filter").value = sort;
  document.querySelectorAll(".tag-filter").forEach((x) =>
    x.classList.toggle("active", x.dataset.tag === tag),
  );
  render();
}
