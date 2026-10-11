/**
 * DSVN - Tập đoàn Đường sắt Quốc gia Việt Nam
 * File: js/admin-blog.js
 * Mô tả: Logic điều hành Trang Quản trị Cẩm Nang & Blog du lịch, Tích hợp Supabase & LocalStorage
 */

// Key lưu trữ trong LocalStorage
const STORAGE_CONFIG_KEY = 'dsvn_supabase_config';
const STORAGE_ARTICLES_KEY = 'dsvn_admin_articles';

// Trạng thái ứng dụng
let supabaseClient = null;
let danhSachBaiVietHienTai = [];
let dangChinhSuaId = null;

// Khởi động khi tải xong trang
document.addEventListener('DOMContentLoaded', () => {
  khoiTaoSupabase();
  khoiTaoSuKien();
  taiDuLieuVaHienThi();
});

/**
 * 1. KHỞI TẠO VÀ KẾT NỐI SUPABASE
 */
function layCauHinhSupabase() {
  const configStr = localStorage.getItem(STORAGE_CONFIG_KEY);
  if (configStr) {
    try {
      return JSON.parse(configStr);
    } catch (e) {
      console.error('Lỗi phân tích cấu hình Supabase:', e);
    }
  }
  return {
    url: 'https://oalpihctbftwcgjlhgum.supabase.co',
    key: 'sb_publishable_Zw4276QvpccHUvDBdHFxhg_qCXvjHD7',
    bucket: 'blog-images'
  };
}

function khoiTaoSupabase() {
  const cfg = layCauHinhSupabase();
  const statusPill = document.getElementById('supabaseStatusPill');
  const statusText = document.getElementById('supabaseStatusText');
  const statusDot = document.getElementById('supabaseStatusDot');

  if (cfg.url && cfg.key && window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(cfg.url, cfg.key);
      if (statusDot) statusDot.classList.add('connected');
      if (statusText) statusText.textContent = 'Máy chủ: Trực tuyến';
    } catch (err) {
      console.error('Không thể tạo kết nối máy chủ:', err);
      if (statusDot) statusDot.classList.remove('connected');
      if (statusText) statusText.textContent = 'Máy chủ: Gián đoạn';
    }
  } else {
    supabaseClient = null;
    if (statusDot) statusDot.classList.remove('connected');
    if (statusText) statusText.textContent = 'Bộ nhớ: Cục bộ';
  }
}

/**
 * 2. TẢI DỮ LIỆU BÀI VIẾT (TỪ SUPABASE HOẶC LOCALSTORAGE / FALLBACK MẪU)
 */
async function taiDuLieuVaHienThi() {
  const loadingIndicator = document.getElementById('tableLoading');
  if (loadingIndicator) loadingIndicator.style.display = 'block';

  let articles = [];

  // Thử tải từ Supabase nếu có client
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('articles')
        .select('*')
        .order('id', { ascending: false });

      if (!error && data && data.length > 0) {
        articles = data.map(item => ({
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
        // Đồng bộ bản sao vào local để trang ngoài đọc mượt
        localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(articles));
      } else if (error) {
        console.warn('Lỗi đọc dữ liệu từ Supabase, chuyển sang bộ nhớ cục bộ:', error.message);
      }
    } catch (err) {
      console.warn('Không thể truy vấn Supabase:', err);
    }
  }

  // Nếu Supabase chưa có hoặc chưa kết nối, đọc từ LocalStorage
  if (articles.length === 0) {
    const localData = localStorage.getItem(STORAGE_ARTICLES_KEY);
    if (localData) {
      try {
        articles = JSON.parse(localData);
      } catch (e) {
        articles = [];
      }
    }
  }

  // Nếu LocalStorage cũng chưa có hoặc rỗng, luôn nạp đầy đủ 12 bài mẫu đẹp từ blog.js
  const dsGoc = window.DANH_SACH_BAI_VIET_GOC || window.DANH_SACH_BAI_VIET || [];
  if ((!articles || articles.length === 0) && dsGoc.length > 0) {
    articles = JSON.parse(JSON.stringify(dsGoc));
    localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(articles));
  }

  danhSachBaiVietHienTai = articles;
  if (loadingIndicator) loadingIndicator.style.display = 'none';

  capNhatThongKe();
  hienThiBangBaiViet();
}

/**
 * Khôi phục lại 12 bài viết cẩm nang mẫu ban đầu
 */
window.khoiPhucBaiMau = function() {
  const dsGoc = window.DANH_SACH_BAI_VIET_GOC || window.DANH_SACH_BAI_VIET || [];
  if (dsGoc.length > 0) {
    danhSachBaiVietHienTai = JSON.parse(JSON.stringify(dsGoc));
    localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(danhSachBaiVietHienTai));
    capNhatThongKe();
    hienThiBangBaiViet();
    thongBao('Đã khôi phục lại toàn bộ 12 bài viết cẩm nang mẫu đẹp!', 'success');
  }
};

/**
 * 3. HIỂN THỊ DỮ LIỆU LÊN BẢNG VÀ THỐNG KÊ
 */
function capNhatThongKe() {
  const totalEl = document.getElementById('statTotalArticles');
  const pubEl = document.getElementById('statPublishedArticles');
  const draftEl = document.getElementById('statDraftArticles');
  const catEl = document.getElementById('statCategories');

  const total = danhSachBaiVietHienTai.length;
  const published = danhSachBaiVietHienTai.filter(a => a.status !== 'draft').length;
  const draft = total - published;

  const categories = new Set(danhSachBaiVietHienTai.map(a => a.category).filter(Boolean));

  if (totalEl) totalEl.textContent = total;
  if (pubEl) pubEl.textContent = published;
  if (draftEl) draftEl.textContent = draft;
  if (catEl) catEl.textContent = categories.size;
}

function hienThiBangBaiViet() {
  const tbody = document.getElementById('articlesTableBody');
  const searchInput = document.getElementById('adminSearchInput');
  const catSelect = document.getElementById('adminCategoryFilter');
  const countBadge = document.getElementById('filterCountBadge');

  if (!tbody) return;

  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const filterCat = catSelect ? catSelect.value : 'all';

  const filtered = danhSachBaiVietHienTai.filter(item => {
    const matchCat = (filterCat === 'all') || (item.category === filterCat);
    const matchKw = !keyword ||
      (item.title && item.title.toLowerCase().includes(keyword)) ||
      (item.author && item.author.toLowerCase().includes(keyword)) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(keyword));
    return matchCat && matchKw;
  });

  if (countBadge) countBadge.textContent = `${filtered.length} bài`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center;padding:48px 20px;color:#64748b;">
          <span class="icon" style="font-size:42px;color:#cbd5e1;display:block;margin-bottom:10px">newspaper</span>
          <strong style="font-size:15px;color:#334155;display:block">Không tìm thấy bài viết nào</strong>
          <span style="font-size:13px">Thử tìm bằng từ khóa khác hoặc bấm "+ Viết bài mới" để tạo bài viết đầu tiên.</span>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isDraft = item.status === 'draft';
    const statusHtml = isDraft
      ? `<span class="table-status-badge draft"><span class="icon" style="font-size:14px">edit_note</span> Bản nháp</span>`
      : `<span class="table-status-badge published"><span class="icon" style="font-size:14px">check_circle</span> Đã xuất bản</span>`;

    const imgThumb = item.image || '../images/tau_1.png';

    return `
      <tr data-id="${item.id}">
        <td style="font-weight:700;color:#64748b;font-size:13px">#${item.id}</td>
        <td>
          <div class="table-article-info">
            <img src="${imgThumb}" alt="${item.title}" class="table-article-thumb" onerror="this.src='../images/tau_1.png'" />
            <div class="table-article-text">
              <a href="javascript:void(0)" onclick="xemThuBaiViet(${item.id})" class="table-article-title">${item.title}</a>
              <span class="table-article-excerpt">${item.excerpt || 'Chưa có trích dẫn tóm tắt'}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="table-cat-badge">${item.category || 'Tổng hợp'}</span>
        </td>
        <td>
          <div style="font-weight:600;color:#1e293b">${item.author || 'DSVN'}</div>
          <div style="font-size:12px;color:#64748b">${item.authorRole || 'Ban Biên Tập'}</div>
        </td>
        <td>
          <div style="color:#334155">${item.date || 'Hôm nay'}</div>
          <div style="font-size:12px;color:#64748b">${item.readTime || '5 phút'}</div>
        </td>
        <td>${statusHtml}</td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn-action-icon" title="Xem thử bài viết" onclick="xemThuBaiViet(${item.id})">
              <span class="icon" style="font-size:18px">visibility</span>
            </button>
            <button type="button" class="btn-action-icon edit" title="Chỉnh sửa bài viết" onclick="moFormSuaBaiViet(${item.id})">
              <span class="icon" style="font-size:18px">edit</span>
            </button>
            <button type="button" class="btn-action-icon delete" title="Xóa bài viết" onclick="xacNhanXoaBaiViet(${item.id})">
              <span class="icon" style="font-size:18px">delete</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * 4. QUẢN LÝ FORM SOẠN THẢO BÀI VIẾT
 */
function moFormTaoMoi() {
  dangChinhSuaId = null;
  document.getElementById('editorModalTitle').textContent = 'Thêm Bài Viết Cẩm Nang Mới';
  document.getElementById('articleForm').reset();
  document.getElementById('articleImagePreview').src = '../images/tau_1.png';
  document.getElementById('articleImageUrl').value = '../images/tau_1.png';
  document.getElementById('articleStatus').value = 'published';
  const modal = document.getElementById('articleEditorModal');
  modal.classList.add('open');
  const body = modal.querySelector('.admin-modal-body');
  if (body) body.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function moFormSuaBaiViet(id) {
  const item = danhSachBaiVietHienTai.find(a => a.id == id);
  if (!item) return;

  dangChinhSuaId = id;
  document.getElementById('editorModalTitle').textContent = `Chỉnh Sửa Bài Viết #${id}`;
  
  document.getElementById('articleTitle').value = item.title || '';
  document.getElementById('articleCategory').value = item.category || 'Trải nghiệm';
  document.getElementById('articleAuthor').value = item.author || 'Ban Biên Tập DSVN';
  document.getElementById('articleAuthorRole').value = item.authorRole || 'Đội ngũ truyền thông';
  document.getElementById('articleReadTime').value = item.readTime || '5 phút';
  document.getElementById('articleImageUrl').value = item.image || '';
  document.getElementById('articleImagePreview').src = item.image || '../images/tau_1.png';
  document.getElementById('articleExcerpt').value = item.excerpt || '';
  document.getElementById('articleContent').value = item.content ? item.content.trim() : '';
  document.getElementById('articleStatus').value = item.status === 'draft' ? 'draft' : 'published';

  const modal = document.getElementById('articleEditorModal');
  modal.classList.add('open');
  const body = modal.querySelector('.admin-modal-body');
  if (body) body.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function dongFormEditor() {
  const modal = document.getElementById('articleEditorModal');
  if (modal) modal.classList.remove('open');
  dangChinhSuaId = null;
  document.body.style.overflow = '';
}

/**
 * Hỗ trợ chèn định dạng HTML vào khung soạn thảo
 */
window.chenDinhDang = function(type) {
  const textarea = document.getElementById('articleContent');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  let insertText = '';

  switch (type) {
    case 'h3':
      insertText = `\n<h3>${selectedText || 'Tiêu đề mục con'}</h3>\n`;
      break;
    case 'p':
      insertText = `\n<p>${selectedText || 'Nội dung đoạn văn mới...'}</p>\n`;
      break;
    case 'b':
      insertText = `<strong>${selectedText || 'chữ in đậm'}</strong>`;
      break;
    case 'i':
      insertText = `<em>${selectedText || 'chữ in nghiêng'}</em>`;
      break;
    case 'quote':
      insertText = `\n<blockquote>\n  "${selectedText || 'Câu nói hoặc trích dẫn cảm xúc...'}"\n</blockquote>\n`;
      break;
    case 'img':
      insertText = `\n<div class="article-inner-image">\n  <img src="../images/tau_1.png" alt="Chú thích ảnh" />\n  <span class="caption">${selectedText || 'Ghi chú cho hình ảnh minh họa'}</span>\n</div>\n`;
      break;
    case 'ul':
      insertText = `\n<ul>\n  <li>Ý thứ nhất</li>\n  <li>Ý thứ hai</li>\n</ul>\n`;
      break;
  }

  textarea.setRangeText(insertText, start, end, 'end');
  textarea.focus();
};

/**
 * Xử lý chọn ảnh tải lên từ máy tính
 */
async function xuLyUploadAnh(file) {
  if (!file) return;

  const previewEl = document.getElementById('articleImagePreview');
  const urlInput = document.getElementById('articleImageUrl');

  // Nếu có Supabase Client, upload lên Supabase Storage bucket
  const cfg = layCauHinhSupabase();
  if (supabaseClient && cfg.bucket) {
    try {
      const ext = file.name.split('.').pop();
      const fileName = `article_${Date.now()}_${Math.random().toString(36).substring(7)}.${ext}`;
      
      thongBao('Đang tải ảnh lên máy chủ lưu trữ...', 'info');

      const { data, error } = await supabaseClient.storage
        .from(cfg.bucket)
        .upload(fileName, file, { cacheControl: '3600', upsert: false });

      if (error) {
        throw error;
      }

      // Lấy URL công khai
      const { data: publicData } = supabaseClient.storage
        .from(cfg.bucket)
        .getPublicUrl(fileName);

      if (publicData && publicData.publicUrl) {
        urlInput.value = publicData.publicUrl;
        previewEl.src = publicData.publicUrl;
        thongBao('Đã tải ảnh lên máy chủ thành công!', 'success');
        return;
      }
    } catch (err) {
      console.warn('Upload máy chủ lưu trữ thất bại, fallback sang Base64:', err);
      thongBao('Không thể lưu ảnh lên máy chủ, chuyển sang lưu ảnh cục bộ', 'warning');
    }
  }

  // Fallback sang Base64 để lưu trữ cục bộ
  const reader = new FileReader();
  reader.onload = (e) => {
    urlInput.value = e.target.result;
    previewEl.src = e.target.result;
    thongBao('Đã chọn ảnh thành công!', 'success');
  };
  reader.readAsDataURL(file);
}

/**
 * 5. LƯU BÀI VIẾT (THÊM MỚI HOẶC SỬA)
 */
async function luuBaiViet(e) {
  if (e) e.preventDefault();

  const title = document.getElementById('articleTitle').value.trim();
  const category = document.getElementById('articleCategory').value;
  const author = document.getElementById('articleAuthor').value.trim() || 'Ban Biên Tập DSVN';
  const authorRole = document.getElementById('articleAuthorRole').value.trim() || 'Đội ngũ truyền thông';
  const readTime = document.getElementById('articleReadTime').value.trim() || '5 phút';
  const image = document.getElementById('articleImageUrl').value.trim() || '../images/tau_1.png';
  const excerpt = document.getElementById('articleExcerpt').value.trim();
  let content = document.getElementById('articleContent').value.trim();
  const status = document.getElementById('articleStatus').value;

  if (!title) {
    thongBao('Vui lòng nhập tiêu đề bài viết!', 'error');
    return;
  }

  if (!content) {
    content = `<p>${excerpt || 'Nội dung chi tiết bài viết đang được cập nhật...'}</p>`;
  }

  const currentDateStr = new Intl.DateTimeFormat('vi-VN').format(new Date());

  const btnSave = document.getElementById('btnSubmitArticle');
  if (btnSave) {
    btnSave.disabled = true;
    btnSave.innerHTML = `<span class="icon">hourglass_top</span> Đang lưu...`;
  }

  try {
    if (dangChinhSuaId) {
      // Cập nhật bài viết
      const updatedData = {
        title,
        category,
        author,
        authorRole,
        readTime,
        image,
        excerpt,
        content,
        status,
        date: currentDateStr
      };

      if (supabaseClient) {
        const dataForDb = {
          title,
          category,
          author,
          authorrole: authorRole,
          readtime: readTime,
          image,
          excerpt,
          content,
          status,
          date: currentDateStr
        };
        const { error } = await supabaseClient
          .from('articles')
          .update(dataForDb)
          .eq('id', dangChinhSuaId);

        if (error) throw error;
      }

      // Cập nhật local state
      const idx = danhSachBaiVietHienTai.findIndex(a => a.id == dangChinhSuaId);
      if (idx !== -1) {
        danhSachBaiVietHienTai[idx] = { ...danhSachBaiVietHienTai[idx], ...updatedData };
      }
      thongBao('Cập nhật bài viết thành công!', 'success');
    } else {
      // Tạo mới bài viết
      // Sinh ID số tăng dần
      const maxId = danhSachBaiVietHienTai.reduce((max, cur) => Math.max(max, parseInt(cur.id, 10) || 0), 0);
      const newId = maxId + 1;

      const newArticle = {
        id: newId,
        title,
        category,
        author,
        authorRole,
        readTime,
        image,
        excerpt,
        content,
        status,
        date: currentDateStr
      };

      if (supabaseClient) {
        const dataForDb = {
          id: newId,
          title,
          category,
          author,
          authorrole: authorRole,
          readtime: readTime,
          image,
          excerpt,
          content,
          status,
          date: currentDateStr
        };
        const { data, error } = await supabaseClient
          .from('articles')
          .insert([dataForDb])
          .select();

        if (error) throw error;
        if (data && data[0]) {
          newArticle.id = data[0].id;
        }
      }

      danhSachBaiVietHienTai.unshift(newArticle);
      thongBao('Đã xuất bản bài viết mới thành công!', 'success');
    }

    // Lưu vào LocalStorage để website chính đọc ngay lập tức
    localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(danhSachBaiVietHienTai));

    dongFormEditor();
    capNhatThongKe();
    hienThiBangBaiViet();
  } catch (err) {
    console.error('Lỗi khi lưu bài viết:', err);
    thongBao(`Lỗi lưu bài viết: ${err.message || 'Không thể kết nối cơ sở dữ liệu'}`, 'error');
  } finally {
    if (btnSave) {
      btnSave.disabled = false;
      btnSave.innerHTML = `<span class="icon">save</span> Lưu & Xuất bản`;
    }
  }
}

/**
 * 6. XÓA BÀI VIẾT
 */
async function xacNhanXoaBaiViet(id) {
  const item = danhSachBaiVietHienTai.find(a => a.id == id);
  if (!item) return;

  if (!confirm(`Bạn có chắc chắn muốn xóa bài viết "${item.title}" (#${id}) không? Thao tác này không thể hoàn tác.`)) {
    return;
  }

  try {
    if (supabaseClient) {
      const { error } = await supabaseClient
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
    }

    danhSachBaiVietHienTai = danhSachBaiVietHienTai.filter(a => a.id != id);
    localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(danhSachBaiVietHienTai));

    thongBao('Đã xóa bài viết thành công!', 'success');
    capNhatThongKe();
    hienThiBangBaiViet();
  } catch (err) {
    console.error('Lỗi khi xóa bài viết:', err);
    thongBao(`Không thể xóa bài viết: ${err.message}`, 'error');
  }
}

/**
 * 7. XEM THỬ BÀI VIẾT (PREVIEW MODAL)
 */
function xemThuBaiViet(id) {
  const item = danhSachBaiVietHienTai.find(a => a.id == id);
  if (!item) return;

  const modal = document.getElementById('previewModal');
  const body = document.getElementById('previewModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="max-width:760px;margin:0 auto;padding:10px 0;">
      <span class="table-cat-badge" style="margin-bottom:12px">${item.category || 'Trải nghiệm'}</span>
      <h1 style="font-size:26px;font-weight:800;color:#0f172a;line-height:1.35;margin:8px 0 16px 0">${item.title}</h1>
      
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b">
        <span>Tác giả: <strong style="color:#1e293b">${item.author}</strong></span>
        <span>•</span>
        <span>Ngày đăng: ${item.date}</span>
        <span>•</span>
        <span>${item.readTime || '5 phút đọc'}</span>
      </div>

      <div style="margin-bottom:24px;border-radius:10px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.08)">
        <img src="${item.image || '../images/tau_1.png'}" style="width:100%;max-height:420px;object-fit:cover;display:block" onerror="this.src='../images/tau_1.png'" />
      </div>

      <div style="font-size:15.5px;line-height:1.7;color:#334155" class="article-reader-content">
        ${item.content || `<p>${item.excerpt}</p>`}
      </div>
    </div>
  `;

  modal.classList.add('open');
  body.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function dongPreviewModal() {
  const modal = document.getElementById('previewModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * 8. ĐỒNG BỘ TOÀN BỘ 12 BÀI MẪU LÊN SUPABASE
 */
async function dongBoBaiMauLenSupabase() {
  if (!supabaseClient) {
    moModalSupabaseConfig();
    thongBao('Vui lòng kết nối máy chủ trước khi đồng bộ dữ liệu!', 'warning');
    return;
  }

  if (!confirm('Bạn có chắc chắn muốn đồng bộ dữ liệu bài viết hiện tại lên máy chủ lưu trữ không?')) {
    return;
  }

  const btnSync = document.getElementById('btnSyncSupabase');
  if (btnSync) {
    btnSync.disabled = true;
    btnSync.innerHTML = `<span class="icon" style="animation:spin 1s infinite linear">sync</span> Đang đồng bộ...`;
  }

  try {
    const dataToSync = danhSachBaiVietHienTai.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      image: item.image,
      date: item.date,
      readtime: item.readTime || item.readtime || '5 phút',
      author: item.author,
      authorrole: item.authorRole || item.authorrole || 'Ban Biên Tập DSVN',
      excerpt: item.excerpt,
      content: item.content,
      status: item.status || 'published'
    }));

    const { error } = await supabaseClient
      .from('articles')
      .upsert(dataToSync, { onConflict: 'id' });

    if (error) throw error;

    thongBao(`Đã đồng bộ thành công ${dataToSync.length} bài viết lên máy chủ!`, 'success');
  } catch (err) {
    console.error('Lỗi khi đồng bộ lên máy chủ:', err);
    thongBao(`Đồng bộ thất bại: ${err.message}`, 'error');
  } finally {
    if (btnSync) {
      btnSync.disabled = false;
      btnSync.innerHTML = `<span class="icon">sync</span> Đồng bộ dữ liệu`;
    }
  }
}

/**
 * 9. QUẢN LÝ CẤU HÌNH SUPABASE
 */
function moModalSupabaseConfig() {
  const cfg = layCauHinhSupabase();
  document.getElementById('supabaseUrlInput').value = cfg.url || '';
  document.getElementById('supabaseKeyInput').value = cfg.key || '';
  document.getElementById('supabaseBucketInput').value = cfg.bucket || 'blog-images';
  const modal = document.getElementById('supabaseConfigModal');
  modal.classList.add('open');
  const body = modal.querySelector('.admin-modal-body');
  if (body) body.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function dongModalSupabaseConfig() {
  const modal = document.getElementById('supabaseConfigModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function luuCauHinhSupabase(e) {
  if (e) e.preventDefault();

  const url = document.getElementById('supabaseUrlInput').value.trim();
  const key = document.getElementById('supabaseKeyInput').value.trim();
  const bucket = document.getElementById('supabaseBucketInput').value.trim() || 'blog-images';

  const newConfig = { url, key, bucket };
  localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(newConfig));

  dongModalSupabaseConfig();
  khoiTaoSupabase();
  taiDuLieuVaHienThi();

  thongBao('Đã lưu cấu hình kết nối máy chủ thành công!', 'success');
}

window.copySQLCode = function() {
  const sqlText = `
-- 1. Tạo bảng articles lưu trữ bài viết cẩm nang & tin tức
create table if not exists public.articles (
  id bigint primary key,
  title text not null,
  category text not null,
  image text,
  date text,
  read_time text default '5 phút',
  author text,
  author_role text,
  excerpt text,
  content text,
  status text default 'published',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Kích hoạt Row Level Security (RLS)
alter table public.articles enable row level security;

-- 3. Cho phép tất cả mọi người đọc các bài đã xuất bản
create policy "Cho phep doc cong khai" on public.articles
  for select using (true);

-- 4. Cho phép thêm, sửa, xóa dữ liệu
create policy "Cho phep them bai viet" on public.articles
  for insert with check (true);

create policy "Cho phep sua bai viet" on public.articles
  for update using (true);

create policy "Cho phep xoa bai viet" on public.articles
  for delete using (true);
  `.trim();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(sqlText);
    thongBao('Đã sao chép mã SQL vào bộ nhớ đệm!', 'success');
  }
};

/**
 * 10. THÔNG BÁO TOAST & SỰ KIỆN GIAO DIỆN
 */
function thongBao(msg, type = 'info') {
  if (window.hienThiThongBao) {
    window.hienThiThongBao(msg, type);
    return;
  }

  // Fallback thông báo nổi
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#0284c7'};
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: fadeIn 0.3s ease;
  `;
  toast.innerHTML = `<span class="icon">${type === 'success' ? 'check_circle' : 'info'}</span> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function khoiTaoSuKien() {
  // Tìm kiếm bài viết
  const searchInput = document.getElementById('adminSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', hienThiBangBaiViet);
  }

  // Lọc theo chuyên mục
  const catFilter = document.getElementById('adminCategoryFilter');
  if (catFilter) {
    catFilter.addEventListener('change', hienThiBangBaiViet);
  }

  // Chọn file ảnh từ máy
  const fileInput = document.getElementById('articleImageFile');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        xuLyUploadAnh(e.target.files[0]);
      }
    });
  }

  // Nhập link ảnh trực tiếp
  const urlInput = document.getElementById('articleImageUrl');
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const preview = document.getElementById('articleImagePreview');
      if (preview && e.target.value.trim()) {
        preview.src = e.target.value.trim();
      }
    });
  }

  // Form submit bài viết
  const articleForm = document.getElementById('articleForm');
  if (articleForm) {
    articleForm.addEventListener('submit', luuBaiViet);
  }

  // Form submit cấu hình Supabase
  const configForm = document.getElementById('supabaseConfigForm');
  if (configForm) {
    configForm.addEventListener('submit', luuCauHinhSupabase);
  }

  // Đóng modal khi bấm vào nền mờ bên ngoài
  document.querySelectorAll('.admin-modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Đóng modal khi nhấn phím Escape (ESC)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      document.querySelectorAll('.admin-modal-backdrop.open').forEach(modal => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
}
