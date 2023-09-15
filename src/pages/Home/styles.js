import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 30rem auto;
    grid-template-rows: 10rem 10rem auto 7rem;
    grid-template-areas: 
    "brand header"
    "resume filter"
    "resume content"
    "newexpense content";

`;

export const Brand = styled.div`
    grid-area: brand;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.4rem;
    background-color: ${ ({theme}) => theme.background1 };
    border-bottom: 1px solid ${ ({theme}) => theme.colors.sage11 };

    h1 {
        color: ${ ({theme}) => theme.text8 };
        font-size: 3.2rem;
    }
`;

export const Resume = styled.div`
    grid-area: resume;
    background-color: ${ ({theme}) => theme.background1 };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    

    h2 {
        font-size: 2.4rem;
        color: ${ ({theme}) => theme.text7 };
    }

    ul {
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: ${ ({theme}) => theme.text3 };
    }

    h3 {
        font-size: 2rem;
        color: ${ ({theme}) => theme.text7 };
    }

    a {
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.text6 };
    }
`;

export const Filter = styled.div`
    grid-area: filter;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem; 
    font-size: 2rem;
    color: ${ ({theme}) => theme.text1 };


`;

export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 0 4rem;
    overflow-y: auto;

`;

export const NewExpense = styled.a`
    grid-area: newexpense;
    background-color: ${ ({theme}) => theme.text6 };
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 2rem;
    color: ${ ({theme}) => theme.text1 };


    svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`;


