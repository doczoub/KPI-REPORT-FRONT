import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DeUserData = createAsyncThunk("fetching/DeUser",async()=>{
    
    const response= await axios.get('http://localhost:8080/api/v1/user')
    // localStorage.setItem('indicateur', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const userSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(DeUserData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(DeUserData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(DeUserData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

