import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import LandingPage from './pages/LandingPage';
import './App.css';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Redirect from './components/Redirect';
import UserEnviro from "./pages/UI/UserEnviro";
import Dashboard from './pages/UI/Dashboard';
import app from './firebase';

export const UserContext = createContext();

const colors = {
  primary: {
    900: '#290028',
    800: '#520050',
    700: '#6d006a',
    600: '#7a0078',
    500: '#880085',
    400: '#a0339d',
    300: '#b866b6',
    200: '#c480c2',
    100: '#dbb3da',
    50: '#f3e6f3'
  },
  secondary: {
    900: '#b39c00',
    800: '#ccb200',
    700: '#e6c900',
    500: '#ffdf00',
    400: '#ffe533',
    200: '#ffec66',
    100: '#ffef80',
    50: '#fff5b3'
  }
}

const theme = extendTheme({colors});

function App() {
  const [userCredentials, setUserCredentials] = useState({});
  const [userIsAuth, setUserIsAuth] = useState(false);

  useEffect(() => {
    getAuth(app).onAuthStateChanged(user => {
      setUserCredentials({...user.providerData[0], uid: user.uid,});
      user ? setUserIsAuth(true) : setUserIsAuth(false);
    });
  }, []);
  
  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{userIsAuth, setUserIsAuth, userCredentials, setUserCredentials}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Auth title={'Login'} />} />
          <Route path='signup' element={<Auth title={'Sign up'} />} />
          <Route path='redirect' element={<Redirect />}/>
          <Route path={`user:id`} element={<UserEnviro />}>
            <Route index element={<Dashboard />}></Route>
          </Route>
        </Routes>
        
      </BrowserRouter>
      </UserContext.Provider>
    </ChakraProvider>

  );
}

export default App;
