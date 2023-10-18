import "../UiStyles/Modal.scss";

const Modal = ({children,isOpen=false,header="Header"})=>{
    return  isOpen&&(
        <div className="modal">
            <div className="modal-content">
            <h1 className="modal-head">{header}</h1>
                {children}
            </div>
        </div>
    )
}
export default Modal;
