import myAxios from "../config/myAxios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
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

const ProductContextProvider = ({ children }) => {
const [homeProducts,setHomeProducts] = useState(null);

 

  useEffect(()=>{
    getProductHome().then((products)=>{
        setHomeProducts(products);
        console.log(homeProducts)
    });
    
     
},[])

  const getProductHome = async()=>{
     return await myAxios.get("/product/home");
   
  }

  return (
    <ProductContext.Provider
      value={{ getProductHome,homeProducts}}
    >{children}</ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductContextProvider;
