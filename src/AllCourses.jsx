import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchHotels = async () => {
          try {
            const response = await fetch(
              "http://localhost:3000/api/v1/courses"
            );
            const data = await response.json();
            setCourses(data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchHotels();
      }, []);
      if (courses.length === 0) {
        return <p>No hotels to show...</p>;
      }
      return (
        <>
        <h1> Courses </h1>
      <div id="courses">
      {courses.map((course) => {
        return (
          <article key={course.id} className="book-card" onClick={ () => navigate(`/courses/${course.id}`)}>
            
            <h3>{course.name}</h3>
            
            
            <p>{course.location_id}</p>
          </article>
        );
      })}
      </div>
        
        </>
      )
}
export default AllCourses;