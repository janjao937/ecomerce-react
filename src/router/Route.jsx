import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../page/Layout";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";

const router = createBrowserRouter([
    {path:"/register",element:(<RegisterPage/>)},
    {path:"/login",element:(<LoginPage/>)},
    {
        path:"/",
        element:(<Layout/>),
        children:[
            {path:"",element:(<div>Home</div>)},

        ]
    }
]);

const PageRoute =()=>{
    return(
       <RouterProvider router={router}/>
    );
}

export default PageRoute;//routerprovider