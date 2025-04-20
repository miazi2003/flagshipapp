import React from 'react';
import { Outlet } from 'react-router';

const Files = () => {
    return (
        <div>
           <h1>beautiful files</h1>
           <Outlet></Outlet>
        </div>
    );
};

export default Files;