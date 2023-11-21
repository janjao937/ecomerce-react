import "./App.scss";
import "./UiStyles/Dropdown.scss";

import Navbar from "./component/Navbar";
import LoginForms from "./component/LoginForms";
import Popup from "./component/UseToast";
import Route from "./router/Route";
import RegisterForm from "./component/RegisterForm";
import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
// import ProductContextProvider from "./context/ProductCustomerContext";
import CartContextProvider from "./context/CartContext";
import OrderCustomerContextProvider from "./context/OrderCustomerContext";

function App() {
  return (
    <Popup>
      {/* <Route/> */}
    {/* <Navbar/>
    <RegisterForm/>
    <LoginForms/>  */}

   <AuthContextProvider>
    {/* <ProductContextProvider> */}
    {/* <CartContextProvider> */}
    {/* <OrderCustomerContextProvider> */}
        <Route/>
    {/* </OrderCustomerContextProvider> */}
    {/* </CartContextProvider> */}

    {/* </ProductContextProvider> */}
   </AuthContextProvider>

    </Popup>
  );
}

export default App;
