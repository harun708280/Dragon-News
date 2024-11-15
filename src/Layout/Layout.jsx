import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CirclesWithBar } from 'react-loader-spinner';

const Layout = () => {
    const navigation=useNavigation()
    return (
        <div className='w-11/12 mx-auto'>
            <Toaster></Toaster>
            <Header></Header>
            {
                navigation.state==='loading'?
                <div className="flex justify-center items-center h-[350px]">
                <CirclesWithBar
                height="100"
                width="100"
                color="#403F3F"
                outerCircleColor="#403F3F"
                innerCircleColor="#403F3F"
                barColor="#403F3F"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              ></CirclesWithBar>
              </div>:
              <Outlet></Outlet>
              
            }
        </div>
    );
};

export default Layout;