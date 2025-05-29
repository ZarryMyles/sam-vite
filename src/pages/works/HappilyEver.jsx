import { useEffect, useState } from 'react'
import { WorkHero, WorkHeading, Navbar, Loader } from '../../components'
import { ArrowRightCircle } from 'react-feather'
import { motion } from 'framer-motion'
// assets
import one from '../../assets/works/happilyEver/1.svg'
import two from '../../assets/works/happilyEver/2.svg'
import three from '../../assets/works/happilyEver/3.svg'
import four from '../../assets/works/happilyEver/4.svg'
import five from '../../assets/works/happilyEver/5.svg'

// Icons
import {
  Clipboard,
  Calendar,
  TippingHand,
  Fist,
  GrinningFace,
  Check,
  BriefCase,
  GuideDog,
  Nerd,
  Placard,
  Pointer,
  Teacup,
  ClinkingGlasses,
  Ladder,
} from '../../assets/icons/fluent'

const HappilyEver = () => {
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
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div
      onMouseEnter={imageEnter}
      className="overflow-hidden font-lato font-normal text-justify bg-brand-black text-brand-white"
    >
      {loading && (
        <div className="fixed w-full h-full z-50">
          {' '}
          <Loader />{' '}
        </div>
      )}
      <Navbar largeEnter={largeEnter} imageEnter={imageEnter} defaultColor={'white'} />
      <WorkHero
        work={work}
        largeEnter={largeEnter}
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
      />
      {/* project brief */}
      <div className=" px-5 pt-[105px] md:py-10 md:px-24 md:my-20 hidden md:flex  justify-between  ">
        <div className="  my-5    ">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
          </div>
          <div className="font-lato  mt-2">Proof of concept</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5 pl-7 md:pl-0">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-2">
            <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
          </div>
          <div className="font-lato  mt-2">1 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5   ">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
          </div>
          <div className="font-lato  mt-2">Product Design Intern</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5 pl-7 md:pl-0">
          <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
            <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
          </div>
          <div className="font-lato  mt-2">Three</div>
        </div>
      </div>
      {/* phone brief */}
      <div className=" px-5 pt-[105px] md:py-10 md:px-24 md:my-20 flex md:hidden  justify-between  ">
        <div>
          <div className="  my-5    ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
            </div>
            <div className="font-lato  mt-2">Proof of concept</div>
          </div>
          <div className=" w-max md:w-auto my-5   ">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
            </div>
            <div className="font-lato  mt-2">Product Design Intern</div>
          </div>
        </div>
        <div className="w-max flex flex-col items-start">
          <div className=" w-full  md:w-auto my-5  md:pl-0">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-2">
              <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
            </div>
            <div className="font-lato  mt-2">1 month</div>
          </div>
          <div className=" w-max md:w-auto  md:pl-0">
            <div className=" text-base md:text-xl  font-lato flex items-center md:-ml-1">
              <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
            </div>
            <div className="font-lato  mt-2">Three</div>
          </div>
        </div>
      </div>
      {/* project about */}
      <div className=" px-5 py-10 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
        <WorkHeading text={'About'} />
        <div className="col-span-12 md:col-span-6 h-full flex flex-col    ">
          <div className="flex items-center">
            <div
              style={{
                marginBottom: '30px',
              }}
              className="  text-2xl md:text-4xl  tracking-1.5 font-lato flex items-center"
            >
              <img src={GrinningFace} className="mr-2 w-9 " alt="" /> HappilyEver
            </div>
          </div>
          <div className="  leading-7 tracking-0.5 text-justify  font-lato ">
            Happily Ever, aka HAE, is an Match-making service. It is strongly aimed at helping
            people in{' '}
            <span style={{ color: '#ED9D9D' }}>fostering deep and meaningful connections,</span>{' '}
            potentially leading to the discovery of companions, bestfriends, or even a soulmate.
          </div>
        </div>
        <div className="hidden md:block col-span-1"></div>

        <div className="col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
          <div className=" -md:mx-0 -mx-7 tracking-0.5 px-5 md:px-4 md:pr-24 md:rounded-l-lg flex flex-col justify-center md:mt-0 mt-8 bg-brand-darkGrey2 md:pl-14 py-14  ">
            <div className=" mb-8">
              <div className=" mb-2 flex items-center">
                <img src={Check} className="mr-2 w-5 " alt="" /> Results
              </div>
              <div className=" leading-6 tracking-0.5">
                Strengthened brand direction, Estimated to{' '}
                <span style={{ color: '#ED9D9D' }}>Improve user engagement.</span>
              </div>
            </div>
            <div className=" ">
              <div className=" mb-2 flex items-center">
                <img src={BriefCase} className="mr-2 w-5 " alt="" /> <div>Contribution</div>
              </div>
              <div className=" leading-6 tracking-0.5">
                Interviews, Secondary research, Usability testing, Competitive analysis
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="px-5 md:p-0 md:py-0 py-[136px]">
        <div className="md:px-24 w-full">
          <WorkHeading text={'purpose'} />
        </div>
        <div className=" font-lato md:pb-56">
          <div className=" md:w-max md:bg-brand-darkGrey2 md:pt-5 md:pb-16 md:pl-24 md:rounded-r-lg">
            <div className="text-2xl tracking-1.5 font-lato">🎯 Goals</div>
            <div className=" md:mt-8 mt-6 font-lato font-normal tracking-0.5 text-justify md:text-left md:w-max md:pr-28">
              1. Strengthen brand direction.
              <br />
              2. Improve focus on purpose.
              <br />
              3.Identify alignment in user brand persuasion and brand vision.
            </div>
          </div>
        </div>
      </div>
      {/* Challenge */}
      <div className="px-5 md:py-0 py-10 bg-brand-darkGrey2 md:bg-brand-black text-brand-white md:px-24 md:pb-10">
        <WorkHeading text={'Challenge'} />
        <div className="flex items-center md:items-center md:flex-row flex-col font-lato ">
          <img src={one} alt="logo" className="w-2/3 md:hidden left-1/4" />
          <div className="md:w-6/10  ">
            <div className="md:pr-10 md:leading-6 tracking-0.5 leading-7 font-lato font-normal">
              <div className=" ">
                1. The product’s vision is to "
                <span style={{ color: '#ED9D9D' }}>foster meaningful connections</span>
                ". However the current product provided matrimonial services. As a result, the
                primary users included young adults and singles, each with their own set of
                expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain{' '}
                <span style={{ color: '#ED9D9D' }}>aligned with the core vision</span> to avoid any
                complexities.
              </div>
              <div className="py-3">
                3.{' '}
                <span style={{ color: '#ED9D9D' }}>
                  Communicating these changes itself was a challenge.
                </span>
              </div>
            </div>
          </div>
          <img src={one} alt="logo" className="md:block hidden w-4/10 left-0" />
        </div>
      </div>
      {/* Research and Analyzing product */}
      <div className="p-0 md:px-24 px-5 md:py-0 py-[136px] md:p-24 ">
        <WorkHeading text={'Research'} />
        {/* Analyzing */}
        <div className="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div className="md:pr-10 md:w-6/10">
            <div className="  text-2xl md:text-4xl md:mb-[30px] md:my-0  tracking-1.5 font-lato flex items-center">
              <img src={GuideDog} className="mr-2 w-9 " alt="" /> Analyzing The Product
            </div>
            <img src={two} alt="logo" className="w-full scale-125 px-16 my-16 md:my-0 md:hidden" />
            <div className="md:mt-10 mt-0 md:mb-16 font-lato font-normal leading-7 tracking-0.5">
              Stakeholder Interview <br />
              <br />
              <ol className="list-disc ml-5">
                <li>
                  {' '}
                  The first step in{' '}
                  <span style={{ color: '#ED9D9D' }}> understanding brand values</span> was to know
                  the product’s mission and motive. This interview helped the stakeholder in
                  developing a <span style={{ color: '#ED9D9D' }}>clear vision.</span>
                </li>
                <br />
                <br />{' '}
                <li>
                  {' '}
                  He was asked a series of
                  <span style={{ color: '#ED9D9D' }}> open-ended questions,</span> such as : <br />
                </li>
              </ol>
              <div className="ml-2">
                1. What inspired you to create this product? <br />
                2. Why should people use this product? <br />
                3. What are the objectives? <br />
                4. How do you visualize your brand? <br />
                and many more..
              </div>
            </div>
          </div>
          <img src={two} alt="logo" className="hidden md:block mt-10 w-4/10 left-0" />
        </div>
        {/* Key Insights */}
        <div className="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div className="md:pr-10 md:w-6/10">
            <div className="md:mt-10 mt-[80px] md:mb-16 font-lato font-normal leading-7 tracking-0.5">
              Key Insights <br />
              <br className="hidden md:block" />
              <br />
              <ul className="ml-5 list-disc">
                <li className="my-6">
                  A platform where{' '}
                  <span style={{ color: '#ED9D9D' }}>meaningful connections are fostered.</span>
                </li>

                <li className="my-6">
                  <span style={{ color: '#ED9D9D' }}>Fine-tuning communication </span>
                  encourages people to talk to others because, All relations start with a
                  conversation. It is observed, people avoid confrontations due to fear of
                  rejection.
                </li>

                <li className="my-6">
                  Building relationships,
                  <span style={{ color: '#ED9D9D' }}> expressing empathy,</span> and having
                  long-lasting conversations.
                </li>
                <li className="my-6">Creating a connection must be a celebration.</li>

                <li className="my-6">
                  Platform to explore based on
                  <span style={{ color: '#ED9D9D' }}> matching interests</span> while{' '}
                  <span style={{ color: '#ED9D9D' }}>staying authentic.</span>{' '}
                </li>

                <li className="my-6">
                  Online, It is possible to put up a façade, meeting in person reveals true selves
                  and true connections can only be made outdoors. <br />
                </li>

                <li className="my-6">
                  <span style={{ color: '#ED9D9D' }}>Stories</span> create meaningful connection &
                  curiosity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Competitive Analysis */}
      <div className="px-5 py-0 pb-[136px] md:my-20 md:pb-20 md:p-20 ">
        <div className="flex items-center md:items-center justify-between md:flex-row flex-col font-lato">
          <div className=" md:w-6/10 md:pr-4">
            <div className=" ">
              <div className="  text-2xl md:mb-[30px] md:text-4xl md:my-0 mb-8 tracking-1.5 font-lato flex items-center">
                <img src={Nerd} className="mr-2 w-9 " alt="" />
                Competitive Analysis
              </div>
              <img src={three} alt="logo" className="w-full  md:hidden " />
              <ul className="list-disc ml-5">
                <li className="py-3 mt-10  font-lato font-normal leading-7 tracking-0.5">
                  The product being developed was a matrimonial service with a{' '}
                  <span style={{ color: '#ED9D9D' }}>completely different mental model</span> of the
                  users altogether. The vision was partially aligned, and further, the team was
                  planning to integrate other user bases as well, which was confusing!
                </li>
                <li className="py-3 font-lato font-normal leading-7 tracking-0.5">
                  But, before jumping onto conclusions, I conducted in-depth{' '}
                  <span style={{ color: '#ED9D9D' }}>research</span> on similar products existing in
                  market, Like{' '}
                  <span style={{ color: '#ED9D9D' }}>
                    Shaadi, Bumble, Jeevansaathi and bharat matrimony.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={three}
            alt="logo"
            className="w-1/2 hidden md:block md:w-4/10 p-8  md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* Usability Testing */}
      <div className="px-5  md:py-20 md:p-20">
        <div className="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <div className="md:pr-10">
              <div className=" md:mb-[30px] mb-6 text-2xl md:text-4xl md:my-0  tracking-1.5 font-lato flex items-center">
                <img src={Placard} className="mr-2 w-9 " alt="" />
                Usability testing
              </div>
              <ul className="list-disc ml-5">
                <li className="py-3 md:mt-10 font-lato font-normal leading-7 tracking-0.5">
                  Users do not necessarily use and perceive our products the same way we wish them
                  to.
                </li>
                <li className="py-3 font-lato font-normal leading-7 tracking-0.5">
                  Therefore, I ran a usability test to better understand{' '}
                  <span style={{ color: '#ED9D9D' }}>user needs and expectations.</span>
                </li>
                <li className="py-3 font-lato font-normal leading-7 tracking-0.5">
                  This greatly helped the stakeholders to know of the{' '}
                  <span style={{ color: '#ED9D9D' }}>gaps in their current methods.</span>
                </li>
                <li className="py-3 font-lato font-normal leading-7 tracking-1.5">
                  I was able to conduct the tests with{' '}
                  <span style={{ color: '#ED9D9D' }}>5 users via Zoom.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Approach */}
      <div className="p-0 py-0 md:py-20 md:mt-0 mt-[136px] md:p-20">
        <div className="flex items-center md:items-center justify-between md:flex-row flex-col font-lato">
          <div className="md:w-6/10">
            <div className="md:pr-10">
              <div
                style={{
                  marginBottom: '30px',
                }}
                className="  text-2xl px-5 md:px-0 md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
              >
                <img src={Ladder} className="mr-2 w-9 " alt="" />
                Approach
              </div>
              <img src={four} alt="logo" className="w-screen  mt-6 md:hidden" />
              <ul className="list-disc ml-5 px-5 md:px-0">
                {' '}
                <li className=" mt-10 font-lato font-normal leading-7 tracking-0.5">
                  Through analysis of both competitive and usability tests results, I developed a{' '}
                  <span style={{ color: '#ED9D9D' }}>Venn Diagram</span> to demonstrate difference
                  between the <span style={{ color: '#ED9D9D' }}>product which he aimed</span> to
                  develop <span style={{ color: '#ED9D9D' }}>vs</span> the one he is{' '}
                  <span style={{ color: '#ED9D9D' }}>currently developing.</span>
                </li>
                <li className=" mt-10 font-lato font-normal leading-7 tracking-0.5">
                  As shown in the figure, The mental model of the users is completely different,
                  thus having them both in a single platform would yield no positive outcomes,
                  rather would lead to{' '}
                  <span style={{ color: '#ED9D9D' }}>
                    complications in the match-making algorithm.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={four}
            alt="logo"
            className="w-1/2 md:w-4/10 px-5 md:px-0 mt-8 hidden md:block"
          />
        </div>
      </div>{' '}
      {/* Solutions */}
      <div className="p-7 py-0 md:py-24 md:mt-0 mt-[136px] md:p-24">
        <WorkHeading text={'Results'} />
        <div className="flex items-center md:items-center md:flex-row flex-col font-lato">
          <div className="md:w-6/10">
            <div className="md:pr-10">
              <div className="  text-2xl md:mb-[30px] md:text-4xl mb-6 tracking-1.5 font-lato flex items-center">
                <img src={ClinkingGlasses} className="mr-2 w-9 " alt="" />
                Solutions
              </div>
              <div className="px-4">
                <img src={five} alt="logo" className="md:hidden w-full  " />
              </div>
              <div className="py-3 md:mt-10 font-lato font-normal leading-7 tracking-0.5">
                <ul className="list-disc ml-5">
                  <li className=" mb-4">
                    Since HappilyEver was an
                    <span style={{ color: '#ED9D9D' }}> early stage start-up</span> my aim was to
                    create a <span style={{ color: '#ED9D9D' }}>clear roadmap</span> and help the
                    team stay on similar target.
                  </li>
                  <li className="">
                    What defines the brand is what it values the most,{' '}
                    <span style={{ color: '#ED9D9D' }}>Giving logo a purpose.</span>
                  </li>
                </ul>
                <div className="flex flex-row items-center mb-2 mt-12">
                  <img src={Pointer} alt="logo" className="inline h-6 pr-3 mt-1" /> Product
                </div>
                <ul className="list-disc ml-5">
                  {' '}
                  <li className="mb-4">
                    Providing a general platform for all people to find meaningful connections based
                    on their personal preferences. <br />
                  </li>
                </ul>
                <div className="flex flex-row items-center mb-2 mt-12">
                  <img src={Pointer} alt="logo" className="inline h-6 pr-3 mt-1" /> Purpose
                </div>{' '}
                <ul className="list-disc ml-5">
                  <li className="mb-4">
                    <span style={{ color: '#ED9D9D' }}>What does Happilyever do?</span>
                    <br />
                    Fosters deep and meaningful connections.
                  </li>
                  <li className="mb-4">
                    Challenging the vision,{' '}
                    <span style={{ color: '#ED9D9D' }}>"Why do we need deep connections?"</span> In
                    the world of "nobody knows me," people seek individuals who "understand them",
                    people who are empathetic, supportive and loyal.
                  </li>
                </ul>
                <div className="flex flex-row items-center mb-2 mt-12">
                  <img src={Pointer} alt="logo" className="inline h-6 pr-3 mt-1" /> Brand
                  Recognition
                </div>{' '}
                <ul className="list-disc ml-5">
                  <li className=" mb-4 ">
                    <span style={{ color: '#ED9D9D' }}>
                      Authenticity, personalized connections and joy.
                    </span>
                  </li>
                  <li className=" mb-4 ">How is it different?</li>
                  <li className=" ">
                    Encourages real{' '}
                    <span style={{ color: '#ED9D9D' }}>
                      meet-ups, limits choice paralysis and icebreakers.
                    </span>{' '}
                  </li>
                </ul>
                <div className="flex flex-row items-center mb-2 mt-12">
                  <img src={Pointer} alt="logo" className="inline h-6 pr-3 mt-1" /> Defining
                  audience
                </div>
                <ul className="list-disc ml-5">
                  <li className=" mb-4 ">
                    Our primary users aged between{' '}
                    <span style={{ color: '#ED9D9D' }}>20 to 35yrs</span>
                  </li>
                  <li>Why?</li>
                </ul>
                Since, this was the age group that began looking for{' '}
                <span style={{ color: '#ED9D9D' }}>long term relationships.</span> <br />
                However, because our stakeholders were adamant about providing matrimonial matches,
                we all agreed that it would be better to have two separate services with the similar
                vision forming different target audiences.
              </div>
            </div>
          </div>
          <img src={five} alt="logo" className="hidden md:block w-1/3 left-0" />
        </div>
      </div>
      <a
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        target="_blank"
        rel="noreferrer"
        style={{ color: '#424242' }}
        href="https://www.notion.so/Branding-752204234b2b42f09ccd93144504ac5a"
        className="tracking-3 mt-20 px-5 md:px-24 mb-32 md:mb-40 flex items-center text-sm md:text-base uppercase font-lato-bold"
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
      {/* end screen */}
      <WorkHero
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        work={{
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
        }}
        next={true}
      />
      <motion.div className="cursor hidden md:flex" variants={variants} animate={cursorVariant} />
    </div>
  )
}

export default HappilyEver
