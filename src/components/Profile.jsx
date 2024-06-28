import { useState } from "react"

import { Formal } from "./ProfileFormal"
import { Informal } from "./ProfileInformal"

import marbleForwardGif from './../assets/marbles/Forward-Button-100px.gif'
import marbleForwardStatic from './../assets/marbles/marble-forward.png'
import marbleBackwardGif from './../assets/marbles/Backward-Button-100px.gif'
import marbleBackwardStatic from './../assets/marbles/marble-backward.png'

import closeX from '../assets/x-icon.svg'
import video from '../assets/LSF_01_COLOR.mp4'
import resume from '../assets/Lucas_2024.pdf'

const Profile = () => {
  const [mode, setMode] = useState(true) // true - formal, false - informal
  const [playing, setPlaying] = useState(false)
  const noInformal = true

  const handeClick = () => {
    setMode(!mode)
    setPlaying(true)
    setTimeout(() => {
      setPlaying(false)
    }, 750)
  }

  return (
    <div className="p-12 font-normal">

      {noInformal && <p className="mb-8">-</p>}
      {!noInformal && <button
        className="flex gap-3 items-center mb-4 -ml-4"
        onClick={handeClick}>

        {/* formal */}
        <img
          className="w-10"
          style={{ display: mode && !playing ? "block" : "none" }}
          src={marbleForwardStatic} />
        <img
          className="w-10"
          style={{ display: mode && playing ? "block" : "none" }}
          src={marbleBackwardGif} />

        {/* informal */}
        <img
          className="w-10"
          style={{ display: !mode && !playing ? "block" : "none" }}
          src={marbleBackwardStatic} />
        <img
          className="w-10"
          style={{ display: !mode && playing ? "block" : "none" }}
          src={marbleForwardGif} />


        <h1 className=" font-bold">{mode ? "FORMAL" : "INFORMAL"}</h1>

      </button>}

      <div className="max-w-3xl">
        {mode ? <Formal /> : <Informal />}
      </div>

      <br /><br />

      <div className="leading-loose">
        <h3 className="italic font-bold">CONTACT</h3>
        <h4><a
          href="mailto:lsf.move@gmail.com"
          className="hover:text-[#73fc7a]">
          lsf.mov@gmail.com</a></h4>
        +1 786-547-2024
      </div>
      <br /><br />
      <ul className="relative -top-36 left-[max(100px,_30vw)] leading-loose text-right w-[120px] 
                    [&>li:hover]:text-[#73fc7a] [&>li:hover]:cursor-pointer">
        <li className="italic font-bold">LINKS</li>
        <li><a href="http://www.linkedin.com/in/lsfnyc">LinkedIn</a></li>
        <li><a href="https://vimeo.com/lsfnyc">Vimeo</a></li>
        <li><a href="https://www.instagram.com/lsf.mov/">Instagram</a></li>
        <li><a href="https://soundcloud.com/sancheslucas">Music</a></li>
        <li className="text-[#73fc7a]"><a href={resume}>Resume</a></li>
      </ul>

      <div className="h-24" />

      {!mode && <div
        className="fixed bottom-4 right-4 transition-transform
    hover:scale-125 hover:-translate-x-12 hover:-translate-y-8
    flex flex-col gap-2"
      >
        <img src={closeX}
          className="w-2 self-end invisible"
          alt="Close" />
        <video controls autoPlay preload muted playsInline
          controlsList="nofullscreen"
          className="w-[200px] md:w-[300px] rounded">
          <source src={video} type="video/mp4" />
        </video>
      </div>}

    </div>
  )
}

export { Profile }