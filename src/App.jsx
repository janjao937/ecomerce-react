import "./App.scss";
import "./UiStyles/Dropdown.scss";

import Navbar from "./component/Navbar";
import LoginForms from "./component/LoginForms";
import Popup from "./component/UseToast";
import Route from "./router/Route";
import RegisterForm from "./component/RegisterForm";
import "./UiStyles/main.scss";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <Popup>
      {/* <Route/> */}
    {/* <Navbar/>
    <RegisterForm/>
    <LoginForms/>  */}

   <AuthContextProvider>
   <Route/>
  
   </AuthContextProvider>

    </Popup>
  );
}

export default App;
