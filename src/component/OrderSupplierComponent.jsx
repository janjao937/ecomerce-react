import SupplierOrderListItem from "./List/SupplierOrderListItem";

//[] 

//product name + product img + amount in stock|cart + amount + price+ customerName + customer+orderStatus||
const OrderSupplierComponent = ({data})=>{
    return(
        <div>
            {/* OrderSupplier */}
            {console.log(data)}
            {data&&data?.map((e,index)=>{
                
                return(<div key={index} >
                {/* <h2>Product name:{e.name}</h2> ส่งname เพื่อ แก้ ที่ทำ flow พลาด เพราะ isOrderStatus อยู่ใน cart */}
                <SupplierOrderListItem headerData= {{name:e.name,img:e.img}} data = {e.cart}/>
                </div>
                )
                
               

            })}

        </div>
    )
}


export default OrderSupplierComponent;