import { useState } from "react";
import "../UiStyles/ItemSupplier.scss";
import ButtonHover from "./ButtonHover";

const ItemSupplier = ({product})=>{
    const [isEdit,setEdit] = useState(false);
    const OnEditHandler = ()=>{
        setEdit(!isEdit);
    }
   //Edit Delete Add

    return(
        <div className="item-Container">
          
          <div className="edit">
            <h1>{product.name}</h1>
          {isEdit&&<input type="text" />}
            </div>

            <div className="edit">
            <p>image</p>

            </div>
            <div className="edit">
            <p>title</p>
            {isEdit&&<input type="text" />}
            </div>
     
            <div className="edit">
            <p>price</p>
            {isEdit&&<input type="text" />}
            </div>
   
          
        
           <div className="button-Container">
            {isEdit?<>
                 <button className="save-button">Save</button>
                 <button onClick={OnEditHandler} className="delete-button">Cancle</button>
                 <button className="delete-button">Delete</button>
            </>:<button onClick={OnEditHandler} className="save-button">Edit</button>
            }
            
           

           </div>
        </div>
    )
}

export default ItemSupplier;