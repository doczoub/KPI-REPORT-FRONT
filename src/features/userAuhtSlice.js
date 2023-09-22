import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";


const initialState ={
    loading:false,
    users:{},
    error:'',
    isSuccess:false,
    message:""
} 

export const auth = createAsyncThunk("authLogin/userLogin", async(user,thunkApi)=>{

    
    try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/signin",
      {nomuser:user.nomuser,
        motpass: user.motpass
    }
    );
    return response.data
    } catch (error) {
        if (error.response) {
            const message =error.response.data.msg;
            console.log(message);
            return thunkApi.rejectWithValue(message);
        }

    }
})

export const logout = createAsyncThunk("authentification/logout", async () => {
    await localStorage.removeItem("user");
  });

export const userAuthSlice = createSlice({
    name :"authLogin",
    initialState,
    
    reducers:{
        reset :(state)=>initialState

    },

    extraReducers:builder =>{
            builder.addCase(auth.pending, state=>{
                state.loading=true;
                console.log("data pending");
            })
            builder.addCase(auth.fulfilled,(state,action)=>{
                state.loading=false;
                state.isSuccess=true;
                state.users= action.payload
                state.error=''
            })
            builder.addCase(auth.rejected,(state,action)=>{
                state.error=false
                state.message=action.payload
                state.users={}
                state.error=action.error.message
            })
    }
})


export const {reset}=userAuthSlice.actions;
export default userAuthSlice.reducer;
