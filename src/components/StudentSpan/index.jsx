import { Container } from "./styles";

export function StudentSpan({ name, course, ...rest }) {
    return(
        <Container { ...rest }>
            <span>{name}</span>
            <span>{course}</span>
        </Container>
    )
}