/* eslint-disable react/prop-types */
import { useState } from "react"
import Draggable from 'react-draggable'
import svg from './../assets/x-icon.svg'

const Work = ({ title, type, date, url }) => {
  const [mode, setMode] = useState(false)

  return (
    <>
      {/* link */}
      <button className="w-full bg-[#7f7f7f] bg-opacity-0 text-left
            hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between 
            transition-all duration-200 px-4 font-light ease-in"
        onClick={() => { setMode(!mode) }}>
        <a className="w-[155px]">{title}</a>
        <span className="w-[110px]">{type}</span>
        <span className="flex-none w-[75px] text-right">{date}</span>
      </button>

      {/* window */}
      {mode &&
        <>
          <Draggable>
            <div className="w-fit h-fit bg-[#757575] rounded-lg text-white absolute">
              <div className="flex w-full justify-between items-center px-4">
                <a className="w-[125px]">{title}</a>
                <span className="w-[110px]">{type}</span>
                <span className="flex-none">{date}</span>
                <button
                  onClick={() => { setMode(false) }}
                  onTouchStart={() => { setMode(false) }}
                  className="hover:bg-[#6b6b6b] w-8 h-8 rounded-full grid 
                    place-content-center m-1 transition duration-300 ease cursor-pointer z-50">
                  <img src={svg} className="invert scale-[30%]" />
                </button>
              </div>
              <div className="px-4  w-full">
                <iframe
                  src={url}
                  className="w-full h-[300px] md:w-[480px]"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen />
              </div>
            </div>
          </Draggable>
        </>
      }
    </>
  )
}

export { Work }