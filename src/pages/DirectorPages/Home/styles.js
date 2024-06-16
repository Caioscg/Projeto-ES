import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 116px 180px auto;
    grid-template-areas:
    "header header"
    "menu title"
    "menu content";

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-block: 12px;
        margin-bottom: 40px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
        border-radius: 100vw;
        border: 3px solid ${ ({ theme }) => theme.COLORS.BACKGROUND_100};
    }

    .title {
            grid-area: title;

            display: flex;
            align-items: end;
            gap: 10px;
            margin: 0 150px;

            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

            h1 {
                font-size: 36px;
            }

            span {
                margin-bottom: 5px;
                font-weight: 700;
            }
        }

    > main {
        grid-area: content;

        margin: 0 150px;
        padding-bottom: 50px;

        overflow-x: auto;
    }
`

export const Menu = styled.div`
    width: 100%;

    grid-area: menu;

    margin-top: 24px;
    padding: 24px;

    border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

    .buttons {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 48px;

        margin-top: 48px;
    }
`