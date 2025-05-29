import Arrow from '../assets/icons/guidance-arrow.png'

const WorkCTA = ({ imageEnter, largeEnter, isDesign, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? 'md:hidden' : 'hidden md:block'
      } text-white w-full px-6 pb-[76px] md:px-0 md:pb-0 md:pt-5`}
    >
      <a
        href={
          isDesign
            ? '/design'
            : 'https://morning-jackrabbit-815.notion.site/My-Research-Work-5ef065ef92df48fc9a9ab033595cbc2b?pvs=4'
        }
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-6 md:gap-[32px] w-max"
      >
        <span
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          className="border-2 border-brand-fadedGold rounded-full px-4 md:px-10 py-3 md:py-4 text-brand-gold font-lora-italic tracking-[0.54px] text-base md:text-[30px]"
        >
          View more {isDesign ? 'Designs' : 'Research'}
        </span>
        <img
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          src={Arrow}
          alt="guidance arrow"
          className="w-12 md:w-auto md:h-auto "
        />
      </a>
    </div>
  )
}

export default WorkCTA
