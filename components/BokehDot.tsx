import React from 'react'
import {useTheme} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export function BokehDot() {
  //https://codepen.io/Mamboleoo/pen/BxMQYQ
  const {colors} = useTheme()

  const colorOptions = [
    colors.yellow['200'],
    colors.gray['800'],
    colors.orange['500'],
    colors.gray['100'],
    colors.red['900'],
    colors.orange['800'],
  ]
  const particleSize = 20
  const particleSizeWithUnits = `${particleSize}vmin`
  const randPositive = Math.random() > 0.5 ? -1 : 1
  const blurRadius = Math.random() + 0.5 * particleSize * 0.5
  return (
    <motion.span
      style={{
        width: particleSizeWithUnits,
        height: particleSizeWithUnits,
        borderRadius: particleSizeWithUnits,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        boxShadow: `${
          particleSize * 2 * randPositive
        }vmin 0 ${blurRadius}vmin currentColor`,
      }}
      animate={{z: [0, 1], rotate: [0, 360]}}
      transition={{
        duration: Math.random() * 6 + 10,
        delay: Math.random() * 6 + 10 * -1,
        originX: Math.random() * 50 - 25,
        originY: Math.random() * 50 - 25,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}
