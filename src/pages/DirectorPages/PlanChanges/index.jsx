import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../../services/api";
import { useState } from "react";

export function PlanChanges() {
    const [ changes, setChanges ] = useState("")

    const params = useParams()
    const navigate = useNavigate();

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    async function handleChanges() {
        if (!changes) return alert("Sugira mudanças no plano de ensino!")  //tratamento de exceções

        try {
            await api.put(`/plan/${params.id}`, { plan_changes: changes })
            alert("Modificações sugeridas com sucesso!")
            handleNavigateHome()

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar o plano.")
            }
        }
    }

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
                    <h1>Sugerir mudanças no Plano de ensino</h1>
                </div>
            </div>

            <main>
                <textarea placeholder="Escreva aqui as mudanças sugeridas..." onChange={e => setChanges(e.target.value)}></textarea>

                <Button title="Enviar" onClick={handleChanges}/>
            </main>
        </Container>
    )
}