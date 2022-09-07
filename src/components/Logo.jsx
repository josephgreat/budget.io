import { Box, Heading, Text, Link } from '@chakra-ui/react';
import {Link as ReactLink} from 'react-router-dom';
import React from 'react';
import LogoIcon from '../assets/JsxImgs/LogoIcon';

export default function Logo({primary, secondary, iconColor}) {
  return (
    <Link as={ReactLink} to='/' display={"flex"} alignItems={"center"} _hover={{textDecoration: 'none'}}>
      <Heading as={'h4'} fontSize={['lg', 'xl','2xl', '3xl']} textTransform='initial' display={'inline-flex'} transition='all .3s ease' _hover={{ transform: 'scale(1.02)'}}>
        <Box as='span' width={'2.5ch'} height='2.5ch' transform={'rotateZ(45deg)'}>
          <LogoIcon color={iconColor} />
        </Box> 
        <Text as='span' color={primary}>Budget</Text>
        <Text as='span' color={secondary} fontSize='sm'>.io</Text>
      </Heading>
     </Link>
  )
}
