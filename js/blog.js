/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/blog.js
 * Mô tả: Dữ liệu và logic xử lý Cẩm nang du lịch đường sắt, Tìm kiếm & Đọc bài viết
 */

let DANH_SACH_BAI_VIET = [
  /* ==================== MỤC 1: TRẢI NGHIỆM ĐOÀN TÀU (3 BÀI) ==================== */
  {
    id: 1,
    title: "Trải nghiệm đoàn tàu kết nối di sản Huế – Đà Nẵng: Cung đường biển ngoạn mục nhất Việt Nam",
    category: "Trải nghiệm",
    image: "../images/blog-checkin-hai-van.jpg",
    date: "10/10/2026",
    readTime: "5 phút",
    author: "Ban Biên Tập DSVN",
    authorRole: "Đội ngũ truyền thông",
    excerpt: "Hành trình đưa du khách ngắm trọn vẹn vịnh Lăng Cô và đèo Hải Vân hùng vĩ qua ô cửa sổ toa tàu với dịch vụ biểu diễn ca Huế và ẩm thực cung đình đặc sắc.",
    content: `
      <p>Đoàn tàu du lịch kết nối di sản miền Trung giữa ga Huế và ga Đà Nẵng (mang số hiệu HĐ1/HĐ2 và HĐ3/HĐ4) đã chính thức trở thành một trong những điểm nhấn du lịch đường sắt ấn tượng nhất cả nước. Khác với những chuyến tàu thông thường, hành trình này được ví như một tour du ngoạn ngắm cảnh thư thả qua những danh thắng tráng lệ nhất dải đất miền Trung.</p>
      
      <div class="article-inner-image">
        <img src="../images/blog-checkin-hai-van.jpg" alt="Check-in ngắm vịnh biển đèo Hải Vân qua cửa sổ toa tàu" />
        <span class="caption">Du khách thư thái ngắm nhìn vịnh biển xanh ngọc bích uốn lượn qua đèo Hải Vân</span>
      </div>

      <h3>1. Cung đường đèo Hải Vân và vịnh Lăng Cô từ góc nhìn độc bản</h3>
      <p>Điểm độc đáo nhất của đoàn tàu di sản là tốc độ chạy tàu được điều chỉnh vừa phải, đặc biệt là đoạn uốn lượn lưng chừng núi đèo Hải Vân. Hành khách có thể phóng tầm mắt ôm trọn đại dương xanh thẳm, những bờ cát trắng thoai thoải của vịnh Lăng Cô và làng chài mộc mạc nép mình bên chân sóng.</p>
      
      <blockquote>
        "Ngồi bên khung cửa sổ toa tàu máy lạnh hiện đại, nhâm nhi tách trà cung đình và ngắm nhìn từng con sóng vỗ vào vách đá Hải Vân là một trải nghiệm không thể nào quên đối với bất kỳ du khách nào."
      </blockquote>

      <div class="article-inner-image">
        <img src="../images/blog-tau-ven-bien.jpg" alt="Đoàn tàu uốn lượn ven cung đường biển miền Trung" />
        <span class="caption">Đoàn tàu uốn lượn bên sườn núi và biển xanh ngát bao la</span>
      </div>

      <h3>2. Không gian văn hóa và ẩm thực cung đình trên toa tàu</h3>
      <p>Đoàn tàu được thiết kế gồm các toa ghế ngồi mềm điều hòa hiện đại và một toa sinh hoạt cộng đồng. Tại đây, hành khách được thưởng thức các tiết mục diễn xướng Ca Huế đặc sắc, thưởng lãm trang phục áo dài truyền thống và nếm thử các món bánh đặc sản xứ Huế như bánh lọc, bánh nậm hay nem lụi.</p>

      <h3>3. Cách săn vé và lịch chạy tàu thuận tiện</h3>
      <p>Mỗi ngày có 2 đôi tàu xuất phát từ cả hai đầu ga Huế và Đà Nẵng vào các khung giờ sáng và chiều. Du khách có thể dễ dàng đặt vé trực tuyến ngay trên hệ thống vé điện tử DSVN với giá vé ưu đãi chỉ từ 150.000đ - 180.000đ/vé.</p>
    `
  },
  {
    id: 2,
    title: "Cung đường sắt ven biển miền Trung: Hành trình chạm vào sóng gió đại dương",
    category: "Trải nghiệm",
    image: "../images/blog-tau-ven-bien.jpg",
    date: "03/10/2026",
    readTime: "6 phút",
    author: "Nguyễn Hải Đăng",
    authorRole: "Nhiếp ảnh gia du lịch",
    excerpt: "Chiêm ngưỡng những đoạn đường ray chạy sát mép sóng biển từ Lăng Cô, Sa Huỳnh đến Đại Lãnh — nơi thiên nhiên và công trình hòa quyện tuyệt bích.",
    content: `
      <p>Việt Nam sở hữu một trong những tuyến đường sắt ven biển ngoạn mục bậc nhất châu Á. Hành trình tàu lướt êm bên những vách đá sừng sững, phía dưới là sóng biển vỗ rì rào bọt tung trắng xóa mang lại cảm giác ngỡ ngàng cho bất kỳ ai lần đầu được trải nghiệm.</p>

      <div class="article-inner-image">
        <img src="../images/blog-tau-ven-bien.jpg" alt="Đoàn tàu hỏa ôm sát bờ biển ngọc bích" />
        <span class="caption">Vẻ đẹp kỳ vĩ của đoàn tàu khi uốn mình theo bờ biển duyên hải miền Trung</span>
      </div>

      <h3>1. Cung đường đèo Cù Mông và vịnh Xuân Đài</h3>
      <p>Đoạn đường sắt nối Bình Định và Phú Yên mở ra khung cảnh mặt biển phẳng lặng như gương soi bóng những rặng dừa xanh mướt và những hòn đảo nhỏ nhấp nhô ngoài khơi xa.</p>

      <h3>2. Bãi biển Đại Lãnh dưới chân đèo Cả</h3>
      <p>Khi đoàn tàu chạy qua ga Đại Lãnh, bãi cát trắng mịn trải dài uốn cong mềm mại đón từng đợt sóng biển trong vắt như pha lê. Đây là góc chụp hình yêu thích của các nhiếp ảnh gia du lịch trong và ngoài nước.</p>

      <blockquote>
        "Đi tàu hỏa cho ta một góc nhìn rất khác về biển: không ồn ào vội vã, mà là sự chuyển động êm đềm như một thước phim điện ảnh quay chậm."
      </blockquote>
    `
  },
  {
    id: 3,
    title: "Đoàn tàu du lịch biển Sài Gòn — Nha Trang: Khởi đầu kỳ nghỉ dưỡng đẳng cấp",
    category: "Trải nghiệm",
    image: "../images/tau-sai-gon-nha-trang.png",
    date: "28/09/2026",
    readTime: "5 phút",
    author: "Lê Tuấn",
    authorRole: "Reviewer Du Lịch",
    excerpt: "Không gian nội thất hiện đại, hệ thống cách âm cao cấp và hành trình khởi hành ban đêm thuận tiện giúp bạn thức dậy ngay trước biển xanh Nha Trang.",
    content: `
      <p>Tuyến tàu du lịch SNT1/SNT2 kết nối TP. Hồ Chí Minh với vịnh biển Nha Trang thơ mộng là một trong những sản phẩm du lịch đường sắt được du khách gia đình và bạn trẻ ưa chuộng nhất hiện nay.</p>

      <div class="article-inner-image">
        <img src="../images/tau-sai-gon-nha-trang.png" alt="Đoàn tàu cao cấp SNT Sài Gòn đi Nha Trang" />
        <span class="caption">Đoàn tàu du lịch biển hiện đại với nội thất sang trọng bậc nhất</span>
      </div>

      <h3>1. Giờ chạy tàu tối ưu cho kỳ nghỉ cuối tuần</h3>
      <p>Tàu khởi hành từ ga Sài Gòn lúc 20:30 tối thứ Sáu, hành khách lên tàu nghỉ ngơi một giấc ngủ êm ái trên giường đệm cao cấp và thức dậy tại ga Nha Trang lúc 05:30 sáng hôm sau, sẵn sàng cho một ngày trọn vẹn tắm biển và thưởng thức hải sản.</p>

      <h3>2. Toa xe đóng mới hiện đại và tiện nghi</h3>
      <p>Nội thất toa xe được đóng bằng vật liệu composite chống cháy, hệ thống giảm xóc khí nén tiên tiến hạn chế tối đa rung lắc. Nhà vệ sinh tự hoại tiêu chuẩn quốc tế luôn giữ gìn sạch sẽ và thơm tho suốt chuyến đi.</p>
    `
  },

  /* ==================== MỤC 2: CẨM NANG DU LỊCH (3 BÀI) ==================== */
  {
    id: 4,
    title: "Kinh nghiệm đi tàu đêm Thống Nhất SE xuyên Việt: Chọn khoang giường nằm chuẩn xịn",
    category: "Cẩm nang",
    image: "../images/blog-khoang-tau.jpg",
    date: "08/10/2026",
    readTime: "7 phút",
    author: "Hoàng Minh",
    authorRole: "Travel Blogger",
    excerpt: "Bí quyết chọn khoang giường nằm êm ái, hành trang cần thiết và mẹo thư giãn trọn vẹn suốt chặng đường hơn 30 tiếng ngắm trọn vẻ đẹp Bắc - Nam.",
    content: `
      <p>Hành trình tàu hỏa Thống Nhất Bắc - Nam (SE1/SE2, SE3/SE4) dài hơn 1.726 km không chỉ đơn thuần là việc di chuyển từ điểm A đến điểm B, mà còn là một chuyến phiêu lưu văn hóa và ngắm nhìn sự biến chuyển kỳ diệu của cảnh sắc thiên nhiên non sông Việt Nam.</p>
      
      <div class="article-inner-image">
        <img src="../images/blog-khoang-tau.jpg" alt="Khoang giường nằm cao cấp ấm cúng trên tàu hỏa" />
        <span class="caption">Khoang giường nằm 4 chỗ ốp gỗ sang trọng với góc nhìn hoàng hôn thơ mộng</span>
      </div>

      <h3>1. Nên chọn loại chỗ nào cho hành trình dài?</h3>
      <p>Đối với hành trình xuyên Việt hoặc di chuyển qua đêm trên 12 tiếng, khoang 4 giường nằm mềm điều hòa (AnL) là sự lựa chọn lý tưởng nhất. Giường nằm êm ái, trang bị cổng sạc điện thoại USB tại từng vị trí, đèn đọc sách cá nhân và rèm che riêng tư giúp bạn có giấc ngủ sâu suốt đêm.</p>

      <h3>2. Hành lý và vật dụng cá nhân cần mang theo</h3>
      <p>Bạn nên chuẩn bị một túi nhỏ chứa đồ dùng thường xuyên: áo khoác mỏng hoặc khăn choàng (vì điều hòa ban đêm khá mát), dép lê đi trong toa, sạc dự phòng, bàn chải cá nhân và tai nghe chống ồn để thư giãn nghe nhạc ngắm bình minh.</p>

      <blockquote>
        "Thời khắc đẹp nhất trên tàu Thống Nhất là lúc bình minh ló rạng trên bờ biển miền Trung và khi hoàng hôn nhuộm vàng những cánh đồng lúa bạt ngàn qua khung cửa sổ toa tàu."
      </blockquote>

      <h3>3. Ẩm thực trên tàu và đồ ăn ga</h3>
      <p>Hiện nay toa hàng ăn của tàu SE phục vụ các suất ăn nóng hổi được đóng gói tiêu chuẩn cao cấp. Ngoài ra, khi tàu dừng tại các ga lớn (như Đồng Hới, Huế, Tam Kỳ, Diêu Trì), bạn có thể tranh thủ mua những món đặc sản địa phương nức tiếng thơm ngon.</p>
    `
  },
  {
    id: 5,
    title: "Mẹo săn vé tàu hỏa giá rẻ trực tuyến và chính sách ưu đãi năm 2026",
    category: "Cẩm nang",
    image: "../images/tau-du-lich-hue-da-nang.jpg",
    date: "01/10/2026",
    readTime: "5 phút",
    author: "Trung Tâm Vé Điện Tử",
    authorRole: "Bộ phận Chăm sóc khách hàng",
    excerpt: "Hướng dẫn chi tiết khung giờ mở bán vé khuyến mại, cách đặt vé tập thể giảm đến 15% và các điều kiện để hành khách được giảm giá vé tối đa.",
    content: `
      <p>Đi tàu hỏa vừa an toàn, ngắm cảnh đẹp lại tiết kiệm chi phí nếu bạn nắm rõ các chương trình ưu đãi và mẹo săn vé tàu thông minh từ Đường sắt Việt Nam.</p>

      <h3>1. Quy tắc mua vé càng sớm - Giá càng rẻ</h3>
      <p>Hành khách mua vé cá nhân trước ngày đi tàu từ 20 đến 39 ngày được giảm ngay 5% giá vé; mua trước từ 40 ngày trở lên được giảm đến 10% giá vé (áp dụng cho cự ly vận chuyển từ 800 km trở lên trên các tàu Thống Nhất).</p>

      <h3>2. Chính sách miễn giảm giá vé theo đối tượng</h3>
      <p>DSVN luôn thực hiện chính sách an sinh xã hội rộng rãi:</p>
      <ul>
        <li><strong>Trẻ em dưới 6 tuổi:</strong> Miễn vé 100% khi đi cùng người lớn.</li>
        <li><strong>Trẻ em từ 6 đến 10 tuổi:</strong> Giảm 25% giá vé.</li>
        <li><strong>Người cao tuổi (từ 60 tuổi trở lên):</strong> Giảm 15% giá vé.</li>
        <li><strong>Học sinh, Sinh viên:</strong> Giảm 10% giá vé suốt năm.</li>
        <li><strong>Người có công, thương bệnh binh:</strong> Giảm từ 30% đến 90% giá vé.</li>
      </ul>

      <blockquote>
        "Việc đặt vé trực tuyến trên website chính thức giúp hành khách chủ động chọn chỗ, thanh toán qua mã QR an toàn và không mất thêm bất kỳ chi phí trung gian nào."
      </blockquote>
    `
  },
  {
    id: 6,
    title: "Cẩm nang hành lý đi tàu hỏa: Quy định miễn cước 20kg và những điều cần biết",
    category: "Cẩm nang",
    image: "../images/screen11.png",
    date: "26/09/2026",
    readTime: "4 phút",
    author: "Ban An Toàn Vận Tải",
    authorRole: "Bộ phận Điều hành chạy tàu",
    excerpt: "Chi tiết kích thước kiện hành lý xách tay, danh mục đồ vật cấm mang lên tàu và dịch vụ gửi xe máy, hàng hóa cồng kềnh theo tàu hỏa.",
    content: `
      <p>Để chuyến đi diễn ra suôn sẻ, hành khách đi tàu cần lưu ý một số quy định về trọng lượng và kích thước hành lý xách tay theo quy chuẩn của Đường sắt Việt Nam.</p>

      <h3>1. Hạn mức hành lý miễn cước</h3>
      <p>Mỗi hành khách sở hữu vé tàu hợp lệ được mang theo tối đa <strong>20 kg</strong> hành lý xách tay miễn cước. Kích thước kiện hành lý không được vượt quá chiều dài 0.8m, chiều rộng 0.5m và thể tích không quá 0.16 m³ để vừa vặn với giá để hành lý phía trên chỗ ngồi.</p>

      <h3>2. Gửi hành lý ký gửi và xe máy</h3>
      <p>Nếu mang theo xe máy, xe đạp điện hoặc hàng hóa cồng kềnh, bạn nên làm thủ tục ký gửi tại phòng bưu điện/hành lý ở nhà ga trước giờ tàu chạy ít nhất 2 tiếng. Xe máy sẽ được rút cạn xăng và bọc bảo vệ chuyên dụng để đảm bảo tuyệt đối an toàn phòng cháy chữa cháy.</p>
    `
  },

  /* ==================== MỤC 3: ẨM THỰC ĐƯỜNG SẮT (3 BÀI) ==================== */
  {
    id: 7,
    title: "Khám phá ẩm thực 3 miền đặc sắc dọc theo các nhà ga và toa hàng ăn đường sắt",
    category: "Ẩm thực",
    image: "../images/blog-am-thuc.jpg",
    date: "05/10/2026",
    readTime: "4 phút",
    author: "Minh Trang",
    authorRole: "Phóng viên Văn hóa Ẩm thực",
    excerpt: "Từ tô phở bò nghi ngút khói, ly cà phê phin đậm đà ngắm đồng lúa, đến nem chua Thanh Hóa và cơm gà Tam Kỳ — hương vị gắn liền ký ức mỗi chuyến tàu.",
    content: `
      <p>Đối với những người yêu thích du lịch tàu hỏa, tiếng còi tàu vang lên kèm theo mùi hương thơm nức của các món ngon địa phương tại mỗi sân ga là một phần ký ức vô cùng thân thương và sống động.</p>
      
      <div class="article-inner-image">
        <img src="../images/blog-am-thuc.jpg" alt="Mâm ẩm thực Việt Nam nóng hổi bên khung cửa sổ tàu hỏa ngắm đồng lúa xanh" />
        <span class="caption">Thưởng thức tô phở bò bốc khói và ly cà phê sữa đá bên khung cửa sổ ngắm cánh đồng quê thanh bình</span>
      </div>

      <h3>1. Ga Thanh Hóa: Đậm đà nem chua truyền thống</h3>
      <p>Mỗi khi đoàn tàu dừng lại ga Thanh Hóa 5-10 phút, những bó nem chua xanh ngắt mùi lá chuối luôn là món quà được hành khách mua nhiều nhất. Vị chua thanh, ngọt thịt giòn giòn cùng lát tỏi ớt cay nồng ăn cùng bánh mì hay nhâm nhi trên toa tàu là trải nghiệm tuyệt vời.</p>

      <h3>2. Ga Tam Kỳ: Nức tiếng cơm gà xứ Quảng</h3>
      <p>Cơm gà Tam Kỳ vàng ươm hạt dẻo nấu từ nước luộc gà, thịt gà ta xé phay bóp hành răm thơm lừng chấm cùng chén muối ớt xanh là món ăn trưa không thể bỏ lỡ khi tàu qua dải đất Quảng Nam.</p>

      <blockquote>
        "Mỗi sân ga không chỉ là điểm đón trả khách, mà còn là một trạm dừng chân lưu giữ trọn vẹn văn hóa ẩm thực đặc sắc của từng vùng miền đất nước."
      </blockquote>

      <h3>3. Thực đơn toa ăn mới trên các đoàn tàu SE</h3>
      <p>DSVN đã hợp tác cùng các đơn vị cung cấp suất ăn chuyên nghiệp để chuẩn hóa thực đơn trên tàu: từ phở bò Hà Nội buổi sáng, cơm sườn nướng mật ong đến cà phê sữa đá đậm đà hương vị Sài Gòn phục vụ tận chỗ ngồi cho hành khách.</p>
    `
  },
  {
    id: 8,
    title: "Đặc sản sân ga: Hương vị nem chua Thanh Hóa và cơm gà Tam Kỳ nức tiếng gần xa",
    category: "Ẩm thực",
    image: "../images/screen14.png",
    date: "29/09/2026",
    readTime: "5 phút",
    author: "Vũ Hải Yến",
    authorRole: "Chuyên mục Văn hóa Việt",
    excerpt: "Những món ăn dân dã gắn bó hàng chục năm với tiếng còi tàu: câu chuyện đằng sau những gói nem chua nóng hổi và gói xôi khúc lá chuối thơm lừng.",
    content: `
      <p>Hình ảnh những cô chú bán hàng niềm nở mang theo những mẹt đặc sản thơm nức mỗi khi tàu táp vào ga đã trở thành nét đẹp văn hóa độc đáo của ngành đường sắt Việt Nam.</p>

      <h3>1. Nem chua nướng và nem chua rơm xứ Thanh</h3>
      <p>Khác với các loại nem thành phố, nem mua tại ga Thanh Hóa có độ giòn sần sật của bì lợn thái chỉ, vị chua dịu lên men tự nhiên quyện với lá ổi thơm nồng. Nhiều hành khách đi tàu Bắc - Nam mua cả trăm chiếc về làm quà cho người thân.</p>

      <h3>2. Bánh ít lá gai Bình Định và nho tươi Ninh Thuận</h3>
      <p>Khi tàu lăn bánh qua ga Diêu Trì và Tháp Chàm, những chiếc bánh ít lá gai dẻo quánh vị béo ngậy của nhân dừa đậu xanh cùng những chùm nho đỏ mọng ngọt thanh từ các vườn nho Ninh Thuận luôn làm nức lòng du khách phương xa.</p>
    `
  },
  {
    id: 9,
    title: "Thưởng thức cà phê phin ngắm bình minh và suất ăn chuẩn hàng không trên tàu SE",
    category: "Ẩm thực",
    image: "../images/screen15.png",
    date: "22/09/2026",
    readTime: "4 phút",
    author: "Đức Trọng",
    authorRole: "Food Reviewer",
    excerpt: "Đánh giá chi tiết thực đơn suất ăn nóng trên tàu SE3/SE4: từ khay cơm bò sốt tiêu đen nóng hổi đến ly trà sen thơm thanh khi tàu qua đèo Cả.",
    content: `
      <p>Những năm gần đây, dịch vụ ẩm thực trên các đoàn tàu Thống Nhất chất lượng cao đã có bước chuyển mình mạnh mẽ với quy trình đóng gói suất ăn một chiều hợp vệ sinh, giữ nhiệt hoàn hảo.</p>

      <h3>1. Cà phê sáng bên khung cửa sổ di động</h3>
      <p>Không có trải nghiệm nào thi vị hơn việc đón ánh nắng đầu tiên của ngày mới, nghe tiếng ray xình xịch đều đặn và nhâm nhi ly cà phê phin đậm đặc thơm ngào ngạt.</p>

      <h3>2. Thực đơn đa dạng theo mùa</h3>
      <p>Suất ăn trưa và ăn tối gồm cơm trắng nóng hổi kèm món mặn (cá kho tộ, gà kho sả, thịt kho tàu), canh rau theo mùa và món tráng miệng trái cây tươi. Mọi khẩu phần đều được bảo quản ở nhiệt độ tiêu chuẩn và hâm nóng trước khi phục vụ.</p>
    `
  },

  /* ==================== MỤC 4: TIN TỨC & SỰ KIỆN (3 BÀI) ==================== */
  {
    id: 10,
    title: "DSVN đẩy mạnh chuyển đổi số: Thẻ lên tàu điện tử và cổng soát vé QR tự động toàn quốc",
    category: "Tin tức",
    image: "../images/blog-soat-ve-qr.jpg",
    date: "09/10/2026",
    readTime: "4 phút",
    author: "Thông tấn DSVN",
    authorRole: "Ban Công nghệ Thông tin",
    excerpt: "Hành khách chỉ cần quét mã QR trên điện thoại di động tại cổng soát vé thông minh để vào ga lên tàu mà không cần in vé giấy.",
    content: `
      <p>Trong nỗ lực nâng cao trải nghiệm hành khách và hướng tới mô hình đường sắt thông minh - thân thiện với môi trường, Tập đoàn Đường sắt Quốc gia Việt Nam đã đồng loạt triển khai hệ thống cổng soát vé tự động không tiếp xúc tại các nhà ga trọng điểm trên toàn quốc.</p>

      <div class="article-inner-image">
        <img src="../images/blog-soat-ve-qr.jpg" alt="Cổng soát vé tự động quét mã QR thông minh tại ga tàu" />
        <span class="caption">Hành khách quét mã QR trên điện thoại tại cổng soát vé thông minh hiện đại</span>
      </div>

      <h3>1. Tiện ích Thẻ lên tàu điện tử (E-Boarding Pass)</h3>
      <p>Ngay sau khi thanh toán thành công, hành khách sẽ nhận được Thẻ lên tàu điện tử có gắn mã QR động qua tin nhắn SMS và Email. Thông tin toa, số ghế, giờ tàu và hành trình đều được hiển thị rõ ràng, hỗ trợ lưu vào Apple Wallet hoặc Google Wallet.</p>

      <h3>2. Tiết kiệm thời gian và bảo vệ môi trường</h3>
      <p>Việc không bắt buộc in vé giấy giúp tiết kiệm hàng triệu tờ vé mỗi năm, giảm ùn tắc tại sảnh chờ ga giờ cao điểm và loại bỏ hoàn toàn nguy cơ mất vé hay rách vé của hành khách.</p>
    `
  },
  {
    id: 11,
    title: "Đường sắt Việt Nam mở bán vé tàu Tết 2026: Ưu đãi giảm giá vé khứ hồi đến 10%",
    category: "Tin tức",
    image: "../images/blog-ve-tau-tet.jpg",
    date: "06/10/2026",
    readTime: "5 phút",
    author: "Trung Tâm Vé Điện Tử",
    authorRole: "Phòng Kinh doanh Vận tải",
    excerpt: "DSVN chính thức mở bán vé tàu phục vụ Tết Nguyên đán 2026 qua website và ứng dụng, áp dụng nhiều chính sách giảm giá cho sinh viên, công nhân và vé khứ hồi.",
    content: `
      <p>Tập đoàn Đường sắt Quốc gia Việt Nam thông báo kế hoạch tổ chức chạy tàu và mở bán vé tàu Tết Nguyên đán 2026 nhằm đáp ứng tối đa nhu cầu sum họp gia đình của người dân cả nước.</p>

      <div class="article-inner-image">
        <img src="../images/blog-ve-tau-tet.jpg" alt="Không khí mở bán vé tàu Tết vui tươi tại ga tàu" />
        <span class="caption">Hành khách nô nức đón những chuyến tàu sum vầy đoàn tụ đầu xuân năm mới</span>
      </div>

      <h3>1. Các hình thức đặt vé thuận tiện</h3>
      <p>Hành khách có thể mua vé trực tuyến qua website bán vé chính thức <code>dsvn.vn</code>, thanh toán qua mã QR tài khoản ngân hàng hoặc ví điện tử. Hệ thống được nâng cấp hạ tầng đám mây đảm bảo xử lý đồng thời hàng chục nghìn lượt truy cập không bị nghẽn mạng.</p>

      <h3>2. Chính sách ưu đãi đặc biệt dịp Tết</h3>
      <p>Giảm 5% - 10% giá vé cho hành khách mua vé khứ hồi, giảm 20% cho sinh viên các trường đại học cao đẳng về quê sớm, và tiếp tục duy trì chính sách miễn vé cho trẻ em dưới 6 tuổi.</p>
    `
  },
  {
    id: 12,
    title: "Đưa vào khai thác đoàn tàu đóng mới chất lượng cao thế hệ mới trên tuyến Bắc — Nam",
    category: "Tin tức",
    image: "../images/screen10.png",
    date: "25/09/2026",
    readTime: "4 phút",
    author: "Ban Đầu Tư Phương Tiện",
    authorRole: "Đội ngũ Kỹ thuật Đường sắt",
    excerpt: "Toa xe thế hệ mới sử dụng hệ thống giảm chấn túi khí, cách âm chống ồn vượt trội và hệ thống sạc không dây hiện đại tại từng ghế ngồi.",
    content: `
      <p>Nhằm không ngừng hiện đại hóa đội tàu và mang lại sự êm ái tối đa cho hành khách, Tập đoàn Đường sắt Quốc gia Việt Nam đã chính thức tiếp nhận và đưa vào vận hành đoàn tàu thế hệ mới đóng hoàn toàn tại Nhà máy Xe lửa Dĩ An.</p>

      <h3>1. Công nghệ giảm rung lắc và cách âm tiên tiến</h3>
      <p>Toa xe áp dụng công nghệ lò xo không khí nhập khẩu, giúp hấp thụ chấn động từ đường ray khi tàu chạy qua các khúc cua hay đường giao cắt, giảm thiểu tối đa cảm giác mệt mỏi cho hành khách đi đường dài.</p>

      <h3>2. Nội thất thân thiện môi trường</h3>
      <p>Toàn bộ ghế ngồi bọc da cao cấp, hệ thống điều hòa tự động điều chỉnh nhiệt độ theo số lượng người trong toa xe và hệ thống đèn LED chiếu sáng dịu mắt tiết kiệm năng lượng.</p>
    `
  }
];

// Bản sao lưu dữ liệu gốc để luôn có sẵn 12 bài mẫu đẹp
const DANH_SACH_BAI_VIET_GOC = JSON.parse(JSON.stringify(DANH_SACH_BAI_VIET));
if (typeof window !== 'undefined') {
  window.DANH_SACH_BAI_VIET_GOC = DANH_SACH_BAI_VIET_GOC;
  window.DANH_SACH_BAI_VIET = DANH_SACH_BAI_VIET;
}

// Đồng bộ danh sách bài viết từ LocalStorage hoặc Supabase
function dongBoBaiVietTuStorage() {
  try {
    const localData = localStorage.getItem('dsvn_admin_articles');
    if (localData) {
      const parsed = JSON.parse(localData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Lọc các bài viết không phải nháp (published)
        const publishedList = parsed.filter(item => item.status !== 'draft');
        if (publishedList.length > 0) {
          DANH_SACH_BAI_VIET = publishedList;
          if (typeof window !== 'undefined') {
            window.DANH_SACH_BAI_VIET = DANH_SACH_BAI_VIET;
          }
          return;
        }
      }
    }
  } catch (e) {
    console.warn('Lỗi đọc bài viết từ local storage:', e);
  }
  // Mặc định luôn dùng đủ danh sách bài mẫu gốc
  DANH_SACH_BAI_VIET = JSON.parse(JSON.stringify(DANH_SACH_BAI_VIET_GOC));
  if (typeof window !== 'undefined') {
    window.DANH_SACH_BAI_VIET = DANH_SACH_BAI_VIET;
  }
}

// Khởi tạo Blog khi tải trang
document.addEventListener('DOMContentLoaded', () => {
  dongBoBaiVietTuStorage();
  khoiTaoBlog();
  dongBoTuSupabaseNeuCo();
});

// Thử kéo dữ liệu mới nhất từ Supabase nếu có cấu hình
async function dongBoTuSupabaseNeuCo() {
  try {
    let cfg = {
      url: 'https://oalpihctbftwcgjlhgum.supabase.co',
      key: 'sb_publishable_Zw4276QvpccHUvDBdHFxhg_qCXvjHD7'
    };
    const cfgStr = localStorage.getItem('dsvn_supabase_config');
    if (cfgStr) {
      try {
        const parsed = JSON.parse(cfgStr);
        if (parsed.url && parsed.key) cfg = parsed;
      } catch (e) {}
    }

    if (cfg.url && cfg.key && window.supabase) {
      const client = window.supabase.createClient(cfg.url, cfg.key);
      const { data, error } = await client
        .from('articles')
        .select('*')
        .order('id', { ascending: false });

      if (!error && data && data.length > 0) {
        const mappedData = data.map(item => ({
          id: item.id,
          title: item.title,
          category: item.category,
          image: item.image,
          date: item.date,
          readTime: item.readtime || item.readTime || '5 phút',
          author: item.author,
          authorRole: item.authorrole || item.authorRole || 'Ban Biên Tập DSVN',
          excerpt: item.excerpt,
          content: item.content,
          status: item.status || 'published'
        }));
        localStorage.setItem('dsvn_admin_articles', JSON.stringify(mappedData));
        const publishedList = mappedData.filter(item => item.status !== 'draft');
        if (publishedList.length > 0) {
          DANH_SACH_BAI_VIET = publishedList;
          if (typeof window !== 'undefined') {
            window.DANH_SACH_BAI_VIET = DANH_SACH_BAI_VIET;
          }
          // Cập nhật lại giao diện
          khoiTaoBlog();
        }
      }
    }
  } catch (err) {
    console.warn('Supabase auto-sync bỏ qua:', err);
  }
}

function khoiTaoBlog() {
  // Nếu có container blog trang chủ
  const homeContainer = document.getElementById('homeBlogContainer');
  if (homeContainer) {
    renderHomeBlog(homeContainer);
  }

  // Nếu là trang chuyên mục Blog
  const blogListContainer = document.getElementById('blogListContainer');
  if (blogListContainer) {
    renderBlogPage(blogListContainer, DANH_SACH_BAI_VIET);
    khoiTaoBoLocBlog();
  }
}

/**
 * Render 3 bài viết nổi bật trên Trang Chủ (Đại diện 3 chuyên mục khác nhau)
 */
function renderHomeBlog(container) {
  // Lấy 3 bài tiêu biểu của 3 chuyên mục: Trải nghiệm, Cẩm nang, Ẩm thực
  const baivietHienThi = [
    DANH_SACH_BAI_VIET.find(b => b.id === 1),
    DANH_SACH_BAI_VIET.find(b => b.id === 4),
    DANH_SACH_BAI_VIET.find(b => b.id === 7)
  ].filter(Boolean);
  container.innerHTML = baivietHienThi.map(bv => `
    <article class="blog-card" onclick="moDocBaiViet(${bv.id})" title="Nhấp để đọc bài viết">
      <div class="blog-card-media">
        <img src="${bv.image}" alt="${bv.title}" class="blog-card-img" loading="lazy" />
        <span class="blog-category-badge cat-${slugifyCategory(bv.category)}">${bv.category}</span>
        <div class="blog-card-glass-shine"></div>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta-row">
          <span class="blog-meta-item">
            <span class="icon">calendar_today</span>
            ${bv.date}
          </span>
          <span class="blog-meta-dot">•</span>
          <span class="blog-meta-item">
            <span class="icon">schedule</span>
            ${bv.readTime}
          </span>
        </div>
        <h3 class="blog-card-title">${bv.title}</h3>
        <p class="blog-card-excerpt">${bv.excerpt}</p>
        <div class="blog-card-footer">
          <div class="blog-author">
            <span class="blog-author-avatar"><span class="icon" style="font-size:16px">person</span></span>
            <span>${bv.author}</span>
          </div>
          <span class="blog-read-more-link">
            <span>Đọc tiếp</span>
            <span class="icon" style="font-size:16px">arrow_forward</span>
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Render danh sách bài viết trên trang Blog chuyên biệt
 */
function renderBlogPage(container, danhSach) {
  if (danhSach.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 16px; border: 1.5px dashed #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
        <span class="icon" style="font-size: 52px; color: #94a3b8; margin-bottom: 14px; display:inline-block;">search_off</span>
        <h3 style="font-size: 19px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Không tìm thấy bài viết phù hợp</h3>
        <p style="font-size: 14.5px; color: #64748b; margin: 0;">Vui lòng thử tìm kiếm với từ khóa khác hoặc bấm chọn chuyên mục "Tất cả bài viết".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = danhSach.map(bv => `
    <article class="blog-card" onclick="moDocBaiViet(${bv.id})" title="Nhấp để đọc bài viết">
      <div class="blog-card-media">
        <img src="${bv.image}" alt="${bv.title}" class="blog-card-img" loading="lazy" />
        <span class="blog-category-badge cat-${slugifyCategory(bv.category)}">${bv.category}</span>
        <div class="blog-card-glass-shine"></div>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta-row">
          <span class="blog-meta-item">
            <span class="icon">calendar_today</span>
            ${bv.date}
          </span>
          <span class="blog-meta-dot">•</span>
          <span class="blog-meta-item">
            <span class="icon">schedule</span>
            ${bv.readTime}
          </span>
        </div>
        <h3 class="blog-card-title">${bv.title}</h3>
        <p class="blog-card-excerpt">${bv.excerpt}</p>
        <div class="blog-card-footer">
          <div class="blog-author">
            <span class="blog-author-avatar"><span class="icon" style="font-size:16px">person</span></span>
            <span>${bv.author}</span>
          </div>
          <span class="blog-read-more-link">
            <span>Đọc tiếp</span>
            <span class="icon" style="font-size:16px">arrow_forward</span>
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

function slugifyCategory(cat) {
  if (!cat) return 'all';
  const str = cat.toLowerCase();
  if (str.includes('trải nghiệm')) return 'trai-nghiem';
  if (str.includes('cẩm nang')) return 'cam-nang';
  if (str.includes('ẩm thực')) return 'am-thuc';
  if (str.includes('tin tức')) return 'tin-tuc';
  return 'default';
}

/**
 * Khởi tạo bộ lọc chuyên mục và tìm kiếm trên trang Blog
 */
function khoiTaoBoLocBlog() {
  const tabButtons = document.querySelectorAll('.category-tab-btn');
  const searchInput = document.getElementById('blogSearchInput');
  const container = document.getElementById('blogListContainer');
  const heading = document.getElementById('blogListHeading');
  const subheading = document.getElementById('blogListSubheading');

  let chuyenMucHienTai = 'all';

  // Cập nhật số đếm trên các tab
  function capNhatBadgeSoLuong() {
    tabButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category') || 'all';
      let count = 0;
      if (cat === 'all') {
        count = DANH_SACH_BAI_VIET.length;
      } else {
        const cur = cat.toLowerCase().trim();
        count = DANH_SACH_BAI_VIET.filter(bv => {
          const bCat = bv.category.toLowerCase().trim();
          return bCat === cur || bCat.includes(cur) || cur.includes(bCat);
        }).length;
      }
      const badge = btn.querySelector('.tab-count-badge');
      if (badge) {
        badge.textContent = count;
      }
    });
  }

  function apDungBoLoc() {
    const tuKhoa = searchInput ? searchInput.value.trim().toLowerCase() : '';
    
    let ketQua = DANH_SACH_BAI_VIET.filter(bv => {
      let matchCat = false;
      if (chuyenMucHienTai === 'all') {
        matchCat = true;
      } else {
        const cur = chuyenMucHienTai.toLowerCase().trim();
        const bCat = bv.category.toLowerCase().trim();
        matchCat = (bCat === cur) || bCat.includes(cur) || cur.includes(bCat);
      }
      const matchSearch = !tuKhoa || 
        bv.title.toLowerCase().includes(tuKhoa) || 
        bv.excerpt.toLowerCase().includes(tuKhoa) || 
        bv.author.toLowerCase().includes(tuKhoa);
      return matchCat && matchSearch;
    });

    // Cập nhật tiêu đề danh sách
    if (heading) {
      if (chuyenMucHienTai === 'all') {
        heading.textContent = `Tất Cả Bài Viết (${ketQua.length})`;
      } else {
        const activeBtn = document.querySelector('.category-tab-btn.active span');
        const tabTitle = activeBtn ? activeBtn.textContent.trim() : chuyenMucHienTai;
        heading.textContent = `Chuyên mục: ${tabTitle} (${ketQua.length})`;
      }
    }

    if (subheading) {
      if (tuKhoa) {
        subheading.textContent = `Kết quả tìm kiếm cho từ khóa: "${tuKhoa}"`;
      } else {
        subheading.textContent = `Cập nhật các bài viết mới nhất từ Đường sắt Việt Nam`;
      }
    }

    if (container) {
      renderBlogPage(container, ketQua);
    }
  }

  // Khởi chạy đếm badge ban đầu
  capNhatBadgeSoLuong();

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      chuyenMucHienTai = btn.getAttribute('data-category') || 'all';
      apDungBoLoc();

      // Cuộn mượt xuống phần danh sách bài viết
      if (heading) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      apDungBoLoc();
    });
  }
}

/**
 * Mở modal đọc bài viết chi tiết
 */
window.moDocBaiViet = function(id) {
  const baiViet = DANH_SACH_BAI_VIET.find(b => b.id === Number(id));
  if (!baiViet) return;

  let modal = document.getElementById('articleReaderModal');
  if (!modal) {
    // Tạo modal nếu chưa có trong DOM
    modal = document.createElement('div');
    modal.id = 'articleReaderModal';
    modal.className = 'article-reader-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="article-reader-card">
      <div class="article-reader-header">
        <div class="reader-header-left">
          <span class="reader-header-badge cat-${slugifyCategory(baiViet.category)}">${baiViet.category}</span>
          <span class="reader-header-reading-time"><span class="icon" style="font-size:15px">schedule</span> ${baiViet.readTime} đọc</span>
        </div>
        <button type="button" class="btn-close-modal" onclick="dongDocBaiViet()" aria-label="Đóng bài viết">
          <span class="icon">close</span>
        </button>
      </div>
      <div class="article-reader-body">
        <h1 class="article-modal-title">${baiViet.title}</h1>
        <div class="article-modal-meta">
          <div class="article-meta-author">
            <span class="blog-author-avatar"><span class="icon" style="font-size:18px">person</span></span>
            <div>
              <div style="font-weight:700;color:#0f172a;line-height:1.2;">${baiViet.author}</div>
              <div style="font-size:12px;color:#64748b;">${baiViet.authorRole} • Đường Sắt Việt Nam</div>
            </div>
          </div>
          <div class="article-meta-actions">
            <button type="button" class="btn-article-action" onclick="copyArticleLink('${baiViet.title}')" title="Sao chép liên kết">
              <span class="icon">share</span>
              <span>Chia sẻ</span>
            </button>
            <button type="button" class="btn-article-action" onclick="thichBaiViet(this)" title="Thích bài viết">
              <span class="icon">favorite_border</span>
              <span class="like-count">128</span>
            </button>
          </div>
        </div>

        <div class="article-modal-lead">${baiViet.excerpt}</div>

        <div class="article-modal-cover-wrapper">
          <img src="${baiViet.image}" alt="${baiViet.title}" class="article-modal-cover" />
        </div>

        <div class="article-modal-content">
          ${baiViet.content}
        </div>

        <!-- Call to action đặt vé -->
        <div class="article-cta-box">
          <div class="article-cta-left">
            <span class="icon cta-train-icon">train</span>
            <div>
              <h4 class="article-cta-title">Sẵn sàng trải nghiệm hành trình này?</h4>
              <p class="article-cta-desc">Đặt vé trực tuyến an toàn, nhanh chóng và nhận ưu đãi giảm giá lên tới 10% tại DSVN.</p>
            </div>
          </div>
          <a href="index.html" class="btn-article-cta">
            <span>Tìm vé ngay</span>
            <span class="icon">arrow_forward</span>
          </a>
        </div>

        <div class="article-reader-footer-bar">
          <div style="font-size:13px;color:#64748b;display:flex;align-items:center;gap:6px">
            <span class="icon" style="font-size:16px;color:#10b981">verified</span>
            <span>Nội dung chính thức từ Tập đoàn Đường sắt Quốc gia Việt Nam</span>
          </div>
          <button type="button" class="btn-close-article-footer" onclick="dongDocBaiViet()">Đóng bài viết</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Bấm nền ngoài để đóng
  modal.onclick = function(e) {
    if (e.target === modal) {
      dongDocBaiViet();
    }
  };
};

window.dongDocBaiViet = function() {
  const modal = document.getElementById('articleReaderModal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
};

/**
 * Tương tác thích bài viết
 */
window.thichBaiViet = function(btn) {
  const icon = btn.querySelector('.icon');
  const countSpan = btn.querySelector('.like-count');
  let count = parseInt(countSpan.textContent, 10) || 128;
  
  if (btn.classList.contains('liked')) {
    btn.classList.remove('liked');
    icon.textContent = 'favorite_border';
    countSpan.textContent = count - 1;
  } else {
    btn.classList.add('liked');
    icon.textContent = 'favorite';
    countSpan.textContent = count + 1;
    if (window.hienThiThongBao) {
      window.hienThiThongBao('Cảm ơn bạn đã yêu thích bài viết!', 'success');
    }
  }
};

/**
 * Sao chép liên kết chia sẻ
 */
window.copyArticleLink = function(title) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(window.location.href);
  }
  if (window.hienThiThongBao) {
    window.hienThiThongBao(`Đã sao chép liên kết bài viết: "${title}" vào clipboard!`, 'success');
  } else {
    alert(`Đã sao chép liên kết bài viết: "${title}"`);
  }
};

/**
 * Đăng ký nhận bản tin khuyến mại
 */
window.dangKyNhanBanTin = function(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput || !emailInput.value.trim()) {
    if (window.hienThiThongBao) window.hienThiThongBao('Vui lòng nhập địa chỉ email hợp lệ!', 'warning');
    return false;
  }

  if (window.hienThiThongBao) {
    window.hienThiThongBao(`Đã đăng ký nhận bản tin thành công cho email: ${emailInput.value.trim()}`, 'success');
  }
  emailInput.value = '';
  return false;
};
