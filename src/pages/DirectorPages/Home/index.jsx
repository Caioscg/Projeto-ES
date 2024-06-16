import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { Head } from "../../../components/Head"
import { Class } from "../../../components/Class"

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../../services/api";

export function Home() {
    const [ classes, setClasses ] = useState([])
    const navigate = useNavigate()

    function handleNavigateClass() {
        navigate("/createclass")
    }

    useEffect(() => {
        async function FetchClasses() {
            const response = await api.get("/class")
            //const classesData = response.data.classes
            //setClasses(classesData.map((classe) => classe))
            setClasses(response.data.classes)
        }
        FetchClasses()
    }, [])

    return(
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Criar Turmas" onClick={handleNavigateClass}/>
                    <Button title="Semestre"/>
                </div>
            </Menu>
            <div className="title">
                <h1>Turmas do Semestre</h1>
                <span>2023/1</span>
            </div>
            <main>
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
            </main>
        </Container>
    )
}