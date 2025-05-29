import { WorkHeading } from '.'

import { prin1, prin2, prin3 } from '../assets/emojis'
const Principles = ({ largeEnter, imageEnter }) => {
  return (
    <div
      onMouseEnter={imageEnter}
      className="min-h-screen md:min-h-0 my-10 md:my-0 px-5 md:px-48 flex flex-col justify-center "
    >
      <WorkHeading text={'values'} />
      <div
        onMouseEnter={largeEnter}
        onMouseLeave={imageEnter}
        className="text-2xl md:text-4xl -mt-[14px] md:mt-0"
      >
        Principles I abide by
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 md:my-16">
        <div className="w-full  md:w-1/3 md:px-8 leading-[24px] ">
          <div className="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-10 md:px-10   md:shadow-none rounded-lg bg-brand-darkGrey2 md:bg-brand-black ">
            <img src={prin1} alt="" className=" w-16 h-16" />
            <div className="  text-2xl  mt-7 md:mt-12 mb-3">Understand</div>
            <div className="text-center leading-6 text-base ">
              The process of design is to <br className="md:hidden" />
              <span className="text-brand-gold">understand minds.</span>
            </div>
          </div>
        </div>
        <div className="w-full  md:w-1/3 md:px-8 md:my-0 my-4  ">
          <div className="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-10 md:px-10   md:shadow-non rounded-lg bg-brand-darkGrey2">
            <img src={prin2} alt="" className=" w-16 h-16" />
            <div className="  text-2xl  mt-7 md:mt-12 mb-3">Vision</div>
            <div className="text-center leading-6 text-base ">
              A <span className="text-brand-gold">clear vision and purpose</span> is a{' '}
              <br className="md:hidden" /> driving force for any product.
            </div>
          </div>
        </div>
        <div className="w-full  md:w-1/3 md:px-8 ">
          <div className="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-5 md:px-10   md:shadow-non rounded-lg bg-brand-darkGrey2 md:bg-brand-black">
            <img src={prin3} alt="" className=" w-16 h-16" />
            <div className="  text-2xl  mt-7 md:mt-12 mb-3">Perspective</div>
            <div className="text-center leading-6 text-base ">
              <span className="text-brand-gold">Diverse perspectives and common goals</span>{' '}
              <br className="md:hidden" />
              are the recipes for fantastic teams.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Principles
