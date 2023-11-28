import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const IndicateurData = createAsyncThunk("fetching/IndicateurData", async()=>{
    
    const response= await axios.get('http://172.16.2.17:8080/api/v1/indicateur')
    return response.data
})
    

const initialState ={
    loading:false,
    data:{},
    error:''
}


export const indicateurSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(IndicateurData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(IndicateurData.fulfilled,(state,action)=>{
                state.loading=false
                state.data= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(IndicateurData.rejected,(state,action)=>{
                state.error=false
                state.data={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

