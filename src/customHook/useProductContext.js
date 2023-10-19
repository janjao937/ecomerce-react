import { useContext } from "react";
import {ProductContext} from "../context/ProductContext";

const useProductContext = ()=>useContext(ProductContext);

export default useProductContext;