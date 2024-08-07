/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import Draggable from 'react-draggable'
import { useSearchParams } from "react-router-dom"
import svg from './../assets/x-icon.svg'
import triangleSVG from '../assets/iconmonstr-triangle-1.svg'
import { LoadContext } from "../helpers/LoadContext"
import { Window } from "./Window"

const Work = ({ title, type, date, url, push, pop, order, id, hoverOverride, grabOverrideRef }) => {
  const [mode, setMode] = useState(false)               // desktop window
  const [expand, setExpand] = useState(false)           // mobile dropdown
  const [grabbing, setGrabbing] = useState(false)       // floating windows
  const [hovering, setHovering] = useState(false)       // link button hover

  // first load
  const openFirstElementDelayTime = (28 * 35) + 100 // 28 elements hardcoded, 35ms delay hardcoded
  const { firstLoad, setFirstLoad } = useContext(LoadContext)

  useEffect(() => {
    if (id === 0 && !desktop() && firstLoad) {
      setTimeout(() => {
        setExpand(true)
        setFirstLoad(false)
      }, openFirstElementDelayTime)
    }
  }, [])

  // reset trigger
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setMode(false)
    setExpand(false)
  }, [searchParams])

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

  const handleStartGrab = () => {
    push()
    grabOverrideRef.current = true
  }

  // effects

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (!desktop() && mode) {
        close()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

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

  const linkClass = "w-full bg-[#7f7f7f] bg-opacity-0 text-left hover:bg-opacity-80 hover:cursor-pointer rounded-xl flex justify-between transition-all duration-100 px-4 font-light ease-in relative"
  const linkClassActive = "bg-opacity-30"

  return (
    <>
      {/* link */}
      <button className={classNames(linkClass, { [linkClassActive]: mode })}
        onClick={handleClick}
        style={expandedStyle}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <p className="w-[155px] md:w-[270px] md:-mr-[200px] relative">
          {title}
        </p>
        <p className="w-[125px]">{type}</p>
        <p className="flex-none w-[75px] text-right">{date}</p>

        {/* mobile expanded */}
        {expand && <div className="absolute top-9 left-0 w-full h-[80%]">
          <iframe
            src={url}
            allow="fullscreen;"
            className="w-full h-full"
            allowFullScreen />
        </div>}

        {/* tooltip */}
        {desktop() && hovering && !hoverOverride &&
          <span
            className="absolute bg-black w-28 h-6 -top-6 grid place-content-center text-white rounded-sm tooltip">
            Click to open
            <img src={triangleSVG} className="absolute w-2 -bottom-1 left-12 transform -scale-y-100" />
          </span>}
      </button>

      {/* desktop window */}
      {mode && desktop() &&
        <Draggable
          onStart={handleStartGrab}
          onDrag={() => setGrabbing(true)}
          onStop={() => setGrabbing(false)}
          bounds={"body"}
          defaultPosition={{ x: -240, y: -150 }}>
          <button
            className="w-fit h-fit bg-[#757575] text-white absolute rounded
               focus:border-green-400 border border-[#757575] left-[50vw] top-[50vh]"
            style={{
              animation: 'open 900ms',
              zIndex: order * 10,
              cursor: grabbing ? 'grabbing' : 'grab',
            }}
            onKeyDown={handleKeyDown}
            id={`work-${id}`}
          >
            {/* tooltip */}
            {!grabOverrideRef.current &&
              <span
                className="absolute bg-black w-28 h-6 -top-6 grid place-content-center text-white rounded-sm tooltip">
                Drag to move
                <img src={triangleSVG} className="absolute w-2 -bottom-1 left-12 transform -scale-y-100" />
              </span>}

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
      <Window mode={mode} order={order} />
    </>
  )
}

export { Work }