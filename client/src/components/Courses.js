import axios from 'axios';
import { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     changePath('/courses')
    // });


    useEffect(() => {
        // let the app know that data is loading
        // setLoading(true);
        axios
          .get(`http://localhost:5000/api/courses`)
          .then((response) => {
            setCourses(response.data);
            // setLoading(false);
          })
          .catch((error)=> {
            console.log(`Error fetch and parsing the data`, error);
          });
      }, []);
    

    

    let listCourses;
    // Create course list if data is not empty
    if (courses) {
        listCourses = courses.map( course => 
            <a className="course--module course--link" href={'/courses/' + course.id} key={course.id}>
                <h2 className="course--label">Course</h2>
                <h3 className="course--title">{course.title}</h3>
            </a>
        )
    } else {
        listCourses = <h2>Sorry no courses</h2>
    }
        
    return (
        <div className="wrap main--grid">
            {listCourses}
            <a className="course--module course--add--module" href= '<CreateCourse /> '>
                <span className="course--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                    New Course
                </span>
            </a>
        </div>
    );

}



export default Courses;