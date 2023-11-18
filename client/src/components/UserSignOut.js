import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import UserContext from "./context/UserContext";

const UserSignOut = () => {
    const { actions } = useContext(UserContext);

    useEffect( () => actions.signOut());

    // Navigate to the root route and replace will replace sign out route in the history stack with the root route
    // This will prevent a navigate loop if user tried to navigate history stack with the browser's back button
    return <Navigate to='/' replace />
};

export default UserSignOut;