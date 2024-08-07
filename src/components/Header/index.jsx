import { Container } from "./styles";

import logo_no_brand from "../../assets/logo-no-brand.png"

import { FiLogOut } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    function handleNavigateHome() {
        navigate("/")
    }

    return(
        <Container>
            <img src={logo_no_brand} alt="Logo da UFG organized" onClick={handleNavigateHome}/>

            <div>
                <span>Bem vindo, {user.name}!</span>
                <FiLogOut size={32} onClick={handleSignOut}/>
            </div>
        </Container>
    )
}