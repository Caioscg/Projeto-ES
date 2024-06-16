import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin: 86px 108px 36px;
    padding: 0 16px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    span {
        width: 100%;
        text-align: left;
    }
`