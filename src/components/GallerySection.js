import React, { useState } from 'react'
import { animated } from '@react-spring/web'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useScrollReveal } from '../utils/useScrollReveal'
import GalleryImage from './GalleryImage'
import { gallery1Images, gallery2Images } from '../config/galleryConfig'
const cdn = 'https://static-ai-lab.edupia.vn/test-image/slide/image_'
const GallerySection = () => {
  const [fullscreenIndex, setFullscreenIndex] = useState(null)
  const allImages = [...gallery1Images, ...gallery2Images]
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
                {new Array(33).fill(null).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className='gallery-grid-item overflow-hidden rounded-2xl shadow-lg '
                      onClick={() => setFullscreenIndex(index)}
                    >
                      <GalleryImage
                        imageUrl={`${cdn}${index + 1}.jpg`}
                   
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
          onClick={() => setFullscreenIndex(null)}
        >
          <div
            className='image-modal-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='image-modal-close'
              onClick={() => setFullscreenIndex(null)}
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
              {new Array(33).fill(null).map((_, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${cdn}${index + 1}.jpg`}
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
