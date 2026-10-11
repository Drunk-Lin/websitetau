/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/ngon-ngu.js
 * Mô tả: Hệ thống Đa ngôn ngữ (i18n) Song ngữ Toàn diện Việt - Anh (VN / EN)
 * Dịch thuật 100% giao diện: Header, Menu, Banner, Form tìm vé, Kết quả, 
 * Sơ đồ chỗ, Quy trình, Điểm đến, Quy định, Tra cứu, Thẻ lên tàu, Modal & Footer.
 */

const KHOA_LUU_NGON_NGU = 'DSVN_LANGUAGE';

// 1. TỪ ĐIỂN THEO KHÓA (Cho [data-i18n], [data-i18n-ph] và hàm window.dich)
const TU_DIEN = {
  vi: {
    // Topbar & Nav
    'brand_title': 'ĐƯỜNG SẮT VIỆT NAM',
    'brand_sub': 'Cổng thông tin vé tàu điện tử chính thức',
    'nav_tim_ve': 'Tìm vé',
    'nav_gia_ve_re': 'Tìm giá vé rẻ',
    'nav_khuyen_mai': 'Khuyến mại',
    'nav_thong_tin': 'Thông tin đặt chỗ',
    'nav_quy_dinh': 'Quy định',
    'btn_login': 'Đăng nhập',
    'btn_my_tickets': 'Vé của tôi',
    'btn_profile': 'Hồ sơ hành khách',
    'btn_logout': 'Đăng xuất',

    // Hero & Search Console
    'hero_badge': 'Tập đoàn Đường sắt Quốc gia Việt Nam',
    'hero_title': 'HỆ THỐNG VÉ TÀU ĐIỆN TỬ CHÍNH THỨC',
    'hero_desc': 'Đặt vé trực tuyến an toàn, tra cứu giờ tàu chính xác và trải nghiệm hành trình xuyên Việt thuận tiện.',
    'trip_one_way': 'Một chiều',
    'trip_oneway': 'Một chiều',
    'trip_round_trip': 'Khứ hồi',
    'trip_roundtrip': 'Khứ hồi',
    'popular_routes': 'Chặng phổ biến:',
    'lbl_from': 'Ga đi',
    'sub_from': 'Khởi hành',
    'ph_from': 'Nhập ga đi...',
    'lbl_to': 'Ga đến',
    'sub_to': 'Điểm đến',
    'ph_to': 'Nhập ga đến...',
    'lbl_dept_date': 'Ngày đi',
    'sub_dept_date': 'Dương lịch',
    'lbl_return_date': 'Ngày về',
    'sub_return_date': '(Không chọn)',
    'lbl_passengers': 'Hành khách',
    'sub_passengers': 'Đối tượng',
    'opt_pass_1': '1 Người lớn',
    'opt_pass_2': '2 Người lớn',
    'opt_pass_fam': '2 Lớn + 1 Trẻ em',
    'opt_pass_grp': 'Nhóm tập thể',
    'btn_search': 'Tìm vé',
    'search_notice': 'Chính sách giá vé: Trẻ em dưới 6 tuổi miễn vé, từ 6 - 10 tuổi giảm 25% giá vé. Người cao tuổi từ 60 tuổi giảm 15%.',
    'link_view_rules': 'Xem quy định đổi trả vé',

    // Điểm đến hấp dẫn
    'sec_dest_eyebrow': 'Điểm đến du lịch',
    'sec_dest_title': 'Điểm Đến Hấp Dẫn',
    'sec_dest_sub': 'Kết nối các điểm đến du lịch trong nước',
    'dest_book_train': 'Đặt vé ngay',
    'dest_vinh_title': 'Ga Vinh (Nghệ An)',
    'dest_vinh_desc': 'Quê hương Bác Hồ • Đảo chè Thanh Chương kỳ vĩ',
    'dest_phanthiet_title': 'Ga Phan Thiết (Bình Thuận)',
    'dest_phanthiet_desc': 'Tháp Chàm Poshanư • Biển Mũi Né cát vàng',
    'dest_tuyhoa_title': 'Ga Tuy Hòa (Phú Yên)',
    'dest_tuyhoa_desc': 'Hải đăng Mũi Điện • Xứ sở hoa vàng cỏ xanh',

    // Nhà ga trọng điểm
    'sec_stations_eyebrow': 'Mạng lưới đường sắt',
    'sec_stations_title': 'Hệ Thống Nhà Ga Trọng Điểm',
    'sec_stations_desc': 'Thông tin các nhà ga đường sắt lớn trên toàn quốc phục vụ đón trả khách và vận chuyển hành lý.',

    // Hành trình tiêu biểu
    'sec_heritage_eyebrow': 'Trải nghiệm đặc sắc',
    'sec_heritage_title': 'Hành Trình Tiêu Biểu',
    'sec_heritage_desc': 'Khám phá vẻ đẹp đất nước qua những cung đường sắt lịch sử và văn hóa độc đáo.',

    // Quy trình 3 bước (Trang chủ)
    'sec_process_title': 'QUY TRÌNH ĐẶT VÉ TRỰC TUYẾN',
    'sec_process_sub': 'Chỉ với 3 bước đơn giản để sở hữu vé tàu hỏa điện tử an toàn và thuận tiện',
    'step_1_title': 'Chọn Hành Trình',
    'step_1_desc': 'Tra cứu ga đi, ga đến, ngày khởi hành và tìm kiếm chuyến tàu phù hợp với thời gian mong muốn.',
    'step_2_title': 'Chọn Ghế / Toa Xe',
    'step_2_desc': 'Lựa chọn loại chỗ ngồi (Ghế mềm điều hòa, Giường nằm K4/K6, Khoang VIP) trên sơ đồ trực quan thời gian thực.',
    'step_3_title': 'Thanh Toán & Nhận Vé',
    'step_3_desc': 'Thanh toán bảo mật đa kênh qua VNPAY-QR hoặc ATM/Internet Banking và nhận Thẻ lên tàu điện tử tức thì.',

    // Tra cứu vé & Thẻ lên tàu
    'page_lookup_title': 'Tra Cứu Thông Tin Đặt Chỗ & Thẻ Lên Tàu Điện Tử',
    'page_lookup_sub': 'Hệ thống tra cứu vé tàu hỏa điện tử chính thức của Tập đoàn Đường sắt Quốc gia Việt Nam. Quý khách vui lòng nhập Mã đặt chỗ và Số điện thoại/Email để kiểm tra chi tiết hoặc in lại Thẻ lên tàu.',
    'lbl_lookup_pnr': 'Mã đặt chỗ (Code)',
    'ph_lookup_pnr': 'VD: VNR8921',
    'lbl_lookup_contact': 'SĐT hoặc Email đặt vé',
    'ph_lookup_contact': 'VD: 0912345678',
    'btn_lookup': 'Tra cứu',
    'pass_card_title': 'THẺ LÊN TÀU HỎA ĐIỆN TỬ',
    'pass_company': 'TẬP ĐOÀN ĐƯỜNG SẮT QUỐC GIA VIỆT NAM (DSVN)',
    'pass_status_paid': 'ĐÃ THANH TOÁN (HỢP LỆ)',
    'pass_lbl_code': 'Mã đặt chỗ',
    'pass_lbl_train': 'Đoàn tàu / Hành trình',
    'pass_lbl_dep': 'Giờ & Ngày khởi hành',
    'pass_lbl_seat': 'Vị trí chỗ ngồi',
    'pass_lbl_passenger': 'Hành khách:',
    'pass_lbl_contact': 'Liên hệ:',
    'btn_print_pass': 'In Thẻ Lên Tàu',

    // 4 bước (Trang thông tin đặt chỗ)
    'guide_process_eyebrow': 'Hướng dẫn giao dịch',
    'guide_process_title': 'Quy Trình Mua Vé Tàu Trực Tuyến',
    'guide_process_desc': 'Chỉ với 4 bước đơn giản, quý khách đã có thể sở hữu Thẻ lên tàu điện tử chính thức một cách an toàn và tiện lợi.',

    // Phương thức thanh toán & Lưu ý
    'payment_methods_title': 'Phương Thức Thanh Toán',
    'safety_notes_title': 'Lưu Ý Khi Sử Dụng Vé Điện Tử',

    // Trang Quy định
    'page_rules_title': 'Quy Định Vận Chuyển & Chính Sách Đổi, Trả Vé',
    'page_rules_sub': 'Văn bản chính thức ban hành bởi Tập đoàn Đường sắt Quốc gia Việt Nam về điều kiện vận tải hành khách, biểu phí đổi trả và quy định hành lý trên mạng lưới đường sắt quốc gia.',
    'toc_heading': 'Mục Lục Văn Bản',

    // Auth modal
    'auth_title': 'CỔNG HỘI VIÊN ĐƯỜNG SẮT',
    'auth_desc': 'Hệ thống vé tàu điện tử & Tích điểm hội viên thân thiết',
    'auth_tab_login': 'Đăng nhập',
    'auth_tab_reg': 'Đăng ký mới',
    'lbl_account': 'Số điện thoại hoặc Email',
    'ph_account': 'VD: 0912345678 hoặc dsvn@vr.com.vn',
    'lbl_pwd': 'Mật khẩu',
    'ph_pwd': 'Nhập mật khẩu tài khoản',
    'btn_submit_login': 'Đăng nhập hệ thống',
    'auth_or_sso': 'HOẶC TIẾP TỤC VỚI',
    'btn_vneid': 'Đăng nhập bằng tài khoản VNeID (Định danh Quốc gia)',
    'auth_no_acc': 'Chưa có tài khoản hội viên?',
    'auth_reg_now': 'Đăng ký ngay tại đây',

    // Footer
    'footer_brand': 'TẬP ĐOÀN ĐƯỜNG SẮT QUỐC GIA VIỆT NAM',
    'footer_col1_title': 'Dịch Vụ Trực Tuyến',
    'footer_col2_title': 'Chính Sách & Quy Định',
    'footer_col3_title': 'Thông Tin Liên Hệ',
    'footer_copy': '© 2026 Tập đoàn Đường sắt Quốc gia Việt Nam (DSVN). Tất cả quyền được bảo lưu.',
    'footer_sub': 'Hệ thống bán vé tàu điện tử chính thức tiêu chuẩn quốc gia.'
  },

  en: {
    // Topbar & Nav
    'brand_title': 'VIETNAM RAILWAYS',
    'brand_sub': 'Official Electronic Railway Ticketing System',
    'nav_tim_ve': 'Book Tickets',
    'nav_gia_ve_re': 'Low Fare Search',
    'nav_khuyen_mai': 'Promotions',
    'nav_thong_tin': 'Booking Information',
    'nav_quy_dinh': 'Regulations',
    'btn_login': 'Sign In',
    'btn_my_tickets': 'My Tickets',
    'btn_profile': 'Passenger Profile',
    'btn_logout': 'Sign Out',

    // Hero & Search Console
    'hero_badge': 'Vietnam National Railways Group',
    'hero_title': 'OFFICIAL ELECTRONIC TRAIN TICKET SYSTEM',
    'hero_desc': 'Book train tickets securely online, check schedules and experience convenient journeys across Vietnam.',
    'trip_one_way': 'One-way',
    'trip_oneway': 'One-way',
    'trip_round_trip': 'Round-trip',
    'trip_roundtrip': 'Round-trip',
    'popular_routes': 'Popular Routes:',
    'lbl_from': 'Origin Station',
    'sub_from': 'Departure',
    'ph_from': 'Enter departure station...',
    'lbl_to': 'Destination Station',
    'sub_to': 'Arrival',
    'ph_to': 'Enter destination station...',
    'lbl_dept_date': 'Departure Date',
    'sub_dept_date': 'Solar date',
    'lbl_return_date': 'Return Date',
    'sub_return_date': '(Optional)',
    'lbl_passengers': 'Passengers',
    'sub_passengers': 'Category',
    'opt_pass_1': '1 Adult',
    'opt_pass_2': '2 Adults',
    'opt_pass_fam': '2 Adults + 1 Child',
    'opt_pass_grp': 'Group / Tour',
    'btn_search': 'Search Trains',
    'search_notice': 'Fare policy: Free for children under 6, 25% off for ages 6-10. 15% discount for seniors 60+.',
    'link_view_rules': 'View ticket refund & exchange rules',

    // Điểm đến hấp dẫn
    'sec_dest_eyebrow': 'Travel Destinations',
    'sec_dest_title': 'Attractive Destinations',
    'sec_dest_sub': 'Connecting premier domestic travel destinations',
    'dest_book_train': 'Book tickets now',
    'dest_vinh_title': 'Vinh Station (Nghe An)',
    'dest_vinh_desc': 'President Ho Chi Minh Homeland • Spectacular Thanh Chuong Tea Islands',
    'dest_phanthiet_title': 'Phan Thiet Station (Binh Thuan)',
    'dest_phanthiet_desc': 'Poshanu Cham Towers • Golden sands of Mui Ne Beach',
    'dest_tuyhoa_title': 'Tuy Hoa Station (Phu Yen)',
    'dest_tuyhoa_desc': 'Dai Lanh Lighthouse • Land of yellow flowers on green grass',

    // Nhà ga trọng điểm
    'sec_stations_eyebrow': 'Railway Network',
    'sec_stations_title': 'Key Railway Stations',
    'sec_stations_desc': 'Information on major nationwide train stations serving passenger and baggage transport.',

    // Hành trình tiêu biểu
    'sec_heritage_eyebrow': 'Signature Experiences',
    'sec_heritage_title': 'Iconic Railway Routes',
    'sec_heritage_desc': 'Discover Vietnam\'s picturesque landscapes through historic and culturally rich railways.',

    // Quy trình 3 bước (Trang chủ)
    'sec_process_title': 'ONLINE TICKET BOOKING PROCEDURE',
    'sec_process_sub': 'Just 3 simple steps to get official electronic boarding passes safely and conveniently',
    'step_1_title': 'Select Itinerary',
    'step_1_desc': 'Search origin, destination, departure date and find the ideal train schedule.',
    'step_2_title': 'Select Carriage & Seat',
    'step_2_desc': 'Choose your preferred seating (AC soft seat, 4/6-berth sleeper, VIP cabin) on real-time visual seatmaps.',
    'step_3_title': 'Pay & Receive Boarding Pass',
    'step_3_desc': 'Pay securely via VNPAY-QR or ATM/online banking and instantly receive your electronic boarding pass.',

    // Tra cứu vé & Thẻ lên tàu
    'page_lookup_title': 'Check Booking Information & Electronic Boarding Pass',
    'page_lookup_sub': 'Official e-ticket verification system of Vietnam National Railways Group. Please enter your Booking Code and Phone/Email to view details or reprint your Boarding Pass.',
    'lbl_lookup_pnr': 'Booking Code (PNR)',
    'ph_lookup_pnr': 'e.g. VNR8921',
    'lbl_lookup_contact': 'Phone Number or Email',
    'ph_lookup_contact': 'e.g. 0912345678',
    'btn_lookup': 'Look Up Ticket',
    'pass_card_title': 'ELECTRONIC BOARDING PASS',
    'pass_company': 'VIETNAM NATIONAL RAILWAYS GROUP (DSVN)',
    'pass_status_paid': 'PAID & CONFIRMED',
    'pass_lbl_code': 'Booking Code',
    'pass_lbl_train': 'Train / Route',
    'pass_lbl_dep': 'Departure Time & Date',
    'pass_lbl_seat': 'Seat Location',
    'pass_lbl_passenger': 'Passenger:',
    'pass_lbl_contact': 'Contact:',
    'btn_print_pass': 'Print Boarding Pass',

    // 4 bước (Trang thông tin đặt chỗ)
    'guide_process_eyebrow': 'Transaction Guide',
    'guide_process_title': 'Online Ticket Purchasing Procedure',
    'guide_process_desc': 'In just 4 easy steps, you can safely and conveniently obtain your official electronic boarding pass.',

    // Phương thức thanh toán & Lưu ý
    'payment_methods_title': 'Payment Methods',
    'safety_notes_title': 'Important Notes for E-Tickets',

    // Trang Quy định
    'page_rules_title': 'Transport Regulations & Ticket Refund Policy',
    'page_rules_sub': 'Official regulations issued by Vietnam National Railways Group regarding passenger transport conditions, refund/exchange fees and baggage rules.',
    'toc_heading': 'Document Contents',

    // Auth modal
    'auth_title': 'VIETNAM RAILWAYS MEMBER PORTAL',
    'auth_desc': 'E-Ticket System & Customer Loyalty Rewards',
    'auth_tab_login': 'Sign In',
    'auth_tab_reg': 'Register',
    'lbl_account': 'Phone Number or Email',
    'ph_account': 'e.g. 0912345678 or dsvn@vr.com.vn',
    'lbl_pwd': 'Password',
    'ph_pwd': 'Enter your password',
    'btn_submit_login': 'Sign In to System',
    'auth_or_sso': 'OR CONTINUE WITH',
    'btn_vneid': 'Sign In with VNeID (National Digital ID)',
    'auth_no_acc': 'Don\'t have a member account?',
    'auth_reg_now': 'Register here',

    // Footer
    'footer_brand': 'VIETNAM NATIONAL RAILWAYS GROUP',
    'footer_col1_title': 'Online Services',
    'footer_col2_title': 'Policies & Regulations',
    'footer_col3_title': 'Contact Information',
    'footer_copy': '© 2026 Vietnam National Railways Group (DSVN). All rights reserved.',
    'footer_sub': 'Official national standard electronic railway ticketing system.'
  }
};

// 2. BẢNG DỊCH CHUỖI TOÀN DIỆN (Dùng để dịch trực tiếp các đoạn văn bản cụ thể trong DOM)
const DANH_SACH_CHUOI_SONG_NGU = [
  // Topbar & Thanh thông báo Marquee
  {
    vi: "Thông báo DSVN: Giảm giá vé tập thể đến 15% cho các đoàn tàu Thống Nhất • Đổi trả vé trực tuyến thuận tiện trên hệ thống trước giờ tàu chạy • Trẻ em dưới 6 tuổi miễn vé, từ 6 - 10 tuổi giảm 25% giá vé!",
    en: "DSVN Announcement: Group discount up to 15% on Thong Nhat trains • Convenient online ticket exchange/refund prior to departure • Free for children under 6, 25% discount for ages 6-10!"
  },
  { vi: "HỆ THỐNG VÉ ĐIỆN TỬ DSVN", en: "DSVN E-TICKETING SYSTEM" },
  { vi: "ĐƯỜNG SẮT VIỆT NAM", en: "VIETNAM RAILWAYS" },
  { vi: "VIETNAM RAILWAYS", en: "VIETNAM RAILWAYS" },
  { vi: "Tìm vé", en: "Book Tickets" },
  { vi: "Tìm giá vé rẻ", en: "Low Fare Search" },
  { vi: "Khuyến mại", en: "Promotions" },
  { vi: "Thông tin đặt chỗ", en: "Booking Info" },
  { vi: "Quy định", en: "Regulations" },
  { vi: "Đăng nhập", en: "Sign In" },
  { vi: "Vé của tôi", en: "My Tickets" },
  { vi: "Hồ sơ hành khách", en: "Passenger Profile" },
  { vi: "Đăng xuất", en: "Sign Out" },

  // Home Hero & Tìm vé
  { vi: "Tập đoàn Đường sắt Quốc gia Việt Nam", en: "Vietnam National Railways Group" },
  { vi: "HỆ THỐNG VÉ TÀU ĐIỆN TỬ CHÍNH THỨC", en: "OFFICIAL ELECTRONIC TRAIN TICKET SYSTEM" },
  { vi: "Đặt vé trực tuyến an toàn, tra cứu giờ tàu chính xác và trải nghiệm hành trình xuyên Việt thuận tiện.", en: "Book train tickets securely online, check schedules and experience convenient journeys across Vietnam." },
  { vi: "Một chiều", en: "One-way" },
  { vi: "Khứ hồi", en: "Round-trip" },
  { vi: "Chặng phổ biến:", en: "Popular routes:" },
  { vi: "Nơi đi", en: "Origin" },
  { vi: "Nơi đến", en: "Destination" },
  { vi: "Gõ tên Ga để tìm", en: "Type station name to search" },
  { vi: "Ngày về (Khứ hồi)", en: "Return Date (Round-trip)" },
  { vi: "Chọn nếu mua vé về", en: "Select for return trip" },
  { vi: "TÌM", en: "SEARCH" },
  { vi: "Ga đi", en: "Origin Station" },
  { vi: "Khởi hành", en: "Departure" },
  { vi: "Ga đến", en: "Destination Station" },
  { vi: "Điểm đến", en: "Arrival" },
  { vi: "Ngày đi", en: "Departure Date" },
  { vi: "Dương lịch", en: "Solar date" },
  { vi: "Ngày về", en: "Return Date" },
  { vi: "(Không chọn)", en: "(Optional)" },
  { vi: "Hành khách", en: "Passengers" },
  { vi: "Đối tượng", en: "Category" },
  { vi: "1 Người lớn", en: "1 Adult" },
  { vi: "2 Người lớn", en: "2 Adults" },
  { vi: "2 Lớn + 1 Trẻ em", en: "2 Adults + 1 Child" },
  { vi: "Nhóm tập thể", en: "Group / Delegation" },
  { vi: "Xem quy định đổi trả vé", en: "View ticket regulations" },
  {
    vi: "Chính sách giá vé: Trẻ em dưới 6 tuổi miễn vé, từ 6 - 10 tuổi giảm 25% giá vé. Người cao tuổi từ 60 tuổi giảm 15%.",
    en: "Fare policy: Free for children under 6, 25% discount for ages 6-10. 15% discount for seniors 60+."
  },

  // Kết quả tìm kiếm vé
  { vi: "Tuyến đường sắt Thống Nhất • DSVN", en: "North-South Railway Line • DSVN" },
  { vi: "Danh sách đoàn tàu có chỗ trống", en: "Available train list" },
  { vi: "Tất cả đoàn tàu", en: "All Trains" },
  { vi: "Tàu nhanh SE", en: "SE Fast Trains" },
  { vi: "Khoang VIP Di Sản", en: "Heritage VIP" },
  { vi: "Giường nằm K4", en: "4-Berth Sleeper" },
  { vi: "Giá vé từ", en: "Fare from" },
  { vi: "Chọn chỗ", en: "Select Seat" },
  { vi: "Đóng", en: "Close" },
  { vi: "Theo hành trình", en: "Per schedule" },
  { vi: "Toa VIP Di Sản", en: "Heritage VIP Car" },
  { vi: "Sơ đồ chỗ ngồi Toa 1 (Ngồi mềm điều hòa)", en: "Carriage 1 Seat Map (AC Soft Seats)" },
  { vi: "Trống", en: "Available" },
  { vi: "Đang chọn", en: "Selected" },
  { vi: "Đã bán", en: "Occupied" },
  { vi: "Chưa chọn chỗ ngồi. Vui lòng nhấp vào các ô ghế màu trắng để chọn.", en: "No seat selected. Please click on white seat boxes to choose." },
  { vi: "Đặt vé ngay", en: "Book Now" },

  // Quy trình 3 bước
  { vi: "QUY TRÌNH ĐẶT VÉ TRỰC TUYẾN", en: "ONLINE TICKET BOOKING PROCEDURE" },
  { vi: "Chỉ với 3 bước đơn giản để sở hữu vé tàu hỏa điện tử an toàn và thuận tiện", en: "Just 3 simple steps to get official electronic boarding passes safely and conveniently" },
  { vi: "Chọn Hành Trình", en: "Select Itinerary" },
  { vi: "Tra cứu ga đi, ga đến, ngày khởi hành và tìm kiếm chuyến tàu phù hợp với thời gian mong muốn.", en: "Search origin, destination, departure date and find the ideal train schedule." },
  { vi: "Chọn Ghế / Toa Xe", en: "Select Seats / Carriages" },
  { vi: "Lựa chọn loại chỗ ngồi (Ghế mềm điều hòa, Giường nằm K4/K6, Khoang VIP) trên sơ đồ trực quan thời gian thực.", en: "Select your preferred seat class (AC soft seat, 4/6-berth sleeper, VIP cabin) on real-time visual seatmaps." },
  { vi: "Thanh Toán & Nhận Vé", en: "Pay & Receive Boarding Pass" },
  { vi: "Thanh toán bảo mật đa kênh qua VNPAY-QR hoặc ATM/Internet Banking và nhận Thẻ lên tàu điện tử tức thì.", en: "Pay securely via VNPAY-QR or ATM/online banking and instantly receive your electronic boarding pass." },

  // Điểm đến hấp dẫn
  { vi: "Điểm đến du lịch", en: "Travel Destinations" },
  { vi: "Điểm Đến Hấp Dẫn", en: "Attractive Destinations" },
  { vi: "Kết nối các điểm đến du lịch trong nước", en: "Connecting premier domestic travel destinations" },
  { vi: "Ga Vinh (Nghệ An)", en: "Vinh Station (Nghe An)" },
  { vi: "Quê hương Bác Hồ • Đảo chè Thanh Chương kỳ vĩ", en: "President Ho Chi Minh Homeland • Spectacular Thanh Chuong Tea Islands" },
  { vi: "Ga Phan Thiết (Bình Thuận)", en: "Phan Thiet Station (Binh Thuan)" },
  { vi: "Tháp Chàm Poshanư • Biển Mũi Né cát vàng", en: "Poshanu Cham Towers • Golden sands of Mui Ne Beach" },
  { vi: "Ga Tuy Hòa (Phú Yên)", en: "Tuy Hoa Station (Phu Yen)" },
  { vi: "Hải đăng Mũi Điện • Xứ sở hoa vàng cỏ xanh", en: "Dai Lanh Lighthouse • Land of yellow flowers on green grass" },

  // Nhà ga trọng điểm
  { vi: "Mạng lưới đường sắt", en: "Railway Network" },
  { vi: "Hệ Thống Nhà Ga Trọng Điểm", en: "Key Railway Stations" },
  { vi: "Thông tin các nhà ga đường sắt lớn trên toàn quốc phục vụ đón trả khách và vận chuyển hành lý.", en: "Information on major nationwide train stations serving passenger and baggage transport." },
  { vi: "Trung tâm trung chuyển hành khách lớn nhất miền Nam.", en: "Largest passenger transit hub in Southern Vietnam." },
  { vi: "Đầu mối đường sắt trọng yếu thủ đô kết nối toàn quốc.", en: "Crucial railway gateway in the capital connecting the nation." },
  { vi: "Cửa ngõ miền Trung, điểm kết nối cung đèo Hải Vân kỳ vĩ.", en: "Gateway to Central Vietnam, connecting scenic Hai Van Pass." },
  { vi: "Ga du lịch biển duyên hải Nam Trung Bộ sầm uất.", en: "Bustling coastal station serving South Central tourism." },

  // Hành trình tiêu biểu
  { vi: "Trải nghiệm đặc sắc", en: "Signature Experiences" },
  { vi: "Hành Trình Tiêu Biểu", en: "Iconic Railway Routes" },
  { vi: "Khám phá vẻ đẹp đất nước qua những cung đường sắt lịch sử và văn hóa độc đáo.", en: "Discover Vietnam's picturesque landscapes through historic and culturally rich railways." },
  { vi: "Tuyến Đường Sắt Thống Nhất (Hà Nội - Sài Gòn)", en: "North-South Reunification Railway (Hanoi - Saigon)" },
  { vi: "Hành trình xuyên Việt 1.726 km qua hàng chục tỉnh thành, di sản thế giới và danh lam thắng cảnh dọc chiều dài đất nước.", en: "1,726 km trans-Vietnam journey passing through dozens of provinces, UNESCO heritage sites, and breathtaking landmarks." },
  { vi: "Tuyến Hà Nội - Hải Phòng (Tàu Hoa Phượng)", en: "Hanoi - Hai Phong Route (Hoa Phuong Train)" },
  { vi: "Chuyến tàu ẩm thực và du lịch di sản đưa du khách thưởng thức food tour Hải Phòng nức tiếng chỉ với 1h30 phút di chuyển.", en: "Culinary & heritage route taking foodies to the famous Hai Phong food tour in just 1 hour 30 minutes." },
  { vi: "Đoàn Tàu Di Sản Kết Nối Huế - Đà Nẵng", en: "Heritage Train Connecting Hue - Da Nang" },
  { vi: "Cung đường sắt ngoạn mục qua đèo Hải Vân và vịnh Lăng Cô, được bình chọn là một trong những hành trình xe lửa đẹp nhất hành tinh.", en: "Spectacular rail route crossing Hai Van Pass and Lang Co Bay, voted among the most scenic rail journeys on Earth." },

  // Trang Thông tin đặt chỗ (thong-tin-dat-cho.html)
  { vi: "Tra Cứu Thông Tin Đặt Chỗ & Thẻ Lên Tàu Điện Tử", en: "Check Booking Information & Electronic Boarding Pass" },
  { vi: "Hệ thống tra cứu vé tàu hỏa điện tử chính thức của Tập đoàn Đường sắt Quốc gia Việt Nam. Quý khách vui lòng nhập Mã đặt chỗ và Số điện thoại/Email để kiểm tra chi tiết hoặc in lại Thẻ lên tàu.", en: "Official e-ticket verification system of Vietnam National Railways Group. Please enter your Booking Code and Phone/Email to check details or reprint your Boarding Pass." },
  { vi: "Tra cứu thông tin vé điện tử", en: "Check E-Ticket Information" },
  { vi: "Nhập mã vé hoặc mã đặt chỗ và thông tin liên hệ đã đăng ký khi mua vé.", en: "Enter booking code or ticket code and registered contact info." },
  { vi: "Mã đặt chỗ (Code)", en: "Booking Code (PNR)" },
  { vi: "SĐT hoặc Email đặt vé", en: "Phone Number or Email" },
  { vi: "THẺ LÊN TÀU HỎA ĐIỆN TỬ", en: "ELECTRONIC BOARDING PASS" },
  { vi: "TẬP ĐOÀN ĐƯỜNG SẮT QUỐC GIA VIỆT NAM (DSVN)", en: "VIETNAM NATIONAL RAILWAYS GROUP (DSVN)" },
  { vi: "ĐÃ THANH TOÁN (HỢP LỆ)", en: "PAID & CONFIRMED" },
  { vi: "Mã đặt chỗ", en: "Booking Code" },
  { vi: "Đoàn tàu / Hành trình", en: "Train / Route" },
  { vi: "Giờ & Ngày khởi hành", en: "Departure Time & Date" },
  { vi: "Vị trí chỗ ngồi", en: "Seat Location" },
  { vi: "In Thẻ Lên Tàu", en: "Print Boarding Pass" },

  // 4 bước mua vé trực tuyến
  { vi: "Hướng dẫn giao dịch", en: "Transaction Guide" },
  { vi: "Quy Trình Mua Vé Tàu Trực Tuyến", en: "Online Ticket Purchasing Procedure" },
  { vi: "Chỉ với 4 bước đơn giản, quý khách đã có thể sở hữu Thẻ lên tàu điện tử chính thức một cách an toàn và tiện lợi.", en: "In just 4 easy steps, you can safely and conveniently obtain your official electronic boarding pass." },
  { vi: "Tìm kiếm chuyến tàu", en: "Search Train Schedule" },
  { vi: "Chọn ga đi, ga đến, ngày khởi hành và loại hành trình (một chiều hoặc khứ hồi) trên trang chủ để xem danh sách chuyến tàu phù hợp.", en: "Select origin, destination, date and trip type on the home page to find available train schedules." },
  { vi: "Chọn toa và vị trí chỗ", en: "Choose Carriage & Seats" },
  { vi: "Xem sơ đồ chỗ ngồi chi tiết của từng toa (ngồi mềm, giường nằm khoang 4, khoang 6 hoặc khoang VIP) và chọn vị trí yêu thích.", en: "View interactive carriage seatmaps (soft seat, 4/6-berth sleeper, VIP cabin) and select your favorite seat." },
  { vi: "Nhập thông tin & Thanh toán", en: "Enter Details & Payment" },
  { vi: "Điền chính xác họ tên, số CCCD/Hộ chiếu người đi tàu và lựa chọn hình thức thanh toán trực tuyến bảo mật (VNPAY-QR, Thẻ ngân hàng, Ví điện tử).", en: "Fill in full name, Passport/ID number and choose a secure online payment method (VNPAY-QR, Bank Card, E-Wallet)." },
  { vi: "Nhận Thẻ lên tàu điện tử", en: "Receive E-Boarding Pass" },
  { vi: "Hệ thống gửi mã đặt chỗ qua SMS và Thẻ lên tàu điện tử có gắn mã QR qua Email. Quý khách chỉ cần xuất trình trên điện thoại khi lên ga.", en: "System sends PNR via SMS and E-Boarding Pass with QR code via Email. Present it on your phone at station gates." },

  // Phương thức thanh toán & Lưu ý
  { vi: "Phương Thức Thanh Toán", en: "Payment Methods" },
  { vi: "Hệ thống bán vé Đường sắt Việt Nam hỗ trợ đa dạng phương thức thanh toán an toàn, bảo mật tiêu chuẩn quốc gia:", en: "Vietnam Railways ticketing system supports diverse, secure and national-standard payment methods:" },
  { vi: "Quét mã VNPAY-QR:", en: "Scan VNPAY-QR:" },
  { vi: "Nhanh chóng qua ứng dụng của hơn 30 ngân hàng.", en: "Fast payment through 30+ banking mobile applications." },
  { vi: "Thẻ ATM / Internet Banking:", en: "Domestic ATM / Internet Banking:" },
  { vi: "Cổng thanh toán nội địa các ngân hàng Việt Nam.", en: "Domestic payment gateway for Vietnamese bank accounts." },
  { vi: "Thẻ Quốc tế:", en: "International Cards:" },
  { vi: "Visa, MasterCard, JCB phát hành trong nước và quốc tế.", en: "Visa, MasterCard, JCB issued locally and internationally." },
  { vi: "Thanh toán trả sau:", en: "Pay Later at Stations:" },
  { vi: "Giữ chỗ trực tuyến và thanh toán trực tiếp tại các nhà ga.", en: "Hold reservation online and pay directly at railway station counters." },
  { vi: "Lưu Ý Khi Sử Dụng Vé Điện Tử", en: "Important Notes for E-Tickets" },
  { vi: "Thông tin người đi tàu:", en: "Passenger Details:" },
  { vi: "Tên và số giấy tờ tùy thân (CCCD/Hộ chiếu) trên Thẻ lên tàu phải trùng khớp hoàn toàn với giấy tờ gốc xuất trình cho nhân viên kiểm soát tại cửa ga.", en: "Name and Passport/ID on the boarding pass must strictly match the original identity documents presented at gates." },
  { vi: "Hành khách có mặt tại nhà ga trước giờ tàu chạy ít nhất 30 phút để thực hiện thủ tục kiểm tra vé và quét mã QR tại cổng kiểm soát tự động.", en: "Passengers must arrive at the station at least 30 minutes before departure to complete ticket inspection and QR scanning." },

  // Trang Quy định (quy-dinh.html)
  { vi: "Quy Định Vận Chuyển & Chính Sách Đổi, Trả Vé", en: "Transport Regulations & Ticket Refund Policy" },
  { vi: "Văn bản chính thức ban hành bởi Tập đoàn Đường sắt Quốc gia Việt Nam về điều kiện vận tải hành khách, biểu phí đổi trả và quy định hành lý trên mạng lưới đường sắt quốc gia.", en: "Official regulations issued by Vietnam National Railways Group regarding passenger transport conditions, refund/exchange fees and baggage rules." },
  { vi: "Mục Lục Văn Bản", en: "Document Contents" },
  { vi: "Đổi, trả vé ngày thường", en: "Regular Ticket Exchange & Refund" },
  { vi: "Quy định cao điểm Tết", en: "Peak & Tet Holiday Rules" },
  { vi: "Hình thức & Thủ tục trả vé", en: "Refund Procedures & Methods" },
  { vi: "Hành lý xách tay & Ký gửi", en: "Carry-on & Checked Baggage" },
  { vi: "Giấy tờ tùy thân & Ưu tiên", en: "ID Requirements & Concessions" },
  { vi: "Tổng đài hỗ trợ 24/7", en: "24/7 Customer Support" },
  { vi: "Miền Bắc: 1900 0109", en: "North: 1900 0109" },
  { vi: "Miền Nam: 1900 1520", en: "South: 1900 1520" },
  { vi: "1. Quy định đổi, trả vé ngày thường", en: "1. Regulations on Ticket Exchange & Refund on Regular Days" },
  { vi: "2. Quy định đổi, trả vé dịp cao điểm Tết Nguyên Đán", en: "2. Regulations on Exchange & Refund During Peak Lunar New Year" },
  { vi: "3. Hình thức và quy trình trả vé trực tuyến", en: "3. Online Ticket Refund Methods and Procedures" },
  { vi: "4. Quy định về Hành lý xách tay & Ký gửi", en: "4. Regulations on Carry-on and Checked Baggage" },
  { vi: "5. Quy định giấy tờ tùy thân và chính sách ưu tiên xã hội", en: "5. Identification Requirements and Social Concession Policies" },

  // Checkout modal
  { vi: "HOÀN TẤT ĐẶT CHỖ & THANH TOÁN", en: "COMPLETE RESERVATION & PAYMENT" },
  { vi: "Giữ chỗ:", en: "Hold Time:" },
  { vi: "Thông Tin Người Nhận Vé", en: "Ticket Recipient Information" },
  { vi: "Số điện thoại *", en: "Phone Number *" },
  { vi: "Email", en: "Email" },
  { vi: "Phương thức thanh toán", en: "Payment Method" },
  { vi: "Quét mã VNPAY-QR (Ngân hàng / Ví điện tử)", en: "Scan VNPAY-QR (Bank App / E-Wallet)" },
  { vi: "Thẻ ATM nội địa (Hỗ trợ 30+ ngân hàng Việt Nam)", en: "Domestic ATM Card (30+ Vietnamese Banks)" },
  { vi: "Thẻ Quốc tế (Visa, MasterCard, JCB)", en: "International Cards (Visa, MasterCard, JCB)" },
  { vi: "Tổng tiền thanh toán:", en: "Total Amount:" },
  { vi: "Xác nhận & Thanh toán ngay", en: "Confirm & Pay Now" },

  // Modal Thành công
  { vi: "ĐẶT VÉ VÀ THANH TOÁN THÀNH CÔNG!", en: "BOOKING & PAYMENT SUCCESSFUL!" },
  { vi: "Mã đặt chỗ:", en: "Booking Code:" },
  { vi: "Sao chép", en: "Copy" },
  { vi: "Đóng & Đặt vé mới", en: "Close & New Booking" },
  { vi: "In Thẻ Lên Tàu", en: "Print Boarding Pass" },
  { vi: "Xem trong Tra Cứu Vé", en: "View in Ticket Search" },

  // Footer
  { vi: "TẬP ĐOÀN ĐƯỜNG SẮT QUỐC GIA VIỆT NAM", en: "VIETNAM NATIONAL RAILWAYS GROUP" },
  { vi: "Doanh nghiệp nhà nước giữ vai trò chủ đạo trong vận tải đường sắt quốc gia, kết nối kinh tế - văn hóa - xã hội trên toàn tuyến đường sắt Việt Nam.", en: "State enterprise playing the leading role in national rail transport, connecting socio-economic regions along Vietnam's railways." },
  { vi: "Giấy chứng nhận ĐKKD số: 0100105052 do Sở KHĐT TP. Hà Nội cấp.", en: "Business License No: 0100105052 issued by Hanoi DPI." },
  { vi: "Quyết định thành lập số 973/QĐ-TTg của Thủ tướng Chính phủ.", en: "Establishment Decision No. 973/QD-TTg of the Prime Minister." },
  { vi: "Dịch Vụ Trực Tuyến", en: "Online Services" },
  { vi: "Tìm vé tàu", en: "Train Ticket Search" },
  { vi: "Chương trình khuyến mại", en: "Promotional Programs" },
  { vi: "Quy định đổi trả vé", en: "Ticket Refund & Exchange Rules" },
  { vi: "Chính Sách & Quy Định", en: "Policies & Regulations" },
  { vi: "Quy định vé ngày thường", en: "Standard Ticket Regulations" },
  { vi: "Quy định vé dịp Lễ Tết", en: "Peak & Holiday Rules" },
  { vi: "Quy định hành lý vận chuyển", en: "Baggage Allowance Policy" },
  { vi: "Chính sách bảo mật", en: "Privacy Policy" },
  { vi: "Điều khoản sử dụng", en: "Terms of Service" },
  { vi: "Thông Tin Liên Hệ", en: "Contact Information" },
  { vi: "Trụ sở: 118 Lê Duẩn, Hoàn Kiếm, Hà Nội", en: "Headquarters: 118 Le Duan, Hoan Kiem, Hanoi" },
  { vi: "Trung tâm CSKH: 1900 0109 (Miền Bắc) - 1900 1520 (Miền Nam)", en: "Customer Care: 1900 0109 (North) - 1900 1520 (South)" },
  { vi: "Email hỗ trợ: dsvn@vr.com.vn", en: "Support Email: dsvn@vr.com.vn" },
  { vi: "© 2026 Tập đoàn Đường sắt Quốc gia Việt Nam (DSVN). Tất cả quyền được bảo lưu.", en: "© 2026 Vietnam National Railways Group (DSVN). All rights reserved." },
  { vi: "Hệ thống bán vé tàu điện tử chính thức tiêu chuẩn quốc gia.", en: "Official national standard electronic railway ticketing system." }
];

/**
 * Lấy ngôn ngữ hiện tại
 */
window.layNgonNguHienTai = function() {
  return localStorage.getItem(KHOA_LUU_NGON_NGU) || 'vi';
};

/**
 * Tra cứu bản dịch theo key
 */
window.dich = function(key, fallback = '') {
  const lang = window.layNgonNguHienTai();
  if (TU_DIEN[lang] && TU_DIEN[lang][key]) {
    return TU_DIEN[lang][key];
  }
  return fallback || key;
};

/**
 * Hàm kích hoạt chuyển đổi ngôn ngữ chính (Gắn vào nút VN / EN)
 */
window.doiNgonNgu = function(lang, thongBao = true) {
  if (lang !== 'vi' && lang !== 'en') lang = 'vi';
  localStorage.setItem(KHOA_LUU_NGON_NGU, lang);

  // 1. Cập nhật giao diện nút bấm VN | EN
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const text = btn.textContent.trim().toUpperCase();
    if ((lang === 'vi' && text === 'VN') || (lang === 'en' && text === 'EN')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2. Cập nhật thuộc tính lang của trang
  document.documentElement.lang = lang;

  // 3. Thực thi dịch thuật toàn diện trên trang
  apDungDichThuatToanDien(lang);

  // 4. Thông báo Toast
  if (thongBao && window.hienThiThongBao) {
    if (lang === 'en') {
      window.hienThiThongBao('Language switched to English', 'success');
    } else {
      window.hienThiThongBao('Đã chuyển đổi sang Tiếng Việt', 'success');
    }
  }
};

/**
 * Dịch thuật toàn bộ giao diện từ trên xuống dưới
 */
function apDungDichThuatToanDien(lang) {
  const dict = TU_DIEN[lang];
  if (!dict) return;

  const isEn = lang === 'en';

  // --- A. DỊCH CÁC PHẦN TỬ CÓ DATA-I18N VÀ DATA-I18N-PH ---
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  // --- B. DỊCH DỰA TRÊN BẢNG CHUỖI TOÀN BỘ TRANG (DOM TEXT REPLACEMENT) ---
  const nguonKey = isEn ? 'vi' : 'en';
  const dichKey = isEn ? 'en' : 'vi';

  // Tạo Map để tra cứu O(1)
  const mapDich = new Map();
  DANH_SACH_CHUOI_SONG_NGU.forEach(item => {
    mapDich.set(item[nguonKey].trim(), item[dichKey].trim());
  });

  // Quét các thẻ chứa text phổ biến
  const selectors = 'h1, h2, h3, h4, h5, p, span, a, button, label, strong, b, td, th, li, .section-eyebrow, .section-desc, .form-label-sub, .ticket-field-label, .ticket-field-value';
  document.querySelectorAll(selectors).forEach(el => {
    // Chỉ dịch nếu phần tử không có con thẻ block phức tạp hoặc là text thuần
    if (el.children.length === 0 || (el.children.length === 1 && el.querySelector('.icon'))) {
      const icon = el.querySelector('.icon');
      const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim() !== '');
      if (textNode) {
        const raw = textNode.nodeValue.trim();
        if (mapDich.has(raw)) {
          textNode.nodeValue = textNode.nodeValue.replace(raw, mapDich.get(raw));
        }
      } else {
        const raw = el.textContent.trim();
        if (mapDich.has(raw)) {
          el.textContent = mapDich.get(raw);
        }
      }
    } else {
      // Quét các text node trực tiếp bên trong phần tử
      el.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const raw = child.nodeValue.trim();
          if (mapDich.has(raw)) {
            child.nodeValue = child.nodeValue.replace(raw, mapDich.get(raw));
          }
        }
      });
    }
  });

  // --- C. DỊCH CÁC Ô NHẬP PLACEHOLDER & SELECT OPTIONS ---
  dichPlaceholdersVaOptions(isEn);

  // --- D. DỊCH CÁC KHỐI ĐẶC THÙ (TOPBAR, NAVBAR, CHIP, THẺ LÊN TÀU) ---
  dichCacKhoiDacThu(isEn, dict);

  // --- E. CẬP NHẬT GIAO DIỆN TÀI KHOẢN (NẾU CÓ) ---
  if (typeof capNhatGiaoDienNguoiDung === 'function') {
    capNhatGiaoDienNguoiDung();
  }
}

/**
 * Dịch các trường input placeholder và select options
 */
function dichPlaceholdersVaOptions(isEn) {
  // Ga đi & Ga đến
  const inpFrom = document.getElementById('inputFrom') || document.getElementById('inputGaDi');
  if (inpFrom) inpFrom.placeholder = isEn ? 'Enter origin station...' : 'Nhập ga đi...';

  const inpTo = document.getElementById('inputTo') || document.getElementById('inputGaDen');
  if (inpTo) inpTo.placeholder = isEn ? 'Enter destination station...' : 'Nhập ga đến...';

  // Tra cứu vé
  const inpLookupPnr = document.getElementById('passengerCode');
  if (inpLookupPnr) inpLookupPnr.placeholder = isEn ? 'e.g. VNR8921' : 'VD: VNR8921';

  const inpLookupContact = document.getElementById('passengerContact');
  if (inpLookupContact) inpLookupContact.placeholder = isEn ? 'e.g. 0912345678' : 'VD: 0912345678';

  // Checkout inputs
  const inpPhone = document.getElementById('checkoutPhone');
  if (inpPhone) inpPhone.placeholder = isEn ? 'e.g. 0912345678' : '0912345678';

  const inpEmail = document.getElementById('checkoutEmail');
  if (inpEmail) inpEmail.placeholder = isEn ? 'passenger@email.com' : 'khachhang@email.com';

  // Select Passengers Options
  const selPassengers = document.getElementById('selectPassengers');
  if (selPassengers) {
    const opts = selPassengers.options;
    if (opts.length >= 4) {
      opts[0].text = isEn ? '1 Adult' : '1 Người lớn';
      opts[1].text = isEn ? '2 Adults' : '2 Người lớn';
      opts[2].text = isEn ? '2 Adults + 1 Child' : '2 Lớn + 1 Trẻ em';
      opts[3].text = isEn ? 'Group / Delegation' : 'Nhóm tập thể';
    }
  }

  // Auth inputs
  const loginAcc = document.getElementById('loginAccount');
  if (loginAcc) loginAcc.placeholder = isEn ? 'e.g. 0912345678 or dsvn@vr.com.vn' : 'VD: 0912345678 hoặc dsvn@vr.com.vn';

  const loginPwd = document.getElementById('loginPassword');
  if (loginPwd) loginPwd.placeholder = isEn ? 'Enter your password' : 'Nhập mật khẩu tài khoản';
}

/**
 * Xử lý các khối HTML đặc thù không nên quét text tự động
 */
function dichCacKhoiDacThu(isEn, dict) {
  // 1. Thanh Marquee trên Topbar
  const marquee = document.querySelector('.topbar-marquee marquee');
  if (marquee) {
    marquee.innerHTML = `
      <span class="icon marquee-icon">campaign</span>
      <strong>${isEn ? 'DSVN Announcement:' : 'Thông báo DSVN:'}</strong> 
      ${isEn 
        ? 'Group ticket discounts up to 15% on Thong Nhat trains • Convenient online ticket refunds & exchanges before departure • Children under 6 travel free, 6-10 years 25% off!' 
        : 'Giảm giá vé tập thể đến 15% cho các đoàn tàu Thống Nhất • Đổi trả vé trực tuyến thuận tiện trên hệ thống trước giờ tàu chạy • Trẻ em dưới 6 tuổi miễn vé, từ 6 - 10 tuổi giảm 25% giá vé!'}
    `;
  }

  // 2. Thanh điều hướng Navbar & Mobile Drawer
  const navItems = [
    { vi: 'Tìm vé', en: 'Book Tickets', href: 'index.html' },
    { vi: 'Tìm giá vé rẻ', en: 'Low Fare Search', href: 'dsvn.vn' },
    { vi: 'Khuyến mại', en: 'Promotions', href: 'dsvn.vn' },
    { vi: 'Thông tin đặt chỗ', en: 'Booking Info', href: 'thong-tin-dat-cho.html' },
    { vi: 'Quy định', en: 'Regulations', href: 'quy-dinh.html' }
  ];

  document.querySelectorAll('.main-nav .nav-link, .mobile-nav-list .nav-link').forEach(link => {
    const spanText = link.querySelector('span:not(.icon)') || link;
    const current = spanText.textContent.trim();
    navItems.forEach(item => {
      if (current.includes(item.vi) || current.includes(item.en)) {
        spanText.textContent = isEn ? item.en : item.vi;
      }
    });
  });

  // 3. Nút chọn Một chiều / Khứ hồi
  const btnOneWay = document.getElementById('btnOneWay');
  if (btnOneWay) {
    const s = btnOneWay.querySelector('span:last-child');
    if (s) s.textContent = isEn ? 'One-way' : 'Một chiều';
  }

  const btnRoundTrip = document.getElementById('btnRoundTrip');
  if (btnRoundTrip) {
    const s = btnRoundTrip.querySelector('span:last-child');
    if (s) s.textContent = isEn ? 'Round-trip' : 'Khứ hồi';
  }

  // 4. Nút bấm tìm vé
  const btnSearchSubmit = document.querySelector('.btn-search-submit');
  if (btnSearchSubmit) {
    const s = btnSearchSubmit.querySelector('span:last-child');
    if (s) s.textContent = isEn ? 'Search Trains' : 'Tìm vé';
  }

  // 5. Thẻ lên tàu demo trên trang tra cứu
  const passStatus = document.querySelector('.ticket-pass-status');
  if (passStatus) {
    const s = passStatus.querySelector('span:last-child');
    if (s) s.textContent = isEn ? 'PAID & CONFIRMED' : 'ĐÃ THANH TOÁN (HỢP LỆ)';
  }

  // 6. Header di động màu xanh
  const mobileBrand = document.querySelector('.mobile-nav-brand span:last-child');
  if (mobileBrand) {
    mobileBrand.textContent = isEn ? 'DSVN E-TICKETING SYSTEM' : 'HỆ THỐNG VÉ ĐIỆN TỬ DSVN';
  }
}

// 3. TỰ ĐỘNG KHỞI TẠO KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = window.layNgonNguHienTai();
  window.doiNgonNgu(currentLang, false);
});
