import { Work } from "./components/Work"
import works from './assets/works'
import { Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const [filter, setFilter] = useState('none')

  const handleFilter = (newFilter) => {
    if (filter === newFilter) {
      setFilter('none')
    } else {
      setFilter(newFilter)
    }
  }

  const makeWork = () => {
    const components = []
    for (let i = 0; i < works.length; i++) {
      if (filter === 'none' || works[i].filter === filter) {
        components.push(
          <li key={i}>
            <Work title={works[i].title} type={works[i].type} date={works[i].date} url={works[i].url} />
          </li>
        )
      }
    }
    return components
  }

  const active = { backgroundColor: "#757474" }
  const inactive = {}

  return (
    <>
      <div className="flex flex-col gap-16 p-4">
        <div className="w-9/12">
          <h2 className="font-light">
            <Link to={'/profile'} className="text-white hover:text-yellow-300">LUCAS SANCHES FERREIRA </Link>is an editor
            and creative with 5+ years of post-production experience. This website
            features his independent music, freelance video work, and commercial portfolio as a
            full-time assistant editor at <a href="https://arcadeedit.com/" className="text-white hover:text-black">Arcade Edit</a>,
            an award winning editing company.</h2>
        </div>
        <h1 className="text-white font-bold italic text-3xl -mb-8">TIMELINE</h1>
        <div>
          <div className="w-full grid place-content-end">
            <div className="rounded bg-[#898989] flex mx-4 text-sm">
              <button
                style={filter === 'audio' ? active : inactive}
                className="w-16 rounded hover:bg-[#7d7d7d]"
                onClick={() => { handleFilter('audio') }}>
                audio
              </button>
              <button
                style={filter === 'video' ? active : inactive}
                className="w-16 rounded hover:bg-[#7d7d7d]"
                onClick={() => { handleFilter('video') }}>
                video
              </button>
            </div>
          </div>
          <ul className="gap-4">
            {makeWork()}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
