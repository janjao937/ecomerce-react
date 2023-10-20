import "../App.scss";
import "../UiStyles/Dropdown.scss";
import "../UiStyles/navbar.scss";
import useAuthContext from "../customHook/useAuthContext";
import useCartContext from "../customHook/usecartContext";

const Navbar =()=>{

    const ctx = useCartContext();
    const {logout} = useAuthContext();

    return(<div className="bar">
    <div className="bar-container">
    
      <div className="dropdown">
        <span>CATEGORY</span>
        <div className="dropdown-content">
          <p>PET</p>
          <p>ART</p>
          <p>ELECTRONIC</p>
          <p>HUMAN</p>
        </div>
      </div>
{/* 
      <div className="bar-item">
          <input type="text" placeholder="SEARCH" />
          <button>SEND</button>
      </div> */}
     
    </div>
    <img src="../icon/icon.svg" alt="icon1" width="7%" className="icon"/>

    <div className="bar-container">
      <div className="bar-item">
      {/* <span>FAVORIT</span> */}
      <span>GAME</span>
      <span>CART</span>
      <div className="dropdown">
        <span onClick={()=>logout()}>CUSTOMER</span>
        <div className="dropdown-content">
          <span onClick={()=>logout()}>LOGOUT</span>
        </div>
      </div>
      </div>
     
    </div>
  </div>)
}
export default Navbar;