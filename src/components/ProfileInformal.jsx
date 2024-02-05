import { useState } from 'react'
import dogMeme from './../assets/memes/sus-dog.jpg'
import confusedMan from './../assets/memes/confused-man.jpg'
import impatientWoman from './../assets/memes/impatient-woman.jpg'
import focusGroups from './../assets/memes/focus-groups.jpg'
import bartender from './../assets/memes/bartender.jpg'
import cycling from './../assets/memes/cycling.jpg'
import musicGuy from './../assets/memes/music-guy.jpg'

/* eslint-disable react/prop-types */
const G = ({ children, meme }) => {
  const [hover, setHover] = useState(false)
  const [x, setX] = useState()
  const [cursor, setCursor] = useState('n-resize')

  const handleX = (e) => { setX(e.clientX - 100) }
  const spinCursor = () => {
    if (cursor === 'n-resize') {
      setCursor('e-resize')
      return
    }
    if (cursor === 'e-resize') {
      setCursor('s-resize')
      return
    }
    if (cursor === 's-resize') {
      setCursor('w-resize')
      return
    }
    if (cursor === 'w-resize') {
      setCursor('n-resize')
      return
    }
  }

  return (<>
    <span
      className="text-[#73fc7a] font-medium" style={{ cursor: cursor }}
      onMouseOver={(e) => { setHover(true); handleX(e) }}
      onMouseMove={(e) => { handleX(e); spinCursor() }}
      onMouseOut={() => setHover(false)}
    >{children}</span>
    {hover && <img src={meme} className='absolute' style={{ left: x }} />}
  </>)
}

const Informal = () => {
  return (
    <>
      <p>
        Lucas (<G meme={dogMeme}>who definitely did not type this himself in the 3rd person</G>)
        is a proud Brasileiro Americano that likes to edit videos and make music.
        <br /><br />
        he had no idea what he wanted at 18 (<G meme={confusedMan}>how could you</G>) so he opted for
        a liberal arts curriculum at a college that gave him a discount for being a
        1st gen student. but really he went there because it was in New York City.
        <br /><br />
        he took design, editing, and music courses and decided maybe he could do that
        irl? (<G meme={impatientWoman}>tbd, still in progress</G>)
        <br /><br />
        throughout the years...<br />
        he worked at a market research facility<br />
        (<G meme={focusGroups}>aka the industry that successfully monetized second-guessing</G>)
        <br /><br />
        he waited tables<br />
        (<G meme={bartender}>bartended too, that was more fun</G>)
        <br /><br />
        delivered food to nyc residents on a fixed gear bicycle<br />
        (<G meme={cycling}>early day doordasher over here, legs for days</G>)
        <br /><br />
        and released original music<br />
        (<G meme={musicGuy}>and i still do, i go by <a href="http://instagram.com/sanches.wav"
          className="text-white">LUCAS SANCHES</a> on all platforms</G>)
        <br /><br />
        he is currently based in Miami, Florida<br />
        where he engages in casual overthinking, serious video-editing, and self
        soothing music-making.
      </p>
    </>
  )
}

export { Informal }