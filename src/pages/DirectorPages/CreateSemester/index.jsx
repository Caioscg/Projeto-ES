import { Container } from "./styles";

export function CreateSemester() {
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
        </Container>
    )
}