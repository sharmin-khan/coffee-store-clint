import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;