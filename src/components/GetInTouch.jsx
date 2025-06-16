import getInTouchHome from '../assets/getInTouch/getInTouch1.png'
import getInTouchAbout from '../assets/getInTouch/getInTouch2.png'

const GetInTouch = ({ imageEnter, largeEnter, location }) => {
  return (
    <div id="get-in-touch" className="  w-full overflow-clip    md:mt-10 relative  ">
      <div className="relative text-brand-white px-7 md:px-48  pb-20 md:pb-[158px] pt-10 md:py-40  w-full   left-0 top-0">
        <div
          className="absolute z-0 hidden md:block"
          style={{
            width: '156px',
            height: '206px',
            transform: 'rotate(-8.934deg)',
            borderRadius: '10px',
            top: '75px',
            left: '125px',
            background: `url(${location === 'home' ? getInTouchHome : getInTouchAbout})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div className="flex flex-col z-20 md:flex-row md:items-center justify-between w-full">
          <div
            style={{
              letterSpacing: '.08em',
            }}
            className="text-left text-[24px] md:text-4xl z-20  font-lato font-semibold uppercase text-brand-white  tracking-wider mb-[40px] md:mb-0 md:my-0"
          >
            Get In Touch
          </div>

          <div className="font-lora-italic flex flex-col md:flex-row md:items-center gap-2 z-20 leading-6 md:w-auto font-normal tracking-[0.01em] md:tracking-1 text-base md:text-[22px]  text-brand-white">
            <a
              href="http://www.linkedin.com/in/shradha-b-k"
              onMouseEnter={largeEnter}
              target="_blank"
              rel="noreferrer"
              onMouseLeave={imageEnter}
              className=" font-lora-italic pl-3 md:pl-0"
            >
              <span className="text-brand-gold">Lets create</span> more soulful stories and
              delightful experiences
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
