import React, { useState } from 'react';
import { CartContext } from './Contex';
import { getCart } from '../utilities';

const CartProvider = ({children}) => {

    const [cart , setCart] = useState([])
    useState(()=>{
        setCart(getCart())
    },[])
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;