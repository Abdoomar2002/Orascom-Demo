const mathCursor = {
  lerp: (a, b, n) => {
      return (1 - n) * a + n * b
  }
}

class Cursor {
  constructor() {
      this.el = document.querySelector('[data-cursor]')
      this.hovers = document.querySelectorAll('[data-hover]')
      this.drags = document.querySelectorAll('[data-drag]')

      this.data = {
          mouse: {
              x: -200,
              y: -200
          },
          current: {
              x: -200,
              y: -200
          },
          last: {
              x: -200,
              y: -200
          },
          ease: 0.1,
          dist: 50,
          fx: {
              diff: 0,
              acc: 0,
              velo: 0,
              scale: 0
          }
      }

      this.rAF = null
      this.targets = null

      this.run = this.run.bind(this)
      this.mousePos = this.mousePos.bind(this)

      this.init()
  }

  mousePos(e) {
      this.data.mouse.x = e.clientX
      this.data.mouse.y = e.clientY

      this.data.current.x = e.clientX
      this.data.current.y = e.clientY
  }

  run() {
      this.data.last.x = mathCursor.lerp(this.data.last.x, this.data.current.x, this.data.ease)
      this.data.last.y = mathCursor.lerp(this.data.last.y, this.data.current.y, this.data.ease)

      this.data.fx.diff = this.data.current.x - this.data.last.x
      this.data.fx.acc = this.data.fx.diff / window.innerWidth
      this.data.fx.velo = + this.data.fx.acc
      let scaleNum = 1 - Math.abs(this.data.fx.velo * 3)
      this.data.fx.scale = .7 < scaleNum ? scaleNum : .7

      this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y + 35}px, 0) scale(${this.data.fx.scale})`

      this.raf()
  }

  raf() {
      this.rAF = requestAnimationFrame(this.run)
  }

  addListeners() {
      var element = this
      var el = document.querySelector('[data-cursor]')

      this.hovers.forEach(function (target) {
          target.addEventListener('mousemove', element.mousePos, { passive: true })
          target.addEventListener('mouseover', element.mousePos, { passive: true })

          target.addEventListener('mouseover', function () {
              var textContent = target.getAttribute('data-hover')
              var cursorStyle = target.getAttribute('data-style')
              var mode = target.getAttribute("data-mode")

              if (textContent == 'None') {
                el.querySelector('.cursor_text').innerHTML = " "
                el.classList.remove('is-active')
              } 
              else if(textContent == 'dot'){
                el.querySelector('.cursor_text').innerHTML = " "
                el.classList.add('is-active-dot')
              }
              else {    
                el.querySelector('.cursor_text').innerHTML = textContent
                el.classList.add('is-active')
              }
              
              if(mode == 'light'){
                el.classList.add('light')
              } else {
                el.classList.remove('light')
              }

              if (cursorStyle == 'fill') {
                  el.classList.add('fill')
              } else {
                  el.classList.remove('fill')
              }
          });
          target.addEventListener('mouseout', function () {
              el.classList.remove('is-active')
              el.classList.remove('is-active-dot')
              el.classList.remove('fill')
          });
      });

      this.drags.forEach(function (target) {
          target.addEventListener('mouseover', function () {
              el.classList.add('is-drag')
          });
          target.addEventListener('mouseout', function () {
              el.classList.remove('is-drag')
          });
      });
  }

  init() {
      this.addListeners()
      this.raf()
  }

  cancel() {
      window.cancelAnimationFrame(this.rAF);
  }
}
