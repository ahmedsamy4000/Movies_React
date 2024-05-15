import React from 'react';
import "../Pages/welcome.css";
import { Grow } from '@mui/material';

const WelcomePage = () => {
    return (
        <>
            <div id="mainDiv">
                <div className='row w-100 m-0'>
                <Grow in={true} timeout={350*6}>
                <div className='col-6'>
                <div id="welcome">Welcome To</div>
               <Grow in={true} timeout={350*7}><div id="description">Your gateway to endless cinematic adventures! Explore, discover, and indulge in the magic of movies on our platform.</div></Grow>
                </div>
                </Grow> 
                    <Grow in={true} timeout={350*9}>
                    <div className='col-6' id="side">
                    <img id="logo" src="./logo.gif"
                        style={{ width: '185px' }} alt="logo" />

                        <div id="appName">Watch</div>
                </div>
                    </Grow>
                     

                </div>
              
            </div>

        </>


    );
}

export default WelcomePage;
