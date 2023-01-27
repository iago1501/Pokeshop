import styled from 'styled-components'

export const PokeFont = styled.h3`
    color: ${props => props.color};
    display: block;
    margin-block-end: 0px;
    margin-block-start: 0px;
`;

export const PokeFontSolid = styled(PokeFont)`
    font-family: 'Pokemon Solid';

`;
export const PokeFontHollow = styled(PokeFont)`
    font-family: 'Pokemon Hollow';
`;

export const PressStart2P = styled(PokeFont)`
    font-family: 'Press Start 2P';
`;
