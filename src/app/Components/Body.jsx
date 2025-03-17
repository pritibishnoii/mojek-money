import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import StickyBg from './StickyBg';
import CardContainer from './CardContainer';
import AppsSections from './AppsSections';
import TransactionTracker from './TransactionTracker ';

const Body = () => {
    return (
        <div className="h-full flex flex-col  w-full  ">
            <Navbar />
            <Header />
            <StickyBg />
            <CardContainer />

            <AppsSections />
            <TransactionTracker />

        </div>

    );
};

export default Body;
