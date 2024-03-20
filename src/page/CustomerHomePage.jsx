import { Navigate } from "react-router-dom";
import productData from "../../MockupData/productData";
import ButtonHover from "../component/ButtonHover";
import ProductItem from "../component/ProductItem";
import "../UiStyles/ProductItem.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useProductContext from "../customHook/useProductCustomerContext";


const CustomerHomePage = ()=>{
    // const navigete = useNavigate();
    const {homeProducts} = useProductContext();
    
    // const onCartClickHandler = () =>{
    //     navigete("/cart");
    // }


    return (    
        <div className="product__container">
            {/* <button onClick={onCartClickHandler}>Cart</button> */}
            <div className="headerText"> All Product</div>
            {/* search bar */}
            <div className="productContainer">
                {homeProducts?.data.products.map((e)=><ProductItem key={e.id} productItem={{id:e.id,category:e.category,name:e.name,title:e.title,price:e.price,shopName:e.supplier.shopName,img :e.img}}/>)}
            </div>

        </div>
    )
}


export default CustomerHomePage;