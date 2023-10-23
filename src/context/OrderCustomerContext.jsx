import { createContext } from "react";
import useCartContext from "../customHook/usecartContext";
import { useState } from "react";


const OrderCustomerContext = createContext();

const OrderCustomerContextProvider = ({children})=>{
    const {cartItems} = useCartContext();

    const [watingToOrder,setWaitingToOrder] = useState([]);//from cartItem
    const [isOrder,setIsOrder] = useState([]);//from back

    const CreateOrderByCartAndShopName = ()=>{
        // console.log(cartItems);//แยก สินค้าให้ match กับ shop เพื่อ order
        const mockUpOrder = []
        cartItems.map(e=>{
            mockUpOrder.push({product:e,price:e.price,amount:e.quantity,supplier:e.supplier,totalPrice:e.price*e.quantity});//order object for waitingOrder
        });
        console.log(mockUpOrder);
    }

    
    return(
        <OrderCustomerContext.Provider value={{CreateOrderByCartAndShopName}}>
            {children }
        </OrderCustomerContext.Provider>
    )
}   

export {OrderCustomerContext}
export default OrderCustomerContextProvider;