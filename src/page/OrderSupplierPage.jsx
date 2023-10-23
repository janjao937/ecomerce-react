import { useState } from "react";
import myAxios from "../config/myAxios";
import ButtonHover from "../component/ButtonHover";
import { useEffect } from "react";
import {BACKEND_URL} from "../config/env";




//show QR code + upload /show order
const OrderSupplierPage = ()=>{

    const [file,setFile] = useState(null);
    const [qr,setQr] = useState(null);

    useEffect(()=>{
        myAxios.get("/qr/get").then(qr=>{
            console.log(qr.data.paymentQrImg)
            setQr(qr.data.paymentQrImg.paymentQrImg);
        }).catch(err=>console.log(err));
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
        <form>
            <h1>QR Code</h1>
                <input type="file" onChange={(e)=>{
                    if(e.target.files[0]){
                        setFile(e.target.files[0]);
                    }
                }} />

            <div>
            {qr?(<img width="200px"src={`${BACKEND_URL}/${qr}`} alt="" /> ):(<img width="200px" src="../../MockupData/IMG/supplierPayment.png" alt="QR" />)}
                
            </div>
            <div>
                <ButtonHover onClick={OnUploadHandler} text="upload"/>
            </div>
            <br/>
            <h1>Supplier Order</h1>
            <div>
                order
            </div>
        </form>
    );
}

export default OrderSupplierPage;