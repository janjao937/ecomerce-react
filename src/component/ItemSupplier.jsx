import { useState } from "react";
import "../UiStyles/ItemSupplier.scss";
import myAxios from "../config/myAxios";
// import ButtonHover from "./ButtonHover";
import {BACKEND_URL} from "../config/env";

const ItemSupplier = ({product,OnEdit})=>{
    // const [isEdit,setEdit] = useState(false);
   //Edit Delete Add
   const OnDelete = async()=>{
     try{
       await myAxios.delete(`/product/remove/${product.id}`);
      //  console.log(product.id);
      //  console.log(res);

      window.location.reload(false);//refesh Page

    } 
    catch(error){
      console.log(error);
    }

   }

    return(
      <div className="itemSupplier-container">
        <img src={BACKEND_URL+"/"+product.img} alt=""  width="150px" height="100px" />
        {/* {console.log(BACKEND_URL+product.img)} */}
        <h1>{product.name}</h1>
        <h1>Price:{(product.price).toLocaleString()}</h1>
        <h1>amount:{product.amount}</h1>
        <div className="itemSupplier-function">
        <button onClick={()=> OnEdit(product.id)}>Edit</button>
        <button onClick={()=>OnDelete()}>Delete</button>
        </div>

      </div>
    )
}

export default ItemSupplier;

// (
//   <div className="item-Container">
    
//     <div className="edit">
//       <h1>{product.name}</h1>
//     {isEdit&&<input type="text" />}
//       </div>

//       <div className="edit">
//       <p>image</p>
//       {isEdit&&<button>upload</button>}
//       </div>
//       <div className="edit">
//       <p>title</p>
//       {isEdit&&<input type="text" />}
//       </div>

//       <div className="edit">
//       <p>price</p>
//       {isEdit&&<input type="text" />}
//       </div>

    
  
//      <div className="button-Container">
//       {isEdit?<>
//            <button className="save-button">Save</button>
//            <button onClick={OnEditHandler} className="delete-button">Cancle</button>
//            <button className="delete-button">Delete</button>
//       </>:<button onClick={OnSaveHandler} className="save-button">Edit</button>
//       }
      
     

//      </div>
//   </div>
// )