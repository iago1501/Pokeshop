import React from 'react';
import styled from 'styled-components';
import { PressStart2P } from '../CustomUI/Fonts';

export const CardContainer = styled.div`
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 45vh;
    background-color: rgb(255, 90, 90);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &:hover {
        -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
    }
`;

export const CardImageContainer = styled.div`
    margin: 10px;
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    // &::after {
    //     content: '#6';
    //     position: absolute;
    //     margin-left: 0px;
    // }
`;

export const CardImage = styled.img`
    width: 100%;
    margin-top: 15%;
    cursor: pointer;
    &:hover{
        animation: MoveUpDown 1s linear infinite;
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

export const Badge = styled(PressStart2P)`
    text-shadow: rgb(0, 0, 0) 3px 3px 0px, rgb(0, 0, 0) -1px -1px 0px,
        rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px,
        rgb(0, 0, 0) 1px 1px 0px;
    color: rgb(236, 243, 253);
    background-color: rgb(165, 175, 236);
    box-shadow: rgb(165, 175, 236) 0px 0.5em, rgb(165, 175, 236) 0px -0.5em,
        rgb(165, 175, 236) 0.5em 0px, rgb(165, 175, 236) -0.5em 0px;
    text-align: center;
    font-size: 8px;
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

export const EightbitButton = styled.a`
    background: #00ce00;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 12px;
    padding: 10px;
    font-family: 'Press Start 2P', cursive;
    text-decoration: none;
    color: white;
    box-shadow: inset -4px -4px 0px 0px #4aa52e;
    cursor: pointer;
    margin-top: 10%;

    &:hover,
    &:focus {
        background: #76c442;
        box-shadow: inset -6px -6px 0px 0px #4aa52e;
    }
    &:active {
        box-shadow: inset 4px 4px 0px 0px #4aa52e;
    }
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }
    &::before {
        top: -6px;
        left: 0;
        border-top: 6px black solid;
        border-bottom: 6px black solid;
    }
    &::after {
        left: -6px;
        top: 0;
        border-left: 6px black solid;
        border-right: 6px black solid;
    }
`;

export const PokePrice = styled.span`
    position: absolute;
    align-self: start;
    padding: 10px;
    font-size: 15px;
    text-shadow: 1px 1px 2px #ffffff;
    color: black;
    font-family: 'Press Start 2P';

`
export const PokeInfo = styled.div`
    width: 70%;
    height: 60px;
`

const PokeCard = () => (
    <CardContainer>
        <PokePrice>50R$</PokePrice>
        <CardImageContainer>
            <CardImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
        </CardImageContainer>
        <InfoContainer>
            <PokeInfo>
                <PokeName>#6 Charizard</PokeName>
                <span>1.7m | 90.5kg</span>
            </PokeInfo>
            <BadgeContainer>
                <Badge color={'rgb(165, 175, 236)'}>Flying</Badge>
                <Badge color={'rgb(230, 29, 29)'}>Fire</Badge>
            </BadgeContainer>
        </InfoContainer>
        <EightbitButton>Add to Cart</EightbitButton>
    </CardContainer>
);

export default PokeCard;
