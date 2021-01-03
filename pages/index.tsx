import React from 'react'
import Link from 'next/link'
import {Box, Button, Flex, Heading} from '@chakra-ui/react'
import {PageLayout} from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <Heading
        as="h1"
        marginTop="24"
        letterSpacing="tighter"
        lineHeight="none"
        textTransform="uppercase"
        size="4xl"
        textAlign="center"
        color="white"
        fontFamily="sans-serif"
      >
        Disarm Club
      </Heading>
      <Flex marginTop="8" padding="8" justifyContent="space-around">
        <Link href="/lobby/join">
          <Button>Join Game</Button>
        </Link>
        <Link href="/lobby/new">
          <Button>New Game</Button>
        </Link>
      </Flex>
    </PageLayout>
  )
}
