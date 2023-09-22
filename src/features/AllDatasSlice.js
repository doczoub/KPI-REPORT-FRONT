import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AllData = createAsyncThunk("fetching/AllData", async()=>{
    
    const response= await axios.get('http://localhost:8080/api/v1/calcul')
    localStorage.setItem('AllCalcul', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const allDatasSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(AllData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(AllData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
            })
            builder.addCase(AllData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
            })
    }
})

