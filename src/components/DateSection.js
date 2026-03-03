import React, { useState } from 'react'
import { animated } from '@react-spring/web'
import { useScrollReveal } from '../utils/useScrollReveal'
import { EVENT_INFO, GROOM_EVENT_INFO, BRIDE_EVENT_INFO } from '../constants/weddingInfo'

const DateSection = ({ side = 'groom' }) => {
  // Chọn thông tin thời gian dựa vào side
  const eventTimeInfo = side === 'bride' ? BRIDE_EVENT_INFO : GROOM_EVENT_INFO
  const { ref, style } = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })

  const [openImageUrl, setOpenImageUrl] = useState(null)

  return (
    <animated.div ref={ref} style={style} className='com-section date-section' data-section=''>
      <div className='section-wrapper full-width full-height p-relative'>
        <div className='section-background p-absolute full-width full-height'></div>
        <div className='section-container full-height p-relative'>
          <div className='com-text-block p-absolute animation date-day-number'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                {eventTimeInfo.DAY}
                <br />
              </p>
            </div>
          </div>
          <div className='com-image-block p-absolute animation date-image-1'>
            <div
              className='image-block-css p-relative full-width full-height full-mask-size mask-position'
              style={{ position: 'relative' }}
            >
              <img
                src={'https://static-ai-lab.edupia.vn/test-image/image4.jpg'}
                alt='Ảnh thiệp cưới'
                className='hero-main-image-clickable'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  setOpenImageUrl('https://static-ai-lab.edupia.vn/test-image/image4.jpg')
                }
              />
              <div className='image-gradient-border'></div>
            </div>
          </div>
          <div className='com-image-block p-absolute animation date-image-2'>
            <div
              className='image-block-css p-relative full-width full-height full-mask-size mask-position'
              style={{ position: 'relative' }}
            >
              <img
                src={'https://static-ai-lab.edupia.vn/test-image/image5.jpg'}
                alt='Ảnh thiệp cưới'
                className='hero-main-image-clickable'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  setOpenImageUrl('https://static-ai-lab.edupia.vn/test-image/image5.jpg')
                }
              />
              <div className='image-gradient-border'></div>
            </div>
          </div>
          <div className='com-image-block p-absolute animation date-image-3'>
            <div
              className='image-block-css p-relative full-width full-height full-mask-size mask-position'
              style={{ position: 'relative' }}
            >
              <img
                src={'https://static-ai-lab.edupia.vn/test-image/image6.jpg'}
                alt='Ảnh thiệp cưới'
                className='hero-main-image-clickable'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  setOpenImageUrl('https://static-ai-lab.edupia.vn/test-image/image6.jpg')
                }
              />
              <div className='image-gradient-border'></div>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-header-text'>
            <div className='text-block'>
              <h2 className='text-block-css full-width'>
                {EVENT_INFO.INVITE_HEADER}
                <br />
              </h2>
            </div>
          </div>
          <div className='com-image-block p-absolute animation date-decoration-image'>
            <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
              <div className='image-background p-absolute' role='img' aria-label=''></div>
              <div className='image-gradient-border'></div>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-event-description'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                {eventTimeInfo.EVENT_DESCRIPTION}
                <br />
                {eventTimeInfo.EVENT_AT_LABEL}
                <br />
              </p>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-time'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                {eventTimeInfo.TIME}
                <br />
              </p>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-year'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                <span style={{ fontWeight: 'normal' }}>{EVENT_INFO.YEAR}</span>
                <br />
              </p>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-lunar-date'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                ({eventTimeInfo.LUNAR_DATE})<br />
              </p>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-weekday'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                {eventTimeInfo.WEEKDAY}
                <br />
              </p>
            </div>
          </div>
          <div className='com-text-block p-absolute animation date-month'>
            <div className='text-block'>
              <p className='text-block-css full-width'>
                {EVENT_INFO.MONTH}
                <br />
              </p>
            </div>
          </div>
          <div className='p-absolute animation date-decorative-line-1'>
            <div className='full-width full-height'>
              <div className='line-css full-width'>
                <div className='line-container'></div>
              </div>
            </div>
          </div>
          <div className='p-absolute animation date-decorative-line-2'>
            <div className='full-width full-height'>
              <div className='line-css full-width'>
                <div className='line-container'></div>
              </div>
            </div>
          </div>
          {openImageUrl && (
            <div className='image-modal-backdrop' onClick={() => setOpenImageUrl(null)}>
              <div className='image-modal-content' onClick={(e) => e.stopPropagation()}>
                <button
                  type='button'
                  className='image-modal-close'
                  onClick={() => setOpenImageUrl(null)}
                >
                  ×
                </button>
                <img
                  src={openImageUrl}
                  alt='Ảnh thời gian sự kiện phóng to'
                  className='image-modal-img'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  )
}

export default DateSection
