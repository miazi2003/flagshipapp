import React, { useEffect, useState } from "react";

import PhoneCard from "./PhoneCard";

const PhoneContainer = ({ phonesData }) => {
  console.log(phonesData);

  const [displayPhones , setDisplayPhones] = useState([])
  const [showAll , setShowAll] = useState(false)
 
  useEffect(()=>{
   if(showAll){
    setDisplayPhones(phonesData)
   }
   else{
    setDisplayPhones(phonesData.slice(0,6))
   }
  },[phonesData , showAll])

  return (
    <div>
      <div >
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
        {
          displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
        }
        </div>
        <button onClick={()=>{
          setShowAll((prev)=>!prev)
          if(showAll)window.scroll(0,0)
        }} className="relative inline-block text-lg group cursor-pointer">
            <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">{showAll? "Show less" : "Show All"}</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
      </div>
    </div>
  );
};

export default PhoneContainer;