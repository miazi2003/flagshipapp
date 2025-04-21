import React, { useState } from 'react';
import Hero from '../components/Hero';

import { useLoaderData } from 'react-router';
import PhoneContainer from '../components/PhoneContainer';

const Home = () => {
  const phonesData = useLoaderData()
  console.log(phonesData)
const [phones , setPhones] = useState(phonesData)


const handleSearch = (e , text)=>{
e.preventDefault()
console.log(text)
if(text === '') return setPhones(phonesData)
const searchedPhones = phonesData.filter(phone=>phone?.phone_name?.toLowerCase().split(' ').includes(text.toLowerCase())) || 
phonesData.filter(phone=>phone?.brand_name?.toLowerCase().includes(text.toLowerCase()))
console.log(searchedPhones)
setPhones(searchedPhones)
}

  //data
 
    return (
        <div>
          <Hero handleSearch={handleSearch}/>
          <PhoneContainer phonesData={phones}/>
        </div>
    );
};

export default Home;