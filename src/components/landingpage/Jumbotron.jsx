import { Container, Flex, Heading, Box, Img } from '@chakra-ui/react'
import React from 'react'
import ButtonC from '../Button';
import PolygonBg from '../PolygonBg';
import MediaQuery from '../../utils/useWindowSize';
import {FaPlus} from 'react-icons/fa'
import phone from '../../assets/images/phone.png';

export default function Jumbotron() {
  return (
    <Container maxW={'auto'} width={['90%', '85%', null, null, '70%']} mt={['7', '12', '14', '20']}>
        <Flex className='jumbo' position={'relative'}>      
            <Box width={['100%', '90%', '55%']} pr='3'>

                <Heading as={'h5'} fontSize={['xs', 'md']} mb='0.5' letterSpacing='10px' textTransform='uppercase' fontWeight={'hairline'}>
                    Make your money
                </Heading>
                <Heading as={'h1'} fontSize={['3xl', '4xl', '5xl']} mb='2'>
                    Accountable & Productive
                </Heading>
                
                <Heading as={'h4'} fontSize={['md', 'lg', 'xl']} fontWeight='medium' mb='3.5'>
                    Maximize Budget.io in creating an especial budget for your goal to prevent money loss.
                </Heading>
                <ButtonC 
                  variant={'solid'}
                  bg='secondary.50'
                  color='primary.800'
                  width={"auto"}
                  text={'Create Now'}
                  icon={<FaPlus />}
                  path='/signup'
                />
            </Box>
            <MediaQuery size={"md"}>
              <Box position='absolute' top={{md: "-25%", lg: '-35%'}} right='5' width='45%'>
                <Img src={phone} alt="landing_image" ml={"1rem"} width={{md: "90%", lg: "85%"}} />
              </Box>
            </MediaQuery>
      </Flex>
      
    </Container>
  )
}
