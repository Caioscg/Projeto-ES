import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { DirectorRoutes } from "./director.routes";

import { useAuth } from "../hooks/auth"

export function Routes() {
    const { user } = useAuth()

    return (
        <BrowserRouter>
            { user ? <DirectorRoutes /> : <AuthRoutes /> } 
        </BrowserRouter>
    )
}