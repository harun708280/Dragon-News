import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';

const Right = () => {
    return (
        <div className=''>
            
            <div className="w-full">
                <h1>Login With</h1>
                <div className="grid grid-cols-1 text-center">
        <button className='w-full flex items-center justify-center border-2 p-1 rounded-lg border-blue-600 text-blue-600 gap-4'><FaGoogle></FaGoogle> Login With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Right;