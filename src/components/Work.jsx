/* eslint-disable react/prop-types */
import { useState } from "react"
import Draggable from 'react-draggable'
import svg from './../assets/x-icon.svg'

const Work = ({ title, type, date }) => {
  const [mode, setMode] = useState(false)

  return (
    <>
      <div className="w-full bg-[#7f7f7f] bg-opacity-0 
            hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between 
            transition-all duration-500 px-4 font-light ease-in"
        onClick={() => { setMode(!mode) }}>
        <a className="w-[125px]">{title}</a>
        <span className="w-[110px]">{type}</span>
        <span className="flex-none">{date}</span>
      </div>


      {mode &&
        <>
          <Draggable>
            <div className="w-11/12 max-w-4xl bg-[#757575] rounded-lg text-white absolute">
              <div className="flex w-full justify-between items-center px-4">
                <a className="w-[125px]">{title}</a>
                <span className="w-[110px]">{type}</span>
                <span className="flex-none">{date}</span>
                <button
                  onClick={() => { setMode(false) }}
                  onTouchStart={ () => { setMode(false) } }
                  className="hover:bg-[#6b6b6b] w-8 h-8 rounded-full grid 
                    place-content-center m-1 transition duration-300 ease cursor-pointer z-50">
                  <img src={svg} className="invert scale-[30%]" />
                </button>
              </div>
              <div className="p-8 w-full">
                <iframe 
                  src="https://player.vimeo.com/video/748216010?h=8529392af8" 
                  className="w-full sm:h-[300px] md:h-[445px]"
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowfullscreen />
              </div>
            </div>
          </Draggable>
        </>
      }
    </>
  )
}

export { Work }