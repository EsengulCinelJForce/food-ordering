//içinde tüm statelerimizi tutacağımız alan 

import {configureStore} from "@reduxjs/toolkit";  //global olarak tutmak için tüm her yerde tutmak için
import cartReducer from "./cartSlice";
export default configureStore({
    reducer: { 
        cart:cartReducer,
    }
})

