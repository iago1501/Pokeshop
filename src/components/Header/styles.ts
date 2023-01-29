import styled from 'styled-components';
import { PokeFontHollow } from '../CustomUI/Fonts';

export const CustomPokeFont = styled(PokeFontHollow)`
    cursor: pointer;
    margin-left: 50px;
    @media (max-width: 700px) {
        font-size: 15px;
        white-space: nowrap;
        margin-left: 10px;
        margin-right: 10px;
    }
`;
