import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import Footer from '../components/landingpage/Footer';
import HowToUse from '../components/landingpage/HowToUse';
import Jumbotron from '../components/landingpage/Jumbotron';
import Services from '../components/landingpage/Services';
import Wavyline from '../components/landingpage/Wavyline';
import Navbar from '../components/Navbar';
import PolygonBg from '../components/PolygonBg';

function LandingPage() {
  let {userCredentials} = useContext(UserContext);
  let param = useParams();
  
  useEffect(() => {
    param.id = userCredentials !== {} ? userCredentials.uid : null; 
  }, [userCredentials, param]);
  
  return (
    <Container maxW={'100vw'} p='0'>      
      <Box position={'relative'} overflow='visible' color={'whiteAlpha.900'} maxHeight='100vh'>
        <Box position={'absolute'} left='0' zIndex={'-1'} width='100%' height='100%'> 
            <PolygonBg />
        </Box>
        <Navbar />
        <Jumbotron />
        <div className="custom-shape-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path 
              fill="#fff" fillOpacity="1" 
              d="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,
                  480,96,576,106.7C672,117,768,203,864,208C960,213,
                  1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,
                  128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,
                  320,960,320,864,320C768,320,672,320,576,320C480,320,384,
                  320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
      </Box> 
      <Box pos='relative' top='5'>
        <Box  mb={'10'}>
          <Center w={['90%', '85%', '70%']} flexDirection='column' mx={'auto'} fontSize={['lg', null, null, null, 'xl']} textAlign='justify'>
            <Heading as='h4' fontSize={['xl', '2xl']} mb='4'>
              Exclusive Budget Planner & Expense Tracker
            </Heading>
            <Text>
              You can't afford to make a similar mistake when it comes to spending without any appropriate planning. 
              Budget.io wants to erase that by providing maximum support to creating a well planned budget. It guarantees - a unique 
              budget that is customizable, downloadable in excel format and easily accessible.
            </Text>
            <Text as={'i'}>
              <Text as={'b'}>
                "A well planned budget can prevent loss of cash"
              </Text>
            </Text>

          </Center>
        </Box>
        <Wavyline />
        <Services />
        <Wavyline />
        <HowToUse />
      </Box>
      <Footer />
    </Container>
  )
}

export default LandingPage