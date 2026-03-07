import React, { useState } from 'react'
import {
  BRIDE_EVENT_INFO,
  COUPLE_INFO,
  EVENT_INFO,
  GROOM_EVENT_INFO,
} from '../constants/weddingInfo'

const HERO_IMAGE_URL = 'https://static-ai-lab.edupia.vn/test-image/image3.jpg'

const HeroSection = ({ guestName = 'Anh Long123', side = 'groom' }) => {
  const eventTimeInfo = side === 'bride' ? BRIDE_EVENT_INFO : GROOM_EVENT_INFO

  const [isHeroImageOpen, setIsHeroImageOpen] = useState(false)

  return (
    <div className='com-section hero-section' data-section=''>
      <div className='full-width full-height'>
        <div className='section-wrapper full-width full-height p-relative'>
          <div className='section-background p-absolute full-width full-height'></div>
          <div className='section-container full-height p-relative'>
            <div className='com-image-block p-absolute hero-decorative-image-1'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-title-name'>
              <div className='full-width full-height'>
                <div className='text-block'>
                  <h1 className='text-block-css full-width'>{eventTimeInfo.DISPLAY_NAME}</h1>
                </div>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-date'>
              <div className='text-block'>
                <h2 className='text-block-css full-width'>{eventTimeInfo.HERO_DATE_DISPLAY}</h2>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-subtitle'>
              <div className='text-block'>
                <h2 className='text-block-css full-width'>THIỆP MỜI</h2>
              </div>
            </div>
            <div className='com-image-block p-absolute hero-main-image'>
              <div
                className='image-block-css p-relative full-width full-height full-mask-size mask-position'
                style={{ position: 'relative' }}
              >
                {/* <div className="image-background p-absolute" role="img" aria-label=""></div> */}
                <img
                  src={HERO_IMAGE_URL}
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
                  onClick={() => setIsHeroImageOpen(true)}
                />
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-time'>
              <div className='text-block'>
                <h2 className='text-block-css full-width'>
                  {eventTimeInfo.HERO_TIME_DISPLAY}
                  <br />
                </h2>
              </div>
            </div>
            <div className='com-image-block p-absolute animation hero-decorative-image-2'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-image-block p-absolute animation hero-decorative-image-3'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-image-block p-absolute animation hero-decorative-image-4'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-invitation-label'>
              <div className='text-block'>
                <h2 className='text-block-css full-width'>
                  Trân Trọng Kính Mời:
                  <br />
                </h2>
              </div>
            </div>
            <div className='p-absolute animation hero-decorative-line'>
              <div className='line-css full-width'>
                <div className='line-container'></div>
              </div>
            </div>
            <div className='com-text-block p-absolute animation hero-guest-name'>
              <div className='text-block'>
                <h2 className='text-block-css full-width'>{guestName}</h2>
              </div>
            </div>
            <div className='com-image-block p-absolute animation hero-background-image-right'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            <div className='com-image-block p-absolute animation hero-background-image-left'>
              <div className='image-block-css p-relative full-width full-height full-mask-size mask-position'>
                <div className='image-background p-absolute' role='img' aria-label=''></div>
                <div className='image-gradient-border'></div>
              </div>
            </div>
            {isHeroImageOpen && (
              <div className='image-modal-backdrop' onClick={() => setIsHeroImageOpen(false)}>
                <div className='image-modal-content' onClick={(e) => e.stopPropagation()}>
                  <button
                    type='button'
                    className='image-modal-close'
                    onClick={() => setIsHeroImageOpen(false)}
                  >
                    ×
                  </button>
                  <img
                    src={HERO_IMAGE_URL}
                    alt='Ảnh thiệp cưới phóng to'
                    className='image-modal-img'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
