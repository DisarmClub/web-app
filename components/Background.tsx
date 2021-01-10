import React from 'react'
import {Box, useTheme} from '@chakra-ui/react'

import {MemoizedBokehDot as BokehDot} from './BokehDot'
import {useMotionStateContext} from '../context/MotionStateContext'

export function Background() {
  const {colors} = useTheme()
  const {isMotionEnabled} = useMotionStateContext()

  return (
    <Box
      position="absolute"
      overflow="hidden"
      zIndex={-1}
      width="100vw"
      minHeight="100vh"
      style={{minHeight: '-webkit-fill-available'}}
      background={`linear-gradient(to bottom, ${colors.red['700']}, ${colors.yellow['400']})`}
    >
      {isMotionEnabled ? (
        <>
          {Array.from(Array(20).keys()).map((key) => (
            <BokehDot key={key} />
          ))}
        </>
      ) : (
        ''
      )}
    </Box>
  )
}
