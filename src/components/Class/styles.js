import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin: 6px 108px 0;
    padding: 18px 16px 0;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};;

    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    cursor: pointer;
    transition: filter .4s;

    &:hover {
        filter: brightness(0.90);
    }

    span {
        width: 100%;
        text-align: left;
    }
`