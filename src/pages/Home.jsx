import React from 'react';
import Hero from '../components/Hero';

import { useLoaderData } from 'react-router';
import PhoneContainer from '../components/PhoneContainer';

const Home = () => {

  //data
  const phonesData = useLoaderData()
  console.log(phonesData)

    return (
        <div>
          <Hero/>
          <PhoneContainer phonesData={phonesData}/>
        </div>
    );
};

export default Home;