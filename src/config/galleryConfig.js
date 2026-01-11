/**
 * Config cho gallery images
 * Tách riêng để dễ quản lý và có thể thay đổi mà không cần sửa component
 * 
 * Note: CSS sử dụng class selector để apply styles (thay vì ID selector)
 * ImageUrl có thể được thay đổi dễ dàng ở đây, sẽ override CSS nếu được set
 */

// Gallery 1 - Album hình cưới (phần đầu)
export const gallery1Images = [
  {
    className: 'gallery-image-item-1',
    imageUrl: 'https://content.pancake.vn/web-media/e9/80/6a/05/fcf14d0545da0e656237816d3712c50d2792afda074a96abfd9bcec5-w:878-h:1280-l:99344-t:image/jpeg.png',
    animationType: 'fadeUp',
    delay: 100,
  },
  {
    className: 'gallery-image-item-2',
    imageUrl: 'https://content.pancake.vn/web-media/09/00/8a/b4/692735fdc0775ae1530963a767ce4264df77078f659771a3cde9c5ac-w:840-h:1280-l:177736-t:image/jpeg.png',
    animationType: 'fadeRight',
    delay: 200,
  },
  {
    className: 'gallery-image-item-3',
    imageUrl: 'https://content.pancake.vn/web-media/84/b3/f5/cd/cc7957b9f0e497f01a17d05f9e73406b7650b249c169b424c7ee1767-w:854-h:1280-l:94691-t:image/jpeg.png',
    animationType: 'scale',
    delay: 300,
  },
  {
    className: 'gallery-image-item-4',
    imageUrl: 'https://content.pancake.vn/1/s779x520/fwebp/60/b1/5e/e9/89fd2d2d6cd9a62db6e70776243eb9ed8603fc1fb415bdc95da92104-w:1286-h:857-l:255701-t:image/jpeg.jpg',
    animationType: 'fadeLeft',
    delay: 400,
  },
  {
    className: 'gallery-image-item-5',
    imageUrl: 'https://content.pancake.vn/1/s699x538/fwebp/7a/e8/d6/f6/da197a5a3542dfe09e7faa9e118999103385582808a2e2014fc72986-w:1286-h:988-l:154700-t:image/jpeg.jpg',
    animationType: 'rotate',
    delay: 500,
  },
  {
    className: 'gallery-image-item-6',
    imageUrl: 'https://content.pancake.vn/1/fwebp/80/ac/eb/cf/85e75c674913047eea133813069cf9dc6d9a1acadb58c454077c94c5-w:500-h:500-l:9074-t:image/png.png',
    animationType: 'fadeScale',
    delay: 600,
  },
];

// Gallery 2 - Album hình cưới (phần tiếp theo)
export const gallery2Images = [
  {
    className: 'gallery-image-item-7',
    imageUrl: 'https://content.pancake.vn/1/s578x867/fwebp/cb/87/1f/67/25cdb38375c4ffc82ea938461257c5fbb49f3407e402f3e6ff903387-w:854-h:1280-l:160168-t:image/jpeg.jpg',
    animationType: 'zoom',
    delay: 100,
  },
  {
    className: 'gallery-image-item-8',
    imageUrl: 'https://content.pancake.vn/1/s587x841/fwebp/43/f6/88/e6/33fad2e85f20c3cab3d076535139371b0378fccc049b1083efffb1c5-w:894-h:1280-l:100553-t:image/jpeg.jpg',
    animationType: 'fadeDown',
    delay: 200,
  },
  {
    className: 'gallery-image-item-9',
    imageUrl: 'https://content.pancake.vn/1/s578x867/fwebp/ad/c0/11/16/06080e040619cef49e87d7e06a574eb61310d3dc4bdc9f0fec3638c9-w:854-h:1280-l:259362-t:image/jpeg.png',
    animationType: 'fadeLeft',
    delay: 300,
  },
  {
    className: 'gallery-image-item-10',
    imageUrl: 'https://content.pancake.vn/1/s580x862/fwebp/9d/60/03/fe/ecbd36b01369b3064a01426c59166451161e648939a52fd952564e21-w:862-h:1280-l:233470-t:image/jpeg.jpg',
    animationType: 'scale',
    delay: 400,
  },
];

// Tất cả gallery images (để dễ quản lý)
export const allGalleryImages = [...gallery1Images, ...gallery2Images];
