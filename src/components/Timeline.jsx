/* eslint-disable react/prop-types */
import cW from './../assets/[c]-white-200x200.png'
import fW from './../assets/[f]-white-200x200.png'

const Timeline = ({ filter, reset }) => {
  const labelURL = { 'commercial': cW, 'freelance': fW }[filter]

  return (
    <span
      className="flex sm:gap-2 items-start w-[160px] flex-none cursor-pointer relative"
      onClick={reset}
    >
      <h1
        className="text-white hover:text-yellow-300 font-bold italic text-3xl"
      >TIMELINE</h1>

      {filter !== 'none' && <img src={labelURL}
        className='w-10 border-0 border-opacity-0 border-none absolute -right-4'
      />}

    </span>)
}

export { Timeline }