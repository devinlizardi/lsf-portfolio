/* eslint-disable react/prop-types */
const G = ({ children }) => {
  return <span className="text-[#73fc7a] font-medium">{children}</span>
}

const Informal = () => {
  return (
    <>
      <p>
        Lucas (<G>who definitely did not type this himself in the 3rd person</G>)
        is a proud Brasileiro Americano that likes to edit videos and make music.
        <br /><br />
        he had no idea what he wanted at 18 (<G>how could you</G>) so he opted for
        a liberal arts curriculum at a college that gave him a discount for being a
        1st gen student. but really he went there because it was in New York City.
        <br /><br />
        he took design, editing, and music courses and decided maybe he could do that
        irl? (<G>tbd, still in progress</G>)
        <br /><br />
        throughout the years...<br />
        he worked at a market research facility<br />
        (<G>aka the industry that successfully monetized second-guessing</G>)
        <br /><br />
        he waited tables<br />
        (<G>bartended too, that was more fun</G>)
        <br /><br />
        delivered food to nyc residents on a fixed gear bicycle<br />
        (<G>early day doordasher over here, legs for days</G>)
        <br /><br />
        and released original music<br />
        (<G>and i still do, i go by <a href="http://instagram.com/sanches.wav"
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