import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../page/Layout";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import Authenticated from "../features/Authenticated";
import RedirectIfAuthenticated from "../features/RedirectIfAuthenticated";

const router = createBrowserRouter([
    {path:"/register",element:(<RegisterPage/>)},
    {path:"/login",element:(
        <RedirectIfAuthenticated>
            <LoginPage/>
        </RedirectIfAuthenticated>
    )},
    {
        path:"/",
        element:(
        <Authenticated>
            <Layout/>
        </Authenticated>
        
        ),
        children:[
            {path:"",element:(<div>Home</div>)},
            {path:"/supplier",element:(<div>Home supplier</div>)},

        ]
    }
]);

const PageRoute =()=>{
    return(
       <RouterProvider router={router}/>
    );
}

export default PageRoute;//routerprovider