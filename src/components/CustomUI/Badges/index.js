import styled from 'styled-components';
import { PressStart2P } from '../Fonts';

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
