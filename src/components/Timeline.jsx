/* eslint-disable react/prop-types */
import { useState } from 'react'
import cW from './../assets/[c]-white-200x200.png'
import cY from './../assets/[c]-yellow-200x200.png'
import fW from './../assets/[f]-white-200x200.png'
import fY from './../assets/[f]-yellow-200x200.png'

const Timeline = ({ filter, handleFilter }) => {
  const [hover, setHover] = useState(false)

  const asterisk = ((() => {
    switch (filter) {
      case 'commercial':
        return [cW, cY]
      case 'freelance':
        return [fW, fY]
      default:
        return ['', '']
    }
  })())

  return (
    <span
      className="flex sm:gap-2 items-start w-[160px] flex-none cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleFilter()}
    >
      <h1
        className="text-white font-bold italic text-3xl"
        style={{ color: hover ? 'rgb(253 224 71)' : 'white' }}
      >TIMELINE</h1>

      <span>
        <img src={asterisk[0]}
          className='w-10 absolute border-0 border-opacity-0 border-none'
          style={{ visibility: hover ? 'hidden' : 'visible' }}
        />
        <img src={asterisk[1]}
          className='w-10 absolute  border-0 border-opacity-0 border-none'
          style={{ visibility: hover ? 'visible' : 'hidden' }}
        />
      </span>

    </span>)
}

export { Timeline }