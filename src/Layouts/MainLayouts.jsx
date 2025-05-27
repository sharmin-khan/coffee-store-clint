import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;