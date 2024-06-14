import { Container } from "./styles";

export function Button({ title, OnClick, ...rest }) {
    return(
        <Container
            type="button"
            OnClick={OnClick}
            {...rest}
        >
            {title}
        </Container>
    )
}