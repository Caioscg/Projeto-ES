import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 116px 120px auto;
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
        border: 3px solid ${ ({ theme }) => theme.COLORS.BACKGROUND_200};
    }


    .head {
        grid-area: title;

        display: flex;
        flex-direction: column;
        gap: 24px;

        margin: 48px 150px 0;
        .title {
                border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    
                h1 {
                    font-size: 36px;
                }
            }
    }

    > main {
        grid-area: content;

        margin: 70px 200px 50px;

        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        gap: 32px;

        textarea {
            width: 100%;
            height: 80%;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

            resize: none;

            padding: 12px;
            border-radius: 10px;

            font-size: 18px;
        }

        .btns {
            display: flex;
            gap: 32px;
        }
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