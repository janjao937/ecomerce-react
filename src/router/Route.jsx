import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LayoutCustomer from "../page/LayoutCutomer";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticated from "../features/RedirectIfAuthenticated";
import CustomerHomePage from "../page/CustomerHomePage";
import Cart from "../component/Cart";
import SupplierHomePage from "../page/SupplierHomePage";
import GamePage from "../page/GamePage";
// import SupplierRegisterForm from "../component/SupplierRegisterForm";
import OrderSupplierPage from "../page/OrderSupplierPage";
import OrderCustomerPage from "../page/OrderCustomerPage";
import LayoutSupplier from "../page/LayoutSupplierPage";
import CartContextProvider from "../context/CartContext";
import OrderSupplierContextProvider from "../context/OrderSupplierContext";
import OrderCustomerContextProvider from "../context/OrderCustomerContext";
import ProductContextProvider from "../context/ProductCustomerContext";
import NavbarSupplier from "../component/NavbarSupplier";

const router = createBrowserRouter([
    {path:"/game",element:(
        <GamePage/>
    )},
    {path:"/ordersupplier",element:(
        <OrderSupplierContextProvider>
              <Authenticated>
            <NavbarSupplier/>
            <OrderSupplierPage/>
            </Authenticated>
        </OrderSupplierContextProvider>
    )},
    {path:"/register",element:(
        <RedirectIfAuthenticated>
            <RegisterPage/>
        </RedirectIfAuthenticated>
    )},
    {path:"/login",element:(
        <RedirectIfAuthenticated>
            <LoginPage/>
        </RedirectIfAuthenticated>
    )},

    {
        path:"/supplier",
        element:(
        <Authenticated>
            <LayoutSupplier/>
        </Authenticated>
        
        ),
        children:[
            {path:"",element:(<SupplierHomePage/>)},
            // {path:"/orderr",element:(<OrderSupplierPage/>)}

        ]
    },

    {
        path:"/",
        element:(
        <Authenticated>
            <ProductContextProvider>
            <LayoutCustomer/>
            </ProductContextProvider>
        </Authenticated>
        
        ),
        children:[
            {path:"",element:(
                
            <CustomerHomePage/>
            
            )},
            {path:"/cart",element:(<Cart/>)},
            {path:"/order",element:(
                <CartContextProvider>
                <OrderCustomerContextProvider>
                    <OrderCustomerPage/>
                 </OrderCustomerContextProvider>
                </CartContextProvider>
              
            )},

        ]
    }
]);

const PageRoute =()=>{
    return(
       <RouterProvider router={router}/>
    );
}

export default PageRoute;//routerprovider