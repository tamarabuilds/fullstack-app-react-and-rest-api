import { useContext, useRef, useState } from "react";
import { Link, useNavigate, useLocation} from 'react-router-dom'

const UserSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)


    // State
    const email = useRef(null);
    const password = useRef(null);
    const [ errors, setErrors ] = useState([]);

    // Event handlers
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`submit was hit`)

        // Redirect the user to their previous screen after successfully signing in 
        let from = '/'
        if (location.state) {
            from = location.state.from
        }

        // setting credentials from the useRef input fields
        const credentials = {
            email: email.current.value,
            password: password.current.value
        }

        try {

        } catch (error) {
            console.log(error);
            navigate('/error');
        }

    }

    const handleCancel = (event) => {
        event.preventDefault();
        // navigate back to root if user clicks 'cancel'
        navigate('/');
    }

    return (
        <div className="form--centered">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" ref={email} defaultValue="" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" ref={password} defaultValue="" />
                <button className="button" type="submit" >Sign In</button>
                <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
            </form>
        </div>
    );
};

export default UserSignIn;