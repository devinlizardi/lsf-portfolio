import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { WorkList } from './components/WorkList'
import { Timeline } from './components/Timeline'
import { LoadContext } from './helpers/LoadContext'
import { ResetContext } from "./helpers/ResetContext"
import { DefaultItem, DefaultWorksList } from "./helpers/Constants"
import { SORT_FN_MAP } from "./helpers/sortWorks"
import { Dropdown } from "./components/Dropdown"

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterState, setFilter] = useState(searchParams.get('filter') ?? 'none')
  const [firstLoad, setFirstLoad] = useState(true)

  // set up work list
  const currSortRef = useRef("new-old")
  const worksRef = useRef(DefaultWorksList.sort(SORT_FN_MAP[currSortRef.current]))
  const [dynamicWorksList, setList] = useState(Array.from({ length: worksRef.current.length }, () =>
    DefaultItem
  ))

  // on load
  useEffect(() => {
    if (searchParams.size > 0 && searchParams.get('filter')) {
      setFilter(searchParams.get('filter'))
    }
  }, [searchParams])

  // dynamic work list loading, runs on filter and sort
  useEffect(() => {
    worksRef.current = DefaultWorksList.filter(w => filterState === 'none' || w.filter === filterState)
    setList(Array.from({ length: worksRef.current.length }, () =>
      DefaultItem
    ))
    for (let i = 0; i < worksRef.current.length + 1; i++) {
      setTimeout(() => {
        setList(d => [...worksRef.current.slice(0, i), ...d.slice(i)])
      }, i * 35)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState, currSortRef.current])

  // reset context
  const [resetFlag, setResetFlag] = useState(false)

  // handlers
  const handleReset = () => {
    handleFilter()
    handleSort()
  }

  const handleFilter = (newFilter) => {
    const alternate = !newFilter || (filterState === newFilter)
    setFilter(alternate ? 'none' : newFilter)
    setSearchParams(alternate ? {} : { "filter": newFilter })
  }

  const handleSort = (newSort) => {
    const newSortFn = SORT_FN_MAP[newSort]
    setResetFlag(f => !f)

    // reset case, default to new-old
    if (currSortRef.current === newSort || !newSortFn) {
      if (newSort === "new-old") return
      worksRef.current = worksRef.current.sort(SORT_FN_MAP["new-old"])
      currSortRef.current = "new-old"
      setList(worksRef.current)
      return
    }

    worksRef.current = worksRef.current.sort(newSortFn)
    currSortRef.current = newSort
    setList(worksRef.current)
  }

  const createFilterObj = (titles) => {
    return Array.from(titles, (title) => {
      return { title, key: title.slice(0, 3), handler: () => handleFilter(title), active: filterState === title }
    })
  }

  const createSortObj = (titles) => {
    return Array.from(titles, (title) => {
      return { title, key: title.slice(0, 3), handler: () => handleSort(title), active: currSortRef.current === title }
    })
  }

  return (
    <LoadContext.Provider value={{ setFirstLoad, firstLoad }}>
      <ResetContext.Provider value={resetFlag}>
        <div className="flex flex-col gap-16 p-4 text-xs sm:text-base h-full">
          <div className='max-w-5xl'>
            <h2 className="font-light">
              <Link to={'/profile'} className="text-white hover:text-yellow-300">LUCAS SANCHES
                FERREIRA </Link>is an editor and creative with 5+ years of post-production and
              video-making expertise. This website features his freelance video work and
              commercial advertising portfolio for broadcast and social media.</h2>
            <button onClick={() => methodDoesNotExist()}>Break the world</button>
          </div>
          <div className="flex w-full justify-between items-end -mb-8">
            <Timeline filter={filterState} reset={handleReset} />
            <div className="flex gap-2">
              <Dropdown text={'filter'} options={createFilterObj(['freelance', 'commercial'])} />
              <Dropdown text={'sort'} options={createSortObj(['new-old', 'old-new', 'a-z', 'z-a'])} />
            </div>
          </div>
          <WorkList works={dynamicWorksList} />
        </div>
      </ResetContext.Provider>
    </LoadContext.Provider>
  )
}

export default App
