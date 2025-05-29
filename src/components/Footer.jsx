import { useState } from 'react'
import resume from '../assets/icons/socials/resume.png'
import resumeColor from '../assets/icons/socials/resumeColor.png'
import linkedin from '../assets/icons/socials/linkedin.png'
import linkedinColor from '../assets/icons/socials/linkedinColor.png'
import mail from '../assets/icons/socials/mail.png'
import mailColor from '../assets/icons/socials/mailColor.png'
import dribbble from '../assets/icons/socials/dribbble.png'
import dribbbleColor from '../assets/icons/socials/dribbbleColor.png'
import location from '../assets/icons/socials/location.png'
import locationColor from '../assets/icons/socials/locationColor.png'
// import { MapPin } from "react-feather";
// import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = ({ imageEnter, largeEnter }) => {
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null)
  const resumeLink = import.meta.env.VITE_RESUME_URL
  const socials = [
    {
      name: '',
      link: 'https://goo.gl/maps/81bSbpJiwa8DrD219',
      // icon: <MapPin strokeWidth={2} width={16} height={16} color="#7A2222" />,
      icon: location,
      iconColor: locationColor,
      target: '_blank',
    },
    {
      icon: dribbble,
      iconColor: dribbbleColor,
      link: 'https://dribbble.com/Shradha_b_k',
      target: '_blank',
    },
    {
      icon: linkedin,
      iconColor: linkedinColor,
      link: 'https://www.linkedin.com/in/shradha-b-k',
      target: '_blank',
    },
    {
      icon: mail,
      iconColor: mailColor,
      link: 'mailto:shradhakaba@gmail.com',
      target: '',
    },
    {
      icon: resume,
      iconColor: resumeColor,
      link: resumeLink,
      target: '_blank',
    },
  ]
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div
      onMouseEnter={() => {
        imageEnter()
        setHoveredIconIndex(null)
      }}
      onMouseLeave={() => {
        imageEnter()
        setHoveredIconIndex(null)
      }}
      id="footer-main"
      className="w-full bg-brand-darkGrey2 flex flex-col"
    >
      <div className=" footerDiv flex flex-col md:flex-row md:items-end md:justify-between px-5 md:px-48 py-10 md:py-24 ">
        <div
          className="flex text-gray-400 flex-col justify-center  md:w-2/6 mb-5 md:mb-0"
          style={{
            color: '#fff',
          }}
        >
          <ul className="container" variants={container} initial="hidden" animate="visible">
            <li className=" " variants={item}>
              <>
                <div className=" max-w-max text-base md:text-[32px] tracking-[0.04em] font-lora-italic">
                  Shradha<span className="hidden md:inline-block">,</span>{' '}
                  <span className="md:hidden">
                    <br />
                  </span>
                  <span className="font-lato md:text-lg text-sm font-normal text-[#B6B6B6]">
                    UX Researcher
                  </span>
                </div>
              </>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-end tracking-[0.01em] items-center md:w-3/6 w-full gap-16">
          {socials.map((social, index) => (
            <a
              onMouseEnter={() => {
                setHoveredIconIndex(index)
              }}
              onMouseLeave={() => {
                setHoveredIconIndex(null)
              }}
              href={social.link}
              target={social.target}
              rel="noreferrer"
              className="text-brand-gray font-lato flex items-center  text-sm md:text-lg md:w-max  my-2 md:my-0 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              {social.icon && (
                <img
                  src={hoveredIconIndex === index ? social.iconColor : social.icon}
                  alt="Social icon"
                  className=" mr-2"
                />
              )}
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className=" footerDiv2 shadow-xl text-[11px] text-center  font-lato text-brand-gray flex flex-col items-center justify-center p-5 md:p-10">
        <div>
          © {new Date().getFullYear()}. shradhab. All Rights Reserved. Developed by{' '}
          <span>
            <a
              href="https://www.mahanth.dev"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
            >
              Mahanth
            </a>
          </span>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Footer
