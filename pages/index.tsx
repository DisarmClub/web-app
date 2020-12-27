import {Button, Center, Flex, Heading, useTheme} from '@chakra-ui/react'

export default function Home() {
  const {sizes} = useTheme()
  return (
    <Center height="100vh" width="100vw">
      <Flex
        backgroundColor="black"
        width="xl"
        direction="column"
        maxHeight="xl"
        borderColor="white"
        borderWidth={sizes[1]}
        padding="8"
      >
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
          Disarm Club
        </Heading>
        <Flex marginTop="8" justifyContent="space-around">
          <Button>Join Game</Button>
          <Button>New Game</Button>
        </Flex>
      </Flex>
    </Center>
  )
}
