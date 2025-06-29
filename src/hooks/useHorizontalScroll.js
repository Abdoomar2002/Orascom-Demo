"use client"
import { useEffect, useRef } from 'react'

export default function useHorizontalScroll() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return

    let isDown = false
    let startX
    let scrollLeft

    const handleMouseDown = (e) => {
      isDown = true
      element.classList.add('active')
      startX = e.pageX - element.offsetLeft
      scrollLeft = element.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      element.classList.remove('active')
    }

    const handleMouseUp = () => {
      isDown = false
      element.classList.remove('active')
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - element.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      element.scrollLeft = scrollLeft - walk
    }

    // Add wheel support for horizontal scrolling
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        element.scrollLeft += e.deltaY
      }
    }

    element.addEventListener('mousedown', handleMouseDown)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseup', handleMouseUp)
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseup', handleMouseUp)
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return scrollRef
} 