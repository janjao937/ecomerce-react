import { useState } from "react";
import useOrderCustomerContext from "../customHook/useOrderCustomerContext";
import { useEffect } from "react";
import OrderCustomerFrom from "../component/OrderCustomerForm";
import OrderItemCustomerComponent from "../component/OrderItemCustomerComponent";


const OrderCustomerPage = ()=>{
    const ctx = useOrderCustomerContext();//FillterOrderInCartByShopName
    const [orderList,setOrderList] = useState([]);

    useEffect(()=>{
        ctx.getOrder().then((e)=>setOrderList([...e.data.allOrder]));
    },[]);


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
                <div style={{display:"flex",justifyContent:"center"}}>
                   {
                    orderList.map((e,index)=><OrderItemCustomerComponent key={index} data={e}/>)
                   }
                </div>
            </div>
        </div>
    )
}

export default OrderCustomerPage;