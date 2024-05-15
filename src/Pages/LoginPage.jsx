import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import '../Pages/loginstyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAction, loginAction } from '../Redux/Slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

  const LoginPage = () => {
    const [islogging,change]=useState(true);
    const togglelogin=()=>{
      change(!islogging);
    }
    const navigate=useNavigate();
    const user=useSelector(state=>state.user.user);
    const [newuser,setuser]=useState({username:"",password:""});
    
    const dispatch=useDispatch();
    const register=()=>{
      dispatch(RegisterAction(newuser))
    }
    const login = () => {
         dispatch(loginAction(newuser));
    };
    useEffect(()=>{
        if(user.username){
            {navigate(`/movies`)}
        }
    },[login])


   
    if(islogging){
      return (
        <div className=' m-0'>      
        <MDBContainer className=" gradient-form text-white">
          <MDBRow>
            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column ms-5 mt-5">
    
                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1">Login</h4>
                </div>
    
                <p>Please login to your account</p>
    
    
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' value={newuser.username} type='email' onChange={(e)=>setuser({...newuser,username:e.target.value})}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='text' value={newuser.password} onChange={(e)=>setuser({...newuser,password:e.target.value})}/>
    
    
                <div className="text-center pt-1 mb-5 pb-1">
                  <button className=" w-100 gradient-custom-2 text-white" value={newuser.password} style={{height:'50px'}} onClick={login}>Sign in</button>
                
                </div>
    
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <button  className='m-2 p-2 gradient-custom-2 text-white'  onClick={togglelogin}>
                  Register
                  </button>
                </div>
    
              </div>
    
            </MDBCol>
    
            <MDBCol col='6' className="m-5">
            
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-center">
              <img id="logo" src="./logo.gif"
                        style={{ width: '150px' }} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1 text-white">Movie App</h4>
                </div>
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Enjoy Your time </h4>
                  <p class="small mb-0">Movies app starts off with a list of movies from the cloud sorted based on the most popular filter. Users can change filters (most popular, most rated, favorites and language preferred).
                  </p>
                </div>
    
              </div>
    
            </MDBCol>
    
          </MDBRow>
    
        </MDBContainer>
        </div>
      );
    }else{

      return (
        <div className=' m-0'>      
        <MDBContainer className=" gradient-form text-white">
          <MDBRow>
            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column ms-5 mt-5">
    
                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1">Register</h4>
                </div>
    
                <p>Please Register</p>
    
    
                <MDBInput wrapperClass='m-1' label='name' id='form1' value={newuser.email} type='name' onChange={(e)=>setuser({...newuser,username:e.target.value})}/>
                <MDBInput wrapperClass='m-1' label='Password' id='form2' type='text' value={newuser.password} onChange={(e)=>setuser({...newuser,password:e.target.value})}/>
                <MDBInput wrapperClass='m-1' label='Age' id='form2' type='text'  />
                <MDBInput wrapperClass='m-1' label='phone' id='form2' type='text'/>
    
    
                <div className="text-center pt-1 mb-5 pb-1">
                  <button className=" w-100 gradient-custom-2 text-white" value={newuser.password} style={{height:'50px'}} onClick={register}>Sign Up</button>
                
                </div>
    
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 ">
                  <p className="mb-0">have an account?</p>
                  <button  className='m-2 p-2 gradient-custom-2 text-white'  onClick={togglelogin}>
                  Sign In
                  </button>
                </div>
    
              </div>
    
            </MDBCol>
    
            <MDBCol col='6' className="m-5">
            
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-75 mb-4">
              <div className="text-center">
              <img id="logo" src="./logo.gif"
                        style={{ width: '150px' }} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1 text-white">Movie App</h4>
                </div>
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Enjoy Your time </h4>
                  <p class="small mb-0">Movies app starts off with a list of movies from the cloud sorted based on the most popular filter. Users can change filters (most popular, most rated, favorites and language preferred).
                  </p>
                </div>
    
              </div>
    
            </MDBCol>
    
          </MDBRow>
    
        </MDBContainer>
        </div>
      );
    }


}

export default LoginPage;
