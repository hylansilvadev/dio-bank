import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account'
import { AccountInfo } from './pages/AccountInfo';
import { useContext } from 'react';
import { AppContext } from './Components/AppContext';
const MainRoutes = () =>{
    const { isLoggedIn} = useContext(AppContext)
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/account/:id' element={isLoggedIn ? <Account/> : <Home/>} />
            <Route path='/accountinfo' element={<AccountInfo/>}/>
        </Routes>
    )
}

export default MainRoutes;