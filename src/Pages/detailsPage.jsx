import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieContext } from '../Contexts/MoviesContext';
import "./details.css"

export default function DetailedPage() {
  const navigate = useNavigate();
  const { getMovieById, foundedMovie, findMovie } = useMovieContext();
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id);
    return () => {
      findMovie({})
    }
  }, []);
  console.log(foundedMovie);
  if (!foundedMovie) {
    return (<div><h1>Loading..</h1></div>)
  } else {
    return (
      <div className='d-flex w-100 m-auto justify-content-center align-items-center vh-100'>

        <div className='row w-100'>
          <div className='col-6' id="side1">
            <img id="detailedimage" src={`https://image.tmdb.org/t/p/w500/${foundedMovie.backdrop_path}`}></img>
          </div>
          <div className='col-6' id="side 2">
            <h1 id="detailedtitle">{foundedMovie.title}</h1>
            <p id="detailedoverview">{foundedMovie.overview}</p>
            <div className='row w-100'>
             
              <div className='col-3'>
                <Button className='btn w-100 p-3 rounded-5'
                  variant="solid"
                  size="large"
                  color="red"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg><div className='p-2'> </div>DownLoad
                </Button>
              </div>
              <div className='col-3'>
                <Button className='btn w-100 p-3 rounded-5'
                  variant="solid"
                  size="large"
                  col
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg><div className='p-2'> </div> Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <Card sx={{ maxWidth: 800,height:600}} className='rounded-5'>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{objectFit:'cover'}}
            height="350"
            image={`https://image.tmdb.org/t/p/w500/${foundedMovie.backdrop_path}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {foundedMovie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {foundedMovie.overview}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className='w-100 bg-success text-white' onClick={()=>{navigate('/movies')}}>Back</Button>
          </CardActions>
        </Card>
     */}
      </div>

    );
  }


}
