import { useEffect } from "react";
import { useState } from "react";
import React from "react";
const cartContext = React.createContext();

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] = useState(null);

    useEffect(()=>{
        Total();

    },cartItems);

    
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

    const Total = ()=>{
        let initialValue = 0;
        //reduce cart Item
         const total =cartItems.reduce(e=>e.price*e.quantity,initialValue);
         setTotalPrice(total);//set state totalPrice
         console.log(totalPrice);
         
    }

    return(
        <cartContext.Provider value={{totalPrice,AddProduct,RemoveProduct,cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
export {cartContext};