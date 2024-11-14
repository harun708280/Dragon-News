import React from 'react';
import logo from '../Header/logo.png'
import moment from 'moment';
const TopHeader = () => {
    return (
        <div className='text-center space-y-2'>
            <div className="flex justify-center">
                <img className='w-[400px]' src={logo} alt="" />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <div className="">
            <h1>{moment().format("dddd, MMMM Do YYYY")}</h1>
            </div>
        </div>
    );
};

export default TopHeader;