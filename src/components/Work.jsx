/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Draggable from 'react-draggable'
import svg from './../assets/x-icon.svg'

const Work = ({ title, type, date, url, push, pop, order, id }) => {
  const [mode, setMode] = useState(false)
  const [expand, setExpand] = useState(false)

  // handlers, functions

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      close()
    }
  }

  const close = () => {
    setMode(false)
    pop()
  }

  const open = () => {
    setMode(true)
    push()
  }

  const desktop = () => {
    return window.matchMedia('screen and (min-width: 640px)').matches
  }

  const handleClick = () => {
    if (desktop()) {
      if (mode) {
        close()
      } else {
        open()
      }
    } else {
      setExpand(e => !e)
    }
  }

  // effects

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (!desktop() && mode) {
        close()
        setExpand(true)
      } else if (desktop() && expand) {
        setExpand(false)
        open()
      }
    })
  }, [mode, expand])

  // styles

  const expandedStyle = expand ? {
    height: '220px',
    maxHeight: '220px',
    position: 'relative',
    backgroundColor: '#7f7f7f'
  } : {
    maxHeight: '48px',
  }

  return (
    <>
      {/* link */}
      <button className="w-full bg-[#7f7f7f] bg-opacity-0 text-left
            hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between 
            transition-all duration-100 px-4 font-light ease-in"
        onClick={handleClick}
        style={expandedStyle}>
        <a className="w-[155px] md:w-[270px] md:-mr-[200px]">{title}</a>
        <span className="w-[125px]">{type}</span>
        <span className="flex-none w-[75px] text-right">{date}</span>
        {expand && <div className="absolute bottom-4 left-[calc(50vw-168px)]">
          <iframe
            src={url}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen />
        </div>}
      </button>

      {/* desktop window */}
      {mode && desktop() &&
        <Draggable onStart={push}>
          <button
            className="w-fit h-fit bg-[#757575] text-white absolute rounded
               focus:border-green-400 border border-[#757575]"
            style={{ animation: 'open 75ms', zIndex: order * 10 }}
            onKeyDown={handleKeyDown}
            id={`work-${id}`}
          >
            <div className="flex w-full justify-between items-center px-4">
              <a className="w-[125px]">{title}</a>
              <span className="w-[110px]">{type}</span>
              <span className="flex-none">{date}</span>
              <button
                onMouseDown={close}
                onTouchStart={close}
                className="hover:bg-[#6b6b6b] w-8 h-8 rounded-full grid 
                    place-content-center m-1 transition duration-300 ease cursor-pointer z-50">
                <img src={svg} className="invert scale-[30%]" />
              </button>
            </div>
            <div className="px-4 w-full">
              <iframe
                src={url}
                className="h-[300px] w-[480px]"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen />
            </div>
          </button>
        </Draggable>
      }
    </>
  )
}

export { Work }