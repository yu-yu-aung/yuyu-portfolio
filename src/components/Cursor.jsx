'use client'

import React, { useEffect, useRef, useState } from 'react'

const Cursor = () => {
  const cursorRef = useRef(null); 
  const mouse = useRef({x: 0, y: 0})
  const [click, setClick] = useState(false); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    } 

    const handleMouseClick = (e) => {
      setClick(true); 
      setTimeout(() => {
        setClick(false)
      }, 300);
    }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x - 10}px, ${mouse.current.y - 10}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleMouseClick)

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove) 
      window.removeEventListener("click", handleMouseClick)
    }
  }, [])

  return (
    <div className={`cursor ${click ? "expand" : ""}`} 
    ref={cursorRef}
    ></div>
  )
}

export default Cursor