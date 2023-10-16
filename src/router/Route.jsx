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

const router = createBrowserRouter([
    {path:"/game",element:(
        <GamePage/>
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
        path:"/",
        element:(
        <Authenticated>
            <LayoutCustomer/>
        </Authenticated>
        
        ),
        children:[
            {path:"",element:(<CustomerHomePage/>)},
            {path:"/cart",element:(<Cart/>)},

        ]
    },
    {
        path:"/supplier",
        element:(
        <Authenticated>
            <LayoutCustomer/>
        </Authenticated>
        
        ),
        children:[
            {path:"",element:(<SupplierHomePage/>)},

        ]
    }
]);

const PageRoute =()=>{
    return(
       <RouterProvider router={router}/>
    );
}

export default PageRoute;//routerprovider