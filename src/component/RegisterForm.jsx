import "../UiStyles/RegisterForm.scss";
import useAuthContext from "../customHook/useAuthContext";
import ButtonHover from "./ButtonHover";
import {useForm} from "react-hook-form";


const RegisterForm = () => {
  const {registerCustomer}= useAuthContext();//get register function
  const {register,handleSubmit,errors} = useForm();

const OnSubmitForm = (data)=>{
    console.log(data);
    registerCustomer(data).catch(err=>console.log(err));
}

  return (
    <div className="Container">
        <h1 className="RegisterHeader">Register Customer</h1>
      <form onSubmit={handleSubmit(OnSubmitForm)} className="RegisterForm">
        <input type="text" name="firstName" placeholder="FirstName" {...register("firstName",{required:true})} />
        <input type="text" name="lastName" placeholder="Lastname" {...register("lastName",{required:true})}/>
        <input type="text" name="userName"  placeholder="Username" {...register("userName",{required:true})}/>
        <input type="password" name="password" placeholder="Password" {...register("password",{required:true})}/>

        {/* <input type="password" name="confirmPassword" placeholder="confirmPassword" {...register("confirmPassword",{required:true,validate:value => value === password.current || "The passwords do not match"})}/> */}

        <input type="email" name="email" placeholder="Email" {...register("email",{required:true})}/>
        <input type="text" name="mobile" placeholder="Mobile" {...register("mobile",{required:true})}/>
        <ButtonHover background="green" height="60px" type="submit" text="Register"/> 
      </form>
    </div>
  );
};

export default RegisterForm;
