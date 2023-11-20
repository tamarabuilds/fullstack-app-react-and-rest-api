import { useEffect, useState } from "react";
import { api } from '../utils/apiHelper'
import { useNavigate } from "react-router-dom";

/**
 * Provides the list of courses from the REST API's /api/courses route.
 * Each course links to its respective "Course Detail" screen.
 * 
 * Also renders a "Create Course" button
 * @returns Courses component
 */

const Courses = () => {
    const [courses, setCourses] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api('/courses', 'GET')
                const json = await response.json();
                if (response.status === 200) {
                    setCourses(json)
                } else if (response.status === 500) {
                    navigate(`/error`);
                }
            } catch (error) {
                console.log(`Error fetching and parsing the data`, error)
                navigate('/error');
            }
        }

        fetchData();
    },[navigate]);
   

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
            <a className="course--module course--add--module" href= '/courses/create'>
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