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

    const registerCustomer =async(registerInput)=>{
        console.log(registerInput);
        const res = await myAxios.post("/auth/register/customer",{
                firstName:registerInput.firstName,
                lastName:registerInput.lastName,
                userName:registerInput.userName,
                password:registerInput.password,
                email:registerInput.email,
                mobile:registerInput.mobile
        });//ใส่ obj ได้เพราะตั้งชื่อตัวแปรในObjเหมือนbackend      
        accessToken.addAccessToken(res.data.accessToken);
        const userData = res.data.customer||res.data.supplier;
        setAuthUser(userData);
        // console.log(authUser);
    }
    const registerSupplier =async(registerInput) =>{
        console.log(registerInput);
        const res = await myAxios.post("/auth/register/supplier",{
                firstName:registerInput.firstName,
                lastName:registerInput.lastName,
                userName:registerInput.userName,
                password:registerInput.password, 
                shopName:registerInput.shopName, 
                email:registerInput.email,
                mobile:registerInput.mobile
        });//ใส่ obj ได้เพราะตั้งชื่อตัวแปรในObjเหมือนbackend      
        accessToken.addAccessToken(res.data.accessToken);
        const userData = res.data.customer||res.data.supplier;
        setAuthUser(userData);
        // console.log(userData);

    }


    const logout = ()=>{
        accessToken.removeAccessToken();
        setAuthUser(null);
    }

    return (
        <AuthContext.Provider value={{registerCustomer,registerSupplier,authUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext};
export default AuthContextProvider;