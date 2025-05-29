import { useState, useEffect } from 'react'
import { useTitle } from '../hooks/useTitle'
import { Navbar } from '../components'
import { motion } from 'framer-motion'
const Error = () => {
  useTitle('404 - Page not found')
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })
  const [cursorVariant, setcursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
    text: {
      height: 50,
      width: 50,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
  }

  const textEnter = () => setcursorVariant('text')
  const imageEnter = () => setcursorVariant('secondary')
  const textLeave = () => setcursorVariant('default')
  const largeEnter = () => setcursorVariant('large')
  return (
    <>
      <Navbar
        imageEnter={imageEnter}
        textLeave={textLeave}
        textEnter={textEnter}
        largeEnter={largeEnter}
        defaultColor={'white'}
      />
      <div
        style={{
          cursor: 'none',
        }}
        onMouseEnter={imageEnter}
        className="  font-lato h-screen w-full bg-brand-black text-brand-white flex flex-col justify-center items-center"
      >
        <div className="text-base md:text-8xl tracking-3">404</div>
        <div className="text-xl my-4 tracking-1.5">
          Page Not Found. Return to{' '}
          <a
            style={{
              cursor: 'none',
            }}
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            href="/"
            className="text-brand-gold "
          >
            Home
          </a>
        </div>
      </div>

      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
    </>
  )
}

export default Error
