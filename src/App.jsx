import { Work } from "./components/Work"
import works from "./../public/work/works.js"

function App() {

  const makeWork = () => {
    const components = []
    for (let i = 0; i < works.length; i++) {
      components.push(
        <li key={i}>
          <Work title={works[i].title} type={works[i].type} date={works[i].date} />
        </li>

      )
    }
    return components
  }

  return (
    <>
      <div className="flex flex-col gap-16 p-4">
        <div className="w-9/12">
          <h2 className="font-light">
            <span className="text-white">LUCAS SANCHES FERREIRA </span>is an editor
            and creative with 5+ years of post-production experience. This website
            features his independent music, freelance video work, and commercial portfolio as a
            full-time assistant editor at <span className="text-white">Arcade Edit</span>,
            an award winning editing company.</h2>
        </div>
        <h1 className="text-white font-bold italic text-3xl -mb-8">TIMELINE</h1>
        <ul className=" gap-4">
          {makeWork()}
        </ul>
      </div>
    </>
  )
}

export default App
