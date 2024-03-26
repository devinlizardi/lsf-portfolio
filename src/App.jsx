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

  useEffect(() => {
    if (searchParams.size > 0) {
      setFilter(searchParams.get('filter'))
    }
  }, [searchParams])

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
        <div className='max-w-5xl'>
          <h2 className="font-light">
            <Link to={'/profile'} className="text-white hover:text-yellow-300">LUCAS SANCHES
              FERREIRA </Link>is an editor and creative with 5+ years of post-production experience.
            This website features his freelance video work and commercial portfolio  as a full-time
            assistant editor at <a href="https://arcadeedit.com/"
              className="underline underline-offset-2 hover:decoration-white">Arcade Edit</a>, an award winning editing
            company.</h2>
        </div>
        <div className="flex w-full justify-between items-center -mb-8">
          <Timeline filter={filterState} handleFilter={handleFilter} />
          <div className="w-fit px-4 overflow-scroll rounded-full bg-[#8a8a8a] bg-opacity-50 flex justify-evenly mx-4 text-sm no-scrollbar">
            {(function () {
              const components = []
              filters.forEach(f => {
                components.push(
                  <button
                    style={filterState === f ? active : inactive}
                    key={filters.indexOf(f)}
                    className="w-fit px-1 py-1 rounded-full transition-all ease hover:italic"
                    onClick={() => { handleFilter(f) }}>
                    <Link>{f}</Link>
                  </button>)
              })
              return components
            })()}
          </div>
        </div>
        <WorkList filterState={filterState} works={nonMusicWorks} />
      </div>
    </>
  )
}

export default App
