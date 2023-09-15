import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${ ({theme}) => theme.background3 };
    padding: 2rem;
    border-radius: 1rem;
    position: relative;

    h3 {
        font-size: 2.2rem;
        color: ${ ({theme}) => theme.text1 };
        margin-bottom: 1rem;
    }

    span {
        display: block;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.text2 };
    }

    p {
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.text2 };
        margin-top: 1rem;
    }

    .menu {
        width: fit-content;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    h5 {
        margin-top: 1rem;
        font-size: 1.4rem;
        background-color: ${ ({theme}) => theme.text8 };
        color: ${ ({theme}) => theme.text1 };
        width: fit-content;
        padding: .6rem;
        border-radius: 1rem;
    }


`;