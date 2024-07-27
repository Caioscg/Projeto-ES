import { Container, Menu, Plan } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate } from "react-router-dom";

import { BsCursorFill } from "react-icons/bs"


export function Plans() {
    const navigate = useNavigate();

    function handleNavigateHome() {
        navigate("/")
    }

    function handleDetails() {
        navigate("/plans/1")
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
                <GoBack onClick={handleNavigateHome}/>
                <div className="title">
                    <h1>Planos de ensino para aprovação</h1>
                </div>
            </div>

            <main>
                <Plan onClick={handleDetails}>
                    <span>Plano de ensivo de Software Básico</span>
                    <span>
                        Aguardando análise
                        <BsCursorFill />
                    </span>
                </Plan>
            </main>
        </Container>
    )
}