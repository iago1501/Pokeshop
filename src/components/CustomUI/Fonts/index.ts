import styled from 'styled-components';

export type PokeFontProps = {
    color?: string;
};

export const PokeFont = styled.h3<PokeFontProps>`
    color: ${(props) => props.color};
    display: block;
    margin-block-end: 0px;
    margin-block-start: 0px;
`;

export const PokeFontParagraph = styled.p<PokeFontProps>`
    color: ${(props) => props.color};
    display: block;
    margin-block-end: 0px;
    margin-block-start: 0px;
`;

export const PokeFontSpan = styled.span<PokeFontProps>`
    color: ${(props) => props.color};
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

export const PressStart2PParagraph = styled(PokeFontParagraph)`
    font-family: 'Press Start 2P';
`;

export const PressStart2PSpan = styled(PokeFontSpan)`
    font-family: 'Press Start 2P';
`;
