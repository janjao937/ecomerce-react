import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import myAxios from "../config/myAxios";
const cartContext = React.createContext();

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);//uesEffect get all cart item
    const [totalPrice,setTotalPrice] = useState(null);

    // useEffect(()=>{
    //     if(totalPrice){

    //         Total();
    //     }

    // },cartItems);

    // //call create or increse
    // const AddProductResponse = ()=>{

    //     // myAxios.post//create new item

    //     // myAxios.patch //add amount
    // }
    // //call Delete or remove
    // const RemoveProductResponse = ()=>{

    // }
    //data in cartItems
    // "userCartData": [
    //     {
    //         "id": 37,
    //         "amount": 3,
    //         "isOrderStatus": 0,
    //         "productId": 15,
    //         "customerId": "clnsmsjbu0000v71k1hhb5i10",
    //         "product": {
    //             "id": 15,
    //             "name": "boonyakit kittiviroj",
    //             "title": "asdasd",
    //             "amount": 20,
    //             "price": 20,
    //             "img": "image_1697706788917.png",
    //             "supplierId": "clnt00ivx0000v78sk7aoxtia",
    //             "supplier": {
    //                 "shopName": "woodie"
    //             }
    //         }
    //     }

    // { id:"12",shopName:"bongShop",name:"Bong3",category:"Decorate",title:"this Bong",price:1000,img:"https://highsostore.com/wp-content/uploads/2021/11/PB-004-_-Aladdin-Bong-45degree.jpg"},

    useEffect(()=>{
        myAxios.get("/cart").then(cartItems => {
            // console.log(cartItems.data.userCartData);
            // setCartItems(cartItems.data.userCartData);
            const product = [];
            const userData = cartItems.data.userCartData;
            // console.log(userData)

            //ดัก order ที่นี่ product.isOrderStatus = 0
            userData.map(e=>product.push({...e.product,cartId:e.id,quantity:e.amount,isOrderStatus:e.isOrderStatus}));
            setCartItems(product);
            // console.log(product);

       }).catch(err=>console.log(err));
    },[]);

    const createCart = async(product)=>{
        // console.log(product)
        const res = await myAxios.post("/cart/add-item",{
            productId:product.id,
            // isOrderStatus:0,
            // amount:1
        });

        // console.log("create cart"+res);
        return res;

    }

    const IncreseAmout = async (product)=>{
        console.log(product);
        const res = await myAxios.patch("/cart/add",{
            productId:product.id,
            quantity:++product.quantity
        });
        console.log(res);
    }
    const DecreseAmout = async (product)=>{
        const res = await myAxios.patch("/cart/remove",{
            productId:product.id,
        });
        console.log(res);
    }
    const DeleteCart = async(product)=>{
        const res = await myAxios.delete("/cart/delete/"+product.id,{
            productId:product.id
        });
        return res;
    }


    // const [isSending,setIsSending] = useState({timeid:0,status:false});
   
    const AddProduct = async(product) =>{
        //add item to cart 
        const productExist = cartItems.find((item)=>item.id === product.id);
        if(productExist){
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity+1}:item));
            //patch
           const  res = await IncreseAmout(productExist);
            //set timeout
            return res;
        }
        else{
            setCartItems([...cartItems,{...product,quantity:1}]);
            const res = await createCart(product);

            //create
            return res;
        }
    }


    const RemoveProduct = async(product)=>{
         //remove item in cart 
         const productExist = cartItems.find((item)=>item.id === product.id);
         if(productExist.quantity === 1){
            setCartItems(cartItems.filter((item)=>item.id !== product.id));
            //delete
            const res = await DeleteCart(product);
         }
         else{
            setCartItems(cartItems.map((item)=>item.id === product.id?{...productExist,quantity:productExist.quantity-1}:item));
            //patch
            const res = await DecreseAmout(product);
         }
    }

    // const Total = ()=>{
    //     let initialValue = 0;
    //     //reduce cart Item
    //      const total =cartItems?.reduce(e=>e.price*e.quantity,initialValue);
    //      setTotalPrice(total);//set state totalPrice
    //      console.log(totalPrice);
         
    // }

    const CreateOrder = ()=>{
        // const order = {
        //     shopName,
        //     orderProduct:[{productName,amount,totalPrice},{}]
            
        // }

    }

    return(
        <cartContext.Provider value={{totalPrice,AddProduct,RemoveProduct,cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;//use in LayoutCustomer
export {cartContext};