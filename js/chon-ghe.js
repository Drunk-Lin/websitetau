/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/chon-ghe.js
 * Mô tả: Xử lý xem chi tiết toa tàu, sơ đồ chọn chỗ ngồi và tính toán tiền vé
 */

let danhSachGheDaChon = [];
window.danhSachGheDaChon = danhSachGheDaChon;
window.selectedSeats = danhSachGheDaChon;

/**
 * Tạo lưới ghế ngồi mô phỏng
 */
function taoLuoiGheNgoi(maTau, maToa, giaVe) {
  let html = '';
  for (let i = 1; i <= 24; i++) {
    const daBan = (i % 5 === 0 || i === 7 || i === 12);
    const soGhe = i < 10 ? '0' + i : i;
    html += `
      <button class="seat-btn ${daBan ? 'occupied' : ''}" 
              ${daBan ? 'disabled' : ''} 
              onclick="xuLyChonGhe(this, '${maTau}', ${i}, ${giaVe})">
        ${soGhe}
      </button>
    `;
  }
  return html;
}

/**
 * Đóng / Mở xem chi tiết toa của đoàn tàu
 */
window.toggleTrainCarriages = function(maTau) {
  const theTau = document.getElementById(`train-card-${maTau}`);
  if (!theTau) return;

  const dangMo = theTau.classList.contains('expanded');
  
  // Đóng các đoàn tàu khác
  document.querySelectorAll('.train-card').forEach(c => c.classList.remove('expanded'));

  if (!dangMo) {
    theTau.classList.add('expanded');
  }
};

/**
 * Chọn loại toa tàu
 */
window.selectCarriage = function(maTau, maToa, giaVe, tenLoaiToa) {
  const nganKeo = document.getElementById(`drawer-${maTau}`);
  if (!nganKeo) return;

  nganKeo.querySelectorAll('.carriage-card').forEach(card => card.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  const soDoGhe = document.getElementById(`seatmap-${maTau}`);
  if (soDoGhe) {
    soDoGhe.querySelector('.seat-map-header strong').textContent = `Sơ đồ chỗ ngồi Toa ${maToa} (${tenLoaiToa})`;
    soDoGhe.querySelector('.seat-grid').innerHTML = taoLuoiGheNgoi(maTau, maToa, giaVe);
    
    // Reset lựa chọn ghế
    danhSachGheDaChon = [];
    window.danhSachGheDaChon = danhSachGheDaChon;
    window.selectedSeats = danhSachGheDaChon;
    capNhatTongTienDatVe(maTau);
  }
};

/**
 * Chọn / Bỏ chọn ghế
 */
window.xuLyChonGhe = function(nutGhe, maTau, soGhe, giaVe) {
  if (nutGhe.classList.contains('occupied')) return;

  const idGhe = `${maTau}-G${soGhe}`;
  const viTri = danhSachGheDaChon.findIndex(g => g.id === idGhe);

  if (viTri > -1) {
    danhSachGheDaChon.splice(viTri, 1);
    nutGhe.classList.remove('selected');
  } else {
    danhSachGheDaChon.push({ id: idGhe, number: soGhe, price: giaVe, train: maTau });
    nutGhe.classList.add('selected');
  }

  window.danhSachGheDaChon = danhSachGheDaChon;
  window.selectedSeats = danhSachGheDaChon;
  capNhatTongTienDatVe(maTau);
};

// Tương thích với hàm cũ
window.toggleSeatSelection = window.xuLyChonGhe;

function capNhatTongTienDatVe(maTau) {
  const phanTomTat = document.getElementById(`summary-${maTau}`);
  if (!phanTomTat) return;

  if (danhSachGheDaChon.length === 0) {
    phanTomTat.innerHTML = 'Chưa chọn chỗ ngồi. Vui lòng nhấp vào các ô ghế màu trắng để chọn.';
  } else {
    const cacSoGhe = danhSachGheDaChon.map(g => g.number).join(', ');
    const tongTien = danhSachGheDaChon.reduce((sum, g) => sum + g.price, 0);
    phanTomTat.innerHTML = `
      Đã chọn <strong>${danhSachGheDaChon.length} chỗ</strong> (Ghế số: <strong>${cacSoGhe}</strong>) • Tổng tiền: <strong class="text-secondary" style="font-size:1.1rem">${dinhDangTien(tongTien)} VNĐ</strong>
    `;
  }
}

/**
 * Xác nhận đặt vé mẫu
 */
window.proceedReservation = function(maTau, gaDi, gaDen, ngayDi) {
  if (danhSachGheDaChon.length === 0) {
    if (window.hienThiThongBao) window.hienThiThongBao('Quý khách vui lòng chọn ít nhất 1 ghế trước khi đặt vé!', 'warning');
    return;
  }

  if (window.hienThiThongBao) {
    window.hienThiThongBao(`Đang mở thủ tục đặt vé cho tàu ${maTau}...`, 'info');
  }
};
