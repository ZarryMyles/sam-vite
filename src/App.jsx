import { useState, useEffect } from 'react'
import './App.css'
import './vishal.css'
import { motion } from 'framer-motion'

import {
  // Work,
  NewWork,
  // DesignCTA,
  WorkLogos,
  SocialProof,
  GetInTouch,
  Footer,
  LandingSection,
  Loader,
  Navbar,
} from './components/'

function App() {
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
      bounce: 0,
    },
    text: {
      height: 4,
      width: 4,
      x: mousePos.x - 2,
      y: mousePos.y - 2,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 2,
      y: mousePos.y - 2,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
    large: {
      height: 60,
      width: 60,
      x: mousePos.x - 30,
      y: mousePos.y - 30,
      backgroundColor: '#FFEE8C',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
  }

  const imageEnter = () => setcursorVariant('secondary')
  const largeEnter = () => setcursorVariant('large')

  // Loader
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
    <div className=" dark:bg-brand-black duration-500 transition-colors select-none overflow-hidden tracking-1.5">
      {loading && (
        <div className="fixed loaderDiv w-screen h-screen">
          <Loader />
        </div>
      )}
      <>
        <Navbar
          imageEnter={imageEnter}
          largeEnter={largeEnter}
          defaultColor={'white'}
          callHome={true}
        />
        <div id="sections" className="  flex flex-col items-center justify-center">
          <LandingSection imageEnter={imageEnter} largeEnter={largeEnter} />
          {/* <Work imageEnter={imageEnter} largeEnter={largeEnter} /> */}
          <NewWork imageEnter={imageEnter} largeEnter={largeEnter} />
          {/* <DesignCTA imageEnter={imageEnter} largeEnter={largeEnter} /> */}
          <WorkLogos imageEnter={imageEnter} largeEnter={largeEnter} />
          <SocialProof imageEnter={imageEnter} largeEnter={largeEnter} />
          <GetInTouch imageEnter={imageEnter} largeEnter={largeEnter} location="home" />
          <Footer imageEnter={imageEnter} largeEnter={largeEnter} />
          {/* other sections */}

          <motion.div
            className="cursor hidden md:flex"
            variants={variants}
            animate={cursorVariant}
          />
        </div>
      </>
    </div>
  )
}

export default App
