import { createContext } from "react"
import myAxios from "../config/myAxios";


const OrderSupplierContext = createContext();
const OrderSupplierContextProvider = ({children})=>{

    const getAllOrder = async()=>{
        return await myAxios.get("/order/supplier");
       
    }

    return(
        <OrderSupplierContext.Provider value={{getAllOrder}}>
            {children}
        </OrderSupplierContext.Provider>
    )
}

export {OrderSupplierContext}
export default OrderSupplierContextProvider;