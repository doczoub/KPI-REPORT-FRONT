import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const IndicateurByIdData = createAsyncThunk("fetching/IndicateurByIdData", async()=>{
    
    const response= await axios.get('http://172.16.2.17:8080/api/v1/indicateur/3')
    localStorage.setItem('IndicateurById', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const indicateurByIdSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(IndicateurByIdData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(IndicateurByIdData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(IndicateurByIdData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

