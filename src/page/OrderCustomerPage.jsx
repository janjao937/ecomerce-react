import { useState } from "react";
import useOrderCustomerContext from "../customHook/useOrderCustomerContext";
import { useEffect } from "react";
import OrderCustomerFrom from "../component/OrderCustomerForm";


const OrderCustomerPage = ()=>{
    const ctx = useOrderCustomerContext();//FillterOrderInCartByShopName


    return(
        <div>
            <h1 style={{textAlign:"center",background:"red"}}>Waiting to order</h1>
          
            <div>
            <br/>
         
                <div >
                    <div style={{display:"flex",gap:"40px",alignItems:"center",flexDirection:"column",width:"100%"}} >
                        {
                        ctx.FillterOrderInCartByShopName().map((e,index)=>{
                           return <OrderCustomerFrom key={index} product={e}/>
                        })
                        }
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <h1 style={{textAlign:"center",background:"green"}}>My Order</h1>
                <div>
                    Ordered List
                </div>
            </div>
        </div>
    )
}

export default OrderCustomerPage;