/**
 * Config cho gallery images
 * Tách riêng để dễ quản lý và có thể thay đổi mà không cần sửa component
 *
 * Note: CSS sử dụng class selector để apply styles (thay vì ID selector)
 * ImageUrl có thể được thay đổi dễ dàng ở đây, sẽ override CSS nếu được set
 */
const cdn = 'https://static-ai-lab.edupia.vn/test-image/'
// Gallery 1 - Album hình cưới (phần đầu)
export const gallery1Images = [
  {
    className: 'gallery-image-item-1',
    imageUrl: cdn + 'image1.jpg',
    animationType: 'fadeUp',
    delay: 100,
  },
  {
    className: 'gallery-image-item-2',
    imageUrl: cdn + 'image2.jpg',
    animationType: 'fadeRight',
    delay: 200,
  },
  {
    className: 'gallery-image-item-3',
    imageUrl: cdn + 'image3.jpg',
    animationType: 'scale',
    delay: 300,
  },
  {
    className: 'gallery-image-item-4',
    imageUrl: cdn + 'image4.jpg',
    animationType: 'fadeLeft',
    delay: 400,
  },
  {
    className: 'gallery-image-item-5',
    imageUrl: cdn + 'image5.jpg',
    animationType: 'rotate',
    delay: 500,
  },
  {
    className: 'gallery-image-item-6',
    imageUrl: cdn + 'image6.jpg',
    animationType: 'fadeScale',
    delay: 600,
  },
]

// Gallery 2 - Album hình cưới (phần tiếp theo)
export const gallery2Images = [
  {
    className: 'gallery-image-item-7',
    imageUrl: cdn + 'image7.jpg',
    animationType: 'zoom',
    delay: 100,
  },
  {
    className: 'gallery-image-item-8',
    imageUrl: cdn + 'image8.jpg',
    animationType: 'fadeDown',
    delay: 200,
  },
  {
    className: 'gallery-image-item-9',
    imageUrl: cdn + 'image9.jpg',
    animationType: 'fadeLeft',
    delay: 300,
  },
  {
    className: 'gallery-image-item-10',
    imageUrl: cdn + 'image10.jpg',
    animationType: 'scale',
    delay: 400,
  },
]

// Tất cả gallery images (để dễ quản lý)
export const allGalleryImages = [...gallery1Images, ...gallery2Images]
