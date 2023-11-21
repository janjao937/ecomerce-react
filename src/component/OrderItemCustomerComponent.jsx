import {BACKEND_URL} from "../config/env";
import myAxios from "../config/myAxios";
import ButtonHover from "./ButtonHover";

const OrderItemCustomerComponent = ({data})=>{
   const ConvertDeliveryStatus = (status)=>{
      return status===0?"WAITING":status===1?"SENDING":status===2?"SUCCESS":"";
   }

   const DeliverySuccess =async(orderId)=>{
      // console.log("delivery success");
      //update status to 2
      const data = await myAxios.patch("/order/delivery",{orderId,deliveryStatus:2});
      window.location.reload(false);
   }
 return (
   <div style={{marginTop:"20px",padding:"30px",border:"1px solid",width:"50%"}}>

  
    <div style={{display:"flex",gap:"2em",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <div>
      <h1>Product:{data.product.name}</h1>
      <h1>Amount:{data.amount}</h1>
      <h1>Adress:{data?.order[0]?.adress}</h1>
      <h1>oderId:{data?.order[0]?.id}</h1>
      <h1 style={{color:"brown"}}>{ConvertDeliveryStatus(data?.order[0]?.deliveryStatus)}</h1>
      {/* <h1 style={{color:"brown",fontSize:"20px"}}></h1> */}

      </div>
      
      <img width={"200px"} height={"200px"} src={`${BACKEND_URL}/${data.product.img}`} alt="productImg" />
    
      {console.log(data)}
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
      {/* {data.order[0].deliveryStatus===0?<ButtonHover onClick={()=>{console.log("Success")}} background="green" text="Success"/>:""} */}
      {data.order[0]?.deliveryStatus===1?<ButtonHover type="submit" onClick={(e)=>{DeliverySuccess(data?.order[0]?.id)}} background="green" text="Success"/>:""}
</div>
    </div>
 )   
}

export default OrderItemCustomerComponent;