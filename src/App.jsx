import { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm.jsx";
import NavBar from "./NavBar.jsx";

import AllHotels from "./AllHotels.jsx"

import Cities from './Cities.jsx';
import Restaurants from "./restaurants.jsx";
import AllCourses from "./AllCourses.jsx";
import UserDetails from "./user-details.jsx";



function App(){

    return (
      <>
        <NavBar />
        <h1>Welcome to JetSetGolf</h1>

        
        <Routes>
          <Route path= '/' element ={<h1>home</h1>} />
          <Route path= '/login' element ={<LoginForm />} />
          <Route path= '/hotels' element ={<AllHotels />} />
          <Route path= '/locations' element ={<Cities />} />
          <Route path= '/courses' element ={<AllCourses />} />
          <Route path= '/account' element ={<UserDetails />} />
          <Route path= '/restaurants' element ={<Restaurants />} />
        </Routes>

      </>
    );
  };
export default App;
