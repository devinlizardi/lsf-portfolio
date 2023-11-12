/* eslint-disable react/prop-types */

const Work = ({ title, type, date }) => {
  return(
    <>
      <div className="w-full bg-[#7f7f7f] bg-opacity-0 
        hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between 
        transition-all duration-500 px-4 font-light ease-in">
          <a className="w-[125px]">{title}</a><span className="w-[110px]">{type}</span><span className="flex-none">{date}</span>
      </div>
    </>
  )
}

export { Work }