import { useEffect } from "react";
import "../UiStyles/ProductItem.scss";
import useCartContext from "../customHook/usecartContext";
import ButtonHover from "./ButtonHover";


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
        <div className="prooductItem">
            {/* {productItem.id} */}
            <img src={productItem.img} width="300px" height="250px"  alt="" />
           
            <div className="prooductItem-text">
                
                 <h1>Name:{productItem.name}</h1>
                 <div className="productItem-text-small"> Category:{productItem.category}</div>
                 {/* <div> Title: {productItem.title}</div> */}
                <div> Sell by:{productItem.shopName}</div>
                 <h2> Price: {productItem.price}</h2>
            
            </div>
            <div className="btn">

            <ButtonHover onClick={()=>addButtonHandler()} text="Add" color="black" background="white"/>
            </div>
        </div>
    )
}

export default ProductItem;