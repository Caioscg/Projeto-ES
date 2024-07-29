import { Container, Menu, Plan } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { BsCursorFill } from "react-icons/bs"

import { api } from "../../../services/api";
import { useEffect } from "react";


export function Plans() {
    const [ plans, setPlans ] = useState([])

    const navigate = useNavigate();

    function handleNavigateHome() {
        navigate("/")
    }

    function handleDetails(plan_id) {
        navigate(`/plans/${plan_id}`)
    }

    useEffect(() => {
        async function FetchPlans() {
            const response = await api.get(`/plan`)
            setPlans(response.data.plans)
        }

        FetchPlans()
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
                <GoBack onClick={handleNavigateHome}/>
                <div className="title">
                    <h1>Planos de ensino para aprovação</h1>
                </div>
            </div>

            <main>
                {
                    plans.map(plan => (
                        <Plan onClick={() => handleDetails(plan.id)}>
                            <span>Plano de ensivo de {plan.class_name}</span>
                            <span>
                                Aguardando análise
                                <BsCursorFill />
                            </span>
                        </Plan>
                    ))
                }
            </main>
        </Container>
    )
}