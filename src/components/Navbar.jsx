import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

import { IoHome} from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm  max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" cursor-pointer lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to='/'>Home</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="/about">About</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="/cart">Cart</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="favorite">Favorites</NavLink> </li>
      </ul>
    </div>
    <div className='flex gap-2'>
      <img src="/favicon.svg" alt="" className='h-8' />
      <Link to='/' className="font-bold text-xl">FlagShipFaceOff</Link>
    </div>
  </div>
  
  <div className="navbar-end  hidden lg:flex">
  <ul className="menu menu-horizontal px-1 items-center font-bold">
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to='/'><IoHome size={20}/></NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="/about"><FaQuestionCircle size={20} /></NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="/cart"><FaShoppingCart size={20} /></NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? "text-red-500" : ""}  to="favorite"><MdOutlineFavorite size={20}/></NavLink> </li>
      
      
    </ul>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;