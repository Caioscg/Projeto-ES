import { Container } from "./styles";

import logo_no_brand from "../../assets/logo-no-brand.png"

import { FiLogOut } from "react-icons/fi"

export function Header() {
    return(
        <Container>
            <img src={logo_no_brand} alt="Logo da UFG organized" />

            <div>
                <span>Bem vindo, Caio!</span>
                <FiLogOut size={32}/>
            </div>
        </Container>
    )
}