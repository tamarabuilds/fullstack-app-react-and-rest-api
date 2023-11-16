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

    return (
        <div className="form--centered">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" ref={email} value="" />
                <label for="password">Password</label>
                <input id="password" name="password" type="password" ref={password} value="" />
                <button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
        </div>
    );
};

export default UserSignIn;