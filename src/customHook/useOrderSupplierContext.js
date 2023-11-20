import { useContext } from "react";
import { OrderSupplierContext } from "../context/OrderSupplierContext"; 

const useOrderSupplierContext = ()=>useContext(OrderSupplierContext);

export default useOrderSupplierContext;