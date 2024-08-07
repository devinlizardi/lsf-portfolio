/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Flipped, Flipper } from "react-flip-toolkit"

const StartingElement = ({ id }) => {
  return <Flipped flipId={`window-${id}`}>
    <div className="w-[48px] h-[24px] rounded-full bg-[#a2a2a2] absolute -z-50 -translate-y-6 translate-x-[calc(50vw_-_24px)]" />
  </Flipped>
}

const FloatingWindow = ({ id, order }) => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    setTimeout(() => setHide(true), 600)
  }, [])

  return <Flipped flipId={`window-${id}`}>
    <div className="w-[500px] h-[24px] rounded-full bg-[#757575] absolute left-[calc(50vw_-_240px)] top-[50vh] expand"
      style={{ zIndex: (order * 10) - 1, visibility: hide ? 'hidden' : 'visible' }}
    />
  </Flipped>
}

const Window = ({ id, mode, order }) => {
  return <Flipper flipKey={mode}>
    {mode ? <FloatingWindow id={id} order={order} /> : <StartingElement id={id} />}
  </Flipper>
}

export { Window }