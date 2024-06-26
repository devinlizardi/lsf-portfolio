/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import classNames from "classnames"
import Draggable from 'react-draggable'
import svg from './../assets/x-icon.svg'

const Work = ({ title, type, date, url, push, pop, order, id }) => {
  const [mode, setMode] = useState(false)
  const [expand, setExpand] = useState(false)
  const [bounds, setBounds] = useState()
  const [grabbing, setGrabbing] = useState(false)

  // handlers, functions

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      close()
    }
  }

  const close = () => {
    setMode(false)
    setExpand(false)
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
      (mode ? close : open)()
      setExpand(false)
    } else {
      setExpand(e => !e)
    }
  }

  const handleGrab = () => {
    push()
    setGrabbing(true)
  }

  const updateBounds = () => {
    const temp = document.getElementById('list').getBoundingClientRect()
    setBounds({ left: temp.left - 20, right: temp.right - 525 })
  }

  // effects

  useEffect(() => {
    updateBounds()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateBounds()
      if (!desktop() && mode) {
        close()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, expand])

  // styles

  const expandedStyle = expand ? {
    height: '240px',
    maxHeight: '240px',
    position: 'relative',
    backgroundColor: '#4f4f4f',
    color: 'white',
  } : {
    maxHeight: '48px',
  }

  const linkClass = "w-full bg-[#7f7f7f] bg-opacity-0 text-left hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between transition-all duration-100 px-4 font-light ease-in"
  const linkClassActive = "bg-opacity-30"

  return (
    <>
      {/* link */}
      <button className={classNames(linkClass, { [linkClassActive]: mode })}
        onClick={handleClick}
        style={expandedStyle}>
        <a className="w-[155px] md:w-[270px] md:-mr-[200px] relative">{title}</a>
        <span className="w-[125px]">{type}</span>
        <span className="flex-none w-[75px] text-right">{date}</span>

        {/* mobile expanded */}
        {expand && <div className="absolute top-9 left-0 w-full h-[80%]">
          <iframe
            src={url}
            allow="fullscreen;"
            className="w-full h-full"
            allowFullScreen />
        </div>}
      </button>

      {/* desktop window */}
      {mode && desktop() &&
        <Draggable onStart={handleGrab} onStop={() => setGrabbing(false)} bounds={bounds}>
          <button
            className="w-fit h-fit bg-[#757575] text-white absolute rounded
               focus:border-green-400 border border-[#757575]"
            style={{ animation: 'open 75ms', zIndex: order * 10, cursor: grabbing ? 'grabbing' : 'grab' }}
            onKeyDown={handleKeyDown}
            id={`work-${id}`}
          >
            <div className="flex w-full justify-between items-center px-4 pt-2 text-sm">
              <div
                onMouseDown={close}
                onTouchStart={close}
                className="hover:bg-[#6b6b6b] w-7 h-7 rounded-full grid 
                    place-content-center m-1 transition duration-300 ease 
                    cursor-pointer z-50 absolute left-1 top-[1px]">
                <img src={svg} className="scale-[30%]" />
              </div>
              <a className="ml-5">{title}</a>
              <span className="">{type}</span>
              <span className="flex-none">{date}</span>
            </div>
            <div className="px-4 w-full" style={{ clipPath: 'inset(5% 0)' }}>
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