import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../utils/apiHelper";

import UserContext from "./context/UserContext";

const CourseDetail = () => {
    const { authUser } = useContext(UserContext);
    const { id } = useParams();
    const [course, setCourse] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api(`/courses/${id}`, 'GET')
                const json = await response.json();
                if (response.status === 200) {
                    await setCourse(json);
                }
            } catch (error) {
                console.log(`Error fetching and parsing the data`, error)
            }
        }
        fetchData();
    }, [])

    // Event handler
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await api(`/courses/${id}`, 'DELETE', null, authUser);
        console.log(response)
        if (response.status === 204) {
            console.log(`204 status for handleDelete`)
            navigate(`/`)
        }
        try {
            console.log(`gonna delete`)
        } catch(error) {
            console.log(error)
        }

    }

    if (course) {
        // Turn list of materials into li list without empty rows
        let listMaterials;
        if (course.materialsNeeded){
            listMaterials = course.materialsNeeded.split("* ").filter(Boolean).map( (item, i) => <li key={i}>{item}</li>);

        } else {
            listMaterials = <li>Ask instructor</li>
        }

        return (
            <>
                <div className="actions--bar">
                    <div className="wrap">
                        { authUser.id === course.User.id  ?
                        <>
                        <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                        {/* <a className="button" href="#">Delete Course</a> */}
                        <a className="button" onClick={handleDelete}>Delete Course</a>
                        </>
                        :
                        null
                        }
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