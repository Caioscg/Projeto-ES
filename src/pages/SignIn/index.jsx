import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logo from "../../assets/logo.png"

import { FiUser, FiLock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [ loading, setLoading ] = useState(false)

    const { signIn } = useAuth()

    function handleSignIn() {
        setLoading(true)

        signIn({ login, password })

        setLoading(false)
    }

    return(
        <Container>
            <img src={logo} alt="Logo da UFG organized" />
            <Form>
                <h1>Autenticação UFG</h1>

                <div className="inputs">
                        <label htmlFor="login">Login Único*</label>
                        <Input 
                            placeholder="Insira seu Login da UFG" 
                            icon={FiUser} 
                            type="text" 
                            id="login"
                            onChange={e => setLogin(e.target.value)}
                        />

                        <label htmlFor="password">Senha*</label>
                        <Input 
                            placeholder="Insira sua senha" 
                            icon={FiLock} 
                            type="password" 
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                </div>

                <Button title="Entrar" onClick={handleSignIn}/>

            </Form>
        </Container>
    )
}