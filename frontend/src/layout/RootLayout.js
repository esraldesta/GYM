import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../componets/navigation/Navigation";
import { useAuthContext } from "../hooks/useAuthContext";
import { Login } from "../pages/auth/Login";

export default function RootLayout() {

    return (
        <>
            {/* <Navigation/> */}
            
            {/* <main>
                <div className="site-section py-3">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-9">
                                <div className="row"> */}

                                    <Outlet/>

                                {/* </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main> */}

        </>
    )
}