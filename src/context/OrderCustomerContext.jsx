import { createContext } from "react";

const OrderCustomerContext = createContext();

const OrderCustomerContextProvider = ({child})=>{

    
    return(
        <OrderCustomerContext.Provider value={{}}>
            {child}
        </OrderCustomerContext.Provider>
    )
}   

export {OrderCustomerContext}
export default OrderCustomerContext;