import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useDispatch, useSelector } from 'react-redux';
import { SignoutAction } from '../Redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';
export default function ProfilePage() {
    const user=useSelector(state=>state.user.user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const signOut= async()=>{
      dispatch(SignoutAction(user));
      console.log("okaaay");
      
  }
  useEffect(()=>{
    if(!user.username){
      navigate('/movies');
    }
  },[user,dispatch]);
  console.log(user);
  return (
    <div className="vh-100" >
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol className='w-75 h-75' md="12" xl="4">
            <MDBCard className='w-100' style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center bg-dark text-white rounded-4">
                <div className="mt-3 mb-4">
                  <PersonPinIcon style={{width:'80px', height:'80px'}}></PersonPinIcon> 
                </div>
                <MDBTypography tag="h4">{user.username}</MDBTypography>
                <MDBCardText className=" mb-4 text-white">
                  @User <span className="mx-2">|</span> <a href="#!">MoviesApp.com</a>
                </MDBCardText>
               
                <button className='gradient-custom-2 p-3 text-white w-25' onClick={signOut}>
                  Sign Out
                </button>
                <div className="d-flex justify-content-around text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">10</MDBCardText>
                    <MDBCardText className="small  mb-0">Movies</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">26</MDBCardText>
                    <MDBCardText className="small mb-0">Likes</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">3</MDBCardText>
                    <MDBCardText className="small  mb-0">favourites</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}