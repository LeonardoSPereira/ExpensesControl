import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 12rem;
    resize: none;
    background-color: ${ ({theme}) => theme.background3 };
    color: ${ ({theme}) => theme.text1 };
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    padding: .5rem 1.6rem;


    border: none;
    border-radius: 1.5rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${ ({theme}) => theme.colors.sage9 };

    }
`;