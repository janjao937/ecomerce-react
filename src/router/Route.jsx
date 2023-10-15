import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LayoutCustomer from "../page/LayoutCutomer";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticated from "../features/RedirectIfAuthenticated";
import CustomerHomePage from "../page/CustomerHomePage";
import Cart from "../component/Cart";

const router = createBrowserRouter([
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
    // {
    //     path:"/supplier",
    //     element:(
    //     <Authenticated>
    //         <LayoutCustomer/>
    //     </Authenticated>
        
    //     ),
    //     children:[
    //         {path:"",element:(<div>Home Supplier</div>)},

    //     ]
    // }
]);

const PageRoute =()=>{
    return(
       <RouterProvider router={router}/>
    );
}

export default PageRoute;//routerprovider