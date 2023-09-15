import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    aside {
        width: 100%;
        height: 100vh;
        max-width: 35%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        gap: .8rem;
        padding: 0 2.4rem;

        h1 {
            text-align: center;
            font-size: 4.8rem;
            color: ${ ({theme}) => theme.text8 };
        }

        span {
            text-align: center;
            font-size: 1.4rem;
            color: ${ ({theme}) => theme.text7 };
        }

        p {
            text-align: center;
            font-size: 2.4rem;
            color: ${ ({theme}) => theme.text8 };
            margin-block: 3rem;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    a {
        margin-top: 1.6rem;
        font-size: 1.4rem;
        color: ${ ({theme}) => theme.text6 };
    }
`;

export const Background = styled.div`
    flex: 1;
    width: 100%;
    height: 100vh;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.4);
`;
