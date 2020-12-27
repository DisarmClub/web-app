import Head from 'next/head'
import React from 'react'

import type {AppProps} from 'next/app'
import {
  Box,
  ChakraProvider,
  GlobalStyle,
  usePrefersReducedMotion,
  useTheme,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'

import theme, {Theme} from '@chakra-ui/theme'
import {mode, Styles} from '@chakra-ui/theme-tools'

const styles: Styles = {
  ...theme.styles,
  global: {
    ...theme.styles.global,
    html: {
      height: '-webkit-fill-available',
    },
  },
}

const customTheme: Theme = {
  ...theme,
  styles,
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <script
          data-ad-client="ca-pub-5673854016198249"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <ChakraProvider theme={customTheme}>
        <GlobalStyle />
        <Background />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

function Background() {
  const {colors} = useTheme()
  const isReducedMotion = usePrefersReducedMotion()

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
      {isReducedMotion ? (
        ''
      ) : (
        <>
          {Array.from(Array(20).keys()).map((key) => (
            <BokehDot key={key} />
          ))}
        </>
      )}
    </Box>
  )
}

function BokehDot() {
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

export default MyApp
