import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet} from "react-router-dom";



export default function Layout({userAuthenticated, setUserAuthenticated}){

    
    return(
        <div>
            <Navbar userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} />
            <Outlet />  
            <Footer />
        </div>
    )
}