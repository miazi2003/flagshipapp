import React, { useEffect, useState } from 'react';
import PhoneCard from "../components/PhoneCard";
import { getFavorites, removeFavorites } from '../utilities';
import Empty from '../components/ui/Empty';
const Favorites = () => {
     const [displayPhones , setDisplayPhones] = useState([])

     useEffect(()=>{
        const savedPhones = getFavorites()
        setDisplayPhones(savedPhones)
     } , [])


     const handleDelete = (id)=>{
        removeFavorites(id)
        setDisplayPhones(getFavorites())
     }


     if(displayPhones.length === 0){
        return <Empty/>
     }
     
    return (
        <div>
      <div >
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
        {
          displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}></PhoneCard>)
        }
        </div>
       
      </div>
    </div>
    );
};

export default Favorites;