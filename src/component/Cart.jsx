import useCartContext from "../customHook/usecartContext";
import CartItem from "./CartItem";
import "../UiStyles/CartItem.scss";

const Cart = ()=>{
    const {cartItems} = useCartContext();

    const CountQuantity = (pId)=>{
        console.log(pId);

        return cartItems.filter(e=>e.id === pId).length;
    }
    const FillterCartItem = ()=>{
        const itemForRender = [];
        for(let i = 0;i<cartItems.length;i++){
            // const check = itemForRender.filter(e=>e.id === cartItems[i].id)
            if(cartItems[i].quantity){
                cartItems[i].quantity++;
            }
            else{
                cartItems[i].quantity=1;
                itemForRender.push(cartItems[i]);
            }
        }
        return itemForRender;
    }
    return (
        <div >
            <h1 className="Header-Text">Cart</h1>
            {
                cartItems.map(e=>{
                    // const quantity = CountQuantity(e.id);
                    return <CartItem key={e.id} product={e} quantity={e.quantity}/>
                })
                
            }
        
        </div>
    )
}

export default Cart;