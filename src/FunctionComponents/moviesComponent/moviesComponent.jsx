import axios from 'axios'
import React, {useEffect, useState } from 'react'
import MovieComponent  from '../movieComponent/movieComponent'
import Grid from '@mui/material/Unstable_Grid2';
import '../moviesComponent/movies.css'
import Grow from '@mui/material/Grow';
import MoviesContextProvider, { useMovieContext } from '../../Contexts/MoviesContext';
import { useDispatch, useSelector } from 'react-redux';
import { favouritesAction } from '../../Redux/Slices/FavouriteSlice';





const MoviesComponent = () => {
  const favourites=useSelector(state=>state.favs.favs);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(favouritesAction("2"));
     
  },[dispatch]);
  console.log("favourites is ", favourites);
  const {movies}=useMovieContext();
  console.log(movies);
  
  if(!movies){
          return <div>Loading ....</div>
        }
        return (
          <div className='list'>
         <Grid container spacing={2}>

            {movies.map((item,index) =>
            <Grow in={true} timeout={350*index} key={item.id}>
              <Grid xs={4}>
  <MovieComponent  data={item}/>
  </Grid>
  </Grow> 
            )}
            </Grid>
          </div>
         
        );

        


      }


export default MoviesComponent;

