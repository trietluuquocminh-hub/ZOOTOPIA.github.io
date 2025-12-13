
// ====== DỮ LIỆU SẢN PHẨM (SYNTHETIC DEMO) ======
const products = [
  // Apple
  {
    id: 101, brand: 'Apple', name: 'iPhone 17', price: 24990000, rating: 4.6,
    img: 'https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-tim-thumb-650x650.png',
    isNew: true,
    specs: {
      'Màn hình': 'OLED 6,3 inch Super Retina XDR',
      'Chip xử lý': 'Apple A19',
      'Lưu trữ': '256GB-512GB',
      'Camera': 'Hệ thống camera 48MP Dual Fusion',
      'Pin & Sạc': 'Thời gian xem video: Lên đến 30 giờ-Thời gian xem video (trực tuyến): Lên đến 27 giờ-Tích hợp pin sạc lithium‑ion-Khả năng sạc nhanh:-Sạc lên đến 50% trong 20 phút6 với bộ tiếp hợp 40W trở lên (được bán riêng) sử dụng cáp sạc USB‑C-Sạc lên đến 50% trong 30 phút6 với bộ tiếp hợp 30W trở lên sử dụng Bộ Sạc MagSafe (cả hai đều được bán riêng)',
      'Kết nối': 'Chip mạng không dây Apple N1-Chip Apple Ultra Wideband',
      'Chống nước': 'Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút) theo tiêu chuẩn IEC 60529',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 177g',
      'Môi Trường Hoạt Động': 'Nhiệt độ môi trường khi hoạt động: 0° đến 35° C-Nhiệt độ khi không hoạt động: −20° đến 45° C-Độ ẩm tương đối: 5% đến 95% không ngưng tụ-Độ cao hoạt động: được thử nghiệm ở độ cao lên đến 3.000 mét'
    }
  },
  {
    id: 102, brand: 'Apple', name: 'iPhone 17 Pro', price:34990000 , rating: 4.8,
    img: 'https://cdn.tgdd.vn/Products/Images/42/342676/s16/iphone-17-pro-sliver-thumb-650x650.png', isNew: true,
    specs: {
      'Màn hình': 'OLED 6,3 inch Super Retina XDR Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz',
      'Chip xử lý': 'Apple A19 Pro',
      'Lưu trữ': '256GB-512GB-1TB',
      'Camera': '48MP + Tele 48MP (3x) + Ultra‑wide 48MP',
      'Pin & Sạc': 'Thời gian xem video: Lên đến 31 giờ-Thời gian xem video (trực tuyến): Lên đến 28 giờ-Tích hợp pin sạc lithium‑ion-Khả năng sạc nhanh:-Sạc lên đến 50% trong 20 phút8 với bộ tiếp hợp 40W trở lên (được bán riêng) sử dụng cáp sạc USB-C-Sạc lên đến 50% trong 30 phút8 với bộ tiếp hợp 30W trở lên sử dụng Bộ Sạc MagSafe (cả hai đều được bán riêng)',
      'Vật liệu': 'Khung titan',
      'Kết nối': 'Chip mạng không dây Apple N1-Chip Apple Ultra Wideband thế hệ thứ 2 ',
      'Chống nước': 'Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút) theo tiêu chuẩn IEC 60529',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 204g',
      'Môi Trường Hoạt Động': 'Nhiệt độ môi trường khi hoạt động: 0° đến 35° C-Nhiệt độ khi không hoạt động: −20° đến 45° C-Độ ẩm tương đối: 5% đến 95% không ngưng tụ-Độ cao hoạt động: được thử nghiệm ở độ cao lên đến 3.000 mét'
    }
  },
  {
    id: 103, brand: 'Apple', name: 'iPhone 16 Pro ', price: 25590000, rating: 4.8,
    img: 'https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-sa-mac-650x650.png', isNew: false,
    specs: {
      'Màn hình': 'OLED 6,3 inch Super Retina XDR Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz',
      'Chip xử lý': 'Apple A17 Pro',
      'Lưu trữ': '128GB-256GB-512GB-1TB',
      'Camera': '48MP + Tele 12MP (5x) + Ultra‑wide 12MP',
      'Pin & Sạc': '',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, UWB',
      'Chống nước': 'Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút) theo tiêu chuẩn IEC 60529',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 199g'
    }
  },
  {
    id: 104, brand: 'Apple', name: 'iPhone 16 Pro Max', price: 31590000, rating: 4.9,
    img: 'https://cdn.tgdd.vn/Products/Images/42/329149/s16/iphone-16-pro-max-16-titan-tu-nhien-thumbnew-650x650.png', isNew: true,
    specs: {
      'Màn hình': 'OLED 6.7 inch Super Retina XDR Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz',
      'Chip xử lý': 'Apple A17 Pro',
      'Lưu trữ': '128GB-256GB-512GB-1TB',
      'Camera': '48MP + Tele 12MP (5x) + Ultra‑wide 12MP',
      'Pin & Sạc': 'Thời gian xem video: Lên đến 27 giờ-Thời gian xem video (trực tuyến): Lên đến 22 giờ-Thời gian nghe nhạc: Lên đến 85 giờ-Tích hợp pin sạc lithium-ion-Sạc không dây MagSafe lên đến 25W với bộ tiếp hợp 30W trở lên15-Sạc không dây Qi2 lên đến 15W15-Sạc không dây Qi lên đến 7,5W15-Khả năng sạc nhanh: Sạc lên đến 50% trong khoảng 30 phút15 với bộ tiếp hợp 20W trở lên (được bán riêng) sử dụng cáp sạc USB‑C, hoặc với bộ tiếp hợp 30W trở lên sử dụng Bộ Sạc MagSafe (cả hai đều được bán riêng)',
      'Kết nối': '5G, Wi‑Fi 6E, BT 5.3, UWB',
      'Chống nước': 'Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút) theo tiêu chuẩn IEC 60529',
      'Bảo mật': 'Face ID',
      'Khối lượng': '≈ 205g'
    }
  },

  // Samsung
  {
    id: 201, brand: 'Samsung', name: 'Galaxy S25 Ultra', price: 26490000, rating: 4.6,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_1__3.png', isNew: true,
    specs: {
     'Màn hình': '6.86" Dynamic AMOLED 2X, QHD+, 1–120Hz, độ sáng 3000 nits',
     'Chip xử lý': 'Snapdragon 8 Elite for Galaxy (3nm)',
     'RAM/Lưu trữ': '12GB/16GB RAM - 256GB/512GB/1TB (UFS 4.0)',
     'Camera': 'Chính 200MP, Siêu rộng 50MP, Tele 3x 10MP, Periscope 5x 50MP',
     'Pin & Sạc': '5000mAh, Sạc nhanh 45W, Sạc không dây 25W',
     'Kết nối': '5G, Wi-Fi 7, Bluetooth 5.4, UWB, USB-C 3.2',
     'Chống nước': 'IP68',
     'Bảo mật': 'Vân tay siêu âm, Mở khóa khuôn mặt',
     'Khối lượng': '219g (Thiết kế bo cong nhẹ)',
     'Hệ điều hành': 'Android 15 (One UI 7)'
    }
  },
  {
    id: 202, brand: 'Samsung', name: 'Galaxy S24', price: 19190000, rating: 4.7,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-den_4.png', isNew: false,
    specs: {
     'Màn hình': 'Dynamic AMOLED 2X 6.2" FHD+, 1–120Hz, 2600 nits',
     'Chip xử lý': 'Exynos 2400 (Bản VN) / Snapdragon 8 Gen 3 (Bản Mỹ)',
     'RAM/Lưu trữ': '8GB / 128GB–256GB–512GB',
     'Camera': 'Chính 50MP, Ultra-wide 12MP, Tele 3x 10MP; Quay 8K',
     'Pin & Sạc': '4000mAh, sạc nhanh 25W, sạc không dây 15W, sạc ngược',
     'Kết nối': '5G, Wi-Fi 6E/7, BT 5.3, NFC',
     'Chống nước': 'IP68',
     'Bảo mật': 'Vân tay siêu âm dưới màn hình, Face Unlock',
     'Khối lượng': '167g'
    }
  
  },
  {
    id: 203, brand: 'Samsung', name: 'Galaxy S24 Ultra', price: 22190000, rating: 4.9,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-vang_1_3.png', isNew: false,
    specs: {
     'Màn hình': '6.8" Dynamic AMOLED 2X, QHD+, 1–120Hz, 2600 nits (Phẳng)',
     'Chip xử lý': 'Snapdragon 8 Gen 3 for Galaxy',
     'RAM/Lưu trữ': '12GB / 256GB–512GB–1TB',
     'Camera': 'Chính 200MP, Ultra-wide 12MP, Tele 3x 10MP, Periscope 5x 50MP',
     'Pin & Sạc': '5000mAh, sạc nhanh 45W, sạc không dây 15W, sạc ngược',
     'Kết nối': '5G, Wi-Fi 7, Bluetooth 5.3, UWB, NFC',
     'Vật liệu': 'Khung Titan, Kính Corning Gorilla Armor',
     'Chống nước': 'IP68',
     'Bút S-Pen': 'Tích hợp sẵn (độ trễ 2.8ms)',
     'Khối lượng': '232g'
    }
  },
  {
    id: 205, brand: 'Samsung', name: 'Galaxy Buds3 Pro', price: 3690000, rating: 4.4,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-samsung-galaxy-buds-3-pro_9_.png', isNew: false,
    specs: {
      'Kiểu': 'True Wireless (Thiết kế in-ear có đuôi - Stem)',
     'Driver': '2-way (10.5mm Dynamic Woofer + 6.1mm Planar Tweeter)',
     'Chống ồn': 'Adaptive ANC (Tự động chỉnh theo môi trường), Voice Detect',
     'Thời lượng pin': 'Tai nghe ~6h (ANC On) / 7h (ANC Off); Tổng kèm hộp ~26h-30h',
     'Sạc': 'USB-C, sạc không dây Qi',
     'Kết nối': 'Bluetooth 5.4, SSC UHQ (24bit/96kHz), Auracast',
     'Kháng nước': 'IP57 (Chống cả bụi và nước)',
     'Tính năng': 'Đèn LED Blade Lights, Dịch trực tiếp (Galaxy AI), 360 Audio',
     'Khối lượng': '5.4g (mỗi tai), 46.5g (hộp)'
    }
  },

  // Xiaomi
  {
    id: 301, brand: 'Xiaomi', name: 'Xiaomi 17 Pro Max', price: 26990000, rating: 4.5,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQL6N-bSEGhHkMIDH_J3f-8PZwawQZqi9SCpcye4KY4t31vBfnELpY9ai0xWMfZiYPIgrK6EMR9', isNew: true,
    specs: {
      'Màn hình chính': '6.9 inch LTPO AMOLED, 1-120Hz, 3500 nits.',
      'Màn hình phụ': '2.9 inch LTPO AMOLED, 120Hz.',
      'Chipset': 'Snapdragon 8 Elite Gen 5.',
      'Camera': '3x 50MP (chính, góc siêu rộng, tele 5x).',
      'Pin': '7500mAh.',
      'RAM/ROM': '12GB/16GB RAM, 512GB/1TB ROM.'
    }
  },
  {
    id: 302, brand: 'Xiaomi', name: 'Xiaomi Redmi K90 Pro Max', price: 15890000, rating: 4.6,
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2IqHRoG7tIG714ojullBarfi-VaqV1S_I8xK_OME5wny4-RIucWlOzmRxR0foV6tP4oibQVhh', isNew: true,
    specs: {
      'Chipset': 'Snapdragon 8 Elite Gen 5 (3nm).',
      'Màn hình': '6.9 inch LTPO AMOLED, 120Hz, độ sáng đỉnh 3500 nits, Dolby Vision, HDR10+, 2560Hz PWM.',
      'Camera Sau': '3 camera 50MP (chính OIS + Tele zoom quang 5x + Siêu rộng).',
      'Camera Trước': '32MP.',
      'Pin': '7560mAh, Sạc nhanh 100W có dây, 50W không dây.',
      'RAM/ROM': '12GB/16GB LPDDR5X, 256GB/512GB/1TB UFS 4.1.',
      'Âm thanh': 'Loa ngoài kênh đôi 2.1 được tinh chỉnh bởi Bose (có loa siêu trầm).',
      'Kháng nước': 'IP68/IP69.',
      'Hệ điều hành': 'Android 16 + HyperOS 3.0.'
    }
  },
  {
    id: 303, brand: 'Xiaomi', name: 'Xiaomi 15 Ultra', price: 25990000, rating: 4.3,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTXAnWB1s3m5ycVu1rN3ggChui3Uiocs1RYOj6y-Bg-ijuzjYno7rwXzUGjFEOMcQbyIqvZq3t', isNew: true,
    specs: {
      'Chipset': 'Qualcomm Snapdragon 8 Elite (3nm).',
      'Màn hình': '6.73 inch LTPO AMOLED, độ phân giải 2K (1440 x 3200 pixels), 120Hz, độ sáng tối đa 3200 nits, 68 tỷ màu, Dolby Vision, HDR10+.',
      'Camera sau (Leica)': '4 camera gồm: 50MP chính (Sony LYT-900 1 inch), 50MP góc siêu rộng, 50MP tele (zoom 3x), 200MP siêu tele (periscope zoom 4.3x).',
      'Camera trước': '32MP.',
      'RAM': '12GB / 16GB (LPDDR5X).',
      'Bộ nhớ trong': '256GB / 512GB / 1TB (UFS 4.1).',
      'Pin & Sạc': '5410 mAh, sạc nhanh có dây 90W, sạc không dây 80W.',
      'Hệ điều hành': 'Android 15, HyperOS 2.',
      'Tính năng khác': 'Chống nước/bụi IP68, Wi-Fi 7, Bluetooth 6.0, AI.'
    }
  },

  // Oppo
  {
    id: 401, brand: 'Oppo', name: 'OPPO Find X9 Pro', price: 20990000, rating: 4.4,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9GaxeoJD3NZv_XMlkNOrUCVEOOoADzxVt-u9KQf0XFJ8jqBtx199RS3c6sgeT9u8IMkl2QovK', isNew: true,
    specs: {
      'Màn hình': '6.78 inch LTPO AMOLED, 1.5K (1272x2772 pixels), 120Hz, độ sáng cao.',
      'Chip xử lý': 'MediaTek Dimensity 9500 (tiến trình 3nm).',
      'RAM & Bộ nhớ': '16GB LPDDR5X + 512GB UFS 4.0/4.1.',
      'Camera sau': '200MP (Tele tiềm vọng OIS) + 50MP (Chính OIS) + 50MP (Góc siêu rộng) + 2MP (Mono/Đa sắc).',
      'Camera trước': '50MP (Hỗ trợ lấy nét tự động - AF).',
      'Pin & Sạc': '7500mAh, Sạc nhanh 80W có dây, 50W không dây.',
      'Hệ điều hành': 'ColorOS 16 (trên nền Android 16).',
      'Tính năng khác': 'IP68/IP69, Wi-Fi 7, NFC, cảm biến vân tay trong màn hình.'
    }
  },
  {
    id: 402, brand: 'Oppo', name: 'Oppo Find X8', price: 17490000, rating: 4.7,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2IqHRoG7tIG714ojullBarfi-VaqV1S_I8xK_OME5wny4-RIucWlOzmRxR0foV6tP4oibQVhh', isNew: false,
    specs: {
      'Hệ điều hành': 'Android 15, ColorOS 15.',
      'Chip xử lý (CPU)': 'MediaTek Dimensity 9400 (8 nhân).',
      'Chip đồ họa (GPU)': 'ARM Immortalis G925 MC12.',
      'Màn hình': 'AMOLED 6.59 inch, độ phân giải 1.5K (1256 x 2760 pixels), tần số quét 120Hz, độ sáng cao (tối đa 4500 nits).',
      'RAM': '12GB / 16GB.',
      'Bộ nhớ trong (ROM)': '256GB / 512GB / 1TB (UFS 4.0).',
      'Camera sau': 'Bộ 3 camera 50MP (Góc rộng + Siêu rộng + Telephoto), tinh chỉnh bởi Hasselblad.',
      'Camera trước': '32MP.',
      'Pin & Sạc': '5630 mAh, sạc nhanh có dây 80W, sạc không dây 50W.',
      'Kháng nước/bụi': 'IP68/IP69.',
      'Kết nối': 'Wi-Fi 7, Bluetooth 5.4, 5G, NFC, cổng hồng ngoại IR.'
    }
  },

  // OnePlus
  {
    id: 501, brand: 'OnePlus', name: 'OnePlus 13T 5G', price: 18990000, rating: 4.6,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtREmjChMmxVCzKnYAVvjjUGexRz7lBVVLmGW5r9EmwqRJOGT0ty6yUg2lgNnh_7svujixIDAaaD1dCt8lJgHe6GkRA6MUVKrKLXOswSwG&usqp=CAc', isNew: true,
    specs: {
      'Chip xử lý': 'Snapdragon 8 Elite (3nm) với GPU Adreno 830.',
      'Màn hình': '6.32 inch, LTPO AMOLED, 120Hz, độ sáng cao (1600 nits HBM), độ phân giải 1.5K (1216x2640).',
      'RAM': '12GB / 16GB (LPDDR5X).',
      'Bộ nhớ trong': '256GB / 512GB / 1TB (UFS 4.0).',
      'Camera sau': '50MP (Chính, OIS) + 50MP (Tele 2x, OIS).',
      'Camera trước': '16MP.',
      'Pin & Sạc': '6260mAh, sạc nhanh 80W (có nguồn 90W).',
      'Hệ điều hành': 'Android 15 với ColorOS 15.',
      'Thiết kế': 'Khung hợp kim nhôm, mặt lưng kính, nhỏ gọn (150.8 x 71.7 x 8.2 mm), ~185g.',
      'Tính năng khác': 'Loa stereo, Wi-Fi chuyên dụng G1, sạc bypass, DisplayMate A++, Rain Touch 2.0.'
    }
  },
  {
    id: 502, brand: 'OnePlus', name: 'OnePlus ACE 5 Ultra', price: 12450000, rating: 4.4,
    img: 'https://bizweb.dktcdn.net/100/257/835/files/oneplus-ace-5-ultra-2-87c5b9e2-62db-4c1a-921c-236f94eaf070.jpg?v=1754099569555', isNew: false,
    specs: {
      'Màn hình': 'AMOLED 6.83 inch, độ phân giải 1.5K (1272x2800), tần số quét 144Hz, độ sáng cao (1400 nits), hỗ trợ HDR10+, Dolby Vision.',
      'Vi xử lý (Chip)': 'MediaTek Dimensity 9400+ (tiến trình 3nm), GPU Immortalis-G925 MC12.',
      'RAM & ROM': '12GB/16GB RAM (LPDDR5X), bộ nhớ trong 256GB/512GB/1TB (UFS 4.0).',
      'Camera sau': '50MP chính (cảm biến Sony IMX906, OIS) + 8MP góc siêu rộng.',
      'Camera trước': '16MP.',
      'Pin & Sạc': '6700mAh, sạc nhanh 100W.',
      'Hệ điều hành': 'Android 14 / 15 với ColorOS 15 (bản nội địa).',
      'Tính năng khác': 'Loa stereo, vân tay dưới màn hình, cảm biến hồng ngoại, kháng nước IP65.'
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

  qs('#checkout')?.addEventListener('click', () => {
    if (!store.currentUser) return alert('Vui lòng đăng nhập để thanh toán.');
    if (!store.cart.length) return alert('Giỏ hàng trống.');
    // Navigate to a dedicated checkout page for a better flow
    location.href = 'checkout.html';
  });

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
// ====== CHECKOUT PAGE ======
  (function(){
    function qs(sel, root=document){return root.querySelector(sel);} 
    const formatVND = (n)=> n.toLocaleString('vi-VN') + '₫';
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const summaryList = qs('#summaryList');
    let subtotal = 0;
    if (!cart.length) summaryList.innerHTML = '<p>Giỏ hàng trống.</p>';
    else {
      const frag = document.createDocumentFragment();
      for (const it of cart){
        const row = document.createElement('div'); row.className = 'summary-item';
        row.innerHTML = `<div class="s-left"><img src="${it.img}" alt="${it.name}" /><div class="s-meta"><div class="s-title">${it.name}</div><div class="s-qty">x${it.qty}</div></div></div><div class="s-right">${formatVND(it.price * it.qty)}</div>`;
        frag.appendChild(row); subtotal += it.price * it.qty;
      }
      summaryList.appendChild(frag);
    }
    const shipping = subtotal > 0 ? 30000 : 0; // demo flat shipping
    qs('#summarySubtotal').textContent = formatVND(subtotal);
    qs('#summaryShipping').textContent = formatVND(shipping);
    qs('#summaryTotal').textContent = formatVND(subtotal + shipping);

    qs('#orderForm')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      if (!cart.length) { alert('Giỏ hàng trống.'); return; }
      const form = new FormData(e.target);
      const order = {
        id: 'ORD' + Date.now(),
        customer: { name: form.get('fullName'), address: form.get('address'), phone: form.get('phone'), email: form.get('email') },
        payment: form.get('payment'),
        items: cart,
        subtotal, shipping, total: subtotal + shipping,
        createdAt: new Date().toISOString()
      };
      // Save to localStorage as demo persistence
      const orders = JSON.parse(localStorage.getItem('orders')||'[]'); orders.push(order); localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem('cart', JSON.stringify([]));
      qs('#orderMessage').textContent = `Đặt hàng thành công! Mã đơn: ${order.id}. Cảm ơn bạn.`;
      // Update summary to empty
      summaryList.innerHTML = '<p>Giỏ hàng đã được đặt.</p>';
      qs('#summarySubtotal').textContent = formatVND(0);
      qs('#summaryShipping').textContent = formatVND(0);
      qs('#summaryTotal').textContent = formatVND(0);
      // Optionally redirect after a short delay
      setTimeout(()=> location.href = 'index.html', 4000);
    });
  })(); 
