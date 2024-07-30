import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { StudentSpan } from "../../../components/StudentSpan"
import { GoBack } from "../../../components/GoBack"

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../../services/api";

export function Class() {
    const [ classe, setClasse ] = useState("");

    const params = useParams()
    const navigate = useNavigate()

    function handleGoBack() {
        navigate(-1)
    }

    function handleGoPlan() {
        navigate(`/plan/${params.id}`)
    }

    useEffect(() => {
        async function FetchClass() {
            const response = await api.get(`/class/details/${params.id}`)
            setClasse(response.data.classe[0])
        }
        FetchClass()
    }, [])

    return(
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Turmas" onClick={handleGoBack}/>
                    <Button title="Mensagens"/>
                    <Button title="Avaliação padronizada"/>
                    <Button title="Pesquisa de satisfação"/>
                </div>
            </Menu>

            <div className="head">
                <GoBack onClick={handleGoBack}/>
                <div className="title">
                    <h1>{classe.discipline}</h1>
                </div>
            </div>

            <main>
                <div className="class">
                    <div className="infos">
                        <div className="time">
                            <p>Horário:</p>
                            <span>{classe.time}</span>
                        </div>
                        <div className="classroom">
                            <p>Sala:</p>
                            <span>{classe.classroom}</span>
                        </div>
                        <div className="teacher">
                            <p>Professor:</p>
                            <span>{classe.teacher}</span>
                        </div>
                        <Button title="Plano de ensino" onClick={handleGoPlan}/>
                    </div>
                    <div className="students">
                        <div className="st-head">
                            <span>Alunos</span>
                            <span>Curso</span>
                        </div>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="João Miguel" course="Ciência da Computação"/>
                        <StudentSpan name="Maria Silva" course="Ciência da Computação"/>
                        <StudentSpan name="Pedro Garcia" course="Inteligência Artificial"/>
                        <StudentSpan name="Paula Lopes" course="Ciência da Computação"/>
                        <StudentSpan name="Davi Lucas" course="Ciência da Computação"/>
                        <StudentSpan name="Gabriel Martins" course="Ciência da Computação"/>
                        <StudentSpan name="Anderson Meidas" course="Ciência da Computação"/>
                        <StudentSpan name="Vanessa Lunardi" course="Inteligência Artificial"/>
                        <StudentSpan name="Fabiano Filho" course="Ciência da Computação"/>
                        <StudentSpan name="Letícia Alvarenga" course="Engenharia de Software"/>
                        <StudentSpan name="Gustavo Henrique" course="Ciência da Computação"/>
                        <StudentSpan name="José Ferreira" course="Ciência da Computação"/>
                        <StudentSpan name="Gabriela Sousa" course="Ciência da Computação"/>
                    </div>
                </div>
            </main>
        </Container>
    )
}