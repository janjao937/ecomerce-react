import { useState } from "react";
import myAxios from "../config/myAxios";
import ButtonHover from "../component/ButtonHover";
import { useEffect } from "react";
import {BACKEND_URL} from "../config/env";
import useOrderSupplierContext from "../customHook/useOrderSupplierContext";
import OrderSupplierComponent from "../component/OrderSupplierComponent";
import "../UiStyles/OrderSupplierStyle/orderSupplierPage.scss";



//show QR code + upload /show order
const OrderSupplierPage = ()=>{
    const ctx = useOrderSupplierContext();

    const [file,setFile] = useState(null);
    const [qr,setQr] = useState(null);
    const [allOrderData,setOrderData] = useState(null);
    const [orderLoading,setOrderLoading] = useState(true);

    useEffect(()=>{
        myAxios.get("/qr/get").then(qr=>{
            console.log(qr.data.paymentQrImg)
            setQr(qr.data.paymentQrImg.paymentQrImg);
        }).catch(err=>console.log(err));
    },[]);

    useEffect(()=>{
        setOrderLoading(true);             //e.data.allSupplierProduct[0].cart
        // ctx.getAllOrder().then(e=>console.log(e.data.allSupplierProduct));//get allOrder from back
        ctx.getAllOrder().then(e=>{
            setOrderData(e.data.allSupplierProduct);
        })
        setOrderLoading(false);
    },[]);

    const OnUploadHandler = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image",file);
        const {qrUpload} = await myAxios.patch("/qr/upload",formData);
        setQr(qrUpload);
        window.location.reload(false);//refesh Page
    }


    return (
        <form className="orderSupplier">
        <div className="orderSupplier__qr">
            <h1 className="orderSupplier__header">My QRCode</h1>
                <input type="file" onChange={(e)=>{
                    if(e.target.files[0]){
                        setFile(e.target.files[0]);
                    }
                }} />
            
            <br/>
            <br/>
            <div>
            {qr?(<img width="200px"src={`${BACKEND_URL}/${qr}`} alt="" /> ):(<img width="200px" src="../../MockupData/IMG/supplierPayment.png" alt="QR" />)}
                
            </div>
            <div>
                <ButtonHover onClick={OnUploadHandler} text="upload"/>
            </div>

            </div>
           
            <h1 className="orderSupplier__header">My Order</h1>
            <div>
                {console.log(allOrderData)}
                {(!orderLoading&&allOrderData)&&<OrderSupplierComponent data={allOrderData}/>}
                {/* {!orderLoading?<OrderSupplierComponent data={allOrderData}/>:<></>} */}
            </div>


        </form>
    );
}

export default OrderSupplierPage;