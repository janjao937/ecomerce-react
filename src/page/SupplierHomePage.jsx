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
    const OpenEditHandler = ()=>{
      setIsEdit(true);
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
        //add data to axios
        /*        
        const res = await myAxios("/product/add",{
          name:"test",
          title:"asdasd",
          price:"122",
          amount:"12",
          img:"asdasdasdasdasd"
      });*/
      const res = await myAxios.post("/product/add",formData);//error
      // const res = await myAxios("/product/add",inputForm);//error
      
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
        {/* <form className="form-container">
          <div className="inputForm">
            <h2>name</h2>
            <input value={inputForm.name} onChange={(e)=>setInputForm({...inputForm,name:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            <h2>title</h2>
            <textarea value={inputForm.title} onChange={(e)=>setInputForm({...inputForm,title:e.target.value})}/>
          </div>
          <div className="inputForm">
            <h2>price</h2>
            <input value={inputForm.price} onChange={(e)=>setInputForm({...inputForm,price:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            <h2>amount</h2>
            <input value={inputForm.amount} onChange={(e)=>setInputForm({...inputForm,amount:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            {
                file?(<img src={URL.createObjectURL(file)} alt="" /> ):(
                <input type="file" onChange={(e)=>{
                    if(e.target.files[0]){
                        setFile(e.target.files[0]);
                    }
                }} />)
            }
        
          </div>

          <div className="buttonForm-container">
            <button onClick={OnAddHandler} type="submit">save</button>
            <button onClick={OnCancleHandler} type="button">cancle</button>
          </div>
        </form> */}
        <AddProductForm OnAddHandler ={OnAddHandler} setFile={setFile} OnCancleHandler = {OnCancleHandler} inputForm = {inputForm} setInputForm ={setInputForm} file= {file}/>
      </Modal>
        
      <Modal isOpen={isEdit} header="Edit-Product">
      {/* <form className="form-container">
          <div className="inputForm">
            <h2>name</h2>
            <input value={inputForm.name} onChange={(e)=>setInputForm({...inputForm,name:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            <h2>title</h2>
            <textarea value={inputForm.title} onChange={(e)=>setInputForm({...inputForm,title:e.target.value})}/>
          </div>
          <div className="inputForm">
            <h2>price</h2>
            <input value={inputForm.price} onChange={(e)=>setInputForm({...inputForm,price:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            <h2>amount</h2>
            <input value={inputForm.amount} onChange={(e)=>setInputForm({...inputForm,amount:e.target.value})} type="text" />
          </div>
          <div className="inputForm">
            {
                file?(<img src={URL.createObjectURL(file)} alt="" /> ):(
                <input type="file" onChange={(e)=>{
                    if(e.target.files[0]){
                        setFile(e.target.files[0]);
                    }
                }} />)
            }
        
          </div>

          <div className="buttonForm-container">
            <button  type="submit">save</button>
            <button onClick={OnCloseEditHandler} type="button">cancle</button>
          </div>
        </form> */}
        <EditProductForms OnCloseEditHandler ={OnCloseEditHandler} setFile={setFile} inputForm ={inputForm} setInputForm = {setInputForm} file = {file}/>
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

