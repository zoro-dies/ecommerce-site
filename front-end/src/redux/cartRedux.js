import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name : "cart",
    initialState:{
        products : [],
        quantity : 0,
        total : 0,

    },
    reducers : {
        addProduct : (state,action) =>{
            state.quantity += action.payload.quantity;
            state.products.push(action.payload.product);
            state.total += action.payload.product.price*action.payload.quantity;
        },
        incProduct:  (state,action) => {
            
           
        }
    },
});

export const {addProduct, incProduct} = cartSlice.actions
export default cartSlice.reducer;