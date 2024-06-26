import "../UiStyles/CartItem.scss";
import useCartContext from "../customHook/usecartContext";
import {BACKEND_URL} from "../config/env";

const CartItem = ({product,quantity=1})=>{
    const {AddProduct,RemoveProduct} = useCartContext();

    return(
    <div className="CartItem-Container">
      
        <div className="CartItem-Container-L">
             <img src={`${BACKEND_URL}/${product.img}`} width="200px" height="150px"></img>
        </div>
      
        <div className="CartItem-Container-R">
             
        <h3>{product.name}</h3>
        {/* <h3>Price:{product.price}</h3> */}
        <h3>total Price:{(quantity*product.price).toLocaleString()}</h3>
        <button onClick={()=>AddProduct(product)}>+</button>
            {quantity}
        <button onClick={()=>RemoveProduct(product)} >-</button>
       
        </div>
        
    </div>
    
    )
}

export default CartItem;