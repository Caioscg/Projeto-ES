import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import LogoUFG from "../../assets/LogoUFG.png"

import { FiUser, FiLock } from "react-icons/fi"

export function SignIn() {
    return(
        <Container>
            <img src={LogoUFG} alt="Logo da UFG" />
            <Form>
                <h1>Autenticação UFG</h1>

                <div className="inputs">
                        <label htmlFor="">Login Único*</label>
                        <Input placeholder="Insira seu Login da UFG" icon={FiUser} type="text"/>

                        <label htmlFor="">Senha*</label>
                        <Input placeholder="Insira sua senha" icon={FiLock} type="password"/>
                </div>

                <Button title="Entrar"/>

            </Form>
        </Container>
    )
}