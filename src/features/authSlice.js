import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userData = createAsyncThunk("authentification/userData", async(id)=>{
    
    const response= await axios.get(`http://172.16.2.17:8080/api/v1/calcul/userId/${id}`)
    // localStorage.setItem('userCalcul', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    users:{},
    error:''
}


export const authSlice = createSlice({
    name :"authentification",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(userData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(userData.fulfilled,(state,action)=>{
                state.loading=false
                state.users= action.payload
                state.error=''
            })
            builder.addCase(userData.rejected,(state,action)=>{
                state.error=false
                state.users={}
                state.error=action.error.message
            })
    }
})

