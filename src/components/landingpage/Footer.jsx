import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Container borderTop='2px solid #eee' maxW='100%'>
    <Flex width={['90%', '85%', '70%']} m='0 auto' flexDir={'row'} justifyContent='space-between' py={'3'}>
        <Text as={'strong'}>&copy;2022</Text>
        <Text as={'strong'}>by - emJoeTech</Text>
    </Flex>
    </Container>
  )
}
