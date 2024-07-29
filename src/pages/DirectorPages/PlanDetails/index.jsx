import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../../services/api";


export function PlanDetails() {
    const [ plan, setPlan ] = useState("")
    const navigate = useNavigate();
    const params = useParams()

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    function handlePlanChanges() {
        navigate("/plans/changes")
    }

    async function handleAprovePlan() {
        await api.put(`/plan/${params.id}`, { plan_status: true })
        alert("Plano aprovado!")
        handleNavigateHome()
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
                </div>
            </Menu>

            <div className="head">
                <GoBack onClick={handleNavigateClass}/>
                <div className="title">
                    <h1>Submeter Plano de ensino</h1>
                </div>
            </div>

            <main>
                <textarea value={plan.description} disabled></textarea>

                <div className="btns">
                    <Button title="Aprovar plano de ensino" onClick={handleAprovePlan}/>
                    <Button title="Sugerir mudanças" onClick={handlePlanChanges}/>
                </div>
            </main>
        </Container>
    )
}