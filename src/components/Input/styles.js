import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE_200};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_300};

    border-radius: 6px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_400};
        background: ${({ theme }) => theme.COLORS.WHITE_200};;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
    
    > svg {
        margin-left: 16px; 
    }
`