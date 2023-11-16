import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState();
    console.log(id)
    

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/courses/${id}`)
          .then((response) => {
            setCourse(response.data);
          })
          .catch((error)=> {
            console.log(`Error fetch and parsing the data`, error);
          });
      }, [id]);

    if (course) {
        console.log(course)
        // Turn list of materials into li list without empty rows
        let listMaterials;
        if (course.materialsNeeded){
            listMaterials = course.materialsNeeded.split("* ").filter(Boolean).map( item => <li>{item}</li>);

        } else {
            listMaterials = <li>Ask instructor</li>
        }
        return (
            <>
                <div className="actions--bar">
                    <div className="wrap">
                        <a className="button" href="update-course.html">Update Course</a>
                        <a className="button" href="#">Delete Course</a>
                        <a className="button button-secondary" href="/">Return to List</a>
                    </div>
                </div>
                
                <div className="wrap">
                    <h2>Course Detail</h2>
                    <form>
                        <div className="main--flex">
                            <div>
                                <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                                <p>By {course.User.firstName} {course.User.lastName}</p>

                                <p>{course.description}</p>
                            </div>
                            <div>
                                <h3 className="course--detail--title">Estimated Time</h3>
                                <p>{course.estimatedTime || 'Ask instructor'}</p>

                                <h3 className="course--detail--title">Materials Needed</h3>
                                <ul className="course--detail--list">
                                    {listMaterials}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

            </>
        );

    } else {
        <h2>No course details</h2>
    }

}

export default CourseDetail;