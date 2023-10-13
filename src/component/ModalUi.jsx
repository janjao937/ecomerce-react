import { useState } from "react";
import "../UiStyles/Modal.scss";

const Modal = ({children,content})=>{
    const [open,setClose] = useState("none");
    const Close = ()=>{
        setClose("none");
    }
    const Open =()=>{
        setClose("block");
    }

    return(
        <div>
           {children}
           <button onClick={Open} className="open">Open Modal</button>
           <div style={{display:open}} className="modal-content">
             <span onClick={Close} className="close">&times;</span>
            {content}
            </div>
        </div>
    )
}

export default Modal;