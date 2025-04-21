import React from "react";
import { useLoaderData, useParams } from "react-router";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import Button from "../components/ui/button";
import { addFavorite } from "../utilities";


const PhoneDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const singlePhone = data.find((phone) => phone.id === parseInt(id));
 

  const {
    brand_name,
    camera_features,
    description,
    front_camera,
    img,
    rear_camera,
    variants,
    phone_name,
  } = singlePhone;


function handleFavorite(){
  addFavorite(singlePhone)
}




  return (
    <div>
      <div className="w-full  px-24 mx-auto mb-2 py-12">
        <div className="h-[300px] w-full justify-center items-center flex">
          <img className="h-full  bg-cover" src={img} alt="" />
        </div>

        <div className=" shadow-sm shadow-gray-600 py-12 px-10 w-full mt-12 flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="font-semibold text-6xl">{phone_name}</h1>

            <div className="button flex gap-4">
              <Button label={<MdOutlineAddShoppingCart />} />
              <Button onClick={handleFavorite} label={<MdOutlineFavorite />} />
            </div>
          </div>

          <h1 className="font bold text-4xl">Details : </h1>

          <h1>
            {" "}
            <span className="font-bold text-xl">Brand: </span> {brand_name}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Model: </span> {phone_name}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Price: </span> {variants}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Camera Info: </span>{" "}
            {camera_features}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Description: </span>
            {description}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Front Camera: </span>{" "}
            {front_camera}
          </h1>
          <h1>
            {" "}
            <span className="font-bold text-xl">Rear Camera: </span>{" "}
            {rear_camera}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
