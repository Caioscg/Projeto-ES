import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate } from "react-router-dom";


export function PlanDetails() {
    const navigate = useNavigate();

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    function handlePlanChanges() {
        navigate("/plans/changes")
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
                    <h1>Submeter Plano de ensino</h1>
                </div>
            </div>

            <main>
                <textarea disabled>Plano de ensino escrito...</textarea>

                <div className="btns">
                    <Button title="Aprovar plano de ensino"/>
                    <Button title="Sugerir mudanças" onClick={handlePlanChanges}/>
                </div>
            </main>
        </Container>
    )
}