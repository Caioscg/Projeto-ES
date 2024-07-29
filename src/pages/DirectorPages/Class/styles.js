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

        margin: 70px 270px 100px;
        padding-bottom: 50px;

        overflow-x: hidden; 

        .class {
            display: flex;
            justify-content: space-between;
            height: 100%;
        }

        .infos {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                font-size: 18px;
                font-weight: 600;

                padding: 0 12px 0 2px;
                width: fit-content;

                margin-bottom: 8px;

                border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
            }
        }

        .students {
            .st-head {
                display: flex;
                align-items: center;

                padding: 0 4px;

                border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.GRAY_100};

                span {
                    width: 100%;
                    text-align: left;
                }
            }
            overflow-y: scroll;
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