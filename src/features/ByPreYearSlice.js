import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ByPreYearData = createAsyncThunk("fetching/ByPreYear", async(id)=>{
    const an = new Date();
    const annee= an.getFullYear();
    const preAnnee=annee-1
    
    const response= await axios.get(`http://172.16.2.17:8080/api/v1/calcul/by-year/${preAnnee}/indicateur/${id}`)
    localStorage.setItem('bypreyear', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const byPreYearSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(ByPreYearData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(ByPreYearData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(ByPreYearData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

