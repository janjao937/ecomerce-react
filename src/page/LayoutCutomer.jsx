import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import CartContextProvider from "../context/CartContext";
import OrderCustomerContextProvider from "../context/OrderCustomerContext";

const LayoutCustomer = ()=>{
    return(
    <>
    <CartContextProvider>
        {/* <OrderCustomerContextProvider> */}
        <Navbar/>
        <Outlet/>
        {/* </OrderCustomerContextProvider> */}
    </CartContextProvider>
        
    </>
    )
}
export default LayoutCustomer;