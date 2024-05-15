import React, { useEffect, useState } from 'react';
import '../FavouriteComponent/fav.css'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography'
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../Contexts/MoviesContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavouritesAction, favouritesAction } from '../../Redux/Slices/FavouriteSlice';




const FavouriteComponent = (props) => {
    let data=props.data;
    const dispatch=useDispatch();
 
    console.log(data);
    const favourites = useSelector(state => state.favourites);
    const handleDelete =  () => {
       dispatch(deleteFavouritesAction(data.id, "2")).then(()=>{dispatch(favouritesAction("2"))})

    }
    useEffect(() => {
    }, [dispatch]);
    const navigate=useNavigate();
    if(!data){
                    return <div>Loading.....</div>
                }
                
                    return (
                        <div className='main'>
                         <Card className='maincard'>
                          <div>
                            <label level="title-lg">{data.title}</label>
                            <Typography level="body-sm" className="typee">{data.release_date}</Typography>
                            <IconButton
                              aria-label="bookmark Bahamas Islands"
                              variant="plain"
                              color="neutral"
                              size="sm"
                              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                            >
                                   </IconButton>
                          </div>
                          <AspectRatio minHeight="120px" maxHeight="200px">
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                              loading="lazy"
                              alt=""
                            />
                          </AspectRatio>
                          <CardContent orientation="horizontal">
                            <div>
                              <Typography level="body-sm" className="typee">Count : {data.vote_count}</Typography>
                          
                            </div>
                            <Button className='btn'
                              variant="solid"
                              size="md"
                              color="red"
                              aria-label="Explore Bahamas Islands"
                              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                              onClick={()=>{navigate(`/movies/details/${data.id}`)}}
                            >
                              Watch
                            </Button>
                            <Button className='btn'
                              variant="solid"
                              size="md"
                              color="red"
                              aria-label="Explore Bahamas Islands"
                              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                              onClick={()=>{navigate(`/movies/update/${data.id}`)}}
                            >
                            
                              Edit
                            </Button>
                            <Button className='btn'
                              variant="solid"
                              size="md"
                              color="red"
                              aria-label="Explore Bahamas Islands"
                              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                              onClick={handleDelete}
                            
                            >
                              Delete
                            </Button>
                          </CardContent>
                        </Card>
                        </div>
                        
                       
                      );
                
                
}

export default FavouriteComponent;

