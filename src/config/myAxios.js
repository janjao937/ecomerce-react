import axios from "axios";
import {BACKEND_URL} from "./env"
import accessToken from "../utilities/localStorage";

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
});

myAxios.interceptors.request.use((response)=>response,(err)=>{
    if(err.response.status() === 401){ //res from backend
        accessToken.removeAccessToken();
        window.location.href ="/login";
    }
    return Promise.reject(err);
});

export default myAxios;