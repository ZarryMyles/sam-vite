import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { WorkHero, Navbar, WorkHeading, Loader } from '../../components'
import { ReactComponent as Quote } from '../../assets/icons/quotestart.svg'
import { ArrowRightCircle } from 'react-feather'
import Problem from '../../assets/works/smartvision/smartVisionProblem.png'
import Problem2 from '../../assets/works/smartvision/smartVisionProblem2.png'
import Problem3 from '../../assets/works/smartvision/smartVisionProblem3.png'
import Phone1 from '../../assets/works/smartvision/smartVisionPhone1.png'
import Phone2 from '../../assets/works/smartvision/smartVisionPhone2.png'
import Phone3 from '../../assets/works/smartvision/smartVisionPhone3.png'
import Phone4 from '../../assets/works/smartvision/smartVisionPhone4.png'
import Phone5 from '../../assets/works/smartvision/smartVisionPhone5.png'
import Phone6 from '../../assets/works/smartvision/smartVisionPhone6.png'
import Challenges from '../../assets/works/smartvision/smartvisionChallenge.svg'
import colorGuides from '../../assets/works/smartvision/colorGuides.svg'
import mobColor1 from '../../assets/works/smartvision/mobColor1.svg'
import mobColor2 from '../../assets/works/smartvision/mobColor2.svg'
import mobColor3 from '../../assets/works/smartvision/mobColor3.svg'
import mobColor4 from '../../assets/works/smartvision/mobColor4.svg'

import {
  Teacup,
  BriefCase,
  Bullseye,
  Check,
  Clipboard,
  Family,
  OldKey,
  Fist,
  Calendar,
  TippingHand,
  GuideDog,
  Eye,
} from '../../assets/icons/fluent'

const SmartVision = () => {
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
  const work = {
    id: 3,
    title: 'Smart Vision',
    domain: 'Case Study',
    bgColor: '#F7FCFF',
    description:
      'Making smartphones simpler for users with \n impaired vision : A step towards an inclusive and \n consumer-centric approach',
    gif: true,
    mobGif: true,
    video:
      'https://res.cloudinary.com/genesiscloudimages/image/upload/v1662486989/work_gifs/smartvision_ewgu7t.gif',
    mobVideo:
      'https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif',
    link: '/smartvision',
  }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])
  return (
    <div onMouseEnter={imageEnter} className="text-justify bg-brand-black text-brand-white">
      {loading && (
        <div className="fixed w-full h-full z-50">
          {' '}
          <Loader />{' '}
        </div>
      )}
      <Navbar largeEnter={largeEnter} imageEnter={imageEnter} defaultColor={'white'} />
      <WorkHero
        largeEnter={largeEnter}
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
        work={work}
      />
      {/* project brief */}
      <div className=" px-5 pt-[105px] md:py-10 md:px-24 md:my-20 hidden md:flex  justify-between  ">
        <div className="  my-5    ">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
          </div>
          <div className="font-lato  mt-2">Personal Project</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5 pl-7 md:pl-0">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-2">
            <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
          </div>
          <div className="font-lato  mt-2">3 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5   ">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
          </div>
          <div className="font-lato  mt-2">UX & UI Designer</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5 pl-7 md:pl-0">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
          </div>
          <div className="font-lato  mt-2">Myself</div>
        </div>
      </div>
      {/* phone brief */}
      <div className=" px-5 pt-[105px] md:py-10 md:px-24 md:my-20 flex md:hidden  justify-between  ">
        <div>
          <div className="  my-5    ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
            </div>
            <div className="font-lato  mt-2">Personal Project</div>
          </div>
          <div className=" w-max md:w-auto my-5   ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
            </div>
            <div className="font-lato  mt-2">UX & UI Designer</div>
          </div>
        </div>
        <div className="w-max flex flex-col items-start">
          <div className=" w-full  md:w-auto my-5  md:pl-0">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-2">
              <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
            </div>
            <div className="font-lato  mt-2">3 months</div>
          </div>
          <div className=" w-max md:w-auto  md:pl-0">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
            </div>
            <div className="font-lato  mt-2">Myself</div>
          </div>
        </div>
      </div>
      {/* project concept */}
      <div className=" pt-[96px] md:pt-0 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
        <div className="px-5 md:px-0 col-span-12">
          <WorkHeading text={'concept'} />
        </div>

        <div className="px-5 md:px-0 col-span-12 md:col-span-6 h-full flex flex-col    ">
          <div className="flex items-center">
            <div
              style={{
                marginBottom: '30px',
              }}
              className="  text-2xl md:text-4xl  tracking-1.5 font-lato flex items-center"
            >
              <img src={Eye} className="mr-2 w-9 " alt="" /> Smart Vision
            </div>
          </div>
          <div className=" md:px-0 leading-6 tracking-0.5   ">
            Smart Vision is an Accessible, Independent and Secure messaging App designed to make
            smartphones more accessible for users with visual impairments.
            <br />
            <br />
            Allows people to engage in
            <span style={{ color: '#7CCBCD' }}> hassle-free conversations,</span> Provides the
            finest accessibility features and secures privacy to improve the quality of life.
          </div>
        </div>
        <div className="hidden md:block col-span-1"></div>

        <div className="col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
          <div className="  px-5 md:px-0 md:pr-24 md:mt-0 mt-8 md:rounded-l-lg flex flex-col justify-center bg-brand-darkGrey2 md:pl-14 py-10  ">
            <div className=" mb-8">
              <div className=" mb-2 flex items-center">
                <img src={Check} className="mr-2 w-5 " alt="" /> Results
              </div>
              <div className=" leading-6 tracking-0.5">
                Raised awareness,{' '}
                <span style={{ color: '#7CCBCD' }}>
                  advanced accessibility features, Inclusive and easy to use space.
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" mb-2 flex items-center">
                <img src={BriefCase} className="mr-2 w-5 " alt="" /> <div>Contribution</div>
              </div>
              <div className=" leading-6 tracking-0.5">
                Secondary Research, Brainstorming Business goals, User Interviews, Journey Mapping,
                Ideation, Interface Design, Prototyping.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className=" pt-[136px] ">
        <div className="px-5 md:px-0 col-span-12">
          <WorkHeading text={'purpose'} />
        </div>
        <div className="grid grid-cols-12 font-lato">
          <div className="px-5 md:px-24 col-span-12 md:col-span-5 md:bg-brand-darkGrey2 leading-7 ">
            <div className=" text-2xl  tracking-1.5 mb-8 flex items-center">
              <img src={Bullseye} className="mr-2 w-6 " alt="" /> Goals
            </div>
            <div className="my-5 ">
              1. Allow them to connect with people{' '}
              <span style={{ color: '#7CCBCD' }}>Independently.</span>
              <br />
              2. Provide essential <span style={{ color: '#7CCBCD' }}>Accessibility features.</span>
              <br />
              3. Make it easier to share information.
              <br />
              4. <span style={{ color: '#7CCBCD' }}>Protect privacy and security</span>
              .
              <br />
              5. <span style={{ color: '#7CCBCD' }}>Promote awareness</span>
            </div>
          </div>
        </div>
      </div>
      {/* user segmentation */}
      <div className="p-5 md:p-20 font-lato leading-7">
        <div className="text-2xl md:text-4xl mb-8 tracking-1.5 flex items-center">
          <img src={Family} className="mr-2 w-8 " alt="" /> User segmentation
        </div>
        <div className="ml-3">
          <div className=" text-base font-lato-bold my-5 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg  ">
            User Type
          </div>

          <div className="block" style={{ letterSpacing: '0.5px' }}>
            Legally blind
            <ul className="list-disc">
              <li className="">
                A legally blind individual is considered sightless if contact lenses or{' '}
                <span style={{ color: '#7CCBCD' }}>eyeglasses cannot correct their vision.</span>
              </li>
              <li className="my-5">
                The normal vision is 20/20. That means an object can be seen correctly 20 feet away.
                But the vision of a legally blind is{' '}
                <span style={{ color: '#7CCBCD' }}>20/200 or less</span>. This means if an object is{' '}
                <span style={{ color: '#7CCBCD' }}>200 feet away,</span> they have to stand{' '}
                <span style={{ color: '#7CCBCD' }}>20 feet away to see it evidently.</span>
              </li>
            </ul>
          </div>
          {/* primary  */}
          <div className=" text-base font-lato-bold my-5  mt-8 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg  ">
            Primary User
          </div>
          <div className="" style={{ letterSpacing: '0.5px' }}>
            <ul className="list-disc">
              <li className="">
                These are the users who{' '}
                <span style={{ color: '#7CCBCD' }}>require messaging apps the most.</span>
              </li>
              <li className="my-5">
                They mostly utilize the app to{' '}
                <span style={{ color: '#7CCBCD' }}>share work-related information, </span>
                promote their business, share valuable data, and have a shared platform for
                professional discussions, meetings, and so on.
              </li>
              <li className="my-5">
                Examples :{' '}
                <span style={{ color: '#7CCBCD' }}>
                  Teachers, Bloggers, Youtubers, Advocates etc.
                </span>{' '}
              </li>
              <li className="my-5">
                Age : <span style={{ color: '#7CCBCD' }}>23 - 60</span>{' '}
              </li>
            </ul>
          </div>
          {/* secondary  */}
          <div className=" text-base font-lato-bold my-5  mt-8 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg  ">
            Secondary User
          </div>
          <div className="" style={{ letterSpacing: '0.5px' }}>
            <ul className="list-disc">
              <li className="">
                People who use it for <span style={{ color: '#7CCBCD' }}>casual interactions.</span>
              </li>
              <li className="my-5">
                Text messaging is the most common way for{' '}
                <span style={{ color: '#7CCBCD' }}>teenagers and young adults</span> to communicate.
              </li>
              <li className="my-5">
                Examples : High school and{' '}
                <span style={{ color: '#7CCBCD' }}>College students. </span>
              </li>
              <li className="my-5">
                {' '}
                Age : <span style={{ color: '#7CCBCD' }}>15+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* challenge */}
      {/* <div className="bg-brand-darkGrey2 font-lato my-[130px] md:my-0  p-5 md:px-24 md:py-32 py-10 "> */}
      <div className="bg-brand-darkGrey2 my-[130px] md:my-0 p-5 md:px-24 md:py-32 py-10 font-lato   ">
        <WorkHeading text={'challenge'} />

        <div className="grid grid-cols-12  items-center">
          <div className="col-span-12 md:col-span-6 relative ">
            <Quote
              className="hidden md:block absolute -top-4 md:-top-7  w-4 md:w-7 h-4 md:h-6  "
              stroke="none"
            />
            <Quote className="block md:hidden w-7 h-6  mb-6 " stroke="none" />
            <div
              className="font-lato  tracking-0.5 leading-7  ml-0 md:ml-9"
              style={{
                color: '#FEFEFE',
              }}
            >
              How might we design a Messaging app which is{' '}
              <span style={{ color: '#7CCBCD' }}> Inclusive</span> to people with impaired vision
              making their{' '}
              <span style={{ color: '#7CCBCD' }}>
                communication experience hassle -free and economical.
              </span>
            </div>
          </div>
          <div className="hidden md:block col-span-1"></div>

          <img
            src={Challenges}
            className="w-full h-full col-span-12 mt-6 md:mt-0 object-contain  object-center md:col-span-5 "
            alt=""
          />
        </div>
      </div>
      {/* problem identification */}
      <div className="    h-full">
        <div className=" px-5 md:p-24  ">
          <WorkHeading text={'research'} />
        </div>
        <div className="   ">
          <div className=" px-5 md:px-24 text-2xl md:text-4xl text-left flex   md:-ml-2  tracking-1.5 font-lato ">
            <img src={GuideDog} alt="" className="w-9 h-9  mr-2  " />{' '}
            <div>Identifying the problem</div>
          </div>
          <ul className="  list-disc ml-5 px-5 md:px-24">
            <li className="my-3">
              While searching for users to interview, I couldn’t find any relevant people, thanks to
              the pandemic :’) During which, I discovered that{' '}
              <span style={{ color: '#7CCBCD' }}>
                people in India are unfamiliar of legal <br /> blindness
              </span>
            </li>
            <li className="my-3">
              I was able to interview two of the teammates with different levels of work experience.
            </li>{' '}
            <li className="my-3">
              As a result, I reached out to individuals on the internet and, to my surprise, I was
              able to connect with <span style={{ color: '#7CCBCD' }}>global audience </span>fitting
              into the right category.
            </li>
            <li className="my-3">
              I interviewed around 8 participants in total through{' '}
              <span style={{ color: '#7CCBCD' }}>videoconferencing and Google forms.</span>
            </li>
          </ul>
          <div className="px-0 md:px-24 w-full my-8">
            <img src={Problem} className="w-full" alt="" />
          </div>
          <ul className="  list-disc ml-5 px-5 md:px-24 md:pt-24">
            <li className="mt-[80px] mb-6 md:my-3">
              Next, I Grouped Insights based on{' '}
              <span style={{ color: '#7CCBCD' }}>
                similarity of cognitive patterns and characteristics{' '}
              </span>
              for the segmented users to create personas.
            </li>
          </ul>
          <div className="px-0 md:px-24 w-full my-8">
            <img src={Problem2} className="w-full" alt="" />
          </div>{' '}
          <ul className="mb-8 list-disc ml-5 px-5 md:px-24 md:pb-24">
            <li className="mt-[80px] mb-6 md:my-3">
              Finally, I developed a{' '}
              <span style={{ color: '#7CCBCD' }}>Journey map for prospective scenarios</span> to
              help me understand and analyze the problem in depth.
            </li>
          </ul>
          <div className="px-0 md:px-24 w-full my-8">
            <img src={Problem3} className="w-full" alt="" />
          </div>
        </div>
      </div>
      {/* key points */}
      <div className="px-5 pt-[140px] md:p-24 h-full">
        <div className="  text-2xl flex items-center md:text-4xl my-8 tracking-1.5 font-lato  ">
          <img src={OldKey} alt="" className="w-8 mr-2" /> Key pain-points
        </div>
        <div className="md:px-3 grid grid-cols-1 md:grid-cols-2 ">
          <div className="col-span-1 py-2 px-0 md:p-5">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: '4px',
              }}
              className="w-full p-5 h-full rounded-md bg-brand-darkGrey2 "
            >
              <div className=" font-lato mb-6 ">Letters</div>
              <ul className="my-0 md:my-8 list-decimal leading-7">
                <li className="ml-4">Struggles while reading.</li>
                <li className="ml-4">
                  Prefers <span style={{ color: '#7CCBCD' }}>bold and enlarged letters.</span>
                </li>
                <li className="ml-4">
                  Keyboard letters are <span style={{ color: '#7CCBCD' }}>not legible enough.</span>{' '}
                  Feels <span style={{ color: '#7CCBCD' }}>time consuming</span> with TTS unless
                  you’ve mastered it.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 py-2 px-0 md:p-5">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: '4px',
              }}
              className="w-full p-5 h-full rounded-md bg-brand-darkGrey2 "
            >
              <div className=" font-lato mb-6 ">TTS</div>
              <ul className="my-0 md:my-8 list-decimal ml-4 leading-7">
                <li>
                  <span style={{ color: '#7CCBCD' }}>Cannot describe texts in images.</span>
                </li>
                <li>Over informative</li>
                <li>
                  It’s a <span style={{ color: '#7CCBCD' }}>pain texting in group chats since</span>{' '}
                  most of the times messages are read from the first if a new external message pops
                  up.
                </li>
                <li>Searching messages from long back is difficult.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 py-2 px-0 md:p-5 h-auto">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: '4px',
              }}
              className="w-full h-full p-5 rounded-md bg-brand-darkGrey2 "
            >
              <div className=" font-lato mb-6 ">Images and Videos</div>
              <ul className="my-0 md:my-8  leading-7">
                <li className="">
                  Emojis and images are{' '}
                  <span style={{ color: '#7CCBCD' }}>difficult to perceive.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 py-2 px-0 md:p-5 h-full">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: '4px',
              }}
              className="w-full h-full p-5 rounded-md bg-brand-darkGrey2 "
            >
              <div className=" font-lato mb-6 ">Feel</div>
              <ul className="my-0 md:my-8 list-decimal ml-4 leading-7">
                <li>
                  Doesn’t prefer people to{' '}
                  <span style={{ color: '#7CCBCD' }}>hear their messages aloud.</span>
                </li>
                <li>Requests someone else to read it for him</li>
                <li>
                  Colors are either very bright or too dull, and{' '}
                  <span style={{ color: '#7CCBCD' }}>Light mode strains eyes.</span>
                </li>
                <li>Reads messages in the evening.</li>
                <li>Quick way to connect with people is needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="bg-brand-black pt-[136px] md:pt-24 hidden md:block h-full">
        <div className="px-5 md:px-24">
          <WorkHeading text={'solutions'} />
        </div>

        <div className="grid grid-cols-12 font-lato ">
          {/* 1 */}
          <div className="col-span-12 grid grid-cols-12  px-5 md:px-24">
            <div className="col-span-12 md:col-span-7 flex bg-brand-black  items-center justify-center text-brand-white  ">
              <div className="h-full w-full">
                <div className="text-4xl">📐 Features</div>
                <div className="mt-130 flex  md:pl-24">
                  <div className="">
                    <div className="my-8">1. Screen recorder</div>
                    <ul className="list-disc ml-4">
                      <li className="my-9">
                        Screen readers speak what is on the screen as the finger explores. <br />{' '}
                        They are simple to understand and control.
                      </li>
                      <li className="my-9">
                        At any moment,{' '}
                        <span style={{ color: '#7CCBCD' }}>
                          double-tap the text to activate the screen reader.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 hidden md:flex -mt-10 mb-130  md:pr-24 justify-end">
              <img
                src={Phone1}
                className="  "
                style={{
                  width: '290px',
                }}
                alt=""
              />
            </div>
          </div>
          {/* 2 */}
          <div className="col-span-12 grid grid-cols-12  px-5 md:px-24  mt-[130px] md:mt-0 pb-10 md:pb-0 bg-brand-darkGrey2">
            <div className="hidden md:flex md:col-span-5 col-span-12  -mt-32 items-center md:pl-24">
              <img
                src={Phone2}
                className=""
                style={{
                  width: '290px',
                }}
                alt=""
              />
            </div>
            <div className="col-span-12 md:col-span-7 flex    justify-end text-brand-white px-3 md:pr-24 pt-10 md:pt-0  md:mt-24">
              <div>
                <div className="">2. Image description</div>
                <ul className="list-disc ml-4">
                  <li className="my-9">
                    Legally blind individuals can{' '}
                    <span style={{ color: '#7CCBCD' }}>
                      understand the texts better than <br />
                      images.
                    </span>{' '}
                    Screen readers can’t interpret images.
                  </li>
                  <li className="my-9">
                    Hence, Image descriptions are used to{' '}
                    <span style={{ color: '#7CCBCD' }}>
                      describe Information from <br />
                      images.
                    </span>{' '}
                    They can also generate{' '}
                    <span style={{ color: '#7CCBCD' }}>alt text automatically</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-12 mt-[130px] md:mt-0">
              <div className="col-span-12 md:col-span-7 flex md:mb-20   md:pl-24 text-white md:mt-32">
                <div>
                  <div className="my-8">3. Speech Recognition</div>
                  <ul className="list-disc ml-4">
                    <li className="mt-9">
                      It enables a program to process{' '}
                      <span style={{ color: '#7CCBCD' }}>human speech to readable text.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5 col-span-12 hidden md:flex -mt-10 absolute   right-48 justify-end">
                <img
                  src={Phone3}
                  className=""
                  style={{
                    width: '290px',
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* 3 */}

          {/* 4 */}
          <div className="col-span-12 md:px-24 px-5 grid grid-cols-12 mt-[80px] md:mt-0">
            <div className="md:col-span-5 mt-36 col-span-12 hidden md:flex md:pl-24 ">
              <img
                src={Phone4}
                className=""
                style={{
                  width: '290px',
                }}
                alt=""
              />
            </div>
            <div className="col-span-12 md:col-span-7 flex   justify-end text-white px-3 md:pr-24  md:mt-96">
              <div>
                <div className="my-8">4. OCR</div>
                <ul className="list-disc ml-4">
                  <li className="my-9">
                    <span style={{ color: '#7CCBCD' }}>Optical Character Recognition</span> is the
                    technology that detects{' '}
                    <span style={{ color: '#7CCBCD' }}>
                      text <br /> inside digital pictures{' '}
                    </span>
                    whether typed or handwritten
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="col-span-12 md:px-24 grid grid-cols-12 px-5 relative mt-[130px] md:mt-0">
            <div className="col-span-12 md:col-span-7 flex   text-white px-3 md:pl-24 md:mt-36 ">
              <div>
                <div className="">5. Magnifier</div>
                <ul className="list-disc ml-4">
                  <li className="my-9">
                    The user will not always be pleased with the screen readers and <br /> their{' '}
                    <span style={{ color: '#7CCBCD' }}>privacy may be compromised</span>
                  </li>
                  <li className="my-9">
                    The magnifier allows the user to have a closer look at the text or <br />
                    image while <span style={{ color: '#7CCBCD' }}>respecting their privacy.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 hidden md:flex -mt-10 absolute  right-48">
              <img
                src={Phone5}
                className=""
                style={{
                  width: '290px',
                }}
                alt=""
              />
            </div>
          </div>
          {/* 6 */}
          <div className="col-span-12 grid grid-cols-12 md:px-24 px-5 mt-[130px] md:mt-0 bg-brand-darkGrey2 md:pt-80">
            <div className="md:col-span-6 col-span-12 hidden md:flex  md:pl-24 md:mb-48">
              <img
                src={Phone6}
                className=""
                style={{
                  height: '290px',
                }}
                alt=""
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex  justify-end text-white px-3 md:pr-28 my-14">
              <div>
                <div className="">6. Braille keyboard</div>
                <ul className="list-disc ml-4">
                  <li className="my-9">
                    Braille keyboard that can be{' '}
                    <span style={{ color: '#7CCBCD' }}>calibrated to human touch.</span> Private{' '}
                    <br /> and Alternative option to speech recognition.
                  </li>
                  <li className="my-9">
                    Prerequisite : A person must be{' '}
                    <span style={{ color: '#7CCBCD' }}>familiar with braille.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features phone */}
      <div className="bg-brand-black pt-[136px] md:hidden md:pt-24  h-full">
        <div className="px-5 md:px-24">
          <WorkHeading text={'solutions'} />
        </div>
        <div className="text-4xl mb-10">📐 Features</div>
        {/* 1 */}
        <div className="px-5 ">
          <div className="mb-4">1. Screen recorder</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone1} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="my-9">
              Screen readers speak what is on the screen as the finger explores. <br /> They are
              simple to understand and control.
            </li>
            <li className="my-9">
              At any moment,{' '}
              <span style={{ color: '#7CCBCD' }}>
                double-tap the text to activate the screen reader.
              </span>
            </li>
          </ul>
        </div>
        {/* 2 */}
        <div className="px-5 mt-[136px] bg-brand-darkGrey2 py-10 ">
          <div className="mb-4">2. Image description</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone2} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="my-9">
              Legally blind individuals can{' '}
              <span style={{ color: '#7CCBCD' }}>
                understand the texts better than <br />
                images.
              </span>{' '}
              Screen readers can’t interpret images.
            </li>
            <li className="my-9">
              Hence, Image descriptions are used to{' '}
              <span style={{ color: '#7CCBCD' }}>
                describe Information from <br />
                images.
              </span>{' '}
              They can also generate{' '}
              <span style={{ color: '#7CCBCD' }}>alt text automatically</span>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="px-5 mt-[136px]   ">
          <div className="mb-4">3. Speech Recognition</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone3} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="mt-9">
              It enables a program to process{' '}
              <span style={{ color: '#7CCBCD' }}>human speech to readable text.</span>
            </li>
          </ul>
        </div>
        {/* 4 */}
        <div className="px-5 mt-[136px] bg-brand-darkGrey2 py-10 ">
          <div className="mb-4">4. OCR</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone4} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="my-9">
              <span style={{ color: '#7CCBCD' }}>Optical Character Recognition</span> is the
              technology that detects{' '}
              <span style={{ color: '#7CCBCD' }}>
                text <br /> inside digital pictures{' '}
              </span>
              whether typed or handwritten
            </li>
          </ul>
        </div>
        {/* 5*/}
        <div className="px-5 mt-[136px]  ">
          <div className="mb-4">5. Magnifier</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone5} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="my-9">
              The user will not always be pleased with the screen readers and <br /> their{' '}
              <span style={{ color: '#7CCBCD' }}>privacy may be compromised</span>
            </li>
            <li className="my-9">
              The magnifier allows the user to have a closer look at the text or <br />
              image while <span style={{ color: '#7CCBCD' }}>respecting their privacy.</span>
            </li>
          </ul>
        </div>
        {/* 6*/}
        <div className="px-5 mt-[136px]   ">
          <div className="mb-4">6. Braille keyboard</div>
          <div className="  px-4 flex items-center w-full mb-6 justify-center">
            <img src={Phone6} className="w-full" alt="" />
          </div>
          <ul className="list-disc ml-4">
            <li className="my-9">
              Braille keyboard that can be{' '}
              <span style={{ color: '#7CCBCD' }}>calibrated to human touch.</span> Private <br />{' '}
              and Alternative option to speech recognition.
            </li>
            <li className="my-9">
              Prerequisite : A person must be{' '}
              <span style={{ color: '#7CCBCD' }}>familiar with braille.</span>
            </li>
          </ul>
        </div>
      </div>
      {/* ui guide system */}
      <div style={{}} className="px-5 md:px-24 h-full pt-[130px]  ">
        <div className="flex items-center  text-2xl md:text-4xl my-8 tracking-1.5 font-lato ">
          <img src={GuideDog} alt="" className="w-9 mr-2" /> UI guide system
        </div>
        <ul className="ml-4 list-disc">
          <li className="my-4 md:my-8">
            The visual designs were made by considering the{' '}
            <span style={{ color: '#7CCBCD' }}>WCAG accessibility guidelines.</span>
          </li>

          <li className="my-4 md:my-8">
            The goal was to use{' '}
            <span style={{ color: '#7CCBCD' }}>contrasting yet relaxing hues</span> to help readers
            read the strain-free content.
          </li>

          <li className="my-4 md:my-8">
            Our users emphasized on having a{' '}
            <span style={{ color: '#7CCBCD' }}>dark mode to achieve maximum contrast.</span> Because
            pure black caused eye strain, this was modified to #121212 with a high contrast ratio.
          </li>
        </ul>
        {/* color thingy */}
      </div>
      <div className="w-full md:px-24 hidden md:block">
        <img src={colorGuides} className="w-full" alt="" />
      </div>
      <div className="w-full my-4 md:hidden block">
        <img src={mobColor1} className="w-full" alt="" />
      </div>
      <div className="w-full my-4 md:hidden block">
        <img src={mobColor2} className="w-full" alt="" />
      </div>
      <div className="w-full my-4 md:hidden block">
        <img src={mobColor3} className="w-full" alt="" />
      </div>
      <div className="w-full my-4 md:hidden block">
        <img src={mobColor4} className="w-full" alt="" />
      </div>
      <a
        onMouseEnter={largeEnter}
        onMouseLeave={imageEnter}
        // href="https://www.notion.so/Smart-Vision-c7010846836246598e1c49aba44640eb"
        // target="_blank"
        // rel="noreferrer"
        style={{
          color: '#424242',
        }}
        className="tracking-3 mb-[126px] md:mb-40 mt-20 md:mt-24 px-5 flex items-center md:px-24 text-sm md:text-base  uppercase font-lato-bold"
      >
        <ArrowRightCircle
          width={30}
          height={30}
          color="#424242"
          strokeWidth={1.5}
          className="mr-4"
        />
        read full case study <img src={Teacup} alt="" className="w-5 md:w-9 ml-2" />
      </a>
      <WorkHero
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        work={{
          id: 4,
          title: 'HappilyEver',
          domain: 'Branding',
          bgColor: '#EB9B9B',
          description:
            'Designing brands to be more people \n Interactive : Adding value to future Brand \n Identities ',
          gif: true,
          mobGif: true,
          image: 'http://theme.dsngrid.com/droow-l/assets/img/project/project5/3.jpg',
          video:
            'https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif',
          mobVideo:
            'https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif',
          link: '/happilyever',
        }}
        next={true}
      />{' '}
      <motion.div className="cursor hidden md:flex" variants={variants} animate={cursorVariant} />
    </div>
  )
}

export default SmartVision
