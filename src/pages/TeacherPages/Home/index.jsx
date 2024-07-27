import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { Head } from "../../../components/Head"
import { Class } from "../../../components/Class"

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners"

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

export function Home() {
    const [ classes, setClasses ] = useState([])
    const [ loading, setLoading ] = useState(false)

    const { user } = useAuth()

    const navigate = useNavigate()

    function navigateClass(classe_id) {
        navigate(`/class/${classe_id}`)
    }

    useEffect(() => {
        async function FetchClasses() {
            setLoading(true)

            const response = await api.get(`/class/${user.id}`)
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
                    <Button title="Mensagens"/>
                    <Button title="Avaliação padronizada"/>
                    <Button title="Pesquisa de satisfação"/>
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
                                onClick={() => navigateClass(classe.id)}
                            />
                        ))
                    } 
                    </div>
                }
            </main>
        </Container>
    )
}