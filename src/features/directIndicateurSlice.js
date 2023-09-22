import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DirIndicateurData = createAsyncThunk("fetching/AllData", async(id)=>{
    
    const response= await axios.get(`http://localhost:8080/api/v1/indicateur/userId/${id}`)
    localStorage.setItem('dirIndicateur', JSON.stringify( response.data)) 
    return response.data
})
    

const initialState ={
    loading:false,
    datas:{},
    error:''
}


export const dirIndicateurSlice = createSlice({
    name :"fetching",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(DirIndicateurData.pending, state=>{
                state.loading=true
                console.log("data pending");
            })
            builder.addCase(DirIndicateurData.fulfilled,(state,action)=>{
                state.loading=false
                state.datas= action.payload
                state.error=''
                console.log("data succesfull loaded");
            })
            builder.addCase(DirIndicateurData.rejected,(state,action)=>{
                state.error=false
                state.datas={}
                state.error=action.error.message
                console.log("an error occured");
            })
    }
})

