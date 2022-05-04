import React from 'react';
import {
        BrowserRouter,
        Routes,
        Route,
        Navigate
    } from "react-router-dom";

    import { Navbar } from './Navbar';
    import {AboutScreen} from './AboutScreen';
    import {LoginScreen} from './LoginScreen';
    import {HomeScreen} from './HomeScreen';    

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>

                <Navbar />
                <div className='conteiner ms-5'>
                    <Routes>
                        <Route path='/' element={ <HomeScreen/> } />
                        <Route path='/about' element={ <AboutScreen/> } />
                        <Route path='/login' element={ <LoginScreen/> } />
                        <Route path='*' element={ <Navigate replace to='/'/> } />                   
                    </Routes>
                </div>
                
            

            </div>
        </BrowserRouter>    
    )
}
