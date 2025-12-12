
// ====== DỮ LIỆU SẢN PHẨM (SYNTHETIC DEMO) ======
const products = [
  // Apple
  {
    id: 101, brand: 'Apple', name: 'iPhone 17', price: 14990000, rating: 4.6,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSE74efuBUlp0UiOTjqGb-i8lqouw542Gby-uqrYFFO3zCR1FSqYp5Ydsf_AVavLRVlT9CdWiumrSmOBwuwuMT8cL3LGGVHo5sizRTvn49VOBsJi1p47IYlO0jlziElQ8CdauKsfC2K&usqp=CAc',
    isNew: false,
    specs: {
      'Màn hình': 'OLED 6.1" 120Hz, HDR',
      'Chip xử lý': 'Apple A18 Bionic',
      'RAM/Lưu trữ': '8GB / 128–256GB',
      'Camera': 'Chính 48MP, Ultra‑wide 12MP; quay 4K60',
      'Pin & Sạc': '3600mAh, sạc nhanh 35W, sạc MagSafe',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, NFC',
      'Chống nước': 'IP68',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 175g'
    }
  },
  {
    id: 102, brand: 'Apple', name: 'iPhone 17 Pro', price: 17990000, rating: 4.7,
    img: '', isNew: false,
    specs: {
      'Màn hình': 'OLED 6.1" ProMotion 1–120Hz',
      'Chip xử lý': 'Apple A18 Pro',
      'RAM/Lưu trữ': '8–12GB / 256–1TB',
      'Camera': '48MP + Tele 12MP (3x) + Ultra‑wide 12MP',
      'Pin & Sạc': '3800mAh, 35W, MagSafe',
      'Vật liệu': 'Khung titan',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.3, UWB',
      'Chống nước': 'IP68',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 190g'
    }
  },
  {
    id: 103, brand: 'Apple', name: 'iPhone 16 Pro', price: 21990000, rating: 4.8,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'OLED 6.1" ProMotion 120Hz',
      'Chip xử lý': 'Apple A17 Pro',
      'RAM/Lưu trữ': '8GB / 256–1TB',
      'Camera': '48MP + Tele 12MP (5x) + Ultra‑wide 12MP',
      'Pin & Sạc': '3300mAh, 27W, MagSafe',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, UWB',
      'Chống nước': 'IP68',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 187g'
    }
  },
  {
    id: 104, brand: 'Apple', name: 'iPhone 16 Pro', price: 29990000, rating: 4.9,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'OLED 6.7" ProMotion 120Hz',
      'Chip xử lý': 'Apple A17 Pro',
      'RAM/Lưu trữ': '8GB / 256–1TB',
      'Camera': '48MP + Tele 12MP (5x) + Ultra‑wide 12MP',
      'Pin & Sạc': '4500mAh, 30W, MagSafe',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, UWB',
      'Chống nước': 'IP68',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 205g'
    }
  },

  // Samsung
  {
    id: 201, brand: 'Samsung', name: 'Galaxy S23', price: 16990000, rating: 4.6,
    img: '', isNew: false,
    specs: {
      'Màn hình': 'Dynamic AMOLED 2X 6.1" 120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 2 for Galaxy',
      'RAM/Lưu trữ': '8GB / 128–256GB',
      'Camera': '50MP + 12MP (UW) + 10MP (3x)',
      'Pin & Sạc': '3900mAh, 25W, sạc không dây 15W',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, NFC',
      'Chống nước': 'IP68',
      'Bảo mật': 'Vân tay siêu âm, Face Unlock',
      'Khối lượng': '≈ 168g'
    }
  },
  {
    id: 202, brand: 'Samsung', name: 'Galaxy S24', price: 20990000, rating: 4.7,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'Dynamic AMOLED 2X 6.2" 1–120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 3 for Galaxy',
      'RAM/Lưu trữ': '8GB / 256GB',
      'Camera': '50MP + 12MP (UW) + 10MP (3x)',
      'Pin & Sạc': '4000mAh, 45W, không dây 15W',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.3, NFC, UWB',
      'Chống nước': 'IP68',
      'Bảo mật': 'Vân tay siêu âm, Face Unlock',
      'Khối lượng': '≈ 167g'
    }
  },
  {
    id: 203, brand: 'Samsung', name: 'Galaxy S24 Ultra', price: 32990000, rating: 4.9,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'Dynamic AMOLED 2X 6.8" LTPO 1–120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 3 for Galaxy',
      'RAM/Lưu trữ': '12GB / 256–1TB',
      'Camera': '200MP + 12MP (UW) + 10MP (3x) + 50MP (5x)',
      'Pin & Sạc': '5000mAh, 45W, không dây 15W',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.3, NFC, UWB',
      'Bút': 'S‑Pen hỗ trợ',
      'Chống nước': 'IP68',
      'Bảo mật': 'Vân tay siêu âm',
      'Khối lượng': '≈ 232g'
    }
  },
  {
    id: 205, brand: 'Samsung', name: 'Galaxy Buds2 Pro', price: 4490000, rating: 4.4,
    img: '', isNew: false,
    specs: {
      'Kiểu': 'Tai nghe True Wireless',
      'Driver': '2‑way dynamic',
      'Chống ồn': 'ANC 3 mức + Ambient',
      'Thời lượng pin': 'Tai nghe ~8h, kèm hộp ~29h',
      'Sạc': 'USB‑C, sạc không dây',
      'Kết nối': 'BT 5.3, SSC HiFi, AAC, SBC',
      'Kháng nước': 'IPX7',
      'Khối lượng': '≈ 19.9g (cặp)'
    }
  },

  // Xiaomi
  {
    id: 301, brand: 'Xiaomi', name: 'Xiaomi 17 Pro Max', price: 12990000, rating: 4.5,
    img: '', isNew: false,
    specs: {
      'Màn hình': 'AMOLED 6.67" 120Hz',
      'Chip xử lý': 'Dimensity 9300 / Snapdragon 8 Gen 3 (tuỳ thị trường)',
      'RAM/Lưu trữ': '12GB / 256–512GB UFS 4.0',
      'Camera': '50MP + 50MP (UW) + 64MP (3x)',
      'Pin & Sạc': '5000mAh, 120W có dây, 50W không dây',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.4, NFC, IR blaster',
      'Chống nước': 'IP68',
      'Khối lượng': '≈ 210g'
    }
  },
  {
    id: 302, brand: 'Xiaomi', name: 'Xiaomi Redmi K90 Pro Max', price: 15990000, rating: 4.6,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'AMOLED 6.67" 120Hz, 1.5K',
      'Chip xử lý': 'Snapdragon 8 Gen 3',
      'RAM/Lưu trữ': '12–16GB / 256–1TB',
      'Camera': '50MP OIS + 8MP (UW) + 12MP (2x)',
      'Pin & Sạc': '5000mAh, 120W',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.4, NFC',
      'Kháng bụi nước': 'IP64',
      'Khối lượng': '≈ 198g'
    }
  },
  {
    id: 303, brand: 'Xiaomi', name: 'Xiaomi 15 Ultra', price: 6990000, rating: 4.3,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'AMOLED 6.73" LTPO 1–120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 2',
      'RAM/Lưu trữ': '12GB / 256–512GB',
      'Camera': '50MP Leica + 48MP periscope (5x) + 50MP UW',
      'Pin & Sạc': '5000mAh, 90W có dây, 50W không dây',
      'Kết nối': '5G, Wi‑Fi 6, BT 5.2, NFC',
      'Chống nước': 'IP68',
      'Khối lượng': '≈ 225g'
    }
  },

  // Oppo
  {
    id: 401, brand: 'Oppo', name: 'OPPO Find X9 Pro', price: 10990000, rating: 4.4,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'AMOLED 6.8" LTPO 1–120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 3',
      'RAM/Lưu trữ': '12–16GB / 256–512GB',
      'Camera': '50MP + 64MP periscope (5x) + 48MP (UW), Hasselblad',
      'Pin & Sạc': '5000mAh, 100W SuperVOOC, 50W không dây',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.4, NFC',
      'Chống nước': 'IP68',
      'Khối lượng': '≈ 214g'
    }
  },
  {
    id: 402, brand: 'Oppo', name: 'Oppo Find X8', price: 35990000, rating: 4.7,
    img: '', isNew: false,
    specs: {
      'Màn hình': 'AMOLED 6.7" 120Hz',
      'Chip xử lý': 'Snapdragon 8 Gen 2',
      'RAM/Lưu trữ': '12GB / 256–512GB',
      'Camera': '50MP + 50MP (UW) + 32MP (2x)',
      'Pin & Sạc': '4800mAh, 80W SuperVOOC',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, NFC',
      'Chống nước': 'IP68',
      'Khối lượng': '≈ 195g'
    }
  },

  // OnePlus
  {
    id: 501, brand: 'OnePlus', name: 'OnePlus 13T 5G', price: 18990000, rating: 4.6,
    img: '', isNew: true,
    specs: {
      'Màn hình': 'AMOLED 6.74" 120Hz, 1.5K',
      'Chip xử lý': 'Snapdragon 8 Gen 3',
      'RAM/Lưu trữ': '12–16GB / 256–512GB UFS 4.0',
      'Camera': '50MP OIS + 48MP (UW) + 64MP (3x)',
      'Pin & Sạc': '5500mAh, 100W SuperVOOC, 50W không dây',
      'Kết nối': '5G, Wi‑Fi 7, BT 5.4, NFC',
      'Chống nước': 'IP65/IP68 (tuỳ bản)',
      'Khối lượng': '≈ 206g'
    }
  },
  {
    id: 502, brand: 'OnePlus', name: 'OnePlus ACE 5 Ultra', price: 3990000, rating: 4.4,
    img: '', isNew: false,
    specs: {
      'Màn hình': 'AMOLED 6.74" 120Hz',
      'Chip xử lý': 'Dimensity 9200 / 9300',
      'RAM/Lưu trữ': '12GB / 256GB',
      'Camera': '50MP + 8MP (UW) + 2MP',
      'Pin & Sạc': '5000mAh, 150W SUPERVOOC',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, NFC',
      'Kháng nước': 'IP64',
      'Khối lượng': '≈ 200g'
    }
  }
];


// ====== TIỆN ÍCH ======
const formatVND = (n) => n.toLocaleString('vi-VN') + '₫';
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function simpleHash(str) { let h = 0; for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; } return String(h); }

// ====== STORE (localStorage) ======
const store = {
  get users() { return JSON.parse(localStorage.getItem('users') || '{}'); },
  set users(val) { localStorage.setItem('users', JSON.stringify(val)); },
  get currentUser() { return localStorage.getItem('currentUser'); },
  set currentUser(email) { email ? localStorage.setItem('currentUser', email) : localStorage.removeItem('currentUser'); },
  get cart() { return JSON.parse(localStorage.getItem('cart') || '[]'); },
  set cart(val) { localStorage.setItem('cart', JSON.stringify(val)); },
  get wishlist() { return JSON.parse(localStorage.getItem('wishlist') || '[]'); },
  set wishlist(val) { localStorage.setItem('wishlist', JSON.stringify(val)); },
};

// ====== AUTH ======
function register(email, password) {
  const users = store.users; if (users[email]) throw new Error('Email đã tồn tại.');
  users[email] = { password: simpleHash(password), createdAt: Date.now() }; store.users = users;
}
function login(email, password) {
  const users = store.users; const u = users[email]; if (!u) throw new Error('Không tìm thấy người dùng.');
  if (u.password !== simpleHash(password)) throw new Error('Mật khẩu không đúng.'); store.currentUser = email;
}
function changePassword(email, oldPassword, newPassword) {
  const users = store.users; const u = users[email]; if (!u) throw new Error('Không tìm thấy người dùng.');
  if (u.password !== simpleHash(oldPassword)) throw new Error('Mật khẩu hiện tại không đúng.'); u.password = simpleHash(newPassword); store.users = users;
}
function forgotPassword(email) {
  const users = store.users; const u = users[email]; if (!u) throw new Error('Email chưa đăng ký.');
  const temp = Math.random().toString(36).slice(2, 10); u.password = simpleHash(temp); store.users = users; return temp;
}

function refreshAuthUI() {
  const label = qs('#currentUserLabel'); const btnLogin = qs('#btnLogin'); const btnChange = qs('#btnChangePassword'); const btnLogout = qs('#btnLogout');
  const email = store.currentUser; qs('#cartCount').textContent = String(store.cart.reduce((s,i)=>s+i.qty,0));
  if (email) { label.textContent = `Đang đăng nhập: ${email}`; btnLogin.hidden = true; btnChange.hidden = false; btnLogout.hidden = false; }
  else { label.textContent = ''; btnLogin.hidden = false; btnChange.hidden = true; btnLogout.hidden = true; }
}

// ====== FILTERS, SORT, PAGINATION ======
let state = { brand: 'all', search: '', sort: 'popular', priceMin: 0, priceMax: Infinity, page: 1, pageSize: 12 };

function applyFilters(list) {
  let out = [...list];
  if (state.brand !== 'all') out = out.filter(p => p.brand === state.brand);
  if (state.search) { const s = state.search.toLowerCase(); out = out.filter(p => `${p.name} ${p.brand}`.toLowerCase().includes(s)); }
  out = out.filter(p => p.price >= state.priceMin && p.price <= state.priceMax);
  switch (state.sort) {
    case 'price-asc': out.sort((a,b) => a.price - b.price); break;
    case 'price-desc': out.sort((a,b) => b.price - a.price); break;
    case 'name': out.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'new': out.sort((a,b) => Number(b.isNew) - Number(a.isNew)); break;
    default: out.sort((a,b) => b.rating - a.rating); break;
  }
  return out;
}

function paginate(list) {
  const total = list.length; const pages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * state.pageSize; const end = start + state.pageSize;
  return { pageItems: list.slice(start, end), page: state.page, pages, total };
}

// ====== RENDER GRID ======
function renderProducts(list) {
  const grid = qs('#productGrid'); grid.innerHTML = '';
  if (!list.length) { grid.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>'; return; }
  const { pageItems, page, pages, total } = paginate(list);
  const frag = document.createDocumentFragment();
  for (const p of pageItems) {
    const card = document.createElement('article'); card.className = 'card';
    card.innerHTML = `
      ${p.isNew ? '<span class="badge-corner">Mới</span>' : ''}
      <img src="${p.img}" alt="${p.name} - ${p.brand}" loading="lazy" />
      <div class="card-body">
        <div class="title-row">
          <div>
            <div class="title">${p.name}</div>
            <div class="brand">${p.brand}</div>
          </div>
          <button class="action-icon wishlist-btn" title="Yêu thích" data-id="${p.id}" aria-label="Thêm vào yêu thích">❤</button>
        </div>
        <div class="price">${formatVND(p.price)}</div>
        <div class="rating">★ ${p.rating}</div>
        <div class="actions">
          <button class="btn primary add-cart" data-id="${p.id}">Thêm vào giỏ</button>
          <button class="btn outline view-detail" data-id="${p.id}">Chi tiết</button>
        </div>
      </div>`;
    frag.appendChild(card);
  }
  grid.appendChild(frag);
  qs('#pageInfo').textContent = `Trang ${page}/${pages} · ${total} sản phẩm`;
  qs('#prevPage').disabled = page <= 1; qs('#nextPage').disabled = page >= pages;
}

// ====== CART & WISHLIST ======
function addToCart(id) {
  const p = products.find(x => x.id === id); if (!p) return;
  const cart = store.cart; const idx = cart.findIndex(i => i.id === id);
  if (idx >= 0) cart[idx].qty += 1; else cart.push({ id, name: p.name, price: p.price, img: p.img, qty: 1 });
  store.cart = cart; refreshAuthUI(); renderCart();
}
function removeFromCart(id) { const cart = store.cart.filter(i => i.id !== id); store.cart = cart; refreshAuthUI(); renderCart(); }
function updateQty(id, delta) {
  const cart = store.cart; const idx = cart.findIndex(i => i.id === id); if (idx < 0) return;
  cart[idx].qty = Math.max(1, cart[idx].qty + delta); store.cart = cart; refreshAuthUI(); renderCart();
}
function renderCart() {
  const list = qs('#cartList'); list.innerHTML = '';
  const cart = store.cart; if (!cart.length) { list.innerHTML = '<p>Giỏ hàng trống.</p>'; qs('#cartTotal').textContent = '0₫'; return; }
  const frag = document.createDocumentFragment(); let total = 0;
  for (const i of cart) {
    total += i.price * i.qty;
    const el = document.createElement('div'); el.className = 'cart-item';
    el.innerHTML = `
      <img src="${i.img}" alt="${i.name}" />
      <div>
        <div class="title">${i.name}</div>
        <div class="price">${formatVND(i.price)} × ${i.qty}</div>
      </div>
      <div class="qty">
        <button class="btn" data-action="dec" data-id="${i.id}">−</button>
        <button class="btn" data-action="inc" data-id="${i.id}">＋</button>
        <button class="btn" data-action="rm" data-id="${i.id}">Xóa</button>
      </div>`;
    frag.appendChild(el);
  }
  list.appendChild(frag); qs('#cartTotal').textContent = formatVND(total);
}

function toggleWishlist(id) {
  const w = store.wishlist; const idx = w.indexOf(id); if (idx >= 0) w.splice(idx, 1); else w.push(id);
  store.wishlist = w; renderWishlist();
}
function renderWishlist() {
  const list = qs('#wishlistList'); list.innerHTML = '';
  const ids = store.wishlist; if (!ids.length) { list.innerHTML = '<p>Chưa có sản phẩm yêu thích.</p>'; return; }
  const frag = document.createDocumentFragment();
  for (const id of ids) {
    const p = products.find(x => x.id === id); if (!p) continue;
    const el = document.createElement('div'); el.className = 'cart-item';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div>
        <div class="title">${p.name}</div>
        <div class="price">${formatVND(p.price)}</div>
      </div>
      <div class="qty">
        <button class="btn" data-action="add" data-id="${p.id}">Thêm vào giỏ</button>
        <button class="btn" data-action="rmwish" data-id="${p.id}">Bỏ yêu thích</button>
      </div>`;
    frag.appendChild(el);
  }
  list.appendChild(frag);
}
// ====== SỰ KIỆN & KHỞI TẠO ======
window.addEventListener('DOMContentLoaded', () => {
  // Menu di động
  const navToggle = qs('.nav-toggle'); const nav = qs('#primary-nav');
  navToggle?.addEventListener('click', () => { const expanded = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!expanded)); nav.classList.toggle('open'); });

  // Tìm kiếm
  qs('.search')?.addEventListener('submit', (e) => { e.preventDefault(); const q = new FormData(e.target).get('q'); state.search = (q || '').toString(); state.page = 1; renderProducts(applyFilters(products)); });

  // Lọc hãng
  qsa('.chip').forEach(chip => { chip.addEventListener('click', () => { qsa('.chip').forEach(c => c.setAttribute('aria-pressed', 'false')); chip.setAttribute('aria-pressed', 'true'); state.brand = chip.dataset.brand; state.page = 1; renderProducts(applyFilters(products)); }); });

  // Sắp xếp
  qs('#sortSelect')?.addEventListener('change', (e) => { state.sort = e.target.value; state.page = 1; renderProducts(applyFilters(products)); });

  // Khoảng giá
  qs('#applyPrice')?.addEventListener('click', () => { const min = Number(qs('#priceMin').value || 0); const maxIn = qs('#priceMax').value; const max = maxIn ? Number(maxIn) : Infinity; state.priceMin = min; state.priceMax = max; state.page = 1; renderProducts(applyFilters(products)); });

  // Phân trang
  qs('#prevPage')?.addEventListener('click', () => { state.page = Math.max(1, state.page - 1); renderProducts(applyFilters(products)); });
  qs('#nextPage')?.addEventListener('click', () => { state.page = state.page + 1; renderProducts(applyFilters(products)); });

  // Render ban đầu
  renderProducts(applyFilters(products));

  // Auth dialogs
  const authDialog = qs('#authDialog'); const changePwdDialog = qs('#changePwdDialog'); const forgotDialog = qs('#forgotDialog');
  qs('#btnLogin')?.addEventListener('click', () => authDialog.showModal());
  qs('#closeAuth')?.addEventListener('click', () => authDialog.close());
  qs('#btnChangePassword')?.addEventListener('click', () => changePwdDialog.showModal());
  qs('#closeChangePwd')?.addEventListener('click', () => changePwdDialog.close());
  qs('#openForgot')?.addEventListener('click', () => { authDialog.close(); forgotDialog.showModal(); });
  qs('#closeForgot')?.addEventListener('click', () => forgotDialog.close());

  qs('#authForm')?.addEventListener('submit', (e) => { e.preventDefault(); const btn = e.submitter; const data = new FormData(e.target); const email = data.get('email')?.toString().trim(); const password = data.get('password')?.toString(); try { if (btn?.dataset.action === 'register') { register(email, password); alert('Đăng ký thành công. Vui lòng đăng nhập.'); } else { login(email, password); alert('Đăng nhập thành công!'); authDialog.close(); } refreshAuthUI(); } catch (err) { alert(err.message); } });

  qs('#btnLogout')?.addEventListener('click', () => { store.currentUser = null; alert('Bạn đã đăng xuất.'); refreshAuthUI(); });

  qs('#changePwdForm')?.addEventListener('submit', (e) => { e.preventDefault(); const data = new FormData(e.target); const email = store.currentUser; if (!email) return alert('Bạn cần đăng nhập trước.'); const oldPassword = data.get('oldPassword')?.toString(); const newPassword = data.get('newPassword')?.toString(); try { changePassword(email, oldPassword, newPassword); alert('Đổi mật khẩu thành công!'); e.target.reset(); changePwdDialog.close(); } catch (err) { alert(err.message); } });

  qs('#forgotForm')?.addEventListener('submit', (e) => { e.preventDefault(); const email = new FormData(e.target).get('email')?.toString(); try { const temp = forgotPassword(email); qs('#tempPwdArea').textContent = `Mật khẩu tạm thời của bạn: ${temp}`; } catch (err) { alert(err.message); } });

  // Cart & Wishlist drawers
  const cartDialog = qs('#cartDialog'); const wishlistDialog = qs('#wishlistDialog');
  qs('#openCart')?.addEventListener('click', () => { renderCart(); cartDialog.showModal(); });
  qs('#closeCart')?.addEventListener('click', () => cartDialog.close());
  qs('#openWishlist')?.addEventListener('click', () => { renderWishlist(); wishlistDialog.showModal(); });
  qs('#closeWishlist')?.addEventListener('click', () => wishlistDialog.close());
  qs('#clearWishlist')?.addEventListener('click', () => { store.wishlist = []; renderWishlist(); });

  qs('#checkout')?.addEventListener('click', () => { if (!store.currentUser) return alert('Vui lòng đăng nhập để thanh toán.'); if (!store.cart.length) return alert('Giỏ hàng trống.'); alert('Demo: Thanh toán giả lập thành công. Cảm ơn bạn!'); store.cart = []; renderCart(); refreshAuthUI(); });

  // Delegation for product grid buttons
  qs('#productGrid')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); if (!btn) return; const id = Number(btn.dataset.id);
    if (btn.classList.contains('add-cart')) addToCart(id);
    
    if (btn.classList.contains('view-detail')) {
        location.hash = `#/product/${id}`;
    }

    if (btn.classList.contains('wishlist-btn')) { toggleWishlist(id); btn.classList.toggle('active'); }
  });

  // Delegation for cart & wishlist items
  qs('#cartList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); if (!btn) return; const id = Number(btn.dataset.id);
    const action = btn.dataset.action; if (action === 'dec') updateQty(id, -1); if (action === 'inc') updateQty(id, +1); if (action === 'rm') removeFromCart(id);
  });
  qs('#wishlistList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); if (!btn) return; const id = Number(btn.dataset.id);
    const action = btn.dataset.action; if (action === 'add') addToCart(id); if (action === 'rmwish') toggleWishlist(id);
  });

  refreshAuthUI();
});

// Thứ tự hiển thị gợi ý (tuỳ chọn, để bảng luôn nhất quán)
const SPEC_ORDER = [
  'Màn hình', 'Chip xử lý', 'RAM/Lưu trữ', 'Camera',
  'Pin & Sạc', 'Kết nối', 'Chống nước', 'Bảo mật', 'Khối lượng'
];

// Hàm tạo bảng thông số và mở dialog
function openProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // Gán thông tin cơ bản
  qs('#detailImg').src = p.img || '';
  qs('#detailImg').alt = `${p.name} - ${p.brand}`;
  qs('#detailTitle').textContent = p.name;
  qs('#detailBrand').textContent = p.brand;
  qs('#detailPrice').textContent = formatVND(p.price);
  qs('#detailRating').textContent = `★ ${p.rating}`;

  // Tạo bảng từ p.specs
  const tbody = qs('#specTable tbody');
  tbody.innerHTML = '';

  const keys = Object.keys(p.specs || {});
  const orderedKeys = [
    ...SPEC_ORDER.filter(k => keys.includes(k)),
    ...keys.filter(k => !SPEC_ORDER.includes(k))
  ];

  for (const k of orderedKeys) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${k}</td><td>${p.specs[k]}</td>`;
    tbody.appendChild(tr);
  }

  // Nút thêm vào giỏ trong dialog
  qs('#detailAddCart').onclick = () => addToCart(p.id);

  // Mở dialog
  const dlg = qs('#productDetailDialog');
  dlg.showModal();

  // Đóng dialog
  const close = () => dlg.close();
  qs('#detailClose').onclick = close;
  qs('#detailClose2').onclick = close;
}

qs('#productGrid')?.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const id = Number(btn.dataset.id);

  if (btn.classList.contains('add-cart')) addToCart(id);

  if (btn.classList.contains('view-detail')) {
    // LỆNH cần dùng: gọi hàm mở dialog và tạo bảng
    openProductDetail(id);
  }

  if (btn.classList.contains('wishlist-btn')) {
    toggleWishlist(id);
    btn.classList.toggle('active');
  }
});
