import { useState } from 'react'
import { ReactComponent as Quote } from '../assets/icons/quoteWhite.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import tanu from '../assets/feedback/tanu.png?url'
import prashanth from '../assets/feedback/prashanth.png?url'

import 'swiper/css'
import 'swiper/css/pagination'

// feedback
const feedbacks = [
  {
    name: 'Tanushree Sharma',
    company: 'Lead UXR at Hike',
    image: tanu,
    feedback: `It was a pleasure to mentor Shradha in UXR during her time at Hike. She is eager to learn, quickly grasps complex concepts, and consistently takes strong ownership of her deliverables.
      In a short span, she developed meticulous attention to detail and a knack for uncovering insights, significantly boosting our team’s output. Her talent for visualizing actionable insights through engaging infographics made key takeaways clear and impactful.
      I highly recommend Shradha for any role requiring analytical rigor, creative visualization, and strong accountability. She is a tremendous asset to any team.`,
  },
  {
    name: 'Prashanth Punja',
    company: 'Lead Product Designer at PharmEasy',
    image: prashanth,
    feedback: `I had the pleasure of working with Shradha during her time at PharmEasy, where I reviewed her B2B diagnostic work. She consistently demonstrated a remarkable ability to learn quickly, transitioning from smaller tasks to owning larger projects with ease and confidence.
      Shradha stands out for her openness to collaboration and feedback, as well as her strong communication skills. Her proactive approach and dedication allowed her to independently manage key projects successfully.`,
  },
]
const SocialProof = ({ imageEnter }) => {
  const pagination = {
    clickable: true,
  }
  const [feedback, setFeedback] = useState(feedbacks[0])
  const [fade, setFade] = useState(false)

  return (
    <div id="social-proof" className="w-full h-full mx-auto">
      <div
        onMouseEnter={imageEnter}
        className="hidden px-5 md:px-24 font-lato py-10 md:py-20 md:pt-0 md:flex items-center justify-center my-10 md:my-5 bg-white dark:bg-brand-black transition-all duration-500"
      >
        <div className="  flex   bg-brand-darkGrey2  text-brand-gray w-full p-5 md:p-24   flex-col md:items-center justify-end relative">
          <div className=" flex items-center text-brand-gray w-full text-xl uppercase tracking-widest">
            <div
              className="font-lato tracking-2 md:tracking-3 text-xs md:text-base text-brand-gray"
              style={{
                color: '#b5b5b5',
              }}
            >
              Testimonials
            </div>
            <div
              style={{
                height: '2px',
              }}
              className="bg-brand-gray w-[40px] md:w-[85px] ml-4 rounded-l-full rounded-r-full md:ml-6"
            ></div>
          </div>

          <div className=" text-brand-gray text-base  w-full   md:px-0 py-3 md:py-0 flex flex-col justify-center">
            <div
              className={`font-lato-light-italic2 my-5 md:my-14 tracking-1 md:tracking-1.5 transition-opacity ease-linear duration-1000  leading-[30px] md:leading-8  text-justify  ${
                fade ? 'opacity-0' : ''
              } `}
              style={{ whiteSpace: 'pre-line', minHeight: '200px' }}
            >
              {feedback.feedback}
            </div>
            {/* name */}
            <div
              className={`text-black font-lato-light flex items-center dark:text-white tracking-wider text-xl   ease-linear duration-1000 transition-opacity  ${
                fade ? 'opacity-0' : ''
              } `}
            >
              <div
                className="w-10 md:w-14 h-10 md:h-14 rounded-full  bg-brand-gray bg-cover bg-center bg-no-repeat mr-5 "
                style={{
                  backgroundImage: `url(${feedback.image})`,
                }}
              />
              <div className="flex tracking-1 md:tracking-3 ">
                <div className="text-xs md:text-base md:leading-4">{feedback.name}, </div>
                <div className="text-xs md:text-base md:leading-4 pl-1">{feedback.company}</div>
              </div>
            </div>
            {/* pagination */}
            <div className="flex justify-center items-center w-full">
              {feedbacks.map((item) => (
                <div
                  className="py-4 cursor-pointer"
                  onClick={() => {
                    setFade(true)
                    setTimeout(() => {
                      setFeedback(item)
                      setFade(false)
                    }, 800)
                  }}
                >
                  <div
                    style={{
                      height: '2px',
                      color: '#FFEE8C',
                    }}
                    className={` transition-all duration-200 rounded-l-full rounded-r-full ${
                      item.name === feedback.name
                        ? 'bg-black dark:bg-brand-gold w-6 '
                        : ' bg-gray-500 w-4'
                    }   mx-1 `}
                  />
                </div>
              ))}
            </div>
          </div>

          <Quote
            className="absolute -bottom-5 md:-bottom-6 right-6 md:right-10 w-10 md:w-14 h-10 md:h-14 fill-black dark:fill-white "
            stroke="none"
            style={{
              fill: '#979797',
            }}
          />
        </div>
      </div>
      {/* mobile version */}
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="md:!hidden mySwiper z-10 "
        loop
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide className="md:hidden w-full h-full">
            <div className="px-5 md:px-24 font-lato py-[60px] md:py-20 md:pt-0 flex items-center justify-center my-10 md:my-5  bg-brand-black transition-all duration-500">
              <div className="  flex h-[max-content]  bg-brand-darkGrey2 pt-10  text-brand-gray w-full px-5  pb-[120px] md:p-24   flex-col justify-between md:items-center  relative">
                <div className="  text-brand-gray w-full ">
                  <div className="flex items-center text-xl  tracking-widest uppercase">
                    <div
                      className="font-lato tracking-2 md:tracking-3 text-xs md:text-base text-brand-gray"
                      style={{
                        color: '#b5b5b5',
                      }}
                    >
                      Testimonials
                    </div>
                    <div
                      style={{
                        height: '2px',
                      }}
                      className="bg-brand-gray w-[40px] md:w-[85px] ml-4 rounded-l-full rounded-r-full md:ml-6"
                    ></div>
                  </div>
                  {/* description */}
                  <div
                    className={`font-lato-light-italic2 text-brand-gray text-base  w-full  mt-10 mb-6 tracking-1  transition-opacity ease-linear duration-1000  leading-[30px] md:leading-8  text-justify  ${
                      fade ? 'opacity-0' : ''
                    } `}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {feedback.feedback}
                  </div>
                </div>
                {/* name */}
                <div
                  className={`text-black font-lato-light flex items-center dark:text-white tracking-wider text-xl   ease-linear duration-1000 transition-opacity  ${
                    fade ? 'opacity-0' : ''
                  } `}
                >
                  <div
                    className="w-10 md:w-14 h-10 md:h-14 rounded-full  bg-brand-gray bg-cover bg-center bg-no-repeat mr-5 "
                    style={{
                      backgroundImage: `url(${feedback.image})`,
                    }}
                  />
                  <div className=" flex tracking-1 md:tracking-3 ">
                    <div className="text-xs font-light md:text-xl">
                      {feedback.name}, {feedback.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <Quote
          className="absolute bottom-16 right-10 w-10 h-10 z-20 "
          stroke="none"
          style={{
            fill: '#979797',
          }}
        />
      </Swiper>
    </div>
  )
}

export default SocialProof
