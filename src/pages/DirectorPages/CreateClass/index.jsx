import { Container, Menu, Form } from "./styles";

import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { GoBack } from "../../../components/GoBack"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners"
 
import { api } from "../../../services/api";

export function CreateClass() {
    const [ time, setTime ] = useState("")
    const [ classroom, setClassroom ] = useState("")
    const [ discipline, setDiscipline ] = useState("")
    const [ teacher, setTeacher ] = useState("")
    const [ teachers, setTeachers ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    async function handleCreateClass() {
        if (!discipline) return alert("Selecione uma disciplina para a turma!")  //tratamento de exceções

        if (!teacher) return alert("Escolha um professor para a turma!")

        if (!time) return alert("Defina um horário para a turma!")

        if (!classroom) return alert("Escolha um local para a turma!")
        
        setLoading(true)

        try {
            await api.post("/class", { discipline, teacher, time, classroom })
            alert("Turma criada com sucesso!")
            navigate(-1)
        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar turma.")
            }
        }

        setLoading(false)
    }

    useEffect(() => {
        async function FetchTeachers() {
            setLoading(true)

            const response = await api.get("/teacher")
            setTeachers(response.data.teachers)
            
            setLoading(false)
        }
        FetchTeachers()
    }, [])

    function handleNavigateClass() {
        navigate("/")
    }

    return(
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Turmas" onClick={handleNavigateClass}/>
                    <Button title="Semestre"/>
                </div>
            </Menu>
            <div className="head">
                <GoBack onClick={handleNavigateClass}/>
                <div className="title">
                    <h1>Criar Turma do Semestre</h1>
                    <span>2023/1</span>
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
                <Form>
                    <div className="optgroups">
                        <div className="disciplina">
                            <label htmlFor="disciplina">Disciplina</label>
                            <select id="disciplina" onChange={e => setDiscipline(e.target.value)}>
                                <optgroup>
                                    <option className="label" selected disabled>Selecione uma matéria:</option>
                                    <option>Cálculo 1A</option>
                                    <option>Cálculo 2A</option>
                                    <option>Engenharia de Software</option>
                                    <option>Software Básico</option>
                                    <option>Arquitetura de Computadores</option>
                                    <option>Álgebra linear</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className="prof">
                            <label htmlFor="prof">Professor</label>
                            <select id="prof" onChange={e => setTeacher(e.target.value)}>
                                <optgroup>
                                    <option className="label" selected disabled>Escolha um professor:</option>
                                    {
                                        teachers.map(teacher => (
                                            <option key={String(teacher.id)}>{teacher.name}</option>
                                        ))
                                    }
                                </optgroup>
                            </select>
                        </div>

                    </div>
                    <div className="inputs">
                        <div className="time">
                            <label htmlFor="time">Horário</label>
                            <Input 
                                placeholder="Ex: 24M23" 
                                type="text" 
                                id="time"
                                onChange={e => setTime(e.target.value)}
                            />
                        </div>
                        <div className="place">
                            <label htmlFor="place">Local</label>
                            <Input 
                                placeholder="Ex: 203/CAB-CAS" 
                                type="text" 
                                id="place"
                                onChange={e => setClassroom(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button title="Criar turma" onClick={handleCreateClass}/>
                </Form>
            }
        </Container>
    )
}