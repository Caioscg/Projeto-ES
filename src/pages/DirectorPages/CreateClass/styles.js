import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 116px 130px auto;
    grid-template-areas:
    "header header"
    "menu title"
    "menu content";

    .head {
        grid-area: title;

        display: flex;
        flex-direction: column;
        gap: 24px;

        margin: 68px 150px 0;
    }
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
`

export const Form = styled.form`
    grid-area: content;

    margin: 32px clamp(80px, 50px + 15vw, 350px);;
    padding-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
        text-align: center;
    }

    label {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .optgroups {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;

            select {
                font-size: 18px;
                line-height: 26px;
                min-width: 300px;

                appearance: none;
                -webkit-appearance: none;

                background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-position: right 22px, top center;

                padding: 12px;

                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
                color: ${({ theme }) => theme.COLORS.GRAY_400};
                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
                border-radius: 10px;
                outline: 0;
                
            }
        }
    }

    .inputs {
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
            color: ${({ theme }) => theme.COLORS.GRAY_400};
            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

            font-size: 18px;
            line-height: 26px;
            font-weight: 500;

            min-width: 300px;
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