import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
         try {
            const fetchHotels = async () => {
            const response = await fetch(
              '/api/v1/courses'
            );
            const data = await response.json();
            setCourses(data);
          } 
          fetchHotels();
        }catch(err){
            console.error(err);
        };
      }, []);

      if (courses.length === 0) {
        return <p>No hotels to show...</p>;
      }
      return (
        <>
        <h1> All Courses </h1>
      <div id="courses">
      <ul>{courses.map((singleCourse) => {
        return (
          <li key={singleCourse.id} className="book-card">
            
            <h3>{singleCourse.name}</h3>
            <h3>{singleCourse.address}</h3>
            <h3>Length of Course: {singleCourse.course_length}</h3>
            
          </li>
        );
      })}
      </ul>
      </div>
        
        </>
      );
}
export default AllCourses;