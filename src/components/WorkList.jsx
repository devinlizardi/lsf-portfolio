/* eslint-disable react/prop-types */
import { Work } from "./Work"

const WorkList = ({ filterState, works }) => {

  return (
    <>
      <ul className="gap-4">
        {(function () {
          const components = []
          for (let i = 0; i < works.length; i++) {
            if (filterState === 'none' || works[i].filter === filterState) {
              components.push(
                <li key={i}>
                  <Work title={works[i].title} type={works[i].type} date={works[i].date} url={works[i].url} />
                </li>
              )
            }
          }
          return components
        })()}
      </ul>
    </>
  )
}

export { WorkList }