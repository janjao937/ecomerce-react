import { useState } from "react";
import React from "react";
const cartContext = React.createContext();

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);

    const AddProduct = (product) =>{
        //add item to cart 
        const productExist = cartItems.find((item)=>item.id === product.id);
        if(productExist){
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity+1}:item));
        }
        else{
            setCartItems([...cartItems,{...product,quantity:1}]);
        }
    }


    const RemoveProduct = (product)=>{
         //remove item in cart 
         const productExist = cartItems.find((item)=>item.id === product.id);
         if(productExist.quantity === 1){
            setCartItems(cartItems.filter((item)=>item.id !== product.id));
         }
         else{
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity-1}:item));
         }
    }


    return(
        <cartContext.Provider value={{AddProduct,RemoveProduct,cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
export {cartContext};