import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../../services/api";


export function Plan() {
    const [ plan, setPlan ] = useState("")
    
    const params = useParams()
    const navigate = useNavigate();

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    useEffect(() => {
        async function FetchPlan() {
            const response = await api.get(`/plan/${params.id}`)
            setPlan(response.data.plan[0])
        }
        FetchPlan()
    }, [])

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
                    <h1>Plano de ensino</h1>
                </div>
            </div>

            <main>
                {
                    plan.description ? <textarea value={plan.description} disabled></textarea> 
                    : plan.plan_changes ? <textarea value={plan.plan_changes}></textarea> 
                    : <textarea placeholder="Escreva aqui o plano de ensino..."></textarea>
                }

                <Button title="Enviar"/>
            </main>
        </Container>
    )
}