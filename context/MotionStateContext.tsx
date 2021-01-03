import React, {createContext, ReactNode, useContext, useState} from 'react'
import {usePrefersReducedMotion} from '@chakra-ui/react'

export interface Context {
  isMotionEnabled: boolean
  setIsMotionEnabled: (_: boolean) => void
}
const defaultState = {
  isMotionEnabled: false,
  setIsMotionEnabled: (_: boolean) => {},
}
const context = createContext<Context>(defaultState)

export interface MotionStateProviderProps {
  initialValue?: boolean
  children: ReactNode[]
}
export function MotionStateProvider({
  initialValue = false,
  children,
}: MotionStateProviderProps) {
  const isReducedMotion = usePrefersReducedMotion()
  const [isMotionEnabled, setIsMotionEnabled] = useState(
    isReducedMotion ? false : initialValue,
  )

  return (
    <context.Provider value={{isMotionEnabled, setIsMotionEnabled}}>
      {children}
    </context.Provider>
  )
}

export function useMotionStateContext() {
  return useContext(context)
}
