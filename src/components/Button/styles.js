import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 1.5rem;
    border: none;
    background-color: ${ ({theme}) => theme.text6 };
    color: ${ ({theme}) => theme.text1 };
    font-size: 1.6rem;

    svg {
        width: 2.4rem;
        height: 2.4rem;
        font-weight: 700;
    }


`;