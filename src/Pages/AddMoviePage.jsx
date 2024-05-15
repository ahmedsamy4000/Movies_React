
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMovieContext } from '../Contexts/MoviesContext';

function AddMoviePage() {
  const {addMovie}=useMovieContext();
  const [id,setId]=useState("");
  const [title,setTitle]=useState("");
  const [count,setCount]=useState("");
 
  const handleSubmit=()=>{

    addMovie(
      {
        "id": id.toString(),
        "adult": false,
        "backdrop_path": "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "original_language": "en",
        "original_title": "Godzilla x Kong: The New Empire",
        "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
        "popularity": 2119.822,
        "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
        "release_date": "2024-03-27",
        "title":title,
        "video": false,
        "vote_average": 6.6,
        "vote_count": count.toString()
    })
    setId('');
    setTitle('');
    setCount('');
  }
  return (
    <div className='w-50 m-auto'>
    <Form>
    <Form.Group className="mb-3 text-white" controlId="formBasicId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" placeholder="Enter Id" value={id} onChange={(e)=>setId(e.target.value)} />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicCount">
        <Form.Label>Count</Form.Label>
        <Form.Control type="text" placeholder="Count" value={count} onChange={(e)=>setCount(e.target.value)} />
      </Form.Group>
      
      <Button className='w-100' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default AddMoviePage;