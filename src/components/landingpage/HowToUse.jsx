import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import steps from './Steps'

export default function HowToUse() {
  return (
    <Container width={['90%', '85%', '70%']} maxW={'auto'}>
        <Heading as='h4' fontSize={'2xl'} textAlign='center' mb={'10'}>
            How to Use
        </Heading>
        <Box>
            {steps.map(({index, description}) => (
                <Flex key={index} flexDirection='row' alignItems={'center'}>
                    <Heading as={'h6'} fontSize={'lg'} mr='2'>
                        Step {index}:
                    </Heading>
                    <Text>{`${description}`}</Text>
                </Flex>
            ))}
        </Box>
    </Container>
  )
}
