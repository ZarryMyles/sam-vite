import Marquee from 'react-fast-marquee'
const WorkLogos = ({ imageEnter, largeEnter }) => {
  const clients = [
    {
      name: 'Hike',
      link: 'https://www.hike.in/',
    },
    {
      name: 'Google Developers',
      link: 'https://www.instagram.com/gdscreva/',
    },
    {
      name: 'Thyrocare',
      link: 'https://www.thyrocare.com/',
    },
    {
      name: 'PharmEasy',
      link: 'https://pharmeasy.in/#',
    },
    {
      name: 'Hike',
      link: 'https://www.hike.in/',
    },
    {
      name: 'Google Developers',
      link: 'https://www.instagram.com/gdscreva/',
    },
    {
      name: 'Thyrocare',
      link: 'https://www.thyrocare.com/',
    },
    {
      name: 'PharmEasy',
      link: 'https://pharmeasy.in/#',
    },
    {
      name: 'Hike',
      link: 'https://www.hike.in/',
    },
    {
      name: 'Google Developers',
      link: 'https://www.instagram.com/gdscreva/',
    },
    {
      name: 'Thyrocare',
      link: 'https://www.thyrocare.com/',
    },
    {
      name: 'PharmEasy',
      link: 'https://pharmeasy.in/#',
    },
    {
      name: 'Hike',
      link: 'https://www.hike.in/',
    },
    {
      name: 'Google Developers',
      link: 'https://www.instagram.com/gdscreva/',
    },
    {
      name: 'Thyrocare',
      link: 'https://www.thyrocare.com/',
    },
    {
      name: 'PharmEasy',
      link: 'https://pharmeasy.in/#',
    },
  ]

  return (
    <div
      className=" pt-16 mb-10 md:py-24 flex justify-center items-center w-full  dark:bg-brand-black"
      id="work-logo-container "
    >
      <div className="w-full ">
        <Marquee speed={60} direction="right">
          {clients.map((client) => (
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              style={{
                fontWeight: '100',
              }}
              className="px-10 flex md:my-7 my-3 items-center text-xl md:text-4xl tracking-1.5  dark:text-[#454545] font-lato-light   md:mx-3"
            >
              {client.name}
            </a>
          ))}
        </Marquee>
        <Marquee speed={60} direction="left">
          {clients.map((client) => (
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="px-10 flex mb-5 items-center  font-lora-italic  text-xl md:text-4xl tracking-1.5  dark:text-[#a7a7a7] md:mx-3"
            >
              {client.name}
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default WorkLogos
