import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: ${({ theme }) => theme.COLORS.BACKGROUND_200};;
        border: 0;
        border-radius: 10px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
    
    > svg {
        margin-left: 16px; 
    }
`