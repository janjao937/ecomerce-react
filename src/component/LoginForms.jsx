import { useState } from "react";
import "../UiStyles/LoginForm.scss";
import ButtonHover from "./ButtonHover";
import {toast } from 'react-toastify';
import useAuthContext from "../customHook/useAuthContext";


const LoginForms = ()=>{
   
    const [loginInput,setLoginInput] = useState({
        userName:"",
        password:""
    });
    const {login} = useAuthContext();
    const OnsubmitFormHandler=async(e)=>{
        try{
            e.preventDefault();
            const userLogin =  await login(loginInput);
            console.log(userLogin);
            if(userLogin.shopName){
                toast.success(userLogin.shopName);//Supplier
            }
            else{
                toast.success(userLogin.userName);//Customer
            }
            

        }catch(error){
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