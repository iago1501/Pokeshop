import styled from 'styled-components';
import { PressStart2P } from '../CustomUI/Fonts';

export const PokemonCartImage = styled.img`
    height: 50px;
`;

export const PokemonCartContainer = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    justify-content: space-between;
`;

export const PokemonCartInfos = styled.div`
    text-transform: capitalize;
    align-self: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    & > span {
        font-size: 12px;
        font-weight: 100;
        margin-top: 3px;
    }
    & > p {
        font-size: 15px;
        text-align: left;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
`;

export const PokemonCartName = styled(PressStart2P)`
    font-size: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 8px;
    & > div {
        cursor: pointer;
        border: 1px solid #000;
        padding: 2px;
    }
    & > h3 {
        padding: 5px;
    }
`;
