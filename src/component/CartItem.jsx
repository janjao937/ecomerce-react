import "../UiStyles/CartItem.scss";

const CartItem = ({product,quantity=1})=>{
    return(
    <div className="CartItem-Container">
      
        <div className="CartItem-Container-L">
             <img src={product.img} width="200px" height="150px"></img>
        </div>
      
        <div className="CartItem-Container-R">
             
        <h3>{product.name}</h3>
        {/* <h3>Price:{product.price}</h3> */}
        <h3>total Price:{quantity*product.price}</h3>
        <button>+</button>
            {quantity}
        <button>-</button>
       
        </div>
        
    </div>
    
    )
}

export default CartItem;