import { useContext, useRef, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { api } from '../utils/apiHelper';

import UserContext from "./context/UserContext";

const UserSignUp = () => {
    const { actions } = useContext(UserContext);
    const navigate = useNavigate();

    // State
    const name = useRef(null);
    const emailAddress = useRef(null);
    const password = useRef(null);
    const [ errors, setErrors ] = useState([]);

    return (
        <div class="form--centered">
                <h2>Sign Up</h2>
                
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" defaultValue="" />
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" defaultValue="" />
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" defaultValue="" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" defaultValue="" />
                    <button className="button" type="submit">Sign Up</button>
                    <button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
    );
};

export default UserSignUp;