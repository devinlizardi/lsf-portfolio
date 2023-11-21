import { Work } from "./components/Work"
import works from './assets/works'
import { Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const [filter, setFilter] = useState('none')
  const filters = ['video', 'commercial', 'music']

  const handleFilter = (newFilter) => {
    if (filter === newFilter) {
      setFilter('none')
    } else {
      setFilter(newFilter)
    }
  }

  const active = { fontStyle: "italic", color: 'white' }
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
        <div className="flex w-full justify-between items-center -mb-8">
          <h1 className="text-white font-bold italic text-3xl">TIMELINE</h1>
          <div className="w-fit">
            <div className="rounded-full bg-[#8a8a8a] bg-opacity-50 gap-2 flex mx-4 text-sm">
              {(function () {
                const components = []
                filters.forEach(f => {
                  components.push(
                    <button
                      style={filter === f ? active : inactive}
                      className="w-fit px-2 py-1 rounded-full transition-all ease hover:italic"
                      onClick={() => { handleFilter(f) }}>
                      {f}
                    </button>)
                })
                return components
              })()}
            </div>
          </div>
        </div>
        <ul className="gap-4">
          {(function () {
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
          })()}
        </ul>
      </div>
    </>
  )
}

export default App
