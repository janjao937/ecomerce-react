import { useContext } from "react";
import {ProductContext} from "../context/ProductCustomerContext";

const useProductContext = ()=>useContext(ProductContext);

export default useProductContext;