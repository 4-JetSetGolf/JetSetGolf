import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Course = (props) => {
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState({});
    console.log(singleCourse);

    useEffect(() => {
        const fetchSingleCourse = async () => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/v1/courses/${id}`
            );
            const data = await response.json();
            setSingleCourse(data.Course);
          } catch (err) {
            console.error(err);
          }
        };
        fetchSingleCourse();
      }, []);
      if (singleCourse.length === 0) {
        return <p>No Courses to show...</p>;
      }
    
    return(
        <>
        <h2>Course</h2>

        {
        //condition    ? what to do if the condition is true : what to do if condition is false
        id ? <h2>Name: { singleCourse.name }</h2> : null
        }
        
        
        </>
        
    )
}

export default Course;