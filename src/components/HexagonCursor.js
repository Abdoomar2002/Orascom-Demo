"use client"
import { useEffect, useRef } from 'react'

export default function HexagonCursor({ sectionSelector = '.home-news' }) {
  const cursorRef = useRef(null)
  const textRef = useRef(null)
  const rafRef = useRef()
  const data = useRef({
    mouse: { x: -200, y: -200 },
    current: { x: -200, y: -200 },
    last: { x: -200, y: -200 },
    ease: 0.18,
    fx: { diff: 0, acc: 0, velo: 0, scale: 1 },
  })

  useEffect(() => {
    const section = document.querySelector(sectionSelector)
    if (!section) return
    const cursor = cursorRef.current
    const textSpan = textRef.current
    let isInside = false

    // Helper to update cursor text and color
    function updateCursorState(target) {
      const hoverText = target.getAttribute('data-hover')
      const mode = target.getAttribute('data-mode')
      if (hoverText && hoverText !== 'None') {
        textSpan.textContent = hoverText
        cursor.classList.add('is-active')
      } else {
        textSpan.textContent = 'Drag'
        cursor.classList.remove('is-active')
      }
      if (mode === 'light') {
        cursor.classList.add('light')
      } else {
        cursor.classList.remove('light')
      }
    }

    // Mouse move inside section
    function onSectionMouseMove(e) {
      isInside = true
      data.current.mouse.x = e.clientX
      data.current.mouse.y = e.clientY
      // Find closest data-hover target
      let target = e.target
      while (target && target !== section && !target.hasAttribute('data-hover')) {
        target = target.parentElement
      }
      if (target && target.hasAttribute('data-hover')) {
        updateCursorState(target)
      } else {
        textSpan.textContent = 'Drag'
        cursor.classList.remove('is-active')
        cursor.classList.remove('light')
      }
      cursor.style.display = 'block'
    }

    function onSectionMouseLeave() {
      isInside = false
      cursor.style.display = 'none'
    }

    // Lerp animation
    function animate() {
      const { current, last, ease, fx } = data.current
      last.x = (1 - ease) * last.x + ease * current.x
      last.y = (1 - ease) * last.y + ease * current.y
      fx.diff = current.x - last.x
      fx.acc = fx.diff / window.innerWidth
      fx.velo = +fx.acc
      fx.scale = Math.max(0.7, 1 - Math.abs(fx.velo * 3))
      cursor.style.transform = `translate3d(${last.x - 40}px, ${last.y - 40}px, 0) scale(${fx.scale})`
      rafRef.current = requestAnimationFrame(animate)
    }

    section.addEventListener('mousemove', onSectionMouseMove)
    section.addEventListener('mouseleave', onSectionMouseLeave)
    rafRef.current = requestAnimationFrame(animate)

    // Hide cursor initially
    cursor.style.display = 'none'

    return () => {
      section.removeEventListener('mousemove', onSectionMouseMove)
      section.removeEventListener('mouseleave', onSectionMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [sectionSelector])

  return (
    <div
      ref={cursorRef}
      className="cursor"
      data-cursor
      id="cursor"
      style={{ pointerEvents: 'none', position: 'fixed', zIndex: 99999, top: 0, left: 0 }}
    >
      <div className="inner" style={{ width: 80, height: 80, position: 'relative' }}>
        <div className="hexagon" style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
          <svg viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: '100%', height: '100%', fill: 'currentColor' }}>
            <polygon points="0 49.8966942 28.5616533 0 86.4128929 0 114.974546 49.8966942 86.4128929 99.84371 28.5616533 100" />
          </svg>
          <span ref={textRef} className="cursor_text" style={{ position: 'relative', zIndex: 2, fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', color: 'white', fontFamily: 'sans-serif' }}>Drag</span>
        </div>
      </div>
      <style jsx global>{`
        .cursor {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
          transform: translate3d(-200px, -200px, 0) scale(1);
          transition: background-color 0.3s ease;
        }
        .cursor .inner {
          width: 80px;
          height: 80px;
          position: relative;
        }
        .cursor .hexagon {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
          background-color: transparent;
        }
        .cursor .hexagon svg {
          position: absolute;
          width: 100%;
          height: 100%;
          fill: currentColor;
        }
        .cursor .cursor_text {
          position: relative;
          z-index: 2;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          color: white;
          font-family: sans-serif;
        }
        .cursor.is-active .hexagon {
          background-color: #f26722;
        }
        .cursor.is-drag .hexagon {
          background-color: #f26722;
        }
        .cursor.light .cursor_text {
          color: #003e7e;
        }
        .cursor.fill .hexagon {
          background-color: white;
          color: #003e7e;
        }
        .cursor.is-active-dot .hexagon {
          background-color: transparent;
        }
      `}</style>
    </div>
  )
} 