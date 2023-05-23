import { Link } from "react-router-dom";
import PrivateNavItems from "./PrivateNavItems";

import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate} from "react-router-dom";
import PublicNavItems from "./PublicNavItems";

export default function NavMenu() {
    const { user } = useAuthContext()


    if(user){

    return (
        <div className="side-inner">

            <div className="profile">
                <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                <h3 className="name">{user.username}</h3>
                <span className="country">Bot User</span>
            </div>


            <div className="nav-menu">
                <ul>

                    <PrivateNavItems />
                    <PublicNavItems/>
                    <li><Link to="/about"> <span className="icon-sign-out mr-3"></span>About</Link></li>
                    <li><Link to={`${user.username}`}> <span className="icon-sign-out mr-3"></span>Upload</Link></li>
                    <li><Link to={`${user.username}/profile`}> <span className="icon-sign-out mr-3"></span>Profile</Link></li>

                    <li><Link to="/signup"> <span className="icon-sign-out mr-3"></span>Sign UP</Link></li>
                    <li><Link to="/logout"> <span className="icon-sign-out mr-3"></span>Sign out</Link></li>
                </ul>
            </div>

        </div>


    )}
    return  <Navigate to="/signup" replace={true} />

}