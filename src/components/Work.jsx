/* eslint-disable react/prop-types */
import { useContext, useEffect, useMemo, useRef, useState } from "react"
import classNames from "classnames"
import { useSearchParams } from "react-router-dom"
import Moveable from "react-moveable"
import svg from './../assets/x-icon.svg'
import triangleSVG from '../assets/iconmonstr-triangle-1.svg'
import { LoadContext } from "../helpers/LoadContext"
import { Months } from "../helpers/Constants"
import { useResetContext } from "../helpers/ResetContext"

import demoPreview from '../assets/lsf_preview_pop-ups_2025-05-27_2358/240p/240p_clean/04_harley-davidson_clean_240p.mp4'
import demoPreview1 from '../assets/lsf_preview_pop-ups_2025-05-27_2358/240p/240p_clean/02_college-2_clean_240p.mp4'
import demoPreview2 from '../assets/lsf_preview_pop-ups_2025-05-27_2358/240p/240p_clean/03_college-3_clean_240p.mp4'
import demoPreview3 from '../assets/lsf_preview_pop-ups_2025-05-27_2358/240p/240p_clean/01_college-1_clean_240p.mp4'


const Work = ({ title, type, date, url, push, pop, order, id, hoverOverride, grabOverrideRef, windowOpen }) => {
  const [mode, setMode] = useState(false)               // desktop window
  const [expand, setExpand] = useState(false)           // mobile dropdown
  const [grabbing, setGrabbing] = useState(false)       // floating windows
  const [hovering, setHovering] = useState(false)       // link button hover
  const [mouseX, setMouseX] = useState(0)               // hover preview

  const targetRef = useRef(null)                        // drag, scale

  // date formatting
  const d = new Date(date)
  const formattedDate = date === "#########" ? "#########" : Months[d.getMonth()] + " " + d.getFullYear()

  // first load
  const openFirstElementDelayTime = (28 * 35) + 100 // 28 elements hardcoded, 35ms delay hardcoded
  const { firstLoad, setFirstLoad } = useContext(LoadContext)
  const isFirstElement = id === 0

  useEffect(() => {
    if (isFirstElement && !desktop() && firstLoad) {
      setTimeout(() => {
        setExpand(true)
        setFirstLoad(false)
      }, openFirstElementDelayTime)
    }
  }, [])

  // reset trigger
  const [searchParams] = useSearchParams()
  const resetFlag = useResetContext()

  useEffect(() => {
    setMode(false)
    setExpand(false)
  }, [searchParams, resetFlag])

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
    setFirstLoad(false)
    if (desktop()) {
      (mode ? close : open)()
      setExpand(false)
    } else {
      setExpand(e => !e)
    }
  }

  const handleStartGrab = (e) => {
    push()
    grabOverrideRef.current = true
    e.target.style.transform = e.transform
    setGrabbing(true)
  }

  const randomDemo = useMemo(() => {
    const demos = [demoPreview, demoPreview1, demoPreview2, demoPreview3]
    const randInt = Math.floor(Math.random() * 4)
    return demos[randInt]
  }, [])

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

  const isYoutubeEmbed = url.includes('youtube')
  const embedStyle = isYoutubeEmbed ? { transform: "scale(0.9)" } : { clipPath: 'inset(5% 0)' }

  return (
    <>
      {/* link */}
      <button className={classNames(linkClass, { [linkClassActive]: mode })}
        onClick={handleClick}
        style={expandedStyle}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={(e) => setMouseX(e.clientX)}
      >
        <p className="w-[155px] md:w-[270px] md:-mr-[200px] relative">
          {title}
        </p>
        <p className="w-[125px]">{type}</p>
        <p className="flex-none w-[75px] text-right">{formattedDate}</p>

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
          </span>
        }
        {/* hover preview */}
        {desktop() && hovering && !windowOpen &&
          <div
            style={{ left: mouseX }}
            className="absolute w-44 left-[30%] -top-8 rounded-xl bg-[#343434] z-50 border-pink-400 border-2"
          >
            <video src={randomDemo} autoPlay loop className="rounded-[10px]" />
          </div>}
      </button>

      {/* desktop window */}
      {mode && desktop() &&
        <>
          <button
            className="w-fit h-fit bg-[#757575] text-white absolute rounded
                 focus:border-green-400 border border-[#757575] target"
            style={{
              animation: 'open 75ms',
              zIndex: (order + 1) * 10,
              cursor: grabbing ? 'grabbing' : 'grab',
              width: '514px'
            }}
            onKeyDown={handleKeyDown}
            id={`work-${id}`}
            ref={targetRef}
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
              <span className="flex-none">{formattedDate}</span>
            </div>
            <div className="px-4 w-full" style={embedStyle}>
              <iframe
                src={url}
                className="h-[300px] w-[480px]"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen />
            </div>
          </button>
          <div style={{ zIndex: (order + 1) * 10, }}>
            <Moveable
              target={targetRef}
              draggable
              scalable
              keepRatio
              throttleScale={0}
              throttleDrag={1}
              edgeDraggable={false}
              onDrag={e => handleStartGrab(e)}
              onDragEnd={() => setGrabbing(false)}
              onScale={e => { e.target.style.transform = e.transform }}
              renderDirections={['nw', 'ne', 'sw', 'se']}
            />
          </div>
        </>
      }
    </>
  )
}

export { Work }