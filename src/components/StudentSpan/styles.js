import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 0 4px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    min-height: 44px;

    span {
        width: 100%;
        text-align: left;
    }
`