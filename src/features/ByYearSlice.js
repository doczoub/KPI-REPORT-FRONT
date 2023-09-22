import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ByYearData = createAsyncThunk("fetching/ByYear", async(id)=>{
    const an = new Date();
    const annee= an.getFullYear();
    
    const response= await axios.get(`http://localhost:8080/api/v1/calcul/by-year/${annee}/indicateur/${id}`)
    localStorage.setItem('byyear', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const byYearSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(ByYearData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(ByYearData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(ByYearData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

