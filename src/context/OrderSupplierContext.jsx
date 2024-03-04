import { createContext } from "react"
import myAxios from "../config/myAxios";


const OrderSupplierContext = createContext();
const OrderSupplierContextProvider = ({children})=>{

    const getAllOrder = async()=>{
        return await myAxios.get("/order/supplier");
       
    }
    //order/send
    const updateDeliveryStatus = async(orderId,deliveryStatus)=>{

        return await myAxios.patch("/order/delivery",{orderId,deliveryStatus});
        // return data;
        // console.log("Change Delivery Status",orderId,deliverStatus);
    }

    const deliverySuccess  = async(orderId)=>{
        console.log("Delivery Success and delete order" + orderId);
        await myAxios.delete("/order/delete/"+orderId);
    }

    return(
        <OrderSupplierContext.Provider value={{getAllOrder,updateDeliveryStatus,deliverySuccess}}>
            {children}
        </OrderSupplierContext.Provider>
    )
}

export {OrderSupplierContext}
export default OrderSupplierContextProvider;