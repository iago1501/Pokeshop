import styled from 'styled-components';
import { PressStart2P, PokeFontProps } from '../Fonts';

const theme = {
    normal: 'rgb(165, 175, 236)',
    fire: 'rgb(171, 0, 0)',
    rock: 'rgb(184, 160, 56)',
    flying: 'rgb(168, 144, 240)',
    dark: 'rgb(112, 88, 72)',
    fighting: 'rgb(192, 48, 40)',
    ground: 'rgb(224, 192, 104)',
    steel: 'rgb(184, 184, 208)',
    water: 'rgb(104, 144, 240)',
    poison: 'rgb(160, 64, 160)',
    electric: 'rgb(248, 208, 48)',
    grass: 'rgb(120, 200, 80)',
    ice: 'rgb(152, 216, 216)',
    bug: 'rgb(168, 184, 32)',
    psychic: 'rgb(248, 88, 136)',
    dragon: 'rgb(112, 56, 248)',
    fairy: 'rgb(255, 183, 250)',
    ghost: 'rgb(112, 88, 152)',
};

interface BadgeProps extends PokeFontProps {
    width?: string;
}

export const Badge = styled(PressStart2P)<BadgeProps>`
    text-align: center;
    font-size: 0.5rem;
    margin-top: 0.875rem;
    width: ${(props) => (props.width ? props.width : 'auto')};
    text-transform: capitalize;
    text-shadow: rgb(0, 0, 0) 3px 3px 0px, rgb(0, 0, 0) -1px -1px 0px,
        rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px,
        rgb(0, 0, 0) 1px 1px 0px;
    color: rgb(236, 243, 253);
    background-color: ${(props) => theme[props.color as keyof typeof theme]};
    box-shadow: ${(props) => theme[props.color as keyof typeof theme]} 0px 0.5em,
        ${(props) => theme[props.color as keyof typeof theme]} 0px -0.5em,
        ${(props) => theme[props.color as keyof typeof theme]} 0.5em 0px,
        ${(props) => theme[props.color as keyof typeof theme]} -0.5em 0px;
`;
