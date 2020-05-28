import styled from 'styled-components';


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
