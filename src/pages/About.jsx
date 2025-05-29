import { useState, useEffect } from 'react'
import { GetInTouch, Principles, Navbar, Footer } from '../components'
import { ReactComponent as Quote } from '../assets/icons/quotestart.svg'
import { useTitle } from '../hooks/useTitle'
// import { WorkHeading } from "../components";
import HeroImage from '../assets/about/about.png'
import { motion } from 'framer-motion'

const About = () => {
  useTitle('About | Shradha B')
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

  const imageEnter = () => setcursorVariant('secondary')
  const largeEnter = () => setcursorVariant('large')
  return (
    <>
      <Navbar imageEnter={imageEnter} largeEnter={largeEnter} defaultColor={'black'} />

      <div
        onMouseEnter={imageEnter}
        onMouseLeave={imageEnter}
        className="w-full h-auto font-lato pt-10 bg-brand-black text-[#fefefe] "
      >
        {/* landing section */}
        <div className="h-screen relative  w-full md:px-48  md:pr-0 md:pl-48 pt-10 md:py-20 md:pt-0 flex flex-col md:flex-row md:items-center md:justify-start">
          <div className="w-full md:w-4/7 z-20 pt-10 md:pt-[0] px-7 flex flex-col justify-center items-start tracking-wide ">
            <div className="text-brand-white relative text-[26px] md:text-4xl  w-full ">
              <div onMouseEnter={largeEnter} onMouseLeave={imageEnter}>
                Hey there!
              </div>
            </div>
            <div
              style={{
                letterSpacing: '0.4px',
              }}
              className="text-lg leading-[36px] md:leading-9 text-[#fefefe] w-full my-8 md:my-10 md:text-justify md:tracking-[0.4px] md:w-[690px]"
            >
              I’m Shradha. <br />a UX Researcher driven by purpose. I immerse myself in deciphering
              human behaviour and patterns. From an early stage, I've believed that{' '}
              <span className="text-brand-gold">
                exceptional designs are rooted in a deep understanding of people.
              </span>{' '}
              As such, I love collaborating on projects that combine technological with
              human-centric values.
            </div>
          </div>
          <div
            style={{
              width: '580px',
              height: '435px',
              background: `url(${HeroImage})`,
              backgroundSize: 'contain',
              borderRadius: '10px',
            }}
            className="md:absolute md:block hidden top-56 right-40 bg-red-300"
          ></div>
          {/* landing image for phone only */}
          <img src={HeroImage} alt="" className="w-full block md:hidden" />
        </div>
        {/* quote */}
        <div className="flex justify-center items-center md:min-h-[40vh] md:mb-40 px-5 md:my-0 my-[150px]">
          <div
            className="  text-brand-gold text-xl relative text-justify md:text-center leading-[30px]"
            style={{
              letterSpacing: '0.4px',
            }}
          >
            <Quote
              className="absolute -top-12 md:-top-7 left-0 md:-left-8  w-7 md:w-7 h-6   "
              stroke="none"
            />
            Empathy illuminates the path, research opens the doors, together, they reveal the
            endless possibilities.
          </div>
        </div>

        {/* Values */}
        <Principles imageEnter={imageEnter} largeEnter={largeEnter} />
        <div className="mt-[130px] md:mt-0">
          <GetInTouch imageEnter={imageEnter} largeEnter={largeEnter} />
        </div>
        <Footer imageEnter={imageEnter} largeEnter={largeEnter} />
        <motion.div className="cursor hidden md:flex" variants={variants} animate={cursorVariant} />
      </div>
    </>
  )
}

export default About
