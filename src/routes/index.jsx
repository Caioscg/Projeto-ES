import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { DirectorRoutes } from "./director.routes";

export function Routes() {
    //const { user } = useAuth()

    return (
        <BrowserRouter>
            { <DirectorRoutes /> } 
        </BrowserRouter>
    )
}