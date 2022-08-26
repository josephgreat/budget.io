import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Redirect() {
  return (
      <Box>
        <Text fontSize={['lg', '2xl', '3xl']}>Your request is being processed</Text>
        <Text fontSize={'md'}>Budget.io</Text> 
      </Box>
  )
}
