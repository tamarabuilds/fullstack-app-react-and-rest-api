import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../utils/apiHelper";

import ErrorsDisplay from "./ErrorsDisplay";
import UserContext from "./context/UserContext";

const CreateCourse = () => {
    const { authUser } = useContext(UserContext);
    const navigate = useNavigate();

    // State
    const title = useRef(null);
    const description = useRef(null);
    const estimatedTime = useRef(null);
    const materialsNeeded = useRef(null);
    const [errors, setErrors] = useState([]);

    // Event handlers
    const handleSubmit = async (event) => {
        event.preventDefault();

        const course = {
            title: title.current.value,
            description: description.current.value,
            estimatedTime: estimatedTime.current.value,
            materialsNeeded: materialsNeeded.current.value,
        };


        // to catch errors when using async/await, we need a try/catch block
        try {
            console.log(`we're in the try block`)
            const response = await api('/courses', 'POST', course, authUser);       
            console.log(response)
            if (response.status === 201){
                console.log(`201 status`)       // Need to be authenticated to post....
            } else if (response.status === 400){
                console.log(`400 status`)
                const data = await response.json();
                console.log(data)
                setErrors(data.errors)
            } else {
                throw new Error();
            }
            
        } catch (error) {
            console.log(error);
            navigate('/error');
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return (
        <div className="wrap">
            <h2>Create Course</h2>
            <ErrorsDisplay errors={errors} />
            <form onSubmit={handleSubmit}>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" ref={title} defaultValue="" />

                        <p>By Joe Smith</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" ref={description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" ref={estimatedTime} defaultValue="" />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" ref={materialsNeeded}></textarea>
                    </div>
                </div>
                <button className="button" type="submit">Create Course</button>
                <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default CreateCourse;