import works from './assets/works'
import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { WorkList } from './components/WorkList'
import { Timeline } from './components/Timeline'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterState, setFilter] = useState(searchParams.get('filter') ?? 'none')
  const filters = ['freelance', 'commercial']
  const nonMusicWorks = works.filter(w => w.type != 'music')

  // on load
  useEffect(() => {
    if (searchParams.size > 0 && searchParams.get('filter')) {
      setFilter(searchParams.get('filter'))
    }
  }, [searchParams])

  // dynamic work list loading
  const defaultItem = {
    title: "#########",
    type: "#########",
    filter: "",
    date: "#########",
    url: ""
  }
  const [dynamicWorksList, setList] = useState(Array.from({ length: nonMusicWorks.length }, () => {
    return defaultItem
  }))
  useEffect(() => {
    for (let i = 0; i < nonMusicWorks.length + 1; i++) {
      setTimeout(() => {
        setList([...nonMusicWorks.slice(0, i), ...dynamicWorksList.slice(i)])
      }, i * 25)
    }
  }, [])

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
    <>
      <div className="flex flex-col gap-16 p-4 text-xs sm:text-base">
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
              filters.forEach(f => {
                components.push(
                  <button
                    style={filterState === f ? active : inactive}
                    key={filters.indexOf(f)}
                    className="w-fit px-1 py-1 rounded-full transition-all ease hover:italic text-xs sm:text-base"
                    onClick={() => { handleFilter(f) }}>
                    <Link>{f}</Link>
                  </button>)
              })
              return components
            })()}
          </div>
        </div>
        <WorkList filterState={filterState} works={dynamicWorksList} />
      </div>
    </>
  )
}

export default App
