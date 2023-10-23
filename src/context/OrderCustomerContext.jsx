import { createContext } from "react";
import useCartContext from "../customHook/usecartContext";
import { useState } from "react";
import myAxios from "../config/myAxios";
import { useEffect } from "react";
import { cartContext } from "./CartContext";



const OrderCustomerContext = createContext();

const OrderCustomerContextProvider = ({children})=>{
    const {cartItems} = useCartContext();

    // const [watingToOrder,setWaitingToOrder] = useState([]);//from cartItem
    // const [isOrder,setIsOrder] = useState([]);//from back

    // useEffect(()=>{
    //     console.log(cartItems)
    //     const mockUpOrder = []
    //     cartItems.map(e=>{
    //         console.log(e)
    //         mockUpOrder.push({product:e,price:e.price,amount:e.quantity,supplier:e.supplier,totalPrice:e.price*e.quantity});//order object for waitingOrder
    //     });
    //     console.log("useState")
    //     console.log(mockUpOrder);
    //     setWaitingToOrder(mockUpOrder)
    // },[]);
    
    // const FillterOrderInCartByShopName = ()=>{
    //     // console.log(cartItems);//แยก สินค้าให้ match กับ shop เพื่อ order
    //     const mockUpOrder = []
    //     cartItems.map(e=>{
    //         mockUpOrder.push({product:e,price:e.price,amount:e.quantity,supplier:e.supplier,totalPrice:e.price*e.quantity});//order object for waitingOrder
    //     });
    //     console.log(mockUpOrder);
    //     setWaitingToOrder(mockUpOrder);
    //     //add in watingToOrder state
    // }
    
    const FillterOrderInCartByShopName = ()=>{
        console.log("order");
        console.log(cartItems)
        const mockUpOrder = []
        cartItems.map(e=>{
            mockUpOrder.push({product:e,isOrderStatus:e.isOrderStatus,price:e.price,amount:e.quantity,supplier:e.supplier,totalPrice:e.price*e.quantity});//order object for waitingOrder
        });

        return mockUpOrder;
    }

    const OnOrder = async(product)=>{
      console.log(product)//data for myAxios
    }
    
    return(
        <OrderCustomerContext.Provider value={{FillterOrderInCartByShopName,OnOrder}}>
            {children}
        </OrderCustomerContext.Provider>
    )
}   

export {OrderCustomerContext}
export default OrderCustomerContextProvider;