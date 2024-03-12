/* eslint-disable react/prop-types */
import { useState } from "react"
import { Work } from "./Work"

const WorkList = ({ filterState, works }) => {
  const [stack, setStack] = useState([]) // position -> zIndex

  const push = (id) => {
    const item = stack.find(i => i.id === id)
    if (item) {
      setStack([item, ...stack.filter(i => i.id !== id)])
    } else {
      setStack([{ id }, ...stack])
    }
  }

  const pop = () => {
    setStack(stack.slice(1))
  }

  const getOrder = (id) => {
    const item = stack.find(i => i.id === id)
    if (item) {
      return stack.length - stack.indexOf(item)
    } else {
      return 0
    }
  }

  return (
    <>
      <ul className="gap-4">
        {(function () {
          const components = []
          for (let i = 0; i < works.length; i++) {
            if (filterState === 'none' || works[i].filter === filterState) {
              components.push(
                <li key={i}>
                  <Work
                    title={works[i].title}
                    type={works[i].type}
                    date={works[i].date}
                    url={works[i].url}
                    push={() => push(i)}
                    pop={pop}
                    order={getOrder(i)}
                  />
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