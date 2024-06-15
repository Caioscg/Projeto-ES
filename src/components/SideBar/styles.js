import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    grid-area: menu;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    margin-top: 24px;
    margin-bottom: 24px;

    border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
`