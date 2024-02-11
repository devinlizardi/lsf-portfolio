import { useState } from "react"

import { Formal } from "./ProfileFormal"
import { Informal } from "./ProfileInformal"

import marbleForwardGif from './../assets/marbles/Forward-Button-100px.gif'
import marbleForwardStatic from './../assets/marbles/marble-forward.png'
import marbleBackwardGif from './../assets/marbles/Backward-Button-100px.gif'
import marbleBackwardStatic from './../assets/marbles/marble-backward.png'

const Profile = () => {
  const [mode, setMode] = useState(true) // true - formal, false - informal
  const [playing, setPlaying] = useState(false)

  const handeClick = () => {
    setMode(!mode)
    setPlaying(true)
    setTimeout(() => {
      setPlaying(false)
    }, 750)
  }

  return (
    <div className="p-12 font-normal">

      <button
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


        <h1>{mode ? "FORMAL" : "INFORMAL"}</h1>

      </button>

      <div className="max-w-3xl">
        {mode ? <Formal /> : <Informal />}
      </div>

      <br /><br />

      <div className="ml-12 leading-loose">
        <h3 className="italic font-bold">CONTACT</h3>
        <h4><a href="#">lsf.mov@gmail.com</a></h4>
        +1 786-547-2024
      </div>
      <br /><br />
      <div className="ml-40 leading-loose text-right w-[120px]">
        <h3 className="italic font-bold">LINKS</h3>
        <a href="http://www.linkedin.com/in/lsfnyc">LinkedIn</a><br />
        <a href="https://www.instagram.com/lsf.mov/">Instagram</a><br />
        <a href="https://vimeo.com/lsfnyc">Vimeo</a><br />
        <a href="https://soundcloud.com/sancheslucas">Soundcloud</a><br />
        <a href="https://open.spotify.com/artist/6HpybOnNyCHX67RvwvxwDn?si=_oxsQDtJQ3KPzYfIyMdKhg">Spotify</a><br />
        <a href="https://music.apple.com/us/artist/lucas-sanches/1528431346">Apple Music</a><br />
      </div>

    </div>
  )
}

export { Profile }