import React from 'react'
import {
  Box,
  Button,
  Heading,
  VStack,
  Icon,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {FiArrowLeft} from 'react-icons/fi'

import {PageLayout} from '../../components/PageLayout'

export default function JoinLobby() {
  return (
    <PageLayout>
      <Box>
        <NextLink href="/">
          <Link color="white" display="inline">
            <Icon
              as={FiArrowLeft}
              display="inline-block"
              verticalAlign="text-top"
            />
            <Text display="inline">Home</Text>
          </Link>
        </NextLink>
        <Heading
          as="h1"
          marginTop="4"
          letterSpacing="tighter"
          lineHeight="none"
          textTransform="uppercase"
          size="4xl"
          textAlign="center"
          color="white"
          fontFamily="sans-serif"
        >
          Join A Game
        </Heading>
      </Box>
      <Text
        display="block"
        width="sm"
        alignSelf="center"
        textAlign="center"
        color="white"
      >
        Enter the 4-letter game code that your host has displayed on their
        screen.
      </Text>
      <VStack spacing={4}>
        <Input
          textAlign="center"
          color="white"
          maxLength={4}
          width={56}
          placeholder="Game Code"
          textTransform="uppercase"
          _placeholder={{textTransform: 'initial'}}
        />
        <Button width={56}>Join Game</Button>
      </VStack>
    </PageLayout>
  )
}
