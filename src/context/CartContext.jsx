import { useState } from "react";
import React from "react";
const cartContext = React.createContext();

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);


    
    return(
        <cartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
export {cartContext};