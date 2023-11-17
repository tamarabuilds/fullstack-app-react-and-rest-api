import { createContext, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "../../utils/apiHelper";

const UserContext = createContext(null);

export const UserProvider = (props) => {
    const cookie = Cookies.get('authenticatedUser');
    const password = Cookies.get('authenticatedPassword')
    const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);
    // const [authPassword, setAuthPassword] = useState(password ? JSON.parse(password) : null);

    const signIn = async (credentials) => {
        console.log(`in signIn()`)
        console.log(credentials)

        const response = await api('/users', 'GET', null, credentials);
        console.log(response)
        if (response.status === 200){
            const user = await response.json();
            setAuthUser(credentials.password);          // guessing here...
            // setAuthPassword(user);
            Cookies.set("authenticatedUser", JSON.stringify(user), {expires: 1})
            // Cookies.set("authenticatedPassword", JSON.stringify(password), {expires: 1})
            return user         // need to send password too?
        } else if (response.status === 401) {
            return null
        } else {
            throw new Error()
        }
    }

    const signOut = () => {
        setAuthUser(null);
        // setAuthPassword(null);
        Cookies.remove('authenticatedUser');
        // Cookies.remove('authenticatedPassword');
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