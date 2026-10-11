/**
 * DSVN - Tổng công ty Đường sắt Việt Nam
 * File: js/luong-dat-ve.js
 * Mô tả: Luồng xử lý Đặt vé trực tuyến, Điền thông tin hành khách, Giảm giá đối tượng, Đếm ngược giữ chỗ và Thanh toán
 */

let thongTinDatVeHienTai = null;
let boDemThoiGian = null;
let giayConLai = 600; // 10 phút

/**
 * Ghi đè hàm proceedReservation để mở Modal Đặt Vé chuyên nghiệp
 */
window.proceedReservation = function(maTau, gaDi, gaDen, ngayDi) {
  const gheDaChon = (window.danhSachGheDaChon && window.danhSachGheDaChon.length > 0)
    ? window.danhSachGheDaChon
    : (window.selectedSeats && window.selectedSeats.length > 0 ? window.selectedSeats : []);

  if (!gheDaChon || gheDaChon.length === 0) {
    if (window.hienThiThongBao) {
      window.hienThiThongBao('Quý khách vui lòng bấm chọn ít nhất 1 ô ghế trống trên sơ đồ toa tàu!', 'warning');
    }
    return;
  }

  const user = (typeof layNguoiDungHienTai === 'function') ? layNguoiDungHienTai() : null;
  const tongTienGoc = gheDaChon.reduce((sum, s) => sum + s.price, 0);

  thongTinDatVeHienTai = {
    trainCode: maTau,
    from: gaDi,
    to: gaDen,
    date: ngayDi,
    seats: gheDaChon.map(s => s.number).join(', '),
    seatList: [...gheDaChon],
    baseTotal: tongTienGoc,
    finalTotal: tongTienGoc,
    passengerType: 'adult',
    paymentMethod: 'vnpay'
  };

  moModalDatVe(user);
};

function moModalDatVe(user) {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  // Render danh sách hành khách theo số ghế đã chọn
  const container = document.getElementById('passengersInputContainer');
  if (container) {
    container.innerHTML = thongTinDatVeHienTai.seatList.map((ghe, idx) => `
      <div class="passenger-entry-box">
        <div class="passenger-entry-header">
          <div class="passenger-title-info">
            <span class="icon passenger-header-icon">person</span>
            <span class="passenger-header-text">Hành khách ${idx + 1}</span>
            <span class="passenger-seat-price-info">(Chỗ: <strong>${ghe.number}</strong> • ${dinhDangTien(ghe.price)} đ)</span>
          </div>
          <span class="passenger-seat-badge">
            <span class="icon">airline_seat_recline_extra</span>
            <span>Ghế ${ghe.number}</span>
          </span>
        </div>
        <div class="passenger-grid">
          <div class="form-field-group">
            <label class="form-label">Họ và tên hành khách <span class="text-danger" style="color:#ef4444">*</span></label>
            <div class="input-box">
              <span class="icon input-prefix-icon">badge</span>
              <input type="text" class="passenger-name-input" placeholder="VD: NGUYEN VAN A" value="${idx === 0 && user ? user.fullName : ''}" required />
            </div>
          </div>
          <div class="form-field-group">
            <label class="form-label">Số CCCD / Hộ chiếu <span class="text-danger" style="color:#ef4444">*</span></label>
            <div class="input-box">
              <span class="icon input-prefix-icon">fingerprint</span>
              <input type="text" class="passenger-id-input" placeholder="Số định danh 12 số" value="${idx === 0 && user && user.idCard ? user.idCard : ''}" required />
            </div>
          </div>
        </div>
        <div class="form-field-group" style="margin-top:12px">
          <label class="form-label">Đối tượng hành khách (Áp dụng chính sách ưu đãi)</label>
          <div class="input-box input-box-select">
            <span class="icon input-prefix-icon">diversity_3</span>
            <select class="passenger-type-select" onchange="tinhLaiTongTienDatVe()">
              <option value="1">Người lớn tiêu chuẩn (100% giá vé)</option>
              <option value="0.75">Trẻ em 6-10 tuổi (Giảm 25% giá vé)</option>
              <option value="0.85">Người cao tuổi ≥ 60 tuổi (Giảm 15% giá vé)</option>
              <option value="0.9">Học sinh - Sinh viên (Giảm 10% giá vé)</option>
            </select>
            <span class="icon select-arrow">expand_more</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Điền thông tin liên hệ
  const contactPhone = document.getElementById('checkoutPhone');
  const contactEmail = document.getElementById('checkoutEmail');
  if (contactPhone && user) contactPhone.value = user.phone || '';
  if (contactEmail && user) contactEmail.value = user.email || '';

  // Bắt đầu đếm ngược thời gian giữ chỗ 10 phút
  batDauDemNguocGiuCho();
  tinhLaiTongTienDatVe();

  // Hiển thị modal
  modal.classList.add('open');
}

window.dongModalDatVe = function() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('open');
  if (boDemThoiGian) clearInterval(boDemThoiGian);
};

function batDauDemNguocGiuCho() {
  if (boDemThoiGian) clearInterval(boDemThoiGian);
  giayConLai = 600; // 10 phút

  const updateTimerDisplay = () => {
    const phut = Math.floor(giayConLai / 60);
    const giay = giayConLai % 60;
    const str = `${String(phut).padStart(2, '0')}:${String(giay).padStart(2, '0')}`;
    const el = document.getElementById('checkoutTimer');
    if (el) el.textContent = str;

    if (giayConLai <= 0) {
      clearInterval(boDemThoiGian);
      if (window.hienThiThongBao) {
        window.hienThiThongBao('Đã hết thời gian giữ chỗ (10 phút). Ghế đã được hoàn trả lại hệ thống.', 'error', 6000);
      }
      dongModalDatVe();
    }
    giayConLai--;
  };

  updateTimerDisplay();
  boDemThoiGian = setInterval(updateTimerDisplay, 1000);
}

/**
 * Tính lại tổng tiền sau khi áp dụng chính sách giảm giá đối tượng
 */
window.tinhLaiTongTienDatVe = function() {
  if (!thongTinDatVeHienTai) return;

  const selects = document.querySelectorAll('.passenger-type-select');
  let tongTien = 0;

  selects.forEach((sel, idx) => {
    const heSo = parseFloat(sel.value);
    const giaGhe = thongTinDatVeHienTai.seatList[idx].price;
    tongTien += giaGhe * heSo;
  });

  thongTinDatVeHienTai.finalTotal = tongTien;

  const elTong = document.getElementById('checkoutTotalDisplay');
  if (elTong) elTong.textContent = `${dinhDangTien(tongTien)} VNĐ`;
};

/**
 * Chọn phương thức thanh toán
 */
window.chonPhuongThucThanhToan = function(cardEl, phuongThuc) {
  document.querySelectorAll('.payment-method-card').forEach(c => {
    c.classList.remove('selected');
    const icon = c.querySelector('.payment-check-icon');
    if (icon) {
      icon.textContent = 'radio_button_unchecked';
      icon.classList.add('payment-uncheck');
    }
  });
  cardEl.classList.add('selected');
  const activeIcon = cardEl.querySelector('.payment-check-icon');
  if (activeIcon) {
    activeIcon.textContent = 'check_circle';
    activeIcon.classList.remove('payment-uncheck');
  }
  if (thongTinDatVeHienTai) thongTinDatVeHienTai.paymentMethod = phuongThuc;
};

/**
 * Xác nhận thanh toán & Hoàn tất xuất vé
 */
window.xacNhanHoanTatDatVe = function() {
  const phoneInput = document.getElementById('checkoutPhone');
  const emailInput = document.getElementById('checkoutEmail');
  const nameInputs = document.querySelectorAll('.passenger-name-input');

  let thieuThongTin = false;
  nameInputs.forEach(input => {
    if (!input.value.trim()) thieuThongTin = true;
  });

  if (thieuThongTin || !phoneInput.value.trim()) {
    if (window.hienThiThongBao) window.hienThiThongBao('Vui lòng điền đầy đủ Họ tên và SĐT liên hệ nhận vé!', 'warning');
    return;
  }

  // Sinh mã đặt chỗ ngẫu nhiên
  const maDatChoMoi = 'VNR' + Math.floor(100000 + Math.random() * 900000);
  const tenNguoiDat = nameInputs[0].value.trim();

  // Lưu vào lịch sử đặt vé trong localStorage
  const giaoDichMoi = {
    bookingCode: maDatChoMoi,
    trainCode: thongTinDatVeHienTai.trainCode,
    from: thongTinDatVeHienTai.from,
    to: thongTinDatVeHienTai.to,
    date: thongTinDatVeHienTai.date,
    seats: thongTinDatVeHienTai.seats,
    passengerName: tenNguoiDat,
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    totalPrice: `${dinhDangTien(thongTinDatVeHienTai.finalTotal)} đ`,
    timestamp: new Date().toLocaleString('vi-VN')
  };

  const lichSu = JSON.parse(localStorage.getItem('DSVN_BOOKING_HISTORY') || '[]');
  lichSu.unshift(giaoDichMoi);
  localStorage.setItem('DSVN_BOOKING_HISTORY', JSON.stringify(lichSu));

  dongModalDatVe();

  // Hiển thị Modal Đặt vé thành công chuyên nghiệp
  hienThiModalDatVeThanhCong(giaoDichMoi);

  if (window.hienThiThongBao) {
    window.hienThiThongBao(`Đặt vé thành công! Mã đặt chỗ: ${maDatChoMoi}`, 'success', 5000);
  }
};

/**
 * Hiển thị Hộp thoại Thẻ Lên Tàu Điện Tử chuyên nghiệp
 */
function hienThiModalDatVeThanhCong(giaoDich) {
  const modal = document.getElementById('bookingSuccessModal');
  if (!modal) return;

  const elCode = document.getElementById('successBookingCode');
  const elFrom = document.getElementById('successFrom');
  const elTo = document.getElementById('successTo');
  const elTrain = document.getElementById('successTrain');
  const elDate = document.getElementById('successDate');
  const elSeats = document.getElementById('successSeats');
  const elPassenger = document.getElementById('successPassenger');
  const elPhone = document.getElementById('successPhone');
  const elPrice = document.getElementById('successPrice');

  if (elCode) elCode.textContent = giaoDich.bookingCode;
  if (elFrom) elFrom.textContent = (giaoDich.from || 'HÀ NỘI').toUpperCase();
  if (elTo) elTo.textContent = (giaoDich.to || 'SÀI GÒN').toUpperCase();
  if (elTrain) elTrain.textContent = giaoDich.trainCode;
  if (elDate) elDate.textContent = giaoDich.date;
  if (elSeats) elSeats.textContent = `Ghế ${giaoDich.seats}`;
  if (elPassenger) elPassenger.textContent = giaoDich.passengerName;
  if (elPhone) elPhone.textContent = giaoDich.phone;
  if (elPrice) elPrice.textContent = giaoDich.totalPrice;

  modal.classList.add('open');
}

window.dongModalThanhCong = function() {
  const modal = document.getElementById('bookingSuccessModal');
  if (modal) modal.classList.remove('open');

  // Reset lại trạng thái ghế đã chọn
  if (typeof danhSachGheDaChon !== 'undefined') {
    danhSachGheDaChon = [];
    window.danhSachGheDaChon = [];
    window.selectedSeats = [];
  }
  document.querySelectorAll('.seat-btn.selected').forEach(btn => btn.classList.remove('selected'));
  document.querySelectorAll('.booking-summary-text').forEach(el => {
    el.innerHTML = 'Chưa chọn chỗ ngồi. Vui lòng nhấp vào các ô ghế màu trắng để chọn.';
  });
};

window.saoChepMaDatCho = function() {
  const elCode = document.getElementById('successBookingCode');
  const code = elCode ? elCode.textContent.trim() : '';
  if (!code) return;

  navigator.clipboard.writeText(code).then(() => {
    const btnText = document.getElementById('copyBtnText');
    if (btnText) {
      btnText.textContent = 'Đã sao chép!';
      setTimeout(() => { btnText.textContent = 'Sao chép mã'; }, 2000);
    }
    if (window.hienThiThongBao) window.hienThiThongBao(`Đã sao chép mã ${code} vào bộ nhớ tạm!`, 'success');
  }).catch(() => {
    if (window.hienThiThongBao) window.hienThiThongBao(`Mã đặt chỗ của quý khách là: ${code}`, 'info');
  });
};

window.inTheLenTau = function() {
  window.print();
};

window.chuyenSangTraCuu = function() {
  const elCode = document.getElementById('successBookingCode');
  const elPhone = document.getElementById('successPhone');
  const code = elCode ? elCode.textContent.trim() : '';
  const phone = elPhone ? elPhone.textContent.trim() : '';
  
  window.location.href = `thong-tin-dat-cho.html?code=${encodeURIComponent(code)}&phone=${encodeURIComponent(phone)}`;
};
