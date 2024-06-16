import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;
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