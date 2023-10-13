import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popup =({children})=>{
  return  (
    <div>
        {children}
        <ToastContainer/>
    </div>
    )
 
}

export default Popup;

