import styled from 'styled-components';
import { PressStart2P } from '../CustomUI/Fonts';

const TYPES_BACKGROUND = {
    fire: 'rgb(255, 90, 90)',
    water: 'rgb(110, 110, 255)',
    normal: 'rgb(255, 247, 156)',
    fighting: 'rgb(255, 247, 156)',
    physical: 'rgb(255, 0, 0)',
    grass: 'rgb(115, 212, 115)',
    electric: 'rgb(243, 208, 37)',
    fairy: 'rgb(235, 143, 241)',
    ice: 'rgb(106, 216, 206)',
    psychic: 'rgb(130, 55, 130)'
}

export const CardContainer = styled.div`
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 42vh;
    background-color: ${props => TYPES_BACKGROUND[props.type]};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &:hover {
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
    }
`;

export const CardImageContainer = styled.div`
    margin: 10px;
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
`;

export const CardImage = styled.img`
    width: 100%;
    margin-top: 15%;
    cursor: pointer;
    &:hover {
        animation: MoveUpDown 0.5s linear infinite;
        position: relative;
        left: 0;
        bottom: 0;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
`;

export const PokeName = styled(PressStart2P)`
    font-size: 10px;
    margin-top: 15%;
    text-transform: capitalize;
`;

export const PokeSizes = styled.span`
    position: absolute;
    align-self: start;
    padding: 15px;
    font-size: 12px;
    color: black;
`;

export const PokePrice = styled.p`
    font-size: 12px;
    text-shadow: 0px 0px 1px #ffffff;
    color: black;
    font-family: 'Press Start 2P';
    margin-block-start: 0.5em;
`;

export const PokeInfo = styled.div`
    width: 70%;
    height: 60px;
`;
