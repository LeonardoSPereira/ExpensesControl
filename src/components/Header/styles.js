import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${ ({theme}) => theme.colors.sage11 };;
    padding: 0 4rem;
    grid-area: header;
    

    svg {
        width: 3.6rem;
        height: 3.6rem;
        color: ${ ({theme}) => theme.text4 };
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: 2px solid ${ ({theme}) => theme.text5 };
    }

    span {
        font-size: 1.4rem;
        color: ${ ({theme}) => theme.colors.sage9 };
    }

    p {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.colors.sage2 };
    }
`;