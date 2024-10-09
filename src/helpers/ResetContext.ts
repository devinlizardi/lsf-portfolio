import { createContext, useContext } from "react"

export const ResetContext = createContext(null)

export const useResetContext = () => {
  const resetFlag = useContext(ResetContext)
  return resetFlag
}
