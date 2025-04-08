import { useEffect, useState } from "react";

const Courses = () => {
  const [ golfCourses, setGolfCourses ] = useState([]);

 useEffect(()=>{
  try{
    const getCourses = async()=>{
      const response = await fetch('/api/v1/courses');
      const allCourses = await response.json();
      console.log(allCourses)
      setGolfCourses(allCourses);
    }
    getCourses();
  }catch(err){
    console.log(err)
  };
 },[]);

//  const getGolfCourseDetails = async()=>{

//  maybe in separate file with props};

  return(
    <>
      <ul>
        {golfCourses.map((singleGolfCourse) =>{
          return(
            <li key={singleGolfCourse.id} onClick= {()=>{getGolfCourseDetails(singleGolfCourse.id)}}>
              {singleGolfCourse.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Courses;