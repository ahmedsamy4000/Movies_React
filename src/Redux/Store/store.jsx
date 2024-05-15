import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../Slices/FavouriteSlice"
import loginReducer from "../Slices/authSlice";

const store=configureStore({
    reducer:{
        favs:favouritesReducer,
        user:loginReducer
    }
});
export default store;