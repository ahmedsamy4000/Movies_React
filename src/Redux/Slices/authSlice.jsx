import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginAction=createAsyncThunk("user/auth",async(newuser)=>{
    const res=await axios.get("http://localhost:100/results")
    console.log("hey",newuser);
    const user=res.data.find((user)=>user.username===newuser.username && user.password===newuser.password);
    if(user){
        return user;
    }else{
        return {};
    }
    
})

export const RegisterAction=createAsyncThunk("user/register",async(newuser)=>{

        const res=await axios.post("http://localhost:100/results",newuser)
        console.log("hey",newuser);
        return res.data;
  
})

export const SignoutAction=createAsyncThunk("user/signout",async(newuser)=>{
    newuser={}
    return newuser;

})



const authSlice=createSlice({
    name:"user",
    initialState:{user:{}},
    extraReducers:(builder)=>{
        builder.addCase(loginAction.fulfilled,(state,action)=>{
            state.user=action.payload;
            console.log("hey",state.user);
            if(!state.user.username){
                console.log(state.user.username)
                alert("incorrect");
            }
        });
        builder.addCase(RegisterAction.fulfilled,(state,action)=>{
            alert("registered succesfully");
        })
        builder.addCase(SignoutAction.fulfilled,(state,action)=>{
            state.user=action.payload;
        })
    }
})


export default  authSlice.reducer;