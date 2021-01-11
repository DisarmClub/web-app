import React from 'react'
import type {AppProps} from 'next/app'
import {ChakraProvider, GlobalStyle} from '@chakra-ui/react'
import theme, {Theme} from '@chakra-ui/theme'
import {Styles} from '@chakra-ui/theme-tools'

import {Background} from '../components/Background'
import {MotionStateProvider} from '../context/MotionStateContext'

const styles: Styles = {
  ...theme.styles,
  global: {
    ...theme.styles.global,
    'html, body': {
      height: '-webkit-fill-available',
      overscrollBehavior: 'none',
      position: 'fixed',
      overflow: 'hidden',
    },
    '#__next': {
      height: '-webkit-fill-available',
    },
  },
}

const customTheme: Theme = {
  ...theme,
  styles,
}

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MotionStateProvider initialValue={true}>
        <GlobalStyle />
        <Background />
        <Component {...pageProps} />
      </MotionStateProvider>
    </ChakraProvider>
  )
}

export default App
