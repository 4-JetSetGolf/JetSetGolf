import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import NavBar from "./NavBar.jsx";

import AllHotels from "./AllHotels.jsx";

import Cities from "./Cities.jsx";
import Restaurants from "./restaurants.jsx";
import AllCourses from "./AllCourses.jsx";
import UserDetails from "./user-details.jsx";


import "./Styles.css";


function App() {
  return (
    <>
      <NavBar />
      <h1>Welcome to JetSetGolf</h1>

      <Routes>
        <Route path="/" element={<img id="logo" src="src/logo_2.png" alt="logo"/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/hotels" element={<AllHotels />} />
        <Route path="/locations" element={<Cities />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/account" element={<UserDetails/>} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>

      <div className="interactive-bg">
        <div className="grass" style={{ left: "20%" }}></div>
        <div className="grass" style={{ left: "40%" }}></div>
        <div className="grass" style={{ left: "60%" }}></div>
        <div className="grass" style={{ left: "80%" }}></div>
        <div className="golf-ball"></div>
      </div>
    </>
  );
}

export default App;
