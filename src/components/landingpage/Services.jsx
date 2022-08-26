import { Box, Center, Heading, Text, Wrap, WrapItem, Container, Flex } from '@chakra-ui/react'
import React from 'react';
import features from './features';

export default function Services() {
    const checkArray = item => {
        if (!Array.isArray(item)) return <Box width={'20'} height='20'>{item}</Box>;
        else {
            return (item.map((image, index) => (
                <Box className={`image${index}`} key={index} ml={index !==0 ? '2' : '0'} width={'20'} height='20'>
                    {image}
                </Box> 
            )));
        }
    }
  return (
    <Container width={['90%', '85%', '70%']} maxW={'auto'}>
        <Heading as={'h3'} fontSize='3xl' textAlign={'center'} mb='10'>
            Features
        </Heading>
        <Wrap justifyContent={'space-between'} className='features-list'>
            {features.map(({title, description, img, imgAlt}, id) => (
                <WrapItem width={['100%', '45%', null , '31%']} key={id} boxShadow={{base: `${id !== features.length - 1 ? '0 2px 0px #eee' : 'unset'}`, md: '1px 1px 3px 1px #eee'}} py='4' px="2">
                    <Center flexDirection={'column'} width={['95%', '90%', '85%']} margin='0 auto'>
                        <Flex justifyContent={'center'} mb='4'>
                            {checkArray(img)}
                        </Flex>
                        <Heading as='h5' fontSize={'2xl'} mb='2'>
                            {title}
                        </Heading>
                        <Text>{description}</Text>
                    </Center>
                </WrapItem>
            ))}
        </Wrap>
    </Container>
  )
}
