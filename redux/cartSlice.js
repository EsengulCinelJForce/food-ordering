//cart içinde tutacağımız tüm statelerimiz

import {createSlice} from "@reduxjs/toolkit"; 

const cartSlice=createSlice({  //ekleme silme yazdığımız js kodlarını bizim için düzenleyecek  glabal olarak çağırdığımızda da store.js içinden ulaşabileceğiz
    


    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },

    reducers:{   //metotları bunun içine
        addProducts: (state,action) =>{
            state.products.push(action.payload);   //bunun içine ne pushlacaksan addProducts ı çağırdığımız yerden gelecek
            state.quantity += action.payload.quantity;
            state.total +=action.payload.price;
        },

        reset: (state,action) =>{
            state.products = []
            state.quantity =0
            state.total =0
        },
    }
});


export const {addProducts,reset} =cartSlice.actions;  //bunu artık heryerden kullanabiliriz.
export default cartSlice.reducer; 