import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Animate = ({ children, anim = 'fade-up', delay = 0, once = true }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  return (
    <div data-aos={anim} data-aos-delay={delay} data-aos-once={once}>
      {children}
    </div>
  )
}

export default Animate
