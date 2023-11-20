import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import UserContext from "./context/UserContext";

const PrivateRoute = () => {
    const { authUser } = useContext(UserContext);
    const location = useLocation();
    console.log(`in private route`)

    if (authUser) {
        return <Outlet />
    } else {
        // can saave the location of where the user tried to naviage to in the state property
        return <Navigate to='/signin' state={{from: location.path}} />
    }

};

export default PrivateRoute;