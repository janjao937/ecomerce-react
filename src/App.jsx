import "./App.scss";
import "./UiStyles/Dropdown.scss";

import Navbar from "./component/Navbar";
import LoginForms from "./component/LoginForms";
import Popup from "./component/Popup";
import Route from "./router/Route";
import RegisterForm from "./component/RegisterForm";
import "./UiStyles/main.scss";

function App() {
  return (
    <Popup>
      <Route/>
    {/* <Navbar/>
    <RegisterForm/>
    <LoginForms/>  */}

   
   

    </Popup>
  );
}

export default App;
