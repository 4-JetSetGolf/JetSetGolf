import { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom'
import LoginForm from "./LoginForm.jsx";
import NavBar from "./NavBar.jsx";
import AllHotels from "./components/AllHotels.jsx"


function App() {

    return (
      <>
        <NavBar />
        <h1>Welcome to JetSetGolf</h1>

        
        <Routes>
          <Route path= '/hotels' element ={<AllHotels />} />
          {/* <Route path= '/hotels/:id' element ={<Hotel />} /> */}
          <Route path= '/login' element ={<LoginForm />} />
          <Route path= '/cities' element ={<h1>Cities</h1>} />
          <Route path= '/courses' element ={<h1>Courses</h1>} />
          <Route path= '/account' element ={<h1>Account</h1>} />
        
        </Routes>

      </>
    );
  };

export default App;
