import useCartContext from "../customHook/usecartContext";
import CartItem from "./CartItem";
import "../UiStyles/CartItem.scss";

const Cart = ()=>{
    const {cartItems} = useCartContext();

    // const CountQuantity = (pId)=>{
    //     console.log(pId);

    //     return cartItems.filter(e=>e.id === pId).length;
    // }
    // const FillterCartItem = ()=>{
    //     const itemForRender = [];
    //     for(let i = 0;i<cartItems.length;i++){
    //         // const check = itemForRender.filter(e=>e.id === cartItems[i].id)
    //         if(cartItems[i].quantity){
    //             cartItems[i].quantity++;
    //         }
    //         else{
    //             cartItems[i].quantity=1;
    //             itemForRender.push(cartItems[i]);
    //         }
    //     }
    //     return itemForRender;
    // }

     // "userCartData": [
    //     {
    //         "id": 37,
    //         "amount": 3,
    //         "isOrderStatus": 0,
    //         "productId": 15,
    //         "customerId": "clnsmsjbu0000v71k1hhb5i10",
    //         "product": {
    //             "id": 15,
    //             "name": "boonyakit kittiviroj",
    //             "title": "asdasd",
    //             "amount": 20,
    //             "price": 20,
    //             "img": "image_1697706788917.png",
    //             "supplierId": "clnt00ivx0000v78sk7aoxtia",
    //             "supplier": {
    //                 "shopName": "woodie"
    //             }
    //         }
    //     }
    
    //next
    //fillter by shopName For sending order
    return (
        <div >
            <h1 className="Header-Text">Cart</h1>
            {
                cartItems.map(e=>{
                    // const quantity = CountQuantity(e.id);
                    console.log(e);
                    // return <CartItem key={e.product.id} product={e.product} quantity={e.amount}/>
                    return <CartItem key={e.id} product={e} quantity={e.quantity}/>
                })
                
            }
        
        </div>
    )
}

export default Cart;