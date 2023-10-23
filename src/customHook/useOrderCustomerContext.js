import { useContext } from "react";
import { OrderCustomerContext } from "../context/OrderCustomerContext"; 

const useOrderCustomerContext = ()=>useContext(OrderCustomerContext);

export default useOrderCustomerContext;