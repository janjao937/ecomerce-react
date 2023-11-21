import { useState } from "react";
import useOrderSupplierContext from "../../customHook/useOrderSupplierContext";
import {BACKEND_URL} from "../../config/env";
import "../../UiStyles/OrderSupplierStyle/orderSupplierItem.scss";
import ButtonHover from "../ButtonHover";
// import { useEffect } from "react";

const SupplierOrderListItem = ({headerData,data}) =>{
    const ctxOrderSupplier = useOrderSupplierContext();

    const OnDelivery = (orderId)=>{
         ctxOrderSupplier.updateDeliveryStatus(orderId,1);
        // setOrderStatus(order);
    }

    const OnSuccessOrder = (e,orderId)=>{
        // e.preventDefault();//for test
        
        ctxOrderSupplier.deliverySuccess(orderId);//delete
    }
    return <div>
    
        {data&&data?.map((e,index)=>{

            return e.isOrderStatus!==0&&(

            <div key={index}>
                {index==0&&(<div>
                    <h2>Product name:{headerData.name}</h2>
                    <img src={BACKEND_URL+"/"+headerData.img} alt={headerData.name+"img"} height="300rem" width="400rem"/>
                </div>
                )}
                
                <div>
                    <h4>CustomerName:{e.customer.firstName}</h4>
                    <h4>OrderStatus:{e.isOrderStatus}</h4>

                </div>

                {e.order.map((data,index)=>{
                   return( 
                   <div key={index}>
                        <br/>
                        <h3>Adress:{data.adress}</h3>
                        {/* <h3>DeliveryStatus:{data.deliveryStatus}</h3> */}
                        {
                            data.deliveryStatus==0?<ButtonHover onClick={()=>OnDelivery(data.id)} text="Delivery" background="green"  width="200px"/>:
                            (data.deliveryStatus==2)?<button onClick={(e)=>OnSuccessOrder(e,data.id)}>Success</button>:
                            <h1 className="card__deliveryStatus">Waiting Delivery Success</h1>
                        }   
                    </div>
                    )
                })}
            <br/>
            </div>
        )   
        })
        
        }
    </div>
}

export default SupplierOrderListItem; 