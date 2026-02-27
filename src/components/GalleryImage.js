import React from 'react'
import { animated } from '@react-spring/web'
import { useGalleryImageAnimation } from '../utils/useGalleryImageAnimation'

/**
 * Component cho một gallery image với animation
 */
const GalleryImage = ({ imageUrl, animationType, delay, triggerOnce = false }) => {
  const { ref, style } = useGalleryImageAnimation({
    animationType,
    delay,
    triggerOnce,
  })

  return (
 
      <img
        src={imageUrl}
        alt=''
        className='gallery-grid-img w-full object-cover object-center block'
      />

  )
}

export default GalleryImage
