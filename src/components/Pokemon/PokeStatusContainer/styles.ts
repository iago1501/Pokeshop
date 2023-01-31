import styled from 'styled-components';

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
    margin: 2rem 2rem;
    justify-content: center;
`;

export const PokeStatus = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 700px) {
        grid-template-columns: 100%;
    }
    margin: 10px;
    & > h3 {
        font-size: 0.8rem;
        text-align: right;
        text-transform: uppercase;
        @media (max-width: 700px) {
            text-align: left;
        }
    }
    & > progress {
        width: 50vw;
        border: 4px solid #fff;
    }
`;
