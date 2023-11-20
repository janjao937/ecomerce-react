import { createContext } from "react";
import useCartContext from "../customHook/usecartContext";
import { useState } from "react";
import myAxios from "../config/myAxios";
import { useEffect } from "react";
import { cartContext } from "./CartContext";

//product.product.isOrderStatus ใช้แยก order 

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
    const [allOrderItem,setAllOrderItem] = useState([]);//for get allOrderItem if product.isOrderStatus = 1
    // useEffect(()=>{
    //     // console.log("order");

    //     getOrder().then((orders)=>setAllOrderItem(orders.allOrderItem));
    // },[]);
    
    const getOrder = async()=>{
        //find order by customerId and product.isOrderStatus = 1
        //get dat in state allOrderItem
        return await myAxios.get("/order");
        // console.log(allProduct.data.allOrder);//all customer order
        // setIsOrder(allProduct.data.allOrder);

    }

    
    
    const FillterOrderInCartByShopName = ()=>{

        const mockUpOrder = []
        cartItems.map(e=>{
            mockUpOrder.push({product:e,cartId:e.cartId,isOrderStatus:e.isOrderStatus,price:e.price,amount:e.quantity,supplier:e.supplier,totalPrice:e.price*e.quantity});//order object for waitingOrder
        });

        // console.log("order");
        // console.log(cartItems)

        return mockUpOrder;
    }

    const OnOrder = async(product)=>{
      console.log(product)//data for myAxios
    //   console.log()
    }
    
    return(
        <OrderCustomerContext.Provider value={{getOrder,allOrderItem,FillterOrderInCartByShopName,OnOrder}}>
            {children}
        </OrderCustomerContext.Provider>
    )
}   

export {OrderCustomerContext}
export default OrderCustomerContextProvider;