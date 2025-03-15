import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import StickyBg from './StickyBg';

const Body = () =>
{
    return (
        <div className=" w-screen h-screen ">
            {/* Fixed Background */ }

            {/* Scrollable Content */ }

            <Navbar />
            <Header />

            <div className=''>
                <StickyBg />

            </div>
        </div>

    );
};

export default Body;
