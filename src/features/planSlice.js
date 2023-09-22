import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userPlan = createAsyncThunk("authentification/userPlan", async(id)=>{
    
    const response= await axios.get(`http://localhost:8080/api/v1/planAction/userId/${id}`)
    // localStorage.setItem('userCalcul', JSON.stringify( response.data)) 
    return response.data
})
    
  


const initialState ={
    loading:false,
    plans:{},
    error:''
}


export const planSlice = createSlice({
    name :"authentification",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(userPlan.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(userPlan.fulfilled,(state,action)=>{
                state.loading=false
                state.plans= action.payload
                state.error=''
            })
            builder.addCase(userPlan.rejected,(state,action)=>{
                state.error=false
                state.plans={}
                state.error=action.error.message
            })
    }
})

