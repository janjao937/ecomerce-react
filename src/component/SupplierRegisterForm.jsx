import "../UiStyles/RegisterForm.scss";
import useAuthContext from "../customHook/useAuthContext";
import ButtonHover from "./ButtonHover";


const SupplierRegisterForm = () => {
  const {registerSupplier}= useAuthContext();
  const [input,setInput]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    password:"",
    shopName:"",
    email:"",
    mobile:""
});
  return (
    <div className="Container">
        <h1 className="RegisterHeader">Register Supplier</h1>
      <form className="RegisterForm">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Shop name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="mobile"/>
        <ButtonHover background="green" height="60px" type="submit" text="Register"/>
      </form>
    </div>
  );
};

export default SupplierRegisterForm;
