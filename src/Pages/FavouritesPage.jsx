import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favouritesAction } from '../Redux/Slices/FavouriteSlice';
import { Grid, Grow } from '@mui/material';
import MovieComponent from '../FunctionComponents/movieComponent/movieComponent';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FavouriteComponent from '../FunctionComponents/FavouriteComponent/FavouriteComponent';

const FavouritesPage = () => {
    const favourites=useSelector(state=>state.favs.favs);
    const user=useSelector(state=>state.user.user);
    const dispatch=useDispatch();
    // useEffect(()=>{
    //     dispatch(favouritesAction("2"));
    // },[dispatch]);
   console.log(favourites);

   if(favourites.length===0){
    return (<div>loading..</div>)
   }
    return (
        <div className='list'>
       <Grid container spacing={2}>

        {favourites.map((item,index)=>
            <Grow in={true} timeout={350*index} key={item.id}>
        <Grid item xs={3} key={item.id}>
            <FavouriteComponent data={item}></FavouriteComponent>
        </Grid>
       </Grow>
        )}
       {/* {favourites.filter(user=>user.userId===1).map((item,index)=>
       {
       <Grow in={true} timeout={350*index} key={item.userId}>
        <Grid xs={3}>
            <MovieComponent data={item}></MovieComponent>
        </Grid>
       </Grow>
       }
       
       )} */}
        {/* <Grow in={true} timeout={350*index} key={item.id}>
            <Grid xs={3}>
<MovieComponent  data={item} />
</Grid>
</Grow>  */}
       
          </Grid>
        </div>
       
      );
}

export default FavouritesPage;
