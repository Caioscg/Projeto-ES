import { Container } from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";

export function GoBack({ OnClick, ...rest }) {
    return(
        <Container OnClick={OnClick} {...rest} >
            <IoMdArrowRoundBack />
            <span>Voltar</span>
        </Container>
    )
}