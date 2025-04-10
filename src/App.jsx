import { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom';
import LoginForm from "./LoginForm.jsx";
import NavBar from "./NavBar.jsx";
<<<<<<< HEAD
import AllHotels from "./AllHotels.jsx"
=======
import Cities from './Cities.jsx';
import Restaurants from "./restaurants.jsx";
>>>>>>> 8f51950946a26d045adff5b0ca2053b23c4aa9a9


function App(){

    return (
      <>
        <NavBar />
        <h1>Welcome to JetSetGolf</h1>

        
        <Routes>
          <Route path= '/hotels' element ={<AllHotels />} />
          {/* <Route path= '/hotels/:id' element ={<Hotel />} /> */}
          <Route path= '/login' element ={<LoginForm />} />
          <Route path= '/locations' element ={<Cities />} />
          <Route path= '/courses' element ={<h1>Courses</h1>} />
          <Route path= '/account' element ={<h1>Account</h1>} />
          <Route path= '/restaurants' element ={<Restaurants />} />
        </Routes>

      </>
    );
  };
export default App;
