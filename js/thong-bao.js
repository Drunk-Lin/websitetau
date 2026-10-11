/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/thong-bao.js
 * Mô tả: Hệ thống thông báo Toast nổi trên màn hình
 */

let khungChuaThongBao = null;

function khoiTaoHeThongThongBao() {
  if (!khungChuaThongBao) {
    khungChuaThongBao = document.createElement('div');
    khungChuaThongBao.className = 'toast-container';
    document.body.appendChild(khungChuaThongBao);
  }
}

/**
 * Hiển thị thông báo Toast
 * @param {string} noiDung - Nội dung thông báo
 * @param {string} loai - 'success' | 'warning' | 'error' | 'info'
 * @param {number} thoiGian - Thời gian hiển thị (ms)
 */
window.hienThiThongBao = function(noiDung, loai = 'info', thoiGian = 3500) {
  khoiTaoHeThongThongBao();

  const theThongBao = document.createElement('div');
  theThongBao.className = `toast ${loai}`;

  let tenIcon = 'info';
  if (loai === 'success') tenIcon = 'check_circle';
  if (loai === 'error') tenIcon = 'error';
  if (loai === 'warning') tenIcon = 'warning';

  theThongBao.innerHTML = `
    <span class="icon">${tenIcon}</span>
    <span>${noiDung}</span>
  `;

  khungChuaThongBao.appendChild(theThongBao);

  setTimeout(() => {
    theThongBao.style.opacity = '0';
    theThongBao.style.transform = 'translateX(40px)';
    theThongBao.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (theThongBao.parentNode) {
        theThongBao.parentNode.removeChild(theThongBao);
      }
    }, 300);
  }, thoiGian);
};

// Bí danh tương thích
window.showToast = window.hienThiThongBao;
