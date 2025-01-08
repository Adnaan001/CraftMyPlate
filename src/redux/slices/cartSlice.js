import { createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const initialState={
    category:'biryani',
    cart:[]
}

export const CartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            setCategory:(state,action)=>{
                state.category=action.payload;
            },
            addToCart:(state,action)=>
            {
                const order=action.payload;
                const index=state.cart.findIndex((item)=> item.id === order.id);
    
                if(index>=0)
                {
                    toast.error("Item already added");
                    return;
                }
    
                state.cart.push(order);

                toast.success("Item Added");
            },
            removeFromCart:(state,action)=>{
                const orderId=action.payload;
                const index=state.cart.findIndex((item)=>item.id === orderId);
    
                if(index>=0)
                {
                    state.cart=state.cart.filter((item)=>item.id !== orderId)
    
                    toast.success("Item Removed")
    
                    return;
                }
            }
        }
    }
)



export const {setCategory,addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;