import { Container } from "./styles";

export function Class({ data, ...rest }) {
    return(
        <Container {...rest}>
            <span>{data.discipline}</span>
            <span>{data.time}</span>
            <span>{data.classroom}</span>
            <span>{data.teacher}</span>
        </Container>
    )
}