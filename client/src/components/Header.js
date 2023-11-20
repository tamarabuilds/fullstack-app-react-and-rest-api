import { useContext } from "react";
import UserContext from "./context/UserContext";

/**
 * Displays top menu bar for the application.
 * 
 * Includes sign in and sign up buttons if no one is authenticated.
 * Includes user's name and sign out button if there's authenticated user.
 * 
 * @returns Header display component
 */

const Header = () => {
    const { authUser } = useContext(UserContext);

    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Courses</a></h1>
                <nav>
                    <ul className="header--signedout">
                    { authUser === null ?
                    <>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/signin">Sign In</a></li>
                    </>
                    :
                    <>
                        <span>Welcome {authUser.firstName}</span>
                        <li><a href="/signout">Sign Out</a></li>
                    </>
                    }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;