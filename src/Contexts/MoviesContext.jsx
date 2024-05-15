import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import React from 'react';


const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};




const MoviesContextProvider = ({children}) => {
    const [movies,setMovies]=useState([]);
    const getData=()=>{
        axios.get("http://localhost:500/results").then((res)=>{
        
            setMovies(res.data);
            });
            
    }
    const [foundedMovie,findMovie]=useState({});
    const getMovieById=(id)=>{
        axios.get(`http://localhost:500/results/${id}`).then((res)=>{
           findMovie(res.data);
            });
            
    }
    useEffect(getData
       ,[]);


    const addMovie=(newUser)=>{
        axios.post("http://localhost:500/results",newUser).then((res)=>{
            console.log("Data Added");
            getData();
        }).catch((error)=>{
            console.log(error);
        })
    }

    const updateMovie=(movie,id)=>{
        axios.put(`http://localhost:500/results/${id}`,movie).then((res)=>{
            console.log("Data Updated");
            getData();
        }).catch((error)=>{
            console.log(error);
        })
    }
    const deleteMovie=(id)=>{
        axios.delete(`http://localhost:500/results/${id}`).then((res)=>{
            console.log("Movie Deleted");
            getData();
        }).catch((error)=>{
            console.log(error);
        })
    }
    const obj=useMemo(()=>({addMovie,movies,deleteMovie,getMovieById,foundedMovie,findMovie,updateMovie}))
    return (
        <MovieContext.Provider value={obj}>{children}</MovieContext.Provider>
    );
}

export default MoviesContextProvider;
