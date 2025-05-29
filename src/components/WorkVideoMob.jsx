import { ChevronRight, ChevronLeft, ArrowRightCircle } from 'react-feather'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { arrowRight } from '../assets/icons/fluent'

import 'swiper/css'
import 'swiper/css/pagination'

const WorkVideoMob = ({ imageEnter, largeEnter }) => {
  const works = [
    {
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
      mobVideo:
        'https://res.cloudinary.com/samydoo/video/upload/v1663049954/SamWebsite/Work/Desktop/BillEasy-short_yhhk58_kyqft8.webm',
      link: '/billeasy',
      cta: 'View Research',
      cta2: 'Product presentation',
      cta2Link:
        'https://www.figma.com/proto/5rQaNyCPAiVrvlftmI0Oup/Website?page-id=279%3A302&node-id=1228%3A11865&viewport=-3699%2C-8383%2C0.4&scaling=contain&starting-point-node-id=1228%3A11865',
    },
    {
      id: 2,
      title: 'BillEasy',
      domain: 'Visual Design',
      bgColor: '#fasd',
      description:
        'Creating an efficient accounting process for \n evolving businesses and enhanced work systems.',
      gif: false,
      mobGif: true,
      image: 'http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg',
      video:
        'https://res.cloudinary.com/samydoo/video/upload/v1663017008/SamWebsite/Work/Desktop/BillEasy_Visual_hzrwgo_rmmpq4.webm',
      mobVideo:
        'https://res.cloudinary.com/samydoo/video/upload/v1663017008/SamWebsite/Work/Desktop/BillEasy_Visual_hzrwgo_rmmpq4.webm',

      link: '/billeasy-visual-design',
      cta: 'View visual design',
      cta2: 'Product presentation',
      cta2Link:
        'https://www.figma.com/proto/5rQaNyCPAiVrvlftmI0Oup/Website?page-id=279%3A302&node-id=1228%3A11865&viewport=-3699%2C-8383%2C0.4&scaling=contain&starting-point-node-id=1228%3A11865',
    },
    {
      id: 3,
      title: 'Smart Vision',
      domain: 'Case Study',
      bgColor: '#F7FCFF',
      description:
        'Making smartphones simpler for users with \n impaired vision : A step towards an inclusive and \n consumer-centric approach',
      gif: true,
      mobGif: true,
      image: 'http://theme.dsngrid.com/droow-l/assets/img/project/project5/2.jpg',
      video:
        'https://res.cloudinary.com/genesiscloudimages/image/upload/v1662486989/work_gifs/smartvision_ewgu7t.gif',
      mobVideo:
        'https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif',
      link: '/smartvision',
      cta: 'View case study',
    },
    {
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
      cta: 'View case study',
    },
  ]
  const pagination = {
    clickable: true,
  }
  return (
    <div className="w-full h-full">
      <Swiper pagination={pagination} modules={[Pagination]} loop className="mySwiper">
        {works.map((work) => (
          <SwiperSlide className="h-screen w-full">
            <div
              style={{
                backgroundColor: work.bgColor,
              }}
              className="  relative font-lato  select-none   h-screen overflow-hidden w-full    bg-cover bg-no-repeat bg-center   flex flex-col  md:justify-start md:pt-[127px]  top-0 left-0 px-5 md:px-48  "
              onMouseEnter={imageEnter}
            >
              <div
                style={{
                  zIndex: '1',
                }}
              >
                <div className=" mt-16 w-full md:w-full">
                  <div
                    style={{
                      letterSpacing: '6px',
                    }}
                    className=" block md:hidden text-stroke-white mb-16 font-lato-bold  "
                  >
                    0{work.id}
                  </div>
                  <div className="flex items-center mb-8 md:mb-12 ">
                    <div
                      style={{
                        width: '72px',
                      }}
                      className=" bg-brand-gray h-0.5 mr-3"
                    />
                    <div className="text-brand-gray uppercase text-sm tracking-2 md:tracking-3 md:text-xl font-lato ">
                      {work.domain}
                    </div>
                  </div>
                  <div
                    className=" text-5xl md:text-5xl font-bold w-max font-lato text-brand-white  flex items-center mb-4 md:my-12"
                    onMouseEnter={largeEnter}
                    onMouseLeave={imageEnter}
                  >
                    {work.title}
                  </div>
                  <div className=" font-lato tracking-0.5 md:tracking-1 hidden md:block text-[14px] md:text-[22px] leading-[19px] md:leading-[32px]  md:mt-12 mb-6 pr-5 md:pr-0 w-9/10 md:w-7/12 text-brand-white">
                    {work.description.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                  <div className=" font-lato tracking-0.5 md:tracking-1 block md:hidden text-[14px] md:text-[22px] leading-[19px] md:leading-[32px]  md:mt-12 mb-6 pr-5 md:pr-0 w-9/10 md:w-7/12 text-brand-white">
                    {work.description.split('\n').map((line, index) => (
                      <span key={index}>{line}</span>
                    ))}
                  </div>
                  <div className="">
                    <a
                      onMouseEnter={largeEnter}
                      onMouseLeave={imageEnter}
                      href={work.link}
                      className=" pt-4 duration-100 transition-all  w-max  flex items-center my-3 rounded-l-full rounded-r-full text-white  max-w-max tracking-wider             "
                    >
                      <ArrowRightCircle
                        color="#fefefe"
                        width={30}
                        height={30}
                        strokeWidth="1"
                        className="  mr-4    "
                      />
                      <div
                        className=" text-sm md:text-lg tracking-3 upper  font-lato"
                        style={{
                          letterSpacing: '3px',
                          color: '#fefefe',
                          fontSize: '16px',
                        }}
                      >
                        {work.cta}
                      </div>
                    </a>
                  </div>
                  {work.cta2 && (
                    <div className="">
                      <a
                        onMouseEnter={largeEnter}
                        onMouseLeave={imageEnter}
                        href={work.cta2Link}
                        className=" my-6 duration-100 transition-all  w-max  flex items-center  rounded-l-full rounded-r-full text-white  max-w-max tracking-wider             "
                      >
                        <img src={arrowRight} alt="" className="w-[30px] mr-4" />
                        <div
                          className=" text-sm md:text-lg tracking-3  font-lato"
                          style={{
                            letterSpacing: '3px',
                            color: '#fefefe',
                            fontSize: '16px',
                          }}
                        >
                          {work.cta2}
                        </div>
                      </a>
                    </div>
                  )}
                </div>
                {/* the no. with text stroke */}
                <div className="hidden md:flex w-full md:w-auto absolute bottom-10  md:bottom-2  md:right-24   flex-col items-center ">
                  <div className="  hidden md:flex items-center  ">
                    <ChevronLeft
                      color="#b5b5b5"
                      width={30}
                      height={30}
                      strokeWidth="2"
                      onMouseEnter={largeEnter}
                      onMouseLeave={imageEnter}
                      className={
                        works.indexOf(work) === 0
                          ? `hidden`
                          : ` text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white`
                      }
                    />
                    <div
                      style={{
                        letterSpacing: '6px',
                      }}
                      className=" text-stroke-white mb-4 font-lato-bold  "
                    >
                      0{work.id}
                    </div>
                    <ChevronRight
                      color="#b5b5b5"
                      width={30}
                      strokeWidth="2"
                      height={30}
                      onMouseEnter={largeEnter}
                      onMouseLeave={imageEnter}
                      style={{
                        color: '#b5b5b5',
                      }}
                      className={` p-0 md:p-0  text-2xl md:text-5xl   cursor-pointer mx-5  rounded-full text-white`}
                    />
                  </div>
                </div>
                <div className="flex md:hidden w-full md:w-auto absolute bottom-10  md:bottom-2  md:right-24 left-0  flex-col items-center md:justify-end justify-center"></div>
              </div>

              {/* bg gif */}
              <div className={`w-full object-cover h-screen absolute left-0 top-0 z-0`}>
                {work.gif ? (
                  <div
                    className={`   w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700  h-screen 
                `}
                  >
                    <img
                      alt="hi"
                      className={`w-full h-full ${
                        work.id === 2 ? 'object-cover object-left' : 'object-contain object-bottom'
                      } `}
                      autoPlay={true}
                      src={work.mobVideo}
                    />
                    <div className="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
                  </div>
                ) : (
                  <div
                    className={`w-full h-full ${
                      work.id === 2 ? 'object-cover object-left' : 'object-contain object-bottom'
                    } `}
                  >
                    <video
                      className={`w-full h-full ${
                        work.id === 2 ? 'object-cover object-left' : 'object-contain object-bottom'
                      } `}
                      loop
                      autoPlay={true}
                      muted
                    >
                      <source src={work.mobVideo} type="video/mp4" />
                    </video>
                    <div className="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WorkVideoMob
