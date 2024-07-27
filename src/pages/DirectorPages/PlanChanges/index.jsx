import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate } from "react-router-dom";


export function PlanChanges() {
    const navigate = useNavigate();

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    return (
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Turmas" onClick={handleNavigateHome}/>
                    <Button title="Mensagens"/>
                    <Button title="Avaliação padronizada"/>
                    <Button title="Pesquisa de satisfação"/>
                </div>
            </Menu>

            <div className="head">
                <GoBack onClick={handleNavigateClass}/>
                <div className="title">
                    <h1>Sugerir mudanças no Plano de ensino</h1>
                </div>
            </div>

            <main>
                <textarea placeholder="Escreva aqui as mudanças sugeridas..."></textarea>

                <Button title="Enviar"/>
            </main>
        </Container>
    )
}