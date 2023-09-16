import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Form = styled.form`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 50rem;
    margin: 4rem auto;
    gap: 2rem;
    
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
        

        h2 {
            font-size: 3.2rem;
            color: ${ ({theme}) => theme.text1 };
        }

        a {
            font-size: 1.6rem;
            color: ${ ({theme}) => theme.text4 };
        }

        h3 {
            font-size: 2.4rem;
            color: ${ ({theme}) => theme.text3 };
        }
    }
`;
