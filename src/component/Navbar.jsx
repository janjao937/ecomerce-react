import "../App.scss";
import "../UiStyles/Dropdown.scss";
import "../UiStyles/navbar.scss";
import useAuthContext from "../customHook/useAuthContext";
import useCartContext from "../customHook/usecartContext";
import { useNavigate } from "react-router-dom";

const Navbar =()=>{
  const navigete = useNavigate();
  
  const navaigateToOrder = () =>{
      navigete("/order");
  }
  const navaigateToGame = () =>{
      navigete("/game");
  }

  const navigateToCart = ()=>{
    navigete("/cart");
  }
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
      <span onClick={navaigateToGame}>GAME</span>
      <span onClick={navigateToCart}>CART</span>
      <span onClick={navaigateToOrder}>ORDER</span>
      <div className="dropdown">
        <span>CUSTOMER</span>
        <div className="dropdown-user">
          <span onClick={()=>logout()}>LOGOUT</span>
        </div>
      </div>
      </div>
     
    </div>
  </div>)
}
export default Navbar;