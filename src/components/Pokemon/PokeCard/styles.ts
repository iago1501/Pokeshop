import styled from 'styled-components';
import { PressStart2P } from '../../CustomUI/Fonts';

const TYPES_BACKGROUND = {
    fire: 'rgb(255, 90, 90)',
    water: 'rgb(110, 110, 255)',
    normal: 'rgb(177, 175, 154)',
    fighting: 'rgb(255, 247, 156)',
    physical: 'rgb(255, 0, 0)',
    grass: 'rgb(115, 212, 115)',
    electric: 'rgb(243, 208, 37)',
    fairy: 'rgb(235, 143, 241)',
    ice: 'rgb(104,144,240)',
    psychic: 'rgb(130, 55, 130)',
};

type CardContainerProps = {
    type: string;
};

export const CardContainer = styled.div<CardContainerProps>`
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);
    width: 100%;
    height: auto;
    min-height: 300px;
    background-color: ${(props) =>
        TYPES_BACKGROUND[props.type as keyof typeof TYPES_BACKGROUND]};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &:hover {
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 700px) {
        button {
            margin-bottom: 1rem;
        }
    }
`;

export const CardImageContainer = styled.div`
    margin: 10px;
    height: 150px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
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
    font-size: 0.7rem;
    margin-top: 1rem;
    text-transform: capitalize;
`;

export const PokeSizes = styled.div`
    position: absolute;
    align-self: start;
    padding: 15px;
    color: black;

    span {
        font-size: 0.8rem;
        display: block;
    }
`;

type FavoriteProps = {
    starred: string;
};

const starredValues = {
    starred: {
        bgColor: 'yellow',
        scale: 1.15,
    },
    notStarred: {
        bgColor: 'rgba(255, 255, 255, 0.4)',
        scale: 1,
    },
};

export const Favorite = styled.a<FavoriteProps>`
    position: absolute;
    align-self: end;
    padding: 15px;
    cursor: pointer;

    svg {
        stroke: black;
        fill: ${({ starred }) =>
            starredValues[starred as keyof typeof starredValues].bgColor};
        scale: ${({ starred }) =>
            starredValues[starred as keyof typeof starredValues].scale};
        transition: fill 0.2s, transform 0.5s;
    }

    svg:hover {
        fill: rgba(255, 255, 255, 0.8);
        transform: scale(1.15) rotate(144deg);
    }
`;

export const PokePrice = styled.p`
    font-size: 0.8rem;
    color: black;
    font-family: 'Press Start 2P';
    margin: 0.5rem 0rem;
`;

export const PokeInfo = styled.div`
    width: 70%;
    height: 60px;
`;

export const ButtonContainer = styled.div`
    @media (max-width: 700px) {
        margin-top: 2vh;
    }
`;
