import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../appComponent/App.css';
import NavBar from '../FunctionComponents/navbarComponent/navbar';
import MoviesComponent from '../FunctionComponents/moviesComponent/moviesComponent';
import FavouritesPage from '../Pages/FavouritesPage';
import AddMoviePage from '../Pages/AddMoviePage';
import AboutPage from '../Pages/AboutPage';
import MoviesPage from '../Pages/MoviesPage';
import DetailsPage from '../Pages/detailsPage';
import UpdatePage from '../Pages/UpdatePage';
import WelcomePage from '../Pages/Welcome';
import MoviesContextProvider from '../Contexts/MoviesContext';
import { Provider } from 'react-redux';
import store from '../Redux/Store/store';
import LoginPage from '../Pages/LoginPage';
import ProfilePage from '../Pages/ProfilePage';

function App() {
  return (
    <MoviesContextProvider>
    {/* <div className='pagee'>
    <div className='backGround'> */}



    <div id="video-container">
      <video id="video-background" autoPlay muted loop>
        <source src="/myvid.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div id="video-caption">
        Your Video Caption Here
      </div>
    </div>
      <BrowserRouter>
      <Provider store={store}>
      <NavBar></NavBar>
            <Routes>
            <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
              <Route path="/movies" element={<MoviesPage />}>
                <Route index element={<MoviesComponent></MoviesComponent>}></Route>
                <Route path='add' element={<AddMoviePage/>}></Route>
                <Route path='details/:id' element={<DetailsPage></DetailsPage>}></Route>
                <Route path='update/:id' element={<UpdatePage></UpdatePage>}></Route>
              </Route>
              <Route path='profile' element={<ProfilePage></ProfilePage>}></Route>
              <Route path='login' element={<LoginPage></LoginPage>}></Route>
              <Route path="favourites" element={<FavouritesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<h1>Error</h1>} />
            </Routes>
      </Provider>
      
          </BrowserRouter>
    {/* </div>
    </div> */}
    </MoviesContextProvider>
   
  );
}

export default App;
