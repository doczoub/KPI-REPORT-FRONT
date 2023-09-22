import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SuiviData = createAsyncThunk("fetching/suiviData", async(id)=>{
    
    const response= await axios.get(`http://localhost:8080/api/v1/suivi/calculId/${id}`)
    // localStorage.setItem('indicateur', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const suiviSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(SuiviData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(SuiviData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(SuiviData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

