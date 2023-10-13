const accessToken ={};//initial obj

accessToken.ACCESS_TOKEN = "ACCESS_TOKEN";

//method
accessToken.addAccessToken =(token)=> localStorage.setItem(accessToken.ACCESS_TOKEN,token);
accessToken.getAccessToken =_=>localStorage.getItem(accessToken.ACCESS_TOKEN);    
accessToken.removeAccessToken =_=>localStorage.removeItem(accessToken.ACCESS_TOKEN);

export default accessToken;


// export const ACCESS_TOKEN = "ACCESS_TOKEN";


// export const addAccessToken =(token)=> localStorage.setItem(ACCESS_TOKEN,token);
// export const getAccessToken =_=>localStorage.getItem(ACCESS_TOKEN);    
// export const removeAccessToken =_=>localStorage.removeItem(ACCESS_TOKEN);