import { useState } from "react";
import "../UiStyles/ItemSupplier.scss";
// import ButtonHover from "./ButtonHover";


const ItemSupplier = ({product})=>{
    const [isEdit,setEdit] = useState(false);
    const OnEditHandler = ()=>{
        setEdit(!isEdit);
    }
    const OnSaveHandler = ()=>{
        setEdit(!isEdit);
    }
   //Edit Delete Add

    return(
      <div className="itemSupplier-container">
        <img src={product.img} alt="" width="150px" height="100px" />
        <h1>{product.name}</h1>
        <h1>Price:{product.price}</h1>
        <button>Edit</button>
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