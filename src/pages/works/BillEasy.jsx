import { useState, useEffect } from 'react'
import { WorkHero, WorkVideos, Navbar, WorkHeading, Loader } from '../../components'

import { ReactComponent as Quote } from '../../assets/icons/quotestart.svg'
import { ArrowRightCircle } from 'react-feather'
import { motion } from 'framer-motion'
import {
  OldTeacup as Teacup,
  BriefCase,
  Bullseye,
  Check,
  Clipboard,
  MonocleFace,
  Family,
  LightBulb,
  OldKey,
  Paintbrush,
  Fist,
  Calendar,
  Thermometer,
  TippingHand,
  TriangularRuler,
  GuideDog,
} from '../../assets/icons/fluent'
// images
import collage from '../../assets/works/billEasy/billEasyCaseStudyCollage.png'
import insightsImg from '../../assets/works/billEasy/billEasyInsights.svg'
import usability1 from '../../assets/works/billEasy/billEasyUsabilityTesting1.svg'
import usability2 from '../../assets/works/billEasy/billEasyUsabilityTesting2.svg'
import usability3 from '../../assets/works/billEasy/billEasyUsabilityTesting3.svg'
import usability4 from '../../assets/works/billEasy/billEasyUsabilityTesting4.svg'
import usabilityMatrix from '../../assets/works/billEasy/billEasyUsabilityMatrix.svg'
import persona1 from '../../assets/works/billEasy/billEasyPersona1.svg'
import persona2 from '../../assets/works/billEasy/billEasyPersona2.svg'
import persona3 from '../../assets/works/billEasy/billEasyPersona3.svg'
import Challenges from '../../assets/works/billEasy/challenges.svg'
import HeatMap from '../../assets/works/billEasy/heatMap.svg'

const BillEasy = () => {
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
    id: 1,
    title: 'BillEasy',
    domain: 'Research',
    bgColor: '#F7FCFF',
    description:
      'Creating an efficient accounting process for \n evolving businesses and enhanced work systems.',
    gif: false,
    mobGif: false,
    image: 'http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg',
    video:
      'https://res.cloudinary.com/samydoo/video/upload/v1663049954/SamWebsite/Work/Desktop/BillEasy-short_yhhk58_kyqft8.webm',
    video2:
      'https://res.cloudinary.com/samydoo/video/upload/v1663016727/SamWebsite/Work/Desktop/C01_yqtldj_byvhkv.webm',
    mobVideo:
      'https://res.cloudinary.com/samydoo/video/upload/v1663049954/SamWebsite/Work/Desktop/BillEasy-short_yhhk58_kyqft8.webm',
    link: '/billeasy',
  }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])
  return (
    <div className="w-full overflow-clip">
      {loading && (
        <div className="fixed w-full h-full z-50">
          <br />
          <Loader />
          <br />
        </div>
      )}
      <div onMouseEnter={imageEnter} className="text-justify bg-brand-black text-brand-white">
        <Navbar largeEnter={largeEnter} imageEnter={imageEnter} defaultColor={'white'} />
        <WorkHero
          work={work}
          largeEnter={largeEnter}
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
        />
        <WorkVideos
          setLoading={setLoading}
          textEnter={textEnter}
          textLeave={textLeave}
          largeEnter={largeEnter}
          imageEnter={imageEnter}
          work={work}
        />

        {/* project brief */}
        <div className=" px-5 pt-[105px] md:py-10 md:px-24 md:my-20 hidden md:flex flex-wrap justify-between  ">
          <div className="  my-5    ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
            </div>
            <div className="font-lato  mt-2">In-house, Fin-Tech</div>
          </div>
          <div className=" w-1/2 md:w-auto my-5 pl-7 md:pl-0">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-2">
              <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
            </div>
            <div className="font-lato  mt-2">3 months</div>
          </div>
          <div className=" w-max md:w-auto my-5   ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
            </div>
            <div className="font-lato  mt-2">UX & UI Design Intern</div>
          </div>
          <div className=" w-max md:w-auto my-5  md:pl-0">
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
              <div className="font-lato  mt-2">In-house, Fin-Tech</div>
            </div>
            <div className=" w-max md:w-auto my-5   ">
              <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
                <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
              </div>
              <div className="font-lato  mt-2">UX & UI Design Intern</div>
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
        <div className="  pt-[96px] md:py-10 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
          <div className="px-5 md:px-0 col-span-12">
            <WorkHeading text={'concept'} />
          </div>
          <div className="px-5 md:px-0 col-span-12 md:col-span-6 h-full flex flex-col    ">
            <div className="flex items-center">
              <div
                style={{
                  marginBottom: '30px',
                }}
                className="  text-2xl md:text-4xl  tracking-widest font-lato  flex items-center"
              >
                <img src={LightBulb} className="mr-2 w-9 " alt="" /> BillEasy
              </div>
            </div>
            <div className="  leading-6 tracking-0.5   ">
              Introducing BillEasy. An{' '}
              <span style={{ color: '#6AC296' }}>Easy, Efficient and Convenient</span> digital
              Invoicing experience. A solution designed to help accounting teams{' '}
              <span style={{ color: '#6AC296' }}>
                create, share, store, and track GST-compliant invoices
              </span>{' '}
              in just a few clicks, from{' '}
              <span style={{ color: '#6AC296' }}>anywhere and at any time!</span> <br /> <br /> No
              more manual entries, tedious work processes, data loss or struggle to recall complex
              Excel shortcuts. From fast-tracking and organizing data to{' '}
              <span style={{ color: '#6AC296' }}>streamlining</span> your work processes to{' '}
              <span style={{ color: '#6AC296' }}>improve productivity</span>, BillEasy has you
              covered 😎
            </div>
          </div>
          <div className="px-5 md:px-0 hidden md:block col-span-1"></div>

          <div className=" col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
            <div className="  px-5 md:px-0 md:pr-24 md:rounded-l-lg flex flex-col justify-center mt-[32px] md:mt-0 bg-brand-darkGrey2 md:pl-14 py-10  ">
              <div className=" mb-8">
                <div className=" mb-2 flex items-center">
                  <img src={Check} className="mr-2 w-5 " alt="" /> Results
                </div>
                <div className=" leading-6 tracking-0.5">
                  <span style={{ color: '#6AC296' }}>70% Increased user satisfaction.</span>{' '}
                  Estimated to Optimize <span style={{ color: '#6AC296' }}>productivity by 5x</span>{' '}
                  and <span style={{ color: '#6AC296' }}>Increased transparency.</span>{' '}
                </div>
              </div>
              <div className=" ">
                <div className=" mb-2 flex items-center">
                  <img src={BriefCase} className="mr-2 w-5 " alt="" /> <div>Contribution</div>
                </div>
                <div className=" leading-6 tracking-0.5">
                  Interviews, Qualitative Research, Ethnographic Research, Competitive Audit,
                  Interface Designs, Testing.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* purpose */}
        <div className="px-5 pb-[136px] text-brand-white md:pb-10 pt-[96px] md:pt-10 md:px-24 md:mb-24">
          <WorkHeading text={'purpose'} />

          <div className="grid grid-cols-12 font-lato">
            <div className="col-span-12 md:col-span-4">
              <div className=" text-2xl  tracking-1.5 mb-8 flex items-center">
                <img src={Bullseye} className="mr-2 w-6 " alt="" /> Goals
              </div>
              <div className=" tracking-0.5 leading-7 ">
                1. Optimize efficiency <br />
                2. Minimal learning curve <br />
                3. Save time
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 ">
              <div className="text-2xl font-lato tracking-1.5 mb-8 flex items-center mt-[47px] md:mt-0">
                <img src={Family} className="mr-2 w-6 " alt="" /> Target audience
              </div>
              <div className="flex flex-col md:flex-row   ">
                <div className="mr-16 ">
                  <div className="font-lato-bold mb-2">Direct users</div>
                  <div
                    className="mr-2 md:mr-3 px-[16px] py-[10px] text-center  rounded md:px-6 md:py-3 w-max text-brand-white"
                    style={{
                      background: '#111111',
                    }}
                  >
                    Accounts team
                  </div>
                </div>
                <div className="mr-16 mt-4 md:mt-0">
                  <div className="font-lato-bold mb-2">Indirect users</div>
                  <div className="flex w-full justify-between md:justify-start    ">
                    <div
                      className="mr-2 md:mr-3 px-[16px] py-[10px] text-center  rounded md:px-6 md:py-3 text-brand-white"
                      style={{
                        background: '#111111',
                      }}
                    >
                      Stakeholders
                    </div>
                    <div
                      className="mr-2 md:mr-3 px-[16px] text-center rounded min-w-max py-[10px] md:px-6 md:py-3 text-brand-white"
                      style={{
                        background: '#111111',
                      }}
                    >
                      Business Intelligence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* challenge */}
        <div className="bg-brand-darkGrey2 font-lato  p-5 md:px-24 md:py-32 py-10 ">
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
                How might we design a B2B invoicing experience which is{' '}
                <span style={{ color: '#6AC296' }}>intuitive</span> and helps our team to fasten up
                the process by completing tasks, resulting in{' '}
                <span style={{ color: '#6AC296' }}>increased productivity and time savings</span> ?
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
        <div className=" px-5 pt-24 md:px-24 md:pt-36 mb-[55px] md:mb-[100px]   grid grid-cols-12  h-full">
          <WorkHeading text={'research'} />

          <div
            style={{
              marginBottom: '30px',
            }}
            className="col-span-12 md:col-span-6 h-full  "
          >
            <div className="flex items-center">
              <div className="  text-2xl md:text-4xl flex items-center  md:-ml-2  tracking-1 md:tracking-1.5 font-lato ">
                <img src={GuideDog} alt="" className="w-9 mr-2" /> Identifying the problem
              </div>
            </div>
            <ul className="my-8 list-disc ml-4 text-justify tracking-0.5 leading-7">
              <li className="my-3">
                Our initial priority was to design a solution for our company. To identify the core
                problems, I approached the core team responsible for managing invoices{' '}
                <span style={{ color: '#6AC296' }}>The Accounts Department.</span>
              </li>
              <li className="my-3">
                I was able to interview{' '}
                <span style={{ color: '#6AC296' }}>two of the teammates</span> with different levels
                of work experience.
              </li>{' '}
              <li className="my-3">
                Interview goals: To learn about their{' '}
                <span style={{ color: '#6AC296' }}>
                  work life, specific problems and motivations
                </span>{' '}
                and gain behavioral understanding.
              </li>
            </ul>
          </div>
          <div className="hidden md:block col-span-1"></div>
          <div className="col-span-12 md:col-span-5 h-full flex flex-col   md:items-center justify-center">
            <a
              href="https://www.notion.so/Interview-questions-f44bac2a862146ec90e5aa9c18827e86"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="flex items-center"
            >
              <ArrowRightCircle
                width={30}
                height={30}
                color="#3D6BC5"
                strokeWidth={1}
                className="mr-4"
              />
              <div
                style={{
                  color: '#3D6BC5',
                  // letterSpacing: "3px",
                }}
                className="uppercase text-base font-lato-bold tracking-3"
              >
                Interview questions
              </div>
            </a>
          </div>
        </div>
        {/* insights */}
        <div className="px-5 md:px-24 md:py-0 font-lato md:mb-130 ">
          <div
            className=" text-2xl flex items-center"
            style={{
              marginBottom: '30px',
            }}
          >
            <img src={OldKey} alt="" className="w-6 mr-2" /> Insights
          </div>
          <div className=" text-base grid grid-cols-12 ">
            <div className="col-span-12 md:col-span-6">
              <ul className=" list-disc ml-3 md:ml-5 tracking-0.5 leading-7 md:leading-6">
                <li className="">
                  Ninjaaslabs holds two businesses, a consultancy and its venture.
                  <ol className=" list-decimal md:ml-5">
                    <li className="my-6 md:my-4">
                      Ninjaaslabs operates on the B2B model, and generates{' '}
                      <span style={{ color: '#6AC296' }}>B2B invoices</span> for services.
                    </li>{' '}
                    <li className="my-6 md:my-4">
                      Jumkey (venture) is a marketplace that generates{' '}
                      <span style={{ color: '#6AC296' }}>B2C as well as B2B invoices</span> for
                      goods and services.
                    </li>
                  </ol>
                </li>
                <li className="my-6 md:my-4">
                  {' '}
                  It was found that B2C invoices for Jumkey were automatically generated through
                  amazon seller central, but B2B invoices for either of the businesses were{' '}
                  <span style={{ color: '#6AC296' }}>prepared manually using sheets.</span>
                </li>
                <li className="my-6 md:my-4">
                  {' '}
                  One major pain-point was{' '}
                  <span style={{ color: '#6AC296' }}> time-killing and manual process</span> of
                  invoice creation and report preparation.
                </li>{' '}
                <li className="my-6 md:my-4">
                  <span style={{ color: '#6AC296' }}> Multiple steps </span> to store the invoice.
                  (From Sheet’s → To Internal System → Drive (folders) → Mail (share))
                </li>{' '}
                <li className="my-6 md:my-4">
                  An experienced employee required roughly 15+ minutes to prepare a manual invoice,
                  but a fresher took <span style={{ color: '#6AC296' }}>more than 30 minutes</span>{' '}
                  to make the same invoice.
                </li>
                <li>
                  {' '}
                  It took them anything from{' '}
                  <span style={{ color: '#6AC296' }}>1-5 days to finish a report.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block col-span-1"></div>
            <div className=" col-span-12 md:col-span-5 mt-4 md:mt-0 hidden md:flex items-center justify-center">
              <img className="w-full object-center" src={insightsImg} alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-7 flex items-center md:hidden justify-center">
          <img className="w-full object-center scale-110" src={insightsImg} alt="" />
        </div>
        {/* usability testing */}
        <div className="p-5 md:px-24  py-10 md:py-[130px] mt-[130px] font-lato bg-brand-darkGrey2 w-full">
          <div className="grid-cols-12 grid mb-[48px] md:mb-[88px] ">
            <div className="col-span-12 md:col-span-6 h-full ">
              <div
                className=" text-brand-white text-2xl md:text-4xl  flex items-center "
                style={{
                  marginBottom: '30px',
                }}
              >
                <img src={MonocleFace} alt="" className="mr-2 w-9" /> Usability testing
              </div>
              <ul className="text-brand-white list-disc ml-4 text-justify leading-7 tracking-1.5 ">
                <li className="my-6 md:my-4">
                  The purpose of usability testing was to determine whether existing solutions in
                  the market truly addresses the problem better than the current manual approach,{' '}
                  <span style={{ color: '#6AC296' }}>meets users’ expectations</span> and help us in
                  making <span style={{ color: '#6AC296' }}>fact- based design decisions.</span>
                </li>

                <li className="my-6 md:my-4">
                  We chose to run a test on{' '}
                  <span style={{ color: '#6AC296' }}>Clear one software</span> through our
                  competitors’ study since it was close to our vision.
                </li>

                <li className="my-6 md:my-4">
                  After establishing usability matrix, we{' '}
                  <span style={{ color: '#6AC296' }}>compared Clear one</span> matrix to the matrix
                  obtained from <span style={{ color: '#6AC296' }}>excel sheets</span> (a manual
                  process).
                </li>
                <a
                  onMouseEnter={largeEnter}
                  onMouseLeave={imageEnter}
                  href="https://morning-jackrabbit-815.notion.site/UT-Detailed-Documentation-0c9b6fb704484844b6ebf1d113d81b53"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#3D6BC5',
                    marginTop: '30px',
                  }}
                  className="uppercase text-base hidden md:flex items-center font-lato-bold tracking-3 mt-10 md:my-5 "
                >
                  <ArrowRightCircle
                    width={30}
                    height={30}
                    color="#3D6BC5"
                    strokeWidth={1}
                    className="mr-4"
                  />
                  UT DOCUMENTATION
                </a>
              </ul>
            </div>
            <div className="hidden md:block col-span-1" />
            <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center">
              <img className="w-full object-center" src={usability1} alt="" />
              <a
                onMouseEnter={largeEnter}
                onMouseLeave={imageEnter}
                href="https://morning-jackrabbit-815.notion.site/UT-Detailed-Documentation-0c9b6fb704484844b6ebf1d113d81b53"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#3D6BC5',
                  marginTop: '30px',
                }}
                className="uppercase text-base flex md:hidden items-center font-lato-bold tracking-3 my-10 md:my-5 "
              >
                <ArrowRightCircle
                  width={30}
                  height={30}
                  color="#3D6BC5"
                  strokeWidth={1}
                  className="mr-4"
                />
                UT DOCUMENTATIOn
              </a>
            </div>
          </div>
          <div className=" text-brand-gray mb-5 flex  items-center">
            <img src={Thermometer} alt="" className="w-5 mr-2" />
            <div className="pl-3">Heat-map</div>
          </div>
          <div className="hidden md:block grid-cols-12">
            <img src={HeatMap} className="w-full" alt="" />
          </div>
          <div className="grid-cols-12 md:hidden grid ">
            <div className="col-span-12 md:col-span-6 h-full flex flex-col justify-start ">
              <img src={usability2} className="w-full   object-center" alt="" />
              <div className=" text-brand-gray mt-8 pl-3 ">Excel Sheet</div>
              <div className="hidden md:block col-span-1"></div>
            </div>

            <div className="hidden md:block col-span-1"></div>

            <div className="col-span-12 md:col-span-  h-full">
              <img
                src={usability3}
                className=" w-full col-span-12 md:col-span-5 mt-3   object-center"
                alt=""
              />
              <div className="my-3 text-brand-gray mt-8 ">Clear one Tax</div>

              <img
                src={usability4}
                className=" w-full col-span-12 md:col-span-5 my-3   object-center"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* usability matrix */}
        <div className=" pt-[150px] px-5 md:px-24 font-lato">
          <WorkHeading text={'outcomes'} />

          <div
            className="text-2xl md:text-4xl flex items-center "
            style={{
              marginBottom: '30px',
            }}
          >
            <img src={TriangularRuler} alt="" className="w-9 mr-2" /> Usability matrix results
          </div>
          <div className=" mb-2">
            <span
              style={{
                color: '#6AC296',
              }}
            >
              S1,S2 and S3
            </span>{' '}
            are the given scenarios to prepare invoices using{' '}
            <span
              style={{
                color: '#6AC296',
              }}
            >
              Excel sheets and Clear one{' '}
            </span>
            software.{' '}
          </div>
          <img src={usabilityMatrix} className="w-full hidden md:block" alt="" />
        </div>
        <img src={usabilityMatrix} className="w-full block md:hidden" alt="" />
        {/* crafting persona */}
        <div className="p-5 md:py-0 mt-[150px] md:px-24 font-lato">
          <div
            className="text-2xl md:text-4xl flex items-center"
            style={{
              marginBottom: '30px',
            }}
          >
            <img src={Paintbrush} alt="" className="w-9 mr-2" /> Crafting persona
          </div>
          <div className="grid grid-cols-12 leading-7">
            <div className="col-span-12 md:col-span-6 h-full flex flex-col justify-center ">
              <ul className="pl-8 list-disc">
                <li>
                  Based on the qualitative interview and usability testing results, we observed
                  that{' '}
                </li>
              </ul>
              <ol className="list-decimal ml-4">
                <li className=" my-6">
                  During the interview, Satish frequently mentioned that he’s satisfied with the
                  ongoing process of managing reports and invoices because he feels{' '}
                  <span style={{ color: '#6AC296' }}> confident about honing the skill, </span>
                  despite the shortcomings of sheets. Which led him to exhibit the{' '}
                  <span style={{ color: '#6AC296' }}>status quo bias</span> as he was unwilling to
                  adapt a new process to
                  <span style={{ color: '#6AC296' }}> avoid stressful learning.</span>
                </li>
                <li className=" my-6">
                  However, Srinivas being a fresher was able to{' '}
                  <span style={{ color: '#6AC296' }}>
                    {' '}
                    effectively communicate the pain-points{' '}
                  </span>{' '}
                  (some of which were similar to Satish’s).
                </li>
              </ol>
            </div>
            <div className="hidden md:block col-span-1"></div>
            <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center ">
              <div className="flex w-full justify-between  my-3 bg-brand-darkGrey2 rounded-md my pt-3 pb-[6px] px-4">
                <img src={persona1} className="w-[44px] md:w-14 h-[44px] md:h-14 mr-5" alt="" />
                <div>
                  <div className=" text-xs font-lato-italic ">
                    “ I’ve <span style={{ color: '#6AC296' }}>no problem</span> with the process, I
                    can perform same tasks without external software 🙂 “
                  </div>
                  <div
                    style={{
                      marginTop: '2px',
                      fontSize: '10px',
                    }}
                  >
                    Sateesh Grande , Lead Accountant
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-   my-3 bg-brand-darkGrey2 rounded-xl my pt-3 pb-[6px] px-4">
                <img src={persona2} className="w-[44px] md:w-14 h-[44px] md:h-14 mr-5" alt="" />
                <div>
                  <div className="text-xs font-lato-italic ">
                    “ Feels easy but I keep forgetting, I might’ve a{' '}
                    <span style={{ color: '#6AC296' }}>bad memory Ha Ha Ha!</span> 🤷“
                  </div>
                  <div
                    style={{
                      marginTop: '2px',
                      fontSize: '10px',
                    }}
                  >
                    Srinivas , Accountant
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={persona3} className="hidden md:block w-full mt-12" alt="" />
        </div>
        <img
          src={persona3}
          style={{
            transform: 'scale(107%)',
          }}
          className="block md:hidden w-full mt-12  object-center"
          alt=""
        />

        {/* case studies */}
        <div className="pt-130 md:pb-24 ">
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            style={{ color: '#6AC296' }}
            href="https://www.notion.so/BillEasy-Research-eede878d31d8405dba2c5543dbb3da67"
            target="_blank"
            rel="noreferrer"
            className="tracking-3 mb-[96px] md:mb-20 px-5 flex items-center md:px-24 text-sm md:text-base mt-16 md:mt-0   uppercase font-lato-bold"
          >
            <ArrowRightCircle
              width={30}
              height={30}
              color="#6AC296"
              strokeWidth={1.5}
              className="mr-4"
            />
            read full case study <img src={Teacup} alt="" className="w-9 ml-2" />
          </a>
          <div className="md:px-5 hidden md:block  my-10 md:my-0">
            <img src={collage} className="  md:w-full" alt="" />
          </div>
          {/* mobile vertical scroll thingy */}
          <div className="md:px-5 block md:hidden relative mt-10 mb-[124px] md:my-0  ">
            <div className="marqContainer md:hidden">
              <div className="marq">
                <img src={collage} className="  md:w-full" alt="" />
                <img src={collage} className="  md:w-full" alt="" />
                <img src={collage} className="  md:w-full" alt="" />
                <img src={collage} className="  md:w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* end screen */}
        <WorkHero
          largeEnter={largeEnter}
          next={true}
          imageEnter={imageEnter}
          work={{
            id: 2,
            title: 'BillEasy',
            domain: 'Visual Design',
            bgColor: '#fasd',
            description:
              'Creating an efficient accounting process for \n evolving businesses and enhanced work systems.',
            gif: false,
            mobGif: false,
            image: 'http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg',
            video:
              'https://res.cloudinary.com/samydoo/video/upload/v1663017008/SamWebsite/Work/Desktop/BillEasy_Visual_hzrwgo_rmmpq4.webm',
            mobVideo:
              'https://res.cloudinary.com/samydoo/video/upload/v1663017008/SamWebsite/Work/Desktop/BillEasy_Visual_hzrwgo_rmmpq4.webm',

            link: '/billeasy-visual-design',
          }}
        />
        <motion.div className="cursor hidden md:flex" variants={variants} animate={cursorVariant} />
      </div>
    </div>
  )
}

export default BillEasy
