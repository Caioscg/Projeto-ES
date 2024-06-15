import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 56px 108px;
    padding: 0 16px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`