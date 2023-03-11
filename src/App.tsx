import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account'
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './Components/Layout';
import { AccountInfo } from './pages/AccountInfo';
import { AppContextProvider } from './Components/AppContext';

export const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/account/:id' element={<Account />} />
              <Route path='/accountinfo' element={<AccountInfo/>}/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}