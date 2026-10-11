/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/tai-khoan.js
 * Mô tả: Hệ thống xác thực tài khoản hành khách (Đăng nhập, Đăng ký, Đăng xuất, Lưu phiên)
 */

const KHOA_LUU_PHIEN = 'DSVN_CURRENT_USER';
const KHOA_DANH_SACH_USERS = 'DSVN_USERS_LIST';

// Khởi tạo tài khoản mẫu mặc định
function khoiTaoDuLieuMau() {
  if (!localStorage.getItem(KHOA_DANH_SACH_USERS)) {
    const taiKhoanMau = [
      {
        fullName: 'Nguyễn Văn An',
        email: 'dsvn@vr.com.vn',
        phone: '0912345678',
        password: '123456',
        idCard: '001090018899'
      }
    ];
    localStorage.setItem(KHOA_DANH_SACH_USERS, JSON.stringify(taiKhoanMau));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  khoiTaoDuLieuMau();
  capNhatGiaoDienNguoiDung();
  khoiTaoSuKienModalTaiKhoan();
});

/**
 * Cập nhật hiển thị góc phải Header
 */
function capNhatGiaoDienNguoiDung() {
  const khuVucTaiKhoan = document.getElementById('userAccountArea');
  if (!khuVucTaiKhoan) return;

  const nguoiDungHienTai = layNguoiDungHienTai();

  if (nguoiDungHienTai) {
    const kyTuDau = nguoiDungHienTai.fullName ? nguoiDungHienTai.fullName.charAt(0).toUpperCase() : 'U';
    const txtVeCuaToi = window.dich ? window.dich('btn_my_tickets', 'Vé của tôi') : 'Vé của tôi';
    const txtHoSo = window.dich ? window.dich('btn_profile', 'Hồ sơ hành khách') : 'Hồ sơ hành khách';
    const txtDangXuat = window.dich ? window.dich('btn_logout', 'Đăng xuất') : 'Đăng xuất';

    khuVucTaiKhoan.innerHTML = `
      <div class="user-menu-wrapper">
        <button type="button" class="user-account-btn" id="btnUserMenu" onclick="toggleUserDropdown(event)">
          <div class="user-avatar">${kyTuDau}</div>
          <span style="max-width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${nguoiDungHienTai.fullName}</span>
          <span class="icon" style="font-size:16px">expand_more</span>
        </button>

        <div class="user-dropdown-menu" id="userDropdownMenu">
          <div class="user-dropdown-header">
            <strong>${nguoiDungHienTai.fullName}</strong>
            <span>${nguoiDungHienTai.email || nguoiDungHienTai.phone}</span>
          </div>
          <button type="button" class="user-dropdown-item" onclick="xemLichSuVe()">
            <span class="icon">receipt_long</span>
            <span>${txtVeCuaToi}</span>
          </button>
          <button type="button" class="user-dropdown-item" onclick="moModalThongTinCaNhan()">
            <span class="icon">person</span>
            <span>${txtHoSo}</span>
          </button>
          <button type="button" class="user-dropdown-item" onclick="thucHienDangXuat()" style="color:#dc2626;border-top:1px solid #f1f5f9">
            <span class="icon" style="color:#dc2626">logout</span>
            <span>${txtDangXuat}</span>
          </button>
        </div>
      </div>
    `;
  } else {
    const txtDangNhap = window.dich ? window.dich('btn_login', 'Đăng nhập') : 'Đăng nhập';
    khuVucTaiKhoan.innerHTML = `
      <button type="button" class="user-account-btn" onclick="moModalTaiKhoan('login')">
        <span class="icon" style="font-size:18px">account_circle</span>
        <span>${txtDangNhap}</span>
      </button>
    `;
  }
}

/**
 * Đóng mở Dropdown Menu
 */
window.toggleUserDropdown = function(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('userDropdownMenu');
  if (dropdown) dropdown.classList.toggle('show');
};

document.addEventListener('click', () => {
  const dropdown = document.getElementById('userDropdownMenu');
  if (dropdown) dropdown.classList.remove('show');
});

/**
 * Lấy thông tin người dùng hiện tại
 */
function layNguoiDungHienTai() {
  const duLieu = localStorage.getItem(KHOA_LUU_PHIEN);
  return duLieu ? JSON.parse(duLieu) : null;
}

/**
 * Mở Modal Đăng nhập / Đăng ký
 */
window.moModalTaiKhoan = function(tab = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;

  chuyenTabAuth(tab);
  modal.classList.add('open');
};

window.dongModalTaiKhoan = function() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('open');
};

window.chuyenTabAuth = function(tab) {
  const tabLogin = document.getElementById('tabAuthLogin');
  const tabRegister = document.getElementById('tabAuthRegister');
  const formLogin = document.getElementById('formAuthLogin');
  const formRegister = document.getElementById('formAuthRegister');

  if (tab === 'login') {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
    if (formLogin) formLogin.style.display = 'block';
    if (formRegister) formRegister.style.display = 'none';
  } else {
    if (tabRegister) tabRegister.classList.add('active');
    if (tabLogin) tabLogin.classList.remove('active');
    if (formLogin) formLogin.style.display = 'none';
    if (formRegister) formRegister.style.display = 'block';
  }
};

/**
 * Ẩn / Hiện mật khẩu
 */
window.toggleMatKhau = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = btn.querySelector('.icon') || btn;
  if (input.type === 'password') {
    input.type = 'text';
    if (icon) icon.textContent = 'visibility';
    btn.setAttribute('title', 'Ẩn mật khẩu');
  } else {
    input.type = 'password';
    if (icon) icon.textContent = 'visibility_off';
    btn.setAttribute('title', 'Hiện mật khẩu');
  }
};

/**
 * Đăng nhập liên kết Căn cước / Định danh VNeID
 */
window.dangNhapVNeID = function() {
  const userVNeID = {
    fullName: 'Nguyễn Văn An',
    email: 'dsvn@vr.com.vn',
    phone: '0912345678',
    password: '******',
    idCard: '001090018899',
    ssoProvider: 'VNeID Quốc Gia'
  };
  localStorage.setItem(KHOA_LUU_PHIEN, JSON.stringify(userVNeID));
  dongModalTaiKhoan();
  capNhatGiaoDienNguoiDung();
  if (window.hienThiThongBao) {
    window.hienThiThongBao('Xác thực danh tính VNeID thành công! Chào mừng công dân: Nguyễn Văn An', 'success', 3500);
  }
};

/**
 * Quên mật khẩu
 */
window.quenMatKhauToast = function() {
  if (window.hienThiThongBao) {
    window.hienThiThongBao('Quý khách vui lòng liên hệ Tổng đài 1900 0109 hoặc mang CCCD đến quầy vé ga để đặt lại mật khẩu.', 'info', 5000);
  }
};

/**
 * Xử lý sự kiện gửi form đăng nhập / đăng ký
 */
function khoiTaoSuKienModalTaiKhoan() {
  const formLogin = document.getElementById('formAuthLogin');
  const formRegister = document.getElementById('formAuthRegister');

  // ĐĂNG NHẬP
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const accountInput = document.getElementById('loginAccount').value.trim();
      const passwordInput = document.getElementById('loginPassword').value.trim();

      const danhSachUsers = JSON.parse(localStorage.getItem(KHOA_DANH_SACH_USERS) || '[]');
      const user = danhSachUsers.find(u => 
        (u.email.toLowerCase() === accountInput.toLowerCase() || u.phone === accountInput) && 
        u.password === passwordInput
      );

      if (user) {
        localStorage.setItem(KHOA_LUU_PHIEN, JSON.stringify(user));
        dongModalTaiKhoan();
        capNhatGiaoDienNguoiDung();
        if (window.hienThiThongBao) window.hienThiThongBao(`Chào mừng hành khách ${user.fullName} đã đăng nhập!`, 'success');
      } else {
        if (window.hienThiThongBao) window.hienThiThongBao('Tài khoản hoặc mật khẩu không chính xác!', 'error');
      }
    });
  }

  // ĐĂNG KÝ
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('regFullName').value.trim();
      const phone = document.getElementById('regPhone').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value.trim();
      const idCard = document.getElementById('regIdCard').value.trim();

      if (!fullName || !phone || !password) {
        if (window.hienThiThongBao) window.hienThiThongBao('Vui lòng điền đầy đủ các trường bắt buộc!', 'warning');
        return;
      }

      const danhSachUsers = JSON.parse(localStorage.getItem(KHOA_DANH_SACH_USERS) || '[]');
      const tonTai = danhSachUsers.some(u => u.phone === phone || (email && u.email === email));

      if (tonTai) {
        if (window.hienThiThongBao) window.hienThiThongBao('Số điện thoại hoặc Email này đã được đăng ký!', 'warning');
        return;
      }

      const newUser = { fullName, phone, email, password, idCard };
      danhSachUsers.push(newUser);
      localStorage.setItem(KHOA_DANH_SACH_USERS, JSON.stringify(danhSachUsers));
      localStorage.setItem(KHOA_LUU_PHIEN, JSON.stringify(newUser));

      dongModalTaiKhoan();
      capNhatGiaoDienNguoiDung();
      if (window.hienThiThongBao) window.hienThiThongBao('Đăng ký tài khoản Đường sắt thành công!', 'success');
    });
  }
}

/**
 * Đăng xuất
 */
window.thucHienDangXuat = function() {
  localStorage.removeItem(KHOA_LUU_PHIEN);
  capNhatGiaoDienNguoiDung();
  if (window.hienThiThongBao) window.hienThiThongBao('Đã đăng xuất tài khoản thành công.', 'info');
};

/**
 * Xem lịch sử vé đã đặt của tài khoản
 */
window.xemLichSuVe = function() {
  const lichSu = JSON.parse(localStorage.getItem('DSVN_BOOKING_HISTORY') || '[]');
  if (lichSu.length === 0) {
    if (window.hienThiThongBao) window.hienThiThongBao('Quý khách chưa có giao dịch đặt vé nào gần đây.', 'info');
  } else {
    const veMoiNhat = lichSu[0];
    window.location.href = `thong-tin-dat-cho.html?code=${encodeURIComponent(veMoiNhat.bookingCode)}&phone=${encodeURIComponent(veMoiNhat.phone || '')}`;
  }
};

window.moModalThongTinCaNhan = function() {
  const user = layNguoiDungHienTai();
  if (!user) return;
  if (window.hienThiThongBao) {
    window.hienThiThongBao(`Hội viên: ${user.fullName} (${user.phone}) • Trạng thái: Đã xác thực`, 'success', 4000);
  }
};
