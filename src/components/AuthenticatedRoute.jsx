import { Navigate } from "react-router-dom";
import isAuthenticated from "./auth";

export default function AuthenticatedRoute({children}){
    if (isAuthenticated()) {
        return children
    }else return <Navigate to={'/login'} replace/>
}