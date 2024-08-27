import { useState } from "react"
import { DropdownWindow } from "./DropdownWindow"

/* eslint-disable react/prop-types */
const Dropdown = ({ text, options }) => {
  const [mode, setMode] = useState(false)

  return <div className="relative">
    <button
      className="px-2 border-2 border-[#868686] rounded-full flex justify-center gap-1 mb-1"
      onClick={() => setMode(m => !m)}>
      <p>{text}</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={3} stroke="#6D6D6D" className="w-4"
        style={{ transform: mode ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'all', transitionDuration: '100ms' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
    {mode && <DropdownWindow options={options} />}
  </div>
}

export { Dropdown }