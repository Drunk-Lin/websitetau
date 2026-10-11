/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/main.js
 * Chức năng: Điều hướng, menu mobile, toast thông báo, tương tác chung
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initToastSystem();
  initRegulationsTOC();
});

/**
 * Khởi tạo menu điều hướng trên thiết bị di động
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navBackdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('closeMobileMenu');

  if (!menuToggle || !navBackdrop) return;

  const openDrawer = () => {
    navBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    navBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  navBackdrop.addEventListener('click', (e) => {
    if (e.target === navBackdrop) {
      closeDrawer();
    }
  });
}

/**
 * Hệ thống hiển thị thông báo Toast
 */
let toastContainer = null;

function initToastSystem() {
  toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);
}

window.showToast = function(message, type = 'info', duration = 3500) {
  if (!toastContainer) initToastSystem();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let iconName = 'info';
  if (type === 'success') iconName = 'check_circle';
  if (type === 'error') iconName = 'error';
  if (type === 'warning') iconName = 'warning';

  toast.innerHTML = `
    <span class="icon">${iconName}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
};

/**
 * ScrollSpy cho mục lục trang Quy định
 */
function initRegulationsTOC() {
  const tocLinks = document.querySelectorAll('#regulationsNav .toc-link');
  if (tocLinks.length === 0) return;

  const sections = Array.from(tocLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPosition) {
        currentId = sec.getAttribute('id');
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
