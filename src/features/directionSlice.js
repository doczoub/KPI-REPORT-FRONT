import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DirectionDatas = createAsyncThunk("fetching/Direction",async()=>{
    
    const response= await axios.get('http://localhost:8080/api/v1/direction')
    localStorage.setItem("direction", JSON.stringify(response.data));
    return response.data
})
    

const initialState ={
    loading:false,
    data:{},
    error:''
}


export const directionSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(DirectionDatas.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(DirectionDatas.fulfilled,(state,action)=>{
                state.loading=false
                state.data= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(DirectionDatas.rejected,(state,action)=>{
                state.error=false
                state.data={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

