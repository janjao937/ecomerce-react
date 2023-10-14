// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../hooks/use-auth";

import { Navigate } from "react-router-dom";
import useAuthContext from "../customHook/useAuthContext";

// export default function Authenticated({children}){
//     const {authUser} = useAuth();//hook useContext
//     if(!authUser){
//         return <Navigate to="/login"/>
//     }
//     return children;
// }
const Authenticated = ({children})=>{
    const {authUser}= useAuthContext();
   

    console.log(authUser)
    if(!authUser){
        return <Navigate to="/login"/>
    }
    return children;
}

export default Authenticated;