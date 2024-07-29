import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners"

import { api } from "../../../services/api";


export function Plan() {
    const [ plan, setPlan ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ loading, setLoading ] = useState(false)
    
    const params = useParams()
    const navigate = useNavigate();

    function handleNavigateClass() {
        navigate(-1)
    }

    function handleNavigateHome() {
        navigate("/")
    }

    function handleSendPlan() {
        if (!description) return alert("Escreva algo no plano de ensino!")  //tratamento de exceções

        try {
            setLoading(true)

            api.patch(`/plan/${params.id}`, { description })
            alert("Plano criado com sucesso!")
            handleNavigateClass()

            setLoading(false)
        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar o plano.")
            }
        }
    }

    useEffect(() => {
        async function FetchPlan() {
            setLoading(true)

            const response = await api.get(`/plan/${params.id}`)
            setPlan(response.data.plan[0])

            setLoading(false)
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

            {
                loading ?
                <PropagateLoader 
                    color={"#254336"}
                    loading={loading}
                    size={32}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="spinner"
                />
                :
                <main>
                    {
                        plan.description ? <textarea value={plan.description} disabled></textarea> 
                        : plan.plan_changes ? <textarea placeholder={"Mensagem de diretor: " + plan.plan_changes} onChange={e => setDescription(e.target.value)}></textarea> 
                        : <textarea placeholder="Escreva aqui o plano de ensino..."  onChange={e => setDescription(e.target.value)}></textarea>
                    }

                    {
                        plan.description ? "" : <Button title="Enviar" onClick={handleSendPlan}/>
                    }
                </main>
            }
        </Container>
    )
}