import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-weight: 600;

    border: 0;
`