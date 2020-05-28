import styled from 'styled-components';
import { PressStart2P } from '../CustomUI/Fonts';

export const CardContainer = styled.div`
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 42vh;
    background-color: rgb(255, 90, 90);
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

export const BadgeContainer = styled.a`
    width: 25%;
    font-size: 0.9em;
    white-space: nowrap;
    margin-top: 10px;
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-around;
`;

export const PokeName = styled(PressStart2P)`
    font-size: 10px;
    margin-top: 15%;
`;

export const PokePrice = styled.span`
    position: absolute;
    align-self: start;
    padding: 10px;
    font-size: 15px;
    text-shadow: 1px 1px 2px #ffffff;
    color: black;
    font-family: 'Press Start 2P';
`;
export const PokeInfo = styled.div`
    width: 70%;
    height: 60px;
`;
