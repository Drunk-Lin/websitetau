/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/quy-dinh-muc-luc.js
 * Mô tả: ScrollSpy đánh dấu vị trí mục lục đang xem khi cuộn trang Quy định
 */

document.addEventListener('DOMContentLoaded', () => {
  khoiTaoMucLucCuonTrang();
});

function khoiTaoMucLucCuonTrang() {
  const lienKetMucLuc = document.querySelectorAll('#regulationsNav .toc-link');
  if (lienKetMucLuc.length === 0) return;

  const cacPhanNoiDung = Array.from(lienKetMucLuc).map(lienKet => {
    const id = lienKet.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  window.addEventListener('scroll', () => {
    let idHienTai = '';
    const viTriCuon = window.scrollY + 130;

    cacPhanNoiDung.forEach(phan => {
      if (phan.offsetTop <= viTriCuon) {
        idHienTai = phan.getAttribute('id');
      }
    });

    lienKetMucLuc.forEach(lienKet => {
      lienKet.classList.remove('active');
      if (lienKet.getAttribute('href') === `#${idHienTai}`) {
        lienKet.classList.add('active');
      }
    });
  });
}
