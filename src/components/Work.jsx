/* eslint-disable react/prop-types */
import { useState } from "react"
import Draggable from 'react-draggable'; // The default

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
            <div className="w-11/12 max-w-4xl h-32 bg-[#757575] rounded-lg text-white absolute">
              <div className="flex w-full justify-between px-4">
                <a className="w-[125px]">{title}</a>
                <span className="w-[110px]">{type}</span>
                <span className="flex-none">{date}</span>
              </div>
            </div>
          </Draggable>
        </>
      }
    </>
  )
}

export { Work }