
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const favouritesAction=createAsyncThunk("favs/getAll",async(id)=>{
    const res=await axios.get("http://localhost:300/results")
  
    return res.data.filter((user)=>user.userId===id);
})

export const addFavouritesAction = createAsyncThunk(
    "favs/add",
    async (movie) => {
      const res = await axios.post(`http://localhost:300/results`, movie);

      return res.data;
    }
  );

  export const deleteFavouritesAction = createAsyncThunk(
    "favs/delete",
    async (id,userId) => {
      const res = await axios.delete(`http://localhost:300/results/${id}?userId=${userId}`);
      return res.data;
    }
  );


const favSlice=createSlice({
    name:"favs",
    initialState:{favs:[]},
    extraReducers:(builder)=>{
        builder.addCase(favouritesAction.fulfilled,(state,action)=>{
            state.favs=action.payload;
        });
        builder.addCase(addFavouritesAction.fulfilled,(state,action)=>{
            
        });
        builder.addCase(deleteFavouritesAction.fulfilled,(state,action)=>{
            state.favs.filter((item)=>item.id!=action.payload.id)
        });

    }
});
export default favSlice.reducer