import "../UiStyles/RegisterForm.scss";
import ButtonHover from "./ButtonHover";


const RegisterForm = () => {
  return (
    <div className="Container">
        <h1 className="RegisterHeader">Register</h1>
      <form className="RegisterForm">
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="mobile"/>
        <ButtonHover background="green" height="60px" type="submit" text="Register"/>
      </form>
    </div>
  );
};

export default RegisterForm;
