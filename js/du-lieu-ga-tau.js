/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/du-lieu-ga-tau.js
 * Mô tả: Danh mục hệ thống Ga đường sắt Việt Nam và thông tin đoàn tàu mẫu
 */

// Danh sách các Ga chính thức dọc tuyến Bắc - Nam
const DANH_SACH_GA_TAU = [
  { name: 'Hà Nội', code: 'HNO', province: 'Hà Nội' },
  { name: 'Giáp Bát', code: 'GBA', province: 'Hà Nội' },
  { name: 'Phủ Lý', code: 'PLY', province: 'Hà Nam' },
  { name: 'Nam Định', code: 'NDI', province: 'Nam Định' },
  { name: 'Ninh Bình', code: 'NBI', province: 'Ninh Bình' },
  { name: 'Bỉm Sơn', code: 'BSO', province: 'Thanh Hóa' },
  { name: 'Thanh Hóa', code: 'THO', province: 'Thanh Hóa' },
  { name: 'Vinh', code: 'VIN', province: 'Nghệ An' },
  { name: 'Hương Phố', code: 'HPO', province: 'Hà Tĩnh' },
  { name: 'Đồng Hới', code: 'DHO', province: 'Quảng Bình' },
  { name: 'Đông Hà', code: 'DHA', province: 'Quảng Trị' },
  { name: 'Huế', code: 'HUE', province: 'Thừa Thiên Huế' },
  { name: 'Đà Nẵng', code: 'DAN', province: 'Đà Nẵng' },
  { name: 'Tam Kỳ', code: 'TKY', province: 'Quảng Nam' },
  { name: 'Quảng Ngãi', code: 'QNG', province: 'Quảng Ngãi' },
  { name: 'Diêu Trì', code: 'DTR', province: 'Bình Định' },
  { name: 'Tuy Hòa', code: 'THO2', province: 'Phú Yên' },
  { name: 'Nha Trang', code: 'NTR', province: 'Khánh Hòa' },
  { name: 'Tháp Chàm', code: 'TCH', province: 'Ninh Thuận' },
  { name: 'Phan Thiết', code: 'PTH', province: 'Bình Thuận' },
  { name: 'Bình Thuận', code: 'BTH', province: 'Bình Thuận' },
  { name: 'Biên Hòa', code: 'BHO', province: 'Đồng Nai' },
  { name: 'Sài Gòn', code: 'SGO', province: 'TP. Hồ Chí Minh' }
];

// Danh sách các đoàn tàu mẫu phục vụ hiển thị
const DANH_SACH_DOAN_TAU = [
  {
    code: 'SE1',
    type: 'Tàu nhanh Thống Nhất VIP',
    isHeritage: true,
    deptTime: '20:55',
    arrTime: '05:45 (+2)',
    duration: '32 giờ 50 phút',
    basePrice: 1050000,
    carriages: [
      { id: 1, num: 'Toa 1', type: 'Ngồi mềm điều hòa', price: 1050000, seatsLeft: 18, total: 28 },
      { id: 2, num: 'Toa 2', type: 'Giường nằm K6 điều hòa', price: 1380000, seatsLeft: 8, total: 24 },
      { id: 3, num: 'Toa 3', type: 'Giường nằm K4 tiêu chuẩn', price: 1620000, seatsLeft: 4, total: 16 },
      { id: 4, num: 'Toa 4 (VIP)', type: 'Khoang VIP 2 Giường Di Sản', price: 2450000, seatsLeft: 2, total: 8 }
    ]
  },
  {
    code: 'SE3',
    type: 'Tàu chất lượng cao',
    isHeritage: false,
    deptTime: '19:20',
    arrTime: '04:30 (+2)',
    duration: '33 giờ 10 phút',
    basePrice: 980000,
    carriages: [
      { id: 1, num: 'Toa 1', type: 'Ngồi mềm điều hòa', price: 980000, seatsLeft: 22, total: 28 },
      { id: 2, num: 'Toa 2', type: 'Giường nằm K6 điều hòa', price: 1290000, seatsLeft: 12, total: 24 },
      { id: 3, num: 'Toa 3', type: 'Giường nằm K4 tiêu chuẩn', price: 1550000, seatsLeft: 6, total: 16 }
    ]
  },
  {
    code: 'SE5',
    type: 'Tàu Thống Nhất tiêu chuẩn',
    isHeritage: false,
    deptTime: '08:50',
    arrTime: '18:55 (+1)',
    duration: '34 giờ 05 phút',
    basePrice: 890000,
    carriages: [
      { id: 1, num: 'Toa 1', type: 'Ngồi mềm điều hòa', price: 890000, seatsLeft: 14, total: 28 },
      { id: 2, num: 'Toa 2', type: 'Giường nằm K6 điều hòa', price: 1180000, seatsLeft: 5, total: 24 },
      { id: 3, num: 'Toa 3', type: 'Giường nằm K4 tiêu chuẩn', price: 1420000, seatsLeft: 3, total: 16 }
    ]
  },
  {
    code: 'SE7',
    type: 'Tàu nhanh Thống Nhất',
    isHeritage: false,
    deptTime: '06:10',
    arrTime: '17:10 (+1)',
    duration: '35 giờ 00 phút',
    basePrice: 820000,
    carriages: [
      { id: 1, num: 'Toa 1', type: 'Ngồi mềm điều hòa', price: 820000, seatsLeft: 25, total: 28 },
      { id: 2, num: 'Toa 2', type: 'Giường nằm K6 điều hòa', price: 1100000, seatsLeft: 15, total: 24 },
      { id: 3, num: 'Toa 3', type: 'Giường nằm K4 tiêu chuẩn', price: 1350000, seatsLeft: 9, total: 16 }
    ]
  }
];

// Hàm định dạng tiền tệ VNĐ
function dinhDangTien(soTien) {
  return new Intl.NumberFormat('vi-VN').format(soTien);
}
