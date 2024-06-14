import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    > img {
        width: 267px;
    }
`

export const Form = styled.form`
    width: 450px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        text-align: center;
    }

    .inputs {
        label {
            font-weight: 600;
        }
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`