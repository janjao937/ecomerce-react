import { useNavigate } from "react-router-dom";
import "../App.scss";
import "../UiStyles/Dropdown.scss";
import "../UiStyles/navbar.scss";
import useAuthContext from "../customHook/useAuthContext";


const NavbarSupplier =()=>{

    const {logout} = useAuthContext();

    const navigete = useNavigate();
    const navigateToOrder = ()=>navigete("/ordersupplier");

    return(<div className="bar">
    <div className="bar-container">
    
    <div className="bar-container-L">
      <div className="bar-item">
      <span onClick={navigateToOrder}>ORDER</span>
      <span>MY PRODUCT</span>
      </div>
     
    </div>
     
    </div>
    <img src="../icon/icon.svg" alt="icon1" width="7%" className="icon"/>

    <div className="bar-container">
      <div className="dropdown">
        <span>SUPPLIER</span>
        <div className="dropdown-user">
          {/* <p>PROFILE</p> */}
          <span onClick={()=>logout()}>LOGOUT</span>
        </div>
        </div>
     
    </div>
  </div>)
}
export default NavbarSupplier;