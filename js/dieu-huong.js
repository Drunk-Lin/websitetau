/**
 * DSVN - Tổng công ty Đường sắt Việt Nam
 * File: js/dieu-huong.js
 * Mô tả: Xử lý đóng/mở menu trên thiết bị di động
 */

document.addEventListener('DOMContentLoaded', () => {
  khoiTaoMenuDiDong();
});

function khoiTaoMenuDiDong() {
  const nutMoMenu = document.getElementById('mobileMenuToggle');
  const manChe = document.getElementById('mobileNavBackdrop');
  const nutDong = document.getElementById('closeMobileMenu');

  if (!nutMoMenu || !manChe) return;

  const moMenu = () => {
    manChe.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const dongMenu = () => {
    manChe.classList.remove('open');
    document.body.style.overflow = '';
  };

  nutMoMenu.addEventListener('click', moMenu);
  if (nutDong) nutDong.addEventListener('click', dongMenu);

  manChe.addEventListener('click', (e) => {
    if (e.target === manChe) {
      dongMenu();
    }
  });
}

/**
 * Chọn điểm đến du lịch (Vinh, Phan Thiết, Tuy Hòa...)
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
