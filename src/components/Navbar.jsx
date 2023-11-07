import React from "react"
import { Link } from 'react-router-dom';
import logoutUser from "./logout";

export default function Navbar({userAuthenticated, setUserAuthenticated}){
    
    return(
    <nav>
        <ul>
        {userAuthenticated ?(
                    <>
                    <li><Link to="/todo">My List</Link></li>
                    <li><Link onClick={()=>logoutUser(setUserAuthenticated)} to="/login">Logout</Link></li>
                    </>
                ) : (
                    <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link  to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    </>
                )}
        </ul>
    </nav>
    )
}