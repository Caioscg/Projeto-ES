import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { Head } from "../../../components/Head"
import { Class } from "../../../components/Class"

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners"

import { api } from "../../../services/api";

export function Home() {
    const [ classes, setClasses ] = useState([])
    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    function handleNavigateClass() {
        navigate("/createclass")
    }

    function navigatePlan() {
        navigate("/plans")
    }

    useEffect(() => {
        async function FetchClasses() {
            setLoading(true)

            const response = await api.get("/class")
            setClasses(response.data.classes)

            setLoading(false)
        }
        FetchClasses()
    }, [])

    return(
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Criar Turmas" onClick={handleNavigateClass}/>
                    <Button title="Plano de ensino" onClick={navigatePlan}/>
                </div>
            </Menu>
            <div className="title">
                <h1>Turmas do Semestre</h1>
                <span>2023/1</span>
            </div>
            <main>
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
                    <div className="classes">
                    <Head />
                    {
                        classes.map(classe => (
                            <Class
                                key={String(classe.id)}
                                data={classe}
                            />
                        ))
                    } 
                    </div>
                }
            </main>
        </Container>
    )
}