import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import myAxios from "../config/myAxios";
import accessToken from "../utilities/localStorage";

const AuthContext = createContext();

const AuthContextProvider = ({children})=>{

    const [authUser,setAuthUser] = useState(null);
    useEffect(()=>{

        if(accessToken.getAccessToken())
        {
        myAxios.get("/auth/user").then(res=>{
            console.log(res.data.user)
            setAuthUser(res.data.user);
        });
    
        }
       
        
    },[]);

    const login = async(loginInput)=>{
        try{        
        const res = await myAxios.post("/auth/login",{
            userName:loginInput.userName,
            password:loginInput.password
        });
        accessToken.addAccessToken(res.data.accessToken);
        const userData = res.data.customer||res.data.supplier;//form back
        // console.log(userData)
    //    console.log(res.data);
        setAuthUser(userData);
        return userData;
        //toast
        }
        catch(error){
            console.log(error);
            //toast 
            //dont for get create try cathch from interceptor 401 axios
        }
    }
    const register =(registerInput)=>{

        console.log(authUser)
    }
    const logout = ()=>{
        accessToken.removeAccessToken();
        setAuthUser(null);
    }

    return (
        <AuthContext.Provider value={{authUser,register,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext};
export default AuthContextProvider;