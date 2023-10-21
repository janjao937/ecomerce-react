import productData from "../../MockupData/productData";
import ButtonHover from "../component/ButtonHover";
import ItemSupplier from "../component/ItemSupplier";
import "../UiStyles/SupplierHomePage.scss";
import Modal from "../component/Modal";
import { useState } from "react";
import "../UiStyles/InputForm.scss";
import { useRef } from "react";
import myAxios from "../config/myAxios";
import { useEffect } from "react";
import AddProductForm from "../component/AddProductForm";
import EditProductForms from "../component/EditProductForm";

const SupplierHomePage = () => {
    const [isAdd,setIsAdd] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [editProductId,setEditProductId] = useState(null);

    const [file,setFile] = useState(null);
    const [allProductData,setAllProductData] =useState(null);
    const [inputForm,setInputForm] = useState({
        name:"",
        title:"",
        price:"",
        amount:"",
    });

    const OpenModal = ()=>{
        setIsAdd(true);
    }
    const CloseModal =()=>{
        setIsAdd(false);
    }
    const OpenEditHandler = async(productId)=>{
      setIsEdit(true);
      try{
        const res = await myAxios.get("/product/"+productId);
        const editProduct =res.data.productData
        console.log(editProduct);
        // setEditImg(editProduct.img);
        setInputForm({
          name:editProduct.name,
          title:editProduct.title,
          price:editProduct.price,
          amount:editProduct.amount,
        });
        setEditProductId(productId);
        // setFile(editProduct.img)
      }
      catch(error){
        console.log(error);
      }

    }
    const OnSaveEditHandler =async(e)=>{//dont forget backend
      e.preventDefault();
      // const formData = new FormData();
      // formData.append("image",file);
      // formData.append("product",JSON.stringify(inputForm));
      // await myAxios.patch()
      // console.log(formData);
      const res = await myAxios.patch(`/product/update/${editProductId}`,inputForm);
      console.log(res);

      CloseModal();
      setInputForm({
        name:"",
        title:"",
        price:"",
        amount:"",
    });
    setEditProductId(null);

      //refresh page
      setFile(null);
      window.location.reload(false);

    }


    const OnCloseEditHandler = ()=>{
      setIsEdit(false);
      setInputForm({
        name:"",
        title:"",
        price:"",
        amount:"",
    });
      setFile(null);
    
    }

    useEffect(()=>{
      myAxios.get("/product/supplier").then((allProduct)=>{
        if(allProduct){
          console.log(allProduct.data.allProduct)
          setAllProductData(allProduct.data.allProduct);
        }
      
      }).catch(error=>console.log(error));

    },[]);

    const OnCancleHandler=()=>{
        CloseModal();
        setInputForm({
          name:"",
          title:"",
          price:"",
          amount:"",
      });
        setFile(null);
    }
    
    const OnAddHandler= async(e)=>{
      try{
        e.preventDefault();
        //set fileImg to inputForm  
        const formData = new FormData();
        formData.append("image",file);
        formData.append("product",JSON.stringify(inputForm));

      const res = await myAxios.post("/product/add",formData);//error

        // console.log(inputForm);
        console.log(res);
        CloseModal();
        setInputForm({
          name:"",
          title:"",
          price:"",
          amount:"",
      });
        //refresh page
        setFile(null);
        window.location.reload(false);
      }
      catch(error){
        console.log(error);
        CloseModal();
      }
   
    }

    // value={loginInput.password} onChange={e=>setLoginInput({...loginInput,password:e.target.value})}

  return (
    <div className="bg">
      <Modal isOpen={isAdd} header="Add-Product">
        <AddProductForm OnAddHandler ={OnAddHandler} setFile={setFile} OnCancleHandler = {OnCancleHandler} inputForm = {inputForm} setInputForm ={setInputForm} file= {file}/>
      </Modal>
        
      <Modal isOpen={isEdit} header="Edit-Product">

        <EditProductForms OnSave = {OnSaveEditHandler} OnCloseEditHandler ={OnCloseEditHandler} setFile={setFile} inputForm ={inputForm} setInputForm = {setInputForm} file = {file}/>
        {/* <EditProductForms oldImg={editImg} OnCloseEditHandler ={OnCloseEditHandler} setFile={setFile} inputForm ={inputForm} setInputForm = {setInputForm} file = {file}/> */}
      </Modal>

      <h1 style={{ textAlign: "center", padding: "30px 0", fontSize: "5rem" }}>
        Supplier HomePage
      </h1>
      <div className="function">
        {/* <h1>Add item</h1> */}
        <ButtonHover onClick={OpenModal} width="500px" text="Add Product" background="green" />
        {/* <ButtonHover text="Delete" background="red"/> */}
      </div>

      <div className="supplier-container">
        {allProductData?.map((e, index) => (
          <ItemSupplier OnEdit={OpenEditHandler}  key={index} product={e} />
        ))}
      </div>
    </div>
  );
};

export default SupplierHomePage;

