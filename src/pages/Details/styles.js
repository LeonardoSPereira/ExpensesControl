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

export const Content = styled.div`
    grid-area: content;
    
    .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4rem 10rem;

        h2 {
            font-size: 3.2rem;
            color: ${ ({theme}) => theme.text1 };
        }

        a {
            font-size: 1.6rem;
            color: ${ ({theme}) => theme.text4 };
        }

    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .stats {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            .setembro, .agosto, ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: .8rem;
            }

            h3 {
                font-size: 2.4rem;
                color: ${ ({theme}) => theme.text7 };
            }

            ul {
                list-style: inside;
                gap: .4rem;
                font-size: 1.6rem;
                color: ${ ({theme}) => theme.text3 };
            }

            h4 {
                font-size: 1.8rem;
                color: ${ ({theme}) => theme.text8 };
            }
        }

    }

`;