import "./App.scss";
import "./UiStyles/Dropdown.scss";

import Navbar from "./component/Navbar";
import LoginForms from "./component/LoginForms";
import Popup from "./component/UseToast";
import Route from "./router/Route";
import RegisterForm from "./component/RegisterForm";
import "./App.scss";
import AuthContextProvider from "./context/AuthContext";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <Popup>
      {/* <Route/> */}
    {/* <Navbar/>
    <RegisterForm/>
    <LoginForms/>  */}

   <AuthContextProvider>
    <ProductContextProvider>
        <Route/>

    </ProductContextProvider>
   </AuthContextProvider>

    </Popup>
  );
}

export default App;
