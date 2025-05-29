import { useEffect, useState } from 'react'
import { WorkHero, WorkHeading, Navbar, Loader } from '../../components'
import { ArrowRightCircle } from 'react-feather'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
// assets
import invoiceGen from '../../assets/works/billEasyVisual/Page.png'
import invoiceDis from '../../assets/works/billEasyVisual/Share.png'
import invoiceStor from '../../assets/works/billEasyVisual/Cloud.png'
import reportTrack from '../../assets/works/billEasyVisual/Chart.png'
import moodBoard from '../../assets/works/billEasyVisual/Moodboard.svg'
import visual from '../../assets/works/billEasyVisual/VisualDesign.svg'
import invoiceG1 from '../../assets/works/billEasyVisual/InvoiceGen1.png'
import invoiceG2 from '../../assets/works/billEasyVisual/InvoiceGen2.svg'
import invDist from '../../assets/works/billEasyVisual/Distribution.svg'
import report from '../../assets/works/billEasyVisual/Report.svg'
import buttons from '../../assets/works/billEasyVisual/Buttons.svg'
import matrix from '../../assets/works/billEasyVisual/Matrix.svg'

// icons
import {
  MagicWand,
  SmallBlueDiamond,
  FramedPicture,
  Eyes,
  GuideDog,
  PartyingFace,
  OldTeacup as Teacup,
  ClinkingGlasses,
  InLotusPosition,
} from '../../assets/icons/fluent'

const BillEasyVisual = () => {
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

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  const work = {
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
  }
  return (
    <div className="overflow-x-hidden  bg-brand-black text-brand-white">
      {loading && (
        <div className="fixed loaderDiv w-screen h-screen">
          {' '}
          <Loader />{' '}
        </div>
      )}
      <Navbar largeEnter={largeEnter} imageEnter={imageEnter} defaultColor={'white'} />
      <WorkHero work={work} largeEnter={largeEnter} imageEnter={imageEnter} />
      {/* Process */}
      <div className="font-lato px-5 pt-32  md:px-24 w-full h-full">
        <WorkHeading text={'Process'} />
      </div>
      {/* Design Principles */}
      <div className="font-lato h-full flex w-full flex-col md:px-24 px-5">
        <div className="  text-2xl md:text-4xl md:mb-[30px] mb-6 md:my-0 tracking-1.5 font-lato flex items-center">
          <img src={MagicWand} className="mr-2 w-9 " alt="" /> Design principles
        </div>
        <ul className="font-lato text-base mb-6 md:mb-[30px] ml-4 list-disc md:tracking-normal tracking-0.5">
          <li>
            We created four <span style={{ color: '#6AC296' }}>design principles</span> that served
            as a core value of our UI design related to{' '}
            <span style={{ color: '#6AC296' }}>user pain points.</span>
          </li>
        </ul>
        <div className="md:px-5 md:tracking-normal tracking-widest flex md:flex-row flex-col font-lato font-normal text-brand-black w-full md:auto md:text-base text-base justify-between md:items-center">
          <div className="px-5 py-6 md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            1. Intuitive
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            2. Time efficient
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            3. Empathy
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 mb-3 md:mt-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            4. Safe
          </div>
        </div>
      </div>
      {/* Use Cases */}
      <div className="font-lato h-full flex w-full flex-col md:px-24 px-5 pt-32">
        <div
          style={{
            marginBottom: '30px',
          }}
          className="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
        >
          <img src={SmallBlueDiamond} className="mr-2 w-9 " alt="" /> Use Cases
        </div>
        <div className="md:px-5 md:tracking-normal tracking-widest  flex md:flex-row flex-col font-lato font-normal text-brand-black w-full md:auto md:text-base text-base justify-between md:items-center">
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={invoiceGen} width="30px" alt="page" className="mr-2" /> Invoice Generation
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={invoiceDis} width="30px" alt="page" className="mr-2" /> Invoice Distribution
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 mb-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <div
              style={{ backgroundColor: '#5CCBFF', width: '30px' }}
              className="rounded-3xl mr-2 p-0.5"
            >
              <img src={invoiceStor} width="30px" alt="page" />
            </div>
            Invoice Storage
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 mb-3 md:mt-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={reportTrack} width="30px" alt="page" className="mr-2" /> Report Tracking
          </div>
        </div>
      </div>
      {/* Ideas to life */}
      <div className="font-lato h-full flex w-full flex-col md:px-24 px-0 pt-0 md:mt-0 mt-[136px] md:pt-32">
        <div className="  text-2xl md:text-4xl md:my-0 md:mb-[30px] my-8 md:px-0 px-5 tracking-widest font-lato-light font-bold flex items-center">
          <img src={FramedPicture} className="mr-2 w-9 " alt="" /> Bringing Ideas To Life
        </div>
        <img src={moodBoard} width="100%" alt="moodboard" className="md:hidden" />
        <img src={moodBoard} width="85%" alt="moodboard" className="hidden md:block" />
      </div>
      {/* Visual Design */}
      <div className="font-lato h-full flex w-screen flex-col pt-0 md:mt-0 mt-[150px] md:pt-36">
        <div
          style={{
            marginBottom: '30px',
          }}
          className="  text-2xl md:px-24 px-5 md:text-4xl md:my-0 my-8 md:mb-0 mb-6 tracking-1.5 font-lato   flex items-center"
        >
          <img src={Eyes} className="mr-2 w-9 " alt="" /> Visual Design
        </div>
        <div>
          <div className="text-base mb-5 md:tracking-normal tracking-0.5 font-lato font-normal md:my-0 text-justify md:px-24 px-5">
            <span className="text-lg">•</span> Due to limited time frame, I moved right into
            creating rough paper wireframes. During this phase of prototyping, We closely{' '}
            <span style={{ color: '#6AC296' }}>
              collaborated with the development and accounts team
            </span>{' '}
            , and after <span style={{ color: '#6AC296' }}>2-3 rounds of iteration</span> , we were
            able to finalize the UI Designs.
          </div>
          <div className="text-base font-lato md:tracking-normal tracking-0.5 font-semibold md:hidden px-5 mt-12 mb-10">
            <span className="text-lg">•</span> Features
          </div>
          {/* Invoice Storage */}
          <div className="flex md:flex-row md:tracking-normal tracking-0.5 font-lato font-normal  md:mt-24 flex-col">
            <div className=" md:hidden  px-5 text-base">1. Invoice Storage</div>
            <img src={visual} className="md:hidden my-4" width="100%" alt="visual" />
            <div className="md:w-3/5 md:px-24 px-5 md:pr-10 md:pb-0 pb-5 flex flex-col">
              <div className=" md:py-5">
                <span className="md:block hidden">
                  1. Invoice Storage <br />
                  <br />{' '}
                </span>
                a. Providing <span style={{ color: '#6AC296' }}>cloud storage</span> to access
                invoices from anywhere at any time.
                <br />
                <br /> b. <span style={{ color: '#6AC296' }}>Independency</span> from worrying about
                hardware storage that leads to data loss. <br />
                <br />
                c. <span style={{ color: '#6AC296' }}>Search invoices effectively.</span>
                <br />
                <br /> d. Avoid switching between multiple software and{' '}
                <span style={{ color: '#6AC296' }}>save time.</span>
              </div>
            </div>
            <img
              src={visual}
              className="hidden md:w-5/10 md:mr-24 md:block"
              width="100%"
              alt="visual"
            />
          </div>
          {/* Invoice Generation */}
          <div className="flex flex-col ">
            <div className="pt-10 mt-[130px] md:mt-32 font-lato font-normal md:pb-0 pb-4 md:px-24 px-5 md:tracking-normal tracking-0.5 md:py-5">
              2. Invoice Generation
            </div>
            <div className="flex md:flex-row w-full leading-7 overflow-hidden md:mt-5 md:px-24 px-5 pt-5 flex-col bg-brand-darkGrey2 items-center">
              {' '}
              <div className="md:w-7/10 md:pr-10 md:pb-0  flex flex-col ">
                <ul className="font-lato list-disc list-inside text-justify  md:py-5 py-3">
                  ⭐{' '}
                  <span className="font-lato font-normal " style={{ color: '#6AC296' }}>
                    Process
                  </span>{' '}
                  of creating GST complaint invoices : <br /> <br />
                  <li>
                    We collected a bunch of invoices (From NinjaasLabs as well as other
                    sellers/service providers) and prioritized its most important and relevant
                    sections to design an invoice page, creating more GST-compliant return tax
                    filing.
                  </li>
                </ul>{' '}
              </div>
              <img
                src={invoiceG1}
                height="118px"
                width="208px"
                alt="visual"
                className="hidden md:block"
              />
            </div>
            <div className="px-2 bg-brand-darkGrey2 pt-4 pb-10">
              <img src={invoiceG1} className="md:hidden " width="100%" alt="visual" />
            </div>
            <div className="flex md:flex-row  mt-[24px] md:mt-10 flex-col items-start justify-between">
              {' '}
              <img src={invoiceG2} alt="visual" className="md:my-6 md:hidden " />
              <div className="md:w-7/10 md:px-24 px-5 tracking-0.5 leading-7 md:pr-10 md:pb-0 text-justify pb-5 flex flex-col ">
                <div className="font-lato font-normal md:py-5 py-3">
                  <span className="hidden md:block">
                    2. Invoice Generation
                    <br />
                    <br />
                  </span>
                  a. Simple way to create{' '}
                  <span style={{ color: '#6AC296' }}>GST compliant invoices.</span> <br />
                  <br />
                  b. <span style={{ color: '#6AC296' }}>Free from recalling</span> complicated Excel
                  sheet short-cuts. <br />
                  <br />
                  c. Create an invoice in a <span style={{ color: '#6AC296' }}>
                    few clicks
                  </span>{' '}
                  without worrying about disrupting the invoice layout. <br />
                  <br />
                  d. <span style={{ color: '#6AC296' }}>Switch easily between businesses;</span> no
                  more unorganized bill books and confusion! Each company has its own interface with
                  meticulously organized invoices .
                </div>
              </div>
              <img
                src={invoiceG2}
                alt="visual"
                className="px-5 md:w-5/10 md:mr-24 hidden md:block"
              />
            </div>
          </div>
          {/* Invoice Distribution and Report Tracking */}
          <div className="flex flex-col md:px-24 mt-24 text-justify pt-[90px] pb-[120px] bg-brand-darkGrey2 text-white">
            <div className="flex md:flex-row flex-col md:mt-24 md:mb-0 ">
              <div className="  md:hidden md:px-0 px-5 text-base font-lato font-normal pb-4 tracking-0.5">
                3. Invoice Distribution
              </div>
              <img src={invDist} width="100%" alt="visual" />
              <div className="md:w-1/2 md:ml-10 md:px-0 px-5 md:pr-10 md:pb-0 pb-5 flex flex-col">
                <div className="font-lato font-normal md:py-5 md:pb-0 pb-[136px] md:pt-0 pt-5">
                  <span className="md:block hidden">
                    3. Invoice Distribution
                    <br />
                    <br />
                  </span>
                  Share your invoices with your clients in{' '}
                  <span style={{ color: '#6AC296' }}>single click!</span>
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden mt-10 flex-col">
              <div className="font-lato px-5 pb-4 tracking-0.5 font-normal ">
                4. Report Tracking
              </div>
              <img src={report} width="100%" alt="visual" />
              <div className="pb-10 px-5 tracking-0.5 leading-7 text-justify flex flex-col pt-5">
                <div className="font-lato font-normal py-3">
                  a.{' '}
                  <span className="font-lato font-normal ">
                    <span style={{ color: '#6AC296' }}>Instant generation</span> of reports
                  </span>
                  .
                </div>
                <div className="font-lato py-3">
                  b. <span style={{ color: '#6AC296' }}>No more manual tracking</span>, simply click
                  for{' '}
                  <span className="font-lato font-normal ">
                    weekly, monthly or annual results with ease of tracking invoice status.
                  </span>
                </div>
                <div className="font-lato py-3">
                  c.{' '}
                  <span style={{ color: '#6AC296' }} className="font-lato font-normal ">
                    Comparison made easy
                  </span>
                  .
                </div>
              </div>
            </div>
            {/* Desktop */}
            <div className="md:flex flex-row mt-20 hidden">
              <div className="w-7/10 pr-10 ">
                <div className="font-lato font-normal py-5">
                  4. Report Tracking <br />
                  <br />
                  a. <span style={{ color: '#6AC296' }}>Instant generation</span> of reports. <br />
                  <br />
                  b. <span style={{ color: '#6AC296' }}>No more manual tracking,</span> simply click
                  for weekly, monthly or annual results with ease of tracking invoice status. <br />
                  <br />
                  c. <span style={{ color: '#6AC296' }}>Comparison made easy.</span>
                </div>
              </div>{' '}
              <img src={report} className="w-6/10" alt="visual" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Style Guide */}
      <div className="font-lato h-full flex w-screen flex-col md:pt-10 md:mt-[160px] mt-[136px]">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div
            style={{
              marginBottom: '30px',
            }}
            className=" text-2xl md:text-4xl md:my-0 mb-8 tracking-widest leading-7 font-lato font-normal flex items-center"
          >
            <img src={GuideDog} className="mr-2 w-9 " alt="" /> Style Guide
          </div>
          <ul className="font-lato font-normal leading-7 md:leading-normal tracking-">
            <li>
              <span className="font-lato font-normal">•</span> Meanwhile, we designed a{' '}
              <span style={{ color: '#6AC296' }}>component library</span> to create a{' '}
              <span style={{ color: '#6AC296' }}>coherent visual language</span> across the product
              that could help developers in building consistent UI and reducing frequent{' '}
              <span style={{ color: '#6AC296' }}>design changes.</span>
            </li>
          </ul>
        </div>
        {/* <div className="w-full h-full md:hidden">
          <Marquee speed={10} direction="left">
            <img src={buttons} height="550px" alt="visual" />
          </Marquee>
        </div> */}
        <div className="marqContainer md:hidden">
          <div className="marq md:hidden">
            <img src={buttons} height="550px" alt="visual" />
          </div>
        </div>
        <div className="w-full h-full md:block hidden">
          {' '}
          <Marquee speed={30} direction="left">
            {' '}
            <img src={buttons} alt="visual" />
          </Marquee>{' '}
        </div>
      </div>
      {/* Result Matrix */}
      <div className="font-lato h-full flex w-screen flex-col pt-[136px] md:pt-40">
        <div className=" md:px-24 px-0 mb-10 text-justify">
          <div
            style={{
              marginBottom: '30px',
            }}
            className=" text-2xl md:px-0 px-5 md:text-4xl md:my-0 my-8 tracking-1.5 leading-7 font-lato font-normal flex items-center"
          >
            <img src={PartyingFace} className="mr-2 w-9 " alt="" /> Result Matrix
          </div>
          <div className="font-lato  font-normal tracking-0.5 leading-7 flex md:flex-row flex-col justify-between">
            <div className="md:w-1/3 md:px-0 px-5 md:pr-10 md:pb-0 pb-5 flex flex-col ">
              <div className="mb-5">
                After developing the product we estimated the following results:
                <br />
                <br />
                1. <span style={{ color: '#6AC296' }}>70% Increased user satisfaction ✅</span>{' '}
                <br />
                <br />
                2. Improved productivity <br />
                <br />
                3. Increased transparency <br />
                <br />
                4. Reduced development maintenance
              </div>
            </div>
            <img src={matrix} width="67%" alt="visual" className="hidden md:block -mt-10" />
            <img src={matrix} width="100%" alt="visual" className="md:hidden" />
          </div>
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            style={{ color: '#6AC296' }}
            target="_blank"
            rel="noreferrer"
            href="https://morning-jackrabbit-815.notion.site/Interface-design-b0ea7648c51243dd9ff5f3c6500742b8"
            className="tracking-3 md:mt-20 mt-[88px] mb-[136] pl-6 md:pl-0 md:mb-20 flex items-center text-sm md:text-base uppercase font-lato-bold"
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
        </div>
      </div>
      {/* Possibilities */}
      <div className="font-lato h-full flex w-screen flex-col pt-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div
            style={{
              marginBottom: '30px',
            }}
            className=" text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato font-normal flex items-center"
          >
            <img src={ClinkingGlasses} className="mr-2 w-9 " alt="" /> Possibilities
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:pr-10 font-lato tracking-0.5 leading-7 font-normal md:pb-0 pb-5 flex flex-col">
              <div className="mb-5">
                The next step will be to push the{' '}
                <span style={{ color: '#6AC296' }}>designs into development.</span>
                <br />
                <br />
                <span className="text-lg">•</span> Once the product is launched, observe the{' '}
                <span style={{ color: '#6AC296' }}>user behavior and collect their feedback.</span>
                <br />
                <br />
                <span className="text-lg">•</span> Further, providing{' '}
                <span style={{ color: '#6AC296' }}>payment flexibility</span> by integrating payment
                modes and QR codes, Incorporating tools like tax calculators and more.
                <br />
                <br />
                <span className="text-lg">•</span>{' '}
                <span style={{ color: '#6AC296' }}>Improving and iterating</span> over previous
                designs to deliver better solutions based on feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learnings and Retrospect */}
      <div className="font-lato h-full flex w-screen flex-col pt-10 md:mb-10 mb-[124px]">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div className=" text-2xl text-start mb-0 md:mb-[30px] md:text-4xl md:my-0 mt-8 tracking-1.5 font-lato font-normal flex  items-end">
            <img src={InLotusPosition} className=" inline-block mr-2 w-9 " alt="" /> Learnings and{' '}
            <span className="hidden md:block md:ml-[8px]">Retrospect</span>
          </div>
          <div
            style={{
              marginBottom: '30px',
            }}
            className="text-2xl md:text-4xl mb-8 font-lato font-normal md:hidden "
          >
            {' '}
            Retrospect
          </div>
          <div className="flex font-lato tracking-0.5 leading-7 font-normal md:flex-row flex-col">
            <div className="md:pr-10 md:pb-0 pb-5 flex flex-col ">
              <div className="py-3">
                <span className="text-lg">•</span> Realized the role of{' '}
                <span style={{ color: '#6AC296' }}>engaging stakeholders</span> for feedback to be
                on the same page.
                <br />
                <br />
                <span className="text-lg">•</span> The importance of keeping{' '}
                <span style={{ color: '#6AC296' }}>users at the center</span> and conducting user
                testing to create
                <span style={{ color: '#6AC296' }}> designs relevant to the users</span>
                .<br /> <br />
                <span className="text-lg">•</span>{' '}
                <span style={{ color: '#6AC296' }}>Prioritizing</span> research results to set
                useful and achievable goals is paramount.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end screen */}
      <div className="leading-0">
        <WorkHero
          largeEnter={largeEnter}
          imageEnter={imageEnter}
          work={{
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
          }}
          next={true}
        />
      </div>
      <motion.div className="cursor hidden md:flex" variants={variants} animate={cursorVariant} />
    </div>
  )
}

export default BillEasyVisual
