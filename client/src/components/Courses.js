import { useEffect } from "react";

const Courses = ({data, changePath}) => {

    useEffect(() => {
        changePath('/courses')
    },[]);

    let listCourses;
    // Create course list if data is not empty
    if (data.length > 0) {
        listCourses = data.map( course => 
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