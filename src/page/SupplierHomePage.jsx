import productData from "../../MockupData/productData";
import ButtonHover from "../component/ButtonHover";
import ItemSupplier from "../component/ItemSupplier";
import "../UiStyles/SupplierHomePage.scss";

const SupplierHomePage =()=>{

    return(
    <div>
        <h1 style={{textAlign:"center",margin:"30px 0"}}>Supplier HomePage</h1>
        <div className="function">
            {/* <h1>Add item</h1> */}
            <ButtonHover text="Add" background="green"/>
            <ButtonHover text="Delete" background="red"/>
        </div>

        <div className="supplier-container">
            {
                productData.product.map((e,index)=><ItemSupplier key={index} product={e}/>)
            }
        </div>
    </div>
    )
}

export default SupplierHomePage;