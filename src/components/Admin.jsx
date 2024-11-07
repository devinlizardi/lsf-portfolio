import { useState } from 'react'
import works from '../assets/works'
import { AdminWork } from './AdminWork'

export const Admin = () => {
  const [numNewItems, setNumNewItems] = useState(0)

  const newWork = {
    title: 'title',
    type: 'editor / director-editor / assitant editor / etc. ',
    date: 'YYYY-MMT00:00',
    filter: 'freelance / commercial',
    url: `##########`,
    disabled: true
  }

  // handlers
  const handleAddNew = () => {
    setNumNewItems(n => n + 1)
  }

  const handleRemove = () => {
    setNumNewItems(n => n - 1)
  }

  // styles
  const buttonStyle = 'bg-[#8c8c8c] rounded-lg px-2 py-1 hover:bg-[#bfbfbf]'

  return <div className="grid place-content-center w-full h-full p-12">
    <h1 className='text-3xl bold'>Admin Data as of: </h1>
    <span className='w-full h-[1px] bg-[#000] my-4' />
    <div className='flex gap-4'>
      <button className={buttonStyle} onClick={handleAddNew}>Add New Item</button>
      {numNewItems > 0 && <button className={buttonStyle} onClick={handleRemove}>Remove New Item</button>}
      <button className={buttonStyle} onClick={() => console.error('no submission yet')}>Submit Changes</button>
    </div>

    {/* new items */}
    {numNewItems > 0 &&
      <div className='w-full flex flex-col gap-4 my-8 relative'>
        {Array.from({ length: numNewItems }, (_, i) => {
          return <AdminWork key={`new-admin-${i}`} id={i} work={newWork} />
        })}
      </div>
    }

    <span className='w-full h-[1px] bg-[#000] my-4' />
    <h2 className='text-2xl'>Current Works</h2>
    <br />
    <div className='grid grid-cols-4 gap-8'>
      {works.map((work, i) => {
        return <AdminWork work={work} id={i} key={`admin-${i}`} />
      })}
    </div>
  </div>
}