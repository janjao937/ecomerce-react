import { useState } from "react";
import { BACKEND_URL } from "../config/env";
import ButtonHover from "./ButtonHover";
import myAxios from "../config/myAxios";
import "../UiStyles/OrderSupplierStyle/orderCustomerInput.scss";

//product.product.isOrderStatus ใช้อันนี้แยก order ก่อน

const OrderCustomerFrom = ({ product }) => {
  const [address, setAdress] = useState({address1:"",address2:"",city:"",postalCode:"",country:""});

  // const [address, setAdress] = useState("");
  const [file,setFile] = useState(null);

  const OnSubmitForm = async(e) => {
    // e.preventDefault();

    //myaxios create order 
      const addressData = address.address1+" "+address.address2+" "+address.city+" "+address.postalCode+" "+address.country;

      const formData = new FormData();
      formData.append("image",file);

      formData.append("adress",JSON.stringify(addressData));
      formData.append("cartId",JSON.stringify(product.cartId));
      
      await myAxios.post("/order/create",formData);

    // console.log(product.product);
    // console.log(product.isOrderStatus);
    // console.log("adress:", address);
    // console.log("cartId:",product.cartId);

    setAdress({address1:"",address2:"",city:"",postalCode:"",country:""});//reset adress
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border:"1px solid",
        padding:"0px 100px"
      }}
    >
      <br />
      <div>
        <div>
          <div>shop name:{product.product.supplier.shopName}</div>
          <div>product name:{product.product.name}</div>
          <div>amount:{product.product.quantity}</div>
          <div>isOrderStatus:{product.product.isOrderStatus==0?<div style={{color:"red",display:"inline"}}>false</div>:"true"}</div>
          <div>
            total price:{product.product.quantity * product.product.price}
          </div>
        </div>

        <div>
          <br />
          <img
            width={"200px"}
            height={"200px"}
            src={`${BACKEND_URL}/${product.product.img}`}
            alt=""
          />
          <br />
        </div>
        <h2>Adress</h2>

        {/* <textarea
          onChange={(e) => setAdress(e.target.value)}
          value={address}
          name="adress"
          id=""
          cols="30"
          rows="5"
        ></textarea> */}
        <div className="order-container">
        <input className="order-input__element--xl" value={address.address1} onChange={e=>setAdress({...address,address1:e.target.value})}  placeholder="Address1"/>
        <input className="order-input__element--xl" value={address.address2} onChange={e=>setAdress({...address,address2:e.target.value})}  placeholder="Address2"/>
        <input className="order-input__element--sm" value={address.city} onChange={e=>setAdress({...address,city:e.target.value})}  placeholder="City"/>
        <input className="order-input__element--sm" value={address.postalCode} onChange={e=>setAdress({...address,postalCode:e.target.value})}  placeholder="Postal/Zip Code"/>
        <input className="order-input__element--sm" value={address.country} onChange={e=>setAdress({...address,country:e.target.value})}  placeholder="Country"/> 
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
        <h2>QR Payment</h2>
          <img
            width={"200px"}
            height={"200px"}
            src={`${BACKEND_URL}/${product.supplier.paymentQrImg}`}
            alt="slipNull"
          />
           {product.product.isOrderStatus==0&&<h2>Slip</h2>}
          {file&&product.product.isOrderStatus==0?<img width={"200px"} height={"200px"} src={URL.createObjectURL(file)} alt="slipUpload"/>:""}
          {product.product.isOrderStatus==0&&<input type="file" onChange={(e)=>{
                    if(e.target.files[0]){
                        setFile(e.target.files[0]);
                    }
                }} />}
        </div>
      </div>
      <br />
      <br />
      {product.product.isOrderStatus==0&&<ButtonHover type="submit" onClick={OnSubmitForm} background="brown" text="Order"/>}

      <br />
      <br />
    </form>
  );
};

export default OrderCustomerFrom;
