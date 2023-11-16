import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {

    const signIn = async (credentials) => {
        console.log(`in signIn()`)
        console.log(credentials)
    }

    return (
        <UserContext.Provider value={{
            actions: {
                signIn
            }
        }}>
            {props.children}
        </UserContext.Provider>

    );
};

export default UserContext;