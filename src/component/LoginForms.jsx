import { useState } from "react";
import "../UiStyles/LoginForm.scss";
import myAxios from "../config/myAxios";
import accessToken from "../utilities/localStorage";
import ButtonHover from "./ButtonHover";
import {toast } from 'react-toastify';
import { useEffect } from "react";
import useAuthContext from "../customHook/useAuthContex";


const LoginForms = ()=>{
   
    // const [authUser,setAuthUser] = useState(null);

    const [loginInput,setLoginInput] = useState({
        userName:"",
        password:""
    });
    // useEffect(()=>{

    //     if(accessToken.getAccessToken()){
    //          //catch ไม่ต้องมีเพราะดักที่ 401 ที่ axios.js แล้ว
    //     myAxios.get("/auth/me").then(res=>{
            
            
    //         setAuthUser(res.data.customer||res.data.supplier);

    //     });
    //     }
        
    // },[]);
    const {login} = useAuthContext();
    const OnsubmitFormHandler=async(e)=>{
        try{
            e.preventDefault();
            // const userLogin = await myAxios.post("/auth/login",{
            //     userName:loginInput.userName,
            //     password:loginInput.password
            // });
            
            // accessToken.addAccessToken(userLogin.data.accessToken);
            // console.log(userLogin)
            // toast.success("Success");
            const userLogin =  await login(loginInput);
            console.log(userLogin);
            toast.success(userLogin.userName);

        }catch(error){
           
            console.dir(error);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }

    }

    return(
        <div className="loginForm-container">
           
            <h1>Login</h1>
            <form  onSubmit={OnsubmitFormHandler}  className="loginForm">
           
            <input value={loginInput.userName} onChange={e=>setLoginInput({...loginInput,userName:e.target.value})} id="username" type="text" placeholder="Username" />
        
            <input value={loginInput.password} onChange={e=>setLoginInput({...loginInput,password:e.target.value})} id="password" type="password" placeholder="Password" />
            <br/>
            <br/>

            <div className="button-container">
            <ButtonHover type="submit" text="Login"/>
            <ButtonHover onClick={()=>"Hello"} color="white" background="black" text="Register"/>
            </div>
        </form>
       
        </div>
    
    )
}

export default LoginForms;