/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom"

export const DropdownWindow = ({ options }) => {
  const [searchParams, _] = useSearchParams()

  return <div className="absolute bg-[#B9B9B9] border-2 border-[#868686] rounded-xl p-2 z-50 right-0  drop-shadow-sm">
    <ul className="list-none">
      {Array.from(options, (option) => {
        const { title, key, handler, active } = option

        return <li className="rounded-lg w-20 sm:w-28 hover:bg-[#8f8f8fa1]" key={key}>
          <button
            className="rounded-full p-1 w-full text-left cursor-pointer"
            style={{ fontWeight: active ? "bold" : "", backgroundColor: active ? "" : "" }}
            onClick={handler}>
            {title}
          </button>
        </li>
      })}
    </ul>
  </div>
}