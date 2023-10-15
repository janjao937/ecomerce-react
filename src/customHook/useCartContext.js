import { useContext } from "react";
import { cartContext } from "../context/CartContext"; 

const useCartContext = ()=>useContext(cartContext);

export default useCartContext;