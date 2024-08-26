import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { WorkList } from './components/WorkList'
import { Timeline } from './components/Timeline'
import { LoadContext } from './helpers/LoadContext'
import { DefaultItem, Filters, NonMusicWorkList } from "./helpers/Constants"
import { sortNewLast } from "./helpers/sortWorks"

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterState, setFilter] = useState(searchParams.get('filter') ?? 'none')
  const [firstLoad, setFirstLoad] = useState(true)

  // set up work list
  const worksRef = useRef(NonMusicWorkList.sort(sortNewLast))
  const [dynamicWorksList, setList] = useState(Array.from({ length: worksRef.current.length }, () =>
    DefaultItem
  ))

  // on load
  useEffect(() => {
    if (searchParams.size > 0 && searchParams.get('filter')) {
      setFilter(searchParams.get('filter'))
    }
  }, [searchParams])

  // dynamic work list loading, filtering
  useEffect(() => {
    worksRef.current = NonMusicWorkList.filter(w => filterState === 'none' || w.filter === filterState)
    setList(Array.from({ length: worksRef.current.length }, () =>
      DefaultItem
    ))
    for (let i = 0; i < worksRef.current.length + 1; i++) {
      setTimeout(() => {
        setList(d => [...worksRef.current.slice(0, i), ...d.slice(i)])
      }, i * 35)
    }
  }, [filterState])

  // handlers
  const handleFilter = (newFilter) => {
    const alternate = !newFilter || (filterState === newFilter)
    setFilter(alternate ? 'none' : newFilter)
    setSearchParams(alternate ? {} : { "filter": newFilter })
  }

  // styles
  const active = { fontStyle: "italic", color: 'white' }
  const inactive = {}

  return (
    <LoadContext.Provider value={{ setFirstLoad, firstLoad }}>
      <div className="flex flex-col gap-16 p-4 text-xs sm:text-base h-full">
        <div className='max-w-5xl'>
          <h2 className="font-light">
            <Link to={'/profile'} className="text-white hover:text-yellow-300">LUCAS SANCHES
              FERREIRA </Link>is an editor and creative with 5+ years of post-production and
            video-making expertise. This website features his freelance video work and
            commercial advertising portfolio for broadcast and social media.</h2>
        </div>
        <div className="flex w-full justify-between items-center -mb-8">
          <Timeline filter={filterState} handleFilter={handleFilter} />
          <div className="w-fit px-2 overflow-scroll rounded-full bg-[#8a8a8a] bg-opacity-50 flex justify-evenly mx-4 no-scrollbar">
            {(function () {
              const components = []
              Filters.forEach(f => {
                components.push(
                  <button
                    style={filterState === f ? active : inactive}
                    key={Filters.indexOf(f)}
                    className="w-fit px-1 py-1 rounded-full transition-all ease hover:italic text-xs sm:text-base"
                    onClick={() => { handleFilter(f) }}>
                    <Link>{f}</Link>
                  </button>)
              })
              return components
            })()}
          </div>
        </div>
        <WorkList works={dynamicWorksList} />
      </div>
    </LoadContext.Provider>
  )
}

export default App
