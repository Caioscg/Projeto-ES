import { Container, Menu } from "./styles";
import { Header } from "../../../components/Header"
import { Button } from "../../../components/Button"
import { Head } from "../../../components/Head"

export function Home() {
    return(
        <Container>
            <Header />
            <Menu>
                <div className="buttons">
                    <Button title="Criar Turmas"/>
                    <Button title="Semestre"/>
                </div>
            </Menu>
            <main>
                <div className="title">
                    <h1>Turmas do Semestre</h1>
                    <span>2023/1</span>
                </div>
                <Head />
            </main>
        </Container>
    )
}