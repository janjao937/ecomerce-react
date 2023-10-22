import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import myAxios from "../config/myAxios";
const cartContext = React.createContext();

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);//uesEffect get all cart item
    const [totalPrice,setTotalPrice] = useState(null);

    // useEffect(()=>{
    //     if(totalPrice){

    //         Total();
    //     }

    // },cartItems);

    // //call create or increse
    // const AddProductResponse = ()=>{

    //     // myAxios.post//create new item

    //     // myAxios.patch //add amount
    // }
    // //call Delete or remove
    // const RemoveProductResponse = ()=>{

    // }

    const createCart = async(product)=>{
        // console.log(product)
        const res = await myAxios.post("/cart/create",{
            productId:product.id,
            isOrderStatus:0,
            amount:1
        });

        // console.log("create cart"+res);
        return res;

    }

    const IncreseAmout = async (product)=>{
        console.log(product);
        const res = await myAxios.patch("/cart/add",{
            productId:product.id,
        });
        console.log(res);
    }
    const DecreseAmout = async (product)=>{
        console.log(product);
        const res = await myAxios.patch("/cart/remove",{
            productId:product.id,
        });
        console.log(res);
    }
    const DeleteCart = async(product)=>{
        const res = await myAxios.delete("/cart/delete",{
            productId:product.id
        });
        return res;
    }



    const AddProduct = async(product) =>{
        //add item to cart 
        const productExist = cartItems.find((item)=>item.id === product.id);
        if(productExist){
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity+1}:item));
            //patch
           
            const res = await IncreseAmout(product);
        }
        else{
            setCartItems([...cartItems,{...product,quantity:1}]);
            //create
            const res = await createCart(product);
        }
    }


    const RemoveProduct = async(product)=>{
         //remove item in cart 
         const productExist = cartItems.find((item)=>item.id === product.id);
         if(productExist.quantity === 1){
            setCartItems(cartItems.filter((item)=>item.id !== product.id));
            //delete
            // const res = await DeleteCart(product);
         }
         else{
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity-1}:item));
            //patch
            // const res = await DecreseAmout(product);
         }
    }

    const Total = ()=>{
        let initialValue = 0;
        //reduce cart Item
         const total =cartItems?.reduce(e=>e.price*e.quantity,initialValue);
         setTotalPrice(total);//set state totalPrice
         console.log(totalPrice);
         
    }

    const CreateOrder = ()=>{

    }

    return(
        <cartContext.Provider value={{totalPrice,AddProduct,RemoveProduct,cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;//use in LayoutCustomer
export {cartContext};