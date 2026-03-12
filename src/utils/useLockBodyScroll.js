import { useEffect } from 'react'

/**
 * Khóa scroll body khi modal mở (trên mobile tránh pull-to-refresh gây reload trang).
 * Dùng cho mọi modal ảnh: Hero, Couple, Date, Gallery.
 */
export function useLockBodyScroll(isOpen) {
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])
}
