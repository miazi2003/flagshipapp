import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                error
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;