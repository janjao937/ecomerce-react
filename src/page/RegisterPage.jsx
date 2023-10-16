import { useState } from "react";
import RegisterForm from "../component/RegisterForm";
import SupplierRegisterForm from "../component/SupplierRegisterForm";
const RegisterPage = ()=>{
    const [isCustomer,setIsCustomer] = useState(true);
    const OnToggle = ()=>{
        setIsCustomer(!isCustomer);
    }
    return(
        <div>
            <button onClick={OnToggle}>Toggle</button>
            {isCustomer?<RegisterForm/>:<SupplierRegisterForm/>}
        </div>


      
    );
}

export default RegisterPage;