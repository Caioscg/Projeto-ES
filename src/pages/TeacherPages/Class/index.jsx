import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { StudentSpan } from "../../../components/StudentSpan"

import { useNavigate } from "react-router-dom";

export function Class() {

    const navigate = useNavigate()

    function handleGoBack() {
        navigate(-1)
    }

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

            <div className="title">
                <h1>Turma Software Básico</h1>
            </div>

            <main>
                <div className="class">
                    <div className="infos">
                        <div>
                            <div className="time">
                                <p>Horário:</p>
                                <span>24M23</span>
                            </div>
                            <div className="classroom">
                                <p>Sala:</p>
                                <span>109/CAB-CAS</span>
                            </div>
                        </div>
                        <Button title="Submeter Plano de ensino"/>
                    </div>
                    <div className="students">
                        <div className="head">
                            <span>Alunos</span>
                            <span>Curso</span>
                        </div>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                        <StudentSpan name="Caio Souza" course="Ciência da Computação"/>
                    </div>
                </div>
            </main>
        </Container>
    )
}