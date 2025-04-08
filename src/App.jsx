import { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm.jsx";
import NavBar from "./NavBar.jsx";
import Cities from './Cities.jsx';
import Courses from './Courses.jsx';
import CityDetails from "./CityDetails.jsx";


function App(){

    return (
      <>
        <NavBar />
        <h1>Welcome to JetSetGolf</h1>

        
        <Routes>
          <Route path= '/' element ={<h1>home</h1>} />
          <Route path= '/login' element ={<LoginForm />} />
          <Route path= '/locations' element ={<Cities/>} />
          <Route path= '/courses' element ={<Courses />} />
          <Route path= '/account' element ={<h1>Account</h1>} />
          <Route path= '/details/:cityId' element= {<CityDetails/>} />
        </Routes>

      </>
    );
  };
 //need server route for /details/:cityId
export default App;
