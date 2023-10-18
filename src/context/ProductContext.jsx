import myAxios from "../config/myAxios";
import { createContext } from "react";

const ProductContext = createContext();

/*==path backend==
/product/add
/product/remove/:productId
/product/update/:productId
/product/:productId
*/
//Function
//add product
//editProduct
//deleteProduct


const ProductContextProvider=({children})=>{

    const addProduct = ({product})=>{

    }
    const editProduct = ({productData})=>{

    }
    const deleteProduct = ({product})=>{

    }


    return <ProductContext.Provider value={{addProduct,editProduct,deleteProduct}}></ProductContext.Provider>
}




export {ProductContext};
export default ProductContextProvider;
