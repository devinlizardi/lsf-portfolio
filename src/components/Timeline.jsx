/* eslint-disable react/prop-types */
import asteriskBlue from './../assets/asterisk-blue.svg'
import asteriskYellow from './../assets/asterisk-yellow.svg'
import asteriskPink from './../assets/asterisk-pink.svg'

// commercial - yellow
// music - blue
// video - pink

const Timeline = ({ filter, handleFilter }) => {
  const asterisk = ((() => {
    switch (filter) {
      case 'commercial':
        return asteriskYellow
      case 'music':
        return asteriskBlue
      case 'video':
        return asteriskPink
      default:
        return ''
    }
  })())

  return (
    <span className="flex gap-2 items-start">
      <h1 className="text-white font-bold italic text-3xl cursor-pointer hover:text-yellow-300" onClick={() => { handleFilter() }}>TIMELINE</h1>
      <img className='w-4' src={asterisk} />
    </span>)
}

export { Timeline }