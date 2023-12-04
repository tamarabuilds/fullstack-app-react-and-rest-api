import { createContext, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "../../utils/apiHelper";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

/**
 * Managing global state of the app with the React Context API
 * 
 * Authenticated user, user signin(), and user signout() are defined in the
 * <Provider> component and available throughout the application using Context API
 * <Consumer> components 
 * 
 * @param {object} props 
 * @returns Context API Provider component
 */

export const UserProvider = (props) => {
    const navigate = useNavigate();
    const cookie = Cookies.get('authenticatedUser');
    const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);

    const signIn = async (credentials) => {
        const response = await api('/users', 'GET', null, credentials);
        if (response.status === 200){
            const user = await response.json();
            // Store password with user object when creating, updating, or deleting with the api
            user.password = credentials.password;
            setAuthUser(user);
            // Store authenticated user in Cookies for 1 day
            Cookies.set("authenticatedUser", JSON.stringify(user), {expires: 1})
            return user
        } else if (response.status === 401) {
            return null
        } else if (response.status === 500) {
            navigate('/error')
        } else {
            throw new Error()
        }
    }

    const signOut = () => {
        setAuthUser(null);
        Cookies.remove('authenticatedUser');
    }

    return (
        <UserContext.Provider value={{
            authUser,
            actions: {
                signIn,
                signOut
            }
        }}>
            {props.children}
        </UserContext.Provider>

    );
};

export default UserContext;