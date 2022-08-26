import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Icon({icon, iconAlt, color}) {
  return (
        <Text as={'i'} pos='relative' top={'4px'} mr='3' color={color}>
            {icon ? icon : iconAlt}
        </Text>
    )
}
