const Hero = ({ work, next, largeEnter, imageEnter }) => {
  return (
    <div className=" bg-brand-black  h-screen w-full relative overflow-clip flex leading-0  ">
      {/* desktop  */}
      <div className="  md:w-[19.5%] bg-brand-black   z-20 relative  h-full hidden md:flex flex-col   px-5 md:px-24">
        <div className="flex  h-full    flex-col w-full justify-center pt-20  ">
          <div className="flex items-center   w-max">
            <div
              style={{
                height: '1px',
                width: '72px',
              }}
              className="bg-brand-gray  mr-4"
            />
            <div
              style={{ letterSpacing: '2px' }}
              className=" font-lato-med text-brand-gray uppercase   "
            >
              {work.domain}
            </div>
          </div>
          <div
            style={{
              fontSize: '64px',
            }}
            className="  font-semibold tracking-3  my-[48px] font-lato text-brand-white md:w-max"
          >
            {work.title}
          </div>
          {/* line animation */}
          {!next && (
            <div
              className="vertical-line-parent "
              style={{
                width: '1.3px',
                height: '32px',
                bottom: '73px',
              }}
            >
              <div className="work-hero-vertical-line "></div>
            </div>
          )}

          {next && (
            <a
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              style={{
                fontSize: '24px',
              }}
              href={work.link}
              className=" w-max md:text-3xl font-lato-med  text-white tracking-1.5"
            >
              Next Project
            </a>
          )}
        </div>
      </div>
      {!next && (
        <div className="block z-20 text-4xl md:hidden absolute px-5 left-0 top-0 pt-[230px]  text-brand-white w-full h-full">
          <div className="flex items-center  mb-6 col-span-12">
            <div
              style={{
                height: '1px',
                background: '#B5B5B5',
              }}
              className="  w-[40px] md:w-[72px] mr-4"
            />
            <div
              style={{
                color: '#B5B5B5',
              }}
              className="  tracking-2  uppercase font-lato-med text-sm "
            >
              {work.domain}
            </div>
          </div>
          <div className=" text-[32px] text-brand-white">{work.title}</div>
        </div>
      )}
      {next && (
        <div className="block z-20 text-4xl md:hidden absolute px-5 left-0 top-0 pt-[230px]  text-brand-white w-full h-full">
          <div className="flex items-center   col-span-12">
            <div
              style={{
                height: '1px',
                background: '#B5B5B5',
              }}
              className="  w-[40px] md:w-[72px] mr-4"
            />
            <div
              style={{
                color: '#B5B5B5',
              }}
              className="  tracking-2  uppercase font-lato-med text-sm "
            >
              {work.domain}
            </div>
          </div>
          <div className=" text-[32px] text-brand-white mt-[24px] mb-[20px] ">{work.title}</div>
          <div>
            <a
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              href={work.link}
              className="w-max text-brand-white tracking-1 text-[20px] font-lato-med "
            >
              Next Project
            </a>
          </div>
        </div>
      )}
      {!work.gif ? (
        <video
          style={{
            width: '100vw',
          }}
          className=" z-10  hidden md:block object-contain md:object-cover bg-center bg-no-repeat brightness-50 bg-brand-black"
          alt="loading..."
          loop
          autoPlay
          muted
          disablePictureInPicture
        >
          <source src={work.video} type="video/mp4" />
        </video>
      ) : (
        <img
          className=" hidden md:block z-10 object-cover object-center bg-no-repeat brightness-50 bg-brand-gray"
          style={{
            width: '80.5%',
          }}
          src={work.video}
          alt="hi"
        ></img>
      )}
      {!work.gif ? (
        <video
          style={{
            background: work.bgColor,
          }}
          className={` z-10 w-full  md:hidden ${
            work.id === 2 ? 'object-cover object-left' : 'object-contain object-bottom'
          }   bg-no-repeat brightness-50 `}
          alt="loading..."
          loop
          autoPlay
          muted
          disablePictureInPicture
        >
          <source src={work.mobVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          className={` z-10   md:hidden ${
            work.id === 2 ? 'object-cover object-center' : 'object-contain object-bottom'
          }   bg-no-repeat brightness-50 `}
          style={{
            background: work.bgColor,
          }}
          src={work.mobVideo}
          alt="hi"
        ></img>
      )}
    </div>
  )
}

export default Hero
