import React, { useState, useEffect } from 'react'
import { animated } from '@react-spring/web'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useScrollReveal } from '../utils/useScrollReveal'
import GalleryImage from './GalleryImage'
const cdn = 'https://static-ai-lab.edupia.vn/test-image/slide/image_'
const totalSlides = 33
const allImages = Array.from({ length: totalSlides }, (_, i) => ({
  imageUrl: `${cdn}${i + 1}.jpg`,
}))
const GallerySection = () => {
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  // Trên mobile: khóa scroll body khi mở modal để tránh pull-to-refresh gây reload trang
  useEffect(() => {
    if (fullscreenIndex === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [fullscreenIndex])

  const closeModal = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setFullscreenIndex(null)
  }
  const { ref: galleryRef, style: galleryStyle } = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })
  const { ref: gallery2Ref, style: gallery2Style } = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })

  return (
    <>
      <animated.div
        ref={galleryRef}
        style={galleryStyle}
        className='com-section gallery-section-1'
        data-section=''
      >
        <div className='section-wrapper full-width p-relative'>
          <div className='section-background p-absolute full-width full-height'  ></div>
          <div className='section-container p-relative'>
            <div className='com-text-block p-absolute animation gallery-title mb-4'>
              <div className='text-block'>
                <p className='text-block-css full-width'>Album hình cưới</p>
              </div>
            </div>

            <div className='pt-16' style={{paddingTop: 55, margin: '0 20px'}}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
           
                  0: { slidesPerView: 1.15, centeredSlides: true },
                }}
                className='pb-8'
              >
                {allImages.map((img, index) => (
                  <SwiperSlide key={`slide_${index}`}>
                    <div
                      className='gallery-grid-item overflow-hidden rounded-2xl shadow-lg '
                      onClick={() => setFullscreenIndex(index)}
                    >
                      <GalleryImage
                        imageUrl={img.imageUrl}
                        triggerOnce={false}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </animated.div>
      {fullscreenIndex !== null && allImages[fullscreenIndex] && (
        <div
          className='image-modal-backdrop'
          onClick={closeModal}
          role='presentation'
        >
          <div
            className='image-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='image-modal-close'
              onClick={closeModal}
              aria-label='Đóng'
            >
              ×
            </button>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={16}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.image-modal-next',
                prevEl: '.image-modal-prev',
              }}
              loop={true}
              initialSlide={fullscreenIndex}
              className='image-modal-swiper'
            >
              {allImages.map((img, index) => (
                <SwiperSlide key={`modal_${index}`}>
                  <img
                    src={img.imageUrl}
                    alt='Ảnh album hình cưới phóng to'
                    className='image-modal-img'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type='button'
              className='image-modal-nav image-modal-prev'
              aria-label='Ảnh trước'
            >
              ‹
            </button>
            <button
              type='button'
              className='image-modal-nav image-modal-next'
              aria-label='Ảnh tiếp theo'
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default GallerySection
