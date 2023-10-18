import productData from "../../MockupData/productData";
import ButtonHover from "../component/ButtonHover";
import ItemSupplier from "../component/ItemSupplier";
import "../UiStyles/SupplierHomePage.scss";
import Modal from "../component/Modal";
import { useState } from "react";
import "../UiStyles/InputForm.scss";
import { useRef } from "react";
import myAxios from "../config/myAxios";

const SupplierHomePage = () => {
    const [isAdd,setIsAdd] = useState(false);
    const [file,setFile] = useState(null);
    const [inputForm,setInputForm] = useState({
        name:"",
        title:"",
        price:"",
        amount:"",
        img:file
    });

    const OpenModal = ()=>{
        setIsAdd(true);
    }
    const CloseModal =()=>{
        setIsAdd(false);
    }

    const OnCancleHandler=()=>{
        CloseModal();
        setFile(null);
    }
    
    const OnAddHandler= async(e)=>{
        e.preventDefault();
        setInputForm({...inputForm,img:file})//set fileImg to inputForm  
        
        // await myAxios("/product/add",data)




        console.log(inputForm)
        CloseModal();
    }

    // value={loginInput.password} onChange={e=>setLoginInput({...loginInput,password:e.target.value})}

  return (
    <div className="bg">
      <Modal isOpen={isAdd} header="Add-Product">
        <form className="form-container">
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
                file?(<img src={URL.createObjectURL(file)} alt="" />   ):(
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
        </form>
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
        {productData.product.map((e, index) => (
          <ItemSupplier key={index} product={e} />
        ))}
      </div>
    </div>
  );
};

export default SupplierHomePage;

