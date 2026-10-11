/**
 * DSVN - Tổng công ty Đường sắt Việt Nam
 * File: js/tim-ve.js
 * Mô tả: Xử lý tìm kiếm vé tàu, gợi ý ga, đổi ga, kiểm tra ràng buộc ngày đi và ngày về
 */

let laKhuHoi = false;

document.addEventListener('DOMContentLoaded', () => {
  khoiTaoFormTimVe();
  khoiTaoGoiYGa();
  khoiTaoChangPhoBien();
});

/**
 * Khởi tạo form tìm kiếm và ràng buộc ngày đi/về
 */
function dinhDangNgayVN(chuoiYMD) {
  if (!chuoiYMD) return '';
  const parts = chuoiYMD.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return chuoiYMD;
}

function khoiTaoFormTimVe() {
  const tabMotChieu = document.getElementById('tabOneway');
  const tabKhuHoi = document.getElementById('tabRoundtrip');
  const oNgayDi = document.getElementById('inputDeptDate');
  const oNgayVe = document.getElementById('inputReturnDate');
  const khungNgayDi = document.getElementById('cardDeptDate');
  const khungNgayVe = document.getElementById('returnDateWrapper');
  const hienThiNgayDi = document.getElementById('deptDateDisplay');
  const hienThiNgayVe = document.getElementById('returnDateDisplay');
  const nhanTrangThaiNgayVe = document.getElementById('returnLabelStatus');
  const nutDoiGa = document.getElementById('btnSwapStations');
  const bieuMau = document.getElementById('trainSearchForm');

  function capNhatHienThiNgay() {
    if (hienThiNgayDi && oNgayDi) {
      hienThiNgayDi.textContent = dinhDangNgayVN(oNgayDi.value);
    }
    if (hienThiNgayVe && oNgayVe) {
      if (laKhuHoi) {
        hienThiNgayVe.textContent = dinhDangNgayVN(oNgayVe.value);
      } else {
        hienThiNgayVe.textContent = 'Chọn nếu mua vé về';
      }
    }
  }

  // Ngày đi tối thiểu là hôm nay
  const homNay = new Date();
  const yyyy = homNay.getFullYear();
  const mm = String(homNay.getMonth() + 1).padStart(2, '0');
  const dd = String(homNay.getDate()).padStart(2, '0');
  const chuoiHomNay = `${yyyy}-${mm}-${dd}`;

  if (oNgayDi) {
    oNgayDi.min = chuoiHomNay;
    oNgayDi.value = chuoiHomNay;
  }

  // Ngày về mặc định 3 ngày sau
  const ngayVeMacDinh = new Date(homNay);
  ngayVeMacDinh.setDate(ngayVeMacDinh.getDate() + 3);
  const vY = ngayVeMacDinh.getFullYear();
  const vM = String(ngayVeMacDinh.getMonth() + 1).padStart(2, '0');
  const vD = String(ngayVeMacDinh.getDate()).padStart(2, '0');
  const chuoiNgayVe = `${vY}-${vM}-${vD}`;

  if (oNgayVe) {
    oNgayVe.min = chuoiHomNay;
    oNgayVe.value = chuoiNgayVe;
  }

  capNhatHienThiNgay();

  // Bắt sự kiện click vào Card ngày để mở trình chọn ngày
  if (khungNgayDi && oNgayDi) {
    khungNgayDi.addEventListener('click', () => {
      try {
        if (typeof oNgayDi.showPicker === 'function') {
          oNgayDi.showPicker();
        } else {
          oNgayDi.focus();
        }
      } catch (e) {
        oNgayDi.focus();
      }
    });
  }

  if (khungNgayVe && oNgayVe) {
    khungNgayVe.addEventListener('click', () => {
      if (!laKhuHoi && tabKhuHoi) {
        tabKhuHoi.click();
      }
      try {
        if (typeof oNgayVe.showPicker === 'function') {
          oNgayVe.showPicker();
        } else {
          oNgayVe.focus();
        }
      } catch (e) {
        oNgayVe.focus();
      }
    });
  }

  // Chuyển tab Một chiều / Khứ hồi
  if (tabMotChieu && tabKhuHoi) {
    tabMotChieu.addEventListener('click', () => {
      laKhuHoi = false;
      tabMotChieu.classList.add('active');
      tabKhuHoi.classList.remove('active');
      if (khungNgayVe) khungNgayVe.classList.add('disabled');
      if (oNgayVe) oNgayVe.disabled = true;
      if (nhanTrangThaiNgayVe) nhanTrangThaiNgayVe.textContent = '(Không chọn)';
      capNhatHienThiNgay();
    });

    tabKhuHoi.addEventListener('click', () => {
      laKhuHoi = true;
      tabKhuHoi.classList.add('active');
      tabMotChieu.classList.remove('active');
      if (khungNgayVe) khungNgayVe.classList.remove('disabled');
      if (oNgayVe) oNgayVe.disabled = false;
      if (nhanTrangThaiNgayVe) nhanTrangThaiNgayVe.textContent = '(Bắt buộc)';
      
      if (oNgayDi && oNgayVe && oNgayVe.value < oNgayDi.value) {
        oNgayVe.value = oNgayDi.value;
      }
      capNhatHienThiNgay();
    });
  }

  // Hỗ trợ hàm chọn loại vé trực tiếp qua nút bấm
  window.chonLoaiVe = function(loai) {
    const btnOneWay = document.getElementById('btnOneWay') || tabMotChieu;
    const btnRoundTrip = document.getElementById('btnRoundTrip') || tabKhuHoi;

    if (loai === 'khu-hoi') {
      if (btnRoundTrip) btnRoundTrip.click();
    } else {
      if (btnOneWay) btnOneWay.click();
    }
  };

  // Ràng buộc ngày về >= ngày đi
  if (oNgayDi && oNgayVe) {
    oNgayDi.addEventListener('change', () => {
      capNhatHienThiNgay();
      oNgayVe.min = oNgayDi.value;
      if (laKhuHoi && oNgayVe.value < oNgayDi.value) {
        oNgayVe.value = oNgayDi.value;
        capNhatHienThiNgay();
      }
    });

    oNgayVe.addEventListener('change', () => {
      capNhatHienThiNgay();
    });
  }

  // Đổi ga đi - ga đến
  if (nutDoiGa) {
    nutDoiGa.addEventListener('click', () => {
      const oGaDi = document.getElementById('inputFrom');
      const oGaDen = document.getElementById('inputTo');
      if (oGaDi && oGaDen) {
        const tam = oGaDi.value;
        oGaDi.value = oGaDen.value;
        oGaDen.value = tam;
        if (window.hienThiThongBao) {
          window.hienThiThongBao(`Đã hoán đổi chiều: ${oGaDi.value} ➔ ${oGaDen.value}`, 'info');
        }
      }
    });
  }

  // Gửi form tìm kiếm
  if (bieuMau) {
    bieuMau.addEventListener('submit', (e) => {
      e.preventDefault();
      thucHienTimKiemChuyenTau();
    });
  }
}

/**
 * Autocomplete gợi ý Ga tàu
 */
function khoiTaoGoiYGa() {
  thietLapGoiY('inputFrom', 'autocompleteFrom');
  thietLapGoiY('inputTo', 'autocompleteTo');
}

function thietLapGoiY(idInput, idDanhSach) {
  const oNhap = document.getElementById(idInput);
  const danhSach = document.getElementById(idDanhSach);

  if (!oNhap || !danhSach) return;

  const hienThiGoiY = (tuKhoa) => {
    const q = tuKhoa.trim().toLowerCase();
    const gaPhuHop = DANH_SACH_GA_TAU.filter(ga => 
      ga.name.toLowerCase().includes(q) || 
      ga.code.toLowerCase().includes(q) ||
      ga.province.toLowerCase().includes(q)
    );

    if (gaPhuHop.length === 0) {
      danhSach.innerHTML = `<div class="station-item text-muted" style="padding:12px;font-size:0.85rem">Không tìm thấy ga "${tuKhoa}"</div>`;
      danhSach.classList.add('show');
      return;
    }

    danhSach.innerHTML = gaPhuHop.map(ga => `
      <div class="station-item" data-name="${ga.name}">
        <span class="station-item-name">
          <span class="icon text-primary" style="font-size:16px">train</span>
          ${ga.name}
          <span class="station-item-code">${ga.code}</span>
        </span>
        <span class="station-item-province">${ga.province}</span>
      </div>
    `).join('');

    danhSach.classList.add('show');

    danhSach.querySelectorAll('.station-item').forEach(muc => {
      muc.addEventListener('click', () => {
        const tenGa = muc.getAttribute('data-name');
        if (tenGa) {
          oNhap.value = tenGa;
          danhSach.classList.remove('show');
        }
      });
    });
  };

  oNhap.addEventListener('focus', () => hienThiGoiY(oNhap.value));
  oNhap.addEventListener('input', () => hienThiGoiY(oNhap.value));

  document.addEventListener('click', (e) => {
    if (!oNhap.contains(e.target) && !danhSach.contains(e.target)) {
      danhSach.classList.remove('show');
    }
  });
}

/**
 * Chọn nhanh các chặng phổ biến
 */
function khoiTaoChangPhoBien() {
  const cacNut = document.querySelectorAll('.popular-chip');
  cacNut.forEach(nut => {
    nut.addEventListener('click', () => {
      const gaDi = nut.getAttribute('data-from');
      const gaDen = nut.getAttribute('data-to');
      const oGaDi = document.getElementById('inputFrom');
      const oGaDen = document.getElementById('inputTo');
      if (oGaDi && oGaDen) {
        oGaDi.value = gaDi;
        oGaDen.value = gaDen;
        if (window.hienThiThongBao) {
          window.hienThiThongBao(`Đã chọn chặng: ${gaDi} ➔ ${gaDen}`, 'info');
        }
      }
    });
  });
}

/**
 * Tìm kiếm đoàn tàu
 */
window.thucHienTimKiemChuyenTau = function() {
  const oGaDi = document.getElementById('inputFrom');
  const oGaDen = document.getElementById('inputTo');
  const oNgayDi = document.getElementById('inputDeptDate');

  const gaDi = oGaDi ? oGaDi.value.trim() : 'Hà Nội';
  const gaDen = oGaDen ? oGaDen.value.trim() : 'Sài Gòn';
  let ngayDi = oNgayDi ? oNgayDi.value : '';

  if (!gaDi || !gaDen) {
    if (window.hienThiThongBao) window.hienThiThongBao('Vui lòng nhập đầy đủ Ga đi và Ga đến!', 'warning');
    return;
  }

  if (gaDi.toLowerCase() === gaDen.toLowerCase()) {
    if (window.hienThiThongBao) window.hienThiThongBao('Ga đi và Ga đến không được trùng nhau!', 'error');
    return;
  }

  const khuVucKetQua = document.getElementById('resultsSection');
  const khungChuaKetQua = document.getElementById('resultsContainer');
  const elGaDi = document.getElementById('resFrom');
  const elGaDen = document.getElementById('resTo');
  const elNgayDi = document.getElementById('resDate');

  if (!khuVucKetQua || !khungChuaKetQua) return;

  khuVucKetQua.style.display = 'block';
  
  let ngayDinhDang = 'Hôm nay';
  if (ngayDi && ngayDi.includes('-')) {
    const phanNgay = ngayDi.split('-');
    if (phanNgay.length === 3) {
      ngayDinhDang = `${phanNgay[2]}/${phanNgay[1]}/${phanNgay[0]}`;
    }
  } else {
    const homNay = new Date();
    const dd = String(homNay.getDate()).padStart(2, '0');
    const mm = String(homNay.getMonth() + 1).padStart(2, '0');
    const yyyy = homNay.getFullYear();
    ngayDinhDang = `${dd}/${mm}/${yyyy}`;
    if (oNgayDi) oNgayDi.value = `${yyyy}-${mm}-${dd}`;
  }

  if (elGaDi) elGaDi.textContent = gaDi.toUpperCase();
  if (elGaDen) elGaDen.textContent = gaDen.toUpperCase();
  if (elNgayDi) elNgayDi.textContent = ngayDinhDang;

  // Trạng thái đang tải
  khungChuaKetQua.innerHTML = `
    <div class="state-box">
      <div class="spinner"></div>
      <h3 class="state-title">Đang tra cứu lịch trình Đường sắt Việt Nam...</h3>
      <p class="state-desc">Đang đồng bộ dữ liệu chỗ trống cho chặng ${gaDi} đi ${gaDen}.</p>
    </div>
  `;

  khuVucKetQua.scrollIntoView({ behavior: 'smooth', block: 'start' });

  setTimeout(() => {
    renderDanhSachTau(gaDi, gaDen, ngayDinhDang);
    if (window.layNgonNguHienTai && window.layNgonNguHienTai() === 'en') {
      window.doiNgonNgu('en', false);
    }
    if (window.hienThiThongBao) {
      const msg = (window.layNgonNguHienTai && window.layNgonNguHienTai() === 'en')
        ? `Found ${DANH_SACH_DOAN_TAU.length} matching trains!`
        : `Đã tìm thấy ${DANH_SACH_DOAN_TAU.length} đoàn tàu phù hợp!`;
      window.hienThiThongBao(msg, 'success');
    }
  }, 500);
};

function thucHienTimKiemChuyenTau() {
  return window.thucHienTimKiemChuyenTau();
}

/**
 * Render danh sách các đoàn tàu
 */
/**
 * Bộ lọc chuyến tàu theo loại
 */
window.locDanhSachTau = function(loai, nutBam) {
  document.querySelectorAll('.train-filters .filter-btn').forEach(btn => btn.classList.remove('active'));
  if (nutBam) nutBam.classList.add('active');

  const container = document.getElementById('resultsContainer');
  if (!container) return;

  const gaDi = document.getElementById('resFrom').textContent || 'HÀ NỘI';
  const gaDen = document.getElementById('resTo').textContent || 'SÀI GÒN';
  const chuoiNgay = document.getElementById('resDate').textContent || '28/11/2026';

  let tauLoc = [...DANH_SACH_DOAN_TAU];

  if (loai === 'se') {
    tauLoc = tauLoc.filter(t => t.code.startsWith('SE'));
  } else if (loai === 'vip') {
    tauLoc = tauLoc.filter(t => t.isHeritage || t.carriages.some(c => c.type.includes('VIP')));
  } else if (loai === 'k4') {
    tauLoc = tauLoc.filter(t => t.carriages.some(c => c.type.includes('K4')));
  }

  if (tauLoc.length === 0) {
    container.innerHTML = `
      <div class="state-box">
        <span class="icon state-icon" style="color:var(--mau-do-duong-sat)">search_off</span>
        <h3 class="state-title">Không tìm thấy đoàn tàu phù hợp với bộ lọc</h3>
        <p class="state-desc">Quý khách vui lòng chọn lại bộ lọc "Tất cả đoàn tàu" để xem toàn bộ lịch chạy.</p>
        <button type="button" class="btn-proceed-reserve" onclick="locDanhSachTau('all', document.querySelector('.train-filters .filter-btn'))">
          Xem tất cả đoàn tàu
        </button>
      </div>
    `;
    return;
  }

  // Render lại danh sách đã lọc
  renderDanhSachTauVoiDuLieu(tauLoc, gaDi, gaDen, chuoiNgay);
  if (window.layNgonNguHienTai && window.layNgonNguHienTai() === 'en') {
    window.doiNgonNgu('en', false);
  }
  if (window.hienThiThongBao) {
    const msg = (window.layNgonNguHienTai && window.layNgonNguHienTai() === 'en')
      ? `Displaying ${tauLoc.length} matching trains`
      : `Đang hiển thị ${tauLoc.length} đoàn tàu phù hợp`;
    window.hienThiThongBao(msg, 'info');
  }
};

function renderDanhSachTau(gaDi, gaDen, chuoiNgay) {
  renderDanhSachTauVoiDuLieu(DANH_SACH_DOAN_TAU, gaDi, gaDen, chuoiNgay);
}

function renderDanhSachTauVoiDuLieu(danhSach, gaDi, gaDen, chuoiNgay) {
  const container = document.getElementById('resultsContainer');
  if (!container) return;

  const html = `
    <div class="train-card-list">
      ${danhSach.map(tau => `
        <div class="train-card" id="train-card-${tau.code}">
          <div class="train-card-main">
            <!-- Mã tàu -->
            <div class="train-badge-box">
              <span class="train-code-badge">${tau.code}</span>
              <span class="train-type-label">${tau.type}</span>
              ${tau.isHeritage ? '<span class="train-heritage-tag">Toa VIP Di Sản</span>' : ''}
            </div>

            <!-- Timeline lịch trình -->
            <div class="train-schedule-track">
              <div class="station-node">
                <span class="node-time">${tau.deptTime}</span>
                <span class="node-station">${gaDi}</span>
                <span class="node-date">${chuoiNgay}</span>
              </div>

              <div class="timeline-line-box">
                <span class="timeline-duration">${tau.duration}</span>
                <div class="timeline-bar">
                  <span class="icon timeline-train-icon">train</span>
                </div>
              </div>

              <div class="station-node destination">
                <span class="node-time">${tau.arrTime}</span>
                <span class="node-station">${gaDen}</span>
                <span class="node-date">Theo hành trình</span>
              </div>
            </div>

            <!-- Giá vé & Nút chọn chỗ -->
            <div class="train-price-action">
              <span class="price-label">Giá vé từ</span>
              <div class="price-value">${dinhDangTien(tau.basePrice)} <span>VNĐ</span></div>
              <button class="btn-select-train" onclick="toggleTrainCarriages('${tau.code}')">
                <span>Chọn chỗ</span>
                <span class="icon">expand_more</span>
              </button>
            </div>
          </div>

          <!-- Khu vực Toa tàu & Sơ đồ ghế -->
          <div class="train-carriages-drawer" id="drawer-${tau.code}">
            <div class="carriages-header">
              <div class="carriages-title">
                <span class="icon text-secondary">airline_seat_recline_extra</span>
                <span>Danh sách toa tàu còn chỗ (${tau.code})</span>
              </div>
              <span class="form-label-sub">Dữ liệu minh họa giao diện đặt chỗ</span>
            </div>

            <div class="carriage-list-scroll">
              ${tau.carriages.map((toa, idx) => `
                <div class="carriage-card ${idx === 0 ? 'active' : ''}" 
                     onclick="selectCarriage('${tau.code}', ${toa.id}, ${toa.price}, '${toa.type}')">
                  <span class="carriage-number">${toa.num}</span>
                  <span class="carriage-type">${toa.type}</span>
                  <span class="carriage-price">${dinhDangTien(toa.price)} đ</span>
                  <span class="carriage-seats-left">Còn ${toa.seatsLeft} chỗ trống</span>
                </div>
              `).join('')}
            </div>

            <!-- Sơ đồ ghế ngồi -->
            <div class="seat-map-container" id="seatmap-${tau.code}">
              <div class="seat-map-header">
                <strong>Sơ đồ chỗ ngồi Toa 1 (Ngồi mềm điều hòa)</strong>
                <div class="seat-legend">
                  <div class="legend-item"><span class="legend-box available"></span> Trống</div>
                  <div class="legend-item"><span class="legend-box selected"></span> Đang chọn</div>
                  <div class="legend-item"><span class="legend-box occupied"></span> Đã bán</div>
                </div>
              </div>

              <div class="seat-grid">
                ${taoLuoiGheNgoi(tau.code, 1, 1050000)}
              </div>

              <div class="booking-summary-bar">
                <div class="booking-summary-text" id="summary-${tau.code}">
                  Chưa chọn chỗ ngồi. Vui lòng nhấp vào các ô ghế màu trắng để chọn.
                </div>
                <button class="btn-proceed-reserve" onclick="proceedReservation('${tau.code}', '${gaDi}', '${gaDen}', '${chuoiNgay}')">
                  Đặt vé ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
}

/**
 * Chọn ga nhanh khi người dùng click vào thẻ Nhà ga
 */
window.chonGaNhanh = function(tenGa) {
  const oGaDi = document.getElementById('inputFrom');
  const bieuMau = document.getElementById('trainSearchForm');
  if (oGaDi) {
    oGaDi.value = tenGa;
    if (bieuMau) {
      bieuMau.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (window.hienThiThongBao) {
      window.hienThiThongBao(`Đã chọn Ga ${tenGa} làm ga khởi hành`, 'info');
    }
  }
};

/**
 * Chọn điểm đến du lịch hấp dẫn (Vinh, Phan Thiết, Tuy Hòa)
 */
window.chonDiemDenDuLich = function(tenGa) {
  const oGaDen = document.getElementById('inputTo');
  const bieuMau = document.getElementById('trainSearchForm');
  if (oGaDen) {
    oGaDen.value = tenGa;
    if (bieuMau) {
      bieuMau.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (window.hienThiThongBao) {
      window.hienThiThongBao(`Đã chọn điểm đến: Ga ${tenGa}! Quý khách hãy chọn ngày để tra cứu vé.`, 'info');
    }
  } else {
    window.location.href = `index.html?to=${encodeURIComponent(tenGa)}`;
  }
};
