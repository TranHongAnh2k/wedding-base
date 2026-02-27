import React from 'react'
import { animated } from '@react-spring/web'
import { useScrollReveal } from '../utils/useScrollReveal'
import { COUPLE_INFO } from '../constants/weddingInfo'

const ThankYouSection = ({ guestName = 'Quý khách' }) => {
  const { ref, style } = useScrollReveal({
    threshold: 0.1,
    rootMargin: '0px',
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
  })

  return (
    <animated.div
      ref={ref}
      style={style}
      className='com-section thankyou-section'
      data-section=''
    >
      <div className='section-wrapper full-width full-height p-relative'>
        <div className='section-background p-absolute full-width full-height'></div>
        <div className='section-container full-height p-relative flex flex-col items-center justify-center text-center py-16 px-6 gap-4'>
          <p className='text-sm tracking-[0.3em] uppercase text-white/80'>
            LỜI CẢM ƠN
          </p>
          <h2 className='text-3xl md:text-4xl font-semibold text-white'>
            {COUPLE_INFO.DISPLAY_NAME}
          </h2>
          <p className='text-base text-white/90 leading-relaxed mt-2'>
            Trân trọng cảm ơn {guestName || 'Quý khách'} đã dành thời gian,
            gửi lời chúc và cùng chia sẻ niềm vui trong ngày trọng đại của chúng
            em.
          </p>
          <p className='text-sm text-white/80 mt-4'>
            Sự hiện diện và tình cảm của {guestName || 'bạn'} là món quà quý
            giá nhất đối với chúng em.
          </p>
        </div>
      </div>
    </animated.div>
  )
}

export default ThankYouSection

