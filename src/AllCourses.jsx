import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./course.css"


const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
         try {
            const fetchCourses = async () => {
            const response = await fetch(
              'http://localhost:3000/api/v1/courses'
            );
            const data = await response.json();
            console.log(data);
            setCourses(data);
          } 
          fetchCourses();
        }catch(err){
            console.error(err);
        };
      }, []);
console.log(courses);
return (
  <>
      <h1>Golf Courses</h1>
      <div id="courses">
          <ul>
              {courses &&
                  courses.map((singleCourse) => (
                      <li key={singleCourse.id} className="Golf-Course">
                          <h3>Name: {singleCourse.name}</h3>
                          <h3>Address: {singleCourse.address}</h3>
                          <h3>Length of Course: {singleCourse.course_length}</h3>
                      </li>
                  ))}
          </ul>
      </div>
  </>
);
}
export default AllCourses;