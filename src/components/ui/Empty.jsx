import React from 'react';
import { Link } from 'react-router';
import Button from './button';

const Empty = () => {
    return (
        <div>
           <div className=' py-24 text-center flex flex-col gap-4'>
        <h1 className='text-6xl font-bold'>No Data Found</h1> 
        <p>Browse , Search , Select And Buy</p>
        <Link to='/'>
        <Button label='Browse Phones'/>
        </Link>       
           </div>
        </div>
    );
};

export default Empty;