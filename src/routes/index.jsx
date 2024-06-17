import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { DirectorRoutes } from "./director.routes";
import { TeacherRoutes } from "./teacher.routes";

import { useAuth } from "../hooks/auth"

export function Routes() {
    const { user } = useAuth()

    return (
        <BrowserRouter>
            { !user ? <AuthRoutes /> : user.status==3 ? <DirectorRoutes /> : <TeacherRoutes /> } 
        </BrowserRouter>
    )
}