const Heading = ({ text }) => {
  return (
    <div className="flex items-center mb-[30px] md:mb-10 col-span-12">
      <div
        style={{
          height: '1px',
          background: '#424242',
        }}
        className="  w-[40px] md:w-[72px] mr-4"
      />
      <div
        style={{
          color: '#424242',
        }}
        className="  tracking-2  uppercase font-lato-med text-base "
      >
        {text}
      </div>
    </div>
  )
}

export default Heading
