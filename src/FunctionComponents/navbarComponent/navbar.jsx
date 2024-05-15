import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const NavBar = () => {
  const favourites=useSelector(state=>state.favs.favs)
  const user=useSelector(state=>state.user.user)
  const navigate=useNavigate();
    const objtext={color:'white'};
    return (
        <nav  className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" style={objtext}>  <img id="logo" src="./logo.gif"
                        style={{ width: '30px' }} alt="logo" />Watch</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-evenly">
        <li className="nav-item">
          <Link className="nav-link active" style={objtext} aria-current="page" to="/movies">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={objtext} to="/favourites">Favourites {favourites.length}</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={objtext} to="/movies/add">AddMovie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={objtext} to="/about">About</Link>
        </li>
        <li className="nav-item text-white m-0">
          {user.username?(   
            <IconButton className='nav-item m-0 p-0' style={{fontSize:'15px'}} onClick={()=>{navigate('/profile')}}>
          <Link className="nav-link" style={objtext} to="/about">{user.username}</Link>
            <PersonPinIcon style={{color:'white'}}></PersonPinIcon>
            </IconButton> ):(
            <Link className="nav-link" style={{color:'white',width:'300px',textAlign:'end'}} to="/login">Login</Link>)}
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default NavBar;