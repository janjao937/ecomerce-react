
import { Navigate } from "react-router-dom";
import useAuthContext from "../customHook/useAuthContext";

const RedirectIfAuthenticated = ({children})=>{
    const {authUser} = useAuthContext();
    console.log(authUser);
    if(authUser?.shopName){
        return <Navigate to="/supplier"/>
    }
    if(authUser){
        return <Navigate to="/"/>
    }

    

    return children
}

export default RedirectIfAuthenticated;

