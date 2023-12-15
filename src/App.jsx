import works from './assets/works'
import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { WorkList } from './components/WorkList'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterState, setFilter] = useState(searchParams.set > 0 ? searchParams.get('filter') : 'none')
  const filters = ['video', 'commercial', 'music']

  useEffect(() => {
    if (searchParams.size > 0) {
      setFilter(searchParams.get('filter'))
    }
  },[searchParams])

  const handleFilter = (newFilter) => {
    const alternate = !newFilter || (filterState === newFilter)
    setFilter(alternate ? 'none' : newFilter)
    setSearchParams(alternate ? {} : { "filter": newFilter })
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
          <h1 className="text-white font-bold italic text-3xl cursor-pointer hover:text-yellow-300" onClick={() => { handleFilter() }}>TIMELINE</h1>
          <div className="w-fit">
            <div className="rounded-full bg-[#8a8a8a] bg-opacity-50 gap-2 flex mx-4 text-sm">
              {(function () {
                const components = []
                filters.forEach(f => {
                  components.push(
                    <button
                      style={filterState === f ? active : inactive}
                      key={filters.indexOf(f)}
                      className="w-fit px-2 py-1 rounded-full transition-all ease hover:italic"
                      onClick={() => { handleFilter(f) }}>
                      <Link>{f}</Link>
                    </button>)
                })
                return components
              })()}
            </div>
          </div>
        </div>
        <WorkList filterState={filterState} works={works}/>
      </div>
    </>
  )
}

export default App
