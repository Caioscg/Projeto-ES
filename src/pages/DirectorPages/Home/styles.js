import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header header"
    "menu content";

    > main {
        grid-area: content;

        padding: 88px 150px;

        .title {
            display: flex;
            align-items: end;
            gap: 10px;

            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

            h1 {
                font-size: 36px;
            }

            span {
                margin-bottom: 5px;
                font-weight: 700;
            }
        }
    }
`

export const Menu = styled.div`
    width: 100%;

    grid-area: menu;

    margin-top: 24px;
    margin-bottom: 24px;
    padding: 24px;

    border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    .buttons {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;

        margin-top: 48px;
    }
`