import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
`