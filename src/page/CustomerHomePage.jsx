import ProductItem from "../component/ProductItem";
import "../UiStyles/ProductItem.scss";
import { useNavigate } from "react-router-dom";
import useProductContext from "../customHook/useProductCustomerContext";
import { useState } from "react";


// const navigete = useNavigate();
const CustomerHomePage = ()=>{
    const {homeProducts} = useProductContext();
    const [searchInput,setSearchInput] = useState("");

    const OnClickClearButton=()=>setSearchInput("");

    const OnChangeInputSearch=(searchText)=>
    {
        setSearchInput(searchText);
    }

    


    return (    
        <div className="product__container">
            {/* <button onClick={onCartClickHandler}>Cart</button> */}
            <div className="headerContainer"> 
            Products
            <div className="search__container">
            <input value={searchInput} onChange={e=>OnChangeInputSearch(e.target.value)} className="search__input" type="text" placeholder="Search"/>
            <button onClick={OnClickClearButton} className="clear__button" >Clear</button>
            </div>
            </div>
            
            <div className="productContainer">
                {/* {homeProducts?.data.products.map((e)=>
                <ProductItem key={e.id} productItem={{id:e.id,category:e.category,name:e.name,title:e.title,price:e.price,shopName:e.supplier.shopName,img :e.img}}/>
                )} */}
                
                {
                    homeProducts?.data.products.filter(value=>{
                        if(searchInput=="")return value;
                        else if(value.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return value;
                        }
                    }).map(e=> <ProductItem key={e.id} productItem={{id:e.id,category:e.category,name:e.name,title:e.title,price:e.price,shopName:e.supplier.shopName,img :e.img}}/>)
                }
            </div>

        </div>
    )
}


export default CustomerHomePage;