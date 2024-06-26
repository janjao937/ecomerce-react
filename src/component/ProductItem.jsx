import { useEffect } from "react";
import "../UiStyles/ProductItem.scss";
import useCartContext from "../customHook/usecartContext";
import ButtonHover from "./ButtonHover";
import {BACKEND_URL} from "../config/env";


// { id:"1",shopName:"abc",name:"Head Phone1",category:"Tech",title:"this phone",price:100,img:"./IMG/headPhone.jpg"},
const ProductItem = ({productItem}) =>{

    const {cartItems,setCartItems,AddProduct} = useCartContext();


    const addButtonHandler = () =>{
        console.log("add");
        // setCartItems([...cartItems,productItem]);
        AddProduct(productItem);
        console.log(cartItems);
    }

    return(
        <div className="productItem">
            {/* {productItem.id} */}
            <div style={{width:"100%",display:"flex"}}>
            <img  style={{margin:"auto"}} src={`${BACKEND_URL}/${productItem.img}`}  width="300px" height="250px"  alt="" />
            </div>
           
            <div className="productItem-text">
                
                 <h1>Name:{productItem.name}</h1>
                 {/* {console.log(productItem)} */}
                 {/* <div className="productItem-text-small"> Category:{productItem.category}</div> */}
                 <div> Title: {productItem.title}</div>
                <div> Sell by:{productItem.shopName}</div>
                 <h2> Price: {(productItem.price).toLocaleString()}</h2>
            
            </div>
            <div className="btn">

            <ButtonHover onClick={()=>addButtonHandler()} text="Add" color="black" background="white"/>
            </div>
        </div>
    )
}

export default ProductItem;