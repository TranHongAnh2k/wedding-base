export const COUPLE_INFO = Object.freeze({
  HEADER: 'Trân Trọng Báo Tin Lễ Thành Hôn Của',
  GROOM_NAME: 'Trần Hồng Anh',
  BRIDE_NAME: 'Phan Thị Ngọc Ánh',
  DISPLAY_NAME: 'Hồng Anh & Ngọc Ánh',
  GROOM_PARENTS: ['ÔNG PHẠM VĂN HUYÊN', 'BÀ TRẦN THỊ VÂN'],
  BRIDE_PARENTS: ['ÔNG PHAN CHINH THẮNG', 'BÀ LÊ THỊ HỒNG'],
  GROOM_LOCATION: 'Trần Phú, Hải Phòng',
  BRIDE_LOCATION: 'Khoái Châu, Hưng Yên',
  HOUSE_GROOM_LABEL: 'NHÀ TRAI',
  HOUSE_BRIDE_LABEL: 'NHÀ GÁI',
})

export const LOCATION_INFO = Object.freeze({
  HEADER: 'LỄ THÀNH HÔN ĐƯỢC TỔ CHỨC TẠI',
  ADDRESS_LINES: ['Đội 7, An Xá, Trần Phú, Hải Phòng'],
  VENUE_NAME: 'Nhà riêng của chú rể',
  MAP_URL: 'https://maps.app.goo.gl/ewjZniHh63sGhh757',
  MAP_CTA: 'Xem Chỉ Đường',
})

// Thông tin địa chỉ cho chú rể (Nhà Trai)
export const GROOM_LOCATION_INFO = Object.freeze({
  HEADER: 'BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI',
  ADDRESS_LINES: ['Đội 7, An Xá, Trần Phú,', 'Hải Phòng'],
  VENUE_NAME: 'Nhà riêng của chú rể',
  MAP_URL: 'https://maps.app.goo.gl/QzbshP4xqfLHwFYN8',
  MAP_CTA: 'Xem Chỉ Đường',
})

// Thông tin địa chỉ cho cô dâu (Nhà Gái)
export const BRIDE_LOCATION_INFO = Object.freeze({
  HEADER: 'BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI',
  ADDRESS_LINES: ['Liên khê, Khoái Châu', 'Hưng Yên'],
  VENUE_NAME: 'Nhà riêng của cô dâu',
  MAP_URL: 'https://maps.app.goo.gl/A5sFB5ZZZsdxawRC6',
  MAP_CTA: 'Xem Chỉ Đường',
})

export const EVENT_INFO = Object.freeze({
  HERO_DATE_DISPLAY: '29.03.2026',
  HERO_TIME_DISPLAY: 'Chủ Nhật - 08H00',
  INVITE_HEADER: 'Trân Trọng Kính Mời',
  YEAR: 'Năm 2026',
  LUNAR_DATE: 'Tức Ngày 11 Tháng 02 Năm Bính Ngọ',
  WEEKDAY: 'Chủ nhật',
  MONTH: 'Tháng 03',
  DAY: '29',
})

// Thông tin thời gian cho chú rể (Nhà Trai)
export const GROOM_EVENT_INFO = Object.freeze({
  EVENT_DESCRIPTION: 'THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN',
  EVENT_AT_LABEL: 'Vào Lúc',
  TIME: '08 giờ 00',
  DATE_DISPLAY: '29.03.2026',
  TIME_DISPLAY: 'Chủ Nhật - 08H00',
  WEEKDAY: 'Chủ nhật',
  MONTH: 'Tháng 03',
  DAY: '29',
  LUNAR_DATE: 'Tức Ngày 11 Tháng 02 Năm Bính Ngọ',
  HERO_TIME_DISPLAY: 'Chủ Nhật - 08H00',
  HERO_DATE_DISPLAY: '29.03.2026',
  // Có thể thêm các thông tin khác nếu cần
})

// Thông tin thời gian cho cô dâu (Nhà Gái)
export const BRIDE_EVENT_INFO = Object.freeze({
  EVENT_DESCRIPTION: 'THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN',
  EVENT_AT_LABEL: 'Vào Lúc',
  TIME: '17 giờ 00',
  DATE_DISPLAY: '28.03.2026',
  TIME_DISPLAY: 'Thứ 7 - 17H00',
  WEEKDAY: 'Thứ 7',
  MONTH: 'Tháng 03',
  DAY: '28',
  LUNAR_DATE: 'Tức Ngày 10 Tháng 02 Năm Bính Ngọ',
  HERO_TIME_DISPLAY: 'Thứ 7 - 17H00',
  HERO_DATE_DISPLAY: '28.03.2026',  
  // Có thể thêm các thông tin khác nếu cần
})

/** Favicon & logo: đường dẫn file trong public/ (dùng cho tab trình duyệt, bookmark, PWA...) */
export const SITE_LOGO = Object.freeze({
  FAVICON: '/favicon.ico',
  APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  /** Ảnh dùng cho share mạng xã hội (og:image) — có thể trùng logo hoặc ảnh cưới */
  OG_IMAGE: 'https://static-ai-lab.edupia.vn/test-image/image3.jpg',
})
