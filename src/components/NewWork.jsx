import { ParallaxHover } from 'react-parallax-hover'

import WorkCTA from './WorkCTA'

// Work Backgrounds Desktop
import HikeBG from '../assets/newwork/hikebg.jpg'
import HikeBG2 from '../assets/newwork/hikebg2.png'
// import Ninjaslaab from '../assets/newwork/ninjaaslab.png'
import PharmEasy1 from '../assets/newwork/pharm1.png'
import PharmEasy2 from '../assets/newwork/pharm2.png'
// import Cricket from '../assets/newwork/cricket.png'
// import travel from '../assets/newwork/travel.png'
// import house from '../assets/newwork/house.png'
// Work Backgrounds Mobile
import HikeBGmob from '../assets/newwork/hikebgmob.png'
import HikeBG2mob from '../assets/newwork/hikebg2mob.png'
import PharmEasy1Mob from '../assets/newwork/pharm1mob.png'
import PharmEasy2Mob from '../assets/newwork/pharm2mob.png'
// import cricketMob from '../assets/newwork/cricketmob.png'
// import travelMob from '../assets/newwork/travelmob.png'
// import houseMob from '../assets/newwork/houseMob.png'

// Icons
import Lock from '../assets/icons/lock.png'
import Player from '../assets/newwork/player.png'

const TagPill = ({ text }) => {
  return (
    <span className="bg-[#202020] border-[#292929] font-lato border-[1.5px] md:border-2 rounded-full px-4 py-[11px] md:py-1 font-normal text-base md:text-xl tracking-[0.3px] leading-[15.6px] md:leading-8 text-[#d1d1d1]">
      {text}
    </span>
  )
}

const WorkItem = ({ keythingy, item, imageEnter, largeEnter }) => {
  return (
    <div className="flex flex-col gap-6">
      <a
        href={item.link ? item.link : null}
        rel="noreferrer"
        target="_blank"
        key={keythingy}
        className="flex flex-col"
        onMouseEnter={item.islocked ? imageEnter : largeEnter}
        onMouseLeave={imageEnter}
      >
        <ParallaxHover
          borderRadius={10}
          height={420}
          rotation={2}
          scale={0}
          shadow={0}
          shine={1}
          width={632}
        >
          <div
            className={`rounded-[10px] hovered !bg-cover`}
            style={{
              width: '632px',
              height: '420px',
              background: `url(${item.background})`,
            }}
          >
            <div
              style={
                {
                  // backdropFilter: "blur(13px)",
                  // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
                }
              }
              className="w-full h-full flex flex-col justify-start items-start md:px-11 md:pt-12 rounded-[10px]"
            >
              <p className="uppercase font-lato text-xl font-extrabold tracking-[2.6px] flex gap-2">
                {item.company}{' '}
                {item.islocked && (
                  <img className="lock-icon" width={24} src={Lock} alt="Lock Icon" />
                )}
              </p>
              <p
                className={`font-lora-italic md:pt-3 text-[#fefefe] text-[34px] tracking-[0.51px] ${
                  item.smallerTitle && 'md:pr-28'
                }`}
              >
                {item.title}
              </p>
              {item.isVideo && (
                <a href={item.videoLink} className="md:mt-7 z-40" target="_blank" rel="noreferrer">
                  <img src={Player} alt="Player icon" width={62} height={62} />
                </a>
              )}
            </div>
          </div>
        </ParallaxHover>
      </a>
      <div className="text-[#fefefe] text-[22px] tracking-[0.33px] gap-4 flex">
        {item.labels.map((label, index) => (
          <TagPill key={index} text={label} />
        ))}
      </div>
    </div>
  )
}

const WorkItemMobile = ({ keythingy, item, isSmallerWidth }) => {
  return (
    <div className="flex flex-col gap-[16px] mb-8 w-full">
      <a href={item.link} rel="noreferrer" target="_blank" key={keythingy}>
        <div
          className="bg-cover"
          style={{
            minWidth: '100vw',
            background: `url(${item.backgroundMob})`,
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              // backdropFilter: "blur(13px)",
              // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
              minHeight: '231px',
            }}
            className="w-full h-full"
          >
            <div className="w-full h-full flex flex-col justify-center items-start pl-[22px] pr-[40px] py-8">
              <p className="uppercase font-lato text-sm font-extrabold tracking-[1.82px] mb-5 flex gap-1.5 items-center">
                {item.company}{' '}
                {item.islocked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.3332 6.00004V4.66671C11.3332 3.78265 10.982 2.93481 10.3569 2.30968C9.73174 1.68456 8.8839 1.33337 7.99984 1.33337C7.11578 1.33337 6.26794 1.68456 5.64282 2.30968C5.01769 2.93481 4.6665 3.78265 4.6665 4.66671V6.00004C4.13607 6.00004 3.62736 6.21075 3.25229 6.58582C2.87722 6.9609 2.6665 7.46961 2.6665 8.00004V12.6667C2.6665 13.1971 2.87722 13.7058 3.25229 14.0809C3.62736 14.456 4.13607 14.6667 4.6665 14.6667H11.3332C11.8636 14.6667 12.3723 14.456 12.7474 14.0809C13.1225 13.7058 13.3332 13.1971 13.3332 12.6667V8.00004C13.3332 7.46961 13.1225 6.9609 12.7474 6.58582C12.3723 6.21075 11.8636 6.00004 11.3332 6.00004ZM5.99984 4.66671C5.99984 4.13627 6.21055 3.62757 6.58563 3.25249C6.9607 2.87742 7.46941 2.66671 7.99984 2.66671C8.53027 2.66671 9.03898 2.87742 9.41405 3.25249C9.78913 3.62757 9.99984 4.13627 9.99984 4.66671V6.00004H5.99984V4.66671ZM11.9998 12.6667C11.9998 12.8435 11.9296 13.0131 11.8046 13.1381C11.6796 13.2631 11.51 13.3334 11.3332 13.3334H4.6665C4.48969 13.3334 4.32012 13.2631 4.1951 13.1381C4.07008 13.0131 3.99984 12.8435 3.99984 12.6667V8.00004C3.99984 7.82323 4.07008 7.65366 4.1951 7.52863C4.32012 7.40361 4.48969 7.33337 4.6665 7.33337H11.3332C11.51 7.33337 11.6796 7.40361 11.8046 7.52863C11.9296 7.65366 11.9998 7.82323 11.9998 8.00004V12.6667Z"
                      fill="white"
                    />
                  </svg>
                )}
              </p>
              <div
                style={{
                  width: `${item.mobWidth ? item.mobWidth : isSmallerWidth ? '290' : '270'}px`,
                }}
              >
                <p
                  className={`font-lora-italic text-[#fefefe] text-[22px] font-medium leading-9 tracking-[0.33px]`}
                >
                  {item.title}
                </p>
                {item.isVideo && (
                  <a
                    href={item.videoLink}
                    className="z-40 mt-3 w-max flex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Player} alt="Player icon" width={43} height={43} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="mx-[22px] tracking-[0.33px] gap-[10px] flex flex-wrap">
        {item.labels.map((label, index) => (
          <TagPill key={index} text={label} />
        ))}
      </div>
    </div>
  )
}

const NewWork = ({ imageEnter, largeEnter }) => {
  const recentWorkInfo = [
    {
      company: 'Hike',
      title: 'Diving into the Realm of Users through User Immersion',
      subTitle: 'Rush By Hike, A Real Money Gaming App',
      background: HikeBG,
      backgroundMob: HikeBGmob,
      mobWidth: 290,
      // islocked: true,
      link: 'https://www.figma.com/proto/X6IFgiegAQerDSBe5RKBs3/Case-study-stack?page-id=1%3A2&type=design&node-id=1-8501&viewport=758%2C738%2C0.24&t=jbsnjihAGYGdgkII-1&scaling=contain&starting-point-node-id=1%3A8284&mode=design',
      labels: ['B2C', 'Gaming', 'Field Study', 'User Interviews'],
    },
    {
      company: 'Hike',
      title: "Testing 'Tap to Choose' Feature in Ludo Game",
      subTitle: 'Rush By Hike, A Real Money Gaming App',
      background: HikeBG2,
      backgroundMob: HikeBG2mob,
      link: 'https://morning-jackrabbit-815.notion.site/Concept-Evaluation-Testing-Tap-to-Choose-Feature-in-Ludo-Game-74217ff086d04d7cbf8a56cb81d87b9f?pvs=4',
      labels: ['Evaluative Study', 'Usability Test', 'User Interviews'],
      // islocked: true,
    },
  ]

  const designWork = [
    {
      company: 'PHARMEASY',
      title: 'Redesigning NPS experience to drive more responses & better scores.',
      subTitle: 'BillEasy, In-house Invoicing Software',
      background: PharmEasy1,
      backgroundMob: PharmEasy1Mob,
      link: 'https://www.figma.com/proto/GMZbwWuOmmAbkH4NZfWfVN/B2C---NPS?page-id=0%3A1&node-id=28-37335&viewport=-12800%2C2011%2C0.45&t=0dGXIsXPtUfXRxnZ-1&scaling=scale-down&content-scaling=fixed',
      isVideo: false,
      labels: ['B2C', 'Healthcare', 'Product Design'],
    },
    {
      company: 'Thyrocare · PharmEasY',
      title: 'Optimizing Marker Test selection for Labs to prevent critical errors.',
      subTitle: '',
      background: PharmEasy2,
      backgroundMob: PharmEasy2Mob,
      link: '',
      islocked: true,
      smallerTitle: true,
      labels: ['B2B', 'Healthcare', 'Product Design', 'Coming Soon'],
    },
  ]

  // const otherWorkInfo = [
  //   {
  //     company: 'Personal Project',
  //     title: 'Documenting the Process of Designing My Dream Home',
  //     subTitle: 'Exploring the Dynamics of Opinion Trading Games in Cricket',
  //     background: house,
  //     backgroundMob: houseMob,
  //     link: '',
  //     islocked: true,
  //     labels: ['Coming soon!', 'Pre-D Research', 'Interior Design'],
  //     smallerTitle: true,
  //   },
  //   {
  //     company: 'Hike',
  //     title: 'Exploring the Dynamics of Opinion Trading Games in Cricket',
  //     subTitle: 'Exploring the Dynamics of Opinion Trading Games in Cricket',
  //     background: Cricket,
  //     backgroundMob: cricketMob,
  //     link: '',
  //     islocked: true,
  //     labels: ['Generative Study', 'Survey', 'User Interviews'],
  //   },
  // ]

  return (
    <div
      id="research"
      className="min-h-screen pt-[80px] md:pt-[90px] md:px-24 md:py-5 flex flex-col text-white w-full md:gap-32"
    >
      <div className="flex flex-col md:gap-10">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-5 md:pb-0 text-lg font-medium track">
          Best Design Work
        </h3>
        <div className="hidden md:flex md:justify-between md:items-center gap-[18px]">
          {designWork.map((item, index) => (
            <WorkItem
              keythingy={index}
              item={item}
              imageEnter={imageEnter}
              largeEnter={largeEnter}
            />
          ))}
        </div>
        <WorkCTA imageEnter={imageEnter} largeEnter={largeEnter} isDesign={true} isMobile={false} />
        <div className="md:hidden flex flex-col">
          {designWork.map((item, index) => (
            <WorkItemMobile keythingy={index} item={item} isSmallerWidth={true} />
          ))}
          <WorkCTA
            imageEnter={imageEnter}
            largeEnter={largeEnter}
            isDesign={true}
            isMobile={true}
          />
        </div>
      </div>
      <div className="flex flex-col md:gap-10 mt-8 md:mt-0">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-5 md:pb-0 text-lg font-medium track">
          Best Research Work
        </h3>
        <div className="hidden md:flex md:justify-between gap-[18px]">
          {recentWorkInfo.map((item, index) => (
            <WorkItem
              keythingy={index}
              item={item}
              imageEnter={imageEnter}
              largeEnter={largeEnter}
            />
          ))}
        </div>
        {/* <WorkCTA
          imageEnter={imageEnter}
          largeEnter={largeEnter}
          isDesign={false}
          isMobile={false}
        /> */}

        <div className="md:hidden flex flex-col">
          {recentWorkInfo.map((item, index) => (
            <WorkItemMobile keythingy={index} item={item} />
          ))}
          {/* <WorkCTA
            imageEnter={imageEnter}
            largeEnter={largeEnter}
            isDesign={false}
            isMobile={true}
          /> */}
        </div>
      </div>
      {/* <div className="flex flex-col md:gap-10 mt-8 md:mt-0">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-5 md:pb-0 text-lg font-medium track">
          Other Work
        </h3>
        <div className="hidden md:flex md:justify-between gap-[18px]">
          {otherWorkInfo.map((item, index) => (
            <WorkItem
              keythingy={index}
              item={item}
              imageEnter={imageEnter}
              largeEnter={largeEnter}
            />
          ))}
        </div>
        <div className="md:hidden flex flex-col">
          {otherWorkInfo.map((item, index) => (
            <WorkItemMobile keythingy={index} item={item} />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default NewWork
