import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
    //const { user } = useAuth()

    return (
        <BrowserRouter>
            { <AuthRoutes /> } 
        </BrowserRouter>
    )
}