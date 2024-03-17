import { useState } from "react";
import RegisterForm from "../component/RegisterForm";
import SupplierRegisterForm from "../component/SupplierRegisterForm";
import ButtonHover from "../component/ButtonHover";
import "../UiStyles/registerStyle/register.scss"
const RegisterPage = ()=>{
    const [isCustomer,setIsCustomer] = useState(true);
    const OnToggle = ()=>{
        setIsCustomer(!isCustomer);
    }
    return(
        <div>
            {isCustomer?<RegisterForm/>:<SupplierRegisterForm/>}
            <div className="form__togle--register">
            <ButtonHover background="salmon" onClick={OnToggle} text={isCustomer?"Supplier":"Customer"}/>
            </div>
        </div>


      
    );
}

export default RegisterPage;