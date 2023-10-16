import { Navigate } from "react-router-dom";
import productData from "../../MockupData/productData";
import ButtonHover from "../component/ButtonHover";
import ProductItem from "../component/ProductItem";
import "../UiStyles/ProductItem.scss";
import { useNavigate } from "react-router-dom";


const CustomerHomePage = ()=>{
    const navigete = useNavigate();
    
    const onCartClickHandler = () =>{
        navigete("/cart");
    }


    return (    
        <div>
            <button onClick={onCartClickHandler}>Cart</button>
            <div className="headerText"> All Product</div>
            <div className="productContainer">
                {productData.product.map((e)=><ProductItem key={e.id} productItem={{id:e.id,category:e.category,name:e.name,title:e.title,price:e.price,shopName:e.shopName,img :e.img}}/>)}
            </div>

        </div>
    )
}


export default CustomerHomePage;