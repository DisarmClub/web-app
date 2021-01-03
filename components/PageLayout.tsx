import React, {ReactNode} from 'react'
import {Center, Flex, useTheme} from '@chakra-ui/react'

export interface PageLayoutProps {
  children: ReactNode[]
}
export function PageLayout({children}) {
  const {sizes} = useTheme()

  return (
    <Center
      minHeight="100vh"
      style={{minHeight: '-webkit-fill-available'}}
      width="100vw"
    >
      <Flex
        backgroundColor="black"
        width="xl"
        direction="column"
        height="sm"
        borderColor="white"
        justifyContent="space-between"
        borderWidth={sizes[1]}
        padding="8"
      >
        {children}
      </Flex>
    </Center>
  )
}
