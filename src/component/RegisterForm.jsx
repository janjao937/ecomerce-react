import "../UiStyles/RegisterForm.scss";
import useAuthContext from "../customHook/useAuthContext";
import ButtonHover from "./ButtonHover";
import { useState } from "react";
import {useForm} from "react-hook-form";


const RegisterForm = () => {
  const {registerCustomer}= useAuthContext();//get register function
  const {register,handleSubmit,errors} = useForm();

  const [input,setInput]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    password:"",
    email:"",
    mobile:""
});

const OnSubmitForm = (data)=>{
    console.log(data);
    registerCustomer(data).catch(err=>console.log(err));
}

  return (
    <div className="Container">
        <h1 className="RegisterHeader">Register Customer</h1>
      <form onSubmit={handleSubmit(OnSubmitForm)} className="RegisterForm">
        <input type="text" name="firstName" placeholder="firstName" {...register("firstName",{required:true})} />
        <input type="text" name="lastName" placeholder="Lastname" {...register("lastName",{required:true})}/>
        <input type="text" name="userName"  placeholder="username" {...register("userName",{required:true})}/>
        <input type="password" name="password" placeholder="password" {...register("password",{required:true})}/>
        <input type="email" name="email" placeholder="email" {...register("email",{required:true})}/>
        <input type="text" name="mobile" placeholder="mobile" {...register("mobile",{required:true})}/>
        <ButtonHover background="green" height="60px" type="submit" text="Register"/> 
      </form>
    </div>
  );
};

export default RegisterForm;
