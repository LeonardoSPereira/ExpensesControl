import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${ ({theme}) => theme.background3 };
    border-radius: 1.5rem;
    padding: 0 1.6rem;


    input {
        width: 100%;
        height: 4.8rem;
        background-color: ${ ({theme}) => theme.background3 };
        color: ${ ({theme}) => theme.text1 };
        font-size: 1.6rem;

        border: none;
        border-radius: 1.5rem;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${ ({theme}) => theme.colors.sage9 };

        }
    }

    svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${ ({theme}) => theme.text3 };
        
    }

`;