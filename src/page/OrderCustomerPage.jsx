import { useState } from "react";
import useOrderCustomerContext from "../customHook/useOrderCustomerContext";


const OrderCustomerPage = ()=>{
    const ctx = useOrderCustomerContext();//FillterOrderInCartByShopName



    return(
        <div>
            OrderCustomerPage
            <div>
                <h1>Waiting to order</h1>
                <div>
                    List shopName + cartProduct
                    <button onClick={ctx.FillterOrderInCartByShopName}>order</button>
                </div>
            </div>
            <div>
                <h1>My Order</h1>
            </div>
        </div>
    )
}

export default OrderCustomerPage;