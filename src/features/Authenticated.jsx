import { Navigate } from "react-router-dom";
import useAuthContext from "../customHook/useAuthContext";

const Authenticated = ({children})=>{
    const {authUser}= useAuthContext();
   

    // console.log(authUser)
    if(!authUser){
        return <Navigate to="/login"/>
    }
    return children;
}

export default Authenticated;