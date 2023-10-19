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

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [file, setFile] = useState(null);
  const [allProductData, setAllProductData] = useState(null);
  const [inputForm, setInputForm] = useState({
    name: "",
    title: "",
    price: "",
    amount: "",
  });

  useEffect(()=>{
    getProductHome().then((products)=>{
        setHomeProducts(products);
        console.log(homeProducts)
    })
    
     
},[])

  const addProduct = async () => {
    try {
      e.preventDefault();
      //set fileImg to inputForm
      const formData = new FormData();
      formData.append("image", file);
      formData.append("product", JSON.stringify(inputForm));

      const res = await myAxios.post("/product/add", formData); //error
      console.log(res);
      CloseModal();
      setInputForm({
        name: "",
        title: "",
        price: "",
        amount: "",
      });
      //refresh page
      setFile(null);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      // CloseModal();
    }
  };

  const editProduct = async() => {


  };

  const deleteProduct = async({ productId }) => {
    await myAxios.delete(`/product/remove/${productId}`);
    //  console.log(res);
    window.location.reload(false); //refesh Page
  };

  const getProductHome = async()=>{
     return await myAxios.get("/product/home");
   
  }

  return (
    <ProductContext.Provider
      value={{ getProductHome,homeProducts,addProduct, editProduct, deleteProduct }}
    >{children}</ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductContextProvider;
