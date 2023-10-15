import axios from "axios";
import {BACKEND_URL} from "./env"
import accessToken from "../utilities/localStorage";
import {toast } from 'react-toastify';

const myAxios = axios;
myAxios.defaults.baseURL = BACKEND_URL;

myAxios.interceptors.request.use((config)=>{
    const token = accessToken.getAccessToken();
    if(token){
        config.headers.Authorization=`Bearer ${token}`;   
    }

    return config;

},(error)=>{
    console.log(error);
    toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
});

myAxios.interceptors.request.use((response)=>response,(err)=>{
    if(err.response.status() === 401){ //res from backend
        accessToken.removeAccessToken();
        window.location.href ="/login";
    }
    return Promise.reject(err);
});

export default myAxios;