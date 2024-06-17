import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 156px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    > img {
        width: 92px;
        cursor: pointer;

        transition: filter 700ms;

        &:hover {
            filter: drop-shadow(0 0 1.5em ${({ theme }) => theme.COLORS.WHITE_200});
        }
    }

    > div {
        display: flex;
        align-items: center;
        gap: 32px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_400};


         span {
            font-size: 22px;
            font-weight: 500;
         }
         svg {
            cursor: pointer;
         }
    }
`