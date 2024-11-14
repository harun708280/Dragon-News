import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from './user.png'
const Nav = () => {
    return (
        <div className='flex justify-between items-center my-7  mx-auto'>
            <div className=""></div>
            <div className="space-x-6 *:text-gray-500">
                <NavLink to='/'>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img src={user} alt="" />
                <Link to='/login'><button className='bg-black text-white py-1 px-4'>Login</button></Link>
            </div>
        </div>
    );
};

export default Nav;