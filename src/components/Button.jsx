import { Button, Text, Link } from '@chakra-ui/react';
import {Link as ReactLink} from 'react-router-dom';
import React from 'react'

export default function ButtonC({
  text, color, transform, 
  variant, hoverbg, hovercolor, 
  type, bg, width, size, 
  icon, iconbg, iconcolor, 
  borderC,
  onClick, path}) {
  return (
    <Link as={ReactLink} to={path ? path : '#'} _hover={{textDecoration: 'none'}} display='block'>
      <Button 
        color={color} 
        textTransform={transform} 
        variant={variant} 
        _hover={{
          background: hoverbg, 
          color: hovercolor
        }}
        transition='all .4s ease'
        className='button'
        type={type}
        background={bg}
        w={width ? width : 'full'}
        fontSize={size}
        onClick={onClick}
        outline='none'
        border={variant === 'outline' ? '1px solid' : 'none'}
        borderColor={borderC}
      >

          <Text className='icon' color={iconcolor} backgroundColor={iconbg} as={'span'}>{icon}</Text>
          <Text className='button-txt' as={'span'}>{text}</Text>
      </Button>
    </Link>
  )
}
