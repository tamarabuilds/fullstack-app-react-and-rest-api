import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = ({ data, changePath }) => {
    const { id } = useParams();
    console.log(data)
    console.log(id)

    useEffect(() => {
        console.log(`CourseDetails useEffect with id: ${id}`)
        changePath(`/courses/`+ id)
    }, [id]);

    return (
        <>
            <div className="actions--bar">
                <div className="wrap">
                    <a className="button" href="update-course.html">Update Course</a>
                    <a className="button" href="#">Delete Course</a>
                    <a className="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>
            
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{data.title}</h4>
                            <p>By {data.User.firstName} {data.User.lastName}</p>

                            <p>{data.description}</p>
                        </div>
                        <div>
                            <h3 class="course--detail--title">Estimated Time</h3>
                            <p>{data.estimatedTime || 'A few'} hours</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <li>1/2 x 3/4 inch parting strip</li>
                                <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default CourseDetail;