import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import CartContextProvider from "../context/CartContext";

const LayoutCustomer = ()=>{
    return(
    <>
    <CartContextProvider>
        <Navbar/>
        <Outlet/>
    </CartContextProvider>
        
    </>
    )
}
export default LayoutCustomer;