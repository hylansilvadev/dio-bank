import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './Components/Layout';
import { AppContextProvider } from './Components/AppContext';
import  MainRoutes from './routes';
import { getAllLocalStorage } from './services/storage';

export const App = () => {
  const localStorage = getAllLocalStorage()
  console.log(localStorage)
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
              <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}