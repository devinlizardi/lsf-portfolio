/* eslint-disable react/prop-types */
export const DropdownWindow = ({ options }) => {
  console.log(options)

  return <div className="absolute bg-[#B9B9B9] border-2 border-[#868686] rounded-xl p-2 pr-12 z-50 right-0">
    <ul className="list-none">
      {Array.from(options, (option) => <li className="my-2" key={option.key}>{option.title}</li>)}
    </ul>
  </div>
}