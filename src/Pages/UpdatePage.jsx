
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMovieContext } from '../Contexts/MoviesContext';
import { useParams } from 'react-router-dom';

function UpdateMoviePage() {

    const {getMovieById,foundedMovie,findMovie,updateMovie}=useMovieContext();
    const {id}=useParams();

    useEffect(()=>{
        getMovieById(id);
        return ()=>{
          findMovie({})
        }
    },[]);

    useEffect(() => {
        if (foundedMovie) {
            setTitle(foundedMovie.title || "");
            setCount(foundedMovie.vote_count || "")
            setOverview(foundedMovie.overview || "");
        }
    }, [foundedMovie]);


    const [title,setTitle]=useState("");
    const [count,setCount]=useState("");
    const [overview,setOverview]=useState("");







  const handleSubmit=()=>{
    if(title!==""&&overview!==""&&count!==""){
        updateMovie(
            {
              "id": id,
              "adult": false,
              "backdrop_path": foundedMovie.backdrop_path,
              "genre_ids": [
                  28,
                  878,
                  12
              ],
              "original_language": "en",
              "original_title": "Godzilla x Kong: The New Empire",
              "overview": overview,
              "popularity": 2119.822,
              "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
              "release_date": "2024-03-27",
              "title":title,
              "video": false,
              "vote_average": 6.6,
              "vote_count": count
          },id);

          
    }

   
  }
  
if(!foundedMovie){return (<div> <h1> loading...</h1></div>)}else{
    
}
  return (
    <div className='w-50 m-auto'>
    <Form>
    <Form.Group className="mb-3 text-white" controlId="formBasicId">
        <Form.Label>overview</Form.Label>
        <Form.Control type="text" placeholder="OverView" value={overview} onChange={(e)=>setOverview(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicCount">
        <Form.Label>Count</Form.Label>
        <Form.Control type="text" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)} />
      </Form.Group>
      
      <Button className='w-100' onClick={handleSubmit}>
        Save
      </Button>
    </Form>
    </div>
    
  );
}


export default UpdateMoviePage;