import { Outlet } from "react-router-dom";
import CartContextProvider from "../context/CartContext";
import NavbarSupplier from "../component/NavbarSupplier";

const LayoutSupplier = ()=>{
    return(
    <>
    <CartContextProvider>
        <NavbarSupplier/>
        <Outlet/>
    </CartContextProvider>
        
    </>
    )
}
export default LayoutSupplier;