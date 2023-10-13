import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import myAxios from "../config/myAxios";
import accessToken from "../utilities/localStorage";

export const AuthContext = createContext();
const AuthContextProvider = ()=>{

    const [user,setUser] = useState(null);
    const login = async(loginInput)=>{
        try{        
        const res = await myAxios.post("/auth/login",{
            userName:loginInput.userName,
            password:loginInput.password
        });
        accessToken.addAccessToken(res.data.accessToken);
        //toast
        }
        catch(error){

            //toast
        }
    }
    const register =(registerInput)=>{

    }
    const logout = ()=>{

    }

    return (
        <AuthContext.Provider value={{register,login}}></AuthContext.Provider>
    )
}

export default AuthContextProvider;