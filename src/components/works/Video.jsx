import { useRef, useState, useEffect } from 'react'

const Video = ({ work }) => {
  const video = useRef(null)
  const [videoswitch, setvideo] = useState(false)
  const [play, setplay] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const handleVideo = () => {
    if (videoswitch) {
      video.current.pause()
      setvideo(false)
      setplay(false)
    } else {
      video.current.play()
      setvideo(true)
      setplay(true)
    }
  }
  const toggleOverlay = () => {
    setShowOverlay(true)
    setTimeout(() => {
      setShowOverlay(false)
    }, 1000)
  }
  // on pressing spacebar without jquery
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
      e.preventDefault()
      handleVideo()
    }
  })
  useEffect(() => {
    play ? toggleOverlay() : setShowOverlay(true)
  }, [play])

  return (
    <div className="w-full h-full relative mt-4 md:mt-0">
      <video
        onClick={() => {}}
        className="md:h-screen relative w-full bg-brand-white object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
        ref={video}
        loop
        controls
      >
        <source src={work.video2} type="video/mp4" />
      </video>
      <div
        onClick={() => {
          video.current.play()
          setShowOverlay(false)
        }}
        className={`absolute bg-black  transition-all duration-300 w-full h-full top-0 left-0 ${
          !showOverlay ? ' hidden' : 'opacity-60'
        }`}
      >
        {/* {videoswitch ? (
          <PauseCircle
            color="#FEFEFE"
            strokeWidth={1}
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            onClick={() => {
              handleVideo();
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl  ${
              videoswitch && "  "
            } `}
            size={50}
          />
        ) : (
          <PlayCircle
            color="#FEFEFE"
            strokeWidth={1}
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            onClick={() => {
              handleVideo();
            }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl  ${
              videoswitch && " "
            } `}
            size={50}
          />
        )} */}
      </div>
    </div>
  )
}

export default Video
