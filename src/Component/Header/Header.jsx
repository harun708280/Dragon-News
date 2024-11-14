import React from 'react';
import TopHeader from './TopHeader';
import Latest from './Latest';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location=useLocation()
    const isDetailsPage=location.pathname.startsWith('/item/')
    const isLogin=location.pathname==='/login'
    const isRegister=location.pathname==='/register'
    console.log(isDetailsPage);
    
    return (
        <div className='my-7'>
           {
            !(isLogin || isRegister) &&  <TopHeader></TopHeader>
           }
              {
                !(isDetailsPage || isLogin || isRegister) && <Latest></Latest>
              }
            
            {
                !isDetailsPage && <Nav></Nav>
            }
        </div>
    );
};

export default Header;