import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  console.log(phone);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm grow">
        <figure className="px-8 py-8 w-full h-[300px]">
          <img className="w-full h-full cover"
            src={phone.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body grow ">
          <h2 className="card-title">{phone.phone_name}</h2>
          <p className="text-start grow">
           {phone.description}
          </p>
          <div className="card-actions justify-end grow">
         <Link to={ "/phone-details"}>
         <button className="relative inline-block px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">View Details</span>
</button>
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;